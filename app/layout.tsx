import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ExitIntentPopup from '@/components/ExitIntentPopup';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.charityinsurance.co.nz'),
  title: {
    default: 'Charity Insurance NZ | Not-for-Profit Insurance Specialists | CharityInsurance.co.nz',
    template: '%s | CharityInsurance.co.nz',
  },
  description: 'Specialist insurance for charities, not-for-profits, sports clubs, churches, and community organisations across New Zealand. Registered Financial Service Providers — no jargon, no hard sell.',
  openGraph: {
    siteName: 'CharityInsurance.co.nz',
    locale: 'en_NZ',
    type: 'website',
    images: [{ url: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1200&h=630&q=80', width: 1200, height: 630, alt: 'CharityInsurance.co.nz — Specialist insurance for charities and not-for-profits in New Zealand' }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1 } },
  authors: [{ name: 'CharityInsurance.co.nz', url: 'https://www.charityinsurance.co.nz' }],
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-96x96.png', sizes: '96x96', type: 'image/png' },
    ],
    shortcut: '/favicon.ico',
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
    other: [
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
  },
};

const orgSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://www.charityinsurance.co.nz/#organization',
  name: 'CharityInsurance.co.nz',
  legalName: 'Cover4You (GDS)',
  url: 'https://www.charityinsurance.co.nz',
  description: 'Specialist insurance comparison and broker referral for charities, not-for-profits, sports clubs, churches, and community organisations in New Zealand.',
  contactPoint: { '@type': 'ContactPoint', email: 'hello@cover4you.co.nz', contactType: 'customer service', areaServed: 'NZ' },
  areaServed: { '@type': 'Country', name: 'New Zealand' },
};

const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': 'https://www.charityinsurance.co.nz/#website',
  url: 'https://www.charityinsurance.co.nz',
  name: 'CharityInsurance.co.nz',
  publisher: { '@id': 'https://www.charityinsurance.co.nz/#organization' },
  inLanguage: 'en-NZ',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-NZ">
      <head>
        {/* Google tag (gtag.js) – GA4 */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-JKTDN358JQ" />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-JKTDN358JQ');`,
          }}
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      </head>
      <body className="min-h-screen flex flex-col bg-white">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
        <ExitIntentPopup />
      </body>
    </html>
  );
}
