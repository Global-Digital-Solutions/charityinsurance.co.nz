import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Thank You | Quote Request Received',
  robots: { index: false },
};

export default function ThankYouPage() {
  return (
    <main className="min-h-[60vh] flex items-center justify-center px-4">
      <div className="max-w-lg text-center">
        <div className="text-6xl mb-6">🤝</div>
        <h1 className="text-3xl font-extrabold text-slate-900 mb-4">Thank You!</h1>
        <p className="text-slate-600 text-lg mb-3">Your quote request has been received. A specialist charity insurance broker we personally know and trust will be in touch within <strong>one business day</strong>.</p>
        <p className="text-slate-500 text-sm mb-8">In the meantime, feel free to explore our resources below.</p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link href="/coverage/" className="px-6 py-3 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition">Explore Cover Types</Link>
          <Link href="/blog/" className="px-6 py-3 border-2 border-emerald-600 text-emerald-700 font-bold rounded-xl hover:bg-emerald-50 transition">Read Our Guides</Link>
        </div>
      </div>
    </main>
  );
}
