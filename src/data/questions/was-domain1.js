export const wasDomain1 = {
  id: 'was-domain1',
  courseId: 'was',
  title: 'Creating Accessible Web Solutions',
  iconName: 'code',
  color: 'bg-indigo-600',
  description: 'WCAG, ARIA, progressive enhancement, SPAs, and building accessible UI components.',
  questions: [
    // =============================================
    // WCAG STRUCTURE & CONFORMANCE (1001-1010)
    // =============================================
    {
      id: 1001,
      question: "In WCAG's numbered structure, which principle do Success Criteria beginning with '2.x.x' belong to?",
      options: [
        "Perceivable",
        "Operable",
        "Understandable",
        "Robust"
      ],
      correct: 1,
      explanation: "WCAG organizes its guidelines under four principles numbered 1 through 4: 1.x.x = Perceivable, 2.x.x = Operable, 3.x.x = Understandable, and 4.x.x = Robust. So any SC starting with 2 falls under Operable.",
      wrongExplanations: {
        0: "Perceivable is Principle 1, so its success criteria begin with 1.x.x, not 2.x.x.",
        2: "Understandable is Principle 3, so its success criteria begin with 3.x.x, not 2.x.x.",
        3: "Robust is Principle 4, so its success criteria begin with 4.x.x, not 2.x.x."
      },
      topicLinks: ['wcag-overview'],
      difficulty: 'easy',
      tags: ['wcag-structure']
    },
    {
      id: 1002,
      question: "A Success Criterion numbered 3.2.1 belongs to which WCAG principle and guideline?",
      options: [
        "Principle 3 (Understandable), Guideline 3.2 (Predictable)",
        "Principle 3 (Understandable), Guideline 3.2 (Input Assistance)",
        "Principle 3 (Robust), Guideline 3.2 (Compatible)",
        "Principle 2 (Operable), Guideline 2.3 (Seizures)"
      ],
      correct: 0,
      explanation: "The numbering 3.2.1 means Principle 3 (Understandable), Guideline 3.2 (Predictable), SC 1 (On Focus). Guideline 3.2 addresses making web pages appear and operate in predictable ways.",
      wrongExplanations: {
        1: "Input Assistance is Guideline 3.3, not 3.2. Guideline 3.2 is Predictable.",
        2: "Robust is Principle 4, not Principle 3. And Compatible is Guideline 4.1.",
        3: "This SC starts with 3, not 2, so it cannot belong to the Operable principle."
      },
      topicLinks: ['wcag-overview', 'wcag-understandable'],
      difficulty: 'medium',
      tags: ['wcag-structure']
    },
    {
      id: 1003,
      question: "How do WCAG conformance levels A, AA, and AAA relate to each other?",
      options: [
        "They are independent sets — a page can conform to AAA without meeting A",
        "They are cumulative — AA includes all A criteria, and AAA includes all A and AA criteria",
        "They represent different disability types rather than levels of conformance",
        "AA replaces A criteria, and AAA replaces both A and AA criteria"
      ],
      correct: 1,
      explanation: "WCAG conformance levels are cumulative. To conform at Level AA, a page must satisfy all Level A and Level AA success criteria. To conform at Level AAA, it must satisfy all Level A, AA, and AAA success criteria.",
      wrongExplanations: {
        0: "The levels are not independent. You cannot claim AAA conformance without first meeting all A and AA criteria.",
        2: "Conformance levels represent increasing levels of accessibility support, not different disability categories.",
        3: "Higher levels do not replace lower levels — they add additional requirements on top of the lower-level criteria."
      },
      topicLinks: ['wcag-overview'],
      difficulty: 'easy',
      tags: ['wcag-conformance']
    },
    {
      id: 1004,
      question: "Which of the following is NOT one of the five WCAG conformance requirements?",
      options: [
        "Conformance is for full web pages only, not parts of pages",
        "Non-interference: non-conforming content must not block access to conforming content",
        "Only accessibility-supported technologies may be relied upon",
        "All content must achieve Level AAA conformance"
      ],
      correct: 3,
      explanation: "The five conformance requirements are: (1) conformance level met for full pages, (2) full pages including all parts, (3) complete processes, (4) only accessibility-supported ways of using technologies, and (5) non-interference. Requiring Level AAA for all content is NOT a conformance requirement — WCAG itself notes that AAA conformance is not recommended as a general policy.",
      wrongExplanations: {
        0: "This is a valid conformance requirement — WCAG conformance applies to full web pages, not partial pages.",
        1: "Non-interference is Conformance Requirement 5 — even non-conforming content must not block access to the rest of the page.",
        2: "This reflects Conformance Requirement 4 — only accessibility-supported technologies can be relied upon to satisfy success criteria."
      },
      topicLinks: ['wcag-overview'],
      difficulty: 'medium',
      tags: ['wcag-conformance']
    },
    {
      id: 1005,
      question: "What is the difference between sufficient techniques and advisory techniques in WCAG?",
      options: [
        "Sufficient techniques are mandatory; advisory techniques are optional enhancements",
        "Sufficient techniques, if implemented, satisfy a success criterion; advisory techniques go beyond what is required and can enhance accessibility",
        "Advisory techniques are required at Level AAA; sufficient techniques are required at Level A",
        "There is no practical difference — both terms describe the same concept"
      ],
      correct: 1,
      explanation: "Sufficient techniques are documented methods that, if implemented, meet a specific success criterion. Advisory techniques go beyond the requirements of a success criterion and can improve accessibility further, but are not required for conformance. Neither type is mandatory — success criteria can be met by any method, not only documented sufficient techniques.",
      wrongExplanations: {
        0: "Sufficient techniques are not mandatory — they are one way to meet a SC, but other methods may also satisfy it. The key distinction is that sufficient techniques are known to satisfy the SC.",
        2: "Technique types are not tied to conformance levels. Both sufficient and advisory techniques exist across all levels.",
        3: "There is a clear practical difference. Sufficient techniques satisfy a SC; advisory techniques enhance accessibility beyond what the SC requires."
      },
      topicLinks: ['wcag-overview'],
      difficulty: 'medium',
      tags: ['wcag-techniques']
    },
    {
      id: 1006,
      question: "WCAG 2.1 added success criteria primarily to address the needs of which user groups beyond those covered in WCAG 2.0?",
      options: [
        "Users with hearing disabilities and users of legacy browsers",
        "Users with cognitive disabilities, mobile device users, and users with low vision",
        "Users of screen readers and users with color blindness only",
        "Users of enterprise software and back-end system administrators"
      ],
      correct: 1,
      explanation: "WCAG 2.1 was specifically developed to improve coverage for three groups that were underrepresented in WCAG 2.0: users with cognitive or learning disabilities, users with low vision, and users with disabilities using mobile devices. Examples include SC 1.3.4 Orientation, SC 1.4.10 Reflow, and SC 2.5.1 Pointer Gestures.",
      wrongExplanations: {
        0: "WCAG 2.0 already addressed hearing disabilities extensively. Legacy browser support is not a focus of WCAG 2.1.",
        2: "Screen reader users and color blindness were well-addressed in WCAG 2.0. WCAG 2.1 broadened coverage to mobile, cognitive, and low-vision users.",
        3: "WCAG applies to web content for end users, not enterprise back-end systems or system administrator interfaces specifically."
      },
      topicLinks: ['wcag-overview'],
      difficulty: 'medium',
      tags: ['wcag-versions']
    },
    {
      id: 1007,
      question: "Which success criteria were introduced in WCAG 2.2 (not present in WCAG 2.1)?",
      options: [
        "SC 1.4.10 Reflow and SC 2.5.1 Pointer Gestures",
        "SC 3.2.6 Consistent Help, SC 3.3.7 Redundant Entry, and SC 2.4.13 Focus Appearance",
        "SC 4.1.1 Parsing and SC 4.1.2 Name, Role, Value",
        "SC 1.1.1 Non-Text Content and SC 2.1.1 Keyboard"
      ],
      correct: 1,
      explanation: "WCAG 2.2 introduced nine new success criteria including SC 3.2.6 Consistent Help (A), SC 3.3.7 Redundant Entry (A), SC 2.4.13 Focus Appearance (AA), SC 2.4.11 Focus Not Obscured (Minimum) (AA), SC 2.5.7 Dragging Movements (AA), SC 2.5.8 Target Size (Minimum) (AA), SC 3.3.8 Accessible Authentication (Minimum) (AA), and SC 3.3.9 Accessible Authentication (Enhanced) (AAA).",
      wrongExplanations: {
        0: "SC 1.4.10 Reflow and SC 2.5.1 Pointer Gestures were introduced in WCAG 2.1, not 2.2.",
        2: "SC 4.1.1 Parsing and SC 4.1.2 Name, Role, Value have existed since WCAG 2.0. In fact, SC 4.1.1 Parsing was removed (marked obsolete) in WCAG 2.2.",
        3: "SC 1.1.1 Non-Text Content and SC 2.1.1 Keyboard are original WCAG 2.0 criteria."
      },
      topicLinks: ['wcag-overview'],
      difficulty: 'hard',
      tags: ['wcag-versions']
    },
    {
      id: 1008,
      question: "According to WCAG conformance requirements, if a web page includes a multi-step checkout process, what must be true for the page to claim conformance?",
      options: [
        "Only the first page of the process needs to conform",
        "All pages in the complete process must conform at the claimed level",
        "At least 80% of the process steps must conform",
        "Only the pages that contain form inputs must conform"
      ],
      correct: 1,
      explanation: "Conformance Requirement 3 (Complete Processes) states that when a web page is part of a series of pages presenting a process, all pages in the process must conform at the specified level. A user cannot be blocked at any step.",
      wrongExplanations: {
        0: "Conformance Requirement 3 requires all pages in a process to conform, not just the first page.",
        2: "WCAG does not allow partial conformance based on percentages. All pages in a process must conform.",
        3: "Every page in the process must conform, not only those with form inputs."
      },
      topicLinks: ['wcag-overview'],
      difficulty: 'medium',
      tags: ['wcag-conformance']
    },
    {
      id: 1009,
      question: "What does the WCAG non-interference conformance requirement specifically address?",
      options: [
        "Ensuring conforming content does not interfere with other websites",
        "Content that uses non-accessibility-supported technology must not block users from accessing the rest of the conforming page",
        "Preventing screen readers from interfering with visual rendering",
        "Ensuring that JavaScript does not conflict with CSS"
      ],
      correct: 1,
      explanation: "Conformance Requirement 5 (Non-Interference) requires that even when non-conforming or non-accessibility-supported content is present on a page, it must not interfere with users' ability to access the rest of the page. Specifically, it must not cause flashing, trap the keyboard, or prevent access to other content.",
      wrongExplanations: {
        0: "Non-interference applies within a single page, not between different websites.",
        2: "This requirement is about non-conforming content not blocking access, not about screen reader rendering interactions.",
        3: "Non-interference is an accessibility conformance concept, not about JavaScript and CSS technical conflicts."
      },
      topicLinks: ['wcag-overview'],
      difficulty: 'medium',
      tags: ['wcag-conformance']
    },
    {
      id: 1010,
      question: "In WCAG 2.2, what happened to SC 4.1.1 Parsing?",
      options: [
        "It was elevated from Level A to Level AA",
        "It was removed (marked obsolete) because modern browsers and assistive technologies handle parsing errors",
        "It was moved from Robust to Perceivable",
        "It was split into two separate success criteria"
      ],
      correct: 1,
      explanation: "WCAG 2.2 marked SC 4.1.1 Parsing as obsolete and removed it. The rationale is that modern browsers and assistive technologies have become much better at handling markup parsing errors, making this criterion no longer necessary for accessibility.",
      wrongExplanations: {
        0: "SC 4.1.1 was not elevated to a higher level — it was removed entirely from WCAG 2.2.",
        2: "SC 4.1.1 was not moved to a different principle — it was deprecated and removed.",
        3: "SC 4.1.1 was not split — it was simply removed from the standard."
      },
      topicLinks: ['wcag-overview', 'wcag-robust'],
      difficulty: 'medium',
      tags: ['wcag-versions']
    },

    // =============================================
    // PERCEIVABLE — TECHNICAL (1011-1025)
    // =============================================
    {
      id: 1011,
      question: "Under SC 1.1.1 Non-Text Content (Level A), what is the alt text requirement for a decorative image that conveys no information?",
      options: [
        "The alt attribute should describe the image file name",
        "The alt attribute must be present but empty (alt=\"\")",
        "The alt attribute should be omitted entirely",
        "The alt attribute should say 'decorative image'"
      ],
      correct: 1,
      explanation: "SC 1.1.1 requires that decorative images — those that serve no informational purpose — be implemented so assistive technologies can ignore them. The standard technique is to provide an empty alt attribute (alt=\"\"), which signals to screen readers that the image should be skipped.",
      wrongExplanations: {
        0: "Using the file name as alt text provides no useful information and would cause screen readers to announce meaningless content for a decorative image.",
        2: "Omitting the alt attribute entirely causes many screen readers to announce the file name or URL, which is worse than an empty alt.",
        3: "Saying 'decorative image' forces screen readers to announce unnecessary text, defeating the purpose of marking the image as decorative."
      },
      topicLinks: ['wcag-perceivable'],
      difficulty: 'easy',
      tags: ['wcag-perceivable', 'non-text-content']
    },
    {
      id: 1012,
      question: "SC 1.1.1 Non-Text Content requires text alternatives for all non-text content EXCEPT in certain situations. Which of the following is NOT an exception listed in SC 1.1.1?",
      options: [
        "CAPTCHA images (which must provide alternative forms)",
        "Purely decorative content",
        "Content used as a sensory experience (like an abstract painting)",
        "Images within a navigation menu"
      ],
      correct: 3,
      explanation: "SC 1.1.1 lists specific exceptions including controls/input, time-based media, tests, sensory experiences, CAPTCHA, and decoration/formatting/invisible content. Images within navigation menus are NOT exempt — they still require meaningful text alternatives that describe their purpose or destination.",
      wrongExplanations: {
        0: "CAPTCHA is a recognized exception in SC 1.1.1, though it must include text identifying the CAPTCHA and alternative forms for different disabilities.",
        1: "Purely decorative content is an explicit exception in SC 1.1.1, requiring only that it be implemented so assistive technologies ignore it.",
        2: "Content that is primarily a sensory experience is an exception, requiring only that the text alternative provide descriptive identification."
      },
      topicLinks: ['wcag-perceivable'],
      difficulty: 'medium',
      tags: ['wcag-perceivable', 'non-text-content']
    },
    {
      id: 1013,
      question: "What does SC 1.2.1 (Level A) require for prerecorded audio-only content such as a podcast?",
      options: [
        "Captions must be provided",
        "A text transcript that provides equivalent information must be provided",
        "Sign language interpretation must be provided",
        "Audio description must be provided"
      ],
      correct: 1,
      explanation: "SC 1.2.1 (Audio-only and Video-only — Prerecorded) requires that for prerecorded audio-only content, an alternative for time-based media is provided — which is a text transcript presenting equivalent information. Captions apply to synchronized audio+video, not audio-only.",
      wrongExplanations: {
        0: "Captions are synchronized text for audio in video content. For audio-only content like podcasts, a transcript is required, not captions.",
        2: "Sign language interpretation (SC 1.2.6) is a Level AAA requirement for prerecorded synchronized media, not a Level A requirement for audio-only content.",
        3: "Audio descriptions provide narration of visual content in videos. They are not applicable to audio-only content where there is no visual component."
      },
      topicLinks: ['wcag-perceivable'],
      difficulty: 'medium',
      tags: ['wcag-perceivable', 'time-based-media']
    },
    {
      id: 1014,
      question: "Which WCAG success criterion requires captions for prerecorded synchronized video content at Level A?",
      options: [
        "SC 1.2.1 Audio-only and Video-only",
        "SC 1.2.2 Captions (Prerecorded)",
        "SC 1.2.4 Captions (Live)",
        "SC 1.2.5 Audio Description (Prerecorded)"
      ],
      correct: 1,
      explanation: "SC 1.2.2 Captions (Prerecorded) is the Level A criterion that requires captions for all prerecorded audio content in synchronized media (video with audio). This ensures deaf and hard-of-hearing users can access the audio information.",
      wrongExplanations: {
        0: "SC 1.2.1 covers audio-only and video-only content (not synchronized media), requiring transcripts for audio-only and either a transcript or audio description for video-only.",
        2: "SC 1.2.4 Captions (Live) is a Level AA criterion that applies to live synchronized media, not prerecorded content.",
        3: "SC 1.2.5 Audio Description (Prerecorded) is a Level AA criterion requiring audio descriptions for video content, not captions."
      },
      topicLinks: ['wcag-perceivable'],
      difficulty: 'easy',
      tags: ['wcag-perceivable', 'time-based-media']
    },
    {
      id: 1015,
      question: "SC 1.2.3 Audio Description or Media Alternative (Prerecorded) is Level A. What does it require?",
      options: [
        "Either an audio description track OR a full text alternative describing the video content",
        "Only an audio description track — no other alternative is acceptable",
        "Only captions for the dialogue in the video",
        "A sign language interpreter overlay on the video"
      ],
      correct: 0,
      explanation: "SC 1.2.3 (Level A) offers a choice: provide either an audio description of the visual content OR a complete text alternative (such as a screenplay-like transcript) that describes both the visual and auditory information. This flexibility allows content creators to choose the most appropriate method.",
      wrongExplanations: {
        1: "SC 1.2.3 explicitly allows a media alternative (full text description) as an option, not just audio descriptions. SC 1.2.5 (Level AA) specifically requires audio descriptions.",
        2: "Captions for dialogue are covered by SC 1.2.2. SC 1.2.3 specifically addresses making the visual content accessible to those who cannot see it.",
        3: "Sign language interpretation is addressed in SC 1.2.6 (Level AAA), not SC 1.2.3."
      },
      topicLinks: ['wcag-perceivable'],
      difficulty: 'medium',
      tags: ['wcag-perceivable', 'time-based-media']
    },
    {
      id: 1016,
      question: "SC 1.3.1 Info and Relationships (Level A) requires that information conveyed through visual presentation is also available how?",
      options: [
        "Through color alone",
        "Through programmatically determined structure or text alternatives",
        "Through larger font sizes only",
        "Through animation and motion cues"
      ],
      correct: 1,
      explanation: "SC 1.3.1 requires that information, structure, and relationships conveyed through presentation (such as visual formatting, layout, or styling) can be programmatically determined or are available in text. For example, headings must use proper heading elements (<h1>-<h6>), not just bold large text.",
      wrongExplanations: {
        0: "Using color alone to convey information actually violates SC 1.4.1 Use of Color. SC 1.3.1 requires programmatic or text-based structure.",
        2: "Larger font sizes are a visual presentation method, not a programmatic one. SC 1.3.1 requires that the underlying structure is machine-readable.",
        3: "Animation and motion are visual presentation techniques that are not programmatically determinable by assistive technologies for conveying structural relationships."
      },
      topicLinks: ['wcag-perceivable'],
      difficulty: 'easy',
      tags: ['wcag-perceivable', 'info-relationships']
    },
    {
      id: 1017,
      question: "A data table uses visual spacing and bold text to indicate header cells but does not use <th> elements or scope attributes. Which SC does this primarily violate?",
      options: [
        "SC 1.4.1 Use of Color",
        "SC 1.3.1 Info and Relationships",
        "SC 2.4.6 Headings and Labels",
        "SC 4.1.2 Name, Role, Value"
      ],
      correct: 1,
      explanation: "SC 1.3.1 Info and Relationships requires that relationships conveyed visually (like table headers indicated by bold text) are also available programmatically. Using <th> elements and scope attributes makes the header-to-data-cell relationship machine-readable for assistive technologies.",
      wrongExplanations: {
        0: "SC 1.4.1 Use of Color addresses using color as the sole means of conveying information. Bold text and spacing are not color-based distinctions.",
        2: "SC 2.4.6 Headings and Labels (Level AA) is about headings and labels being descriptive, not about programmatic markup of table headers.",
        3: "SC 4.1.2 Name, Role, Value applies to UI components (form fields, custom widgets), not to data table header markup."
      },
      topicLinks: ['wcag-perceivable'],
      difficulty: 'medium',
      tags: ['wcag-perceivable', 'info-relationships']
    },
    {
      id: 1018,
      question: "SC 1.3.2 Meaningful Sequence (Level A) requires that when the sequence of content affects its meaning, what must be true?",
      options: [
        "Content must always be displayed in a single column layout",
        "A correct reading sequence can be programmatically determined",
        "Content must be read aloud by the browser natively",
        "All content must be ordered alphabetically"
      ],
      correct: 1,
      explanation: "SC 1.3.2 requires that when the reading order matters for understanding content, the correct sequence can be programmatically determined. This means the DOM order must reflect the meaningful reading order, so assistive technologies can present content in the intended sequence.",
      wrongExplanations: {
        0: "Single-column layout is not required. Multi-column layouts are fine as long as the underlying DOM order reflects the meaningful reading sequence.",
        2: "SC 1.3.2 does not require native browser read-aloud. It requires that the sequence is determinable by assistive technologies through the underlying structure.",
        3: "Alphabetical ordering is unrelated. SC 1.3.2 is about preserving the author's intended meaningful sequence, whatever that may be."
      },
      topicLinks: ['wcag-perceivable'],
      difficulty: 'medium',
      tags: ['wcag-perceivable', 'meaningful-sequence']
    },
    {
      id: 1019,
      question: "SC 1.4.1 Use of Color (Level A) states that color must not be used as the sole visual means of conveying information. Which of the following is a compliant approach for indicating required form fields?",
      options: [
        "Making required field labels red and providing no other indicator",
        "Using a red label color AND an asterisk (*) with a text note explaining the asterisk",
        "Only changing the background color of required fields to yellow",
        "Using a different font color for required vs optional fields with no additional cue"
      ],
      correct: 1,
      explanation: "SC 1.4.1 requires that color is not the only visual means of conveying information. Using red color AND an asterisk with an explanatory note provides both a color cue and a non-color visual indicator, satisfying the requirement.",
      wrongExplanations: {
        0: "Red labels alone rely solely on color to identify required fields, violating SC 1.4.1 because color-blind users may not perceive the difference.",
        2: "Changing only the background color still relies solely on color to distinguish required fields, violating SC 1.4.1.",
        3: "Using only different font colors with no other cue is still relying solely on color, violating SC 1.4.1."
      },
      topicLinks: ['wcag-perceivable'],
      difficulty: 'easy',
      tags: ['wcag-perceivable', 'use-of-color']
    },
    {
      id: 1020,
      question: "What is the minimum contrast ratio for normal-sized text required by SC 1.4.3 Contrast (Minimum) at Level AA?",
      options: [
        "3:1",
        "4.5:1",
        "7:1",
        "2:1"
      ],
      correct: 1,
      explanation: "SC 1.4.3 Contrast (Minimum) requires a contrast ratio of at least 4.5:1 for normal text at Level AA. Large text (at least 18pt or 14pt bold) has a reduced requirement of 3:1.",
      wrongExplanations: {
        0: "3:1 is the minimum contrast ratio for large text (18pt / 14pt bold) under SC 1.4.3, not for normal-sized text.",
        2: "7:1 is the enhanced contrast ratio required by SC 1.4.6 Contrast (Enhanced) at Level AAA, not the Level AA minimum.",
        3: "2:1 is not a threshold defined in any WCAG success criterion for text contrast."
      },
      topicLinks: ['wcag-perceivable'],
      difficulty: 'easy',
      tags: ['wcag-perceivable', 'contrast']
    },
    {
      id: 1021,
      question: "Under SC 1.4.3 Contrast (Minimum), what is the definition of 'large text' that qualifies for the reduced 3:1 contrast ratio?",
      options: [
        "Any text above 16px",
        "Text that is at least 18 point (24px) or 14 point bold (approximately 18.66px bold)",
        "Text that is at least 24 point or 20 point bold",
        "Any text rendered with a heading element (<h1>-<h6>)"
      ],
      correct: 1,
      explanation: "WCAG defines large text as at least 18 point (approximately 24 CSS pixels) or at least 14 point bold (approximately 18.66 CSS pixels). This large text qualifies for the reduced 3:1 contrast ratio instead of the standard 4.5:1.",
      wrongExplanations: {
        0: "16px is the common browser default for body text and does not qualify as large text under WCAG. The threshold is 18pt (about 24px) or 14pt bold.",
        2: "These values are too high. WCAG's large text threshold is 18pt or 14pt bold, not 24pt or 20pt bold.",
        3: "Large text is defined by font size, not by the HTML element used. A heading could use small text, and body text could be large."
      },
      topicLinks: ['wcag-perceivable'],
      difficulty: 'medium',
      tags: ['wcag-perceivable', 'contrast']
    },
    {
      id: 1022,
      question: "SC 1.4.4 Resize Text (Level AA) requires that text can be resized up to what percentage without loss of content or functionality?",
      options: [
        "150% without assistive technology",
        "200% without assistive technology",
        "400% without assistive technology",
        "200% with assistive technology required"
      ],
      correct: 1,
      explanation: "SC 1.4.4 requires that text can be resized up to 200% without assistive technology and without loss of content or functionality. This ensures users with low vision can enlarge text using standard browser controls.",
      wrongExplanations: {
        0: "150% is not the threshold defined in SC 1.4.4. The requirement is 200%.",
        2: "400% (1280 CSS pixels wide at 320 CSS pixels) relates to SC 1.4.10 Reflow, not SC 1.4.4 Resize Text.",
        3: "SC 1.4.4 specifically requires resizing without assistive technology — using standard browser zoom or text-size controls."
      },
      topicLinks: ['wcag-perceivable'],
      difficulty: 'easy',
      tags: ['wcag-perceivable', 'resize-text']
    },
    {
      id: 1023,
      question: "SC 1.4.10 Reflow (Level AA, added in WCAG 2.1) requires content to reflow without two-dimensional scrolling at what width for vertical scrolling content?",
      options: [
        "At a width of 240 CSS pixels",
        "At a width of 320 CSS pixels (equivalent to 1280px at 400% zoom)",
        "At a width of 480 CSS pixels (equivalent to 1920px at 400% zoom)",
        "At a width of 160 CSS pixels (equivalent to 640px at 400% zoom)"
      ],
      correct: 1,
      explanation: "SC 1.4.10 Reflow requires that for vertical scrolling content, content can be presented at a width of 320 CSS pixels without horizontal scrolling. This is equivalent to viewing a 1280px-wide page at 400% zoom. The goal is that users with low vision can zoom in significantly without needing to scroll horizontally.",
      wrongExplanations: {
        0: "240 CSS pixels is not the threshold in SC 1.4.10. The requirement is 320 CSS pixels wide for vertical scrolling content.",
        2: "480 CSS pixels is too wide. The requirement is 320 CSS pixels, which corresponds to 1280px at 400% zoom, not 1920px.",
        3: "160 CSS pixels is too narrow and does not correspond to any WCAG requirement."
      },
      topicLinks: ['wcag-perceivable'],
      difficulty: 'medium',
      tags: ['wcag-perceivable', 'reflow']
    },
    {
      id: 1024,
      question: "SC 1.4.11 Non-text Contrast (Level AA, WCAG 2.1) requires a minimum contrast ratio of 3:1 for which of the following?",
      options: [
        "Normal body text against its background",
        "User interface components (like form field borders) and graphical objects needed to understand the content",
        "Only decorative graphics and illustrations",
        "Background colors of adjacent page sections"
      ],
      correct: 1,
      explanation: "SC 1.4.11 requires a contrast ratio of at least 3:1 for the visual presentation of user interface components (such as form input borders, buttons, focus indicators) and parts of graphical objects that are needed to understand the content. This ensures that UI controls and meaningful graphics are perceivable.",
      wrongExplanations: {
        0: "Body text contrast is covered by SC 1.4.3 (4.5:1 for normal text), not SC 1.4.11, which specifically addresses non-text elements.",
        2: "SC 1.4.11 applies to meaningful graphical objects and UI components, not decorative graphics. Decorative elements are exempt.",
        3: "Adjacent section background colors are not specifically addressed by SC 1.4.11, which focuses on UI components and meaningful graphical content."
      },
      topicLinks: ['wcag-perceivable'],
      difficulty: 'medium',
      tags: ['wcag-perceivable', 'non-text-contrast']
    },
    {
      id: 1025,
      question: "A website has a chart where different data series are distinguished only by color (red line vs. blue line vs. green line) with no other visual differentiator. Which success criteria does this violate?",
      options: [
        "SC 1.4.3 Contrast (Minimum) only",
        "SC 1.4.1 Use of Color and potentially SC 1.1.1 Non-Text Content",
        "SC 1.3.2 Meaningful Sequence only",
        "SC 2.4.4 Link Purpose only"
      ],
      correct: 1,
      explanation: "This violates SC 1.4.1 Use of Color because color is the sole means of distinguishing the data series. It may also violate SC 1.1.1 Non-Text Content if the chart (as a non-text image) lacks an adequate text alternative describing the data. Using patterns, labels, or different line styles alongside color would help resolve the SC 1.4.1 issue.",
      wrongExplanations: {
        0: "SC 1.4.3 addresses contrast ratios between text and background, not using color as the sole differentiator between data series.",
        2: "SC 1.3.2 Meaningful Sequence is about reading order, not about using color to distinguish information in a chart.",
        3: "SC 2.4.4 Link Purpose is about link text being understandable, which is unrelated to chart data series colors."
      },
      topicLinks: ['wcag-perceivable'],
      difficulty: 'medium',
      tags: ['wcag-perceivable', 'use-of-color']
    },

    // =============================================
    // OPERABLE — TECHNICAL (1026-1038)
    // =============================================
    {
      id: 1026,
      question: "SC 2.1.1 Keyboard (Level A) requires that all functionality is operable through a keyboard interface. Which of the following is an exception?",
      options: [
        "Navigation menus with dropdown submenus",
        "Functionality that requires input dependent on the path of the user's movement (not just endpoints), such as freehand drawing",
        "Form submission buttons",
        "Interactive data tables with sortable columns"
      ],
      correct: 1,
      explanation: "SC 2.1.1 has an exception for functionality where the underlying function requires input that depends on the path of the user's movement, not just the endpoints. Freehand drawing is a classic example — the path of movement is essential to the function and cannot be replicated with keyboard endpoints alone.",
      wrongExplanations: {
        0: "Dropdown navigation menus must be keyboard accessible. They do not require path-dependent input.",
        2: "Form submission buttons are standard UI controls that must be keyboard operable. No exception applies.",
        3: "Sortable columns in data tables must be keyboard accessible. Column sorting is an endpoint-based action, not path-dependent."
      },
      topicLinks: ['wcag-operable'],
      difficulty: 'medium',
      tags: ['wcag-operable', 'keyboard']
    },
    {
      id: 1027,
      question: "What does SC 2.1.2 No Keyboard Trap (Level A) require?",
      options: [
        "Keyboard users must be able to navigate away from any component using standard navigation keys, or be informed of the method to move focus",
        "Keyboard users must never encounter focus within modal dialogs",
        "All keyboard shortcuts must be single-key only",
        "The Tab key must always move focus forward in DOM order without exception"
      ],
      correct: 0,
      explanation: "SC 2.1.2 requires that if keyboard focus can be moved to a component using a keyboard interface, focus can also be moved away from that component using only a keyboard interface. If non-standard keys are needed, the user must be advised of the method.",
      wrongExplanations: {
        1: "Modal dialogs may intentionally trap focus within themselves (focus containment), which is actually a best practice. The key requirement is that the user can exit the modal (e.g., with Escape), not that focus never enters it.",
        2: "SC 2.1.2 does not address keyboard shortcut complexity. Single-key shortcuts are addressed by SC 2.1.4 Character Key Shortcuts.",
        3: "Tab order does not have to follow DOM order strictly, and focus management in complex widgets may use arrow keys. SC 2.1.2 is about preventing inescapable keyboard traps."
      },
      topicLinks: ['wcag-operable'],
      difficulty: 'easy',
      tags: ['wcag-operable', 'keyboard']
    },
    {
      id: 1028,
      question: "SC 2.2.1 Timing Adjustable (Level A) applies when content has a time limit. Which of the following is NOT one of the options that must be provided to the user?",
      options: [
        "Turn off the time limit before encountering it",
        "Adjust the time limit to at least 10 times the default",
        "Extend the time limit with a simple action, warned at least 20 seconds before expiration",
        "Replace the timed content with a static version automatically"
      ],
      correct: 3,
      explanation: "SC 2.2.1 requires that for each time limit, at least one of the following is true: the user can turn it off, adjust it (to at least 10x the default), or extend it (with a warning at least 20 seconds before expiration allowing extension via simple action at least 10 times). Automatically replacing timed content with a static version is not one of the specified options.",
      wrongExplanations: {
        0: "Allowing the user to turn off the time limit before encountering it is one of the three valid options under SC 2.2.1.",
        1: "Allowing the user to adjust the time limit to at least 10 times the default length is one of the three valid options.",
        2: "Providing a warning at least 20 seconds before expiration and allowing extension via a simple action is one of the three valid options."
      },
      topicLinks: ['wcag-operable'],
      difficulty: 'hard',
      tags: ['wcag-operable', 'timing']
    },
    {
      id: 1029,
      question: "SC 2.3.1 Three Flashes or Below Threshold (Level A) sets a threshold for flashing content. What is the maximum allowed flash frequency?",
      options: [
        "No more than 1 flash per second",
        "No more than 3 flashes per second",
        "No more than 5 flashes per second",
        "No more than 10 flashes per second"
      ],
      correct: 1,
      explanation: "SC 2.3.1 requires that web pages do not contain anything that flashes more than three times in any one-second period, or the flash is below the general flash and red flash thresholds. This protects users with photosensitive epilepsy.",
      wrongExplanations: {
        0: "One flash per second is more restrictive than what SC 2.3.1 requires. The threshold is three flashes per second.",
        2: "Five flashes per second exceeds the SC 2.3.1 threshold of three flashes per second and could trigger seizures.",
        3: "Ten flashes per second far exceeds the safe threshold and would be extremely dangerous for users with photosensitive epilepsy."
      },
      topicLinks: ['wcag-operable'],
      difficulty: 'easy',
      tags: ['wcag-operable', 'seizures']
    },
    {
      id: 1030,
      question: "SC 2.4.1 Bypass Blocks (Level A) requires a mechanism to bypass blocks of content repeated across pages. Which is the MOST common technique?",
      options: [
        "Using a different color scheme for navigation",
        "Providing a 'skip to main content' link at the top of the page",
        "Removing all navigation from every page",
        "Loading navigation content via AJAX after the main content"
      ],
      correct: 1,
      explanation: "The most common technique for satisfying SC 2.4.1 is a 'skip navigation' or 'skip to main content' link at the beginning of the page that allows keyboard and screen reader users to jump past repeated navigation blocks directly to the main content area.",
      wrongExplanations: {
        0: "Changing the navigation color scheme does not provide a mechanism to skip past repeated content blocks.",
        2: "Removing all navigation would impair usability for everyone. SC 2.4.1 asks for a bypass mechanism, not removal of navigation.",
        3: "While lazy-loading navigation might change the DOM order, this is not a standard technique for SC 2.4.1 and could create other accessibility issues."
      },
      topicLinks: ['wcag-operable'],
      difficulty: 'easy',
      tags: ['wcag-operable', 'bypass-blocks']
    },
    {
      id: 1031,
      question: "SC 2.4.4 Link Purpose (In Context) at Level A requires that the purpose of each link can be determined from what?",
      options: [
        "The link URL alone",
        "The link text alone, or the link text together with its programmatically determined context",
        "Only the visual position of the link on the page",
        "A tooltip that appears on hover only"
      ],
      correct: 1,
      explanation: "SC 2.4.4 requires that the purpose of each link can be determined from the link text alone, or from the link text together with its programmatically determinable context (such as the enclosing sentence, paragraph, list item, table cell, or associated heading). This helps users understand where a link will take them.",
      wrongExplanations: {
        0: "The URL alone is not sufficient — many URLs are cryptic. SC 2.4.4 focuses on the link text and its programmatic context.",
        2: "Visual position is not programmatically determinable context. Screen reader users cannot determine link purpose from visual layout.",
        3: "Tooltips on hover are not accessible to keyboard-only users or screen reader users in many cases, and are not considered programmatically determined context."
      },
      topicLinks: ['wcag-operable'],
      difficulty: 'easy',
      tags: ['wcag-operable', 'link-purpose']
    },
    {
      id: 1032,
      question: "A page has multiple 'Read more' links that each go to different articles, with no programmatic context distinguishing them. Which SC is primarily violated?",
      options: [
        "SC 1.3.1 Info and Relationships",
        "SC 2.4.4 Link Purpose (In Context)",
        "SC 3.2.4 Consistent Identification",
        "SC 4.1.2 Name, Role, Value"
      ],
      correct: 1,
      explanation: "Multiple ambiguous 'Read more' links with no programmatic context violate SC 2.4.4 Link Purpose (In Context). Each link has identical text and no surrounding programmatic context to differentiate them, making it impossible for assistive technology users to determine where each link leads.",
      wrongExplanations: {
        0: "SC 1.3.1 Info and Relationships is about structure and relationships being programmatically determinable, not specifically about link purpose.",
        2: "SC 3.2.4 Consistent Identification requires that components with the same functionality are identified consistently — but these links go to different destinations, so they have different functions.",
        3: "SC 4.1.2 Name, Role, Value applies to custom UI components. Standard links already have the correct role; the issue is that the accessible name is ambiguous."
      },
      topicLinks: ['wcag-operable'],
      difficulty: 'medium',
      tags: ['wcag-operable', 'link-purpose']
    },
    {
      id: 1033,
      question: "SC 2.4.7 Focus Visible (Level AA) requires what for keyboard navigation?",
      options: [
        "Focus indicators must always be blue outlines",
        "Any keyboard-operable user interface has a mode of operation where the keyboard focus indicator is visible",
        "Focus must never move from the currently active element",
        "Focus indicators must be hidden until the user presses a specific key"
      ],
      correct: 1,
      explanation: "SC 2.4.7 requires that when any user interface component receives keyboard focus, there is a visible indication of focus. This allows keyboard users to track where they are on the page. The focus indicator style is not prescribed — it just must be visible.",
      wrongExplanations: {
        0: "WCAG does not prescribe the color or style of the focus indicator. It only requires that the indicator is visible when an element has focus.",
        2: "Focus must move as the user navigates. SC 2.4.7 requires that the focus position is visually apparent, not that focus remains static.",
        3: "The focus indicator should be visible whenever an element receives keyboard focus. Hiding it by default undermines keyboard accessibility."
      },
      topicLinks: ['wcag-operable'],
      difficulty: 'easy',
      tags: ['wcag-operable', 'focus-visible']
    },
    {
      id: 1034,
      question: "SC 2.5.1 Pointer Gestures (Level A, WCAG 2.1) requires that for multipoint or path-based gestures, what alternative must be available?",
      options: [
        "Voice control as a fallback",
        "A single-pointer alternative without path-based gestures, unless the multipoint/path-based gesture is essential",
        "Keyboard-only alternative with no pointer support",
        "A tutorial explaining how to perform the gesture"
      ],
      correct: 1,
      explanation: "SC 2.5.1 requires that all functionality that uses multipoint or path-based gestures can also be operated with a single pointer without a path-based gesture, unless the multipoint/path gesture is essential. For example, a pinch-to-zoom map must also offer +/- buttons.",
      wrongExplanations: {
        0: "SC 2.5.1 specifically addresses pointer gesture alternatives, not voice control. Voice control is not required as an alternative.",
        2: "SC 2.5.1 is about providing single-pointer alternatives for multipoint gestures. Keyboard alternatives are covered by SC 2.1.1.",
        3: "A tutorial does not satisfy the requirement. Users who cannot perform the gesture need an alternative input method, not instructions."
      },
      topicLinks: ['wcag-operable'],
      difficulty: 'medium',
      tags: ['wcag-operable', 'pointer-gestures']
    },
    {
      id: 1035,
      question: "In WCAG 2.2, SC 2.5.8 Target Size (Minimum) at Level AA requires interactive targets to be at least what size?",
      options: [
        "44 × 44 CSS pixels",
        "24 × 24 CSS pixels",
        "48 × 48 CSS pixels",
        "36 × 36 CSS pixels"
      ],
      correct: 1,
      explanation: "SC 2.5.8 Target Size (Minimum), introduced in WCAG 2.2 at Level AA, requires that targets are at least 24 × 24 CSS pixels, or have sufficient spacing so the target offset is at least 24 CSS pixels from other targets. The larger 44 × 44 CSS pixel size is from SC 2.5.5 Target Size (Enhanced) at Level AAA.",
      wrongExplanations: {
        0: "44 × 44 CSS pixels is the requirement for SC 2.5.5 Target Size (Enhanced) at Level AAA, not the Level AA minimum in WCAG 2.2.",
        2: "48 × 48 CSS pixels is not a WCAG-defined threshold. The relevant sizes are 24 × 24 (AA) and 44 × 44 (AAA).",
        3: "36 × 36 CSS pixels is not a WCAG-defined threshold for target size."
      },
      topicLinks: ['wcag-operable'],
      difficulty: 'hard',
      tags: ['wcag-operable', 'target-size']
    },
    {
      id: 1036,
      question: "SC 2.5.5 Target Size (Enhanced) at Level AAA requires interactive targets to be at least what size?",
      options: [
        "24 × 24 CSS pixels",
        "36 × 36 CSS pixels",
        "44 × 44 CSS pixels",
        "56 × 56 CSS pixels"
      ],
      correct: 2,
      explanation: "SC 2.5.5 Target Size (Enhanced) at Level AAA requires that the size of the target for pointer inputs is at least 44 × 44 CSS pixels. This is more stringent than the WCAG 2.2 Level AA requirement of 24 × 24 CSS pixels under SC 2.5.8.",
      wrongExplanations: {
        0: "24 × 24 CSS pixels is the Level AA minimum from SC 2.5.8 Target Size (Minimum) in WCAG 2.2, not the AAA enhanced requirement.",
        1: "36 × 36 CSS pixels is not a threshold defined in any WCAG target size criterion.",
        3: "56 × 56 CSS pixels exceeds the WCAG AAA requirement. While larger targets are beneficial, the AAA threshold is 44 × 44 CSS pixels."
      },
      topicLinks: ['wcag-operable'],
      difficulty: 'medium',
      tags: ['wcag-operable', 'target-size']
    },
    {
      id: 1037,
      question: "A modal dialog opens and keyboard focus remains on the button that triggered it, behind the overlay. The user must press Tab many times to reach the dialog content. Which SC is this MOST likely to violate?",
      options: [
        "SC 2.4.3 Focus Order",
        "SC 1.3.2 Meaningful Sequence",
        "SC 3.2.1 On Focus",
        "SC 4.1.1 Parsing"
      ],
      correct: 0,
      explanation: "SC 2.4.3 Focus Order (Level A) requires that when components receive focus in sequence, the focus order preserves meaning and operability. When a modal dialog opens, focus should move to the dialog so keyboard users can interact with it immediately. Leaving focus behind the overlay disrupts the logical focus order.",
      wrongExplanations: {
        1: "SC 1.3.2 Meaningful Sequence is about the reading order of content in the DOM, not about keyboard focus management when dialogs open.",
        2: "SC 3.2.1 On Focus is about unexpected context changes when an element receives focus. The dialog was triggered by a button activation, not by focus alone.",
        3: "SC 4.1.1 Parsing was about HTML validity and has been removed in WCAG 2.2. It is unrelated to focus management."
      },
      topicLinks: ['wcag-operable'],
      difficulty: 'medium',
      tags: ['wcag-operable', 'focus-order']
    },
    {
      id: 1038,
      question: "SC 2.4.11 Focus Not Obscured (Minimum), introduced in WCAG 2.2 at Level AA, requires what?",
      options: [
        "The focus indicator must be at least 3 CSS pixels thick",
        "When a user interface component receives keyboard focus, it is not entirely hidden by author-created content",
        "Focus must always be visible with a contrast ratio of at least 4.5:1",
        "The focused element must always be centered in the viewport"
      ],
      correct: 1,
      explanation: "SC 2.4.11 Focus Not Obscured (Minimum) requires that when a component receives keyboard focus, it is not entirely hidden by other author-created content such as sticky headers, footers, or overlapping panels. At least part of the focused element must be visible.",
      wrongExplanations: {
        0: "Focus indicator thickness is addressed in SC 2.4.13 Focus Appearance (also WCAG 2.2), not in SC 2.4.11.",
        2: "Specific contrast ratios for the focus indicator are part of SC 2.4.13 Focus Appearance, not SC 2.4.11 Focus Not Obscured.",
        3: "SC 2.4.11 only requires the focused element not be entirely hidden. It does not require centering the element in the viewport."
      },
      topicLinks: ['wcag-operable'],
      difficulty: 'hard',
      tags: ['wcag-operable', 'focus-visible']
    },

    // =============================================
    // UNDERSTANDABLE — TECHNICAL (1039-1045)
    // =============================================
    {
      id: 1039,
      question: "SC 3.1.1 Language of Page (Level A) requires that the default human language of each web page can be programmatically determined. What is the correct HTML technique?",
      options: [
        "Adding a <meta name='language'> tag in the <head>",
        "Setting the lang attribute on the <html> element (e.g., <html lang='en'>)",
        "Including a visible text label stating the language on the page",
        "Using the Content-Language HTTP header exclusively"
      ],
      correct: 1,
      explanation: "The standard technique for SC 3.1.1 is setting the lang attribute on the <html> element (e.g., <html lang='en'>). This allows assistive technologies such as screen readers to use the correct pronunciation rules for the page content.",
      wrongExplanations: {
        0: "A <meta name='language'> tag is not the recommended or reliable technique. The lang attribute on <html> is the correct approach recognized by assistive technologies.",
        2: "A visible text label is not programmatically determinable in the way SC 3.1.1 requires. Assistive technologies need the lang attribute to determine the language.",
        3: "The Content-Language HTTP header indicates the intended audience language but is not reliably used by assistive technologies to set pronunciation. The lang attribute on <html> is the authoritative technique."
      },
      topicLinks: ['wcag-understandable'],
      difficulty: 'easy',
      tags: ['wcag-understandable', 'language']
    },
    {
      id: 1040,
      question: "A web page written in English includes a blockquote in French but does not use a lang attribute on the French text. Which SC is violated?",
      options: [
        "SC 3.1.1 Language of Page",
        "SC 3.1.2 Language of Parts",
        "SC 1.3.1 Info and Relationships",
        "SC 3.2.4 Consistent Identification"
      ],
      correct: 1,
      explanation: "SC 3.1.2 Language of Parts (Level AA) requires that the human language of each passage or phrase in the content can be programmatically determined, except for proper names, technical terms, and words of indeterminate language. The French blockquote needs a lang='fr' attribute.",
      wrongExplanations: {
        0: "SC 3.1.1 Language of Page covers the default language of the overall page. The page language (English) is presumably correctly set. The issue is the language of a specific passage.",
        2: "SC 1.3.1 Info and Relationships is about programmatic structure (headings, lists, tables), not about language identification of text passages.",
        3: "SC 3.2.4 Consistent Identification is about consistent naming of functional components, not about language markup."
      },
      topicLinks: ['wcag-understandable'],
      difficulty: 'medium',
      tags: ['wcag-understandable', 'language']
    },
    {
      id: 1041,
      question: "SC 3.2.1 On Focus (Level A) states that when any UI component receives focus, it must NOT do what?",
      options: [
        "Display a tooltip with additional information",
        "Initiate a change of context (such as navigating to a new page, opening a new window, or submitting a form)",
        "Visually highlight the focused element",
        "Update a status message in an ARIA live region"
      ],
      correct: 1,
      explanation: "SC 3.2.1 requires that when a component receives focus, it does not initiate a change of context. Changes of context include navigating to another page, opening a new window, significantly changing the page content, or moving focus to a different component — these are disorienting when triggered solely by focus.",
      wrongExplanations: {
        0: "Displaying a tooltip on focus is acceptable and does not constitute a change of context. It is an expected, minor visual update.",
        2: "Visually highlighting the focused element is expected behavior and is actually required by SC 2.4.7 Focus Visible.",
        3: "Updating a live region on focus is a minor content update, not a change of context. Live regions are designed to communicate changes without disrupting the user."
      },
      topicLinks: ['wcag-understandable'],
      difficulty: 'medium',
      tags: ['wcag-understandable', 'predictable']
    },
    {
      id: 1042,
      question: "SC 3.2.2 On Input (Level A) requires that changing a form control's setting does NOT automatically cause a change of context unless what condition is met?",
      options: [
        "The form control is a submit button",
        "The user has been advised of the behavior before using the component",
        "The form control uses JavaScript",
        "The change only affects visual styling"
      ],
      correct: 1,
      explanation: "SC 3.2.2 states that changing the setting of any user interface component does not automatically cause a change of context unless the user has been advised of the behavior before using the component. For example, a dropdown that auto-navigates on selection must warn users beforehand.",
      wrongExplanations: {
        0: "Activating a submit button is an explicit user action, not an automatic change on input. SC 3.2.2 addresses automatic changes when input settings change.",
        2: "Using JavaScript is a technical implementation detail, not a condition that exempts a control from SC 3.2.2 requirements.",
        3: "Visual-only styling changes are typically not changes of context. SC 3.2.2 is about significant context changes like page navigation, not minor styling updates."
      },
      topicLinks: ['wcag-understandable'],
      difficulty: 'medium',
      tags: ['wcag-understandable', 'predictable']
    },
    {
      id: 1043,
      question: "SC 3.3.1 Error Identification (Level A) requires that when an input error is automatically detected, what must happen?",
      options: [
        "The form field with the error must turn red",
        "The item in error is identified and the error is described to the user in text",
        "The page must prevent form submission entirely",
        "An audio alert must play"
      ],
      correct: 1,
      explanation: "SC 3.3.1 requires that when an input error is automatically detected, the item that is in error is identified and the error is described to the user in text. Color alone is insufficient — the error must be communicated via text that clearly identifies the problematic field and describes the error.",
      wrongExplanations: {
        0: "Turning the field red uses color alone, which violates SC 1.4.1 Use of Color. SC 3.3.1 requires a text description of the error.",
        2: "SC 3.3.1 does not require preventing form submission. It requires identifying and describing errors in text when they are detected.",
        3: "An audio alert is not required and would not satisfy the requirement alone. The error must be described in text so all users can perceive and understand it."
      },
      topicLinks: ['wcag-understandable'],
      difficulty: 'easy',
      tags: ['wcag-understandable', 'error-handling']
    },
    {
      id: 1044,
      question: "SC 3.3.2 Labels or Instructions (Level A) requires what for user input?",
      options: [
        "All form fields must use placeholder text instead of labels",
        "Labels or instructions are provided when content requires user input",
        "All input fields must have a maximum character limit displayed",
        "Instructions must only appear in a separate help page"
      ],
      correct: 1,
      explanation: "SC 3.3.2 requires that labels or instructions are provided when content requires user input. This ensures users know what information is expected, what format is required, and how to complete form fields correctly.",
      wrongExplanations: {
        0: "Placeholder text alone is NOT a sufficient label — it disappears when the user starts typing and is not reliably conveyed to all assistive technologies. Proper <label> elements are needed.",
        2: "Displaying maximum character limits may be helpful but is not required by SC 3.3.2. The requirement is for labels or instructions, not specific technical constraints.",
        3: "Instructions should be provided in context with the form fields, not relegated to a separate page where users may not find them."
      },
      topicLinks: ['wcag-understandable'],
      difficulty: 'easy',
      tags: ['wcag-understandable', 'labels']
    },
    {
      id: 1045,
      question: "SC 3.3.3 Error Suggestion (Level AA) goes beyond SC 3.3.1 by requiring what additional information when an input error is detected?",
      options: [
        "The system must automatically correct the error without user interaction",
        "Known suggestions for correcting the error are provided to the user, unless it would jeopardize security or purpose",
        "The form must prevent submission until all errors are fixed",
        "A modal dialog must appear listing all errors"
      ],
      correct: 1,
      explanation: "SC 3.3.3 requires that if an input error is automatically detected and suggestions for correction are known, the suggestions are provided to the user — unless it would jeopardize the security or purpose of the content (e.g., a password field). This builds on SC 3.3.1's requirement to identify and describe errors.",
      wrongExplanations: {
        0: "SC 3.3.3 requires providing suggestions, not automatic correction. Auto-correction could be problematic and is not required.",
        2: "Preventing submission is not required by SC 3.3.3. The requirement is to provide correction suggestions, not to block form submission.",
        3: "There is no requirement for a modal dialog. Suggestions can be presented inline, at the top of the form, or in any accessible manner."
      },
      topicLinks: ['wcag-understandable'],
      difficulty: 'medium',
      tags: ['wcag-understandable', 'error-handling']
    },

    // =============================================
    // ROBUST — TECHNICAL (1046-1050)
    // =============================================
    {
      id: 1046,
      question: "SC 4.1.2 Name, Role, Value (Level A) requires that for all user interface components, which properties must be programmatically determinable?",
      options: [
        "Only the visual label and color",
        "The name, role, value, and states/properties — and notification of changes to these",
        "Only the element's CSS class name and id attribute",
        "The component's pixel dimensions and position on screen"
      ],
      correct: 1,
      explanation: "SC 4.1.2 requires that for all UI components (including form elements, links, and custom widgets), the name, role, states, and values can be programmatically determined, and notification of changes to these items is available to user agents including assistive technologies. This is essential for screen readers and other AT to convey component information to users.",
      wrongExplanations: {
        0: "Visual label and color are presentation properties. SC 4.1.2 requires programmatic access to the component's name, role, value, and states — semantic information, not just visual.",
        2: "CSS class names and id attributes are code-level details, not the semantic name, role, and value information that assistive technologies need.",
        3: "Pixel dimensions and screen position are layout properties, not the semantic properties (name, role, value, states) required by SC 4.1.2."
      },
      topicLinks: ['wcag-robust'],
      difficulty: 'easy',
      tags: ['wcag-robust', 'name-role-value']
    },
    {
      id: 1047,
      question: "A developer creates a custom toggle button using a <div> with a click handler but no ARIA attributes. Which aspects of SC 4.1.2 Name, Role, Value does this violate?",
      options: [
        "Only the name is missing",
        "The role, name, and state (pressed/not pressed) are all missing — a <div> has no implicit button role, accessible name, or toggle state",
        "Only the value is missing",
        "None — <div> elements are automatically accessible"
      ],
      correct: 1,
      explanation: "A plain <div> has no implicit ARIA role, no accessible name, and no state information. A screen reader would not announce it as a button, would not convey its label, and would not indicate its toggle state. The developer needs role='button', an accessible name (via aria-label or visible text), and aria-pressed to convey the toggle state.",
      wrongExplanations: {
        0: "The name is missing, but so are the role and state. Without role='button', AT does not know this is an interactive control at all.",
        2: "Much more than just the value is missing. The role (button), name (label), and state (pressed/not pressed) are all absent.",
        3: "A <div> has no semantic meaning by default. Without proper ARIA attributes or native HTML semantics, it is completely inaccessible as an interactive control."
      },
      topicLinks: ['wcag-robust'],
      difficulty: 'medium',
      tags: ['wcag-robust', 'name-role-value']
    },
    {
      id: 1048,
      question: "SC 4.1.3 Status Messages (Level AA, added in WCAG 2.1) requires that status messages can be programmatically determined through what mechanism, without receiving focus?",
      options: [
        "Using role='alert', role='status', role='log', or other appropriate ARIA live region roles",
        "Using the <marquee> element",
        "Using JavaScript alert() dialogs",
        "Using CSS animations to highlight the message"
      ],
      correct: 0,
      explanation: "SC 4.1.3 requires that status messages — such as success confirmations, search result counts, or error messages that don't receive focus — can be programmatically determined through ARIA live region roles (role='status', role='alert', role='log', role='progressbar', etc.) so screen readers announce them without moving focus.",
      wrongExplanations: {
        1: "The <marquee> element is deprecated HTML, not an ARIA live region. It does not programmatically convey status information to assistive technologies.",
        2: "JavaScript alert() dialogs do receive focus and interrupt the user. SC 4.1.3 specifically addresses messages that should be conveyed WITHOUT receiving focus.",
        3: "CSS animations are visual-only and not programmatically determinable by assistive technologies. Screen readers cannot detect CSS animation changes."
      },
      topicLinks: ['wcag-robust'],
      difficulty: 'medium',
      tags: ['wcag-robust', 'status-messages']
    },
    {
      id: 1049,
      question: "Which of the following is the BEST example of a status message that should use an ARIA live region per SC 4.1.3?",
      options: [
        "A new page loading after the user clicks a navigation link",
        "A '5 results found' message appearing after a search filter is applied, without moving focus to it",
        "A modal dialog opening with an error message that receives focus",
        "A page title changing when navigating to a new route"
      ],
      correct: 1,
      explanation: "A '5 results found' message that appears dynamically without receiving focus is a classic status message under SC 4.1.3. It provides information about the success of an action (search filtering) and should be announced by screen readers via an ARIA live region (e.g., role='status') without disrupting the user's current focus position.",
      wrongExplanations: {
        0: "A full page load is not a status message — it is a navigation action that results in a new page context.",
        2: "A modal dialog that receives focus is not a status message under SC 4.1.3, because the user's focus moves to it. SC 4.1.3 specifically addresses messages conveyed without focus changes.",
        3: "Page title changes during navigation are handled by the browser and are not the type of dynamic status message SC 4.1.3 addresses."
      },
      topicLinks: ['wcag-robust'],
      difficulty: 'medium',
      tags: ['wcag-robust', 'status-messages']
    },
    {
      id: 1050,
      question: "Why is using native HTML elements (like <button>, <input>, <select>) generally preferred over custom ARIA widgets for meeting SC 4.1.2 and ensuring assistive technology compatibility?",
      options: [
        "Native HTML elements load faster than custom elements",
        "Native HTML elements have built-in name, role, value, states, and keyboard behavior that custom elements must manually replicate with ARIA and JavaScript",
        "ARIA attributes are not supported by any modern browser",
        "Custom widgets always violate WCAG regardless of their implementation"
      ],
      correct: 1,
      explanation: "Native HTML elements such as <button>, <input>, and <select> come with built-in accessible name, role, value, states, and keyboard interaction patterns that are already understood by assistive technologies. Custom ARIA widgets require developers to manually implement all of these features — role, accessible name, keyboard handlers, state management — which is error-prone and often leads to incomplete accessibility.",
      wrongExplanations: {
        0: "While native elements may have minor performance advantages, the primary reason to prefer them for accessibility is their built-in semantic and keyboard support, not load speed.",
        2: "ARIA attributes are well-supported by all modern browsers and assistive technologies. The preference for native elements is about reducing implementation complexity, not lack of ARIA support.",
        3: "Custom widgets can be fully WCAG-compliant if implemented correctly with proper ARIA roles, properties, states, and keyboard interaction. The preference for native elements is practical, not absolute."
      },
      topicLinks: ['wcag-robust'],
      difficulty: 'easy',
      tags: ['wcag-robust', 'name-role-value']
    },

    // =============================================
    // MOVED FROM CPACC DOMAIN 2 (1051-1056)
    // =============================================
    {
      id: 1051,
      question: "A success criterion numbered 1.3.1 in WCAG refers to which principle?",
      options: [
        "Perceivable",
        "Operable",
        "Understandable",
        "Robust"
      ],
      correct: 0,
      explanation: "In WCAG's numbering system, the first digit indicates the principle. 1.x.x = Perceivable, 2.x.x = Operable, 3.x.x = Understandable, 4.x.x = Robust. So 1.3.1 is under Perceivable.",
      wrongExplanations: {
        1: "Operable criteria start with 2 (e.g., 2.1.1). Criterion 1.3.1 starts with 1, placing it under Perceivable.",
        2: "Understandable criteria start with 3 (e.g., 3.1.1). Criterion 1.3.1 starts with 1, placing it under Perceivable.",
        3: "Robust criteria start with 4 (e.g., 4.1.1). Criterion 1.3.1 starts with 1, placing it under Perceivable."
      },
      topicLinks: ['wcag-overview', 'wcag-perceivable'],
      difficulty: 'medium',
      tags: ['wcag-structure']
    },
    {
      id: 1052,
      question: "What is the minimum color contrast ratio required for normal-sized text at WCAG Level AA?",
      options: [
        "4.5:1",
        "3:1",
        "7:1",
        "2:1"
      ],
      correct: 0,
      explanation: "WCAG Level AA requires a minimum contrast ratio of 4.5:1 for normal-sized text (SC 1.4.3). Large text only requires 3:1, and Level AAA requires 7:1 for normal text.",
      wrongExplanations: {
        1: "3:1 is the minimum contrast ratio for large text at Level AA, not for normal-sized text.",
        2: "7:1 is the enhanced contrast ratio required at Level AAA for normal-sized text, not Level AA.",
        3: "2:1 is not a defined contrast ratio threshold in WCAG. The minimum for any text is 3:1 (large text at Level AA)."
      },
      topicLinks: ['wcag-perceivable'],
      difficulty: 'medium',
      tags: ['wcag-perceivable', 'color-contrast']
    },
    {
      id: 1053,
      question: "A website relies SOLELY on color to indicate required form fields (red = required). Which WCAG success criterion is this most likely to violate?",
      options: [
        "1.4.1 Use of Color (Perceivable)",
        "3.3.2 Labels or Instructions (Understandable)",
        "2.4.6 Headings and Labels (Operable)",
        "4.1.2 Name, Role, Value (Robust)"
      ],
      correct: 0,
      explanation: "SC 1.4.1 (Use of Color) requires that color is not used as the only visual means of conveying information. Required fields should also use text labels, asterisks, or other non-color indicators.",
      wrongExplanations: {
        1: "While labels are also important (SC 3.3.2), the specific issue of relying solely on color to convey information is addressed by SC 1.4.1 Use of Color.",
        2: "SC 2.4.6 is about headings and labels being descriptive, not about color as an information channel.",
        3: "SC 4.1.2 addresses programmatic name, role, and value for AT. The specific issue of using only color to convey meaning is a Perceivable issue under 1.4.1."
      },
      topicLinks: ['wcag-perceivable'],
      difficulty: 'hard',
      tags: ['wcag-perceivable', 'color', 'scenario']
    },
    {
      id: 1054,
      question: "A user must complete a timed online exam, but the timer cannot be paused or extended. Which WCAG success criterion is MOST directly violated?",
      options: [
        "2.2.1 Timing Adjustable (Operable)",
        "1.3.1 Info and Relationships (Perceivable)",
        "3.3.1 Error Identification (Understandable)",
        "4.1.1 Parsing (Robust)"
      ],
      correct: 0,
      explanation: "SC 2.2.1 (Timing Adjustable) requires that users can turn off, adjust, or extend time limits, unless the timing is essential to the activity.",
      wrongExplanations: {
        1: "SC 1.3.1 is about programmatic structure and relationships in content, not about time limits.",
        2: "SC 3.3.1 is about identifying and describing errors, not about time constraints on tasks.",
        3: "SC 4.1.1 (Parsing, now deprecated in WCAG 2.2) dealt with markup validity, not time limits."
      },
      topicLinks: ['wcag-operable'],
      difficulty: 'medium',
      tags: ['wcag-operable', 'timing', 'scenario']
    },
    {
      id: 1055,
      question: "A custom JavaScript widget does not expose its name, role, or value to assistive technologies. Which WCAG success criterion is violated?",
      options: [
        "4.1.2 Name, Role, Value (Robust)",
        "1.1.1 Non-text Content (Perceivable)",
        "2.1.1 Keyboard (Operable)",
        "3.3.2 Labels or Instructions (Understandable)"
      ],
      correct: 0,
      explanation: "SC 4.1.2 (Name, Role, Value) under the Robust principle requires that all UI components expose their name, role, and value to assistive technologies programmatically.",
      wrongExplanations: {
        1: "SC 1.1.1 covers text alternatives for non-text content (like images), not programmatic properties of interactive widgets.",
        2: "SC 2.1.1 requires keyboard accessibility, not programmatic exposure of name, role, and value to AT.",
        3: "SC 3.3.2 requires visible labels and instructions for forms, not programmatic AT compatibility."
      },
      topicLinks: ['wcag-robust'],
      difficulty: 'medium',
      tags: ['wcag-robust', 'scenario']
    },
    {
      id: 1056,
      question: "WCAG 2.1 added SC 4.1.3 (Status Messages) under the Robust principle. What does this success criterion require?",
      options: [
        "Status messages must be programmatically conveyed to assistive technologies without receiving focus",
        "All error messages must be displayed in red",
        "Status messages must be displayed for at least 5 seconds",
        "Status messages must include a heading element"
      ],
      correct: 0,
      explanation: "SC 4.1.3 requires that status messages (like 'Item added to cart' or 'Form submitted successfully') can be programmatically determined by assistive technologies through ARIA live regions or similar, without requiring the element to receive focus.",
      wrongExplanations: {
        1: "WCAG does not require specific colors for messages. Using only color would actually violate SC 1.4.1 (Use of Color).",
        2: "WCAG does not specify a minimum display duration for status messages. The requirement is about AT communication, not timing.",
        3: "Status messages do not need heading elements. They need to be conveyed to AT through programmatic means like ARIA live regions."
      },
      topicLinks: ['wcag-robust'],
      difficulty: 'hard',
      tags: ['wcag-robust']
    },
    // =============================================
    // GUIDELINES BEYOND WCAG (1057-1062)
    // =============================================
    {
      id: 1057,
      question: "What is the primary scope of ATAG 2.0 (Authoring Tool Accessibility Guidelines)?",
      options: [
        "Making authoring tool user interfaces accessible AND supporting the production of accessible content",
        "Providing success criteria for evaluating web content conformance",
        "Defining accessibility requirements for assistive technologies",
        "Specifying how browsers should expose the accessibility tree"
      ],
      correct: 0,
      explanation: "ATAG 2.0 has two parts: Part A requires the authoring tool's own UI to be accessible, and Part B requires the tool to support authors in producing accessible output (e.g., prompting for alt text).",
      wrongExplanations: {
        1: "Evaluating web content against success criteria is the role of WCAG, not ATAG.",
        2: "Guidelines for assistive technologies themselves are outside ATAG's scope; ATAG targets content creation tools.",
        3: "Accessibility tree exposure is a browser/platform concern covered by Core-AAM and related specs, not ATAG."
      },
      topicLinks: ['atag-overview', 'wcag-overview'],
      difficulty: 'medium',
      tags: ['standards', 'atag']
    },
    {
      id: 1058,
      question: "A European public sector site must comply with EN 301 549. Which statement best describes its relationship to WCAG?",
      options: [
        "EN 301 549 incorporates WCAG as its requirements for web content while covering additional ICT like software, documents, and hardware",
        "EN 301 549 replaces WCAG entirely in the European Union",
        "EN 301 549 applies only to native mobile applications, not websites",
        "EN 301 549 is an older standard that has been deprecated in favor of WCAG 2.2"
      ],
      correct: 0,
      explanation: "EN 301 549 is the European harmonized ICT accessibility standard. For web content it incorporates WCAG 2.1 Level AA by reference, but it also covers non-web software, documents, hardware, and support services.",
      wrongExplanations: {
        1: "EN 301 549 uses WCAG for its web requirements rather than replacing it.",
        2: "EN 301 549 covers a broad range of ICT, including websites, not just mobile apps.",
        3: "EN 301 549 is active and updated regularly; it is not deprecated."
      },
      topicLinks: ['en-301-549', 'wcag-overview'],
      difficulty: 'medium',
      tags: ['standards', 'en-301-549']
    },
    {
      id: 1059,
      question: "What does the WAI-ARIA 1.2 specification primarily define?",
      options: [
        "Roles, states, and properties that communicate semantics of UI components to assistive technologies",
        "Visual design patterns for accessible user interfaces",
        "Keyboard shortcut standards for web applications",
        "Color contrast ratios for text and UI components"
      ],
      correct: 0,
      explanation: "WAI-ARIA defines a vocabulary of roles, states, and properties that authors can add to markup so custom widgets and dynamic content expose proper semantics to assistive technologies.",
      wrongExplanations: {
        1: "ARIA is a semantics specification, not a visual design system.",
        2: "Keyboard interaction patterns are described in the ARIA Authoring Practices Guide, which is informative and separate from the normative ARIA spec.",
        3: "Color contrast requirements are defined in WCAG success criteria, not in the ARIA spec."
      },
      topicLinks: ['aria-overview', 'aria-roles', 'aria-states-properties'],
      difficulty: 'easy',
      tags: ['standards', 'aria']
    },
    {
      id: 1060,
      question: "Which statement best reflects the first rule of ARIA?",
      options: [
        "If a native HTML element or attribute with the semantics you need already exists, use it instead of ARIA",
        "Always add an ARIA role to every interactive element",
        "Never use ARIA on form controls",
        "ARIA roles should always be combined with role='presentation'"
      ],
      correct: 0,
      explanation: "The first rule of ARIA is: don't use ARIA if a native HTML element provides the needed semantics and behavior. Native elements are better supported and come with built-in keyboard and focus behavior.",
      wrongExplanations: {
        1: "Blanket addition of ARIA roles is an anti-pattern; ARIA should supplement, not replace, semantic HTML.",
        2: "ARIA can legitimately augment form controls (e.g., aria-describedby for errors).",
        3: "Combining widget roles with role='presentation' would remove the very semantics you just added — this is incorrect."
      },
      topicLinks: ['aria-overview', 'semantic-html'],
      difficulty: 'easy',
      tags: ['aria', 'semantic-html']
    },
    {
      id: 1061,
      question: "An authoring tool prompts the user to add alt text whenever an image is inserted. Which part of ATAG 2.0 does this support?",
      options: [
        "Part B — supporting the production of accessible content",
        "Part A — making the tool's own UI accessible",
        "Neither; this is a WCAG requirement, not ATAG",
        "Both parts equally, since they have identical requirements"
      ],
      correct: 0,
      explanation: "ATAG Part B addresses how the tool helps authors produce accessible content. Prompting for alt text is a classic Part B support feature.",
      wrongExplanations: {
        1: "Part A is about the accessibility of the authoring tool interface itself (menus, dialogs), not the content produced.",
        2: "WCAG applies to the output content; ATAG applies to the authoring tool and how it supports accessible creation.",
        3: "Parts A and B have distinct requirements and scopes."
      },
      topicLinks: ['atag-overview'],
      difficulty: 'medium',
      tags: ['atag']
    },
    {
      id: 1062,
      question: "A team must conform to WCAG 2.1 Level AA. Must they also meet Level A success criteria?",
      options: [
        "Yes — Level AA conformance requires meeting all Level A and Level AA success criteria",
        "No — Level AA replaces Level A requirements entirely",
        "Only if the content is for a government site",
        "Only the Level A criteria marked as 'essential' must be met"
      ],
      correct: 0,
      explanation: "WCAG conformance levels are cumulative. Level AA conformance requires satisfying all Level A criteria plus all Level AA criteria. Level AAA further requires all A, AA, and AAA criteria.",
      wrongExplanations: {
        1: "Levels are additive, not replacements.",
        2: "The cumulative rule applies to any WCAG conformance claim, not just government sites.",
        3: "There is no subset of 'essential' Level A criteria — all Level A SC must be met for Level AA."
      },
      topicLinks: ['wcag-overview'],
      difficulty: 'easy',
      tags: ['wcag-structure', 'conformance']
    },
    // =============================================
    // JAVASCRIPT & DYNAMIC CONTENT (1063-1068)
    // =============================================
    {
      id: 1063,
      question: "What is the core idea of progressive enhancement in the context of accessible JavaScript?",
      options: [
        "Start with a working HTML baseline, then layer CSS and JavaScript so the experience degrades gracefully when scripts fail or are unsupported",
        "Write JavaScript first and add HTML only as a fallback",
        "Use only the latest JavaScript features and require modern browsers",
        "Replace all HTML forms with JavaScript-driven custom components"
      ],
      correct: 0,
      explanation: "Progressive enhancement starts with semantic HTML that works on its own, then enhances it with CSS and JavaScript. If JS fails or is blocked, core functionality remains accessible.",
      wrongExplanations: {
        1: "This inverts the principle — HTML is the baseline, not the fallback.",
        2: "Progressive enhancement specifically avoids cutting off older or constrained environments.",
        3: "Replacing native controls with custom ones typically reduces accessibility, the opposite of the goal."
      },
      topicLinks: ['javascript-accessibility', 'semantic-html'],
      difficulty: 'easy',
      tags: ['javascript', 'progressive-enhancement']
    },
    {
      id: 1064,
      question: "A developer attaches an onclick handler to a <div> to make it act as a button. What is the minimum set of changes needed to make it accessible?",
      options: [
        "Add role='button', tabindex='0', and handle both Enter and Space key events — or better yet, use a native <button> element",
        "Only add role='button'; screen readers will handle the rest",
        "Only add tabindex='0'; that is sufficient for keyboard users",
        "Add aria-label='button'; no keyboard handling is required"
      ],
      correct: 0,
      explanation: "Mimicking a button with a div requires role='button' for semantics, tabindex='0' for keyboard focus, AND key handlers for Enter/Space. The better solution is to use <button>, which provides all of this natively.",
      wrongExplanations: {
        1: "Role alone doesn't make the element focusable or operable with the keyboard.",
        2: "Tabindex makes it focusable but doesn't convey button semantics or handle activation keys.",
        3: "aria-label provides an accessible name but does not provide role, focus, or key handling."
      },
      topicLinks: ['javascript-accessibility', 'standard-vs-custom-controls', 'semantic-html'],
      difficulty: 'medium',
      tags: ['javascript', 'keyboard', 'custom-controls']
    },
    {
      id: 1065,
      question: "A modal dialog opens after the user clicks a button. Where should keyboard focus go, and where should it return when the dialog closes?",
      options: [
        "Focus should move into the dialog (typically to the first focusable element or the dialog container) and return to the triggering button when closed",
        "Focus should remain on the triggering button while the dialog is open",
        "Focus should jump to the footer of the page when the dialog opens",
        "Focus management is optional; screen readers handle it automatically"
      ],
      correct: 0,
      explanation: "When a dialog opens, focus must move into it so keyboard and screen reader users can interact with it. On close, focus returns to the element that triggered the dialog so users don't lose their place.",
      wrongExplanations: {
        1: "Leaving focus on the trigger strands keyboard users outside the dialog.",
        2: "Jumping to an unrelated location disorients users.",
        3: "Dialogs do not get automatic focus handling; it must be implemented by the author."
      },
      topicLinks: ['javascript-accessibility', 'aria-states-properties'],
      difficulty: 'medium',
      tags: ['javascript', 'focus-management', 'dialogs']
    },
    {
      id: 1066,
      question: "An autocomplete widget inserts new suggestions into the DOM as the user types. How should updates be announced to screen reader users without stealing focus?",
      options: [
        "Use an ARIA live region (or a combobox pattern with aria-live) so assistive technologies announce changes automatically",
        "Call element.focus() on each new suggestion as it appears",
        "Use alert() to announce new suggestions",
        "Rely on the browser to automatically speak new DOM nodes"
      ],
      correct: 0,
      explanation: "Dynamic content updates that should be announced without interrupting the user's input must be placed in an ARIA live region. The combobox pattern also uses aria-activedescendant to virtually track the current option without moving focus.",
      wrongExplanations: {
        1: "Moving focus on every keystroke would disrupt typing and is disorienting.",
        2: "alert() is a modal browser dialog, not an accessibility feature, and it breaks the user flow.",
        3: "Browsers do not automatically announce arbitrary DOM insertions."
      },
      topicLinks: ['aria-live-regions', 'javascript-accessibility'],
      difficulty: 'medium',
      tags: ['javascript', 'aria-live', 'dynamic-content']
    },
    {
      id: 1067,
      question: "Which ARIA attribute correctly conveys the expanded/collapsed state of a disclosure button?",
      options: [
        "aria-expanded='true' or aria-expanded='false' on the button",
        "aria-hidden on the button, toggled true/false",
        "aria-pressed on the button",
        "role='toggle' on the button"
      ],
      correct: 0,
      explanation: "aria-expanded on the trigger button communicates whether the disclosed region is currently visible. It must be updated in JavaScript whenever the state changes.",
      wrongExplanations: {
        1: "aria-hidden removes an element from the accessibility tree — it does not communicate expanded state.",
        2: "aria-pressed is for toggle buttons (like bold/italic), not disclosure widgets.",
        3: "There is no standard role='toggle' in ARIA."
      },
      topicLinks: ['aria-states-properties', 'javascript-accessibility'],
      difficulty: 'easy',
      tags: ['aria', 'aria-states']
    },
    {
      id: 1068,
      question: "A developer uses element.innerHTML to replace large sections of the page after an AJAX call. What's the main accessibility risk?",
      options: [
        "Focus can be lost if the focused element is removed, leaving keyboard users stranded and screen reader users without context",
        "innerHTML is always forbidden by WCAG",
        "Screen readers cannot read content inserted with innerHTML",
        "Content inserted with innerHTML is automatically marked aria-hidden"
      ],
      correct: 0,
      explanation: "Replacing DOM subtrees can destroy the element that currently has focus, sending focus to document.body. Developers must save and restore focus (or move it to a sensible destination) and notify users of the change.",
      wrongExplanations: {
        1: "WCAG does not forbid any specific DOM API; it targets outcomes.",
        2: "Screen readers read whatever is in the accessibility tree, regardless of how it got there.",
        3: "innerHTML does not apply any ARIA attributes automatically."
      },
      topicLinks: ['javascript-accessibility', 'spa-accessibility'],
      difficulty: 'hard',
      tags: ['javascript', 'focus-management']
    },
    // =============================================
    // STANDARD VS. CUSTOM CONTROLS (1069-1074)
    // =============================================
    {
      id: 1069,
      question: "Which of the following does a native <button> element provide 'for free' that a custom div-based button must manually implement?",
      options: [
        "Focusability, button role, Enter/Space activation, and form submission behavior",
        "Only focus ring styling",
        "Only the button role; keyboard handling must still be added",
        "Nothing — native buttons and divs behave identically"
      ],
      correct: 0,
      explanation: "Native <button> elements are focusable by default, expose the button role, respond to Enter and Space, participate in forms, and respect disabled state — all automatically.",
      wrongExplanations: {
        1: "Focus ring is only one small aspect; native buttons provide much more.",
        2: "Native buttons fully handle Enter and Space activation with no scripting required.",
        3: "Divs and buttons differ substantially in default semantics and behavior."
      },
      topicLinks: ['standard-vs-custom-controls', 'semantic-html'],
      difficulty: 'easy',
      tags: ['semantic-html', 'custom-controls']
    },
    {
      id: 1070,
      question: "When is building a custom ARIA widget justified instead of using native HTML?",
      options: [
        "When no native element provides the needed interaction pattern (e.g., a tree view or a tab interface)",
        "Any time a designer wants unique visual styling",
        "Whenever the team is more comfortable with JavaScript than HTML",
        "Whenever the page already uses a JavaScript framework"
      ],
      correct: 0,
      explanation: "Custom ARIA widgets are justified only when no native equivalent exists — such as tablist, tree, or combobox. Otherwise, styled native elements should be preferred.",
      wrongExplanations: {
        1: "Styling requirements can almost always be met by styling native elements.",
        2: "Team comfort is not a valid accessibility justification.",
        3: "Framework usage doesn't require abandoning native semantics."
      },
      topicLinks: ['standard-vs-custom-controls', 'aria-overview'],
      difficulty: 'medium',
      tags: ['custom-controls', 'aria']
    },
    {
      id: 1071,
      question: "A designer wants a styled checkbox with a custom checkmark animation. What is the most accessible implementation?",
      options: [
        "Use a real <input type='checkbox'>, visually hide it, and style an adjacent element — the native input retains all semantics and keyboard behavior",
        "Use a <div role='checkbox'> with tabindex='0' and manually handle space/enter keys",
        "Use an <img> of a checkbox with an onclick handler",
        "Use a <button> with the text 'checked' or 'unchecked'"
      ],
      correct: 0,
      explanation: "Visually hiding the real checkbox (but keeping it in the accessibility tree and focusable) and styling a sibling element is a robust pattern. The native input retains all keyboard, form, and AT behavior.",
      wrongExplanations: {
        1: "This works but requires re-implementing everything the native input already provides, increasing risk.",
        2: "An image with onclick has no role, state, or keyboard support.",
        3: "A button doesn't naturally convey checked/unchecked state or participate in forms."
      },
      topicLinks: ['standard-vs-custom-controls', 'form-accessibility'],
      difficulty: 'medium',
      tags: ['custom-controls', 'forms']
    },
    {
      id: 1072,
      question: "Which ARIA pattern is appropriate for a set of mutually exclusive selectable options where only one can be active at a time and arrow keys navigate between them?",
      options: [
        "role='radiogroup' containing role='radio' elements — or native radio inputs",
        "role='button' on each option",
        "role='checkbox' on each option",
        "role='listbox' with role='option' and aria-multiselectable='true'"
      ],
      correct: 0,
      explanation: "Mutually exclusive single-choice selection is the radio group pattern. Native <input type='radio'> elements give all this behavior for free; ARIA radiogroup is used when building custom widgets.",
      wrongExplanations: {
        1: "Buttons don't convey single-selection state.",
        2: "Checkboxes represent independent on/off state, not mutually exclusive choices.",
        3: "Multiselectable='true' allows multiple selections, which is the opposite of mutually exclusive."
      },
      topicLinks: ['aria-roles', 'standard-vs-custom-controls'],
      difficulty: 'medium',
      tags: ['aria', 'forms']
    },
    {
      id: 1073,
      question: "Which is NOT a requirement when building a custom ARIA slider widget?",
      options: [
        "Use <div role='presentation'> to hide its role from assistive technology",
        "Expose aria-valuenow, aria-valuemin, and aria-valuemax",
        "Support arrow keys to increase/decrease the value",
        "Provide an accessible name via aria-label or aria-labelledby"
      ],
      correct: 0,
      explanation: "A slider must expose role='slider' to assistive technologies, along with its current, min, and max values, keyboard operability, and an accessible name. Hiding its role defeats the entire purpose.",
      wrongExplanations: {
        1: "These are required slider value properties.",
        2: "Keyboard operability is a required part of the slider pattern.",
        3: "A slider needs an accessible name to communicate what it controls."
      },
      topicLinks: ['aria-roles', 'aria-states-properties', 'standard-vs-custom-controls'],
      difficulty: 'hard',
      tags: ['aria', 'custom-controls']
    },
    {
      id: 1074,
      question: "What does the phrase 'no ARIA is better than bad ARIA' mean in practice?",
      options: [
        "Incorrect ARIA usage can mislead assistive technologies more than using plain (even if imperfect) HTML",
        "ARIA should never be used on any website",
        "ARIA only works in certain browsers so it should be avoided",
        "Plain HTML is always fully accessible without ARIA"
      ],
      correct: 0,
      explanation: "Incorrect ARIA (wrong role, conflicting states, redundant attributes) actively misleads assistive technologies, often producing worse outcomes than no ARIA at all. The guidance encourages caution and correctness.",
      wrongExplanations: {
        1: "ARIA is essential for many custom patterns; the warning is about misuse, not use.",
        2: "ARIA has broad support across modern assistive technologies.",
        3: "Plain HTML can still have accessibility gaps — ARIA exists to fill them when used correctly."
      },
      topicLinks: ['aria-overview', 'semantic-html'],
      difficulty: 'medium',
      tags: ['aria']
    },
    // =============================================
    // SPA ACCESSIBILITY (1075-1078)
    // =============================================
    {
      id: 1075,
      question: "In a single page application using client-side routing, what accessibility problem commonly occurs after a route change?",
      options: [
        "Screen readers aren't notified of the new view, focus remains in the previous view, and the page title doesn't update",
        "CSS files fail to load",
        "Keyboard shortcuts stop working permanently",
        "Browser history becomes inaccessible"
      ],
      correct: 0,
      explanation: "Because no full page load occurs, assistive technology isn't automatically notified. Developers must manually update the document title, move focus (commonly to the new main heading), and optionally announce the change in a live region.",
      wrongExplanations: {
        1: "CSS loading isn't inherently affected by client-side routing.",
        2: "Keyboard shortcuts aren't automatically broken by routing.",
        3: "Browser history remains accessible; routers typically integrate with the History API."
      },
      topicLinks: ['spa-accessibility', 'javascript-accessibility'],
      difficulty: 'medium',
      tags: ['spa', 'routing']
    },
    {
      id: 1076,
      question: "Which pattern is commonly recommended for handling focus after a route change in a SPA?",
      options: [
        "Move focus to the new view's main heading (h1) or a container with tabindex='-1' and focus it programmatically",
        "Return focus to the browser URL bar",
        "Leave focus where it was; SPA routing should be invisible",
        "Focus the body element and let the user Tab from the top"
      ],
      correct: 0,
      explanation: "Focusing the new view's h1 (or a wrapper with tabindex='-1') signals the context change to screen readers and gives keyboard users a sensible starting point in the new content.",
      wrongExplanations: {
        1: "The URL bar is outside the document and can't be programmatically focused by scripts.",
        2: "Leaving focus strands keyboard users in stale content.",
        3: "document.body doesn't communicate any context about the new view."
      },
      topicLinks: ['spa-accessibility', 'javascript-accessibility'],
      difficulty: 'medium',
      tags: ['spa', 'focus-management']
    },
    {
      id: 1077,
      question: "Why should a SPA update document.title on each route change?",
      options: [
        "Screen readers announce the document title on navigation, and it populates browser history/tab labels for all users",
        "Because WCAG requires titles to rotate every 30 seconds",
        "To improve JavaScript performance",
        "Because document.title is required for valid HTML5"
      ],
      correct: 0,
      explanation: "SC 2.4.2 (Page Titled) requires each view to have a descriptive title. In a SPA, updating document.title ensures each route behaves like a titled page for assistive technologies, browser history, and bookmarks.",
      wrongExplanations: {
        1: "WCAG has no such rotating requirement.",
        2: "Document titles have no direct performance impact.",
        3: "HTML5 requires <title> once in the document; this is about conveying the current view."
      },
      topicLinks: ['spa-accessibility', 'wcag-operable'],
      difficulty: 'medium',
      tags: ['spa', 'wcag-operable']
    },
    {
      id: 1078,
      question: "A SPA uses an aria-live='polite' region to announce 'Page loaded: Dashboard' after each route change. What is a potential drawback of this approach alone?",
      options: [
        "Without also moving focus, keyboard users are still stranded in the old view even though screen readers announce the change",
        "Polite live regions never actually speak in any screen reader",
        "aria-live is not supported in any modern browser",
        "Live regions interfere with the browser's back button"
      ],
      correct: 0,
      explanation: "Live region announcements alone address the 'did something change?' question but don't reposition keyboard focus. Best practice combines an announcement with focus management to the new view.",
      wrongExplanations: {
        1: "Polite live regions are widely supported and announce when the user is idle.",
        2: "aria-live is well supported across browsers and assistive technology.",
        3: "Live regions don't affect browser history or navigation controls."
      },
      topicLinks: ['aria-live-regions', 'spa-accessibility'],
      difficulty: 'hard',
      tags: ['spa', 'aria-live']
    },
    // =============================================
    // USER STRATEGIES (1079-1080)
    // =============================================
    {
      id: 1079,
      question: "A blind screen reader user typically navigates a web page first by which strategy?",
      options: [
        "Pulling up a list of headings or landmarks to get an overview, then jumping to a section of interest",
        "Reading every word from the top of the page to the bottom without exception",
        "Using a mouse to click on areas of interest",
        "Requesting a sighted assistant to describe the page"
      ],
      correct: 0,
      explanation: "Experienced screen reader users rely on structural shortcuts: heading lists, landmark navigation, and link/form lists let them build a mental model of a page quickly rather than reading linearly.",
      wrongExplanations: {
        1: "Linear reading is slow and is usually a fallback, not a primary strategy.",
        2: "Blind users typically do not use a mouse.",
        3: "Screen reader users navigate independently; sighted assistance is not a browsing strategy."
      },
      topicLinks: ['disability-user-strategies', 'screen-readers'],
      difficulty: 'easy',
      tags: ['user-strategies', 'screen-readers']
    },
    {
      id: 1080,
      question: "Which accommodation is most commonly used by a low-vision user who can still use a mouse and see the screen?",
      options: [
        "Browser zoom, OS-level magnification, and/or high contrast themes",
        "A refreshable braille display",
        "Switch devices operated by head movement",
        "Sign language interpretation"
      ],
      correct: 0,
      explanation: "Low-vision users commonly rely on zoom (browser or OS), screen magnifiers, and high-contrast color schemes. Designs must accommodate these by supporting reflow at 400% zoom and not breaking under custom stylesheets.",
      wrongExplanations: {
        1: "Braille displays are used by blind users, typically with a screen reader, not by sighted low-vision users.",
        2: "Switch devices are used by people with significant motor impairments.",
        3: "Sign language interpretation supports Deaf users, not low-vision users."
      },
      topicLinks: ['disability-user-strategies'],
      difficulty: 'easy',
      tags: ['user-strategies', 'low-vision']
    },
    // =============================================
    // WAS BOK GAP-FILL: WCAG 2.2 & STANDARDS (1301-1328)
    // =============================================
    // --- WCAG 2.2 new success criteria (1301-1308) ---
    {
      id: 1301,
      question: "Which success criterion was removed entirely in WCAG 2.2?",
      options: [
        "4.1.1 Parsing",
        "4.1.2 Name, Role, Value",
        "1.3.1 Info and Relationships",
        "2.4.7 Focus Visible"
      ],
      correct: 0,
      explanation: "WCAG 2.2 removed SC 4.1.1 Parsing. It was written for an era when assistive technologies parsed markup directly; modern browsers expose a repaired DOM to AT, so the criterion no longer provided unique benefit. Problems it caught, like duplicate IDs breaking label associations, still fail under 1.3.1 or 4.1.2.",
      wrongExplanations: {
        1: "4.1.2 Name, Role, Value remains in WCAG 2.2 and is one of the most important criteria for custom widgets.",
        2: "1.3.1 Info and Relationships remains — it actually absorbs some issues that 4.1.1 used to catch.",
        3: "2.4.7 Focus Visible remains; WCAG 2.2 added MORE focus-related criteria, it did not remove this one."
      },
      topicLinks: ['wcag-22-new-criteria'],
      difficulty: 'easy',
      tags: ['wcag-2.2', 'parsing']
    },
    {
      id: 1302,
      question: "A login form blocks pasting into the password field and offers no other way to sign in. Which WCAG 2.2 success criterion does this most directly fail?",
      options: [
        "3.3.8 Accessible Authentication (Minimum) — Level AA",
        "3.3.7 Redundant Entry — Level A",
        "2.5.8 Target Size (Minimum) — Level AA",
        "3.2.6 Consistent Help — Level A"
      ],
      correct: 0,
      explanation: "3.3.8 prohibits requiring a cognitive function test (such as memorizing or transcribing a password) at any authentication step unless an alternative or assistive mechanism exists. Blocking paste defeats password managers, forcing memorization or transcription, which is a classic 3.3.8 failure. (Object recognition and identifying personal content are exceptions at the Minimum level, but they are removed at the AAA Enhanced level, 3.3.9.)",
      wrongExplanations: {
        1: "3.3.7 Redundant Entry covers re-entering information within the same process — and it explicitly excepts security-related re-entry like passwords.",
        2: "2.5.8 is about pointer target dimensions (24 by 24 CSS pixels), not authentication.",
        3: "3.2.6 requires help mechanisms to appear in a consistent order across a set of pages — unrelated to password entry."
      },
      topicLinks: ['wcag-22-new-criteria'],
      difficulty: 'medium',
      tags: ['wcag-2.2', 'authentication', 'cognitive']
    },
    {
      id: 1303,
      question: "A site shows a 'Contact us' link, live chat widget, and FAQ link in its footer — but in a different order on different pages of the site. Which success criterion introduced in WCAG 2.2 is at risk?",
      options: [
        "3.2.6 Consistent Help (Level A)",
        "3.2.3 Consistent Navigation (Level AA)",
        "3.3.8 Accessible Authentication (Minimum) (Level AA)",
        "2.4.11 Focus Not Obscured (Minimum) (Level AA)"
      ],
      correct: 0,
      explanation: "3.2.6 Consistent Help (Level A, new in WCAG 2.2) requires that help mechanisms — human contact details, human contact mechanisms, self-help options, and fully automated contact mechanisms — appear in the same relative order on each page in a set of pages where they occur. It primarily benefits people with cognitive disabilities who need to find help in a predictable place.",
      wrongExplanations: {
        1: "3.2.3 Consistent Navigation is the near-miss: it covers repeated navigation mechanisms generally and predates 2.2. The new criterion specifically targeting HELP mechanisms is 3.2.6 — and it is Level A.",
        2: "3.3.8 concerns cognitive function tests during authentication, not the placement of help options.",
        3: "2.4.11 concerns keyboard focus being hidden by sticky content, not help placement."
      },
      topicLinks: ['wcag-22-new-criteria', 'wcag-understandable'],
      difficulty: 'medium',
      tags: ['wcag-2.2', 'consistent-help', 'cognitive']
    },
    {
      id: 1304,
      question: "In a multi-step checkout, the user types their shipping address in step 1, and step 3 demands they retype the same address as the billing address with no way to reuse it. Which WCAG 2.2 success criterion does this fail, and what is a conforming fix?",
      options: [
        "3.3.7 Redundant Entry (A) — auto-populate the address or offer a 'same as shipping' option to select",
        "3.3.7 Redundant Entry (A) — the only fix is to remove the billing address field entirely",
        "3.3.1 Error Identification (A) — show an error if the addresses do not match",
        "3.3.8 Accessible Authentication (AA) — addresses count as a cognitive function test"
      ],
      correct: 0,
      explanation: "3.3.7 Redundant Entry (Level A) requires that information previously entered in the same process be auto-populated or available for the user to select. A 'same as shipping address' checkbox or pre-filled fields conforms. Exceptions exist when re-entry is essential, needed for security (passwords), or the previous information is no longer valid.",
      wrongExplanations: {
        1: "The SC is correct but the fix is wrong — 3.3.7 does not forbid asking for the information; it requires making the previously entered data available without retyping.",
        2: "3.3.1 is about identifying input errors, not about forcing re-entry of known information.",
        3: "3.3.8 applies to cognitive function tests in authentication steps; entering an address during checkout is not authentication."
      },
      topicLinks: ['wcag-22-new-criteria', 'form-accessibility'],
      difficulty: 'medium',
      tags: ['wcag-2.2', 'redundant-entry', 'cognitive']
    },
    {
      id: 1305,
      question: "A kanban board lets users move cards between columns only by dragging with the mouse. The team adds full keyboard support (cut/paste cards with keys) and asks if they now meet WCAG 2.2 SC 2.5.7 Dragging Movements. Do they?",
      options: [
        "No — 2.5.7 requires a SINGLE-POINTER alternative to dragging (e.g., click a card, then click a 'move here' target); keyboard support satisfies 2.1.1 but not 2.5.7",
        "Yes — any non-dragging alternative, including keyboard, satisfies 2.5.7",
        "No — 2.5.7 bans drag-and-drop interfaces entirely",
        "Yes — 2.5.7 only applies to native mobile apps, not web content"
      ],
      correct: 0,
      explanation: "2.5.7 (AA) requires that functionality using a dragging movement be achievable by a single pointer WITHOUT dragging, unless dragging is essential or determined by the user agent. It targets pointer users (e.g., tremors, limited dexterity) who can click but cannot sustain press-hold-move-release. Keyboard alternatives are required separately by 2.1.1, but they do not satisfy the single-pointer requirement of 2.5.7.",
      wrongExplanations: {
        1: "This is the classic near-miss: keyboard operation is a different requirement (2.1.1). A pointer user who cannot drag may also not use a keyboard efficiently — 2.5.7 specifically demands a pointer-based, non-dragging path.",
        2: "Drag-and-drop is allowed — there just must also be a single-pointer alternative (or dragging must be essential).",
        3: "WCAG applies to web content; 2.5.7 absolutely applies to web apps."
      },
      topicLinks: ['wcag-22-new-criteria', 'wcag-operable'],
      difficulty: 'hard',
      tags: ['wcag-2.2', 'dragging', 'pointer']
    },
    {
      id: 1306,
      question: "What is the minimum pointer target size required by WCAG 2.2 SC 2.5.8 Target Size (Minimum) at Level AA?",
      options: [
        "24 by 24 CSS pixels (with exceptions for spacing, equivalents, inline targets, user-agent controls, and essential presentations)",
        "44 by 44 CSS pixels",
        "16 by 16 CSS pixels",
        "There is no numeric minimum; targets just need visible focus indicators"
      ],
      correct: 0,
      explanation: "2.5.8 Target Size (Minimum), new at Level AA in WCAG 2.2, requires targets to be at least 24 by 24 CSS pixels, with exceptions including sufficient spacing (a 24px circle centered on the target not intersecting other targets), an equivalent control elsewhere, inline text links, user-agent-determined sizing, and essential presentations.",
      wrongExplanations: {
        1: "44 by 44 is the stricter AAA requirement from SC 2.5.5 Target Size (Enhanced), introduced in WCAG 2.1 — a frequent exam trap.",
        2: "16 by 16 is not a WCAG target size threshold.",
        3: "2.5.8 sets an explicit numeric minimum; focus indicators are covered by different criteria (2.4.7, 2.4.13)."
      },
      topicLinks: ['wcag-22-new-criteria'],
      difficulty: 'easy',
      tags: ['wcag-2.2', 'target-size', 'pointer']
    },
    {
      id: 1307,
      question: "A page has a sticky cookie banner across the bottom. When users Tab through the page, focused links behind the banner are partially visible above its edge, but one link is completely covered. How does this fare against WCAG 2.2's Focus Not Obscured criteria?",
      options: [
        "The completely covered link fails 2.4.11 (Minimum, AA); the partially covered links pass 2.4.11 but would fail 2.4.12 (Enhanced, AAA)",
        "All of the covered links fail 2.4.11, because no part of a focused element may ever be hidden at Level AA",
        "Nothing fails — sticky banners are user interface chrome and exempt from WCAG",
        "The page fails 2.4.13 Focus Appearance, which is the Level AA criterion about obscured focus"
      ],
      correct: 0,
      explanation: "2.4.11 Focus Not Obscured (Minimum) (AA) requires that a focused component not be ENTIRELY hidden by author-created content — so the fully covered link fails. Partial obscuring passes at AA but violates the AAA version, 2.4.12 Focus Not Obscured (Enhanced), which forbids hiding any part of the focused component.",
      wrongExplanations: {
        1: "The 'no part hidden' rule is the AAA Enhanced criterion (2.4.12). At Level AA, only complete obscuring fails.",
        2: "The cookie banner is author-created content — exactly what these criteria address (sticky headers, footers, banners).",
        3: "2.4.13 Focus Appearance concerns the size and contrast of the focus indicator, and it is Level AAA, not AA."
      },
      topicLinks: ['wcag-22-new-criteria', 'focus-indicators'],
      difficulty: 'hard',
      tags: ['wcag-2.2', 'focus', 'low-vision']
    },
    {
      id: 1308,
      question: "Which two of the nine new WCAG 2.2 success criteria are at Level A?",
      options: [
        "3.2.6 Consistent Help and 3.3.7 Redundant Entry",
        "3.3.8 Accessible Authentication (Minimum) and 2.5.8 Target Size (Minimum)",
        "2.4.11 Focus Not Obscured (Minimum) and 2.5.7 Dragging Movements",
        "2.4.13 Focus Appearance and 3.3.9 Accessible Authentication (Enhanced)"
      ],
      correct: 0,
      explanation: "The two Level A additions in WCAG 2.2 are 3.2.6 Consistent Help and 3.3.7 Redundant Entry — both driven by the needs of people with cognitive disabilities. Four new criteria are AA (2.4.11, 2.5.7, 2.5.8, 3.3.8) and three are AAA (2.4.12, 2.4.13, 3.3.9).",
      wrongExplanations: {
        1: "Both Accessible Authentication (Minimum) and Target Size (Minimum) are Level AA.",
        2: "Both Focus Not Obscured (Minimum) and Dragging Movements are Level AA.",
        3: "Focus Appearance and Accessible Authentication (Enhanced) are both Level AAA."
      },
      topicLinks: ['wcag-22-new-criteria'],
      difficulty: 'medium',
      tags: ['wcag-2.2', 'conformance-levels']
    },
    // --- Normative vs. non-normative & techniques (1309-1312) ---
    {
      id: 1309,
      question: "Which part of the WCAG documentation is normative — that is, required for conformance?",
      options: [
        "The success criteria text (with the conformance requirements and glossary)",
        "The Understanding WCAG documents",
        "The Techniques for WCAG documents",
        "The ARIA Authoring Practices Guide"
      ],
      correct: 0,
      explanation: "Only the WCAG standard itself is normative: the success criteria, the conformance requirements, and the glossary definitions they depend on. The Understanding documents and Techniques are informative (non-normative) supporting materials — invaluable for interpretation, but never required.",
      wrongExplanations: {
        1: "Understanding documents explain intent, benefits, and examples for each SC — they are explicitly informative.",
        2: "Techniques describe possible ways to meet criteria; the W3C states they are informative and not required.",
        3: "The APG is a W3C informative resource about ARIA widget patterns; it is not even part of WCAG."
      },
      topicLinks: ['normative-vs-non-normative'],
      difficulty: 'easy',
      tags: ['normative', 'wcag-structure']
    },
    {
      id: 1310,
      question: "An auditor reports a failure of SC 1.1.1 because a team used a custom, undocumented method for providing text alternatives instead of W3C sufficient technique H37 (using alt attributes). The team's method demonstrably exposes correct text alternatives to assistive technology. Who is right?",
      options: [
        "The team — techniques are informative and not required; any method that satisfies the normative SC text conforms",
        "The auditor — sufficient techniques are the only valid ways to meet a success criterion",
        "The auditor — custom methods require prior W3C approval before they can be used",
        "Neither — conformance can only be determined by automated testing tools"
      ],
      correct: 0,
      explanation: "Techniques are non-normative. The W3C is explicit that authors may use other methods, including new or custom ones, as long as the success criterion itself is satisfied. Audit findings should cite the normative SC, not the absence of a particular documented technique.",
      wrongExplanations: {
        1: "Sufficient techniques are vetted, reliable ways to meet an SC, but the documented list is not exhaustive and is not mandatory.",
        2: "There is no W3C approval process for individual authors' methods; conformance is judged against the SC text.",
        3: "Automated tools can only detect a subset of issues; conformance is judged against the success criteria by any reliable means."
      },
      topicLinks: ['normative-vs-non-normative'],
      difficulty: 'medium',
      tags: ['techniques', 'auditing']
    },
    {
      id: 1311,
      question: "During an audit you find markup that exactly matches W3C documented failure F65 ('omitting the alt attribute on img elements'). What does matching a documented failure technique mean for conformance?",
      options: [
        "The content fails the related success criterion — documented failures are patterns the W3C has determined violate an SC",
        "Nothing by itself — failure techniques are informative, so matching one has no implications",
        "The content fails all of WCAG and no conformance claim can be made for the site",
        "The content is conformant as long as at least one sufficient technique is used elsewhere on the page"
      ],
      correct: 0,
      explanation: "Failure techniques document patterns known to violate specific success criteria. Content that matches a documented failure does not conform to that SC (unless a conforming alternative version is provided). While the failure documents are technically informative, they describe conditions under which the normative SC is not met.",
      wrongExplanations: {
        1: "This is the trap: the documents are informative, but what they DESCRIBE is a violation of the normative SC — so the content still fails the criterion.",
        2: "A failure affects the specific success criterion (and the page's conformance claim at that level), not 'all of WCAG' as a blanket judgment.",
        3: "Sufficient techniques elsewhere don't neutralize a failure — the failing content itself must be fixed or a conforming alternative provided."
      },
      topicLinks: ['normative-vs-non-normative', 'failures-vs-best-practices'],
      difficulty: 'medium',
      tags: ['techniques', 'failures', 'auditing']
    },
    {
      id: 1312,
      question: "A developer insists their tabs widget is 'non-conformant with WAI-ARIA' because it doesn't use the keyboard scheme in the ARIA Authoring Practices Guide (APG). What is the most accurate correction?",
      options: [
        "The ARIA specification is normative (e.g., allowed roles and attributes), but the APG is informative guidance — its patterns are recommended, not conformance requirements",
        "Both the ARIA spec and the APG are normative, so the developer is right",
        "Neither the ARIA spec nor the APG is normative, so ARIA usage can never be wrong",
        "The APG is normative but only at WCAG Level AAA"
      ],
      correct: 0,
      explanation: "The WAI-ARIA specification is a normative W3C standard: it defines roles, states, properties, and rules about their use. The APG (and the 'Using ARIA' document) are informative — they describe recommended interaction patterns. Deviating from APG isn't automatically a failure, though the widget must still meet WCAG criteria like 2.1.1 Keyboard and 4.1.2 Name, Role, Value.",
      wrongExplanations: {
        1: "The APG is explicitly informative; treating its patterns as a conformance standard is a common misconception.",
        2: "The ARIA spec itself IS normative — misusing roles or attributes can create real failures (e.g., under 4.1.2).",
        3: "The APG has no normative status in WCAG at any level — WCAG levels apply to success criteria, not external guides."
      },
      topicLinks: ['normative-vs-non-normative', 'aria-overview', 'aria-widget-patterns'],
      difficulty: 'medium',
      tags: ['aria', 'normative', 'apg']
    },
    // --- Accessibility-supported technologies (1313-1315) ---
    {
      id: 1313,
      question: "What does WCAG conformance requirement 4 ('accessibility supported') require?",
      options: [
        "Only ways of using technologies that work with users' assistive technologies and browsers' accessibility features can be relied upon to satisfy success criteria",
        "All content must be tested with every screen reader on the market before launch",
        "Only W3C technologies (HTML, CSS, SVG) may be used on a conforming page",
        "Pages must include a list of supported assistive technologies in the footer"
      ],
      correct: 0,
      explanation: "Conformance requirement 4 says that only accessibility-supported ways of using technologies can be RELIED UPON to satisfy success criteria — meaning the technique must actually work in users' assistive technologies and in the accessibility features of browsers and other user agents, not merely be valid per a specification.",
      wrongExplanations: {
        1: "WCAG deliberately does not prescribe how many or which AT/browser combinations must be tested or supported.",
        2: "Non-W3C technologies may be used, as long as the ways they are used are accessibility supported (and non-interfering).",
        3: "Documenting tested AT is good audit practice, but it is not what the conformance requirement says."
      },
      topicLinks: ['accessibility-supported', 'wcag-conformance-requirements'],
      difficulty: 'easy',
      tags: ['accessibility-supported', 'wcag-conformance']
    },
    {
      id: 1314,
      question: "A team uses a brand-new ARIA attribute that is valid in the latest ARIA specification, but testing shows no major screen reader exposes it yet. Can the team rely on it to satisfy a WCAG success criterion?",
      options: [
        "No — per conformance requirement 4, an unsupported usage cannot be relied upon; they need an accessibility-supported method (and may keep the new attribute alongside it)",
        "Yes — validity against the W3C specification is what WCAG conformance measures",
        "Yes — screen reader vendors are required to implement W3C specifications within 12 months",
        "No — and they must also remove the attribute, because unsupported attributes always violate WCAG"
      ],
      correct: 0,
      explanation: "Being in the spec is not the same as being accessibility supported. Since users' AT cannot consume the attribute, it cannot be relied upon for conformance. The team should meet the SC through a supported technique; the newer attribute can remain as progressive enhancement provided it does not interfere (conformance requirement 5).",
      wrongExplanations: {
        1: "Spec validity is necessary but insufficient — conformance requirement 4 asks whether the usage actually works with users' AT and browsers.",
        2: "No such mandate exists; AT support often lags specifications by years, which is exactly why this requirement exists.",
        3: "Unsupported technologies may still be USED — they just cannot be relied upon, and must not block access to the conforming version."
      },
      topicLinks: ['accessibility-supported', 'aria-overview'],
      difficulty: 'medium',
      tags: ['accessibility-supported', 'aria', 'at-support']
    },
    {
      id: 1315,
      question: "How should a developer determine whether a particular HTML/ARIA feature is 'accessibility supported' enough to rely on?",
      options: [
        "Test it in the browser + assistive technology combinations their audience uses and consult community support data (e.g., a11ysupport.io) — WCAG itself doesn't define a required set of combinations",
        "Check that the page passes the W3C HTML validator",
        "Confirm the feature appears in the WCAG sufficient techniques list, which guarantees universal AT support",
        "Verify support in one screen reader, since all screen readers expose the accessibility tree identically"
      ],
      correct: 0,
      explanation: "WCAG deliberately leaves 'how much support counts' undefined — it depends on the audience's environments. In practice, developers test real pairings (NVDA + Chrome, JAWS + Edge, VoiceOver + Safari, TalkBack + Chrome) and consult community-maintained databases like a11ysupport.io, re-verifying as browsers and AT update.",
      wrongExplanations: {
        1: "Validation checks syntax against the spec; it says nothing about whether assistive technologies actually expose the feature.",
        2: "Sufficient techniques are vetted ways to meet criteria, but they don't guarantee support in every AT — support still varies and changes over time.",
        3: "Support differs significantly per screen reader AND per browser pairing — a feature can work in NVDA + Chrome yet fail in VoiceOver + Safari."
      },
      topicLinks: ['accessibility-supported', 'browser-at-interoperability', 'screen-reader-testing'],
      difficulty: 'hard',
      tags: ['accessibility-supported', 'testing', 'at-support']
    },
    // --- Roving tabindex & aria-activedescendant (1316-1319) ---
    {
      id: 1316,
      question: "In a roving tabindex implementation of a toolbar, how are tabindex values managed?",
      options: [
        "The active control has tabindex='0' and all others have tabindex='-1'; arrow keys update the values and move real DOM focus to the new active control",
        "Every control has tabindex='0' so users can Tab to each one",
        "Controls are numbered tabindex='1', '2', '3'... to enforce the correct order",
        "The container has tabindex='0' and aria-activedescendant points at the active control"
      ],
      correct: 0,
      explanation: "Roving tabindex keeps the composite widget as a single Tab stop: exactly one item holds tabindex='0' (the roving position), the rest hold tabindex='-1'. On arrow key presses, the script swaps the values and calls .focus() on the new item, so DOM focus genuinely moves and screen readers announce the newly focused control.",
      wrongExplanations: {
        1: "Giving every control tabindex='0' makes each one a separate Tab stop, defeating the one-stop composite pattern.",
        2: "Positive tabindex values hijack the page's global tab order and are a well-known anti-pattern.",
        3: "That describes the aria-activedescendant pattern — the alternative approach where focus stays on the container instead of roving."
      },
      topicLinks: ['focus-management-patterns', 'aria-widget-patterns'],
      difficulty: 'easy',
      tags: ['roving-tabindex', 'focus-management', 'keyboard']
    },
    {
      id: 1317,
      question: "In a listbox using aria-activedescendant, what happens to DOM focus as the user presses arrow keys through the options?",
      options: [
        "DOM focus stays on the listbox container; the aria-activedescendant attribute is updated to the id of the active option, which screen readers announce as if focused",
        "DOM focus moves to each option element in turn",
        "DOM focus moves to the document body between key presses",
        "Focus alternates between the container and the active option on every key press"
      ],
      correct: 0,
      explanation: "With aria-activedescendant, document.activeElement never leaves the focusable container. Arrow key handlers update the container's aria-activedescendant value to reference the active option's unique id; assistive technologies then treat that referenced element as the point of interest and announce it.",
      wrongExplanations: {
        1: "Moving real focus to each option describes the roving tabindex pattern, not aria-activedescendant.",
        2: "Focus never drops to the body — that would eject the user from the widget entirely.",
        3: "There is no alternation; the whole point of the pattern is that focus remains stationary on the container."
      },
      topicLinks: ['focus-management-patterns', 'aria-states-properties'],
      difficulty: 'medium',
      tags: ['aria-activedescendant', 'focus-management', 'listbox']
    },
    {
      id: 1318,
      question: "Why must an editable combobox (a text input that filters a popup list of options) use aria-activedescendant rather than roving tabindex for its list options?",
      options: [
        "DOM focus must stay in the text input so the user can keep typing while arrow keys highlight options; moving real focus into the list would break text entry",
        "Roving tabindex is deprecated in the ARIA specification",
        "aria-activedescendant performs better because it avoids JavaScript event handlers",
        "Screen readers cannot announce elements that receive real DOM focus inside a popup"
      ],
      correct: 0,
      explanation: "In an editable combobox, typing and option navigation are interleaved — the user types to filter, arrows to a suggestion, types more to refine. That only works if DOM focus remains in the input. aria-activedescendant lets the input keep focus while telling AT which option in the popup is active.",
      wrongExplanations: {
        1: "Roving tabindex is not deprecated — it remains the recommended default for most composite widgets like toolbars and tab lists.",
        2: "Both patterns require JavaScript key handling; performance is not the deciding factor.",
        3: "Screen readers announce focused elements in popups fine — the issue is that the user could no longer type in the input."
      },
      topicLinks: ['focus-management-patterns', 'aria-widget-patterns'],
      difficulty: 'hard',
      tags: ['aria-activedescendant', 'combobox', 'focus-management']
    },
    {
      id: 1319,
      question: "A custom listbox uses aria-activedescendant correctly for announcements, but sighted keyboard users report two problems: they can't see which option is active, and arrowing past the visible area 'loses' the highlight. What is the likely cause?",
      options: [
        "Since real focus never moves, :focus styles never apply to options and the browser never auto-scrolls — the script must style the active option explicitly and call scrollIntoView()",
        "aria-activedescendant is unsupported in all browsers, so the widget must be rebuilt with roving tabindex",
        "The options are missing aria-live attributes, which control visual highlighting",
        "The container needs tabindex='1' to enable scrolling behavior"
      ],
      correct: 0,
      explanation: "These are the two classic aria-activedescendant pitfalls. DOM focus stays on the container, so the option never matches :focus and gets no native focus ring (risking SC 2.4.7 Focus Visible), and the browser has no reason to scroll an unfocused element into view. Authors must add explicit active styling (e.g., on [aria-selected='true']) and programmatically scroll the active option into view.",
      wrongExplanations: {
        1: "aria-activedescendant is broadly supported; the bug is missing visual styling and scrolling logic, not the pattern itself.",
        2: "aria-live governs announcements of dynamic content changes — it has nothing to do with visual highlighting.",
        3: "Positive tabindex values are an anti-pattern and have no effect on scrolling."
      },
      topicLinks: ['focus-management-patterns', 'focus-indicators'],
      difficulty: 'hard',
      tags: ['aria-activedescendant', 'focus-visible', 'pitfalls']
    },
    // --- EN 301 549 & EU Web Accessibility Directive (1320-1322) ---
    {
      id: 1320,
      question: "How does EN 301 549 go beyond WCAG for a public-sector web team in the EU?",
      options: [
        "Besides clause 9 (which incorporates WCAG 2.1 AA for web content), other clauses add requirements — e.g., for non-web documents (clause 10), software (clause 11), and media player capabilities like caption playback (clause 7)",
        "It upgrades all WCAG AAA criteria to mandatory for web pages",
        "It only restates WCAG 2.1 AA with no additional requirements of any kind",
        "It replaces WCAG entirely with an unrelated European test methodology"
      ],
      correct: 0,
      explanation: "EN 301 549 is an ICT-wide standard. Clause 9 incorporates WCAG 2.1 Level AA for web content, but the standard also covers non-web documents (clause 10), software and mobile apps (clause 11), documentation and support services (clause 12), and functional requirements such as captioning playback and audio description capabilities for media players (clause 7) — obligations WCAG alone does not impose.",
      wrongExplanations: {
        1: "EN 301 549 does not raise the web requirement to AAA; the web baseline is WCAG 2.1 AA.",
        2: "It is much broader than a restatement — its coverage of documents, software, hardware, and support services is precisely how it extends beyond WCAG.",
        3: "It builds directly on WCAG rather than replacing it; clause 9 mirrors WCAG 2.1 AA."
      },
      topicLinks: ['en-301-549', 'wcag-overview'],
      difficulty: 'medium',
      tags: ['en-301-549', 'european-standards']
    },
    {
      id: 1321,
      question: "Beyond making content conform to the standard, what does the EU Web Accessibility Directive (2016/2102) require of public sector websites and mobile apps?",
      options: [
        "Publishing an accessibility statement (including known non-accessible content) and providing a feedback mechanism, with member states monitoring and reporting on compliance",
        "Annual third-party certification of every page by a private auditor",
        "Hosting all content on EU-based servers",
        "Translating all content into every official EU language"
      ],
      correct: 0,
      explanation: "The Web Accessibility Directive requires public sector bodies to publish and maintain an accessibility statement describing conformance status and known exceptions, to provide a feedback mechanism so users can report barriers and request inaccessible content, and it obligates member states to monitor compliance periodically and report to the European Commission. EN 301 549 is the harmonized standard giving presumption of conformity.",
      wrongExplanations: {
        1: "The directive establishes member-state monitoring, not mandatory private third-party certification of every page.",
        2: "Server location is a data/sovereignty matter, not part of the accessibility directive.",
        3: "Language translation requirements are unrelated to the directive's accessibility obligations."
      },
      topicLinks: ['en-301-549'],
      difficulty: 'medium',
      tags: ['web-accessibility-directive', 'european-standards', 'legal']
    },
    {
      id: 1322,
      question: "What is the purpose of Annex A of EN 301 549?",
      options: [
        "It contains tables mapping which of the standard's requirements apply for presumed conformity with the Web Accessibility Directive for websites and mobile apps",
        "It is the full text of WCAG 2.1 reproduced verbatim",
        "It lists the assistive technology products officially approved in the EU",
        "It defines the financial penalties for non-compliance in each member state"
      ],
      correct: 0,
      explanation: "Annex A of EN 301 549 contains the tables (e.g., Table A.1) that identify exactly which clauses and requirements of the standard are relevant to the essential requirements of the Web Accessibility Directive — i.e., what a public sector website or mobile app must satisfy to enjoy presumption of conformity with the directive.",
      wrongExplanations: {
        1: "WCAG criteria are incorporated by reference and restated within clause 9, not reproduced as Annex A.",
        2: "Neither the EU nor the standard maintains an 'approved AT' product list.",
        3: "Penalties are determined by individual member states' implementing legislation, not by the technical standard."
      },
      topicLinks: ['en-301-549'],
      difficulty: 'hard',
      tags: ['en-301-549', 'web-accessibility-directive', 'annex-a']
    },
    // --- SPA depth: history, announcements, AJAX updates (1323-1325) ---
    {
      id: 1323,
      question: "A SPA swaps views without using the History API (no pushState or popstate handling). What accessibility and usability problem results?",
      options: [
        "The browser back button no longer maps to the user's navigation — pressing Back can exit the app entirely or land on stale state, breaking a deeply ingrained recovery mechanism",
        "The page's CSS custom properties stop cascading",
        "All ARIA attributes are removed from the DOM on each view swap",
        "Screen readers refuse to render content that wasn't loaded with a full page request"
      ],
      correct: 0,
      explanation: "Users — especially those with cognitive disabilities, and screen reader users who rely on predictable mental models — expect Back to undo their last navigation. If a SPA changes views without pushing history entries, Back leaves the site or restores a mismatched state. Integrating with the History API (as client-side routers do) preserves Back/Forward, bookmarks, and shareable URLs.",
      wrongExplanations: {
        1: "CSS behavior is unaffected by how navigation state is managed.",
        2: "View swapping doesn't strip ARIA attributes; the markup is whatever the app renders.",
        3: "Screen readers read whatever is in the DOM regardless of how it was loaded — the problem is navigation state, not rendering."
      },
      topicLinks: ['spa-accessibility', 'javascript-accessibility'],
      difficulty: 'medium',
      tags: ['spa', 'history-api', 'routing']
    },
    {
      id: 1324,
      question: "Compare two route-change strategies in a SPA: (A) move focus to the new view's h1 (tabindex='-1'); (B) announce the new view via an aria-live region while leaving focus untouched. What is the key trade-off?",
      options: [
        "A repositions keyboard and screen reader users in the new content but interrupts; B informs without repositioning, leaving keyboard users stranded in stale content — so robust implementations often combine announcement with focus management",
        "A and B are functionally identical because focusing an element always triggers a live region announcement",
        "B is strictly better because moving focus programmatically violates WCAG 3.2.1 On Focus",
        "A is invalid because headings can never legally receive focus in HTML"
      ],
      correct: 0,
      explanation: "Moving focus to the new h1 gives screen reader AND keyboard users a real foothold in the new view (announced via the focus event), at the cost of an abrupt context move. A live region only answers 'what changed?' — focus remains in the removed/old view, so the next Tab press goes somewhere unpredictable. Mature SPAs typically move focus and may supplement with an announcement.",
      wrongExplanations: {
        1: "They are not identical — live regions don't move focus, and focusing an element is announced through focus semantics, not through live region machinery.",
        2: "3.2.1 On Focus prohibits unexpected context changes when a component RECEIVES focus; deliberately moving focus after a user-initiated navigation is accepted practice.",
        3: "Any element can receive programmatic focus with tabindex='-1' — focusing the h1 is a widely recommended technique."
      },
      topicLinks: ['spa-accessibility', 'aria-live-regions'],
      difficulty: 'hard',
      tags: ['spa', 'focus-management', 'aria-live']
    },
    {
      id: 1325,
      question: "As a user types into a search field, results filter live in a region below. What is the most appropriate way to notify screen reader users of the updates?",
      options: [
        "A polite live region announcing a summary like '12 results shown' — without moving focus, which would disrupt typing",
        "Move focus to the results list after every keystroke",
        "Use role='alert' on the results container so every change interrupts immediately",
        "Reload the entire page after each keystroke so screen readers start fresh"
      ],
      correct: 0,
      explanation: "For frequent, non-critical AJAX updates, a polite live region with a concise summary (result count) informs users when they pause typing, without yanking focus from the input. Announcing the full result list or interrupting assertively would be overwhelming; moving focus would make typing impossible.",
      wrongExplanations: {
        1: "Stealing focus on every keystroke makes the search box unusable — users could never type more than one character.",
        2: "role='alert' is assertive — it interrupts speech on every update, which is hostile for something that changes on each keystroke.",
        3: "Full page reloads destroy the interaction model and are exactly what AJAX patterns exist to avoid; the task is to communicate updates accessibly, not eliminate them."
      },
      topicLinks: ['aria-live-regions', 'spa-accessibility', 'javascript-accessibility'],
      difficulty: 'medium',
      tags: ['aria-live', 'ajax', 'search']
    },
    // --- Screen reader modes & touch gestures (1326-1327) ---
    {
      id: 1326,
      question: "A custom date picker works perfectly with a mouse, but NVDA users report that pressing arrow keys reads the page text instead of changing the date. What is the most likely explanation?",
      options: [
        "NVDA is in browse mode, where arrow keys are intercepted by the virtual buffer for reading; the widget needs proper interactive roles/focus so the screen reader switches to focus (forms) mode and passes keys through",
        "Arrow keys can never be used by web applications while any screen reader is running",
        "NVDA does not support JavaScript event handlers",
        "The date picker needs aria-live='assertive' to receive keyboard events"
      ],
      correct: 0,
      explanation: "Windows screen readers like NVDA and JAWS have two modes: browse/virtual mode, where keystrokes (arrows, H for headings, etc.) navigate a virtual copy of the page, and focus/forms mode, where keys pass through to the web app. Screen readers switch to focus mode automatically when the user moves into a recognized interactive widget — which requires correct roles (e.g., grid, spinbutton), focus management, and states. Without them, arrow presses never reach the widget's handlers.",
      wrongExplanations: {
        1: "Web apps receive arrow keys fine once the screen reader is in focus mode — composite widgets depend on exactly this.",
        2: "NVDA runs against the browser's accessibility tree and DOM; JavaScript handlers work normally when keys pass through.",
        3: "aria-live controls announcements of content changes; it has no effect on keyboard event routing or modes."
      },
      topicLinks: ['screen-reader-modes', 'focus-management-patterns', 'screen-readers'],
      difficulty: 'hard',
      tags: ['screen-reader-modes', 'nvda', 'keyboard']
    },
    {
      id: 1327,
      question: "How does a VoiceOver or TalkBack user typically move to the next element and activate a control on a touch screen?",
      options: [
        "Swipe right to move to the next element, then double-tap anywhere to activate the current item",
        "Single-tap the control directly, exactly as without a screen reader",
        "Triple-tap with two fingers to move, pinch to activate",
        "Shake the device to advance and long-press to activate"
      ],
      correct: 0,
      explanation: "Mobile screen readers intercept touch input: a right swipe moves the reading cursor to the next element (left swipe goes back), and a double-tap activates whatever currently has the screen reader cursor. Users can also explore by touch — dragging a finger to hear items under it. Standard single taps no longer activate controls directly.",
      wrongExplanations: {
        1: "With the screen reader running, a single tap moves the cursor/announces the item rather than activating it — activation requires double-tap.",
        2: "These are not the standard navigation/activation gestures; multi-finger gestures perform other functions (e.g., scrolling, reading from top).",
        3: "Shake and long-press are not the navigation model of VoiceOver or TalkBack."
      },
      topicLinks: ['screen-readers', 'disability-user-strategies'],
      difficulty: 'easy',
      tags: ['mobile', 'voiceover', 'talkback', 'touch']
    },
    // --- Deaf and deaf-blind user strategies (1328) ---
    {
      id: 1328,
      question: "Your video content has accurate captions. A deaf-blind user reports they still cannot access it. Which addition serves them, and what serves Deaf users whose first language is sign language?",
      options: [
        "A text transcript, readable on a refreshable braille display, serves deaf-blind users; sign language interpretation (SC 1.2.6, Level AAA) serves Deaf signers",
        "Higher-contrast captions serve deaf-blind users; transcripts serve sign language users",
        "Audio description serves both groups",
        "Nothing further is needed — captions satisfy every auditory-disability use case"
      ],
      correct: 0,
      explanation: "Captions are visual, so a deaf-blind user cannot perceive them; a complete text transcript can be read line-by-line on a refreshable braille display. For many Deaf people, a national sign language is their first language and written text a second one — SC 1.2.6 Sign Language (Prerecorded), Level AAA, addresses providing sign language interpretation for prerecorded audio content.",
      wrongExplanations: {
        1: "Contrast doesn't help a user who cannot see the screen at all, and transcripts are not a sign-language substitute — this reverses the appropriate accommodations.",
        2: "Audio description narrates visual information for blind users who can hear — it is inaccessible to both deaf-blind users and unnecessary for Deaf users.",
        3: "Captions don't reach deaf-blind users (visual) and may be harder than signing for Deaf first-language signers — that's why transcripts and SC 1.2.6 exist."
      },
      topicLinks: ['disability-user-strategies', 'wcag-perceivable'],
      difficulty: 'medium',
      tags: ['deaf-blind', 'captions', 'transcripts', 'braille']
    }
  ]
};
