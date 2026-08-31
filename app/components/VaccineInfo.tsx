const ageGroups = [
  {
    label: "Birth",
    vaccines: [
      { name: "Hepatitis B", visUrl: "https://www.cdc.gov/vaccines/hcp/current-vis/hepatitis-b.html" },
    ],
  },
  {
    label: "2 – 6 Months",
    vaccines: [
      { name: "DTaP", visUrl: "https://www.cdc.gov/vaccines/hcp/current-vis/dtap.html" },
      { name: "Hib", visUrl: "https://www.cdc.gov/vaccines/hcp/current-vis/hib.html" },
      { name: "Polio (IPV)", visUrl: "https://www.cdc.gov/vaccines/hcp/current-vis/polio.html" },
      { name: "Pneumococcal (PCV)", visUrl: "https://www.cdc.gov/vaccines/hcp/current-vis/pneumococcal-conjugate.html" },
      { name: "Rotavirus", visUrl: "https://www.cdc.gov/vaccines/hcp/current-vis/rotavirus.html" },
      { name: "Hepatitis B", visUrl: "https://www.cdc.gov/vaccines/hcp/current-vis/hepatitis-b.html" },
    ],
  },
  {
    label: "6 Months & Older",
    note: "Given annually or as updated",
    vaccines: [
      { name: "Influenza (Flu)", visUrl: "https://www.cdc.gov/vaccines/hcp/current-vis/influenza-inactivated.html" },
      { name: "COVID-19", visUrl: "https://www.cdc.gov/vaccines/hcp/current-vis/covid-19.html" },
    ],
  },
  {
    label: "12 – 23 Months",
    vaccines: [
      { name: "MMR (Measles, Mumps, Rubella)", visUrl: "https://www.cdc.gov/vaccines/hcp/current-vis/mmr.html" },
      { name: "Varicella (Chickenpox)", visUrl: "https://www.cdc.gov/vaccines/hcp/current-vis/varicella.html" },
      { name: "Hepatitis A", visUrl: "https://www.cdc.gov/vaccines/hcp/current-vis/hepatitis-a.html" },
    ],
  },
  {
    label: "4 – 6 Years",
    note: "Booster doses",
    vaccines: [
      { name: "DTaP", visUrl: "https://www.cdc.gov/vaccines/hcp/current-vis/dtap.html" },
      { name: "MMR", visUrl: "https://www.cdc.gov/vaccines/hcp/current-vis/mmr.html" },
      { name: "Varicella", visUrl: "https://www.cdc.gov/vaccines/hcp/current-vis/varicella.html" },
      { name: "Polio (IPV)", visUrl: "https://www.cdc.gov/vaccines/hcp/current-vis/polio.html" },
    ],
  },
  {
    label: "11 – 16 Years",
    vaccines: [
      { name: "Tdap", visUrl: "https://www.cdc.gov/vaccines/hcp/current-vis/tdap.html" },
      { name: "HPV", visUrl: "https://www.cdc.gov/vaccines/hcp/current-vis/hpv.html" },
      { name: "Meningococcal (MenACWY)", visUrl: "https://www.cdc.gov/vaccines/hcp/current-vis/meningococcal-acwy.html" },
    ],
  },
  {
    label: "Adults 60 – 65+",
    vaccines: [
      { name: "RSV", visUrl: "https://www.cdc.gov/vaccines/hcp/current-vis/rsv.html" },
      { name: "Pneumococcal", visUrl: "https://www.cdc.gov/vaccines/hcp/current-vis/pneumococcal-conjugate.html" },
    ],
  },
];

export default function VaccineInfo() {
  return (
    <section
      id="vaccines"
      className="py-20 md:py-28 bg-gray-50"
      aria-labelledby="vaccines-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <h2
            id="vaccines-heading"
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            Vaccine Information
          </h2>
          {/* <p className="text-lg text-gray-600">
            Vaccines organized by age. Click any vaccine to view the official CDC information sheet.
          </p> */}
        </div>

        <div className="space-y-6">
          {ageGroups.map((group) => (
            <div key={group.label} className="bg-white border border-gray-300 rounded-2xl overflow-hidden">
              {/* Age group header */}
              <div className="flex items-center gap-3 px-6 py-4 border-b border-gray-300 bg-gray-50">
                <span className="text-sm font-bold text-gray-900">{group.label}</span>
                {group.note && (
                  <span className="text-xs font-medium text-emerald-700 bg-emerald-50 border border-emerald-200 px-2.5 py-0.5 rounded-full">
                    {group.note}
                  </span>
                )}
              </div>

              {/* Vaccine list */}
              <div className="px-6 py-4 flex flex-wrap gap-2">
                {group.vaccines.map((vaccine) => (
                  <a
                    key={vaccine.name}
                    href={vaccine.visUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View CDC information for ${vaccine.name} (opens in new tab)`}
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-emerald-50 hover:text-emerald-700 border border-transparent hover:border-emerald-200 px-3 py-1.5 rounded-full transition-colors"
                  >
                    {vaccine.name}
                    <svg className="w-3 h-3 opacity-50" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-gray-600">
          Based on CDC immunization schedules. Ask your doctor which vaccines are right for you.
        </p>
      </div>
    </section>
  );
}
