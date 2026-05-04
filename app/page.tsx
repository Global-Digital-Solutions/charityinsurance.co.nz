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
  { value: '29,208', label: 'Registered charities in NZ', sub: 'charities.govt.nz' },
  { value: '1.2M', label: 'NZ volunteers', sub: 'giving their time' },
  { value: '12+', label: 'Cover types', sub: 'for every org type' },
  { value: '6+', label: 'Specialist insurers', sub: 'compared for you' },
];

const uspItems = [
  { label: 'Free broker matching', icon: '🤝' },
  { label: '15+ org types covered', icon: '🏢' },
  { label: 'Plain English advice', icon: '📋' },
  { label: 'Reply within 1 business day', icon: '⚡' },
];

export default function HomePage() {
  return (
    <>
      {/* TALL HERO */}
      <section className="relative min-h-[720px] flex items-end" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/97 via-slate-900/65 to-slate-800/20" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 pt-24 w-full">
          <div className="grid lg:grid-cols-2 gap-10 items-end">
            <div>
              <span className="inline-block px-3 py-1 bg-emerald-600/90 text-white text-xs font-bold rounded-full uppercase tracking-widest mb-5">Specialist Charity Insurance — Licensed Brokers</span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-5">
                Insurance for the Organisations That Give Back
              </h1>
              <p className="text-slate-200 text-lg mb-8 max-w-lg leading-relaxed">
                We cut through the complexity, compare cover from specialist insurers, and personally vet the brokers we recommend — so your charity, sports club, or community group is properly protected.
              </p>

              {/* PROMINENT USP BADGES */}
              <div className="grid grid-cols-2 gap-3 mb-8">
                {uspItems.map(item => (
                  <div key={item.label} className="flex items-center gap-3 bg-white/10 backdrop-blur-sm border border-emerald-400/60 rounded-xl px-4 py-3">
                    <span className="text-xl flex-shrink-0">{item.icon}</span>
                    <span className="text-white text-sm font-bold leading-tight">{item.label}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-3">
                <Link href="/contact/" className="px-7 py-3.5 bg-emerald-600 text-white font-extrabold rounded-xl hover:bg-emerald-700 transition shadow-lg text-base">Get a Free Quote →</Link>
                <Link href="/organisations/" className="px-7 py-3.5 bg-white/10 text-white font-semibold rounded-xl hover:bg-white/20 transition border border-white/30 text-base">Find Your Org Type</Link>
              </div>
            </div>

            {/* FORM — strong border */}
            <div className="hidden lg:block">
              <div className="bg-slate-900/80 backdrop-blur-sm border-2 border-emerald-400 rounded-2xl p-7 shadow-2xl">
                <p className="text-emerald-400 font-extrabold text-sm mb-1 uppercase tracking-wide">Free Quote — No Obligation</p>
                <p className="text-slate-300 text-xs mb-5">Tell us about your organisation. Back within 1 business day.</p>
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

      {/* WHY US */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">We Do the Hard Work. You Focus on Your Mission.</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">Most charities and not-for-profits are underinsured. We make it easy to get the right cover — by comparing specialist insurers and matching you with brokers who actually know this sector.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { icon: '🔍', title: 'We compare for you', desc: 'We assess your organisation and compare policies from Chubb, AIG, Zurich, Berkley, and specialist charity underwriters — so you see options, not a single product pushed at you.' },
            { icon: '🤝', title: 'Brokers we personally know', desc: 'Every broker we recommend has been personally vetted. These are advisors who specialise in the not-for-profit sector and understand what your organisation actually needs.' },
            { icon: '📋', title: 'Plain English, always', desc: "We translate the insurance jargon. You'll know exactly what's covered, what's not, and what each policy means for your specific organisation." },
            { icon: '⚡', title: 'Back within one business day', desc: "Tell us about your organisation and we'll come back with tailored options in plain English. No lengthy phone trees, no call centres, no hold music." },
            { icon: '🛡️', title: 'There when it matters', desc: "A broker who disappears after the sale is no broker at all. Our recommended brokers support you through claims — the only moment that really counts." },
            { icon: '💰', title: 'Typically saves money', desc: 'Specialist charity insurers often price more competitively than generic commercial insurers. We find the most competitive rate without compromising cover quality.' },
          ].map(item => (
            <div key={item.title} className="bg-white border border-slate-200 rounded-2xl p-6 hover:border-emerald-400 hover:shadow-md transition-all duration-200">
              <div className="w-12 h-12 bg-emerald-50 border border-emerald-200 rounded-xl flex items-center justify-center text-2xl mb-4">{item.icon}</div>
              <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
              <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ORG TYPES */}
      <section className="bg-slate-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">Insurance for Every Type of Organisation</h2>
            <p className="text-slate-600 max-w-xl mx-auto">From a small sports club to a large charity trust — we cover the full spectrum of New Zealand's not-for-profit sector.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {featuredOrgs.map(org => (
              <Link key={org.slug} href={`/organisations/${org.slug}/`} className="bg-white rounded-xl border border-slate-200 p-5 hover:border-emerald-500 hover:shadow-md transition-all duration-200 group">
                <h3 className="font-bold text-slate-900 text-sm mb-1.5 group-hover:text-emerald-700 transition">{org.name}</h3>
                <p className="text-slate-500 text-xs leading-relaxed">{org.intro.slice(0, 90)}...</p>
                <span className="text-emerald-600 text-xs font-semibold mt-2 inline-block">Learn more →</span>
              </Link>
            ))}
          </div>
          <div className="text-center">
            <Link href="/organisations/" className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition">View All Organisation Types →</Link>
          </div>
        </div>
      </section>

      {/* COVER TYPES */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">Cover Types for Charities & Not-for-Profits</h2>
          <p className="text-slate-600 max-w-xl mx-auto">From public liability to trustee protection, volunteer accident cover to cyber insurance — we match you with the covers your organisation actually needs.</p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredCovers.map(cover => (
            <div key={cover.slug} className="border-2 border-slate-100 rounded-xl p-5 hover:border-emerald-400 hover:shadow-sm transition-all duration-200 group">
              <div className="w-11 h-11 bg-emerald-600 rounded-xl flex items-center justify-center text-xl mb-3 group-hover:bg-emerald-700 transition">{cover.icon}</div>
              <h3 className="font-bold text-slate-900 mb-1.5 text-sm">{cover.name}</h3>
              <p className="text-slate-500 text-xs leading-relaxed">{cover.shortDesc}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link href="/coverage/" className="inline-flex items-center gap-2 px-6 py-3 border-2 border-emerald-600 text-emerald-700 font-bold rounded-xl hover:bg-emerald-50 transition">View All Cover Types →</Link>
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
      <section className="max-w-6xl mx-auto px-4 py-16">
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
