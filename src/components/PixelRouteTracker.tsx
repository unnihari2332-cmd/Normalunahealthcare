import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { initPixel, trackPixel } from "@/lib/pixel";

export const PixelRouteTracker = (): null => {
  const location = useLocation();
  const initialized = useRef(false);

  useEffect(() => {
    if (!initialized.current) {
      initPixel();
      initialized.current = true;
    }
    const currentPath = location.pathname + location.search;
    trackPixel("PageView", { page_path: currentPath });
  }, [location.pathname, location.search]);

  return null;
};
