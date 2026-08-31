// ─────────────────────────────────────────────────────────────────────────────
// Field coordinate types
// ─────────────────────────────────────────────────────────────────────────────
// Coordinates use pdf-lib's system: origin (0,0) = BOTTOM-LEFT of the page.
// Standard letter = 612 × 792 pts.  1 pt = 1/72 inch.
// page is 0-indexed (default 0 = first page).

export interface TextField {
  type: "text";
  key: string;
  label: string;
  x: number;
  y: number;
  page?: number;
  fontSize?: number;
  placeholder?: string;
  /** "full" spans both grid columns */
  span?: "full";
}

export interface CheckboxOption {
  key: string;
  label: string;
  x: number;
  y: number;
  page?: number;
}

export interface CheckboxGroup {
  type: "checkbox-group";
  groupKey: string;
  groupLabel: string;
  options: CheckboxOption[];
  /** "full" spans both grid columns */
  span?: "full";
}

export type FormField = TextField | CheckboxGroup;

export interface FormSection {
  title: string;
  fields: FormField[];
}

export interface FormDef {
  title: string;
  pdfPath: string;
  downloadName: string;
  sections: FormSection[];
}

// ─────────────────────────────────────────────────────────────────────────────
// Form definitions — add a new entry here for each form once coords are mapped
// ─────────────────────────────────────────────────────────────────────────────

export const formDefs: Record<string, FormDef> = {

  // ── Adult (English) ────────────────────────────────────────────────────────
  "english-adult": {
    title: "Adult New Patient Form",
    pdfPath: "/forms/newpatient/english-adult.pdf",
    downloadName: "New-Patient-Adult-English-Filled.pdf",
    sections: [
      {
        title: "Patient Information",
        fields: [
          { type: "text", key: "date",          label: "Date",                   x: 450, y: 650, placeholder: "MM/DD/YYYY" },
          { type: "text", key: "lastName",       label: "Last Name",              x: 200, y: 588 },
          { type: "text", key: "firstName",      label: "First Name",             x: 200, y: 565 },
          { type: "text", key: "dateOfBirth",    label: "Date of Birth",          x: 250, y: 540, placeholder: "MM/DD/YYYY" },
          { type: "text", key: "ssn",            label: "Social Security Number", x: 300, y: 450 },
          { type: "text", key: "email",          label: "Email",                  x: 150, y: 430 },
          { type: "text", key: "preferredPharmacy", label: "Preferred Pharmacy",  x: 300, y: 340 },
          {
            type: "checkbox-group",
            groupKey: "sex",
            groupLabel: "Sex",
            options: [
              { key: "male",              label: "Male",                x: 53, y: 405 },
              { key: "female",            label: "Female",              x: 54, y: 381 },
              { key: "preferNotToAnswer", label: "Prefer not to answer",x: 52, y: 361 },
            ],
          },
          {
            type: "checkbox-group",
            groupKey: "maritalStatus",
            groupLabel: "Marital Status",
            options: [
              { key: "single",   label: "Single",   x: 400, y: 405 },
              { key: "married",  label: "Married",  x: 400, y: 382 },
              { key: "divorced", label: "Divorced", x: 400, y: 362 },
            ],
          },
        ],
      },
      {
        title: "Address & Contact",
        fields: [
          { type: "text", key: "address",  label: "Street Address", x: 160, y: 520, span: "full" },
          { type: "text", key: "city",     label: "City",           x: 150, y: 495 },
          { type: "text", key: "state",    label: "State",          x: 350, y: 495 },
          { type: "text", key: "zipCode",  label: "Zip Code",       x: 500, y: 495 },
          { type: "text", key: "phone",    label: "Phone Number",   x: 250, y: 475 },
        ],
      },
      {
        title: "Employment",
        fields: [
          { type: "text", key: "employer",      label: "Employer",              x: 175, y: 315 },
          { type: "text", key: "employerPhone", label: "Employer Phone Number", x: 300, y: 290 },
        ],
      },
      {
        title: "Emergency Contacts",
        fields: [
          { type: "text", key: "ec1Name",         label: "Contact 1 — Full Name",                 x: 150, y: 200, span: "full" },
          { type: "text", key: "ec1Relationship", label: "Contact 1 — Relationship to Patient",   x: 300, y: 180 },
          { type: "text", key: "ec1Phone",        label: "Contact 1 — Phone",                     x: 250, y: 156 },
          { type: "text", key: "ec2Name",         label: "Contact 2 — Full Name",                 x: 150, y: 135, span: "full" },
          { type: "text", key: "ec2Relationship", label: "Contact 2 — Relationship to Patient",   x: 300, y: 110 },
          { type: "text", key: "ec2Phone",        label: "Contact 2 — Phone",                     x: 250, y:  88 },
        ],
      },
    ],
  },

  // ── Add additional forms below once coordinates are mapped ─────────────────
  // "english-0-6-months": { ... },
  // "spanish-adult": { ... },

};
