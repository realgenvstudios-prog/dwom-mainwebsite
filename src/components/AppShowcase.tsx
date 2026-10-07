import Image from 'next/image';

const screens = [
  { src: '/images/app-home.webp', alt: 'DWOM home screen with the market list box and dish bundles' },
  { src: '/images/app-categories.webp', alt: 'DWOM categories screen listing vegetables with prices' },
  { src: '/images/app-plan.webp', alt: 'DWOM plan setup screen for naming a plan and choosing delivery frequency' },
  { src: '/images/app-list.webp', alt: 'DWOM AI shopping list screen for writing a market list in Twi or English' },
];

export default function AppShowcase() {
  return (
    <section className="section-y section-x bg-white">
      <div className="text-center">
        <h2 className="text-headline text-ink">Your market, in your pocket.</h2>
        <p className="text-lead mx-auto mt-5 max-w-[480px] text-subtle md:mt-6">
          Everything you need to make your grocery run easier, right from your phone.
        </p>
      </div>

      <div className="mx-auto mt-14 grid max-w-[1312px] grid-cols-2 gap-x-6 gap-y-12 md:mt-20 lg:grid-cols-4 lg:gap-x-10">
        {screens.map((screen) => (
          <div
            key={screen.src}
            className="relative mx-auto aspect-[729/1450] w-full max-w-[256px] transition-transform duration-500 ease-[cubic-bezier(0.25,0.1,0.25,1)] hover:-translate-y-3 hover:scale-[1.03] motion-reduce:transition-none motion-reduce:hover:transform-none"
          >
            <Image
              src={screen.src}
              alt={screen.alt}
              fill
              sizes="(min-width: 1024px) 250px, 45vw"
              className="object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
