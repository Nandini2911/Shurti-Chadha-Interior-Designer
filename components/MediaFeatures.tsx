'use client';

import { motion, type Variants } from 'framer-motion';

export default function MediaFeatures() {
  const logos = [
    { src: '/shruti1.webp', alt: "The Architect's Diary" },
    { src: '/shruti2.webp', alt: 'AD' },
    { src: '/shruti3.webp', alt: 'Elle Decor' },
    { src: '/shruti4.webp', alt: 'Interiors' },
    { src: '/shruti5.webp', alt: 'GoodHomes' },
  ];

  const marqueeLogos = [...logos, ...logos];

  // ✅ TS-safe ease tuple
  const easeOutExpo = [0.22, 1, 0.36, 1] as const;

  // ✅ TS-safe variants
  const slideUp: Variants = {
    hidden: { opacity: 0, y: 40 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.9,
        ease: easeOutExpo,
      },
    },
  };

  const viewport = { once: true, amount: 0.4 };

  return (
    <section className="w-full bg-white">
      {/* TOP DIVIDER */}
      <div className="h-px w-full bg-[#e5d9b8]" />

      {/* MEDIA FEATURES */}
      <div className="w-full px-[2.5vw] py-16 md:py-20">
        {/* Heading Animation */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={slideUp}
          className="text-center"
        >
          <h2 className="text-3xl md:text-5xl tracking-tight text-[#C9B27D]">
            Media Features
          </h2>
          <div className="mx-auto mt-4 h-px w-24 bg-[#e5d9b8]" />
        </motion.div>

        {/* Logos marquee (continuous scroll) */}
        <div className="mt-12 overflow-hidden">
          <div className="animate-marquee flex w-max items-center gap-12 md:gap-16">
            {marqueeLogos.map((logo, i) => (
              <div key={`${logo.alt}-${i}`} className="shrink-0 opacity-90">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-8 md:h-10 w-auto object-contain grayscale"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="h-px w-full bg-[#e5d9b8]" />

      {/* CONTACT SECTION */}
      <div className="w-full px-[2.5vw] py-14 md:py-20">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewport}
          variants={slideUp}
          className="max-w-[980px]"
        >
          <h2 className="text-[#C9B27D] text-4xl md:text-3xl leading-tight">
            Have a question for us?
            <br />
            Let’s talk.
          </h2>

          <div className="mt-10 space-y-3 text-base md:text-lg text-neutral-900">
            <p className="leading-relaxed">
              For all project inquiries, please email{' '}
              <a
                href="mailto:work@shrutichadha.com?subject=NEW%20PROJECT"
                className="underline underline-offset-4"
              >
                work@shrutichadha.com
              </a>{' '}
              with the subject <br />
              <span className="font-medium">NEW PROJECT.</span>
            </p>

            <p className="leading-relaxed">
              For all job inquiries, please write to{' '}
              <a
                href="mailto:contact@shrutichadha.com"
                className="underline underline-offset-4"
              >
                contact@shrutichadha.com
              </a>
            </p>
          </div>
        </motion.div>
      </div>

      {/* BOTTOM DIVIDER */}
      <div className="h-px w-full bg-[#e5d9b8]" />
    </section>
  );
}
