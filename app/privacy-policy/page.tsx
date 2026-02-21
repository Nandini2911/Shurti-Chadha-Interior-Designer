// app/privacy-policy/page.tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Shruti Chadha Interiors",
  description:
    "Privacy Policy for Shruti Chadha Interiors — how we collect, use, and protect your information.",
};

const EFFECTIVE_DATE = "[Insert Date]";
const EMAIL = "[Insert Email Address]";
const PHONE = "[Insert Contact Number]";

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen bg-white">
      <section className="mx-auto w-full max-w-3xl px-4 py-14 md:py-20">
        <header className="mb-10">
          <h1 className="text-3xl font-semibold tracking-tight md:text-4xl">
            Privacy Policy
          </h1>
          <p className="mt-2 text-lg text-neutral-700">Shruti Chadha Interiors</p>
          <p className="mt-4 text-sm text-neutral-600">
            <span className="font-medium text-neutral-800">Effective Date:</span>{" "}
            {EFFECTIVE_DATE}
          </p>
        </header>

        <div className="prose prose-neutral max-w-none">
          <p>
            Shruti Chadha Interiors (“we,” “our,” or “us”) values your privacy and
            is committed to protecting your personal information. This Privacy
            Policy explains how we collect, use, and safeguard the information
            you provide to us.
          </p>

          <h2>1. Information We Collect</h2>
          <p>
            We may collect the following information when you fill out a form,
            contact us, or engage with our services:
          </p>
          <ul>
            <li>Full Name</li>
            <li>Phone Number</li>
            <li>Email Address (if provided)</li>
            <li>Project-related details</li>
            <li>Any other information voluntarily shared by you</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use the information collected to:</p>
          <ul>
            <li>Contact you regarding interior design consultations</li>
            <li>Understand your project requirements</li>
            <li>Provide quotations and service-related communication</li>
            <li>Improve our services and customer experience</li>
          </ul>

          <h2>3. Data Protection</h2>
          <p>
            We implement appropriate security measures to protect your personal
            information from unauthorized access, misuse, or disclosure.
          </p>

          <h2>4. Information Sharing</h2>
          <p>
            We do not sell, trade, rent, or share your personal information with
            third parties for marketing purposes. Your information is used
            strictly for communication related to Shruti Chadha Interiors’
            services.
          </p>

          <h2>5. Data Retention</h2>
          <p>
            We retain your information only for as long as necessary to fulfill
            the purposes outlined in this policy or as required by applicable
            laws.
          </p>

          <h2>6. Your Consent</h2>
          <p>
            By submitting your information through our website, social media
            forms, or advertisements, you consent to the collection and use of
            your information as described in this Privacy Policy.
          </p>

          <h2>7. Contact Us</h2>
          <p>
            If you have any questions regarding this Privacy Policy or how your
            information is handled, you may contact us at:
          </p>

          <div className="not-prose mt-4 rounded-2xl border border-neutral-200 bg-neutral-50 p-5">
            <p className="font-medium text-neutral-900">Shruti Chadha Interiors</p>
            <p className="text-neutral-700">Delhi NCR, India</p>
            <p className="text-neutral-700">
              Email: <span className="font-medium">{EMAIL}</span>
            </p>
            <p className="text-neutral-700">
              Phone: <span className="font-medium">{PHONE}</span>
            </p>
          </div>

          <p className="mt-10 text-sm text-neutral-600">
            This Privacy Policy may be updated from time to time. Any changes
            will be posted on this page with an updated effective date.
          </p>
        </div>
      </section>
    </main>
  );
}