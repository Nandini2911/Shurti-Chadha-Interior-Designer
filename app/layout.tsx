import Navbar from "@/components/Navbar";
import "./globals.css";
import { Playfair_Display } from "next/font/google";
import Script from "next/script";

export const metadata = {
  metadataBase: new URL("https://www.shrutichadha.com"),

  title: {
    default: "Shruti Chadha | Luxury Interior Designer in Delhi",
    template: "%s | Shruti Chadha Studio",
  },

  description:
    "Shruti Chadha is a luxury interior designer in Delhi offering residential and commercial interior design services across Delhi NCR.",

  keywords: [
    "Luxury Interior Designer Delhi",
    "Interior Designer Delhi NCR",
    "Residential Interior Designer Delhi",
    "Minimalist Interior Design India",
  ],

  openGraph: {
    title: "Shruti Chadha — Interior Designer & Creative Entrepreneur",
    description:
      "Discover poetic minimalism and luxury interior design by Shruti Chadha.",
    url: "https://www.shrutichadha.com/",
    siteName: "Shruti Chadha Studio",
    images: [
      {
        url: "https://cdn.shopify.com/s/files/1/0784/4898/4280/files/IMG_8538.jpg?v=1762865290",
        width: 1200,
        height: 630,
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Shruti Chadha — Interior Designer",
    description: "Luxury interiors that breathe and inspire.",
    images: [
      "https://cdn.shopify.com/s/files/1/0784/4898/4280/files/IMG_8538.jpg?v=1762865290",
    ],
  },

  robots: {
    index: true,
    follow: true,
  },
};




const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={playfair.className}>
        {/* Google Analytics */}
<Script
  src="https://www.googletagmanager.com/gtag/js?id=G-NGM3G6G1YV"
  strategy="afterInteractive"
/>

<Script id="google-analytics" strategy="afterInteractive">
  {`
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-NGM3G6G1YV');
  `}
</Script>

      <Navbar/>
      <Script
  id="schema"
  type="application/ld+json"
  strategy="afterInteractive"
>
  {`
  {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "name": "Shruti Chadha Studio",
    "url": "https://www.shrutichadha.com",
    "logo": "https://www.shrutichadha.com/assets/logo.png",
    "image": "https://cdn.shopify.com/s/files/1/0784/4898/4280/files/IMG_8538.jpg?v=1762865290",
    "description": "Luxury interior design studio in Delhi NCR specializing in minimalist interiors.",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Delhi",
      "addressRegion": "Delhi",
      "addressCountry": "IN"
    },
    "areaServed": ["Delhi", "Gurugram", "Noida"],
    "founder": {
      "@type": "Person",
      "name": "Shruti Chadha"
    }
  }
  `}
</Script>


        {children}
      </body>
    </html>
  );
}
