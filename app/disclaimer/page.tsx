import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Disclaimer | CharityInsurance.co.nz',
  alternates: { canonical: 'https://charityinsurance.co.nz/disclaimer/' },
};

export default function DisclaimerPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Disclaimer</h1>
      <p className="text-slate-500 text-sm mb-10">Last updated: 4 May 2026</p>
      <div className="prose max-w-none">
        <h2>General Disclaimer</h2>
        <p>The information on CharityInsurance.co.nz is provided for general informational purposes only. Nothing on this website constitutes financial advice, insurance advice, or legal advice. While we endeavour to keep information current and accurate, we make no warranties about completeness, reliability, or suitability for any particular purpose.</p>

        <h2>Not a Licensed Adviser</h2>
        <p>CharityInsurance.co.nz is operated by Cover4You (a trading style of GDS). We are a comparison and referral service — not a licensed financial advice provider. All financial advice is provided by the licensed insurance adviser handling your enquiry.</p>

        <h2>No Liability for Cyber Incidents or Data Breaches</h2>
        <p>We provide no technical advice and accept no responsibility whatsoever for any cyber incidents, data breaches, security failures, or losses arising from any event connected with the use of this website or any insurance policy obtained through our referral service.</p>
        <p><strong>If you experience a cyber incident or data breach, contact your insurer immediately</strong> — not this website. Your insurer's claims number is on your policy schedule.</p>

        <h2>No Liability for Reliance</h2>
        <p>We accept no liability for any loss or damage arising from reliance on the content of this website. All users access this website at their own risk.</p>

        <h2>External Links</h2>
        <p>Links to third-party websites are provided for convenience only. We have no control over and accept no responsibility for the content, accuracy, or availability of any linked site.</p>
      </div>
    </main>
  );
}
