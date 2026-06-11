/**
 * WAS BoK Domain One gap-fill topics — Creating Accessible Web Solutions.
 * Spread into the main `topics` array in index.js.
 */
export const wasDomain1Topics = [
  {
    slug: 'wcag-22-new-criteria',
    title: 'WCAG 2.2: What\'s New',
    category: 'WCAG & Web Accessibility',
    applicableTo: ['was'],
    summary: 'WCAG 2.2 (October 2023) added nine new success criteria — six at A/AA — with a strong emphasis on cognitive disabilities, low vision, and motor impairments, and removed 4.1.1 Parsing.',
    content: [
      {
        type: 'paragraph',
        text: 'WCAG 2.2 became a W3C Recommendation in October 2023. It is backwards compatible with WCAG 2.0 and 2.1: content that conforms to 2.2 also conforms to the earlier versions, and 2.0 and 2.1 remain valid W3C Recommendations that laws may still reference. WCAG 2.2 adds nine new success criteria (two at Level A, four at Level AA, three at Level AAA) and removes one — 4.1.1 Parsing.'
      },
      {
        type: 'heading',
        text: 'New Focus-Related Criteria (Guideline 2.4)'
      },
      {
        type: 'list',
        items: [
          '2.4.11 Focus Not Obscured (Minimum) (AA): when a component receives keyboard focus, it is not ENTIRELY hidden by author-created content such as sticky headers, sticky footers, or cookie banners. Partial obscuring is allowed at this level.',
          '2.4.12 Focus Not Obscured (Enhanced) (AAA): stricter version — NO part of the focused component may be hidden by author-created content.',
          '2.4.13 Focus Appearance (AAA): the focus indicator must be large enough (an area at least as large as a 2 CSS pixel thick perimeter of the component) and have at least 3:1 contrast between its focused and unfocused states.'
        ]
      },
      {
        type: 'paragraph',
        text: 'These three criteria primarily benefit sighted keyboard users and people with low vision or attention limitations who need to be able to see where keyboard focus is at all times. Note the level split: only the Minimum version of Focus Not Obscured is Level AA; Focus Appearance is AAA in the final 2.2 Recommendation.'
      },
      {
        type: 'heading',
        text: 'New Input Modality Criteria (Guideline 2.5)'
      },
      {
        type: 'list',
        items: [
          '2.5.7 Dragging Movements (AA): any functionality that uses a dragging movement (e.g., sliders, drag-and-drop reordering, map panning) must be achievable with a single pointer WITHOUT dragging (e.g., click-to-select then click-to-place buttons), unless dragging is essential or determined by the user agent. Benefits people with motor impairments who can click but cannot perform precise press-hold-move-release sequences.',
          '2.5.8 Target Size (Minimum) (AA): pointer targets must be at least 24 by 24 CSS pixels, with exceptions for spacing (an undersized target is fine if a 24px circle centered on it does not intersect other targets), equivalent controls elsewhere on the page, inline targets within sentences, user-agent-determined sizes, and essential presentations. This is a less strict floor than the AAA criterion 2.5.5 Target Size (Enhanced), which requires 44 by 44.'
        ]
      },
      {
        type: 'heading',
        text: 'New Cognitive-Focused Criteria (Guidelines 3.2 and 3.3)'
      },
      {
        type: 'paragraph',
        text: 'The biggest theme of WCAG 2.2 is reducing cognitive load. Three of the new criteria — Consistent Help, Redundant Entry, and Accessible Authentication — were driven largely by the needs of people with cognitive and learning disabilities, including memory limitations.'
      },
      {
        type: 'list',
        items: [
          '3.2.6 Consistent Help (A): if help mechanisms (human contact details, a human contact mechanism, a self-help option, or a fully automated contact mechanism) are provided across a set of pages, they appear in the same relative order on each page, so users can find help where they expect it.',
          '3.3.7 Redundant Entry (A): information the user has already entered in the same process must be auto-populated or available for the user to select, rather than retyped — except when re-entering is essential, required for security (like passwords), or the previous information is no longer valid.',
          '3.3.8 Accessible Authentication (Minimum) (AA): no step of authentication may require a cognitive function test (memorizing a password, transcribing characters, solving a puzzle) unless an alternative method that does not rely on a cognitive function test exists (e.g., WebAuthn/passkeys), a mechanism is available to assist (e.g., allowing paste so password managers work), or the test is object recognition or identifying personal content the user provided.',
          '3.3.9 Accessible Authentication (Enhanced) (AAA): the same requirement WITHOUT the object recognition and personal-content exceptions.'
        ]
      },
      {
        type: 'callout',
        text: 'Blocking paste in a password field is a classic 3.3.8 failure scenario: it defeats password managers and forces memorization or transcription, which are cognitive function tests.'
      },
      {
        type: 'heading',
        text: 'Removed: 4.1.1 Parsing'
      },
      {
        type: 'paragraph',
        text: 'WCAG 2.2 removed SC 4.1.1 Parsing entirely. It was originally written for an era when assistive technologies parsed HTML directly; modern browsers expose a repaired, consistent DOM to AT, so the criterion no longer provided unique benefit. Issues it used to catch (like duplicate IDs breaking label associations) are still failures under other criteria such as 1.3.1 Info and Relationships and 4.1.2 Name, Role, Value. In WCAG 2.1, 4.1.1 is now noted as always satisfied for HTML content.'
      },
    ],
    relatedTopics: ['wcag-overview', 'wcag-operable', 'wcag-understandable', 'focus-indicators', 'cognitive-disabilities', 'wcag-conformance-requirements'],
    examTips: [
      'Memorize the levels: A = Consistent Help (3.2.6) and Redundant Entry (3.3.7); AA = Focus Not Obscured Minimum (2.4.11), Dragging Movements (2.5.7), Target Size Minimum (2.5.8), Accessible Authentication Minimum (3.3.8); AAA = Focus Not Obscured Enhanced (2.4.12), Focus Appearance (2.4.13), Accessible Authentication Enhanced (3.3.9)',
      'Target size: 24x24 px is the new AA minimum (2.5.8); 44x44 px is the older AAA enhanced requirement (2.5.5) — do not mix them up',
      'Minimum vs Enhanced pattern: "Minimum" versions allow exceptions (partial obscuring, object recognition); "Enhanced" AAA versions remove them',
      '4.1.1 Parsing was REMOVED in 2.2 — if an exam question asks which SC no longer exists, that is the answer',
      'WCAG 2.2 = W3C Recommendation October 2023; 2.0 and 2.1 are still valid standards that regulations may reference'
    ]
  },
  {
    slug: 'normative-vs-non-normative',
    title: 'Normative vs. Non-Normative: Standards and Techniques',
    category: 'Standards & Guidelines',
    applicableTo: ['was'],
    summary: 'Only the WCAG success criteria themselves are normative (required for conformance); Understanding documents and Techniques are informative guidance, and specific techniques are never mandatory.',
    content: [
      {
        type: 'paragraph',
        text: 'In standards language, "normative" means a part of a document that is required for conformance — it defines what you MUST do. "Non-normative" (also called "informative") content is explanatory: it helps you understand and implement the standard but is never itself required. Knowing which W3C documents are which is heavily tested, because it determines what an auditor can actually cite as a failure.'
      },
      {
        type: 'heading',
        text: 'What Is Normative in WCAG'
      },
      {
        type: 'list',
        items: [
          'The WCAG success criteria text, the conformance requirements, and the glossary definitions they rely on are normative.',
          'The Understanding WCAG documents (intent, benefits, examples for each SC) are informative — useful for interpretation, not required.',
          'The Techniques for WCAG documents are informative — they describe POSSIBLE ways to meet success criteria.',
          'The principle and guideline statements themselves are organizational; conformance is evaluated only against success criteria.'
        ]
      },
      {
        type: 'heading',
        text: 'The Three Types of Techniques'
      },
      {
        type: 'list',
        items: [
          'Sufficient techniques: documented, W3C-vetted ways that are sufficient to meet a success criterion — if you implement one correctly, you satisfy the SC.',
          'Advisory techniques: go beyond what the success criteria require. They improve accessibility but were not assigned as sufficient — often because they are not testable or not sufficient on their own.',
          'Failure techniques: documented patterns known to VIOLATE a success criterion. If content matches a documented failure, it does not conform (unless an alternative version is provided).'
        ]
      },
      {
        type: 'callout',
        text: 'Techniques are not required. The W3C states explicitly that the only thing that matters for conformance is satisfying the success criteria — authors are free to use new, custom, or undocumented methods, as long as the result meets the normative SC text.'
      },
      {
        type: 'paragraph',
        text: 'Published techniques have been vetted by a group of accessibility professionals through the W3C process, but the process of updating or retiring techniques is slow: some techniques now appear dated or even irrelevant, and solutions described in some sufficient techniques may now be considered insufficient because better implementations have become available over time. The list is also not exhaustive — technology evolves faster than the documentation, so the absence of a documented technique never means a method is invalid. Either way, an auditor should cite the success criterion, not a missing technique, when reporting an issue.'
      },
      {
        type: 'heading',
        text: 'ARIA: Spec vs. Practices'
      },
      {
        type: 'list',
        items: [
          'The WAI-ARIA specification itself is normative: it defines the roles, states, and properties, and rules like which attributes are allowed on which roles.',
          'The ARIA Authoring Practices Guide (APG) is informative: it provides recommended keyboard interaction and widget patterns (tabs, comboboxes, dialogs), but following APG is not itself a conformance requirement.',
          '"Using ARIA" (the W3C document with the five rules of ARIA) is also informative guidance.'
        ]
      },
      {
        type: 'heading',
        text: 'ATAG'
      },
      {
        type: 'paragraph',
        text: 'The Authoring Tool Accessibility Guidelines (ATAG 2.0) follow the same pattern: the guidelines and success criteria in Part A (the authoring tool UI must be accessible) and Part B (the tool must support producing accessible content) are normative for ATAG conformance, while the Implementing ATAG 2.0 resource is informative.'
      },
      {
        type: 'callout',
        text: 'Exam trap: a page that fails to use any documented sufficient technique may still conform, but a page matching a documented failure technique does NOT conform to that SC.'
      },
    ],
    relatedTopics: ['wcag-overview', 'wcag-conformance-requirements', 'aria-overview', 'atag-overview', 'failures-vs-best-practices', 'accessibility-supported'],
    examTips: [
      'Normative = required for conformance. In WCAG, only the SC text, conformance requirements, and glossary are normative',
      'Understanding docs and Techniques are informative — implementing a sufficient technique satisfies an SC, but no technique is ever mandatory',
      'Three technique types: Sufficient (meets the SC), Advisory (beyond requirements), Failure (documented violation)',
      'ARIA spec = normative; ARIA Authoring Practices Guide (APG) and "Using ARIA" = informative',
      'When citing issues, reference the success criterion, not a missing technique'
    ]
  },
  {
    slug: 'accessibility-supported',
    title: 'Accessibility-Supported Technologies',
    category: 'Standards & Guidelines',
    applicableTo: ['was'],
    summary: 'WCAG conformance requirement 4 says only accessibility-supported ways of using technologies can be relied upon — a method counts only if it actually works in users\' assistive technologies and browsers.',
    content: [
      {
        type: 'paragraph',
        text: 'WCAG conformance requirement 4 states that only "accessibility-supported" ways of using technologies can be relied upon to satisfy success criteria. A web technology (or a feature of it, like a specific ARIA attribute) is accessibility supported when it works with users\' assistive technologies AND with the accessibility features of browsers and other user agents. In other words: it is not enough that a technique is valid per the spec — it must actually function for real users with real AT.'
      },
      {
        type: 'heading',
        text: 'Why This Requirement Exists'
      },
      {
        type: 'paragraph',
        text: 'A developer could write perfectly spec-compliant code using a brand-new ARIA attribute or HTML element that no screen reader yet exposes. The page would look conformant on paper while being broken in practice. Conformance requirement 4 closes that gap: if a technology is used in a way that is NOT accessibility supported, it cannot be relied upon for conformance — though it may still be used. Conformance requirement 4 itself requires that any information or functionality provided in a non-supported way also be available in an accessibility-supported way, and conformance requirement 5 separately requires that the unsupported content not interfere with the rest of the page.'
      },
      {
        type: 'heading',
        text: 'Support Varies by Browser + AT Pairing'
      },
      {
        type: 'list',
        items: [
          'Assistive technology support is not uniform: a feature may work in NVDA with Chrome but fail in VoiceOver with Safari, or behave differently in JAWS with Edge.',
          'Screen readers interpret the accessibility tree differently and update on different release cycles — newer ARIA attributes often lag years behind the spec.',
          'Mobile pairings (VoiceOver + iOS Safari, TalkBack + Android Chrome) have their own distinct support profiles.',
          'WCAG deliberately does NOT define how many or which AT/browser combinations must support a feature — that judgment is left to authors, policies, and the environments their audiences actually use.'
        ]
      },
      {
        type: 'heading',
        text: 'How to Check Support'
      },
      {
        type: 'list',
        items: [
          'Test directly in real browser + AT combinations relevant to your audience (e.g., NVDA + Chrome, JAWS + Edge, VoiceOver + Safari, TalkBack + Chrome).',
          'Consult community-maintained support databases such as a11ysupport.io, which document how HTML and ARIA features behave across screen reader and browser pairings.',
          'Check screen reader vendor release notes and caniuse-style resources for the underlying platform feature.',
          'Treat support data as a snapshot — re-verify when browsers, AT, or your own audience profile changes.'
        ]
      },
      {
        type: 'heading',
        text: 'Implications for Development'
      },
      {
        type: 'list',
        items: [
          'Prefer long-supported, well-established techniques (native HTML elements, core ARIA roles/states) over cutting-edge features for anything users must rely on.',
          'When adopting a new web platform or ARIA feature, verify AT support FIRST — being in the spec is not evidence of support.',
          'Provide fallbacks when support is incomplete: e.g., pair a newer mechanism with established markup, or expose the same information through a second, well-supported route.',
          'Document the browser/AT combinations you tested in your conformance claims and audit reports.'
        ]
      },
      {
        type: 'callout',
        text: 'Memory hook: "valid code" answers spec questions; "accessibility supported" answers the question users actually care about — does it work in my screen reader and browser?'
      },
    ],
    relatedTopics: ['wcag-conformance-requirements', 'browser-at-interoperability', 'normative-vs-non-normative', 'screen-reader-testing', 'screen-readers', 'accessibility-tree'],
    examTips: [
      'Conformance requirement 4: only accessibility-supported ways of using technologies can be RELIED UPON to satisfy success criteria',
      '"Accessibility supported" = works with users\' assistive technologies and with browsers\' accessibility features — support varies per browser + AT pairing',
      'WCAG does not specify how many AT/browser combinations are needed for something to count as supported',
      'Unsupported technologies may still be present, provided conforming alternatives exist and the unsupported content does not interfere',
      'a11ysupport.io and direct testing in real AT are the practical ways to verify support before relying on a technique'
    ]
  },
  {
    slug: 'focus-management-patterns',
    title: 'Focus Management Patterns: Roving tabindex & aria-activedescendant',
    category: 'ARIA & Semantics',
    applicableTo: ['was'],
    summary: 'Composite widgets present one Tab stop and use arrow keys internally, implemented either by moving real DOM focus with a roving tabindex or by keeping focus on a container and pointing aria-activedescendant at the active item.',
    content: [
      {
        type: 'paragraph',
        text: 'Composite widgets — tab lists, listboxes, menus, radio groups, grids, trees, toolbars — should occupy a SINGLE stop in the page Tab sequence. Once focus is inside the widget, arrow keys move between the items. If every item in a 50-option listbox were its own Tab stop, keyboard users would need 50 presses just to get past it. There are two standard mechanisms for managing which item is "active" inside the widget: roving tabindex and aria-activedescendant.'
      },
      {
        type: 'heading',
        text: 'Roving tabindex'
      },
      {
        type: 'list',
        items: [
          'Exactly one item in the widget has tabindex="0" (the currently active item); every other item has tabindex="-1".',
          'When the user presses an arrow key, the script sets the previous item to tabindex="-1", sets the new item to tabindex="0", and calls .focus() on it — real DOM focus MOVES to the new item.',
          'When the user Tabs away and later Tabs back, focus returns to the item that last held tabindex="0", preserving their position.',
          'Because actual focus is on the item, the browser fires real focus events, :focus CSS styling applies natively, and screen readers announce the newly focused element automatically.'
        ]
      },
      {
        type: 'heading',
        text: 'aria-activedescendant'
      },
      {
        type: 'list',
        items: [
          'DOM focus stays on the widget container (or an associated input), which has tabindex="0" or is natively focusable.',
          'The container carries aria-activedescendant="id-of-active-option"; arrow keys update this attribute value instead of moving focus.',
          'Each option needs a unique id, an appropriate role (e.g., option in a listbox), and the active one is typically also marked with aria-selected or a highlight class.',
          'Screen readers announce the element referenced by aria-activedescendant as if it were focused, even though document.activeElement never changes.'
        ]
      },
      {
        type: 'heading',
        text: 'When Each Pattern Is Required'
      },
      {
        type: 'paragraph',
        text: 'For most composite widgets the two approaches are interchangeable, and roving tabindex is the simpler, more robust default. But an editable combobox (a text input with a filtering dropdown list) MUST use aria-activedescendant: the user has to keep typing, so DOM focus must remain in the text input while arrow keys highlight options in the popup list. Moving real focus into the list would pull the user out of the input and break typing. aria-activedescendant is also convenient when moving focus would cause unwanted side effects such as scroll jumps or expensive re-renders in virtualized lists.'
      },
      {
        type: 'heading',
        text: 'Common Pitfalls'
      },
      {
        type: 'list',
        items: [
          'Forgetting to scroll the active item into view: with aria-activedescendant, focus never moves, so the browser does not auto-scroll — the script must call scrollIntoView() (and with roving tabindex, custom scroll containers can have the same issue).',
          'No visible focus styling on the active descendant: :focus never matches the option (focus is on the container), so authors must style the active item explicitly (e.g., via [aria-selected="true"] or a class) to satisfy SC 2.4.7 Focus Visible.',
          'Leaving multiple items with tabindex="0" in a roving pattern, creating several Tab stops inside the widget.',
          'Pointing aria-activedescendant at an id that does not exist, or at an element that is not an owned descendant of the container.',
          'Implementing arrow-key movement but forgetting Home/End (first/last item) and, for listboxes, type-ahead — recommended behaviors in the ARIA Authoring Practices.'
        ]
      },
      {
        type: 'callout',
        text: 'Quick test: press Tab — the whole widget should be ONE stop. Then press arrows — the highlight should move, stay visible, and stay scrolled into view, whether or not document.activeElement changes.'
      },
    ],
    relatedTopics: ['aria-widget-patterns', 'standard-vs-custom-controls', 'keyboard-testing', 'focus-indicators', 'aria-states-properties', 'screen-reader-modes'],
    examTips: [
      'Composite widgets = one Tab stop; arrow keys navigate inside (APG keyboard model)',
      'Roving tabindex: active item tabindex="0", others tabindex="-1", real focus moves on arrow keys',
      'aria-activedescendant: focus stays on the container; the attribute\'s id value identifies the active option',
      'Editable comboboxes must use aria-activedescendant because DOM focus has to stay in the text input while arrowing through options',
      'Two classic bugs: active item not scrolled into view, and no visible highlight on the active descendant (fails 2.4.7 Focus Visible)'
    ]
  },
];
