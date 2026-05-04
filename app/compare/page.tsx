import type { Metadata } from 'next';
import Link from 'next/link';
import QuoteForm from '@/components/QuoteForm';

export const metadata: Metadata = {
  title: 'Compare Charity Insurance Providers in NZ',
  description: 'Compare specialist charity and not-for-profit insurance providers in New Zealand — Chubb, AIG, Zurich, Berkley, Concordia, and more. Find the right insurer for your organisation.',
  alternates: { canonical: 'https://charityinsurance.co.nz/compare/' },
};

const insurers = [
  { name: 'Chubb Insurance NZ', specialty: 'Large charities, D&O, Management Liability', strengths: 'Best-in-class D&O/trustee liability wording; strong claims support; broad management liability package', suitable: 'Large registered charities, foundations, healthcare trusts', rating: 'A++' },
  { name: 'AIG New Zealand', specialty: 'Association liability, professional indemnity', strengths: 'Strong association liability and professional indemnity products; experienced claims team', suitable: 'Professional associations, incorporated societies, advice-based charities', rating: 'A' },
  { name: 'Zurich NZ', specialty: 'Property, liability, package policies', strengths: 'Competitive package policies; strong property cover; good for organisations with significant assets', suitable: 'Charities with buildings and equipment; community halls; sports clubs with grounds', rating: 'A+' },
  { name: 'Berkley Insurance', specialty: 'NFP specialist, management liability', strengths: 'Specialist not-for-profit underwriting; competitive pricing for smaller charities; strong management liability wording', suitable: 'Small to mid-sized charities; incorporated societies; community groups', rating: 'A+' },
  { name: 'Concordia Underwriting', specialty: 'Faith, charity, care, education', strengths: 'NZ specialist for faith communities and charities; understands unique activities; tailored policy wording', suitable: 'Churches, faith organisations, schools, aged care trusts, charities', rating: 'A-' },
  { name: 'QBE Insurance NZ', specialty: 'Liability, property, statutory', strengths: 'Broad liability and property products; strong statutory liability cover; good for organisations with complex risk profiles', suitable: 'Social service providers; disability support; healthcare charities', rating: 'A+' },
];

export default function ComparePage() {
  return (
    <>
      <section className="relative min-h-[580px] flex items-end" style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1920&q=80)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-900/50 to-transparent" />
        <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-24 w-full">
          <span className="inline-block px-3 py-1 bg-emerald-600/80 text-white text-xs font-bold rounded-full uppercase tracking-widest mb-4">Compare Insurers</span>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Charity Insurance Providers in NZ</h1>
          <p className="text-slate-200 text-lg max-w-2xl">We compare across specialist charity and not-for-profit insurers to find the right fit for your organisation's size, activities, and budget.</p>
        </div>
      </section>

      <main className="w-full">
        <section className="max-w-6xl mx-auto px-4 py-14 grid grid-cols-1 lg:grid-cols-3 gap-10">
          <div className="lg:col-span-2">
            <p className="text-slate-600 mb-8 text-sm leading-relaxed">Not every insurer is right for every type of not-for-profit. The table below gives an overview of the specialist providers our brokers access. Policy suitability depends on your specific organisation, activities, and risk profile — which is why broker matching matters.</p>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-sm">
                <thead className="bg-emerald-600 text-white">
                  <tr>
                    <th className="text-left px-4 py-3 font-bold">Insurer</th>
                    <th className="text-left px-4 py-3 font-bold hidden md:table-cell">Specialty</th>
                    <th className="text-left px-4 py-3 font-bold hidden lg:table-cell">Best Suited For</th>
                    <th className="text-center px-4 py-3 font-bold">Rating</th>
                  </tr>
                </thead>
                <tbody>
                  {insurers.map((ins, i) => (
                    <tr key={ins.name} className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}>
                      <td className="px-4 py-4">
                        <p className="font-bold text-slate-900">{ins.name}</p>
                        <p className="text-xs text-slate-500 mt-0.5 md:hidden">{ins.specialty}</p>
                      </td>
                      <td className="px-4 py-4 text-slate-600 hidden md:table-cell">{ins.specialty}</td>
                      <td className="px-4 py-4 text-slate-600 text-xs hidden lg:table-cell">{ins.suitable}</td>
                      <td className="px-4 py-4 text-center">
                        <span className="inline-block px-2 py-1 bg-emerald-100 text-emerald-700 font-bold text-xs rounded-full">{ins.rating}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-400 mt-3">Financial strength ratings are indicative only and subject to change. Our brokers will confirm current ratings at the time of advice.</p>

            <div className="mt-10">
              <h2 className="text-xl font-extrabold text-slate-900 mb-4">Why Specialist Charity Insurers?</h2>
              <p className="text-slate-600 text-sm leading-relaxed mb-4">Generic commercial insurers price and assess not-for-profits using business frameworks that don't reflect the actual risk profile of a charity. Specialist charity underwriters — particularly Concordia, Berkley, and Lloyd's of London syndicates — have developed policy wordings and pricing models specifically for:</p>
              <div className="grid sm:grid-cols-2 gap-4">
                {['Faith and church communities with diverse activities', 'Sports clubs with volunteer injury and public liability exposure', 'Charities with trustee liability under the Incorporated Societies Act 2022', 'Age care and health charities with clinical professional liability', 'Environmental groups working in remote or high-risk terrain', 'Arts organisations with irreplaceable collection assets'].map(item => (
                  <div key={item} className="flex items-start gap-3 bg-emerald-50 border border-emerald-100 rounded-xl p-3">
                    <span className="text-emerald-500 flex-shrink-0">✓</span>
                    <p className="text-slate-700 text-xs">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <aside className="space-y-6">
            <div className="bg-emerald-50 border-2 border-emerald-600 rounded-xl p-6 sticky top-20">
              <h3 className="text-lg font-bold text-slate-900 mb-2">Get Compared</h3>
              <p className="text-sm text-slate-600 mb-4">We compare across all these insurers and more — finding the best fit for your organisation's specific needs and budget.</p>
              <QuoteForm compact />
            </div>
          </aside>
        </section>
      </main>
    </>
  );
}
