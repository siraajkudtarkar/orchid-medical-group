import Link from "next/link";
import type { Metadata } from "next";
import SiteLayout from "../components/SiteLayout";

export const metadata: Metadata = {
  title: "Vaccine Information | Orchid Medical Group",
  description:
    "Learn about vaccines offered at Orchid Medical Group in Redlands, CA. Read CDC Vaccine Information Statements (VIS) and recommended schedules for children and adults.",
};

const vaccineCategories = [
  {
    category: "Childhood Vaccines (Routine Schedule)",
    description:
      "These vaccines are recommended for all children by the CDC and AAP. Our office follows the recommended immunization schedule.",
    vaccines: [
      {
        name: "Hepatitis B (HepB)",
        schedule: "Birth, 1–2 months, 6–18 months",
        who: "All newborns; unvaccinated children and adolescents",
        visUrl: "https://www.cdc.gov/vaccines/hcp/vis/vis-statements/hep-b.html",
        notes: "First dose given at birth before hospital discharge.",
      },
      {
        name: "Rotavirus (RV)",
        schedule: "2, 4, and 6 months",
        who: "Infants",
        visUrl: "https://www.cdc.gov/vaccines/hcp/vis/vis-statements/rotavirus.html",
        notes: "Oral vaccine; protects against severe diarrhea.",
      },
      {
        name: "DTaP (Diphtheria, Tetanus, Pertussis)",
        schedule: "2, 4, 6, 15–18 months, 4–6 years",
        who: "Children under 7",
        visUrl: "https://www.cdc.gov/vaccines/hcp/vis/vis-statements/dtap.html",
        notes: "Adolescents and adults receive Tdap as a booster.",
      },
      {
        name: "Hib (Haemophilus influenzae type b)",
        schedule: "2, 4, 6, 12–15 months",
        who: "Infants and young children",
        visUrl: "https://www.cdc.gov/vaccines/hcp/vis/vis-statements/hib.html",
        notes: "Prevents a leading cause of bacterial meningitis in young children.",
      },
      {
        name: "Pneumococcal (PCV15, PCV20)",
        schedule: "2, 4, 6, 12–15 months",
        who: "All children; adults 65+; high-risk individuals",
        visUrl: "https://www.cdc.gov/vaccines/hcp/vis/vis-statements/pcv.html",
        notes: "Also recommended for adults with certain health conditions.",
      },
      {
        name: "Inactivated Poliovirus (IPV)",
        schedule: "2, 4 months; 6–18 months; 4–6 years",
        who: "All children",
        visUrl: "https://www.cdc.gov/vaccines/hcp/vis/vis-statements/ipv.html",
        notes: "Four-dose series to protect against polio.",
      },
      {
        name: "MMR (Measles, Mumps, Rubella)",
        schedule: "12–15 months; 4–6 years",
        who: "All children; susceptible adults",
        visUrl: "https://www.cdc.gov/vaccines/hcp/vis/vis-statements/mmr.html",
        notes: "Immunity lasts a lifetime for most people.",
      },
      {
        name: "Varicella (Chickenpox)",
        schedule: "12–15 months; 4–6 years",
        who: "All children; adults without prior disease or vaccine",
        visUrl: "https://www.cdc.gov/vaccines/hcp/vis/vis-statements/varicella.html",
        notes: "Adults who've never had chickenpox or been vaccinated need 2 doses.",
      },
      {
        name: "Hepatitis A (HepA)",
        schedule: "12–23 months (2-dose series, 6 months apart)",
        who: "All children 12–23 months; at-risk groups; unvaccinated adults",
        visUrl: "https://www.cdc.gov/vaccines/hcp/vis/vis-statements/hep-a.html",
        notes: "Also recommended for travelers to certain countries.",
      },
    ],
  },
  {
    category: "Adolescent Vaccines",
    description: "Additional vaccines recommended at the 11–12-year well-child visit.",
    vaccines: [
      {
        name: "HPV Vaccine",
        schedule: "2-dose series at 11–12 (if started before 15); 3 doses if older",
        who: "Preteens 11–12; catch-up through age 26; some adults 27–45",
        visUrl: "https://www.cdc.gov/vaccines/hcp/vis/vis-statements/hpv.html",
        notes: "Best given before potential exposure to HPV.",
      },
      {
        name: "Meningococcal ACWY (MenACWY)",
        schedule: "11–12 years; booster at 16",
        who: "All preteens and teens",
        visUrl: "https://www.cdc.gov/vaccines/hcp/vis/vis-statements/mening.html",
        notes: "Protects against bacterial meningitis.",
      },
      {
        name: "Tdap (Tetanus, Diphtheria, Pertussis)",
        schedule: "11–12 years; then Td booster every 10 years",
        who: "All preteens; adults who haven't had Tdap",
        visUrl: "https://www.cdc.gov/vaccines/hcp/vis/vis-statements/td-tdap.html",
        notes: "Whooping cough (pertussis) booster component.",
      },
    ],
  },
  {
    category: "Adult & Annual Vaccines",
    description: "Vaccines recommended annually or for specific adult populations.",
    vaccines: [
      {
        name: "Influenza (Flu)",
        schedule: "Every year, ideally by end of October",
        who: "Everyone 6 months and older",
        visUrl: "https://www.cdc.gov/vaccines/hcp/vis/vis-statements/flu.html",
        notes: "We offer flu shots starting in September each year.",
      },
      {
        name: "COVID-19",
        schedule: "Updated annually (follow current CDC guidance)",
        who: "Everyone 6 months and older",
        visUrl: "https://www.cdc.gov/vaccines/hcp/current-vis/covid-19.html",
        notes: "CDC recommends staying up to date with updated COVID-19 vaccines.",
      },
      {
        name: "Shingles (Zoster — Shingrix)",
        schedule: "2-dose series, 2–6 months apart",
        who: "Adults 50 and older",
        visUrl: "https://www.cdc.gov/vaccines/hcp/vis/vis-statements/shingles.html",
        notes: "Highly effective (>90%) at preventing shingles and complications.",
      },
      {
        name: "Pneumococcal (PPSV23 / PCV20)",
        schedule: "Varies by age and health status",
        who: "Adults 65+; adults 19–64 with certain conditions",
        visUrl: "https://www.cdc.gov/vaccines/hcp/vis/vis-statements/ppv.html",
        notes: "Protects against pneumococcal pneumonia and bloodstream infections.",
      },
      {
        name: "RSV Vaccine",
        schedule: "Single dose",
        who: "Adults 60+; pregnant people 32–36 weeks",
        visUrl: "https://www.cdc.gov/vaccines/hcp/vis/vis-statements/rsv.html",
        notes: "Newer vaccine protecting against RSV-related lower respiratory illness.",
      },
    ],
  },
];

export default function VaccinesPage() {
  return (
    <SiteLayout>
      <header className="bg-violet-800 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex items-center gap-2 text-sm text-violet-300">
              <li>
                <Link href="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white font-medium" aria-current="page">
                Vaccine Information
              </li>
            </ol>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-bold mb-4">
            Vaccine Information Statements
          </h1>
          <p className="text-lg text-violet-200 max-w-2xl">
            Orchid Medical Group follows the CDC-recommended immunization
            schedules for children and adults. All vaccine information below
            links directly to official CDC Vaccine Information Statements (VIS).
          </p>
        </div>
      </header>

      <main className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Important notice */}
          <div className="bg-blue-50 border border-blue-200 rounded-xl p-5 mb-12 flex gap-4">
            <svg
              className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5"
              fill="currentColor"
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
            <div className="text-sm text-blue-800">
              <strong>What is a VIS?</strong> A Vaccine Information Statement (VIS)
              is a document produced by the CDC that informs vaccine recipients —
              or their parents or legal representatives — about the benefits and
              risks of a vaccine they are receiving. Federal law requires that VIS
              documents be provided before each vaccination.
            </div>
          </div>

          {/* Vaccine categories */}
          <div className="space-y-16">
            {vaccineCategories.map((cat) => (
              <section key={cat.category} aria-labelledby={`cat-${cat.category}`}>
                <h2
                  id={`cat-${cat.category}`}
                  className="text-2xl font-bold text-gray-900 mb-2"
                >
                  {cat.category}
                </h2>
                <p className="text-gray-600 mb-6 text-sm">{cat.description}</p>

                <div className="space-y-4">
                  {cat.vaccines.map((vaccine) => (
                    <div
                      key={vaccine.name}
                      className="border border-gray-200 rounded-xl p-6 hover:border-violet-200 hover:bg-violet-50 transition-all"
                    >
                      <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                        <div className="flex-grow">
                          <h3 className="text-base font-bold text-gray-900 mb-1">
                            {vaccine.name}
                          </h3>
                          <p className="text-xs text-gray-500 mb-2">
                            <span className="font-semibold text-gray-700">Schedule:</span>{" "}
                            {vaccine.schedule}
                          </p>
                          <p className="text-xs text-gray-500 mb-2">
                            <span className="font-semibold text-gray-700">Who should receive it:</span>{" "}
                            {vaccine.who}
                          </p>
                          {vaccine.notes && (
                            <p className="text-xs text-gray-500 italic">
                              {vaccine.notes}
                            </p>
                          )}
                        </div>
                        <a
                          href={vaccine.visUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex-shrink-0 inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-4 py-2 rounded-full text-xs transition-colors"
                          aria-label={`Read CDC Vaccine Information Statement for ${vaccine.name} (opens in new tab)`}
                        >
                          View VIS ↗
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            ))}
          </div>

          {/* Disclaimer & CTA */}
          <div className="mt-16 bg-gray-50 border border-gray-200 rounded-xl p-8">
            <h2 className="text-lg font-bold text-gray-900 mb-3">
              Questions About Your Vaccines?
            </h2>
            <p className="text-sm text-gray-600 mb-5">
              This page is for informational purposes only. Vaccine
              recommendations depend on your age, health history, previous
              vaccinations, and other factors. Please speak with Dr. Sanjay or
              Dr. Swapna Kudtarkar to determine which vaccines are appropriate
              for you or your child.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/#scheduling"
                className="inline-flex items-center justify-center bg-violet-600 hover:bg-violet-700 text-white font-semibold px-6 py-3 rounded-full text-sm transition-colors"
              >
                Book an Appointment
              </Link>
              <a
                href="tel:(909) 894-4887"
                className="inline-flex items-center justify-center border-2 border-violet-600 text-violet-700 hover:bg-violet-50 font-semibold px-6 py-3 rounded-full text-sm transition-colors"
              >
                Call Our Office
              </a>
            </div>
          </div>
        </div>
      </main>
    </SiteLayout>
  );
}
