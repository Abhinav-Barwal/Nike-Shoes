"use client";

import { useEffect } from "react";

export default function BootstrapClient() {
  useEffect(() => {
    (async () => {
      if (typeof window !== "undefined") {
        // dynamically import bootstrap JS
        await import("bootstrap/dist/js/bootstrap.bundle.min.js");
        console.log("✅ Bootstrap JS loaded!");
      }
    })();
  }, []);

  return null;
}
