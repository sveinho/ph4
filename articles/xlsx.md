Microsoft Excel Open XML Spreadsheet (XLSX) is a zipped, XML-based file format developed by Microsoft for spreadsheets.

## 1. Recommendation Criteria
Excellent for active business calculation models, financial budgeting, and interactive operational data analysis within modern enterprise office suites.

## 2. Migration Risks
Moderate risk over decades; formulas and basic grid data are highly retrievable through open-source parsers, but complex embedded macros (VBA) or external data connections will break during systems migration.

## 3. Technical Limitations
Separates mathematical content from presentation layout, meaning font constraints, cell sizing, and color rendering can vary across different platform application viewers.

## Format Identification
* **Byte Signature (Magic Bytes):** Starts with a standard ZIP archive signature `PK..` (Hex: `50 4B 03 04`) and contains `[Content_Types].xml` internally.
* **Structural Analysis:** A compressed ZIP package containing a hierarchical folder structure of individual XML files mapping cell contents, styles, and calculation formulas.
* **Content Analysis:** PRONOM PUID `fmt/214`.

## Authority Information
* **Governing Body:** ISO/IEC 29500 (International Organization for Standardization).
* **Institutional Approval:** Accepted for active operational usage by the National Archives of Norway (Riksarkivet), but restricted for long-term final preservation in favor of static CSV or SIARD extraction models.
