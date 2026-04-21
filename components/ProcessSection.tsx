"use client";

import { motion } from "framer-motion";

export default function ProcessSection() {
  const steps = [
    {
      title: "Every space begins with a conversation.",
      text: "Not just about requirements, but about rhythms — how you live, what you return to, what you seek without always saying it. We listen closely, allowing the foundation of the space to emerge from who you are, rather than what is expected.",
    },
    {
      title: "From there, an idea begins to take shape.",
      text: "Through sketches, layouts, and quiet explorations, the direction reveals itself — not as a fixed plan, but as a feeling translated into form. Each decision builds on the last, moving gently toward something cohesive.",
    },
    {
      title: "As the design deepens, details find their place.",
      text: "Materials, finishes, and textures are chosen with care — not to stand out, but to belong. There is a certain discipline in this stage, where restraint becomes as important as selection.",
    },
    {
      title: "When the space begins to come alive, we stay closely involved.",
      text: "From execution to the smallest correction, every element is guided with intention, ensuring that what was imagined is carried through without compromise.",
    },
    {
      title: "And finally, the space settles.",
      text: "With the last layer of styling, it finds its voice — complete, yet unforced. What remains is not just a finished interior, but a place that feels ready… as if it has always been yours.",
    },
  ];

  return (
    <section className="bg-[#f7f5f2] py-32 px-6 md:px-16">

      {/* Heading */}
      <div className="mb-24">
        <h2 className="text-4xl md:text-6xl font-serif">
          Our Process
        </h2>
      </div>

      {/* Steps */}
      <div className="space-y-28">
        {steps.map((step, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="grid md:grid-cols-2 gap-12 items-start"
          >
            {/* Step Number */}
            <div className="text-[#c6c1b9] text-5xl font-serif">
              {String(i + 1).padStart(2, "0")}
            </div>

            {/* Content */}
            <div>
              <h3 className="text-xl md:text-2xl font-serif mb-4">
                {step.title}
              </h3>
              <p className="text-[#555] leading-[1.9]">
                {step.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}