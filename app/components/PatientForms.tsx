"use client";

import { useState } from "react";

const ageGroups = [
  { id: "0-6-months",  label: "0 – 6 Months",   enPath: "/forms/newpatient/english-0-6-months.pdf",   esPath: "/forms/newpatient/spanish-0-6-months.pdf",   enDownload: "New-Patient-0-6-Months-English.pdf",    esDownload: "New-Patient-0-6-Months-Spanish.pdf" },
  { id: "7-12-months", label: "7 – 12 Months",   enPath: "/forms/newpatient/english-7-12-months.pdf",  esPath: "/forms/newpatient/spanish-7-12-months.pdf",  enDownload: "New-Patient-7-12-Months-English.pdf",   esDownload: "New-Patient-7-12-Months-Spanish.pdf" },
  { id: "1-2-years",   label: "1 – 2 Years",     enPath: "/forms/newpatient/english-1-2-years.pdf",    esPath: "/forms/newpatient/spanish-1-2-years.pdf",    enDownload: "New-Patient-1-2-Years-English.pdf",     esDownload: "New-Patient-1-2-Years-Spanish.pdf" },
  { id: "3-4-years",   label: "3 – 4 Years",     enPath: "/forms/newpatient/english-3-4-years.pdf",    esPath: "/forms/newpatient/spanish-3-4-years.pdf",    enDownload: "New-Patient-3-4-Years-English.pdf",     esDownload: "New-Patient-3-4-Years-Spanish.pdf" },
  { id: "5-8-years",   label: "5 – 8 Years",     enPath: "/forms/newpatient/english-5-8-years.pdf",    esPath: "/forms/newpatient/spanish-5-8-years.pdf",    enDownload: "New-Patient-5-8-Years-English.pdf",     esDownload: "New-Patient-5-8-Years-Spanish.pdf" },
  { id: "9-11-years",  label: "9 – 11 Years",    enPath: "/forms/newpatient/english-9-11-years.pdf",   esPath: "/forms/newpatient/spanish-9-11-years.pdf",   enDownload: "New-Patient-9-11-Years-English.pdf",    esDownload: "New-Patient-9-11-Years-Spanish.pdf" },
  { id: "12-17-years", label: "12 – 17 Years",   enPath: "/forms/newpatient/english-12-17-years.pdf",  esPath: "/forms/newpatient/spanish-12-17-years.pdf",  enDownload: "New-Patient-12-17-Years-English.pdf",   esDownload: "New-Patient-12-17-Years-Spanish.pdf" },
  { id: "18-21-years", label: "18 – 21 Years",   enPath: "/forms/newpatient/english-18-21-years.pdf",  esPath: "/forms/newpatient/spanish-18-21-years.pdf",  enDownload: "New-Patient-18-21-Years-English.pdf",   esDownload: "New-Patient-18-21-Years-Spanish.pdf" },
  { id: "adult",       label: "Adult",            enPath: "/forms/newpatient/english-adult.pdf",        esPath: "/forms/newpatient/spanish-adult.pdf",        enDownload: "New-Patient-Adult-English.pdf",         esDownload: "New-Patient-Adult-Spanish.pdf" },
];

const screeningForms = [
  {
    id: "mchat",
    label: "M-CHAT",
    enSublabel: "Autism Screening — 18 & 24 Month Visits",
    esSublabel: "Evaluación de Autismo — Visitas de 18 y 24 Meses",
    enPath: "/forms/newpatient/mchat-18-24-months-english.pdf",
    esPath: "/forms/newpatient/mchat-18-24-months-spanish.pdf",
    enDownload: "M-CHAT-18-24-Months-English.pdf",
    esDownload: "M-CHAT-18-24-Months-Spanish.pdf",
  },
  {
    id: "peds",
    label: "PEDS",
    enSublabel: "Developmental Screening — 9, 18 & 30 Month Visits",
    esSublabel: "Evaluación del Desarrollo — Visitas de 9, 18 y 30 Meses",
    enPath: "/forms/newpatient/peds-9-18-30-months-english.pdf",
    esPath: "/forms/newpatient/peds-9-18-30-months-spanish.pdf",
    enDownload: "PEDS-9-18-30-Months-English.pdf",
    esDownload: "PEDS-9-18-30-Months-Spanish.pdf",
  },
];

const screeningByAge: Record<string, string[]> = {
  "7-12-months": ["peds"],
  "1-2-years": ["mchat", "peds"],
};

const ui = {
  en: {
    heading:            "New Patient Forms",
    subtitle:           "Select your age group and preferred language to find and download the right form.",
    ageGroupLabel:      "Age Group",
    ageGroupPlaceholder:"Select age group…",
    languageLabel:      "Language",
    emptyState:         "Select an age group above to see the forms for your visit.",
    intakeBadge:        "New Patient Intake",
    screeningBadge:     "Developmental Screening",
    alsoRequired:       "Also required at this visit",
    downloadBtn:        "Download PDF",
    privacyHeading:     "Privacy Notice",
    privacyBody:        "Please bring completed forms to your appointment, or call our office at",
    privacyBody2:       "if you need assistance. Paper forms are available at the front desk.",
  },
  es: {
    heading:            "Formularios para Nuevos Pacientes",
    subtitle:           "Seleccione su grupo de edad e idioma para encontrar y descargar el formulario correcto.",
    ageGroupLabel:      "Grupo de Edad",
    ageGroupPlaceholder:"Seleccione grupo de edad…",
    languageLabel:      "Idioma",
    emptyState:         "Seleccione un grupo de edad para ver los formularios de su visita.",
    intakeBadge:        "Registro de Nuevo Paciente",
    screeningBadge:     "Evaluación del Desarrollo",
    alsoRequired:       "También requerido en esta visita",
    downloadBtn:        "Descargar PDF",
    privacyHeading:     "Aviso de Privacidad",
    privacyBody:        "Traiga los formularios completados a su cita, o llame a nuestra oficina al",
    privacyBody2:       "si necesita ayuda. Los formularios en papel están disponibles en la recepción.",
  },
};

const DownloadIcon = () => (
  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
  </svg>
);

export default function PatientForms() {
  const [selectedAge, setSelectedAge] = useState("");
  const [selectedLang, setSelectedLang] = useState<"en" | "es">("en");

  const t = ui[selectedLang];
  const group = ageGroups.find(g => g.id === selectedAge) ?? null;
  const applicableScreening = selectedAge
    ? screeningForms.filter(f => (screeningByAge[selectedAge] ?? []).includes(f.id))
    : [];

  return (
    <section
      id="forms"
      className="py-20 md:py-28 bg-white-50"
      aria-labelledby="forms-heading"
    >
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-10">
          <h2
            id="forms-heading"
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
          >
            {t.heading}
          </h2>
          <p className="text-lg text-gray-600">{t.subtitle}</p>
        </div>

        {/* Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="flex-1">
            <label htmlFor="age-select" className="block text-sm font-semibold text-gray-700 mb-2">
              {t.ageGroupLabel}
            </label>
            <select
              id="age-select"
              value={selectedAge}
              onChange={e => setSelectedAge(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-800 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
            >
              <option value="">{t.ageGroupPlaceholder}</option>
              {ageGroups.map(g => (
                <option key={g.id} value={g.id}>{g.label}</option>
              ))}
            </select>
          </div>

          <div className="flex-1">
            <label htmlFor="lang-select" className="block text-sm font-semibold text-gray-700 mb-2">
              {t.languageLabel}
            </label>
            <select
              id="lang-select"
              value={selectedLang}
              onChange={e => setSelectedLang(e.target.value as "en" | "es")}
              className="w-full border border-gray-300 rounded-xl px-4 py-3 text-gray-800 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-violet-500 focus:border-violet-500"
            >
              <option value="en">English</option>
              <option value="es">Español</option>
            </select>
          </div>
        </div>

        {/* Results */}
        {!group ? (
          <div className="text-center py-12 text-gray-600 text-sm border border-dashed border-gray-400 rounded-2xl">
            {t.emptyState}
          </div>
        ) : (
          <div className="space-y-3">

            {/* Main intake form */}
            <div className="bg-white border border-gray-200 rounded-2xl p-5 flex items-center justify-between gap-4 shadow-sm">
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">{t.intakeBadge}</p>
                <p className="font-semibold text-gray-900">{group.label}</p>
              </div>
              <a
                href={selectedLang === "en" ? group.enPath : group.esPath}
                download={selectedLang === "en" ? group.enDownload : group.esDownload}
                aria-label={`${t.downloadBtn} — ${group.label} (PDF)`}
                className="flex-shrink-0 inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
              >
                <DownloadIcon />
                {t.downloadBtn}
              </a>
            </div>

            {/* Screening forms (when applicable) */}
            {applicableScreening.length > 0 && (
              <>
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 pt-2 px-1">
                  {t.alsoRequired}
                </p>
                {applicableScreening.map(form => (
                  <div key={form.id} className="bg-white border border-gray-200 rounded-2xl p-5 flex items-center justify-between gap-4 shadow-sm">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-1">{t.screeningBadge}</p>
                      <p className="font-semibold text-gray-900">{form.label}</p>
                      <p className="text-xs text-gray-500 mt-0.5">
                        {selectedLang === "en" ? form.enSublabel : form.esSublabel}
                      </p>
                    </div>
                    <a
                      href={selectedLang === "en" ? form.enPath : form.esPath}
                      download={selectedLang === "en" ? form.enDownload : form.esDownload}
                      aria-label={`${t.downloadBtn} — ${form.label} (PDF)`}
                      className="flex-shrink-0 inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white text-sm font-semibold px-5 py-2.5 rounded-full transition-colors"
                    >
                      <DownloadIcon />
                      {t.downloadBtn}
                    </a>
                  </div>
                ))}
              </>
            )}
          </div>
        )}

      </div>
    </section>
  );
}
