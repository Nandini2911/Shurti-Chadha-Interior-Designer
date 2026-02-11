"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import {
  FaInstagram,
  FaLinkedinIn,
  FaYoutube,
  FaFacebookF,
  FaPinterestP,
  FaRedditAlien,
  FaQuora,
} from "react-icons/fa";

export default function Contact() {
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<"success" | "error" | "">("");
  const formRef = useRef<HTMLFormElement>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const form = formRef.current;
    if (!form) {
      setLoading(false);
      return;
    }

    const formData = new FormData(form);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: formData.get("name"),
          email: formData.get("email"),
          phone: formData.get("phone"),
          message: formData.get("message"),
        }),
      });

      if (res.ok) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    } finally {
      setLoading(false);
    }
  }

  const iconClass =
    "w-10 h-10 border border-[#c6a46a] rounded-lg flex items-center justify-center text-[#c6a46a] hover:bg-[#c6a46a] hover:text-white transition";

  return (
    <section className="bg-white min-h-screen px-6 md:px-16 pt-24 pb-32">
      
      {/* Title */}
      <h1 className="text-center font-serif text-4xl md:text-5xl text-[#c6a46a] mb-20">
        Contact Us
      </h1>

      {/* Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-28">

        {/* Address */}
        <div className="border border-gray-200 rounded-2xl p-8">
          <h3 className="font-serif text-xl mb-4">Address</h3>
          <p className="text-sm leading-7 text-gray-700">
            10/1, Block No.2, W.H.S, Kirti Nagar Industrial Area,<br />
            Kirti Nagar, New Delhi, Delhi 110015
          </p>
        </div>

        {/* Email */}
        <div className="border border-gray-200 rounded-2xl p-8">
          <h3 className="font-serif text-xl mb-4">Email</h3>
          <a
            href="mailto:work@shrutichadha.com"
            className="text-sm text-[#c6a46a] underline"
          >
            work@shrutichadha.com
          </a>
        </div>

        {/* Social */}
        <div className="border border-gray-200 rounded-2xl p-8">
          <h3 className="font-serif text-xl mb-6">Social</h3>
          <div className="flex flex-wrap gap-4">
            <a href="https://www.instagram.com/" target="_blank" className={iconClass}><FaInstagram /></a>
            <a href="https://www.linkedin.com/" target="_blank" className={iconClass}><FaLinkedinIn /></a>
            <a href="https://www.youtube.com/" target="_blank" className={iconClass}><FaYoutube /></a>
            <a href="https://www.facebook.com/" target="_blank" className={iconClass}><FaFacebookF /></a>
            <a href="https://www.pinterest.com/" target="_blank" className={iconClass}><FaPinterestP /></a>
            <a href="https://www.reddit.com/" target="_blank" className={iconClass}><FaRedditAlien /></a>
            <a href="https://www.quora.com/" target="_blank" className={iconClass}><FaQuora /></a>
          </div>
        </div>

      </div>

      {/* Project Enquiry Form */}
      <div className="max-w-4xl mx-auto border border-gray-200 rounded-3xl px-8 md:px-16 py-16">
        <h2 className="text-center font-serif text-3xl mb-2">
          Project Enquiry
        </h2>
        <p className="text-center text-gray-600 text-sm mb-12">
          Tell us a bit about your project and we’ll get back within 1–2 business days.
        </p>

        <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              name="name"
              required
              placeholder="Full Name *"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-[#c6a46a] outline-none"
            />
            <input
              name="email"
              type="email"
              required
              placeholder="Email *"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-[#c6a46a] outline-none"
            />
          </div>

          <input
            name="phone"
            required
            placeholder="Phone *"
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-[#c6a46a] outline-none"
          />

          <textarea
            name="message"
            required
            rows={6}
            placeholder="Tell us about your goals, timeline, and any references."
            className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-[#c6a46a] outline-none"
          />

          <div className="text-center pt-6">
            <button
              type="submit"
              disabled={loading}
              className="border border-[#c6a46a] text-[#c6a46a] px-8 py-3 rounded-lg hover:bg-[#c6a46a] hover:text-white transition disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Enquiry"}
            </button>
          </div>

          {status === "success" && (
            <p className="text-center text-green-600 text-sm">
              ✅ Mail successfully sent. We’ll contact you soon.
            </p>
          )}

          {status === "error" && (
            <p className="text-center text-red-600 text-sm">
              ❌ Mail nahi gayi. Please try again later.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
