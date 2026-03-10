import { supabase } from "./supabase-client";

type AnalyticsEventType = "page_view" | "lead_click";

function detectSourceFromLocation(): string {
  if (typeof window === "undefined") return "other";

  const url = new URL(window.location.href);
  const utmSource = url.searchParams.get("utm_source");
  if (utmSource) {
    const normalized = utmSource.toLowerCase();
    if (normalized.includes("google")) return "google";
    if (normalized.includes("fb") || normalized.includes("meta") || normalized.includes("face")) return "facebook";
    if (normalized.includes("ig") || normalized.includes("insta")) return "instagram";
    if (normalized.includes("whats")) return "whatsapp";
    if (normalized.includes("direct")) return "direct";
    return "other";
  }

  const ref = document.referrer.toLowerCase();
  if (!ref) return "direct";
  if (ref.includes("google")) return "google";
  if (ref.includes("facebook") || ref.includes("fb.")) return "facebook";
  if (ref.includes("instagram")) return "instagram";
  if (ref.includes("whatsapp")) return "whatsapp";

  return "other";
}

export async function logAnalyticsEvent(
  type: AnalyticsEventType,
  pagePath: string
): Promise<void> {
  if (!supabase) return;
  try {
    const source = detectSourceFromLocation();
    await supabase.from("analytics_events").insert({
      event_type: type,
      page_path: pagePath || "/",
      source,
    });
  } catch {
    // falha silenciosa – não quebra UX
  }
}

