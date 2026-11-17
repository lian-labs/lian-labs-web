"use client";

import { useEffect } from "react";
import Clarity from "@microsoft/clarity";
import { GoogleAnalytics, sendGAEvent } from "@next/third-parties/google";
import { Analytics } from "@vercel/analytics/next";
import { track } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { BOOK_CALL_URL } from "@/lib/site";

function eventNameForLink(link: HTMLAnchorElement) {
  const explicit = link.dataset.analytics;
  if (explicit) return explicit;
  if (link.href.startsWith(BOOK_CALL_URL)) return "consultation_click";
  if (link.href.startsWith("mailto:")) return "email_click";
  return null;
}

function getUtmParams(): Record<string, string> {
  const params = new URLSearchParams(window.location.search);
  const utmKeys = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
  ];

  const utmEntries = utmKeys.flatMap((key) => {
    const value = params.get(key);
    return value === null ? [] : [[key, value] as const];
  });

  return Object.fromEntries(utmEntries) as Record<string, string>;
}

export default function SiteAnalytics() {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  const clarityId = process.env.NEXT_PUBLIC_CLARITY_PROJECT_ID;

  // Must stay the first effect: Clarity.init defines window.clarity, which the
  // event handlers below rely on.
  useEffect(() => {
    if (clarityId) Clarity.init(clarityId);
  }, [clarityId]);

  useEffect(() => {
    const utmParams = getUtmParams();
    if (Object.keys(utmParams).length === 0) return;

    track("landing_page_visit", utmParams);

    if (gaId) {
      sendGAEvent("event", "landing_page_visit", utmParams);
    }

    if (clarityId) {
      Object.entries(utmParams).forEach(([key, value]) => {
        if (value) Clarity.setTag(key, value);
      });
      Clarity.event("landing_page_visit");
    }
  }, [gaId, clarityId]);

  useEffect(() => {
    function handleClick(event: MouseEvent) {
      const target = event.target as Element | null;
      const link = target?.closest("a");
      if (!(link instanceof HTMLAnchorElement)) return;

      const eventName = eventNameForLink(link);
      if (!eventName) return;

      track(eventName, { destination: link.href });
      if (gaId) {
        sendGAEvent("event", eventName, { destination: link.href });
      }
      if (clarityId) Clarity.event(eventName);
    }

    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, [gaId, clarityId]);

  return (
    <>
      <Analytics />
      <SpeedInsights />
      {gaId && <GoogleAnalytics gaId={gaId} />}
    </>
  );
}
