const testimonials = [
  {
    name: "Evie S.",
    type: "Family Patient",
    rating: 5,
    text: "We have had such a great experience with this Doctor he listens to our concerns We never feel rushed and he is very thorough and takes the time to explain everything we ask in detail. We have always left Dr [Sanjay] Kudtarkar’s office feeling enlightened and informed. That’s a great feeling.",
    date: "October 2024",
  },
  {
    name: "Nicholas M.",
    type: "Longtime Patient",
    rating: 5,
    text: "Dr [Sanjay] Kudtarkar is the most efficient doctor I’ve ever had. He doesn’t play games or waste time. He gets things done right away. This office staff is amazing as well. They always squeeze me in for appointments when it’s an urgent situation. Dr [Sanjay] Kudtarkar has helped me out with orthopedic needs, ordering the right tests and giving the right referrals. He has a very good way of cutting through problems and getting to the root of the issue at hand.",
    date: "January 2026",
  },
  {
    name: "Anonymous",
    type: "Longtime Patient (Parent)",
    rating: 5,
    text: "Dr. [Swapna] K is the best! The best decision we made as parents was making her our son's doctor.",
    date: "February 2024",
  },
  {
    name: "Jesus S.",
    type: "Longtime Patient (Parent}",
    rating: 5,
    text: "They're a husband and wife duo...they're amazing.. [Dr. Swapna] takes care of my daughters [Dr. Sanjay] takes care of my son...",
    date: "February 2025",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div
      className="flex gap-0.5"
      role="img"
      aria-label={`${rating} out of 5 stars`}
    >
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-5 h-5 ${i < rating ? "text-amber-400" : "text-gray-200"}`}
          fill="currentColor"
          viewBox="0 0 20 20"
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section
      id="reviews"
      className="py-20 md:py-28 bg-white"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          {/* <p className="text-emerald-700 font-semibold text-sm uppercase tracking-widest mb-3">
            Patient Reviews
          </p> */}
          <h2
            id="testimonials-heading"
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6"
          >
            What Our Patients Say
          </h2>
          {/* <p className="max-w-2xl mx-auto text-lg text-gray-600">
            We&rsquo;re honored to care for so many families in our community.
            Here is what some of our patients have shared about their experience.
          </p> */}
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((t) => (
            <article
              key={t.name}
              className="bg-gray-50 rounded-2xl p-6 border border-gray-300 hover:shadow-md transition-shadow flex flex-col"
            >
              <StarRating rating={t.rating} />
              <p className="text-sm text-gray-700 leading-relaxed mt-4 flex-grow">
                &ldquo;{t.text}&rdquo;
              </p>
              <footer className="mt-5 pt-4 border-t border-gray-200">
                <p className="text-sm font-semibold text-gray-900">{t.name}</p>
                <p className="text-xs text-gray-500">
                  {t.type} · {t.date}
                </p>
              </footer>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
