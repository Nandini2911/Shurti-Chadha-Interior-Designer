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

  const closeMenu = () => setOpen(false);

  return (
    <header className="ea-header">
      <div className="ea-nav">
        {/* Left Menu (Desktop) */}
        <nav className="ea-left" aria-label="Primary left">
          <ul>
            <li>
              <Link href="/" onClick={closeMenu}>
                HOME
              </Link>
            </li>
            <li>
              <Link href="#about" onClick={closeMenu}>
                ABOUT
              </Link>
            </li>
          </ul>
        </nav>

        {/* Center Logo (Always Center) */}
        <div className="ea-logo">
          <Link href="/" className="ea-wordmark" onClick={closeMenu}>
            SHRUTI&nbsp;CHADHA
          </Link>
        </div>

        {/* Right Menu (Desktop) */}
        <nav className="ea-right" aria-label="Primary right">
          <ul>
            <li>
              <Link href="/Gallery" onClick={closeMenu}>
                GALLERY
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={closeMenu}>
                CONTACT
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile button (Burger) */}
        <button
          className="ea-burger"
          aria-label="Toggle menu"
          aria-expanded={open}
          aria-controls="ea-mobile-nav"
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div className={`ea-mobile ${open ? "is-open" : ""}`}>
        <nav id="ea-mobile-nav" className="ea-mobile-nav" aria-label="Mobile menu">
          <Link href="/" onClick={closeMenu}>
            HOME
          </Link>
          <Link href="#about" onClick={closeMenu}>
            ABOUT
          </Link>
          <Link href="/gallery" onClick={closeMenu}>
            GALLERY
          </Link>
          <Link href="/contact" onClick={closeMenu}>
            CONTACT
          </Link>
        </nav>
      </div>
    </header>
  );
}
