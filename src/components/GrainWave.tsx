"use client";

import { useEffect, useRef } from "react";

/*
 * Fixed grainy wave behind the whole page: a slow band drifting across the
 * lower part of the viewport, dithered with static film grain so it reads as a
 * material rather than as a glow.
 *
 * Rendered on a half-resolution canvas and blended against the canvas colour
 * by hand, so it costs one ImageData write per frame at 15fps. It pauses when
 * the tab is hidden and never starts under prefers-reduced-motion.
 *
 * Deliberately neutral: a cool slate drifting into warm sand. An earlier
 * version ran violet to sand, which made the page background itself a purple
 * surface and fought the light cards sitting on top of it.
 */

const CANVAS: [number, number, number] = [247, 248, 250]; // #f7f8fa
const SLATE: [number, number, number] = [186, 190, 200]; // cool neutral
const SAND: [number, number, number] = [235, 226, 214]; // warm neutral
const SCALE = 0.5;
const FPS = 15;

export function GrainWave() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    let w = 0;
    let h = 0;
    let image: ImageData | null = null;
    let noise = new Float32Array(0);
    let raf = 0;
    let last = 0;
    const start = performance.now();

    const resize = () => {
      w = Math.max(1, Math.ceil(window.innerWidth * SCALE));
      h = Math.max(1, Math.ceil(window.innerHeight * SCALE));
      canvas.width = w;
      canvas.height = h;
      image = ctx.createImageData(w, h);
      noise = new Float32Array(w * h);
      for (let i = 0; i < noise.length; i++) noise[i] = Math.random() - 0.5;
    };

    const draw = (t: number) => {
      if (!image) return;
      const data = image.data;

      for (let x = 0; x < w; x++) {
        const u = x / w;
        // Centre line of the band, rolling slowly across the width.
        const yc =
          0.82 +
          0.07 * Math.sin(u * 2.3 + t * 0.12) +
          0.035 * Math.sin(u * 5.3 - t * 0.09 + 1.2);
        const thick = 0.16 + 0.04 * Math.sin(u * 3.1 + t * 0.07);

        for (let y = 0; y < h; y++) {
          const v = y / h;
          const d = (v - yc) / thick;
          // Soft band above the line, fuller below it.
          const band =
            d < 0
              ? Math.exp(-d * d * 1.6)
              : Math.max(0.55, Math.exp(-d * d * 0.35));
          const i = y * w + x;
          const a = Math.min(
            1,
            Math.max(0, band * 0.34 + noise[i] * 0.22 * band),
          );
          // Cool slate toward the upper edge and left, warm sand deeper right.
          const m = Math.min(1, Math.max(0, 0.5 + d * 0.45 + (u - 0.5) * 0.6));
          const r = SLATE[0] + (SAND[0] - SLATE[0]) * m;
          const g = SLATE[1] + (SAND[1] - SLATE[1]) * m;
          const b = SLATE[2] + (SAND[2] - SLATE[2]) * m;
          const p = i * 4;
          data[p] = CANVAS[0] + (r - CANVAS[0]) * a;
          data[p + 1] = CANVAS[1] + (g - CANVAS[1]) * a;
          data[p + 2] = CANVAS[2] + (b - CANVAS[2]) * a;
          data[p + 3] = 255;
        }
      }

      ctx.putImageData(image, 0, 0);
    };

    const loop = (now: number) => {
      raf = requestAnimationFrame(loop);
      if (document.hidden || now - last < 1000 / FPS) return;
      last = now;
      draw((now - start) / 1000);
    };

    resize();
    draw(0);
    if (!reduced) raf = requestAnimationFrame(loop);

    let resizeTimer = 0;
    const onResize = () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        resize();
        draw((performance.now() - start) / 1000);
      }, 120);
    };

    window.addEventListener("resize", onResize);
    return () => {
      cancelAnimationFrame(raf);
      window.clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <canvas
      ref={ref}
      aria-hidden
      className="grain-canvas pointer-events-none fixed inset-0 -z-10 h-full w-full"
      style={{ imageRendering: "pixelated" }}
    />
  );
}
