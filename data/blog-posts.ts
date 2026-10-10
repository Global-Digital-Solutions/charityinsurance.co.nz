export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
  image: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'trustee-liability-charity-nz',
    title: 'Are Your Trustees Personally Liable? What Every NZ Charity Should Know',
    excerpt: 'Charitable status is not a legal shield. Trustees and committee members can face personal financial exposure for governance decisions — and most don\'t know it until something goes wrong.',
    date: '2026-04-28',
    author: 'The CharityInsurance Crew',
    readTime: '7 min read',
    category: 'Governance & Compliance',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1920&q=80',
    content: `
<p>Ask most charity trustees whether they could personally lose money if their organisation is sued, and the answer is usually: "We\'re a charity — that can\'t happen to us." Unfortunately, it can. And it does.</p>

<h2>The Myth of Charitable Protection</h2>
<p>Charitable registration with Charities Services (charities.govt.nz) provides tax benefits and public credibility. It does not provide personal liability protection to individual trustees, board members, or committee members. That protection requires something else: insurance.</p>

<p>Under New Zealand law, trustees of incorporated and unincorporated charitable organisations can face personal liability for:</p>
<ul>
<li>Governance decisions that lead to financial loss</li>
<li>Employment disputes — including personal grievance claims against the organisation</li>
<li>Health and safety failures under the Health and Safety at Work Act 2015</li>
<li>Privacy breaches under the Privacy Act 2020</li>
<li>Regulatory investigations by Charities Services for compliance failures</li>
<li>Wrongful acts alleged by beneficiaries, donors, or third parties</li>
</ul>

<h2>The Incorporated Societies Act 2022 Changed Things</h2>
<p>The Incorporated Societies Act 2022 — which came into full effect in 2023 — introduced significantly stronger duties for officers of incorporated societies (which includes many charities, sports clubs, and community organisations). Officers now have explicit duty-of-care obligations, and personal liability for breaches is expressly contemplated in the legislation.</p>
<p>This is a material change. Any incorporated society that hasn\'t reviewed its D&O/Trustee Liability cover since 2022 should do so promptly.</p>

<h2>What Is Trustee Liability Insurance?</h2>
<p>Trustee Liability insurance (also called Directors & Officers or D&O insurance in the commercial sector) protects individual trustees, board members, and committee members from personal financial loss arising from claims made against them in their governance roles. It covers:</p>
<ul>
<li>Legal defence costs (which can run to tens of thousands of dollars even where no wrongdoing occurred)</li>
<li>Damages awarded against the individual</li>
<li>Investigation costs from regulatory enquiries</li>
<li>Settlement costs</li>
</ul>

<h2>Real-World Scenarios</h2>
<p><strong>Scenario 1 — Employment dispute:</strong> A charity employs five paid staff. One is made redundant during a restructure. The employee files a personal grievance claim against both the organisation and the board chair personally, alleging procedural unfairness. Without Trustee Liability cover, the board chair funds their own legal defence.</p>
<p><strong>Scenario 2 — Grant mismanagement:</strong> A community trust receives a $300,000 government grant. Due to inadequate controls, a portion is misapplied to non-approved activities. Charities Services investigates and the funder seeks recovery. The trustees are named personally in the recovery action.</p>
<p><strong>Scenario 3 — H&S prosecution:</strong> A volunteer is seriously injured at a community event. Worksafe investigates and determines the organisation failed to adequately manage health and safety risks. The trustees are named in the prosecution alongside the organisation.</p>

<h2>The Cost of Cover vs. the Cost of Not Having It</h2>
<p>Trustee Liability insurance for a small to mid-sized charity typically costs between $800 and $3,000 per year depending on the organisation\'s size, activities, and revenue. The cost of an uninsured legal defence? Typically $20,000–$80,000 before a case gets anywhere near a hearing.</p>

<h2>What to Do Next</h2>
<p>Talk to a specialist charity insurance broker. They can review your current cover, identify gaps, and structure Trustee Liability insurance that fits your organisation\'s size and risk profile. If you\'re not sure whether your current policy includes D&O or Trustee Liability — check now, not when you need it.</p>
    `,
  },
  {
    slug: 'volunteer-insurance-nz-what-acc-doesnt-cover',
    title: "What ACC Doesn't Cover for Your Volunteers",
    excerpt: "ACC covers treatment for injured volunteers, but weekly compensation depends on earnings, mental injury cover is narrow, and overseas treatment costs are excluded. Here is where volunteer accident cover fits.",
    date: "2026-10-10",
    author: 'The CharityInsurance Crew',
    readTime: '7 min read',
    category: 'Volunteer Management',
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?auto=format&fit=crop&w=1920&q=80',
    content: `
<p>ACC is a no-fault scheme that covers most accidental injuries, including injuries to people who are volunteering. That is a strong foundation, but it was designed around earners, and many of the people who keep charities running are not earning. The gaps matter most to exactly the volunteers organisations rely on most.</p>

<h2>What ACC Does Cover for Volunteers</h2>
<p>A volunteer injured in an accident while helping your organisation can claim ACC in the same way as anyone else for treatment and rehabilitation. The limits appear when the injury stops someone from working, causes harm that is not physical, or happens overseas.</p>

<h2>The Gaps That Catch Organisations Out</h2>

<h3>Weekly Compensation</h3>
<p>According to <a href="https://www.acc.co.nz/im-injured/financial-support/weekly-compensation" target="_blank" rel="noopener noreferrer">ACC's weekly compensation page</a>, to receive weekly compensation a person needs to be an employee, self-employed or a shareholder-employee, and ACC pays up to 80% of their income. A volunteer who also has a paid job may therefore receive weekly compensation based on that income. A retired volunteer, a student, or a parent at home full time generally has no income for ACC to replace, so they receive treatment support but no weekly payments. For many charities that describes the most active part of the volunteer base.</p>

<h3>Mental Injury</h3>
<p>ACC's cover for mental injury is narrower than its cover for physical injury. Its <a href="https://www.acc.co.nz/assets/Policy-and-Procedure-documents/Work-related-mental-injury-policy.pdf" target="_blank" rel="noopener noreferrer">work-related mental injury policy</a> requires the injury to have been caused by a single, sudden event that occurred in the person's employment, and the policy does not address volunteers. A volunteer who experiences psychological harm after attending a traumatic event, without any physical injury, should not assume ACC will respond. That matters for organisations whose volunteers work in rescue, crisis support or disaster response.</p>

<h3>Volunteering Overseas</h3>
<p>ACC's page for <a href="https://www.acc.co.nz/im-injured/what-we-cover/if-youre-a-new-zealander-injured-overseas" target="_blank" rel="noopener noreferrer">residents injured overseas</a> says it can cover an injury that happens overseas for people ordinarily resident here, generally on trips of less than six months. It does not pay overseas treatment costs, emergency travel or disrupted travel plans, and ACC itself says travellers still need travel insurance. Charities sending volunteers offshore should arrange travel and personal accident cover for each trip.</p>

<h3>Serious and Permanent Injury</h3>
<p>Where an injury is serious or fatal, ACC's support depends on the person's circumstances, including whether they were earning. Personal accident policies instead pay benefits set out in the policy schedule, such as lump sums for death or permanent disablement, which do not depend on the volunteer's income.</p>

<h2>What Volunteer Personal Accident Insurance Provides</h2>
<p>Policy benefits vary, but cover commonly includes:</p>
<ul>
<li>a weekly benefit at a level chosen by the organisation, payable regardless of the volunteer's earnings</li>
<li>lump sum benefits for death or permanent disablement</li>
<li>contributions towards some costs that ACC does not meet</li>
<li>in some policies, cover for volunteering activities overseas</li>
</ul>
<p>Age limits, waiting periods and the definition of who counts as a volunteer differ between wordings, so read the schedule before relying on it.</p>

<h2>Who Should Consider It</h2>
<p>Any organisation that relies on volunteers should consider this cover, particularly where volunteers do physical work, work in remote places, or are largely retired or not in paid employment. That includes registered charities, community groups, sports clubs, churches, conservation groups and social service providers.</p>

<h2>Where This Sits in 2026</h2>
<p>Officer duties under the Incorporated Societies Act 2022 are now explicit, so a committee that knowingly leaves its volunteers unprotected is making a governance decision rather than an oversight. Registered charities have also just been through the first round of governance reviews required by the Charities Act 2005, which is a natural point to check whether volunteer protection has ever been formally considered. And changes to the Health and Safety at Work Act take effect on 1 April 2027, which we cover in <a href="/blog/health-and-safety-law-changes-volunteer-groups/">what volunteer groups need to know about the health and safety changes</a>.</p>
<p>If your organisation has never priced this cover, Get a Quote and a specialist will be in touch within one business day. For more on benefit structures and how blanket cover works, see our <a href="/charity-insurance/volunteer-accident-insurance/">volunteer accident insurance</a> page.</p>

<p><em>Sources: ACC, Weekly compensation; ACC, If you're a New Zealander injured overseas; ACC, Work-related mental injury policy. Checked 10 October 2026.</em></p>
`,
  },
  {
    slug: 'incorporated-societies-act-2022-insurance-implications',
    title: 'The Incorporated Societies Act 2022: What It Means for Your Insurance',
    excerpt: 'The Incorporated Societies Act 2022 introduced the most significant reform to NZ\'s community organisation law in over a century. Here\'s what changed, and why it affects your insurance programme.',
    date: '2026-04-08',
    author: 'The CharityInsurance Crew',
    readTime: '8 min read',
    category: 'Governance & Compliance',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1920&q=80',
    content: `
<p>The Incorporated Societies Act 2022 replaced legislation that had been in place since 1908 — literally over a century without meaningful reform. The new Act came into full effect in 2023 and introduced significant changes for the approximately 24,000 incorporated societies in New Zealand, many of which are registered charities, sports clubs, community organisations, and professional associations.</p>

<h2>Key Changes Under the New Act</h2>

<h3>Explicit Officer Duties</h3>
<p>The 2022 Act introduced — for the first time — explicit duties for officers of incorporated societies. Officers (which includes committee members, not just paid executives) now have legal duties to:</p>
<ul>
<li>Act in good faith and in the best interests of the society</li>
<li>Exercise care, diligence, and skill</li>
<li>Not act or agree to act in a manner that creates a substantial risk of serious loss to creditors</li>
<li>Not incur obligations the society cannot perform</li>
</ul>
<p>The key word is "legal". These are now enforceable obligations — not just best-practice guidelines.</p>

<h3>Personal Liability for Breaches</h3>
<p>Officers can be held personally liable for losses arising from breach of their duties. The Act provides for civil remedies and, in some cases, criminal liability for serious breaches. This is materially different from the 1908 Act which provided much weaker personal liability provisions.</p>

<h3>Re-registration Requirements</h3>
<p>All incorporated societies were required to re-register under the new Act by April 2026. Those that didn\'t re-register ceased to be incorporated. Re-registration required updating constitutions to meet new requirements — including provision for officer duties and conflicts of interest.</p>

<h3>Financial Reporting Requirements</h3>
<p>Enhanced financial reporting requirements now apply based on the society\'s revenue level, bringing more transparency — but also more compliance risk for societies that fail to meet these standards.</p>

<h2>The Insurance Implication</h2>
<p>The introduction of explicit, enforceable officer duties combined with personal liability provisions makes Association Liability or D&O insurance significantly more important for incorporated societies than it was under the 1908 Act.</p>

<p>Previously, the personal liability risk for committee members was largely theoretical. Under the 2022 Act, it is expressly contemplated by the legislation. Any incorporated society — whether a sports club, community trust, hobby association, or professional body — should now treat D&O/Association Liability insurance as an essential, not optional, cover.</p>

<h2>What Association Liability Insurance Covers for IS Members</h2>
<ul>
<li>Legal defence costs arising from claims against officers in their capacity as office holders</li>
<li>Damages or compensation awarded against officers personally</li>
<li>Investigation costs from regulatory enquiries (including from the Registrar of Incorporated Societies)</li>
<li>Employment-related claims against officers (personal grievances directed at the governance level)</li>
</ul>

<h2>Audit Your Current Cover</h2>
<p>If your incorporated society has D&O or Association Liability cover, check the policy wording:</p>
<ul>
<li>Are all officers and committee members named as insured persons?</li>
<li>Does the policy cover civil liability claims under statute?</li>
<li>Are investigation costs covered, not just defence costs for proceedings that have commenced?</li>
<li>Is the policy limit adequate for your society\'s assets and activities?</li>
</ul>
<p>A specialist charity and community organisation broker can review your existing policy against the new Act\'s requirements and identify any gaps.</p>
    `,
  },
  {
    slug: 'public-liability-charity-events-nz',
    title: 'Running a Charity Event? Here\'s What Your Public Liability Policy Needs to Cover',
    excerpt: 'A charity gala, fun run, or community fair carries real public liability risk. Make sure your event is properly covered — because "it\'s for a good cause" won\'t pay a personal injury claim.',
    date: '2026-03-25',
    author: 'The CharityInsurance Crew',
    readTime: '5 min read',
    category: 'Event Cover',
    image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=1920&q=80',
    content: `
<p>Charity events are where communities come together — they\'re also where things go wrong. A wet floor, a temporary structure that gives way, a car park incident, food that causes illness — the list of things that can happen at a public event is long, and the liability is real.</p>

<h2>The Starting Point: Does Your Policy Actually Cover Events?</h2>
<p>Many charities assume their annual public liability policy automatically covers all events they run. This is not always the case. Key questions to ask your broker:</p>
<ul>
<li>Does the policy cover all events, or only events at your usual premises?</li>
<li>Is there a maximum attendance limit above which events are excluded?</li>
<li>Are external venues covered, or only premises you own or lease?</li>
<li>Does the policy cover events with rides, amusements, or contractor-provided activities?</li>
<li>Is food service (including food stalls or donated food) covered under the policy?</li>
</ul>
<p>Each of these can be a gap. Each can be addressed in the policy — but only if you discuss it with your broker beforehand.</p>

<h2>Specific Risks at Charity Events</h2>

<h3>Temporary Structures</h3>
<p>Marquees, stages, bouncy castles, scaffolding — any temporary structure at your event must be set up by a competent person and inspected before use. If a structure fails and injures someone, you face a public liability claim. Some insurers require that temporary structures over a certain size be erected by certified contractors. Check your policy.</p>

<h3>Food and Product Liability</h3>
<p>If your event serves food — whether prepared on-site, donated by a local bakery, or provided by external caterers — product liability risk exists. A case of food poisoning from your charity\'s sausage sizzle can trigger a claim against your organisation. Product liability is typically included in a comprehensive public liability policy, but verify this explicitly.</p>

<h3>Third-Party Contractors</h3>
<p>If you\'re hiring entertainment, rides, food trucks, or security for your event, require that each contractor provides their own certificate of public liability insurance. If a ride operator\'s ride injures a patron, the primary claim may be against the ride operator — but claims may also be made against your organisation as event organiser. Ensure your policy covers your liability as organiser.</p>

<h3>Alcohol Service</h3>
<p>Events serving alcohol carry specific liability. If you hold a liquor licence, your insurer should be informed. Claims arising from incidents involving intoxicated attendees can be complex. Some policies specifically exclude or restrict liquor liability — discuss this clearly with your broker.</p>

<h3>Car Parks</h3>
<p>Public areas adjacent to your event — including informal car parks — are often where incidents occur. Ensure your policy covers the full footprint of your event, not just your formal premises.</p>

<h2>What If You\'re Using Council or Other Venue Space?</h2>
<p>When running an event in a public park, council venue, or third-party location, the venue operator will typically require you to provide a certificate of public liability insurance and may specify a minimum cover level ($2M, $5M, or $10M are common requirements). Your broker can issue the required certificate promptly once cover is confirmed.</p>

<h2>Event Cancellation: A Separate Risk</h2>
<p>If your event is a major fundraiser and it has to be cancelled — due to extreme weather, venue damage, or an unforeseen circumstance — event cancellation insurance covers irrecoverable costs (booking fees, marketing expenditure, deposits). This is separate from public liability and worth considering for events with significant upfront financial commitment.</p>

<h2>Before Every Event: Talk to Your Broker</h2>
<p>The simplest risk management step: call your broker before any significant event and confirm your cover. It takes minutes, and the alternative — discovering you\'re not covered after an incident — is far more costly in every sense.</p>
    `,
  },
  {
    slug: 'nz-charity-privacy-breach-what-to-do',
    title: 'Your Charity Has Suffered a Privacy Breach. What Happens Next?',
    excerpt: 'The Privacy Act 2020 requires charities to report serious breaches to the Privacy Commissioner. But what actually happens when donor or beneficiary data is compromised — and how does insurance help?',
    date: '2026-03-12',
    author: 'The CharityInsurance Crew',
    readTime: '7 min read',
    category: 'Cyber & Privacy',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1920&q=80',
    content: `
<p>The Privacy Act 2020 introduced mandatory reporting of notifiable privacy breaches for all organisations in New Zealand — including charities and not-for-profits. A breach is notifiable if it is likely to cause serious harm to the individuals affected. Here\'s what the response looks like in practice — and how insurance changes the outcome.</p>

<h2>What Counts as a Notifiable Privacy Breach?</h2>
<p>A privacy breach occurs when personal information is lost, accessed by unauthorised people, or disclosed without authority. A notifiable breach is one that has caused, or is likely to cause, serious harm. Factors relevant to serious harm include:</p>
<ul>
<li>The sensitivity of the information (health data, financial information, and location data are higher risk)</li>
<li>The likely scale of disclosure</li>
<li>Whether the information could be used for identity theft or fraud</li>
<li>The vulnerability of the people affected (beneficiaries of charities are often vulnerable people)</li>
</ul>
<p>Most charities hold sensitive data: donor financial information, beneficiary personal and health details, volunteer records. A breach involving any of this information is likely to meet the threshold for notifiable breach.</p>

<h2>The Mandatory Reporting Timeline</h2>
<p>Once you become aware of a notifiable breach, you must:</p>
<ol>
<li>Notify the Office of the Privacy Commissioner as soon as practicable</li>
<li>Notify the individuals whose information was compromised (unless impractical or notification would cause greater harm)</li>
</ol>
<p>There is no defined time limit in the Act for notification — "as soon as practicable" applies. The Privacy Commissioner can investigate compliance and can make recommendations or determinations. The Human Rights Review Tribunal can award damages where breaches caused harm.</p>

<h2>The True Cost of a Privacy Breach</h2>
<p>The visible costs of a privacy breach for a charity include:</p>
<ul>
<li><strong>Forensic investigation:</strong> Understanding what happened and what data was accessed costs $5,000–$50,000+ depending on IT complexity</li>
<li><strong>Legal advice:</strong> Regulatory counsel during a Privacy Commissioner investigation costs $10,000–$50,000+</li>
<li><strong>Individual notification:</strong> Drafting and sending notification to hundreds or thousands of donors or beneficiaries costs time and money</li>
<li><strong>Credit monitoring:</strong> Where financial data was compromised, providing credit monitoring to affected individuals is best practice</li>
<li><strong>Reputational damage:</strong> Donor trust, once lost, is hard to rebuild. Fundraising revenue can decline materially following a publicised breach</li>
</ul>

<h2>How Cyber Insurance Helps</h2>
<p>Cyber insurance for charities covers the specific costs of a privacy incident:</p>
<ul>
<li>Forensic investigation to establish what happened</li>
<li>Legal and regulatory costs during Privacy Commissioner investigation</li>
<li>Notification costs to affected individuals</li>
<li>Credit monitoring provision</li>
<li>PR and reputation management costs</li>
<li>Business interruption (if your systems are offline during incident response)</li>
</ul>
<p>Without cyber insurance, all of these costs fall on the organisation. For small charities with limited reserves, a significant breach response can be existential.</p>

<h2>Prevention: The First Line of Defence</h2>
<p>While insurance covers the costs of a breach, prevention is always preferable. Core steps for charities:</p>
<ul>
<li>Use a reputable donor management system with strong access controls</li>
<li>Enable multi-factor authentication on all accounts that hold personal data</li>
<li>Limit data access to those who need it</li>
<li>Have a written data retention and disposal policy</li>
<li>Train all staff and regular volunteers on privacy obligations</li>
<li>Have a documented breach response plan — knowing who to call and what to do in the first 24 hours is critical</li>
</ul>

<h2>Getting the Right Cyber Cover for Your Charity</h2>
<p>Cyber insurance for charities varies significantly in quality and coverage. A specialist broker can help you find a policy that covers the full response cycle — not just data restoration, but the regulatory, legal, and notification costs that represent the true cost of a breach for a charitable organisation.</p>
    `,
  },
  {
    slug: 'sports-club-insurance-nz-complete-guide',
    title: 'The Complete Guide to Insurance for NZ Sports Clubs',
    excerpt: 'Sports clubs face a unique mix of public liability, volunteer, equipment, and governance risks. This guide covers everything you need to know about protecting your club — from junior grades to senior competitions.',
    date: '2026-02-28',
    author: 'The CharityInsurance Crew',
    readTime: '9 min read',
    category: 'Sector Guides',
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?auto=format&fit=crop&w=1920&q=80',
    content: `
<p>New Zealand\'s sports sector is one of the country\'s great social assets. From junior cricket clubs to veteran rugby sides, from surf lifesaving associations to mountain biking clubs, sport brings communities together and underpins physical wellbeing nationwide. Behind the scenes, sports clubs are typically volunteer-run incorporated societies with limited budgets and significant liability exposure. Getting the right insurance is both a legal obligation and a practical necessity.</p>

<h2>The Core Insurance Requirements for Sports Clubs</h2>

<h3>Public Liability</h3>
<p>Public liability is non-negotiable for any sports club. If a spectator is injured at your ground, a ball breaks a car window, or a visitor slips on your premises, a liability claim can follow. Public liability insurance covers your legal defence costs and any damages awarded.</p>
<p>Coverage levels: Most sports clubs should carry at least $1M to $2M in public liability. Clubs that own their grounds or have large public attendance at events should consider $5M+. Some national sporting bodies require minimum cover levels for affiliated clubs.</p>

<h3>Association Liability (D&O)</h3>
<p>Your club\'s committee members are personally exposed under the Incorporated Societies Act 2022. Association Liability (equivalent to D&O) protects committee members against personal claims arising from their governance role. This includes:</p>
<ul>
<li>Employment disputes involving club staff or paid coaches</li>
<li>Financial mismanagement allegations</li>
<li>Health and safety failures</li>
<li>Disputes with members arising from committee decisions</li>
</ul>

<h3>Voluntary Workers Accident</h3>
<p>Most sports club volunteers are covered by ACC for physical injuries. But as discussed in our full article on volunteer insurance, ACC weekly compensation is only available to people who were employees, self-employed or shareholder-employees when injured, so retired, student and other non-earning volunteers receive treatment support but no income replacement. Voluntary Workers Accident insurance supplements ACC with a weekly benefit that does not depend on earnings, and a specified death benefit.</p>

<h3>Property and Equipment</h3>
<p>Club equipment — uniforms, balls, training gear, timing equipment, scoreboards, maintenance machinery — represents a significant asset. Property insurance covering theft, accidental damage, and fire should be in place for all significant club property. Consider replacement value, not book value, when setting sums insured.</p>

<h2>Sport-Specific Considerations</h2>

<h3>Adventure Sports and High-Risk Activities</h3>
<p>Clubs involved in high-risk activities — climbing, white water kayaking, paragliding, motor sports — face a more complex insurance landscape. Standard public liability policies typically exclude or restrict cover for these activities. Specialist adventure sports or high-risk activity cover is required.</p>

<h3>Junior and Youth Programmes</h3>
<p>Any programme involving under-18s carries heightened duty of care obligations. Your public liability policy must specifically extend to activities with minors. Under the Children\'s Act 2014 and Vulnerable Children Act 2014, you also have police-vetting obligations for coaches and supervisors working with young people.</p>

<h3>Away Games and Regional Travel</h3>
<p>Transport of team members to away games — particularly if using club-owned vehicles or members\' private vehicles — requires specific insurance review. Club-owned vehicles should be on a motor fleet policy. Members using personal vehicles for club purposes may find their personal insurance doesn\'t extend to club use.</p>

<h3>Overseas Tours</h3>
<p>Club tours overseas require travel insurance for all participants. ACC cover does not extend offshore. Ensure travel insurance includes: medical cover, cancellation cover, and cover for the specific sports activities undertaken during the tour.</p>

<h2>National Sporting Body Requirements</h2>
<p>Many national sporting bodies (NSBs) set minimum insurance requirements for affiliated clubs. Before arranging your own insurance, check what your NSB requires. Some NSBs also provide blanket insurance schemes for affiliated clubs at preferential rates — though these are not always comprehensive and may have gaps worth noting.</p>

<h2>The Annual Review</h2>
<p>A sports club\'s activities and assets change over time. Review your insurance annually against:</p>
<ul>
<li>Any changes in the types of activities you run (new programmes, higher-risk events)</li>
<li>Significant changes in equipment value</li>
<li>Changes in the number of paid staff or volunteers</li>
<li>Any changes to your ground or facilities</li>
<li>New sponsorship or funding that may require specified cover levels</li>
</ul>
<p>A specialist sports and not-for-profit insurance broker can make this review straightforward — and ensure you\'re not paying for cover you don\'t need or missing cover you do.</p>
    `,
  },
  {
    slug: 'church-insurance-nz-unique-risks',
    title: 'Why Standard Insurance Doesn\'t Work for Churches — and What Does',
    excerpt: 'Churches and faith communities conduct a far wider range of activities than a standard insurer expects. From counselling to food pantries, heritage buildings to childcare — here\'s how to get the right cover.',
    date: '2026-02-10',
    author: 'The CharityInsurance Crew',
    readTime: '7 min read',
    category: 'Sector Guides',
    image: 'https://images.unsplash.com/photo-1438232992991-995b7058bbb3?auto=format&fit=crop&w=1920&q=80',
    content: `
<p>A New Zealand church is rarely just a place of worship. Modern faith communities operate community meals, food pantries, counselling services, youth programmes, school chaplaincy, social housing, aged care, and more. Standard commercial insurance underwriters often don\'t fully understand this breadth — and policies that don\'t account for all activities create gaps.</p>

<h2>The Breadth of What Churches Do</h2>
<p>Consider a typical mid-sized urban church in New Zealand. In any given week it might be running:</p>
<ul>
<li>Sunday worship services with 200+ attendees</li>
<li>A Tuesday community lunch for 50 people including homeless and at-risk individuals</li>
<li>A Wednesday after-school programme for 30 primary-age children</li>
<li>Thursday evening pastoral counselling sessions</li>
<li>A Friday night youth group for 40 teenagers</li>
<li>Volunteer transport of elderly congregation members to appointments</li>
</ul>
<p>Each of these activities carries a distinct risk profile. A standard commercial property and liability policy designed for a retail business will not adequately cover this range of activities.</p>

<h2>Key Covers for Faith Communities</h2>

<h3>Property — Including Heritage Buildings</h3>
<p>Many New Zealand churches occupy heritage or historic buildings. These require specialist attention because:</p>
<ul>
<li>Rebuild costs for heritage structures are significantly higher than modern construction</li>
<li>Period-appropriate materials, craftsmanship, and architectural elements must be reinstated</li>
<li>Standard replacement cost calculations are almost always insufficient</li>
</ul>
<p>A heritage reinstatement valuation is essential. Specialist underwriters (including Concordia and Lloyd\'s of London syndicates) are familiar with faith community property and can arrange appropriate cover.</p>

<h3>Counselling and Pastoral Care</h3>
<p>Any pastoral counselling or advice service — formal or informal — creates professional liability risk. If a counsellee or their family later alleges harm from advice received, professional indemnity insurance covers defence costs and any awarded damages. This applies whether the counsellor is paid or volunteer.</p>

<h3>Youth Programmes and Childcare</h3>
<p>Working with children under 18 creates obligations under the Children\'s Act 2014 — including police vetting for those in regular contact with children. Your public liability policy must specifically extend to children\'s activities. Some specialist faith insurers build safeguarding policy requirements into the coverage framework.</p>

<h3>Safeguarding and Abuse Liability</h3>
<p>This is a sensitive but critical cover. Safeguarding or abuse liability insurance covers claims arising from allegations of inappropriate conduct — physical, emotional, or sexual — by church leaders, staff, or volunteers. It pays defence costs even where allegations are unproven, and is essential for any faith community working with vulnerable people.</p>

<h3>Volunteer Transport</h3>
<p>If church volunteers drive people to services, events, or appointments using their personal vehicles, there\'s a potential coverage gap. Personal motor policies typically don\'t extend to organised group transport. A broker can arrange a voluntary vehicle use extension to fill this gap.</p>

<h2>Specialist Faith Insurance Providers in NZ</h2>
<p>New Zealand has specialist underwriting agencies and brokers who focus specifically on faith community insurance. Concordia Underwriting Agency is one example — their products are designed for the specific activities, buildings, and liability profile of churches and faith communities. Bureau Insurance is another specialist, working primarily with a range of denominations and faith organisations.</p>
<p>These specialists understand the breadth of what faith communities do. They ask the right questions and structure policies that actually cover the activities at hand — not just the worship services.</p>

<h2>The Annual Review Question</h2>
<p>Every year when your policy renews, review your activities list honestly. Have you started a new community programme? Added paid staff? Taken on a new building? Begun a social enterprise? Each of these changes your risk profile — and potentially your coverage gap. A specialist broker will ask these questions proactively at renewal.</p>
    `,
  },
  {
    slug: 'charity-property-underinsurance-nz',
    title: 'The Hidden Cost: Why Most Charity Buildings Are Underinsured',
    excerpt: 'Construction costs have risen significantly in recent years. If your charity building\'s sum insured hasn\'t kept pace, you could face a massive shortfall in the event of a total loss. Here\'s how to check — and fix it.',
    date: '2026-01-22',
    author: 'The CharityInsurance Crew',
    readTime: '6 min read',
    category: 'Property Cover',
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=1920&q=80',
    content: `
<p>If you asked 100 New Zealand community organisations whether their building was adequately insured, the vast majority would say yes. If you then asked when they last had a professional replacement cost valuation, most would struggle to answer. This disconnect — between assumed adequacy and actual coverage — is one of the most common and costly issues in the charity sector.</p>

<h2>Why Underinsurance Is So Common</h2>
<p>The most common causes of underinsurance for community buildings:</p>

<h3>Original Policy Set-Up and Not Revisited</h3>
<p>Many charities set their building sum insured when they first purchased the property or first obtained insurance — then renewed without updating the figure. A building insured for $800,000 in 2018 may cost $1.4 million to rebuild in 2026.</p>

<h3>Construction Cost Inflation</h3>
<p>New Zealand\'s construction industry experienced significant cost inflation over the 2020–2025 period. Material costs, labour costs, and subcontractor rates all increased substantially. Buildings insured at pre-inflation values are now systematically underinsured across the sector.</p>

<h3>Heritage and Special-Purpose Buildings</h3>
<p>Community halls, churches, marae, and other special-purpose buildings are particularly prone to underinsurance. Their rebuild costs are higher than standard commercial construction — but their sums insured are often based on market value (which may be lower than rebuild cost) or outdated valuations.</p>

<h3>Improvements Not Updated</h3>
<p>Renovations, extensions, upgraded heating, new roofing — any improvement to a building should be reflected in an updated sum insured. Many organisations complete improvements without telling their insurer.</p>

<h2>What Happens in a Total Loss with Underinsurance</h2>
<p>If your building is insured for $1 million but would cost $1.5 million to rebuild, the insurance payout is $1 million — leaving a $500,000 shortfall. For a charitable trust that owns its community hall outright, this $500,000 gap may be the difference between rebuilding and closing.</p>
<p>In some policies, a co-insurance or averaging clause applies — which means that if you\'re significantly underinsured, the insurer reduces all claims proportionally, not just total loss claims. This means even a partial loss payout is reduced.</p>

<h2>How to Check Whether You\'re Underinsured</h2>

<h3>Step 1 — Find Your Current Sum Insured</h3>
<p>Pull out your current policy schedule and find the building sum insured. This is the maximum amount your insurer will pay in the event of a total loss.</p>

<h3>Step 2 — Get a Replacement Cost Estimate</h3>
<p>A formal building replacement cost valuation from a registered valuer or quantity surveyor will give you an accurate rebuild estimate. Insurers typically recommend this every 3–5 years, or after significant construction cost movements.</p>
<p>Some insurers provide building cost calculators — but these should be used as a cross-check, not a substitute for a professional estimate for a complex or heritage building.</p>

<h3>Step 3 — Compare and Update</h3>
<p>If there\'s a gap between your current sum insured and the replacement cost estimate, contact your broker immediately to update your policy. The additional premium cost is almost always a fraction of the potential shortfall.</p>

<h2>Indexed Sum Insured: An Automatic Adjustment</h2>
<p>Some policies include an index-linked or CPI-adjusted sum insured that increases automatically at renewal based on construction cost inflation indices. This doesn\'t replace periodic professional valuations but does reduce the risk of the sum insured falling materially behind real-world costs between valuations.</p>
<p>Ask your broker whether an indexed sum insured is available for your property cover.</p>

<h2>The Bottom Line</h2>
<p>Getting a current replacement cost estimate is a low-cost action with potentially high consequences if not done. For charities that steward community assets on behalf of their communities, ensuring those assets are properly protected is a fundamental governance responsibility — not a nice-to-have.</p>
    `,
  },
  {
    slug: 'nfp-insurance-nz-complete-guide',
    title: 'The Complete Guide to Not-for-Profit Insurance in New Zealand',
    excerpt: 'Every NFP needs insurance, but the landscape is complex. This plain-English guide covers every cover type, who needs what, and how to find the right broker for your organisation.',
    date: '2026-05-01',
    author: 'The CharityInsurance Crew',
    readTime: '10 min read',
    category: 'Insurance Basics',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1920&q=80',
    content: `
<p>Not-for-profit insurance in New Zealand is a genuine specialist market — and the difference between a generic commercial policy and one designed for NFPs can be significant. This guide covers everything your organisation needs to know, from the core covers every charity should have to the niche products that protect specific types of organisations.</p>

<h2>Why NFPs Need Specialist Insurance</h2>
<p>Not-for-profit organisations present a risk profile that is fundamentally different from commercial businesses. They typically combine paid staff and volunteers, operate multiple activities under a single entity, rely on grant or donation income, and often manage community or heritage assets. Generic commercial insurance is built for businesses with straightforward commercial activities — it frequently contains exclusions and gaps that only become apparent when a claim is made.</p>
<p>Specialist NFP insurers like Chubb, AIG, Zurich, Berkley, and Concordia Underwriting have spent decades developing products that understand this profile. Their policies are structured to address the actual risks that charities, sports clubs, churches, and community groups face — not the risks of a retail business or professional services firm.</p>

<h2>The Core Covers Every NFP Should Consider</h2>

<h3>Public Liability Insurance</h3>
<p>Public liability insurance covers your organisation if a member of the public is injured or has their property damaged as a result of your activities or premises. This is the foundational cover for any organisation that has public contact — events, premises, programmes, or activities that involve people outside your core team. In New Zealand, public liability for NFPs typically starts at $1M and goes to $10M or more for larger organisations.</p>
<p>Many grant funders, venue hire agreements, and local authority permits require evidence of a minimum level of public liability insurance. Without it, you may be unable to access the funding or venues your organisation depends on.</p>

<h3>Trustee Liability / D&O Insurance</h3>
<p>Trustee Liability insurance (also known as Directors and Officers or D&O insurance) protects the individual trustees, board members, and committee members of your organisation from personal financial exposure arising from their governance roles. Charitable status does not protect individuals from personal liability — and the Incorporated Societies Act 2022 has made officer duties more explicit and enforceable than ever.</p>
<p>Claims against trustees can arise from employment disputes, financial mismanagement, health and safety failures, regulatory investigations, and decisions that harm beneficiaries or creditors. Defence costs alone can run to tens of thousands of dollars. Trustee Liability insurance responds to these costs so individual board members are not left to fund their own defence.</p>

<h3>Volunteer Personal Accident Insurance</h3>
<p>ACC covers most physical injuries in New Zealand, including injuries to volunteers. However, ACC has important limitations: weekly compensation is only available to people who were earning when injured, so non-earning volunteers receive no income replacement, and it doesn't cover all types of harm. Volunteer Personal Accident insurance supplements ACC, providing benefits that do not depend on earnings and covering gaps that ACC cannot address. For organisations with significant volunteer workforces, this is an important cover.</p>

<h3>Professional Indemnity Insurance</h3>
<p>Professional indemnity insurance covers claims arising from professional advice or services your organisation provides. This is relevant for any NFP that delivers counselling, budgeting advice, legal advocacy, educational services, or other professional or quasi-professional activities. The standard of care expected does not diminish because your services are delivered for free — professional indemnity covers your defence costs and any damages awarded regardless of whether a fee was charged.</p>

<h3>Employers Liability Insurance</h3>
<p>If your organisation employs paid staff, employers liability insurance is essential. It covers claims from employees for work-related injury or illness that falls outside ACC's scope. In New Zealand, employers also have obligations under the Health and Safety at Work Act 2015, and statutory liability insurance can cover defence costs in a prosecution under this legislation. Fines under the Health and Safety at Work Act 2015 cannot lawfully be insured (section 29 of that Act).</p>

<h3>Cyber Insurance</h3>
<p>The Privacy Act 2020 introduced mandatory reporting requirements for serious privacy breaches. NFPs hold significant personal data — donor records, beneficiary information, health data, employment records — that creates real cyber risk. Cyber insurance covers the costs of responding to a data breach: forensic investigation, legal advice, individual notification, regulatory engagement, and business interruption. For organisations holding sensitive data about vulnerable people, cyber insurance is no longer optional.</p>

<h3>Property and Contents Insurance</h3>
<p>Any organisation that owns or is responsible for buildings, contents, or equipment needs adequate property cover. The critical issue for NFPs is ensuring the sum insured reflects current replacement cost — not historical purchase price. Construction cost inflation in New Zealand since 2020 has been significant, and many community buildings are materially underinsured as a result.</p>

<h2>How to Find the Right Insurance Broker</h2>
<p>Not all insurance brokers understand the NFP sector. The specialist charity and not-for-profit insurance market in New Zealand is served by a relatively small number of brokers who have genuine expertise in this space. When selecting a broker, look for:</p>
<ul>
<li>Direct relationships with specialist NFP underwriters (Chubb, AIG, Zurich, Berkley, Concordia, QBE)</li>
<li>Experience with your specific type of organisation (charity, sports club, church, disability provider, etc.)</li>
<li>Willingness to explain cover in plain English without jargon</li>
<li>Proactive review at renewal to ensure cover keeps pace with your activities</li>
<li>Availability when you need to make a claim — not just at renewal</li>
</ul>
<p>CharityInsurance.co.nz matches NZ charities, sports clubs, and community organisations with personally vetted brokers who specialise in this sector. Our matching service is free and carries no obligation.</p>

<h2>What Does NFP Insurance Cost?</h2>
<p>Insurance costs vary significantly by organisation size, activity type, and the covers selected. A small sports club might pay $600–$1,500/year for basic public liability and association liability. A mid-sized charity with a full package (public liability, D&O, professional indemnity, cyber) might pay $4,000–$12,000/year. A large social service provider with commercial premises and significant staff might pay $20,000+/year.</p>
<p>The key is getting quotes from specialist underwriters through an experienced broker — not purchasing generic commercial cover from a comparison website. The difference in both price and coverage adequacy is usually material.</p>

<h2>Internal Links for Further Reading</h2>
<p>For organisation-specific guidance, see our pages on <a href="/organisations/registered-charities/">registered charity insurance</a>, <a href="/organisations/sports-clubs/">sports club insurance</a>, <a href="/organisations/churches-religious/">church insurance</a>, and <a href="/organisations/community-groups-trusts/">community group insurance</a>. For cover-type detail, see our <a href="/coverage/">coverage types guide</a>. To compare specialist insurers, see our <a href="/compare/">insurer comparison</a>.</p>
    `,
  },
  {
    slug: 'aged-care-charity-insurance-nz',
    title: 'Insurance for Aged Care Charities and Rest Homes in New Zealand',
    excerpt: 'Trust-owned aged care facilities face some of the most complex insurance requirements in the charity sector. Here is what every aged care board and trustee needs to know.',
    date: '2026-05-02',
    author: 'The CharityInsurance Crew',
    readTime: '8 min read',
    category: 'Organisation Types',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1920&q=80',
    content: `
<p>New Zealand has over 650 aged care facilities, and a significant proportion of them are operated by charitable trusts and not-for-profit governance structures. These organisations provide essential services to some of New Zealand's most vulnerable people — but the complexity of their insurance requirements is often underappreciated by the boards and trustees who govern them.</p>

<h2>The Unique Risk Profile of Aged Care Charities</h2>
<p>Not-for-profit aged care organisations face a layered risk profile that sets them apart from most other charities. They combine professional care liability (the risk of claims arising from the quality of care delivered), governance liability (the personal exposure of trustees for management decisions), significant property risk (complex facilities with specialist infrastructure), employment risk (large care workforces with high turnover), data risk (extensive sensitive health records), and statutory risk (a highly regulated operating environment with multiple pieces of legislation). Getting all of these right requires a broker with specific aged care sector experience.</p>

<h2>Professional Care Liability: The Cornerstone Cover</h2>
<p>Professional indemnity — or care malpractice — insurance is the most significant cover for aged care organisations. If a resident or their family alleges that care services were inadequate, inappropriate, or negligently delivered, a professional indemnity claim results. These claims can arise from allegations of:</p>
<ul>
<li>Medication errors or administration failures</li>
<li>Falls and physical injury resulting from inadequate supervision</li>
<li>Neglect or failure to provide adequate care</li>
<li>Pressure injury or hospital-acquired infection</li>
<li>Failure to follow care plans or resident preferences</li>
<li>Inadequate response to a resident's deteriorating condition</li>
</ul>
<p>The Health and Disability Commissioner's office receives a significant number of complaints relating to aged care services each year. Matters can escalate to the Human Rights Review Tribunal or civil courts, with defence costs and damages that make adequate professional indemnity limits essential.</p>

<h2>Trustee Liability: Protecting Your Board</h2>
<p>The individuals who serve on the boards and trusts of aged care charities carry significant personal governance liability. Decisions around resident welfare, financial management, staff employment, capital investment, and regulatory compliance all create exposure for trustees. Under the Health and Safety at Work Act 2015, governance failures that contribute to serious harm can result in personal prosecution alongside the organisation itself.</p>
<p>The Incorporated Societies Act 2022 — which applies to many aged care charitable trusts — has strengthened officer duties and made governance expectations more explicit. Trustees of aged care organisations who have not reviewed their D&O coverage since 2022 should do so as a priority.</p>

<h2>Property: Getting the Sum Insured Right</h2>
<p>Aged care facilities are among the most complex properties to insure correctly. A modern rest home or dementia care unit includes specialist infrastructure that is expensive to replace: clinical hand basins, medical gas systems, fire suppression and sprinkler systems, lifting hoists, nurse call systems, environmental monitoring, and specialist fitout throughout. The cost of rebuilding an aged care facility per square metre is significantly higher than a standard commercial building.</p>
<p>Organisations that insure their buildings at standard commercial replacement rates — or that haven't had a professional valuation in five or more years — are likely underinsured. A specialist quantity surveyor who understands healthcare facility reinstatement should be engaged to provide a current replacement cost estimate before your next renewal.</p>

<h2>Cyber Insurance: Essential for Health Data Holders</h2>
<p>Aged care facilities hold extensive and highly sensitive resident data: health histories, medication records, financial information, cognitive assessments, and family contact details. The Privacy Act 2020 classifies health information as sensitive personal information and requires mandatory notification to the Privacy Commissioner and affected individuals in the event of a serious breach.</p>
<p>The costs of responding to a data breach — forensic investigation, legal advice, individual notification (which can be substantial for a facility with hundreds of current and former residents), and regulatory engagement — can easily exceed $100,000. Cyber insurance is not a nice-to-have for aged care organisations; it is a core risk management tool.</p>

<h2>Regulatory and Statutory Liability</h2>
<p>Aged care organisations operate under multiple pieces of legislation that create statutory liability exposure: the Health and Safety at Work Act 2015, the Privacy Act 2020, the Health and Disability Commissioner Act 1994, the Residential Care and Disability Support Services Standards, and the Vulnerable Children Act 2014 (for staff working with residents with cognitive impairment who may be considered vulnerable). Statutory liability insurance covers defence costs in regulatory proceedings, even where the ultimate outcome is favourable, and some fines and penalties where the law allows them to be insured. Fines under the Health and Safety at Work Act 2015 cannot lawfully be insured.</p>

<h2>Getting the Right Broker</h2>
<p>Specialist aged care insurance requires a broker who understands both the healthcare sector and the not-for-profit governance structure. The combination of professional liability, governance liability, complex property, and health data risk requires bespoke structuring — not an off-the-shelf charity package.</p>
<p>CharityInsurance.co.nz can match your aged care organisation with a broker who has genuine experience in this space. Our matching service is free, and we only recommend brokers we know personally. <a href="/contact/">Get in touch today</a>.</p>
    `,
  },
  {
    slug: 'marae-insurance-nz',
    title: 'Marae and Iwi Trust Insurance: What Every Kaitiaki Should Know',
    excerpt: 'Marae and iwi trusts manage assets of profound cultural and financial significance. Insurance that protects those assets — from wharenui to commercial farms — requires specialist advice.',
    date: '2026-05-02',
    author: 'The CharityInsurance Crew',
    readTime: '7 min read',
    category: 'Organisation Types',
    image: 'https://images.unsplash.com/photo-1524494914823-8a0a5b25db48?auto=format&fit=crop&w=1920&q=80',
    content: `
<p>Marae and iwi trusts occupy a distinctive place in New Zealand's community and charitable landscape. They manage assets of profound cultural, spiritual, and economic significance — from the wharenui and wāhi tapu of the marae complex to farms, commercial properties, fisheries quota, and papakāinga housing. The insurance needs of these organisations reflect this complexity, and generic commercial or charity policies rarely provide adequate protection.</p>

<h2>Understanding the Legal Structures</h2>
<p>The first step in any insurance review for a marae or iwi organisation is understanding the applicable legal structure. Different structures create different governance liability profiles and different insurance needs:</p>
<ul>
<li><strong>Māori incorporations</strong> under Te Ture Whenua Māori Act 1993 have trustees with significant governance obligations to beneficial owners</li>
<li><strong>Post-settlement governance entities (PSGEs)</strong> managing Treaty settlement assets have complex commercial, cultural, and governance responsibilities</li>
<li><strong>Marae committees and incorporated societies</strong> fall under the Incorporated Societies Act 2022 and carry officer duty obligations</li>
<li><strong>Charitable trusts with Māori purposes</strong> are subject to the Charities Act 2005 and the Trusts Act 2019</li>
</ul>
<p>Each of these structures has different governance liability exposure, different reporting obligations, and different insurance implications. A specialist broker will identify the applicable structure and ensure cover is appropriate.</p>

<h2>Insuring Wharenui and Marae Buildings</h2>
<p>The buildings of the marae complex — wharenui, wharekai, wharepaku, and other structures — present a unique insurance challenge. Their significance is not purely financial: they represent whakapapa, history, and community identity. When they are damaged, the loss cannot be measured in replacement cost alone.</p>
<p>Despite this, adequate financial protection must be in place. For wharenui and other culturally significant buildings, a sum insured based on standard construction rates will almost certainly be inadequate. The reinstatement of carved pou, tukutuku panels, kōwhaiwhai ceilings, and other taonga features requires specialist craftspeople — kaiwhakairo, kairaranga — whose skills are not reflected in standard building cost rates.</p>
<p>Heritage and cultural reinstatement cover, arranged through specialist underwriters including some Lloyd's syndicates, is the appropriate solution. This provides agreed-value cover that reflects the actual cost of reinstatement using culturally appropriate methods and materials.</p>

<h2>Public Liability for Hui and Tangihanga</h2>
<p>Marae host gatherings of significant scale — hui, tangihanga, kapa haka events, and community celebrations that can draw hundreds or thousands of people. Each of these events creates public liability exposure. If a visitor is injured on the marae grounds, in the wharenui, or during an event, a public liability claim can arise.</p>
<p>Food served at hui and tangihanga also creates product liability exposure. Most marae public liability policies will include this, but it is worth confirming explicitly with your broker — particularly for large-scale events involving external caterers or fundraising food sales.</p>

<h2>Commercial Assets: Farms, Property, and Enterprises</h2>
<p>Many iwi and large Māori trusts manage commercial assets alongside their cultural and charitable activities. These might include:</p>
<ul>
<li>Farm operations — requiring rural liability, farm buildings, livestock, and machinery cover</li>
<li>Commercial property — requiring commercial building, public liability, and loss of rent cover</li>
<li>Fisheries and aquaculture — requiring marine liability and commercial marine property cover</li>
<li>Tourism and hospitality ventures — requiring public liability, professional indemnity, and business interruption</li>
<li>Forestry operations — requiring specific forestry liability and property cover</li>
</ul>
<p>Each of these activities requires specific insurance consideration that is distinct from charitable and community activity cover. A comprehensive insurance programme for an iwi or large Māori organisation requires a broker who can address the full spectrum without gaps between commercial and charitable covers.</p>

<h2>Trustee Liability for Māori Governance Structures</h2>
<p>The governance obligations of trustees of Māori organisations are significant. Trustees of Māori incorporations under Te Ture Whenua Māori Act have duties of care and loyalty to their beneficial owners. PSGEs managing Treaty settlement assets carry governance responsibilities commensurate with the scale of those assets. Where structures are incorporated societies under the Incorporated Societies Act 2022, officer duties are explicit and personal liability for governance failures is contemplated.</p>
<p>D&O or Trustee Liability insurance protects the individuals who serve in these governance roles from personal financial exposure arising from claims related to their governance decisions. Given the scale of assets many iwi organisations manage, adequate indemnity limits are important — $1M or $2M may be insufficient for larger organisations managing multi-million-dollar asset bases.</p>

<h2>Finding the Right Broker</h2>
<p>Specialist insurance for marae and iwi organisations requires a broker with experience across both the Māori land and trust sector and the specialist NFP insurance market. CharityInsurance.co.nz can match your organisation with a personally vetted broker who understands the unique considerations of Māori governance and cultural asset protection. <a href="/contact/">Contact us for a free referral</a>.</p>
    `,
  },
  {
    slug: 'disability-support-insurance-nz',
    title: 'Insurance for Disability Support Organisations in New Zealand',
    excerpt: 'Not-for-profit disability service providers face complex care liability, Whaikaha contract requirements, and sensitive data obligations. Here is what your board needs to know.',
    date: '2026-05-03',
    author: 'The CharityInsurance Crew',
    readTime: '7 min read',
    category: 'Organisation Types',
    image: 'https://images.unsplash.com/photo-1573497620053-ea5300f94f21?auto=format&fit=crop&w=1920&q=80',
    content: `
<p>New Zealand's disability support sector is predominantly delivered by not-for-profit organisations — community-based providers, iwi health organisations, and charitable trusts that hold contracts with Whaikaha (Ministry of Disabled People), the Ministry of Social Development, and Health New Zealand. These organisations deliver essential support to tens of thousands of New Zealanders with physical, intellectual, sensory, and psychosocial disabilities.</p>
<p>The insurance requirements of disability support providers are more complex than most other NFP types — reflecting the professional nature of care delivery, the sensitivity of the data held, and the contractual obligations imposed by government funders.</p>

<h2>Care Liability: Your Most Important Cover</h2>
<p>Care liability — also called professional indemnity for care providers — is the cornerstone insurance cover for disability support organisations. It covers claims arising from the quality of care and support services your workers deliver. If a disabled person or their family alleges that support was inadequate, inappropriate, or negligently provided, a care liability claim results.</p>
<p>The Health and Disability Commissioner's office handles complaints about disability support services and can refer matters to the Director of Proceedings for action before the Human Rights Review Tribunal. Civil claims are also possible. Defence costs — even for matters that are ultimately resolved in the organisation's favour — can be substantial. An adequate professional indemnity limit is not a nice-to-have; it is a fundamental operational requirement.</p>
<p>When reviewing your professional indemnity policy, pay attention to:</p>
<ul>
<li>The retroactive date — claims can be made years after the services were delivered</li>
<li>Coverage of residential and overnight support activities</li>
<li>Coverage of volunteer support workers alongside employed staff</li>
<li>Alignment between your policy limit and the scale of your service delivery</li>
</ul>

<h2>Whaikaha and MSD Contract Requirements</h2>
<p>Government contracts for disability support services specify minimum insurance requirements as a condition of funding. These vary by contract type and service specification, but typically include:</p>
<ul>
<li>Minimum public liability levels (often $2M or $5M)</li>
<li>Professional indemnity / care liability at specified minimum levels</li>
<li>Employers liability</li>
<li>In some cases, specific requirements around motor fleet cover for client transportation</li>
</ul>
<p>A broker experienced with disability sector funding contracts can review each contract your organisation holds and ensure your insurance programme satisfies every stated requirement. Non-compliance with insurance requirements is a contract breach that can result in funding suspension — a risk no disability provider can afford.</p>

<h2>Cyber Insurance: Non-Optional for Health Data Holders</h2>
<p>Disability support organisations hold some of the most sensitive personal data in the NFP sector. Support plans, health assessments, medication information, behavioural histories, family contact details, and financial information relating to disability allowances and NASC allocations all constitute sensitive personal information under the Privacy Act 2020.</p>
<p>The Privacy Act requires mandatory notification of serious privacy breaches to both the Privacy Commissioner and affected individuals. For a disability provider supporting hundreds of clients, the cost of individual notification alone can be significant. Add forensic investigation, legal advice, regulatory engagement, and operational disruption from a cyber incident, and the total cost of an uninsured breach can easily exceed $200,000.</p>
<p>Cyber insurance is not a luxury add-on for disability support organisations. It is an essential component of responsible risk management for any organisation holding this volume and sensitivity of personal data.</p>

<h2>Motor Fleet: Client Transportation Risks</h2>
<p>Many disability support providers transport clients in organisation-owned vehicles — taking people to day programmes, medical appointments, recreational activities, and social outings. This client transportation activity creates specific motor insurance requirements:</p>
<ul>
<li>The policy must specifically cover client transportation use</li>
<li>Mobility equipment (wheelchairs, hoists, communication devices) inside the vehicle needs property cover</li>
<li>Support workers who use their own vehicles to transport clients need a hired-and-non-owned vehicle endorsement on the organisation's policy (personal vehicle insurance almost certainly won't cover this use)</li>
</ul>

<h2>Employment Liability in a High-Turnover Sector</h2>
<p>Disability support is characterised by high staff turnover, and high turnover creates elevated employment liability risk. Personal grievance claims, unfair dismissal allegations, and discrimination complaints arise more frequently in environments where employment relationships are frequently beginning and ending. Employers liability combined with management liability insurance provides a defence and settlement fund for employment-related claims — protecting the organisation from financial consequences that are an unfortunate but predictable feature of the sector.</p>

<h2>Getting the Right Specialist Advice</h2>
<p>The complexity of disability support insurance requires a broker who understands both the sector's regulatory environment and the specialist NFP insurance market. CharityInsurance.co.nz matches disability support providers with personally vetted brokers who have genuine experience in this space. <a href="/contact/">Contact us for a free referral</a> — we come back within one business day.</p>
    `,
  },
  {
    slug: 'community-event-insurance-nz',
    title: 'Event Insurance for NZ Charities and Community Groups',
    excerpt: 'Running a charity gala, community market, sports tournament, or fundraising event? Here is everything you need to know about event insurance in New Zealand.',
    date: '2026-05-03',
    author: 'The CharityInsurance Crew',
    readTime: '6 min read',
    category: 'Insurance Basics',
    image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1920&q=80',
    content: `
<p>Fundraising galas, community markets, sports tournaments, school fairs, charity runs, and cultural festivals are central to how New Zealand charities and community groups generate income, build community, and fulfil their charitable purposes. But each event creates real liability exposure — and many organisations discover too late that their standard charity policy doesn't automatically cover every event they run.</p>

<h2>Does Your Existing Policy Cover Events?</h2>
<p>Whether your existing charity or not-for-profit insurance covers a specific event depends on several factors. The key questions to ask your broker before any significant event are:</p>
<ul>
<li>Is the event at your usual premises, or at an external venue?</li>
<li>Does the event involve activities not normally listed on your policy?</li>
<li>What is the maximum attendance expected?</li>
<li>Will you be serving food or alcohol?</li>
<li>Will there be third-party contractors, performers, or vendors?</li>
<li>Does the event involve temporary structures, amusement rides, or elevated platforms?</li>
<li>Is there significant financial commitment (deposits, venue hire, entertainment fees) that would be irrecoverable if the event is cancelled?</li>
</ul>
<p>If the answer to any of these is yes, or if you're uncertain, speak to your broker before the event — not after something goes wrong.</p>

<h2>Event Public Liability: The Essential Cover</h2>
<p>Public liability insurance is the core cover for any community event. It responds if a member of the public is injured or has their property damaged as a result of your event. Common event liability claims include:</p>
<ul>
<li>A visitor trips and falls on a slippery surface or temporary structure</li>
<li>A vendor's equipment causes injury to a bystander</li>
<li>A flying ball or projectile damages a spectator's property</li>
<li>A temporary structure (stage, marquee, fencing) fails and injures people</li>
<li>A child is injured in an activity run by your organisation</li>
</ul>
<p>Most charity and NFP public liability policies include coverage for events at the organisation's usual premises and for events that fall within the organisation's normal activities. However, events at external venues, unusually large events, or events involving non-standard activities may require specific endorsement or a standalone event policy.</p>

<h2>Food at Events: Product Liability</h2>
<p>If your event involves food service — whether homemade goods at a bake stall, a barbecue lunch, or catered meals — product liability cover is essential. Standard public liability policies often exclude food product liability unless specifically endorsed. If a person becomes ill from food served at your event, a claim can arise regardless of whether the food was prepared by your volunteers or purchased from an external supplier and redistributed.</p>
<p>Check your policy explicitly for food product liability coverage before any event involving food service. If it's not there, ask your broker to add it.</p>

<h2>Alcohol at Events: The Liquor Licence Consideration</h2>
<p>Events serving alcohol require a liquor licence in New Zealand, and insurers will want to know if alcohol is being served at an event. Some liability policies have endorsements or exclusions relating to alcohol service. Confirm with your broker that your event liability cover applies where alcohol is served, and ensure you are compliant with licence conditions — both from a legal and insurance perspective.</p>

<h2>Temporary Structures: Get It in Writing</h2>
<p>Temporary structures — marquees, stages, scaffolding, audience barriers, carnival rides — create specific liability and property insurance considerations. If a third-party contractor is providing these structures, ensure they have their own public liability insurance and obtain their certificate of insurance before the event. If your organisation is responsible for the structure's safety, ensure your event liability cover specifically includes temporary structure liability.</p>

<h2>Event Cancellation Insurance</h2>
<p>For events with significant financial commitments — a formal fundraising gala with a venue deposit, entertainment fees, catering costs, and marketing spend — event cancellation insurance is worth serious consideration. If the event cannot proceed due to extreme weather, venue damage, key performer cancellation, or other unforeseen events, event cancellation insurance reimburses your irrecoverable costs.</p>
<p>This is particularly important for events that generate significant revenue for your organisation. Losing both the event income and the sunk costs of event preparation can be financially devastating for a small charity. Event cancellation insurance mitigates this risk.</p>

<h2>Venue Requirements</h2>
<p>Many external venues require event organisers to provide a certificate of insurance showing minimum public liability cover — typically $1M, $2M, or $5M — before they will confirm the booking. Your broker can issue this certificate quickly once appropriate cover is in place. For recurring events, it's worth maintaining a file of venue insurance requirements so you can confirm cover is adequate before booking.</p>

<h2>How to Ensure You're Covered</h2>
<p>The single most important step is to contact your broker before any significant event — not after. Give them the event details: venue, expected attendance, activities, food and alcohol service, contractors involved, and any significant financial commitments. A good broker will confirm whether your existing policy covers the event, identify any gaps, and arrange additional cover if needed. This conversation typically takes less than 15 minutes and can save significant financial and legal headache.</p>
<p>If your organisation doesn't have a specialist NFP broker, <a href="/contact/">CharityInsurance.co.nz can match you with one</a> — free, no obligation, within one business day.</p>
    `,
  },
  {
    slug: 'incorporated-societies-re-registration-what-happened',
    title: 'The Re-registration Deadline Has Passed: What Now?',
    excerpt: 'The Incorporated Societies Act 2022 required all ~24,000 societies to re-register by 5 April 2026. Many missed it — and the consequences for officers are serious.',
    date: '2026-08-07',
    author: 'Sarah Connell',
    readTime: '8 min read',
    category: 'Governance & Compliance',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1920&q=80',
    content: `
<p>The deadline passed on 5 April 2026. Every incorporated society in the country — the sports clubs, hobby associations, professional bodies, and community organisations that form the backbone of civil society — was required to re-register under the Incorporated Societies Act 2022 by that date. Those that didn't re-register have been removed from the register of incorporated societies. Their officers now face a situation that few of them anticipated when they first put their hand up to serve on a committee.</p>

<h2>What the Deadline Actually Meant</h2>
<p>The Incorporated Societies Act 2022 replaced legislation that had been in place since 1908. The new Act introduced significant changes: explicit officer duties, personal liability provisions for governance failures, stronger financial reporting requirements, and mandatory conflict of interest processes. All existing incorporated societies were required to re-register under the new Act — updating their constitutions to meet these new requirements — by 5 April 2026.</p>
<p>As of April 2025 — a year before the deadline — fewer than 25% of New Zealand's approximately 24,000 incorporated societies had completed re-registration. The final rush in early 2026 brought more across the line, but a meaningful proportion did not make it in time.</p>

<h2>What Happens to a Society That Missed the Deadline</h2>
<p>A society that failed to re-register by 5 April 2026 has been removed from the register of incorporated societies. This has several immediate legal consequences:</p>
<ul>
<li>The society no longer has legal status as an incorporated body</li>
<li>It cannot hold property in its own name</li>
<li>It cannot enter contracts as a legal entity</li>
<li>Officers may be personally liable for debts and obligations incurred in the society's name after deregistration</li>
<li>The Registrar of Incorporated Societies has the power to apply to the court for distribution of the society's assets</li>
</ul>
<p>For many small societies, the practical consequences are manageable in the short term — they continue to operate informally. But the loss of incorporated status creates real legal and financial exposure that compounds over time.</p>

<h2>Personal Liability for Officers</h2>
<p>This is where the insurance dimension becomes critical. Officers of a society that has lost incorporated status may face personal liability for the organisation's debts and obligations. Unlike the position under the 1908 Act, the 2022 Act's officer duty framework was specifically designed to create clearer personal accountability. Officers who continue to act as though the society remains incorporated — entering contracts, spending money, making commitments — may find themselves personally exposed for those actions.</p>
<p>If your society's D&O or Association Liability policy was tied to the society's incorporated status, check with your insurer and broker immediately. Cover may not extend to a deregistered entity, leaving officers exposed at precisely the moment they need protection most.</p>

<h2>What Can Deregistered Societies Do?</h2>
<p>There are two main options for a society that missed the deadline.</p>
<p>The first is restoration. The Incorporated Societies Act 2022 includes a process for restoring a society to the register, broadly similar to the company restoration process under the Companies Act 1993. This typically involves applying to the Registrar, demonstrating that the society meets the requirements of the Act, and paying any applicable fees. A society restored under this process regains incorporated status from the date of restoration — but there is a period of lost status in the interim during which officers carry personal exposure.</p>
<p>The second option, for societies that no longer have active operations, is to wind up properly rather than simply ceasing to exist as an unregistered entity. A proper winding-up protects officers from the ongoing liability exposure of an unresolved defunct entity.</p>

<h2>Re-registration and Insurance: What to Check</h2>
<p>For societies that did re-register, now is a good time to review whether your insurance programme has been updated to reflect the new Act. The 2022 Act's explicit officer duties mean that Association Liability (D&O) cover is materially more important than it was under the 1908 Act. Policy wordings vary in how they treat statutory liability claims — claims arising directly from breach of statutory duties. Check with your broker that your policy covers civil liability claims arising from the new Act's officer duty provisions, not just common law governance claims.</p>

<h2>For Societies That Are Not Sure of Their Status</h2>
<p>The Companies Office maintains the register of incorporated societies at companiesoffice.govt.nz. You can search for your society by name to confirm its current status. If your society is not on the register, or if its status is listed as anything other than registered and active, you should seek legal advice promptly.</p>
<p>The period between losing incorporated status and either restoring it or properly winding up is the period of greatest personal liability exposure for officers. It should be as short as possible.</p>

<h2>A Governance Moment, Not Just a Legal One</h2>
<p>The re-registration requirement was not a bureaucratic exercise. It was a moment for every incorporated society to review its governance structures, update its constitution to modern standards, and ensure the people serving as officers understood their new obligations. Societies that completed this process are better governed as a result — and better placed to protect the officers who serve them.</p>
<p>For those that didn't, the restoration process is the next step. Do it promptly, seek legal advice, and review your insurance with a specialist broker as part of the process.</p>
<p>To discuss your organisation's cover after re-registration or restoration, <a href="/contact/">get a quote</a> from one of our specialist charity insurance brokers.</p>
    `,
  },
  {
    slug: 'charities-amendment-act-2023-governance-review-deadline',
    title: "Governance Reviews After 5 October: What Charities Do Now",
    excerpt: "The first round of governance reviews under section 42G of the Charities Act 2005 fell due in October 2026. What the law requires, how to confirm the review to Charities Services, and what to do if your charity missed the date.",
    date: "2026-10-10",
    author: 'The CharityInsurance Crew',
    readTime: '7 min read',
    category: 'Governance & Compliance',
    image: 'https://images.unsplash.com/photo-1553484771-371a605b060b?auto=format&fit=crop&w=1920&q=80',
    content: `
<p>Registered charities have now passed the first milestone of a duty that will recur for as long as they stay on the register. Section 42G of the <a href="https://legislation.govt.nz/act/public/2005/39/en/2026-06-06.pdf" target="_blank" rel="noopener noreferrer">Charities Act 2005</a>, inserted by the Charities Amendment Act 2023 with effect from 5 October 2023, requires every charitable entity to review its governance procedures at least every three years. That is why the sector has been working towards 5 October 2026 as the date for the first round of reviews.</p>

<p>If your board completed its review in time, the job now is to record it properly and act on what it found. If it did not, the sensible course is to complete it promptly rather than wait for the annual return to raise the question.</p>

<h2>What the Law Requires</h2>
<p>Section 42G says a charitable entity must review its governance procedures, "whether those are set out in its rules or elsewhere", at least every three years. When doing so, it must consider whether those procedures are fit for purpose, whether they help the charity achieve its charitable purpose, and whether they help it comply with the Act.</p>
<p>The Act does not prescribe a format. Charities Services' guidance on <a href="https://www.charities.govt.nz/im-a-registered-charity/running-your-charity/governance-review-requirements" target="_blank" rel="noopener noreferrer">governance review requirements</a>, updated in September 2026, confirms that its checklist is optional and that charities "do not need to send us any other review records or supporting documents."</p>

<h2>Telling Charities Services</h2>
<p>The same guidance says charities must tell Charities Services when the review is complete, and that this can be done through the Annual Return or the Update details form. The charity confirms whether it has reviewed within the last three years, gives the completion date, and provides any amended rules.</p>
<p>Boards should treat that confirmation the way they treat an insurance proposal form. A date declared on the annual return should be backed by minutes recording the discussion, a note of what was examined, and a record of anything the board resolved to change. If the review is ever questioned, those records are the evidence that it actually happened.</p>

<h2>If Your Charity Missed the Date</h2>
<p>Charities Services' guidance does not set out what happens to a charity that has not completed its first review, so there is no published penalty to cite. What is clear is that the duty is ongoing and that the annual return asks about it. A charity that has not yet reviewed should schedule the review now, complete it, and confirm it through the Update details form or its next annual return, rather than leaving a gap on the record.</p>

<h2>Who Counts as an Officer</h2>
<p>A governance review is also a good moment to check who the Act treats as an officer. Under section 4, an officer includes anyone in a position to exercise significant influence over substantial decisions of the entity. For a trust that includes the trustees; for other entities it includes members of the board or governing body and others in a position to exercise that influence, such as a chief executive or treasurer. It also includes a person given powers to make decisions that would otherwise fall to the board, whether or not they hold a formal position.</p>
<p>Many trustee liability policies define the insured persons by reference to trustees, directors or committee members. If your organisation has a chief executive, treasurer or delegated decision-maker who meets the Act's definition, ask whether they are insured persons under your policy.</p>

<h2>Disqualification of Individual Officers</h2>
<p>Section 36C allows the Charities Registration Board to disqualify an officer for up to five years where the officer has engaged in serious wrongdoing in connection with the entity, or has failed significantly or persistently to meet their obligations under the Act or any other enactment. The notice must be published on a publicly accessible website, and a disqualified person cannot be an officer of any charitable entity while disqualified.</p>
<p>For individual trustees, that makes regulatory defence a practical concern. Trustee liability cover that includes costs of responding to a regulatory investigation, not just civil claims, is worth confirming at renewal.</p>

<h2>Insurance Gaps a Review Tends to Surface</h2>
<p>Governance reviews often prompt boards to look at insurance for the first time in years. Common questions include:</p>
<ul>
<li>whether the trustee liability limit still reflects the size and activities of the organisation</li>
<li>whether volunteers are protected beyond ACC, which pays weekly compensation only to people who were employees, self-employed or shareholder-employees when injured</li>
<li>whether events are covered by the annual public liability policy or need separate arrangements</li>
<li>whether the charity holds personal information that would justify cyber cover</li>
<li>whether advice-giving activities such as budgeting, counselling or advocacy need professional indemnity cover</li>
</ul>

<h2>Next Steps</h2>
<p>Record the review, confirm it to Charities Services, and put the next one in the governance calendar no later than three years from the completion date. Then take the findings to your insurance review, because the same decisions about officers, delegations and activities shape what your policies need to cover.</p>
<p>To have your cover checked against the outcome of your governance review, <a href="/contact/">Get a Quote</a> and a Registered Financial Service Provider who works with charities will be in touch within one business day.</p>

<p><em>Sources: Charities Act 2005, sections 4, 36C and 42G; Charities Services, Governance review requirements. Checked 10 October 2026.</em></p>
`,
  },
  {
    slug: 'budget-2026-charity-tax-changes-insurance-implications',
    title: 'Budget 2026 Charity Tax Changes: What It Means for Cover',
    excerpt: 'Budget 2026 included ten tax changes affecting charities. Finance Minister Nicola Willis shelved the commercial income tax proposal in May 2025 — but other changes still affect how charities manage their finances and their insurance.',
    date: '2026-08-07',
    author: 'Sarah Connell',
    readTime: '6 min read',
    category: 'Industry News',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1920&q=80',
    content: `
<p>Budget 2026 brought ten tax-related changes for the charity sector — a significant number that reflects both ongoing policy work and the political aftermath of proposals that generated intense sector pushback. Finance Minister Nicola Willis confirmed in May 2025 that the proposal to tax charities on their commercial income would not proceed, following sustained objection from the sector. What remains in the Budget still has real implications for how charities manage their finances — and, by extension, how they should think about insurance.</p>

<h2>What Was Shelved and Why It Matters</h2>
<p>The commercial income taxation proposal — which would have applied income tax to revenue that registered charities earn from commercial activities, even where that revenue is used to fund charitable purposes — was the most controversial element of the government's earlier consultation. Charities argued persuasively that the proposal would reduce their capacity to fund frontline services without any corresponding benefit to the communities they serve.</p>
<p>The decision to shelve this proposal means that charities which operate social enterprises, trading subsidiaries, or commercial activities to cross-subsidise their charitable work retain their current tax position. For insurance purposes, this is relevant because it preserves a funding model that many charities depend on — and the commercial activities themselves create insurance obligations (public liability, employers liability, property cover for commercial premises) that are distinct from the charity's core activities.</p>

<h2>Donation Tax Credit Changes</h2>
<p>Budget 2026 did include changes to the donation tax credit regime. These changes affect the incentive structure for individual charitable giving — the tax credit that donors receive when they make qualifying donations to registered charities. The details of these changes affect charities' income forecasting and budgeting, which has a downstream effect on insurance.</p>
<p>Charities that rely significantly on individual donations to fund their operations should review their income assumptions and consider whether their current insurance programme reflects the right asset values and liability limits given their actual financial position. If donation income is expected to change materially, the charity's ability to self-fund a significant uninsured loss also changes.</p>

<h2>Tier 4 and the Combined Annual Return</h2>
<p>One of the ongoing administrative simplifications for the sector is the Tier 4 regime. Charities with annual operating payments below $140,000 can file a Combined Tier 4 Annual Return, which reduces reporting burden. From April 2025, charities with only exempt income do not need to file income tax returns at all — a meaningful administrative relief for smaller organisations.</p>
<p>Tier 4 charities are often the least well-resourced when it comes to insurance review. The same budget pressure that qualifies them for simplified reporting often means their insurance arrangements are the least likely to have been reviewed recently. A charity with $100,000 in annual turnover may still have significant assets (a community hall), significant liability exposure (public events, volunteers), and real governance risk (incorporated society officers) — none of which changes because of a Tier 4 classification.</p>

<h2>The Insurance Implication of Funding Uncertainty</h2>
<p>Any change to the tax and regulatory environment for charities affects the sector's financial confidence. When income is less predictable — whether because of donation tax credit changes, government contract reviews, or broader economic conditions — the temptation to reduce costs, including insurance costs, increases. This is the wrong response.</p>
<p>Insurance is not a cost to cut when budgets are tight; it is a financial protection that becomes more important when the organisation's ability to absorb an uninsured loss is reduced. A charity with declining reserves and a significant uninsured claim is in a far worse position than a well-insured charity facing the same claim. The right response to funding pressure is right-sizing insurance — ensuring cover reflects actual assets and risk — not removing it.</p>

<h2>Records in Te Reo Māori</h2>
<p>One positive administrative change that received less attention than it deserved: as of March 2025, charities can maintain their financial and governance records in te reo Māori. This is a meaningful recognition of the many organisations — including marae, iwi trusts, and kura — that operate primarily in te reo. For insurance purposes, the underlying obligations remain the same; the language in which records are kept does not change the need for adequate cover.</p>

<h2>Reviewing Your Insurance in the Context of Tax Changes</h2>
<p>Budget 2026's charity tax changes are a good prompt for an insurance review — not because the tax changes directly affect insurance, but because both reflect the current financial and regulatory environment your organisation is operating in. A specialist charity broker will ask the right questions about your current income, assets, and risk profile and ensure your cover is appropriate for where you are now, not where you were three years ago.</p>
<p>To discuss your organisation's cover in light of recent changes, <a href="/contact/">get a quote</a> from one of our specialist charity insurance brokers.</p>
    `,
  },
  {
    slug: 'expanded-officer-definition-trustee-liability',
    title: 'Who Is an \'Officer\' Now? The Change That Matters',
    excerpt: 'The Charities Amendment Act 2023 expanded the definition of "officer" to cover anyone with significant influence over management — not just named trustees. Many charities don\'t realise their senior staff and key volunteers may now be personally exposed.',
    date: '2026-08-07',
    author: 'The CharityInsurance Crew',
    readTime: '7 min read',
    category: 'Governance & Compliance',
    image: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1920&q=80',
    content: `
<p>When a charity's trustees sit down to review their D&O or Trustee Liability insurance, they usually think about the named board members around the table. Under the Charities Amendment Act 2023, that mental model is no longer adequate. The expanded definition of "officer" means that personal governance liability in the charity sector now reaches further than most organisations have planned for.</p>

<h2>The Old Definition and the New One</h2>
<p>Before the Charities Amendment Act 2023, the concept of "officer" in the charitable sector context was broadly understood to mean formally appointed trustees, board members, or committee members — the people whose names appear on the charity's governance register and who are formally accountable to Charities Services.</p>
<p>The 2023 Amendment expanded this. Under the new framework, an officer includes any person who has, or who regularly exercises, significant influence over the management or administration of a charity. The key word is "regularly exercises." This is a functional test, not a formal one — it turns on what a person actually does, not what their title says.</p>

<h2>Who Might Now Be an "Officer"?</h2>
<p>The expanded definition is broad enough to potentially capture a range of people in a charity who would not traditionally have thought of themselves as carrying governance liability. Consider these scenarios:</p>
<p>A chief executive or executive director who makes operational decisions with significant financial or programme implications without routinely referring them to the board. The formal governance structure says the board is in charge — but in practice, the CEO exercises significant management influence.</p>
<p>A long-serving programme manager who has accumulated de facto authority over a significant part of the charity's operations. Their decisions affect staff, beneficiaries, and expenditure. They are never formally consulted as a governance matter — but functionally they exercise significant management influence.</p>
<p>A trusted patron, advisor, or founder who, while not formally on the board, is regularly consulted before major decisions are made and whose views effectively determine those decisions. Their influence is informal but significant.</p>
<p>In each case, the question is whether that person "regularly exercises significant influence over the management or administration" of the charity. If the answer is yes, they may be an officer under the Act — with the duty and liability consequences that come with it.</p>

<h2>What Officer Status Means for Liability</h2>
<p>Officers of registered charities carry duties under the Charities Act 2005 as amended. These include duties of good faith, duties to act within the charity's purposes, and duties relating to financial management and compliance. Breach of these duties can result in:</p>
<ul>
<li>Personal liability for losses caused to the charity</li>
<li>Regulatory action by Charities Services, including disqualification from acting as an officer</li>
<li>Investigation and potential prosecution in serious cases</li>
<li>Civil claims from donors, beneficiaries, or creditors of the charity</li>
</ul>
<p>The Charities Amendment Act 2023 specifically introduced the power to disqualify individual officers without deregistering the charity — a targeted enforcement tool that makes individual officer accountability a real and practical consideration, not a theoretical one.</p>

<h2>The Insurance Gap: Are Your New "Officers" Actually Covered?</h2>
<p>This is the critical question. Most Trustee Liability (D&O) policies for charities are structured around named insured persons — typically the formally appointed trustees or board members. The policy schedule lists who is covered: "all present, past, and future directors, trustees, and officers of the organisation." In practice, these schedules are written with the traditional understanding of "officer" in mind.</p>
<p>Whether the newly expanded definition of officer — the functional test that reaches to senior staff, key volunteers, and influential advisors — is captured within your existing policy wording is a question that deserves a direct conversation with your broker. Some policy wordings will capture the broader definition; others may not without endorsement.</p>
<p>There is also an employment liability dimension. Senior staff who are now arguably officers face both governance liability (the Charities Act officer duty) and employment liability (their employment relationship with the charity). These are different risks that may require different covers. If a senior manager is now an officer for Charities Act purposes, does the charity's D&O policy respond to a claim against them in that capacity — or is that claim treated as an employment matter under employers liability? The interaction between these policies is worth examining carefully.</p>

<h2>A Practical Checklist for Charities</h2>
<p>Given the expanded officer definition, we recommend working through the following with your broker:</p>
<ul>
<li>Map the people in your organisation who exercise significant management influence — not just formal trustees</li>
<li>Review your D&O policy wording for the definition of "insured persons" and whether it captures the functional officer test</li>
<li>Check whether your policy covers regulatory investigation costs under the Charities Act — not just civil litigation</li>
<li>Consider whether your policy limit is adequate to protect all potentially exposed individuals, including senior staff</li>
<li>Ensure that newly identified "officers" are aware of their potential status and the responsibilities it carries</li>
</ul>
<p>Governance is not just a board-level responsibility. For many charities, the expanded officer definition makes it a whole-of-leadership responsibility — and insurance programmes need to reflect that.</p>
<p>To discuss your organisation's cover and whether all your officers are protected, <a href="/contact/">get a quote</a> from one of our specialist charity insurance brokers.</p>
    `,
  },
  {
    slug: 'charity-funding-pressure-2026-insurance-implications',
    title: 'Funding Pressure in 2026: Don\'t Cut the Wrong Costs',
    excerpt: 'Charities across the sector are under financial pressure in 2026 — from government contract reviews to cost-of-living donation declines. When budgets tighten, insurance is often cut first. It shouldn\'t be.',
    date: '2026-08-07',
    author: 'Sarah Connell',
    readTime: '7 min read',
    category: 'Insurance Basics',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1920&q=80',
    content: `
<p>The funding environment for community organisations in 2026 is genuinely difficult. Government contract reviews have resulted in funding reductions or non-renewals for some providers. Cost-of-living pressures have reduced discretionary charitable giving in many communities. Grant competition has intensified as more organisations compete for a pool that hasn't grown commensurately with sector need. Boards and executives across the sector are making hard decisions about where to find savings.</p>
<p>Insurance appears on those spreadsheets as a discretionary cost. It shouldn't be cut — and here is why.</p>

<h2>The Financial Logic of Insurance Under Pressure</h2>
<p>When an organisation's financial reserves are strong, an uninsured loss — a significant public liability claim, a trustee liability action, a cyber breach — is painful but survivable. The organisation can draw on reserves, renegotiate cash flow, or find short-term funding to manage the cost.</p>
<p>When an organisation is already financially constrained — running lean reserves, managing cash flow carefully, dependent on specific grant tranches — the same uninsured loss can be existential. There is no buffer. A $50,000 uninsured legal defence cost or a $100,000 uninsured cyber breach response lands on an organisation that cannot absorb it.</p>
<p>This is precisely backwards from the intuition that drives insurance cuts during financial pressure. The less financial resilience your organisation has, the more important insurance becomes — not less. Insurance exists to replace the financial buffer your reserves no longer provide.</p>

<h2>Three Consequences of Cutting Insurance During Funding Pressure</h2>
<p>The pattern of consequences when charities reduce or eliminate cover follows a predictable sequence.</p>
<p>The first consequence is claims left unfunded. A public liability claim from a community event, a personal grievance from a departing staff member, or a property loss from a fire or flood arrives without warning. An uninsured organisation must fund the response from operating budgets or reserves — resources that were already under pressure before the claim arrived. What was a manageable cost with insurance becomes a crisis without it.</p>
<p>The second consequence is trustees personally exposed. When an organisation cannot fund a governance-related legal claim — a Charities Services investigation, a dispute with a major funder, or an employment action directed at the board — the individuals serving as trustees face the prospect of personal financial exposure. Trustee Liability (D&O) insurance is not a luxury; it is the protection that allows people to volunteer their governance skills without risking their personal assets. Remove it, and you risk losing the trustees you most need in difficult times.</p>
<p>The third consequence is volunteers unprotected. Volunteer Personal Accident insurance — often one of the most affordable covers in the package — provides the supplement to ACC that makes a real financial difference when a skilled volunteer is injured and unable to work. Charities that cut this cover in the name of budget savings may find that their most committed volunteers quietly reduce their involvement when they understand the financial risk they are carrying.</p>

<h2>Right-Sizing Is Not the Same as Removing</h2>
<p>When budget pressure is real, the right response to insurance costs is not elimination — it is right-sizing. There is a meaningful difference between removing cover you genuinely need and right-sizing cover that has grown beyond your current risk profile.</p>
<p>Right-sizing might look like reviewing whether your public liability limit needs to be $10M or whether $5M is adequate for your current activity level. Or confirming that a property item you no longer own has been removed from your policy. Or reassessing whether a professional indemnity limit of $2M is appropriate given the scale of your advice-giving activities.</p>
<p>What right-sizing should never look like: removing Trustee Liability cover because it seems unlikely anyone will sue the board; dropping Volunteer Personal Accident insurance because ACC seems to cover everything; or reducing property cover below replacement cost because the premium is more affordable at a lower sum insured.</p>

<h2>Have the Conversation with Your Broker</h2>
<p>A specialist charity insurance broker, properly briefed on your organisation's financial position and risk profile, can help you identify where genuine savings exist without creating dangerous gaps. They have visibility across the sector — they know what comparable organisations carry, what underwriters are offering, and where there is room to negotiate without sacrificing protection.</p>
<p>If you have not had that conversation this year, now is the time. Come to the meeting with your current policy schedule, your annual accounts, and an honest assessment of your current activities and assets. Leave with a cover programme that is appropriately sized for your organisation's actual position — not the position it was in three years ago, and not the stripped-back minimum that looks affordable until something goes wrong.</p>
<p>To discuss right-sizing your organisation's cover, <a href="/contact/">get a quote</a> from one of our specialist charity insurance brokers.</p>
    `,
  },
  {
    slug: 'ai-risk-nz-charities-insurance-gaps',
    title: 'AI Tools and Charity Insurance: The Gap Nobody Talks About',
    excerpt: 'Charities are adopting AI tools for grant writing, communications, and data analysis — but most standard insurance policies don\'t cover AI-related risks. Here is what to check.',
    date: '2026-08-07',
    author: 'The CharityInsurance Crew',
    readTime: '7 min read',
    category: 'Cyber & Privacy',
    image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=1920&q=80',
    content: `
<p>Walk into almost any not-for-profit office in 2026 and you will find AI tools in use somewhere. Fundraising teams use them to draft grant applications. Communications staff use them to generate newsletter content and social media posts. Finance teams use them to summarise reports and analyse data. Volunteer coordinators use them to schedule and correspond. The adoption is fast, largely informal, and almost entirely uninsured.</p>
<p>In August 2026, not-for-profit.org.nz published AI risk assessment guidance specifically for community organisations — the first sector-specific guidance of its kind in New Zealand. It identified three categories of AI risk that most charities have not considered: data protection, advice reliability, and accountability gaps. Each of these maps to a potential insurance shortfall.</p>

<h2>The Data Protection Gap</h2>
<p>When a staff member enters donor data, beneficiary information, or organisational financial details into an AI tool — whether a general-purpose large language model or a specialist productivity tool — that data leaves the organisation's systems and enters the AI provider's environment. What happens to it there depends entirely on the provider's terms of service, which most users do not read in full.</p>
<p>Under the Privacy Act 2020, the charity remains responsible for the personal information it holds, regardless of what third-party tool it shares that information with. If a beneficiary's name, address, or health information is entered into an AI tool and subsequently exposed through a breach of that tool's systems, the charity is the responsible organisation for notification and regulatory purposes — even though the breach occurred in a system it does not control.</p>
<p>Standard cyber insurance policies written in the last three to five years may not clearly address this scenario. The policy was designed around a breach of the organisation's own systems. A breach occurring through a third-party AI tool used by the organisation's staff sits in a grey area that some policy wordings do not resolve clearly. Ask your broker to review your policy specifically for this scenario.</p>

<h2>The Grant Writing and Advice Reliability Gap</h2>
<p>AI-generated grant applications are increasingly common in the not-for-profit sector. They are faster to produce, often better structured, and — when a human reviews and refines them — frequently competitive. But they carry a risk that paper-based applications did not: the risk of AI-generated inaccuracy.</p>
<p>If an AI tool drafts a grant application that contains an inaccurate representation of the charity's activities, outcomes, or financial position — and the error is not caught before submission — the organisation may be in a position of having made a misrepresentation to a funder. Depending on the nature of the misrepresentation and the funder's terms, this could result in a grant recovery demand, a contractual dispute, or in extreme cases an allegation of fraud.</p>
<p>Professional indemnity insurance typically covers claims arising from negligent misrepresentation in the provision of professional services. Whether the submission of a grant application drafted with AI assistance falls within this cover depends on the policy wording and the circumstances. It is not a settled question, and it is one worth raising with your broker — particularly if your organisation relies heavily on grant income and uses AI tools in the application process.</p>

<h2>The Service User Advice Gap</h2>
<p>Some charities are using AI tools to assist in the delivery of services to beneficiaries and service users. A budgeting service might use an AI tool to generate initial budget summaries. A community legal service might use AI to draft plain-language explanations of entitlements. A mental health support service might use AI to generate resource suggestions for callers.</p>
<p>In each of these cases, an AI-generated output is being used as input to advice or support provided to a person who may rely on it. If that advice is wrong — if the AI tool produces an inaccurate summary of a legal entitlement, a miscalculated budget, or an inappropriate resource referral — and the service user suffers harm as a result, the question is whether the charity's professional indemnity policy responds.</p>
<p>Professional indemnity policies are written to cover claims arising from negligent acts, errors, or omissions by the insured in the provision of professional services. AI-generated advice used in service delivery sits at the intersection of the insured's professional activity and a third-party tool's output. Whether the policy responds, and to what extent, is not always clear — and the answer may matter significantly for organisations that are increasingly integrating AI into their service delivery.</p>

<h2>What Charities Should Do Now</h2>
<p>AI risk in the charity sector is not hypothetical. It is already present wherever AI tools are in use — which, by 2026, is most organisations. The response is not to ban AI tools; they provide genuine productivity and capability benefits for resource-constrained organisations. The response is to understand the risk and ensure insurance reflects it.</p>
<p>Three practical steps for any charity using AI tools:</p>
<ul>
<li>Audit which AI tools your staff use and what types of data they process — donor information, beneficiary records, financial data, service user communications</li>
<li>Review your privacy policy and data handling procedures to ensure they address AI tool use, as required by the Privacy Act 2020</li>
<li>Discuss your AI tool use with your insurance broker at your next renewal and ask specifically whether your cyber, professional indemnity, and public liability policies respond to AI-related claims</li>
</ul>
<p>The not-for-profit.org.nz guidance published in August 2026 provides a starting framework for AI risk assessment. Using it as a prompt for an insurance review conversation is a practical and timely step for any charity that has adopted AI tools without formally considering the risk implications.</p>

<h2>The Broader Picture</h2>
<p>AI risk is one dimension of a broader pattern: technology adoption outpacing insurance. Cloud storage, mobile payment platforms, social media fundraising, and now AI tools have all created new risk categories that policy wordings have not always kept pace with. A specialist charity insurance broker who keeps up with the evolving risk landscape — including the guidance being developed by sector bodies and regulators — is the right partner for organisations navigating this territory.</p>
<p>To discuss your organisation's cover and AI-related risk gaps, <a href="/contact/">get a quote</a> from one of our specialist charity insurance brokers.</p>
    `,
  },
  {
    slug: 'accumulated-funds-reporting-charity-reserves',
    title: 'Accumulated Funds Reporting and Your Reserves Strategy',
    excerpt: 'Charities with operating expenses above $140,000 now have to explain why they hold accumulated funds. That scrutiny changes how boards should think about reserves \u2014 and about insurance.',
    date: '2026-08-15',
    author: 'Sarah Connell',
    readTime: '8 min read',
    category: 'Governance & Compliance',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1920&q=80',
    content: `
<p>One of the quieter changes to come out of the Charities Amendment Act 2023 has turned out to be one of the most consequential for boards. Charities Services now asks charities with annual operating expenditure above $140,000 to explain, in their annual return, the reasons they hold accumulated funds \u2014 the cash, investments, and other resources carried forward rather than spent on charitable activity in the year they were received.</p>
<p>The policy intent behind the change was transparency. Successive reviews of the sector had raised questions about organisations sitting on substantial reserves while public funding and donor generosity continued to flow in, and the Government response was to require an explanation rather than a cap. No charity is being told how much it may hold. It is simply being asked to say why.</p>
<p>In practice, that question has pushed reserves policy onto board agendas at organisations that had never formally written one. And it has surfaced an uncomfortable overlap between two things boards tend to treat separately: the reserves they hold against future shocks, and the insurance they hold against the same shocks.</p>

<h2>Why Reserves and Insurance Are the Same Conversation</h2>
<p>Most reserves policies, when they exist at all, justify the balance in broadly similar terms. The organisation holds funds to cover a period of operating costs if income stops. It holds funds against a major building repair. It holds funds against a legal dispute, a contract loss, or an unforeseen liability. Those are risk justifications, and every one of them describes a risk that could also be transferred to an insurer.</p>
<p>That does not mean insurance replaces reserves. It means the two need to be planned together. A charity that holds $400,000 in reserves partly to cover the possibility of a serious liability claim, while also carrying a $10 million public liability policy, is holding capital against a risk it has already transferred. Conversely, a charity that has trimmed its reserves to fund frontline delivery while carrying no trustee liability cover has neither the transfer nor the buffer.</p>
<p>When a board is asked to explain accumulated funds in an annual return, the most defensible answer is one that shows the reasoning has been done. Reserves are held for identified purposes; risks that can be economically transferred have been transferred; and the balance reflects what remains after that analysis. That is a stronger position than a generic statement about prudence.</p>

<h2>What Charities Services Is Actually Asking For</h2>
<p>The annual return question is not an audit. It asks the organisation to describe the reasons for the funds it holds, and boards can answer in their own words. Typical justifications that stand up well include committed but unspent grant funding, an approved capital project with a defined timeline, a stated operating reserve expressed as a number of months of expenditure, an endowment or bequest with donor-imposed restrictions, and provisions against known contingent liabilities.</p>
<p>Answers that read as weaker are those that describe no purpose at all, or that simply record the balance without explaining it. The risk is not a penalty \u2014 it is that a charity that cannot explain its reserves to the regulator will find it equally hard to explain them to a major funder, a philanthropic trust, or a journalist. Funders increasingly read the Charities Register before they read an application.</p>

<h2>The October 2026 Governance Review Sits Alongside This</h2>
<p>Charities also have a statutory duty to review their governance procedures before 5 October 2026, and at least every three years thereafter. The review means formally assessing whether the organisation\u2019s governance documents remain fit for purpose and changing them if they do not.</p>
<p>For most boards, that review is already scheduled or under way. It is the natural place to deal with the reserves question too. A governance review that covers the rules or trust deed, delegations, conflict of interest processes, and financial controls can reasonably extend to a reserves policy and an insurance schedule, because all of them describe how the organisation manages risk to its charitable purpose.</p>
<p>Boards that treat the two exercises separately tend to do the governance review as a compliance task and the insurance renewal as a procurement task, and the connection between them never gets made. Boards that combine them come out with a document that explains, in one place, what the organisation is exposed to and how each exposure is managed \u2014 through controls, through reserves, or through insurance.</p>

<h2>Where Cover Reduces the Reserves You Need to Hold</h2>
<p>Several covers commonly carried by community organisations map directly onto the reasons charities give for holding funds.</p>
<p>Trustee liability, sometimes written as Directors and Officers or Trustees and Officers cover, responds to claims against individual board members arising from governance decisions, and typically funds legal defence costs from the point a claim or investigation is notified. Boards that have set aside reserves against the possibility of a governance dispute are, in effect, self-insuring a risk the market prices in the low thousands of dollars a year.</p>
<p>Material damage and business interruption cover addresses the building repair scenario. A charity holding reserves against the cost of repairing its premises after a fire or a storm should first confirm that its sum insured reflects current replacement cost, including compliance upgrades and demolition. Where cover is adequate, the reserve required against that scenario is the excess, not the repair bill.</p>
<p>Crime or fidelity cover addresses internal theft, which Charities Services has identified as a real and recurring problem in the sector. Employers liability and statutory liability address employment and regulatory exposures respectively. Cyber cover addresses breach response and notification costs under the Privacy Act 2020.</p>
<p>None of these removes the case for reserves entirely. Insurance has excesses, sub-limits, and exclusions, and there are always uninsurable risks \u2014 the loss of a major contract being the most obvious. But a reserves figure that has been set with an accurate picture of what is already insured is both smaller and easier to defend.</p>

<h2>A Practical Sequence for Boards</h2>
<p>The work is not complicated, but it does need to happen in order. Start by listing the risks the organisation would genuinely struggle to absorb, with a rough figure attached to each. Then map the current insurance programme against that list and mark which exposures are transferred, which are partly transferred, and which sit entirely with the organisation. Set the reserves target against what remains, and write down the reasoning.</p>
<p>That document does three jobs at once. It answers the accumulated funds question in the annual return. It forms part of the governance review required before October 2026. And it gives your broker a far better brief than a request to renew last year\u2019s policy, because it tells them which exposures the board actually cares about.</p>
<p>If your board is working through its governance review this year and wants the insurance side of that picture properly assessed, <a href="/contact/">get a quote</a> from one of our specialist charity insurance brokers.</p>
    `,
  },
  {
    slug: 'charity-fraud-fidelity-cover-nz',
    title: 'Fraud in the Charitable Sector: The Cover Most Miss',
    excerpt: 'Charities Services has uncovered frauds costing the sector hundreds of thousands of dollars. Crime and fidelity cover is one of the cheapest policies available \u2014 and one of the least often bought.',
    date: '2026-08-15',
    author: 'The CharityInsurance Crew',
    readTime: '8 min read',
    category: 'Risk Management',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=1920&q=80',
    content: `
<p>Charities Services has published its own account of what it finds when it investigates the sector, and it makes for sobering reading. Its investigations have uncovered examples of significant fraud resulting in the loss of hundreds of thousands of dollars to the charitable sector \u2014 money donated, granted, or raised for charitable purposes that never reached the people it was intended for.</p>
<p>The uncomfortable part is that these are the cases that were found. Fraud in small organisations is frequently discovered by accident: a treasurer goes on leave and someone else opens the bank statements, an auditor asks a question nobody had asked before, a supplier calls about an invoice that does not match anything in the ledger. The cases that surface are unlikely to be the whole picture.</p>

<h2>Why Community Organisations Are Exposed</h2>
<p>The conditions that make charities vulnerable are the same conditions that make them work. Small teams operate on trust because trust is cheaper than process. One volunteer or part-time staff member often holds the finance function entirely \u2014 raising invoices, approving payments, reconciling the bank account, and preparing the reports the board reviews. Segregation of duties, the single most effective control against internal fraud, is difficult to achieve when there are three people in the office and one of them is the person you are trying to segregate.</p>
<p>Longevity compounds it. The treasurer who has served the club faithfully for fifteen years is the person nobody questions, and is also the person with the longest uninterrupted access to the accounts. Boards rotate; the finance volunteer often does not.</p>
<p>Cash-handling activities add another layer. Raffles, door sales, sausage sizzles, collection buckets, op shop tills, and event gate takings all generate cash that exists in no system until someone records it. The gap between money received and money banked is where a meaningful share of sector losses occur, and it is close to invisible after the fact.</p>

<h2>The External Threat Has Changed Shape</h2>
<p>Internal fraud is only half the problem. CERT NZ has received more than 10,000 cyber security reports in a year covering phishing, scams, unauthorised access to email and bank accounts, denial of service attempts, ransomware, and compromised websites. Charities appear in that data both as targets and as brands being impersonated.</p>
<p>Fake charity scams follow disasters with grim reliability. After major events in New Zealand, CERT NZ has warned about emails circulating with links to fake banking logins or fraudulent accounts set up to intercept donations intended for legitimate appeals. The damage to the genuine charity is real even though no money left its own accounts: donors who gave to a fake page believe they gave to you, and the reputational cleanup falls on the organisation whose name was used.</p>
<p>Invoice redirection is the variant that hits charities hardest financially. An attacker gains access to an email account \u2014 often through a reused password on a volunteer\u2019s personal address \u2014 watches the correspondence, and sends a plausible request to change bank account details on a genuine invoice or a supplier payment. The payment is authorised by someone acting in good faith on what looks like an ordinary email. Because the organisation authorised the transfer itself, recovery from the bank is difficult and often impossible.</p>

<h2>What Crime and Fidelity Cover Actually Does</h2>
<p>Crime cover, also written as fidelity guarantee, responds to the direct financial loss an organisation suffers from dishonest acts. In a well-structured policy for a not-for-profit, that typically extends to theft of money, securities, or property by employees, volunteers, or committee members; forgery and alteration of cheques or payment instructions; loss of funds through fraudulent electronic transfer; and, in broader wordings, social engineering losses where a staff member was deceived into making a payment.</p>
<p>Good policies also fund the work that follows the loss. Investigation and forensic accounting costs are frequently the larger number in a small organisation\u2019s claim, because establishing what happened over several years of transactions is expensive and the organisation cannot begin recovery, reporting, or insurance claims without it.</p>
<p>Two limitations matter. Cover generally responds to the direct loss of funds, not to consequential effects such as lost grant income or the cost of rebuilding donor confidence. And insurers expect a baseline of controls; a policy is not a substitute for dual authorisation on payments, and an application that overstates the controls in place creates a disclosure problem at claim time.</p>

<h2>Crime Cover Is Not Cyber Cover, and Neither Is D&O</h2>
<p>This is where most organisations discover a gap. A cyber policy responds to a breach of systems and data \u2014 forensic response, notification obligations under the Privacy Act 2020, restoration of systems, and often extortion. It is not primarily designed to reimburse money stolen from a bank account. A trustee liability policy responds to claims against individuals arising from governance decisions; it does not restore funds taken by an employee.</p>
<p>An invoice redirection fraud can sit at the intersection of all three: an email account was compromised, a payment was authorised, and the board may face questions about oversight. Whether any of your policies responds \u2014 and which one \u2014 depends on how the wordings interact. That question is worth asking your broker explicitly rather than assuming the package covers it.</p>

<h2>The Controls Worth Having Regardless</h2>
<p>Insurers price crime cover partly on controls, so the same steps that reduce risk also reduce premium. Dual authorisation on every payment above a modest threshold, with no exceptions for the chief executive or the treasurer, is the single most valuable control. Bank account changes for any supplier should be verified by a phone call to a number already on file, never to a number supplied in the email requesting the change. Someone other than the person who prepares the accounts should review bank statements each month. Two people should count and sign for cash at every event. Access to banking systems should be reviewed whenever anyone leaves a role.</p>
<p>None of these require a finance team. They require a board willing to say that trust in individuals and process discipline are separate things, and that having controls is not an accusation against anyone.</p>

<h2>The Cost Comparison</h2>
<p>Crime and fidelity cover is typically among the least expensive lines in a not-for-profit insurance package, particularly when written as part of a combined management liability policy rather than purchased standalone. Set that against the scale of losses Charities Services has documented in its investigations, and the case is straightforward. For most small and mid-sized organisations, a single modest fraud would exceed several decades of premium.</p>
<p>If your organisation handles cash, holds grant funds, or processes supplier payments without a formal dual-authorisation rule, this is a conversation worth having before your next renewal. To review your crime and fidelity exposure, <a href="/contact/">get a quote</a> from one of our specialist charity insurance brokers.</p>
    `,
  },
  {
    slug: 'qr-code-scams-charity-cyber-cover',
    title: 'QR Code Scams and Your Charity\'s Cyber Cover',
    excerpt: 'The National Cyber Security Centre\'s latest quarterly report shows fewer dollars lost but more incidents serious enough to need specialist help — and a rise in QR code and malware scams that community organisations are unusually exposed to.',
    date: '2026-09-01',
    author: 'Sarah Connell',
    readTime: '8 min read',
    category: 'Cyber & Privacy',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1920&q=80',
    content: `
<p>The National Cyber Security Centre published its Cyber Security Insights report for the second quarter of 2026 on 20 August, covering the period from 1 April to 30 June. For charities, sports clubs, churches and community trusts, two numbers in it are worth sitting with.</p>

<h2>What the Latest Quarter Actually Showed</h2>
<p>The NCSC responded to 1,129 incident reports in the quarter, broadly level with the 1,164 reports received in the first three months of the year. Reporting volumes, in other words, are steady. What changed is severity. Of those reports, 92 were triaged for specialist technical support because of their potential national significance, up from 77 in the previous quarter. The remaining 1,037 did not require that level of response.</p>
<p>Reported direct financial losses came to $2.7 million for the quarter, a 52 percent fall from the $5.6 million reported between January and March. That headline drop is genuinely good news, but it hides an uncomfortable distribution. Scams and fraud returned as the most commonly reported category with 348 incidents, yet accounted for only around $860,000 of the total. Unauthorised access incidents were far less common and accounted for roughly $1.3 million — about half the quarter\'s entire reported loss. A small number of intrusions did most of the damage.</p>
<p>Phishing and credential harvesting sat second on volume. It remains the entry point for a large share of the unauthorised access that follows.</p>

<h2>Why the Report Singled Out QR Codes</h2>
<p>The NCSC devoted one of the report\'s two feature articles to QR code phishing, under the title "QR codes: Think before you scan". The technique attracted wider public attention this year after incidents involving Christchurch parking meters, where fraudulent codes were used to direct people to pages designed to capture payment details.</p>
<p>The mechanics are simple. A printed sticker or a code embedded in an email carries no visible destination. A person who would never click a suspicious hyperlink will scan a code on a poster without hesitation, because the code looks like part of the physical furniture of the venue. The phone opens the page in a mobile browser, where the address bar is truncated and the visual cues that help people spot a fake are largely absent.</p>
<p>Community organisations are unusually exposed here for reasons that have nothing to do with technical sophistication. Charities have moved donation collection onto QR codes at speed, precisely because contactless giving works: a code on a collection bucket, a table card at a fundraising dinner, a poster in a shop window, a slide at the end of a presentation. Those codes are printed in bulk, distributed to volunteers, displayed in public spaces for weeks, and almost never audited. Overlaying a fraudulent sticker on a legitimate donation code is trivially easy, and the charity may only discover it when the takings do not match the foot traffic — or when a donor calls to ask why their card was charged twice.</p>
<p>The second feature article, "Malware: Silent predators of cyberspace", covers a related trend the NCSC observed this quarter: an increase in reports where victims were persuaded to install malicious software themselves. That pattern travels well into volunteer environments, where the person managing the database is often the person who is most willing to help and least likely to have had security training.</p>

<h2>The Gap Between an Incident and a Claim</h2>
<p>A fraudulent donation code is an unpleasant discovery, but the loss to the organisation is often modest — the money never reached the charity\'s account in the first place. The exposures that carry real financial consequence sit elsewhere, and they are the ones most community organisations have not priced.</p>
<p>The first is the Privacy Act 2020 obligation. If credentials harvested through a phishing email give someone access to a supporter database, a client management system, or a shared drive holding case notes, the organisation has a notifiable privacy breach if the breach has caused or is likely to cause serious harm. That triggers notification to the Office of the Privacy Commissioner and to affected individuals. Working out who was affected, what was accessed, and what must be disclosed requires forensic investigation, and that investigation is not something a volunteer treasurer can run.</p>
<p>The second is business interruption in the non-commercial sense. A ransomware event or a locked-out finance system does not stop a charity earning revenue in the way it stops a retailer, but it does stop grant reporting, payroll, rostering, and service delivery. Organisations working with vulnerable people cannot simply pause for three weeks while systems are rebuilt.</p>
<p>The third is funds transfer fraud. Where a compromised email account is used to redirect a supplier payment or a grant disbursement, the money leaves the account legitimately, on the organisation\'s own authority. Whether that loss is recoverable depends on whether the policy in question is a cyber policy, a crime or fidelity policy, or neither.</p>

<h2>What Cyber Cover Does and Does Not Reach</h2>
<p>A cyber liability policy for a not-for-profit typically funds the response rather than reimbursing the theft. Expect incident response and forensic investigation costs, legal advice on notification obligations, the cost of notifying affected individuals, system restoration and data recovery, defence costs for regulatory investigation, and in most wordings, cover for extortion demands and the specialists who negotiate them.</p>
<p>What it usually does not do is replace money taken from a bank account. That sits with crime or fidelity cover, and the two policies are frequently held by different organisations or not held at all. Trustee liability cover is a third distinct thing again: it responds to claims against individual board members arising from governance decisions, which may include a claim that the board failed to manage a foreseeable risk, but it does not restore the funds or fund the breach response.</p>
<p>Most claims of this kind touch two or three of those policies at once. The question worth putting to a broker in plain terms is: if our email is compromised, a supplier payment is redirected, and our donor list is copied, which of our policies responds to which part of that, and where are the gaps between them?</p>

<h2>Controls That Cost Nothing</h2>
<p>Insurers price cyber cover partly on process, so several of the steps that reduce risk also reduce premium. Multi-factor authentication on email and cloud storage is the single highest-value control and is free on every mainstream platform. Donation QR codes should be checked physically at the start and end of every event and should be generated by one named person rather than by whoever is closest to a laptop. Bank account changes for any supplier should be verified by calling a number already held on file. Access to systems should be reviewed whenever a staff member or volunteer leaves a role, which in a high-turnover volunteer environment means quarterly rather than annually.</p>
<p>None of this requires an IT department. It requires a board that treats digital process the way it treats cash handling.</p>

<h2>Where to Start</h2>
<p>If your organisation holds supporter data, takes donations electronically, or runs any part of its operations through cloud services, cyber cover belongs in the same conversation as public liability rather than as an afterthought at the end of it. Premiums for small and mid-sized community organisations are typically modest, and the response costs the policy funds are the part boards consistently underestimate.</p>
<p>To review your organisation\'s cyber and privacy exposure alongside the rest of your programme, <a href="/contact/">get a quote</a> from one of our specialist charity insurance brokers.</p>
    `,
  },
  {
    slug: 'tier-3-4-reporting-charity-insured-values',
    title: 'New Reporting Rules and Your Insured Values',
    excerpt: 'The revised Tier 3 and Tier 4 reporting standards simplified life for small charities — but one of the things they simplified away was the annual list of assets that used to prompt boards to check their sums insured.',
    date: '2026-09-01',
    author: 'The CharityInsurance Crew',
    readTime: '7 min read',
    category: 'Governance & Compliance',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1920&q=80',
    content: `
<p>Most small charities experienced the revised reporting standards as a relief. The External Reporting Board issued updated Tier 3 and Tier 4 not-for-profit standards in May 2023, mandatory for accounting periods beginning on or after 1 April 2024, with early adoption permitted for periods ending after 15 June 2023. For a Tier 4 organisation — one with annual operating expenses under $140,000 — the new standard is meaningfully less demanding than the one it replaced. That is a good outcome for boards run by volunteers.</p>
<p>It also removed something quietly useful.</p>

<h2>What Changed in the Standards</h2>
<p>The revised standards apply to registered charities and to incorporated societies that have re-registered under the Incorporated Societies Act 2022 and are not classified as small. Tier 3 covers organisations with annual expenses under $2 million; Tier 4 covers those under $140,000. Both tiers prepare a Performance Report rather than a full set of financial statements.</p>
<p>Two changes matter for the purposes of this article. The service performance section dropped the terms "outcomes" and "outputs" in favour of language aligned with the Tier 2 standard, which is a presentational improvement rather than a substantive one. More consequentially for Tier 4 entities, the standard no longer requires a Statement of Resources and Commitments.</p>
<p>Separately, the Charities Amendment Act 2023 gave the Chief Executive of the Department of Internal Affairs power to exempt very small charities from preparing general purpose financial reports in accordance with the standards altogether. Those charities still file an annual return containing basic financial information, but the reporting burden drops again.</p>

<h2>Why the Statement of Resources Mattered</h2>
<p>The Statement of Resources and Commitments was never intended as an insurance document. It asked an organisation to list what it owned and what it was committed to — land and buildings, vehicles, significant equipment, investments, and on the other side, loans, leases, and guarantees. It was a plain-language inventory, prepared annually, reviewed by the board, and filed publicly.</p>
<p>For a great many small charities it was also the only moment in the year when anyone sat down and wrote out a list of the organisation\'s physical assets. Preparing it surfaced the marquee bought two years ago, the trailer donated by a member, the sound system upgraded after a fundraiser, the kitchen refit at the hall. Whether or not the treasurer then thought about insurance, the list existed, and it was the natural thing to hand a broker at renewal.</p>
<p>Without that annual prompt, nothing in the reporting cycle asks a Tier 4 board what it owns. The sums insured on the policy stay where they were set, renewal after renewal, while the asset base moves underneath them.</p>

<h2>How Underinsurance Actually Develops</h2>
<p>Underinsurance in the community sector rarely arrives through carelessness. It accumulates through three ordinary processes.</p>
<p>The first is acquisition without registration. Donated and grant-funded assets enter an organisation outside the normal purchasing path. Nobody raises a purchase order for a trailer someone gifted, and nobody tells the broker.</p>
<p>The second is replacement cost drift. Construction and equipment costs have moved substantially over the past five years. A hall insured for a rebuild figure set in 2020 may be materially short of what rebuilding it would cost today, and the gap widens every year the figure is not revisited. This bites hardest on exactly the buildings communities can least afford to lose — halls, clubrooms, marae facilities, heritage churches — because their rebuild cost bears little relation to any market valuation.</p>
<p>The third is scope creep in activities. An organisation that added a food rescue operation, a van, and a commercial-grade chiller has changed its risk profile in ways a property schedule written for an office and a photocopier does not reflect.</p>
<p>Where a policy carries an average or co-insurance clause, the consequence of underinsurance is not simply that a total loss pays out less than the rebuild cost. A partial loss can also be reduced in proportion to the shortfall. An organisation insured for 60 percent of true replacement value may recover 60 percent of a partial claim, which is the point at which a manageable event becomes an existential one.</p>

<h2>The Governance Review Is the Obvious Place to Do This</h2>
<p>Registered charities must formally review their governance procedures before 5 October 2026, and at least every three years after that. Charities Services has indicated the annual return will ask whether the review has been done and when. That review is a compliance obligation with a deadline, which means it is one of the few pieces of work a volunteer board will reliably schedule.</p>
<p>It is also the right container for an asset and insured-values check. A governance review that examines financial oversight without asking whether the organisation\'s assets are adequately insured has looked at half the picture. The practical version takes an hour: list what the organisation owns, note what each item would cost to replace today rather than what it cost to buy, flag anything acquired since the last renewal, and identify any building where the sum insured has not been revisited in three years or more.</p>

<h2>Building the Register the Standards No Longer Require</h2>
<p>An asset register does not need to be sophisticated. A spreadsheet with a description, an acquisition date, a current replacement estimate, and a location column covers most of what a broker needs. Buildings warrant more care: a formal replacement-cost valuation is worth commissioning every three to five years for any structure the organisation could not operate without, and insurers will generally accept a professional valuation as the basis for a sum insured without further argument.</p>
<p>Keep the register with the governance review documentation rather than in the treasurer\'s personal files. Volunteer boards turn over, and the value of a register lies in the next committee being able to find it.</p>

<h2>A Reporting Simplification, Not a Risk Reduction</h2>
<p>The revised standards reduced what small organisations must report. They did not reduce what those organisations own or what it would cost to replace it. Boards that relied, even unconsciously, on the annual reporting cycle to keep asset information current now need to create that prompt deliberately.</p>
<p>If your organisation has not reviewed its sums insured since the reporting changes took effect, the governance review deadline is a natural moment to do it. To have your property schedule and replacement values reviewed alongside the rest of your cover, <a href="/contact/">get a quote</a> from one of our specialist charity insurance brokers.</p>
    `,
  },
  {
    slug: 'losing-a-government-contract-insurance-review',
    title: 'Losing a Major Contract: The Insurance Review Boards Forget',
    excerpt: 'When a large government contract ends, boards move quickly on staffing and premises. The insurance programme is usually left until renewal — and that is where the expensive mistakes happen.',
    date: '2026-09-15',
    author: 'Sarah Connell',
    readTime: '8 min read',
    category: 'Risk Management',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1920&q=80',
    content: `
<p>In early September, Visionwest Community Trust went public with the news that it understood Health New Zealand had awarded a five-year, roughly one-billion-dollar Home and Community Support Services contract to a group of businesses, excluding several established charitable providers. Visionwest said the decision could disrupt care relationships for more than a quarter of the 7,000 older and disabled people it supports across Auckland, Bay of Plenty, Waikato and the Rotorua Lakes District, and would affect more than 650 employees delivering care in people's homes. Health New Zealand's internal audit review of the procurement process concluded it was fair, reasonable and transparent.</p>

<p>Whatever view you take of the procurement question, the operational reality is one that hundreds of contracted providers will recognise. A single tender outcome can remove a large share of an organisation's revenue and workforce inside one funding round. Boards respond quickly on the obvious fronts: staff consultation, premises, vehicle fleets, service transition. The insurance programme almost always gets left until the next renewal date, and that delay is where organisations lose money they did not need to lose.</p>

<h2>Claims-Made Policies Do Not End When the Contract Does</h2>

<p>The most costly misunderstanding in this situation involves how professional indemnity, trustee liability and employment practices policies actually work. These are claims-made policies. They respond to claims <em>notified during the policy period</em>, not to work performed during the policy period. If your organisation delivered home-based support for eight years, cancelled its professional indemnity policy when the contract ended, and a complaint about care delivered in 2024 arrives in 2027, there is no live policy to notify. The claim is uninsured.</p>

<p>The answer is run-off cover, sometimes called extended reporting period cover. It keeps a claims-made policy alive for claims arising from past work after the activity itself has stopped. Run-off is usually purchased for a defined period — three years and six years are common — and is typically cheaper than the original premium because no new work is being performed. It is also almost always cheaper to arrange at the point the policy would otherwise lapse than to reconstruct after a claim has landed.</p>

<p>Organisations exiting a service line should identify every claims-made policy in the programme and decide consciously whether each one needs a run-off period. That decision belongs in the board minutes, because if a complaint surfaces three years later, the question of who decided to leave the exposure uninsured will be asked.</p>

<h2>Restructures Generate Employment Claims</h2>

<p>An organisation that loses hundreds of care roles is running a restructure, and restructures are the most reliable source of employment disputes in the not-for-profit sector. Personal grievance claims commonly allege procedural defects rather than bad faith: consultation that was too short, a selection matrix applied inconsistently, redeployment options that were not genuinely offered, or a decision that appeared to have been made before the consultation began.</p>

<p>Employment practices liability cover — sold in this country as a standalone policy or, more often, as an extension to a trustee liability or management liability policy — funds the legal costs of defending those claims and, depending on wording, settlements and awards. Two features matter more than the headline limit. The first is whether the policy covers claims by volunteers and contractors, not just employees, which is relevant where support workers are engaged on varied terms. The second is the sub-limit, because employment practices extensions frequently carry a sub-limit well below the main policy limit, and a moderately sized restructure can exhaust it.</p>

<p>The timing point matters as much as the cover point. A policy taken out after the restructure has been announced will exclude the circumstances that were known before inception. The time to check the employment practices section is before the consultation document goes out, not after the first grievance arrives.</p>

<h2>Reducing Cover Too Fast</h2>

<p>The instinct when revenue falls is to reduce expenses, and insurance is a visible line item. The risk is that an organisation reduces cover faster than it reduces exposure. Several specific traps recur.</p>

<p>Vehicle fleets do not disappear on the day a contract ends. Cars stay on the books, insured and often still driven, while they are sold or redeployed. Cancelling motor cover in advance of actual disposal leaves a period where a staff member drives an uninsured vehicle on organisational business.</p>

<p>Leased premises carry obligations that outlast the service. If the lease runs for another four years, so does the requirement to insure the fitout, the glass and the landlord's interest — regardless of whether the programme that occupied the building still exists.</p>

<p>Public liability limits reflect the severity of a potential claim rather than the volume of activity. Running half as many services does not halve the cost of a serious injury claim. Reducing a limit from five million to two million to save premium creates a gap that only becomes visible in the one claim that exceeds it.</p>

<p>Statutory liability and cyber cover respond to exposures tied to records and obligations rather than to current activity. An organisation still holds client files, still has Privacy Act 2020 obligations in relation to them, and still faces regulatory investigation risk after a service transfers.</p>

<h2>The Wraparound Problem</h2>

<p>Brook Turner, Visionwest's director of partnerships, made a point in the September release that has a direct insurance consequence. Removing a major service from a charity, he said, "does not affect just one operational division." It changes what the organisation is able to do when people's needs fall outside a single government contract.</p>

<p>Integrated charities cross-subsidise. Revenue from a contracted service supports the infrastructure — the coordinators, the case management systems, the vehicles, the office — that makes housing support, food assistance, financial mentoring and counselling possible alongside it. When the contracted service goes, those other activities continue with a thinner support structure behind them.</p>

<p>From a risk perspective this is the moment when incidents become more likely, not less. Fewer staff supervise the same volunteers. Policies are reviewed less often. Health and safety systems that were maintained because a funder audited them stop being audited. Documentation slips because the person who maintained it has gone. Reducing insurance at exactly the point where operational controls are weakening is the wrong direction of travel, and a broker who understands the sector will say so.</p>

<h2>What to Do in the First Fortnight</h2>

<p>The practical sequence is short. List every policy in the programme and mark which are claims-made and which are occurrence-based, because only the first group needs a run-off decision. Confirm the employment practices position, including the sub-limit and whether contractors are covered, before any consultation document is issued. Identify which assets and obligations survive the contract — vehicles, leases, equipment, client records — and insure those on their actual timeline rather than the contract's. Ask the broker to model a reduced programme against the exposures that genuinely fall away, rather than applying a flat percentage cut.</p>

<p>Then record the decisions. Charities registered with Charities Services now have a statutory duty to review governance procedures before 5 October 2026 and at least every three years afterwards, and a documented insurance review carried out during a major operational change is exactly the kind of evidence that duty contemplates. It is also the record that protects individual board members if the wisdom of a decision is questioned years later.</p>

<h2>Talk to Someone Who Places This Cover</h2>

<p>Run-off periods, employment practices sub-limits and the interaction between statutory liability and trustee liability are technical areas where generic commercial advice tends to be thin. charityinsurance.co.nz connects organisations with Registered Financial Service Providers who work with not-for-profit clients and have managed contract transitions before. Get a Quote and a specialist will be in touch within one business day.</p>

<p><em>Sources: VisionWest Community Trust media release, 3 September 2026; Charities Amendment Act 2023; Charities Services guidance on reviewing governance procedures.</em></p>
`,
  },
  {
    slug: 'pokie-grant-findings-charity-funding-risk',
    title: 'What the Pokie Grant Findings Mean for Funded Groups',
    excerpt: 'Internal Affairs found up to $28 million that should have reached community groups was spent on trust costs instead. For grant-funded organisations, the follow-on effects are practical.',
    date: '2026-09-15',
    author: 'The CharityInsurance Crew',
    readTime: '8 min read',
    category: 'Governance & Compliance',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=1920&q=80',
    content: `
<p>On 11 September 2026 the Department of Internal Affairs released the findings of a multi-year investigation into class 4 gambling operators — the trusts that run pokie machines in pubs and clubs and distribute the proceeds as community grants. The department's director of gambling, Vicki Scott, told RNZ that up to $28 million which should have been available for community grants had instead been used to cover trust expenses, including buying gaming machines. About three-quarters of the country's 32 trusts were non-compliant to some degree, and roughly a third engaged in what she described as deliberate creative accounting.</p>

<p>The department has secured commitments to return $11.5 million to community organisations through grants, suspended one operator's licence for six days, and issued new financial guidance to the sector. Scott said she was hopeful around $20 million could eventually be recovered through repayment plans, and that the investigation was continuing.</p>

<p>For context, Scott put the annual flow of class 4 proceeds to communities at roughly $340 million. Sector representatives pushed back on the framing rather than the facts. Gaming Machine Association chair Peter Dengate Thrush noted the figure was spread across the ten-year period the department reviewed and represented a small proportion of total flow. Pub Charity chief executive Martin Cheer accepted some trusts may have misunderstood the rules but told RNZ that ignorance of the law was no excuse and that the trusts should have done better.</p>

<h2>Why This Reaches Funded Organisations</h2>

<p>Sports clubs, community halls, rescue services, arts organisations and youth groups across the country are funded in part by these grants. None of them did anything wrong here. But three consequences land on the recipient side regardless.</p>

<p>The first is funding volatility. Scott was explicit that trusts will have to tighten their belts over coming years to return money to communities. Repayment plans have to come from somewhere, and the operating costs of a gaming trust are relatively fixed. Organisations that budget on the assumption that last year's grant will roughly repeat should treat the next two funding rounds as genuinely uncertain.</p>

<p>The second is tighter administration. A regulator that has just published findings about accounting practices and issued new financial guidance will expect operators to demonstrate control over where grant money goes. That expectation flows downhill as more specific grant conditions, more detailed acquittal requirements, and more willingness to seek repayment where funds were applied outside the approved purpose.</p>

<p>The third is reputational. Public confidence in the funding model is now a live question. Hāpai Te Hauora's chief operating officer Jason Alexander said in a statement that giving back money that should never have been misspent is not a penalty but the bare minimum. Organisations that receive gaming grants and want to keep receiving them benefit from being visibly, demonstrably clean about how the money is applied.</p>

<h2>Grant Conditions Are a Liability Exposure</h2>

<p>Boards tend to treat grant conditions as administrative, and they are not. A grant made for a specific purpose creates an obligation to apply the funds to that purpose. Where the money is spent elsewhere — even for a defensible operational reason, even with good intentions — the funder can seek repayment, and depending on the structure the individuals who authorised the spending can be named in that recovery action.</p>

<p>This is more common than it sounds, and it usually has nothing to do with dishonesty. A grant is approved for a minivan; the vehicle purchase is delayed; the funds sit in the general account and get used for wages during a cashflow squeeze; the intention is to replace them. Six months later the money has not been replaced and the acquittal is due. Nobody stole anything, but the organisation has a repayment obligation it cannot meet and a board that authorised the transfer.</p>

<p>Three controls prevent almost all of this. Restricted grant funds should be tracked separately in the accounts and reported to the board as a distinct line, so the balance is visible every month rather than at year end. Any decision to apply restricted funds to another purpose should require explicit board approval and, where the grant conditions require it, funder consent in writing before the money moves. And the acquittal deadline for every grant should sit on the governance calendar alongside the annual return, not in one staff member's inbox.</p>

<h2>Where Insurance Fits, and Where It Does Not</h2>

<p>Two covers are relevant here and they are frequently confused.</p>

<p>Fidelity or crime cover responds where money is taken dishonestly — an employee or volunteer diverting funds, falsifying invoices, or manipulating records for personal gain. It reimburses the organisation for the stolen amount, subject to policy terms and proof. This matters in the grant context because organisations handling restricted funds often have thin segregation of duties, with one person raising invoices, approving payments and reconciling the account. Most fidelity policies require some level of internal control as a condition of cover, and a board that has never asked what those requirements are may find them unmet at claim time.</p>

<p>Trustee liability cover, by contrast, responds to claims made against individual board members for governance decisions — including a funder's action to recover misapplied funds, or a Charities Services investigation into how an organisation was run. It funds legal defence costs, which are usually the largest expense in any such matter, and can respond to damages awarded personally against a trustee.</p>

<p>The distinction is worth stating plainly. Fidelity cover addresses money taken dishonestly. Trustee liability addresses claims against the people who govern. Neither policy reimburses a grant that was spent on the wrong thing through ordinary administrative error, because that is not a loss caused by dishonesty and it is not a third-party claim. The only protection against that outcome is the control environment, which is precisely why funders are increasingly interested in it.</p>

<h2>What Boards Should Do This Quarter</h2>

<p>The immediate task is a stocktake. Identify every current grant, its approved purpose, its acquittal deadline, and the balance of funds still held against it. Reconcile that list to the bank position. Organisations that cannot complete this exercise from existing records have identified their first governance improvement.</p>

<p>The second task is a stress test on the budget. If gaming grant income fell by a quarter over the next two funding rounds, which activities stop, and which fixed costs — insurance, lease, audit, compliance — continue regardless? Answering that in September is considerably more comfortable than answering it in the week a grant application is declined.</p>

<p>The third task fits neatly with a deadline already in the diary. Registered charities must review their governance procedures before 5 October 2026 and at least every three years thereafter under the Charities Amendment Act 2023. Financial delegations, restricted fund handling, grant acquittal responsibility and insurance adequacy all sit within scope of that review. Organisations doing the work anyway should use it to cover the ground this investigation has just made topical.</p>

<h2>Getting the Cover Right</h2>

<p>Fidelity limits are frequently set at a level chosen years ago and never revisited, and the internal control conditions attached to them are rarely read until a claim is made. charityinsurance.co.nz connects community organisations with Registered Financial Service Providers who place fidelity and trustee liability cover for grant-funded groups and can tell you what your policy actually requires of you. Get a Quote and a specialist will be in touch within one business day.</p>

<p><em>Sources: Department of Internal Affairs class 4 gambling investigation findings, 11 September 2026; RNZ interview with DIA director of gambling Vicki Scott; Hāpai Te Hauora statement, September 2026; Charities Amendment Act 2023.</em></p>
`,
  },
  {
    slug: "health-and-safety-law-changes-volunteer-groups",
    title: "Health and Safety Law Changes: What Volunteer Groups Need to Know",
    excerpt: "Changes to the Health and Safety at Work Act take effect on 1 April 2027. Here is how the new small and large split, critical risk and the clarified officer duty interact with the rules on volunteers, and what insurance can and cannot do.",
    date: '2026-10-10',
    author: 'The CharityInsurance Crew',
    readTime: '8 min read',
    category: 'Governance & Compliance',
    image: 'https://images.unsplash.com/photo-1593113598332-cd288d649433?auto=format&fit=crop&w=1920&q=80',
    content: `
<p>A substantial rewrite of workplace health and safety law is now on the statute book, and community organisations have less than six months to work out where they stand. The Health and Safety at Work Amendment Act 2026 received Royal Assent on 9 July 2026 and comes into force on 1 April 2027, according to <a href="https://www.mbie.govt.nz/business-and-employment/employment-and-skills/health-and-safety/health-and-safety-reform" target="_blank" rel="noopener noreferrer">MBIE's reform page</a>. For charities, clubs and trusts that run on volunteers, the changes interact with rules about volunteers that have been in the Act since 2015 and that many boards have never read closely.</p>

<h2>What the Amendment Act Changes</h2>

<p>WorkSafe's summary, <a href="https://www.worksafe.govt.nz/laws-and-regulations/acts/changes/understanding-the-changes-to-health-and-safety-law/" target="_blank" rel="noopener noreferrer">Understanding the changes to health and safety law</a>, describes four shifts that matter most to the sector.</p>

<p>The first is a new split between small and large organisations. WorkSafe defines a small business as one "having fewer than 20 workers for at least nine months of a financial year." From April 2027, according to WorkSafe's guidance on the <a href="https://www.worksafe.govt.nz/laws-and-regulations/acts/changes/updated-purpose-hswa/" target="_blank" rel="noopener noreferrer">updated purpose of the Act</a>, small organisations will only need to manage critical risks, while larger organisations must still manage all risks but prioritise critical ones when deciding where to spend time and money.</p>

<p>The second is the idea of critical risk itself. WorkSafe's page <a href="https://www.worksafe.govt.nz/laws-and-regulations/acts/changes/what-is-critical-risk/" target="_blank" rel="noopener noreferrer">What is a critical risk?</a> says a critical risk is one that is likely to lead to death, a notifiable injury, illness, incident or occupational disease, or a risk managed by regulations under the Act.</p>

<p>The third is the officer duty. WorkSafe says officer duties "have been clarified to focus on governance functions": understanding the relevant risks, making sure the organisation has the resources and processes to manage them, and verifying that those resources and processes are being used. Any duties an officer has as a worker are separate.</p>

<p>The fourth is recreational land. WorkSafe states that "Landowners will no longer have health and safety duties for people using their land for recreation purposes", although duties still apply where the recreation is connected to the landowner's work or where work is happening at the same time and place. Trusts that own reserves, tracks or sanctuaries open to the public should read that change carefully rather than assume it ends their exposure.</p>

<h2>Where Volunteers Fit</h2>

<p>None of the WorkSafe pages on the reform discusses volunteers directly, so the existing rules carry the weight. Under <a href="https://legislation.govt.nz/act/public/2015/70/en/2025-04-05B.pdf" target="_blank" rel="noopener noreferrer">section 19 of the Health and Safety at Work Act 2015</a>, a volunteer worker is a volunteer who works for the organisation with its knowledge or consent, on an ongoing and regular basis, as an integral part of what it does. WorkSafe's guidance on <a href="https://www.worksafe.govt.nz/managing-health-and-safety/getting-started/understanding-the-law/volunteers/keeping-volunteers-healthy-and-safe/" target="_blank" rel="noopener noreferrer">keeping volunteers healthy and safe</a> confirms that volunteer workers are classed as workers, while casual volunteers are treated as "other persons" at a workplace, in the same group as visitors.</p>

<p>The Act also lists activities that never make someone a volunteer worker: participating in fundraising, assisting with sports or recreation for an educational institute, sports club or recreation club, assisting an educational institute with activities outside its premises, and providing care for another person in the volunteer's own home.</p>

<p>This matters for the new small and large split. Because volunteer workers are workers under the Act, an organisation with a handful of paid staff and a large roster of regular volunteers should not assume it sits below the 20-worker line. WorkSafe has said it will publish further guidance on small organisations and critical risks before the changes take effect, and boards should check how that guidance treats volunteer workers before relying on small status.</p>

<h2>Groups With No Employees</h2>

<p>Some groups are outside the Act altogether. Section 17 defines a volunteer association as a group of volunteers working together for one or more community purposes where none of them employs anyone to carry out work for the association. WorkSafe confirms that volunteer associations are not PCBUs and so have no duties under the Act, but notes they may still owe a common law duty to take reasonable care of people involved in their activities. The moment a volunteer-run group employs someone, even part time, it becomes a PCBU.</p>

<p>That common law duty is where public liability cover does its work. A group that falls outside the Act can still be sued by someone injured at a working bee or a community event, and the cost of defending that claim does not depend on whether the regulator has any interest.</p>

<h2>Volunteer Officers</h2>

<p>Many charity boards are made up entirely of unpaid trustees or committee members. WorkSafe's guidance states that volunteer officers have the same due diligence duty as other officers, but do not commit an offence if they fail to meet it. That position comes from section 51 of the Act, which says a volunteer does not commit an offence under sections 47, 48 or 49 for failing to comply with a duty, except their own duties as a worker or as another person at a workplace.</p>

<p>Two cautions follow. First, an officer who is paid, such as a chief executive or a remunerated trustee, does not have that protection. Second, freedom from prosecution is not freedom from consequences. The organisation itself can still be prosecuted, and individual trustees can still face civil claims and, for registered charities, scrutiny under the Charities Act 2005. The clarified officer duty from April 2027 gives boards a clearer checklist to work through, and a minuted record of doing so is the best evidence that the duty was taken seriously.</p>

<h2>What Insurance Cannot Do</h2>

<p>Boards sometimes assume a statutory liability policy will pay a health and safety fine. It cannot. Section 29 of the Act provides that a policy indemnifying a person for a fine or infringement fee under the Act "is of no effect" to that extent, and makes it an offence to enter into, offer or pay such an indemnity, with penalties of up to $50,000 for an individual and $250,000 for any other person.</p>

<p>Section 29 is aimed at fines and infringement fees. It does not stop a policy from paying legal defence costs. Policy wordings differ on whether they also respond to reparation orders, investigation costs before any charge is laid, and claims against individual officers, so it is worth asking for those points to be confirmed in writing.</p>

<h2>Where Insurance Does Fit</h2>

<p>Three covers line up against the exposures described above.</p>

<p>Statutory liability responds to the organisation's own regulatory exposure, within the limits set by section 29. Trustee liability, sometimes called association liability or D&amp;O, responds to claims against individual board members for governance decisions, including how the board discharged its due diligence duty. Volunteer personal accident cover fills a different gap: ACC weekly compensation is available to people who were employees, self-employed or shareholder-employees when injured, according to <a href="https://www.acc.co.nz/im-injured/financial-support/weekly-compensation" target="_blank" rel="noopener noreferrer">ACC's weekly compensation page</a>, so a retired or non-earning volunteer receives treatment support but no income replacement.</p>

<h2>A Practical Plan Before April 2027</h2>

<p>Start by deciding which category the organisation falls into: volunteer association, small organisation or large organisation, counting volunteer workers carefully. Then list the activities most likely to cause death or serious harm, because under the new framework those are what WorkSafe will look at first. Typical examples in the sector include working at height on halls and churches, vehicle and quad bike use, chainsaw work, water-based activities and crowd management at events.</p>

<p>Next, map the board's oversight against the three officer themes WorkSafe describes, and record it. Registered charities that have just completed their governance review under the Charities Act will find much of the groundwork already done. Finally, review the insurance programme with the same list in hand: confirm what the statutory liability policy pays given section 29, whether trustee liability extends to everyone who now counts as an officer, and whether volunteers who carry out critical-risk work are protected beyond ACC.</p>

<h2>Get Your Cover Checked</h2>

<p>Health and safety reform is a good moment to look at statutory liability, trustee liability and volunteer accident cover together rather than one at a time. charityinsurance.co.nz passes enquiries to Registered Financial Service Providers who place cover for not-for-profit organisations. Get a Quote and a specialist will be in touch within one business day. For more on protecting volunteers, see our <a href="/charity-insurance/volunteer-accident-insurance/">volunteer accident insurance</a> page.</p>

<p><em>Sources: MBIE; WorkSafe; Health and Safety at Work Act 2015, sections 17, 19, 29 and 51; ACC. All checked 10 October 2026.</em></p>
`,
  },
  {
    slug: "supplier-cyber-breach-charity-obligations",
    title: "When Your Software Supplier Is Hacked: What Charities Must Do",
    excerpt: "The NCSC Cyber Threat Report 2026 puts digital supply chains among the major risks of the year. When a platform holding your donor or client data is breached, the Privacy Act obligations stay with you.",
    date: '2026-10-10',
    author: 'The CharityInsurance Crew',
    readTime: '7 min read',
    category: 'Cyber & Privacy',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1920&q=80',
    content: `
<p>Most charities no longer hold their most sensitive data on their own computers. Donor records sit in a cloud CRM, client notes in a case management platform, medication charts in a clinical system, and payroll with an outsourced provider. That arrangement is usually safer than a server in the office cupboard, but it creates a risk boards rarely discuss: what happens when the supplier is the one that gets hacked.</p>

<p>The National Cyber Security Centre's <a href="https://www.ncsc.govt.nz/news/cyber-threat-report-2026-leaders-need-to-prepare-now-for-the-impact-of-ai/" target="_blank" rel="noopener noreferrer">Cyber Threat Report 2026</a>, released on 24 September 2026, makes that question hard to ignore.</p>

<h2>What the NCSC Reported</h2>

<p>The <a href="https://www.ncsc.govt.nz/assets/insights/Documents/NCSC-CyberReport_2026-RGB-18092026.pdf" target="_blank" rel="noopener noreferrer">full report</a> covers the year to June 2026. The NCSC received 4,673 incident reports, and $23.8 million in direct financial loss was reported to it. It handled 369 incidents of potential national significance, 162 of which were linked to criminal or financially motivated actors, an 18 percent increase on the previous year. Four incidents were classified as highly significant, which the NCSC says matches the number recorded over the previous ten years combined.</p>

<p>One of the report's judgements is devoted to digital supply chains. It says supplier compromises have caused major incidents over the past year, and explains why attackers favour them: one compromised vendor can give access to many client organisations. It also notes that many suppliers are based overseas and that organisations here often have little visibility of their security settings.</p>

<h2>Three Incidents Worth Knowing</h2>

<p>The report describes several incidents that show how supplier compromises reach organisations that did nothing wrong themselves.</p>

<p>In February 2026 a medication management platform used across the health and care sector was hacked. According to the NCSC, attackers altered some patient records, and operations were disrupted at many aged care facilities, hospices and community pharmacies while the system was offline.</p>

<p>In late December 2025 an attacker used a valid user's credentials, stolen by information-stealing malware, to access a widely used patient portal. The NCSC reports that sensitive information for more than 99,000 patients was taken, and that the Ministry of Health concluded the breach was largely preventable, citing weaknesses including multi-factor authentication that was not mandatory.</p>

<p>In May 2026 a breach of a US-owned cloud learning management system affected more than thirty tertiary institutions, schools and education suppliers, with the Ministry of Education estimating 110,000 to 120,000 students and staff affected. Any charity that runs training, tutoring or education programmes on a third-party platform faces the same structural risk.</p>

<h2>Your Privacy Act Obligations Do Not Transfer</h2>

<p>The most important point for boards is legal rather than technical. The Office of the Privacy Commissioner's guidance on <a href="https://www.privacy.org.nz/resources-and-learning/knowledge-base/view/596/" target="_blank" rel="noopener noreferrer">which agency reports a privacy breach</a> says an organisation that uses another organisation to handle a task on its behalf, such as storing data or running a mail-out, "remains responsible for reporting any privacy breaches". The guidance adds that the contract with the provider should require the provider to tell the organisation about any breach, and that section 11 of the Privacy Act 2020 determines whether one or both organisations are treated as holding the information.</p>

<p>The Commissioner applied that principle after the patient portal incident. Its <a href="https://www.privacy.org.nz/assets/DOCUMENTS/20260901-Notice-for-Primary-Care-Providers-re-MMH-data-breach-reporting-requirements-A1151130.pdf" target="_blank" rel="noopener noreferrer">notice to primary care providers</a> explains that providers using third-party platforms are generally responsible for reporting serious breaches under section 114, but that in that case the platform's own notification satisfied the requirement and individual providers did not need to notify separately. That was a specific decision about one incident. A charity should not assume the same outcome when its own supplier is breached.</p>

<p>In practice, the charity that collected the information is likely to be the one its clients, donors and funders hold responsible, regardless of where the breach occurred.</p>

<h2>Questions to Ask Your Suppliers</h2>

<p>The NCSC report recommends that organisations assess suppliers' cyber security as part of procurement, write specific data protection and security expectations into contracts, get ongoing assurance that suppliers maintain them, and plan and exercise a response to a breach involving a third-party application. For a charity, that translates into a short set of questions for each supplier that holds personal information.</p>

<ul>
<li>Where is our data stored, and who can access it?</li>
<li>Is multi-factor authentication enforced for every user, including our staff and volunteers?</li>
<li>How quickly will you tell us if our data may have been accessed, and is that commitment in the contract?</li>
<li>What happens to our data if we end the contract or you cease trading?</li>
<li>What does the contract say about your liability to us if a breach on your side causes us loss?</li>
</ul>

<p>The last question often has an uncomfortable answer. Software terms often cap the supplier's liability, which can mean the cost of responding to a supplier breach may fall largely on the charity.</p>

<h2>Where Cyber Insurance Fits</h2>

<p>Cyber policies differ considerably in how they treat incidents that start at a supplier, and this is one of the most important areas to check before renewal.</p>

<p>Breach response cover, which funds forensic investigation, legal advice on notification, and communication with affected people, may respond where the charity's own data is compromised on a supplier's system, but some wordings require the incident to occur on systems the insured owns or controls. Business interruption cover is similar. Loss caused by a supplier's outage is often treated as dependent or contingent business interruption, which may be excluded, sub-limited or limited to named providers.</p>

<p>The <a href="/charity-insurance/charity-cyber-insurance/">charity cyber insurance</a> page explains how cyber cover sits alongside crime and trustee liability policies. For supplier risk specifically, ask whether the policy responds to a breach of your data held by a third party, whether dependent business interruption is included and at what limit, and whether the insurer's incident response panel can work with an affected supplier.</p>

<h2>A Short Checklist for the Board</h2>

<p>List every external platform that holds personal information about donors, clients, staff or volunteers. For each one, note what data it holds, whether multi-factor authentication is enforced, and what the contract says about breach notification. Make sure the charity's incident response plan includes a scenario where the supplier, not the charity, is breached. Then take the list to your insurance review and confirm how the cyber policy responds to each platform.</p>

<p>Registered charities that have just completed a governance review under the Charities Act 2005 may find supplier oversight was not covered. It is a reasonable item to add at the next board meeting.</p>

<h2>Get Your Cyber Cover Reviewed</h2>

<p>charityinsurance.co.nz passes enquiries to Registered Financial Service Providers who place cyber cover for not-for-profit organisations and can explain how a policy treats incidents at your suppliers. Get a Quote and a specialist will be in touch within one business day.</p>

<p><em>Sources: NCSC Cyber Threat Report 2026; Office of the Privacy Commissioner. All checked 10 October 2026.</em></p>
`,
  },
];
