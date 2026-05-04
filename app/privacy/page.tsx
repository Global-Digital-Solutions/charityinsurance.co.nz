import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy | CharityInsurance.co.nz',
  alternates: { canonical: 'https://charityinsurance.co.nz/privacy/' },
};

export default function PrivacyPage() {
  return (
    <main className="max-w-4xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-extrabold text-slate-900 mb-2">Privacy Policy</h1>
      <p className="text-slate-500 text-sm mb-10">Last updated: 4 May 2026</p>
      <div className="prose max-w-none">
        <h2>What Information We Collect</h2>
        <p>When you submit a quote request, we collect: your name, organisation name, email address, phone number (optional), and details about your organisation and insurance requirements.</p>

        <h2>How We Use Your Information</h2>
        <p>We use your information to match you with a suitable insurance broker who can provide advice tailored to your organisation. We transmit your enquiry details to our recommended broker partner who will contact you directly. We may retain your contact details to follow up on your enquiry.</p>

        <h2>Disclosure of Information</h2>
        <p>We share your enquiry details with our broker partners for the purpose of matching you with appropriate insurance advice. We do not sell your personal information to third parties. We may be required to disclose information to comply with legal obligations.</p>

        <h2>Your Rights Under the Privacy Act 2020</h2>
        <p>You have the right to access personal information we hold about you and to request correction of inaccurate information. To make such a request, contact us at <a href="mailto:hello@cover4you.co.nz" className="text-emerald-600">hello@cover4you.co.nz</a>.</p>

        <h2>Data Security</h2>
        <p>We take reasonable steps to protect personal information from misuse, loss, and unauthorised access. Form submissions are transmitted via HTTPS encryption.</p>

        <h2>Contact</h2>
        <p>Privacy enquiries: <a href="mailto:hello@cover4you.co.nz" className="text-emerald-600">hello@cover4you.co.nz</a></p>
      </div>
    </main>
  );
}
