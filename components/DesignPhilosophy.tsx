"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function DesignPhilosophy() {
  return (
    <section className="relative bg-[#f7f5f2] text-[#1a1a1a] py-10 px-6 md:px-16 overflow-hidden">

     

      <div className="relative z-10">

        {/* ✦ Title */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-24"
        >
          <h2 className="text-4xl md:text-6xl font-serif leading-tight">
            Design Philosophy
          </h2>
        </motion.div>

        {/* ✦ Large Statement */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mb-32"
        >
          <p className="text-2xl md:text-4xl font-serif leading-[1.4] text-[#1a1a1a]">
            Luxury, to us, is rarely loud. It exists in the quiet decisions —
            in what is softened, what is held back, and what is allowed to remain untouched.
          </p>
        </motion.div>

        {/* ✦ Grid Section */}
        <div className="grid md:grid-cols-2 gap-20 items-center mb-32">

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative h-[500px] rounded-xl overflow-hidden"
          >
            <Image
              src="/gallery/livingroom/living8.webp"
              alt="Interior"
              fill
              priority
              sizes="50vw"
              className="object-cover"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <p className="text-lg leading-[1.9] text-[#444] mb-8">
              A space does not need to impress; it only needs to feel right,
              in ways that are often difficult to explain but easy to live with.
            </p>

            <p className="text-lg leading-[1.9] text-[#444]">
              What emerges is a balance — spaces that are quiet, but never empty,
              composed yet deeply alive.
            </p>
          </motion.div>
        </div>

        {/* ✦ Statement Center */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center mb-32"
        >
          <h3 className="text-3xl md:text-5xl font-serif">
            Every line has a purpose.
          </h3>
        </motion.div>

        {/* ✦ Final Text */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="max-w-2xl"
        >
          <p className="text-lg leading-[1.9] text-[#444] mb-6">
            Every material is allowed to be what it is, without disguise.
            We do not chase trends — we follow a sense of permanence.
          </p>

          <p className="text-lg leading-[1.9] text-[#444]">
            There is a certain stillness we seek, where nothing feels excessive,
            yet nothing feels incomplete. We are drawn to what endures —
            natural surfaces, muted tones, and forms that serve without demanding attention.
          </p>
        </motion.div>

      </div>
    </section>
  );
}