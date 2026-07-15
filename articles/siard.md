Software Independent Archiving of Relational Databases (SIARD) is an open format designed for the long-term archiving of relational databases in a flat-file structure.

## 1. Recommendation Criteria
The primary standard for preserving structure, relations, and row contents of complex institutional database systems (SQL Server, Oracle, PostgreSQL).

## 2. Migration Risks
Low format risk because it relies on standard XML files, but manual schema verification is necessary to guarantee trigger logic or view scripts are documented externally.

## 3. Technical Limitations
Not operational; it transforms dynamic, high-performance database infrastructures into static read-only text packages, disabling real-time interactive updates.

## Format Identification
* **Byte Signature (Magic Bytes):** Standard ZIP wrapper starting with `PK..` (Hex: `50 4B 03 04`) but uniquely containing a folder structure with `header.xml` and schema definition folders.
* **Structural Analysis:** A compressed archive containing metadata XML files mapping the SQL schema alongside separate XML files for every single table.
* **Content Analysis:** PRONOM PUID `x-fmt/425` (SIARD 1.0) or `fmt/994` (SIARD 2.0).

## Authority Information
* **Governing Body:** Swiss Federal Archives (BAR) / E-ARK Project.
* **Institutional Approval:** Strictly required by the National Archives of Norway (Riksarkivet) for all mandatory public registry and relational database preservation transfers.
