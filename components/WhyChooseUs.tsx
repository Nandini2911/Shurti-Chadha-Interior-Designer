"use client";

import { motion } from "framer-motion";

export default function WhyChooseUs() {
  return (
    <section className="bg-[#1a1a1a] text-white py-32 px-6 md:px-16">

      {/* Heading */}
      <div className="mb-24">
        <h2 className="text-4xl md:text-6xl font-serif">
          Why Choose Us
        </h2>
      </div>

      {/* Big Statement */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="max-w-4xl mb-24"
      >
        <p className="text-2xl md:text-4xl font-serif leading-[1.4]">
          What we offer is not a fixed style, but a way of seeing.
        </p>
      </motion.div>

      {/* Points */}
      <div className="grid md:grid-cols-2 gap-16">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <p className="text-lg leading-[1.9] text-gray-300">
            Each space is approached without assumption — shaped around the person it belongs to,
            rather than a signature that repeats itself.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <p className="text-lg leading-[1.9] text-gray-300">
            There is a quiet discipline in how we work. Details are refined until they feel inevitable.
            Function and beauty exist together, almost unnoticed.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <p className="text-lg leading-[1.9] text-gray-300">
            We remain present through the entire journey — from the first thought to the final layer,
            held with clarity, care, and ease.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <p className="text-lg leading-[1.9] text-gray-300">
            Nothing is left uncertain. Every step moves with intention — without noise, without confusion.
          </p>
        </motion.div>

      </div>

      {/* Closing */}
      <div className="mt-24 max-w-3xl">
        <p className="text-lg text-gray-400 leading-[1.9]">
          In the end, it is never just about the space. It is about how it holds you,
          how it lives with you… and how effortlessly it becomes a part of your everyday.
        </p>
      </div>

    </section>
  );
}