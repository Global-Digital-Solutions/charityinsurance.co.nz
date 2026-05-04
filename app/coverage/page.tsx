import type { Metadata } from 'next';
import Link from 'next/link';
import { coverTypes } from '@/data/cover-types';
import QuoteForm from '@/components/QuoteForm';

export const metadata: Metadata = {
  title: 'Insurance Cover Types for Charities & Not-for-Profits',
  description: 'Complete guide to insurance cover types for NZ charities, sports clubs, and community organisations — from public liability and trustee cover to cyber insurance and property protection.',
  alternates: { canonical: 'https://charityinsurance.co.nz/coverage/' },
};

const trustBadges = ['✓ Licensed NZ Brokers', '✓ Free Broker Matching', '✓ 6+ Specialist Insurers', '✓ Reply in 1 Business Day'];

export default function CoveragePage() {
  return (
    <>
      {/* TALL HERO with trust badges */}
      <section className="relative min-h-[620px] flex items-end" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/95 via-slate-900/65 to-slate-800/30" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 pt-32 w-full">
          <span className="inline-block px-3 py-1 bg-emerald-600/90 text-white text-xs font-bold rounded-full uppercase tracking-widest mb-5">Coverage Guide</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">Insurance Cover Types for Charities</h1>
          <p className="text-slate-200 text-lg max-w-2xl mb-6 leading-relaxed">A plain-English guide to every major insurance cover type relevant to NZ charities, not-for-profits, and community organisations.</p>
          <div className="flex flex-wrap gap-2 mb-8">
            {trustBadges.map(b => (
              <span key={b} className="inline-flex items-center px-3 py-1.5 bg-white/15 backdrop-blur-sm border border-white/25 text-white text-xs font-semibold rounded-full shadow-sm">{b}</span>
            ))}
          </div>
          <Link href="/contact/" className="inline-flex items-center px-7 py-3.5 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition shadow-lg text-base">Get a Free Quote →</Link>
        </div>
      </section>

      <main className="w-full">
        <section className="max-w-6xl mx-auto px-4 py-14 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-8">
            {coverTypes.map(cover => (
              <div key={cover.slug} id={cover.slug} className="rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-md transition-all duration-200">
                {/* Coloured header band */}
                <div className="bg-emerald-600 px-6 py-4 flex items-center gap-4">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-2xl flex-shrink-0">{cover.icon}</div>
                  <div>
                    <h2 className="text-xl font-extrabold text-white leading-tight">{cover.name}</h2>
                    <p className="text-emerald-100 text-sm mt-0.5">{cover.shortDesc}</p>
                  </div>
                </div>

                {/* Body */}
                <div className="bg-white px-6 py-5">
                  <p className="text-slate-700 text-sm leading-relaxed mb-5">{cover.description}</p>

                  <div className="grid sm:grid-cols-2 gap-4 mb-5">
                    {/* Who needs it */}
                    <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4">
                      <p className="font-bold text-emerald-800 text-xs uppercase tracking-widest mb-3">Who needs it</p>
                      <ul className="space-y-2">
                        {cover.whoNeeds.map(w => (
                          <li key={w} className="flex items-start gap-2">
                            <span className="w-4 h-4 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-white text-[9px] font-black">✓</span>
                            </span>
                            <span className="text-slate-700 text-xs leading-relaxed">{w}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* What it covers */}
                    <div className="bg-slate-900 border border-slate-700 rounded-xl p-4">
                      <p className="font-bold text-emerald-400 text-xs uppercase tracking-widest mb-3">What it covers</p>
                      <ul className="space-y-2">
                        {cover.whatCovers.map(w => (
                          <li key={w} className="flex items-start gap-2">
                            <span className="w-4 h-4 bg-emerald-600/30 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <span className="text-emerald-400 text-[9px] font-black">✓</span>
                            </span>
                            <span className="text-slate-300 text-xs leading-relaxed">{w}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                    <p className="text-xs text-slate-400 italic">Specialist charity underwriters available</p>
                    <Link href="/contact/" className="inline-flex items-center gap-1.5 px-4 py-2 bg-emerald-600 text-white text-xs font-bold rounded-lg hover:bg-emerald-700 transition">
                      Get this cover →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <aside className="space-y-6">
            <div className="bg-slate-900 border-2 border-emerald-500 rounded-2xl p-6 sticky top-20 shadow-xl">
              <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2">Free Broker Matching</p>
              <h3 className="text-xl font-extrabold text-white mb-2">Not Sure What You Need?</h3>
              <p className="text-sm text-slate-300 mb-5">Tell us about your organisation and we'll identify the covers that actually matter for your situation.</p>
              <QuoteForm compact />
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-5">
              <p className="font-bold text-slate-900 text-sm mb-3">Jump to Cover Type</p>
              <ul className="space-y-1.5">
                {coverTypes.map(c => (
                  <li key={c.slug}>
                    <a href={`#${c.slug}`} className="flex items-center gap-2 text-xs font-semibold text-emerald-700 hover:text-emerald-900 hover:underline transition">
                      <span className="text-base">{c.icon}</span> {c.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-emerald-600 rounded-xl p-5 text-white">
              <p className="font-extrabold text-base mb-1">Most charities need 3–5 covers</p>
              <p className="text-emerald-100 text-xs leading-relaxed mb-4">A specialist broker structures the right combination — often for less than generic commercial policies.</p>
              <Link href="/contact/" className="block text-center px-4 py-2.5 bg-white text-emerald-700 font-bold rounded-lg text-sm hover:bg-emerald-50 transition">Talk to a Specialist →</Link>
            </div>
          </aside>
        </section>

        <section className="bg-slate-900 py-14 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <span className="inline-block px-3 py-1 bg-emerald-600/30 text-emerald-400 text-xs font-bold rounded-full uppercase tracking-widest mb-4">Specialist Brokers</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">Get the Right Mix of Cover</h2>
            <p className="text-slate-300 mb-8 max-w-xl mx-auto">Most charities need a package of several covers — not just one. Our brokers assess your organisation and structure the right combination at the best price.</p>
            <Link href="/contact/" className="inline-flex items-center px-8 py-4 bg-emerald-600 text-white font-extrabold rounded-xl hover:bg-emerald-700 transition text-lg shadow-lg">Talk to a Specialist →</Link>
          </div>
        </section>
      </main>
    </>
  );
}
