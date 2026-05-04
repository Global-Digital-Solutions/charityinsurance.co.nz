'use client';

interface QuoteFormProps {
  compact?: boolean;
  orgType?: string;
}

export default function QuoteForm({ compact = false, orgType = '' }: QuoteFormProps) {

  if (compact) {
    return (
      <form action="https://shiny-bush-41cd.darinbutler.workers.dev" method="POST" className="space-y-3">
        <input type="hidden" name="_subject" value="New Charity Insurance Quote — CharityInsurance.co.nz" />
        <input type="hidden" name="_cc" value="butlerdarin@gmail.com" />
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_next" value="https://charityinsurance.co.nz/thank-you/" />
        <input type="hidden" name="_template" value="table" />
        {orgType && <input type="hidden" name="org_type" value={orgType} />}
        <input type="text" name="name" required placeholder="Your name" className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none" />
        <input type="text" name="organisation" required placeholder="Organisation name" className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none" />
        <input type="email" name="email" required placeholder="Email address" className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none" />
        <input type="tel" name="phone" placeholder="Phone (optional)" className="w-full px-3 py-2.5 border border-slate-300 rounded-lg text-sm focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none" />
        <button type="submit" className="w-full py-3 bg-emerald-600 text-white font-bold rounded-lg hover:bg-emerald-700 transition text-sm">
          Get My Quote →
        </button>
        <p className="text-xs text-slate-500 text-center">No obligation. Brokers we personally know and trust.</p>
      </form>
    );
  }

  return (
    <form action="https://shiny-bush-41cd.darinbutler.workers.dev" method="POST" className="bg-white rounded-2xl border-2 border-emerald-100 p-8 shadow-lg">
      <h3 className="text-xl font-bold text-slate-900 mb-2">Tell us about your organisation</h3>
      <p className="text-slate-500 text-sm mb-6">The more you share, the better we can match you. Plain-English options back within one business day — no hard sell, ever.</p>
      <input type="hidden" name="_subject" value="New Charity Insurance Quote — CharityInsurance.co.nz" />
      <input type="hidden" name="_cc" value="butlerdarin@gmail.com" />
      <input type="hidden" name="_captcha" value="false" />
      <input type="hidden" name="_next" value="https://charityinsurance.co.nz/thank-you/" />
      <input type="hidden" name="_template" value="table" />
      {orgType && <input type="hidden" name="org_type" value={orgType} />}
      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">Your Name *</label>
          <input type="text" name="name" required placeholder="Jane Smith" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">Organisation Name *</label>
          <input type="text" name="organisation" required placeholder="Hillside Community Trust" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">Email Address *</label>
          <input type="email" name="email" required placeholder="jane@hillsidetrust.org.nz" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">Phone Number</label>
          <input type="tel" name="phone" placeholder="021 123 4567" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition" />
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">Organisation Type</label>
          <select name="org_type_select" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition bg-white">
            <option value="">Select type</option>
            <option>Registered Charity</option>
            <option>Sports Club / Association</option>
            <option>Church / Religious Organisation</option>
            <option>Community Group / Trust</option>
            <option>School / Education Board</option>
            <option>Aged Care Organisation</option>
            <option>Social Services</option>
            <option>Arts & Culture Organisation</option>
            <option>Environmental / Conservation Group</option>
            <option>Youth Organisation</option>
            <option>Animal Welfare Charity</option>
            <option>Disability Support Organisation</option>
            <option>Marae / Iwi Trust</option>
            <option>Foundation / Philanthropic Trust</option>
            <option>Other Not-for-Profit</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-semibold text-slate-700 mb-1">Annual Revenue (approx.)</label>
          <select name="revenue" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition bg-white">
            <option value="">Select range</option>
            <option>Under $100K</option>
            <option>$100K – $500K</option>
            <option>$500K – $2M</option>
            <option>$2M – $5M</option>
            <option>$5M+</option>
          </select>
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold text-slate-700 mb-1">Cover You're Interested In</label>
        <select name="cover_interest" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition bg-white">
          <option value="">Select primary cover</option>
          <option>Public Liability</option>
          <option>Trustee / D&O Liability</option>
          <option>Volunteer Personal Accident</option>
          <option>Professional Indemnity</option>
          <option>Full Package (multiple covers)</option>
          <option>Not sure — need advice</option>
        </select>
      </div>
      <div className="mb-4">
        <label className="block text-sm font-semibold text-slate-700 mb-1">Current Insurance Status</label>
        <select name="current_cover" className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition bg-white">
          <option value="">Select one</option>
          <option>No current cover — looking for first policy</option>
          <option>Yes, looking to compare / switch</option>
          <option>Yes, policy renewing soon</option>
          <option>Unsure what we currently have</option>
        </select>
      </div>
      <div className="mb-6">
        <label className="block text-sm font-semibold text-slate-700 mb-1">Anything else we should know?</label>
        <textarea name="message" rows={3} placeholder="e.g. main activities, number of volunteers, buildings or assets you need covered..." className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent outline-none transition resize-none" />
      </div>
      <button type="submit" className="w-full py-4 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition text-lg">
        {"Let's Sort Your Cover →"}
      </button>
      <p className="text-sm text-slate-500 mt-3 text-center">No obligation. Your details go to a broker we personally know and trust — back within one business day.</p>
    </form>
  );
}
