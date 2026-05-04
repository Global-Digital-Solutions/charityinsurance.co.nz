import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Making a Claim | Charity Insurance NZ',
  description: 'How to make an insurance claim as a New Zealand charity or not-for-profit. Step-by-step guidance for public liability, property, D&O, and other charity insurance claims.',
  alternates: { canonical: 'https://charityinsurance.co.nz/claims/' },
};

export default function ClaimsPage() {
  return (
    <>
      <section className="bg-slate-900 py-14 px-4 text-center">
        <h1 className="text-3xl sm:text-4xl font-extrabold text-white mb-3">Making a Claim</h1>
        <p className="text-slate-300 text-lg max-w-xl mx-auto">What to do when something goes wrong — step by step guidance for charities and not-for-profits.</p>
      </section>

      <main className="max-w-4xl mx-auto px-4 py-16">
        <div className="bg-red-50 border-2 border-red-400 rounded-2xl p-6 mb-10">
          <p className="text-red-800 font-bold text-lg mb-2">⚠️ The Most Important Rule</p>
          <p className="text-red-700 leading-relaxed">In any insurable incident — injury, property damage, a liability claim, a data breach — your <strong>first call should always be to your insurer</strong>, not your lawyer, not your board, not your PR consultant. Your insurer activates the response. Delaying this call can affect your entitlement to cover.</p>
        </div>

        <div className="prose max-w-none">
          <h2>Step 1 — Contact Your Insurer Immediately</h2>
          <p>Every policy includes an insurer contact number for claims. Call this number as soon as you become aware of any incident that may give rise to a claim. Don't wait to assess whether it will definitely result in a claim — notify promptly and let the insurer advise.</p>
          <p>For public liability incidents (someone is injured at your event or premises), notify your insurer before engaging with the injured party's legal representatives. Do not admit liability or make any payment without insurer authority.</p>

          <h2>Step 2 — Document Everything</h2>
          <p>From the moment of an incident:</p>
          <ul>
            <li>Photograph or video the scene (for property or liability incidents)</li>
            <li>Get names and contact details of any witnesses</li>
            <li>Write a contemporaneous account of what happened — as soon as possible while details are fresh</li>
            <li>Preserve any evidence relevant to the incident (damaged property, records, communications)</li>
            <li>Do not alter or clean the scene before the insurer or their representative has assessed it</li>
          </ul>

          <h2>Step 3 — Contact Your Broker</h2>
          <p>Once you've notified your insurer, contact your broker. Your broker acts as your advocate throughout the claims process — they will:</p>
          <ul>
            <li>Confirm the notification has been received and logged correctly</li>
            <li>Help you understand what's covered and what the process will look like</li>
            <li>Manage communication between you and the insurer throughout the claim</li>
            <li>Advocate for a fair and prompt outcome on your behalf</li>
            <li>Follow up until the claim is fully resolved</li>
          </ul>

          <h2>Types of Claims — Specific Guidance</h2>

          <h3>Public Liability Claims</h3>
          <p>If someone is injured or their property is damaged in connection with your organisation's activities: notify your insurer immediately. Do not discuss liability with the claimant or their representatives without insurer authority. Provide your insurer with all documentation of the incident.</p>

          <h3>Property Claims</h3>
          <p>For building or contents damage: notify your insurer before commencing any repairs (emergency repairs to prevent further damage are generally permitted). The insurer will appoint a loss adjuster to assess the damage. Obtain multiple quotes for repairs if requested by your insurer.</p>

          <h3>Trustee / D&O Liability Claims</h3>
          <p>If a trustee or board member receives a claim, letter of demand, or is informed of regulatory investigation: notify your insurer immediately, even before the claim is formalised. Do not respond to the claimant or regulatory body without insurer authority. Early notification is critical for D&O claims.</p>

          <h3>Cyber / Privacy Breach</h3>
          <p>If you suspect a data breach or cyber incident: notify your cyber insurer immediately. Do not attempt to remediate the incident without specialist guidance — your insurer will connect you with their cyber incident response team. The Privacy Act 2020 requires notification to the Privacy Commissioner of notifiable breaches — your insurer will advise on this obligation.</p>

          <h2>After the Claim</h2>
          <p>Once a claim is resolved, review your risk management practices with your broker. Significant claims often reveal gaps in procedures or controls that can be addressed to reduce the likelihood of recurrence. Your broker can arrange a post-claim review.</p>
        </div>

        <div className="mt-10 bg-emerald-50 border-2 border-emerald-600 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Need a Broker in Your Corner?</h2>
          <p className="text-slate-600 mb-6">A good broker is invaluable at claims time. Tell us about your organisation and we'll match you with a specialist who'll be there when it matters.</p>
          <Link href="/contact/" className="inline-block px-8 py-4 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition">Get Matched with a Broker →</Link>
        </div>
      </main>
    </>
  );
}
