Experimental Computing Facility (XCF) is the native, open-source layered image format used by the GNU Image Manipulation Program (GIMP).

## 1. Recommendation Criteria
Excellent for active, open-source graphic design projects that require saving full layer hierarchies, transparency channel masks, and vector paths without vendor licensing.

## 2. Migration Risks
Low format risk due to public open-source code documentation, though files should be exported to uncompressed TIFF or PNG for final broad public presentation pipelines.

## 3. Technical Limitations
Lacks universal native viewer rendering support on major commercial operating systems, forcing a direct dependency on GIMP software tools to parse file internals.

## Format Identification
* **Byte Signature (Magic Bytes):** Starts with the text identifier string `gimp xcf ` (Hex: `67 69 6D 70 20 78 63 66 20`).
* **Structural Analysis:** Flat file structure sequentially mapping canvas dimensions, structural image properties, channel states, and layer compressed tile matrices.
* **Content Analysis:** PRONOM PUID `fmt/351`.

## Authority Information
* **Governing Body:** GIMP Open Source Development Team.
* **Institutional Approval:** Recognized by open digital asset communities as a valid preservation format for complex layered editing data, bypassing Adobe lock-in.
