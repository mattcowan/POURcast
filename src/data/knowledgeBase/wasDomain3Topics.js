/**
 * WAS BoK Domain Three gap-fill topics — Remediating Accessibility Issues.
 * Spread into the main `topics` array in index.js.
 */
export const wasDomain3Topics = [
  {
    slug: 'procurement-expert-role',
    title: 'The Accessibility Expert\'s Role in Procurement',
    category: 'Organizational Strategy',
    applicableTo: ['was'],
    summary: 'Accessibility experts support both purchasers and vendors during procurement — advising on standards, drafting RFP questions, evaluating ACRs, testing products, shaping contract language, and managing defect mitigation.',
    content: [
      {
        type: 'paragraph',
        text: 'Like security and privacy, accessibility is a key consideration during procurement — it is the point where an organization has the best chance to influence how accessible its ICT products and services will be to end users. Accessibility experts play a hands-on role on both sides of the transaction: helping purchasers buy well and helping vendors sell accessible products honestly.'
      },
      {
        type: 'heading',
        text: 'What Experts Provide to Purchasers'
      },
      {
        type: 'list',
        items: [
          'Guidance on good governance practices for accessibility',
          'Advice on ICT procurement standards, such as EN 301 549 (Europe) and Section 508 (US federal)',
          'A list of suitable accessibility questions for inclusion in tender documents and Requests for Proposal (RFPs)',
          'Evaluations of tender responses, Accessibility Conformance Reports (ACRs), and VPATs',
          'Direct testing of candidate products — never relying on vendor claims alone',
          'Suggested contract wording regarding accessibility',
          'Vendor management, including defect remediation and accessibility roadmaps'
        ]
      },
      {
        type: 'heading',
        text: 'What Experts Provide to Vendors'
      },
      {
        type: 'list',
        items: [
          'Auditing existing systems to establish the real state of accessibility',
          'Remedying identified defects',
          'Creating Accessibility Conformance Reports (an independently produced ACR carries more credibility than an in-house one)',
          'Responding to tender questions regarding accessibility'
        ]
      },
      {
        type: 'heading',
        text: 'Reading ACRs Realistically'
      },
      {
        type: 'paragraph',
        text: 'Ideally every criterion in an ACR\'s reporting table would be "Supports," but in practice very few products fully support every single WCAG or other criterion. "Partially Supports" and "Does Not Support" entries are not automatic disqualifiers — they are helpful signposts telling you which areas to pay attention to during product reviews, so you can judge the real impact on your users. It is preferable that vendors use an independent accessibility professional to create their ACR rather than producing it in-house.'
      },
      {
        type: 'callout',
        text: 'Exam lens: an ACR claiming "Supports" on every criterion is a reason for more scrutiny, not less. Verify vendor claims by testing the product directly.'
      },
      {
        type: 'heading',
        text: 'Mitigating Defects in Procured Products'
      },
      {
        type: 'paragraph',
        text: 'When a product or service you are buying (or already bought) has known accessibility defects, the risk can be mitigated rather than simply accepted:'
      },
      {
        type: 'list',
        items: [
          'Obtain a remediation roadmap from the vendor for addressing the known accessibility issues',
          'Include binding accessibility commitments in contracts for products and services',
          'Put an alternative access plan in place so affected users can still accomplish their tasks while defects are being fixed',
          'Monitor vendor performance in relation to defect management',
          'Consider accessibility performance during contract negotiations and product renewals — renewal time is leverage'
        ]
      },
      {
        type: 'heading',
        text: 'Procurement Maturity Models'
      },
      {
        type: 'paragraph',
        text: 'Two publicly available, free maturity models specifically address procurement. Policy Driven Adoption for Accessibility (PDAA) is an initiative by the National Association of State Chief Information Officers (NASCIO) that helps procurement organizations choose vendors who can meet accessibility requirements. The W3C Accessibility Maturity Model\'s procurement dimension assesses an organization\'s own sourcing, negotiation, and selection of goods and services — reviewing its use of accessibility processes, criteria, contract language, and decision-making throughout the procurement lifecycle.'
      },
    ],
    relatedTopics: ['procurement-accessibility', 'vpat', 'maturity-models', 'en-301-549', 'section-508', 'stakeholder-communication'],
    examTips: [
      'Experts serve purchasers (RFP questions, ACR evaluation, contract wording, testing) AND vendors (audits, fixes, ACR creation, tender responses)',
      'Very few products fully support every criterion — "Partially Supports" means investigate user impact, not auto-reject',
      'Prefer independently produced ACRs over in-house vendor self-reports',
      'Defect mitigation: roadmap + binding contract commitments + alternative access plan + vendor monitoring + renewal leverage',
      'PDAA (NASCIO) evaluates vendors; the W3C maturity model procurement dimension evaluates your own procurement process'
    ]
  },
  {
    slug: 'stakeholder-communication',
    title: 'Communicating Remediation: Stakeholders, Trade-offs, and \'Good Enough\'',
    category: 'Remediation',
    applicableTo: ['was'],
    summary: 'Remediation succeeds when the right stakeholders are aware, educated, and included; when recommendations fit the project\'s real constraints; and when failures and best practices are clearly distinguished and justified.',
    content: [
      {
        type: 'paragraph',
        text: 'A technically correct remediation plan still fails if nobody acts on it. The WAS Body of Knowledge stresses being able to communicate the purpose, approach, and strategy of remediation — and making the right stakeholders aware, educated, and included in implementation recommendations. Recommending fixes requires knowing how to build accessible content, how to identify issues, and the wisdom to choose a technique appropriate to the circumstances, with all the practical limitations of real-world situations.'
      },
      {
        type: 'heading',
        text: 'Aware, Educated, and Included'
      },
      {
        type: 'list',
        items: [
          'Aware: stakeholders know which issues exist and why they matter to real users',
          'Educated: each audience understands enough to act on its part of the fix',
          'Included: stakeholders help shape the recommendations they will implement, instead of receiving a list of orders',
          'End users with disabilities play an important role in assessing and validating whether a remediation approach actually works'
        ]
      },
      {
        type: 'heading',
        text: 'Framing for Different Audiences'
      },
      {
        type: 'list',
        items: [
          'Developers: be precise about where the problems are, what the problems are, and how to fix them',
          'Executives and product owners: lead with user impact, legal risk, and cost-benefit; use maturity models and tools to illustrate progress and sustainability',
          'Affected users: communicate what is being fixed, when, and what alternative access exists in the meantime'
        ]
      },
      {
        type: 'heading',
        text: 'The Ideal Solution vs. the "Good Enough" Solution'
      },
      {
        type: 'paragraph',
        text: 'Part of the expert\'s judgment is characterizing and differentiating the ideal/best solution from the "good enough" solution, respecting the particular project, its environment, the intended target groups, and the available resources. A solution that is feasible in one context (time, money, current state of development, chosen CMS) may be infeasible in another. Recommending strategies that reflect those real conditions helps both users and developers find the most efficient path to accessibility.'
      },
      {
        type: 'callout',
        text: 'The hybrid approach is the common real-world pattern: immediately remediate critical issues while developing a longer-term plan for a comprehensive rewrite that ensures sustainable accessibility.'
      },
      {
        type: 'heading',
        text: 'When Minimal Conformance Isn\'t Enough'
      },
      {
        type: 'paragraph',
        text: 'A website that minimally conforms to a standard can still be difficult to use. A navigation that is fully keyboard-operable but has dozens of tab stops technically meets WCAG, yet keyboard users have a poor experience; verbose alt text is "accessible" but disrupts screen reader use. Beyond normative failures, a good auditor recognizes deficiencies that are not strictly failures and recommends a better practice to achieve a more usable end result — clearly labeled as a recommendation, not a conformance failure.'
      },
      {
        type: 'heading',
        text: 'Justifying Your Calls with WCAG Supporting Documents'
      },
      {
        type: 'list',
        items: [
          'Flag a conformance failure only when the deficiency clearly maps to a documented WCAG Failure or otherwise clearly fails the normative Success Criterion — and describe the underlying deficiency clearly',
          'The normative text of WCAG defines the requirement but does not prescribe a particular coding solution; Sufficient Techniques are informative, and often multiple techniques can satisfy the same criterion',
          'For borderline calls, consult the Understanding documents, the Techniques, and the ARIA Authoring Practices Guide (APG) to decide whether an issue is a normative failure or a best-practice recommendation'
        ]
      },
    ],
    relatedTopics: ['remediation-prioritization', 'remediation-strategies', 'failures-vs-best-practices', 'normative-vs-non-normative', 'usability-testing-pwd', 'procurement-expert-role'],
    examTips: [
      'Stakeholders should be aware, educated, AND included — inclusion builds ownership of the fix',
      'Tailor framing: developers need where/what/how-to-fix; executives need user impact, legal risk, and cost-benefit',
      '"Good enough" is judged against the project, environment, target groups, and resources — not against perfection',
      'Hybrid approach = fix critical blockers now, plan the comprehensive rewrite for later',
      'Use Understanding docs, Techniques, and the APG to justify failure-vs-best-practice calls; only clear SC violations are conformance failures'
    ]
  },
];
