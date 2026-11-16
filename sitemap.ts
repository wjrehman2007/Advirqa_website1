import { services } from '@/lib/services';
import { navigation } from '@/lib/site-config';
import { policies } from '@/lib/policies';
import { crawlable, siteUrl } from '@/lib/seo';

export default function sitemap() {
  if (!siteUrl || !crawlable) return [];
  return [
    ...navigation.map(([, href]) => href),
    ...services.map(({ slug }) => '/services/' + slug),
    ...Object.keys(policies).map((slug) => '/' + slug),
  ].map((path) => ({ url: new URL(path, siteUrl).href }));
}
