"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="relative w-full bg-[#f8f6f2] py-24 pl-6 md:pl-16 lg:pl-24 pr-6 overflow-hidden">

      {/* Background Image */}
      <div className="absolute right-0 top-0 w-[55%] h-full hidden lg:block">
        <div className="relative w-full h-full">
          <Image
            src="/gallery/bedroom/bedroom2.webp"
            alt="Interior background"
            fill
            priority
            className="object-cover opacity-100 blur-[0.5px]"
          />

          {/* softer gradient */}
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-[#f8f6f2]/40 to-[#f8f6f2]" />
        </div>
      </div>

      {/* Content */}
      <div className="max-w-3xl relative z-10">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-5xl font-serif mb-10 tracking-tight text-[#1a1a1a]"
        >
          Designing Spaces with Soul
        </motion.h2>

        {/* Intro */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-lg md:text-xl leading-relaxed text-gray-700 mb-6"
        >
          Some journeys begin with a plan.
          Others begin with a feeling — something quieter, harder to define,
          yet impossible to ignore.
        </motion.p>

        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="space-y-6 text-gray-600 leading-loose text-base md:text-lg border-l pl-6 border-gray-300"
        >
          <p>
            Shruti’s work belongs to the latter, where design is not imposed,
            but discovered… slowly, intuitively.
          </p>

          <p>
            Based in Delhi, she approaches each space as a conversation between
            form and emotion. There is a balance she seeks — where minimalism
            does not feel cold, and warmth does not feel overwhelming.
          </p>

          <p>
            What emerges is a sense of calm that feels both considered and effortless.
            Her spaces are never just composed — they are felt.
          </p>

          <p>
            Every line, every texture, every pause within the design carries intention.
            The result is not something that demands attention, but something that
            stays with you… quietly, over time.
          </p>

          <p className="pt-6 text-sm tracking-wide text-gray-500">
            — Shruti Chadha
          </p>
        </motion.div>
      </div>
    </section>
  );
}