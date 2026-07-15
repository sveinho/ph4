Office Open XML Document (DOCX) is a zipped, XML-based file format developed by Microsoft for word processing documents.

## 1. Recommendation Criteria
Excellent for active administrative workflows, collaborative drafting, and general corporate document exchange across modern office suites.

## 2. Migration Risks
Moderate risk over decades; while the open-source standard mitigates total obsolescence, embedded elements like complex macros or legacy Word Art can break during system migrations.

## 3. Technical Limitations
Separates content from presentation layout, meaning documents can render visually different depending on the specific software viewer, screen size, or local font availability.

## Format Identification
* **Byte Signature (Magic Bytes):** Starts with a standard ZIP archive signature `PK..` (Hex: `50 4B 03 04`) and contains `[Content_Types].xml` internally.
* **Structural Analysis:** A compressed ZIP package containing a hierarchical folder structure of individual XML files for text, styles, and document relationships.
* **Content Analysis:** PRONOM PUID `fmt/412`.

## Authority Information
* **Governing Body:** ISO/IEC 29500 (International Organization for Standardization).
* **Institutional Approval:** Accepted for active document transfer by the National Archives of Norway (Riksarkivet), but restricted for long-term final preservation in favor of PDF/A.
