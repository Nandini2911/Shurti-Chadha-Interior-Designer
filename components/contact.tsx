"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { motion, type Variants } from "framer-motion";
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

  // ✅ same animation style (TS-safe)
  const easeOutExpo = [0.22, 1, 0.36, 1] as const;

  const container: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: 0.14, delayChildren: 0.06 },
    },
  };

  const item: Variants = {
    hidden: { opacity: 0, y: 36 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.85, ease: easeOutExpo },
    },
  };

  const viewport = { once: true, amount: 0.25 };

  return (
    <section className="bg-white min-h-screen px-6 md:px-16 pt-24 pb-32">
      {/* Title */}
      <motion.h1
        variants={item}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="text-center font-serif text-4xl md:text-5xl text-[#c6a46a] mb-20"
      >
        Contact Us
      </motion.h1>

      {/* Info Cards (card-wise) */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-28"
      >
        {/* Address */}
        <motion.div variants={item} className="border border-gray-200 rounded-2xl p-8">
          <h3 className="font-serif text-xl mb-4">Address</h3>
          <p className="text-sm leading-7 text-gray-700">
            10/1, Block No.2, W.H.S, Kirti Nagar Industrial Area,
            <br />
            Kirti Nagar, New Delhi, Delhi 110015
          </p>
        </motion.div>

        {/* Email */}
        <motion.div variants={item} className="border border-gray-200 rounded-2xl p-8">
          <h3 className="font-serif text-xl mb-4">Email</h3>
          <a
            href="mailto:work@shrutichadha.com"
            className="text-sm text-[#c6a46a] underline"
          >
            work@shrutichadha.com
          </a>
        </motion.div>

        {/* Social */}
        <motion.div variants={item} className="border border-gray-200 rounded-2xl p-8">
          <h3 className="font-serif text-xl mb-6">Social</h3>
          <div className="flex flex-wrap gap-4">
            <a href="https://www.instagram.com/" target="_blank" className={iconClass}>
              <FaInstagram />
            </a>
            <a href="https://www.linkedin.com/" target="_blank" className={iconClass}>
              <FaLinkedinIn />
            </a>
            <a href="https://www.youtube.com/" target="_blank" className={iconClass}>
              <FaYoutube />
            </a>
            <a href="https://www.facebook.com/" target="_blank" className={iconClass}>
              <FaFacebookF />
            </a>
            <a href="https://www.pinterest.com/" target="_blank" className={iconClass}>
              <FaPinterestP />
            </a>
            <a href="https://www.reddit.com/" target="_blank" className={iconClass}>
              <FaRedditAlien />
            </a>
            <a href="https://www.quora.com/" target="_blank" className={iconClass}>
              <FaQuora />
            </a>
          </div>
        </motion.div>
      </motion.div>

      {/* Project Enquiry Form */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={viewport}
        className="max-w-4xl mx-auto border border-gray-200 rounded-3xl px-8 md:px-16 py-16"
      >
        <motion.h2 variants={item} className="text-center font-serif text-3xl mb-2">
          Project Enquiry
        </motion.h2>

        <motion.p variants={item} className="text-center text-gray-600 text-sm mb-12">
          Tell us a bit about your project and we’ll get back within 1–2 business days.
        </motion.p>

        <motion.form variants={container} ref={formRef} onSubmit={handleSubmit} className="space-y-8">
          <motion.div variants={item} className="grid grid-cols-1 md:grid-cols-2 gap-6">
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
          </motion.div>

          <motion.div variants={item}>
            <input
              name="phone"
              required
              placeholder="Phone *"
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-[#c6a46a] outline-none"
            />
          </motion.div>

          <motion.div variants={item}>
            <textarea
              name="message"
              required
              rows={6}
              placeholder="Tell us about your goals, timeline, and any references."
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:border-[#c6a46a] outline-none"
            />
          </motion.div>

          <motion.div variants={item} className="text-center pt-6">
            <button
              type="submit"
              disabled={loading}
              className="border border-[#c6a46a] text-[#c6a46a] px-8 py-3 rounded-lg hover:bg-[#c6a46a] hover:text-white transition disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Enquiry"}
            </button>
          </motion.div>

          {/* Status messages */}
          {status === "success" && (
            <motion.p variants={item} className="text-center text-green-600 text-sm">
              ✅ Mail successfully sent. We’ll contact you soon.
            </motion.p>
          )}

          {status === "error" && (
            <motion.p variants={item} className="text-center text-red-600 text-sm">
              ❌ Mail nahi gayi. Please try again later.
            </motion.p>
          )}
        </motion.form>
      </motion.div>
    </section>
  );
}
