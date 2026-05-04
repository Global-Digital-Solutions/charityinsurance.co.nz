import type { Metadata } from 'next';
import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';
import { orgTypes } from '@/data/organisation-types';
import { coverTypes } from '@/data/cover-types';
import { blogPosts } from '@/data/blog-posts';

export const metadata: Metadata = {
  title: 'Charity Insurance NZ | Insurance for Charities & Not-for-Profits | CharityInsurance.co.nz',
  description: 'Insurance for registered charities, sports clubs, churches, community groups and not-for-profits across New Zealand. Free broker matching — trusted advisors, plain English, no hard sell.',
  alternates: { canonical: 'https://charityinsurance.co.nz/' },
};

const featuredOrgs = orgTypes.slice(0, 8);
const featuredCovers = coverTypes.slice(0, 6);
const recentPosts = blogPosts.slice(0, 3);

const stats = [
  { value: '100%', label: 'Free broker matching', sub: 'no cost, no obligation' },
  { value: '6+', label: 'Specialist charity insurers', sub: 'compared on your behalf' },
  { value: '15+', label: 'Organisation types covered', sub: 'from sports clubs to aged care' },
  { value: '1 day', label: 'Broker response time', sub: 'guaranteed turnaround' },
];

const whyUs = [
  { icon: '🔍', title: 'We compare for you', desc: 'We assess your organisation and compare policies from Chubb, AIG, Zurich, Berkley, and specialist charity underwriters — so you see options, not a single product pushed at you.', dark: false },
  { icon: '🤝', title: 'Brokers we personally know', desc: 'Every broker we recommend has been personally vetted. These are advisors who specialise in the not-for-profit sector and understand what your organisation actually needs.', dark: true },
  { icon: '📋', title: 'Plain English, always', desc: "We translate the insurance jargon. You'll know exactly what's covered, what's not, and what each policy means for your specific organisation.", dark: false },
  { icon: '⚡', title: 'Back within one business day', desc: "Tell us about your organisation and we'll come back with tailored options in plain English. No lengthy phone trees, no call centres, no hold music.", dark: true },
  { icon: '🛡️', title: 'There when it matters', desc: "A broker who disappears after the sale is no broker at all. Our recommended brokers support you through claims — the only moment that really counts.", dark: false },
  { icon: '💰', title: 'Typically saves money', desc: 'Specialist charity insurers often price more competitively than generic commercial insurers. We find the most competitive rate without compromising cover quality.', dark: true },
];

export default function HomePage() {
  return (
    <>
      {/* TALL HERO */}
      <section className="relative min-h-[720px] flex items-end" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-900/85 to-slate-800/50" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-24 w-full">
          <div className="grid lg:grid-cols-[1fr_400px] gap-12 items-end">

            {/* LEFT — headline + USPs */}
            <div>
              <span className="inline-block px-3 py-1 bg-emerald-600 text-white text-xs font-bold rounded-full uppercase tracking-widest mb-5">Specialist Charity Insurance — Licensed Brokers</span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5">
                Insurance for the Organisations That Give Back
              </h1>
              <p className="text-white text-lg mb-8 max-w-lg leading-relaxed">
                We cut through the complexity, compare cover from specialist insurers, and personally vet the brokers we recommend — so your charity, sports club, or community group is properly protected.
              </p>

              {/* SOLID VISIBLE USP BADGES */}
              <div className="grid grid-cols-2 gap-3 mb-8 max-w-lg">
                {[
                  { label: 'Free broker matching', icon: '🤝' },
                  { label: '15+ org types covered', icon: '🏢' },
                  { label: 'Plain English advice', icon: '📋' },
                  { label: 'Reply within 1 business day', icon: '⚡' },
                ].map(item => (
                  <div key={item.label} className="flex items-center gap-2.5 bg-emerald-600 rounded-xl px-4 py-3 shadow-lg">
                    <span className="text-lg flex-shrink-0">{item.icon}</span>
                    <span className="text-white text-sm font-bold leading-tight">{item.label}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Link href="/contact/" className="px-7 py-3.5 bg-white text-emerald-700 font-extrabold rounded-xl hover:bg-emerald-50 transition shadow-lg text-base">Get a Free Quote →</Link>
                <Link href="/organisations/" className="px-7 py-3.5 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition border border-white/30 text-base">Find Your Org Type</Link>
              </div>
            </div>

            {/* RIGHT — form, narrower column, compelling headline */}
            <div className="hidden lg:flex lg:justify-end">
              <div className="w-full bg-slate-900/90 backdrop-blur-sm border-2 border-emerald-400 rounded-2xl p-7 shadow-2xl">
                <p className="text-emerald-400 font-extrabold text-base mb-1 leading-snug">Personalised cover for your organisation.</p>
                <p className="text-white font-bold text-lg mb-1 leading-snug">Save time. Potentially save money.</p>
                <p className="text-slate-400 text-xs mb-5">Tell us about your organisation — our brokers do the rest. Back within one business day.</p>
                <QuoteForm compact />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <section className="bg-emerald-600 py-6 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-4 gap-6 text-center text-white">
          {stats.map(s => (
            <div key={s.label}>
              <p className="text-2xl font-extrabold">{s.value}</p>
              <p className="text-sm font-semibold text-emerald-100">{s.label}</p>
              <p className="text-xs text-emerald-200 mt-0.5">{s.sub}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US — alternating dark/light cards */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">We Do the Hard Work. You Focus on Your Mission.</h2>
            <p className="text-slate-500 max-w-2xl mx-auto">Most charities and not-for-profits are underinsured. We make it easy to get the right cover — by comparing specialist insurers and matching you with brokers who actually know this sector.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {whyUs.map(item => (
              <div key={item.title} className={`rounded-2xl p-6 flex flex-col ${item.dark ? 'bg-slate-900 border border-slate-700' : 'bg-emerald-600'}`}>
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl mb-4 flex-shrink-0 ${item.dark ? 'bg-emerald-600/30' : 'bg-white/20'}`}>{item.icon}</div>
                <h3 className="font-extrabold text-white mb-2 text-base">{item.title}</h3>
                <p className={`text-sm leading-relaxed ${item.dark ? 'text-slate-400' : 'text-emerald-100'}`}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ORG TYPES — on dark bg for contrast */}
      <section className="bg-slate-900 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 bg-emerald-600/30 text-emerald-400 text-xs font-bold rounded-full uppercase tracking-widest mb-4">15+ Organisation Types</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-3">Insurance for Every Type of Organisation</h2>
            <p className="text-slate-400 max-w-xl mx-auto">From a small sports club to a large charity trust — we cover the full spectrum of New Zealand's not-for-profit sector.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {featuredOrgs.map(org => (
              <Link key={org.slug} href={`/organisations/${org.slug}/`} className="bg-slate-800 rounded-xl border border-slate-700 p-5 hover:border-emerald-500 hover:bg-slate-700 transition-all duration-200 group">
                <h3 className="font-bold text-white text-sm mb-1.5 group-hover:text-emerald-400 transition">{org.name}</h3>
                <p className="text-slate-400 text-xs leading-relaxed">{org.intro.slice(0, 90)}...</p>
                <span className="text-emerald-500 text-xs font-semibold mt-3 inline-block">Learn more →</span>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link href="/organisations/" className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition shadow-lg">View All Organisation Types →</Link>
          </div>
        </div>
      </section>

      {/* COVER TYPES — on light green bg */}
      <section className="bg-emerald-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block px-3 py-1 bg-emerald-600 text-white text-xs font-bold rounded-full uppercase tracking-widest mb-4">12 Cover Types</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">Cover Types for Charities & Not-for-Profits</h2>
            <p className="text-slate-600 max-w-xl mx-auto">From public liability to trustee protection, volunteer accident cover to cyber insurance — we match you with the covers your organisation actually needs.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {featuredCovers.map(cover => (
              <div key={cover.slug} className="bg-white rounded-xl border border-emerald-100 p-5 hover:border-emerald-400 hover:shadow-md transition-all duration-200 group flex items-start gap-4">
                <div className="w-12 h-12 bg-emerald-600 rounded-xl flex items-center justify-center text-xl flex-shrink-0 group-hover:bg-emerald-700 transition">{cover.icon}</div>
                <div>
                  <h3 className="font-bold text-slate-900 mb-1 text-sm">{cover.name}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{cover.shortDesc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-8">
            <Link href="/coverage/" className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition shadow">View All Cover Types →</Link>
          </div>
        </div>
      </section>

      {/* TRUSTEE RISK CALLOUT */}
      <section className="bg-slate-900 py-14 px-4">
        <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
          <div>
            <span className="inline-block px-3 py-1 bg-emerald-600/30 text-emerald-400 text-xs font-bold rounded-full uppercase tracking-widest mb-4">Important for Trustees</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">Charitable Status Does Not Protect Your Trustees</h2>
            <p className="text-slate-300 leading-relaxed mb-4">Being a registered charity does not shield individual trustees, board members, or committee members from personal liability. Under the Incorporated Societies Act 2022, officer duties are now explicit — and enforceable.</p>
            <p className="text-slate-300 leading-relaxed mb-6">Trustee Liability (D&O) insurance protects the people who give their time to govern your organisation. Without it, they fund their own legal defence.</p>
            <Link href="/coverage/" className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition">Learn About Trustee Cover →</Link>
          </div>
          <div className="bg-slate-800 rounded-2xl p-6 border border-slate-700">
            <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-4">Common situations trustees need cover:</p>
            {['An employee files a personal grievance — and names the chair personally', 'Charities Services investigates a compliance issue with a trustee', 'A grant funder alleges money was misapplied by the board', 'A volunteer is seriously injured — Worksafe names the trustees', 'A governance decision is challenged by a disgruntled member'].map(item => (
              <div key={item} className="flex items-start gap-3 mb-3 last:mb-0">
                <span className="text-amber-400 flex-shrink-0 mt-0.5">⚠</span>
                <p className="text-slate-300 text-sm">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RECENT RESOURCES */}
      <section className="bg-white py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-extrabold text-slate-900">Resources for NZ Charities & NFPs</h2>
            <Link href="/blog/" className="text-emerald-600 font-semibold hover:text-emerald-700 text-sm">View all →</Link>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {recentPosts.map(post => (
              <Link key={post.slug} href={`/blog/${post.slug}/`} className="group block border border-slate-200 rounded-xl overflow-hidden hover:shadow-md hover:border-emerald-300 transition-all duration-200">
                <div className="h-44 bg-slate-200 overflow-hidden">
                  <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                </div>
                <div className="p-5">
                  <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">{post.category}</span>
                  <h3 className="font-bold text-slate-900 mt-2 mb-1.5 text-sm leading-snug group-hover:text-emerald-700 transition line-clamp-2">{post.title}</h3>
                  <p className="text-xs text-slate-500">{post.readTime} · {new Date(post.date).toLocaleDateString('en-NZ', { month: 'long', year: 'numeric' })}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* BOTTOM CTA */}
      <section className="bg-emerald-600 py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-white mb-4">Let's Sort Your Cover</h2>
          <p className="text-emerald-100 text-lg mb-8 max-w-xl mx-auto">Tell us about your organisation. We'll compare specialist insurers and connect you with a broker we personally know and trust — back within one business day.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact/" className="px-8 py-4 bg-white text-emerald-700 font-extrabold rounded-xl hover:bg-emerald-50 transition text-lg shadow-lg">Get a Free Quote →</Link>
            <Link href="/organisations/" className="px-8 py-4 bg-emerald-700 text-white font-bold rounded-xl hover:bg-emerald-800 transition text-lg border border-emerald-500">Find Your Organisation Type</Link>
          </div>
        </div>
      </section>
    </>
  );
}
