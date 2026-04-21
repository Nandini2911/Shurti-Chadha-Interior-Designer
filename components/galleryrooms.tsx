"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

type SectionType = {
  title: string;
  img: string;
  slug: string;
};

const sections: SectionType[] = [
  { title: "Bedroom", img: "/gallery/bedroom/bedroom.webp", slug: "bedroom" },
  { title: "Living Room", img: "/gallery/livingroom/living.webp", slug: "living-room" },
  { title: "Dining Room", img: "/gallery/diningroom/dining.webp", slug: "dining-room" },
  { title: "Kitchen", img: "/gallery/kitchen/kitchen.webp", slug: "kitchen" },
  { title: "Bathroom", img: "/gallery/bathroom/bathroom.webp", slug: "bathroom" },
  { title: "Mandir", img: "/gallery/mandir/mandir.webp", slug: "mandir" },
  { title: "Bar", img: "/gallery/bar/bar.jpg", slug: "bar" },
  { title: "Wardrobe", img: "/gallery/wardrobe/wardrobe.JPEG", slug: "wardrobe" },
  { title: "Corridor", img: "/gallery/corridor/corridor.webp", slug: "corridor" },
];

export default function GalleryRooms() {
  const refs = useRef<Array<HTMLDivElement | null>>([]);

  const setRef =
    (index: number) => (el: HTMLDivElement | null) => {
      refs.current[index] = el;
    };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      {
        threshold: 0,
        rootMargin: "0px 0px -100px 0px", // 🔥 early trigger
      }
    );

    refs.current.forEach((el) => el && observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-[80px] md:py-[120px]">

      {/* TOP NAV BUTTONS */}
      <div className="flex flex-wrap justify-center gap-4 mb-20">
        {sections.map((item) => (
          <button
            key={item.slug}
            onClick={() =>
              document.getElementById(item.slug)?.scrollIntoView({
                behavior: "smooth",
              })
            }
            className="px-4 py-2 border border-[#c9b27d] text-[#c9b27d] text-sm tracking-widest hover:bg-[#c9b27d] hover:text-black transition"
          >
            {item.title}
          </button>
        ))}
      </div>

      {/* CONTENT */}
      <div className="max-w-[1200px] mx-auto px-6 space-y-28">
        {sections.map((item, index) => {
          const isReverse = index % 2 !== 0;

          return (
            <div
              key={index}
              id={item.slug}
              ref={setRef(index)}
              className={`group flex flex-col md:flex-row items-center gap-12 ${
                isReverse ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* IMAGE */}
              <div
                className={`w-full md:w-1/2 overflow-hidden 
                opacity-0 transition-all duration-500 
                ease-[cubic-bezier(0.25,0.8,0.25,1)]
                ${
                  isReverse
                    ? "translate-x-10 group-[.show]:translate-x-0"
                    : "-translate-x-10 group-[.show]:translate-x-0"
                }
                group-[.show]:opacity-100
              `}
              >
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-[420px] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>

              {/* TEXT */}
              <div
                className={`w-full md:w-1/2 text-center md:text-left space-y-5
                opacity-0 translate-y-6 
                transition-all duration-500 ease-out
                group-[.show]:translate-y-0 group-[.show]:opacity-100
              `}
              >
                <h2 className="text-3xl md:text-4xl tracking-wide brand-type">
                  {item.title}
                </h2>

                <p className="text-sm md:text-base text-[#555] leading-relaxed max-w-md mx-auto md:mx-0">
                  Thoughtfully designed {item.title.toLowerCase()} spaces that
                  balance light, material, and function — creating a calm,
                  refined atmosphere.
                </p>

                <Link
                  href={`/gallery/${item.slug}`}
                  className="luxury-btn border border-[#c9b27d] px-6 py-3 text-sm tracking-widest text-[#c9b27d] hover:bg-[#c9b27d] hover:text-black transition inline-block"
                >
                  VIEW PROJECTS
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Animation trigger */}
      <style jsx>{`
        .show {
          opacity: 1;
        }
      `}</style>
    </section>
  );
}