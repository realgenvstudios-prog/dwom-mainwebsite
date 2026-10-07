import Image from 'next/image';

export default function OurStory() {
  return (
    <section id="about" className="section-y section-x bg-white">
      <div className="mx-auto grid max-w-[1200px] items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-[440px_1fr] lg:gap-24">
        <div className="relative order-2 mx-auto aspect-[1086/1448] w-full max-w-[440px] md:order-1 md:mx-0">
          <Image
            src="/images/rider-accra.webp"
            alt="DWOM rider with a branded delivery box on a motorbike at Independence Arch, Accra, at sunset"
            fill
            sizes="(min-width: 768px) 440px, 100vw"
            className="object-cover"
          />
        </div>

        <div className="order-1 md:order-2">
          <h2 className="text-statement max-w-[600px] text-ink">
            We started with a simple idea: getting good food shouldn&apos;t require so much effort.
          </h2>
          <p className="text-lead mt-6 max-w-[520px] text-subtle md:mt-8">
            &ldquo;DWOM is building a better way for people to access food in Ghana, starting with grocery delivery and
            growing toward a more connected food system.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
}
