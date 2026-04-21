"use client";

import { motion } from "framer-motion";

export default function GalleryIntro() {
  return (
    <section className="w-full bg-white py-16 md:py-24 px-6">

      <div className="max-w-[1000px] mx-auto text-center">

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-playfair text-3xl md:text-4xl lg:text-5xl text-[#c9b27d] mb-6"
        >
          Spaces
        </motion.h2>

        {/* LINE */}
        <motion.div
          initial={{ width: 0, opacity: 0 }}
          whileInView={{ width: "60px", opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="h-[1px] bg-[#c9b27d] mx-auto mb-6"
        />

        {/* TEXT */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.3 }}
          className="text-[15px] md:text-[17px] leading-[1.9] text-gray-700"
        >
         Explore our curated collection of thoughtfully designed interiors — from living
rooms and bedrooms to kitchens and bespoke spaces. Each project
reflects a refined balance of material, light, and function, brought
together to create spaces that feel timeless, elegant, and effortlessly
sophisticated.
        </motion.p>

      </div>

    </section>
  );
}