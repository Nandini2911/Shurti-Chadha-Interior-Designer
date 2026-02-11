'use client';

export default function Footer() {
  return (
    <footer className="w-full bg-white">
      {/* Top line (thin) */}
      <div className="w-full border-t border-[#e5d9b8]/40" />

      {/* Main footer row */}
      <div className="w-full px-[2.5vw] py-10 relative">
        {/* ✅ Vertical divider that touches top & bottom inside this block */}
        <div className="hidden md:block absolute top-0 bottom-0 left-[calc(100%-420px-1px)] w-px bg-[#e5d9b8]" />

        <div className="grid grid-cols-1 md:grid-cols-[1fr_420px] items-start gap-10">
          {/* Left: Address + icons */}
          <div className="text-neutral-900">
            <p className="text-base leading-relaxed">
              Address: 10/1, Block No.2,W.H.S, Kirti Nagar Industrial Area, Kirti
              Nagar, New Delhi, Delhi
            </p>

            <p className="mt-8 text-center text-base">110015</p>

            {/* Social icons */}
            <div className="mt-5 flex items-center justify-center gap-10 text-[#C9B27D]">
              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#C9B27D]"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <rect x="3" y="3" width="18" height="18" rx="5" />
                  <circle cx="12" cy="12" r="4" />
                  <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" />
                </svg>
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                aria-label="LinkedIn"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#C9B27D]"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M6.94 8.5H4.5V20h2.44V8.5zM5.72 4.5c-.78 0-1.41.64-1.41 1.42S4.94 7.3 5.72 7.3c.79 0 1.42-.63 1.42-1.38 0-.78-.63-1.42-1.42-1.42zM20 20h-2.44v-5.9c0-1.4-.03-3.2-1.95-3.2-1.95 0-2.25 1.52-2.25 3.1V20H10.9V8.5h2.34v1.57h.03c.33-.62 1.14-1.27 2.35-1.27 2.51 0 2.97 1.65 2.97 3.8V20z" />
                </svg>
              </a>

              {/* Email */}
              <a
                href="mailto:work@shrutichadha.com"
                aria-label="Email"
                className="inline-flex h-10 w-10 items-center justify-center rounded-md border border-[#C9B27D]"
              >
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.8"
                >
                  <path d="M4 6h16v12H4z" />
                  <path d="M4 7l8 6 8-6" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right: Pages */}
          <div className="text-neutral-900 md:pl-40">
            <h3 className="text-2xl mb-5">Pages</h3>
            <ul className="space-y-4 text-sm">
              <li>
                <a href="#home" className="hover:underline underline-offset-4">
                  HOME
                </a>
              </li>
              <li>
                <a href="#about" className="hover:underline underline-offset-4">
                  ABOUT
                </a>
              </li>
              <li>
                <a href="#gallery" className="hover:underline underline-offset-4">
                  GALLERY
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:underline underline-offset-4">
                  CONTACT
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom line */}
      <div className="w-full border-t border-[#e5d9b8]" />

      {/* Copyright line */}
      <div className="py-8 text-center text-base text-neutral-900">
        © Shruti Chadha 2025. All Rights Reserved.
      </div>
    </footer>
  );
}
