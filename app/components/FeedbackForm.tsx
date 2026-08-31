"use client";

import { useState } from "react";

type FormState = {
  name: string;
  visitDate: string;
  provider: string;
  rating: number;
  comments: string;
};

function StarButton({
  value,
  current,
  hovered,
  onHover,
  onSelect,
}: {
  value: number;
  current: number;
  hovered: number;
  onHover: (v: number) => void;
  onSelect: (v: number) => void;
}) {
  const filled = value <= (hovered || current);
  return (
    <button
      type="button"
      onClick={() => onSelect(value)}
      onMouseEnter={() => onHover(value)}
      onMouseLeave={() => onHover(0)}
      className={`w-10 h-10 transition-transform hover:scale-110 ${
        filled ? "text-amber-400" : "text-gray-300"
      }`}
      aria-label={`Rate ${value} star${value !== 1 ? "s" : ""}`}
      aria-pressed={value === current}
    >
      <svg fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    </button>
  );
}

const ratingLabels: Record<number, string> = {
  1: "Poor",
  2: "Fair",
  3: "Good",
  4: "Very Good",
  5: "Excellent",
};

export default function FeedbackForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    visitDate: "",
    provider: "",
    rating: 0,
    comments: "",
  });
  const [hovered, setHovered] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (form.rating === 0) {
      setError("Please select a star rating before submitting.");
      return;
    }
    if (!form.comments.trim()) {
      setError("Please share a comment or feedback.");
      return;
    }
    setError("");

    /*
      Wire this to your preferred submission method:
      - Email service (Resend, SendGrid)
      - Form service (Formspree, etc.)
      - Next.js API route at /api/feedback

      Example fetch call:
      await fetch("/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
    */

    // Simulate submission
    await new Promise((r) => setTimeout(r, 600));
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <section
        id="feedback"
        className="py-20 md:py-28 bg-violet-50"
        aria-labelledby="feedback-heading"
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <div
            className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6"
            aria-hidden="true"
          >
            <svg
              className="w-10 h-10 text-emerald-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
          </div>
          <h2
            id="feedback-heading"
            className="text-3xl font-bold text-gray-900 mb-4"
          >
            Thank You for Your Feedback!
          </h2>
          <p className="text-lg text-gray-600">
            We appreciate you taking the time to share your experience at
            Orchid Medical Group. Your feedback helps us continue to improve
            and serve our community better.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="feedback"
      className="py-20 md:py-28 bg-violet-50"
      aria-labelledby="feedback-heading"
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="text-emerald-700 font-semibold text-sm uppercase tracking-widest mb-3">
            Your Experience Matters
          </p>
          <h2
            id="feedback-heading"
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            Share Your Feedback
          </h2>
          <p className="text-lg text-gray-600">
            We&rsquo;re always looking to improve. Let us know how your visit
            went — good or bad, we want to hear from you.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-sm border border-violet-100 p-8 space-y-6"
          noValidate
          aria-label="Patient feedback form"
        >
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="block text-sm font-semibold text-gray-700 mb-1.5"
            >
              Your Name{" "}
              <span className="text-gray-400 font-normal">(optional)</span>
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Jane Smith"
              autoComplete="name"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition"
            />
          </div>

          {/* Visit date & Provider */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor="visitDate"
                className="block text-sm font-semibold text-gray-700 mb-1.5"
              >
                Approximate Visit Date
              </label>
              <input
                type="date"
                id="visitDate"
                name="visitDate"
                value={form.visitDate}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition"
              />
            </div>
            <div>
              <label
                htmlFor="provider"
                className="block text-sm font-semibold text-gray-700 mb-1.5"
              >
                Provider Seen
              </label>
              <select
                id="provider"
                name="provider"
                value={form.provider}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-900 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition bg-white"
              >
                <option value="">Select provider</option>
                <option value="dr-sanjay">Dr. Sanjay Kudtarkar</option>
                <option value="dr-swapna">Dr. Swapna Kudtarkar</option>
                <option value="other">Other / Not Sure</option>
              </select>
            </div>
          </div>

          {/* Star rating */}
          <div>
            <p
              className="block text-sm font-semibold text-gray-700 mb-2"
              id="rating-label"
            >
              Overall Experience{" "}
              <span className="text-red-500" aria-hidden="true">*</span>
            </p>
            <div
              className="flex items-center gap-1"
              role="group"
              aria-labelledby="rating-label"
            >
              {[1, 2, 3, 4, 5].map((v) => (
                <StarButton
                  key={v}
                  value={v}
                  current={form.rating}
                  hovered={hovered}
                  onHover={setHovered}
                  onSelect={(v) => setForm((p) => ({ ...p, rating: v }))}
                />
              ))}
              {(hovered || form.rating) > 0 && (
                <span className="ml-3 text-sm font-medium text-gray-600">
                  {ratingLabels[hovered || form.rating]}
                </span>
              )}
            </div>
          </div>

          {/* Comments */}
          <div>
            <label
              htmlFor="comments"
              className="block text-sm font-semibold text-gray-700 mb-1.5"
            >
              Your Comments{" "}
              <span className="text-red-500" aria-hidden="true">*</span>
            </label>
            <textarea
              id="comments"
              name="comments"
              rows={5}
              value={form.comments}
              onChange={handleChange}
              placeholder="Tell us about your experience — what went well, or what we could improve..."
              required
              aria-required="true"
              className="w-full px-4 py-3 border border-gray-300 rounded-xl text-gray-900 placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500 transition resize-none"
            />
          </div>

          {/* Error */}
          {error && (
            <div
              role="alert"
              className="text-sm text-red-700 bg-red-50 border border-red-200 rounded-xl px-4 py-3"
            >
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-violet-600 hover:bg-violet-700 text-white font-semibold py-4 px-6 rounded-full text-base transition-colors shadow-sm"
          >
            Submit Feedback
          </button>

          <p className="text-xs text-center text-gray-400">
            Your feedback is kept confidential and used solely to improve
            patient care at Orchid Medical Group.
          </p>
        </form>
      </div>
    </section>
  );
}
