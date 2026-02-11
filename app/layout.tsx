import Navbar from "@/components/Navbar";
import "./globals.css";
import { Playfair_Display } from "next/font/google";


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
      <Navbar/>
        {children}
      </body>
    </html>
  );
}
