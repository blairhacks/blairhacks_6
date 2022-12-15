import { useRef, useEffect } from 'react';
import Image from 'next/image';

const photos = [
  { src: "/assets/card.png" },
  { caption: "BlairHacks Mini '22 @ Rockville Memorial (December 10, 2022)", src: "/assets/photos/mini22-bigphoto.jpg" },
  { caption: "Hackers at BlairHacks Mini '22 (2022)", src: "/assets/photos/mini22-hacking.jpg" },
  { caption: "Hackers at BlairHacks Mini '22 (2022)", src: "/assets/photos/mini22-chilling.jpg" },
  // { caption: "BlairHacks_5 (virtual) on Feb. 18-20, 2022", src: "" },
  { caption: "BlairHacks_4 @ Blair (February 28-29, 2020)", src: "/assets/photos/bh4-bigphoto.jpg" },
  { caption: "Hackers at BlairHacks_4 (2020)", src: "/assets/photos/bh4-project.jpg" },
];

export default function Gallery() {
  const photoRefs = useRef<(HTMLDivElement)[]>([]);

  function scrollToPhoto(index: number) {
    if (!photoRefs.current[index]) return;
    photoRefs.current[index].scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }

  return (
    <div>
      <div className="aspect-video flex gap-8 snap-x snap-mandatory overflow-x-auto overflow-y-hidden rounded-xl hide-scroll">
        {photos.map((photo, i) => (
          <div className="relative h-full w-full basis-full grow-0 shrink-0 snap-center bg-theme-surface rounded-xl overflow-hidden"
            key={i}
            ref={(el:any) => photoRefs.current[i] = el}
          >
            {photo.src &&
                <Image
                  src={photo.src}
                  alt={photo.caption || "Gallery photo"}
                  fill
                  className="object-cover"
                />
            }
            {photo.caption && <>
              <p className="mr-4 absolute bottom-4 left-4 px-1.5 py-0.5 text-center text-xs bg-theme-background/40 rounded-md">
                {photo.caption}
              </p>
            </>}
          </div>
        ))}
      </div>

      <div className="container max-w-2xl flex gap-4 overflow-x-auto overflow-y-hidden hide-scroll mt-4">
        {photos.map((photo, i) => (
          <div
            className="relative basis-24 grow-0 shrink-0 aspect-video bg-theme-surface rounded-lg overflow-hidden"
            key={i}
            onClick={() => scrollToPhoto(i)}
          >
            {photo.src &&
              <Image
                src={photo.src}
                alt={photo.caption || "Gallery photo"}
                fill
                className="object-cover"
              />
            }
          </div>
        ))}
      </div>
    </div>
  );
}
