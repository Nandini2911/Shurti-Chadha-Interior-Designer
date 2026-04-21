"use client";

import { motion } from "framer-motion";

export default function ExperienceWithStats() {
  return (
    <section className="w-full bg-[#f8f6f2] py-32 px-6 md:px-12 lg:px-20 text-center">

      <div className="max-w-6xl mx-auto">

        {/* ================= STATS ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 gap-x-16 mb-28">

          {[
            {
              title: "8 years\nexperience",
              subtitle: "Estd. in 2014",
            },
            {
              title: "50,000\nsqft",
              subtitle: "currently under construction",
            },
            {
              title: "15 team\nmembers",
              subtitle: "and growing",
            },
            {
              title: "15 plus\nprojects",
              subtitle: "completed successfully",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              className="flex flex-col items-center"
            >
              <div className="w-20 h-[1px] bg-[#c6a87a] mb-6" />

              <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif text-[#c6a87a] whitespace-pre-line leading-tight">
                {item.title}
              </h3>

              <p className="mt-3 text-gray-600 text-sm md:text-base">
                {item.subtitle}
              </p>
            </motion.div>
          ))}

        </div>

        {/* ================= EXPERIENCE CARD ================= */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto bg-white py-16 px-8 md:px-12 shadow-sm"
        >

          {/* Heading */}
          <h3 className="text-3xl md:text-4xl font-serif mb-10 text-[#1a1a1a]">
            Experience
          </h3>

          {/* Content */}
          <div className="space-y-6 text-gray-600 leading-loose text-base md:text-lg">
            <p>
              Over the years, my work has been shaped not just by time, but by
              the spaces I’ve had the opportunity to create. Each project carries
              its own rhythm — teaching me to listen more closely, refine more
              deeply, and trust the process beyond what is immediately visible.
            </p>

            <p>
              With over 8 years of experience, I have worked across luxury residences,
              modern apartments, and curated commercial spaces. From concept to
              completion, every project is approached with the same intent —
              to create something that feels considered, personal, and lasting.
            </p>

            <p>
              Today, with multiple projects under construction and a growing team
              beside me, the journey continues to evolve. Not just in scale, but
              in depth — with each space reflecting a more nuanced understanding
              of design, and of the people it is created for.
            </p>
          </div>

          {/* Closing */}
          <p className="mt-12 text-sm tracking-wide text-gray-400">
            The journey continues…
          </p>

        </motion.div>

      </div>
    </section>
  );
}