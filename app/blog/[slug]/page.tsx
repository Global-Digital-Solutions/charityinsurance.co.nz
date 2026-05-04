import type { Metadata } from 'next';
import Link from 'next/link';
import { blogPosts } from '@/data/blog-posts';
import QuoteForm from '@/components/QuoteForm';

export async function generateStaticParams() {
  return blogPosts.map(p => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);
  if (!post) return { title: 'Not Found' };
  return {
    title: `${post.title} | CharityInsurance Blog`,
    description: post.excerpt,
    alternates: { canonical: `https://charityinsurance.co.nz/blog/${slug}/` },
    openGraph: { title: post.title, description: post.excerpt, type: 'article', publishedTime: post.date },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = blogPosts.find(p => p.slug === slug);
  if (!post) return <main className="max-w-4xl mx-auto px-4 py-16"><h1>Not Found</h1><Link href="/blog/" className="text-emerald-600">← Back</Link></main>;
  const related = blogPosts.filter(p => p.category === post.category && p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <section className="relative min-h-[380px] flex items-end" style={{ backgroundImage: `url(${post.image})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-gray-800/30 to-transparent" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-32 w-full">
          <Link href="/blog/" className="text-emerald-400 hover:text-white transition mb-4 inline-block text-sm font-semibold">← Back to Blog</Link>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="px-3 py-1 bg-emerald-600 text-white rounded-full text-sm font-semibold">{post.category}</span>
            <span className="text-slate-300 text-sm">{post.author}</span>
            <span className="text-slate-400 text-sm">{post.readTime}</span>
            <span className="text-slate-400 text-sm">{new Date(post.date).toLocaleDateString('en-NZ', { year: 'numeric', month: 'long', day: 'numeric' })}</span>
          </div>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight">{post.title}</h1>
        </div>
      </section>

      <main className="w-full">
        <div className="max-w-6xl mx-auto px-4 py-14 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <article className="lg:col-span-2">
            <div className="prose prose-sm md:prose-base max-w-none text-slate-700 mb-8" dangerouslySetInnerHTML={{ __html: post.content }} />
            <div className="border-t border-slate-200 pt-6 mt-6">
              <div className="bg-slate-50 rounded-lg p-5">
                <p className="font-bold text-slate-900 mb-1">About the Author</p>
                <p className="text-slate-600 text-sm">{post.author} — the CharityInsurance crew are your friendly insurance geeks on a mission to make specialist cover simple and accessible for every NZ charity, sports club, and community organisation.</p>
              </div>
            </div>
          </article>

          <aside className="space-y-6">
            <div className="bg-emerald-50 border-2 border-emerald-600 rounded-xl p-6 sticky top-20">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Get a Quote</h3>
              <p className="text-sm text-slate-600 mb-4">Get matched with a personally vetted charity insurance broker. Free, no obligation.</p>
              <QuoteForm compact />
            </div>
            {related.length > 0 && (
              <div>
                <p className="font-bold text-slate-900 text-sm mb-3">Related Articles</p>
                <div className="space-y-3">
                  {related.map(rp => (
                    <Link key={rp.slug} href={`/blog/${rp.slug}/`} className="block p-4 bg-white border border-slate-200 rounded-lg hover:border-emerald-400 transition">
                      <p className="font-semibold text-slate-900 text-xs leading-snug mb-1 hover:text-emerald-700">{rp.title}</p>
                      <p className="text-xs text-slate-400">{rp.readTime}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
            <div className="bg-slate-50 rounded-lg p-5">
              <p className="font-bold text-slate-900 text-sm mb-3">Quick Links</p>
              <ul className="space-y-2 text-sm">
                {[['Coverage Guide', '/coverage/'], ['Organisation Types', '/organisations/'], ['About Us', '/about/'], ['Contact', '/contact/']].map(([l, h]) => (
                  <li key={h}><Link href={h} className="text-emerald-600 hover:text-emerald-700 font-semibold">→ {l}</Link></li>
                ))}
              </ul>
            </div>
          </aside>
        </div>

        <section className="bg-slate-900 py-14 px-4">
          <div className="max-w-lg mx-auto text-center">
            <h2 className="text-2xl font-bold text-white mb-3">Ready to Get Protected?</h2>
            <p className="text-slate-300 mb-6">Get tailored insurance options from licensed NZ brokers who specialise in charities and not-for-profits.</p>
            <div className="bg-white/5 border-2 border-emerald-500/40 rounded-2xl p-8">
              <QuoteForm compact />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
