'use client';

export default function MediaFeatures() {
  const logos = [
    { src: "/shruti1.webp", alt: "The Architect's Diary" },
    { src: "/shruti2.webp", alt: "AD" },
    { src: "/shruti3.webp", alt: "Elle Decor" },
    { src: "/shruti4.webp", alt: "Interiors" },
    { src: "/shruti5.webp", alt: "GoodHomes" },
  ];

  // seamless loop
  const marqueeLogos = [...logos, ...logos, ...logos];

  return (
    <section className="w-full bg-white">
      {/* TOP DIVIDER */}
      <div className="h-px w-full bg-[#e5d9b8]" />

      {/* MEDIA FEATURES */}
      <div className="w-full px-[2.5vw] py-16 md:py-20">
        <div className="text-center">
          <h2 className="text-3xl md:text-5xl tracking-tight text-[#C9B27D]">
            Media Features
          </h2>
          <div className="mx-auto mt-4 h-px w-24 bg-[#e5d9b8]" />
        </div>

        {/* Logos marquee */}
        <div className="mt-12 overflow-hidden">
          <div className="animate-marquee flex items-center gap-12 md:gap-16">
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

      {/* DIVIDER AFTER MEDIA FEATURES */}
      <div className="h-px w-full bg-[#e5d9b8]" />

      {/* CONTACT / FOOTER SECTION (same as screenshot) */}
      <div className="w-full px-[2.5vw] py-14 md:py-20">
        <div className="max-w-[980px]">
          <h2 className="text-[#C9B27D] text-4xl md:text-3xl leading-tight">
            Have a question for us?
            <br />
            Let’s talk.
          </h2>

          <div className="mt-10 space-y-3 text-base md:text-lg text-neutral-900">
            <p className="leading-relaxed">
              For all project inquiries, please email{" "}
              <a
                href="mailto:work@shrutichadha.com?subject=NEW%20PROJECT"
                className="underline underline-offset-4"
              >
                work@shrutichadha.com
              </a>{" "}
              with the subject <br />
              <span className="font-medium">NEW PROJECT.</span>
            </p>

            <p className="leading-relaxed">
              For all job inquiries, please write to{" "}
              <a
                href="mailto:contact@shrutichadha.com"
                className="underline underline-offset-4"
              >
                contact@shrutichadha.com
              </a>
            </p>
          </div>
        </div>

     

                 </div>
       

      {/* BOTTOM DIVIDER */}
      <div className="h-px w-full bg-[#e5d9b8]" />
    </section>
  );
}
