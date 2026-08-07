import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { landingPages, LandingPage } from '@/data/landing-pages';
import QuoteForm from '@/components/QuoteForm';

// ---------------------------------------------------------------------------
// Org type slug → display name mapping
// ---------------------------------------------------------------------------
const orgTypeNames: Record<string, string> = {
  'registered-charities': 'Registered Charities',
  'sports-clubs': 'Sports Clubs',
  'churches-religious': 'Churches & Religious Organisations',
  'community-groups-trusts': 'Community Groups & Trusts',
  'schools-education-boards': 'Schools & Education Boards',
  'aged-care-organisations': 'Aged Care Organisations',
  'social-services': 'Social Services',
  'arts-culture': 'Arts & Culture',
  'environmental-conservation': 'Environmental Conservation',
  'youth-organisations': 'Youth Organisations',
  'animal-welfare': 'Animal Welfare',
  'disability-support': 'Disability Support',
  'marae-iwi-trusts': 'Marae & Iwi Trusts',
  'foundations-trusts': 'Foundations & Trusts',
  'hospices-health-charities': 'Hospices & Health Charities',
};

// ---------------------------------------------------------------------------
// Static params
// ---------------------------------------------------------------------------
export async function generateStaticParams(): Promise<{ slug: string }[]> {
  return landingPages.map((page) => ({ slug: page.slug }));
}

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const page = landingPages.find((p) => p.slug === slug);

  if (!page) {
    return { title: 'Not Found' };
  }

  const canonicalUrl = `https://www.charityinsurance.co.nz/charity-insurance/${slug}/`;

  return {
    title: page.metaTitle,
    description: page.metaDesc,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: page.metaTitle,
      description: page.metaDesc,
      url: canonicalUrl,
      siteName: 'charityinsurance.co.nz',
      images: [
        {
          url: page.heroImage,
          width: 1200,
          height: 630,
          alt: page.h1,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: page.metaTitle,
      description: page.metaDesc,
      images: [page.heroImage],
    },
  };
}

// ---------------------------------------------------------------------------
// Trust badge data (no emoji — SVG icons only)
// ---------------------------------------------------------------------------
const trustBadges = [
  {
    label: 'Registered Financial Service Providers',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-emerald-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    label: 'Multiple Insurers Compared',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-emerald-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"
        />
      </svg>
    ),
  },
  {
    label: 'Charity Sector Specialists',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-emerald-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"
        />
      </svg>
    ),
  },
  {
    label: 'No Cost to Compare',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-6 w-6 text-emerald-500"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
];

// ---------------------------------------------------------------------------
// Page component
// ---------------------------------------------------------------------------
export default async function LandingPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const page: LandingPage | undefined = landingPages.find(
    (p) => p.slug === slug
  );

  if (!page) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-white">

      {/* ------------------------------------------------------------------ */}
      {/* Hero                                                                */}
      {/* ------------------------------------------------------------------ */}
      <section className="relative bg-slate-900 overflow-hidden">
        {/* Background image with overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: `url(${page.heroImage})` }}
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

            {/* Left: copy */}
            <div>
              {/* Badge — SVG-only, no emoji */}
              <div className="inline-flex items-center gap-2 rounded-full bg-emerald-600/20 border border-emerald-500/30 px-4 py-1.5 mb-6">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-emerald-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
                <span className="text-sm font-medium text-emerald-300">
                  Charity Insurance Specialists
                </span>
              </div>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight mb-6">
                {page.h1}
              </h1>

              <p className="text-lg text-slate-300 leading-relaxed max-w-xl">
                {page.intro}
              </p>
            </div>

            {/* Right: QuoteForm */}
            <div className="lg:pt-2">
              <QuoteForm compact={true} />
            </div>

          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Breadcrumb                                                          */}
      {/* ------------------------------------------------------------------ */}
      <nav
        aria-label="Breadcrumb"
        className="bg-slate-50 border-b border-slate-200"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3">
          <ol className="flex flex-wrap items-center gap-1.5 text-sm text-slate-500">
            <li>
              <Link
                href="/"
                className="hover:text-emerald-600 transition-colors"
              >
                Home
              </Link>
            </li>
            <li aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5 text-slate-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </li>
            <li>
              <Link
                href="/charity-insurance/"
                className="hover:text-emerald-600 transition-colors"
              >
                Charity Insurance
              </Link>
            </li>
            <li aria-hidden="true">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-3.5 w-3.5 text-slate-400"
                viewBox="0 0 20 20"
                fill="currentColor"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
            </li>
            <li className="text-slate-700 font-medium" aria-current="page">
              {page.h1}
            </li>
          </ol>
        </div>
      </nav>

      {/* ------------------------------------------------------------------ */}
      {/* Trust badges strip                                                  */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-white border-b border-slate-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <ul className="flex flex-wrap justify-center gap-6 sm:gap-10">
            {trustBadges.map((badge) => (
              <li
                key={badge.label}
                className="flex items-center gap-2.5 text-slate-700"
              >
                {badge.icon}
                <span className="text-sm font-medium">{badge.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Key points                                                          */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Key Coverage Points
            </h2>
            <p className="mt-3 text-slate-600 max-w-2xl">
              What your policy needs to address for this type of organisation and risk profile.
            </p>
          </div>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {page.keyPoints.map((point, index) => (
              <li
                key={index}
                className="flex items-start gap-4 rounded-xl border border-slate-200 bg-slate-50 p-5 hover:border-emerald-200 hover:bg-emerald-50/40 transition-colors"
              >
                <span className="flex-shrink-0 mt-0.5 flex h-7 w-7 items-center justify-center rounded-full bg-emerald-600 text-white text-sm font-bold">
                  {index + 1}
                </span>
                <p className="text-slate-700 leading-snug">{point}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Coverage angle — full-width emerald-50 panel                       */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-emerald-50 py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-1 w-10 rounded bg-emerald-600" aria-hidden="true" />
              <span className="text-sm font-semibold uppercase tracking-wider text-emerald-700">
                Most Important Cover
              </span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6">
              What Matters Most for This Risk
            </h2>
            <p className="text-slate-700 text-lg leading-relaxed">
              {page.coverageAngle}
            </p>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Why us                                                              */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-white py-16 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-5">
                Why Use charityinsurance.co.nz?
              </h2>
              <p className="text-slate-600 leading-relaxed text-lg">
                {page.whyUs}
              </p>
              <div className="mt-8">
                <Link
                  href="/about/"
                  className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 transition-colors"
                >
                  Learn more about us
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Credentials card */}
            <div className="rounded-2xl bg-slate-900 p-8 text-white">
              <h3 className="text-lg font-semibold text-emerald-400 mb-6">
                Our Broker Panel
              </h3>
              <ul className="space-y-4">
                {[
                  'Registered Financial Service Providers on the FSPR',
                  'Access to all major charity insurance underwriters',
                  'Specialist not-for-profit sector expertise',
                  'No additional cost to your organisation for comparison',
                  'One form — multiple quotes, one business day',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5 text-emerald-400 flex-shrink-0 mt-0.5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden="true"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span className="text-slate-300 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------------ */}
      {/* Related organisation types                                         */}
      {/* ------------------------------------------------------------------ */}
      {page.relatedOrgs.length > 0 && (
        <section className="bg-slate-50 py-16 lg:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-3">
              Insurance by Organisation Type
            </h2>
            <p className="text-slate-600 mb-10 max-w-2xl">
              Explore insurance information specific to the type of organisation you run.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {page.relatedOrgs.map((orgSlug) => {
                const orgName = orgTypeNames[orgSlug] ?? orgSlug;
                return (
                  <Link
                    key={orgSlug}
                    href={`/organisations/${orgSlug}/`}
                    className="group flex flex-col justify-between rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:border-emerald-300 hover:shadow-md transition-all"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="h-9 w-9 rounded-lg bg-emerald-100 flex items-center justify-center flex-shrink-0">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5 text-emerald-600"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
                          />
                        </svg>
                      </div>
                      <h3 className="font-semibold text-slate-800 group-hover:text-emerald-700 transition-colors leading-tight text-sm">
                        {orgName}
                      </h3>
                    </div>
                    <span className="text-xs font-medium text-emerald-600 group-hover:text-emerald-700 flex items-center gap-1 mt-auto">
                      View cover
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* ------------------------------------------------------------------ */}
      {/* CTA section                                                         */}
      {/* ------------------------------------------------------------------ */}
      <section className="bg-emerald-600 py-16 lg:py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4">
            Not sure which cover fits your organisation?
          </h2>
          <p className="text-emerald-100 text-lg mb-10 max-w-2xl mx-auto">
            Our panel of Registered Financial Service Providers will assess your risk profile and recommend the right cover. No obligation, no jargon — just clear specialist advice.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact/"
              className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-8 py-4 text-base font-semibold text-emerald-700 shadow-sm hover:bg-emerald-50 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-600"
            >
              {page.cta}
            </Link>
            <Link
              href="/about/"
              className="inline-flex items-center justify-center gap-2 rounded-lg border-2 border-white/60 px-8 py-4 text-base font-semibold text-white hover:bg-white/10 transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-600"
            >
              About Our Service
            </Link>
          </div>
        </div>
      </section>

    </main>
  );
}
