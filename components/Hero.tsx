'use client';

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      >
        <source
          src="https://cdn.shopify.com/videos/c/o/v/4ce3641019bc415593c29933aa303659.mp4"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div className="absolute " />

      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-6">
        <div className="max-w-4xl text-center text-white">
          
          <p
            className="mb-4 text-sm tracking-widest uppercase opacity-80 animate-slide-up"
            style={{ animationDelay: '0.2s' }}
          >
            Interior Design Studio
          </p>

          <h1
            className="mb-6 text-4xl font-light leading-tight md:text-6xl animate-slide-up"
            style={{ animationDelay: '0.5s' }}
          >
            Quiet Luxury
            <br />
            Crafted in Texture
          </h1>

          <p
            className="mx-auto max-w-xl text-base opacity-90 md:text-lg animate-slide-up"
            style={{ animationDelay: '0.8s' }}
          >
            Thoughtful interiors shaped by proportion, light, and material.
          </p>

        </div>
      </div>
    </section>
  );
}
