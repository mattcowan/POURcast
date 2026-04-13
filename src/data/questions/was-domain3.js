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
    }
  ]
};
