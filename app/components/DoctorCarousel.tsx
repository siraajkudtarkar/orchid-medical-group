"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import sanjayPhoto from "../sanjay.jpg";
import swapnaPhoto from "../swapna.jpeg";

const doctors = [
  {
    name: "Dr. Sanjay Kudtarkar, M.D.",
    photo: sanjayPhoto,
    specialty: "General Practitioner & Board-Certified Pediatrician",
    bio: "Dr. Sanjay Kudtarkar is a dedicated physician delivering comprehensive family medicine and pediatric care. He combines deep clinical expertise with genuine compassion — taking the time to listen, answer every question, and build lasting relationships with each patient and family.",
    education: [
      { label: "Medical School", value: "Lokmanya Tilak Municipal Medical College, Maharashtra University of Health Sciences, 1987" },
      { label: "Residency", value: "Henry Ford Hospital, 1994" },
      { label: "Board Certified", value: "American Board of Pediatrics" },
    ],
    credentials: ["Board-Certified Pediatrician", "General Practitioner"],
    avatarBg: "bg-violet-800",
    accentBorder: "border-violet-200",
    accentBadge: "bg-violet-50 text-violet-700 border-violet-200",
    dot: "bg-violet-700",
  },
  {
    name: "Dr. Swapna Kudtarkar, M.D.",
    photo: swapnaPhoto,
    specialty: "Board-Certified Pediatrician",
    bio: "Dr. Swapna Kudtarkar is a board-certified pediatrician devoted to children's health from newborn through adolescence. Her warm, patient-centered approach ensures that every child and family feels heard, supported, and empowered to make informed health decisions.",
    education: [
      { label: "Medical School", value: "Grant Medical College, 1994" },
      { label: "Residency", value: "Henry Ford Hospital, 1999" },
      { label: "Board Certified", value: "American Board of Pediatrics" },
    ],
    credentials: ["Board-Certified Pediatrician", "Newborn through Adolescent Care"],
    avatarBg: "bg-emerald-600",
    accentBorder: "border-emerald-200",
    accentBadge: "bg-emerald-50 text-emerald-700 border-emerald-200",
    dot: "bg-emerald-600",
  },
];

const INTERVAL_MS = 5000;

export default function DoctorCarousel() {
  const [index, setIndex] = useState(0);
  const [visible, setVisible] = useState(true);
  const [paused, setPaused] = useState(false);
  const [focusedWithin, setFocusedWithin] = useState(false);

  const goTo = useCallback((next: number) => {
    setVisible(false);
    setTimeout(() => {
      setIndex(next);
      setVisible(true);
    }, 200);
  }, []);

  useEffect(() => {
    if (paused || focusedWithin) return;
    const timer = setInterval(() => {
      goTo((index + 1) % doctors.length);
    }, INTERVAL_MS);
    return () => clearInterval(timer);
  }, [index, paused, focusedWithin, goTo]);

  const doctor = doctors[index];

  return (
    <div
      className="relative"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setFocusedWithin(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget)) setFocusedWithin(false);
      }}
    >
      {/* Label */}
      <p className="text-base font-semibold uppercase tracking-widest text-gray-500 mb-4 text-center lg:text-left">
        Our Physicians
      </p>

      {/* Card */}
      <div
        className={`bg-white rounded-2xl border ${doctor.accentBorder} shadow-lg p-8 transition-opacity duration-200 ${
          visible ? "opacity-100" : "opacity-0"
        }`}
        aria-live={focusedWithin ? "polite" : "off"}
        aria-atomic="true"
      >
        {/* Avatar + name */}
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 shadow-md border-2 border-white">
            <Image
              src={doctor.photo}
              alt={`Headshot photo of ${doctor.name}`}
              width={64}
              height={64}
              className="w-full h-full object-cover object-top"
            />
          </div>
          <div>
            <h2 className="text-base font-bold text-gray-900 leading-tight">
              {doctor.name}
            </h2>
            <p className="text-sm text-black-600 font-medium mt-0.5 leading-snug">
              {doctor.specialty}
            </p>
          </div>
        </div>

        {/* Bio */}
        {/* <p className="text-sm text-gray-600 leading-relaxed mb-5">
          {doctor.bio}
        </p> */}

        {/* Education */}
        <div className="mb-4">
          <p className="text-xs font-semibold uppercase tracking-widest text-gray-500 mb-2">
            Education &amp; Training
          </p>
          <ul className="space-y-2">
            {doctor.education.map((item) => (
              <li key={item.label} className="flex items-start gap-4 text-sm">
                {/* <svg
                  className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
                </svg> */}
                <span className="text-gray-600">
                  <span className="font-medium text-gray-800">{item.label}:</span>{" "}
                  {item.value}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Credential badges */}
        <ul className="flex flex-wrap gap-1.5" aria-label={`${doctor.name} credentials`}>
          {doctor.credentials.map((cred) => (
            <li
              key={cred}
              className={`text-xs font-medium px-2.5 py-1 rounded-full border ${doctor.accentBadge}`}
            >
              {cred}
            </li>
          ))}
        </ul>
      </div>

      {/* Dot navigation */}
      <div className="flex items-center justify-center gap-3 mt-5">
        {doctors.map((d, i) => (
          <button
            key={d.name}
            onClick={() => { setPaused(true); goTo(i); }}
            aria-label={`Show ${d.name}`}
            aria-pressed={i === index}
            className={`rounded-full transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-500 ${
              i === index
                ? `w-16 h-4 ${d.dot}`
                : "w-16 h-4 bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>

    </div>
  );
}
