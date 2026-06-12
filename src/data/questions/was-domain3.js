export const wasDomain3 = {
  id: 'was-domain3',
  courseId: 'was',
  title: 'Remediating Accessibility Issues',
  iconName: 'wrench',
  color: 'bg-amber-600',
  description: 'Prioritizing issues, recommending fixes, procurement, and organizational strategy.',
  questions: [
    // =============================================
    // SEVERITY & PRIORITIZATION (1201-1214)
    // =============================================
    {
      id: 1201,
      question: "An accessibility audit reveals 50 issues. Which factor should MOST influence which issues are fixed first?",
      options: [
        "The WCAG Success Criterion number (lower numbers first)",
        "The impact on users — whether the issue blocks, hinders, or merely inconveniences people with disabilities",
        "The order in which the automated tool reported the issues",
        "The visual prominence of the affected element on the page"
      ],
      correct: 1,
      explanation: "User impact is the primary factor for prioritization. High-impact issues that completely block users with disabilities from completing tasks should be fixed before issues that merely cause inconvenience. This ensures limited remediation resources produce the greatest accessibility improvement.",
      wrongExplanations: {
        0: "WCAG SC numbering reflects document organization, not severity. SC 4.1.2 (Name, Role, Value) can be more critical than SC 1.1.1 (Non-text Content) in many contexts.",
        2: "Automated tool report order is arbitrary and depends on DOM traversal order, not the severity or importance of the issues found.",
        3: "Visual prominence matters for some users but is not the primary factor — a visually subtle form field that lacks a label can be a critical blocker for screen reader users."
      },
      topicLinks: ['remediation-prioritization'],
      difficulty: 'easy',
      tags: ['prioritization', 'remediation']
    },
    {
      id: 1202,
      question: "A website's checkout flow is completely inaccessible via keyboard, but a decorative image on the About page has poor alt text. Which should be fixed first and why?",
      options: [
        "The alt text, because SC 1.1.1 (Non-text Content) is Level A and keyboard access is Level A too, so order doesn't matter",
        "The alt text, because image issues are easier for automated tools to verify",
        "The checkout flow, because it blocks users from completing a critical task on a high-traffic page",
        "Both should be fixed simultaneously since they are both Level A"
      ],
      correct: 2,
      explanation: "The checkout flow should be prioritized because it blocks a critical user task — users cannot complete a purchase without keyboard access. Prioritization considers user impact (blocking vs. minor), the criticality of the affected task (checkout is essential), and page traffic. A decorative image's poor alt text is a minor issue by comparison.",
      wrongExplanations: {
        0: "While both may relate to Level A criteria, the conformance level alone does not determine remediation priority. User impact and task criticality are more important factors.",
        1: "Ease of automated verification is a convenience factor for testers, not a valid reason to prioritize one issue over another. User impact should drive prioritization.",
        3: "While fixing both is the ultimate goal, resource constraints require prioritization. The keyboard-blocking issue has far greater user impact and should come first."
      },
      topicLinks: ['remediation-prioritization', 'wcag-operable'],
      difficulty: 'easy',
      tags: ['prioritization', 'remediation', 'keyboard']
    },
    {
      id: 1203,
      question: "An accessibility issue exists in a shared navigation component used on every page of a 500-page website. Why should this issue be prioritized for remediation?",
      options: [
        "Because navigation components are visually prominent",
        "Because fixing a template-level component resolves the issue across all 500 pages at once",
        "Because navigation is always a Level A requirement",
        "Because navigation issues are the easiest to test with automated tools"
      ],
      correct: 1,
      explanation: "Template-level and component-library issues should be prioritized because fixing them once resolves the issue everywhere that component is used. A single fix in a shared navigation component eliminates the issue across all 500 pages, making it an extremely high-value remediation target.",
      wrongExplanations: {
        0: "Visual prominence alone does not determine remediation priority — a non-prominent form field with no label can be more critical.",
        2: "Not all navigation requirements are Level A (e.g., SC 2.4.5 Multiple Ways is Level AA). And conformance level alone should not drive prioritization.",
        3: "The ease of testing does not determine remediation priority. The key factor here is the multiplier effect of fixing a shared component."
      },
      topicLinks: ['remediation-prioritization'],
      difficulty: 'easy',
      tags: ['prioritization', 'remediation', 'templates']
    },
    {
      id: 1204,
      question: "When prioritizing accessibility issues for remediation, what does 'cost-benefit analysis' typically involve?",
      options: [
        "Calculating the exact dollar amount each issue costs the company in lost revenue",
        "Weighing the effort required to fix an issue against the improvement in accessibility it delivers",
        "Comparing the cost of an accessibility lawsuit against the cost of fixing the issue",
        "Measuring the time to fix against the time remaining before a legal deadline"
      ],
      correct: 1,
      explanation: "In accessibility remediation, cost-benefit analysis means evaluating the effort (development time, complexity, risk of regression) required to fix an issue against the accessibility improvement it delivers (user impact, number of users affected, severity of the barrier). Quick fixes with high user impact should be prioritized.",
      wrongExplanations: {
        0: "While lost revenue can be a factor, cost-benefit in accessibility prioritization focuses on remediation effort vs. user accessibility improvement, not precise revenue calculations.",
        2: "Legal risk is one factor in prioritization, but cost-benefit analysis is broader — it weighs remediation effort against the accessibility improvement for users, not just legal exposure.",
        3: "Legal deadlines are a constraint that affects scheduling, but cost-benefit analysis specifically weighs effort required against accessibility value delivered."
      },
      topicLinks: ['remediation-prioritization'],
      difficulty: 'medium',
      tags: ['prioritization', 'remediation', 'cost-benefit']
    },
    {
      id: 1205,
      question: "Which of the following is generally considered the HIGHEST severity accessibility issue?",
      options: [
        "A heading is marked up as <div class='heading'> instead of using a proper <h2> tag",
        "A modal dialog does not return focus to the trigger button when closed",
        "The entire checkout form cannot be accessed via keyboard at all",
        "Color contrast on secondary body text is 4.2:1 instead of 4.5:1"
      ],
      correct: 2,
      explanation: "A critical task (checkout) being completely inaccessible via keyboard is the highest severity issue because it entirely blocks keyboard users, switch device users, and screen reader users from completing an essential function. The other issues are real problems but allow workarounds or affect less critical interactions.",
      wrongExplanations: {
        0: "While improper heading markup affects screen reader navigation (SC 1.3.1), users can still access the content — it makes navigation harder but does not completely block access.",
        1: "Focus management on dialog close is important (it can be disorienting), but users can still Tab to find their place. It does not completely block task completion.",
        3: "Contrast just below the required ratio (4.2:1 vs. 4.5:1) is a compliance failure, but the text is still mostly readable. It does not block access entirely."
      },
      topicLinks: ['remediation-prioritization', 'wcag-operable'],
      difficulty: 'medium',
      tags: ['prioritization', 'severity', 'keyboard']
    },
    {
      id: 1206,
      question: "A remediation team has limited time. They can fix EITHER: (A) color contrast on 3 rarely visited pages, or (B) missing form labels on the login page. Which should they prioritize?",
      options: [
        "Option A — because color contrast affects more pages",
        "Option B — because the login page is high-traffic and missing labels block form completion for AT users",
        "Option A — because color contrast failures are easier to verify as fixed",
        "Neither — they should wait until they can fix both at once"
      ],
      correct: 1,
      explanation: "Missing form labels on the login page should be prioritized: the login page is a critical entry point with high traffic, and missing labels prevent assistive technology users from identifying and filling in form fields — a potential blocker. Color contrast on rarely visited pages, while important, affects fewer users and is less likely to completely block access.",
      wrongExplanations: {
        0: "The number of pages affected matters, but 3 rarely visited pages are less important than 1 high-traffic, essential-function page. User impact and task criticality outweigh page count.",
        2: "Ease of verification is a testing convenience, not a valid prioritization factor. User impact should drive the decision.",
        3: "Waiting to fix both when one issue is significantly more impactful than the other wastes time and leaves a critical barrier in place."
      },
      topicLinks: ['remediation-prioritization', 'form-accessibility'],
      difficulty: 'medium',
      tags: ['prioritization', 'remediation', 'forms']
    },
    {
      id: 1207,
      question: "According to WCAG, what must be true for a page to conform to Level AA?",
      options: [
        "All Level AA Success Criteria are met, but Level A failures are acceptable",
        "All Level A and Level AA Success Criteria are met on that page",
        "At least 80% of Level A and AA Success Criteria are met",
        "All Level A, AA, and AAA Success Criteria are met"
      ],
      correct: 1,
      explanation: "WCAG conformance is cumulative: to conform to Level AA, a page must satisfy ALL Level A Success Criteria AND all Level AA Success Criteria. If even one A or AA criterion fails, the page does not conform to Level AA. There is no partial conformance — it is pass/fail.",
      wrongExplanations: {
        0: "Conformance levels are cumulative. Level AA includes all Level A criteria. You cannot claim AA conformance while failing Level A criteria.",
        2: "WCAG conformance is binary pass/fail — there is no percentage threshold. Every applicable SC must pass for conformance to be claimed.",
        3: "Level AAA includes A and AA, but Level AA conformance does not require meeting AAA criteria. WCAG recommends against requiring AAA conformance for entire sites."
      },
      topicLinks: ['wcag-overview', 'remediation-prioritization'],
      difficulty: 'easy',
      tags: ['wcag-conformance', 'remediation']
    },
    {
      id: 1208,
      question: "Which factor from EN 301 549 can help determine the user-group impact of a specific accessibility issue?",
      options: [
        "Clause 4 Functional Performance Statements and Annex B, which map requirements to user needs",
        "Clause 12, which addresses documentation and support services",
        "The VPAT conformance levels (Supports, Partially Supports, Does Not Support)",
        "The WCAG-EM Report Tool's scoring algorithm"
      ],
      correct: 0,
      explanation: "EN 301 549 Clause 4 defines Functional Performance Statements (user needs like 'Usage without vision', 'Usage with limited cognition') and Annex B maps these to specific technical requirements. This mapping helps determine which user groups are affected by a particular accessibility issue, informing remediation prioritization.",
      wrongExplanations: {
        1: "Clause 12 covers documentation and support services. While important for accessibility, it does not map accessibility requirements to specific user needs.",
        2: "VPAT conformance levels are reporting categories for vendor self-assessment, not tools for analyzing user-group impact of specific issues.",
        3: "The WCAG-EM Report Tool helps structure evaluation reports but does not include a scoring algorithm for user-group impact analysis."
      },
      topicLinks: ['remediation-prioritization', 'en-301-549'],
      difficulty: 'hard',
      tags: ['prioritization', 'en-301-549', 'user-impact']
    },
    {
      id: 1209,
      question: "A website fails SC 2.1.2 No Keyboard Trap on one page. Why is this considered particularly severe even if the page has low traffic?",
      options: [
        "Because SC 2.1.2 is a Level A criterion and all Level A criteria are critical",
        "Because a keyboard trap can completely prevent the user from accessing the rest of the page or even the browser",
        "Because keyboard traps also cause seizures in users with photosensitive conditions",
        "Because SC 2.1.2 is one of WCAG's non-interference criteria, meaning it must be met even for non-conforming content"
      ],
      correct: 3,
      explanation: "SC 2.1.2 No Keyboard Trap is one of WCAG's four non-interference conformance requirements (along with 1.4.2 Audio Control, 2.2.2 Pause/Stop/Hide, and 2.3.1 Three Flashes). These must be met even for content that uses technologies in non-conforming ways, because failure blocks access to the entire page. This special status makes keyboard trap violations particularly severe.",
      wrongExplanations: {
        0: "While Level A criteria are important, not all Level A issues are equally severe. The specific severity here comes from the non-interference status, not just the conformance level.",
        1: "This is partially correct — keyboard traps do block users — but the question asks why it is particularly severe. The non-interference status is the distinguishing factor that elevates its severity.",
        2: "Keyboard traps do not cause seizures. Seizure risks are addressed by SC 2.3.1 (Three Flashes), which is a separate concern from keyboard traps."
      },
      topicLinks: ['remediation-prioritization', 'wcag-operable', 'wcag-overview'],
      difficulty: 'hard',
      tags: ['prioritization', 'keyboard', 'conformance', 'non-interference']
    },
    {
      id: 1210,
      question: "When reporting remediation priorities to stakeholders, which communication approach is MOST effective?",
      options: [
        "List every WCAG Success Criterion number that fails, sorted numerically",
        "Describe each issue in terms of user impact, affected user groups, and the recommended fix with its relative effort",
        "Show the automated scan score as a percentage and target 100%",
        "Only report Level A failures since those are the most severe"
      ],
      correct: 1,
      explanation: "Effective communication translates technical findings into actionable terms stakeholders can understand: what the issue means for real users, who is affected, what the fix involves, and how much effort it requires. This enables informed decision-making about resource allocation and prioritization.",
      wrongExplanations: {
        0: "Listing SC numbers without context is not meaningful to most stakeholders. They need to understand the user impact and effort involved, not just the technical reference codes.",
        2: "Automated scan scores are misleading — tools only catch 30-50% of issues, so a high automated score does not mean good accessibility. Using it as the primary metric gives false confidence.",
        3: "Only reporting Level A failures ignores Level AA issues that may be legally required (most laws reference Level AA) and may significantly impact users."
      },
      topicLinks: ['remediation-prioritization', 'remediation-strategies'],
      difficulty: 'medium',
      tags: ['communication', 'prioritization', 'stakeholders']
    },
    {
      id: 1211,
      question: "An audit finds that the same color contrast failure appears on every page because it is defined in the global CSS theme. What type of remediation issue is this?",
      options: [
        "A content-level issue requiring page-by-page fixes",
        "A template or design-system issue where a single fix resolves it site-wide",
        "A third-party component issue that cannot be fixed",
        "A best-practice issue that is not a WCAG failure"
      ],
      correct: 1,
      explanation: "When an accessibility issue originates in shared CSS, templates, or design systems, it is a template-level issue. Fixing the color values in the global CSS theme resolves the contrast failure across every page at once. These issues are high-priority remediation targets because of their site-wide multiplier effect.",
      wrongExplanations: {
        0: "Since the issue is in the global CSS, page-by-page fixes would be redundant and wasteful. The fix belongs in the shared stylesheet.",
        2: "A global CSS theme is typically under the organization's control, not a third-party component. It can and should be fixed.",
        3: "Insufficient color contrast (failing SC 1.4.3 or 1.4.6) is a WCAG conformance failure, not merely a best practice."
      },
      topicLinks: ['remediation-prioritization', 'color-contrast'],
      difficulty: 'easy',
      tags: ['prioritization', 'templates', 'color-contrast']
    },
    {
      id: 1212,
      question: "Which of the following remediation approaches reflects a 'shift-left' strategy?",
      options: [
        "Running an accessibility audit after the website launches and fixing issues in patches",
        "Including accessibility requirements in user stories, testing during development, and catching issues before they reach production",
        "Hiring an external consultant to audit the website annually",
        "Adding ARIA attributes to fix issues found during a pre-launch QA pass"
      ],
      correct: 1,
      explanation: "Shift-left means moving accessibility consideration earlier (to the left) in the development timeline — from post-launch remediation to requirements, design, and development phases. Including accessibility in user stories and testing during development catches issues when they are cheapest and easiest to fix.",
      wrongExplanations: {
        0: "Fixing issues after launch is reactive remediation — the opposite of shift-left. Issues found this late are more expensive and disruptive to fix.",
        2: "Annual external audits are valuable but are point-in-time assessments. Shift-left is about continuous, integrated accessibility throughout development, not periodic checks.",
        3: "Adding ARIA in a pre-launch QA pass is better than post-launch, but it still means accessibility was not considered during design and development — it is a late-stage patch, not true shift-left."
      },
      topicLinks: ['accessibility-qa-lifecycle', 'remediation-prioritization'],
      difficulty: 'medium',
      tags: ['shift-left', 'lifecycle', 'remediation']
    },
    {
      id: 1213,
      question: "An organization's website must comply with a law requiring WCAG 2.2 Level AA. Which issues carry the highest legal risk?",
      options: [
        "Level AAA failures, since those represent the highest standard",
        "Best-practice recommendations from automated scanning tools",
        "Level A and Level AA failures on pages covered by the legal requirement",
        "Issues found only during usability testing with people with disabilities"
      ],
      correct: 2,
      explanation: "If the law requires WCAG 2.2 Level AA conformance, then any failure of a Level A or Level AA Success Criterion on in-scope pages represents non-compliance and carries legal risk. Level AAA is not typically required by law, and best-practice issues that do not fail specific SC are not conformance failures.",
      wrongExplanations: {
        0: "Level AAA is not typically required by law and WCAG itself recommends against requiring AAA conformance for entire sites. Legal risk primarily comes from failing the required level (AA).",
        1: "Automated tool best-practice recommendations may not map to specific WCAG SC failures. Legal risk comes from failing the normative requirements, not informative best practices.",
        3: "Usability issues found only during user testing, without corresponding WCAG SC failures, may not constitute legal non-compliance — though they represent real accessibility barriers."
      },
      topicLinks: ['remediation-prioritization', 'wcag-overview'],
      difficulty: 'medium',
      tags: ['legal-risk', 'conformance', 'remediation']
    },
    {
      id: 1214,
      question: "What is a key risk of relying solely on automated accessibility scan scores to measure remediation progress?",
      options: [
        "Automated tools are too expensive for regular use",
        "Automated tools can only test static HTML, not dynamic content",
        "Automated tools catch only 30-50% of accessibility issues, so a perfect score can still hide many barriers",
        "Automated tools only test against WCAG 2.0, not WCAG 2.2"
      ],
      correct: 2,
      explanation: "Automated accessibility tools can detect roughly 30-50% of WCAG issues (primarily formal, code-level checks like missing alt attributes or missing form labels). They cannot evaluate content quality, keyboard interaction patterns, or the meaningfulness of alternatives. A perfect automated score gives false confidence — significant barriers may remain undetected.",
      wrongExplanations: {
        0: "Many automated tools are free or low-cost (axe, WAVE, Lighthouse). Cost is not the primary limitation.",
        1: "Modern automated tools can interact with dynamic content and JavaScript-rendered pages. The limitation is the types of issues they can detect, not the types of content they can process.",
        3: "Modern automated tools support current WCAG versions including 2.1 and 2.2 criteria. The limitation is the depth of testing, not the standard version."
      },
      topicLinks: ['remediation-prioritization', 'automated-testing-tools'],
      difficulty: 'medium',
      tags: ['automated-testing', 'remediation', 'limitations']
    },

    // =============================================
    // REMEDIATION STRATEGIES (1215-1228)
    // =============================================
    {
      id: 1215,
      question: "What is the key difference between a WCAG conformance failure and an accessibility best practice recommendation?",
      options: [
        "Failures are found by automated tools; best practices are found by manual testing",
        "A failure clearly violates a specific WCAG Success Criterion; a best practice improves usability but does not fail a specific SC",
        "Failures apply to Level A only; best practices apply to Level AA and AAA",
        "Failures must be fixed immediately; best practices can be ignored entirely"
      ],
      correct: 1,
      explanation: "A conformance failure is a specific violation of a normative WCAG Success Criterion — it must be fixed to achieve conformance. A best practice improves accessibility and usability but does not violate a specific SC. Auditors must clearly distinguish between the two when reporting findings, as they have different implications for conformance claims and legal compliance.",
      wrongExplanations: {
        0: "Both failures and best practices can be found through automated or manual testing. The distinction is whether a specific SC is violated, not how the issue was discovered.",
        2: "Failures can occur at any conformance level (A, AA, or AAA). Best practices are not tied to specific levels — they are recommendations that go beyond the normative requirements.",
        3: "While failures have higher legal urgency, best practices should not be ignored — they represent real accessibility improvements. The distinction is about conformance status, not importance."
      },
      topicLinks: ['remediation-strategies', 'wcag-overview'],
      difficulty: 'easy',
      tags: ['remediation', 'conformance', 'best-practices']
    },
    {
      id: 1216,
      question: "A complex data table is displayed using nested <div> elements with CSS Grid for layout. Screen readers cannot identify headers or navigate cells. What is the BEST remediation approach?",
      options: [
        "Add aria-label to each <div> cell describing its content",
        "Replace the <div> structure with semantic <table>, <th>, <tr>, <td> elements",
        "Add role='table', role='row', and role='cell' to the existing <div> elements",
        "Add a text description above the table explaining its structure"
      ],
      correct: 1,
      explanation: "The best remediation is to use semantic HTML table elements (<table>, <th>, <tr>, <td>) which provide built-in support for header associations, row/column navigation, and screen reader table navigation commands. This follows the first rule of ARIA: use native HTML with built-in semantics instead of recreating functionality with ARIA.",
      wrongExplanations: {
        0: "Adding aria-label to each cell does not create the table semantics needed for header/cell associations and screen reader table navigation. It would require labeling every single cell and would not support structural navigation.",
        2: "While adding ARIA table roles can work as a patch, it requires significantly more code (role='table', role='rowgroup', role='row', role='columnheader', role='cell', plus aria-colindex/aria-rowindex) and is less reliable than native HTML tables. Semantic HTML is preferred.",
        3: "A text description supplements but does not replace programmatic table structure. Screen reader users need to navigate the table cells and hear associated headers, which requires semantic markup."
      },
      topicLinks: ['remediation-strategies', 'semantic-html'],
      difficulty: 'medium',
      tags: ['remediation', 'semantic-html', 'tables']
    },
    {
      id: 1217,
      question: "A form has no <label> elements — form fields are identified only by placeholder text. What is the MOST robust fix?",
      options: [
        "Add aria-label to each input matching the placeholder text",
        "Add <label> elements visually hidden with CSS, associated via for/id",
        "Add <label> elements visible to all users, associated via for/id",
        "Change the placeholder color to meet contrast requirements"
      ],
      correct: 2,
      explanation: "Visible <label> elements associated via for/id are the most robust fix because they: (1) provide a persistent visible label (placeholders disappear on input), (2) are natively associated with the form control for assistive technologies, (3) increase the clickable area of the form control, and (4) benefit all users including those with cognitive disabilities.",
      wrongExplanations: {
        0: "aria-label provides a programmatic name but not a visible label. Sighted users still lose their reference when they start typing and the placeholder disappears. This fails to address the usability issue.",
        1: "Visually hidden labels fix the screen reader issue but not the usability problem — sighted users still lose their label reference when the placeholder disappears on input. Visible labels are better for all users.",
        3: "Improving placeholder contrast does not fix the core problem: placeholders disappear when users start typing, leaving no visible label. Contrast alone does not make placeholders an adequate label substitute."
      },
      topicLinks: ['remediation-strategies', 'form-accessibility'],
      difficulty: 'medium',
      tags: ['remediation', 'forms', 'labels']
    },
    {
      id: 1218,
      question: "When should ARIA be used as a remediation approach rather than refactoring to semantic HTML?",
      options: [
        "Always — ARIA is more powerful and flexible than native HTML",
        "When the codebase makes full refactoring impractical as an immediate fix, ARIA can serve as a bridge while planning a proper semantic rewrite",
        "Only for decorative elements that need to be hidden from screen readers",
        "When the website needs to support older browsers that do not understand HTML5 semantic elements"
      ],
      correct: 1,
      explanation: "ARIA is appropriate as a remediation bridge when full semantic refactoring is impractical in the short term — for example, when the code is complex, heavily coupled, or the timeline is tight. ARIA can add missing semantics to existing elements while a longer-term plan for semantic HTML refactoring is developed. However, native HTML should always be the goal.",
      wrongExplanations: {
        0: "ARIA is not more powerful — native HTML provides keyboard behavior, state management, and cross-platform compatibility that ARIA does not. The first rule of ARIA is to use native HTML when possible.",
        2: "Hiding decorative elements (aria-hidden='true') is one use of ARIA, but the question asks about remediation strategy. ARIA's role in remediation is broader — adding missing names, roles, and states to elements.",
        3: "All modern browsers support HTML5 semantic elements. Older browser support is not a valid reason to prefer ARIA over semantic HTML in current development."
      },
      topicLinks: ['remediation-strategies', 'aria-overview', 'standard-vs-custom-controls'],
      difficulty: 'medium',
      tags: ['remediation', 'aria', 'semantic-html']
    },
    {
      id: 1219,
      question: "A website uses color alone to indicate required form fields (red border). What is the BEST remediation?",
      options: [
        "Increase the red border contrast to 4.5:1",
        "Add an asterisk (*) with a visible legend explaining its meaning, plus the 'required' attribute on the input",
        "Add a tooltip that says 'Required' on hover",
        "Change the red border to a thicker border"
      ],
      correct: 1,
      explanation: "The best fix addresses both color independence (SC 1.4.1 Use of Color) and programmatic identification. An asterisk with a legend provides a non-color visual indicator, and the 'required' HTML attribute makes the required state programmatically determinable for assistive technologies (SC 1.3.1 Info and Relationships, SC 3.3.2 Labels or Instructions).",
      wrongExplanations: {
        0: "Increasing contrast of the red border improves visibility but still relies on color alone to convey the 'required' status. Users who cannot perceive color need a non-color indicator.",
        2: "Tooltips on hover are not accessible to keyboard users, touch users, or screen reader users in browse mode. They are not a reliable way to convey important information.",
        3: "A thicker border is still a visual-only distinction that does not convey meaning programmatically. Screen reader users would not know the field is required."
      },
      topicLinks: ['remediation-strategies', 'form-accessibility', 'color-contrast'],
      difficulty: 'medium',
      tags: ['remediation', 'forms', 'color', 'use-of-color']
    },
    {
      id: 1220,
      question: "An auditor finds that a custom dropdown menu is missing keyboard support, has no ARIA roles, and does not expose its expanded/collapsed state. The team asks: fix or redesign? What factors guide this decision?",
      options: [
        "Always fix — redesign is too expensive",
        "Always redesign — fixing custom components is not worth the effort",
        "Evaluate the code complexity, scope of defects, available resources, and whether fixing would be more fragile and costly than a clean rewrite using semantic HTML and ARIA best practices",
        "The decision depends solely on whether the component is open source or proprietary"
      ],
      correct: 2,
      explanation: "The fix-vs-redesign decision requires evaluating multiple factors: how complex and maintainable the current code is, how many separate issues exist, whether patches would be fragile, available time and budget, and whether a rewrite using semantic HTML and APG patterns would produce a more robust, maintainable result. Neither always-fix nor always-redesign is correct — it depends on context.",
      wrongExplanations: {
        0: "'Always fix' ignores situations where the existing code is so poorly structured that patches would be fragile, incomplete, and harder to maintain than a clean rewrite.",
        1: "'Always redesign' ignores situations where targeted fixes are practical and cost-effective, especially under time pressure or for components with limited issues.",
        3: "Whether code is open source or proprietary may affect licensing, but the fix-vs-redesign decision is driven by code quality, defect scope, and resource availability."
      },
      topicLinks: ['remediation-strategies', 'standard-vs-custom-controls'],
      difficulty: 'hard',
      tags: ['remediation', 'fix-vs-redesign', 'custom-controls']
    },
    {
      id: 1221,
      question: "An image has alt='image.jpg'. What is the correct remediation?",
      options: [
        "Remove the alt attribute entirely so the screen reader skips the image",
        "If the image is informative, replace with a meaningful description; if decorative, use alt='' (empty string)",
        "Replace with alt='image' to shorten the text",
        "Add role='presentation' to keep the current alt text but hide the image's role"
      ],
      correct: 1,
      explanation: "The correct fix depends on the image's purpose. If informative, the alt text should describe the image's content or function meaningfully. If decorative, alt='' (empty string) tells assistive technologies to skip it. 'image.jpg' is a filename that provides no useful information to users.",
      wrongExplanations: {
        0: "Removing the alt attribute entirely causes most screen readers to announce the image's filename or URL instead — making the experience worse, not better.",
        2: "Replacing 'image.jpg' with 'image' is still meaningless and does not describe the image's content or purpose.",
        3: "Adding role='presentation' while keeping a meaningless alt text is contradictory. If the image is decorative, use alt=''. If informative, provide a meaningful description."
      },
      topicLinks: ['remediation-strategies', 'wcag-perceivable'],
      difficulty: 'easy',
      tags: ['remediation', 'images', 'alt-text']
    },
    {
      id: 1222,
      question: "A custom tab widget uses <div> elements with click handlers. Keyboard users cannot navigate between tabs. What is the recommended keyboard interaction pattern to implement?",
      options: [
        "Each tab should be focusable with Tab, and activated with Enter",
        "Arrow keys move between tabs within the tablist; Tab moves focus out of the tablist to the tab panel content",
        "All tabs should be in a single focusable group activated by number keys",
        "Tabs should be navigated using Page Up and Page Down keys"
      ],
      correct: 1,
      explanation: "The ARIA Authoring Practices Guide (APG) tab pattern specifies: Tab key moves focus into the tablist (to the active tab) and out to the tab panel. Arrow keys (Left/Right for horizontal, Up/Down for vertical) move between tabs within the tablist. This follows the composite widget pattern where Tab enters/exits the widget and arrows navigate within it.",
      wrongExplanations: {
        0: "Making each tab individually tabbable would require many Tab presses to get through the tabs and reach the content. The APG pattern uses arrows within the tablist and Tab to enter/exit.",
        2: "Number keys are not part of the standard tab widget keyboard pattern. The APG defines arrow keys for tab navigation.",
        3: "Page Up/Down are not part of the standard tab widget pattern. They may be used in some widgets (like date pickers) but not for tab navigation."
      },
      topicLinks: ['remediation-strategies', 'aria-widget-patterns', 'standard-vs-custom-controls'],
      difficulty: 'hard',
      tags: ['remediation', 'keyboard', 'tabs', 'apg']
    },
    {
      id: 1223,
      question: "A page heading structure goes: <h1>, <h3>, <h2>, <h4>. What is the correct remediation?",
      options: [
        "Add CSS to make them all look different sizes",
        "Restructure to a logical hierarchy: h1 → h2 → h3 → h4, reflecting the content outline",
        "Replace all headings with <div> elements and use aria-level to set heading levels",
        "Only fix the heading levels that automated tools flag as errors"
      ],
      correct: 1,
      explanation: "Headings should form a logical hierarchy that reflects the content structure (SC 1.3.1 Info and Relationships). The fix is to assign heading levels based on content relationships: the page title is h1, major sections are h2, subsections are h3, and so on. Visual styling is controlled separately through CSS.",
      wrongExplanations: {
        0: "CSS styling changes visual presentation but does not fix the programmatic heading structure that assistive technologies use for navigation.",
        2: "Using <div> with aria-level removes native heading semantics and is less robust than native heading elements. The first rule of ARIA: use native HTML when possible.",
        3: "Automated tools may not catch all heading hierarchy issues (e.g., they may not flag skipped levels in all contexts). The entire heading structure should reflect the content outline."
      },
      topicLinks: ['remediation-strategies', 'semantic-html'],
      difficulty: 'easy',
      tags: ['remediation', 'headings', 'semantic-html']
    },
    {
      id: 1224,
      question: "A website's body text has a contrast ratio of 3.8:1 against its background. What is the minimum required ratio and what should the remediation target?",
      options: [
        "Minimum is 3:1; the current contrast passes — no fix needed",
        "Minimum is 4.5:1 for normal text (SC 1.4.3, Level AA); darken the text or lighten the background to meet at least 4.5:1",
        "Minimum is 7:1 (SC 1.4.6, Level AAA); a major color scheme change is required",
        "Contrast requirements only apply to images of text, not real text"
      ],
      correct: 1,
      explanation: "SC 1.4.3 Contrast (Minimum) at Level AA requires a 4.5:1 ratio for normal-size text and 3:1 for large text (18pt or 14pt bold). At 3.8:1, the body text fails the 4.5:1 requirement. The fix is to adjust foreground or background colors to achieve at least 4.5:1.",
      wrongExplanations: {
        0: "The 3:1 ratio applies to large text (18pt or 14pt bold) and non-text UI components (SC 1.4.11). Normal body text requires 4.5:1 at Level AA.",
        2: "The 7:1 ratio is SC 1.4.6 Enhanced Contrast at Level AAA, which is an aspirational target. The legal requirement for most purposes is Level AA (4.5:1).",
        3: "SC 1.4.3 applies to all text, not just images of text. In fact, real text is preferred over images of text specifically because users can adjust its presentation."
      },
      topicLinks: ['remediation-strategies', 'color-contrast'],
      difficulty: 'medium',
      tags: ['remediation', 'color-contrast', 'wcag-perceivable']
    },
    {
      id: 1225,
      question: "An auditor reports: 'SC 1.3.1 Failure: Navigation list is not marked up as a list.' The developer asks why, since the navigation looks correct visually. How should the auditor explain?",
      options: [
        "Visual appearance is what matters for accessibility — if it looks like a list, it functions as one",
        "Screen readers use the semantic markup to convey structure — a visually styled set of links without list markup does not convey the grouping, item count, or position to assistive technology users",
        "All navigations must use <ol> ordered lists because the order of links matters",
        "The issue is that <nav> is missing, not the list markup"
      ],
      correct: 1,
      explanation: "SC 1.3.1 requires that information conveyed through visual presentation is also available programmatically. When a navigation appears as a list visually, it should be marked up as a list (<ul>/<ol> with <li>) so screen readers can announce the number of items, the user's position in the list, and the grouping relationship. Without this markup, the structure is lost for AT users.",
      wrongExplanations: {
        0: "Visual appearance is only one aspect of accessibility. Programmatic structure (semantic markup) is equally important for users who cannot see the visual layout and rely on assistive technologies.",
        2: "Either <ul> (unordered) or <ol> (ordered) list is acceptable depending on whether order is meaningful. Most navigation uses <ul> since the specific order of links is not typically significant.",
        3: "While <nav> is important for landmark navigation, the auditor specifically cited list markup. Both <nav> and proper list structure contribute to accessibility, but they address different aspects."
      },
      topicLinks: ['remediation-strategies', 'semantic-html', 'wcag-perceivable'],
      difficulty: 'medium',
      tags: ['remediation', 'semantic-html', 'info-relationships']
    },
    {
      id: 1226,
      question: "A website passes all automated accessibility checks but screen reader users report they cannot use the site's date picker widget. Why might this happen?",
      options: [
        "Automated tools cannot test custom widgets — they can only check static HTML properties like alt text and color contrast",
        "The screen reader software must be outdated",
        "Automated tools verify formal code properties but cannot test keyboard interaction patterns, focus management, or whether ARIA roles and states are correctly implemented in dynamic widgets",
        "The date picker is a third-party component, and automated tools skip third-party code"
      ],
      correct: 2,
      explanation: "Automated tools excel at checking code-level properties (missing alt, color contrast, missing labels, valid ARIA attributes) but cannot verify behavioral aspects: whether keyboard navigation works correctly, whether focus moves as expected, whether ARIA states update dynamically, or whether the widget follows APG interaction patterns. These require manual and AT testing.",
      wrongExplanations: {
        0: "This overstates the limitation. Automated tools can check some properties of custom widgets (valid ARIA roles, required attributes, accessible names). They just cannot test the interactive behavior.",
        1: "Screen reader compatibility issues are real, but blaming outdated software without investigation is not appropriate. The issue is more likely that the widget was not built to ARIA best practices.",
        3: "Automated tools scan all rendered DOM content regardless of whether it comes from first-party or third-party code. They do not distinguish code origin."
      },
      topicLinks: ['remediation-strategies', 'automated-testing-tools', 'aria-widget-patterns'],
      difficulty: 'hard',
      tags: ['remediation', 'automated-testing', 'custom-controls', 'limitations']
    },
    {
      id: 1227,
      question: "A developer adds tabindex='5' to a button to make it the first item to receive focus on the page. What is the problem and the correct fix?",
      options: [
        "tabindex='5' is too low — use tabindex='100' to ensure it is first",
        "Positive tabindex values create unpredictable focus order; instead, move the button earlier in the DOM source order",
        "tabindex values must be negative to receive focus",
        "tabindex only works on <a> and <input> elements, not <button>"
      ],
      correct: 1,
      explanation: "Positive tabindex values (>0) create a parallel focus order that takes priority over DOM order, making the focus sequence unpredictable and difficult to maintain. The correct approach is to place the element in the appropriate position in the DOM source order, ensuring focus order follows the visual and logical reading order naturally.",
      wrongExplanations: {
        0: "Any positive tabindex — whether 5 or 100 — creates the same problem: an unpredictable focus order that is separate from the DOM order and extremely difficult to manage as the page evolves.",
        2: "Negative tabindex (tabindex='-1') makes an element programmatically focusable but removes it from the Tab order. tabindex='0' places an element in the natural Tab order. Both are valid for different purposes.",
        3: "tabindex works on any HTML element. Native interactive elements (<button>, <a>, <input>) already have tabindex='0' implicitly."
      },
      topicLinks: ['remediation-strategies', 'focus-indicators', 'wcag-operable'],
      difficulty: 'medium',
      tags: ['remediation', 'focus-order', 'tabindex']
    },
    {
      id: 1228,
      question: "A page has auto-playing video with sound. Which WCAG non-interference requirement does this violate, and what is the correct fix?",
      options: [
        "SC 1.4.2 Audio Control (Level A) — provide a mechanism to pause, stop, or control the volume within the first 3 seconds, or do not auto-play audio",
        "SC 2.3.1 Three Flashes (Level A) — remove any flashing content from the video",
        "SC 1.2.1 Audio-only and Video-only (Level A) — provide a transcript",
        "SC 2.2.2 Pause, Stop, Hide (Level A) — allow the user to pause the video"
      ],
      correct: 0,
      explanation: "SC 1.4.2 Audio Control (Level A) is a non-interference requirement: if audio plays automatically for more than 3 seconds, there must be a mechanism to pause/stop it or control the volume independently of the system volume. This is critical because auto-playing audio interferes with screen reader speech output, making the page unusable.",
      wrongExplanations: {
        1: "SC 2.3.1 addresses seizure-inducing flashing content, not auto-playing audio. While the video may also need to meet SC 2.3.1, the auto-playing sound issue is specifically SC 1.4.2.",
        2: "SC 1.2.1 requires alternatives for audio-only and video-only prerecorded content. It addresses the availability of content alternatives, not auto-playing behavior.",
        3: "SC 2.2.2 applies to moving, blinking, or scrolling content and auto-updating information. While video is moving content, the specific issue of auto-playing audio is addressed by SC 1.4.2."
      },
      topicLinks: ['remediation-strategies', 'wcag-perceivable', 'wcag-overview'],
      difficulty: 'hard',
      tags: ['remediation', 'audio', 'non-interference', 'wcag-perceivable']
    },

    // =============================================
    // PROCUREMENT & ORGANIZATIONAL (1229-1240)
    // =============================================
    {
      id: 1229,
      question: "What is the relationship between a VPAT and an ACR?",
      options: [
        "They are completely different documents for different purposes",
        "The VPAT is the blank template; the ACR (Accessibility Conformance Report) is the completed document that evaluates a specific product",
        "The ACR is the blank template; the VPAT is the completed evaluation",
        "VPAT is the US version and ACR is the European version of the same document"
      ],
      correct: 1,
      explanation: "VPAT (Voluntary Product Accessibility Template) is the standardized template created by the Information Technology Industry Council (ITI). When a vendor fills out the VPAT for a specific product, the completed document is called an ACR (Accessibility Conformance Report). In practice, the terms are often used interchangeably.",
      wrongExplanations: {
        0: "They are directly related — the ACR is produced by completing a VPAT template. They serve the same purpose: documenting a product's accessibility conformance.",
        2: "This is reversed. The VPAT is the template; the ACR is the completed report. 'VPAT' refers to the template format, while 'ACR' refers to the filled-in evaluation.",
        3: "Both VPAT and ACR are used internationally. There are different VPAT editions (Rev 508 for US, Rev EU for EN 301 549, Rev WCAG, and INT for international), but VPAT vs. ACR is template vs. completed report."
      },
      topicLinks: ['vpat', 'procurement-accessibility'],
      difficulty: 'easy',
      tags: ['procurement', 'vpat', 'acr']
    },
    {
      id: 1230,
      question: "Which VPAT conformance levels are used in an ACR to describe a product's accessibility?",
      options: [
        "Pass, Fail, Not Tested",
        "Supports, Partially Supports, Does Not Support, Not Applicable",
        "Conformant, Non-Conformant, Partially Conformant",
        "Level A, Level AA, Level AAA"
      ],
      correct: 1,
      explanation: "VPATs use four conformance levels: 'Supports' (meets the criterion), 'Partially Supports' (some functionality does not meet), 'Does Not Support' (majority does not meet), and 'Not Applicable' (criterion is not relevant to the product). Some VPATs also include 'Not Evaluated'.",
      wrongExplanations: {
        0: "Pass/Fail/Not Tested is not the VPAT conformance vocabulary. VPATs use more nuanced levels that distinguish between full and partial support.",
        2: "Conformant/Non-Conformant is WCAG conformance terminology, not VPAT reporting terminology. VPATs use their own conformance levels.",
        3: "A, AA, AAA are WCAG conformance levels. The VPAT uses them to identify which SC are being evaluated, but the reporting uses Supports/Partially Supports/Does Not Support/Not Applicable."
      },
      topicLinks: ['vpat', 'procurement-accessibility'],
      difficulty: 'medium',
      tags: ['procurement', 'vpat', 'acr']
    },
    {
      id: 1231,
      question: "Why should procurement teams treat vendor-provided VPATs/ACRs with some skepticism?",
      options: [
        "VPATs are legally binding documents, so vendors always exaggerate compliance",
        "VPATs are self-reported by vendors and are NOT independently audited — claims should be verified with testing",
        "VPATs are always outdated because they are only updated annually",
        "VPATs only cover WCAG Level A, not Level AA"
      ],
      correct: 1,
      explanation: "VPATs/ACRs are self-reported by the vendor — there is no requirement for independent third-party validation. While some vendors use independent accessibility professionals to create their ACRs, many do not. The quality and accuracy of ACRs varies significantly, so procurement teams should verify claims through their own testing or independent evaluation.",
      wrongExplanations: {
        0: "VPATs are voluntary, not legally binding. Vendors may overstate compliance, understate it, or produce inaccurate reports — which is why verification is important.",
        2: "VPATs can be updated at any time and some vendors keep them current. The issue is not update frequency but the lack of independent verification.",
        3: "VPATs cover whatever criteria the template edition specifies. The VPAT 2.4 Rev WCAG covers both A and AA criteria, and the INT version includes Section 508 and EN 301 549 as well."
      },
      topicLinks: ['vpat', 'procurement-accessibility'],
      difficulty: 'medium',
      tags: ['procurement', 'vpat', 'verification']
    },
    {
      id: 1232,
      question: "Which VPAT edition would be MOST appropriate for a European public sector organization evaluating a web application for compliance with the Web Accessibility Directive?",
      options: [
        "VPAT 2.4 Rev 508 — the US Section 508 version",
        "VPAT 2.4 Rev WCAG — the WCAG-only version",
        "VPAT 2.4 Rev EU — the EN 301 549 version",
        "VPAT 2.4 INT — the international version combining all standards"
      ],
      correct: 2,
      explanation: "The VPAT 2.4 Rev EU is specifically designed for EN 301 549, which is the harmonised European standard. The Web Accessibility Directive (2016/2102) references EN 301 549 for presumed conformance. While the INT version also covers EN 301 549, Rev EU is the most focused and relevant edition for European compliance.",
      wrongExplanations: {
        0: "Rev 508 is for US Section 508 compliance. European public sector bodies are subject to the Web Accessibility Directive and EN 301 549, not Section 508.",
        1: "Rev WCAG covers WCAG criteria only. EN 301 549 includes additional requirements beyond WCAG that are relevant to the Web Accessibility Directive.",
        3: "The INT version is comprehensive but includes Section 508 criteria that are not relevant to European compliance. Rev EU is more focused and appropriate for this context."
      },
      topicLinks: ['vpat', 'en-301-549', 'procurement-accessibility'],
      difficulty: 'hard',
      tags: ['procurement', 'vpat', 'en-301-549', 'european']
    },
    {
      id: 1233,
      question: "At what point in the procurement process is accessibility MOST effectively integrated?",
      options: [
        "After the contract is signed, during the implementation phase",
        "During product evaluation and vendor selection, before the contract is signed",
        "After deployment, during the first accessibility audit",
        "Only when a user files an accessibility complaint"
      ],
      correct: 1,
      explanation: "Accessibility is most effectively integrated during evaluation and selection — before the contract is signed. At this stage, the organization has maximum leverage to require accessibility features, evaluate vendor claims, request demonstrations, and include binding accessibility commitments in the contract. After signing, leverage decreases significantly.",
      wrongExplanations: {
        0: "After the contract is signed, the organization has less leverage to demand changes. Accessibility requirements and commitments should be established before signing.",
        2: "Post-deployment audits are valuable but reactive. By that point, inaccessible features may be deeply embedded and expensive to fix. Prevention during procurement is more effective.",
        3: "Waiting for complaints is the most reactive and costly approach. It also means users with disabilities have already been excluded."
      },
      topicLinks: ['procurement-accessibility', 'vpat'],
      difficulty: 'easy',
      tags: ['procurement', 'lifecycle']
    },
    {
      id: 1234,
      question: "What role can accessibility experts play in the procurement process?",
      options: [
        "Only evaluating vendor VPATs after the purchase decision is made",
        "Advising on requirements, evaluating vendor responses and ACRs, testing products, suggesting contract language, and managing vendor remediation roadmaps",
        "Writing the RFP document without input from the procurement team",
        "Providing a single pass/fail rating for each vendor based on their VPAT"
      ],
      correct: 1,
      explanation: "Accessibility experts contribute throughout the procurement lifecycle: advising on governance practices, helping define accessibility requirements in RFPs, evaluating vendor responses and ACRs, testing products independently, suggesting contract wording for accessibility commitments, and managing vendor relationships around defect remediation and accessibility roadmaps.",
      wrongExplanations: {
        0: "Evaluating VPATs is one part of the role, but accessibility experts should be involved much earlier — in defining requirements, drafting RFP questions, and evaluating responses before the purchase decision.",
        2: "Accessibility experts should collaborate with the procurement team, not work in isolation. They provide accessibility-specific expertise to complement the procurement team's knowledge of organizational needs.",
        3: "A single pass/fail rating oversimplifies the evaluation. Accessibility experts should provide nuanced analysis of which criteria are met, which are not, and the implications for users — enabling informed decision-making."
      },
      topicLinks: ['procurement-accessibility', 'vpat'],
      difficulty: 'medium',
      tags: ['procurement', 'expertise']
    },
    {
      id: 1235,
      question: "What is an accessibility maturity model?",
      options: [
        "A tool that measures the WCAG conformance level of a website",
        "A framework for assessing an organization's capability to sustain accessibility across people, processes, and technology — not just code compliance",
        "A testing methodology for evaluating assistive technology compatibility",
        "A ranking system that compares different organizations' accessibility scores publicly"
      ],
      correct: 1,
      explanation: "An accessibility maturity model assesses organizational capability — not just technical compliance. It evaluates how well accessibility is embedded across the organization's people (training, expertise, roles), processes (design, development, testing, procurement), and technology (tools, standards, infrastructure). The W3C WAI Accessibility Maturity Model is the primary reference.",
      wrongExplanations: {
        0: "WCAG conformance evaluation measures a website's compliance with technical criteria. A maturity model assesses the organization's ability to sustain accessibility over time.",
        2: "Assistive technology testing methodologies assess product accessibility. Maturity models assess organizational capability and process integration.",
        3: "Maturity models are for internal organizational assessment, not public competitive ranking. They help organizations identify gaps and improve their processes."
      },
      topicLinks: ['maturity-models', 'procurement-accessibility'],
      difficulty: 'medium',
      tags: ['maturity-models', 'organizational']
    },
    {
      id: 1236,
      question: "When a procured ICT product has known accessibility defects, which mitigation strategy is MOST appropriate?",
      options: [
        "Immediately terminate the contract and find a new vendor",
        "Obtain a remediation roadmap from the vendor, include binding commitments in the contract, and provide alternative access for users in the interim",
        "Accept the defects since no product is perfectly accessible",
        "Block users with disabilities from accessing the product until defects are fixed"
      ],
      correct: 1,
      explanation: "The appropriate approach is a multi-pronged mitigation strategy: obtain a specific, time-bound remediation roadmap from the vendor, include binding accessibility commitments in the contract (with consequences for non-compliance), put alternative access in place for users who need it now, and monitor the vendor's progress. This addresses both immediate user needs and long-term improvement.",
      wrongExplanations: {
        0: "Immediate termination may not be practical (contract terms, switching costs, limited alternatives). A remediation roadmap with contractual commitments is a more pragmatic first step.",
        2: "Accepting defects without action means users with disabilities continue to be excluded. Known defects should be addressed through vendor commitments and interim mitigations.",
        3: "Blocking users with disabilities is discriminatory and likely illegal. The goal is to provide access, not restrict it. Alternative access plans bridge the gap while defects are fixed."
      },
      topicLinks: ['procurement-accessibility', 'vpat', 'remediation-strategies'],
      difficulty: 'hard',
      tags: ['procurement', 'mitigation', 'remediation']
    },
    {
      id: 1237,
      question: "How does integrating accessibility in procurement differ from integrating it in development?",
      options: [
        "Procurement focuses on evaluating third-party products' accessibility and influencing vendor behavior through contracts, while development focuses on building accessibility into your own code",
        "There is no difference — both involve running automated accessibility scans",
        "Procurement only requires checking VPATs; development requires full WCAG conformance testing",
        "Procurement accessibility is optional; development accessibility is legally required"
      ],
      correct: 0,
      explanation: "Procurement accessibility focuses on evaluating products and services built by others — reviewing vendor claims (ACRs/VPATs), testing third-party products, setting accessibility requirements in RFPs, and using contract terms to drive vendor compliance. Development accessibility focuses on building accessible products directly through design, coding, and testing. Both are essential for an organization's overall accessibility posture.",
      wrongExplanations: {
        1: "Automated scans are one small part of both processes. Procurement involves evaluating vendor claims, negotiating contracts, and managing remediation roadmaps — activities very different from code development.",
        2: "VPATs alone are insufficient for procurement evaluation — independent testing should verify vendor claims. And development also uses VPATs when the team produces conformance reports for their own products.",
        3: "Neither is optional in organizations subject to accessibility laws. Legal frameworks like the EU EAA and US Section 508 include procurement requirements alongside development requirements."
      },
      topicLinks: ['procurement-accessibility', 'accessibility-qa-lifecycle'],
      difficulty: 'medium',
      tags: ['procurement', 'lifecycle', 'organizational']
    },
    {
      id: 1238,
      question: "The European Accessibility Act (EAA) enters into force in June 2025. How does it affect procurement?",
      options: [
        "It only applies to government websites, not commercial products",
        "It expands accessibility requirements to private sector products and services, increasing the importance of accessibility in procurement for organizations selling to or operating in the EU",
        "It replaces EN 301 549 entirely with a new standard",
        "It eliminates the need for VPATs in European procurement"
      ],
      correct: 1,
      explanation: "The European Accessibility Act (EAA, Directive 2019/882) extends accessibility requirements beyond public sector websites (covered by the Web Accessibility Directive) to private sector products and services — including e-commerce, banking, transport, and telecommunications. This significantly broadens the scope of accessibility procurement requirements for organizations operating in the EU.",
      wrongExplanations: {
        0: "The EAA specifically extends beyond government to the private sector. The Web Accessibility Directive (2016/2102) already covers government websites; the EAA adds commercial products and services.",
        2: "The EAA does not replace EN 301 549 — EN 301 549 is being updated (under Mandate 587) to support the EAA's requirements alongside its existing role under the Web Accessibility Directive.",
        3: "VPATs (specifically the Rev EU edition for EN 301 549) remain relevant for procurement. The EAA does not change the VPAT template system — it changes which organizations and products need to comply."
      },
      topicLinks: ['procurement-accessibility', 'en-301-549'],
      difficulty: 'hard',
      tags: ['procurement', 'eaa', 'en-301-549', 'european']
    },
    {
      id: 1239,
      question: "What is the W3C WAI Accessibility Maturity Model's procurement dimension primarily used to assess?",
      options: [
        "Whether the organization's website meets WCAG Level AA",
        "How well the organization integrates accessibility into sourcing, negotiation, and selection of goods and services",
        "The number of accessibility experts employed by the organization",
        "Whether vendors have submitted VPATs for all their products"
      ],
      correct: 1,
      explanation: "The W3C WAI Accessibility Maturity Model's procurement dimension evaluates how the organization uses accessibility processes, criteria, contract language, and decision-making to procure and maintain accessible products and services throughout the procurement lifecycle. It assesses organizational practice, not just individual product compliance.",
      wrongExplanations: {
        0: "WCAG conformance is assessed through technical evaluation, not maturity modeling. The maturity model evaluates the organization's procurement processes, not website compliance.",
        2: "The number of experts is one aspect but not the primary assessment. The procurement dimension evaluates processes, criteria, and decision-making practices comprehensively.",
        3: "VPAT submission is one data point but not what the procurement dimension assesses. It evaluates the overall procurement process — from requirements definition through vendor selection and ongoing management."
      },
      topicLinks: ['maturity-models', 'procurement-accessibility'],
      difficulty: 'hard',
      tags: ['maturity-models', 'procurement', 'organizational']
    },
    {
      id: 1240,
      question: "An organization wants to ensure long-term accessibility improvement, not just one-time compliance. Which combination of approaches is MOST effective?",
      options: [
        "Run annual automated scans and fix any new issues found",
        "Hire an external consultant to perform a one-time comprehensive audit",
        "Integrate accessibility into the development lifecycle, use a maturity model to track organizational progress, include accessibility in procurement, and involve users with disabilities in testing",
        "Create an accessibility policy document and distribute it to all employees"
      ],
      correct: 2,
      explanation: "Sustained accessibility requires a comprehensive approach: integrating accessibility into every stage of the development lifecycle (shift-left), measuring organizational maturity over time, ensuring procured products meet accessibility standards, and involving real users with disabilities. Each element addresses a different dimension — code, process, supply chain, and user validation.",
      wrongExplanations: {
        0: "Annual automated scans miss the majority of accessibility issues and provide only a snapshot. They do not address process improvement, procurement, or organizational capability.",
        1: "A one-time audit provides a valuable baseline but does not ensure sustained improvement. Without process changes, the same issues recur in new development.",
        3: "Policy documents are a necessary foundation but insufficient alone. Without integration into actual processes (development, procurement, testing), policies remain aspirational."
      },
      topicLinks: ['accessibility-qa-lifecycle', 'maturity-models', 'procurement-accessibility'],
      difficulty: 'hard',
      tags: ['organizational', 'maturity-models', 'lifecycle', 'remediation']
    },
    // =============================================
    // PROCUREMENT EXPERT ROLE & STAKEHOLDER COMMUNICATION (1501-1518)
    // =============================================
    {
      id: 1501,
      question: "A software vendor hires an accessibility expert to help them compete for government contracts. Which set of activities fits the expert's role on the VENDOR side of procurement?",
      options: [
        "Auditing the vendor's existing systems, remedying defects, creating an ACR, and responding to tender questions about accessibility",
        "Drafting the government agency's RFP requirements and scoring competing bids",
        "Approving the vendor's products for sale under Section 508",
        "Writing the contract terms the purchasing agency will impose on the vendor"
      ],
      correct: 0,
      explanation: "Accessibility experts can assist vendors by auditing existing systems, remedying defects, creating Accessibility Conformance Reports, and responding to tender questions regarding accessibility. These activities prepare the vendor to demonstrate and improve the accessibility of its products credibly.",
      wrongExplanations: {
        1: "Drafting RFP requirements and evaluating bids is the expert's role when working for the PURCHASER, not the vendor. An expert working for a bidding vendor would have a conflict of interest scoring the competition.",
        2: "No individual expert 'approves' products under Section 508 — there is no certification authority. Section 508 conformance is documented (e.g., via ACRs) and verified by purchasing agencies.",
        3: "Suggesting contract wording on accessibility is a service experts provide to purchasers, who impose the terms. The vendor side responds to those requirements rather than writing them."
      },
      topicLinks: ['procurement-expert-role', 'vpat'],
      difficulty: 'easy',
      tags: ['procurement', 'expertise', 'vendors']
    },
    {
      id: 1502,
      question: "A university is preparing a Request for Proposal (RFP) for a new learning management system. What is the accessibility expert's MOST useful contribution at this stage?",
      options: [
        "Waiting until a product is selected, then auditing it for accessibility defects",
        "Supplying a list of suitable accessibility questions for inclusion in the tender documents and advising which procurement standard (e.g., EN 301 549 or Section 508) to reference",
        "Requiring that all bidders demonstrate WCAG 2.1 Level AAA conformance",
        "Recommending the university build the system in-house to avoid procurement entirely"
      ],
      correct: 1,
      explanation: "At the RFP stage, accessibility experts provide purchasers with suitable questions for inclusion in tender documents and RFPs, plus advice on ICT procurement standards such as EN 301 549 and Section 508. Asking the right questions before vendors respond is what lets the organization compare accessibility credibly during selection.",
      wrongExplanations: {
        0: "Auditing only after selection forfeits the organization's maximum leverage. Accessibility should be built into the tender documents so it influences which product is chosen.",
        2: "Requiring Level AAA is unrealistic — WCAG itself does not recommend requiring AAA for entire sites, and very few products fully support even all A/AA criteria. Procurement standards reference Level AA-based requirements.",
        3: "Building in-house does not avoid the accessibility question — it just moves it to development. Procurement with strong accessibility requirements is a legitimate, often more practical path."
      },
      topicLinks: ['procurement-expert-role', 'procurement-accessibility'],
      difficulty: 'easy',
      tags: ['procurement', 'rfp', 'expertise']
    },
    {
      id: 1503,
      question: "Two vendors respond to a tender. Vendor A submits an in-house ACR claiming 'Supports' on every single criterion. Vendor B submits an ACR prepared by an independent accessibility consultancy showing several 'Partially Supports' entries with detailed remarks. How should the evaluating expert read this?",
      options: [
        "Vendor A is the safer choice because its report shows full conformance",
        "Vendor B's report should be treated with more suspicion because it admits defects",
        "Vendor B's report is more credible — independently produced ACRs are preferable, and very few products genuinely support every criterion, so a perfect in-house report warrants verification through direct testing",
        "Both reports are equally reliable because the VPAT is a standardized template"
      ],
      correct: 2,
      explanation: "The BoK states it is preferable that vendors use an independent accessibility professional to create their ACR rather than producing it in-house, and that in practice very few products fully support every single criterion. A perfect self-reported scorecard is a red flag to verify with direct product testing, while honest 'Partially Supports' entries with remarks give useful information about where to focus the review.",
      wrongExplanations: {
        0: "A blanket 'Supports' claim from an in-house report is more likely to reflect optimistic self-assessment than genuine full conformance. Claims should be verified by testing, not taken at face value.",
        1: "Documented defects with remarks indicate a more rigorous evaluation, not a worse product. Transparency about partial support is expected in credible ACRs.",
        3: "The template standardizes the format, not the quality or honesty of the assessment. Who performed the evaluation and how thoroughly still matters enormously."
      },
      topicLinks: ['procurement-expert-role', 'vpat'],
      difficulty: 'medium',
      tags: ['procurement', 'vpat', 'acr', 'verification']
    },
    {
      id: 1504,
      question: "An accessibility expert is asked to 'suggest contract wording regarding accessibility' for a software purchase. What should that wording accomplish?",
      options: [
        "State that the vendor 'values accessibility and will make reasonable efforts where feasible'",
        "Make accessibility commitments binding — e.g., conformance obligations, defect remediation timelines, and consequences for non-compliance",
        "Transfer all legal liability for accessibility complaints to the end users",
        "Guarantee the product will never have any accessibility defects"
      ],
      correct: 1,
      explanation: "The point of contract wording on accessibility is to convert vendor claims into binding accessibility commitments — one of the BoK's named mitigation strategies. Effective wording covers the conformance standard required, timelines for remediating known and future defects, and what happens if the vendor fails to deliver.",
      wrongExplanations: {
        0: "Vague aspirational language ('reasonable efforts where feasible') is unenforceable. It gives the purchaser no leverage when defects surface after signing.",
        2: "Liability for an organization's inaccessible services cannot be shifted onto the very users who are excluded. Contract wording allocates responsibility between purchaser and vendor.",
        3: "No vendor can guarantee zero defects, and demanding it produces either refusal or a meaningless promise. Binding commitments paired with remediation processes are the realistic mechanism."
      },
      topicLinks: ['procurement-expert-role', 'procurement-accessibility'],
      difficulty: 'medium',
      tags: ['procurement', 'contracts', 'mitigation']
    },
    {
      id: 1505,
      question: "A procured product's ACR lists 'Partially Supports' for SC 2.1.1 Keyboard. What does this conformance level mean, and what should the purchasing team do with that information?",
      options: [
        "The majority of the product's functionality fails the criterion; the product must be rejected",
        "Some functionality of the product does not meet the criterion; the team should examine those areas during product review to judge the real impact on their users",
        "The criterion is not relevant to this product, so the entry can be ignored",
        "The product meets the criterion through equivalent facilitation, so no follow-up is needed"
      ],
      correct: 1,
      explanation: "'Partially Supports' means some functionality of the product does not meet the criterion. The BoK frames such entries as helpful information about what areas to pay attention to during product reviews — the team should investigate which functionality is affected and how severely it would impact their actual users and tasks.",
      wrongExplanations: {
        0: "'The majority of product functionality does not meet the criterion' is the definition of 'Does Not Support', a more severe level. And even genuine defects trigger investigation and mitigation, not automatic rejection.",
        2: "'Not Applicable' is the level for criteria that are not relevant to the product. 'Partially Supports' explicitly indicates a real, relevant gap.",
        3: "Equivalent facilitation falls under 'Supports' — functionality that meets the criterion via at least one method. 'Partially Supports' signals known gaps that need follow-up."
      },
      topicLinks: ['procurement-expert-role', 'vpat'],
      difficulty: 'medium',
      tags: ['procurement', 'vpat', 'acr', 'conformance-levels']
    },
    {
      id: 1506,
      question: "A procurement officer announces: 'To be safe, we will only consider products whose ACR shows Supports for every single criterion.' Why is this policy impractical?",
      options: [
        "Because ACRs do not actually list individual criteria, only an overall score",
        "Because in practice very few products fully support every WCAG or other criterion — the policy would eliminate nearly the whole market and reward dishonest self-reporting over transparent reporting",
        "Because WCAG prohibits using conformance reports in purchasing decisions",
        "Because 'Supports' is only available as a rating in the Section 508 edition of the VPAT"
      ],
      correct: 1,
      explanation: "The BoK is explicit: ideally every criterion would be supported, but in practice very few products fully support every single WCAG or other criterion. A 'perfect ACR only' policy would disqualify almost everything — and perversely favor vendors who overstate conformance in-house over vendors who report honestly. Better practice: compare products realistically, weigh partial support by user impact, and mitigate remaining defects contractually.",
      wrongExplanations: {
        0: "ACRs are precisely a criterion-by-criterion reporting table (criteria, conformance level, remarks). There is no single overall score.",
        2: "Nothing in WCAG prohibits this — conformance reports exist largely to inform purchasing decisions. The problem is the unrealistic threshold, not the use of ACRs.",
        3: "All VPAT editions (508, EU, WCAG, INT) use the same conformance levels, including 'Supports'."
      },
      topicLinks: ['procurement-expert-role', 'vpat'],
      difficulty: 'hard',
      tags: ['procurement', 'vpat', 'acr', 'evaluation']
    },
    {
      id: 1507,
      question: "In an ACR, a product's audio player cannot be operated with standard keyboard commands, but the vendor provides a fully documented, equally capable keyboard-accessible alternative interface for the same functions. Which conformance level can the vendor legitimately report for the keyboard criterion?",
      options: [
        "Does Not Support, because the primary interface fails",
        "Partially Supports, because only one of the two interfaces meets the criterion",
        "Supports, because the functionality has at least one method that meets the criterion — equivalent facilitation counts",
        "Not Applicable, because keyboard access is optional for media players"
      ],
      correct: 2,
      explanation: "The VPAT definition of 'Supports' is that the product's functionality has at least one method that meets the criterion without known defects OR with equivalent facilitation. An alternative method providing equivalent access to the same functionality allows a 'Supports' rating, though the remarks column should explain how.",
      wrongExplanations: {
        0: "'Does Not Support' means the majority of product functionality does not meet the criterion. Here the functionality IS available through an accessible method.",
        1: "'Partially Supports' would apply if some functionality had no accessible method at all. The conformance levels evaluate whether functionality is achievable accessibly, not whether every interface variant passes.",
        3: "'Not Applicable' means the criterion is not relevant to the product. Keyboard operability is clearly relevant to an interactive media player."
      },
      topicLinks: ['procurement-expert-role', 'vpat'],
      difficulty: 'hard',
      tags: ['procurement', 'vpat', 'acr', 'equivalent-facilitation']
    },
    {
      id: 1508,
      question: "An organization's newly procured HR system has a defect that prevents screen reader users from submitting expense reports. The vendor's fix is six months away. What does the BoK recommend the organization put in place NOW?",
      options: [
        "Nothing — the remediation roadmap already covers the issue",
        "An alternative access plan, so affected users have another way to complete the task while the defect is being fixed",
        "A waiver exempting screen reader users from submitting expense reports",
        "An immediate switch to a different HR system"
      ],
      correct: 1,
      explanation: "Among the BoK's mitigation strategies for known defects in procured products is 'putting in place an alternative access plan for users.' A roadmap addresses the future; the alternative access plan (for example, an accessible form, email submission, or staffed assistance) addresses the exclusion happening right now.",
      wrongExplanations: {
        0: "A roadmap commits the vendor to a future fix but does nothing for users blocked today. Mitigation strategies are meant to be combined — roadmap plus interim access.",
        2: "Exempting users from a work task doesn't give them access — it sidelines them. Employees need an equivalent way to do their job, not permission to skip it.",
        3: "Switching systems mid-contract is rarely feasible (cost, contracts, migration) and a replacement system would have its own defects. Mitigation manages the gap pragmatically."
      },
      topicLinks: ['procurement-expert-role', 'procurement-accessibility'],
      difficulty: 'medium',
      tags: ['procurement', 'mitigation', 'alternative-access']
    },
    {
      id: 1509,
      question: "A vendor committed to a remediation roadmap a year ago but has repeatedly missed its deadlines. The annual contract renewal is approaching. What does the BoK suggest?",
      options: [
        "Renew as usual — the roadmap legally obligates the vendor regardless of renewals",
        "Monitor vendor performance on defect management and make accessibility performance a factor in the renewal negotiation, where the organization regains leverage",
        "Stop tracking the defects since the vendor owns the roadmap",
        "Publicly report the vendor to a standards body that enforces VPAT accuracy"
      ],
      correct: 1,
      explanation: "Two of the BoK's mitigation strategies apply directly: monitoring vendor performance in relation to defect management, and considering accessibility performance during contract negotiations and product renewals. Renewal is one of the few moments after purchase when the purchaser's leverage returns — missed roadmap deadlines should carry consequences there.",
      wrongExplanations: {
        0: "A roadmap is only as strong as the contract behind it, and automatic renewal squanders the organization's main recurring leverage point. Performance should inform renewal terms.",
        2: "The vendor executes the roadmap, but the purchaser must monitor performance — unmonitored commitments are routinely deprioritized.",
        3: "No standards body enforces VPAT accuracy — VPATs are voluntary self-reports. Leverage comes from the contractual relationship, not external enforcement."
      },
      topicLinks: ['procurement-expert-role', 'procurement-accessibility'],
      difficulty: 'medium',
      tags: ['procurement', 'vendor-management', 'contracts']
    },
    {
      id: 1510,
      question: "After product testing reveals several accessibility defects in software the organization still intends to buy, what is the FIRST artifact the accessibility expert should obtain from the vendor?",
      options: [
        "A press release announcing the vendor's commitment to accessibility",
        "A remediation roadmap describing how and when the known accessibility issues will be addressed",
        "A refund schedule for users with disabilities",
        "A new VPAT omitting the criteria the product fails"
      ],
      correct: 1,
      explanation: "The first of the BoK's defect-mitigation strategies is obtaining a roadmap for addressing known accessibility issues. The roadmap turns vague intentions into specific, trackable commitments — which can then be made binding in the contract and monitored over time.",
      wrongExplanations: {
        0: "Public statements of commitment are marketing, not mitigation. They create no specific, trackable obligation to fix the identified defects.",
        2: "Refunds compensate; they don't provide access. The goal of mitigation is to get the defects fixed and provide alternative access in the meantime.",
        3: "Omitting failed criteria from a VPAT is misrepresentation, not mitigation. An honest ACR documents the gaps that the roadmap then addresses."
      },
      topicLinks: ['procurement-expert-role', 'procurement-accessibility'],
      difficulty: 'easy',
      tags: ['procurement', 'mitigation', 'roadmap']
    },
    {
      id: 1511,
      question: "What is Policy Driven Adoption for Accessibility (PDAA)?",
      options: [
        "A W3C technical specification for accessible policy documents",
        "An initiative by NASCIO (the National Association of State Chief Information Officers) that helps procurement organizations choose vendors who can meet accessibility requirements",
        "A US federal law requiring states to adopt Section 508",
        "An automated testing tool that scans vendor products for WCAG failures"
      ],
      correct: 1,
      explanation: "PDAA — Policy Driven Adoption for Accessibility — is a NASCIO initiative and one of the two publicly available, free maturity models that specifically address procurement. It helps procurement organizations select vendors capable of meeting accessibility requirements by examining the maturity of vendors' accessibility policies and practices.",
      wrongExplanations: {
        0: "PDAA is not a W3C specification and is not about document formats. The W3C's contribution in this space is the Accessibility Maturity Model, which includes a procurement dimension.",
        2: "PDAA is a voluntary initiative from NASCIO, an association of state CIOs — not legislation. Section 508 itself applies to US federal agencies.",
        3: "PDAA is a policy/maturity framework for evaluating vendors, not a scanning tool. It assesses organizational practices rather than running technical tests."
      },
      topicLinks: ['procurement-expert-role', 'maturity-models'],
      difficulty: 'medium',
      tags: ['procurement', 'pdaa', 'maturity-models']
    },
    {
      id: 1512,
      question: "An organization wants to (a) assess how well its OWN purchasing processes embed accessibility, and (b) evaluate whether prospective VENDORS can meet accessibility requirements. Which maturity tools map to which goal?",
      options: [
        "(a) PDAA for its own processes; (b) the W3C maturity model for vendors",
        "(a) The W3C Accessibility Maturity Model's procurement dimension for its own sourcing, negotiation, and selection practices; (b) PDAA for evaluating vendors",
        "Both goals require the VPAT, since it is the only procurement assessment tool",
        "Neither goal can use a maturity model; maturity models only measure website conformance"
      ],
      correct: 1,
      explanation: "The W3C maturity model's procurement dimension assesses the organization's own procurement lifecycle — its use of accessibility processes, criteria, contract language, and decision-making in sourcing, negotiating, and selecting goods and services. PDAA, the NASCIO initiative, is oriented toward helping procurement organizations choose vendors who can meet accessibility requirements.",
      wrongExplanations: {
        0: "This reverses the two tools. PDAA is the vendor-facing instrument; the W3C procurement dimension is the self-assessment of the purchasing organization's own practices.",
        2: "A VPAT/ACR documents one product's conformance — it assesses neither organizational process maturity nor a vendor's overall capability and policies.",
        3: "Maturity models measure organizational capability, which is exactly what both goals require. Website conformance is measured by technical evaluation, not maturity models."
      },
      topicLinks: ['procurement-expert-role', 'maturity-models'],
      difficulty: 'hard',
      tags: ['procurement', 'pdaa', 'maturity-models', 'w3c']
    },
    {
      id: 1513,
      question: "An accessibility consultant delivers a flawless 80-page audit report, but six months later almost nothing has been fixed. Developers say they never understood what to change, and managers say they never knew why it mattered. Which BoK principle was violated?",
      options: [
        "The audit should have used automated tools to find more issues",
        "The right stakeholders must be made aware, educated, and included in implementation recommendations",
        "The report should have been longer and more technically detailed",
        "Remediation should always be outsourced to the auditing consultant"
      ],
      correct: 1,
      explanation: "The BoK stresses being able to communicate the purpose, approach, and strategy of remediation, and the importance of making the right stakeholders aware, educated, and included in implementation recommendations. A report that informs no one and includes no one produces no remediation, regardless of its technical quality.",
      wrongExplanations: {
        0: "Finding more issues would make the unread report longer. The failure here is communication and stakeholder engagement, not detection coverage.",
        2: "More length and density would worsen the problem. Different audiences need appropriately framed information — precise fixes for developers, impact and risk for managers.",
        3: "Outsourcing fixes can be a tactic, but the organization still needs informed, included stakeholders to sustain accessibility. The BoK principle is about engagement, not who writes the code."
      },
      topicLinks: ['stakeholder-communication', 'remediation-strategies'],
      difficulty: 'easy',
      tags: ['communication', 'stakeholders', 'remediation']
    },
    {
      id: 1514,
      question: "An accessibility specialist must present the same audit findings to the development team and then to the executive steering committee. How should the framing differ?",
      options: [
        "Use the identical slide deck for both, since the findings are the same",
        "Developers: precisely where the problems are, what they are, and how to fix them. Executives: user impact, legal risk, and cost-benefit of remediation",
        "Developers: legal risk statistics. Executives: code snippets showing correct ARIA usage",
        "Tell executives only the good news so funding is not jeopardized"
      ],
      correct: 1,
      explanation: "The BoK says that when communicating issues and recommendations, it is important to inform the developer precisely about where the problems are, what the problems are, and how to fix them. Decision-makers, by contrast, act on user impact, legal risk, and cost-benefit — the prioritization language of Domain 3A. Same findings, audience-appropriate framing.",
      wrongExplanations: {
        0: "Identical framing fails both audiences: executives drown in technical detail they can't act on, and developers get strategy slides without the precise locations and fixes they need.",
        2: "This is exactly backwards. Code-level guidance belongs with the people writing code; risk and investment framing belongs with the people allocating budget.",
        3: "Hiding problems from decision-makers prevents informed prioritization and undermines trust — and unaddressed legal risk eventually surfaces on its own terms."
      },
      topicLinks: ['stakeholder-communication', 'remediation-prioritization'],
      difficulty: 'medium',
      tags: ['communication', 'stakeholders', 'reporting']
    },
    {
      id: 1515,
      question: "An audit of a small nonprofit's donation site finds the custom date picker is unusable with screen readers. The IDEAL fix is rebuilding it on an accessible component library, but the nonprofit has one part-time developer and a fundraising deadline in three weeks. What distinguishes a defensible 'good enough' recommendation here?",
      options: [
        "It achieves the same end result as the ideal solution while respecting the project's environment, target groups, and resources — e.g., replacing the widget with a native input or plain text field users can complete now",
        "It postpones all changes until the organization can afford the ideal rebuild",
        "It is whatever the developer can finish fastest, regardless of whether users can complete the task",
        "It documents the issue in the accessibility statement so users know the date picker is broken"
      ],
      correct: 0,
      explanation: "The BoK asks specialists to characterize and differentiate the ideal/best solution from the 'good enough' solution, respecting the particular project, its environment, intended target groups, and resources. A simpler control that lets every user complete the donation before the deadline is good enough — it removes the barrier within real constraints, while the ideal rebuild can be planned for later.",
      wrongExplanations: {
        1: "Postponing everything leaves donors with disabilities blocked through the organization's most critical period. Feasible interim fixes exist and should be applied.",
        2: "'Good enough' is judged against users completing the task, not against developer convenience. A fast change that still blocks screen reader users solves nothing.",
        3: "Documenting a barrier is transparency, not remediation. An accessibility statement does not help a donor who still cannot enter a date."
      },
      topicLinks: ['stakeholder-communication', 'remediation-strategies'],
      difficulty: 'medium',
      tags: ['good-enough', 'remediation', 'feasibility']
    },
    {
      id: 1516,
      question: "A site's main navigation is fully keyboard-operable but forces users through dozens of tab stops before reaching the content, and every image has technically present but extremely verbose alt text. The site passes WCAG conformance testing. What should a good auditor do?",
      options: [
        "Nothing — if it conforms to WCAG, there is no issue to report",
        "Report both as WCAG conformance failures, since they harm users",
        "Recognize that minimal conformance can still be difficult to use, and recommend better practices (e.g., reducing tab stops, concise alt text) clearly labeled as recommendations rather than failures",
        "Withhold the conformance pass until the usability problems are fixed"
      ],
      correct: 2,
      explanation: "These are the BoK's own examples: navigation that is keyboard-operable but has dozens of tab stops, and alt text that is too verbose, technically meet WCAG while producing a poor experience. Beyond normative failures, a good auditor recognizes deficiencies that are not strictly failures and recommends a better practice for a more usable result — while keeping the conformance/best-practice distinction explicit.",
      wrongExplanations: {
        0: "Conformance is the floor, not the ceiling. The BoK explicitly warns that a minimally conforming site can still be difficult to use, and auditors should surface that.",
        1: "Flagging conforming content as failures destroys the auditor's credibility and misstates the standard. A failure should be flagged only when content clearly fails the normative criterion.",
        3: "An auditor cannot 'withhold' conformance that the content factually meets. The honest report is: conforms, with clearly labeled usability recommendations."
      },
      topicLinks: ['stakeholder-communication', 'failures-vs-best-practices'],
      difficulty: 'hard',
      tags: ['usability', 'conformance', 'best-practices', 'auditing']
    },
    {
      id: 1517,
      question: "A legacy intranet has hundreds of accessibility defects rooted in its templates, but employees with disabilities are blocked TODAY from requesting leave and viewing payslips. Which remediation strategy does the BoK describe as the common practical pattern?",
      options: [
        "A hybrid approach: immediately remediate the critical blocking issues while developing a longer-term plan for a comprehensive rewrite",
        "Freeze all fixes until the full redesign budget is approved, to avoid duplicated work",
        "Fix every defect in severity order and cancel any redesign plans",
        "Rewrite the entire intranet first, since template-level defects make spot fixes pointless"
      ],
      correct: 0,
      explanation: "The BoK states that in practice a hybrid approach is often used: immediate remediation addresses critical issues while a longer-term plan is developed for a comprehensive rewrite to ensure sustainable accessibility. Users get unblocked now; the systemic template problems get solved properly later.",
      wrongExplanations: {
        1: "Freezing fixes leaves employees unable to perform essential job tasks for the entire planning-and-budget cycle. Critical blockers warrant immediate remediation even if some work is later superseded.",
        2: "Fixing hundreds of defects one by one in old, template-driven code may cost more than the rewrite while leaving the architecture fragile. Widespread template-level defects are precisely when a rewrite is warranted.",
        3: "Spot fixes to critical blockers are not pointless — they restore access to essential tasks during the months a rewrite takes. Sequencing the rewrite first abandons users in the meantime."
      },
      topicLinks: ['stakeholder-communication', 'remediation-strategies'],
      difficulty: 'medium',
      tags: ['hybrid-approach', 'remediation', 'redesign']
    },
    {
      id: 1518,
      question: "A developer disputes an audit finding, arguing their custom disclosure widget is 'fine because WCAG doesn't say exactly how to code it.' The auditor is confident the widget fails SC 4.1.2 but the case is borderline. Which resources does the BoK say can settle whether this is a normative failure or a best-practice recommendation?",
      options: [
        "The WCAG supporting documents — the Understanding texts, the Techniques, and the ARIA Authoring Practices Guide",
        "The auditor's preferred automated scanner, whose output is authoritative",
        "The W3C Accessibility Maturity Model's procurement dimension",
        "Annex B of EN 301 549, which lists required coding patterns for widgets"
      ],
      correct: 0,
      explanation: "The BoK notes that WCAG's normative text defines the requirement without prescribing a particular coding solution, and that supporting documents — the Understanding texts, the Techniques, and the ARIA Authoring Practices Guidelines — can be consulted to determine whether an issue counts as a normative failure or should be considered 'not best practice.' A failure should be flagged only when the deficiency clearly maps to documented WCAG Failures or clearly fails the criterion.",
      wrongExplanations: {
        1: "Automated tool output is not authoritative — tools implement heuristics and miss context, especially for custom widgets. Borderline conformance calls require human judgment grounded in the normative text and its supporting documents.",
        2: "The maturity model's procurement dimension assesses organizational purchasing processes. It says nothing about whether a specific widget fails a Success Criterion.",
        3: "EN 301 549 Annex B maps requirements to user accessibility needs (useful for impact analysis); it does not prescribe coding patterns, and it isn't the reference for WCAG failure-vs-best-practice calls."
      },
      topicLinks: ['stakeholder-communication', 'failures-vs-best-practices', 'normative-vs-non-normative'],
      difficulty: 'hard',
      tags: ['wcag', 'understanding-docs', 'techniques', 'auditing']
    }
  ]
};
