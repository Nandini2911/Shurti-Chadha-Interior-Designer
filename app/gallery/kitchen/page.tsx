"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function KitchenPage() {
  const gridRef = useRef<HTMLDivElement | null>(null);

  const images = [
    "/gallery/kitchen/kitchen.webp",
    "/gallery/kitchen/kitchen1.webp",
    "/gallery/kitchen/kitchen2.webp",
    "/gallery/kitchen/kitchen3.webp",
    "/gallery/kitchen/kitchen4.webp",
    "/gallery/kitchen/kitchen6.webp",
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          gridRef.current?.classList.add("show");
        }
      },
      { threshold: 0.2 }
    );

    if (gridRef.current) observer.observe(gridRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <main>

      {/* 🔥 HERO */}
      <section className="relative h-[100vh] w-full overflow-hidden">
        <Image
          src="/gallery/kitchen/kitchen.webp"
          alt="Kitchen Hero"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/30 flex items-center justify-center text-center px-6">
          <div className="animate-fadeUp">
            <h1 className="text-4xl md:text-6xl brand-type mb-4 text-white">
              Kitchen Spaces
            </h1>
            <p className="text-white/80 max-w-xl mx-auto">
              Designed for functionality, precision, and refined living.
            </p>
          </div>
        </div>
      </section>

      {/* 🔥 INTRO */}
      <section className="py-24 px-6 text-center bg-white">
        <p className="max-w-[700px] mx-auto text-black leading-relaxed text-lg animate-slideUp">
          Kitchens are the heart of every home. Our designs focus on blending
          efficiency with elegance — where layout, materials, and lighting come
          together to create a seamless and sophisticated experience.
        </p>
      </section>

      {/* 🔥 IMAGE GRID */}
      <section
        ref={gridRef}
        className="bg-white max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-6 opacity-0 translate-y-16 transition-all duration-700"
      >
        {images.map((src, i) => (
          <div
            key={i}
            className="overflow-hidden group opacity-0 translate-y-12 animate-item"
            style={{ animationDelay: `${i * 0.1}s` }}
          >
            <Image
              src={src}
              alt="Kitchen Interior"
              width={800}
              height={600}
              sizes="(max-width: 768px) 100vw, 50vw"
              loading="lazy"
              className="w-full h-[420px] object-cover transition-all duration-700 group-hover:scale-105"
            />
          </div>
        ))}
      </section>

      {/* 🔥 DESCRIPTION */}
      <section className="text-center mt-32 px-6 bg-white">
        <p className="max-w-[700px] mx-auto text-black leading-relaxed text-lg animate-slideUp">
          Every kitchen is thoughtfully crafted to balance practicality and
          beauty — creating a space that feels intuitive, modern, and timeless
          in design.
        </p>
      </section>

      {/* 🔥 CTA */}
      <section className="text-center mt-20 pb-24 bg-white">
        <Link
          href="/contact"
          className="inline-block px-10 py-4 text-sm tracking-widest text-[#c9b27d] border border-[#c9b27d] hover:bg-[#c9b27d] hover:text-black transition"
        >
          START A PROJECT
        </Link>
      </section>

      <Footer />

      {/* 🔥 ANIMATIONS */}
      <style jsx>{`
        .show {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }

        .animate-fadeUp {
          opacity: 0;
          transform: translateY(40px);
          animation: fadeUp 1s ease forwards;
        }

        .animate-slideUp {
          opacity: 0;
          transform: translateY(50px);
          animation: slideUp 1s ease forwards;
        }

        @keyframes fadeUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes slideUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .show .animate-item {
          opacity: 1;
          transform: translateY(0);
          animation: slideUp 0.8s ease forwards;
        }
      `}</style>
    </main>
  );
}