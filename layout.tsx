import { brandDescription, brandTitle, crawlable, siteUrl } from '@/lib/seo';
import type { Metadata } from 'next';
import '@fontsource-variable/manrope';
import '@fontsource-variable/inter';
import './globals.css';

export const metadata: Metadata = {
  ...(siteUrl ? { metadataBase: new URL(siteUrl) } : {}),
  title: { default: brandTitle, template: '%s | Advirqa' },
  description: brandDescription,
  robots: { index: crawlable, follow: crawlable },
  icons: { icon: '/branding/favicon.png', apple: '/branding/mark.png' },
  verification: { google: process.env.GOOGLE_SITE_VERIFICATION },
};
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <a className="skip" href="#main">
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}
