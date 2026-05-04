import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata: Metadata = {
  metadataBase: new URL('https://charityinsurance.co.nz'),
  title: {
    default: 'Charity Insurance NZ | Not-for-Profit Insurance Specialists | CharityInsurance.co.nz',
    template: '%s | CharityInsurance.co.nz',
  },
  description: 'Specialist insurance for charities, not-for-profits, sports clubs, churches, and community organisations across New Zealand. Free broker matching — no jargon, no hard sell.',
  openGraph: {
    siteName: 'CharityInsurance.co.nz',
    locale: 'en_NZ',
    type: 'website',
    images: [{ url: '/og-image.png', width: 1200, height: 630, alt: 'CharityInsurance.co.nz' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  authors: [{ name: 'CharityInsurance.co.nz', url: 'https://charityinsurance.co.nz' }],
};

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://charityinsurance.co.nz/#organization',
  name: 'CharityInsurance.co.nz',
  legalName: 'Cover4You (GDS)',
  url: 'https://charityinsurance.co.nz',
  description: 'Specialist insurance comparison and broker referral for charities, not-for-profits, sports clubs, churches, and community organisations in New Zealand.',
  contactPoint: { '@type': 'ContactPoint', email: 'hello@cover4you.co.nz', contactType: 'customer service', areaServed: 'NZ' },
  areaServed: { '@type': 'Country', name: 'New Zealand' },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://charityinsurance.co.nz/#website',
  url: 'https://charityinsurance.co.nz',
  name: 'CharityInsurance.co.nz',
  publisher: { '@id': 'https://charityinsurance.co.nz/#organization' },
  inLanguage: 'en-NZ',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-NZ">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      </head>
      <body className="min-h-screen flex flex-col bg-white">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
