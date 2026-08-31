const doctors = [
  {
    name: "Dr. Sanjay Kudtarkar, M.D.",
    initials: "SaK",
    color: "bg-violet-700",
    specialty: "General Practitioner & Board-Certified Pediatrician",
    bio: "Dr. Sanjay Kudtarkar brings over 25 years of dedication to the Redlands community, delivering comprehensive family medicine and pediatric care. He combines deep clinical expertise with genuine compassion — taking the time to listen, answer every question, and build lasting relationships with each patient and family.",
    credentials: [
      "M.D.",
      "Board-Certified Pediatrician",
      "General Practitioner",
      "25+ Years Experience",
    ],
  },
  {
    name: "Dr. Swapna Kudtarkar, M.D.",
    initials: "SwK",
    color: "bg-emerald-600",
    specialty: "Board-Certified Pediatrician",
    bio: "Dr. Swapna Kudtarkar is a board-certified pediatrician devoted to children's health from newborn through adolescence. Her warm, patient-centered approach ensures that every child and family feels heard, supported, and empowered to make informed health decisions.",
    credentials: [
      "M.D.",
      "Board-Certified Pediatrician",
      "Newborn through Adolescent Care",
    ],
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-20 md:py-28 bg-violet-50"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <p className="text-emerald-700 font-semibold text-sm uppercase tracking-widest mb-3">
            About Us
          </p>
          <h2
            id="about-heading"
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6"
          >
            Caring for Families in Redlands for Over 25 Years
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            Orchid Medical Group is a family-focused medical practice serving
            the Redlands community with compassionate, personalized care. We
            proudly accept IEHP and welcome patients of all ages — from
            newborns to seniors.
          </p>
        </div>

        {/* Doctor cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {doctors.map((doctor) => (
            <article
              key={doctor.name}
              className="bg-white rounded-2xl shadow-sm overflow-hidden border border-violet-100"
            >
              {/* Photo area */}
              <div className="h-48 bg-gradient-to-br from-violet-100 to-violet-200 flex items-center justify-center">
                <div
                  className={`w-28 h-28 rounded-full ${doctor.color} flex items-center justify-center shadow-lg`}
                  aria-hidden="true"
                >
                  <span className="text-white text-2xl font-bold">
                    {doctor.initials}
                  </span>
                </div>
              </div>

              <div className="p-8">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {doctor.name}
                </h3>
                <p className="text-violet-600 font-medium mb-4 text-sm">
                  {doctor.specialty}
                </p>
                {/* <p className="text-gray-600 leading-relaxed mb-6 text-sm">
                  {doctor.bio}
                </p> */}

                <ul
                  className="flex flex-wrap gap-2"
                  aria-label={`${doctor.name} credentials`}
                >
                  {doctor.credentials.map((cred) => (
                    <li
                      key={cred}
                      className="bg-violet-50 text-violet-700 text-xs font-medium px-3 py-1.5 rounded-full border border-violet-200"
                    >
                      {cred}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>

        {/* Mission quote */}
        <div className="bg-white rounded-2xl p-10 border border-violet-100 shadow-sm text-center">
          <div
            className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6"
            aria-hidden="true"
          >
            <svg
              className="w-8 h-8 text-emerald-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
              />
            </svg>
          </div>
          <blockquote>
            <p className="text-xl text-gray-700 italic leading-relaxed max-w-2xl mx-auto">
              &ldquo;Our mission is to provide every patient — from newborns to
              seniors — with compassionate, comprehensive care that supports
              their health and well-being at every stage of life.&rdquo;
            </p>
            <footer className="mt-4 text-sm text-gray-500">
              — Orchid Medical Group
            </footer>
          </blockquote>
        </div>
      </div>
    </section>
  );
}
