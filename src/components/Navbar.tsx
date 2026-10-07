import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/95 backdrop-blur-md">
      <nav className="mx-auto flex h-16 md:h-[88px] max-w-[1440px] items-center justify-between px-5 md:px-12 lg:px-16">
        <Link href="/" className="relative h-8 w-8 md:h-10 md:w-10">
          <Image src="/images/logo.png" alt="DWOM" fill className="object-contain" priority />
        </Link>

        <Link
          href="/#get-the-app"
          className="rounded-full bg-[#111] px-5 py-2 text-[15px] text-white transition-colors hover:bg-[#333] md:px-9 md:py-3 md:text-[17px]"
        >
          Get the app
        </Link>
      </nav>
    </header>
  );
}
