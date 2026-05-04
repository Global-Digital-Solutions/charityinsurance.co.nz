import type { Metadata } from 'next';
import Link from 'next/link';
import { orgTypes } from '@/data/organisation-types';
import { blogPosts } from '@/data/blog-posts';
import QuoteForm from '@/components/QuoteForm';

export async function generateStaticParams() {
  return orgTypes.map(o => ({ slug: o.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const org = orgTypes.find(o => o.slug === slug);
  if (!org) return { title: 'Not Found' };
  return {
    title: `${org.headline} | CharityInsurance.co.nz`,
    description: org.intro.slice(0, 160),
    alternates: { canonical: `https://charityinsurance.co.nz/organisations/${slug}/` },
    openGraph: { title: org.headline, description: org.intro.slice(0, 160), url: `https://charityinsurance.co.nz/organisations/${slug}/`, type: 'website' },
  };
}

const trustBadges = ['✓ Licensed NZ Brokers', '✓ Free Broker Matching', '✓ 6+ Specialist Insurers', '✓ Reply in 1 Business Day'];

export default async function OrgTypePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const org = orgTypes.find(o => o.slug === slug);
  if (!org) return <main className="max-w-4xl mx-auto px-4 py-16"><h1 className="text-2xl font-bold">Not Found</h1><Link href="/organisations/" className="text-emerald-600">← Back</Link></main>;

  const relatedPosts = blogPosts.slice(0, 3);

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: org.faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };

  const serviceSchema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    name: org.headline,
    description: org.intro,
    provider: { '@id': 'https://charityinsurance.co.nz/#organization' },
    areaServed: { '@type': 'Country', name: 'New Zealand' },
    serviceType: 'Insurance Broker Referral',
    url: `https://charityinsurance.co.nz/organisations/${slug}/`,
  };

  return (
    <>
      {/* TALL HERO with trust badges */}
      <section className="relative min-h-[640px] flex items-end" style={{ backgroundImage: `url(${org.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/97 via-slate-900/65 to-slate-800/20" />
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-14 pt-32 w-full">
          <nav className="flex items-center gap-2 text-slate-400 text-xs mb-4">
            <Link href="/" className="hover:text-white transition">Home</Link>
            <span>/</span>
            <Link href="/organisations/" className="hover:text-white transition">Organisation Types</Link>
            <span>/</span>
            <span className="text-slate-300">{org.name}</span>
          </nav>
          <span className="inline-block px-3 py-1 bg-emerald-600 text-white text-xs font-bold rounded-full uppercase tracking-widest mb-4">{org.name}</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-4">{org.headline}</h1>
          <p className="text-slate-200 text-lg max-w-2xl mb-6 leading-relaxed">{org.intro.slice(0, 180)}...</p>
          <div className="flex flex-wrap gap-2">
            {trustBadges.map(b => (
              <span key={b} className="inline-flex items-center px-3 py-1.5 bg-white/15 backdrop-blur-sm border border-white/25 text-white text-xs font-semibold rounded-full shadow-sm">{b}</span>
            ))}
          </div>
        </div>
      </section>

      <main className="w-full">
        <div className="max-w-6xl mx-auto px-4 py-14 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <article className="lg:col-span-2 space-y-10">
            {/* Intro */}
            <div className="border-l-4 border-emerald-500 pl-5">
              <p className="text-slate-700 leading-relaxed text-base">{org.intro}</p>
              <p className="text-xs text-slate-400 mt-3">✍️ <strong>The CharityInsurance Crew</strong> — your friendly insurance geeks · Updated May 2026</p>
            </div>

            {/* Key risks — impactful amber/red design */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-red-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-lg">⚠</span>
                </div>
                <h2 className="text-xl font-extrabold text-slate-900">Key Risks for {org.shortName}</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {org.keyRisks.map((risk, i) => (
                  <div key={risk} className="relative bg-gradient-to-br from-red-50 to-orange-50 border border-red-200 rounded-xl p-4 overflow-hidden">
                    <div className="absolute top-2 right-3 text-red-100 font-black text-4xl leading-none select-none">{String(i + 1).padStart(2, '0')}</div>
                    <div className="flex items-start gap-3 relative">
                      <span className="w-6 h-6 bg-red-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-white text-xs font-black">!</span>
                      </span>
                      <p className="text-slate-800 text-sm font-medium leading-relaxed">{risk}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Cover types — emerald impact cards */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 bg-emerald-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <span className="text-white text-lg">🛡</span>
                </div>
                <h2 className="text-xl font-extrabold text-slate-900">Recommended Cover for {org.shortName}</h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-3">
                {org.coverTypes.map(cover => (
                  <div key={cover} className="flex items-center gap-3 bg-emerald-600 rounded-xl p-4 group hover:bg-emerald-700 transition-colors duration-200 shadow-sm">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-white font-black text-sm">✓</span>
                    </div>
                    <p className="text-white text-sm font-bold leading-tight">{cover}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-500 mt-3 italic">Cover requirements vary by organisation size and activities. A broker will tailor the right mix.</p>
            </div>

            {/* How claims work */}
            <div className="bg-slate-900 rounded-2xl p-8">
              <h2 className="text-xl font-extrabold text-white mb-6">How Claims Work</h2>
              <div className="grid sm:grid-cols-2 gap-5">
                {[
                  { num: '01', title: 'Contact Your Insurer First', desc: 'In any incident, your first call should always be to your insurer — not your broker, not your lawyer. They activate the response.' },
                  { num: '02', title: 'Broker Advocates for You', desc: 'Your broker steps in to manage communication, paperwork, and timelines on your behalf throughout the claims process.' },
                  { num: '03', title: 'Assessment & Investigation', desc: 'The insurer assesses the claim. For liability claims this may include legal investigation; for property claims, a loss adjuster.' },
                  { num: '04', title: 'Settlement & Recovery', desc: 'Once the claim is assessed and agreed, payment is made. Your broker follows up until the matter is fully resolved.' },
                ].map(step => (
                  <div key={step.num} className="flex gap-4">
                    <span className="text-emerald-400 font-black text-2xl flex-shrink-0 leading-tight">{step.num}</span>
                    <div>
                      <p className="font-bold text-white text-sm mb-1">{step.title}</p>
                      <p className="text-slate-400 text-xs leading-relaxed">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4">
              {org.stats.map(stat => (
                <div key={stat.label} className="bg-emerald-600 rounded-xl p-5 text-center shadow-sm">
                  <p className="text-2xl font-extrabold text-white">{stat.value}</p>
                  <p className="text-emerald-100 text-xs mt-1 leading-tight">{stat.label}</p>
                </div>
              ))}
            </div>

            {/* FAQs */}
            <div>
              <h2 className="text-xl font-extrabold text-slate-900 mb-5">Frequently Asked Questions</h2>
              <div className="space-y-3">
                {org.faqs.map(faq => (
                  <details key={faq.q} className="border border-slate-200 rounded-xl group">
                    <summary className="px-5 py-4 font-semibold text-slate-900 cursor-pointer list-none flex items-center justify-between text-sm hover:text-emerald-700 transition">
                      {faq.q}
                      <span className="text-slate-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-3">▼</span>
                    </summary>
                    <div className="px-5 pb-4 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-3">{faq.a}</div>
                  </details>
                ))}
              </div>
            </div>

            {/* Regulatory links */}
            <div>
              <h2 className="text-xl font-extrabold text-slate-900 mb-4">Useful Regulatory Resources</h2>
              <div className="grid sm:grid-cols-2 gap-3">
                {org.regulatoryLinks.map(link => (
                  <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl p-4 hover:border-emerald-400 hover:bg-emerald-50 transition group">
                    <span className="text-emerald-600 text-lg">🔗</span>
                    <span className="text-slate-700 text-sm font-semibold group-hover:text-emerald-700 transition">{link.label}</span>
                  </a>
                ))}
                <a href="https://www.charities.govt.nz" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl p-4 hover:border-emerald-400 hover:bg-emerald-50 transition group">
                  <span className="text-emerald-600 text-lg">🔗</span>
                  <span className="text-slate-700 text-sm font-semibold group-hover:text-emerald-700 transition">Charities Services NZ</span>
                </a>
                <a href="https://www.privacy.org.nz" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 bg-slate-50 border border-slate-200 rounded-xl p-4 hover:border-emerald-400 hover:bg-emerald-50 transition group">
                  <span className="text-emerald-600 text-lg">🔗</span>
                  <span className="text-slate-700 text-sm font-semibold group-hover:text-emerald-700 transition">Office of the Privacy Commissioner</span>
                </a>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="bg-slate-900 border-2 border-emerald-500 rounded-2xl p-6 sticky top-20 shadow-xl">
              <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2">Free · No Obligation</p>
              <h3 className="text-xl font-extrabold text-white mb-2">Get Cover for {org.shortName}</h3>
              <p className="text-sm text-slate-300 mb-5">We compare specialist insurers and connect you with a personally vetted broker — free, back within one business day.</p>
              <QuoteForm compact orgType={org.name} />
            </div>

            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-5">
              <p className="font-bold text-emerald-900 text-sm mb-3">Why CharityInsurance.co.nz?</p>
              {['Compare 6+ specialist charity insurers', 'Personally vetted, licensed brokers', 'Plain-English advice, no jargon', 'Reply within one business day', 'Completely free to you'].map(b => (
                <div key={b} className="flex items-center gap-2.5 mb-2.5 last:mb-0">
                  <span className="w-5 h-5 bg-emerald-600 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white text-[9px] font-black">✓</span>
                  </span>
                  <p className="text-slate-700 text-xs font-medium">{b}</p>
                </div>
              ))}
            </div>

            <div className="bg-white border border-slate-200 rounded-xl p-5">
              <p className="font-bold text-slate-900 text-sm mb-3">Quick Links</p>
              <ul className="space-y-2 text-sm">
                {[['Coverage Types', '/coverage/'], ['Making a Claim', '/claims/'], ['Resources', '/blog/'], ['Contact', '/contact/']].map(([l, h]) => (
                  <li key={h}><Link href={h} className="text-emerald-600 hover:text-emerald-700 font-semibold">→ {l}</Link></li>
                ))}
              </ul>
            </div>

            {relatedPosts.length > 0 && (
              <div>
                <p className="font-bold text-slate-900 text-sm mb-3">Related Reading</p>
                <div className="space-y-3">
                  {relatedPosts.map(post => (
                    <Link key={post.slug} href={`/blog/${post.slug}/`} className="block p-3 bg-white border border-slate-200 rounded-lg hover:border-emerald-400 transition">
                      <p className="font-semibold text-slate-900 text-xs leading-snug hover:text-emerald-700">{post.title}</p>
                      <p className="text-xs text-slate-400 mt-1">{post.readTime}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </aside>
        </div>

        <section className="bg-slate-900 py-14 px-4">
          <div className="max-w-lg mx-auto text-center">
            <span className="inline-block px-3 py-1 bg-emerald-600/30 text-emerald-400 text-xs font-bold rounded-full uppercase tracking-widest mb-4">Free · No Obligation</span>
            <h2 className="text-2xl font-extrabold text-white mb-3">Ready to Get Protected?</h2>
            <p className="text-slate-300 mb-6">Get tailored insurance options for your {org.shortName.toLowerCase()} from licensed NZ brokers. Free advice, no obligation.</p>
            <div className="bg-white/5 border-2 border-emerald-500/50 rounded-2xl p-8">
              <QuoteForm compact orgType={org.name} />
            </div>
          </div>
        </section>
      </main>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify({
        '@context': 'https://schema.org', '@type': 'BreadcrumbList',
        itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://charityinsurance.co.nz/' },
          { '@type': 'ListItem', position: 2, name: 'Organisation Types', item: 'https://charityinsurance.co.nz/organisations/' },
          { '@type': 'ListItem', position: 3, name: org.name, item: `https://charityinsurance.co.nz/organisations/${slug}/` },
        ],
      })}} />
    </>
  );
}
