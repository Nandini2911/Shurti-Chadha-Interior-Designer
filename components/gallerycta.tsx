"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";

export default function CTASection() {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          ref.current?.classList.add("show");
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-[100px] md:py-[140px] bg-[#faf8f3]">
      <div
        ref={ref}
        className="max-w-[900px] mx-auto px-6 text-center opacity-0 translate-y-10 transition-all duration-700 ease-out"
      >
        {/* Heading */}
        <h2 className="text-3xl md:text-5xl brand-type tracking-wide leading-tight mb-6">
          Have a Project in Mind?
        </h2>

        {/* Subtext */}
        <p className="text-[#555] text-base md:text-lg leading-relaxed max-w-[600px] mx-auto mb-10">
          Let’s craft a space that feels intuitive, refined, and deeply personal
          to you. From concept to completion, every detail is thoughtfully
          considered.
        </p>


<Link
  href="/contact"
  className="luxury-btn inline-block border border-[#c9b27d] px-8 py-4 text-sm tracking-[0.2em] text-[#c9b27d]"
>
  <span>START A PROJECT</span>
</Link>
      </div>

      {/* animation */}
      <style jsx>{`
        .show {
          opacity: 1 !important;
          transform: translateY(0) !important;
        }
      `}</style>
    </section>
  );
}