The Esri Shapefile (SHP) is a geospatial vector data format used for storing geometric locations and attribute information of geographic features.

## 1. Recommendation Criteria
The legacy industry standard for spatial analysis, GIS asset mapping, and transferring geometric shapes (points, lines, polygons) between mapping applications.

## 2. Migration Risks
Moderate; stable due to its ubiquitous industry status, but prone to data corruption if any of its mandatory companion peer files (.dbf, .shx) are separated or deleted.

## 3. Technical Limitations
Severely limited by legacy 1990s specifications: column names are restricted to 10 characters, file sizes are capped at 2 GB, and attribute tables use outdated dBase limits.

## Format Identification
* **Byte Signature (Magic Bytes):** Starts with a fixed file code (Hex: `00 00 27 0A` at byte 0) followed by a 100-byte binary header.
* **Structural Analysis:** A multi-file format structure where the main `.shp` file stores spatial geometries, linked directly to database fields via a cross-index `.shx` file.
* **Content Analysis:** PRONOM PUID `x-fmt/235`.

## Authority Information
* **Governing Body:** Esri (Environmental Systems Research Institute) White Paper Standard.
* **Institutional Approval:** Accepted for vector GIS datasets by the Library of Congress (LOC) and mapping authorities, though gradually being superseded by GeoJSON or GeoPackage.
