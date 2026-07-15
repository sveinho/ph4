Office Open XML Presentation (PPTX) is a zipped, XML-based presentation file format developed by Microsoft for electronic slide decks.

## 1. Recommendation Criteria
Excellent for dynamic business presentations, active educational lecture materials, and collaborative slide design workflows across office platforms.

## 2. Migration Risks
Moderate risk over decades; active slide text remains retrievable, but dynamic video components, custom fonts, embedded web charts, and slide transition scripts can break during migration.

## 3. Technical Limitations
Heavy dependency on external system font environments, meaning presentations can break visually or clip text bounding boxes if opened on systems lacking the original fonts.

## Format Identification
* **Byte Signature (Magic Bytes):** Starts with a standard ZIP archive signature `PK..` (Hex: `50 4B 03 04`) and contains `[Content_Types].xml` internally.
* **Structural Analysis:** A compressed ZIP container wrapping a structural XML node hierarchy representing slides, layouts, notes, and asset links.
* **Content Analysis:** PRONOM PUID `fmt/215`.

## Authority Information
* **Governing Body:** ISO/IEC 29500 (International Organization for Standardization).
* **Institutional Approval:** Accepted for administrative agency business capture by Riksarkivet, but restricted for permanent structural preservation in favor of PDF/A.
