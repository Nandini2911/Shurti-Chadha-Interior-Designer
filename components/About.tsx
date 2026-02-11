'use client';

export default function About() {
  const stats = [
    { value: "10 years", label: "experience" },
    { value: "Estd. in 2014", label: "" },
    { value: "150,000", label: "sqft currently under construction" },
    { value: "25 team", label: "members and growing" },
    { value: "100", label: "projects completed successfully" },
  ];

  return (
    <section id="about" className="w-full bg-white">
      {/* Full width with tight side margins */}
      <div className="w-full px-[2.5vw] py-14 md:py-20">
        {/* Heading centered like navbar aesthetic */}
        <div className="text-center">
          <h2 className="text-4xl  tracking-tight md:text-5xl text-[#C9B27D]">
            SHRUTI CHADHA
          </h2>

          <p className="mt-3 text-base tracking-wide text-black md:text-lg  md:py-8">
            Interior Designer | Entrepreneur | Space Curator
          </p>
        </div>

        {/* Paragraphs: LEFT aligned, full width, editorial spacing */}
<div className="mt-2 space-y-5 text-justify hyphens-auto text-sm leading-[1.6] text-neutral-800 md:text-lg">
          <p>
            Shruti Chadha is a Delhi-based interior designer and creative
            entrepreneur, known for her poetic approach to design — one that
            marries minimalism with warmth, precision with emotion, and structure
            with soul. As the founder and principal designer of her namesake
            studio, she has built a practice grounded in authenticity, material
            honesty, and a deep reverence for nature.
          </p>

          <p>
            Shruti believes that spaces should breathe — and that every room must
            tell its own story. Her design language is rooted in organic textures,
            balanced proportions, and timeless calm. Inspiration, for her, often
            begins outside the studio — in the flow of a stream, the patina of
            stone, or the quiet poetry of a distant city. A passionate traveller,
            Shruti draws from her journeys across the world — translating the
            colours, cultures, and moods she encounters into subtle details within
            her interiors. Each project, thus, becomes a reflection of both the
            world she’s seen and the world she wishes to create.
          </p>

          <p>
            At her studio, she leads every project hands-on, from the first sketch
            to the final touch — crafting spaces that feel deeply personal and
            effortlessly elegant. Her portfolio spans luxury residences, boutique
            commercial spaces, and curated design experiences that celebrate
            craftsmanship, calm, and character. For Shruti, design is an act of
            storytelling — where emotion is as integral as proportion, and beauty
            is found not in excess, but in honesty. Her work has been described as
            “poetic minimalism” — spaces that carry a quiet rhythm, inviting light,
            life, and a sense of belonging into every corner.
          </p>
        </div>

        

        {/* Stats */}
<div className="mt-16 grid grid-cols-1 gap-y-16 md:grid-cols-2 md:gap-x-24">

  {/* 10 years */}
  <div className="text-center">
    <div className="mx-auto mb-6 h-px w-150 bg-[#C9B27D]" />
    <h3 className="text-4xl md:text-5xl text-[#C9B27D] leading-tight">
      10 years
      <br />
      experience
    </h3>
    <p className="mt-3 text-sm text-black">Estd. in 2014</p>
  </div>

  {/* 150,000 sqft */}
  <div className="text-center">
   <div className="mx-auto mb-6 h-px w-150 bg-[#C9B27D]" />
    <h3 className="text-4xl md:text-5xl text-[#C9B27D] leading-tight">
      150,000
      <br />
      sqft
    </h3>
    <p className="mt-3 text-sm text-black">
      currently under construction
    </p>
  </div>

  {/* 25 team */}
  <div className="text-center">
    <div className="mx-auto mb-6 h-px w-150 bg-[#C9B27D]" />
    <h3 className="text-4xl md:text-5xl text-[#C9B27D] leading-tight">
      25 team
      <br />
      members
    </h3>
    <p className="mt-3 text-sm text-black">and growing</p>
  </div>

  {/* 100 projects */}
  <div className="text-center">
    <div className="mx-auto mb-6 h-px w-140 bg-[#C9B27D]" />
    <h3 className="text-4xl md:text-5xl text-[#C9B27D] leading-tight">
      100
      <br />
      projects
    </h3>
    <p className="mt-3 text-sm text-black">
      completed successfully
    </p>
  </div>

</div>

<div className="mt-20 h-px w-full bg-[#C9B27D]" />


</div>



     
    </section>
  );
}
