import { SITE_CONFIG } from './constants';

interface MetaTag {
  name?: string;
  property?: string;
  content: string;
}

export const generateMetaTags = (
  title: string = SITE_CONFIG.defaultTitle,
  description: string = SITE_CONFIG.defaultDescription,
  path: string = '/'
): {
  title: string;
  meta: MetaTag[];
  link: Array<{ rel: string; href: string; }>;
} => {
  const fullUrl = `${SITE_CONFIG.baseUrl}${path}`;
  const imageUrl = `${SITE_CONFIG.baseUrl}${SITE_CONFIG.defaultImage}`;

  return {
    title: path === '/' ? title : `${title} | ${SITE_CONFIG.name}`,
    meta: [
      {
        name: 'description',
        content: description,
      },
      {
        name: 'keywords',
        content: SITE_CONFIG.keywords.join(', '),
      },
      // Open Graph
      {
        property: 'og:type',
        content: 'website',
      },
      {
        property: 'og:title',
        content: title,
      },
      {
        property: 'og:description',
        content: description,
      },
      {
        property: 'og:url',
        content: fullUrl,
      },
      {
        property: 'og:image',
        content: imageUrl,
      },
      // Twitter
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:title',
        content: title,
      },
      {
        name: 'twitter:description',
        content: description,
      },
      {
        name: 'twitter:image',
        content: imageUrl,
      },
    ],
    link: [
      {
        rel: 'canonical',
        href: fullUrl,
      },
    ],
  };
};