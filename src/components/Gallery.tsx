import Image from 'next/image';

const photos = [
  {
    src: '/images/family-cooking.webp',
    alt: 'Mother cooking pasta with her two young children in a home kitchen',
    position: 'object-[60%_center]',
  },
  {
    src: '/images/accra-evening.webp',
    alt: 'Accra neighbourhood at dusk with city lights in the distance',
    position: 'object-center',
  },
  {
    src: '/images/grocery-haul.webp',
    alt: 'Weekly grocery haul of plantain, meat, tomatoes, potatoes and pantry items',
    position: 'object-[30%_center]',
  },
  {
    src: '/images/friends-cooking.webp',
    alt: 'Three friends making pizza together at a kitchen counter',
    position: 'object-[center_60%]',
  },
];

export default function Gallery() {
  return (
    <section className="section-y section-x bg-mist">
      <div className="text-center">
        <h2 className="text-headline text-ink">Less to handle. More to enjoy.</h2>
        <p className="text-lead mt-5 text-subtle md:mt-6">Grocery delivery across Accra</p>
      </div>

      <div className="mx-auto mt-12 grid max-w-[1312px] grid-cols-2 gap-3 md:mt-16 md:gap-4 lg:grid-cols-4">
        {photos.map((photo) => (
          <div key={photo.src} className="relative aspect-[442/458] overflow-hidden rounded-2xl">
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 1024px) 25vw, 50vw"
              className={`object-cover ${photo.position}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
