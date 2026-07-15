Waveform Audio File Format (WAV/BWF) is a raw, uncompressed audio format utilized for high-fidelity bit-perfect sound storage.

## 1. Recommendation Criteria
The absolute baseline standard for master audio preservation, oral history recording, and music studio tracking where acoustic data degradation cannot be tolerated.

## 2. Migration Risks
Extremely low format degradation risk due to linear pulse-code modulation (LPCM) encoding, which ensures direct hardware compatibility for the foreseeable future.

## 3. Technical Limitations
File sizes are immense, creating significant storage overhead, and the standard specification caps maximum file capacities at 4 GB.

## Format Identification
* **Byte Signature (Magic Bytes):** Starts with `RIFF` (Hex: `52 49 46 46`) and contains the format marker `WAVE` (Hex: `57 41 56 45`) at offset 8.
* **Structural Analysis:** Organized around explicit data chunks (`fmt ` for technical properties and `data` for raw audio samples).
* **Content Analysis:** PRONOM PUID `fmt/141` (Standard WAV) or `fmt/704` (Broadcast Wave Format / BWF).

## Authority Information
* **Governing Body:** Microsoft & IBM RFC 2361 / EBU TECH 3285 (European Broadcasting Union).
* **Institutional Approval:** Officially mandated as the master audio standard by the National Archives of Norway (Riksarkivet), the Library of Congress (LOC), and the International Association of Sound and Audiovisual Archives (IASA).
