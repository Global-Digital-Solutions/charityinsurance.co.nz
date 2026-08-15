export interface LandingPage {
  slug: string;
  metaTitle: string;
  metaDesc: string;
  h1: string;
  intro: string;
  heroImage: string;
  keyPoints: string[];
  whyUs: string;
  relatedOrgs: string[];
  coverageAngle: string;
  cta: string;
}

export const landingPages: LandingPage[] = [
  {
    slug: 'nfp-insurance',
    metaTitle: 'Not for Profit Insurance | Get a Quote Today',
    metaDesc:
      'Compare not-for-profit insurance from leading brokers. Public liability, D&O, property and more for charities and trusts. Get a Quote today.',
    h1: 'Not for Profit Insurance',
    intro:
      'Not-for-profit organisations face unique risks that standard commercial policies rarely address well. From volunteer liability and property damage to trustee exposure and event cancellation, the breadth of cover your organisation needs depends on its size, activities, and governance structure. Our panel of Registered Financial Service Providers specialises in tailoring insurance solutions for charities, incorporated societies, community trusts, and every kind of mission-driven group.',
    heroImage: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a',
    keyPoints: [
      'Public liability cover for activities involving members, volunteers, and the public',
      'Trustees and Officers (D&O) protection covering governance decisions and statutory breaches',
      'Property and contents cover for owned or leased premises and equipment',
      'Employment practices liability for paid staff and volunteer management disputes',
      'Cyber liability cover as charities increasingly handle donor and beneficiary data',
      'Fidelity/crime cover protecting against internal theft or fraud',
    ],
    whyUs:
      'charityinsurance.co.nz connects not-for-profit organisations with brokers who understand the sector inside out — from Charities Act obligations to Incorporated Societies Act re-registration requirements. We compare cover across the market so you get the right policy at a competitive premium, without wading through generic commercial product disclosures. Get a Quote and a specialist will be in touch within one business day.',
    relatedOrgs: [
      'registered-charities',
      'community-groups-trusts',
      'foundations-trusts',
      'social-services',
    ],
    coverageAngle:
      'Public liability is the single most important starting point for most not-for-profit organisations. Whether you run a community drop-in centre, coordinate volunteers at outdoor events, or provide social services in clients\' homes, a liability claim can easily exceed $1 million once legal costs are included. Many funders and venue hirers now require a current certificate of currency before approving grants or booking agreements, making adequate public liability cover both a financial safeguard and a practical operational necessity.',
    cta: 'Get a Quote',
  },
  {
    slug: 'incorporated-society-insurance',
    metaTitle: 'Incorporated Society Insurance | IS Act 2022',
    metaDesc:
      'Insurance for incorporated societies under the IS Act 2022. Officer duties are now statutory — protect your committee with D&O cover. Get a Quote.',
    h1: 'Incorporated Society Insurance',
    intro:
      'The Incorporated Societies Act 2022 introduced significant changes for the approximately 24,000 incorporated societies that operate across the country, with all existing societies required to re-register under the new Act by the 5 April 2026 deadline. The Act codifies officer duties — including duties of care, to act in good faith, and to avoid conflicts of interest — making committee members personally accountable in ways the old 1908 Act never did. Insurance that covers these new statutory exposures is no longer optional; it is a governance essential.',
    heroImage: 'https://images.unsplash.com/photo-1552664730-d307ca884978',
    keyPoints: [
      'Officers & Directors (D&O) cover aligned with the new statutory officer duties under the IS Act 2022',
      'Public liability for members, volunteers, events, and third parties',
      'Cover for the personal liability of committee members who were previously unprotected under the 1908 Act',
      'Employment practices liability for societies with paid staff',
      'Property and equipment cover for clubrooms, gear, and leased premises',
      'Legal defence costs cover — often the largest expense in any complaint or claim',
    ],
    whyUs:
      'Our broker panel has closely followed the IS Act 2022 changes and understands how the new officer duty provisions interact with D&O and professional indemnity policies. If your society completed re-registration before the April 2026 deadline, now is the right moment to review whether your insurance has kept pace with your new legal obligations. charityinsurance.co.nz makes that review straightforward — one form, multiple specialists.',
    relatedOrgs: [
      'sports-clubs',
      'community-groups-trusts',
      'arts-culture',
      'environmental-conservation',
    ],
    coverageAngle:
      'Directors and Officers (D&O) liability — sometimes called Trustees and Officers cover for not-for-profit entities — is the cover most urgently relevant under the IS Act 2022. Officers of re-registered societies can now be held personally liable for breaching their statutory duties, even where they acted without personal financial gain. D&O policies cover the legal costs and damages arising from such claims, protecting committee members\' personal assets. Given that most incorporated society committees are staffed by unpaid volunteers, personal exposure of this kind is a genuine deterrent to good governance participation — and the right D&O policy removes that barrier.',
    cta: 'Get a Quote',
  },
  {
    slug: 'sports-club-insurance',
    metaTitle: 'Sports Club Insurance | charityinsurance.co.nz',
    metaDesc:
      'Insurance for sports clubs and associations — public liability, property, volunteers, and D&O cover. Compare brokers. Get a Quote today.',
    h1: 'Sports Club Insurance',
    intro:
      'Sports clubs and regional associations carry risks that sit at the intersection of public liability, property, employment law, and volunteer management — often with stretched budgets and committee members who rotate annually. Whether your club runs weekend competitions at a local ground, manages a clubroom, or coordinates hundreds of junior members, the right insurance package needs to match your specific activities and governance structure. Specialist brokers understand the difference between match-day liability and an administration error by a committee member, and they can package cover accordingly.',
    heroImage: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211',
    keyPoints: [
      'Public liability for matches, training, club events, and member activities',
      'Premises and contents cover for clubrooms, equipment sheds, and hired facilities',
      'Voluntary workers\' accident cover — ACC does not cover all volunteer injury scenarios',
      'Officers and Trustees cover protecting committee members from personal liability',
      'Equipment and sports gear cover for theft, damage, and transit',
      'Event cancellation cover for tournaments, galas, and fundraising functions',
    ],
    whyUs:
      'charityinsurance.co.nz works with brokers who understand national sports bodies\' requirements, venue-owner insurance conditions, and the specific risks of community sport at junior and senior levels. We make it easy to compare policies without navigating jargon-heavy product schedules on your own. Get a Quote and connect with a specialist who knows the sports sector.',
    relatedOrgs: [
      'sports-clubs',
      'youth-organisations',
      'community-groups-trusts',
    ],
    coverageAngle:
      'Public liability is the cornerstone of any sports club policy. A visiting spectator who trips on uneven ground, a junior player injured by a piece of club equipment, or a neighbouring property damaged during a match — these are real scenarios where a club without adequate liability cover could face a judgment it cannot pay. Many national sport associations and local councils require affiliated clubs to carry a minimum public liability limit (commonly $2 million or $5 million) as a condition of ground access or registration. Getting the right limit, with the right activity extensions, is where specialist broker advice makes a material difference.',
    cta: 'Get a Quote',
  },
  {
    slug: 'church-insurance',
    metaTitle: 'Church Insurance | Religious Organisation Cover',
    metaDesc:
      'Specialist insurance for churches and religious organisations — property, public liability, pastoral liability, and D&O. Get a Quote today.',
    h1: 'Church Insurance',
    intro:
      'Churches and religious organisations operate across a uniquely wide range of activities — regular worship services, community outreach programmes, childcare and youth groups, heritage property management, and commercial premises leasing — often with a blend of employed staff, ordained ministers, and large volunteer cohorts. Generic commercial policies frequently exclude pastoral liability, counselling exposures, and heritage property replacement clauses that faith communities specifically need. Specialist brokers who understand the denominational structure and property ownership models of religious organisations can structure cover that is both comprehensive and cost-effective.',
    heroImage: 'https://images.unsplash.com/photo-1438032005730-c779502df39b',
    keyPoints: [
      'Property cover for heritage buildings, including agreed-value options for irreplaceable structures',
      'Public liability for services, community programmes, and property used by third parties',
      'Pastoral liability covering counselling and ministerial duties',
      'Youth group and childcare programme liability extensions',
      'Management liability protecting elders, vestries, and church boards',
      'Fidelity cover against misappropriation of donated funds',
    ],
    whyUs:
      'charityinsurance.co.nz connects churches and faith communities with brokers who have placed cover for denominations ranging from small independent congregations to multi-site national churches. The right broker understands your governance structure — whether that is a board of elders, a vestry, or a denominational trust — and ensures your policy reflects it accurately. Get a Quote and speak with a specialist today.',
    relatedOrgs: [
      'churches-religious',
      'community-groups-trusts',
      'marae-iwi-trusts',
    ],
    coverageAngle:
      'Heritage property cover is the single most complex insurance challenge for many older churches. Standard commercial material damage policies are typically written on a "new for old" replacement basis using modern construction costs, but many heritage buildings cannot legally be replaced with an equivalent structure — and the heritage reinstatement cost can be several times a standard rebuild figure. Specialist underwriters offer agreed-value heritage property policies that take the actual heritage reinstatement costs into account, preventing a situation where a claim settlement falls dramatically short of what rebuilding actually requires.',
    cta: 'Get a Quote',
  },
  {
    slug: 'volunteer-organisation-insurance',
    metaTitle: 'Volunteer Organisation Insurance | Get a Quote',
    metaDesc:
      'Insurance for volunteer organisations. Covers ACC gaps, personal accident for volunteers, public liability, and D&O. Get a Quote today.',
    h1: 'Volunteer Organisation Insurance',
    intro:
      'Volunteer-driven organisations sit in a complex position when it comes to injury cover: ACC provides some protection for workplace injuries, but volunteers are not employees, and the cover they receive under ACC can be incomplete or contested in certain circumstances. Beyond personal injury, volunteer organisations need public liability cover for any harm caused to third parties during activities, and management liability cover for the governance decisions made by unpaid committee members who give their time freely. Getting the right mix of cover is essential for protecting both your volunteers and the people your organisation serves.',
    heroImage: 'https://images.unsplash.com/photo-1593113646773-028c64a8f1b8',
    keyPoints: [
      'Voluntary workers\' personal accident cover filling gaps not addressed by ACC',
      'Public liability for activities, outreach programmes, and community events',
      'Property cover for equipment, supplies, and vehicles used by volunteers',
      'Management liability protecting volunteer committee members from personal claims',
      'Cover for volunteers working in high-risk environments such as conservation, social services, or disaster relief',
      'Group personal accident policies providing lump-sum benefits for serious injury or death',
    ],
    whyUs:
      'charityinsurance.co.nz works with brokers who understand that volunteers are the backbone of community organisations — and that their wellbeing needs to be protected properly. We help organisations assess their ACC coverage gaps and arrange supplementary policies that give volunteers real peace of mind. Get a Quote and a specialist will assess your organisation\'s specific volunteer profile.',
    relatedOrgs: [
      'community-groups-trusts',
      'social-services',
      'environmental-conservation',
      'animal-welfare',
    ],
    coverageAngle:
      'ACC covers treatment costs and a portion of lost earnings for work-related injuries, but for unpaid volunteers this "lost earnings" component is effectively zero — and many volunteers do not realise their cover under ACC may be limited or disputed if the activity falls outside narrowly defined "work" categories. A voluntary workers\' personal accident policy fills this gap by providing lump-sum payments for permanent disability, death benefits, and weekly compensation during recovery, regardless of ACC status. For organisations that rely on volunteer goodwill, offering this protection is both an ethical responsibility and a practical recruitment and retention tool.',
    cta: 'Get a Quote',
  },
  {
    slug: 'charity-public-liability',
    metaTitle: 'Charity Public Liability Insurance | Compare',
    metaDesc:
      'Compare charity public liability insurance. Essential cover for events, premises, and activities. Registered Financial Service Providers. Get a Quote.',
    h1: 'Charity Public Liability Insurance',
    intro:
      'Public liability insurance protects your charity against claims from third parties — members of the public, attendees, contractors, or neighbours — who suffer injury or property damage as a result of your organisation\'s activities. For charities that run events, operate premises, deliver outreach programmes, or use volunteers in the community, this is the most fundamental layer of protection required. Funders, councils, and venue operators commonly require a current certificate of currency before approving grants or facility use agreements.',
    heroImage: 'https://images.unsplash.com/photo-1532629345422-7515f3d16bb6',
    keyPoints: [
      'Third-party bodily injury and property damage cover for all charity activities',
      'Events and functions extensions covering temporary venues, marquees, and outdoor activities',
      'Products liability for organisations that manufacture, sell, or distribute goods',
      'Contractual liability cover for indemnities given to councils, funders, and landlords',
      'Cover for hired and borrowed equipment and third-party property in your care',
      'Limits from $1 million to $20 million available depending on activity risk profile',
    ],
    whyUs:
      'charityinsurance.co.nz works with Registered Financial Service Providers who specialise in pricing charity public liability based on the actual risk profile of your activities — not a generic "not-for-profit" category. That means smaller charities with low-risk activities pay appropriately lower premiums, while high-activity organisations get the higher limits they genuinely need. Get a Quote to receive a comparison across multiple insurers.',
    relatedOrgs: [
      'registered-charities',
      'sports-clubs',
      'community-groups-trusts',
      'arts-culture',
    ],
    coverageAngle:
      'Event-related public liability is the area where most charity claims occur. A food stall at a fundraising fair, a temporary stage at a community concert, a crowd gathered at a charity walk — each scenario creates third-party exposure that your standard premises liability may not automatically extend to cover. Event-specific extensions or blanket charity public liability policies with event clauses ensure that your cover follows your activities, not just your fixed address. Always confirm with your broker that temporary structures, hired equipment, and activities at third-party premises are explicitly included in your policy wording.',
    cta: 'Get a Quote',
  },
  {
    slug: 'charity-trustee-liability',
    metaTitle: 'Charity Trustee Liability Insurance | D&O',
    metaDesc:
      'Protect charity trustees and officers from personal liability. Covers governance decisions, Charities Act breaches, and legal defence costs. Get a Quote.',
    h1: 'Charity Trustee Liability Insurance',
    intro:
      'Charity trustees and officers carry significant personal responsibility — and personal exposure — for the governance decisions they make in their unpaid roles. The Charities Amendment Act 2023 expanded the definition of "officer" to capture a broader range of governance participants, meaning more individuals are now formally accountable under the Act than previously understood. Without Trustees and Officers (T&O) or Directors and Officers (D&O) insurance, a successful claim against a trustee or officer could result in personal financial loss for someone who volunteered their time and expertise in good faith.',
    heroImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40',
    keyPoints: [
      'Personal liability cover for trustees, officers, and directors named in claims',
      'Legal defence costs, which typically dwarf any eventual settlement or judgment',
      'Coverage for governance decisions challenged by members, employees, regulators, or third parties',
      'Employment practices liability for wrongful dismissal, discrimination, and harassment claims',
      'Cover aligned with the expanded officer definition under the Charities Amendment Act 2023',
      'Run-off cover for former trustees who face claims after leaving their roles',
    ],
    whyUs:
      'charityinsurance.co.nz connects charities with brokers who understand the specific governance obligations under the Charities Act and Incorporated Societies Act — and who can structure T&O policies that genuinely reflect those obligations. Good volunteer trustees should never have to worry about personal financial exposure; the right policy ensures they do not. Get a Quote to protect your board.',
    relatedOrgs: [
      'registered-charities',
      'foundations-trusts',
      'aged-care-organisations',
      'hospices-health-charities',
    ],
    coverageAngle:
      'Legal defence costs are the most immediate risk for charity trustees facing a complaint or investigation. Even a claim that is ultimately unsuccessful can cost tens of thousands of dollars in legal fees before it is resolved. T&O and D&O policies pay these costs — subject to the policy terms — from the moment a claim is notified, rather than leaving the trustee to fund their own defence and seek reimbursement later. For charities that rely on attracting experienced governance talent, being able to demonstrate that robust D&O cover is in place is an increasingly important part of board recruitment.',
    cta: 'Get a Quote',
  },
  {
    slug: 'charity-event-insurance',
    metaTitle: 'Charity Event Insurance | Cover for Events',
    metaDesc:
      'Event insurance for charity fundraisers, galas, community events, and tournaments. Cancellation, liability, and equipment cover. Get a Quote.',
    h1: 'Charity Event Insurance',
    intro:
      'Fundraising events — galas, fun runs, auctions, concerts, tournaments, and community fairs — are central to many charities\' revenue models, but they carry material financial and liability risks that standard annual policies may not fully address. Event-specific insurance, or a charity public liability policy with comprehensive event extensions, ensures that cancellation losses, third-party injury claims, equipment damage, and personal accident exposures are all accounted for before your event opens its doors. The last thing any organiser needs after a successful fundraiser is an uninsured claim eroding the proceeds.',
    heroImage: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87',
    keyPoints: [
      'Event cancellation and postponement cover for adverse weather, venue failure, or key person unavailability',
      'Public liability for event attendees, performers, contractors, and the general public',
      'Equipment and hired property cover for staging, audio-visual gear, and catering equipment',
      'Personal accident cover for event volunteers and staff',
      'Prize indemnity insurance for hole-in-one competitions, raffles, and prize draws',
      'Liquor liability extensions for events where alcohol is served',
    ],
    whyUs:
      'charityinsurance.co.nz works with brokers who can arrange single-event policies for one-off occasions or annual event programmes that cover all events within a 12-month schedule under a single premium. Either way, our specialists work around your event calendar, not the other way around. Get a Quote at least four weeks before your event to allow adequate time for underwriting.',
    relatedOrgs: [
      'sports-clubs',
      'arts-culture',
      'community-groups-trusts',
      'churches-religious',
    ],
    coverageAngle:
      'Event cancellation cover is often overlooked until it is too late. For a charity whose annual gala raises a significant portion of its operating budget, cancellation due to a severe weather event, venue damage, or a key performer pulling out can represent a devastating financial blow — particularly when non-refundable deposits, venue hire fees, and marketing costs have already been committed. Event cancellation policies reimburse these sunk costs and, where applicable, can also cover the projected net revenue that the event was expected to generate. Given that most policies require purchase well in advance of the event date, early arrangement is critical.',
    cta: 'Get a Quote',
  },
  {
    slug: 'compare-charity-insurance',
    metaTitle: 'Compare Charity Insurance Providers | Quotes',
    metaDesc:
      'Compare charity insurance from Chubb, AIG, Zurich, Berkley and more. Registered Financial Service Providers find the best policy for your organisation.',
    h1: 'Compare Charity Insurance Providers',
    intro:
      'The charity insurance market is served by a number of specialist underwriters — including Chubb, AIG, Zurich, and Berkley — each with different policy wordings, exclusions, pricing models, and appetite for different types of organisations. Comparing them without expert guidance is time-consuming and easy to get wrong; a policy that looks cheaper at headline premium may have narrower cover, lower sub-limits, or tighter exclusions that only become apparent at claim time. A specialist broker compares the market on your behalf and presents options with transparent differences highlighted.',
    heroImage: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf',
    keyPoints: [
      'Chubb: strong D&O and management liability products with broad policy wordings',
      'AIG: comprehensive not-for-profit packages including cyber and employment practices',
      'Zurich: competitive public liability and property options for mid-to-large charities',
      'Berkley: specialist social services and aged care sector underwriting capacity',
      'Broker access to Lloyd\'s of London wordings for specialist or high-value risks',
      'Annual market reviews ensure your premium stays competitive as your organisation grows',
    ],
    whyUs:
      'charityinsurance.co.nz connects you with Registered Financial Service Providers who have panel access to all major charity insurance underwriters — not just one or two preferred insurers. That means genuine market comparison, not a rebadged single-carrier product. Our brokers work on commission paid by the insurer, so there is no additional cost to you for the comparison service. Get a Quote to start the comparison process.',
    relatedOrgs: [
      'registered-charities',
      'foundations-trusts',
      'social-services',
    ],
    coverageAngle:
      'Policy wording quality is the most important — and most overlooked — factor when comparing charity insurance providers. Two policies at similar premium levels can have dramatically different outcomes at claim time depending on how they define "occurrence," whether defence costs are inside or outside the limit of liability, and what prior acts coverage they provide for trustees who joined after a potential governance issue arose. A specialist broker reads the policy wordings side by side, not just the product comparison sheets, and can advise on which wordings offer materially better protection for your specific governance and operational risk profile.',
    cta: 'Get a Quote',
  },
  {
    slug: 'charity-insurance-auckland',
    metaTitle: 'Charity Insurance Auckland | Get a Quote',
    metaDesc:
      'Charity insurance for Auckland organisations. Compare brokers covering public liability, D&O, property and events across the Auckland region. Get a Quote.',
    h1: 'Charity Insurance for Auckland Organisations',
    intro:
      'Auckland is home to the largest concentration of registered charities and not-for-profit organisations in the country, operating across a wide spectrum of causes — from social services in South Auckland to arts organisations in the CBD, environmental groups on the urban fringes, and sports clubs spread across the super-city\'s 21 local board areas. The region\'s diverse population and complex funding landscape create equally diverse insurance needs, and specialist brokers with Auckland sector knowledge are best placed to match those needs to the right policy at the right price.',
    heroImage: 'https://images.unsplash.com/photo-1507699622108-4be3abd695ad',
    keyPoints: [
      'Public liability cover for activities across Auckland\'s many councils and venues',
      'Property cover calibrated for Auckland\'s commercial and heritage property market',
      'D&O and trustee liability for Auckland-based boards navigating the Charities Act',
      'Event cover for Auckland-based fundraisers, festivals, and community gatherings',
      'Cyber liability for organisations handling donor and client data under the Privacy Act 2020',
      'Broker relationships with insurers who understand Auckland\'s charity sector funding models',
    ],
    whyUs:
      'charityinsurance.co.nz works with Registered Financial Service Providers who are active in the Auckland charity market and understand the operational realities of running a not-for-profit across the region. Whether your organisation is based in Waitematā, Manukau, Waitākere, or anywhere across the super-city, our brokers can arrange and manage your insurance programme efficiently. Get a Quote to be connected with an Auckland-familiar specialist.',
    relatedOrgs: [
      'registered-charities',
      'social-services',
      'community-groups-trusts',
      'arts-culture',
    ],
    coverageAngle:
      'Property insurance is a particular priority for Auckland charities that own or lease premises in the region\'s high-value commercial property market. Replacement costs in Auckland are among the highest in the country, and many charities operating from leased premises do not realise their lease may require them to carry contents and glass cover at specified limits — with personal liability to the landlord for underinsurance. A specialist broker reviews your lease obligations as part of the policy design process, ensuring your property cover aligns with both your replacement cost exposure and your contractual requirements.',
    cta: 'Get a Quote',
  },
  {
    slug: 'charity-insurance-wellington',
    metaTitle: 'Charity Insurance Wellington | Get a Quote',
    metaDesc:
      'Charity insurance for Wellington organisations. Specialists in not-for-profit liability, D&O, property, and event cover. Get a Quote today.',
    h1: 'Charity Insurance for Wellington Organisations',
    intro:
      'Wellington\'s compact geography and high concentration of government ministries, arts organisations, and advocacy groups creates a charity sector with distinctive characteristics — including close proximity to regulatory bodies, a strong tradition of community engagement, and a significant number of organisations that combine charitable status with policy influence. The seismic risk profile of the Wellington region also places specific demands on property insurance, particularly for older heritage buildings that house many established charities.',
    heroImage: 'https://images.unsplash.com/photo-1589802829985-817e51171b92',
    keyPoints: [
      'Seismic-risk-aware property cover for Wellington\'s older building stock',
      'Public liability for Wellington CBD events, community programmes, and advocacy activities',
      'D&O and management liability for Wellington-based boards and governance committees',
      'Event cover for Wellington\'s festival, arts, and community event calendar',
      'Employment practices liability for staff and volunteer management',
      'Cyber liability for advocacy and social services organisations handling sensitive data',
    ],
    whyUs:
      'charityinsurance.co.nz connects Wellington charities with Registered Financial Service Providers who understand the specific risks of operating in the capital — including the property underwriting implications of Wellington\'s earthquake hazard and the advocacy sector\'s distinctive governance and reputational exposure. Get a Quote to connect with a Wellington-familiar broker today.',
    relatedOrgs: [
      'registered-charities',
      'social-services',
      'community-groups-trusts',
    ],
    coverageAngle:
      'Seismic risk is the most important property insurance consideration for Wellington-based charities. Many older premises that house established community organisations have earthquake-prone building designations, and insurers price and sub-limit cover for these properties differently from standard commercial stock. Understanding your building\'s engineering assessment status, your landlord\'s insurance obligations, and the interaction between EQC and private top-up cover is essential for ensuring you are not left underinsured following a seismic event. Our broker panel includes specialists with Wellington earthquake risk expertise who can structure appropriate cover.',
    cta: 'Get a Quote',
  },
  {
    slug: 'charity-insurance-christchurch',
    metaTitle: 'Charity Insurance Christchurch | Get a Quote',
    metaDesc:
      'Charity insurance for Christchurch organisations. Specialists in not-for-profit liability, D&O, and post-rebuild property cover. Get a Quote today.',
    h1: 'Charity Insurance for Christchurch Organisations',
    intro:
      'Christchurch\'s charity sector has been shaped profoundly by the experience of the 2010–2011 earthquakes and the subsequent rebuild — and many organisations have emerged from that period with a much clearer understanding of the importance of adequate, well-structured insurance. The rebuild environment has also brought a new wave of community initiatives and social enterprises into the sector, and these newer organisations need to build robust insurance programmes from the ground up. Specialist brokers with Canterbury region experience understand both the legacy property issues and the needs of post-rebuild organisations.',
    heroImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c',
    keyPoints: [
      'Property cover for Christchurch\'s post-rebuild commercial and community premises',
      'Public liability for community activities across Canterbury and the wider South Island',
      'D&O and trustee liability for Christchurch-based boards and committees',
      'Event cover for Christchurch\'s growing community and arts event calendar',
      'Earthquake and natural disaster extensions appropriate for the Canterbury region',
      'Insurance reviews for organisations that have changed premises or structure post-rebuild',
    ],
    whyUs:
      'charityinsurance.co.nz works with Registered Financial Service Providers who have walked alongside Canterbury charities through the rebuild process and understand the specific insurance history and property challenges of the region. If your organisation\'s insurance has not been thoroughly reviewed since the rebuild, now is the right time. Get a Quote and a specialist will assess your current cover.',
    relatedOrgs: [
      'registered-charities',
      'community-groups-trusts',
      'social-services',
    ],
    coverageAngle:
      'Post-rebuild property insurance in Christchurch requires careful attention to reinstatement values. The rebuild period saw significant construction cost escalation, and organisations that set their sums insured based on older valuations may now be materially underinsured — exposing them to averaging clauses that reduce claim payments proportionally. A specialist broker will recommend a current replacement cost valuation to establish the right sum insured, and will also review whether your policy includes a demolition and professional fees clause, which is essential if a future event requires partial or full demolition before rebuilding can begin.',
    cta: 'Get a Quote',
  },
  {
    slug: 'small-charity-insurance',
    metaTitle: 'Small Charity Insurance | Tier 4 Organisations',
    metaDesc:
      'Affordable insurance for small and micro charities. Tier 4 threshold is $140k expenses. Public liability, D&O, and property. Get a Quote today.',
    h1: 'Small Charity Insurance',
    intro:
      'Small and micro charities — those operating below Charities Services\' Tier 4 reporting threshold of $140,000 in annual expenses — are often the most under-insured segment of the sector. With limited budgets and volunteer committees who may not have insurance expertise, small charities frequently operate without adequate public liability cover, no trustee protection, and no contingency for property damage or a legal dispute. The good news is that appropriately sized policies for small charities are genuinely affordable — often costing less per year than a single event venue hire.',
    heroImage: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c',
    keyPoints: [
      'Public liability policies from $1 million for low-risk community activities',
      'Combined small charity packages covering liability, property, and D&O in a single policy',
      'Affordable trustee and officers cover protecting volunteer committee members',
      'Scalable cover that grows with your organisation as income and activities expand',
      'Tier 4 charities (under $140k expenses) qualify for simplified application processes with some insurers',
      'Annual review service to ensure cover keeps pace with organisational growth',
    ],
    whyUs:
      'charityinsurance.co.nz helps small and micro charities access the same quality of specialist broker advice that large charities take for granted. Our brokers understand that small organisations need straightforward, affordable policies — not complex commercial programmes — and they know which insurers offer the best small-charity products. Get a Quote; the process is simple and the premium may surprise you.',
    relatedOrgs: [
      'registered-charities',
      'community-groups-trusts',
      'animal-welfare',
    ],
    coverageAngle:
      'Combined liability and management packages are the most cost-effective starting point for small charities. Rather than purchasing separate public liability, employers\' liability, and D&O policies, a combined package from a specialist not-for-profit insurer typically provides all three covers under a single policy document at a significantly lower aggregate premium than buying each cover individually. For Tier 4 charities with straightforward activities and small volunteer committees, these packages are designed for simplicity — short application forms, minimal underwriting information requirements, and annual flat premiums that are easy to budget for.',
    cta: 'Get a Quote',
  },
  {
    slug: 'charity-governance-insurance',
    metaTitle: 'Charity Governance Insurance | D&O Protection',
    metaDesc:
      'Governance insurance for charity boards and officers. Charities Amendment Act 2023 expanded officer duties. Protect your trustees. Get a Quote.',
    h1: 'Charity Governance Insurance',
    intro:
      'Governance insurance — typically structured as a Directors and Officers (D&O) or Trustees and Officers (T&O) policy — has become an increasingly urgent conversation for charity boards following the Charities Amendment Act 2023, which expanded the definition of "officer" and strengthened the obligations of those who govern registered charities. With a mandatory governance review cycle set against an October 2026 milestone for many organisations, boards that have not yet assessed their personal liability exposure are running out of time to do so proactively.',
    heroImage: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2',
    keyPoints: [
      'D&O and T&O cover for trustees, officers, and governance committee members',
      'Expanded coverage aligned with the Charities Amendment Act 2023\'s broader officer definition',
      'Employment practices liability for charities with paid staff reporting to the board',
      'Regulatory investigation defence costs for Charities Services or Commerce Commission inquiries',
      'Run-off cover for outgoing trustees who may face retrospective claims after leaving the board',
      'Crisis communications cover helping boards manage reputational exposure during governance disputes',
    ],
    whyUs:
      'charityinsurance.co.nz connects charity boards with Registered Financial Service Providers who have placed governance cover for charities operating under the Charities Act and the Incorporated Societies Act. Our brokers will review your board structure, identify which individuals fall within the expanded officer definition under the 2023 Act, and recommend a T&O policy that covers all of them — not just the named trustees on the certificate. Get a Quote before your next board meeting.',
    relatedOrgs: [
      'registered-charities',
      'foundations-trusts',
      'disability-support',
      'hospices-health-charities',
    ],
    coverageAngle:
      'Regulatory investigation defence cover is the governance insurance feature most relevant to the post-Charities Amendment Act 2023 environment. Charities Services has strengthened its powers to investigate governance conduct, and a formal investigation — even one that results in no adverse finding — can consume substantial legal resources over months or years. A T&O policy with investigation defence cover pays the reasonable legal costs of responding to a Charities Services inquiry from the date it is notified, without requiring the board to wait for a formal claim to be issued. For boards facing the October 2026 governance review deadline, having this protection in place before that milestone is straightforward risk management.',
    cta: 'Get a Quote',
  },
  {
    slug: 'volunteer-accident-insurance',
    metaTitle: 'Volunteer Accident Insurance | Get a Quote',
    metaDesc:
      'Volunteer personal accident cover for charities, clubs and community groups. Bridges the gap ACC leaves for unpaid volunteers. Get a Quote.',
    h1: 'Volunteer Personal Accident Insurance',
    intro:
      'Volunteers are the operating capacity of most community organisations, and the assumption that ACC will look after them if something goes wrong is only partly true. ACC covers treatment costs, but weekly compensation is calculated on earnings \u2014 which means an unpaid volunteer injured while working for your organisation may receive little or nothing to replace lost income. Volunteer Personal Accident insurance is the cover that closes that gap, and it is one of the most affordable policies a community organisation can carry.',
    heroImage: 'https://images.unsplash.com/photo-1593113630400-ea4288922497?auto=format&fit=crop&w=1920&q=80',
    keyPoints: [
      'Weekly benefit payments for volunteers unable to work following an injury sustained on your activities',
      'Capital benefits for permanent disablement, loss of limb or sight, and accidental death',
      'Cover for volunteers of all ages, including retired members who receive no ACC earnings-related compensation',
      'Top-up benefits for treatment costs, ambulance transport, and rehabilitation expenses not fully met by ACC',
      'Blanket cover on a named-activity basis \u2014 no need to schedule individual volunteers by name',
      'Cover extends to travel directly to and from sanctioned organisational activities',
    ],
    whyUs:
      'charityinsurance.co.nz connects community organisations with Registered Financial Service Providers who place volunteer accident cover every week and know how the ACC interaction actually works in practice. Our brokers will assess your volunteer numbers, the activities they undertake, and the age profile of your team, then structure a policy with benefit levels that mean something rather than a token schedule. Get a Quote and a specialist will be in touch within one business day.',
    relatedOrgs: [
      'registered-charities',
      'sports-clubs',
      'emergency-rescue-organisations',
    ],
    coverageAngle:
      'The exposure that most often surprises boards is the retired or non-earning volunteer. ACC weekly compensation replaces a percentage of pre-injury earnings, so a superannuitant, a student, or a full-time parent who is injured while volunteering receives treatment cover but no meaningful income replacement \u2014 and that same group frequently makes up the most active and longest-serving part of a volunteer base. A Volunteer Personal Accident policy pays a stated weekly benefit regardless of earnings, along with lump sum capital benefits for permanent injury, which is the difference between an organisation that can look a family in the eye after a serious accident and one that cannot. For organisations running physical activity \u2014 building maintenance, conservation planting, event set-down, coastal or search operations \u2014 this cover should sit alongside public liability rather than behind it.',
    cta: 'Get a Quote',
  },
];
