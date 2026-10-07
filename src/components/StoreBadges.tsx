// TODO: replace with the live store listing URLs
const PLAY_STORE_URL = '#';
const APP_STORE_URL = '#';

export function GooglePlayBadge({ className = 'border-black' }: { className?: string }) {
  return (
    <a
      href={PLAY_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex h-12 w-[160px] items-center gap-2.5 rounded-lg border ${className} bg-black px-3.5 text-white transition-opacity hover:opacity-85`}
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0" aria-hidden>
        <path d="M3.6 1.8 13.4 12 3.6 22.2c-.4-.2-.6-.6-.6-1.1V2.9c0-.5.2-.9.6-1.1Z" fill="#4285F4" />
        <path d="M3.6 1.8 16.6 8.8 13.4 12Z" fill="#34A853" />
        <path d="M3.6 22.2 13.4 12l3.2 3.2Z" fill="#EA4335" />
        <path d="m16.6 8.8 3.8 2.1c.8.5.8 1.7 0 2.2l-3.8 2.1-3.2-3.2Z" fill="#FBBC04" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="text-[9px] font-medium uppercase tracking-wide">Get it on</span>
        <span className="mt-0.5 whitespace-nowrap text-[19px] font-medium tracking-tight">Google Play</span>
      </span>
    </a>
  );
}

export function AppStoreBadge({ className = 'border-black' }: { className?: string }) {
  return (
    <a
      href={APP_STORE_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex h-12 w-[160px] items-center gap-2 rounded-lg border ${className} bg-black px-3.5 text-white transition-opacity hover:opacity-85`}
    >
      <svg viewBox="0 0 24 24" className="h-7 w-7 shrink-0" fill="currentColor" aria-hidden>
        <path d="M16.365 1.43c0 1.14-.493 2.27-1.177 3.08-.744.9-1.99 1.57-2.987 1.57-.12 0-.23-.02-.3-.03-.01-.06-.04-.22-.04-.39 0-1.15.572-2.27 1.206-2.98.804-.94 2.142-1.64 3.248-1.68.03.13.05.28.05.43Zm4.565 15.71c-.03.07-.463 1.58-1.518 3.12-.945 1.34-1.94 2.71-3.43 2.71-1.517 0-1.9-.88-3.63-.88-1.698 0-2.302.91-3.67.91-1.377 0-2.332-1.26-3.428-2.8-1.287-1.82-2.323-4.63-2.323-7.28 0-4.28 2.797-6.55 5.552-6.55 1.448 0 2.675.95 3.6.95.865 0 2.222-1.01 3.902-1.01.613 0 2.886.06 4.374 2.19-.13.09-2.383 1.37-2.383 4.19 0 3.26 2.854 4.42 2.955 4.45Z" />
      </svg>
      <span className="flex flex-col leading-none">
        <span className="text-[10px] font-medium">Download on the</span>
        <span className="mt-0.5 whitespace-nowrap text-[20px] font-medium tracking-tight">App Store</span>
      </span>
    </a>
  );
}
