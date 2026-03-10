"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { logAnalyticsEvent } from "@/lib/analytics";

export default function AnalyticsPageView() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (!pathname) return;
    const pathWithQuery = searchParams?.toString()
      ? `${pathname}?${searchParams.toString()}`
      : pathname;
    logAnalyticsEvent("page_view", pathWithQuery);
  }, [pathname, searchParams]);

  return null;
}

