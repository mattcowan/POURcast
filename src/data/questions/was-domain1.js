export const wasDomain1 = {
  id: 'was-domain1',
  courseId: 'was',
  title: 'WCAG Principles & Success Criteria',
  iconName: 'code',
  color: 'bg-indigo-600',
  description: 'WCAG structure, specific success criteria, conformance levels, and techniques.',
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
    }
  ]
};
