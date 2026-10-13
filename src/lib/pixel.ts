export type PixelEventParams = Record<string, string | number | boolean | undefined>;

export interface PixelQueueItem {
  event: string;
  params?: PixelEventParams;
  timestamp: number;
}

export interface MetaFbqFunction {
  (...args: unknown[]): void;
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[][];
  loaded: boolean;
  version: string;
  push: unknown;
}

declare global {
  interface Window {
    fbq?: MetaFbqFunction;
    _fbq?: MetaFbqFunction;
    __pixel_events?: PixelQueueItem[];
    META_PIXEL_ID?: string;
  }
}

const DEFAULT_PIXEL_ID = "YOUR_PIXEL_ID";

export const getPixelId = (): string => {
  if (typeof window !== "undefined" && window.META_PIXEL_ID) {
    return window.META_PIXEL_ID;
  }
  const envId = import.meta.env.VITE_META_PIXEL_ID;
  return typeof envId === "string" && envId.length > 0 ? envId : DEFAULT_PIXEL_ID;
};

export const initPixel = (pixelId: string = getPixelId()): void => {
  if (typeof window === "undefined") return;

  window.__pixel_events = window.__pixel_events ?? [];

  if (!window.fbq) {
    const queue: unknown[][] = [];
    const fbq = function (...args: unknown[]): void {
      if (typeof fbq.callMethod === "function") {
        fbq.callMethod(...args);
      } else {
        queue.push(args);
      }
    } as MetaFbqFunction;

    fbq.push = fbq;
    fbq.loaded = true;
    fbq.version = "2.0";
    fbq.queue = queue;
    window.fbq = fbq;
    window._fbq = fbq;

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://connect.facebook.net/en_US/fbevents.js";
    const target = document.getElementsByTagName("script")[0];
    if (target?.parentNode) {
      target.parentNode.insertBefore(script, target);
    } else {
      document.head.appendChild(script);
    }
  }

  if (pixelId !== DEFAULT_PIXEL_ID && pixelId.length > 0) {
    window.fbq("init", pixelId);
  }
};

export const trackPixel = (eventName: string, params?: PixelEventParams): void => {
  if (typeof window === "undefined") return;

  const events = window.__pixel_events ?? [];
  events.push({
    event: eventName,
    params,
    timestamp: Date.now(),
  });
  window.__pixel_events = events;

  if (typeof window.fbq === "function") {
    if (params) {
      window.fbq("track", eventName, params);
    } else {
      window.fbq("track", eventName);
    }
  }

  window.dispatchEvent(
    new CustomEvent("meta_pixel_track", {
      detail: { event: eventName, params },
    })
  );

  console.log(`[Meta Pixel] Tracked: ${eventName}`, params ?? "");
};
