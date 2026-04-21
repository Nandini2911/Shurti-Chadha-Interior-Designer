'use client';

import { motion } from 'framer-motion';

export default function StudioContent() {
  return (
    <section className="relative w-full py-14 sm:py-16 md:py-20 lg:py-24">

      <div className="w-full px-5 sm:px-6 md:px-10 lg:px-20">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="ml-auto max-w-[1100px] text-right mb-8 sm:mb-10 md:mb-12"
        >
          <p className="text-[10px] sm:text-[11px] tracking-[0.35em] text-[#c9b27d] uppercase mb-3 sm:mb-4">
            Principal Designer | Thought Leader | Style Icon
          </p>

          <h2 className="font-playfair 
            text-[22px] 
            sm:text-[26px] 
            md:text-[34px] 
            lg:text-[40px] 
            text-[#c9b27d] 
            leading-[1.3] 
            break-words"
          >
          Shruti Chadha, Where Design Feels Effortless
          </h2>
        </motion.div>

        {/* PARAGRAPH */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="space-y-5 sm:space-y-6 md:space-y-7 
                     text-[14px] sm:text-[15px] md:text-[16px] 
                     leading-[1.8] md:leading-[1.9] 
                     text-black text-justify 
                     max-w-[1400px] mx-auto"
        >
          <p>
Shruti Chadha is a Delhi-based interior designer and creative entrepreneur, known for her poetic approach to design — one that marries minimalism with warmth, precision with emotion, and structure with soul. As the founder and principal designer of her namesake studio, she has built a practice grounded in authenticity, material honesty, and a deep reverence for nature.          </p>

          <p>
Shruti believes that spaces should breathe — and that every room must tell its own story. Her design language is rooted in organic textures, balanced proportions, and timeless calm. Inspiration, for her, often begins outside the studio — in the flow of a stream, the patina of stone, or the quiet poetry of a distant city. A passionate traveller, Shruti draws from her journeys across the world — translating the colours, cultures, and moods she encounters into subtle details within her interiors. Each project, thus, becomes a reflection of both the world she’s seen and the world she wishes to create.          </p>

          <p>
At her studio, she leads every project hands-on, from the first sketch to the final touch — crafting spaces that feel deeply personal and effortlessly elegant. Her portfolio spans luxury residences, boutique commercial spaces, and curated design experiences that celebrate craftsmanship, calm, and character. For Shruti, design is an act of storytelling — where emotion is as integral as proportion, and beauty is found not in excess, but in honesty. Her work has been described as “poetic minimalism” — spaces that carry a quiet rhythm, inviting light, life, and a sense of belonging into every corner.          </p>
        </motion.div>

        {/* BUTTON */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 sm:mt-12 flex justify-start sm:justify-start md:justify-start"
        >
          <button className="border border-[#c9b27d] text-[#c9b27d] 
            px-6 sm:px-8 md:px-10 
            py-3 sm:py-3.5 md:py-4 
            text-[10px] sm:text-[11px] md:text-[12px] 
            tracking-[0.3em] uppercase 
            hover:bg-[#c9b27d] hover:text-white 
            transition-all duration-300"
          >
            More About Shruti
          </button>
        </motion.div>

      </div>
    </section>
  );
}