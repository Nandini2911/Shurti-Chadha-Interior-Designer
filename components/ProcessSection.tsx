'use client';

export default function ProcessSection() {
  return (
    <section className="w-full bg-white">
      <div className="w-full px-[2.5vw] pt-4 py-10">

        {/* Shared width wrapper */}
        <div className="mx-auto max-w-[85vw]">

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="/shruti.jpg"
              alt="Shruti Chadha creative process"
              className="w-full object-cover rounded-3xl"
            />
          </div>

          {/* Text */}
          <div className="mt-16 space-y-6 text-justify hyphens-auto text-sm leading-[1.6] text-neutral-800 md:text-lg">
            <p>
              Her creative process is deeply intuitive — guided as much by feeling
              as by form. Each concept begins with emotion, often distilled into a
              single thought or word that becomes the essence of the space. From
              there, materials, palettes, and compositions emerge organically,
              building an environment that feels as if it has always belonged.
              Whether it’s the way sunlight falls across a wall, the texture of
              hand-poured concrete, or the warmth of aged brass — Shruti curates
              these details with an almost meditative precision. The result is
              design that feels lived-in yet elevated, grounded yet graceful.
            </p>

            <p>
              Beyond interiors, Shruti’s work extends into a larger creative
              vision — one that celebrates the art of living with intention. She
              often collaborates with artisans, photographers, and contemporary
              creators to explore new intersections between design, craft, and
              culture. Through her studio and her voice, she continues to
              champion slow design, mindful creation, and the enduring power of
              spaces that make people feel — not just impressed, but understood.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
