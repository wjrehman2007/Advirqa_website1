import { crawlable, siteUrl } from '@/lib/seo';
export default function robots() {
  return {
    rules: {
      userAgent: '*',
      ...(crawlable ? { allow: '/', disallow: '/api' } : { disallow: '/' }),
    },
    ...(siteUrl && crawlable ? { sitemap: siteUrl + '/sitemap.xml' } : {}),
  };
}
