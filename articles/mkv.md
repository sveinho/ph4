Matroska Video (MKV) is an open-standard, free container format designed to hold an unlimited number of video, audio, picture, or subtitle tracks inside a single file.

## 1. Recommendation Criteria
Highly recommended for complex audiovisual preservation projects requiring multi-language audio tracks, soft subtitles, and losslessly compressed video streams (e.g., FFV1).

## 2. Migration Risks
Very stable due to its open documentation, though highly dependent on the stability of the underlying codecs wrapped inside the container shell.

## 3. Technical Limitations
Lacks universal native hardware playback support on legacy commercial devices and consumer television screens without installing specialized open-source media decoders.

## Format Identification
* **Byte Signature (Magic Bytes):** Starts with the EBML element ID (Hex: `1A 45 DF A3`).
* **Structural Analysis:** Built on Extensible Binary Meta Language (EBML), a binary derivative of XML, dividing elements into variable-length data blocks.
* **Content Analysis:** PRONOM PUID `fmt/569`.

## Authority Information
* **Governing Body:** Matroska Association / IETF Cellar Working Group.
* **Institutional Approval:** Increasingly recommended for digital audio-visual preservation by the Library of Congress (LOC) and major international film archives as a wrapper for preservation codecs.
