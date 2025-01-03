import { SITE_CONFIG } from './constants';

export const generateSchemaMarkup = () => ({
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  "name": SITE_CONFIG.name,
  "applicationCategory": "BusinessApplication",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "0",
    "priceCurrency": "RUB"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "ratingCount": "1000"
  }
});

export const generateOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": SITE_CONFIG.name,
  "url": SITE_CONFIG.baseUrl,
  "logo": `${SITE_CONFIG.baseUrl}/logo.svg`,
  "sameAs": [
    "https://t.me/wastatus_ru"
  ]
});