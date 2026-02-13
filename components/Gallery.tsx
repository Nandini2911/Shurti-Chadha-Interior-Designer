"use client";

import Image from "next/image";

const images = [
  "/g1.webp",
  "/g2.webp",
  "/g3.webp",
  "/g4.webp",
  "/g5.webp",
  "/g6.webp",
  "/g9.webp",
  "/g10.webp",
  "/g7.webp",
];

export default function Gallery() {
  return (
    <section className="gallery">
      <div className="inner">
        <div className="header">
          <h1>GALLERY</h1>
          <p>A curated selection of spaces & details</p>
        </div>

        <div className="grid">
          {images.map((src, index) => (
            <div className="card" key={index}>
              <Image
                src={src}
                alt={`Gallery image ${index + 1}`}
                fill
                sizes="(max-width: 640px) 100vw,
                       (max-width: 900px) 50vw,
                       (max-width: 1200px) 33vw,
                       25vw"
                className="image"
                priority={index < 3}
              />
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .gallery {
          background-color: #f4e0c4;
          min-height: 100vh;
          padding: 90px 24px 120px;
        }

        .inner {
          width: 100%;
          max-width: 1900px;
          margin: 0 auto;
          padding: 0 56px;
        }

        .header {
          text-align: center;
          margin-bottom: 70px;
        }

        .header h1 {
          font-family: "Playfair Display", serif;
          font-size: clamp(36px, 2.2vw + 18px, 62px);
          letter-spacing: 2px;
          margin-bottom: 12px;
          color: #171717;
        }

        .header p {
          font-size: clamp(14px, 0.4vw + 12px, 18px);
          color: #7a7a7a;
        }

        /* ✅ LOCKED 4 COLUMNS FOR DESKTOP (2K / 4K INCLUDED) */
        .grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: clamp(20px, 1.5vw, 44px);
        }

        .card {
          position: relative;
          aspect-ratio: 16 / 10; /* better than fixed height */
          border-radius: 26px;
          overflow: hidden;
          background-color: #e8d2b4;
        }

        .image {
          object-fit: cover;
        }

        /* Large screens extra breathing space */
        @media (min-width: 2000px) {
          .inner {
            max-width: 2100px;
          }
        }

        /* Laptop */
        @media (max-width: 1200px) {
          .grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        /* Tablet */
        @media (max-width: 900px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }

          .inner {
            padding: 0 24px;
          }
        }

        /* Mobile */
        @media (max-width: 640px) {
          .gallery {
            padding: 60px 16px 90px;
          }

          .inner {
            padding: 0;
          }

          .grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
