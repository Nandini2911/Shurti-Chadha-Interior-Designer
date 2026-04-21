"use client";

import { motion } from "framer-motion";

export default function VisionSection() {
  return (
    <section className="w-full py-10 px-6 md:px-12 lg:px-20 text-center">
      
      <div className="max-w-5xl mx-auto">

        {/* Top divider */}
        <div className="w-24 h-[1px] bg-[#c6a87a] mb-16 mx-auto" />

        <div className="grid lg:grid-cols-2 gap-16">

          {/* LEFT - VISION */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <h3 className="text-3xl md:text-4xl font-serif mb-6 text-[#1a1a1a]">
              A Sense of Vision
            </h3>

            <p className="text-gray-600 leading-loose text-base md:text-lg max-w-md">
              I am drawn to spaces that do not ask for attention, yet hold it quietly.
              Where calm is not designed, but felt… and elegance arrives without effort.
              What I seek to create are spaces that stay — not just in how they look,
              but in how they make you feel, long after you’ve left them.
            </p>
          </motion.div>

          {/* RIGHT - APPROACH */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <h3 className="text-3xl md:text-4xl font-serif mb-6 text-[#1a1a1a]">
              The Way I Approach It
            </h3>

            <p className="text-gray-600 leading-loose text-base md:text-lg max-w-md">
              I approach design with a certain honesty. To create with intention,
              to choose with care, and to always keep the experience of living at
              the center. For me, it is never just about form — it is about how a
              space responds to you, and how naturally it becomes a part of your life.
            </p>
          </motion.div>

        </div>

        {/* Bottom divider */}
        <div className="w-full h-[1px] bg-[#e5dfd6] mt-20" />

      </div>
    </section>
  );
}