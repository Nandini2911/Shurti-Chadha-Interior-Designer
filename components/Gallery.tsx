"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const categories = [
  { name: "Bedroom", image: "/gallery/bedroom/bedroom.webp" },
  { name: "Kitchen", image: "/gallery/kitchen/kitchen.webp" },
  { name: "Living Room", image: "/gallery/livingroom/living.webp" },
  { name: "Bar", image: "/gallery/bar/bar.webp" },
  { name: "Living Room", image: "/gallery/livingroom/living2.webp" },
  { name: "Bathroom", image: "/gallery/bathroom/bathroom.webp" },
  { name: "Dining Room", image: "/gallery/dinningroom/dining.webp" },
  { name: "Bathroom", image: "/gallery/bathroom/bathroom2.webp" },
  { name: "Mandir", image: "/gallery/mandir/mandir.webp" },
];

export default function GalleryHero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % categories.length);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[85vh] md:h-screen overflow-hidden">

      {/* IMAGES (STACKED = SUPER SMOOTH) */}
      {categories.map((item, i) => (
        <Image
          key={i}
          src={item.image}
          alt={item.name}
          fill
          priority={i === 0}
          className={`absolute inset-0 object-cover 
            transition-[opacity,transform] duration-[3000ms] ease-in-out
            will-change-[opacity,transform]
            ${i === index
              ? "opacity-100 scale-105"
              : "opacity-0 scale-100"}
          `}
        />
      ))}

      {/* OVERLAY */}
  <div className="absolute inset-0 flex items-center justify-center text-center px-6">

  <div className="text-white max-w-2xl">

    {/* HEADING */}
    <h1
      key={index}
      className="font-playfair 
                 text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4
                 animate-fadeUp"
    >
      {categories[index].name}
    </h1>

    {/* LINE */}
    <div
      key={index + "line"}
      className="w-12 h-[1px] bg-[#c9b27d] mx-auto mb-4 opacity-80 animate-line"
    />

    {/* SUBTEXT */}
    <p
      key={index + "sub"}
      className="text-sm sm:text-base md:text-lg opacity-90 animate-fadeUp delay-200"
    >
      Curated Spaces Designed with Elegance
    </p>

  </div>

</div>
    </section>
  );
}