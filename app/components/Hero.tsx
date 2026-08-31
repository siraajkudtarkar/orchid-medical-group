import Image from "next/image";
import iehpLogo from "../IEHP.png";
import DoctorCarousel from "./DoctorCarousel";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative bg-gray-50 overflow-hidden"
      aria-labelledby="hero-heading"
    >

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* ── Left: hero copy ── */}
          <div>
            {/* <p className="inline-flex items-center gap-2 text-emerald-700 font-semibold text-sm uppercase tracking-widest mb-5"> */}
              {/* <span
                className="w-1.5 h-1.5 rounded-full bg-emerald-500"
                aria-hidden="true"
              /> */}
              {/* Serving the Inland Empire for 25+ Years */}
            {/* </p> */}

            <h1
              id="hero-heading"
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4"
            >
              Care for Every Generation
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-xl leading-relaxed">
              Orchid Medical Group is a family-focused practice providing
              compassionate, personalized healthcare for patients of all ages and has been serving the Inland Empire for over 25 years.
            </p>

            {/* Primary CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#scheduling"
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-800 text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors shadow-md shadow-emerald-200"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Book an Appointment
              </a>
              <a
                href="tel:(909) 894-4887"
                className="inline-flex items-center justify-center gap-2 border-2 border-violet-600 text-violet-700 hover:bg-violet-50 font-semibold px-8 py-4 rounded-full text-lg transition-colors"
                aria-label="Call our office to schedule"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call to Schedule
              </a>
            </div>

            {/* Trust indicators */}
            <ul
              className="flex flex-wrap gap-x-8 gap-y-4 text-sm text-gray-600"
              aria-label="Practice highlights"
            >
              {[
                "Board-Certified Physicians",
                "IEHP Accepted",
                "Accepting New Patients",
                "Español Disponible",
              ].map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-emerald-500 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* ── Right: IEHP badge + doctor carousel ── */}
          <div className="w-full flex flex-col gap-4">
            {/* <div className="flex items-center gap-4 bg-white/80 border-gray-100 rounded-2xl px-5 py-3 shadow-sm w-fit">
              <Image
                src={iehpLogo}
                alt="Inland Empire Health Plan (IEHP) — Accepted Insurance"
                className="h-12 w-auto object-contain"
              />
              {/* <div className="border-l border-gray-200 pl-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">Accepted Insurance</p>
                <p className="text-sm font-bold text-gray-800">Accepted Insurance</p>
              </div> */}
            {/* </div> */}
            <DoctorCarousel />
          </div>
        </div>
      </div>
    </section>
  );
}
