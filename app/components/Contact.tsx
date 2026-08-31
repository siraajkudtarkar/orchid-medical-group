export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 md:py-28 bg-white"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-14">
          <h2
            id="contact-heading"
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            Contact Us
          </h2>
          {/* <p className="text-lg text-gray-600">
            We&rsquo;re here to help. Reach out by phone, email, or stop by the office.
          </p> */}
        </div>

        <div className="grid sm:grid-cols-2 gap-5">

          {/* Phone */}
          <a
            href="tel:(909) 894-4887"
            className="group flex items-start gap-5 bg-gray-50 hover:bg-violet-50 border border-gray-200 hover:border-violet-200 rounded-2xl p-7 transition-all"
            aria-label="Call our office at (909) 894-4887"
          >
            <div className="w-12 h-12 bg-violet-100 group-hover:bg-violet-200 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors" aria-hidden="true">
              <svg className="w-6 h-6 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1">Phone</p>
              <h3 className="text-xl font-bold text-gray-900 group-hover:text-violet-700 transition-colors">(909) 894-4887</h3>
              <p className="text-sm text-gray-500 mt-1">Mon–Fri · 9 AM–1 PM, 2–6 PM</p>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:orchidmedicalgroup1965@gmail.com"
            className="group flex items-start gap-5 bg-gray-50 hover:bg-violet-50 border border-gray-200 hover:border-violet-200 rounded-2xl p-7 transition-all"
            aria-label="Email us at orchidmedicalgroup1965@gmail.com"
          >
            <div className="w-12 h-12 bg-violet-100 group-hover:bg-violet-200 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors" aria-hidden="true">
              <svg className="w-6 h-6 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1">Email</p>
              <h3 className="text-base font-bold text-gray-900 group-hover:text-violet-700 transition-colors break-all">orchidmedicalgroup1965@gmail.com</h3>
            </div>
          </a>

          {/* Address */}
          <div className="flex items-start gap-5 bg-gray-50 border border-gray-200 rounded-2xl p-7">
            <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center flex-shrink-0" aria-hidden="true">
              <svg className="w-6 h-6 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1">Address</p>
              <p className="text-base font-bold text-gray-900 leading-snug mb-2">
                345 Terracina Blvd, Suite A<br />Redlands, CA 92373
              </p>
              <a
                href="https://maps.app.goo.gl/VNanMvzivwJeVpYX6"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open office address in Google Maps (opens in new tab)"
                className="inline-flex items-center gap-1 text-sm text-violet-600 hover:text-violet-800 font-medium transition-colors"
              >
                Open in Google Maps
                <svg className="w-3.5 h-3.5 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          </div>

          {/* Hours */}
          <div className="flex items-start gap-5 bg-gray-50 border border-gray-200 rounded-2xl p-7">
            <div className="w-12 h-12 bg-violet-100 rounded-xl flex items-center justify-center flex-shrink-0" aria-hidden="true">
              <svg className="w-6 h-6 text-violet-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">Office Hours</p>
              <dl className="space-y-1 text-sm">
                <div className="flex gap-3">
                  <dt className="font-semibold text-gray-700 w-24 flex-shrink-0">Mon – Fri</dt>
                  <dd className="text-gray-600">9:00 AM – 1:00 PM, 2:00 – 6:00 PM</dd>
                </div>
                <div className="flex gap-3">
                  <dt className="font-semibold text-gray-700 w-24 flex-shrink-0">Sat – Sun</dt>
                  <dd className="text-gray-500">Closed</dd>
                </div>
              </dl>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
