"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth > 1024) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return (
    <header className="ea-header">
      <div className="ea-nav">
        {/* Left Menu */}
        <nav className="ea-left">
          <ul>
            <li><Link href="/">HOME</Link></li>
            <li><Link href="#about">ABOUT</Link></li>
          </ul>
        </nav>

        {/* Center Logo */}
        <div className="ea-logo">
          <Link href="/" className="ea-wordmark" onClick={() => setOpen(false)}>
            SHRUTI&nbsp;CHADHA
          </Link>
        </div>

        {/* Right Menu */}
        <nav className="ea-right"> 
          
          <ul>
            <li><Link href="/Gallery">GALLERY</Link></li>
            <li><Link href="/contact">CONTACT</Link></li>
          </ul>
        </nav>

        {/* Mobile button */}
        <button
          className="ea-burger"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(v => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div className={`ea-mobile ${open ? "is-open" : ""}`}>
        <nav className="ea-mobile-nav">
          <Link href="/" onClick={() => setOpen(false)}>HOME</Link>
          <Link href="#about" onClick={() => setOpen(false)}>ABOUT</Link>
          <Link href="/gallery" onClick={() => setOpen(false)}>GALLERY</Link>
          <Link href="/contact" onClick={() => setOpen(false)}>CONTACT</Link>
        </nav>
      </div>
    </header>
  );
}
