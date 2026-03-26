export const domain2 = {
  id: 'domain2',
  courseId: 'cpacc',
  title: 'Accessibility & Universal Design',
  iconName: 'brain',
  color: 'bg-purple-600',
  description: 'WCAG principles, universal design, UDL, and accessibility concepts.',
  questions: [
    // ==========================================
    // WCAG Principles - POUR (Questions 201-240)
    // ==========================================

    // --- WCAG Overview (201-210) ---
    {
      id: 201,
      question: "What does the acronym POUR stand for in the context of WCAG?",
      options: [
        "Perceivable, Operable, Understandable, Robust",
        "Practical, Operable, Usable, Reliable",
        "Perceivable, Open, Universal, Robust",
        "Predictable, Operable, Understandable, Responsive"
      ],
      correct: 0,
      explanation: "POUR stands for Perceivable, Operable, Understandable, and Robust — the four foundational principles of WCAG that organize all success criteria.",
      wrongExplanations: {
        1: "These terms do not correspond to the WCAG principles. WCAG uses Perceivable (not Practical), Understandable (not Usable), and Robust (not Reliable).",
        2: "Open and Universal are not WCAG principles. The correct terms are Operable and Understandable.",
        3: "Predictable and Responsive are not WCAG principles. The correct first and last principles are Perceivable and Robust."
      },
      topicLinks: ['wcag-overview'],
      difficulty: 'easy',
      tags: ['wcag', 'pour']
    },
    {
      id: 202,
      question: "WCAG is organized in a hierarchical structure. What is the correct order from broadest to most specific?",
      options: [
        "Principles → Guidelines → Success Criteria → Techniques",
        "Guidelines → Principles → Success Criteria → Techniques",
        "Principles → Success Criteria → Guidelines → Techniques",
        "Techniques → Success Criteria → Guidelines → Principles"
      ],
      correct: 0,
      explanation: "WCAG follows a hierarchy: 4 Principles (POUR) contain Guidelines, which contain testable Success Criteria, which are supported by advisory Techniques.",
      wrongExplanations: {
        1: "Guidelines do not sit above Principles. Principles are the broadest level of WCAG's hierarchy.",
        2: "Success Criteria sit under Guidelines, not directly under Principles. The correct order places Guidelines between Principles and Success Criteria.",
        3: "This is the hierarchy in reverse. Techniques are the most specific level, not the broadest."
      },
      topicLinks: ['wcag-overview'],
      difficulty: 'easy',
      tags: ['wcag', 'structure']
    },
    {
      id: 203,
      question: "What are the three conformance levels defined in WCAG?",
      options: [
        "A, AA, AAA",
        "1, 2, 3",
        "Basic, Intermediate, Advanced",
        "Low, Medium, High"
      ],
      correct: 0,
      explanation: "WCAG defines three conformance levels: A (minimum), AA (mid-range, commonly required by law), and AAA (highest level of accessibility).",
      wrongExplanations: {
        1: "WCAG does not use numeric conformance levels. The levels are designated by the letters A, AA, and AAA.",
        2: "These are not WCAG conformance levels. WCAG uses A, AA, and AAA to designate increasing levels of conformance.",
        3: "WCAG does not use Low, Medium, and High. The conformance levels are A, AA, and AAA."
      },
      topicLinks: ['wcag-overview'],
      difficulty: 'easy',
      tags: ['wcag', 'conformance']
    },
    {
      id: 204,
      question: "Which WCAG conformance level is most commonly required by accessibility laws and policies worldwide?",
      options: [
        "Level AA",
        "Level A",
        "Level AAA",
        "All three levels equally"
      ],
      correct: 0,
      explanation: "Level AA is the most commonly referenced conformance level in accessibility laws and policies worldwide, including the ADA, Section 508 refresh, and the European EN 301 549.",
      wrongExplanations: {
        1: "Level A is the minimum conformance level and is generally considered insufficient for legal compliance on its own.",
        2: "Level AAA is the highest conformance level but is not typically required by law, as WCAG itself notes it is not possible to satisfy all AAA criteria for some content.",
        3: "Laws and policies do not typically require all three levels equally. Level AA is the standard benchmark for legal compliance."
      },
      topicLinks: ['wcag-overview'],
      difficulty: 'easy',
      tags: ['wcag', 'conformance', 'law']
    },
    {
      id: 205,
      question: "How do WCAG conformance levels build on each other?",
      options: [
        "To conform to AA, a site must also meet all A criteria; to conform to AAA, it must meet all A and AA criteria",
        "Each level is independent — a site can conform to AAA without meeting A criteria",
        "A site only needs to meet the criteria for its target level",
        "Levels A, AA, and AAA apply to different types of content, not to the same content"
      ],
      correct: 0,
      explanation: "WCAG conformance levels are cumulative. Level AA includes all Level A success criteria plus additional ones. Level AAA includes all A and AA criteria plus even more.",
      wrongExplanations: {
        1: "Conformance levels are not independent. They are cumulative — each higher level includes all requirements of the lower levels.",
        2: "A site must meet all criteria at lower levels to claim a higher conformance level. The levels build upon each other.",
        3: "All three levels can apply to the same content. They represent increasing degrees of accessibility for the same content."
      },
      topicLinks: ['wcag-overview'],
      difficulty: 'medium',
      tags: ['wcag', 'conformance']
    },
    {
      id: 206,
      question: "Which version of WCAG first introduced success criteria addressing mobile accessibility and touch input?",
      options: [
        "WCAG 2.1",
        "WCAG 2.0",
        "WCAG 2.2",
        "WCAG 1.0"
      ],
      correct: 0,
      explanation: "WCAG 2.1, published in 2018, added 17 new success criteria addressing gaps in mobile accessibility, people with low vision, and people with cognitive disabilities.",
      wrongExplanations: {
        1: "WCAG 2.0 was published in 2008 before the widespread adoption of mobile devices and touch interfaces. It did not include specific mobile accessibility criteria.",
        2: "WCAG 2.2 built on 2.1 with additional criteria, but mobile accessibility criteria were first introduced in WCAG 2.1.",
        3: "WCAG 1.0 was published in 1999, long before mobile devices became prevalent."
      },
      topicLinks: ['wcag-overview'],
      difficulty: 'medium',
      tags: ['wcag', 'versions']
    },
    {
      id: 207,
      question: "WCAG 2.2 introduced several new success criteria. Which of the following is a NEW criterion added in WCAG 2.2?",
      options: [
        "Focus Appearance (enhanced focus indicators)",
        "Text Alternatives for non-text content",
        "Keyboard accessibility",
        "Color contrast ratios"
      ],
      correct: 0,
      explanation: "WCAG 2.2 (published in 2023) added new success criteria including Focus Appearance, Dragging Movements, Accessible Authentication, and Redundant Entry, among others.",
      wrongExplanations: {
        1: "Text Alternatives (SC 1.1.1) has been part of WCAG since version 2.0. It is not new to 2.2.",
        2: "Keyboard accessibility (SC 2.1.1) has been a core requirement since WCAG 2.0.",
        3: "Color contrast ratios (SC 1.4.3) have been part of WCAG since version 2.0."
      },
      topicLinks: ['wcag-overview'],
      difficulty: 'hard',
      tags: ['wcag', 'versions']
    },
    {
      id: 209,
      question: "What is the relationship between WCAG 2.0 and WCAG 2.1?",
      options: [
        "WCAG 2.1 includes all WCAG 2.0 success criteria plus additional new ones",
        "WCAG 2.1 replaces WCAG 2.0 with entirely different criteria",
        "WCAG 2.1 removes some WCAG 2.0 criteria and adds new ones",
        "WCAG 2.0 and 2.1 are completely independent standards"
      ],
      correct: 0,
      explanation: "WCAG 2.1 is backward-compatible with 2.0. It includes all 2.0 success criteria and adds 17 new ones. A site conforming to WCAG 2.1 also conforms to 2.0.",
      wrongExplanations: {
        1: "WCAG 2.1 does not replace 2.0 with different criteria. It extends 2.0 by adding new criteria while keeping all existing ones.",
        2: "WCAG 2.1 does not remove any 2.0 criteria. It only adds new success criteria on top of the existing 2.0 requirements.",
        3: "The versions are not independent. WCAG 2.1 is designed to be backward-compatible with 2.0."
      },
      topicLinks: ['wcag-overview'],
      difficulty: 'medium',
      tags: ['wcag', 'versions']
    },
    {
      id: 210,
      question: "Which of the following is NOT one of the four WCAG principles?",
      options: [
        "Navigable",
        "Perceivable",
        "Operable",
        "Robust"
      ],
      correct: 0,
      explanation: "Navigable is a WCAG guideline (Guideline 2.4) under the Operable principle, not a principle itself. The four principles are Perceivable, Operable, Understandable, and Robust.",
      wrongExplanations: {
        1: "Perceivable is the first WCAG principle, dealing with content that can be perceived by users.",
        2: "Operable is the second WCAG principle, dealing with user interface components that can be operated by all users.",
        3: "Robust is the fourth WCAG principle, dealing with content that is compatible with assistive technologies."
      },
      topicLinks: ['wcag-overview'],
      difficulty: 'easy',
      tags: ['wcag', 'pour']
    },

    // --- Perceivable (211-220) ---
    {
      id: 211,
      question: "A website provides captions for all video content. Which WCAG principle does this BEST support?",
      options: [
        "Perceivable",
        "Operable",
        "Understandable",
        "Robust"
      ],
      correct: 0,
      explanation: "Captions fall under the Perceivable principle (Guideline 1.2: Time-based Media). They provide an alternative way to perceive audio content, making it available through a different sense (sight instead of hearing).",
      wrongExplanations: {
        1: "Operable deals with navigating and interacting with content (keyboard access, enough time, etc.), not with providing alternative ways to perceive content.",
        2: "Understandable deals with comprehending content and predicting interface behavior, not with providing alternative sensory channels for perceiving content.",
        3: "Robust deals with compatibility with assistive technologies. Captions are about providing perceivable alternatives to audio content."
      },
      topicLinks: ['wcag-perceivable'],
      difficulty: 'easy',
      tags: ['wcag', 'perceivable', 'scenario']
    },
    {
      id: 212,
      question: "Under which WCAG principle do color contrast requirements fall?",
      options: [
        "Perceivable",
        "Operable",
        "Understandable",
        "Robust"
      ],
      correct: 0,
      explanation: "Color contrast falls under the Perceivable principle, specifically Guideline 1.4 (Distinguishable). It ensures users can visually distinguish foreground content from the background.",
      wrongExplanations: {
        1: "Operable addresses interacting with content, not visual presentation. Color contrast is about making content perceivable, not operable.",
        2: "Understandable is about comprehending content meaning and behavior. Color contrast is about being able to visually perceive content — a Perceivable concern.",
        3: "Robust deals with assistive technology compatibility. Color contrast is about visual perception, which falls under Perceivable."
      },
      topicLinks: ['wcag-perceivable'],
      difficulty: 'easy',
      tags: ['wcag', 'perceivable', 'color-contrast']
    },
    {
      id: 214,
      question: "A website uses images without any alt text. Which WCAG guideline is being violated?",
      options: [
        "Guideline 1.1 — Text Alternatives",
        "Guideline 2.1 — Keyboard Accessible",
        "Guideline 3.1 — Readable",
        "Guideline 4.1 — Compatible"
      ],
      correct: 0,
      explanation: "Guideline 1.1 (Text Alternatives) under the Perceivable principle requires that all non-text content has a text alternative that serves the equivalent purpose.",
      wrongExplanations: {
        1: "Guideline 2.1 (Keyboard Accessible) addresses operability via keyboard, not providing text alternatives for images.",
        2: "Guideline 3.1 (Readable) addresses making text content readable and understandable, not providing text alternatives for images.",
        3: "Guideline 4.1 (Compatible) addresses assistive technology compatibility. While missing alt text affects AT users, the specific violation is under Guideline 1.1 Text Alternatives."
      },
      topicLinks: ['wcag-perceivable'],
      difficulty: 'easy',
      tags: ['wcag', 'perceivable', 'text-alternatives']
    },
    {
      id: 215,
      question: "Which of the following is NOT a guideline under the Perceivable principle?",
      options: [
        "Navigable",
        "Text Alternatives",
        "Time-based Media",
        "Distinguishable"
      ],
      correct: 0,
      explanation: "Navigable (Guideline 2.4) falls under the Operable principle, not Perceivable. The Perceivable guidelines are: 1.1 Text Alternatives, 1.2 Time-based Media, 1.3 Adaptable, and 1.4 Distinguishable.",
      wrongExplanations: {
        1: "Text Alternatives (1.1) is a Perceivable guideline requiring text alternatives for non-text content.",
        2: "Time-based Media (1.2) is a Perceivable guideline covering audio, video, and multimedia alternatives.",
        3: "Distinguishable (1.4) is a Perceivable guideline covering color, contrast, and audio control."
      },
      topicLinks: ['wcag-perceivable'],
      difficulty: 'medium',
      tags: ['wcag', 'perceivable']
    },
    {
      id: 216,
      question: "An online course provides a transcript for a podcast episode. This BEST addresses which Perceivable guideline?",
      options: [
        "Time-based Media (1.2)",
        "Text Alternatives (1.1)",
        "Adaptable (1.3)",
        "Distinguishable (1.4)"
      ],
      correct: 0,
      explanation: "Transcripts for audio content fall under Guideline 1.2 (Time-based Media), which addresses providing alternatives for audio and video content.",
      wrongExplanations: {
        1: "Text Alternatives (1.1) covers non-text content like images, not time-based media like podcasts.",
        2: "Adaptable (1.3) covers content that can be presented in different ways without losing meaning (e.g., structure and relationships). Transcripts for audio are under Time-based Media.",
        3: "Distinguishable (1.4) covers color use, contrast, and audio control — not providing transcripts for audio content."
      },
      topicLinks: ['wcag-perceivable'],
      difficulty: 'medium',
      tags: ['wcag', 'perceivable', 'time-based-media']
    },
    {
      id: 217,
      question: "WCAG Guideline 1.3 (Adaptable) requires that content can be presented in different ways without losing information. Which of the following is the BEST example of meeting this guideline?",
      options: [
        "Using proper heading hierarchy so screen readers can navigate the page structure",
        "Providing captions for video content",
        "Ensuring sufficient color contrast between text and background",
        "Making all functionality available from a keyboard"
      ],
      correct: 0,
      explanation: "Guideline 1.3 (Adaptable) is about creating content that can be presented in different ways — proper semantic structure (like heading hierarchy) ensures information and relationships are preserved regardless of presentation.",
      wrongExplanations: {
        1: "Captions for video fall under Guideline 1.2 (Time-based Media), not Guideline 1.3 (Adaptable).",
        2: "Color contrast falls under Guideline 1.4 (Distinguishable), not Guideline 1.3 (Adaptable).",
        3: "Keyboard accessibility falls under Guideline 2.1 (Keyboard Accessible) in the Operable principle, not under Perceivable."
      },
      topicLinks: ['wcag-perceivable'],
      difficulty: 'medium',
      tags: ['wcag', 'perceivable', 'adaptable']
    },
    {
      id: 219,
      question: "Which of the following scenarios is PRIMARILY a Perceivable issue?",
      options: [
        "A user who is deaf cannot access the audio track of a video",
        "A user cannot navigate a website using only a keyboard",
        "A user cannot understand the language used on a webpage",
        "A screen reader cannot interpret a custom widget"
      ],
      correct: 0,
      explanation: "A deaf user being unable to access audio is a Perceivable issue — the content cannot be perceived through their available senses. Captions or transcripts would make it perceivable.",
      wrongExplanations: {
        1: "Keyboard navigation is an Operable issue (Principle 2), not Perceivable.",
        2: "Not understanding the language is an Understandable issue (Principle 3). The user can perceive the text but cannot comprehend it.",
        3: "A screen reader not interpreting a widget is a Robust issue (Principle 4) — the content isn't compatible with assistive technology."
      },
      topicLinks: ['wcag-perceivable'],
      difficulty: 'medium',
      tags: ['wcag', 'perceivable', 'scenario', 'distinction']
    },
    {
      id: 220,
      question: "Audio description for video content falls under which WCAG principle and guideline?",
      options: [
        "Perceivable — Time-based Media (1.2)",
        "Perceivable — Text Alternatives (1.1)",
        "Operable — Navigable (2.4)",
        "Understandable — Readable (3.1)"
      ],
      correct: 0,
      explanation: "Audio description provides narration of visual information in video content for people who are blind or have low vision. It falls under Perceivable, Guideline 1.2 (Time-based Media).",
      wrongExplanations: {
        1: "Text Alternatives (1.1) covers non-text content like images, not time-based media. Audio description for video is under Guideline 1.2.",
        2: "Navigable (2.4) is about helping users navigate content. Audio description is about perceiving video content, not navigating it.",
        3: "Readable (3.1) is about text being comprehensible. Audio description is about making visual information in video perceivable through an alternative channel."
      },
      topicLinks: ['wcag-perceivable'],
      difficulty: 'medium',
      tags: ['wcag', 'perceivable', 'time-based-media']
    },

    // --- Operable (221-228) ---
    {
      id: 221,
      question: "A website's dropdown menu cannot be accessed using a keyboard. Which WCAG principle is being violated?",
      options: [
        "Operable",
        "Perceivable",
        "Understandable",
        "Robust"
      ],
      correct: 0,
      explanation: "Keyboard accessibility falls under the Operable principle (Guideline 2.1). All functionality must be available through a keyboard interface.",
      wrongExplanations: {
        1: "Perceivable deals with content that can be sensed (seen, heard, etc.), not with how content is operated or interacted with.",
        2: "Understandable deals with comprehension and predictability of content, not with the ability to physically interact with interface elements.",
        3: "Robust deals with assistive technology compatibility. While keyboard issues may affect AT users, the specific failure is under Operable — keyboard accessibility."
      },
      topicLinks: ['wcag-operable'],
      difficulty: 'easy',
      tags: ['wcag', 'operable', 'keyboard', 'scenario']
    },
    {
      id: 222,
      question: "Which WCAG guideline addresses the need to give users enough time to read and interact with content?",
      options: [
        "Guideline 2.2 — Enough Time",
        "Guideline 2.1 — Keyboard Accessible",
        "Guideline 1.4 — Distinguishable",
        "Guideline 3.2 — Predictable"
      ],
      correct: 0,
      explanation: "Guideline 2.2 (Enough Time) under the Operable principle requires that users have enough time to read and use content, including the ability to pause, stop, or extend time limits.",
      wrongExplanations: {
        1: "Guideline 2.1 (Keyboard Accessible) deals with making all functionality available via keyboard, not time limits.",
        2: "Guideline 1.4 (Distinguishable) under Perceivable deals with visual presentation such as color and contrast, not timing.",
        3: "Guideline 3.2 (Predictable) under Understandable deals with consistent and predictable behavior, not time limits."
      },
      topicLinks: ['wcag-operable'],
      difficulty: 'easy',
      tags: ['wcag', 'operable', 'timing']
    },
    {
      id: 223,
      question: "WCAG Guideline 2.3 addresses seizures and physical reactions. Which of the following would violate this guideline?",
      options: [
        "Content that flashes more than three times per second",
        "A video that automatically plays with sound",
        "A page that takes more than 10 seconds to load",
        "A form that submits without user confirmation"
      ],
      correct: 0,
      explanation: "Guideline 2.3 (Seizures and Physical Reactions) requires that content does not flash more than three times per second, as rapid flashing can trigger seizures in people with photosensitive epilepsy.",
      wrongExplanations: {
        1: "Auto-playing video with sound relates to Guideline 1.4.2 (Audio Control) under Perceivable, not to seizures.",
        2: "Page load times are a performance concern, not specifically addressed by WCAG's seizure guideline.",
        3: "Submitting without confirmation relates to Guideline 3.3 (Input Assistance) under Understandable, not to seizures."
      },
      topicLinks: ['wcag-operable'],
      difficulty: 'medium',
      tags: ['wcag', 'operable', 'seizures', 'scenario']
    },
    {
      id: 224,
      question: "A website has no visible focus indicator when tabbing through interactive elements. Which WCAG guideline does this primarily violate?",
      options: [
        "Guideline 2.4 — Navigable",
        "Guideline 1.4 — Distinguishable",
        "Guideline 3.2 — Predictable",
        "Guideline 4.1 — Compatible"
      ],
      correct: 0,
      explanation: "SC 2.4.7 (Focus Visible) under the Navigable guideline requires that keyboard focus indicators are visible, helping users understand where they are on the page.",
      wrongExplanations: {
        1: "While focus visibility could seem related to Distinguishable (visual presentation), the specific success criterion for focus visibility (2.4.7) is under the Navigable guideline in the Operable principle.",
        2: "Predictable (3.2) deals with consistent behavior and context changes, not focus visibility.",
        3: "Compatible (4.1) deals with assistive technology parsing and interaction, not visual focus indicators."
      },
      topicLinks: ['wcag-operable'],
      difficulty: 'medium',
      tags: ['wcag', 'operable', 'focus', 'scenario']
    },
    {
      id: 225,
      question: "Which of the following is NOT a guideline under the Operable principle?",
      options: [
        "Adaptable",
        "Keyboard Accessible",
        "Enough Time",
        "Input Modalities"
      ],
      correct: 0,
      explanation: "Adaptable (Guideline 1.3) is under the Perceivable principle, not Operable. The Operable guidelines are: 2.1 Keyboard Accessible, 2.2 Enough Time, 2.3 Seizures, 2.4 Navigable, and 2.5 Input Modalities.",
      wrongExplanations: {
        1: "Keyboard Accessible (2.1) is an Operable guideline requiring all functionality to be available via keyboard.",
        2: "Enough Time (2.2) is an Operable guideline requiring users to have sufficient time to interact with content.",
        3: "Input Modalities (2.5) is an Operable guideline (added in WCAG 2.1) addressing various input methods beyond keyboard."
      },
      topicLinks: ['wcag-operable'],
      difficulty: 'medium',
      tags: ['wcag', 'operable']
    },
    {
      id: 226,
      question: "WCAG 2.1 added Guideline 2.5 (Input Modalities). What does this guideline address?",
      options: [
        "Making it easier for users to operate functionality through various inputs beyond keyboard",
        "Ensuring content is compatible with screen readers",
        "Making text content readable in multiple languages",
        "Providing text alternatives for non-text content"
      ],
      correct: 0,
      explanation: "Guideline 2.5 (Input Modalities) addresses pointer gestures, pointer cancellation, label in name, motion actuation, and target size — making functionality accessible through various input methods.",
      wrongExplanations: {
        1: "Screen reader compatibility falls under Robust (Principle 4), not Input Modalities.",
        2: "Multilingual readability falls under Understandable (Principle 3, Guideline 3.1 Readable), not Input Modalities.",
        3: "Text alternatives fall under Perceivable (Principle 1, Guideline 1.1), not Input Modalities."
      },
      topicLinks: ['wcag-operable'],
      difficulty: 'medium',
      tags: ['wcag', 'operable', 'input-modalities']
    },
    {
      id: 228,
      question: "A web page has multiple sections but no skip navigation link. This primarily affects which WCAG guideline?",
      options: [
        "Guideline 2.4 — Navigable",
        "Guideline 2.1 — Keyboard Accessible",
        "Guideline 1.3 — Adaptable",
        "Guideline 3.2 — Predictable"
      ],
      correct: 0,
      explanation: "SC 2.4.1 (Bypass Blocks) under the Navigable guideline requires a mechanism to bypass blocks of content that are repeated on multiple pages, such as skip navigation links.",
      wrongExplanations: {
        1: "Keyboard Accessible (2.1) addresses whether functionality is available via keyboard, not mechanisms to bypass repeated content blocks.",
        2: "Adaptable (1.3) is about content structure and presentation under Perceivable, not navigation mechanisms.",
        3: "Predictable (3.2) is about consistent page behavior under Understandable, not about bypassing content blocks."
      },
      topicLinks: ['wcag-operable'],
      difficulty: 'medium',
      tags: ['wcag', 'operable', 'navigable', 'scenario']
    },

    // --- Understandable (229-235) ---
    {
      id: 229,
      question: "A website uses technical jargon and complex sentence structures throughout, making it difficult for users with cognitive disabilities to comprehend the content. Which WCAG principle is MOST relevant?",
      options: [
        "Understandable",
        "Perceivable",
        "Operable",
        "Robust"
      ],
      correct: 0,
      explanation: "The Understandable principle (Guideline 3.1 Readable) addresses making text content readable and understandable. If users can see the text but cannot comprehend it, that is an Understandable issue.",
      wrongExplanations: {
        1: "Perceivable means users can sense the content. If users can see the text but not understand it, the issue is comprehension (Understandable), not perception.",
        2: "Operable deals with interacting with interface components, not comprehending text content.",
        3: "Robust deals with assistive technology compatibility, not content comprehension."
      },
      topicLinks: ['wcag-understandable'],
      difficulty: 'medium',
      tags: ['wcag', 'understandable', 'distinction', 'scenario']
    },
    {
      id: 230,
      question: "A web page displays text in a very small font size that is hard to see. Is this a Perceivable or Understandable issue?",
      options: [
        "Perceivable — the user cannot adequately detect or sense the content",
        "Understandable — the user cannot comprehend the content",
        "Operable — the user cannot interact with the content",
        "Robust — the content is not compatible with assistive technology"
      ],
      correct: 0,
      explanation: "Small, hard-to-see text is a Perceivable issue (Guideline 1.4 Distinguishable). The user's ability to visually detect the content is impaired. If they could see it clearly, they would understand it — so comprehension is not the barrier.",
      wrongExplanations: {
        1: "Understandable applies when users can perceive content but cannot comprehend its meaning. If text is simply too small to see, that is a perception barrier, not a comprehension one.",
        2: "Operable applies to interacting with UI components (clicking, typing, navigating), not to seeing content.",
        3: "Robust applies to assistive technology compatibility, not to the visual presentation of text."
      },
      topicLinks: ['wcag-perceivable', 'wcag-understandable'],
      difficulty: 'hard',
      tags: ['wcag', 'distinction', 'perceivable-vs-understandable']
    },
    {
      id: 231,
      question: "Content is presented in a language the user does not speak. Under WCAG, which principle does identifying the language of a page fall under?",
      options: [
        "Understandable — Guideline 3.1 (Readable)",
        "Perceivable — Guideline 1.3 (Adaptable)",
        "Robust — Guideline 4.1 (Compatible)",
        "Operable — Guideline 2.4 (Navigable)"
      ],
      correct: 0,
      explanation: "Language of page (SC 3.1.1) falls under Understandable, Guideline 3.1 (Readable). Identifying the language enables screen readers to use correct pronunciation — this is about comprehension, not perception.",
      wrongExplanations: {
        1: "Adaptable (1.3) is about content structure that can be presented in different ways, not about language identification.",
        2: "Compatible (4.1) is about parsing and AT compatibility. Language identification supports comprehension, making it an Understandable issue.",
        3: "Navigable (2.4) is about helping users find and navigate content, not about language identification."
      },
      topicLinks: ['wcag-understandable'],
      difficulty: 'hard',
      tags: ['wcag', 'understandable', 'distinction']
    },
    {
      id: 232,
      question: "A form does not provide error messages when a user enters invalid data. Which WCAG guideline is MOST directly violated?",
      options: [
        "Guideline 3.3 — Input Assistance (Understandable)",
        "Guideline 2.1 — Keyboard Accessible (Operable)",
        "Guideline 1.1 — Text Alternatives (Perceivable)",
        "Guideline 4.1 — Compatible (Robust)"
      ],
      correct: 0,
      explanation: "Guideline 3.3 (Input Assistance) under Understandable requires helping users avoid and correct mistakes. SC 3.3.1 (Error Identification) requires that errors are identified and described to the user.",
      wrongExplanations: {
        1: "Keyboard Accessible (2.1) addresses keyboard operability, not error identification in forms.",
        2: "Text Alternatives (1.1) addresses alternatives for non-text content like images, not form error messages.",
        3: "Compatible (4.1) addresses AT compatibility. While error messages should be accessible to AT, the specific failure of not providing error messages falls under Input Assistance."
      },
      topicLinks: ['wcag-understandable'],
      difficulty: 'easy',
      tags: ['wcag', 'understandable', 'forms', 'scenario']
    },
    {
      id: 233,
      question: "A website's navigation menu appears in a different location on every page. Which WCAG guideline does this violate?",
      options: [
        "Guideline 3.2 — Predictable (Understandable)",
        "Guideline 2.4 — Navigable (Operable)",
        "Guideline 1.3 — Adaptable (Perceivable)",
        "Guideline 4.1 — Compatible (Robust)"
      ],
      correct: 0,
      explanation: "Guideline 3.2 (Predictable) under Understandable requires consistent navigation and consistent identification. SC 3.2.3 (Consistent Navigation) requires that navigation be in the same relative order on each page.",
      wrongExplanations: {
        1: "While navigation location seems related to Navigable (2.4), the specific requirement for consistent placement across pages falls under Predictable (3.2) — it's about comprehending and predicting the interface.",
        2: "Adaptable (1.3) is about content that can be presented in different ways without losing information, not about navigation consistency.",
        3: "Compatible (4.1) addresses AT compatibility, not visual consistency of navigation across pages."
      },
      topicLinks: ['wcag-understandable'],
      difficulty: 'hard',
      tags: ['wcag', 'understandable', 'predictable', 'scenario']
    },
    {
      id: 234,
      question: "Which of the following scenarios is an Understandable issue, NOT a Perceivable issue?",
      options: [
        "A form uses ambiguous labels that confuse users about what information to enter",
        "A video has no captions for deaf users",
        "An image has no alt text for screen reader users",
        "Text has insufficient color contrast against the background"
      ],
      correct: 0,
      explanation: "Ambiguous form labels are an Understandable issue — users can see the labels (perceive them) but cannot comprehend what information is being requested. The barrier is comprehension, not detection.",
      wrongExplanations: {
        1: "Missing captions is a Perceivable issue — deaf users cannot perceive the audio content through their available senses.",
        2: "Missing alt text is a Perceivable issue — screen reader users cannot perceive the image content.",
        3: "Insufficient contrast is a Perceivable issue — users cannot adequately distinguish the text from the background."
      },
      topicLinks: ['wcag-understandable', 'wcag-perceivable'],
      difficulty: 'hard',
      tags: ['wcag', 'distinction', 'perceivable-vs-understandable']
    },
    {
      id: 235,
      question: "Which of the following is a guideline under the Understandable principle?",
      options: [
        "Input Assistance",
        "Input Modalities",
        "Text Alternatives",
        "Keyboard Accessible"
      ],
      correct: 0,
      explanation: "Input Assistance (Guideline 3.3) is an Understandable guideline that helps users avoid and correct mistakes. The three Understandable guidelines are: 3.1 Readable, 3.2 Predictable, and 3.3 Input Assistance.",
      wrongExplanations: {
        1: "Input Modalities (2.5) is an Operable guideline addressing various input methods beyond keyboard.",
        2: "Text Alternatives (1.1) is a Perceivable guideline requiring text alternatives for non-text content.",
        3: "Keyboard Accessible (2.1) is an Operable guideline requiring keyboard access to all functionality."
      },
      topicLinks: ['wcag-understandable'],
      difficulty: 'medium',
      tags: ['wcag', 'understandable']
    },

    // --- Robust (236-240) ---
    {
      id: 236,
      question: "Which WCAG principle primarily addresses compatibility with current and future assistive technologies?",
      options: [
        "Robust",
        "Perceivable",
        "Operable",
        "Understandable"
      ],
      correct: 0,
      explanation: "The Robust principle (Principle 4) ensures that content is compatible with a wide variety of user agents and assistive technologies, including current and future ones.",
      wrongExplanations: {
        1: "Perceivable addresses sensory access to content, not AT compatibility.",
        2: "Operable addresses user interaction and navigation, not AT compatibility.",
        3: "Understandable addresses comprehension and predictability, not AT compatibility."
      },
      topicLinks: ['wcag-robust'],
      difficulty: 'easy',
      tags: ['wcag', 'robust']
    },
    {
      id: 239,
      question: "Which scenario BEST illustrates a violation of the Robust principle?",
      options: [
        "A web page uses invalid HTML markup that causes screen readers to misinterpret the content structure",
        "A web page has images without alt text",
        "A web page cannot be navigated using a keyboard",
        "A web page uses complex vocabulary that is hard to understand"
      ],
      correct: 0,
      explanation: "Invalid markup that causes screen readers to misinterpret content is a Robust issue — the content is not compatible with assistive technologies due to poor coding practices.",
      wrongExplanations: {
        1: "Missing alt text is a Perceivable issue (SC 1.1.1 Text Alternatives), not Robust.",
        2: "Keyboard navigation is an Operable issue (SC 2.1.1 Keyboard), not Robust.",
        3: "Complex vocabulary is an Understandable issue (Guideline 3.1 Readable), not Robust."
      },
      topicLinks: ['wcag-robust'],
      difficulty: 'medium',
      tags: ['wcag', 'robust', 'scenario']
    },
    {
      id: 240,
      question: "Which of the following BEST describes the KEY difference between the Perceivable and Robust principles?",
      options: [
        "Perceivable ensures content can be sensed by users; Robust ensures content works with assistive technologies",
        "Perceivable is about visual design; Robust is about audio design",
        "Perceivable applies to text; Robust applies to multimedia",
        "Perceivable is for users; Robust is for developers only"
      ],
      correct: 0,
      explanation: "Perceivable ensures users can detect content through their senses (sight, hearing, touch). Robust ensures the underlying code is compatible with assistive technologies that mediate between content and users.",
      wrongExplanations: {
        1: "Both principles address all types of content, not just visual or audio. Perceivable covers all senses, and Robust covers all AT compatibility.",
        2: "Both principles apply to all content types. They are not divided by text vs. multimedia.",
        3: "Both principles serve users. Robust ensures AT compatibility so users with disabilities can access content through their assistive technologies."
      },
      topicLinks: ['wcag-perceivable', 'wcag-robust'],
      difficulty: 'medium',
      tags: ['wcag', 'distinction']
    },

    // ==========================================
    // Universal Design (Questions 241-260)
    // ==========================================
    {
      id: 241,
      question: "Who is credited with coining the term 'Universal Design'?",
      options: [
        "Ron Mace at North Carolina State University",
        "Tim Berners-Lee at CERN",
        "Vint Cerf at Stanford University",
        "Steve Jobs at Apple"
      ],
      correct: 0,
      explanation: "Ron Mace, an architect and founder of the Center for Universal Design at North Carolina State University, coined the term 'Universal Design' and led the development of its seven principles.",
      wrongExplanations: {
        1: "Tim Berners-Lee invented the World Wide Web but did not coin the term Universal Design.",
        2: "Vint Cerf is known as a 'father of the Internet' but did not create Universal Design principles.",
        3: "Steve Jobs was known for innovative product design at Apple but did not develop the Universal Design framework."
      },
      topicLinks: ['universal-design-principles'],
      difficulty: 'easy',
      tags: ['universal-design', 'history']
    },
    {
      id: 242,
      question: "How many principles of Universal Design are there?",
      options: [
        "7",
        "4",
        "5",
        "10"
      ],
      correct: 0,
      explanation: "There are 7 Principles of Universal Design, developed by Ron Mace and colleagues at NCSU: Equitable Use, Flexibility in Use, Simple and Intuitive Use, Perceptible Information, Tolerance for Error, Low Physical Effort, and Size and Space for Approach and Use.",
      wrongExplanations: {
        1: "4 is the number of WCAG principles (POUR), not Universal Design principles.",
        2: "5 is not the number of UD principles. There are 7.",
        3: "10 is not the number of UD principles. There are 7."
      },
      topicLinks: ['universal-design-principles'],
      difficulty: 'easy',
      tags: ['universal-design']
    },
    {
      id: 243,
      question: "Which Universal Design principle states that the design should be useful and marketable to people with diverse abilities?",
      options: [
        "Equitable Use",
        "Flexibility in Use",
        "Simple and Intuitive Use",
        "Tolerance for Error"
      ],
      correct: 0,
      explanation: "Principle 1: Equitable Use means the design is useful and marketable to people with diverse abilities. It provides the same means of use for all users — identical whenever possible, equivalent when not.",
      wrongExplanations: {
        1: "Flexibility in Use (Principle 2) means the design accommodates a wide range of preferences and abilities, such as offering left-hand or right-hand use.",
        2: "Simple and Intuitive Use (Principle 3) means the design is easy to understand regardless of experience, knowledge, or language skills.",
        3: "Tolerance for Error (Principle 5) means the design minimizes hazards and adverse consequences of accidental or unintended actions."
      },
      topicLinks: ['universal-design-principles'],
      difficulty: 'easy',
      tags: ['universal-design']
    },
    {
      id: 244,
      question: "An automatic door that opens for ALL people — whether they are pushing a stroller, using a wheelchair, or carrying groceries — BEST exemplifies which UD principle?",
      options: [
        "Equitable Use",
        "Low Physical Effort",
        "Flexibility in Use",
        "Size and Space for Approach and Use"
      ],
      correct: 0,
      explanation: "An automatic door provides the same means of use for all people regardless of ability. This exemplifies Equitable Use — the design is equally useful to everyone, not providing separate or different accommodations.",
      wrongExplanations: {
        1: "While automatic doors do reduce physical effort, the scenario emphasizes that ALL people benefit equally — making Equitable Use the best fit.",
        2: "Flexibility in Use would involve offering multiple methods to operate the door (push button, sensor, handle). The scenario highlights equal access for all.",
        3: "Size and Space focuses on physical dimensions for approach and use. The scenario emphasizes equal access, not spatial accommodation."
      },
      topicLinks: ['universal-design-principles'],
      difficulty: 'medium',
      tags: ['universal-design', 'scenario']
    },
    {
      id: 245,
      question: "A pair of scissors designed to be used comfortably by both left-handed and right-handed people BEST exemplifies which UD principle?",
      options: [
        "Flexibility in Use",
        "Equitable Use",
        "Simple and Intuitive Use",
        "Low Physical Effort"
      ],
      correct: 0,
      explanation: "Principle 2: Flexibility in Use means the design accommodates a wide range of individual preferences and abilities. Ambidextrous scissors provide choice in methods of use.",
      wrongExplanations: {
        1: "Equitable Use focuses on providing the same or equivalent means of use. Flexibility in Use specifically addresses accommodating different preferences and methods.",
        2: "Simple and Intuitive Use focuses on ease of understanding. The scissors scenario is about accommodating different physical preferences.",
        3: "Low Physical Effort focuses on minimizing exertion. While the scissors may be comfortable, the key feature is accommodating left- and right-handed users."
      },
      topicLinks: ['universal-design-principles'],
      difficulty: 'easy',
      tags: ['universal-design', 'scenario']
    },
    {
      id: 246,
      question: "A microwave with clearly labeled, intuitive controls that anyone can use without reading a manual BEST exemplifies which UD principle?",
      options: [
        "Simple and Intuitive Use",
        "Perceptible Information",
        "Equitable Use",
        "Tolerance for Error"
      ],
      correct: 0,
      explanation: "Principle 3: Simple and Intuitive Use means the design is easy to understand, regardless of the user's experience, knowledge, language skills, or current concentration level.",
      wrongExplanations: {
        1: "Perceptible Information (Principle 4) focuses on communicating information effectively through multiple modes (visual, auditory, tactile), not on simplicity of use.",
        2: "Equitable Use (Principle 1) focuses on equal usefulness to diverse abilities, not on intuitiveness of the design.",
        3: "Tolerance for Error (Principle 5) focuses on minimizing consequences of mistakes, not on ease of understanding controls."
      },
      topicLinks: ['universal-design-principles'],
      difficulty: 'easy',
      tags: ['universal-design', 'scenario']
    },
    {
      id: 247,
      question: "An airport departure board that shows flight information visually AND announces it over speakers BEST exemplifies which UD principle?",
      options: [
        "Perceptible Information",
        "Simple and Intuitive Use",
        "Equitable Use",
        "Flexibility in Use"
      ],
      correct: 0,
      explanation: "Principle 4: Perceptible Information means the design communicates necessary information effectively to the user, regardless of ambient conditions or the user's sensory abilities. Using multiple modes (visual + auditory) is a key strategy.",
      wrongExplanations: {
        1: "Simple and Intuitive Use is about ease of understanding. The scenario emphasizes multiple sensory channels for conveying information.",
        2: "Equitable Use focuses on equal access for diverse abilities. Perceptible Information specifically addresses conveying information through multiple modes.",
        3: "Flexibility in Use addresses accommodating different preferences and methods of operation, not information delivery through multiple senses."
      },
      topicLinks: ['universal-design-principles'],
      difficulty: 'medium',
      tags: ['universal-design', 'scenario']
    },
    {
      id: 248,
      question: "A word processor that provides an 'Undo' function to reverse accidental deletions BEST exemplifies which UD principle?",
      options: [
        "Tolerance for Error",
        "Simple and Intuitive Use",
        "Flexibility in Use",
        "Low Physical Effort"
      ],
      correct: 0,
      explanation: "Principle 5: Tolerance for Error means the design minimizes hazards and the adverse consequences of accidental or unintended actions. An Undo function allows users to recover from mistakes.",
      wrongExplanations: {
        1: "Simple and Intuitive Use is about ease of understanding the design. The Undo function is specifically about recovering from errors.",
        2: "Flexibility in Use is about accommodating different preferences and abilities. Undo is about error recovery.",
        3: "Low Physical Effort is about minimizing physical exertion. Undo is about minimizing consequences of mistakes."
      },
      topicLinks: ['universal-design-principles'],
      difficulty: 'easy',
      tags: ['universal-design', 'scenario']
    },
    {
      id: 249,
      question: "A lever-style door handle (instead of a round knob) that can be operated with a closed fist or elbow BEST exemplifies which UD principle?",
      options: [
        "Low Physical Effort",
        "Flexibility in Use",
        "Equitable Use",
        "Simple and Intuitive Use"
      ],
      correct: 0,
      explanation: "Principle 6: Low Physical Effort means the design can be used efficiently and comfortably with minimum fatigue. Lever handles require less grip strength and dexterity than round knobs.",
      wrongExplanations: {
        1: "Flexibility in Use focuses on accommodating different methods and preferences. While a lever handle can be operated multiple ways, the key benefit is reduced physical effort.",
        2: "Equitable Use focuses on equal access. The lever handle scenario emphasizes reduced physical exertion for operation.",
        3: "Simple and Intuitive Use focuses on ease of understanding. Lever handles primarily address physical effort reduction."
      },
      topicLinks: ['universal-design-principles'],
      difficulty: 'medium',
      tags: ['universal-design', 'scenario']
    },
    {
      id: 250,
      question: "A public restroom with wide stalls that accommodate wheelchair users, parents with children, and people with luggage BEST exemplifies which UD principle?",
      options: [
        "Size and Space for Approach and Use",
        "Equitable Use",
        "Flexibility in Use",
        "Low Physical Effort"
      ],
      correct: 0,
      explanation: "Principle 7: Size and Space for Approach and Use means appropriate size and space is provided for approach, reach, manipulation, and use regardless of the user's body size, posture, or mobility.",
      wrongExplanations: {
        1: "Equitable Use focuses on equal usefulness for diverse abilities. The scenario specifically highlights spatial dimensions as the key feature.",
        2: "Flexibility in Use addresses accommodating different preferences and methods of operation, not physical space.",
        3: "Low Physical Effort focuses on minimizing fatigue and exertion. The scenario emphasizes adequate physical space."
      },
      topicLinks: ['universal-design-principles'],
      difficulty: 'easy',
      tags: ['universal-design', 'scenario']
    },
    {
      id: 251,
      question: "Which of the following BEST describes the core philosophy of Universal Design?",
      options: [
        "Design products and environments usable by all people, to the greatest extent possible, without adaptation",
        "Design specialized products for people with disabilities",
        "Retrofit existing products to make them accessible after launch",
        "Design separate versions of products for different user groups"
      ],
      correct: 0,
      explanation: "Universal Design is about designing for ALL people from the start — creating products, environments, and systems that are usable by the widest range of people possible without the need for adaptation or specialized design.",
      wrongExplanations: {
        1: "UD is not about specialized products for people with disabilities. It is about mainstream design that works for everyone.",
        2: "UD is proactive (design from the start), not reactive (retrofitting after launch). Retrofitting is the opposite of UD's philosophy.",
        3: "UD aims for one inclusive design, not separate versions for different groups. Separate designs can be stigmatizing and are contrary to UD principles."
      },
      topicLinks: ['universal-design-principles'],
      difficulty: 'easy',
      tags: ['universal-design', 'philosophy']
    },
    {
      id: 252,
      question: "A website provides content in both visual and audio formats, with clear icons, plain language, and logical layout. Which UD principles does this BEST demonstrate? (Choose the BEST combination.)",
      options: [
        "Perceptible Information and Simple and Intuitive Use",
        "Equitable Use and Low Physical Effort",
        "Tolerance for Error and Flexibility in Use",
        "Size and Space for Approach and Use and Low Physical Effort"
      ],
      correct: 0,
      explanation: "Multiple formats (visual + audio) and clear icons demonstrate Perceptible Information (Principle 4). Plain language and logical layout demonstrate Simple and Intuitive Use (Principle 3).",
      wrongExplanations: {
        1: "Low Physical Effort addresses minimizing exertion, which is not the primary feature described. Equitable Use is about equal access, not about information delivery methods.",
        2: "Tolerance for Error is about minimizing mistake consequences. Flexibility in Use is about accommodating preferences. Neither best describes the scenario.",
        3: "Size and Space is about physical dimensions. Low Physical Effort is about exertion. Neither applies to content format and language clarity."
      },
      topicLinks: ['universal-design-principles'],
      difficulty: 'hard',
      tags: ['universal-design', 'scenario']
    },
    {
      id: 253,
      question: "A confirmation dialog that says 'Are you sure you want to delete this file?' before permanently deleting a file BEST exemplifies which UD principle?",
      options: [
        "Tolerance for Error",
        "Simple and Intuitive Use",
        "Perceptible Information",
        "Equitable Use"
      ],
      correct: 0,
      explanation: "Principle 5: Tolerance for Error minimizes hazards and adverse consequences of accidental actions. A confirmation dialog prevents unintentional permanent deletion by asking the user to verify their intent.",
      wrongExplanations: {
        1: "Simple and Intuitive Use is about ease of understanding, not about preventing accidental actions.",
        2: "Perceptible Information is about communicating information through multiple modes, not about error prevention.",
        3: "Equitable Use is about equal access for diverse abilities, not about error prevention mechanisms."
      },
      topicLinks: ['universal-design-principles'],
      difficulty: 'easy',
      tags: ['universal-design', 'scenario']
    },
    {
      id: 254,
      question: "Which of the following is NOT one of the 7 Principles of Universal Design?",
      options: [
        "Aesthetic and Minimalist Design",
        "Equitable Use",
        "Tolerance for Error",
        "Low Physical Effort"
      ],
      correct: 0,
      explanation: "Aesthetic and Minimalist Design is a principle from Jakob Nielsen's 10 Usability Heuristics, not one of the 7 Principles of Universal Design.",
      wrongExplanations: {
        1: "Equitable Use is Principle 1 of Universal Design.",
        2: "Tolerance for Error is Principle 5 of Universal Design.",
        3: "Low Physical Effort is Principle 6 of Universal Design."
      },
      topicLinks: ['universal-design-principles'],
      difficulty: 'medium',
      tags: ['universal-design']
    },
    {
      id: 255,
      question: "Universal Design principles were originally developed in which field?",
      options: [
        "Architecture and the built environment",
        "Web development and software engineering",
        "Medicine and healthcare",
        "Education and curriculum design"
      ],
      correct: 0,
      explanation: "Universal Design was originally developed in the context of architecture and the built environment by Ron Mace and colleagues at NCSU. The principles have since been applied broadly to products, technology, and education.",
      wrongExplanations: {
        1: "While UD is widely applied to web and software, it originated in architecture with Ron Mace.",
        2: "UD did not originate in healthcare, though its principles can be applied to medical environments and products.",
        3: "UD did not originate in education. Universal Design for Learning (UDL) was a later adaptation of UD concepts to education."
      },
      topicLinks: ['universal-design-principles', 'built-environment'],
      difficulty: 'medium',
      tags: ['universal-design', 'history']
    },
    {
      id: 256,
      question: "A curb cut (sloped transition from sidewalk to street) benefits wheelchair users, parents with strollers, delivery workers with carts, and cyclists. This is often cited as a classic example of:",
      options: [
        "Universal Design — a solution designed for disability that benefits everyone",
        "Assistive Technology — a specialized device for people with disabilities",
        "Reasonable Accommodation — a modification for a specific individual",
        "Accessible Design — a separate pathway for wheelchair users"
      ],
      correct: 0,
      explanation: "The curb cut effect is a hallmark example of Universal Design. Originally designed for wheelchair users, curb cuts benefit a wide range of people, demonstrating how designing for disability creates solutions that benefit all.",
      wrongExplanations: {
        1: "A curb cut is not assistive technology — it is a built-in feature of the environment, not a specialized personal device.",
        2: "A curb cut is not an accommodation for a specific individual — it is a universal feature built into the environment for everyone.",
        3: "A curb cut is not a separate pathway — it modifies the existing pathway to be usable by all, which is the essence of Universal Design."
      },
      topicLinks: ['universal-design-principles', 'built-environment'],
      difficulty: 'easy',
      tags: ['universal-design', 'curb-cut']
    },
    {
      id: 257,
      question: "Which of the following ALL belong to the 7 Principles of Universal Design?",
      options: [
        "Equitable Use, Flexibility in Use, Tolerance for Error",
        "Perceivable, Operable, Understandable",
        "Engagement, Representation, Action & Expression",
        "Effectiveness, Efficiency, Satisfaction"
      ],
      correct: 0,
      explanation: "Equitable Use (1), Flexibility in Use (2), and Tolerance for Error (5) are all among the 7 Principles of Universal Design.",
      wrongExplanations: {
        1: "Perceivable, Operable, and Understandable are three of the four WCAG principles (POUR), not Universal Design principles.",
        2: "Engagement, Representation, and Action & Expression are the three UDL principles, not Universal Design principles.",
        3: "Effectiveness, Efficiency, and Satisfaction are the three components of usability (ISO 9241), not Universal Design principles."
      },
      topicLinks: ['universal-design-principles'],
      difficulty: 'medium',
      tags: ['universal-design']
    },
    {
      id: 258,
      question: "A touchscreen kiosk at a train station has buttons that are large, well-spaced, and positioned at a height reachable from a wheelchair. This BEST demonstrates which UD principle?",
      options: [
        "Size and Space for Approach and Use",
        "Simple and Intuitive Use",
        "Perceptible Information",
        "Equitable Use"
      ],
      correct: 0,
      explanation: "Principle 7: Size and Space for Approach and Use ensures appropriate size and space for approach, reach, manipulation, and use regardless of body size, posture, or mobility.",
      wrongExplanations: {
        1: "Simple and Intuitive Use focuses on ease of understanding, not physical dimensions and positioning.",
        2: "Perceptible Information focuses on communicating information effectively through multiple modes, not physical placement.",
        3: "While Equitable Use is about equal access, the scenario specifically highlights the physical size and positioning of elements — a Size and Space concern."
      },
      topicLinks: ['universal-design-principles'],
      difficulty: 'medium',
      tags: ['universal-design', 'scenario']
    },
    {
      id: 259,
      question: "How does Universal Design differ from simply making accommodations for people with disabilities?",
      options: [
        "UD is proactive — designing inclusively from the start; accommodations are reactive — modifying after the fact for individuals",
        "UD only applies to buildings; accommodations apply to technology",
        "UD is more expensive than accommodations",
        "There is no meaningful difference between the two approaches"
      ],
      correct: 0,
      explanation: "Universal Design is a proactive approach — designing products and environments to be usable by everyone from the outset. Accommodations are reactive, individual modifications made after the fact to meet a specific person's needs.",
      wrongExplanations: {
        1: "UD applies to all domains (buildings, technology, education), not just buildings. Accommodations also apply to all domains.",
        2: "UD is often more cost-effective than retrofitting accommodations later. Designing inclusively from the start typically costs less than modifying after the fact.",
        3: "There is a significant difference: UD is universal and proactive; accommodations are individual and reactive."
      },
      topicLinks: ['universal-design-principles', 'accessibility-vs-accommodation'],
      difficulty: 'medium',
      tags: ['universal-design', 'accommodation', 'distinction']
    },
    {
      id: 260,
      question: "A government website is redesigned so that ALL content is accessible to people with various disabilities from launch. This approach is BEST described as:",
      options: [
        "Universal Design — building accessibility into the design from the start",
        "Accommodation — modifying the site for specific individuals who request it",
        "Assistive Technology — providing special tools for people with disabilities",
        "Remediation — fixing accessibility issues after they are reported"
      ],
      correct: 0,
      explanation: "Building accessibility into the design from launch is Universal Design — a proactive, inclusive approach. It does not wait for individual requests or complaints.",
      wrongExplanations: {
        1: "Accommodation is reactive and individual — providing modifications for specific people who request them. This scenario describes a proactive approach for all users.",
        2: "Assistive technology refers to personal tools (screen readers, magnifiers), not to the design of the website itself.",
        3: "Remediation means fixing issues after they are discovered. The scenario describes building accessibility in from the start, which is proactive."
      },
      topicLinks: ['universal-design-principles', 'accessibility-vs-accommodation'],
      difficulty: 'medium',
      tags: ['universal-design', 'scenario']
    },

    // ==========================================
    // Universal Design for Learning (Questions 261-275)
    // ==========================================
    {
      id: 261,
      question: "How many core principles does Universal Design for Learning (UDL) have?",
      options: [
        "3",
        "4",
        "7",
        "5"
      ],
      correct: 0,
      explanation: "UDL has 3 core principles: Multiple Means of Engagement, Multiple Means of Representation, and Multiple Means of Action & Expression.",
      wrongExplanations: {
        1: "4 is the number of WCAG principles (POUR), not UDL principles.",
        2: "7 is the number of Universal Design principles, not UDL principles.",
        3: "UDL has 3 principles, not 5."
      },
      topicLinks: ['universal-design-learning'],
      difficulty: 'easy',
      tags: ['udl']
    },
    {
      id: 262,
      question: "Which UDL principle addresses the 'WHY' of learning — how learners are motivated and engaged?",
      options: [
        "Multiple Means of Engagement",
        "Multiple Means of Representation",
        "Multiple Means of Action & Expression",
        "Multiple Means of Perception"
      ],
      correct: 0,
      explanation: "Multiple Means of Engagement addresses the 'why' of learning — the affective network. It involves providing options for recruiting interest, sustaining effort, and self-regulation.",
      wrongExplanations: {
        1: "Representation addresses the 'what' of learning (recognition network) — how information is presented to learners.",
        2: "Action & Expression addresses the 'how' of learning (strategic network) — how learners demonstrate what they know.",
        3: "Multiple Means of Perception is not one of the three UDL principles."
      },
      topicLinks: ['universal-design-learning'],
      difficulty: 'easy',
      tags: ['udl', 'engagement']
    },
    {
      id: 263,
      question: "Which UDL principle addresses the 'WHAT' of learning — how content and information are presented?",
      options: [
        "Multiple Means of Representation",
        "Multiple Means of Engagement",
        "Multiple Means of Action & Expression",
        "Multiple Means of Communication"
      ],
      correct: 0,
      explanation: "Multiple Means of Representation addresses the 'what' of learning — the recognition network. It involves providing information in multiple formats (text, audio, visual) so all learners can access the content.",
      wrongExplanations: {
        1: "Engagement addresses the 'why' of learning — motivation and interest, not how content is presented.",
        2: "Action & Expression addresses the 'how' of learning — how learners demonstrate knowledge, not how content is presented to them.",
        3: "Multiple Means of Communication is not one of the three UDL principles."
      },
      topicLinks: ['universal-design-learning'],
      difficulty: 'easy',
      tags: ['udl', 'representation']
    },
    {
      id: 264,
      question: "Which UDL principle addresses the 'HOW' of learning — how learners demonstrate what they know?",
      options: [
        "Multiple Means of Action & Expression",
        "Multiple Means of Engagement",
        "Multiple Means of Representation",
        "Multiple Means of Assessment"
      ],
      correct: 0,
      explanation: "Multiple Means of Action & Expression addresses the 'how' of learning — the strategic network. It provides learners with options for demonstrating their knowledge (writing, speaking, creating, etc.).",
      wrongExplanations: {
        1: "Engagement addresses the 'why' of learning — motivation and interest, not how learners demonstrate knowledge.",
        2: "Representation addresses the 'what' of learning — how content is presented, not how learners express their understanding.",
        3: "Multiple Means of Assessment is not one of the three UDL principles."
      },
      topicLinks: ['universal-design-learning'],
      difficulty: 'easy',
      tags: ['udl', 'action-expression']
    },
    {
      id: 265,
      question: "A teacher allows students to choose between writing an essay, creating a video, or giving an oral presentation to demonstrate their understanding. Which UDL principle does this BEST represent?",
      options: [
        "Multiple Means of Action & Expression — providing options for HOW students demonstrate learning",
        "Multiple Means of Engagement — providing options for WHY students are motivated",
        "Multiple Means of Representation — providing options for WHAT content is presented",
        "This does not relate to any UDL principle"
      ],
      correct: 0,
      explanation: "Offering different ways to DEMONSTRATE learning (essay, video, presentation) is Action & Expression — the 'how' of learning. Students are showing what they know through different output methods.",
      wrongExplanations: {
        1: "While offering choice can increase motivation, the specific scenario is about HOW students demonstrate their knowledge (output), not about WHY they are motivated to learn. The choice of output format is Action & Expression.",
        2: "Representation is about how the TEACHER presents content to students (input), not about how students demonstrate their learning (output).",
        3: "This clearly relates to UDL — specifically the Action & Expression principle."
      },
      topicLinks: ['universal-design-learning'],
      difficulty: 'hard',
      tags: ['udl', 'action-expression', 'engagement-vs-action', 'tricky']
    },
    {
      id: 266,
      question: "A teacher lets students choose their own topics for a research project based on their personal interests. Which UDL principle does this BEST represent?",
      options: [
        "Multiple Means of Engagement — tapping into personal interest to motivate learning",
        "Multiple Means of Action & Expression — letting students choose how to demonstrate learning",
        "Multiple Means of Representation — presenting content in multiple formats",
        "This relates to Universal Design, not UDL"
      ],
      correct: 0,
      explanation: "Allowing students to choose topics based on personal interest is Engagement — the 'why' of learning. It recruits interest and motivation by connecting learning to what the student cares about (affective network).",
      wrongExplanations: {
        1: "Action & Expression is about HOW students demonstrate learning (output format), not about choosing topics. The student is still doing a research project — the topic choice motivates them to engage.",
        2: "Representation is about how content is presented to learners, not about topic selection by learners.",
        3: "This is a UDL concept. Choosing topics based on interest relates to Engagement, one of the three UDL principles."
      },
      topicLinks: ['universal-design-learning'],
      difficulty: 'hard',
      tags: ['udl', 'engagement', 'engagement-vs-action', 'tricky']
    },
    {
      id: 267,
      question: "A teacher provides a checklist, a rubric, and a goal-setting worksheet to help students plan their assignments. Which UDL principle does this BEST represent?",
      options: [
        "Multiple Means of Action & Expression — supporting strategic planning and executive function",
        "Multiple Means of Engagement — motivating students through self-regulation",
        "Multiple Means of Representation — presenting information in multiple formats",
        "This does not relate to UDL"
      ],
      correct: 0,
      explanation: "Providing planning tools (checklists, rubrics, goal-setting) supports the strategic network — HOW students plan and organize their work. Action & Expression includes executive functions like planning, monitoring, and strategy.",
      wrongExplanations: {
        1: "While self-regulation is part of Engagement, the tools described (checklists, rubrics, goal-setting worksheets) are specifically about planning and executing work — the strategic network addressed by Action & Expression.",
        2: "Representation is about how content is presented for comprehension (input), not about tools for planning and organizing student work (output/process).",
        3: "This clearly relates to UDL — the Action & Expression principle supports executive functioning and strategic planning."
      },
      topicLinks: ['universal-design-learning'],
      difficulty: 'hard',
      tags: ['udl', 'action-expression', 'engagement-vs-action', 'tricky']
    },
    {
      id: 268,
      question: "A teacher provides collaborative group activities and options for students to work independently. Which UDL principle does this BEST represent?",
      options: [
        "Multiple Means of Engagement — providing options for sustaining effort and collaboration",
        "Multiple Means of Action & Expression — providing different ways to complete tasks",
        "Multiple Means of Representation — presenting content through peer interaction",
        "This relates to usability, not UDL"
      ],
      correct: 0,
      explanation: "Providing options for collaboration vs. independent work is Engagement — the 'why' of learning. Collaboration and community are part of how learners stay engaged and motivated (affective network). UDL's Engagement principle includes fostering collaboration and community.",
      wrongExplanations: {
        1: "Action & Expression is about HOW learners demonstrate knowledge and navigate the learning environment. The choice between group and solo work is about learning context and motivation — Engagement.",
        2: "Representation is about how content is presented to learners, not about the social context of learning.",
        3: "This is a UDL concept — providing options for collaboration and independent work falls under the Engagement principle."
      },
      topicLinks: ['universal-design-learning'],
      difficulty: 'hard',
      tags: ['udl', 'engagement', 'engagement-vs-action', 'tricky']
    },
    {
      id: 269,
      question: "A teacher presents the same lesson using a video, a written article, and an infographic. Which UDL principle does this represent?",
      options: [
        "Multiple Means of Representation — presenting the same content in multiple formats",
        "Multiple Means of Engagement — motivating students with varied media",
        "Multiple Means of Action & Expression — letting students choose how to learn",
        "This is not a UDL concept"
      ],
      correct: 0,
      explanation: "Presenting the same content through video, text, and infographics is Representation — the 'what' of learning. The teacher is providing multiple ways for students to perceive and comprehend the information (recognition network).",
      wrongExplanations: {
        1: "While varied media may increase engagement, the core purpose here is presenting the same content in multiple formats — that is Representation.",
        2: "Action & Expression is about student output (demonstrating learning). This scenario is about teacher input (presenting content).",
        3: "This is clearly a UDL concept — Multiple Means of Representation."
      },
      topicLinks: ['universal-design-learning'],
      difficulty: 'medium',
      tags: ['udl', 'representation']
    },
    {
      id: 270,
      question: "Match each UDL principle to its brain network: Engagement = ?, Representation = ?, Action & Expression = ?",
      options: [
        "Affective network, Recognition network, Strategic network",
        "Strategic network, Affective network, Recognition network",
        "Recognition network, Strategic network, Affective network",
        "Affective network, Strategic network, Recognition network"
      ],
      correct: 0,
      explanation: "Engagement = Affective network (the 'why' — emotion/motivation), Representation = Recognition network (the 'what' — perceiving/comprehending), Action & Expression = Strategic network (the 'how' — planning/executing).",
      wrongExplanations: {
        1: "This incorrectly assigns strategic to Engagement and affective to Representation. Engagement is affective (motivation), Representation is recognition (perception).",
        2: "This incorrectly assigns recognition to Engagement and strategic to Representation. Engagement is affective, Representation is recognition.",
        3: "This incorrectly assigns strategic to Representation and recognition to Action & Expression. Representation is recognition, Action & Expression is strategic."
      },
      topicLinks: ['universal-design-learning'],
      difficulty: 'medium',
      tags: ['udl', 'brain-networks']
    },
    {
      id: 271,
      question: "A student who is motivated to learn but struggles with how to organize and submit their work is having difficulty with which UDL area?",
      options: [
        "Action & Expression — the strategic network for planning and executing",
        "Engagement — the affective network for motivation",
        "Representation — the recognition network for perceiving content",
        "The student does not have a UDL-related need"
      ],
      correct: 0,
      explanation: "The student IS motivated (Engagement is fine) but struggles with organizing and submitting work — this is a strategic/executive function issue addressed by Action & Expression (the 'how' of learning).",
      wrongExplanations: {
        1: "The scenario explicitly states the student IS motivated. Engagement is not the problem. The difficulty is with organizing and executing, which is Action & Expression.",
        2: "The student's problem is not with perceiving or understanding content (Representation). It is with organizing and submitting their work (Action & Expression).",
        3: "The student clearly has a need addressed by UDL — support for strategic planning and executive function under Action & Expression."
      },
      topicLinks: ['universal-design-learning'],
      difficulty: 'hard',
      tags: ['udl', 'action-expression', 'engagement-vs-action', 'tricky']
    },
    {
      id: 272,
      question: "Which of the following BEST describes the relationship between Universal Design (UD) and Universal Design for Learning (UDL)?",
      options: [
        "UDL applies the philosophy of Universal Design specifically to education and learning environments",
        "UDL and UD are the same framework applied in the same contexts",
        "UDL replaced UD as the newer standard",
        "UD is for physical spaces and UDL is for digital spaces"
      ],
      correct: 0,
      explanation: "UDL takes the inclusive philosophy of Universal Design and applies it specifically to educational settings. While UD focuses on designing products and environments for all people, UDL focuses on designing learning experiences for all learners.",
      wrongExplanations: {
        1: "UD and UDL are related but different frameworks. UD has 7 principles for products/environments; UDL has 3 principles for learning.",
        2: "UDL did not replace UD. They coexist — UD applies broadly to design, and UDL applies specifically to education.",
        3: "UD applies to both physical and digital spaces. UDL is specifically for learning environments, not all digital spaces."
      },
      topicLinks: ['universal-design-learning', 'universal-design-principles'],
      difficulty: 'medium',
      tags: ['udl', 'universal-design', 'distinction']
    },
    {
      id: 273,
      question: "A teacher offers students badges, progress tracking, and choice of difficulty levels to keep them motivated throughout a course. Which UDL principle is PRIMARY here?",
      options: [
        "Multiple Means of Engagement — sustaining effort and self-regulation through motivation strategies",
        "Multiple Means of Action & Expression — providing different ways to interact with the course",
        "Multiple Means of Representation — presenting content at different difficulty levels",
        "This is gamification, not UDL"
      ],
      correct: 0,
      explanation: "Badges, progress tracking, and difficulty choices are motivational strategies — they address the 'why' of learning by sustaining effort and supporting self-regulation. This is Engagement (affective network).",
      wrongExplanations: {
        1: "While difficulty levels involve some interaction choices, the primary purpose of badges, progress tracking, and difficulty options is to MOTIVATE learners — that is Engagement.",
        2: "Different difficulty levels might seem like Representation, but in this context they serve as motivational tools (keeping students in their zone of proximal development). The primary purpose is Engagement.",
        3: "While gamification techniques are being used, they align directly with UDL's Engagement principle — sustaining effort and self-regulation."
      },
      topicLinks: ['universal-design-learning'],
      difficulty: 'hard',
      tags: ['udl', 'engagement', 'engagement-vs-action', 'tricky']
    },
    {
      id: 274,
      question: "A teacher provides text-to-speech tools, vocabulary support, and visual diagrams alongside written text. Which UDL principle does this BEST exemplify?",
      options: [
        "Multiple Means of Representation — supporting perception and comprehension of content",
        "Multiple Means of Action & Expression — providing tools for student output",
        "Multiple Means of Engagement — motivating students with multimedia",
        "This is WCAG compliance, not UDL"
      ],
      correct: 0,
      explanation: "Text-to-speech, vocabulary support, and visual diagrams help students PERCEIVE and COMPREHEND the content — this is Representation (the 'what' of learning, recognition network).",
      wrongExplanations: {
        1: "These tools help students access and understand content (input), not demonstrate their learning (output). Action & Expression addresses student output.",
        2: "While these tools may increase engagement, their primary purpose is making content accessible and comprehensible — that is Representation.",
        3: "While some of these overlap with WCAG concepts, in an educational context they exemplify UDL's Representation principle."
      },
      topicLinks: ['universal-design-learning'],
      difficulty: 'medium',
      tags: ['udl', 'representation']
    },
    {
      id: 275,
      question: "Which of the following correctly matches each UDL principle to its key question?",
      options: [
        "Engagement = 'Why learn this?', Representation = 'What am I learning?', Action & Expression = 'How do I show what I know?'",
        "Engagement = 'How do I show what I know?', Representation = 'Why learn this?', Action & Expression = 'What am I learning?'",
        "Engagement = 'What am I learning?', Representation = 'How do I show what I know?', Action & Expression = 'Why learn this?'",
        "Engagement = 'How do I learn?', Representation = 'What tools do I use?', Action & Expression = 'Why does this matter?'"
      ],
      correct: 0,
      explanation: "Engagement = WHY (motivation), Representation = WHAT (content presented to learners), Action & Expression = HOW (learners demonstrate knowledge). These map to affective, recognition, and strategic brain networks respectively.",
      wrongExplanations: {
        1: "This incorrectly swaps Engagement and Action & Expression. Engagement is the 'why' (motivation), and Action & Expression is the 'how' (demonstration).",
        2: "This incorrectly assigns 'what' to Engagement and 'how' to Representation. Engagement is 'why', Representation is 'what'.",
        3: "These descriptions do not match UDL terminology. The correct pairings are: Engagement = why, Representation = what, Action & Expression = how."
      },
      topicLinks: ['universal-design-learning'],
      difficulty: 'medium',
      tags: ['udl']
    },

    // ==========================================
    // Design & Usability Concepts (Questions 276-280)
    // ==========================================
    {
      id: 276,
      question: "What is the KEY difference between accessibility and accommodation?",
      options: [
        "Accessibility is proactive and universal; accommodation is reactive and individual",
        "Accessibility is for physical spaces; accommodation is for digital spaces",
        "Accessibility is legally required; accommodation is optional",
        "There is no meaningful difference between the two"
      ],
      correct: 0,
      explanation: "Accessibility is a proactive approach — designing systems, environments, and content to be usable by everyone from the start. Accommodation is reactive — making individual modifications for a specific person's needs after the fact.",
      wrongExplanations: {
        1: "Both accessibility and accommodation apply to physical and digital spaces. The distinction is about proactive vs. reactive approaches.",
        2: "Both accessibility and accommodation can be legally required (e.g., the ADA requires both accessible design and reasonable accommodations). The key distinction is proactive vs. reactive.",
        3: "There is a significant and important difference: accessibility is universal and proactive, while accommodation is individual and reactive."
      },
      topicLinks: ['accessibility-vs-accommodation'],
      difficulty: 'medium',
      tags: ['accessibility', 'accommodation', 'distinction']
    },
    {
      id: 277,
      question: "User-Centered Design (UCD) is BEST described as:",
      options: [
        "A design process that involves users throughout every stage of design and development",
        "A design approach that prioritizes visual aesthetics above all else",
        "A design method focused exclusively on people with disabilities",
        "A design philosophy that relies on developer expertise rather than user feedback"
      ],
      correct: 0,
      explanation: "User-Centered Design is an iterative design process that focuses on the users and their needs at every stage — from research and prototyping to testing and implementation. Users are actively involved throughout.",
      wrongExplanations: {
        1: "UCD prioritizes user needs and usability, not visual aesthetics. Aesthetics may be part of the process but are not the primary focus.",
        2: "UCD is for ALL users, not exclusively people with disabilities. It involves representative users throughout the design process.",
        3: "UCD specifically values user feedback and involvement over relying solely on developer assumptions and expertise."
      },
      topicLinks: ['user-centered-design'],
      difficulty: 'easy',
      tags: ['user-centered-design']
    },
    {
      id: 278,
      question: "According to ISO 9241, usability is defined by three key components. Which answer lists all three correctly?",
      options: [
        "Effectiveness, efficiency, and satisfaction",
        "Accessibility, efficiency, and reliability",
        "Learnability, memorability, and error rate",
        "Perceivable, operable, and understandable"
      ],
      correct: 0,
      explanation: "ISO 9241 defines usability as the extent to which a product can be used by specified users to achieve specified goals with effectiveness (accuracy/completeness), efficiency (resources expended), and satisfaction (comfort/acceptability).",
      wrongExplanations: {
        1: "Accessibility and reliability are important qualities but are not the three ISO 9241 usability components.",
        2: "Learnability, memorability, and error rate are among Nielsen's usability attributes, not the ISO 9241 definition.",
        3: "Perceivable, operable, and understandable are three of the four WCAG principles, not the ISO usability definition."
      },
      topicLinks: ['usability-concepts'],
      difficulty: 'medium',
      tags: ['usability']
    },
    {
      id: 279,
      question: "What is the KEY difference between User Experience (UX) and Universal Design (UD)?",
      options: [
        "UX focuses on the overall user journey and satisfaction; UD focuses on inclusive design principles for all people",
        "UX is only for websites; UD is only for buildings",
        "UX and UD are interchangeable terms",
        "UX is about accessibility; UD is about aesthetics"
      ],
      correct: 0,
      explanation: "User Experience encompasses the entire journey a user has with a product — their perceptions, emotions, and responses. Universal Design focuses on designing products and environments to be usable by all people to the greatest extent possible. UX may or may not be inclusive; UD is inherently inclusive.",
      wrongExplanations: {
        1: "Both UX and UD can apply to any domain — websites, products, physical environments. They are not limited to specific contexts.",
        2: "UX and UD are distinct concepts with different focuses: UX is about the overall experience, UD is about inclusive design.",
        3: "UX is not specifically about accessibility (though accessible design improves UX). UD is about inclusion, not aesthetics."
      },
      topicLinks: ['user-experience', 'universal-design-principles'],
      difficulty: 'medium',
      tags: ['ux', 'universal-design', 'distinction']
    },
    {
      id: 280,
      question: "A company hires people with disabilities to participate in user testing throughout the product development lifecycle. This BEST exemplifies which design approach?",
      options: [
        "User-Centered Design — involving representative users throughout the design process",
        "Universal Design — applying the seven principles of inclusive design",
        "Accommodation — making adjustments for specific individuals",
        "Remediation — fixing accessibility problems after release"
      ],
      correct: 0,
      explanation: "Involving users (including people with disabilities) throughout the design process is the hallmark of User-Centered Design. UCD emphasizes continuous user involvement from research through testing.",
      wrongExplanations: {
        1: "Universal Design applies inclusive design principles but does not specifically require involving users in the process. UCD is defined by user involvement throughout development.",
        2: "Accommodation is providing individual modifications after the fact, not proactively involving users in the design process.",
        3: "Remediation is fixing problems after release. This scenario describes proactive user involvement during development."
      },
      topicLinks: ['user-centered-design', 'usability-concepts'],
      difficulty: 'medium',
      tags: ['user-centered-design', 'scenario']
    }
  ]
};
