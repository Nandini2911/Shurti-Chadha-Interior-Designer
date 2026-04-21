"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutHero() {
  return (
    <section className="relative h-[120vh] w-full overflow-hidden">

      {/* ✦ Background Image */}
      <Image
        src="/gallery/livingroom/living2.webp"
        alt="Shruti Chadha Interior"
        fill
        priority
        sizes="100vw"
        className="object-cover"
      />

      {/* ✦ Overlay (important for premium look) */}
      <div className="absolute inset-0 bg-black/30" />

      {/* ✦ Content */}
      <div className="relative z-10 h-full flex items-center px-6 md:px-16">

        <motion.div
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-3xl text-white"
        >
          <h1 className="text-4xl md:text-6xl font-serif leading-tight mb-6">
            About Shruti Chadha
          </h1>

          <p className="text-lg md:text-xl leading-[1.8] text-gray-200">
            Designing spaces with soul — where every detail feels intentional,
            calm, and deeply personal.
          </p>
        </motion.div>

      </div>

    </section>
  );
}