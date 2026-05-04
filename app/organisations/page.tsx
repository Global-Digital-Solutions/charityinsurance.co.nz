import type { Metadata } from 'next';
import Link from 'next/link';
import { orgTypes } from '@/data/organisation-types';

export const metadata: Metadata = {
  title: 'Organisation Types | Charity & NFP Insurance by Sector',
  description: 'Insurance information for every type of New Zealand charity and not-for-profit — from registered charities and sports clubs to churches, community groups, aged care, and marae.',
  alternates: { canonical: 'https://charityinsurance.co.nz/organisations/' },
};

export default function OrganisationsPage() {
  return (
    <>
      <section className="relative min-h-[280px] flex items-end" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/50 to-transparent" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-24 w-full">
          <span className="inline-block px-3 py-1 bg-emerald-600/80 text-white text-xs font-bold rounded-full uppercase tracking-widest mb-4">Organisation Types</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Insurance by Organisation Type</h1>
          <p className="text-slate-200 text-lg max-w-xl">Find specialist insurance information for your specific type of organisation — from sports clubs to aged care, churches to iwi trusts.</p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {orgTypes.map(org => (
            <Link key={org.slug} href={`/organisations/${org.slug}/`} className="group bg-white border border-slate-200 rounded-2xl p-6 hover:border-emerald-500 hover:shadow-lg transition-all duration-200">
              <h2 className="font-bold text-slate-900 text-base mb-2 group-hover:text-emerald-700 transition">{org.name}</h2>
              <p className="text-slate-500 text-sm leading-relaxed mb-4 line-clamp-3">{org.intro.slice(0, 150)}...</p>
              <div className="flex flex-wrap gap-1.5 mb-4">
                {org.coverTypes.slice(0, 3).map(c => (
                  <span key={c} className="text-xs bg-emerald-50 text-emerald-700 px-2 py-0.5 rounded-full font-medium">{c}</span>
                ))}
              </div>
              <span className="text-emerald-600 font-semibold text-sm group-hover:gap-2 transition">View cover options →</span>
            </Link>
          ))}
        </div>
      </main>

      <section className="bg-emerald-600 py-12 px-4 text-center">
        <h2 className="text-2xl font-extrabold text-white mb-3">Not Sure Where You Fit?</h2>
        <p className="text-emerald-100 mb-6 max-w-lg mx-auto">Tell us about your organisation and we'll figure out the right cover together. No jargon, no obligation.</p>
        <Link href="/contact/" className="inline-block px-8 py-4 bg-white text-emerald-700 font-extrabold rounded-xl hover:bg-emerald-50 transition text-lg">Get a Quote →</Link>
      </section>
    </>
  );
}
