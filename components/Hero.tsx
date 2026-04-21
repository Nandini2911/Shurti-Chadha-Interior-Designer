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

    
    </section>
  );
}
