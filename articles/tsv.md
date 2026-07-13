TSV operates identically to CSV but replaces commas with tab delimiters, eliminating character collisions.

#### 1. Recommendation Criteria
Highly recommended for data science, bioinformatics, and relational databases. Because text cells often contain natural commas, using a tab character guarantees that rows and columns are never accidentally split or corrupted during intake.

#### 2. Migration Risks
Extremely low migration risk due to its plain-text nature. Like CSV, the main requirement is ensuring the dataset is explicitly saved using standard UTF-8 encoding to preserve specialized or localized characters.

#### 3. Technical Limitations
It cannot store relational schemas, formulas, cell formatting, or metadata within the file itself. It is debated when human readability is favored over machine ingestion, as tabs can look unaligned in basic text editors.

### Format Identification
- **Byte Signature (Magic Bytes):** No unique header bytes. Read as plain text character streams.
- **Structural Analysis:** Verified by scanning the file for horizontal tab characters (Hex: `09`) separating uniform columns, ended by standard line endings (`CRLF` or `LF`).
- **Content Analysis:** Profiled by Siegfried using PRONOM PUID `x-fmt/16`.
