SVG stores image elements as mathematical coordinates, shapes, and paths rather than rigid grids of pixels, allowing them to scale infinitely without losing sharpness.

#### 1. Recommendation Criteria
The premier recommendation for archiving digital illustrations, corporate logos, technical diagrams, and schematic graphs due to its open-text nature and absolute scalability.

#### 2. Migration Risks
External asset dependencies (like web fonts or linked external images) carry extreme risks of breaking over time. All typography paths should ideally be flattened, and external assets must be embedded directly inside the SVG code.

#### 3. Technical Limitations
Poorly suited for complex photographic content, which causes extreme code bloating. Interactive elements based on JavaScript or advanced CSS styles must be stripped before final archiving to maintain standard stability.

### Format Identification
- **Byte Signature (Magic Bytes):** Evaluated as plain text; typically contains the `<svg` element tag along with an XML namespace declaration URL.
- **Structural Analysis:** Validated against well-formedness rules for XML structures and the official W3C SVG schemas using text parsers.
- **Content Analysis:** Registered under PRONOM PUID `fmt/92`.

### Authority Information
- **Governing Body:** W3C (World Wide Web Consortium open web standard).
- **Institutional Approval:** Highly recommended for vector graphics preservation by the UK National Archives, the Library of Congress (LOC), and the National Archives of Norway (Riksarkivet).
