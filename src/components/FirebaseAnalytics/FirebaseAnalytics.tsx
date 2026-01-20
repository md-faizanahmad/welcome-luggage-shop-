"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { getFirebaseAnalytics } from "@/lib/firebase";

export default function FirebaseAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    const trackPageView = async () => {
      const analytics = await getFirebaseAnalytics();
      if (!analytics) return;
    };

    trackPageView();
  }, [pathname]);

  return null;
}
