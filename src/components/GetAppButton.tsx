'use client';

import Link from 'next/link';
import type { MouseEvent } from 'react';
import { APP_STORE_URL, PLAY_STORE_URL } from './StoreBadges';

// Phones go straight to their store; everyone else scrolls to the store badges in the hero.
function storeUrlForDevice() {
  const ua = navigator.userAgent;
  const isIOS = /iPhone|iPad|iPod/.test(ua) || (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1);
  if (isIOS) return APP_STORE_URL;
  if (/Android/.test(ua)) return PLAY_STORE_URL;
  return null;
}

export default function GetAppButton({ className }: { className?: string }) {
  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    const url = storeUrlForDevice();
    if (url) {
      e.preventDefault();
      window.location.href = url;
    }
  };

  return (
    <Link href="/#get-the-app" onClick={handleClick} className={className}>
      Get the app
    </Link>
  );
}
