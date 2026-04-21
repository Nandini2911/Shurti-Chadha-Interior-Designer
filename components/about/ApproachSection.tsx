"use client";

import { motion } from "framer-motion";

export default function ApproachSection() {
  return (
    <section className="w-full bg-white py-28 px-6 md:px-12 lg:px-20">
      
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">

        {/* LEFT SIDE */}
        <div>
          <motion.h3
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-3xl md:text-4xl font-serif mb-6 text-[#1a1a1a]"
          >
            Her Approach
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-lg md:text-xl text-gray-700 leading-relaxed max-w-md"
          >
            For me, every space begins as a quiet narrative.
            Not something I try to define too quickly, but something I allow to unfold —
            layer by layer — guided more by feeling than by form.
            I don’t begin with materials, I begin with emotion.
          </motion.p>
        </div>

        {/* RIGHT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="space-y-6 text-gray-600 leading-loose text-base md:text-lg"
        >
          <p>
            A single thought, a mood, a certain stillness… and from there,
            textures, forms, and surfaces start to find their place.
            What I choose is never forced — it has to feel like it belongs.
          </p>

          <p>
            There is a rhythm I trust in my process. Where nothing feels excessive,
            yet nothing feels incomplete. I try to shape spaces that hold life gently —
            that can be lived in, moved through, and returned to with ease.
          </p>

          <p>
            In the end, it’s never just about how a space looks.
            It’s about how it sits with you… how it understands you…
            and how naturally it becomes a part of your everyday.
          </p>
        </motion.div>

      </div>
    </section>
  );
}