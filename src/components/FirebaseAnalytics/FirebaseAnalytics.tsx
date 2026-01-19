"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { logEvent } from "firebase/analytics";
import { getFirebaseAnalytics } from "@/lib/firebase";

export default function FirebaseAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    const trackPageView = async () => {
      const analytics = await getFirebaseAnalytics();
      if (!analytics) return;

      logEvent(analytics, "page_view", {
        page_path: pathname,
        page_location: window.location.href,
      });
    };

    trackPageView();
  }, [pathname, searchParams]);

  return null;
}
