OpenDocument Spreadsheet (ODS) is an XML-based open-standard file format used for graphical spreadsheet calculations, charts, and lists.

## 1. Recommendation Criteria
Highly recommended as an open alternative to Excel files for sharing mathematical data charts, data sorting grids, and active accounting formulas without proprietary lock-in.

## 2. Migration Risks
Very low due to the open accessibility of the OASIS schema definitions, though edge-case VBA macros migrated from Excel will fail to execute.

## 3. Technical Limitations
Processing speeds lag behind proprietary binary formats when managing exceptionally dense calculations or data structures exceeding hundreds of thousands of rows.

## Format Identification
* **Byte Signature (Magic Bytes):** Standard ZIP wrapper signature `PK..` (Hex: `50 4B 03 04`) containing the MIME-type declaration text `application/vnd.oasis.opendocument.spreadsheet`.
* **Structural Analysis:** A compressed ZIP archive grouping several distinct XML sub-documents (e.g., `content.xml`, `styles.xml`, `meta.xml`).
* **Content Analysis:** PRONOM PUID `fmt/294`.

## Authority Information
* **Governing Body:** OASIS (Organization for the Advancement of Structured Information Standards) / ISO/IEC 26300.
* **Institutional Approval:** Approved by European public sectors and recognized by the UK National Archives as a valid standard for open spreadsheet documentation.
