XML uses a self-describing tag structure, making it highly interoperable across completely different software ecosystems.

#### 1. Recommendation Criteria
Highly recommended for encoding metadata, complex relational data, and configuration files due to its rigid structural rules and platform independence.

#### 2. Migration Risks
Extremely stable with very low migration risks. The primary preservation requirement is ensuring the file is explicitly encoded and saved in standard UTF-8 or UTF-16 to prevent character corruption.

#### 3. Technical Limitations
Files can become highly verbose and bulky, leading to larger file sizes compared to modern binary alternatives or JSON. It can be debated for extremely massive real-time data streaming.

### Format Identification
- **Byte Signature (Magic Bytes):** Starts with `<?xml` (Hex: `3C 3F 78 6D 6C`) if no Byte Order Mark (BOM) is present.
- **Structural Analysis:** Verified through well-formedness rules (matching opening/closing tags, valid root element) and schema validation (XSD/DTD).
- **Content Analysis:** Registered under PRONOM PUID `fmt/101`.

### Authority Information
- **Governing Body:** ISO 19005 (International Organization for Standardization).
- **Institutional Approval:** Highly recommended by the National Archives of Norway (Riksarkivet), the Library of Congress (LOC), and the UK National Archives for long-term document retention.
