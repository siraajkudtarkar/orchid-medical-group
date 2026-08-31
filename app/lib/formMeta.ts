export interface FormMeta {
  ageLabel: string;
  lang: string;
  category: string;
  pdf: string;
  downloadName: string;
  altId: string;
  altLang: string;
}

export const formMeta: Record<string, FormMeta> = {
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
