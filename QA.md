# Verification

- The production build, TypeScript check, ESLint and three automated tests passed.
- All 16 public pages and 26 internal link targets returned HTTP 200. The retired pricing, insights, blog, quote and admin URLs returned HTTP 404.
- Chromium checked the homepage, About, Services, Google Search Advertising, Portfolio and Contact at 320, 375, 390, 768, 1024, 1440 and 1920 pixels. Desktop and mobile homepage captures were reviewed. The six representative pages passed the selected axe WCAG A and AA checks.
- Browser checks covered keyboard navigation, all nine service inquiry links on the index, service and consultation preselection, the supplied social URLs, and image loading. SHA-256 checks matched the workspace portfolio image and founder photo with the supplied originals.
- Form checks covered required fields, email format, rejected origins, oversized requests, the honeypot, throttling, provider rejection, retries and successful provider acceptance. The delivery tests used synthetic responses.
- A configured Resend account and recipient inbox are needed for a live delivery test. The social buttons use the supplied URLs and safe external-link attributes. Live social profile availability could not be verified by the external checker.

See the [deployment instructions](README.md#deploy).
