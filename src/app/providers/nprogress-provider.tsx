"use client";

import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { usePathname, useRouter } from "next/navigation";
import { useEffect } from "react";

// Optional: customize bar style via CSS
NProgress.configure({ showSpinner: false });

export default function NProgressProvider() {
  const router = useRouter();
  const pathname = usePathname();

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const handleStart = () => {
      timeout = setTimeout(() => NProgress.start(), 100); // delay to avoid flicker
    };

    const handleStop = () => {
      clearTimeout(timeout);
      NProgress.done();
    };

    handleStart();
    return () => handleStop();
  }, [pathname]);

  return null;
}
