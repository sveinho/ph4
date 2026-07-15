The standard Portable Document Format (PDF) is a versatile file format designed to present documents independent of application software, hardware, and operating systems.

## 1. Recommendation Criteria
Excellent for general consumer distribution, dynamic interactive forms, printable marketing materials, and everyday office business reports.

## 2. Migration Risks
Low format obsolescence risk, but high information loss risk over decades if external web-linked fonts break or files contain hidden operational web tracking hooks.

## 3. Technical Limitations
Allows dynamic, unpredictable properties like hidden JavaScript strings, third-party encrypted rights management (DRM), and un-embedded font tracking references.

## Format Identification
* **Byte Signature (Magic Bytes):** Starts with the magic string `%PDF-` (Hex: `25 50 44 46`).
* **Structural Analysis:** A body collection of objects (text, graphics, images) structured via a cross-reference table (XREF) map located near the end of the file.
* **Content Analysis:** PRONOM PUID mapping ranges from `fmt/14` through `fmt/20` depending on versioning states (PDF 1.0 to 1.7).

## Authority Information
* **Governing Body:** ISO 32000-1 / ISO 32000-2.
* **Institutional Approval:** Universally deployed for transactional communication, but rejected for formal preservation by Riksarkivet in favor of the restricted PDF/A sub-profile.
