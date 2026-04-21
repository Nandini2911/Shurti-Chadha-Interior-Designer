"use client";

import { useEffect, useRef, useState } from "react";

export default function StudioContent() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.10 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="w-full mt-5">
      
      <div
        ref={ref}
        className="max-w-[1200px] mx-auto px-8 md:px-16 py-16 md:py-24"
      >
        
        {/* LABEL */}
        <p
          className={`text-[11px] tracking-[0.35em] text-black uppercase mb-6 writing-vertical transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0 delay-100" : "opacity-0 translate-y-10"
          }`}
        >
          Our Studio
        </p>

        {/* HEADING */}
        <h2
          className={`font-playfair text-[43px] md:text-[58px] leading-[1.2] text-[#c9b27d] mb-8 max-w-3xl transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0 delay-300" : "opacity-0 translate-y-10"
          }`}
        >
          Designing Timeless Spaces with Thought and Intention
        </h2>

        {/* TEXT */}
        <p
          className={`text-[15px] md:text-[17px] leading-[1.9] text-black w-full transition-all duration-700 ${
            visible ? "opacity-100 translate-y-0 delay-500" : "opacity-0 translate-y-10"
          }`}
        >
          At Shruti Chadha Interiors, we create spaces that balance minimalism
          with warmth and precision with emotion. Each project reflects a refined
          approach to design — where materials, light, and form come together to
          create environments that feel effortless and enduring.
          <br /><br />
          Our work spans luxury residences and boutique spaces, thoughtfully
          crafted to reflect individuality, elegance, and a quiet sense of luxury.
        </p>

      </div>

    </section>
  );
}