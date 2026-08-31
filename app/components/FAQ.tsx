"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Do you accept IEHP insurance?",
    a: "Yes! Orchid Medical Group proudly accepts IEHP (Inland Empire Health Plan). Please bring your IEHP member ID card to your appointment. If you have questions about your coverage, call our office and we'll be happy to help.",
  },
  {
    q: "How do I schedule an appointment?",
    a: "You can book online directly through our website using the Patient Fusion scheduling tool — just select your preferred provider and choose an available time. You can also call our office directly during business hours. New and existing patients are welcome.",
  },
  {
    q: "What should I bring to my first appointment?",
    a: "Please bring: your IEHP or insurance card, a valid photo ID, a list of current medications and dosages, any relevant medical records or previous test results, and your completed new patient forms (you can fill these out online in advance).",
  },
  {
    q: "Do you see patients of all ages?",
    a: "Yes. Dr. Sanjay Kudtarkar sees patients of all ages as a general practitioner, and both Dr. Sanjay and Dr. Swapna Kudtarkar are board-certified pediatricians for infants, children, and adolescents.",
  },
  {
    q: "What are your office hours?",
    a: "We are open Monday through Friday, 9 AM–1 PM and 2–6 PM. We are closed on Saturdays and Sundays. Please call (909) 894-4887 to confirm hours or check for holiday closures. We recommend calling ahead for same-day sick appointments.",
  },
  {
    q: "How do I request a prescription refill?",
    a: "Prescription refills can be requested through the Practice Fusion patient portal, by calling our office, or by having your pharmacy send a request directly to us. Please allow 2–3 business days for processing.",
  },
  {
    q: "What if I have an urgent medical need after hours?",
    a: "For life-threatening emergencies, call 911 or go to your nearest emergency room immediately. For urgent (non-emergency) after-hours care, IEHP members can call the IEHP 24-Hour Nurse Advice Line. Our office will follow up with you the next business day.",
  },
  {
    q: "Do you offer telehealth appointments?",
    a: "Please call our office to ask about telehealth availability. We work to accommodate patients who cannot visit in person when clinically appropriate.",
  },
  {
    q: "Can I walk in without an appointment?",
    a: "We strongly recommend scheduling an appointment to minimize your wait time. However, we understand that illness can be unpredictable — please call ahead and we will do our best to accommodate you the same day.",
  },
];

type FAQItemProps = {
  q: string;
  a: string;
  index: number;
};

function FAQItem({ q, a, index }: FAQItemProps) {
  const [open, setOpen] = useState(false);
  const id = `faq-answer-${index}`;
  const buttonId = `faq-button-${index}`;

  return (
    <div className="border border-gray-300 rounded-xl overflow-hidden">
      <h3>
        <button
          id={buttonId}
          className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-white hover:bg-gray-50 transition-colors"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          aria-controls={id}
        >
          <span className="text-base font-semibold text-gray-900">{q}</span>
          <span
            className={`flex-shrink-0 w-6 h-6 rounded-full bg-violet-100 text-violet-600 flex items-center justify-center transition-transform duration-200 ${
              open ? "rotate-180" : ""
            }`}
            aria-hidden="true"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </button>
      </h3>
      <div
        id={id}
        role="region"
        aria-labelledby={buttonId}
        className={`overflow-hidden transition-all duration-200 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="px-6 pb-5 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
          {a}
        </div>
      </div>
    </div>
  );
}

export default function FAQ() {
  return (
    <section
      id="faq"
      className="py-20 md:py-28 bg-gray-50"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-14">
          {/* <p className="text-emerald-700 font-semibold text-sm uppercase tracking-widest mb-3">
            Have Questions?
          </p> */}
          <h2
            id="faq-heading"
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6"
          >
            Frequently Asked Questions
          </h2>
          {/* <p className="text-lg text-gray-600">
            Don&rsquo;t see your question here?{" "}
            <a
              href="tel:(909) 894-4887"
              className="text-violet-700 font-medium hover:underline"
            >
              Call our office
            </a>{" "}
            and we&rsquo;ll be happy to help.
          </p> */}
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <FAQItem key={i} q={faq.q} a={faq.a} index={i} />
          ))}
        </div>
      </div>
      <p className="mt-10 text-center text-black-500 text-sm">
          Don&rsquo;t see your question here?{" "}
            <a
              href="tel:(909) 894-4887"
              className="text-violet-700 font-medium hover:underline"
            >
              Call our office
            </a>{" "}
            and we&rsquo;ll be happy to help.
        </p>
    </section>
  );
}
