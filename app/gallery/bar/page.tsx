"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";

export default function BarPage() {
  const gridRef = useRef<HTMLDivElement | null>(null);

  const images = [
    "/gallery/bar/bar.jpg",
    "/gallery/bar/bar1.jpg",
    "/gallery/bar/bar2.jpg",
    "/gallery/bar/bar3.jpg",
    "/gallery/bar/bar4.jpg",
  
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
          src="/gallery/bar/bar.jpg"
          alt="Bar Hero"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/40 flex items-center justify-center text-center px-6">
          <div className="animate-fadeUp">
            <h1 className="text-4xl md:text-6xl brand-type mb-4 text-white">
              Bar Spaces
            </h1>
            <p className="text-white/80 max-w-xl mx-auto">
              Crafted for indulgence, ambiance, and refined gatherings.
            </p>
          </div>
        </div>
      </section>

      {/* 🔥 INTRO */}
      <section className="py-24 px-6 text-center bg-white">
        <p className="max-w-[700px] mx-auto text-black leading-relaxed text-lg animate-slideUp">
          Our bar interiors are designed to create an atmosphere of luxury and
          sophistication — where lighting, textures, and materials come together
          to elevate every experience.
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
              alt="Bar Interior"
              width={800}
              height={600}
              className="w-full h-[420px] object-cover transition-all duration-700 group-hover:scale-105"
            />
          </div>
        ))}
      </section>

      {/* 🔥 DESCRIPTION */}
      <section className="text-center mt-35 px-6 bg-white">
        <p className="max-w-[700px] mx-auto text-black leading-relaxed text-lg animate-slideUp">
          Each bar space is curated to balance elegance and comfort — creating a
          setting that feels intimate, stylish, and perfect for both relaxation
          and entertaining.
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