"use client";

import { motion } from "framer-motion";



export default function PopFloatingGallery() {
  return (
    <section className="relative w-full h-[200vh] overflow-hidden">
      
      {/* BACKGROUND IMAGE */}
      <div className="absolute inset-0">
        <img
          src="/g2.JPG" // 👈 apna background image
          alt="background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* FLOATING IMAGES */}
      

    </section>
  );
}