import type { Metadata } from 'next';
import QuoteForm from '@/components/QuoteForm';

export const metadata: Metadata = {
  title: 'Get a Quote | Charity & Not-for-Profit Insurance',
  description: 'Tell us about your charity, sports club, or community organisation and we'll match you with a personally vetted insurance broker — free, no obligation, back within one business day.',
  alternates: { canonical: 'https://charityinsurance.co.nz/contact/' },
};

const reasons = [
  { icon: '🤝', title: 'Brokers we actually know', desc: "Every broker we recommend has been personally vetted. These aren't strangers from a directory — they're advisors who specialise in the charity and not-for-profit sector.", color: 'bg-emerald-600' },
  { icon: '🔍', title: 'We do the comparing', desc: 'We compare across Chubb, AIG, Zurich, Berkley, Concordia, and other specialist charity underwriters on your behalf — so you get options, not a single product.', color: 'bg-slate-700' },
  { icon: '📋', title: 'Plain English, always', desc: "We translate the fine print. You'll know exactly what's covered, what's not, and what the policy means for your specific organisation.", color: 'bg-emerald-600' },
  { icon: '⚡', title: 'Fast, no fuss', desc: 'Send us your details, we come back within one business day. No lengthy phone trees, no call centres, no hold music.', color: 'bg-slate-700' },
  { icon: '🛡️', title: 'There when it matters', desc: "Your broker doesn't vanish after the sale. They support you through any claim — which is the only moment that really counts.", color: 'bg-emerald-600' },
  { icon: '💰', title: 'Typically saves money', desc: 'Specialist charity insurers often price more competitively than generic commercial products. A broker who knows the market finds you the best deal.', color: 'bg-slate-700' },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative min-h-[300px] flex items-end" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center top' }}>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/50 to-transparent" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-24 w-full">
          <span className="inline-block px-3 py-1 bg-emerald-600/80 text-white text-xs font-bold rounded-full uppercase tracking-widest mb-4">Get Covered</span>
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-3">Cover Without the Fuss</h1>
          <p className="text-slate-200 text-lg max-w-xl">We've done the legwork — finding honest brokers who specialise in charities and NFPs. Tell us about your organisation and we'll match you with the right one.</p>
        </div>
      </section>

      <main className="w-full">
        <section className="max-w-6xl mx-auto px-4 py-14 grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-5">
            <div className="mb-8">
              <h2 className="text-2xl font-extrabold text-slate-900 mb-2">Honest brokers.<br />No strangers.</h2>
              <p className="text-slate-600 text-sm leading-relaxed">We only work with brokers we've met, assessed, and would recommend without hesitation. The kind of people you can actually call when something goes wrong — not a faceless 0800 number.</p>
            </div>
            <div className="space-y-3">
              {reasons.map(item => (
                <div key={item.title} className="flex gap-4 items-start bg-white border border-slate-200 rounded-2xl p-4 hover:border-emerald-400 hover:shadow-sm transition-all duration-200 group">
                  <div className={`w-11 h-11 ${item.color} rounded-xl flex items-center justify-center flex-shrink-0 text-xl shadow-sm group-hover:scale-105 transition-transform`}>{item.icon}</div>
                  <div>
                    <p className="font-bold text-slate-900 text-sm leading-tight mb-1">{item.title}</p>
                    <p className="text-slate-500 text-xs leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-slate-900 rounded-2xl p-5 border-l-4 border-emerald-500">
              <p className="text-emerald-400 text-xs font-bold uppercase tracking-widest mb-2">Our broker standard</p>
              <p className="text-white text-sm leading-relaxed font-medium">"We only recommend brokers we'd be happy to have a beer with — people who give straight advice, understand charities, and actually pick up the phone."</p>
              <p className="text-slate-400 text-xs mt-2">— The CharityInsurance Crew</p>
            </div>
            <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-4">
              <p className="font-bold text-slate-900 text-sm mb-1">💬 Prefer to email first?</p>
              <p className="text-slate-600 text-xs leading-relaxed">Drop us a line at <a href="mailto:hello@cover4you.co.nz" className="text-emerald-600 font-semibold hover:underline">hello@cover4you.co.nz</a> and a real person will get back to you within one business day.</p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <QuoteForm />
          </div>
        </section>

        <section className="w-full bg-slate-50 border-t border-slate-200 py-10 px-4">
          <div className="max-w-5xl mx-auto grid sm:grid-cols-3 gap-6 text-center">
            {[
              { icon: '⏱️', stat: '1 business day', label: 'Response time, guaranteed' },
              { icon: '🔍', stat: '6+ specialist insurers', label: 'Compared on your behalf' },
              { icon: '🤝', stat: 'Personally vetted', label: 'Every broker we recommend' },
            ].map(t => (
              <div key={t.stat} className="flex flex-col items-center gap-1">
                <span className="text-3xl mb-1">{t.icon}</span>
                <p className="text-xl font-extrabold text-slate-900">{t.stat}</p>
                <p className="text-slate-500 text-sm">{t.label}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
