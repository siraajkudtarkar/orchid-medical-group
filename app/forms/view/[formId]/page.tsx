import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import SiteLayout from "../../../components/SiteLayout";
import { formDefs } from "../../../lib/formFields";

const formData: Record<string, {
  ageLabel: string;
  lang: string;
  category: string;
  pdf: string;
  downloadName: string;
  altId: string;
  altLang: string;
}> = {
  // ── New patient intake — by age group ──────────────────────────────────────
  "english-0-6-months": {
    ageLabel: "0 – 6 Months", lang: "English", category: "New Patient Form",
    pdf: "/forms/newpatient/english-0-6-months.pdf",
    downloadName: "New-Patient-0-6-Months-English.pdf",
    altId: "spanish-0-6-months", altLang: "Español",
  },
  "spanish-0-6-months": {
    ageLabel: "0 – 6 Months", lang: "Español", category: "New Patient Form",
    pdf: "/forms/newpatient/spanish-0-6-months.pdf",
    downloadName: "New-Patient-0-6-Months-Spanish.pdf",
    altId: "english-0-6-months", altLang: "English",
  },
  "english-7-12-months": {
    ageLabel: "7 – 12 Months", lang: "English", category: "New Patient Form",
    pdf: "/forms/newpatient/english-7-12-months.pdf",
    downloadName: "New-Patient-7-12-Months-English.pdf",
    altId: "spanish-7-12-months", altLang: "Español",
  },
  "spanish-7-12-months": {
    ageLabel: "7 – 12 Months", lang: "Español", category: "New Patient Form",
    pdf: "/forms/newpatient/spanish-7-12-months.pdf",
    downloadName: "New-Patient-7-12-Months-Spanish.pdf",
    altId: "english-7-12-months", altLang: "English",
  },
  "english-1-2-years": {
    ageLabel: "1 – 2 Years", lang: "English", category: "New Patient Form",
    pdf: "/forms/newpatient/english-1-2-years.pdf",
    downloadName: "New-Patient-1-2-Years-English.pdf",
    altId: "spanish-1-2-years", altLang: "Español",
  },
  "spanish-1-2-years": {
    ageLabel: "1 – 2 Years", lang: "Español", category: "New Patient Form",
    pdf: "/forms/newpatient/spanish-1-2-years.pdf",
    downloadName: "New-Patient-1-2-Years-Spanish.pdf",
    altId: "english-1-2-years", altLang: "English",
  },
  "english-3-4-years": {
    ageLabel: "3 – 4 Years", lang: "English", category: "New Patient Form",
    pdf: "/forms/newpatient/english-3-4-years.pdf",
    downloadName: "New-Patient-3-4-Years-English.pdf",
    altId: "spanish-3-4-years", altLang: "Español",
  },
  "spanish-3-4-years": {
    ageLabel: "3 – 4 Years", lang: "Español", category: "New Patient Form",
    pdf: "/forms/newpatient/spanish-3-4-years.pdf",
    downloadName: "New-Patient-3-4-Years-Spanish.pdf",
    altId: "english-3-4-years", altLang: "English",
  },
  "english-5-8-years": {
    ageLabel: "5 – 8 Years", lang: "English", category: "New Patient Form",
    pdf: "/forms/newpatient/english-5-8-years.pdf",
    downloadName: "New-Patient-5-8-Years-English.pdf",
    altId: "spanish-5-8-years", altLang: "Español",
  },
  "spanish-5-8-years": {
    ageLabel: "5 – 8 Years", lang: "Español", category: "New Patient Form",
    pdf: "/forms/newpatient/spanish-5-8-years.pdf",
    downloadName: "New-Patient-5-8-Years-Spanish.pdf",
    altId: "english-5-8-years", altLang: "English",
  },
  "english-9-11-years": {
    ageLabel: "9 – 11 Years", lang: "English", category: "New Patient Form",
    pdf: "/forms/newpatient/english-9-11-years.pdf",
    downloadName: "New-Patient-9-11-Years-English.pdf",
    altId: "spanish-9-11-years", altLang: "Español",
  },
  "spanish-9-11-years": {
    ageLabel: "9 – 11 Years", lang: "Español", category: "New Patient Form",
    pdf: "/forms/newpatient/spanish-9-11-years.pdf",
    downloadName: "New-Patient-9-11-Years-Spanish.pdf",
    altId: "english-9-11-years", altLang: "English",
  },
  "english-12-17-years": {
    ageLabel: "12 – 17 Years", lang: "English", category: "New Patient Form",
    pdf: "/forms/newpatient/english-12-17-years.pdf",
    downloadName: "New-Patient-12-17-Years-English.pdf",
    altId: "spanish-12-17-years", altLang: "Español",
  },
  "spanish-12-17-years": {
    ageLabel: "12 – 17 Years", lang: "Español", category: "New Patient Form",
    pdf: "/forms/newpatient/spanish-12-17-years.pdf",
    downloadName: "New-Patient-12-17-Years-Spanish.pdf",
    altId: "english-12-17-years", altLang: "English",
  },
  "english-18-21-years": {
    ageLabel: "18 – 21 Years", lang: "English", category: "New Patient Form",
    pdf: "/forms/newpatient/english-18-21-years.pdf",
    downloadName: "New-Patient-18-21-Years-English.pdf",
    altId: "spanish-18-21-years", altLang: "Español",
  },
  "spanish-18-21-years": {
    ageLabel: "18 – 21 Years", lang: "Español", category: "New Patient Form",
    pdf: "/forms/newpatient/spanish-18-21-years.pdf",
    downloadName: "New-Patient-18-21-Years-Spanish.pdf",
    altId: "english-18-21-years", altLang: "English",
  },
  "english-adult": {
    ageLabel: "Adult", lang: "English", category: "New Patient Form",
    pdf: "/forms/newpatient/english-adult.pdf",
    downloadName: "New-Patient-Adult-English.pdf",
    altId: "spanish-adult", altLang: "Español",
  },
  "spanish-adult": {
    ageLabel: "Adult", lang: "Español", category: "New Patient Form",
    pdf: "/forms/newpatient/spanish-adult.pdf",
    downloadName: "New-Patient-Adult-Spanish.pdf",
    altId: "english-adult", altLang: "English",
  },

  // ── Developmental screening tools ──────────────────────────────────────────
  "mchat-18-24-months-english": {
    ageLabel: "18 & 24 Months", lang: "English", category: "M-CHAT Developmental Screening",
    pdf: "/forms/newpatient/mchat-18-24-months-english.pdf",
    downloadName: "M-CHAT-18-24-Months-English.pdf",
    altId: "mchat-18-24-months-spanish", altLang: "Español",
  },
  "mchat-18-24-months-spanish": {
    ageLabel: "18 & 24 Months", lang: "Español", category: "M-CHAT Developmental Screening",
    pdf: "/forms/newpatient/mchat-18-24-months-spanish.pdf",
    downloadName: "M-CHAT-18-24-Months-Spanish.pdf",
    altId: "mchat-18-24-months-english", altLang: "English",
  },
  "peds-9-18-30-months-english": {
    ageLabel: "9, 18 & 30 Months", lang: "English", category: "PEDS Developmental Screening",
    pdf: "/forms/newpatient/peds-9-18-30-months-english.pdf",
    downloadName: "PEDS-9-18-30-Months-English.pdf",
    altId: "peds-9-18-30-months-spanish", altLang: "Español",
  },
  "peds-9-18-30-months-spanish": {
    ageLabel: "9, 18 & 30 Months", lang: "Español", category: "PEDS Developmental Screening",
    pdf: "/forms/newpatient/peds-9-18-30-months-spanish.pdf",
    downloadName: "PEDS-9-18-30-Months-Spanish.pdf",
    altId: "peds-9-18-30-months-english", altLang: "English",
  },
};

export function generateStaticParams() {
  return Object.keys(formData).map((formId) => ({ formId }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ formId: string }> }
): Promise<Metadata> {
  const { formId } = await params;
  const form = formData[formId];
  if (!form) return {};
  return {
    title: `${form.category} — ${form.ageLabel} (${form.lang}) | Orchid Medical Group`,
    description: `${form.category} for ages ${form.ageLabel} in ${form.lang}. Fill online or download.`,
  };
}

export default async function FormViewer(
  { params }: { params: Promise<{ formId: string }> }
) {
  const { formId } = await params;
  const form = formData[formId];
  if (!form) notFound();

  const isScreening = form.category !== "New Patient Form";

  return (
    <SiteLayout>
      <header className="bg-violet-800 text-white py-10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/#forms"
            className="inline-flex items-center gap-2 text-violet-300 hover:text-white text-sm mb-5 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Forms
          </Link>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-5">
            <div>
              <p className="text-violet-300 text-sm font-semibold uppercase tracking-widest mb-1">
                {form.category} · {form.lang}
              </p>
              <h1 className="text-3xl sm:text-4xl font-bold">
                {isScreening ? form.category.replace(" Developmental Screening", "") : "Ages"} {form.ageLabel}
              </h1>
            </div>

            <div className="flex flex-wrap items-center gap-3 flex-shrink-0">
              <Link
                href={`/forms/view/${form.altId}`}
                className="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-colors"
              >
                Switch to {form.altLang}
              </Link>
              {formDefs[formId] && (
                <Link
                  href={`/forms/fill/${formId}`}
                  className="inline-flex items-center gap-2 bg-emerald-500 hover:bg-emerald-400 text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  Fill Out Form
                </Link>
              )}
              <a
                href={form.pdf}
                download={form.downloadName}
                className="inline-flex items-center gap-2 bg-white text-violet-800 hover:bg-violet-50 font-semibold px-5 py-2.5 rounded-full text-sm transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download PDF
              </a>
            </div>
          </div>
        </div>
      </header>

      <main id="main-content" className="bg-gray-50 py-8">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="bg-violet-50 border border-violet-200 rounded-xl px-5 py-4 mb-6 flex gap-3 items-start text-sm text-violet-800">
            <svg className="w-5 h-5 text-violet-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
            </svg>
            <p>
              <strong>Tip:</strong> You can type directly into the form fields below in Chrome, Firefox, or Edge.
              When finished, print the completed form and bring it to your appointment, or download and email it to{" "}
              <a href="mailto:orchidmedicalgroup1965@gmail.com" className="font-semibold underline">
                orchidmedicalgroup1965@gmail.com
              </a>.
              On mobile or Safari, use <strong>Download PDF</strong> above to fill the form in your preferred app.
            </p>
          </div>

          <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
            <object
              data={form.pdf}
              type="application/pdf"
              className="w-full"
              style={{ height: "880px" }}
              aria-label={`${form.category} for ages ${form.ageLabel} in ${form.lang}`}
            >
              <div className="flex flex-col items-center justify-center py-24 px-8 text-center gap-5">
                <svg className="w-16 h-16 text-violet-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                <div>
                  <p className="text-gray-800 font-semibold text-lg mb-2">PDF preview unavailable in this browser</p>
                  <p className="text-gray-500 text-sm mb-6">
                    Open this page in Chrome, Firefox, or Edge for inline filling, or download below.
                  </p>
                  <a
                    href={form.pdf}
                    download={form.downloadName}
                    className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white font-semibold px-8 py-3 rounded-full text-sm transition-colors"
                  >
                    Download Form
                  </a>
                </div>
              </div>
            </object>
          </div>

          <div className="mt-6 bg-amber-50 border border-amber-200 rounded-xl p-5 flex gap-4">
            <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
            </svg>
            <p className="text-sm text-amber-800">
              <strong>Privacy Notice:</strong> Please bring your completed form to your appointment.
              Paper forms are also available at the front desk. Call us at{" "}
              <a href="tel:(909) 894-4887" className="font-semibold underline">(909) 894-4887</a>{" "}
              if you need assistance.
            </p>
          </div>
        </div>
      </main>
    </SiteLayout>
  );
}
