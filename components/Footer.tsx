'use client';

import { motion, type Variants } from 'framer-motion';

export default function Footer() {
  const easeOutExpo = 'easeOut';

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
    hidden: {
      opacity: 0,
      y: 28,
    },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.85,
        ease: easeOutExpo,
      },
    },
  };

  const viewport = {
    once: true,
    amount: 0.25,
  };

  return (
    <footer className="w-full bg-white">
      {/* Top Border */}
      <div className="w-full border-t border-[#e5d9b8]/40" />

      {/* Main Footer */}
      <div className="relative w-full px-6 py-10 sm:px-8 md:px-[2.5vw]">
        {/* Desktop Vertical Divider */}
        <div className="absolute bottom-0 left-[calc(100%-420px-1px)] top-0 hidden w-px bg-[#e5d9b8] md:block" />

        <div className="grid grid-cols-1 items-start gap-12 md:grid-cols-[1fr_420px] md:gap-10">
          {/* Left Section */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="text-neutral-900"
          >
            <motion.p
              variants={item}
              className="mx-auto max-w-3xl text-center text-base leading-relaxed"
            >
              Address: 10/1, Block No. 2, W.H.S, Kirti Nagar Industrial Area,
              Kirti Nagar, New Delhi, Delhi – 110015
            </motion.p>

            {/* Social Icons */}
            <motion.div
              variants={item}
              className="mt-8 flex flex-wrap items-center justify-center gap-6 text-[#C9B27D] sm:gap-10"
            >
              {/* Instagram */}
              <a
                href="https://www.instagram.com/shrutichadha_/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Shruti Chadha on Instagram"
                className="group inline-flex h-11 w-11 items-center justify-center rounded-md border border-[#C9B27D] transition-all duration-300 hover:scale-105 hover:bg-[#C9B27D]"
              >
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="text-[#C9B27D] transition-colors duration-300 group-hover:text-white"
                  aria-hidden="true"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle
                    cx="17.5"
                    cy="6.5"
                    r="0.8"
                    fill="currentColor"
                  />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="https://in.linkedin.com/in/shruti-chadha-4951b456"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Visit Shruti Chadha on LinkedIn"
                className="group inline-flex h-11 w-11 items-center justify-center rounded-md border border-[#C9B27D] transition-all duration-300 hover:scale-105 hover:bg-[#C9B27D]"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="text-[#C9B27D] transition-colors duration-300 group-hover:text-white"
                  aria-hidden="true"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.49 6S0 4.88 0 3.5 1.11 1 2.49 1s2.49 1.12 2.49 2.5zM.24 8.09h4.5V24H.24zM7.98 8.09h4.31v2.17h.06c.6-1.13 2.07-2.31 4.26-2.31 4.55 0 5.39 3 5.39 6.89V24h-4.5v-7.44c0-1.77-.03-4.05-2.47-4.05-2.47 0-2.85 1.93-2.85 3.93V24h-4.5v-7.56c0-2-.38-3.93-2.85-3.93-2.44 0-2.47 2.28-2.47 4.05V24h-4.5z" />
                </svg>
              </a>

              {/* Email */}
              <a
                href="mailto:contact@shrutichadha.com"
                aria-label="Email Shruti Chadha"
                className="group inline-flex h-11 w-11 items-center justify-center rounded-md border border-[#C9B27D] transition-all duration-300 hover:scale-105 hover:bg-[#C9B27D]"
              >
                <svg
                  width="19"
                  height="19"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  className="text-[#C9B27D] transition-colors duration-300 group-hover:text-white"
                  aria-hidden="true"
                >
                  <path d="M4 6h16v12H4z" />
                  <path d="M4 7l8 6 8-6" />
                </svg>
              </a>
            </motion.div>
          </motion.div>

          {/* Right Section */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={viewport}
            className="text-center text-neutral-900 md:pl-40 md:text-left"
          >
            <motion.h3 variants={item} className="mb-5 text-2xl">
              Pages
            </motion.h3>

            <motion.ul variants={container} className="space-y-4 text-sm">
              <motion.li variants={item}>
                <a
                  href="#home"
                  className="transition-colors duration-300 hover:text-[#A58C56] hover:underline hover:underline-offset-4"
                >
                  HOME
                </a>
              </motion.li>

              <motion.li variants={item}>
                <a
                  href="#about"
                  className="transition-colors duration-300 hover:text-[#A58C56] hover:underline hover:underline-offset-4"
                >
                  ABOUT
                </a>
              </motion.li>

              <motion.li variants={item}>
                <a
                  href="/gallery"
                  className="transition-colors duration-300 hover:text-[#A58C56] hover:underline hover:underline-offset-4"
                >
                  GALLERY
                </a>
              </motion.li>

              <motion.li variants={item}>
                <a
                  href="#contact"
                  className="transition-colors duration-300 hover:text-[#A58C56] hover:underline hover:underline-offset-4"
                >
                  CONTACT
                </a>
              </motion.li>

              <motion.li variants={item}>
                <a
                  href="/privacy-policy"
                  className="transition-colors duration-300 hover:text-[#A58C56] hover:underline hover:underline-offset-4"
                >
                  PRIVACY POLICY
                </a>
              </motion.li>
            </motion.ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Border */}
      <div className="w-full border-t border-[#e5d9b8]" />

      {/* Copyright and Development Credit */}
      <motion.div
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        variants={item}
        className="flex flex-col items-center justify-center gap-2 px-6 py-7 text-center text-sm text-neutral-700 md:flex-row md:gap-3"
      >
        <span>© Shruti Chadha 2025. All Rights Reserved.</span>

        <span className="hidden text-[#C9B27D] md:inline">•</span>

        <span>
       Conceptualized, Designed &amp;  Developed by{' '}
          <a
            href="https://dtsworld.in"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Visit Double Trouble Studio"
            className="font-medium text-[#A58C56] transition-colors duration-300 hover:text-neutral-900 hover:underline hover:underline-offset-4"
          >
            Double Trouble Studio
          </a>
        </span>
      </motion.div>
    </footer>
  );
}