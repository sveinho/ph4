Structured Query Language (SQL) data dumps are plain-text script files containing the sequence of commands needed to reconstruct a database schema and its records.

## 1. Recommendation Criteria
Excellent for local software development backups, code versioning, and migration tracks between active live environments.

## 2. Migration Risks
High parsing risk over long timelines due to dialect variations; an export generated from MySQL will regularly fail when executed in an Oracle or PostgreSQL environment without syntax modification.

## 3. Technical Limitations
Lacks a strict global structure validation file standard, forcing dependency on external software parsers to process massive, multi-gigabyte plain text lists.

## Format Identification
* **Byte Signature (Magic Bytes):** No definitive binary signature; validated structurally by scanning for text tokens like `CREATE TABLE` or `INSERT INTO`.
* **Structural Analysis:** Linear sequence of standard ASCII or UTF-8 plain-text SQL statements.
* **Content Analysis:** PRONOM PUID `x-fmt/311`.

## Authority Information
* **Governing Body:** ISO/IEC 9075 series.
* **Institutional Approval:** Used as a secondary documentation reference but generally rejected by Riksarkivet for permanent database archiving in favor of SIARD.
