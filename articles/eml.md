Electronic Mail Format (EML) is a plain-text file format used to store a single email message, including the original message headers, body text, and attachments.

## 1. Recommendation Criteria
Highly recommended for archiving individual email records, formal correspondence chains, and legal case file documentation where original transmission metadata must be preserved.

## 2. Migration Risks
Low format obsolescence risk due to its plain-text standard structure, but individual attachments inside the email run the risk of becoming obsolete independently of the EML container shell.

## 3. Technical Limitations
Encapsulates binary attachments using Base64 encoding, which bloats the overall file size by roughly 33% compared to raw binary storage methods.

## Format Identification
* **Byte Signature (Magic Bytes):** No explicit binary magic numbers; identified structurally by scanning the initial lines for standardized internet header tokens like `From:`, `To:`, or `Date:`.
* **Structural Analysis:** Conforms to internet message format standards, dividing the file into a structural text header block followed by a message body containing MIME-delimited sections.
* **Content Analysis:** PRONOM PUID `fmt/950`.

## Authority Information
* **Governing Body:** IETF RFC 5322 (Internet Engineering Task Force).
* **Institutional Approval:** Highly recommended for electronic message preservation by the Library of Congress (LOC), the UK National Archives, and accepted by Riksarkivet for archival documentation.
