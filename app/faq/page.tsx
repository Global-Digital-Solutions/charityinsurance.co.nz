import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'FAQ | Charity & Not-for-Profit Insurance Questions Answered',
  description: 'Frequently asked questions about insurance for NZ charities, sports clubs, churches, and community organisations — answered in plain English.',
  alternates: { canonical: 'https://charityinsurance.co.nz/faq/' },
};

const faqs = [
  { q: 'Do we need insurance if we\'re a small charity?', a: 'Yes. Even the smallest charity can face a liability claim if someone is injured at an event or on premises you manage. Public liability insurance is affordable and essential for any organisation with public-facing activities. Trustee Liability is also important — board members can face personal liability regardless of organisation size.' },
  { q: 'What\'s the difference between public liability and professional indemnity?', a: 'Public liability covers injury to people or damage to property caused by your organisation\'s activities or premises. Professional indemnity covers claims arising from advice or professional services your organisation provides — for example, counselling, budgeting advice, or educational services. Many charities need both.' },
  { q: 'Does ACC cover our volunteers if they\'re injured?', a: 'ACC covers most physical injuries for NZ residents, including volunteers. However, ACC pays compensation based on minimum wage for volunteers (not their actual income), and doesn\'t cover some types of harm. Voluntary Workers Accident insurance supplements ACC — providing better income replacement and cover for gaps ACC doesn\'t address.' },
  { q: 'Are our trustees personally liable if something goes wrong?', a: 'Yes. Charitable registration does not protect individual trustees from personal liability. Under the Incorporated Societies Act 2022, officer duties are now explicit and enforceable. Trustee Liability (D&O) insurance protects board members from personal financial exposure for governance decisions, employment disputes, and regulatory investigations.' },
  { q: 'What does "association liability" cover?', a: 'Association liability is D&O insurance designed for incorporated societies and community associations. It protects office holders (committee members, chairs, secretaries) from personal liability arising from their governance roles. It covers defence costs and damages for claims alleging wrongful acts in their governance capacity.' },
  { q: 'We run events for the public. What cover do we need?', a: 'Public liability insurance is essential for any event with public attendance. Check that your policy covers the specific venue (not just your regular premises), the activities planned, and any food service or contractors. For major fundraising events with significant financial commitment, consider event cancellation cover as well.' },
  { q: 'Does our charity need cyber insurance?', a: 'Strongly recommended if you hold donor data, beneficiary information, health records, or any personal data in digital systems. The Privacy Act 2020 requires notification of serious privacy breaches. Cyber insurance covers forensic investigation, legal costs, Privacy Commissioner proceedings, and individual notification costs — all of which can be substantial.' },
  { q: 'How much does charity insurance cost?', a: 'It varies significantly by organisation size, activities, and covers required. A small sports club might pay $500–$1,500/year for basic public liability and association liability. A mid-sized charity with multiple covers (public liability, D&O, professional indemnity, cyber) might pay $3,000–$10,000+/year. A specialist broker will find the most competitive rate for your risk profile.' },
  { q: 'Can we get cover if we have no paid staff?', a: 'Yes. Many specialist charity insurers specifically cater for all-volunteer organisations. Voluntary Workers Accident insurance is available for volunteer-only teams. Public liability, property, and trustee liability are all available regardless of whether you have employees.' },
  { q: 'We\'re a faith community. Do we need specialist insurance?', a: 'Yes — strongly recommended. Faith communities conduct a wide range of activities (worship, counselling, youth programmes, food services, community events) that standard commercial policies often don\'t adequately cover. Specialist underwriters like Concordia are designed specifically for faith community risk profiles, including heritage buildings, pastoral care, and safeguarding liability.' },
  { q: 'What is statutory liability and does our charity need it?', a: 'Statutory liability covers defence costs and fines arising from prosecution under legislation — including the Health and Safety at Work Act 2015, Privacy Act 2020, and Charities Act 2005. Any organisation with paid staff should consider statutory liability for H&S Act exposure. Organisations holding personal data should consider it for Privacy Act exposure.' },
  { q: 'Can I get a certificate of insurance for a grant application?', a: 'Yes. Certificates of insurance (certificates of currency) confirming your cover type and level are standard documents that your broker can issue promptly. Many grant funders, council permits, and venue hire agreements require these. Tell your broker the required coverage level and the name to be noted on the certificate.' },
];

const faqSchema = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map(f => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
};

export default function FAQPage() {
  return (
    <>
      <section className="bg-emerald-600 py-14 px-4 text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Frequently Asked Questions</h1>
        <p className="text-emerald-100 text-lg max-w-xl mx-auto">Insurance questions for NZ charities and not-for-profits — answered in plain English.</p>
      </section>

      <main className="max-w-3xl mx-auto px-4 py-16">
        <div className="space-y-4">
          {faqs.map(faq => (
            <details key={faq.q} className="border border-slate-200 rounded-xl group bg-white">
              <summary className="px-6 py-4 font-semibold text-slate-900 cursor-pointer list-none flex items-center justify-between hover:text-emerald-700 transition">
                {faq.q}
                <span className="text-slate-400 group-open:rotate-180 transition-transform flex-shrink-0 ml-3 text-sm">▼</span>
              </summary>
              <div className="px-6 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-3">{faq.a}</div>
            </details>
          ))}
        </div>

        <div className="mt-12 bg-emerald-50 border-2 border-emerald-600 rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold text-slate-900 mb-3">Still Have Questions?</h2>
          <p className="text-slate-600 mb-5">Our brokers specialise in charity and not-for-profit insurance. Get in touch and we'll give you straight answers — no jargon, no obligation.</p>
          <Link href="/contact/" className="inline-block px-8 py-4 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition">Talk to a Specialist →</Link>
        </div>
      </main>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
    </>
  );
}
