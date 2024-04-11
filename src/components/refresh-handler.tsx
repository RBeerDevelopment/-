"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";

export function RefreshHandler() {
  const router = useRouter();
  useEffect(() => {
    const interval = setInterval(() => {
      router.refresh();
      console.log("RefreshHandler");
    }, 1000 * 10);
    return () => clearInterval(interval);
  }, []);
  return null;
}
