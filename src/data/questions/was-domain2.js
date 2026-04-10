export const wasDomain2 = {
  id: 'was-domain2',
  courseId: 'was',
  title: 'Identifying Accessibility Issues',
  iconName: 'code',
  color: 'bg-teal-600',
  description: 'Accessibility tree, accessible names, WCAG-EM, ACT rules, testing strategies, and QA.',
  questions: [
    // =============================================
    // SEMANTIC HTML (1101-1115)
    // =============================================
    {
      id: 1101,
      question: "Which HTML5 element serves as the ARIA landmark role 'banner' by default when it is a direct child of <body>?",
      options: [
        "<header>",
        "<nav>",
        "<main>",
        "<section>"
      ],
      correct: 0,
      explanation: "A <header> element that is a direct child of <body> (i.e., not nested inside <article>, <section>, etc.) implicitly maps to the ARIA 'banner' landmark role, which represents site-wide header content.",
      wrongExplanations: {
        1: "<nav> maps to the ARIA 'navigation' landmark role, not 'banner'.",
        2: "<main> maps to the ARIA 'main' landmark role, identifying the primary content of the page.",
        3: "<section> maps to the ARIA 'region' landmark role when it has an accessible name, not 'banner'."
      },
      topicLinks: ['wcag-robust', 'screen-readers'],
      difficulty: 'easy',
      tags: ['semantic-html', 'landmarks']
    },
    {
      id: 1102,
      question: "What is the implicit ARIA role of the <nav> element?",
      options: [
        "menu",
        "navigation",
        "toolbar",
        "directory"
      ],
      correct: 1,
      explanation: "The <nav> element has an implicit ARIA role of 'navigation'. It represents a section of a page that links to other pages or parts within the page — a section with navigation links.",
      wrongExplanations: {
        0: "The 'menu' role is for a list of choices or actions, such as a context menu. <nav> is for navigation links, not action menus.",
        2: "The 'toolbar' role is for a collection of commonly used function buttons or controls. <nav> is specifically for navigation.",
        3: "'directory' is a deprecated ARIA role that was used for a list of references. It is not the implicit role of <nav>."
      },
      topicLinks: ['wcag-robust', 'screen-readers'],
      difficulty: 'easy',
      tags: ['semantic-html', 'landmarks']
    },
    {
      id: 1103,
      question: "A page has two <nav> elements — one for site navigation and one for breadcrumbs. What is the BEST way to differentiate them for screen reader users?",
      options: [
        "Add role='navigation' to both elements",
        "Give each <nav> a unique aria-label, such as 'Main navigation' and 'Breadcrumb'",
        "Wrap each <nav> in a <div> with a different class name",
        "Use <ul> for site navigation and <ol> for breadcrumbs inside each <nav>"
      ],
      correct: 1,
      explanation: "When there are multiple landmarks of the same type on a page, each should have a unique accessible name (via aria-label or aria-labelledby) so screen reader users can distinguish them when navigating by landmarks.",
      wrongExplanations: {
        0: "Adding role='navigation' is redundant since <nav> already has that implicit role, and it still does not help users differentiate the two navigation regions.",
        2: "Class names are for CSS styling and are not exposed to assistive technology, so they do not help screen reader users tell the two navigation regions apart.",
        3: "While using <ol> for breadcrumbs is a good practice for conveying order, it does not help differentiate the two <nav> landmarks at the landmark navigation level."
      },
      topicLinks: ['wcag-robust', 'screen-readers'],
      difficulty: 'medium',
      tags: ['semantic-html', 'landmarks', 'aria']
    },
    {
      id: 1104,
      question: "What accessibility problem does skipping heading levels (e.g., going from <h2> directly to <h4>) create?",
      options: [
        "It causes a WCAG Level A conformance failure",
        "It can confuse screen reader users who rely on heading hierarchy to understand page structure",
        "It prevents headings from being rendered in the browser",
        "It causes automated testing tools to crash"
      ],
      correct: 1,
      explanation: "Skipping heading levels disrupts the logical document outline that screen reader users rely on to understand the hierarchical structure of the page. Users navigating by headings may think they missed a section or that the content is disorganized.",
      wrongExplanations: {
        0: "Skipping heading levels is a best-practice issue (WCAG 1.3.1 recommends logical structure) but is not always classified as a strict Level A failure by itself — the real issue is the confusion it causes for users.",
        2: "Browsers render all heading levels regardless of whether levels are skipped. The issue is for assistive technology users, not visual rendering.",
        3: "Automated testing tools may flag skipped headings as a warning, but they do not crash. The real concern is the user experience for people relying on headings for navigation."
      },
      topicLinks: ['wcag-perceivable', 'screen-readers'],
      difficulty: 'easy',
      tags: ['semantic-html', 'headings']
    },
    {
      id: 1105,
      question: "Which element should be used to associate a visible text label with a form input?",
      options: [
        "<span> positioned next to the input",
        "<div> with a class of 'label'",
        "<label> with a 'for' attribute matching the input's 'id'",
        "<p> placed immediately before the input"
      ],
      correct: 2,
      explanation: "The <label> element with a 'for' attribute that matches the input's 'id' creates a programmatic association between the label text and the form control. This allows screen readers to announce the label when the input receives focus and also expands the click target.",
      wrongExplanations: {
        0: "A <span> has no semantic meaning and does not create a programmatic association with a form input. Screen readers would not connect the text to the input.",
        1: "A <div> with a class name provides no semantic or programmatic relationship. CSS classes are not exposed to assistive technology.",
        3: "A <p> element is for paragraphs and does not create a programmatic label association. Proximity alone is not enough for assistive technology."
      },
      topicLinks: ['wcag-perceivable', 'screen-readers'],
      difficulty: 'easy',
      tags: ['semantic-html', 'forms']
    },
    {
      id: 1106,
      question: "What is the purpose of the <fieldset> and <legend> elements in a form?",
      options: [
        "To add a decorative border around form fields",
        "To group related form controls and provide a group label that is announced by screen readers",
        "To make the form submit faster by batching fields together",
        "To prevent users from tabbing out of a group of fields"
      ],
      correct: 1,
      explanation: "<fieldset> groups related form controls (such as a set of radio buttons), and <legend> provides a label for the group. Screen readers announce the legend text when users enter the fieldset, giving context for the grouped controls.",
      wrongExplanations: {
        0: "While browsers do render a visual border by default, the primary purpose of <fieldset>/<legend> is semantic grouping and accessibility, not decoration.",
        2: "<fieldset> and <legend> have no effect on form submission performance. Their purpose is to convey the logical grouping of related controls.",
        3: "<fieldset> and <legend> do not create a keyboard trap. Users can freely tab in and out of a fieldset."
      },
      topicLinks: ['wcag-perceivable', 'screen-readers'],
      difficulty: 'easy',
      tags: ['semantic-html', 'forms']
    },
    {
      id: 1107,
      question: "According to the first rule of ARIA, what should a developer do BEFORE using ARIA?",
      options: [
        "Check whether browser support exists for the ARIA attribute",
        "Ensure the element already has role='presentation'",
        "Use a native HTML element or attribute that already has the needed semantics",
        "Add aria-hidden='true' to remove the old semantics first"
      ],
      correct: 2,
      explanation: "The first rule of ARIA usage states: 'If you can use a native HTML element or attribute with the semantics and behavior you require already built in, instead of re-purposing an element and adding an ARIA role, state or property to make it accessible, then do so.' Native HTML is more robust and better supported.",
      wrongExplanations: {
        0: "While browser support matters, the first rule of ARIA is specifically about preferring native HTML over ARIA whenever possible.",
        1: "Adding role='presentation' removes an element's semantics. The first rule is about using native elements that already have the correct semantics, not stripping them away.",
        3: "Adding aria-hidden='true' removes an element from the accessibility tree entirely. This is unrelated to the first rule, which says to prefer native HTML elements."
      },
      topicLinks: ['wcag-robust'],
      difficulty: 'easy',
      tags: ['semantic-html', 'aria']
    },
    {
      id: 1108,
      question: "When should a developer use a <button> element instead of an <a> (anchor) element?",
      options: [
        "When the text should be bold",
        "When the element triggers an action on the current page (e.g., opening a dialog)",
        "When the element navigates to another URL",
        "When the element needs to be styled with CSS"
      ],
      correct: 1,
      explanation: "A <button> should be used for in-page actions (submitting forms, toggling UI, opening dialogs). An <a> should be used for navigation to a new URL or location. This distinction matters because screen readers announce them differently and keyboard behavior differs (Enter for links, Enter or Space for buttons).",
      wrongExplanations: {
        0: "Both <button> and <a> elements can be styled with CSS to appear bold. Visual appearance is not the reason to choose one over the other.",
        2: "Navigating to another URL is the purpose of an <a> (anchor) element, not a <button>.",
        3: "Both elements can be styled with CSS. The choice between them should be based on their semantic purpose: action vs. navigation."
      },
      topicLinks: ['wcag-robust', 'wcag-operable'],
      difficulty: 'easy',
      tags: ['semantic-html', 'buttons-links']
    },
    {
      id: 1109,
      question: "A developer creates a clickable <div> with an onclick handler instead of using a <button>. Which accessibility issues does this introduce?",
      options: [
        "Only a visual styling issue — the div will not look like a button",
        "The div will not be keyboard focusable, will lack a button role, and will not respond to Enter/Space keys by default",
        "Screen readers will announce it as a button automatically because of the onclick attribute",
        "The only issue is that the div will not submit forms"
      ],
      correct: 1,
      explanation: "A <div> is not focusable by default (needs tabindex), has no implicit role (screen readers announce it as generic text), and does not respond to keyboard activation (Enter/Space). A native <button> provides all of these for free.",
      wrongExplanations: {
        0: "The issues go far beyond styling. A <div> lacks focus, keyboard interaction, and semantic role — all critical for accessibility.",
        2: "Screen readers do not recognize onclick as a signal that an element is interactive. Without a role, the div is announced as generic text, not a button.",
        3: "Form submission is just one concern. The bigger issues are keyboard accessibility, focus management, and the lack of semantic role information for assistive technology."
      },
      topicLinks: ['wcag-robust', 'wcag-operable'],
      difficulty: 'medium',
      tags: ['semantic-html', 'anti-patterns']
    },
    {
      id: 1110,
      question: "What is the correct way to make a data table accessible when it has both row and column headers?",
      options: [
        "Use <td> for all cells and bold the header cells with CSS",
        "Use <th> elements with scope='col' for column headers and scope='row' for row headers",
        "Add aria-label to every data cell describing its row and column",
        "Use <caption> on every row to describe the row content"
      ],
      correct: 1,
      explanation: "Using <th> with the scope attribute tells assistive technology which cells are headers and whether they apply to a column or a row. This allows screen readers to announce the relevant headers when navigating data cells.",
      wrongExplanations: {
        0: "Using CSS to bold cells provides only a visual distinction. Screen readers cannot determine which cells are headers without proper <th> markup.",
        2: "Adding aria-label to every cell is extremely verbose and difficult to maintain. Proper <th> and scope attributes allow screen readers to derive this information automatically.",
        3: "<caption> provides a title for the entire table, not for individual rows. It should be used once per table, and row identification is handled by <th scope='row'>."
      },
      topicLinks: ['wcag-perceivable', 'screen-readers'],
      difficulty: 'medium',
      tags: ['semantic-html', 'tables']
    },
    {
      id: 1111,
      question: "What is the purpose of the <figure> and <figcaption> elements?",
      options: [
        "To create a photo gallery with automatic thumbnails",
        "To associate self-contained content (such as an image, diagram, or code snippet) with a caption",
        "To replace the alt attribute on images",
        "To group images for lazy loading"
      ],
      correct: 1,
      explanation: "<figure> wraps self-contained content that is referenced from the main content, and <figcaption> provides a visible caption. Screen readers can associate the caption with the figure content, providing additional context.",
      wrongExplanations: {
        0: "<figure> and <figcaption> provide semantic structure and a caption association. They do not create galleries or generate thumbnails automatically.",
        2: "<figcaption> provides a visible caption but does NOT replace the alt attribute. Images inside a <figure> still need appropriate alt text.",
        3: "These elements have no effect on loading behavior. Lazy loading is controlled by the 'loading' attribute or JavaScript, not by <figure>."
      },
      topicLinks: ['wcag-perceivable'],
      difficulty: 'easy',
      tags: ['semantic-html', 'images']
    },
    {
      id: 1112,
      question: "Which HTML element has an implicit ARIA role of 'contentinfo' when it is a direct child of <body>?",
      options: [
        "<footer>",
        "<aside>",
        "<section>",
        "<address>"
      ],
      correct: 0,
      explanation: "A <footer> element that is a direct child of <body> (not nested inside <article>, <section>, etc.) implicitly maps to the ARIA 'contentinfo' landmark role, representing footer information like copyright and legal notices.",
      wrongExplanations: {
        1: "<aside> maps to the ARIA 'complementary' landmark role, representing content tangentially related to the main content.",
        2: "<section> maps to the ARIA 'region' role when it has an accessible name. It does not map to 'contentinfo'.",
        3: "<address> provides contact information and does not have the 'contentinfo' role."
      },
      topicLinks: ['wcag-robust', 'screen-readers'],
      difficulty: 'easy',
      tags: ['semantic-html', 'landmarks']
    },
    {
      id: 1113,
      question: "A page uses only <div> and <span> elements with CSS classes for visual layout. What is the primary accessibility impact?",
      options: [
        "The page will load more slowly for screen reader users",
        "Screen readers will not be able to identify the page structure — headings, landmarks, lists, and other semantic elements will be absent from the accessibility tree",
        "The page will not render correctly in any browser",
        "Users will be unable to change the font size"
      ],
      correct: 1,
      explanation: "<div> and <span> are semantically neutral elements. Without semantic HTML (headings, landmarks, lists, etc.), the accessibility tree has no meaningful structure, and screen reader users cannot navigate by headings, landmarks, or other structural elements.",
      wrongExplanations: {
        0: "Page load speed is not affected by the choice of HTML elements. The issue is the lack of semantic information for assistive technology.",
        2: "Browsers will render <div> and <span> elements with their applied CSS just fine visually. The problem is the missing semantic layer that assistive technologies rely on.",
        3: "Font size can still be changed regardless of which HTML elements are used. The issue is the loss of semantic structure."
      },
      topicLinks: ['wcag-perceivable', 'wcag-robust', 'screen-readers'],
      difficulty: 'medium',
      tags: ['semantic-html', 'anti-patterns']
    },
    {
      id: 1114,
      question: "Which HTML element should be used for a description list, such as a glossary of terms and their definitions?",
      options: [
        "<ul> with <li> for each term-definition pair",
        "<table> with terms in one column and definitions in another",
        "<dl> with <dt> for terms and <dd> for definitions",
        "<ol> with <li> for each term followed by the definition"
      ],
      correct: 2,
      explanation: "The <dl> (description list) element with <dt> (description term) and <dd> (description details) is the semantically correct choice for name-value pairs such as glossaries, metadata, and FAQs. Screen readers can announce the relationship between terms and their definitions.",
      wrongExplanations: {
        0: "An unordered list does not convey the term-definition relationship. Each <li> would be a single flat item with no distinction between the term and its definition.",
        1: "While a table could visually organize terms and definitions, it imposes a rigid row/column structure that is semantically less appropriate than a description list for term-definition pairs.",
        3: "An ordered list implies a meaningful sequence and does not convey the term-definition relationship."
      },
      topicLinks: ['wcag-perceivable', 'screen-readers'],
      difficulty: 'easy',
      tags: ['semantic-html', 'lists']
    },
    {
      id: 1115,
      question: "How many <main> landmark elements should a page have?",
      options: [
        "As many as needed for each content section",
        "Exactly one visible <main> element per page",
        "Two — one for desktop and one for mobile layout",
        "None — <main> is not a valid HTML5 element"
      ],
      correct: 1,
      explanation: "A page should have exactly one visible <main> element. It identifies the primary content of the page and allows screen reader users to jump directly to it. Having multiple visible <main> elements would be confusing and violates the intended semantics.",
      wrongExplanations: {
        0: "Multiple visible <main> elements would make it ambiguous which section is the primary content. Only one should be visible at a time.",
        2: "Responsive design should be handled with CSS, not by duplicating the <main> element. If both are present, one should be hidden.",
        3: "<main> is a valid HTML5 element with wide browser and assistive technology support."
      },
      topicLinks: ['wcag-perceivable', 'screen-readers'],
      difficulty: 'easy',
      tags: ['semantic-html', 'landmarks']
    },

    // =============================================
    // ARIA (1116-1140)
    // =============================================
    {
      id: 1116,
      question: "What is the difference between aria-label and aria-labelledby?",
      options: [
        "aria-label provides an invisible text label directly, while aria-labelledby references the ID of another element whose text content serves as the label",
        "aria-label is for form inputs only, while aria-labelledby is for landmarks only",
        "aria-label overrides all other labels, while aria-labelledby is always ignored",
        "There is no difference — they are interchangeable"
      ],
      correct: 0,
      explanation: "aria-label provides a string directly as the accessible name, while aria-labelledby points to one or more element IDs whose text content becomes the accessible name. aria-labelledby has higher precedence in the accessible name calculation and can reference visible text on the page.",
      wrongExplanations: {
        1: "Both attributes can be used on a wide variety of elements, not just specific types. They are not restricted to form inputs or landmarks.",
        2: "aria-labelledby actually has the HIGHEST precedence in accessible name calculation and is never simply ignored.",
        3: "They are different mechanisms. aria-label is a self-contained string; aria-labelledby references other DOM elements by ID. They also differ in precedence."
      },
      topicLinks: ['wcag-perceivable', 'screen-readers'],
      difficulty: 'medium',
      tags: ['aria', 'naming']
    },
    {
      id: 1117,
      question: "How does aria-describedby differ from aria-labelledby?",
      options: [
        "aria-describedby provides the accessible NAME, while aria-labelledby provides the accessible DESCRIPTION",
        "aria-labelledby provides the accessible NAME, while aria-describedby provides an additional DESCRIPTION that offers supplementary information",
        "They are identical in function and screen reader announcement",
        "aria-describedby only works with images"
      ],
      correct: 1,
      explanation: "aria-labelledby contributes to the accessible name (the primary identifier), while aria-describedby provides a supplementary description. Screen readers typically announce the name first and then the description, often with a slight pause or different verbosity settings.",
      wrongExplanations: {
        0: "This has the two attributes reversed. aria-labelledby provides the name; aria-describedby provides the description.",
        2: "They serve different purposes and are announced differently by screen readers. The name is always announced, while the description may be announced after a pause or depending on screen reader settings.",
        3: "aria-describedby works with any element, not just images. It is commonly used with form inputs to provide instructions or error messages."
      },
      topicLinks: ['wcag-perceivable', 'screen-readers'],
      difficulty: 'medium',
      tags: ['aria', 'naming']
    },
    {
      id: 1118,
      question: "What does aria-hidden='true' do?",
      options: [
        "Visually hides the element from the page",
        "Removes the element and all its children from the accessibility tree, while leaving it visible on screen",
        "Disables the element so it cannot receive focus",
        "Makes the element invisible to both sighted users and screen readers"
      ],
      correct: 1,
      explanation: "aria-hidden='true' removes an element and all its descendants from the accessibility tree, making them invisible to screen readers. However, the element remains visually visible on the page. It is commonly used for decorative icons or redundant text.",
      wrongExplanations: {
        0: "aria-hidden does not affect visual rendering. The element remains visible on screen. To visually hide something, you need CSS (e.g., display:none or a visually-hidden class).",
        2: "aria-hidden does not prevent focus. This is actually a dangerous pitfall — if a focusable element has aria-hidden='true', screen reader users can still focus it but it will not be announced, causing confusion.",
        3: "aria-hidden='true' only hides the element from assistive technology. It remains visually visible. To hide from both, use CSS display:none or the HTML hidden attribute."
      },
      topicLinks: ['wcag-perceivable', 'screen-readers'],
      difficulty: 'medium',
      tags: ['aria', 'aria-hidden']
    },
    {
      id: 1119,
      question: "What is a critical pitfall of using aria-hidden='true' on an element that contains focusable children (e.g., links or buttons)?",
      options: [
        "The focusable children will be automatically removed from the tab order",
        "The focusable children can still receive keyboard focus, but screen readers will not announce them, creating a confusing experience",
        "The browser will throw a JavaScript error",
        "The focusable children will receive double focus"
      ],
      correct: 1,
      explanation: "aria-hidden='true' removes elements from the accessibility tree but does NOT remove them from the tab order. If a user tabs to a focusable child inside an aria-hidden container, the screen reader has nothing to announce, leaving the user confused about what they focused.",
      wrongExplanations: {
        0: "aria-hidden does not affect the tab order. Focusable elements inside an aria-hidden container remain in the tab order unless explicitly given tabindex='-1'.",
        2: "No JavaScript error occurs. The issue is a silent accessibility failure that creates a confusing experience for assistive technology users.",
        3: "Elements do not receive double focus. The problem is that they receive focus but have no accessible representation to announce."
      },
      topicLinks: ['wcag-robust', 'screen-readers'],
      difficulty: 'hard',
      tags: ['aria', 'aria-hidden', 'anti-patterns']
    },
    {
      id: 1120,
      question: "Which ARIA attribute is used to create a live region that announces updates to screen reader users?",
      options: [
        "aria-live",
        "aria-atomic",
        "aria-relevant",
        "aria-busy"
      ],
      correct: 0,
      explanation: "aria-live is the primary attribute that creates a live region. When content within the live region changes, the screen reader announces the update. Its values are 'off' (default), 'polite' (waits for idle), and 'assertive' (interrupts immediately).",
      wrongExplanations: {
        1: "aria-atomic determines whether the screen reader announces the entire live region or only the changed portion. It modifies live region behavior but does not create a live region by itself.",
        2: "aria-relevant specifies which types of changes trigger announcements (additions, removals, text). It refines live region behavior but requires aria-live to function.",
        3: "aria-busy indicates whether a region is still being updated. When set to true, assistive technology may wait before announcing changes. It does not create a live region."
      },
      topicLinks: ['wcag-robust', 'screen-readers'],
      difficulty: 'easy',
      tags: ['aria', 'live-regions']
    },
    {
      id: 1121,
      question: "What is the difference between aria-live='polite' and aria-live='assertive'?",
      options: [
        "'polite' announces updates immediately; 'assertive' waits for idle",
        "'polite' waits until the screen reader is idle before announcing; 'assertive' interrupts the current announcement immediately",
        "'polite' is for error messages; 'assertive' is for status updates",
        "'polite' is deprecated in favor of 'assertive'"
      ],
      correct: 1,
      explanation: "aria-live='polite' queues announcements until the screen reader finishes its current task, while aria-live='assertive' interrupts immediately. 'polite' should be the default choice; 'assertive' should be reserved for time-sensitive information like critical errors.",
      wrongExplanations: {
        0: "This is backwards. 'polite' waits for idle; 'assertive' interrupts immediately.",
        2: "The urgency level, not the type of message, determines the choice. Status updates can be polite; errors that require immediate attention can be assertive. There is no fixed rule tying message types to specific values.",
        3: "Neither value is deprecated. 'polite' is the recommended default for most live region announcements."
      },
      topicLinks: ['wcag-robust', 'screen-readers'],
      difficulty: 'easy',
      tags: ['aria', 'live-regions']
    },
    {
      id: 1122,
      question: "What is the difference between role='alert' and aria-live='assertive'?",
      options: [
        "They are completely identical",
        "role='alert' implies aria-live='assertive' and aria-atomic='true' by default, while aria-live='assertive' alone does not set aria-atomic",
        "role='alert' is for visual alerts only, while aria-live is for screen readers",
        "aria-live='assertive' is deprecated in favor of role='alert'"
      ],
      correct: 1,
      explanation: "role='alert' is an implicit live region that automatically behaves as aria-live='assertive' and aria-atomic='true'. Using aria-live='assertive' alone does not set aria-atomic='true', meaning only the changed content may be announced rather than the entire region.",
      wrongExplanations: {
        0: "They are not identical. role='alert' bundles additional default behaviors (aria-atomic='true') and may trigger additional screen reader behaviors beyond what aria-live='assertive' alone provides.",
        2: "Both role='alert' and aria-live affect how screen readers handle content. role='alert' is not a visual-only feature.",
        3: "aria-live='assertive' is not deprecated. Both approaches are valid; they simply have different default behaviors."
      },
      topicLinks: ['wcag-robust', 'screen-readers'],
      difficulty: 'hard',
      tags: ['aria', 'live-regions']
    },
    {
      id: 1123,
      question: "Which aria-live value should be used for a non-urgent status message, such as '5 search results found'?",
      options: [
        "assertive",
        "off",
        "polite",
        "rude"
      ],
      correct: 2,
      explanation: "aria-live='polite' is appropriate for non-urgent status messages. It waits until the screen reader is idle before announcing the update, so it does not interrupt the user. Additionally, using role='status' (which implies aria-live='polite') is often the best choice for status messages.",
      wrongExplanations: {
        0: "'assertive' interrupts the screen reader immediately and should be reserved for time-sensitive, critical information. A search result count is not urgent enough to justify interrupting the user.",
        1: "'off' means changes will not be announced at all, so the user would miss the status update entirely.",
        3: "'rude' is not a valid aria-live value. The valid values are 'off', 'polite', and 'assertive'."
      },
      topicLinks: ['wcag-robust', 'screen-readers'],
      difficulty: 'easy',
      tags: ['aria', 'live-regions']
    },
    {
      id: 1124,
      question: "What does the aria-expanded attribute communicate to assistive technology?",
      options: [
        "Whether an element is currently visible on screen",
        "Whether a collapsible section or element controlled by this element is currently expanded or collapsed",
        "Whether the element takes up the full width of the page",
        "Whether the font size has been increased"
      ],
      correct: 1,
      explanation: "aria-expanded='true' or 'false' indicates whether a grouping element or a section controlled by the current element is expanded or collapsed. It is commonly used on buttons that toggle menus, accordions, or tree items.",
      wrongExplanations: {
        0: "aria-expanded does not indicate visibility. An element can be visible but collapsed (showing only a summary), or invisible for other reasons.",
        2: "aria-expanded has nothing to do with visual width or layout. It communicates the open/closed state of an associated section.",
        3: "aria-expanded does not relate to font size. It is strictly about the expanded/collapsed state of a section or widget."
      },
      topicLinks: ['wcag-robust', 'screen-readers'],
      difficulty: 'easy',
      tags: ['aria', 'states']
    },
    {
      id: 1125,
      question: "Which ARIA attribute should be used on a toggle button to convey its pressed/unpressed state?",
      options: [
        "aria-checked",
        "aria-selected",
        "aria-pressed",
        "aria-expanded"
      ],
      correct: 2,
      explanation: "aria-pressed is used on toggle buttons to convey whether the button is currently pressed ('true') or not pressed ('false'). It can also be 'mixed' for a partially pressed state. Screen readers announce this as 'pressed' or 'not pressed'.",
      wrongExplanations: {
        0: "aria-checked is for checkbox, radio, and switch widgets, not toggle buttons.",
        1: "aria-selected is used for items within a selection widget (tabs, grid cells, listbox options), not for toggle button state.",
        3: "aria-expanded is for elements that control the visibility of another section (e.g., a disclosure widget), not for communicating a toggle/pressed state."
      },
      topicLinks: ['wcag-robust', 'screen-readers'],
      difficulty: 'medium',
      tags: ['aria', 'states']
    },
    {
      id: 1126,
      question: "What is the correct ARIA role structure for an accessible tab interface?",
      options: [
        "role='menu' containing role='menuitem' elements",
        "role='tablist' containing role='tab' elements, with associated role='tabpanel' elements",
        "role='toolbar' containing role='button' elements",
        "role='list' containing role='listitem' elements"
      ],
      correct: 1,
      explanation: "An accessible tab interface uses role='tablist' on the container, role='tab' on each tab, and role='tabpanel' on each content panel. Tabs are connected to their panels via aria-controls (on the tab) and aria-labelledby (on the panel).",
      wrongExplanations: {
        0: "The menu role is for action menus (like context menus or menu bars), not for tabbed interfaces. Using menu roles for tabs would give incorrect semantics to assistive technology.",
        2: "A toolbar is for grouping action buttons, not for creating a tabbed interface with panels.",
        3: "List roles represent a flat or nested list of items, not an interactive tabbed interface with panels."
      },
      topicLinks: ['wcag-robust', 'wcag-operable', 'screen-readers'],
      difficulty: 'medium',
      tags: ['aria', 'tabs', 'widget-patterns']
    },
    {
      id: 1127,
      question: "Which keyboard interaction pattern is expected for a tablist according to the ARIA Authoring Practices Guide (APG)?",
      options: [
        "Tab key moves between tabs within the tablist",
        "Arrow keys move between tabs; Tab key moves focus into the active tab panel",
        "Enter key moves between tabs; Space key activates the panel",
        "Escape key cycles through tabs"
      ],
      correct: 1,
      explanation: "Per the APG, arrow keys (Left/Right for horizontal tabs) move focus between tabs within the tablist, and the Tab key moves focus out of the tablist into the associated active tab panel. This allows efficient keyboard navigation.",
      wrongExplanations: {
        0: "Using Tab to move between tabs within the tablist would create an excessive number of tab stops. The APG recommends arrow keys for navigation within the tablist.",
        2: "Enter/Space may activate a tab if using manual activation, but they are not used to move between tabs. Arrow keys handle tab-to-tab navigation.",
        3: "Escape is not used to cycle through tabs. It is typically used in other patterns (like closing dialogs) but is not part of standard tab navigation."
      },
      topicLinks: ['wcag-operable', 'screen-readers'],
      difficulty: 'hard',
      tags: ['aria', 'tabs', 'keyboard']
    },
    {
      id: 1128,
      question: "What does aria-controls attribute do?",
      options: [
        "It visually connects two elements with a line",
        "It identifies the element(s) whose content or presence is controlled by the current element",
        "It prevents the referenced element from receiving focus",
        "It makes the current element a parent of the referenced element in the DOM"
      ],
      correct: 1,
      explanation: "aria-controls takes one or more element IDs and indicates that the current element controls those elements. For example, a tab controls its tabpanel, or a button controls a collapsible section. This helps assistive technology communicate the relationship.",
      wrongExplanations: {
        0: "aria-controls creates a programmatic relationship in the accessibility tree, not a visual connection. There is no visual rendering change.",
        2: "aria-controls does not affect focus behavior. It is purely an informational relationship attribute.",
        3: "aria-controls does not change the DOM structure. It creates a semantic relationship in the accessibility tree without altering parent-child DOM relationships."
      },
      topicLinks: ['wcag-robust', 'screen-readers'],
      difficulty: 'medium',
      tags: ['aria', 'relationships']
    },
    {
      id: 1129,
      question: "When would you use aria-owns?",
      options: [
        "To indicate that an element is the copyright owner of the page",
        "When a parent-child relationship exists semantically but the elements are not parent-child in the DOM tree",
        "To transfer ownership of an element to another JavaScript scope",
        "To indicate that an element owns its own styling"
      ],
      correct: 1,
      explanation: "aria-owns is used when the visual and semantic parent-child relationship exists but the DOM structure does not reflect it (e.g., a combobox popup rendered at the end of <body> for z-index reasons but semantically owned by the combobox input).",
      wrongExplanations: {
        0: "aria-owns has nothing to do with copyright or intellectual property. It defines parent-child relationships in the accessibility tree.",
        2: "aria-owns is an accessibility attribute, not a JavaScript scope mechanism. It affects only the accessibility tree structure.",
        3: "aria-owns does not relate to CSS styling. It rearranges parent-child relationships in the accessibility tree."
      },
      topicLinks: ['wcag-robust', 'screen-readers'],
      difficulty: 'hard',
      tags: ['aria', 'relationships']
    },
    {
      id: 1130,
      question: "Which of the following is the SECOND rule of ARIA usage?",
      options: [
        "Do not change native semantics unless you really have to",
        "Always use aria-label on every element",
        "ARIA roles automatically add keyboard behavior",
        "Always use aria-hidden on decorative images"
      ],
      correct: 0,
      explanation: "The second rule of ARIA is: 'Do not change native semantics, unless you really have to.' For example, do not add role='heading' to a <button> — use a heading element instead. Overriding native semantics can confuse assistive technology.",
      wrongExplanations: {
        1: "Adding aria-label to every element is not an ARIA rule and would be harmful — it would override visible text labels and create maintenance burdens.",
        2: "This is actually a common misconception. ARIA roles do NOT add keyboard behavior — they only change the semantic meaning. Keyboard behavior must be added with JavaScript. This fact is addressed in the fifth rule of ARIA.",
        3: "Decorative images should use alt='' (empty alt), not aria-hidden. While aria-hidden='true' can work, the standard approach for decorative images is an empty alt attribute."
      },
      topicLinks: ['wcag-robust'],
      difficulty: 'medium',
      tags: ['aria', 'rules-of-aria']
    },
    {
      id: 1131,
      question: "What does the fifth rule of ARIA state about interactive elements?",
      options: [
        "All interactive elements must have an accessible name",
        "Interactive elements must always use ARIA roles",
        "ARIA should be added to all elements to future-proof the code",
        "Only native HTML interactive elements should be used"
      ],
      correct: 0,
      explanation: "The fifth rule of ARIA states: 'All interactive elements must have an accessible name.' This means every button, link, input, and custom widget must have a name that assistive technology can announce, whether through visible text, aria-label, aria-labelledby, or other mechanisms.",
      wrongExplanations: {
        1: "Native HTML interactive elements already have built-in roles and do not need explicit ARIA roles added. This would violate the first rule of ARIA.",
        2: "Adding ARIA to all elements is not a rule and can actually harm accessibility by adding noise or incorrect semantics to the accessibility tree.",
        3: "While native HTML is preferred (first rule), the fifth rule specifically addresses that ALL interactive elements — whether native or custom — must have an accessible name."
      },
      topicLinks: ['wcag-robust', 'wcag-perceivable'],
      difficulty: 'medium',
      tags: ['aria', 'rules-of-aria']
    },
    {
      id: 1132,
      question: "A developer adds role='button' to a <div> element. What additional work is needed to make it fully accessible?",
      options: [
        "No additional work — the role is sufficient",
        "Add tabindex='0' for keyboard focus, add keyboard event handlers for Enter and Space keys, and provide an accessible name",
        "Add aria-hidden='true' to hide it from screen readers",
        "Wrap it in a <form> element"
      ],
      correct: 1,
      explanation: "ARIA roles only change the semantic meaning in the accessibility tree — they do NOT add behavior. A div with role='button' still needs: tabindex='0' for focus, keydown handlers for Enter and Space, and an accessible name. This is why using a native <button> is almost always better.",
      wrongExplanations: {
        0: "The role alone only changes how screen readers announce the element. Without tabindex and keyboard handlers, the element will not be keyboard accessible. Without a name, screen readers have nothing meaningful to announce.",
        2: "Adding aria-hidden='true' would hide the button from screen readers entirely, making it inaccessible rather than accessible.",
        3: "Wrapping in a <form> is not relevant to making a div behave as an accessible button. The div needs focus, keyboard handlers, and a name."
      },
      topicLinks: ['wcag-robust', 'wcag-operable'],
      difficulty: 'medium',
      tags: ['aria', 'anti-patterns']
    },
    {
      id: 1133,
      question: "Which ARIA role should be used on a modal dialog that requires user interaction before returning to the main content?",
      options: [
        "role='alertdialog'",
        "role='dialog'",
        "role='alert'",
        "role='tooltip'"
      ],
      correct: 1,
      explanation: "role='dialog' is used for modal dialogs that overlay the page content. It should be paired with aria-modal='true', an accessible name (via aria-label or aria-labelledby), and proper focus management (focus moves into the dialog on open and returns to the trigger on close).",
      wrongExplanations: {
        0: "role='alertdialog' is specifically for alert dialogs that require an immediate response to an urgent situation (e.g., confirming a destructive action). A general modal dialog should use role='dialog'.",
        2: "role='alert' is for inline alert messages, not interactive dialogs. It creates a live region but does not represent an interactive overlay.",
        3: "role='tooltip' is for small informational popups that appear on hover or focus. It is not interactive and not appropriate for modal dialogs."
      },
      topicLinks: ['wcag-robust', 'wcag-operable', 'screen-readers'],
      difficulty: 'medium',
      tags: ['aria', 'dialog', 'widget-patterns']
    },
    {
      id: 1134,
      question: "What must be true about focus management when a modal dialog opens?",
      options: [
        "Focus should remain on the element that triggered the dialog",
        "Focus must move into the dialog, and keyboard focus must be trapped within the dialog until it is closed",
        "The page behind the dialog should remain fully keyboard accessible",
        "All interactive elements outside the dialog should be given role='none'"
      ],
      correct: 1,
      explanation: "When a modal dialog opens, focus must move to an element inside the dialog (typically the first focusable element or the dialog itself). Focus must be trapped so Tab and Shift+Tab cycle only through the dialog's interactive elements. When closed, focus returns to the triggering element.",
      wrongExplanations: {
        0: "Leaving focus on the trigger means screen reader users would not know a dialog has appeared. Focus must move into the dialog.",
        2: "In a modal dialog, background content should NOT be keyboard accessible. Focus must be trapped inside the dialog to maintain the modal behavior.",
        3: "Adding role='none' to background elements is not the correct approach. Background content should be hidden from assistive technology using aria-hidden='true' on the inert background, or by using the inert attribute."
      },
      topicLinks: ['wcag-operable', 'screen-readers'],
      difficulty: 'medium',
      tags: ['aria', 'dialog', 'focus-management']
    },
    {
      id: 1135,
      question: "Which ARIA pattern is appropriate for an autocomplete search input that displays suggestions?",
      options: [
        "role='search' with role='menu' for the suggestions",
        "role='combobox' on the input with role='listbox' for the suggestions",
        "role='textbox' with aria-live='assertive' on the suggestions",
        "role='searchbox' with role='tree' for the suggestions"
      ],
      correct: 1,
      explanation: "The combobox pattern uses role='combobox' on the input, role='listbox' on the suggestions container, and role='option' on each suggestion. The combobox uses aria-expanded, aria-controls, and aria-activedescendant to communicate state and relationships.",
      wrongExplanations: {
        0: "role='menu' is for action menus, not suggestion lists. Menu items represent commands, while combobox suggestions represent selectable values.",
        2: "While aria-live could announce updates, it would not provide the rich interaction semantics (active descendant tracking, selection) that the combobox pattern offers.",
        3: "role='tree' is for hierarchical data structures, not flat suggestion lists. The standard pattern for autocomplete is combobox with listbox."
      },
      topicLinks: ['wcag-robust', 'wcag-operable', 'screen-readers'],
      difficulty: 'hard',
      tags: ['aria', 'combobox', 'widget-patterns']
    },
    {
      id: 1136,
      question: "What does aria-atomic='true' do when used on a live region?",
      options: [
        "It causes the screen reader to announce only the changed content within the region",
        "It causes the screen reader to announce the ENTIRE live region content whenever any part changes",
        "It prevents the live region from being announced more than once",
        "It makes the live region announcement instant rather than queued"
      ],
      correct: 1,
      explanation: "When aria-atomic='true' is set on a live region, the screen reader announces the entire content of the region when any part changes, rather than just the changed portion. This is useful when the full context is needed to understand the change.",
      wrongExplanations: {
        0: "Announcing only the changed content is the behavior when aria-atomic is 'false' (the default), not 'true'.",
        2: "aria-atomic does not limit the number of announcements. The live region will be announced each time its content changes.",
        3: "The timing of the announcement (immediate vs. queued) is controlled by the aria-live value ('assertive' vs. 'polite'), not aria-atomic."
      },
      topicLinks: ['wcag-robust', 'screen-readers'],
      difficulty: 'hard',
      tags: ['aria', 'live-regions']
    },
    {
      id: 1137,
      question: "A developer adds aria-label='Close' to a <button> that visually displays only an 'X' icon. Is this correct?",
      options: [
        "No — the button should have no accessible name since it is decorative",
        "No — aria-label should never be used on buttons",
        "Yes — aria-label provides the accessible name that screen readers will announce instead of just 'X' or nothing",
        "Yes — but only if the button also has role='img'"
      ],
      correct: 2,
      explanation: "Adding aria-label='Close' to an icon-only button is a correct and common pattern. It provides a meaningful accessible name for screen readers. The icon itself should be hidden from assistive technology (e.g., aria-hidden='true' on the icon element).",
      wrongExplanations: {
        0: "Interactive elements must always have an accessible name. A button is never decorative — it performs an action and must be identifiable to all users.",
        1: "aria-label is perfectly valid on buttons and is one of the most common ways to provide accessible names for icon-only buttons.",
        3: "role='img' is for images, not buttons. The button should keep its native button role. aria-label is sufficient on its own."
      },
      topicLinks: ['wcag-perceivable', 'screen-readers'],
      difficulty: 'easy',
      tags: ['aria', 'naming']
    },
    {
      id: 1138,
      question: "Which of the following is an example of ARIA making accessibility WORSE?",
      options: [
        "Using aria-label on an icon-only button",
        "Adding role='presentation' to a data table that conveys information",
        "Using aria-describedby to link error messages to form inputs",
        "Using aria-expanded on a disclosure button"
      ],
      correct: 1,
      explanation: "Adding role='presentation' to a data table strips all table semantics from the accessibility tree. Screen reader users would lose the ability to navigate by rows, columns, and headers. ARIA should enhance accessibility, not remove meaningful semantics.",
      wrongExplanations: {
        0: "Using aria-label on an icon-only button is a correct and recommended pattern that provides a meaningful accessible name.",
        2: "Linking error messages to inputs with aria-describedby is a best practice that helps screen reader users understand input errors.",
        3: "Using aria-expanded on a disclosure button correctly communicates the open/closed state to assistive technology."
      },
      topicLinks: ['wcag-robust', 'screen-readers'],
      difficulty: 'medium',
      tags: ['aria', 'anti-patterns']
    },
    {
      id: 1139,
      question: "What is the purpose of the ARIA Authoring Practices Guide (APG)?",
      options: [
        "It is a mandatory specification that browsers must implement",
        "It provides recommended patterns, keyboard interactions, and examples for building accessible widgets with ARIA",
        "It replaces the WCAG guidelines for web applications",
        "It is a browser extension for automated testing"
      ],
      correct: 1,
      explanation: "The APG (maintained by the W3C) provides design patterns and guidance for building accessible rich internet applications. It includes recommended keyboard interactions, ARIA roles/properties, and working code examples for common widgets like tabs, dialogs, and menus.",
      wrongExplanations: {
        0: "The APG is guidance, not a mandatory specification. It provides recommended patterns, but developers can implement alternatives as long as they meet WCAG requirements.",
        2: "The APG complements WCAG — it does not replace it. WCAG provides the success criteria; the APG provides implementation patterns for meeting those criteria.",
        3: "The APG is a documentation resource with patterns and examples, not a testing tool or browser extension."
      },
      topicLinks: ['wcag-robust', 'wcag-operable'],
      difficulty: 'easy',
      tags: ['aria', 'apg']
    },
    {
      id: 1140,
      question: "Which of the following correctly describes ARIA landmark roles?",
      options: [
        "They are only for mobile screen readers",
        "They define regions of the page (such as banner, navigation, main, complementary, contentinfo) that help screen reader users navigate the page structure",
        "They must be used in place of HTML5 semantic elements",
        "They can only be applied to <div> elements"
      ],
      correct: 1,
      explanation: "ARIA landmark roles identify regions of the page, allowing screen reader users to jump between them quickly. Common landmarks include banner, navigation, main, complementary, and contentinfo. HTML5 elements like <header>, <nav>, <main>, <aside>, and <footer> map to these roles implicitly.",
      wrongExplanations: {
        0: "ARIA landmark roles work across all screen readers, not just mobile. Desktop screen readers like JAWS, NVDA, and VoiceOver all support landmark navigation.",
        2: "ARIA landmarks should NOT replace HTML5 semantic elements. Per the first rule of ARIA, native HTML elements are preferred. ARIA landmarks are used when native elements are not available or need to be supplemented.",
        3: "ARIA landmark roles can be applied to any appropriate element, not just <div>s. In practice, native HTML5 elements already carry these roles implicitly."
      },
      topicLinks: ['wcag-robust', 'screen-readers'],
      difficulty: 'easy',
      tags: ['aria', 'landmarks']
    },

    // =============================================
    // TESTING & TOOLS (1141-1150)
    // =============================================
    {
      id: 1141,
      question: "Approximately what percentage of accessibility issues can automated testing tools typically detect?",
      options: [
        "About 90-100% of all issues",
        "About 60-70% of all issues",
        "About 30-40% of all issues",
        "About 5-10% of all issues"
      ],
      correct: 2,
      explanation: "Studies consistently show that automated testing tools catch roughly 30-40% of accessibility issues. Many issues — such as whether alt text is meaningful, whether focus order is logical, or whether content is understandable — require human judgment and cannot be detected by automation.",
      wrongExplanations: {
        0: "Automated tools cannot evaluate subjective criteria like meaningful alt text, logical reading order, or clear language. They miss the majority of issues that require human judgment.",
        1: "60-70% significantly overestimates automated tool coverage. Many WCAG success criteria require human evaluation that no automated tool can perform.",
        3: "5-10% underestimates automated tools. They reliably catch issues like missing alt attributes, insufficient color contrast, missing form labels, and duplicate IDs."
      },
      topicLinks: ['wcag-overview'],
      difficulty: 'medium',
      tags: ['testing', 'automated-testing']
    },
    {
      id: 1142,
      question: "Which of the following accessibility issues can automated testing tools reliably detect?",
      options: [
        "Whether alt text accurately describes the image content",
        "Whether the focus order is logical and intuitive",
        "Missing form input labels and insufficient color contrast ratios",
        "Whether a custom widget is usable with a screen reader"
      ],
      correct: 2,
      explanation: "Automated tools can reliably detect structural issues like missing form labels (<label> associations), color contrast that fails WCAG ratios, missing alt attributes, duplicate IDs, and missing language attributes. These are objective, measurable checks.",
      wrongExplanations: {
        0: "Automated tools can detect whether an alt attribute EXISTS but cannot judge whether its content accurately describes the image. That requires human evaluation.",
        1: "Focus order depends on the logical flow of content and user experience, which requires human judgment. Automated tools cannot determine if the order is 'logical.'",
        3: "Testing whether a custom widget works with a screen reader requires actually using a screen reader and evaluating the interaction experience — something automated tools cannot do."
      },
      topicLinks: ['wcag-overview', 'wcag-perceivable'],
      difficulty: 'easy',
      tags: ['testing', 'automated-testing']
    },
    {
      id: 1143,
      question: "What is the primary purpose of keyboard-only testing in accessibility evaluation?",
      options: [
        "To verify that the website loads quickly without a mouse",
        "To ensure all functionality is operable using only the keyboard, with visible focus indicators and no keyboard traps",
        "To test whether keyboard shortcuts conflict with browser shortcuts",
        "To check that the Tab key works in form fields"
      ],
      correct: 1,
      explanation: "Keyboard-only testing verifies that all interactive elements are reachable and operable with the keyboard, that focus is visible at all times, that focus order is logical, and that there are no keyboard traps (places where focus gets stuck). This is essential for users who cannot use a mouse.",
      wrongExplanations: {
        0: "Keyboard testing is about functionality and interaction, not performance or page load speed.",
        2: "While shortcut conflicts can be an issue, keyboard testing is primarily about ensuring complete operability — reaching, activating, and navigating all interactive content.",
        3: "Testing Tab in form fields is just one small part. Keyboard testing covers all interactive elements, focus management, keyboard traps, and focus visibility across the entire page."
      },
      topicLinks: ['wcag-operable', 'switch-devices'],
      difficulty: 'easy',
      tags: ['testing', 'keyboard-testing']
    },
    {
      id: 1144,
      question: "Which key combination activates the screen reader rotor/elements list in VoiceOver on macOS?",
      options: [
        "Ctrl + Alt + U",
        "VO + U (Control + Option + U)",
        "Insert + F7",
        "Caps Lock + Space"
      ],
      correct: 1,
      explanation: "In VoiceOver on macOS, pressing VO + U (where VO is Control + Option) opens the rotor, which provides lists of headings, links, landmarks, form controls, and other elements on the page, allowing quick navigation.",
      wrongExplanations: {
        0: "Ctrl + Alt + U is not the standard VoiceOver command. The VoiceOver modifier (VO) is Control + Option, not Ctrl + Alt.",
        2: "Insert + F7 is a JAWS command for opening the links list, not a VoiceOver command.",
        3: "Caps Lock + Space is used in some screen readers (like NVDA with laptop layout) but is not the VoiceOver rotor command."
      },
      topicLinks: ['screen-readers'],
      difficulty: 'hard',
      tags: ['testing', 'screen-readers', 'voiceover']
    },
    {
      id: 1145,
      question: "Which free, open-source screen reader is most commonly used for testing on Windows?",
      options: [
        "VoiceOver",
        "TalkBack",
        "NVDA",
        "Narrator"
      ],
      correct: 2,
      explanation: "NVDA (NonVisual Desktop Access) is a free, open-source screen reader for Windows. It is widely used for accessibility testing because it is free, actively maintained, and has strong web browser support. JAWS is also popular on Windows but is commercial software.",
      wrongExplanations: {
        0: "VoiceOver is the built-in screen reader for macOS and iOS. It is not available on Windows.",
        1: "TalkBack is the built-in screen reader for Android devices, not Windows.",
        3: "Narrator is the built-in screen reader in Windows, but it is less commonly used for accessibility testing than NVDA. Narrator has historically had more limited web support, though it has improved."
      },
      topicLinks: ['screen-readers'],
      difficulty: 'easy',
      tags: ['testing', 'screen-readers', 'nvda']
    },
    {
      id: 1146,
      question: "What does the axe accessibility testing tool primarily evaluate?",
      options: [
        "Only color contrast issues",
        "Automated checks against WCAG rules, including DOM structure, ARIA usage, color contrast, and missing attributes",
        "Screen reader compatibility on every platform",
        "User experience and usability"
      ],
      correct: 1,
      explanation: "axe (by Deque Systems) runs automated checks against WCAG success criteria by analyzing the DOM. It checks for issues like missing alt text, incorrect ARIA usage, color contrast failures, missing form labels, and document structure problems. It is available as a browser extension (axe DevTools) and as a library for CI/CD.",
      wrongExplanations: {
        0: "axe checks far more than color contrast. It evaluates dozens of WCAG rules covering structure, ARIA, forms, images, and more.",
        2: "axe analyzes the DOM and cannot actually test with screen readers. Screen reader testing requires manually using a screen reader.",
        3: "User experience and usability require human evaluation. axe performs objective, automated checks against defined accessibility rules."
      },
      topicLinks: ['wcag-overview'],
      difficulty: 'easy',
      tags: ['testing', 'automated-testing', 'axe']
    },
    {
      id: 1147,
      question: "What is the accessibility tree?",
      options: [
        "A visual sitemap of all accessible pages on a website",
        "A hierarchical representation of the page content that browsers create for assistive technology, containing roles, names, values, and states",
        "A list of all ARIA attributes used on a page",
        "A folder structure of accessibility documentation files"
      ],
      correct: 1,
      explanation: "The accessibility tree is a simplified representation of the DOM that browsers create specifically for assistive technology. It contains objects with roles, accessible names, values, states, and relationships — the information that screen readers and other assistive technology use to present the page.",
      wrongExplanations: {
        0: "The accessibility tree is a per-page browser construct, not a sitemap. It represents the semantic structure of a single page.",
        2: "The accessibility tree contains much more than ARIA attributes. It includes information derived from native HTML elements, text content, and computed properties.",
        3: "The accessibility tree is a runtime browser structure, not a file system concept."
      },
      topicLinks: ['wcag-robust', 'screen-readers'],
      difficulty: 'medium',
      tags: ['testing', 'accessibility-tree']
    },
    {
      id: 1148,
      question: "How can a developer inspect the accessibility tree in Chrome DevTools?",
      options: [
        "By opening the Console tab and typing 'showAccessibilityTree()'",
        "By selecting an element in the Elements panel and viewing the Accessibility pane, or by enabling the full-page accessibility tree in DevTools settings",
        "By installing a separate browser called 'Chrome Accessibility'",
        "The accessibility tree is only visible in Firefox, not Chrome"
      ],
      correct: 1,
      explanation: "Chrome DevTools has an Accessibility pane in the Elements panel that shows the computed accessible name, role, and properties for any selected element. Chrome also offers a full-page accessibility tree view that can be enabled in DevTools settings.",
      wrongExplanations: {
        0: "There is no 'showAccessibilityTree()' console command. The accessibility tree is accessed through the DevTools Elements panel.",
        2: "No separate browser is needed. Chrome DevTools has built-in accessibility inspection tools.",
        3: "Both Chrome and Firefox (and other major browsers) provide accessibility tree inspection tools. Chrome's Accessibility pane is well-developed."
      },
      topicLinks: ['wcag-robust'],
      difficulty: 'medium',
      tags: ['testing', 'accessibility-tree', 'devtools']
    },
    {
      id: 1149,
      question: "Which accessibility issue requires manual testing and CANNOT be caught by automated tools?",
      options: [
        "An image missing its alt attribute entirely",
        "A color contrast ratio below the minimum threshold",
        "A keyboard trap inside a custom modal dialog",
        "A form input missing its associated <label>"
      ],
      correct: 2,
      explanation: "Keyboard traps require a human tester to navigate the page with a keyboard and discover that focus becomes stuck in a component. Automated tools analyze the static DOM but cannot simulate the dynamic keyboard navigation needed to detect traps.",
      wrongExplanations: {
        0: "A missing alt attribute is a straightforward DOM check that automated tools reliably detect.",
        1: "Color contrast ratios are computed mathematically from foreground and background colors, which automated tools handle well.",
        3: "Missing label associations can be detected by automated tools checking for <label> elements with matching 'for' attributes or wrapping input elements."
      },
      topicLinks: ['wcag-operable', 'wcag-overview'],
      difficulty: 'medium',
      tags: ['testing', 'manual-testing']
    },
    {
      id: 1150,
      question: "Which tool is commonly used to check color contrast ratios against WCAG requirements?",
      options: [
        "A JavaScript linter like ESLint",
        "The browser's built-in spell checker",
        "The WebAIM Contrast Checker or the Colour Contrast Analyser (CCA) by TPGi",
        "The HTML validator at validator.w3.org"
      ],
      correct: 2,
      explanation: "The WebAIM Contrast Checker (online tool) and the Colour Contrast Analyser by TPGi (desktop application) are widely used to check color contrast ratios against WCAG requirements (4.5:1 for normal text, 3:1 for large text at Level AA). Browser DevTools also include built-in contrast checking.",
      wrongExplanations: {
        0: "ESLint checks JavaScript code quality and syntax, not visual color contrast ratios.",
        1: "Spell checkers validate text spelling and grammar, not visual design properties like color contrast.",
        3: "The W3C HTML validator checks HTML syntax and markup validity, not visual accessibility properties like color contrast."
      },
      topicLinks: ['wcag-perceivable', 'wcag-overview'],
      difficulty: 'easy',
      tags: ['testing', 'color-contrast', 'tools']
    },
    // =============================================
    // ACCESSIBILITY TREE & INTEROPERABILITY (1151-1156)
    // =============================================
    {
      id: 1151,
      question: "What is the accessibility tree?",
      options: [
        "A parallel structure derived from the DOM that browsers expose to assistive technologies, containing accessible objects with name, role, state, and value",
        "A visual tree of DOM nodes shown in the browser's Elements panel",
        "A JavaScript API for measuring page performance",
        "A hierarchical map of CSS cascade order"
      ],
      correct: 0,
      explanation: "The accessibility tree is a browser-constructed representation based on the DOM (and CSS) that exposes accessible objects — each with name, role, state, and value — through platform accessibility APIs that assistive technology consumes.",
      wrongExplanations: {
        1: "That describes the DOM tree in DevTools, which is different from the accessibility tree.",
        2: "Performance APIs are unrelated to accessibility exposure.",
        3: "The cascade determines styling, not AT semantics."
      },
      topicLinks: ['accessibility-tree'],
      difficulty: 'medium',
      tags: ['accessibility-tree', 'assistive-tech']
    },
    {
      id: 1152,
      question: "Which CSS property typically removes an element from the accessibility tree in addition to hiding it visually?",
      options: [
        "display: none",
        "visibility: visible",
        "opacity: 0.5",
        "color: transparent"
      ],
      correct: 0,
      explanation: "Elements with display: none (or visibility: hidden) are excluded from both the rendered output and the accessibility tree. Opacity and transparent color hide content visually but leave it exposed to assistive technology.",
      wrongExplanations: {
        1: "visibility: visible keeps the element visible and in the tree — that's the default state.",
        2: "Opacity affects visual rendering only; content remains in the accessibility tree.",
        3: "Transparent text is still present in the accessibility tree."
      },
      topicLinks: ['accessibility-tree'],
      difficulty: 'medium',
      tags: ['accessibility-tree', 'css']
    },
    {
      id: 1153,
      question: "Why is it important to test with specific browser + screen reader combinations (e.g., NVDA + Firefox, JAWS + Chrome, VoiceOver + Safari)?",
      options: [
        "Because the way browsers build the accessibility tree and map it to platform APIs varies, and screen readers rely on those mappings differently",
        "Because WCAG requires testing in every possible browser",
        "Because screen readers refuse to run in certain browsers",
        "Because only specific browsers support ARIA at all"
      ],
      correct: 0,
      explanation: "Browsers and screen readers combine to form an interoperability layer. Subtle differences in how each browser maps the DOM to the accessibility tree, and how each screen reader interprets it, can produce real variations in user experience.",
      wrongExplanations: {
        1: "WCAG does not mandate testing in every browser combination.",
        2: "Most screen readers run in most browsers, though with different levels of compatibility.",
        3: "ARIA is supported across all major browsers."
      },
      topicLinks: ['accessibility-tree', 'screen-reader-testing'],
      difficulty: 'medium',
      tags: ['testing', 'assistive-tech']
    },
    {
      id: 1154,
      question: "Which browser DevTools feature can you use to inspect the computed accessible name, role, and state of an element?",
      options: [
        "The Accessibility panel (or Accessibility pane within Elements) in Chrome, Firefox, and Edge DevTools",
        "The Network panel",
        "The Performance panel",
        "The Sources panel"
      ],
      correct: 0,
      explanation: "Modern browsers include an Accessibility pane in DevTools that shows the element's computed accessible name, role, states, and properties based on the accessibility tree.",
      wrongExplanations: {
        1: "Network monitors HTTP traffic.",
        2: "Performance profiles runtime activity.",
        3: "Sources manages scripts and debugging."
      },
      topicLinks: ['accessibility-tree', 'automated-testing-tools'],
      difficulty: 'easy',
      tags: ['testing', 'devtools']
    },
    {
      id: 1155,
      question: "A screen reader reads a button as 'Submit form button' even though its visible text is only 'Submit'. Why might this happen?",
      options: [
        "An aria-label or aria-labelledby is overriding the visible text with a longer accessible name",
        "Screen readers always append 'form button' to every button",
        "The browser's spell-check is inserting additional words",
        "The CSS content property is leaking into the accessibility tree"
      ],
      correct: 0,
      explanation: "When aria-label or aria-labelledby is set, it takes precedence over the visible text content per the accessible name computation algorithm. This can cause a mismatch with visible content (and may also fail SC 2.5.3 Label in Name).",
      wrongExplanations: {
        1: "Screen readers don't append arbitrary words to button names.",
        2: "Spell-check doesn't affect accessible names.",
        3: "CSS generated content can affect the accessibility tree in some browsers, but aria-label is the far more common cause."
      },
      topicLinks: ['accessible-names-descriptions', 'accessibility-tree'],
      difficulty: 'hard',
      tags: ['accessible-names', 'aria']
    },
    {
      id: 1156,
      question: "Which element is NOT typically included in a page's accessibility tree?",
      options: [
        "An element with aria-hidden='true' (and no focusable descendants)",
        "A button with only an aria-label",
        "An <h1> with visible text",
        "A <nav> landmark"
      ],
      correct: 0,
      explanation: "aria-hidden='true' explicitly removes an element and its subtree from the accessibility tree, making it invisible to assistive technology. Using it on an element containing focusable children is an anti-pattern.",
      wrongExplanations: {
        1: "A button with aria-label is fully exposed with its computed name.",
        2: "Headings are exposed with their accessible name and heading role.",
        3: "Landmarks like <nav> are exposed with landmark roles."
      },
      topicLinks: ['accessibility-tree', 'aria-states-properties'],
      difficulty: 'medium',
      tags: ['accessibility-tree', 'aria']
    },
    // =============================================
    // ACCESSIBLE NAMES & DESCRIPTIONS (1157-1162)
    // =============================================
    {
      id: 1157,
      question: "According to the accessible name computation algorithm, which source has the HIGHEST precedence for a form input?",
      options: [
        "aria-labelledby",
        "aria-label",
        "An associated <label> element",
        "The title attribute"
      ],
      correct: 0,
      explanation: "The name computation order is roughly: aria-labelledby > aria-label > native labeling (like <label>) > title. aria-labelledby wins because it allows referencing visible text elsewhere on the page.",
      wrongExplanations: {
        1: "aria-label is used only when aria-labelledby is not present.",
        2: "Native <label> is used when neither aria-labelledby nor aria-label are present.",
        3: "The title attribute is a last-resort fallback and is discouraged due to poor discoverability."
      },
      topicLinks: ['accessible-names-descriptions', 'form-accessibility'],
      difficulty: 'hard',
      tags: ['accessible-names']
    },
    {
      id: 1158,
      question: "When should you use aria-describedby instead of aria-label or aria-labelledby?",
      options: [
        "To provide additional description (like help text or error messages) that supplements — but does not replace — the accessible name",
        "To provide the primary accessible name when no visible label exists",
        "To hide an element from assistive technology",
        "To set the role of an element"
      ],
      correct: 0,
      explanation: "aria-describedby provides an accessible description: extra context like help text, format hints, or error messages. It is appended to the accessible name announcement, not a replacement for it.",
      wrongExplanations: {
        1: "That is the job of aria-labelledby or aria-label.",
        2: "Hiding is done with aria-hidden.",
        3: "Roles are set with the role attribute or native semantics."
      },
      topicLinks: ['accessible-names-descriptions', 'form-accessibility'],
      difficulty: 'medium',
      tags: ['accessible-names']
    },
    {
      id: 1159,
      question: "Which markup gives an icon-only button the best accessible name?",
      options: [
        "<button aria-label='Close dialog'><svg aria-hidden='true'>…</svg></button>",
        "<button><svg><title>x</title></svg></button>",
        "<button><svg></svg></button>",
        "<div onclick='close()'><svg></svg></div>"
      ],
      correct: 0,
      explanation: "For an icon-only button, aria-label provides a clear accessible name while aria-hidden on the decorative SVG prevents duplicate announcements. The <button> element ensures role, focus, and keyboard behavior come for free.",
      wrongExplanations: {
        1: "A bare 'x' inside a <title> is unclear and may or may not become the accessible name depending on the browser.",
        2: "The button has no accessible name at all.",
        3: "A div has no role, is not focusable, and has no accessible name."
      },
      topicLinks: ['accessible-names-descriptions', 'semantic-html'],
      difficulty: 'medium',
      tags: ['accessible-names', 'icons']
    },
    {
      id: 1160,
      question: "WCAG SC 2.5.3 (Label in Name) requires that the accessible name of a control contains the visible label text. Why does this matter?",
      options: [
        "Speech input users say the visible label to activate the control, and speech recognition matches against the accessible name",
        "It speeds up automated testing",
        "It makes screen readers sound more natural",
        "It is required for passing automated contrast checks"
      ],
      correct: 0,
      explanation: "Speech recognition users (e.g., Dragon NaturallySpeaking, Voice Control) say the visible text of a control to activate it. If the accessible name differs, their command won't match. SC 2.5.3 prevents this mismatch.",
      wrongExplanations: {
        1: "Automated testing speed is unrelated.",
        2: "Screen reader 'naturalness' is unrelated to Label in Name.",
        3: "Contrast checks don't involve accessible names."
      },
      topicLinks: ['accessible-names-descriptions', 'wcag-operable'],
      difficulty: 'hard',
      tags: ['accessible-names', 'wcag-operable']
    },
    {
      id: 1161,
      question: "A designer labels a delete button visually as 'Delete' but sets aria-label='Remove item from cart'. What is the accessibility concern?",
      options: [
        "This violates SC 2.5.3 Label in Name because the visible text 'Delete' is not contained in the accessible name",
        "Nothing — aria-label always wins, and this is fine",
        "aria-label is not supported on buttons",
        "It violates color contrast requirements"
      ],
      correct: 0,
      explanation: "Since the accessible name ('Remove item from cart') does not contain the visible text ('Delete'), speech users who say 'click Delete' will fail to activate the control. The accessible name should at minimum contain the visible label.",
      wrongExplanations: {
        1: "aria-label winning is precisely what causes the mismatch.",
        2: "aria-label is fully supported on buttons.",
        3: "Contrast is a different requirement entirely."
      },
      topicLinks: ['accessible-names-descriptions', 'wcag-operable'],
      difficulty: 'hard',
      tags: ['accessible-names', 'wcag-operable']
    },
    {
      id: 1162,
      question: "Which sentence best describes how a <label> element associates with a form control?",
      options: [
        "Either by wrapping the control or by using a 'for' attribute whose value matches the control's id",
        "By placing it immediately before the control in the DOM",
        "By sharing the same CSS class",
        "By being inside the same <fieldset>"
      ],
      correct: 0,
      explanation: "A <label> associates with a control either implicitly (by wrapping it) or explicitly (via for=\"id\"). Both forms create a proper programmatic association that assistive technology recognizes.",
      wrongExplanations: {
        1: "DOM proximity alone does not create an association.",
        2: "CSS classes have no semantic effect.",
        3: "A fieldset groups controls and provides a group label via <legend>, but doesn't associate individual labels."
      },
      topicLinks: ['form-accessibility', 'accessible-names-descriptions'],
      difficulty: 'easy',
      tags: ['forms', 'accessible-names']
    },
    // =============================================
    // WCAG-EM & CONFORMANCE (1163-1168)
    // =============================================
    {
      id: 1163,
      question: "Which of the following is NOT one of the five steps of the WCAG-EM evaluation methodology?",
      options: [
        "Rewrite inaccessible code",
        "Define the evaluation scope",
        "Explore the target website",
        "Select a representative sample"
      ],
      correct: 0,
      explanation: "WCAG-EM's five steps are: (1) define the scope, (2) explore the site, (3) select a representative sample, (4) audit the sample, and (5) report findings. Remediation (rewriting code) is not a step of the methodology itself.",
      wrongExplanations: {
        1: "Step 1 is defining the evaluation scope.",
        2: "Step 2 is exploring the target site.",
        3: "Step 3 is selecting a representative sample."
      },
      topicLinks: ['wcag-em', 'testing-fundamentals'],
      difficulty: 'medium',
      tags: ['wcag-em', 'testing']
    },
    {
      id: 1164,
      question: "In WCAG-EM, why is a 'representative sample' used instead of testing every page?",
      options: [
        "Because testing every page is usually infeasible, and a representative sample gives meaningful coverage of the site's unique templates and workflows",
        "Because WCAG forbids testing more than 20 pages",
        "Because sampled pages are more accessible than non-sampled pages",
        "Because automated tools can only scan a fixed number of pages"
      ],
      correct: 0,
      explanation: "For large sites, auditing every page is impractical. WCAG-EM guides evaluators to select both a structured sample (key templates, states, functionality) and a random sample so that the audit reflects the real site.",
      wrongExplanations: {
        1: "WCAG imposes no page count limit.",
        2: "The goal is representativeness, not cherry-picking easy pages.",
        3: "Automated tools can crawl many pages; sampling is about methodology, not tool limits."
      },
      topicLinks: ['wcag-em'],
      difficulty: 'medium',
      tags: ['wcag-em', 'testing']
    },
    {
      id: 1165,
      question: "Which of the following is a required component of a WCAG conformance claim?",
      options: [
        "The date of the claim, WCAG version and level, and the scope of content covered",
        "A signed affidavit from an attorney",
        "Approval from the W3C",
        "A public audit by a third-party firm"
      ],
      correct: 0,
      explanation: "A conformance claim must include (at minimum) the date, WCAG version, conformance level, and a precise description of the content that conforms. It may optionally list accessibility-supported technologies and exceptions.",
      wrongExplanations: {
        1: "Legal affidavits are not a WCAG requirement.",
        2: "The W3C does not approve or certify individual claims.",
        3: "Third-party audits are common but not required by WCAG itself."
      },
      topicLinks: ['wcag-em', 'wcag-overview'],
      difficulty: 'hard',
      tags: ['wcag-em', 'conformance']
    },
    {
      id: 1166,
      question: "A site claims 'WCAG 2.1 AA conformance,' but one form in the checkout flow is inaccessible. Which statement is most accurate?",
      options: [
        "The conformance claim is invalid because a single failing SC on in-scope content breaks conformance for that content",
        "One broken form is acceptable since the rest of the site conforms",
        "Only Level AAA requires full conformance",
        "Conformance can be partial by percentage"
      ],
      correct: 0,
      explanation: "WCAG conformance is all-or-nothing per level for the scoped content. A single failing SC within the conforming scope invalidates the claim for that scope.",
      wrongExplanations: {
        1: "Conformance is binary, not averaged.",
        2: "All levels require full conformance to the criteria at and below that level.",
        3: "Partial-by-percentage conformance is not a concept in WCAG."
      },
      topicLinks: ['wcag-em', 'wcag-overview'],
      difficulty: 'hard',
      tags: ['wcag-em', 'conformance']
    },
    {
      id: 1167,
      question: "What is the main purpose of Step 2 (Explore the Target Website) in WCAG-EM?",
      options: [
        "To understand the site's common pages, essential functionality, and technologies used before selecting a sample",
        "To automatically scan every page for contrast errors",
        "To run usability testing with people with disabilities",
        "To generate the final accessibility report"
      ],
      correct: 0,
      explanation: "Step 2 is a reconnaissance step: identify key workflows, representative page types, states, and the technologies in use. This understanding informs sample selection in Step 3.",
      wrongExplanations: {
        1: "Automated scanning may be part of the audit, but is not the purpose of the exploration step.",
        2: "End-user testing is a complementary activity, not a WCAG-EM step.",
        3: "Reporting happens in Step 5."
      },
      topicLinks: ['wcag-em'],
      difficulty: 'medium',
      tags: ['wcag-em']
    },
    {
      id: 1168,
      question: "What is 'accessibility supported' in the context of a WCAG conformance claim?",
      options: [
        "The technologies used (HTML, ARIA, etc.) must be supported by users' assistive technologies in the way the content relies on them",
        "The website must be hosted on an accessible server",
        "The site must provide a dedicated accessibility page",
        "All users must have training in accessibility"
      ],
      correct: 0,
      explanation: "WCAG requires that features relied upon for conformance be 'accessibility supported' — meaning real users can access them with their assistive technologies. Novel or niche tech may not qualify.",
      wrongExplanations: {
        1: "Hosting is unrelated.",
        2: "An accessibility statement is recommended but not what this term means.",
        3: "User training is outside the scope of conformance."
      },
      topicLinks: ['wcag-em', 'wcag-overview'],
      difficulty: 'hard',
      tags: ['wcag-em', 'conformance']
    },
    // =============================================
    // ACT RULES & AUTOMATED TESTING (1169-1174)
    // =============================================
    {
      id: 1169,
      question: "What are ACT Rules?",
      options: [
        "Accessibility Conformance Testing rules — a W3C community format describing how to test specific accessibility requirements consistently",
        "Legal rules that mandate accessibility in government websites",
        "ARIA Compliance Tests defined by the WAI-ARIA spec",
        "A proprietary rule set used by a specific testing vendor"
      ],
      correct: 0,
      explanation: "ACT Rules are a W3C framework for writing testable accessibility rules. Each rule describes inputs, applicability, expectations, and outcomes so that different tools can implement them consistently and produce comparable results.",
      wrongExplanations: {
        1: "ACT is a technical framework, not a legal one.",
        2: "ACT is independent of the ARIA spec.",
        3: "ACT is an open W3C format, not vendor-proprietary."
      },
      topicLinks: ['act-rules', 'automated-testing-tools'],
      difficulty: 'medium',
      tags: ['act-rules', 'testing']
    },
    {
      id: 1170,
      question: "An automated tool passes a page for SC 1.1.1 (Non-text Content). What can you conclude?",
      options: [
        "Only that no automatically detectable failures were found — a manual review is still needed to judge whether alt text is accurate and meaningful",
        "That the page fully conforms to SC 1.1.1",
        "That the page contains no images",
        "That WCAG 2.1 AA has been met for the entire site"
      ],
      correct: 0,
      explanation: "Automated tools can verify the presence of alt attributes, but they can't judge whether the alt text is accurate, meaningful, or appropriate for the image's purpose. Manual review is required.",
      wrongExplanations: {
        1: "Passing automated checks is necessary but not sufficient for conformance.",
        2: "It might contain images with alt text; the tool passed the check, not the absence of images.",
        3: "A single passing SC says nothing about overall site conformance."
      },
      topicLinks: ['act-rules', 'automated-testing-tools', 'testing-fundamentals'],
      difficulty: 'medium',
      tags: ['testing', 'automated']
    },
    {
      id: 1171,
      question: "Roughly what fraction of WCAG issues can fully automated testing typically catch?",
      options: [
        "Estimates vary, but commonly cited figures are around 30–40 percent",
        "Close to 100 percent",
        "Less than 5 percent",
        "Exactly 75 percent according to WCAG 2.1"
      ],
      correct: 0,
      explanation: "Widely cited studies (e.g., from Deque) estimate that automated tools can detect around 30–40% of WCAG issues. The remainder requires manual and assistive-technology testing.",
      wrongExplanations: {
        1: "Full automation of WCAG testing is not possible.",
        2: "Automated tools catch far more than 5%.",
        3: "WCAG does not define a percentage."
      },
      topicLinks: ['automated-testing-tools', 'act-rules', 'testing-fundamentals'],
      difficulty: 'medium',
      tags: ['testing', 'automated']
    },
    {
      id: 1172,
      question: "Which type of issue is BEST suited for automated testing?",
      options: [
        "Detecting missing form labels, missing alt attributes, and insufficient color contrast on static text",
        "Judging whether link text accurately describes its destination",
        "Deciding if video captions are synchronized correctly",
        "Evaluating whether an error message is clear and helpful to users"
      ],
      correct: 0,
      explanation: "Automated tools excel at verifying deterministic DOM/CSS conditions: label associations, alt attribute presence, computed contrast ratios on known text/background pairs, and similar structural checks.",
      wrongExplanations: {
        1: "Judging meaning of link text requires human interpretation.",
        2: "Caption timing accuracy needs a human reviewer or specialized testing.",
        3: "Clarity and helpfulness of language are subjective judgments."
      },
      topicLinks: ['automated-testing-tools', 'act-rules'],
      difficulty: 'easy',
      tags: ['testing', 'automated']
    },
    {
      id: 1173,
      question: "Which of the following is a common guided manual testing tool that walks an evaluator through checks an automated tool cannot fully verify?",
      options: [
        "ARC Toolkit, WAVE's outline view, or axe DevTools' intelligent guided tests",
        "ESLint",
        "Webpack bundle analyzer",
        "Lighthouse's performance audit"
      ],
      correct: 0,
      explanation: "Tools like ARC Toolkit and axe DevTools include guided or 'intelligent' manual tests that help evaluators check items needing human judgment (e.g., heading hierarchy meaning, alt text accuracy).",
      wrongExplanations: {
        1: "ESLint is a JavaScript linter.",
        2: "Webpack bundle analyzer inspects JavaScript bundle composition.",
        3: "Lighthouse performance audits measure speed, not accessibility."
      },
      topicLinks: ['automated-testing-tools', 'testing-fundamentals'],
      difficulty: 'medium',
      tags: ['testing', 'tools']
    },
    {
      id: 1174,
      question: "An ACT Rule defines 'applicability' and 'expectations.' What do these terms mean?",
      options: [
        "Applicability identifies which elements the rule tests; expectations are the conditions those elements must meet to pass",
        "Applicability is the test's legal jurisdiction; expectations are its legal consequences",
        "Applicability is the browser support list; expectations are performance metrics",
        "Applicability is the tool vendor; expectations are the price"
      ],
      correct: 0,
      explanation: "ACT Rules use 'applicability' to define which elements the rule applies to and 'expectations' to define the pass/fail conditions. This structure makes rules deterministic and implementable across tools.",
      wrongExplanations: {
        1: "ACT is a technical framework, not a legal one.",
        2: "Browser support and performance are separate concerns.",
        3: "ACT has nothing to do with vendor pricing."
      },
      topicLinks: ['act-rules'],
      difficulty: 'hard',
      tags: ['act-rules']
    },
    // =============================================
    // ACCESSIBILITY QA LIFECYCLE (1175-1178)
    // =============================================
    {
      id: 1175,
      question: "What does 'shift-left' mean in the context of accessibility QA?",
      options: [
        "Moving accessibility considerations earlier in the development lifecycle — into design and coding — rather than testing only at the end",
        "Moving accessibility testing to the right side of the dev cycle to catch more bugs",
        "Shifting UI elements to the left of the screen for RTL languages",
        "Switching from manual to automated testing exclusively"
      ],
      correct: 0,
      explanation: "Shift-left means addressing accessibility during requirements, design, and development, not just at QA. Early consideration reduces rework and catches issues when they are cheapest to fix.",
      wrongExplanations: {
        1: "Shift-left moves activity earlier (left), not later.",
        2: "This is unrelated to RTL layout.",
        3: "Shift-left doesn't imply abandoning manual testing."
      },
      topicLinks: ['accessibility-qa-lifecycle'],
      difficulty: 'medium',
      tags: ['qa', 'lifecycle']
    },
    {
      id: 1176,
      question: "In an agile team, where is accessibility BEST integrated?",
      options: [
        "Woven throughout: accessibility acceptance criteria in user stories, a11y checks in PR reviews, and automated a11y tests in CI",
        "Done only once per quarter as a dedicated accessibility sprint",
        "Left to a separate audit team after the product launches",
        "Only considered during the design phase and never afterward"
      ],
      correct: 0,
      explanation: "Sustainable accessibility in agile means embedding it into definition of done, story acceptance criteria, peer reviews, and CI pipelines — so every story is delivered accessible rather than retrofitted.",
      wrongExplanations: {
        1: "Quarterly sprints leave accessibility debt building between cycles.",
        2: "Post-launch audits lead to costly rework.",
        3: "Design is important, but implementation and testing also need accessibility focus."
      },
      topicLinks: ['accessibility-qa-lifecycle'],
      difficulty: 'medium',
      tags: ['qa', 'agile']
    },
    {
      id: 1177,
      question: "A CI pipeline runs axe-core against every pull request and fails the build on new violations. Which limitation should the team still be aware of?",
      options: [
        "Automated tests catch only a portion of WCAG issues; manual testing and assistive technology testing are still required",
        "axe-core tests every WCAG success criterion completely",
        "CI-based testing eliminates the need for design reviews",
        "Failing builds on violations is a violation of WCAG"
      ],
      correct: 0,
      explanation: "CI automation is valuable as a gate against regressions, but it cannot replace manual testing, AT testing, or design review. Teams must combine automation with human evaluation.",
      wrongExplanations: {
        1: "No automated tool covers every SC.",
        2: "Design review remains critical for many SC.",
        3: "WCAG does not regulate build processes."
      },
      topicLinks: ['accessibility-qa-lifecycle', 'automated-testing-tools'],
      difficulty: 'medium',
      tags: ['qa', 'ci', 'automation']
    },
    {
      id: 1178,
      question: "Why is it important to include accessibility criteria in the team's definition of done?",
      options: [
        "So work isn't declared complete until it meets accessibility standards, preventing accessibility debt from accumulating",
        "Because WCAG explicitly requires a definition of done",
        "To help the legal team build a defense in court",
        "Because accessibility criteria speed up the release pipeline"
      ],
      correct: 0,
      explanation: "A shared definition of done that includes accessibility ensures stories aren't called complete while inaccessible. This is one of the most effective organizational practices for sustaining accessibility.",
      wrongExplanations: {
        1: "WCAG does not prescribe development processes.",
        2: "Legal defense is not the primary motivation.",
        3: "Including a11y criteria adds rigor rather than raw speed."
      },
      topicLinks: ['accessibility-qa-lifecycle'],
      difficulty: 'hard',
      tags: ['qa', 'process']
    },
    // =============================================
    // END-USER IMPACT TESTING (1179-1180)
    // =============================================
    {
      id: 1179,
      question: "What unique value does usability testing with people with disabilities provide over expert-based accessibility testing?",
      options: [
        "It reveals real-world barriers and workflow impacts that experts may miss, including cognitive load, AT-specific behavior, and the user's own strategies",
        "It replaces the need for WCAG conformance",
        "It is faster than automated testing",
        "It removes any need for manual auditing"
      ],
      correct: 0,
      explanation: "Usability testing with disabled users surfaces issues that conformance testing cannot — how real people with real AT setups actually experience the product, including frustration points and workarounds.",
      wrongExplanations: {
        1: "Usability testing complements, not replaces, conformance testing.",
        2: "User testing is typically slower than automation.",
        3: "Manual audits remain necessary."
      },
      topicLinks: ['disability-user-strategies', 'testing-fundamentals'],
      difficulty: 'medium',
      tags: ['user-testing']
    },
    {
      id: 1180,
      question: "Which is a best practice when conducting usability testing with people with disabilities?",
      options: [
        "Let participants use their own assistive technologies and personal settings — not a lab-standard setup",
        "Provide unfamiliar AT so all participants have an identical baseline",
        "Observe only passing behavior to keep the sessions short",
        "Run tests only with users of a single disability type to simplify analysis"
      ],
      correct: 0,
      explanation: "Participants should use their own AT and preferred settings, because that is how they will use the product in reality. Forcing unfamiliar tools introduces noise and does not reflect genuine user experience.",
      wrongExplanations: {
        1: "Unfamiliar AT produces artificial results.",
        2: "Observing failures and struggles is where the most learning happens.",
        3: "Testing with multiple disability groups yields richer insights."
      },
      topicLinks: ['disability-user-strategies'],
      difficulty: 'hard',
      tags: ['user-testing']
    }
  ]
};