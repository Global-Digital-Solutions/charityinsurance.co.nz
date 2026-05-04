import type { Metadata } from 'next';
import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';

export const metadata: Metadata = {
  title: 'Compare Charity Insurance Providers NZ | CharityInsurance.co.nz',
  description: 'Compare specialist charity and not-for-profit insurance providers in New Zealand — Chubb, AIG, Zurich, Berkley, Concordia, QBE. Side-by-side feature comparison and financial ratings.',
  alternates: { canonical: 'https://charityinsurance.co.nz/compare/' },
};

const trustBadges = ['✓ Licensed NZ Brokers', '✓ Free Broker Matching', '✓ 6+ Specialist Insurers', '✓ Reply in 1 Business Day'];

const insurerSlugs = ['chubb', 'aig', 'zurich', 'berkley', 'concordia', 'qbe'] as const;
type InsurerSlug = typeof insurerSlugs[number];

const insurerMeta: Record<InsurerSlug, {
  name: string;
  shortName: string;
  specialty: string;
  bestFor: string;
  badge?: string;
  badgeColor?: string;
  amBest: string;
  amBestLabel: string;
  marketScore: number;
  claimsScore: number;
  nzPresence: string;
  highlights: string[];
}> = {
  chubb: {
    name: 'Chubb Insurance NZ',
    shortName: 'Chubb',
    specialty: 'Large charities, D&O, Management Liability',
    bestFor: 'Large registered charities, foundations, healthcare trusts',
    amBest: 'A++', amBestLabel: 'Superior',
    marketScore: 4.8, claimsScore: 4.9,
    nzPresence: 'Local NZ team',
    highlights: ['Best-in-class D&O wording', 'Broad management liability package', 'Strong claims support team', 'Global capacity for large risks'],
  },
  aig: {
    name: 'AIG New Zealand',
    shortName: 'AIG',
    specialty: 'Association liability, professional indemnity',
    bestFor: 'Professional associations, incorporated societies, advice-based charities',
    amBest: 'A', amBestLabel: 'Excellent',
    marketScore: 4.5, claimsScore: 4.6,
    nzPresence: 'Local NZ team',
    highlights: ['Strong association liability product', 'Experienced PI claims team', 'Broad cyber add-on options', 'Competitive for professional orgs'],
  },
  zurich: {
    name: 'Zurich NZ',
    shortName: 'Zurich',
    specialty: 'Property, liability, package policies',
    bestFor: 'Charities with buildings, equipment, and significant physical assets',
    badge: 'Asset-Heavy',
    badgeColor: 'blue',
    amBest: 'A+', amBestLabel: 'Superior',
    marketScore: 4.6, claimsScore: 4.7,
    nzPresence: 'Local NZ team',
    highlights: ['Competitive property cover', 'Strong package policy offering', 'Good for sports clubs with grounds', 'Solid event cancellation cover'],
  },
  berkley: {
    name: 'Berkley Insurance',
    shortName: 'Berkley',
    specialty: 'NFP specialist, management liability',
    bestFor: 'Small to mid-sized charities, incorporated societies, community groups',
    badge: 'NFP Specialist',
    badgeColor: 'emerald',
    amBest: 'A+', amBestLabel: 'Superior',
    marketScore: 4.4, claimsScore: 4.5,
    nzPresence: 'Regional office',
    highlights: ['Specialist not-for-profit underwriting', 'Competitive for smaller charities', 'Strong management liability wording', 'Understands NFP risk profiles'],
  },
  concordia: {
    name: 'Concordia Underwriting',
    shortName: 'Concordia',
    specialty: 'Faith, charity, care, education — NZ specialist',
    bestFor: 'Churches, faith orgs, schools, aged care trusts, community charities',
    badge: 'NZ Charity Specialist',
    badgeColor: 'emerald',
    amBest: 'A-', amBestLabel: 'Excellent',
    marketScore: 4.3, claimsScore: 4.4,
    nzPresence: 'NZ-founded',
    highlights: ['Only NZ specialist for faith and charity sector', 'Tailored policy wording for charity activities', 'Understands volunteer activities', 'Deep knowledge of NZ charity landscape'],
  },
  qbe: {
    name: 'QBE Insurance NZ',
    shortName: 'QBE',
    specialty: 'Liability, property, statutory',
    bestFor: 'Social service providers, disability support, healthcare charities',
    amBest: 'A+', amBestLabel: 'Superior',
    marketScore: 4.5, claimsScore: 4.5,
    nzPresence: 'Local NZ team',
    highlights: ['Broad liability and property products', 'Strong statutory liability cover', 'Good for complex risk profiles', 'Solid for social service orgs'],
  },
};

const featureMatrix: { feature: string; category: string; chubb: boolean | string; aig: boolean | string; zurich: boolean | string; berkley: boolean | string; concordia: boolean | string; qbe: boolean | string }[] = [
  { feature: 'Public Liability',          category: 'Core Cover', chubb: true,              aig: true,              zurich: true,             berkley: true,            concordia: true,            qbe: true },
  { feature: 'Trustee & D&O Liability',   category: 'Core Cover', chubb: true,              aig: true,              zurich: '✓ (limited)',    berkley: true,            concordia: true,            qbe: false },
  { feature: 'Volunteer Personal Accident',category: 'Core Cover', chubb: true,              aig: false,             zurich: true,             berkley: true,            concordia: true,            qbe: true },
  { feature: 'Professional Indemnity',    category: 'Core Cover', chubb: true,              aig: true,              zurich: false,            berkley: true,            concordia: true,            qbe: true },
  { feature: 'Employers Liability',       category: 'Core Cover', chubb: true,              aig: true,              zurich: true,             berkley: true,            concordia: true,            qbe: true },
  { feature: 'Statutory Liability',       category: 'Core Cover', chubb: true,              aig: false,             zurich: true,             berkley: true,            concordia: false,           qbe: true },
  { feature: 'Property & Contents',       category: 'Asset Cover', chubb: true,             aig: false,             zurich: true,             berkley: true,            concordia: true,            qbe: true },
  { feature: 'Event Cancellation',        category: 'Asset Cover', chubb: false,            aig: false,             zurich: true,             berkley: false,           concordia: true,            qbe: true },
  { feature: 'Fine Art & Collections',    category: 'Asset Cover', chubb: true,             aig: '✓ (optional)',    zurich: false,            berkley: false,           concordia: '✓ (optional)',  qbe: false },
  { feature: 'Cyber Insurance',           category: 'Specialty',  chubb: true,              aig: true,              zurich: false,            berkley: false,           concordia: false,           qbe: true },
  { feature: 'Crime / Fidelity',          category: 'Specialty',  chubb: true,              aig: true,              zurich: false,            berkley: true,            concordia: '✓ (optional)',  qbe: false },
  { feature: 'Management Liability',      category: 'Specialty',  chubb: true,              aig: true,              zurich: false,            berkley: true,            concordia: false,           qbe: false },
  { feature: 'NFP Specialist Pricing',    category: 'Specialty',  chubb: false,             aig: false,             zurich: false,            berkley: true,            concordia: true,            qbe: false },
];

const badgeColors: Record<string, string> = {
  emerald: 'bg-emerald-100 text-emerald-700 border-emerald-300',
  blue: 'bg-blue-100 text-blue-700 border-blue-300',
};

function StarRating({ score }: { score: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map(i => (
        <svg key={i} className={`w-3 h-3 ${i <= Math.round(score) ? 'text-amber-400' : 'text-slate-200'}`} fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
      <span className="text-xs text-slate-500 ml-1">{score}</span>
    </div>
  );
}

function CellValue({ val }: { val: boolean | string }) {
  if (val === true)  return <span className="text-emerald-500 font-bold text-lg leading-none">✓</span>;
  if (val === false) return <span className="text-slate-300 text-base leading-none">—</span>;
  return <span className="text-amber-600 text-xs font-semibold leading-tight">{val}</span>;
}

export default function ComparePage() {
  const categories = [...new Set(featureMatrix.map(r => r.category))];

  return (
    <>
      {/* TALL HERO */}
      <section className="relative min-h-[580px] flex items-end" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-900/65 to-slate-800/20" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 pt-32 w-full">
          <span className="inline-block px-3 py-1 bg-emerald-600/90 text-white text-xs font-bold rounded-full uppercase tracking-widest mb-5">Compare Insurers</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">Charity Insurance Providers in NZ</h1>
          <p className="text-slate-200 text-lg max-w-2xl mb-6 leading-relaxed">Side-by-side comparison of specialist charity and NFP insurers — cover features, financial strength ratings, and what each does best.</p>
          <div className="flex flex-wrap gap-2">
            {trustBadges.map(b => (
              <span key={b} className="inline-flex items-center px-3 py-1.5 bg-white/15 backdrop-blur-sm border border-white/25 text-white text-xs font-semibold rounded-full shadow-sm">{b}</span>
            ))}
          </div>
        </div>
      </section>

      <main className="w-full">

        {/* FEATURE MATRIX TABLE */}
        <section className="bg-slate-50 py-14 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
              <div>
                <h2 className="text-2xl font-extrabold text-slate-900 mb-2">Coverage Feature Comparison</h2>
                <p className="text-slate-500 text-sm max-w-xl">Side-by-side comparison of core policy features, financial strength, and NZ market presence across 6 specialist insurers.</p>
              </div>
              <Link href="/contact/" className="flex-shrink-0 inline-flex items-center px-5 py-2.5 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition text-sm shadow">
                Get a Personalised Quote →
              </Link>
            </div>

            <div className="overflow-x-auto rounded-2xl border-2 border-emerald-500 shadow-xl shadow-emerald-100">
              <table className="w-full bg-white text-sm">
                <thead>
                  {/* Insurer header row */}
                  <tr className="bg-emerald-600 text-white">
                    <th className="text-left px-5 py-4 font-bold text-sm min-w-[200px] sticky left-0 bg-emerald-600 z-10">Coverage Feature</th>
                    {insurerSlugs.map(slug => (
                      <th key={slug} className="text-center px-3 py-4 font-bold whitespace-nowrap text-xs min-w-[110px]">
                        {insurerMeta[slug].shortName}
                      </th>
                    ))}
                  </tr>

                  {/* "Best for" row */}
                  <tr className="bg-emerald-700/80 text-emerald-100">
                    <td className="px-5 py-2 text-xs font-semibold text-emerald-200 sticky left-0 bg-emerald-700/80">Best For</td>
                    {insurerSlugs.map(slug => {
                      const m = insurerMeta[slug];
                      return (
                        <td key={slug} className="text-center px-2 py-2">
                          {m.badge ? (
                            <span className={`inline-block px-2 py-0.5 text-[10px] font-bold rounded-full border ${badgeColors[m.badgeColor || 'emerald']}`}>{m.badge}</span>
                          ) : (
                            <span className="text-[10px] text-emerald-300 leading-tight">{m.specialty.split(',')[0]}</span>
                          )}
                        </td>
                      );
                    })}
                  </tr>

                  {/* AM Best rating row */}
                  <tr className="bg-slate-800 text-slate-200">
                    <td className="px-5 py-2.5 text-xs font-semibold sticky left-0 bg-slate-800">AM Best Rating</td>
                    {insurerSlugs.map(slug => {
                      const m = insurerMeta[slug];
                      return (
                        <td key={slug} className="text-center px-3 py-2.5">
                          <span className="font-extrabold text-white text-sm">{m.amBest}</span>
                          <span className="block text-slate-400 text-[10px] mt-0.5">{m.amBestLabel}</span>
                        </td>
                      );
                    })}
                  </tr>

                  {/* Market score */}
                  <tr className="bg-slate-50 border-b-2 border-emerald-200">
                    <td className="px-5 py-2 text-xs font-semibold text-slate-500 sticky left-0 bg-slate-50">Market Rating</td>
                    {insurerSlugs.map(slug => (
                      <td key={slug} className="text-center px-3 py-2">
                        <div className="flex justify-center">
                          <StarRating score={insurerMeta[slug].marketScore} />
                        </div>
                      </td>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {categories.map(cat => (
                    <>
                      <tr key={`cat-${cat}`} className="bg-emerald-50 border-t border-emerald-100">
                        <td colSpan={7} className="px-5 py-2 text-xs font-extrabold text-emerald-700 uppercase tracking-widest sticky left-0 bg-emerald-50">{cat}</td>
                      </tr>
                      {featureMatrix.filter(r => r.category === cat).map((row, i) => (
                        <tr key={row.feature} className={`border-b border-slate-100 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'} hover:bg-emerald-50/40 transition-colors`}>
                          <td className={`px-5 py-3.5 text-slate-700 font-semibold text-sm sticky left-0 ${i % 2 === 0 ? 'bg-white' : 'bg-slate-50/60'}`}>{row.feature}</td>
                          {insurerSlugs.map(slug => (
                            <td key={slug} className="text-center px-3 py-3.5">
                              <CellValue val={row[slug]} />
                            </td>
                          ))}
                        </tr>
                      ))}
                    </>
                  ))}

                  {/* Claims score footer row */}
                  <tr className="bg-slate-100 border-t-2 border-slate-200">
                    <td className="px-5 py-3 text-xs font-semibold text-slate-500 sticky left-0 bg-slate-100">Claims Score</td>
                    {insurerSlugs.map(slug => (
                      <td key={slug} className="text-center px-3 py-3">
                        <div className="flex justify-center">
                          <StarRating score={insurerMeta[slug].claimsScore} />
                        </div>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Disclaimer below table */}
            <div className="mt-5 bg-emerald-50 border border-emerald-200 rounded-xl p-4">
              <p className="text-slate-700 text-sm leading-relaxed">
                <strong className="text-emerald-700">Important:</strong> This comparison provides a general overview of insurer strengths and is not a substitute for personalised broker advice. Policy wordings, limits, sub-limits and premiums vary significantly by organisation type, size, and activities. Our licensed brokers will compare actual policy terms for your specific organisation — <Link href="/contact/" className="text-emerald-700 font-semibold hover:underline">get a free quote to see tailored options</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* INSURER PROFILE CARDS */}
        <section className="max-w-7xl mx-auto px-4 py-12">
          <h2 className="text-2xl font-extrabold text-slate-900 mb-2">Insurer Profiles</h2>
          <p className="text-slate-500 text-sm mb-8">Detailed overview of each insurer's strengths, specialties, and ideal fit for your organisation type.</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {insurerSlugs.map(slug => {
              const m = insurerMeta[slug];
              return (
                <div key={slug} className="bg-white rounded-2xl border-2 border-slate-200 hover:border-emerald-400 hover:shadow-lg transition-all duration-200 overflow-hidden flex flex-col">
                  <div className="p-6 flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg font-extrabold text-slate-900 leading-tight">{m.name}</h3>
                        <p className="text-slate-500 text-xs mt-0.5">{m.specialty}</p>
                      </div>
                      {m.badge && m.badgeColor && (
                        <span className={`px-2 py-1 text-[10px] font-bold rounded-full border ml-2 flex-shrink-0 ${badgeColors[m.badgeColor]}`}>{m.badge}</span>
                      )}
                    </div>

                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200 rounded px-2 py-0.5">AM Best {m.amBest} — {m.amBestLabel}</span>
                      <span className="text-xs text-slate-500 bg-slate-50 border border-slate-200 rounded px-2 py-0.5">{m.nzPresence}</span>
                    </div>

                    <div className="flex gap-6 mb-4">
                      <div>
                        <p className="text-xs text-slate-400 mb-1">Market Rating</p>
                        <StarRating score={m.marketScore} />
                      </div>
                      <div>
                        <p className="text-xs text-slate-400 mb-1">Claims Score</p>
                        <StarRating score={m.claimsScore} />
                      </div>
                    </div>

                    <div className="mb-4">
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-2">Coverage Highlights</p>
                      <ul className="space-y-1.5">
                        {m.highlights.map(h => (
                          <li key={h} className="flex gap-2 text-xs text-slate-600">
                            <span className="text-emerald-500 font-bold flex-shrink-0 mt-0.5">✓</span>{h}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="border-t border-slate-100 pt-4">
                      <p className="text-xs font-bold text-slate-500 uppercase tracking-wide mb-1">Best For</p>
                      <p className="text-sm text-slate-700">{m.bestFor}</p>
                    </div>
                  </div>
                  <div className="bg-slate-50 px-6 py-4 border-t border-slate-100">
                    <Link href="/contact/" className="block w-full text-center py-2.5 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition text-sm shadow-sm">
                      Get a Quote →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* WHY SPECIALIST INSURERS */}
        <section className="bg-slate-50 py-12 px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-xl font-extrabold text-slate-900 mb-4">Why Specialist Charity Insurers?</h2>
            <p className="text-slate-600 text-sm leading-relaxed mb-6 max-w-3xl">Generic commercial insurers price and assess not-for-profits using business frameworks that do not reflect actual charity risk profiles. Specialist charity underwriters have developed policy wordings and pricing models specifically for:</p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'Faith and church communities with diverse activities',
                'Sports clubs with volunteer injury and public liability exposure',
                'Charities with trustee liability under the Incorporated Societies Act 2022',
                'Aged care and health charities with clinical professional liability',
                'Environmental groups working in remote or high-risk terrain',
                'Arts organisations with irreplaceable collection assets',
              ].map(item => (
                <div key={item} className="flex items-start gap-3 bg-white border border-slate-200 rounded-xl p-4 hover:border-emerald-300 transition">
                  <span className="w-5 h-5 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                    <span className="text-white text-[9px] font-black">✓</span>
                  </span>
                  <p className="text-slate-700 text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FORM CTA — full-width dark with disclaimer */}
        <section className="bg-slate-900 py-16 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div>
                <span className="inline-block px-3 py-1 bg-emerald-600/30 text-emerald-400 text-xs font-bold rounded-full uppercase tracking-widest mb-4">Free · No Obligation</span>
                <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">Not Sure Which Insurer Is Right for You?</h2>
                <p className="text-slate-300 leading-relaxed mb-6">Our brokers do the comparison work for you — matching your specific organisation's risk profile to the right insurer and policy at the best available price.</p>
                <div className="space-y-3">
                  {[
                    'We compare across all 6 specialist insurers above',
                    'Personally vetted, licensed NZ brokers only',
                    'Plain-English recommendations — no jargon',
                    'Back within one business day, always',
                    'Completely free — no cost to your organisation',
                  ].map(b => (
                    <div key={b} className="flex items-center gap-3">
                      <span className="w-5 h-5 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-[9px] font-black">✓</span>
                      </span>
                      <p className="text-slate-200 text-sm">{b}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div className="bg-white/5 border-2 border-emerald-500/60 rounded-2xl p-7">
                  <p className="text-emerald-400 font-bold text-sm uppercase tracking-wide mb-1">Get a Free Comparison Quote</p>
                  <p className="text-slate-400 text-xs mb-5">Tell us about your organisation — we do the comparing.</p>
                  <QuoteForm compact />
                  {/* Disclaimer below form */}
                  <p className="text-slate-500 text-xs leading-relaxed mt-4 pt-4 border-t border-white/10">
                    <strong className="text-slate-400">Disclaimer:</strong> This is a general market overview only. It is not personalised financial advice. Our licensed brokers will assess your specific organisation and provide tailored recommendations in accordance with the Financial Markets Conduct Act 2013. CharityInsurance.co.nz may receive a referral fee when a policy is arranged through a recommended broker.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* BOTTOM CTA BAR */}
        <section className="bg-emerald-600 py-12 px-4 text-center">
          <h2 className="text-2xl font-extrabold text-white mb-3">Let a Specialist Broker Compare for You</h2>
          <p className="text-emerald-100 mb-6 max-w-xl mx-auto">We match your organisation to the right insurer and policy — at the best price. Free, no obligation, reply within one business day.</p>
          <Link href="/contact/" className="inline-block px-8 py-4 bg-white text-emerald-700 font-extrabold rounded-xl hover:bg-emerald-50 transition text-lg shadow-lg">
            Get a Free Comparison Quote →
          </Link>
        </section>
      </main>
    </>
  );
}
