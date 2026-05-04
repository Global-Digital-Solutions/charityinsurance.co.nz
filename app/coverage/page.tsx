import type { Metadata } from 'next';
import Link from 'next/link';
import { coverTypes } from '@/data/cover-types';
import QuoteForm from '@/components/QuoteForm';

export const metadata: Metadata = {
  title: 'Insurance Cover Types for Charities & Not-for-Profits',
  description: 'Complete guide to insurance cover types for NZ charities, sports clubs, and community organisations — from public liability and trustee cover to cyber insurance and property protection.',
  alternates: { canonical: 'https://charityinsurance.co.nz/coverage/' },
};

export default function CoveragePage() {
  return (
    <>
      <section className="relative min-h-[280px] flex items-end" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/50 to-transparent" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-24 w-full">
          <span className="inline-block px-3 py-1 bg-emerald-600/80 text-white text-xs font-bold rounded-full uppercase tracking-widest mb-4">Coverage Guide</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Insurance Cover Types for Charities</h1>
          <p className="text-slate-200 text-lg max-w-2xl">A plain-English guide to every major insurance cover type relevant to NZ charities, not-for-profits, and community organisations.</p>
        </div>
      </section>

      <main className="w-full">
        <section className="max-w-6xl mx-auto px-4 py-14 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2 space-y-10">
            {coverTypes.map(cover => (
              <div key={cover.slug} id={cover.slug} className="border border-slate-200 rounded-2xl p-7 hover:border-emerald-300 transition-all">
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-3xl">{cover.icon}</span>
                  <div>
                    <h2 className="text-xl font-extrabold text-slate-900">{cover.name}</h2>
                    <p className="text-slate-500 text-sm mt-1">{cover.shortDesc}</p>
                  </div>
                </div>
                <p className="text-slate-700 text-sm leading-relaxed mb-5">{cover.description}</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <p className="font-bold text-slate-900 text-xs uppercase tracking-wide mb-2">Who needs it</p>
                    <ul className="space-y-1">
                      {cover.whoNeeds.map(w => <li key={w} className="text-xs text-slate-600 flex items-center gap-2"><span className="text-emerald-500">✓</span>{w}</li>)}
                    </ul>
                  </div>
                  <div>
                    <p className="font-bold text-slate-900 text-xs uppercase tracking-wide mb-2">What it covers</p>
                    <ul className="space-y-1">
                      {cover.whatCovers.map(w => <li key={w} className="text-xs text-slate-600 flex items-center gap-2"><span className="text-emerald-500">✓</span>{w}</li>)}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <aside className="space-y-6">
            <div className="bg-emerald-50 border-2 border-emerald-600 rounded-xl p-6 sticky top-20">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Not Sure What You Need?</h3>
              <p className="text-sm text-slate-600 mb-4">Tell us about your organisation and we'll identify the covers that actually matter for your situation.</p>
              <QuoteForm compact />
            </div>
            <div className="bg-white border border-slate-200 rounded-xl p-5">
              <p className="font-bold text-slate-900 text-sm mb-3">Jump to Cover Type</p>
              <ul className="space-y-1.5">
                {coverTypes.map(c => <li key={c.slug}><a href={`#${c.slug}`} className="text-emerald-600 hover:text-emerald-700 text-xs font-semibold">{c.icon} {c.name}</a></li>)}
              </ul>
            </div>
          </aside>
        </section>

        <section className="bg-slate-900 py-12 px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Get the Right Mix of Cover</h2>
            <p className="text-slate-300 mb-6">Most charities need a package of several covers — not just one. Our brokers will assess your organisation and structure the right combination at the best price.</p>
            <Link href="/contact/" className="inline-block px-8 py-4 bg-emerald-600 text-white font-extrabold rounded-xl hover:bg-emerald-700 transition">Talk to a Specialist →</Link>
          </div>
        </section>
      </main>
    </>
  );
}
