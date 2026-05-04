import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/data/blog-posts';

export const metadata: Metadata = {
  title: 'Blog & Resources | Charity Insurance Guides for NZ Organisations',
  description: 'Plain-English guides, news, and resources for NZ charities, not-for-profits, sports clubs, and community organisations navigating insurance, governance, and compliance.',
  alternates: { canonical: 'https://charityinsurance.co.nz/blog/' },
};

export default function BlogPage() {
  return (
    <>
      <section className="relative min-h-[580px] flex items-end" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/50 to-transparent" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-24 w-full">
          <span className="inline-block px-3 py-1 bg-emerald-600/80 text-white text-xs font-bold rounded-full uppercase tracking-widest mb-4">Resources</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Insurance Resources for NZ Charities</h1>
          <p className="text-slate-200 text-lg max-w-xl">Plain-English guides covering governance, risk, cover types, and compliance for every type of community organisation.</p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {blogPosts.map(post => (
            <Link key={post.slug} href={`/blog/${post.slug}/`} className="group block border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg hover:border-emerald-300 transition-all duration-200">
              <div className="h-48 overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-5">
                <span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">{post.category}</span>
                <h2 className="font-bold text-slate-900 mt-2 mb-2 text-sm leading-snug group-hover:text-emerald-700 transition">{post.title}</h2>
                <p className="text-slate-500 text-xs leading-relaxed mb-3 line-clamp-2">{post.excerpt}</p>
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span>{post.readTime}</span>
                  <span>{new Date(post.date).toLocaleDateString('en-NZ', { day: 'numeric', month: 'short', year: 'numeric' })}</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <section className="bg-emerald-600 py-12 px-4 text-center">
        <h2 className="text-2xl font-extrabold text-white mb-3">Need Specific Advice?</h2>
        <p className="text-emerald-100 mb-6 max-w-lg mx-auto">Our brokers specialise in the not-for-profit sector. Tell us about your organisation and we'll give you straightforward, jargon-free guidance.</p>
        <Link href="/contact/" className="inline-block px-8 py-4 bg-white text-emerald-700 font-extrabold rounded-xl hover:bg-emerald-50 transition">Talk to a Specialist →</Link>
      </section>
    </>
  );
}
