const services = [
  "Family Medicine",
  "Pediatric Care",
  "Preventive Care",
  "Annual Physicals",
  "Immunizations & Vaccines",
  "Sick Visits",
  "Chronic Disease Management",
  "IEHP Patient Services",
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-20 md:py-28 bg-white"
      aria-labelledby="services-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6"
          >
            Our Services
          </h2>
        </div>

        <ul className="grid sm:grid-cols-2 md:grid-cols-2 gap-y-12 max-w-2xl mx-auto justify-items-center">
          {services.map((service) => (
            <li key={service} className="flex items-center gap-4 text-black-700 text-xl">
              <span className="w-3 h-3 rounded-full bg-violet-500 flex-shrink-0" aria-hidden="true" />
              {service}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
