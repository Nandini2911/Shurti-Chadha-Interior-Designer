"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Close menu on resize
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // Detect scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
   <header className={`ea-header ${scrolled ? "scrolled" : ""}`}>
      <div className="ea-nav">
        
        {/* LEFT */}
        <nav className="ea-left">
          <ul>
            <li><Link href="/">HOME</Link></li>
            <li><Link href="/about">ABOUT</Link></li>
            <li><Link href="/media">MEDIA</Link></li>
          </ul>
        </nav>

        {/* LOGO */}
        <div className="ea-logo">
          <Link href="/" className={`ea-wordmark transition ${
            scrolled ? "text-black" : "text-white"
          }`}>
            SHRUTI&nbsp;CHADHA
          </Link>
        </div>

        {/* RIGHT */}
        <nav className="ea-right">
          <ul>
            <li><Link href="/gallery">GALLERY</Link></li>
            <li><Link href="/blog">BLOG</Link></li>
            <li><Link href="/contact">CONTACT</Link></li>
          </ul>
        </nav>

        {/* BURGER */}
        <button
          className="ea-burger"
          onClick={() => setOpen(!open)}
        >
          <span />
          <span />
        </button>
      </div>

      {/* MOBILE */}
      <div className={`ea-mobile ${open ? "is-open" : ""}`}>
        <nav className="ea-mobile-nav">
          <Link href="/" onClick={closeMenu}>HOME</Link>
          <Link href="/about" onClick={closeMenu}>ABOUT</Link>
          <Link href="/media" onClick={closeMenu}>MEDIA</Link>
          <Link href="/gallery" onClick={closeMenu}>GALLERY</Link>
          <Link href="/blog" onClick={closeMenu}>BLOG</Link>
          <Link href="/contact" onClick={closeMenu}>CONTACT</Link>
        </nav>
      </div>
    </header>
  );
}