"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function InspirationSection() {
  return (
    <section className="w-full bg-[#f8f6f2] py-28 px-6 md:px-12 lg:px-20">
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
          className="relative w-full h-[700px] overflow-hidden"
        >
          <Image
            src="/gallery/bathroom/bathroom2.webp" // 👈 use nature / texture / travel image
            alt="Inspiration"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* RIGHT TEXT */}
        <div>

          <motion.h3
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-serif mb-6 text-[#1a1a1a]"
          >
            Inspiration
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="space-y-6 text-gray-600 leading-loose text-base md:text-lg"
          >
            <p>
              A lot of what I create begins outside the studio.
              In places that don’t ask to be designed — a stretch of stone shaped by time,
              the way light moves through a quiet landscape, or the stillness of a place
              that stays with you long after you’ve left.
            </p>

            <p>
              Travel has always been a quiet teacher for me.
              Not in obvious ways, but in fragments — a texture, a colour, a rhythm of space.
              These moments don’t translate directly, but they find their way back…
              softened, reinterpreted, and woven into the design.
            </p>

            <p>
              I don’t try to replicate what I see.
              I carry what I feel. And over time, these influences settle into the work —
              making each space layered, personal, and gently distinct from the last.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}