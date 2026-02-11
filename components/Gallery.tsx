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
              className="image"
              priority={index < 3}
            />
          </div>
        ))}
      </div>

      <style jsx>{`
        .gallery {
          padding: 90px 80px 120px;
          background-color: #f4e0c4;
          min-height: 100vh;
        }

        .header {
          text-align: center;
          margin-bottom: 70px;
        }

        .header h1 {
          font-family: "Playfair Display", serif;
          font-size: 48px;
          letter-spacing: 2px;
          margin-bottom: 12px;
        }

        .header p {
          font-size: 16px;
          color: #7a7a7a;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 40px;
        }

        .card {
          position: relative;
          height: 260px;
          border-radius: 26px;
          overflow: hidden;
          background-color: #e8d2b4;
        }

        .image {
          object-fit: cover;
        }

        @media (max-width: 1024px) {
          .grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 640px) {
          .gallery {
            padding: 60px 20px;
          }

          .header h1 {
            font-size: 36px;
          }

          .grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
}
