declare function gtag(...args: unknown[]): void;

export function trackConversion() {
  if (typeof window !== "undefined" && typeof gtag === "function") {
    gtag("event", "conversion", {
      send_to: "AW-17999725494/2BgXCMfEvIQcELaH-IZD",
      value: 1.0,
      currency: "BRL",
    });
  }
}
