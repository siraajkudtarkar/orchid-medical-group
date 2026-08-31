import Image from "next/image";
import sanjayPhoto from "../sanjay.jpg";
import swapnaPhoto from "../swapna.jpeg";

const steps = [
  {
    number: "01",
    title: "Book Your Appointment",
    description:
      "Choose your provider and book a time online through Patient Fusion, or call our office.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75}
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Complete Your Forms",
    description:
      "Download your patient forms from our website before your visit — select your age group, download a copy in English or Spanish, print it out, and fill it by hand.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75}
          d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Bring Your Completed Forms",
    description:
      "Bring your signed forms to your appointment. Forms can also be completed at our front desk when you arrive.",
    icon: (
      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75}
          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const doctors = [
  {
    id: "sanjay",
    photo: sanjayPhoto,
    name: "Dr. Sanjay Kudtarkar, M.D.",
    specialty: "General Practitioner & Board-Certified Pediatrician",
    note: "Accepts patients of all ages.",
    bookingUrl:
      "https://www.patientfusion.com/external/appointment/c597c6a6-6fe4-4a72-ac50-2435cdf638c2?origin=doctor",
  },
  {
    id: "swapna",
    photo: swapnaPhoto,
    name: "Dr. Swapna Kudtarkar, M.D.",
    specialty: "Board-Certified Pediatrician",
    note: "Accepts newborn through adolescent patients.",
    bookingUrl:
      "https://www.patientfusion.com/external/appointment/449135a2-b5c6-49b6-bce6-226b6a92b1e2?origin=doctor",
  },
];

export default function Scheduling() {
  return (
    <section
      id="scheduling"
      className="py-20 md:py-28 bg-violet-800"
      aria-labelledby="scheduling-heading"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* ── Section header ── */}
        <div className="text-center mb-14">
          {/* <p className="text-violet-300 font-semibold text-sm uppercase tracking-widest mb-3">
            Get Started
          </p> */}
          <h2
            id="scheduling-heading"
            className="text-3xl sm:text-4xl font-bold text-white mb-4"
          >
            Plan your visit
          </h2>
          <p className="max-w-xl mx-auto text-lg text-white">
            We accept new and returning patients of all ages.
          </p>
        </div>

        {/* ── 3-step flow ── */}
        <ol
          className="relative grid sm:grid-cols-3 gap-px sm:gap-0 mb-8"
          aria-label="Steps to book your appointment"
        >
          {/* Connector line — desktop only */}
          <div
            className="hidden sm:block absolute top-8 left-[calc(100%/6)] right-[calc(100%/6)] h-px bg-violet-600 z-0"
            aria-hidden="true"
          />

          {steps.map((step, i) => (
            <li key={step.number} className="relative z-10 flex flex-col items-center text-center px-6">
              <div className="w-16 h-16 rounded-full bg-violet-700 border-2 border-white-500 flex items-center justify-center mb-4 shadow-lg text-white">
                {step.icon}
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-white mb-1">
                Step {step.number}
              </span>
              <h3 className="font-bold text-white text-base mb-2 leading-snug">
                {step.title}
              </h3>
              {/* <p className="text-violet-300 text-sm leading-relaxed">
                {step.description}
              </p> */}

              {i < steps.length - 1 && (
                <div className="sm:hidden w-px h-8 bg-violet-600 mt-4" aria-hidden="true" />
              )}
            </li>
          ))}
        </ol>

        {/* ── Doctor booking cards ── */}
        <div className="grid sm:grid-cols-2 gap-5 mb-6">
          {doctors.map((doctor) => (
            <div
              key={doctor.id}
              className="bg-white/10 border border-white/20 hover:bg-white/15 transition-colors rounded-2xl p-7 flex flex-col gap-5"
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0 shadow-md border-2 border-white/30">
                  <Image
                    src={doctor.photo}
                    alt={`Headshot photo of ${doctor.name}`}
                    width={56}
                    height={56}
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <div>
                  <p className="font-bold text-white text-base leading-tight">{doctor.name}</p>
                  <p className="text-white text-sm font-medium mt-0.5">{doctor.specialty}</p>
                </div>
              </div>

              <p className="text-white text-sm leading-relaxed flex-grow">
                {doctor.note}
              </p>

              <a
                href={doctor.bookingUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-2.5 bg-white text-violet-800 hover:bg-violet-50 font-semibold px-6 py-3.5 rounded-full text-sm transition-colors shadow-md w-full"
                aria-label={`Book appointment with ${doctor.name} on Patient Fusion (opens external site)`}
              >
                {`Book Online with Dr. ${doctor.name.split(" ")[1]}`}
                <svg
                  className="w-3.5 h-3.5 text-violet-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* ── Phone option ── */}
        <div className="bg-white/10 border border-white/20 rounded-2xl p-7 flex flex-col sm:flex-row items-start sm:items-center gap-5">
          <div
            className="w-12 h-12 bg-white/15 rounded-xl flex items-center justify-center flex-shrink-0"
            aria-hidden="true"
          >
            <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75}
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
          </div>
          <div className="flex-grow">
            <h3 className="font-bold text-white text-lg mb-1">
              Prefer to call? We&rsquo;re happy to help.
            </h3>
          </div>
          <a
            href="tel:(909) 894-4887"
            className="flex-shrink-0 flex flex-col items-center sm:items-end gap-0.5"
            aria-label="Call our office"
          >
            <span className="text-2xl font-bold text-white hover:text-violet-200 transition-colors">
              (909) 894-4887
            </span>
            <span className="text-xs text-white">Mon–Fri · 9 AM–1 PM, 2–6 PM</span>
          </a>
        </div>
      </div>
    </section>
  );
}
