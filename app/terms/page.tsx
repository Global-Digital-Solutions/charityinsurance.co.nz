import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Use | CharityInsurance.co.nz',
  description: 'Terms of use and legal disclaimer for CharityInsurance.co.nz — a comparison and broker referral service operated by Cover4You (GDS).',
  alternates: { canonical: 'https://charityinsurance.co.nz/terms/' },
};

export default function TermsPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Terms of Use</h1>
      <p className="text-slate-500 text-sm mb-10">Last updated: 4 May 2026</p>
      <div className="prose max-w-none">
        <h2>About This Service</h2>
        <p>CharityInsurance.co.nz is operated by Cover4You, a trading style of GDS (NZ). We are a comparison and broker referral service, not an insurer or licensed financial advice provider. All financial advice is provided by the licensed insurance broker handling your enquiry, in accordance with the Financial Markets Conduct Act 2013.</p>

        <h2>No Liability for Information Provided</h2>
        <p>The information on this website is provided for general educational purposes only. It does not constitute financial advice, legal advice, or insurance advice. We accept no responsibility whatsoever for any reliance placed on any information contained on this website by any person.</p>
        <p>All information on this website is provided in good faith, but we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on this site.</p>

        <h2>No Liability for Technical or Security Matters</h2>
        <p>We provide no technical advice regarding cybersecurity, risk management, or security controls. Nothing on this website constitutes technical security advice. We accept no responsibility whatsoever for any cyber incidents, data breaches, or security failures experienced by any organisation, whether or not such organisation has used this website or obtained insurance through our referral service.</p>

        <h2>Limitation of Liability — Data Breaches and Incidents</h2>
        <p>To the maximum extent permitted by law, Cover4You (GDS) and CharityInsurance.co.nz expressly exclude all liability for any direct loss, indirect loss, consequential loss, loss of data, loss of revenue, loss of profit, or any other loss or damage arising from any data breach, cyber incident, insurance claim, or any other event, whether or not such event is connected with the use of this website or any policy obtained through our referral service.</p>

        <h2>First Point of Contact in an Incident</h2>
        <p>In the event of any insurance incident — including data breaches, liability events, property damage, or governance claims — your first call should always be to your insurer using the claims contact number on your policy schedule. Do not contact us first. We are not equipped to manage insurance incidents. Contact your insurer immediately.</p>

        <h2>Referral Service Disclosure</h2>
        <p>We may receive a referral fee from insurance brokers or insurers when a policy is arranged through our referral service. This fee is paid by the broker or insurer, not the consumer. All fees applicable to your cover will be disclosed by the broker prior to arranging any policy.</p>

        <h2>Third-Party Links</h2>
        <p>This website may contain links to external websites. We have no control over the content of those sites and accept no responsibility for their content, privacy practices, or availability.</p>

        <h2>Governing Law</h2>
        <p>These terms are governed by the laws of New Zealand. Any disputes arising from use of this website are subject to the exclusive jurisdiction of the New Zealand courts.</p>

        <h2>Changes to These Terms</h2>
        <p>We reserve the right to update these terms at any time. Continued use of this website after any changes constitutes acceptance of the revised terms.</p>

        <h2>Contact</h2>
        <p>For any enquiries regarding these terms, contact us at <a href="mailto:hello@cover4you.co.nz" className="text-emerald-600">hello@cover4you.co.nz</a>.</p>
      </div>
    </main>
  );
}
