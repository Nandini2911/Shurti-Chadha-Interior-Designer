"use client";

import Image from "next/image";

export default function WhatWeDo() {

  const items = [
    {
      title: "Living Spaces",
      desc: "Where presence gathers and unfolds",
      img: "/gallery/livingroom/living8.webp",
    },
    {
      title: "Bedrooms",
      desc: "Spaces that hold stillness",
      img: "/gallery/bedroom/bedroom.webp",
    },
    {
      title: "Dining Spaces",
      desc: "Where conversations linger and moments gather",
      img: "/gallery/diningroom/dining.webp",
    }
  ];

  return (
    <section className="bg-[#f7f5f2] text-[#1a1a1a] py-20 md:py-28 px-6 md:px-16">

      {/* Intro */}
      <div className="text-center mb-16 md:mb-20">
        <h2 className="text-2xl md:text-4xl lg:text-5xl font-serif leading-tight">
          Not every space begins the same way.
        </h2>
      </div>

      {/* Categories */}
      <div className="grid md:grid-cols-3 gap-10 mb-20 md:mb-28">
        {items.map((item, i) => (
          <div key={i} className="group">

            {/* Image */}
            <div className="relative w-full h-[260px] md:h-[320px] overflow-hidden rounded-xl bg-gray-200">
              <Image
                src={item.img}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                priority={i === 0}
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Text */}
            <h3 className="mt-5 text-lg md:text-xl font-serif tracking-wide">
              {item.title}
            </h3>

            <p className="text-sm text-[#666] mt-2 italic">
              {item.desc}
            </p>

          </div>
        ))}
      </div>

      {/* Paragraph Section */}
      <div className="max-w-3xl mx-auto text-center">

        <p className="text-[16px] md:text-[18px] leading-[1.9] text-[#444]">

          Not every space begins the same way.<br /><br />

          Some arrive as empty shells, others as stories waiting to be retold. 
          Our work moves across homes, apartments, and quiet commercial corners — 
          each one approached not as a category, but as a possibility.<br /><br />

          We shape residences that hold stillness, apartments that balance movement and pause, 
          and boutique spaces that carry a certain intimacy. Even within renovation and styling, 
          the intention remains unchanged — to reveal what was always meant to belong there.<br /><br />

          <span className="block text-[#1a1a1a] text-lg md:text-xl font-serif my-6">
            Nothing is ever imposed.
          </span>

          Each space is gently guided toward the people it holds — their habits, 
          their silences, their way of living. What emerges is not just design, 
          but something that feels unmistakably their own.

        </p>

      </div>

    </section>
  );
}