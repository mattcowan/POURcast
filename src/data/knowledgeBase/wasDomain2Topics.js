/**
 * WAS BoK Domain Two gap-fill topics — Identifying Accessibility Issues.
 * Spread into the main `topics` array in index.js.
 */
export const wasDomain2Topics = [
  {
    slug: 'wcag-conformance-requirements',
    title: 'The Five WCAG Conformance Requirements',
    category: 'Standards & Guidelines',
    applicableTo: ['was'],
    summary: 'Beyond satisfying individual Success Criteria, a WCAG conformance claim must meet five normative conformance requirements: conformance level, full pages, complete processes, accessibility-supported technologies, and non-interference.',
    content: [
      {
        type: 'paragraph',
        text: 'Satisfying Success Criteria is only part of WCAG conformance. The Conformance section of WCAG 2.x defines five normative requirements that a page must meet before any conformance claim can be made. Auditors need these requirements to decide whether a page, a process, or a set of pages can legitimately claim Level A, AA, or AAA conformance.'
      },
      {
        type: 'heading',
        text: '1. Conformance Level'
      },
      {
        type: 'paragraph',
        text: 'For Level A conformance, the page satisfies all Level A Success Criteria — or a conforming alternate version is provided. Level AA requires all A and AA criteria; Level AAA requires all A, AA, and AAA criteria. Conformance is cumulative: you cannot claim AA while failing an A criterion.'
      },
      {
        type: 'list',
        items: [
          'A conforming alternate version must provide all of the same information and functionality in the same human language',
          'It must be as up to date as the non-conforming version',
          'It must itself conform at the claimed level',
          'It must be reachable from the non-conforming page via an accessibility-supported mechanism (e.g., a link the user can actually perceive and operate), or the non-conforming version must only be reachable from the conforming one'
        ]
      },
      {
        type: 'heading',
        text: '2. Full Pages'
      },
      {
        type: 'paragraph',
        text: 'Conformance and conformance level apply to full web pages only. You cannot exclude a part of the page — a single inaccessible widget, advertisement, or embedded video player means the whole page does not conform. Alternatives provided on the page (such as a transcript) count as part of the page when evaluating it.'
      },
      {
        type: 'heading',
        text: '3. Complete Processes'
      },
      {
        type: 'paragraph',
        text: 'When a page is one step in a process — a series of steps needed to accomplish an activity, like a checkout flow (product page, cart, shipping, payment, confirmation) — every page in the process must conform at the claimed level or better. If the payment step fails, no page in the checkout process can claim conformance, even pages that individually pass.'
      },
      {
        type: 'heading',
        text: '4. Only Accessibility-Supported Ways of Using Technologies'
      },
      {
        type: 'paragraph',
        text: 'Only accessibility-supported ways of using technologies may be relied upon to satisfy Success Criteria. A technology is accessibility supported when it works with users\' assistive technologies and with the accessibility features of browsers. Technologies that are not accessibility supported can still be used — they just cannot be relied upon for conformance, and conforming alternatives must carry the load.'
      },
      {
        type: 'heading',
        text: '5. Non-Interference'
      },
      {
        type: 'paragraph',
        text: 'Technologies that are NOT relied upon must not block users from accessing the rest of the page. Even content you are not counting toward conformance must not trap focus, flash dangerously, or drown out the accessible content. Four Success Criteria apply to ALL content on the page, including content not otherwise relied upon, because failing them interferes with any use of the whole page.'
      },
      {
        type: 'list',
        items: [
          'SC 1.4.2 Audio Control — auto-playing audio longer than 3 seconds must be pausable/stoppable or have independent volume control',
          'SC 2.1.2 No Keyboard Trap — no component may trap keyboard focus',
          'SC 2.3.1 Three Flashes or Below Threshold — nothing may flash more than three times per second above thresholds',
          'SC 2.2.2 Pause, Stop, Hide — moving, blinking, or auto-updating content must be controllable'
        ]
      },
      {
        type: 'callout',
        text: 'Memorize the non-interference set: 1.4.2, 2.1.2, 2.3.1, and 2.2.2 apply to every piece of content on a page — even third-party widgets and content explicitly excluded from a conformance claim.'
      }
    ],
    relatedTopics: ['wcag-overview', 'wcag-em', 'accessibility-supported', 'normative-vs-non-normative'],
    examTips: [
      'The five requirements: Conformance Level, Full Pages, Complete Processes, Only Accessibility-Supported Ways of Using Technologies, Non-Interference',
      'Conformance is all-or-nothing per page — no partial-page conformance, and one failing SC fails the page',
      'A conforming alternate version must be equivalent, up to date, itself conforming, and reachable via an accessibility-supported mechanism',
      'Complete Processes: one non-conforming step disqualifies every page in the workflow',
      'Non-interference SCs (1.4.2, 2.1.2, 2.3.1, 2.2.2) apply to ALL page content, even content not relied upon'
    ]
  },
  {
    slug: 'browser-at-interoperability',
    title: 'Browser + Assistive Technology Interoperability',
    category: 'Accessibility Testing',
    applicableTo: ['was'],
    summary: 'Accessibility behavior depends on the specific browser and assistive technology pairing, so testers must use recommended combinations and triage whether a defect is an authoring bug, a browser bug, or an AT bug.',
    content: [
      {
        type: 'paragraph',
        text: 'Assistive technologies do not read your HTML directly. The browser parses the markup, builds an accessibility tree, and exposes it through a platform accessibility API (such as UI Automation or IAccessible2 on Windows, NSAccessibility on macOS). The screen reader then interprets what the API exposes. Because each browser maps markup to the API slightly differently, and each AT interprets the API slightly differently, the same page can behave differently in different browser + AT pairings.'
      },
      {
        type: 'heading',
        text: 'Why Results Differ Across Pairings'
      },
      {
        type: 'list',
        items: [
          'Browsers build and expose their accessibility trees differently — an ARIA attribute may be mapped fully in one browser and partially in another',
          'Screen readers apply their own heuristics on top of the API — repairing missing names, deciding what to announce and when',
          'Support for newer ARIA features lands at different times in different browsers and ATs',
          'Each AT is optimized for, and primarily tested against, particular browsers'
        ]
      },
      {
        type: 'heading',
        text: 'Recommended Testing Combinations'
      },
      {
        type: 'list',
        items: [
          'JAWS + Chrome (Windows) — the most-used commercial screen reader with the most-used browser',
          'NVDA + Firefox or Chrome (Windows) — NVDA has long had excellent Firefox support and strong Chrome support',
          'Narrator + Edge (Windows) — Microsoft develops and tests these together',
          'VoiceOver + Safari (macOS and iOS) — Apple builds and tests them as a pair',
          'TalkBack + Chrome (Android) — Google\'s screen reader with Google\'s browser'
        ]
      },
      {
        type: 'paragraph',
        text: 'Pairing matters because mismatched combinations (e.g., VoiceOver with Chrome, or JAWS with Safari) are less thoroughly tested by vendors and produce misleading results. Test plans should cover the combinations your users actually use — WebAIM\'s screen reader surveys are a common source for usage data — rather than relying on a single pairing.'
      },
      {
        type: 'heading',
        text: 'Triaging a Pairing-Specific Bug'
      },
      {
        type: 'paragraph',
        text: 'When a defect appears in one pairing but not another, it may be an authoring bug, a browser bug, or an AT bug. Reproduce the issue across multiple pairings before assigning blame. If the markup is correct per the HTML and ARIA specifications and the issue appears in only one pairing, it is likely a browser or AT defect — which may belong in the vendor\'s bug tracker rather than the development backlog.'
      },
      {
        type: 'list',
        items: [
          'Fails in all pairings → almost certainly an authoring (code) bug',
          'Fails in one browser across multiple ATs → likely a browser accessibility-API mapping bug',
          'Fails with one AT across multiple browsers → likely an AT bug',
          'Verify the markup against the specs first — incorrect ARIA often "works" in one forgiving pairing and breaks in stricter ones'
        ]
      },
      {
        type: 'callout',
        text: 'Avoid "coding to the screen reader" — hacking markup until one specific AT sounds right often breaks other pairings. Write spec-correct code, then report genuine AT/browser bugs upstream.'
      }
    ],
    relatedTopics: ['screen-readers', 'accessibility-tree', 'screen-reader-testing', 'screen-reader-modes'],
    examTips: [
      'AT reads the accessibility tree via platform accessibility APIs — not your raw HTML',
      'Recommended pairs: JAWS+Chrome, NVDA+Firefox/Chrome, Narrator+Edge, VoiceOver+Safari, TalkBack+Chrome',
      'Test the most-used combinations for your audience, not just one pairing',
      'Bug in only one pairing with spec-correct markup → suspect a browser or AT bug, not the code',
      'Bug in every pairing → suspect the authoring (your code)'
    ]
  },
  {
    slug: 'testing-by-disability',
    title: 'Testing Methodology by Disability Type',
    category: 'Accessibility Testing',
    applicableTo: ['was'],
    summary: 'A systematic audit organizes test cases by the user group affected — screen reader users, keyboard and alternative input users, deaf and hard-of-hearing users, low vision users, cognitive and learning disability users, and touch users.',
    content: [
      {
        type: 'paragraph',
        text: 'Organizing testing by disability type keeps an audit grounded in user impact rather than abstract checklist items. Each group depends on a distinct cluster of Success Criteria, and walking through the page from each group\'s perspective catches issues that a criterion-by-criterion sweep can miss.'
      },
      {
        type: 'heading',
        text: 'Screen Reader Users (Blindness)'
      },
      {
        type: 'list',
        items: [
          'Text alternatives for images and non-text content (1.1.1)',
          'Semantic structure: headings, lists, tables, landmarks convey relationships (1.3.1)',
          'Meaningful sequence: reading order matches visual order (1.3.2)',
          'Name, role, value exposed for all controls, including custom widgets (4.1.2)',
          'Live regions and status messages announce dynamic updates (4.1.3)',
          'Descriptive page titles (2.4.2) and declared page/part language (3.1.1, 3.1.2)'
        ]
      },
      {
        type: 'heading',
        text: 'Keyboard and Alternative Input Users'
      },
      {
        type: 'list',
        items: [
          'All functionality operable by keyboard (2.1.1) with no keyboard traps (2.1.2)',
          'Logical focus order (2.4.3) and a visible focus indicator (2.4.7)',
          'Single-pointer alternatives to path-based or multipoint gestures (2.5.1)',
          'Alternatives to device-motion actuation like shake or tilt (2.5.4)',
          'Character-key shortcuts can be turned off or remapped (2.1.4)',
          'Visible label text is contained in the accessible name for voice-control users (2.5.3 Label in Name)'
        ]
      },
      {
        type: 'heading',
        text: 'Deaf and Hard-of-Hearing Users'
      },
      {
        type: 'list',
        items: [
          'Captions on prerecorded video with audio (1.2.2) and live captions at AA (1.2.4) — verify accuracy, speaker identification, and meaningful sound effects, not just presence',
          'Transcripts (media alternatives) for audio-only content (1.2.1)',
          'No information conveyed by sound alone'
        ]
      },
      {
        type: 'heading',
        text: 'Low Vision Users'
      },
      {
        type: 'list',
        items: [
          'Text resizes to 200% without loss of content or functionality (1.4.4)',
          'Content reflows at 320 CSS pixels width without two-dimensional scrolling (1.4.10)',
          'No loss of content when users override text spacing (1.4.12)',
          'Contrast: 4.5:1 for normal text (1.4.3) and 3:1 for UI components and meaningful graphics (1.4.11)',
          'Content that appears on hover or focus is dismissible, hoverable, and persistent (1.4.13)',
          'Color is never the only means of conveying information (1.4.1)'
        ]
      },
      {
        type: 'heading',
        text: 'Cognitive and Learning Disabilities'
      },
      {
        type: 'list',
        items: [
          'Time limits can be turned off, adjusted, or extended (2.2.1); no disruptive auto-playing or moving content (2.2.2, 1.4.2)',
          'Navigation is consistent across pages (3.2.3) and components are identified consistently (3.2.4)',
          'Errors are identified in text (3.3.1), with suggestions (3.3.3) and prevention for legal/financial/data transactions (3.3.4)',
          'Descriptive headings and labels (2.4.6) and clear instructions (3.3.2)',
          'Multiple ways to find pages — search, site map, navigation (2.4.5)'
        ]
      },
      {
        type: 'heading',
        text: 'Touch Users (Mobile and Motor Disabilities)'
      },
      {
        type: 'list',
        items: [
          'Touch targets meet minimum size/spacing requirements (2.5.8 Target Size Minimum at AA in WCAG 2.2; 2.5.5 at AAA)',
          'Content works in both portrait and landscape orientation (1.3.4)',
          'Complex gestures have single-pointer alternatives (2.5.1)',
          'Motion-based actuation has UI alternatives and can be disabled (2.5.4)'
        ]
      },
      {
        type: 'callout',
        text: 'On the exam, expect scenario questions that name a user group and ask which checks belong to it — e.g., reflow and text spacing belong to the low vision checklist, not the screen reader checklist.'
      }
    ],
    relatedTopics: ['disability-user-strategies', 'keyboard-testing', 'screen-reader-testing', 'responsive-accessibility', 'usability-testing-pwd'],
    examTips: [
      'Low vision cluster: 200% zoom (1.4.4), reflow at 320px (1.4.10), text spacing (1.4.12), contrast (1.4.3/1.4.11), hover/focus content (1.4.13)',
      'Cognitive cluster: timing (2.2.1), consistency (3.2.3/3.2.4), errors (3.3.1/3.3.3/3.3.4), descriptive headings/labels (2.4.6)',
      'Keyboard cluster includes gesture (2.5.1) and motion (2.5.4) alternatives — they help alternative-input users too',
      'Captions testing means checking accuracy and completeness, not just that a CC button exists',
      'Label in Name (2.5.3) is primarily for speech-input users who say the visible label aloud'
    ]
  },
  {
    slug: 'wcag-limitations',
    title: 'Limitations of WCAG: What the Guidelines Don\'t Cover',
    category: 'Standards & Guidelines',
    applicableTo: ['was'],
    summary: 'WCAG conformance does not guarantee a usable experience — the guidelines have known gaps around cognitive load, certain visual effects, font readability, color-blindness needs beyond contrast, and personalization.',
    content: [
      {
        type: 'paragraph',
        text: 'WCAG is the most important accessibility standard, but it is not a complete description of accessible user experience. Its Success Criteria must be objectively testable, which means genuinely important but hard-to-measure qualities were left out. A skilled evaluator knows what WCAG does NOT cover, so they can report real user barriers that no Success Criterion will ever flag.'
      },
      {
        type: 'heading',
        text: 'Known Gaps in WCAG Coverage'
      },
      {
        type: 'list',
        items: [
          'Pseudomotion and optical-illusion effects: high-contrast patterns and parallax-like illusions can cause discomfort or vestibular symptoms without ever violating the flash or animation criteria',
          'Color-blindness needs beyond contrast: a chart can pass every contrast ratio yet remain unreadable to color-blind users when categories differ only by hue — patterns, textures, and direct labels are not required',
          'Font weight: very thin fonts can pass the contrast math while being practically unreadable, because contrast formulas ignore stroke weight',
          'Ornate and dyslexia-unfriendly typefaces: WCAG does not prohibit decorative or hard-to-read fonts',
          'Cognitive load and content complexity: AA conformance does not require plain language, short sentences, or simple task flows (3.1.5 Reading Level is only AAA)',
          'Personalization and customization: WCAG does not require sites to let users adapt the interface to their own needs',
          'Layout consistency for cognitive users: consistency requirements (3.2.3/3.2.4) are narrow — overall layout predictability is largely uncovered',
          'Voice interaction: WCAG 2.x was written for visual/keyboard web content and says little about voice-driven interfaces'
        ]
      },
      {
        type: 'heading',
        text: 'Conformance Is Not the Same as Usability'
      },
      {
        type: 'paragraph',
        text: 'The key principle: a site can minimally conform to WCAG 2.x Level AA and still be exhausting or confusing for real users with disabilities. A page with one hundred tab stops before the main content is keyboard "operable." A page with technically sufficient but vague link text passes. Conformance is the floor, not the ceiling.'
      },
      {
        type: 'paragraph',
        text: 'This is why mature accessibility programs combine conformance auditing with usability testing involving people with disabilities, and why audit reports often include best-practice recommendations alongside strict failures — clearly labeled as such.'
      },
      {
        type: 'callout',
        text: 'Exam framing: if a question describes a real barrier (e.g., a hue-only chart with passing contrast, or a punishing cognitive load) and asks whether it fails WCAG, the answer is often "no failure, but a significant usability barrier worth reporting."'
      }
    ],
    relatedTopics: ['wcag-overview', 'usability-concepts', 'cognitive-disabilities', 'wcag-conformance-requirements', 'usability-testing-pwd'],
    examTips: [
      'WCAG gaps: pseudomotion, hue-only color coding, font weight/ornate fonts, cognitive load, personalization, layout consistency, voice interaction',
      'Contrast formulas ignore font weight — thin fonts can pass and still be unreadable',
      'Plain language is essentially uncovered at A/AA (Reading Level 3.1.5 is AAA)',
      'Conformance ≠ usability: minimally conforming sites can still be very hard to use',
      'Report uncovered barriers as best-practice recommendations, distinct from conformance failures'
    ]
  },
  {
    slug: 'screen-reader-modes',
    title: 'Screen Reader Modes, Keystrokes & Mobile Gestures',
    category: 'Accessibility Testing',
    applicableTo: ['was'],
    summary: 'Testers must understand browse vs. forms vs. application modes, the quick-navigation keystrokes and element lists of desktop screen readers, and the core touch gestures of VoiceOver and TalkBack.',
    content: [
      {
        type: 'paragraph',
        text: 'Desktop screen readers on Windows operate in distinct interaction modes, and a tester who does not understand mode switching will misdiagnose issues. On top of modes, every screen reader offers quick-navigation commands and element lists — testing should exercise them, not just linear reading. Keep in mind that real usage varies widely: these are expert features, and many actual users do not know or use them, sticking to a few keystrokes like the arrow keys and Tab.'
      },
      {
        type: 'heading',
        text: 'Browse Mode vs. Forms Mode vs. Application Mode'
      },
      {
        type: 'list',
        items: [
          'Browse mode (also called virtual or reading mode): the default for web pages. The screen reader intercepts keystrokes — arrow keys read content, single letters jump between element types',
          'Forms mode (also called focus mode): keystrokes pass through to the page so users can type in fields and operate widgets. JAWS and NVDA switch automatically when focus enters an editable field or interactive widget; users can toggle manually (NVDA: Insert+Space)',
          'Application mode: triggered by role="application", it disables browse mode entirely — all keys pass to the page and quick-nav stops working',
          'role="application" is dangerous: it strips users of their reading commands and forces the author to implement ALL keyboard interaction. It is almost never appropriate for ordinary web content'
        ]
      },
      {
        type: 'heading',
        text: 'Quick-Navigation Keystrokes (Browse Mode)'
      },
      {
        type: 'list',
        items: [
          'H — next heading (1–6 jump to headings of a specific level)',
          'L — next list; K — next link in NVDA (JAWS uses U/V for unvisited/visited links); Tab also moves through links and other focusable elements',
          'F — next form field; E — next edit/text field; B — next button',
          'T — next table; G — next graphic',
          'D (NVDA) / R (JAWS) — next landmark/region',
          'Keystrokes vary between screen readers — verify against each product\'s documentation rather than assuming they are identical'
        ]
      },
      {
        type: 'heading',
        text: 'Element Lists and Rotors'
      },
      {
        type: 'list',
        items: [
          'NVDA Elements List: Insert+F7 — dialog listing links, headings, form fields, buttons, and landmarks',
          'JAWS: Insert+F7 opens the links list; similar lists exist for headings (Insert+F6) and form fields',
          'VoiceOver rotor: VO+U opens a web rotor for navigating by headings, links, landmarks, form controls, and more',
          'TalkBack reading controls: choose a granularity — headings, links, controls, words, characters — via the reading controls (swipe up-then-down/down-then-up, or three-finger swipes in newer versions), then swipe up/down to move by it'
        ]
      },
      {
        type: 'heading',
        text: 'Table Navigation'
      },
      {
        type: 'paragraph',
        text: 'Inside a data table, JAWS and NVDA move cell by cell with Ctrl+Alt+Arrow keys, announcing the associated row and column headers as the user moves. This is the key test for header associations: navigate to an interior data cell and confirm the correct headers are spoken.'
      },
      {
        type: 'heading',
        text: 'Core Mobile Screen Reader Gestures'
      },
      {
        type: 'list',
        items: [
          'Swipe right — move to the next item; swipe left — move to the previous item (VoiceOver and TalkBack)',
          'Double-tap — activate the currently focused item',
          'Explore by touch — drag a finger around the screen to hear what is under it',
          'VoiceOver rotor: rotate two fingers on screen to change what swiping up/down navigates by'
        ]
      },
      {
        type: 'callout',
        text: 'A common user strategy is scanning a page by headings or landmarks, then exploring in detail — so verify the page is navigable that way, not just by linear reading. But remember that strategies vary: some users navigate only with the arrow keys and Tab.'
      }
    ],
    relatedTopics: ['screen-readers', 'screen-reader-testing', 'aria-roles', 'browser-at-interoperability', 'accessibility-tree'],
    examTips: [
      'Browse/virtual mode intercepts keys for reading; forms/focus mode passes keys to the page; switching is automatic on form fields and widgets',
      'role="application" kills browse mode and quick-nav — almost never appropriate for web content',
      'Quick-nav: H headings, L lists, F form fields, T tables, B buttons, D/R landmarks (varies by screen reader)',
      'NVDA Insert+F7 elements list; VoiceOver rotor VO+U; tables navigate with Ctrl+Alt+Arrows',
      'Mobile: swipe right/left = next/previous, double-tap = activate, explore by touch'
    ]
  },
  {
    slug: 'usability-testing-pwd',
    title: 'Usability Testing with People with Disabilities',
    category: 'Accessibility Testing',
    applicableTo: ['was'],
    summary: 'Usability testing with disabled participants reveals real-world barriers that conformance reviews miss — participants use their own assistive technologies and settings, and findings complement rather than replace standards-based testing.',
    content: [
      {
        type: 'paragraph',
        text: 'A conformance review answers "does this page meet WCAG?" Usability testing with people with disabilities answers a different question: "can real users actually accomplish their goals?" The two methods find different problems, and a mature evaluation practice uses both.'
      },
      {
        type: 'heading',
        text: 'How It Differs from Conformance Review'
      },
      {
        type: 'list',
        items: [
          'Task-based: participants attempt realistic goals (find a product, complete checkout) while observers note where they struggle',
          'Measures effectiveness, efficiency, and satisfaction — not pass/fail against criteria',
          'Surfaces issues no Success Criterion covers: cognitive load, confusing flows, exhausting navigation',
          'Conducted with real users, not expert evaluators simulating users'
        ]
      },
      {
        type: 'heading',
        text: 'Participants Use Their Own Setup'
      },
      {
        type: 'paragraph',
        text: 'Participants should use their own assistive technologies, devices, and personal settings — their own screen reader with their preferred verbosity and speech rate, their own magnification level, their own switch configuration. A lab-standard setup with unfamiliar AT measures the participant\'s ability to learn new tools, not the product\'s usability. Remote testing often makes own-setup participation easier.'
      },
      {
        type: 'heading',
        text: 'Diversity Within Disability Groups'
      },
      {
        type: 'paragraph',
        text: 'Two screen reader users can have completely different experiences of the same page: one is a power user navigating by landmarks at high speech rates, the other recently lost vision and reads linearly with default settings. Skill level, AT choice, browser, age, and co-occurring disabilities all vary. Never treat one participant as representative of an entire disability group.'
      },
      {
        type: 'heading',
        text: 'Recruiting Considerations'
      },
      {
        type: 'list',
        items: [
          'Recruit across disability types AND across experience levels within each type',
          'Work with disability organizations or specialist recruiting panels; budget extra time and fair compensation',
          'Ensure the testing logistics are themselves accessible — consent forms, scheduling, venue or remote platform, prototypes',
          'Pilot the session with the AT in question — a prototype that crashes a screen reader wastes everyone\'s time'
        ]
      },
      {
        type: 'heading',
        text: 'Complement — Never Replace — Standards Testing'
      },
      {
        type: 'paragraph',
        text: 'Usability testing cannot certify conformance: a handful of participants will not exercise every Success Criterion, and a smooth session does not prove WCAG is met. Equally, conformance testing cannot certify usability. The classic example: a page where every control is keyboard-reachable but the main content sits behind 100 tab stops technically passes SC 2.1.1 — and is exhausting in practice. Accessibility conformance and usability are related but distinct qualities.'
      },
      {
        type: 'callout',
        text: 'Run usability testing on key user journeys after the major conformance blockers are fixed — otherwise known WCAG failures dominate the sessions and bury new insights.'
      }
    ],
    relatedTopics: ['usability-concepts', 'user-centered-design', 'disability-user-strategies', 'testing-by-disability', 'wcag-limitations'],
    examTips: [
      'Participants use their OWN AT and personal settings — never force a lab-standard configuration',
      'Usability testing complements conformance review; neither replaces the other',
      'Diversity within groups: two screen reader users can differ as much as two sighted users',
      'Keyboard-reachable but exhausting (e.g., 100 tab stops) passes WCAG yet fails users — conformance ≠ usability',
      'Make the test logistics accessible: recruiting, consent, scheduling, and the prototype itself'
    ]
  },
  {
    slug: 'failures-vs-best-practices',
    title: 'Failures vs. Best Practices: Mapping Issues to Success Criteria',
    category: 'Accessibility Testing',
    applicableTo: ['was'],
    summary: 'An auditor should report a WCAG failure only when content clearly fails a normative Success Criterion, and report everything else as best-practice advice — keeping the two categories separate preserves the audit\'s credibility.',
    content: [
      {
        type: 'paragraph',
        text: 'Not every accessibility problem is a WCAG failure, and not every awkward implementation fails a Success Criterion. One of the hardest evaluator skills is mapping issues to the right criterion — or recognizing that no criterion applies. Over-flagging erodes developer trust as quickly as missing real failures does.'
      },
      {
        type: 'heading',
        text: 'When to Flag a Failure'
      },
      {
        type: 'list',
        items: [
          'The content clearly fails the normative text of a Success Criterion at the claimed level, or',
          'The content matches a documented WCAG Failure technique (e.g., F65: omitting the alt attribute on img elements)',
          'Like all techniques, Failures are non-normative — but they document patterns the Working Group considers to fail an SC, so matching one is strong evidence of non-conformance',
          'Sufficient techniques are NOT required — content can conform without using any documented technique'
        ]
      },
      {
        type: 'heading',
        text: 'Criterion-Boundary Examples'
      },
      {
        type: 'list',
        items: [
          'A page with NO headings at all: not a failure of SC 2.4.6 Headings and Labels, because 2.4.6 only requires headings to be descriptive WHERE they exist — it does not require headings to be present. Report missing headings as a strong best-practice recommendation',
          'Visually styled "fake headings" (bold, enlarged text acting as headings): this IS a failure of SC 1.3.1 Info and Relationships, because a visual structure exists that is not programmatically conveyed',
          'Placeholder-only labels: placeholder text may technically provide an accessible name in some implementations, but it disappears on input — evaluate against 3.3.2 Labels or Instructions and 1.3.1, and check whether the name persists',
          'Generic link text ("click here", "read more"): fails SC 2.4.4 only if the purpose cannot be determined from the link together with its programmatically determined context; descriptive text for all links out of context is AAA (2.4.9)'
        ]
      },
      {
        type: 'heading',
        text: 'Deciding Borderline Cases'
      },
      {
        type: 'paragraph',
        text: 'When a case is ambiguous, consult the non-normative interpretation resources in order of authority: the Understanding documents for the Success Criterion (intent, definitions, examples), the documented Failure techniques, and the ARIA Authoring Practices Guide for expected widget behavior. If after that you still cannot tie the issue to normative SC text, it is not a conformance failure — however much it bothers you.'
      },
      {
        type: 'heading',
        text: 'Report Failures and Advice Separately'
      },
      {
        type: 'paragraph',
        text: 'Audit reports should clearly separate conformance failures (with the SC number and level) from best-practice recommendations. Developers and project managers triage by obligation: failures block conformance claims and may carry legal weight; best practices are prioritized on user impact. Mixing the two — or inflating advice into failures — teaches teams to distrust the entire report.'
      },
      {
        type: 'callout',
        text: 'Litmus test before flagging: "Which Success Criterion\'s normative text does this fail, and would it survive a challenge?" If you cannot answer with an SC number, file it as a best practice.'
      }
    ],
    relatedTopics: ['wcag-overview', 'normative-vs-non-normative', 'testing-fundamentals', 'remediation-prioritization', 'wcag-conformance-requirements'],
    examTips: [
      'Only normative SC text determines failures; techniques and Understanding docs are advisory',
      'Matching a documented Failure technique is strong evidence of non-conformance',
      'No headings on a page ≠ 2.4.6 failure (it only governs headings that exist); fake visual headings = 1.3.1 failure',
      'Generic link text fails 2.4.4 only when programmatic context doesn\'t clarify the purpose',
      'Keep failures and best-practice advice in separate report sections to preserve auditor credibility'
    ]
  }
];
