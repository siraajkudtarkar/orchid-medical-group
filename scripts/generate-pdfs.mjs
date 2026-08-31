/**
 * Generates placeholder fillable PDFs for Orchid Medical Group patient forms.
 * Run once: node scripts/generate-pdfs.mjs
 * Drop your real PDFs into public/forms/ with the same filenames to replace these.
 */

import { PDFDocument, StandardFonts, rgb, PDFName, PDFString } from "pdf-lib";
import { writeFileSync } from "fs";
import { join, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const OUT = join(__dirname, "../public/forms");

const BRAND = rgb(0.231, 0.145, 0.302); // #3B254D
const LIGHT = rgb(0.859, 0.733, 0.863); // #DBBBDC
const BLACK = rgb(0, 0, 0);
const GRAY = rgb(0.45, 0.45, 0.45);

/** Draw a section divider line + heading */
function drawSection(page, font, boldFont, label, y) {
  page.drawLine({ start: { x: 50, y }, end: { x: 562, y }, thickness: 0.5, color: LIGHT });
  page.drawText(label, { x: 50, y: y - 18, size: 11, font: boldFont, color: BRAND });
  return y - 36;
}

/** Draw a labelled text field and return the field */
function addTextField(doc, form, page, font, label, fieldName, x, y, width, height = 18, multiline = false) {
  page.drawText(label, { x, y: y + 20, size: 9, font, color: GRAY });
  const field = form.createTextField(fieldName);
  field.enableReadOnly(false);
  if (multiline) field.enableMultiline();
  field.addToPage(page, {
    x, y, width, height,
    borderColor: LIGHT,
    backgroundColor: rgb(0.98, 0.97, 0.99),
    textColor: BLACK,
  });
  return field;
}

/** Draw a labelled checkbox */
function addCheckBox(doc, form, page, font, label, fieldName, x, y) {
  const cb = form.createCheckBox(fieldName);
  cb.addToPage(page, { x, y, width: 14, height: 14, borderColor: BRAND });
  page.drawText(label, { x: x + 20, y: y + 2, size: 9, font, color: BLACK });
  return cb;
}

// ─── Adult Patient Form ────────────────────────────────────────────────────────

async function createAdultForm() {
  const doc = await PDFDocument.create();
  doc.setTitle("New Adult Patient Registration — Orchid Medical Group");
  doc.setAuthor("Orchid Medical Group");
  doc.setSubject("New Adult Patient Registration Form");

  const font = await doc.embedFont(StandardFonts.Helvetica);
  const bold = await doc.embedFont(StandardFonts.HelveticaBold);
  const form = doc.getForm();

  const page = doc.addPage([612, 792]);

  // Header
  page.drawRectangle({ x: 0, y: 742, width: 612, height: 50, color: BRAND });
  page.drawText("ORCHID MEDICAL GROUP", { x: 50, y: 768, size: 14, font: bold, color: rgb(1, 1, 1) });
  page.drawText("New Adult Patient Registration", { x: 50, y: 754, size: 9, font, color: LIGHT });
  page.drawText("345 Terracina Blvd Ste A, Redlands, CA 92373  |  (909) 894-4887", { x: 320, y: 761, size: 8, font, color: LIGHT });

  let y = 720;

  // Personal Information
  y = drawSection(page, font, bold, "PERSONAL INFORMATION", y);
  addTextField(doc, form, page, font, "First Name *", "firstName", 50, y, 170);
  addTextField(doc, form, page, font, "Last Name *", "lastName", 232, y, 170);
  addTextField(doc, form, page, font, "Date of Birth *", "dob", 414, y, 148);
  y -= 44;
  addTextField(doc, form, page, font, "Phone Number *", "phone", 50, y, 170);
  addTextField(doc, form, page, font, "Email Address", "email", 232, y, 330);
  y -= 44;
  addTextField(doc, form, page, font, "Street Address", "address", 50, y, 352);
  addTextField(doc, form, page, font, "City", "city", 414, y, 148);
  y -= 44;
  page.drawText("Gender:", { x: 50, y: y + 20, size: 9, font, color: GRAY });
  addCheckBox(doc, form, page, font, "Male", "genderMale", 110, y + 2);
  addCheckBox(doc, form, page, font, "Female", "genderFemale", 160, y + 2);
  addCheckBox(doc, form, page, font, "Non-binary", "genderNonbinary", 220, y + 2);
  addCheckBox(doc, form, page, font, "Prefer not to say", "genderPNTS", 305, y + 2);
  addTextField(doc, form, page, font, "Preferred Language", "preferredLanguage", 414, y, 148);
  y -= 44;

  // Insurance
  y = drawSection(page, font, bold, "INSURANCE INFORMATION", y);
  page.drawText("Insurance Type:", { x: 50, y: y + 20, size: 9, font, color: GRAY });
  addCheckBox(doc, form, page, font, "IEHP", "insIEHP", 140, y + 2);
  addCheckBox(doc, form, page, font, "Other Medi-Cal", "insMediCal", 190, y + 2);
  addCheckBox(doc, form, page, font, "Private", "insPrivate", 280, y + 2);
  addCheckBox(doc, form, page, font, "Medicare", "insMedicare", 335, y + 2);
  addCheckBox(doc, form, page, font, "Self-pay", "insSelfPay", 400, y + 2);
  y -= 44;
  addTextField(doc, form, page, font, "IEHP Member ID (if applicable)", "iehpId", 50, y, 250);
  addTextField(doc, form, page, font, "Other Insurance Name", "otherIns", 314, y, 248);
  y -= 44;

  // Emergency Contact
  y = drawSection(page, font, bold, "EMERGENCY CONTACT", y);
  addTextField(doc, form, page, font, "Full Name *", "emergencyName", 50, y, 230);
  addTextField(doc, form, page, font, "Relationship", "emergencyRelation", 292, y, 150);
  addTextField(doc, form, page, font, "Phone *", "emergencyPhone", 454, y, 108);
  y -= 44;

  // Medical History
  y = drawSection(page, font, bold, "MEDICAL HISTORY  (leave blank if not applicable)", y);
  addTextField(doc, form, page, font, "Current Medications (name, dose, frequency)", "medications", 50, y, 512, 40, true);
  y -= 66;
  addTextField(doc, form, page, font, "Known Allergies (medications, foods, environmental)", "allergies", 50, y, 512, 32, true);
  y -= 58;
  addTextField(doc, form, page, font, "Current / Past Medical Conditions", "conditions", 50, y, 512, 40, true);
  y -= 66;
  addTextField(doc, form, page, font, "Past Surgeries or Hospitalizations", "surgeries", 50, y, 250, 32, true);
  addTextField(doc, form, page, font, "Family Medical History", "familyHistory", 314, y, 248, 32, true);
  y -= 58;

  // Consent
  y = drawSection(page, font, bold, "CONSENT & ACKNOWLEDGMENT", y);
  const consentText =
    "I authorize Orchid Medical Group to provide medical care deemed appropriate by the physicians. " +
    "I acknowledge receipt of the HIPAA Notice of Privacy Practices.";
  page.drawText(consentText, { x: 50, y, size: 8, font, color: BLACK, maxWidth: 512, lineHeight: 13 });
  y -= 32;
  page.drawText("Patient Signature:", { x: 50, y, size: 9, font, color: GRAY });
  page.drawLine({ start: { x: 150, y: y - 2 }, end: { x: 420, y: y - 2 }, thickness: 0.5, color: BLACK });
  page.drawText("Date:", { x: 440, y, size: 9, font, color: GRAY });
  page.drawLine({ start: { x: 470, y: y - 2 }, end: { x: 562, y: y - 2 }, thickness: 0.5, color: BLACK });

  // Footer
  page.drawText("PLACEHOLDER FORM — Replace with your official intake PDF  |  Orchid Medical Group  |  orchidmedicalgroup.com",
    { x: 50, y: 20, size: 7, font, color: LIGHT });

  writeFileSync(join(OUT, "adult-patient.pdf"), await doc.save());
  console.log("✓ adult-patient.pdf");
}

// ─── Pediatric Patient Form ───────────────────────────────────────────────────

async function createPediatricForm() {
  const doc = await PDFDocument.create();
  doc.setTitle("New Pediatric Patient Registration — Orchid Medical Group");
  doc.setAuthor("Orchid Medical Group");

  const font = await doc.embedFont(StandardFonts.Helvetica);
  const bold = await doc.embedFont(StandardFonts.HelveticaBold);
  const form = doc.getForm();
  const page = doc.addPage([612, 792]);

  page.drawRectangle({ x: 0, y: 742, width: 612, height: 50, color: BRAND });
  page.drawText("ORCHID MEDICAL GROUP", { x: 50, y: 768, size: 14, font: bold, color: rgb(1, 1, 1) });
  page.drawText("New Pediatric Patient Registration  (Birth – 17 yrs)", { x: 50, y: 754, size: 9, font, color: LIGHT });
  page.drawText("345 Terracina Blvd Ste A, Redlands, CA 92373  |  (909) 894-4887", { x: 300, y: 761, size: 8, font, color: LIGHT });

  let y = 720;

  // Child info
  y = drawSection(page, font, bold, "CHILD'S INFORMATION", y);
  addTextField(doc, form, page, font, "Child's First Name *", "childFirst", 50, y, 200);
  addTextField(doc, form, page, font, "Child's Last Name *", "childLast", 264, y, 200);
  addTextField(doc, form, page, font, "Date of Birth *", "childDob", 476, y, 86);
  y -= 44;
  page.drawText("Sex:", { x: 50, y: y + 20, size: 9, font, color: GRAY });
  addCheckBox(doc, form, page, font, "Male", "sexMale", 80, y + 2);
  addCheckBox(doc, form, page, font, "Female", "sexFemale", 130, y + 2);
  addCheckBox(doc, form, page, font, "Other", "sexOther", 190, y + 2);
  y -= 44;

  // Parent / Guardian
  y = drawSection(page, font, bold, "PARENT / LEGAL GUARDIAN", y);
  addTextField(doc, form, page, font, "Full Name *", "guardianName", 50, y, 250);
  addTextField(doc, form, page, font, "Relationship to Child", "guardianRelation", 314, y, 248);
  y -= 44;
  addTextField(doc, form, page, font, "Phone *", "guardianPhone", 50, y, 200);
  addTextField(doc, form, page, font, "Email", "guardianEmail", 264, y, 298);
  y -= 44;
  addTextField(doc, form, page, font, "Home Address", "guardianAddress", 50, y, 350);
  addTextField(doc, form, page, font, "City / ZIP", "guardianCityZip", 414, y, 148);
  y -= 44;
  addTextField(doc, form, page, font, "Preferred Language", "language", 50, y, 200);
  y -= 44;

  // Insurance
  y = drawSection(page, font, bold, "INSURANCE INFORMATION", y);
  page.drawText("Insurance Type:", { x: 50, y: y + 20, size: 9, font, color: GRAY });
  addCheckBox(doc, form, page, font, "IEHP", "insIEHP", 140, y + 2);
  addCheckBox(doc, form, page, font, "Other Medi-Cal", "insMediCal", 190, y + 2);
  addCheckBox(doc, form, page, font, "Private", "insPrivate", 280, y + 2);
  addCheckBox(doc, form, page, font, "Self-pay", "insSelfPay", 335, y + 2);
  y -= 44;
  addTextField(doc, form, page, font, "IEHP Member ID (child's card)", "iehpId", 50, y, 250);
  addTextField(doc, form, page, font, "Other Insurance / Policy #", "otherIns", 314, y, 248);
  y -= 44;

  // Child Medical History
  y = drawSection(page, font, bold, "CHILD'S MEDICAL HISTORY", y);
  addTextField(doc, form, page, font, "Known Allergies", "allergies", 50, y, 512, 32, true);
  y -= 58;
  addTextField(doc, form, page, font, "Current Medications", "medications", 50, y, 512, 32, true);
  y -= 58;
  addTextField(doc, form, page, font, "Medical Conditions / Special Needs", "conditions", 50, y, 512, 32, true);
  y -= 58;
  addTextField(doc, form, page, font, "Birth / Newborn History", "birthHistory", 50, y, 250, 32, true);
  page.drawText("Immunizations:", { x: 314, y: y + 20, size: 9, font, color: GRAY });
  addCheckBox(doc, form, page, font, "Up to date", "immUpToDate", 395, y + 2);
  addCheckBox(doc, form, page, font, "Behind", "immBehind", 460, y + 2);
  addCheckBox(doc, form, page, font, "Unknown", "immUnknown", 508, y + 2);
  y -= 58;

  // Emergency Contact
  y = drawSection(page, font, bold, "EMERGENCY CONTACT (other than guardian)", y);
  addTextField(doc, form, page, font, "Full Name *", "emergencyName", 50, y, 230);
  addTextField(doc, form, page, font, "Relationship", "emergencyRelation", 292, y, 150);
  addTextField(doc, form, page, font, "Phone *", "emergencyPhone", 454, y, 108);
  y -= 44;

  // Consent
  y = drawSection(page, font, bold, "CONSENT & ACKNOWLEDGMENT", y);
  page.drawText(
    "As parent/legal guardian, I authorize Orchid Medical Group to provide medical care for the above-named child.\n" +
    "I acknowledge receipt of the HIPAA Notice of Privacy Practices.",
    { x: 50, y, size: 8, font, color: BLACK, lineHeight: 13 }
  );
  y -= 36;
  page.drawText("Guardian Signature:", { x: 50, y, size: 9, font, color: GRAY });
  page.drawLine({ start: { x: 160, y: y - 2 }, end: { x: 420, y: y - 2 }, thickness: 0.5, color: BLACK });
  page.drawText("Date:", { x: 440, y, size: 9, font, color: GRAY });
  page.drawLine({ start: { x: 470, y: y - 2 }, end: { x: 562, y: y - 2 }, thickness: 0.5, color: BLACK });

  page.drawText("PLACEHOLDER FORM — Replace with your official intake PDF  |  Orchid Medical Group  |  orchidmedicalgroup.com",
    { x: 50, y: 20, size: 7, font, color: LIGHT });

  writeFileSync(join(OUT, "pediatric-patient.pdf"), await doc.save());
  console.log("✓ pediatric-patient.pdf");
}

// ─── Medical Records Request ───────────────────────────────────────────────────

async function createRecordsForm() {
  const doc = await PDFDocument.create();
  doc.setTitle("Medical Records Request — Orchid Medical Group");
  doc.setAuthor("Orchid Medical Group");

  const font = await doc.embedFont(StandardFonts.Helvetica);
  const bold = await doc.embedFont(StandardFonts.HelveticaBold);
  const form = doc.getForm();
  const page = doc.addPage([612, 792]);

  page.drawRectangle({ x: 0, y: 742, width: 612, height: 50, color: BRAND });
  page.drawText("ORCHID MEDICAL GROUP", { x: 50, y: 768, size: 14, font: bold, color: rgb(1, 1, 1) });
  page.drawText("Authorization for Release of Medical Records", { x: 50, y: 754, size: 9, font, color: LIGHT });
  page.drawText("345 Terracina Blvd Ste A, Redlands, CA 92373  |  (909) 894-4887", { x: 280, y: 761, size: 8, font, color: LIGHT });

  let y = 720;

  // Patient Info
  y = drawSection(page, font, bold, "PATIENT INFORMATION", y);
  addTextField(doc, form, page, font, "Patient Full Name *", "patientName", 50, y, 300);
  addTextField(doc, form, page, font, "Date of Birth *", "dob", 364, y, 198);
  y -= 44;
  addTextField(doc, form, page, font, "Phone *", "phone", 50, y, 200);
  addTextField(doc, form, page, font, "Email", "email", 264, y, 298);
  y -= 44;

  // Records Requested
  y = drawSection(page, font, bold, "RECORDS REQUESTED  (check all that apply)", y);
  const records = [
    ["Complete Medical Record", "recComplete"],
    ["Office Visit Notes", "recNotes"],
    ["Lab Results", "recLab"],
    ["Immunization Records", "recImmun"],
    ["Prescription History", "recRx"],
    ["Referral Records", "recReferral"],
    ["Imaging / Radiology", "recImaging"],
    ["Hospital Records", "recHospital"],
  ];
  let col = 0;
  for (const [label, name] of records) {
    addCheckBox(doc, form, page, font, label, name, col < 4 ? 50 + col * 130 : 50 + (col - 4) * 130, col < 4 ? y : y - 26);
    col++;
  }
  y -= 60;
  addTextField(doc, form, page, font, "Date Range — From", "dateFrom", 50, y, 200);
  addTextField(doc, form, page, font, "To", "dateTo", 264, y, 200);
  addTextField(doc, form, page, font, "Purpose of Release", "purpose", 50, y - 44, 512);
  y -= 88;

  // Send To
  y = drawSection(page, font, bold, "SEND RECORDS TO", y);
  page.drawText("Send to:", { x: 50, y: y + 20, size: 9, font, color: GRAY });
  addCheckBox(doc, form, page, font, "Patient (pick up)", "sendPickup", 110, y + 2);
  addCheckBox(doc, form, page, font, "Mail to address on file", "sendMail", 215, y + 2);
  addCheckBox(doc, form, page, font, "Another Provider / Facility", "sendProvider", 360, y + 2);
  y -= 44;
  addTextField(doc, form, page, font, "Recipient Name / Facility", "recipientName", 50, y, 300);
  addTextField(doc, form, page, font, "Fax Number", "recipientFax", 364, y, 198);
  y -= 44;
  addTextField(doc, form, page, font, "Mailing Address (if no fax)", "recipientAddress", 50, y, 512);
  y -= 44;

  // Authorization
  y = drawSection(page, font, bold, "PATIENT AUTHORIZATION", y);
  const authText =
    "I authorize Orchid Medical Group to release the medical records described above. I understand I may revoke " +
    "this authorization at any time by contacting the office in writing. California law permits providers to charge " +
    "a reasonable fee for copying records. Records will be processed within 5–10 business days.";
  page.drawText(authText, { x: 50, y, size: 8, font, color: BLACK, maxWidth: 512, lineHeight: 13 });
  y -= 50;
  page.drawText("Patient Signature:", { x: 50, y, size: 9, font, color: GRAY });
  page.drawLine({ start: { x: 160, y: y - 2 }, end: { x: 420, y: y - 2 }, thickness: 0.5, color: BLACK });
  page.drawText("Date:", { x: 440, y, size: 9, font, color: GRAY });
  page.drawLine({ start: { x: 470, y: y - 2 }, end: { x: 562, y: y - 2 }, thickness: 0.5, color: BLACK });

  page.drawText("PLACEHOLDER FORM — Replace with your official intake PDF  |  Orchid Medical Group  |  orchidmedicalgroup.com",
    { x: 50, y: 20, size: 7, font, color: LIGHT });

  writeFileSync(join(OUT, "medical-records-request.pdf"), await doc.save());
  console.log("✓ medical-records-request.pdf");
}

// ─── Run all ──────────────────────────────────────────────────────────────────

(async () => {
  await createAdultForm();
  await createPediatricForm();
  await createRecordsForm();
  console.log("\nPlaceholder PDFs written to public/forms/");
  console.log("Replace with your actual clinic forms when ready.");
})();
