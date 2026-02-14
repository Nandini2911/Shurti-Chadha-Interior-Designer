'use client';

import { useEffect, useState } from 'react';
import { motion, type Variants } from 'framer-motion';

export default function About() {
  const [replayKey, setReplayKey] = useState(0);

  // ✅ re-trigger animation when user navigates to #about
  useEffect(() => {
    const run = () => {
      if (window.location.hash === '#about') {
        setReplayKey((k) => k + 1);
      }
    };

    run(); // in case page loads with #about
    window.addEventListener('hashchange', run);
    return () => window.removeEventListener('hashchange', run);
  }, []);

  const easeOutExpo = [0.22, 1, 0.36, 1] as const;

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.18, delayChildren: 0.05 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.9, ease: easeOutExpo },
    },
  };

  const viewport = { once: true, amount: 0.35 };

  return (
    <section id="about" className="w-full bg-white">
      {/* ✅ key changes => component subtree remount => animations replay */}
      <div key={replayKey} className="w-full px-[2.5vw] py-14 md:py-20">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="text-center"
        >
          <motion.h2
            variants={item}
            className="text-4xl tracking-tight md:text-5xl text-[#C9B27D]"
          >
            SHRUTI CHADHA
          </motion.h2>

          <motion.p
            variants={item}
            className="mt-3 text-base tracking-wide text-black md:text-lg md:py-8"
          >
            Interior Designer | Entrepreneur | Space Curator
          </motion.p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-2 space-y-5 text-justify hyphens-auto text-sm leading-[1.6] text-neutral-800 md:text-lg"
        >
          <motion.p variants={item}>
            Shruti Chadha is a Delhi-based interior designer and creative
            entrepreneur, known for her poetic approach to design — one that
            marries minimalism with warmth, precision with emotion, and structure
            with soul. As the founder and principal designer of her namesake
            studio, she has built a practice grounded in authenticity, material
            honesty, and a deep reverence for nature.
          </motion.p>

          <motion.p variants={item}>
            Shruti believes that spaces should breathe — and that every room must
            tell its own story. Her design language is rooted in organic textures,
            balanced proportions, and timeless calm. Inspiration, for her, often
            begins outside the studio — in the flow of a stream, the patina of
            stone, or the quiet poetry of a distant city. A passionate traveller,
            Shruti draws from her journeys across the world — translating the
            colours, cultures, and moods she encounters into subtle details within
            her interiors. Each project, thus, becomes a reflection of both the
            world she’s seen and the world she wishes to create.
          </motion.p>

          <motion.p variants={item}>
            At her studio, she leads every project hands-on, from the first sketch
            to the final touch — crafting spaces that feel deeply personal and
            effortlessly elegant. Her portfolio spans luxury residences, boutique
            commercial spaces, and curated design experiences that celebrate
            craftsmanship, calm, and character. For Shruti, design is an act of
            storytelling — where emotion is as integral as proportion, and beauty
            is found not in excess, but in honesty. Her work has been described as
            “poetic minimalism” — spaces that carry a quiet rhythm, inviting light,
            life, and a sense of belonging into every corner.
          </motion.p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-16 grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-24"
        >
          <motion.div variants={item} className="text-center">
            <div className="mx-auto mb-6 h-px w-[150px] bg-[#C9B27D]" />
            <h3 className="text-4xl md:text-5xl text-[#C9B27D] leading-tight">
              8 years
              <br />
              experience
            </h3>
            <p className="mt-3 text-sm text-black">Estd. in 2014</p>
          </motion.div>

          <motion.div variants={item} className="text-center">
            <div className="mx-auto mb-6 h-px w-[150px] bg-[#C9B27D]" />
            <h3 className="text-4xl md:text-5xl text-[#C9B27D] leading-tight">
              50,000
              <br />
              sqft
            </h3>
            <p className="mt-3 text-sm text-black">currently under construction</p>
          </motion.div>

          <motion.div variants={item} className="text-center">
            <div className="mx-auto mb-6 h-px w-[150px] bg-[#C9B27D]" />
            <h3 className="text-4xl md:text-5xl text-[#C9B27D] leading-tight">
              15 team
              <br />
              members
            </h3>
            <p className="mt-3 text-sm text-black">and growing</p>
          </motion.div>

          <motion.div variants={item} className="text-center">
            <div className="mx-auto mb-6 h-px w-[140px] bg-[#C9B27D]" />
            <h3 className="text-4xl md:text-5xl text-[#C9B27D] leading-tight">
              15
              <br />
              projects
            </h3>
            <p className="mt-3 text-sm text-black">completed successfully</p>
          </motion.div>
        </motion.div>

        <motion.div
          variants={item}
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          className="mt-20 h-px w-full bg-[#C9B27D]"
        />
      </div>
    </section>
  );
}
