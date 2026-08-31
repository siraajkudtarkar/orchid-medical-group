"use client";

import { useState } from "react";
import Link from "next/link";
import SiteLayout from "../../../components/SiteLayout";
import { formMeta } from "../../../lib/formMeta";
import { formDefs, type FormField } from "../../../lib/formFields";

export default function FillPageClient({ formId }: { formId: string }) {
  const meta    = formMeta[formId];
  const formDef = formDefs[formId];

  const [values,      setValues]      = useState<Record<string, string>>({});
  const [downloading, setDownloading] = useState(false);
  const [done,        setDone]        = useState(false);

  if (!meta) {
    return (
      <SiteLayout>
        <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 text-center px-6">
          <p className="text-gray-500 text-lg">Form not found.</p>
          <Link href="/#forms" className="text-violet-700 font-semibold underline underline-offset-2 hover:text-violet-900">
            Back to Patient Forms
          </Link>
        </div>
      </SiteLayout>
    );
  }

  const set = (key: string, val: string) =>
    setValues((prev) => ({ ...prev, [key]: val }));

  const handleDownloadFilled = async () => {
    if (!formDef) return;
    setDownloading(true);
    setDone(false);
    try {
      const { PDFDocument, StandardFonts, rgb } = await import("pdf-lib");
      const pdfBytes = await fetch(meta.pdf).then((r) => r.arrayBuffer());
      const pdfDoc   = await PDFDocument.load(pdfBytes);
      const font     = await pdfDoc.embedFont(StandardFonts.Helvetica);
      const pages    = pdfDoc.getPages();

      for (const section of formDef.sections) {
        for (const field of section.fields) {
          if (field.type === "text") {
            const val = (values[field.key] ?? "").trim();
            if (val) {
              pages[field.page ?? 0].drawText(val, {
                x: field.x, y: field.y,
                size: field.fontSize ?? 11,
                font, color: rgb(0, 0, 0),
              });
            }
          } else {
            const selected = values[field.groupKey];
            if (selected) {
              const opt = field.options.find((o) => o.key === selected);
              if (opt) {
                pages[opt.page ?? 0].drawText("X", {
                  x: opt.x, y: opt.y,
                  size: 10, font, color: rgb(0, 0, 0),
                });
              }
            }
          }
        }
      }

      const filled = await pdfDoc.save();
      const url    = URL.createObjectURL(
        new Blob([filled.buffer as ArrayBuffer], { type: "application/pdf" })
      );
      Object.assign(document.createElement("a"), {
        href: url, download: formDef.downloadName,
      }).click();
      URL.revokeObjectURL(url);
      setDone(true);
    } catch (err) {
      console.error("PDF generation failed:", err);
      alert("Something went wrong generating the PDF. Please try again.");
    } finally {
      setDownloading(false);
    }
  };

  const isScreening = meta.category !== "New Patient Form";

  return (
    <SiteLayout>
      {/* ── Header ─────────────────────────────────────────────────────────── */}
      <header className="bg-violet-800 text-white py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/#forms"
            className="inline-flex items-center gap-2 text-violet-300 hover:text-white text-sm mb-5 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Patient Forms
          </Link>

          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5">
            <div>
              <p className="text-violet-300 text-sm font-semibold uppercase tracking-widest mb-1">
                {meta.category} · {meta.lang}
              </p>
              <h1 className="text-3xl sm:text-4xl font-bold">
                {isScreening ? "" : "Ages "}{meta.ageLabel}
              </h1>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {/* Switch language */}
              <Link
                href={`/forms/fill/${meta.altId}`}
                className="inline-flex items-center gap-2 border border-white/30 hover:border-white/60 text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-colors"
              >
                Switch to {meta.altLang}
              </Link>

              {/* Download blank */}
              <a
                href={meta.pdf}
                download={meta.downloadName}
                className="inline-flex items-center gap-2 bg-white/15 hover:bg-white/25 border border-white/30 text-white font-semibold px-5 py-2.5 rounded-full text-sm transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                </svg>
                Download Unfilled PDF
              </a>

              {/* Download filled — only when form fields are mapped */}
              {formDef && (
                <button
                  onClick={handleDownloadFilled}
                  disabled={downloading}
                  className="inline-flex items-center gap-2 bg-white text-violet-800 hover:bg-violet-50 disabled:opacity-60 disabled:cursor-not-allowed font-semibold px-5 py-2.5 rounded-full text-sm transition-colors shadow"
                >
                  {downloading ? (
                    <>
                      <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                      </svg>
                      Generating…
                    </>
                  ) : (
                    <>
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                      </svg>
                      Download Filled PDF
                    </>
                  )}
                </button>
              )}
            </div>
          </div>
        </div>
      </header>

      {/* ── Body ───────────────────────────────────────────────────────────── */}
      <main id="main-content" className="bg-gray-50 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {formDef ? (
            /* ── Split pane: PDF left | form right ── */
            <div className="flex flex-col lg:flex-row gap-6 items-start">

              {/* Left — sticky PDF preview */}
              <div className="hidden lg:block lg:w-1/2 lg:sticky lg:top-24 flex-shrink-0">
                <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-2">
                  Form Preview
                </p>
                <div className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                  <object
                    data={meta.pdf}
                    type="application/pdf"
                    className="w-full"
                    style={{ height: "82vh" }}
                    aria-label={`Preview of ${meta.category} for ages ${meta.ageLabel} in ${meta.lang}`}
                  >
                    <div className="flex flex-col items-center justify-center h-64 gap-4 text-gray-400">
                      <svg className="w-12 h-12 text-violet-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                      </svg>
                      <p className="text-sm">Preview not available in this browser.</p>
                    </div>
                  </object>
                </div>
              </div>

              {/* Right — form fields */}
              <div className="w-full lg:w-1/2 space-y-6">
                {/* Tip */}
                <div className="bg-violet-50 border border-violet-200 rounded-xl px-5 py-4 flex gap-3 items-start text-sm text-violet-800">
                  <svg className="w-5 h-5 text-violet-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                  </svg>
                  <p>
                    Fill in the fields on the right, using the PDF preview on the left as a reference.
                    Click <strong>Download Filled PDF</strong> when done, then print it and bring the signed copy to your appointment.
                  </p>
                </div>

                {/* Privacy note */}
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl px-5 py-4 flex gap-3 items-start text-sm text-emerald-800">
                  <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <p>
                    <strong>Your information never leaves your device.</strong> All form data is processed entirely in your browser — nothing is transmitted to any server. Download and print the completed form to bring to your appointment.
                  </p>
                </div>

                {done && (
                  <div className="bg-emerald-50 border border-emerald-200 rounded-xl px-5 py-4 flex gap-3 items-center text-sm text-emerald-800">
                    <svg className="w-5 h-5 text-emerald-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p><strong>PDF downloaded.</strong> Check your Downloads folder.</p>
                  </div>
                )}

                {/* Form sections */}
                {formDef.sections.map((section) => (
                  <div key={section.title} className="bg-white rounded-2xl border border-gray-200 shadow-sm overflow-hidden">
                    <div className="bg-violet-50 border-b border-violet-100 px-6 py-4">
                      <h2 className="text-base font-bold text-violet-900">{section.title}</h2>
                    </div>
                    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-5">
                      {section.fields.map((field) => (
                        <FieldControl
                          key={field.type === "text" ? field.key : field.groupKey}
                          field={field}
                          values={values}
                          onChange={set}
                        />
                      ))}
                    </div>
                  </div>
                ))}

                {/* Bottom download */}
                <div className="flex justify-end pb-2">
                  <button
                    onClick={handleDownloadFilled}
                    disabled={downloading}
                    className="inline-flex items-center gap-2.5 bg-violet-700 hover:bg-violet-800 disabled:opacity-60 disabled:cursor-not-allowed text-white font-semibold px-8 py-3.5 rounded-full text-sm transition-colors shadow-md"
                  >
                    {downloading ? (
                      <>
                        <svg className="w-4 h-4 animate-spin" fill="none" viewBox="0 0 24 24" aria-hidden="true">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z" />
                        </svg>
                        Generating PDF…
                      </>
                    ) : (
                      <>
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Download Filled PDF
                      </>
                    )}
                  </button>
                </div>

                {/* HIPAA */}
                <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 flex gap-4" role="note">
                  <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                  <p className="text-sm text-amber-800">
                    <strong>Privacy Notice:</strong> Your information is processed entirely in your browser and is never sent to any server.
                    Paper forms are always available at the front desk. Call{" "}
                    <a href="tel:(909) 894-4887" className="font-semibold underline">(909) 894-4887</a>{" "}
                    if you need assistance.
                  </p>
                </div>
              </div>
            </div>

          ) : (
            /* ── Full-width PDF viewer (no form fields mapped yet) ── */
            <div className="space-y-6">
              <div className="bg-violet-50 border border-violet-200 rounded-xl px-5 py-4 flex gap-3 items-start text-sm text-violet-800">
                <svg className="w-5 h-5 text-violet-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <p>
                  <strong>Tip:</strong> You can type directly into the form fields below in Chrome, Firefox, or Edge.
                  When finished, print and bring the signed copy to your appointment — or use <strong>Download Unfilled PDF</strong> above to fill by hand.
                </p>
              </div>

              <div className="bg-emerald-50 border border-emerald-200 rounded-xl px-5 py-4 flex gap-3 items-start text-sm text-emerald-800">
                <svg className="w-5 h-5 text-emerald-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p>
                  <strong>Your information never leaves your device.</strong> All form data is processed entirely in your browser — nothing is transmitted to any server. Download and print the completed form to bring to your appointment.
                </p>
              </div>

              <div className="bg-white rounded-2xl border border-gray-200 overflow-hidden shadow-sm">
                <object
                  data={meta.pdf}
                  type="application/pdf"
                  className="w-full"
                  style={{ height: "880px" }}
                  aria-label={`${meta.category} for ages ${meta.ageLabel} in ${meta.lang}`}
                >
                  <div className="flex flex-col items-center justify-center py-24 px-8 text-center gap-5">
                    <svg className="w-16 h-16 text-violet-200" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                    <div>
                      <p className="text-gray-800 font-semibold text-lg mb-2">PDF preview unavailable in this browser</p>
                      <p className="text-gray-500 text-sm mb-6">Open in Chrome, Firefox, or Edge for inline filling.</p>
                      <a
                        href={meta.pdf}
                        download={meta.downloadName}
                        className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white font-semibold px-8 py-3 rounded-full text-sm transition-colors"
                      >
                        Download PDF
                      </a>
                    </div>
                  </div>
                </object>
              </div>

              <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 flex gap-4" role="note">
                <svg className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <p className="text-sm text-amber-800">
                  <strong>Privacy Notice:</strong> Please bring completed forms to your appointment.
                  Paper forms are always available at the front desk. Call{" "}
                  <a href="tel:(909) 894-4887" className="font-semibold underline">(909) 894-4887</a>{" "}
                  if you need assistance.
                </p>
              </div>
            </div>
          )}
        </div>
      </main>
    </SiteLayout>
  );
}

// ── Individual field control ──────────────────────────────────────────────────

function FieldControl({
  field,
  values,
  onChange,
}: {
  field: FormField;
  values: Record<string, string>;
  onChange: (key: string, val: string) => void;
}) {
  const spanClass = field.span === "full" ? "sm:col-span-2" : "";

  if (field.type === "text") {
    return (
      <div className={spanClass}>
        <label
          htmlFor={field.key}
          className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-1.5"
        >
          {field.label}
        </label>
        <input
          id={field.key}
          type="text"
          value={values[field.key] ?? ""}
          onChange={(e) => onChange(field.key, e.target.value)}
          placeholder={field.placeholder ?? ""}
          className="w-full border border-gray-300 rounded-lg px-3.5 py-2.5 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent transition"
        />
      </div>
    );
  }

  return (
    <fieldset className={spanClass}>
      <legend className="block text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">
        {field.groupLabel}
      </legend>
      <div className="flex flex-wrap gap-2">
        {field.options.map((opt) => {
          const selected = values[field.groupKey] === opt.key;
          return (
            <label
              key={opt.key}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium cursor-pointer transition-colors ${
                selected
                  ? "bg-violet-700 border-violet-700 text-white"
                  : "bg-white border-gray-300 text-gray-700 hover:border-violet-400 hover:text-violet-700"
              }`}
            >
              <input
                type="radio"
                name={field.groupKey}
                value={opt.key}
                checked={selected}
                onChange={() => onChange(field.groupKey, opt.key)}
                className="sr-only"
              />
              {opt.label}
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}
