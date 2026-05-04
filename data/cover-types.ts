export interface CoverType {
  slug: string;
  name: string;
  shortDesc: string;
  description: string;
  whoNeeds: string[];
  whatCovers: string[];
  icon: string;
}

export const coverTypes: CoverType[] = [
  {
    slug: 'public-liability',
    name: 'Public Liability',
    shortDesc: 'Protects your organisation if someone is injured or their property is damaged as a result of your activities.',
    description: 'Public Liability is the foundation cover for virtually every charity and not-for-profit. It responds when a member of the public, a visitor, or a third party is injured — or their property is damaged — in connection with your organisation\'s activities, premises, or events.',
    whoNeeds: ['All charities and not-for-profits', 'Sports clubs and associations', 'Community groups running events', 'Organisations with public-facing premises'],
    whatCovers: ['Legal defence costs', 'Compensation paid to injured parties', 'Property damage claims', 'Event liability', 'Products and food service liability'],
    icon: '🛡️',
  },
  {
    slug: 'trustee-liability',
    name: 'Trustee & D&O Liability',
    shortDesc: 'Protects individual trustees, board members, and committee members from personal financial loss arising from their governance role.',
    description: 'Trustee Liability (equivalent to Directors & Officers or D&O insurance in the commercial sector) protects the people who govern your organisation. Under the Incorporated Societies Act 2022 and Charities Act 2005, individual officers have explicit legal duties — and personal liability when those duties are breached.',
    whoNeeds: ['Registered charitable trusts', 'Incorporated societies', 'School boards of trustees', 'Sports club committees', 'Marae and iwi trusts', 'Foundations and philanthropic trusts'],
    whatCovers: ['Legal defence costs for individual officers', 'Compensation and damages', 'Investigation costs from Charities Services or other regulators', 'Employment dispute defence', 'Financial mismanagement claims'],
    icon: '⚖️',
  },
  {
    slug: 'volunteer-personal-accident',
    name: 'Volunteer Personal Accident',
    shortDesc: 'Supplements ACC for volunteers — providing better income replacement and meaningful death benefits based on real-world earnings.',
    description: 'ACC covers most workplace injuries but pays volunteers at minimum wage. For skilled or high-income volunteers, this creates a significant gap. Voluntary Workers Accident insurance supplements ACC with specified income replacement, death benefits, and cover for scenarios ACC doesn\'t address — including overseas volunteering.',
    whoNeeds: ['Any organisation relying on volunteers', 'Conservation and environmental organisations', 'Youth programmes and scouts', 'Community service organisations', 'Charities sending volunteers overseas'],
    whatCovers: ['Weekly income replacement (above ACC minimum wage level)', 'Death benefit at specified sum', 'Non-physical harm in some policies', 'Overseas volunteering activities', 'Gradual injury supplement'],
    icon: '🤝',
  },
  {
    slug: 'professional-indemnity',
    name: 'Professional Indemnity',
    shortDesc: 'Covers claims arising from errors, omissions, or negligence in professional services delivered by your organisation.',
    description: 'If your organisation provides advice, counselling, education, financial guidance, or other professional services — even for free — professional indemnity insurance protects you from claims alleging harm from those services. This applies to paid staff and volunteers providing advice-based services.',
    whoNeeds: ['Counselling and mental health services', 'Budgeting and financial guidance services', 'Legal aid and advocacy organisations', 'Healthcare and aged care charities', 'Arts and education trusts', 'Environmental consulting charities'],
    whatCovers: ['Defence costs for negligence claims', 'Compensation for financial loss arising from advice', 'Errors and omissions claims', 'Breach of professional duty', 'Past acts coverage (claims arising from prior advice)'],
    icon: '📋',
  },
  {
    slug: 'employers-liability',
    name: 'Employers Liability',
    shortDesc: 'Covers claims from employees for work-related harm not captured by ACC — an essential gap-filler for any organisation with paid staff.',
    description: 'While ACC covers most workplace injuries in New Zealand, gaps exist — particularly for employment-related harm that doesn\'t meet ACC criteria. Employers Liability insurance fills these gaps and protects your organisation from employment-related claims. For organisations with paid staff, this is an essential cover.',
    whoNeeds: ['Any charity or NFP with paid employees', 'Aged care and disability service providers', 'Social service organisations', 'Healthcare charities with clinical staff'],
    whatCovers: ['Workplace illness or injury not covered by ACC', 'Long-term disability claims', 'Occupational disease', 'Claims from gradual process injuries', 'Supplementary cover for ACC shortfalls'],
    icon: '👷',
  },
  {
    slug: 'statutory-liability',
    name: 'Statutory Liability',
    shortDesc: 'Covers prosecution costs and fines under legislation like the Health and Safety at Work Act, Privacy Act, and Charities Act.',
    description: 'New Zealand charities and not-for-profits operate under a range of legislation that carries prosecution risk — even for unintentional breaches. Statutory Liability insurance pays defence costs, fines, and penalties arising from regulatory prosecution under specified legislation.',
    whoNeeds: ['All organisations with paid staff (H&S Act)', 'Organisations holding personal data (Privacy Act)', 'Registered charities (Charities Act)', 'Aged care and healthcare providers', 'Food service organisations (Food Act)'],
    whatCovers: ['Defence costs in regulatory prosecutions', 'Fines and penalties under specified legislation', 'Worksafe NZ investigation defence', 'Privacy Commissioner investigation costs', 'Charities Services investigation costs'],
    icon: '📜',
  },
  {
    slug: 'cyber-insurance',
    name: 'Cyber Insurance',
    shortDesc: 'Covers the costs of a data breach or cyber attack — from forensic investigation to Privacy Act notification obligations.',
    description: 'The Privacy Act 2020 requires mandatory reporting of notifiable privacy breaches. Charities and NFPs hold sensitive data — donor financial information, beneficiary health records, member details. Cyber insurance covers the full cost of breach response, including investigation, legal costs, notification, and reputation management.',
    whoNeeds: ['Any organisation holding donor or member data', 'Healthcare and aged care charities', 'Social service providers with beneficiary records', 'Organisations accepting online donations', 'Any charity using cloud-based management systems'],
    whatCovers: ['Forensic investigation costs', 'Legal and regulatory defence', 'Individual notification costs', 'Credit monitoring provision', 'PR and reputation management', 'Business interruption from system outages'],
    icon: '🔐',
  },
  {
    slug: 'property-contents',
    name: 'Property & Contents',
    shortDesc: 'Covers your buildings, contents, and equipment against damage, theft, and disaster — at full replacement cost.',
    description: 'Your charity\'s physical assets — whether a community hall, church building, marae, equipment storage, or office — represent significant community value. Property and contents insurance should cover full replacement cost, not market value. Underinsurance is common and can be catastrophic in a total loss.',
    whoNeeds: ['Charities owning or leasing premises', 'Sports clubs with equipment and grounds', 'Churches and faith communities', 'Marae and community halls', 'Arts organisations with collection assets'],
    whatCovers: ['Building replacement at full reinstatement cost', 'Contents and equipment replacement', 'Theft and burglary', 'Fire and natural disaster', 'Accidental damage', 'Heritage and cultural building cover'],
    icon: '🏠',
  },
  {
    slug: 'event-cancellation',
    name: 'Event Cancellation',
    shortDesc: 'Reimburses irrecoverable costs if your fundraising event or major programme has to be cancelled due to circumstances beyond your control.',
    description: 'If your major fundraiser, annual gala, or signature programme has to be cancelled — due to extreme weather, venue damage, key speaker or performer unavailability, or government restrictions — event cancellation insurance reimburses the irrecoverable costs you\'ve already committed.',
    whoNeeds: ['Charities running major annual fundraisers', 'Arts and cultural organisations', 'Sports clubs with major tournaments', 'Community organisations with signature events'],
    whatCovers: ['Irrecoverable deposits and booking fees', 'Marketing and promotion expenditure', 'Venue hire costs already paid', 'Cancellation due to weather, venue damage, or key person unavailability', 'Force majeure events (government mandates, natural disasters)'],
    icon: '📅',
  },
  {
    slug: 'fine-art-collections',
    name: 'Fine Art & Collections Insurance',
    shortDesc: 'Specialist agreed-value cover for artworks, taonga, museum collections, and culturally significant items.',
    description: 'Standard commercial property insurance doesn\'t adequately cover artworks, taonga, museum collections, or items of cultural significance. Fine art and collections insurance provides agreed-value cover — meaning the agreed sum is paid in the event of loss, without depreciation — and extends to cover items on loan or in transit.',
    whoNeeds: ['Museums and galleries', 'Iwi and marae holding taonga', 'Arts trusts with significant collections', 'Heritage organisations', 'Libraries with rare collections'],
    whatCovers: ['Agreed value cover (no depreciation)', 'Cover while on loan to other institutions', 'Transit cover', 'All-risks basis (including accidental damage)', 'Specialist restoration costs'],
    icon: '🖼️',
  },
  {
    slug: 'crime-fidelity',
    name: 'Crime & Fidelity Insurance',
    shortDesc: 'Covers theft, fraud, or dishonesty by employees, volunteers, or committee members who have access to your organisation\'s funds.',
    description: 'Not-for-profit organisations are, unfortunately, not immune to internal fraud or theft. Crime or fidelity insurance protects against financial loss caused by dishonest acts of people within your organisation — including employees, volunteers, and committee members who have access to cash, accounts, or assets.',
    whoNeeds: ['Charities handling significant cash donations', 'Foundations managing investment portfolios', 'Community organisations with grant funding', 'Sports clubs with membership fee accounts', 'Any organisation where volunteers have financial access'],
    whatCovers: ['Theft by employees or volunteers', 'Fraud and forgery', 'Funds transfer fraud (payment diversion)', 'Computer crime (fraudulent transfer via digital systems)', 'Mysterious disappearance of cash'],
    icon: '🔒',
  },
  {
    slug: 'management-liability',
    name: 'Management Liability',
    shortDesc: 'A package cover combining D&O, employment practices liability, and statutory liability — comprehensive governance protection in one policy.',
    description: 'Management Liability is a bundled cover that combines several governance-related insurances into one policy: Directors & Officers / Trustee Liability, Employment Practices Liability (covering employment disputes), and sometimes Statutory Liability. It\'s an efficient way for mid-sized charities to get comprehensive management protection.',
    whoNeeds: ['Charities with paid staff', 'Mid-to-large incorporated societies', 'Social service providers', 'Healthcare and disability charities', 'Aged care organisations'],
    whatCovers: ['D&O / Trustee personal liability', 'Employment disputes and personal grievances', 'Statutory liability (regulatory prosecution)', 'Crisis costs and investigation support', 'Outside directorship cover'],
    icon: '🏛️',
  },
];
