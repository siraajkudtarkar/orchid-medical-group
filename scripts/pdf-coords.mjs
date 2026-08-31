/**
 * Stamps a coordinate grid onto a PDF so you can identify field positions.
 *
 * Usage:
 *   node scripts/pdf-coords.mjs <input.pdf> [output.pdf]
 *
 * Example:
 *   node scripts/pdf-coords.mjs public/forms/newpatient/english-adult.pdf coords-adult.pdf
 *
 * Open the output in Chrome/Preview and hover/zoom to read the grid labels.
 *   Blue  numbers = X axis (left → right)
 *   Green numbers = Y axis (bottom → top)  ← pdf-lib origin is bottom-left
 *
 * Standard letter page = 612 × 792 pts  (1 pt = 1/72 inch)
 */

import { readFileSync, writeFileSync } from "fs";
import { PDFDocument, rgb, StandardFonts } from "pdf-lib";

const [,, inputPath, outputPath = "coords-reference.pdf"] = process.argv;

if (!inputPath) {
  console.error("Usage: node scripts/pdf-coords.mjs <input.pdf> [output.pdf]");
  process.exit(1);
}

const pdfBytes = readFileSync(inputPath);
const pdfDoc  = await PDFDocument.load(pdfBytes);
const font    = await pdfDoc.embedFont(StandardFonts.Helvetica);

const STEP        = 50;   // grid spacing in points
const GRID_OPACITY = 0.45;

for (const page of pdfDoc.getPages()) {
  const { width, height } = page.getSize();

  // ── Vertical grid lines (X axis) ─────────────────────────────────────────
  for (let x = 0; x <= width; x += STEP) {
    page.drawLine({
      start: { x, y: 0 }, end: { x, y: height },
      thickness: 0.4,
      color: rgb(0.55, 0.55, 0.95),
      opacity: GRID_OPACITY,
    });
    // Label at top and bottom
    for (const labelY of [height - 14, 4]) {
      page.drawText(`${x}`, {
        x: x + 2, y: labelY,
        size: 6, font,
        color: rgb(0.3, 0.3, 0.85),
        opacity: 0.9,
      });
    }
  }

  // ── Horizontal grid lines (Y axis) ───────────────────────────────────────
  for (let y = 0; y <= height; y += STEP) {
    page.drawLine({
      start: { x: 0, y }, end: { x: width, y },
      thickness: 0.4,
      color: rgb(0.3, 0.8, 0.3),
      opacity: GRID_OPACITY,
    });
    page.drawText(`${y}`, {
      x: 2, y: y + 2,
      size: 6, font,
      color: rgb(0.1, 0.55, 0.1),
      opacity: 0.9,
    });
    // Right-side label too
    page.drawText(`${y}`, {
      x: width - 22, y: y + 2,
      size: 6, font,
      color: rgb(0.1, 0.55, 0.1),
      opacity: 0.9,
    });
  }

  // ── Dimension banner ──────────────────────────────────────────────────────
  page.drawRectangle({
    x: width / 2 - 90, y: height - 26,
    width: 180, height: 18,
    color: rgb(1, 1, 1),
    opacity: 0.75,
  });
  page.drawText(`Page ${width.toFixed(0)} × ${height.toFixed(0)} pts  |  grid every ${STEP} pts`, {
    x: width / 2 - 88, y: height - 22,
    size: 8, font,
    color: rgb(0.7, 0, 0),
  });

  // ── Sample text stamp — shows exactly how text is placed ─────────────────
  // This red marker will appear at (x:72, y:700) — replace with real coords
  page.drawText("** SAMPLE (72, 700)", {
    x: 72, y: 700,
    size: 9, font,
    color: rgb(0.9, 0.1, 0.1),
    opacity: 0.85,
  });
}

const outBytes = await pdfDoc.save();
writeFileSync(outputPath, outBytes);

console.log(`\n✓  Coordinate reference → ${outputPath}`);
console.log(`   Open in Chrome or Preview, zoom in, and note the (X, Y) where each`);
console.log(`   form field lives.  Blue = X (left→right),  Green = Y (bottom→top).\n`);
