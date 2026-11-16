# Advirqa

The Advirqa agency website uses Next.js and has five main destinations. The Services page links to nine service detail pages. Contact and consultation requests go to one inbox through Resend.

## Run locally

Use Node.js 24 and pnpm 11.

```sh
pnpm install --frozen-lockfile
pnpm dev
```

Open [the local site](http://127.0.0.1:3000/). For a production check, run `pnpm lint`, `pnpm typecheck`, `pnpm test`, `pnpm build`, then `pnpm start`.

## Edit content

| What to change | Where to change it |
| --- | --- |
| Agency introduction, mission, values, target markets and homepage headings | [site-config.ts](lib/site-config.ts), in `about` and `home`. The hero description is `site.description`. |
| CTA labels, contact form heading and consultation label | [site-config.ts](lib/site-config.ts), in `cta` and `contact`. |
| Founder name, title, biography, photo and LinkedIn | [site-config.ts](lib/site-config.ts), in `site.founder`. Put any replacement photo in `public/images/` and update `image`. |
| Company social links and public contact details | [site-config.ts](lib/site-config.ts), in `site.social` and the `email`, `phone` and `whatsapp` fields. Use international digits without a plus sign for WhatsApp. |
| Service names, descriptions, deliverables and individual questions | [services.ts](lib/services.ts). Keep the existing slug to preserve the page URL. The next file, [service-details.ts](lib/service-details.ts), contains optional outcomes and related services keyed by slug. |
| Portfolio text, image and future work | [portfolio.ts](lib/portfolio.ts). The original showcase is in `showcase`. Add an entry to `projects` for each approved example, with a title, description, image URL, alt text, width and height. Place local images in `public/images/`. |
| Privacy and terms pages | [policies.ts](lib/policies.ts). |

Save the file and refresh the development preview. Redeploy after approving a content change.

## Enable the inquiry form

1. Copy [.env.example](.env.example) to `.env.local` for local testing.
2. Verify the sender domain in Resend. Add a sending API key to `RESEND_API_KEY` and an address on that domain to `INQUIRY_EMAIL_FROM`. Add the recipient to `INQUIRY_EMAIL_TO`, or fill `site.email` to use the public business address as your inbox. The optional override allows a separate private inbox.
3. Restart the server and submit a test inquiry. Check that it reaches the intended inbox and that Reply addresses the visitor. The success message means the email provider accepted the message for delivery.
4. Keep the key in server environment settings. The form displays an unavailable message until the required settings are present.

The endpoint validates and size-limits input, checks the request origin, and uses a honeypot and short per-instance rate limits. Resend handles idempotency for retries. The optional IP header should only be configured if the host overwrites it with a trusted client IP. A hosting-layer rate limit on `POST /api/inquiries` can enforce a shared limit across server instances. Messages are sent as text email with a visitor Reply-To and are not stored by the app. [Resend email API documentation](https://resend.com/docs/api-reference/emails/send-email)

## Deploy with Vercel

1. Commit the project folder and push it to a private Git repository. Keep `.env.local` out of Git.
2. In Vercel, open a Pro team for commercial use. Choose **Add New → Project**, import the repository, and select the **Next.js** framework preset. Leave the install and build settings on their defaults. Add `ENABLE_EXPERIMENTAL_COREPACK=1` so Vercel uses the project's pinned pnpm version. [Vercel build settings](https://vercel.com/docs/builds/configure-a-build)
3. Deploy and review the generated URL. The project pins Node.js 24 in `package.json`, so Vercel uses the same major version as the local tests.
4. In **Settings → Domains**, add the domain you own and apply the DNS records Vercel shows at your domain registrar. Set `SITE_URL` to the exact HTTPS address visitors will use. [Vercel domain setup](https://vercel.com/docs/domains/working-with-domains/add-a-domain)
5. Add the Resend settings described above to your Vercel production environment. Keep `SITE_INDEXABLE=false` during review. After approving the site, set `SITE_INDEXABLE=true` and redeploy to enable the sitemap and allow search engine indexing.
6. Submit a test inquiry from the final domain. Confirm the message arrives in the intended inbox and that Reply addresses the visitor.

See the [QA report](QA.md) for the local verification results.
