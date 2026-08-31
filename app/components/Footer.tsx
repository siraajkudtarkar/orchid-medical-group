import Image from "next/image";
import logolight from "../logolight.png";

const quickLinks = [
  { label: "About Us", href: "#hero" },
  { label: "Our Services", href: "#services" },
  { label: "Book Appointment", href: "#scheduling" },
  { label: "Patient Forms", href: "#forms" },
  { label: "Vaccine Information", href: "#vaccines" },
  { label: "FAQ", href: "#faq" },
  { label: "Reviews", href: "#reviews" },
];

const patientLinks = [
  { label: "New Patient Forms", href: "/#forms" },
  { label: "Full Vaccine Schedule", href: "/vaccines" },
  { label: "Book an Appointment", href: "/#scheduling" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="bg-violet-950 text-white"
      aria-label="Site footer"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <Image
                src={logolight}
                alt="Orchid Medical Group — Family & Pediatric Medicine, Redlands CA"
                width={320}
                height={120}
                className="h-12 w-auto object-contain"
              />
            </div>
            <p className="text-violet-300 text-sm leading-relaxed mb-5">
              Compassionate, personalized healthcare for the Inland Empire community.
              Serving families for over 25 years.
            </p>
            <div className="flex">
              <a
                href="#scheduling"
                className="bg-emerald-600 hover:bg-emerald-800 text-white font-semibold px-4 py-2 rounded-full text-sm transition-colors"
              >
                Book Appointment
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-violet-300 hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Patient Resources */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4">
              Patient Resources
            </h3>
            <ul className="space-y-2.5">
              {patientLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-sm text-violet-300 hover:text-white transition-colors"
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    {link.label}
                    {link.href.startsWith("http") ? " ↗" : ""}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-bold text-white uppercase tracking-widest mb-4">
              Contact Us
            </h3>
            <address className="not-italic space-y-4 text-sm">
              <div>
                <p className="text-violet-400 text-xs uppercase tracking-wide font-semibold mb-2">
                  Phone
                </p>
                <a
                  href="tel:(909) 894-4887"
                  className="text-violet-200 hover:text-white transition-colors font-medium"
                >
                  (909) 894-4887
                </a>
              </div>
              <div>
                <p className="text-violet-400 text-xs uppercase tracking-wide font-semibold mb-2">
                  Email
                </p>
                <a
                  href="mailto:orchidmedicalgroup1965@gmail.com"
                  className="text-violet-200 hover:text-white transition-colors font-medium break-all"
                >
                  orchidmedicalgroup1965@gmail.com
                </a>
              </div>
              <div>
                <p className="text-violet-400 text-xs uppercase tracking-wide font-semibold mb-2">
                  Address
                </p>
                <p className="text-violet-300">
                  345 Terracina Blvd Ste A,
                  <br />
                  Redlands, CA 92373
                </p>
              </div>
              <div>
                <p className="text-violet-400 text-xs uppercase tracking-wide font-semibold mb-2">
                  Office Hours
                </p>
                <p className="text-violet-300">
                  Mon&ndash;Fri: 9 AM&ndash;1 PM, 2&ndash;6 PM
                  <br />
                  Sat&ndash;Sun: Closed
                </p>
              </div>
              <div>
                <p className="text-violet-400 text-xs uppercase tracking-wide font-semibold mb-2">
                  Insurance Accepted
                </p>
                <p className="text-violet-300">
                  IEHP (Inland Empire Health Plan)
                </p>
              </div>
            </address>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-violet-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-violet-400">
          <p>
            &copy; {year} Orchid Medical Group. Created by{" "}
            <a
              href="https://www.siraajkudtarkar.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-violet-300 hover:text-white transition-colors underline underline-offset-2"
            >
              Siraaj Kudtarkar
            </a>
            . All rights reserved.
          </p>
          <p>
            This website is for informational purposes only. For medical
            emergencies, call{" "}
            <strong className="text-white">911</strong>.
          </p>
        </div>
      </div>
    </footer>
  );
}
