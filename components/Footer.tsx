'use client';

import { motion, type Variants } from 'framer-motion';

export default function Footer() {
  const easeOutExpo = [0.22, 1, 0.36, 1] as const;

  const container: Variants = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.05,
      },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 28 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.85, ease: easeOutExpo },
    },
  };

  const viewport = { once: true, amount: 0.25 };

  return (
    <footer className="w-full bg-white">
      <div className="w-full border-t border-[#e5d9b8]/40" />

      <div className="w-full px-[2.5vw] py-10 relative">
        <div className="hidden md:block absolute top-0 bottom-0 left-[calc(100%-420px-1px)] w-px bg-[#e5d9b8]" />

        <div className="grid grid-cols-1 md:grid-cols-[1fr_420px] items-start gap-10">
          {/* Left */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="text-neutral-900"
          >
            <motion.p
              variants={item}
              className="text-base leading-relaxed justify-center text-center"
            >
              Address: 10/1, Block No.2,W.H.S, Kirti Nagar Industrial Area, Kirti
              Nagar, New Delhi, Delhi - 110015
            </motion.p>

            <motion.p variants={item} className="mt-8 text-center text-base" />

            {/* Social icons */}
            <motion.div
              variants={item}
              className="mt-5 flex items-center justify-center gap-10 text-[#C9B27D]"
            >
              {/* Instagram */}
              <a
                href="https://www.instagram.com/shrutichadha_/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="group inline-flex h-11 w-11 items-center justify-center rounded-md border border-[#C9B27D] transition-all duration-300 hover:bg-[#C9B27D] hover:scale-105"
              >
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="text-[#C9B27D] group-hover:text-white transition-colors duration-300"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
                </svg>
              </a>

              {/* LinkedIn (clear + attractive) */}
              <a
                href="https://in.linkedin.com/in/shruti-chadha-4951b456"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="group inline-flex h-11 w-11 items-center justify-center rounded-md border border-[#C9B27D] transition-all duration-300 hover:bg-[#C9B27D] hover:scale-105"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-[#C9B27D] group-hover:text-white transition-colors duration-300"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.11 1 2.49 1s2.49 1.12 2.49 2.5zM.24 8.09h4.5V24H.24zM7.98 8.09h4.31v2.17h.06c.6-1.13 2.07-2.31 4.26-2.31 4.55 0 5.39 3 5.39 6.89V24h-4.5v-7.44c0-1.77-.03-4.05-2.47-4.05-2.47 0-2.85 1.93-2.85 3.93V24h-4.5z" />
                </svg>
              </a>

              {/* Email */}
            <a
                 href="mailto:contact@shrutichadha.com"
                 aria-label="Email"
                 className="group inline-flex h-11 w-11 items-center justify-center rounded-md border border-[#C9B27D] transition-all duration-300 hover:bg-[#C9B27D] hover:scale-105"
>
             <svg
                width="19"
                height="19"
                 viewBox="0 0 24 24"
                 fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="text-[#C9B27D] group-hover:text-white transition-colors duration-300"
  >
               <path d="M4 6h16v12H4z" />
              <path d="M4 7l8 6 8-6" />
  </svg>
</a>

            </motion.div>
          </motion.div>

          {/* Right */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="text-neutral-900 md:pl-40"
          >
            <motion.h3 variants={item} className="text-2xl mb-5">
              Pages
            </motion.h3>

            <motion.ul variants={container} className="space-y-4 text-sm">
              <motion.li variants={item}>
                <a href="#home" className="hover:underline underline-offset-4">
                  HOME
                </a>
              </motion.li>
              <motion.li variants={item}>
                <a href="#about" className="hover:underline underline-offset-4">
                  ABOUT
                </a>
              </motion.li>
              <motion.li variants={item}>
                <a href="#gallery" className="hover:underline underline-offset-4">
                  GALLERY
                </a>
              </motion.li>
              <motion.li variants={item}>
                <a href="#contact" className="hover:underline underline-offset-4">
                  CONTACT
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>
        </div>
      </div>

      <div className="w-full border-t border-[#e5d9b8]" />

      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={item}
        className="py-8 text-center text-base text-neutral-900"
      >
        © Shruti Chadha 2025. All Rights Reserved.
      </motion.div>
    </footer>
  );
}
