import { ImageResponse } from "next/og";
import { SITE_NAME } from "@/lib/site";

export const alt = `${SITE_NAME}, software studio from Ethiopia for the world`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        alignItems: "center",
        background:
          "radial-gradient(circle at 78% 24%, #d8d3ff 0, #f4f2ff 24%, #ffffff 56%)",
        color: "#110f25",
        display: "flex",
        height: "100%",
        justifyContent: "center",
        padding: "72px",
        width: "100%",
      }}
    >
      <div
        style={{
          border: "1px solid rgba(4, 0, 94, 0.16)",
          borderRadius: "32px",
          display: "flex",
          flexDirection: "column",
          height: "100%",
          justifyContent: "space-between",
          padding: "58px",
          width: "100%",
        }}
      >
        <div
          style={{
            alignItems: "center",
            display: "flex",
            fontSize: "34px",
            fontWeight: 700,
            gap: "18px",
          }}
        >
          <div
            style={{
              alignItems: "center",
              background: "#04005e",
              borderRadius: "12px",
              color: "#edeaff",
              display: "flex",
              height: "64px",
              justifyContent: "center",
              width: "64px",
            }}
          >
            L
          </div>
          {SITE_NAME}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
          <div
            style={{
              display: "flex",
              fontSize: "62px",
              fontWeight: 700,
              letterSpacing: "-2.5px",
              lineHeight: 1.08,
              maxWidth: "920px",
            }}
          >
            Software built in Ethiopia, for the world.
          </div>
          <div
            style={{
              color: "#5d5873",
              display: "flex",
              fontSize: "25px",
              maxWidth: "900px",
            }}
          >
            Web platforms, mobile apps and AI products for businesses in
            Ethiopia and clients worldwide.
          </div>
        </div>
      </div>
    </div>,
    size,
  );
}
