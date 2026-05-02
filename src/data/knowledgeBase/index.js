/**
 * POURcast Study Shelf - Knowledge Base
 * Comprehensive CPACC exam preparation topics
 */

export const topics = [
  // ============================================================
  // DISABILITY MODELS
  // ============================================================
  {
    slug: 'medical-model',
    title: 'Medical Model of Disability',
    category: 'Disability Models',
    applicableTo: ['cpacc', 'was'],
    summary: 'Views disability as a deficiency or abnormality residing within the individual that needs to be cured or fixed by medical professionals.',
    content: [
      {
        type: 'paragraph',
        text: 'The Medical Model of Disability frames disability as a problem that exists within the individual. Under this model, disability is caused by disease, trauma, or a health condition and requires sustained medical care. The focus is on "fixing" the person through treatment, rehabilitation, or cure. The individual is seen as the one who must change or adapt to fit into society.'
      },
      {
        type: 'heading',
        text: 'Core Assumptions'
      },
      {
        type: 'list',
        items: [
          'Disability is a deficiency or abnormality within the individual',
          'Being disabled is inherently negative',
          'The goal is to cure, treat, or rehabilitate the person to approximate "normal" functioning',
          'Medical professionals are the authority on disability',
          'The person with the disability is a patient who needs to be fixed'
        ]
      },
      {
        type: 'heading',
        text: 'Strengths and Limitations'
      },
      {
        type: 'paragraph',
        text: 'The Medical Model has value in that it drives research into treatments and therapies that genuinely improve quality of life. However, it is widely criticized for reducing people to their diagnoses, ignoring environmental and social barriers, and placing the entire burden of adaptation on the individual rather than on society. It can lead to paternalism and a sense that people with disabilities are "broken."'
      }
    ],
    relatedTopics: ['social-model', 'biopsychosocial-model', 'charity-model'],
    examTips: [
      'The Medical Model places the "problem" within the individual — this is the key differentiator from the Social Model',
      'Often contrasted directly with the Social Model on the exam',
      'Remember: Medical Model = individual deficit; Social Model = societal barriers'
    ]
  },
  {
    slug: 'social-model',
    title: 'Social Model of Disability',
    category: 'Disability Models',
    applicableTo: ['cpacc', 'was'],
    summary: 'Frames disability as the result of barriers created by society rather than by the individual\'s impairment.',
    content: [
      {
        type: 'paragraph',
        text: 'The Social Model of Disability, developed primarily in the United Kingdom by disability rights activists including Mike Oliver, argues that people are disabled not by their impairments but by the barriers that society creates. These barriers can be physical (stairs without ramps), attitudinal (stereotypes and prejudice), or systemic (policies that exclude). The model draws a clear distinction between "impairment" (the physical or mental condition) and "disability" (the social disadvantage imposed on top of the impairment).'
      },
      {
        type: 'heading',
        text: 'Key Principles'
      },
      {
        type: 'list',
        items: [
          'Disability is caused by the way society is organized, not by the person\'s impairment',
          'Barriers can be physical, attitudinal, communication-based, or institutional',
          'The distinction between impairment (biological) and disability (social) is central',
          'Removing societal barriers is the path to inclusion and equality',
          'People with disabilities are experts on their own needs and experiences'
        ]
      },
      {
        type: 'heading',
        text: 'Impact on Accessibility'
      },
      {
        type: 'paragraph',
        text: 'The Social Model is the foundational framework behind modern accessibility practices. It shifts responsibility from the individual to designers, developers, organizations, and governments. When a website is inaccessible to a screen reader user, the Social Model says the problem is the website, not the user\'s blindness. This perspective directly informs standards like WCAG and laws like the ADA.'
      },
    ],
    relatedTopics: ['medical-model', 'human-rights-model', 'social-identity-model'],
    examTips: [
      'Most frequently tested disability model on the CPACC exam',
      'Understand the impairment (individual condition) vs. disability (societal barrier) distinction',
      'Example: a wheelchair user has an impairment; a building with no ramp is what disables them',
      'Originated in the UK disability rights movement — Mike Oliver is a key figure',
      'This model directly underpins accessibility standards and legislation'
    ]
  },
  {
    slug: 'biopsychosocial-model',
    title: 'Biopsychosocial Model',
    category: 'Disability Models',
    applicableTo: ['cpacc', 'was'],
    summary: 'Integrates the medical and social perspectives by recognizing biological, psychological, and social factors all contribute to the experience of disability.',
    content: [
      {
        type: 'paragraph',
        text: 'The Biopsychosocial Model, adopted by the World Health Organization (WHO) through the International Classification of Functioning, Disability and Health (ICF), attempts to bridge the gap between the Medical Model and the Social Model. It recognizes that disability is a complex interaction between a person\'s health condition (biological), their personal and psychological factors, and their social and physical environment.'
      },
      {
        type: 'heading',
        text: 'Three Dimensions'
      },
      {
        type: 'list',
        items: [
          'Biological: The person\'s health condition, body functions, and body structures',
          'Psychological: The person\'s individual experience, coping strategies, motivation, and mental health',
          'Social: Environmental factors including physical environment, social attitudes, legal systems, and available services'
        ]
      },
      {
        type: 'heading',
        text: 'The ICF Framework'
      },
      {
        type: 'paragraph',
        text: 'The WHO\'s ICF framework operationalizes the Biopsychosocial Model. It classifies health and disability across body functions and structures, activities (task execution), and participation (involvement in life situations). Contextual factors — both environmental and personal — are considered alongside health conditions to produce a holistic understanding of a person\'s functioning.'
      },
    ],
    relatedTopics: ['medical-model', 'social-model', 'human-rights-model'],
    examTips: [
      'Associated with the WHO and the ICF (International Classification of Functioning, Disability and Health)',
      'Seen as a synthesis of the Medical and Social Models',
      'Considers biological, psychological, AND social factors — not just one'
    ]
  },
  {
    slug: 'human-rights-model',
    title: 'Human Rights Model',
    category: 'Disability Models',
    applicableTo: ['cpacc', 'was'],
    summary: 'Asserts that disability is a natural part of human diversity and that people with disabilities are entitled to the full range of human rights.',
    content: [
      {
        type: 'paragraph',
        text: 'The Human Rights Model of Disability builds upon and extends the Social Model by going beyond the identification of barriers to affirm that disability is a natural part of human diversity that must be respected and supported through enforceable rights. It is closely associated with the United Nations Convention on the Rights of Persons with Disabilities (CRPD), adopted in 2006. The model holds that people with disabilities are rights-holders, not objects of charity or medical treatment.'
      },
      {
        type: 'heading',
        text: 'Core Principles'
      },
      {
        type: 'list',
        items: [
          'Disability is a natural aspect of human diversity',
          'People with disabilities hold inherent dignity and are entitled to all human rights',
          'Accessibility is a precondition for the exercise of rights, not an afterthought',
          'Governments have a legal obligation to ensure rights are upheld',
          'Goes beyond anti-discrimination to require proactive measures for inclusion',
          'Embraces the value of diversity and the contribution of people with disabilities to society'
        ]
      },
      {
        type: 'paragraph',
        text: 'While the Social Model identifies societal barriers as the cause of disability, the Human Rights Model takes the next step by demanding legal and structural remedies as a matter of right, not goodwill. It also acknowledges the value of impairment as part of human diversity, whereas the Social Model sometimes downplays impairment itself.'
      },
    ],
    relatedTopics: ['social-model', 'crpd', 'udhr'],
    examTips: [
      'Directly associated with the UN CRPD',
      'Extends the Social Model by adding a legal/rights framework',
      'Frames accessibility as a fundamental human right, not optional goodwill',
      'Embraces disability as part of human diversity'
    ]
  },
  {
    slug: 'functional-solutions-model',
    title: 'Functional Solutions Model',
    category: 'Disability Models',
    applicableTo: ['cpacc', 'was'],
    summary: 'Focuses on practical, innovative solutions to functional limitations without regard to the cause or classification of the disability.',
    content: [
      {
        type: 'paragraph',
        text: 'The Functional Solutions Model is a pragmatic approach that focuses on identifying the functional limitations a person experiences and then finding practical, often technological, solutions to overcome those limitations. Unlike the Medical Model, it does not aim to "fix" the person; unlike the Social Model, it does not focus primarily on societal change. Instead, it asks: "What does this person need to accomplish, and what tools or strategies will help them do it?"'
      },
      {
        type: 'heading',
        text: 'Key Characteristics'
      },
      {
        type: 'list',
        items: [
          'Identifies specific functional challenges the person faces',
          'Seeks innovative, often technology-based solutions',
          'Agnostic about the cause of the disability — focuses on the outcome',
          'Highly practical and solution-oriented',
          'Aligns well with assistive technology approaches',
          'Does not place blame on the individual or society — focuses on results'
        ]
      },
      {
        type: 'paragraph',
        text: 'This model is particularly relevant to the field of assistive technology and accessible design. A screen reader is a functional solution: it does not cure blindness and it does not remove societal barriers directly, but it enables a blind person to use a computer effectively. The model is valued for its practicality but criticized for potentially ignoring deeper social or systemic issues.'
      },
    ],
    relatedTopics: ['screen-readers', 'aac-devices', 'switch-devices', 'social-model'],
    examTips: [
      'Focuses on practical solutions, especially through technology',
      'Does not try to fix the person (unlike Medical) or change society (unlike Social)',
      'Closely tied to the assistive technology field',
      'Think: "What tool or approach solves this specific functional challenge?"'
    ]
  },
  {
    slug: 'social-identity-model',
    title: 'Social Identity / Cultural Affiliation Model',
    category: 'Disability Models',
    applicableTo: ['cpacc', 'was'],
    summary: 'Views disability as an identity and culture to be embraced, similar to how ethnic or cultural groups claim pride in their identity.',
    content: [
      {
        type: 'paragraph',
        text: 'The Social Identity Model (also called the Cultural Affiliation Model) reframes disability as an identity and source of community and pride, rather than as a deficit or a social problem. The most prominent example is Deaf culture, where many Deaf people view their deafness not as a disability but as a cultural and linguistic identity. They use sign language as their primary language, share cultural norms and values, and may resist cochlear implants or other "fixes" as threats to their culture.'
      },
      {
        type: 'heading',
        text: 'Key Features'
      },
      {
        type: 'list',
        items: [
          'Disability is viewed as a positive identity and source of community',
          'People with shared disabilities form distinct cultural groups with their own norms, values, and traditions',
          'The most well-known example is Deaf culture (note the capital D)',
          'Disability pride and disability culture are central concepts',
          'Rejects the notion that disability is something to be fixed or pitied',
          'Parallels other identity movements (LGBTQ+ pride, racial identity, etc.)'
        ]
      },
      {
        type: 'paragraph',
        text: 'The use of a capital "D" in Deaf is significant and frequently tested. "Deaf" (capital D) refers to cultural identity and community membership, while "deaf" (lowercase d) refers to the audiological condition. This distinction exemplifies how the Social Identity Model operates: the same condition can be viewed as a medical fact or as a cultural identity.'
      },
    ],
    relatedTopics: ['social-model', 'human-rights-model', 'auditory-disabilities', 'inclusive-language'],
    examTips: [
      'Deaf culture (capital D) is the primary example — know it well',
      'Disability is framed as identity and source of pride, not a deficit',
      'Capital-D "Deaf" = cultural identity; lowercase "deaf" = audiological condition',
      'Parallels ethnic and cultural identity movements'
    ]
  },
  {
    slug: 'economic-model',
    title: 'Economic Model of Disability',
    category: 'Disability Models',
    applicableTo: ['cpacc', 'was'],
    summary: 'Defines disability in terms of its effect on a person\'s ability to work and contribute economically, often used in benefits and insurance systems.',
    content: [
      {
        type: 'paragraph',
        text: 'The Economic Model of Disability defines disability primarily in terms of its impact on a person\'s ability to work, be productive, and participate in the economy. Under this model, a person is considered disabled to the extent that their condition reduces their earning capacity or economic productivity. This model is the foundation for many government disability benefit programs, workers\' compensation systems, and insurance policies.'
      },
      {
        type: 'heading',
        text: 'Key Characteristics'
      },
      {
        type: 'list',
        items: [
          'Disability is measured by its impact on economic productivity and earning capacity',
          'Used to determine eligibility for disability benefits, insurance payouts, and support services',
          'Focuses on what a person cannot do in terms of work and economic contribution',
          'Disability is seen as an economic burden that needs to be managed or compensated',
          'Often uses percentage-based assessments of functional capacity'
        ]
      },
      {
        type: 'paragraph',
        text: 'Critics argue that the Economic Model reduces human worth to economic productivity, ignoring the many ways people contribute to society outside of paid employment. It can also create perverse incentives where people must prove their inability to work in order to receive support, potentially discouraging rehabilitation and participation. However, it remains practically influential in shaping how governments allocate disability-related resources.'
      },
    ],
    relatedTopics: ['medical-model', 'charity-model', 'social-model'],
    examTips: [
      'Defines disability by its impact on economic productivity and work capacity',
      'Underpins disability benefit systems and insurance programs',
      'Criticized for reducing human worth to economic output',
      'Often grouped with Medical and Charity Models as deficit-based approaches'
    ]
  },
  {
    slug: 'charity-model',
    title: 'Charity Model of Disability',
    category: 'Disability Models',
    applicableTo: ['cpacc', 'was'],
    summary: 'Views people with disabilities as victims of circumstance who deserve pity and require help from able-bodied benefactors.',
    content: [
      {
        type: 'paragraph',
        text: 'The Charity Model of Disability frames people with disabilities as tragic, helpless victims who need the compassion and generosity of others to survive. Under this model, people with disabilities are objects of pity, and the appropriate societal response is charitable giving and sympathy. While charity itself is not inherently negative, this model is criticized because it strips agency from people with disabilities, creates an unequal power dynamic, and reinforces the idea that disability is an inherently tragic condition.'
      },
      {
        type: 'heading',
        text: 'Characteristics'
      },
      {
        type: 'list',
        items: [
          'People with disabilities are portrayed as victims deserving of pity',
          'The non-disabled "benefactor" holds the power in the relationship',
          'Disability is seen as a personal tragedy',
          'Often used in fundraising campaigns that use pity-based imagery ("inspiration porn")',
          'People with disabilities are passive recipients, not active agents',
          'Reinforces the idea that people with disabilities are dependent and helpless'
        ]
      },
      {
        type: 'paragraph',
        text: 'The Charity Model is visible in telethons, pity-based fundraising campaigns, and media portrayals that frame people with disabilities as objects of sympathy. Disability rights advocates strongly oppose this model because it undermines dignity and autonomy. The term "inspiration porn," coined by disability activist Stella Young, describes content that uses disability to make non-disabled people feel grateful or inspired, which is a hallmark of the Charity Model in action.'
      },
    ],
    relatedTopics: ['medical-model', 'social-model', 'human-rights-model', 'disability-etiquette'],
    examTips: [
      'Always presented as a harmful, outdated model in CPACC context',
      'Key words: pity, tragedy, victim, helpless, dependent',
      'Stella Young coined "inspiration porn" to critique Charity Model thinking',
      'Removes agency from people with disabilities'
    ]
  },

  // ============================================================
  // DISABILITY TYPES
  // ============================================================
  {
    slug: 'visual-disabilities',
    title: 'Visual Disabilities',
    category: 'Disability Types',
    applicableTo: ['cpacc', 'was'],
    summary: 'Includes blindness, low vision, and color vision deficiency, each requiring different accommodations and assistive technologies.',
    content: [
      {
        type: 'paragraph',
        text: 'Visual disabilities encompass a range of conditions affecting sight, from total blindness to low vision to color vision deficiency. These are among the most commonly discussed disability types in web accessibility because the web is heavily visual. Different visual disabilities require different solutions: a blind user needs a screen reader, while a user with low vision may need magnification, and a user with color vision deficiency needs information conveyed through means other than color alone.'
      },
      {
        type: 'heading',
        text: 'Types of Visual Disabilities'
      },
      {
        type: 'list',
        items: [
          'Blindness: Complete or near-complete loss of vision. Users rely on screen readers, refreshable braille displays, and audio descriptions.',
          'Low Vision: Significant visual impairment that cannot be fully corrected with glasses or contacts. Includes conditions like macular degeneration, glaucoma, and diabetic retinopathy. Users may use screen magnifiers and high-contrast modes.',
          'Color Vision Deficiency (Color Blindness): Inability to distinguish certain colors. Most common is red-green deficiency. Affects approximately 8% of men and 0.5% of women of Northern European descent.',
          'Photosensitivity: Sensitivity to light, including flashing or flickering content that can trigger migraines or seizures.'
        ]
      },
      {
        type: 'heading',
        text: 'Accessibility Considerations'
      },
      {
        type: 'list',
        items: [
          'Provide text alternatives for all non-text content (WCAG 1.1.1)',
          'Do not use color as the sole means of conveying information (WCAG 1.4.1)',
          'Ensure sufficient color contrast ratios (WCAG 1.4.3 and 1.4.6)',
          'Support screen reader navigation with proper semantic HTML and ARIA',
          'Allow text resizing up to 200% without loss of functionality (WCAG 1.4.4)',
          'Support user stylesheets and high-contrast modes'
        ]
      },
    ],
    relatedTopics: ['screen-readers', 'screen-magnifiers', 'refreshable-braille', 'wcag-perceivable'],
    examTips: [
      'Blindness, low vision, and color vision deficiency are distinct — different solutions for each',
      'Color vision deficiency affects ~8% of men, ~0.5% of women',
      'WCAG 1.4.1: Never use color alone to convey information',
      'Screen readers for blindness, magnifiers for low vision, color alternatives for CVD'
    ]
  },
  {
    slug: 'auditory-disabilities',
    title: 'Auditory Disabilities',
    category: 'Disability Types',
    applicableTo: ['cpacc', 'was'],
    summary: 'Includes deafness and hard of hearing, requiring captions, transcripts, and visual alternatives to audio content.',
    content: [
      {
        type: 'paragraph',
        text: 'Auditory disabilities range from mild hearing loss to profound deafness. The distinction between "Deaf" (capital D, referring to cultural identity) and "deaf" (lowercase d, referring to the audiological condition) is important. Hard of hearing individuals have partial hearing loss and may use hearing aids or assistive listening devices. For digital accessibility, the primary concern is ensuring that audio content has visual equivalents.'
      },
      {
        type: 'heading',
        text: 'Types and Considerations'
      },
      {
        type: 'list',
        items: [
          'Deafness: Profound hearing loss; may use sign language as primary language',
          'Hard of Hearing: Partial hearing loss that may be aided by hearing devices',
          'Central Auditory Processing Disorder: Difficulty processing auditory information despite normal hearing',
          'Conductive, sensorineural, and mixed hearing loss are clinical categories',
          'Hearing loss can be congenital (present from birth) or acquired (developed later)'
        ]
      },
      {
        type: 'heading',
        text: 'Accessibility Requirements'
      },
      {
        type: 'list',
        items: [
          'Captions for all prerecorded and live audio content (WCAG 1.2.2, 1.2.4)',
          'Transcripts for audio-only content (WCAG 1.2.1)',
          'Sign language interpretation for prerecorded content (WCAG 1.2.6, AAA)',
          'Visual indicators for audio alerts and notifications',
          'Ensure audio controls allow volume adjustment independent of system volume',
          'Avoid relying solely on audio to convey important information'
        ]
      },
    ],
    relatedTopics: ['deaf-blindness', 'hearing-assistive-tech', 'social-identity-model', 'wcag-perceivable'],
    examTips: [
      'Captions (synchronized) vs. transcripts (standalone) — know the difference',
      'Open captions = always visible; closed captions = can be toggled',
      'Capital-D Deaf = cultural identity; lowercase deaf = audiological condition',
      'WCAG 1.2.2 = prerecorded captions; 1.2.4 = live captions'
    ]
  },
  {
    slug: 'deaf-blindness',
    title: 'Deaf-Blindness',
    category: 'Disability Types',
    applicableTo: ['cpacc', 'was'],
    summary: 'A combined vision and hearing loss that creates unique challenges not addressed by solutions for either disability alone.',
    content: [
      {
        type: 'paragraph',
        text: 'Deaf-blindness is a combined vision and hearing loss that significantly affects communication, access to information, and mobility. It is not simply the sum of deafness and blindness — the combination creates unique challenges because the two primary distance senses are both affected. A person who is deaf can rely on vision; a person who is blind can rely on hearing. A person who is deaf-blind has neither fully available as a compensating sense.'
      },
      {
        type: 'heading',
        text: 'Key Points'
      },
      {
        type: 'list',
        items: [
          'Most people with deaf-blindness have some residual vision, hearing, or both',
          'Total deaf-blindness (no vision or hearing) is rare but does occur',
          'Communication methods include tactile sign language, print on palm, and tadoma (feeling speech vibrations)',
          'Refreshable braille displays are a critical technology for computer access',
          'Usher syndrome is a common cause — progressive vision loss combined with hearing loss',
          'Helen Keller is the most well-known historical figure with deaf-blindness'
        ]
      },
      {
        type: 'heading',
        text: 'Digital Accessibility'
      },
      {
        type: 'paragraph',
        text: 'For digital content, people with deaf-blindness typically rely on refreshable braille displays connected to a computer running a screen reader. This means content must be compatible with screen readers (like for blind users) AND must not rely on audio output alone (since the user cannot hear it). Captions are insufficient on their own — transcripts that can be rendered in braille are essential.'
      },
    ],
    relatedTopics: ['visual-disabilities', 'auditory-disabilities', 'refreshable-braille', 'screen-readers'],
    examTips: [
      'Deaf-blindness requires solutions beyond those for deafness or blindness alone',
      'Refreshable braille displays are the key assistive technology',
      'Most people with deaf-blindness have some residual vision or hearing',
      'Usher syndrome is a common cause — know the name'
    ]
  },
  {
    slug: 'speech-disabilities',
    title: 'Speech Disabilities',
    category: 'Disability Types',
    applicableTo: ['cpacc', 'was'],
    summary: 'Includes conditions affecting speech production or language expression, ranging from stuttering to aphasia to mutism.',
    content: [
      {
        type: 'paragraph',
        text: 'Speech disabilities affect a person\'s ability to produce speech that is understood by others, or to use spoken language effectively. These can be organic (caused by physical structures or neurological conditions), functional (no identifiable physical cause), or acquired (resulting from stroke, traumatic brain injury, or progressive disease). Speech disabilities are especially relevant for voice-based interfaces and situations where verbal communication is expected.'
      },
      {
        type: 'heading',
        text: 'Types of Speech Disabilities'
      },
      {
        type: 'list',
        items: [
          'Articulation disorders: Difficulty producing specific speech sounds correctly (e.g., lisping)',
          'Fluency disorders: Interruptions in the flow of speech, such as stuttering (stammering)',
          'Voice disorders: Abnormalities in pitch, volume, or quality of voice',
          'Aphasia: Impaired ability to produce or comprehend language, typically caused by brain damage (stroke)',
          'Dysarthria: Muscle weakness affecting speech, common in cerebral palsy and MS',
          'Mutism: Inability or unwillingness to speak, including selective mutism (anxiety-based)'
        ]
      },
      {
        type: 'heading',
        text: 'Accessibility Implications'
      },
      {
        type: 'list',
        items: [
          'Never require voice input as the only means of interaction',
          'Provide text-based alternatives for phone-based customer service',
          'AAC (Augmentative and Alternative Communication) devices may be needed',
          'Allow sufficient time for communication — do not rush or finish sentences',
          'Voice recognition systems may not work well for people with speech disabilities'
        ]
      },
    ],
    relatedTopics: ['aac-devices', 'cognitive-disabilities', 'neurological-disabilities'],
    examTips: [
      'Aphasia (language impairment from brain damage) vs. dysarthria (motor speech disorder) — know the difference',
      'Never require voice as the only input method',
      'AAC devices are the key assistive technology for speech disabilities',
      'Speech disabilities are distinct from language/cognitive disabilities'
    ]
  },
  {
    slug: 'mobility-disabilities',
    title: 'Mobility, Flexibility & Body Structure Disabilities',
    category: 'Disability Types',
    applicableTo: ['cpacc', 'was'],
    summary: 'Conditions affecting physical movement, dexterity, and body structure, impacting the ability to use standard input devices.',
    content: [
      {
        type: 'paragraph',
        text: 'Mobility disabilities encompass a wide range of conditions that affect a person\'s ability to move, manipulate objects, or maintain body position. These include conditions affecting the upper body (impacting computer use), lower body (impacting physical navigation), and fine motor skills (impacting precise interactions like clicking small targets). Common causes include spinal cord injuries, amputation, arthritis, cerebral palsy, muscular dystrophy, and repetitive strain injuries.'
      },
      {
        type: 'heading',
        text: 'Categories'
      },
      {
        type: 'list',
        items: [
          'Paralysis: Loss of muscle function (paraplegia = lower body, quadriplegia/tetraplegia = all four limbs)',
          'Amputation or limb differences: Missing or partially formed limbs',
          'Arthritis and joint conditions: Pain and reduced range of motion',
          'Muscular dystrophy: Progressive muscle weakness and loss',
          'Tremors: Involuntary shaking that affects fine motor control',
          'Repetitive strain injury (RSI): Pain from overuse of specific motions'
        ]
      },
      {
        type: 'heading',
        text: 'Digital Accessibility Requirements'
      },
      {
        type: 'list',
        items: [
          'Full keyboard accessibility — all functionality must be available without a mouse (WCAG 2.1.1)',
          'No keyboard traps (WCAG 2.1.2)',
          'Sufficient target sizes for clickable elements (WCAG 2.5.5 in WCAG 2.1)',
          'Support for alternative input devices: switches, head trackers, eye-gaze systems, sip-and-puff',
          'Minimize the need for precise movements, dragging, or multi-point gestures',
          'Provide adequate time to complete interactions (WCAG 2.2.1)'
        ]
      },
    ],
    relatedTopics: ['switch-devices', 'wcag-operable', 'universal-design-principles'],
    examTips: [
      'Keyboard accessibility (WCAG 2.1.1) is the most critical requirement',
      'Alternative input devices (switches, eye-gaze) emulate keyboard input',
      'Paraplegia = lower body; quadriplegia/tetraplegia = all four limbs',
      'Fine motor impairments need large click targets and forgiving interactions'
    ]
  },
  {
    slug: 'cognitive-disabilities',
    title: 'Cognitive Disabilities',
    category: 'Disability Types',
    applicableTo: ['cpacc', 'was'],
    summary: 'Encompasses conditions affecting learning, memory, attention, problem-solving, and comprehension, including intellectual disability, dyslexia, ADHD, and autism.',
    content: [
      {
        type: 'paragraph',
        text: 'Cognitive disabilities are the largest and most diverse category of disability, affecting how people think, learn, remember, communicate, and process information. They range from mild learning differences to profound intellectual disabilities. Cognitive disabilities often overlap with neurological and psychological disabilities, and many people have multiple co-occurring conditions. Despite being the most common disability category, cognitive accessibility is often the most overlooked in web accessibility efforts.'
      },
      {
        type: 'heading',
        text: 'Types of Cognitive Disabilities'
      },
      {
        type: 'list',
        items: [
          'Intellectual disability: Significant limitations in intellectual functioning and adaptive behavior',
          'Dyslexia: Difficulty with reading, spelling, and decoding written language',
          'Dyscalculia: Difficulty with mathematical concepts and number processing',
          'ADHD: Challenges with sustained attention, impulse control, and executive function',
          'Autism Spectrum Disorder: Differences in social communication, sensory processing, and patterns of behavior',
          'Memory impairments: Difficulty forming, storing, or retrieving memories',
          'Learning disabilities: Specific difficulties in areas like reading, writing, or math despite typical intelligence'
        ]
      },
      {
        type: 'heading',
        text: 'Accessibility Strategies'
      },
      {
        type: 'list',
        items: [
          'Use clear, simple language and avoid jargon (WCAG 3.1)',
          'Provide consistent, predictable navigation and layout (WCAG 3.2)',
          'Supplement text with images, icons, and multimedia',
          'Break content into small, manageable chunks',
          'Provide input assistance — error identification, labels, and suggestions (WCAG 3.3)',
          'Allow users to control timing and avoid distractions',
          'Support multiple ways to find content (search, navigation, site map)'
        ]
      },
    ],
    relatedTopics: ['neurological-disabilities', 'psychological-disabilities', 'wcag-understandable', 'universal-design-learning'],
    examTips: [
      'Cognitive disabilities are the most common and most overlooked disability category',
      'Intellectual disability = global limitations; learning disabilities = specific skill areas',
      'WCAG Principle 3 (Understandable) is most relevant to cognitive accessibility',
      'Autism is classified under cognitive disabilities for CPACC purposes'
    ]
  },
  {
    slug: 'neurological-disabilities',
    title: 'Neurological Disabilities',
    category: 'Disability Types',
    applicableTo: ['cpacc', 'was'],
    summary: 'Conditions affecting the nervous system, including epilepsy, migraines, stroke, cerebral palsy, multiple sclerosis, and vestibular disorders.',
    content: [
      {
        type: 'paragraph',
        text: 'Neurological disabilities result from damage to or dysfunction of the nervous system (brain, spinal cord, or peripheral nerves). They can affect movement, sensation, cognition, communication, and behavior — often in combination. Many neurological conditions are progressive (worsening over time), episodic (occurring in episodes), or both. The accessibility implications vary widely depending on which functions are affected.'
      },
      {
        type: 'heading',
        text: 'Common Neurological Conditions'
      },
      {
        type: 'list',
        items: [
          'Epilepsy / Seizure disorders: Abnormal electrical activity in the brain causing seizures. Flashing content can trigger photosensitive seizures.',
          'Migraines: Severe headaches often accompanied by visual disturbances, light sensitivity, and nausea. Motion and flickering content can be triggers.',
          'Stroke (cerebrovascular accident): Brain damage from interrupted blood supply. Can cause aphasia, paralysis, cognitive impairment, and vision loss.',
          'Cerebral Palsy (CP): Motor disability caused by brain damage before, during, or shortly after birth. Affects movement and coordination.',
          'Multiple Sclerosis (MS): Progressive autoimmune disease that damages nerve coverings. Symptoms fluctuate and can include vision problems, fatigue, and motor difficulties.',
          'Vestibular disorders: Conditions affecting balance and spatial orientation. Parallax scrolling and motion effects can cause dizziness and nausea.'
        ]
      },
      {
        type: 'heading',
        text: 'Key WCAG Requirements'
      },
      {
        type: 'list',
        items: [
          'WCAG 2.3.1: No content flashes more than 3 times per second (seizure prevention)',
          'WCAG 2.3.2 (AAA): No flashing content at all',
          'Respect prefers-reduced-motion user preference for vestibular disorders',
          'Provide pause, stop, hide controls for moving content (WCAG 2.2.2)',
          'Support multiple input modalities for motor-affected neurological conditions'
        ]
      },
    ],
    relatedTopics: ['cognitive-disabilities', 'mobility-disabilities', 'wcag-operable'],
    examTips: [
      'WCAG 2.3.1: Nothing flashes more than 3 times per second — this prevents seizures',
      'Vestibular disorders = dizziness from motion; address with prefers-reduced-motion',
      'Stroke is a common cause of acquired aphasia and physical disability',
      'Neurological conditions often affect multiple functional areas simultaneously'
    ]
  },
  {
    slug: 'psychological-disabilities',
    title: 'Psychological Disabilities',
    category: 'Disability Types',
    applicableTo: ['cpacc', 'was'],
    summary: 'Mental health conditions including anxiety disorders, mood disorders, PTSD, and depression that can affect digital interaction.',
    content: [
      {
        type: 'paragraph',
        text: 'Psychological disabilities (also called psychiatric or mental health disabilities) include conditions that affect mood, thinking, and behavior. They are extremely common — the WHO estimates that 1 in 4 people will experience a mental health condition at some point in their lives. While often invisible, psychological disabilities can significantly affect a person\'s ability to interact with digital content, particularly through the impact on concentration, motivation, decision-making, and stress tolerance.'
      },
      {
        type: 'heading',
        text: 'Common Conditions'
      },
      {
        type: 'list',
        items: [
          'Anxiety disorders: Generalized anxiety, social anxiety, panic disorder, and phobias',
          'Mood disorders: Major depression, bipolar disorder',
          'Post-Traumatic Stress Disorder (PTSD): Triggered by traumatic experiences; certain content can be retraumatizing',
          'Obsessive-Compulsive Disorder (OCD): Intrusive thoughts and compulsive behaviors',
          'Schizophrenia and psychotic disorders: Altered perception of reality'
        ]
      },
      {
        type: 'heading',
        text: 'Design Considerations'
      },
      {
        type: 'list',
        items: [
          'Avoid unnecessary pressure, urgency, and time constraints',
          'Provide clear, predictable interfaces that reduce anxiety',
          'Offer content warnings for potentially distressing material',
          'Make error messages supportive and non-threatening',
          'Do not use manipulative design patterns (dark patterns)',
          'Allow users to save progress and return later',
          'Support customization of notifications and alerts'
        ]
      },
    ],
    relatedTopics: ['cognitive-disabilities', 'neurological-disabilities', 'wcag-understandable'],
    examTips: [
      'WHO: 1 in 4 people experience mental health conditions at some point',
      'Psychological disabilities are invisible but legally recognized disabilities',
      'Reduce stress: predictable UI, supportive error messages, no time pressure',
      'May overlap with cognitive and neurological categories'
    ]
  },
  {
    slug: 'multiple-disabilities',
    title: 'Multiple / Complex Disabilities',
    category: 'Disability Types',
    applicableTo: ['cpacc', 'was'],
    summary: 'When a person has two or more disabilities, the combination often creates unique challenges that require holistic solutions.',
    content: [
      {
        type: 'paragraph',
        text: 'Multiple disabilities (also called complex disabilities) refers to the presence of two or more disability conditions in the same individual. The combination often creates challenges that are greater than the sum of their parts, because strategies that compensate for one disability may be undermined by another. For example, a person who is blind typically relies on audio, but if they also have a hearing impairment, audio-based solutions are insufficient. Deaf-blindness is the most well-known example of multiple disabilities.'
      },
      {
        type: 'heading',
        text: 'Key Considerations'
      },
      {
        type: 'list',
        items: [
          'The impact of multiple disabilities is multiplicative, not additive',
          'Solutions for one disability may conflict with needs from another',
          'Individualized approaches are essential — there is no one-size-fits-all solution',
          'Common combinations include: deaf-blindness, intellectual disability with physical disability, cognitive disability with sensory impairment',
          'Aging often leads to multiple disabilities as conditions accumulate',
          'Universal design principles become especially important for multiple disabilities'
        ]
      },
      {
        type: 'paragraph',
        text: 'The presence of multiple disabilities underscores why accessibility should follow universal design principles and offer multiple modalities for accessing content. If information is available only visually or only through audio, people with multiple sensory disabilities are excluded. Providing content in multiple formats — text, audio, visual, and tactile — ensures the broadest possible access.'
      },
    ],
    relatedTopics: ['deaf-blindness', 'universal-design-principles', 'visual-disabilities', 'auditory-disabilities'],
    examTips: [
      'Impact is multiplicative, not additive — compensatory strategies may conflict',
      'Deaf-blindness is the most commonly cited example of multiple disabilities',
      'Universal design and multi-modal content are the best strategies',
      'Aging often leads to multiple disability conditions'
    ]
  },

  // ============================================================
  // ASSISTIVE TECHNOLOGIES
  // ============================================================
  {
    slug: 'screen-readers',
    title: 'Screen Readers',
    category: 'Assistive Technologies',
    applicableTo: ['cpacc', 'was'],
    summary: 'Software that converts digital text and interface elements into speech or braille output, enabling blind and visually impaired users to access computers and the web.',
    content: [
      {
        type: 'paragraph',
        text: 'Screen readers are software applications that interpret the content on a screen and present it to the user through synthesized speech or a refreshable braille display. They are the primary assistive technology for people who are blind and are also used by some people with low vision, learning disabilities, or literacy challenges. Screen readers navigate content using the Document Object Model (DOM) and the accessibility tree, making proper semantic HTML and ARIA markup essential.'
      },
      {
        type: 'heading',
        text: 'Major Screen Readers'
      },
      {
        type: 'list',
        items: [
          'JAWS (Job Access With Speech): The most widely used commercial screen reader for Windows. Developed by Freedom Scientific.',
          'NVDA (NonVisual Desktop Access): A free, open-source screen reader for Windows. Widely used globally.',
          'VoiceOver: Apple\'s built-in screen reader for macOS, iOS, iPadOS, watchOS, and tvOS. Free with all Apple devices.',
          'TalkBack: Google\'s built-in screen reader for Android devices.',
          'Narrator: Microsoft\'s built-in screen reader for Windows.',
          'Orca: Open-source screen reader for Linux/GNOME.'
        ]
      },
      {
        type: 'heading',
        text: 'How Screen Readers Work'
      },
      {
        type: 'list',
        items: [
          'Read the accessibility tree, not the visual layout',
          'Navigate by headings (H key), landmarks, links, form fields, and other element types',
          'Announce element roles, names, states, and values (e.g., "Submit, button" or "Email, edit, required")',
          'Use a virtual cursor / browse mode for reading documents and web pages',
          'Switch to forms mode / focus mode for interactive controls',
          'Rely on proper heading hierarchy, link text, alt text, and ARIA attributes'
        ]
      },
    ],
    relatedTopics: ['visual-disabilities', 'refreshable-braille', 'wcag-perceivable', 'wcag-robust'],
    examTips: [
      'JAWS = Windows (commercial), NVDA = Windows (free/open-source), VoiceOver = Apple, TalkBack = Android',
      'Screen readers use the accessibility tree, not the visual layout',
      'Heading navigation is a primary navigation method for screen reader users',
      'Proper semantic HTML + ARIA is what makes content screen-reader accessible'
    ]
  },
  {
    slug: 'screen-magnifiers',
    title: 'Screen Magnifiers',
    category: 'Assistive Technologies',
    applicableTo: ['cpacc', 'was'],
    summary: 'Software that enlarges screen content for people with low vision, allowing them to see and interact with digital interfaces.',
    content: [
      {
        type: 'paragraph',
        text: 'Screen magnifiers are software applications that enlarge a portion of the screen, allowing people with low vision to see content that would otherwise be too small. Unlike screen readers, which convert visual content to audio, magnifiers preserve the visual interface but make it larger. Users typically see a magnified portion of the screen and navigate by moving the magnified viewport. Many screen magnifiers also include features like color inversion, high contrast, cursor enhancement, and text-to-speech.'
      },
      {
        type: 'heading',
        text: 'Common Screen Magnifiers'
      },
      {
        type: 'list',
        items: [
          'ZoomText: The leading commercial screen magnifier for Windows. Includes Fusion (ZoomText + JAWS combined).',
          'Windows Magnifier: Built-in magnification tool in Windows (free but less feature-rich).',
          'macOS Zoom: Built-in magnification on Mac, accessible via Accessibility settings.',
          'iOS/Android Zoom: Built-in magnification on mobile devices.',
          'Browser zoom: Built into all modern browsers (Ctrl/Cmd + Plus).'
        ]
      },
      {
        type: 'heading',
        text: 'Design Implications'
      },
      {
        type: 'list',
        items: [
          'Content must reflow properly when zoomed to 200% or more (WCAG 1.4.4)',
          'At 400% zoom / 320px viewport, content should reflow to a single column without horizontal scrolling (WCAG 1.4.10)',
          'Avoid fixed-position elements that obscure magnified content',
          'Maintain proximity between related elements (labels near fields) since the user sees only a portion of the screen',
          'Use relative units (em, rem, %) rather than fixed pixels for text sizing',
          'Ensure sufficient color contrast — low vision users rely heavily on contrast'
        ]
      },
    ],
    relatedTopics: ['visual-disabilities', 'screen-readers', 'wcag-perceivable'],
    examTips: [
      'ZoomText is the leading commercial screen magnifier',
      'WCAG 1.4.4: Text resizable to 200% without loss of functionality',
      'WCAG 1.4.10 (Reflow): Content works at 400% / 320px without horizontal scrolling',
      'Screen magnifier users see only a portion of the screen at a time — proximity of related elements matters'
    ]
  },
  {
    slug: 'aac-devices',
    title: 'Augmentative & Alternative Communication (AAC)',
    category: 'Assistive Technologies',
    applicableTo: ['cpacc', 'was'],
    summary: 'Tools and strategies that supplement or replace speech for people with communication difficulties.',
    content: [
      {
        type: 'paragraph',
        text: 'Augmentative and Alternative Communication (AAC) encompasses all forms of communication other than oral speech that are used to express thoughts, needs, wants, and ideas. "Augmentative" means supplementing existing speech; "alternative" means replacing it entirely. AAC ranges from low-tech solutions like picture boards and letter boards to high-tech speech-generating devices (SGDs) that produce synthesized speech when the user selects symbols, words, or letters.'
      },
      {
        type: 'heading',
        text: 'Types of AAC'
      },
      {
        type: 'list',
        items: [
          'Unaided AAC: Uses no external tools — gestures, facial expressions, sign language, body language',
          'Low-tech AAC: Physical tools like picture boards, symbol charts, letter boards, communication books',
          'Mid-tech AAC: Simple electronic devices with recorded speech output (e.g., BIGmack button)',
          'High-tech AAC: Sophisticated speech-generating devices (SGDs) and tablet-based apps (e.g., Proloquo2Go, TouchChat, Tobii Dynavox)',
          'Eye-gaze AAC: Uses eye-tracking technology for people who cannot use their hands (e.g., people with ALS)'
        ]
      },
      {
        type: 'paragraph',
        text: 'AAC is used by a wide range of people including those with cerebral palsy, ALS/motor neuron disease, autism (especially non-speaking autistic individuals), stroke/aphasia, traumatic brain injury, and developmental disabilities. The famous physicist Stephen Hawking used a high-tech AAC device controlled by a cheek muscle sensor.'
      },
    ],
    relatedTopics: ['speech-disabilities', 'switch-devices', 'cognitive-disabilities', 'mobility-disabilities'],
    examTips: [
      'Augmentative = supplements speech; Alternative = replaces speech',
      'Low-tech (picture boards) to high-tech (speech-generating devices) spectrum',
      'Used by people with CP, ALS, autism, aphasia, and many other conditions',
      'Stephen Hawking is a well-known AAC user'
    ]
  },
  {
    slug: 'hearing-assistive-tech',
    title: 'Hearing Assistive Technologies',
    category: 'Assistive Technologies',
    applicableTo: ['cpacc', 'was'],
    summary: 'Devices and systems that help people with hearing loss access audio information, including hearing aids, cochlear implants, and assistive listening systems.',
    content: [
      {
        type: 'paragraph',
        text: 'Hearing assistive technologies encompass a range of devices and systems designed to improve access to auditory information for people who are deaf or hard of hearing. These range from personal devices like hearing aids and cochlear implants to environmental systems like hearing loops and FM systems, to digital solutions like real-time captioning and visual alerts.'
      },
      {
        type: 'heading',
        text: 'Types of Hearing Assistive Technology'
      },
      {
        type: 'list',
        items: [
          'Hearing aids: Amplify sound; come in various styles (behind-the-ear, in-the-ear, completely-in-canal)',
          'Cochlear implants: Surgically implanted devices that bypass damaged portions of the ear and directly stimulate the auditory nerve',
          'Hearing loops (induction loops): Electromagnetic systems installed in rooms that transmit audio directly to hearing aids with telecoils (T-coils)',
          'FM systems: Wireless systems where a speaker wears a transmitter and the listener wears a receiver',
          'Captioning: Real-time text display of spoken content — CART (Communication Access Realtime Translation) for live events',
          'Visual and tactile alerts: Flashing doorbells, vibrating alarm clocks, visual fire alarms'
        ]
      },
      {
        type: 'paragraph',
        text: 'In the digital context, automatic speech recognition (ASR) is increasingly used for live captioning, though accuracy can vary. Video relay services (VRS) allow deaf sign language users to communicate by phone via an interpreter. Telecommunication relay services (TRS) enable text-based phone communication.'
      },
    ],
    relatedTopics: ['auditory-disabilities', 'deaf-blindness', 'social-identity-model'],
    examTips: [
      'Hearing loops use electromagnetic induction to send audio to T-coil hearing aids',
      'CART = live professional captioning (Communication Access Realtime Translation)',
      'Cochlear implants are controversial in Deaf culture (Social Identity Model)',
      'Visual and tactile alerts are important for environmental accessibility'
    ]
  },
  {
    slug: 'switch-devices',
    title: 'Switch Devices & Alternative Input',
    category: 'Assistive Technologies',
    applicableTo: ['cpacc', 'was'],
    summary: 'Input devices for people who cannot use standard keyboards or mice, including switches, eye-gaze systems, head trackers, and sip-and-puff devices.',
    content: [
      {
        type: 'paragraph',
        text: 'Switch devices and alternative input methods enable people with significant motor impairments to control computers and other devices. A switch is a simple input device that typically has one or two buttons — the user activates the switch, and software cycles through available options (called scanning). These technologies are essential for people with conditions like quadriplegia, ALS, severe cerebral palsy, and muscular dystrophy.'
      },
      {
        type: 'heading',
        text: 'Types of Alternative Input'
      },
      {
        type: 'list',
        items: [
          'Single switch: One button that works with scanning software to select items sequentially',
          'Sip-and-puff: Activated by inhaling (sip) or exhaling (puff) through a tube; often used by people with quadriplegia',
          'Head tracking: Camera-based systems that track head movement to control the cursor (e.g., HeadMouse)',
          'Eye-gaze / eye-tracking: Uses cameras to track eye movement for cursor control and selection (e.g., Tobii)',
          'Voice control: Using speech to control the computer (e.g., Dragon NaturallySpeaking)',
          'Mouth stick / head wand: Physical sticks held in the mouth or attached to the head to press keys',
          'Adaptive keyboards: Large-key keyboards, one-handed keyboards, on-screen keyboards'
        ]
      },
      {
        type: 'heading',
        text: 'Web Accessibility Implications'
      },
      {
        type: 'list',
        items: [
          'All functionality must be keyboard accessible (WCAG 2.1.1) since most alternative inputs emulate keyboard',
          'Focus order must be logical and predictable (WCAG 2.4.3)',
          'Focus must be visible (WCAG 2.4.7)',
          'No keyboard traps (WCAG 2.1.2)',
          'Adequate target sizes (WCAG 2.5.5)',
          'Avoid interactions that require simultaneous actions or complex gestures'
        ]
      },
    ],
    relatedTopics: ['mobility-disabilities', 'wcag-operable', 'aac-devices'],
    examTips: [
      'Most alternative inputs emulate keyboard — keyboard accessibility is the foundation',
      'Sip-and-puff: controlled by breath through a tube, used by people with quadriplegia',
      'Eye-gaze systems (Tobii) track eye movement for selection',
      'Switch scanning: software cycles through options, user activates switch to select'
    ]
  },
  {
    slug: 'refreshable-braille',
    title: 'Refreshable Braille Displays',
    category: 'Assistive Technologies',
    applicableTo: ['cpacc', 'was'],
    summary: 'Electromechanical devices that raise and lower pins to form braille characters, allowing blind and deaf-blind users to read digital text tactilely.',
    content: [
      {
        type: 'paragraph',
        text: 'A refreshable braille display is an electromechanical device that translates digital text into braille by raising and lowering small pins through holes in a flat surface. The user reads by touch, running their fingers across the pins. The display updates (refreshes) as the user navigates through content. These devices connect to computers or mobile devices and work in conjunction with screen readers. They are especially critical for people who are deaf-blind, for whom audio output is not accessible.'
      },
      {
        type: 'heading',
        text: 'Key Features'
      },
      {
        type: 'list',
        items: [
          'Typically display one line of braille at a time (20 to 80 cells, with 40 cells being common)',
          'Each cell has 6 or 8 pins that raise to form braille characters',
          'Include navigation buttons (cursor routing keys, panning keys) to move through content',
          'Connect via USB or Bluetooth to computers, tablets, and smartphones',
          'Work with screen readers (JAWS, NVDA, VoiceOver)',
          'More expensive than screen readers alone — typically $1,000-$5,000+',
          'Essential for deaf-blind users who cannot use audio output'
        ]
      },
      {
        type: 'paragraph',
        text: 'Braille literacy is important because it provides access to spelling, punctuation, and formatting that audio output cannot convey as precisely. While screen readers with speech output are more commonly used by blind individuals, many blind professionals and students use braille displays for tasks requiring precise reading, editing, and coding.'
      },
    ],
    relatedTopics: ['screen-readers', 'deaf-blindness', 'visual-disabilities'],
    examTips: [
      'Primary digital access technology for deaf-blind users',
      'Works WITH a screen reader, not as a standalone device',
      'Displays one line of braille at a time (typically 40 cells)',
      'More expensive than other AT options — cost is a barrier to access'
    ]
  },

  // ============================================================
  // WCAG & WEB ACCESSIBILITY
  // ============================================================
  {
    slug: 'wcag-overview',
    title: 'WCAG Overview',
    category: 'WCAG & Web Accessibility',
    applicableTo: ['cpacc', 'was'],
    summary: 'The Web Content Accessibility Guidelines (WCAG) are the international standard for web accessibility, organized around four principles with three levels of conformance.',
    content: [
      {
        type: 'paragraph',
        text: 'The Web Content Accessibility Guidelines (WCAG) are developed by the World Wide Web Consortium (W3C) through its Web Accessibility Initiative (WAI). WCAG is the globally recognized standard for making web content accessible to people with disabilities. It is referenced by most accessibility laws worldwide, including Section 508 (USA), the EU Web Accessibility Directive, and EN 301 549 (Europe).'
      },
      {
        type: 'heading',
        text: 'WCAG Versions'
      },
      {
        type: 'list',
        items: [
          'WCAG 1.0 (1999): The original version with 14 guidelines and 3 priority levels. Now obsolete.',
          'WCAG 2.0 (2008): Major rewrite organized around POUR principles. Technology-agnostic. Became ISO/IEC 40500:2012.',
          'WCAG 2.1 (2018): Extended WCAG 2.0 with 17 new success criteria addressing mobile, low vision, and cognitive accessibility.',
          'WCAG 2.2 (2023): Added 9 new success criteria focused on cognitive disabilities, dragging, and authentication. Removed 4.1.1 Parsing.',
          'WCAG 3.0 (in development): Working title "W3C Accessibility Guidelines." Will use a new conformance model with bronze/silver/gold ratings.'
        ]
      },
      {
        type: 'heading',
        text: 'Conformance Levels'
      },
      {
        type: 'list',
        items: [
          'Level A: Minimum accessibility. Addresses the most critical barriers. Without Level A conformance, some users cannot access content at all.',
          'Level AA: The standard target for most laws and policies. Addresses the most common barriers for the widest range of users.',
          'Level AAA: The highest level. Not typically required by law as it may not be achievable for all content types.',
          'Conformance is cumulative: Level AA includes all Level A criteria; Level AAA includes all A and AA criteria.'
        ]
      },
      {
        type: 'heading',
        text: 'Structure: POUR Principles'
      },
      {
        type: 'paragraph',
        text: 'WCAG is organized around four principles known by the acronym POUR: Perceivable, Operable, Understandable, and Robust. Each principle contains guidelines, and each guideline contains testable success criteria at levels A, AA, or AAA.'
      },
    ],
    relatedTopics: ['wcag-perceivable', 'wcag-operable', 'wcag-understandable', 'wcag-robust', 'w3c-wai'],
    examTips: [
      'POUR = Perceivable, Operable, Understandable, Robust',
      'Level AA is the standard required by most laws',
      'WCAG 2.0 = POUR principles; 2.1 = mobile/low vision/cognitive; 2.2 = cognitive/auth/dragging',
      'WCAG is technology-agnostic — applies beyond just websites',
      'Developed by W3C WAI, not a government body'
    ]
  },
  {
    slug: 'wcag-perceivable',
    title: 'Perceivable',
    category: 'WCAG & Web Accessibility',
    applicableTo: ['cpacc', 'was'],
    summary: 'WCAG Principle 1: Information and user interface components must be presentable to users in ways they can perceive.',
    content: [
      {
        type: 'paragraph',
        text: 'Perceivable is the first WCAG principle. It requires that information and UI components be presented in ways that users can detect through at least one of their senses. If content cannot be perceived, it cannot be accessed. This principle primarily addresses sensory disabilities (visual, auditory) by requiring alternatives for content that depends on a single sense.'
      },
      {
        type: 'heading',
        text: 'Guidelines Under Perceivable'
      },
      {
        type: 'list',
        items: [
          '1.1 Text Alternatives: Provide text alternatives for non-text content (images, icons, charts). This enables screen readers, braille displays, and translation.',
          '1.2 Time-Based Media: Provide captions, audio descriptions, and transcripts for audio and video content.',
          '1.3 Adaptable: Create content that can be presented in different ways (e.g., simpler layout) without losing information or structure. Includes proper heading structure, form labels, and reading order.',
          '1.4 Distinguishable: Make it easy for users to see and hear content. Includes color contrast, text resizing, text spacing, and content reflow.'
        ]
      },
      {
        type: 'heading',
        text: 'Key Success Criteria'
      },
      {
        type: 'list',
        items: [
          '1.1.1 Non-text Content (A): All non-text content has a text alternative',
          '1.2.2 Captions - Prerecorded (A): Captions for prerecorded audio in video',
          '1.3.1 Info and Relationships (A): Structure and relationships conveyed through presentation can be programmatically determined',
          '1.4.1 Use of Color (A): Color is not the sole means of conveying information',
          '1.4.3 Contrast Minimum (AA): Text has at least 4.5:1 contrast ratio (3:1 for large text)',
          '1.4.4 Resize Text (AA): Text can be resized to 200% without loss of functionality',
          '1.4.10 Reflow (AA): Content reflows at 400% zoom without horizontal scrolling',
          '1.4.11 Non-text Contrast (AA): UI components and graphical objects have at least 3:1 contrast'
        ]
      },
    ],
    relatedTopics: ['wcag-overview', 'visual-disabilities', 'auditory-disabilities', 'screen-readers'],
    examTips: [
      'Contrast: 4.5:1 normal text (AA), 3:1 large text (AA), 7:1 normal text (AAA)',
      'Large text = 18pt (24px) or 14pt bold (18.5px)',
      '1.1.1 Non-text Content is the most fundamental success criterion',
      '1.4.1: Never use color as the ONLY way to convey information'
    ]
  },
  {
    slug: 'wcag-operable',
    title: 'Operable',
    category: 'WCAG & Web Accessibility',
    applicableTo: ['cpacc', 'was'],
    summary: 'WCAG Principle 2: User interface components and navigation must be operable by all users regardless of how they interact with the content.',
    content: [
      {
        type: 'paragraph',
        text: 'Operable is the second WCAG principle. It requires that users be able to interact with and navigate the interface regardless of the input method they use. This principle is critical for people with motor disabilities who may use keyboards, switches, or other alternative input devices, as well as people with seizure disorders and people who need more time to complete tasks.'
      },
      {
        type: 'heading',
        text: 'Guidelines Under Operable'
      },
      {
        type: 'list',
        items: [
          '2.1 Keyboard Accessible: All functionality must be available from a keyboard. No keyboard traps.',
          '2.2 Enough Time: Provide users enough time to read and use content. Allow extending, adjusting, or disabling time limits.',
          '2.3 Seizures and Physical Reactions: Do not design content in ways that cause seizures or physical reactions. Nothing flashes more than 3 times per second.',
          '2.4 Navigable: Help users navigate, find content, and determine where they are. Includes skip navigation, page titles, focus order, visible focus, link purpose, and headings.',
          '2.5 Input Modalities (WCAG 2.1): Make it easier to use inputs beyond keyboard, including pointer gestures and motion activation.'
        ]
      },
      {
        type: 'heading',
        text: 'Key Success Criteria'
      },
      {
        type: 'list',
        items: [
          '2.1.1 Keyboard (A): All functionality available via keyboard',
          '2.1.2 No Keyboard Trap (A): Keyboard focus can always be moved away from a component',
          '2.2.1 Timing Adjustable (A): Time limits can be turned off, adjusted, or extended',
          '2.3.1 Three Flashes or Below Threshold (A): Nothing flashes more than 3 times per second',
          '2.4.1 Bypass Blocks (A): Mechanism to skip repeated blocks of content (skip navigation)',
          '2.4.3 Focus Order (A): Focusable components receive focus in an order that preserves meaning',
          '2.4.6 Headings and Labels (AA): Headings and labels describe topic or purpose',
          '2.4.7 Focus Visible (AA): Keyboard focus indicator is visible'
        ]
      },
    ],
    relatedTopics: ['wcag-overview', 'mobility-disabilities', 'switch-devices', 'neurological-disabilities'],
    examTips: [
      '2.1.1 Keyboard: ALL functionality must work via keyboard',
      '2.3.1: Nothing flashes more than 3 times per second (seizure prevention)',
      '2.4.1 Bypass Blocks = skip navigation links',
      '2.4.7 Focus Visible: Keyboard users must be able to see where focus is'
    ]
  },
  {
    slug: 'wcag-understandable',
    title: 'Understandable',
    category: 'WCAG & Web Accessibility',
    applicableTo: ['cpacc', 'was'],
    summary: 'WCAG Principle 3: Information and the operation of the user interface must be understandable to all users.',
    content: [
      {
        type: 'paragraph',
        text: 'Understandable is the third WCAG principle. It requires that content be readable, interfaces behave predictably, and users receive help avoiding and correcting errors. This principle is particularly relevant for people with cognitive disabilities, learning disabilities, and language differences, but it benefits all users by promoting clear, consistent design.'
      },
      {
        type: 'heading',
        text: 'Guidelines Under Understandable'
      },
      {
        type: 'list',
        items: [
          '3.1 Readable: Make text content readable and understandable. Specify the language of the page and of parts in other languages. Define unusual words and abbreviations.',
          '3.2 Predictable: Make web pages appear and operate in predictable ways. No unexpected context changes on focus or input. Consistent navigation and identification.',
          '3.3 Input Assistance: Help users avoid and correct mistakes. Provide error identification, labels/instructions, error suggestions, and error prevention for important submissions.'
        ]
      },
      {
        type: 'heading',
        text: 'Key Success Criteria'
      },
      {
        type: 'list',
        items: [
          '3.1.1 Language of Page (A): The default language of each page is programmatically identified (lang attribute)',
          '3.1.2 Language of Parts (AA): The language of each passage or phrase in a different language is identified',
          '3.2.1 On Focus (A): No change of context when a component receives focus',
          '3.2.2 On Input (A): No change of context when a user changes a setting unless warned beforehand',
          '3.2.3 Consistent Navigation (AA): Navigation mechanisms occur in the same relative order across pages',
          '3.3.1 Error Identification (A): Errors are automatically detected and described to the user in text',
          '3.3.2 Labels or Instructions (A): Labels or instructions are provided for user input',
          '3.3.3 Error Suggestion (AA): When errors are detected, correction suggestions are provided',
          '3.3.4 Error Prevention - Legal/Financial/Data (AA): Submissions that have legal or financial implications are reversible, checked, or confirmed'
        ]
      },
    ],
    relatedTopics: ['wcag-overview', 'cognitive-disabilities', 'usability-concepts'],
    examTips: [
      '3.1.1: Set lang attribute on the html element — easy to do, commonly missed',
      '3.2.2: No navigation on dropdown change without warning (unexpected context change)',
      '3.3: Error handling = help users recover, identify errors in text, suggest corrections',
      'Principle 3 is most relevant for cognitive accessibility'
    ]
  },
  {
    slug: 'wcag-robust',
    title: 'Robust',
    category: 'WCAG & Web Accessibility',
    applicableTo: ['cpacc', 'was'],
    summary: 'WCAG Principle 4: Content must be robust enough to be interpreted reliably by a wide variety of user agents, including assistive technologies.',
    content: [
      {
        type: 'paragraph',
        text: 'Robust is the fourth and final WCAG principle. It ensures that content can be reliably interpreted by a wide range of current and future user agents, including assistive technologies. This principle focuses on the technical foundation that makes accessibility possible: proper markup, well-defined names, roles, and values for all UI components, and meaningful status messages.'
      },
      {
        type: 'heading',
        text: 'Guidelines Under Robust'
      },
      {
        type: 'list',
        items: [
          '4.1 Compatible: Maximize compatibility with current and future user agents, including assistive technologies.'
        ]
      },
      {
        type: 'heading',
        text: 'Key Success Criteria'
      },
      {
        type: 'list',
        items: [
          '4.1.1 Parsing (A): REMOVED in WCAG 2.2. Previously required valid HTML. Modern browsers and AT handle parsing errors well, making this criterion obsolete.',
          '4.1.2 Name, Role, Value (A): For all UI components, the name and role can be programmatically determined, states/properties/values can be programmatically set, and changes are available to user agents and AT. This is the foundation for custom widget accessibility.',
          '4.1.3 Status Messages (AA): Added in WCAG 2.1. Status messages (like "item added to cart" or "3 results found") can be programmatically determined by AT without receiving focus. Implemented using ARIA live regions (role="status", role="alert", aria-live).'
        ]
      },
      {
        type: 'paragraph',
        text: 'Principle 4 is the most technical of the four POUR principles. 4.1.2 Name, Role, Value is one of the most commonly failed criteria because developers create custom interactive components (custom dropdowns, tabs, modals) without proper ARIA markup. Every interactive element must expose its name (what it is called), role (what it is), and value/state (its current condition) to assistive technologies.'
      },
    ],
    relatedTopics: ['wcag-overview', 'screen-readers', 'w3c-wai'],
    examTips: [
      '4.1.2 Name, Role, Value: Every custom widget needs an accessible name, role, and state',
      '4.1.1 Parsing was REMOVED in WCAG 2.2',
      '4.1.3 Status Messages: Use ARIA live regions (aria-live, role="status")',
      'Principle 4 is the most technical principle — focuses on AT compatibility'
    ]
  },

  // ============================================================
  // UNIVERSAL DESIGN
  // ============================================================
  {
    slug: 'universal-design-principles',
    title: '7 Principles of Universal Design',
    category: 'Universal Design',
    applicableTo: ['cpacc', 'was'],
    summary: 'A framework of seven principles for designing products and environments usable by all people, to the greatest extent possible, without adaptation.',
    content: [
      {
        type: 'paragraph',
        text: 'Universal Design (UD) is the design of products, environments, programs, and services to be usable by all people, to the greatest extent possible, without the need for adaptation or specialized design. The seven principles were developed in 1997 at North Carolina State University by a working group led by Ronald Mace (who coined the term "universal design"). Universal Design goes beyond accessibility — it aims to create designs that work for everyone, including but not limited to people with disabilities.'
      },
      {
        type: 'heading',
        text: 'The Seven Principles'
      },
      {
        type: 'list',
        items: [
          'Principle 1 — Equitable Use: The design is useful and marketable to people with diverse abilities. Example: automatic doors work for everyone, not just wheelchair users.',
          'Principle 2 — Flexibility in Use: The design accommodates a wide range of individual preferences and abilities. Example: scissors designed for both left- and right-handed use.',
          'Principle 3 — Simple and Intuitive Use: Use of the design is easy to understand, regardless of experience, knowledge, language, or concentration level.',
          'Principle 4 — Perceptible Information: The design communicates necessary information effectively to the user, regardless of ambient conditions or the user\'s sensory abilities. Example: fire alarms that use both sound and light.',
          'Principle 5 — Tolerance for Error: The design minimizes hazards and adverse consequences of accidental or unintended actions. Example: undo functionality in software.',
          'Principle 6 — Low Physical Effort: The design can be used efficiently, comfortably, and with minimum fatigue. Example: lever door handles instead of round knobs.',
          'Principle 7 — Size and Space for Approach and Use: Appropriate size and space is provided for approach, reach, manipulation, and use. Example: wide aisles, adjustable-height desks.'
        ]
      },
    ],
    relatedTopics: ['universal-design-learning', 'built-environment', 'user-centered-design', 'accessibility-vs-accommodation'],
    examTips: [
      'Know all 7 principles and examples: Equitable, Flexibility, Simple, Perceptible, Tolerance for Error, Low Effort, Size/Space',
      'Ron Mace, North Carolina State University, 1997',
      'Curb cuts = classic UD example (benefits everyone, not just wheelchair users)',
      'UD is proactive design for all; accommodation is reactive retrofit for individuals'
    ]
  },
  {
    slug: 'universal-design-learning',
    title: 'Universal Design for Learning (UDL)',
    category: 'Universal Design',
    applicableTo: ['cpacc', 'was'],
    summary: 'An educational framework that provides multiple means of engagement, representation, and action/expression to support all learners.',
    content: [
      {
        type: 'paragraph',
        text: 'Universal Design for Learning (UDL) is an educational framework developed by CAST (formerly the Center for Applied Special Technology) that applies universal design principles to learning and instruction. UDL recognizes that learners vary in how they are motivated, how they perceive and comprehend information, and how they navigate learning and express what they know. Rather than creating a single rigid curriculum and retrofitting accommodations, UDL builds flexibility into the curriculum from the start.'
      },
      {
        type: 'heading',
        text: 'Three Core Principles of UDL'
      },
      {
        type: 'list',
        items: [
          'Multiple Means of Engagement (the WHY of learning): Provide multiple ways to motivate and engage learners. Address interest, persistence, and self-regulation. Example: offering choice in assignments, providing relevant real-world connections.',
          'Multiple Means of Representation (the WHAT of learning): Present information and content in multiple formats. Address perception, language, and comprehension. Example: providing text, audio, video, and diagrams for the same content.',
          'Multiple Means of Action and Expression (the HOW of learning): Allow learners to demonstrate what they know in multiple ways. Address physical action, expression, and executive function. Example: accepting essays, presentations, videos, or projects as assessment options.'
        ]
      },
      {
        type: 'paragraph',
        text: 'UDL is based on neuroscience research identifying three brain networks, and each UDL principle corresponds to one of them. The affective network (the "why" of learning) handles motivation and emotional engagement. The recognition network (the "what" of learning) handles how we perceive and categorize information. The strategic network (the "how" of learning) handles goal-setting, planning, action, and monitoring — the network behind Action and Expression.'
      },
      {
        type: 'heading',
        text: 'Principle 1 — Engagement (Affective Network / WHY)'
      },
      {
        type: 'list',
        items: [
          'Provide options for recruiting interest — offer choice, ensure relevance/authenticity, minimize threats and distractions',
          'Provide options for sustaining effort and persistence — highlight goals, vary challenge levels, foster collaboration, increase mastery-oriented feedback',
          'Provide options for self-regulation — promote expectations, develop coping skills, support self-assessment and reflection'
        ]
      },
      {
        type: 'heading',
        text: 'Principle 2 — Representation (Recognition Network / WHAT)'
      },
      {
        type: 'list',
        items: [
          'Provide options for perception — customize display of information, offer alternatives for auditory info (captions, transcripts), offer alternatives for visual info (alt text, descriptions)',
          'Provide options for language and symbols — clarify vocabulary, clarify syntax, support decoding, promote cross-language understanding, illustrate through multiple media',
          'Provide options for comprehension — activate background knowledge, highlight patterns and relationships, guide information processing, maximize transfer and generalization'
        ]
      },
      {
        type: 'heading',
        text: 'Principle 3 — Action and Expression (Strategic Network / HOW)'
      },
      {
        type: 'paragraph',
        text: 'Action and Expression is the UDL principle most often confused with Engagement on the exam because it deals with what the learner does. The distinction: Engagement is about motivation (the "why"), while Action and Expression is about how learners physically interact with materials, how they express or communicate what they know, and how they plan and monitor their learning. It is tied to the strategic brain network.'
      },
      {
        type: 'list',
        items: [
          'Provide options for physical action — vary the methods for response and navigation, optimize access to tools and assistive technologies (keyboards, switches, voice input, alternate pointing devices)',
          'Provide options for expression and communication — use multiple media for communication, use multiple tools for construction and composition (essays, video, slides, models), build fluencies with graduated levels of support',
          'Provide options for executive functions — guide appropriate goal-setting, support planning and strategy development, facilitate managing information and resources, enhance capacity for monitoring progress'
        ]
      },
    ],
    relatedTopics: ['universal-design-principles', 'cognitive-disabilities', 'accessibility-vs-accommodation'],
    examTips: [
      'Three principles: Engagement (WHY), Representation (WHAT), Action/Expression (HOW)',
      'Three brain networks: Affective → Engagement, Recognition → Representation, Strategic → Action/Expression',
      'Action and Expression covers physical action, expression/communication, and executive functions (goal-setting, planning, monitoring)',
      'Engagement is about motivation ("why") — do not confuse it with Action/Expression ("how")',
      'Developed by CAST (Center for Applied Special Technology); current framework is UDL Guidelines 3.0',
      'UDL = education-specific; UD = general product/environment design'
    ]
  },
  {
    slug: 'built-environment',
    title: 'Accessibility in the Built Environment',
    category: 'Universal Design',
    applicableTo: ['cpacc', 'was'],
    summary: 'Physical space accessibility including floor surfaces, accessible routes, ramps, elevators, signage, and wayfinding.',
    content: [
      {
        type: 'paragraph',
        text: 'Accessibility in the built environment means making physical spaces — buildings, streets, parks, transportation systems — usable by people with all types of disabilities. While CPACC is primarily a digital accessibility exam, it includes built-environment content because physical and digital accessibility are interconnected. A person who cannot physically enter a building is as excluded as a person who cannot navigate a website. In the US, the ADA Standards for Accessible Design (2010) are the authoritative reference, and many of their specific measurements appear on the exam.'
      },
      {
        type: 'heading',
        text: 'Key Elements of Built Environment Accessibility'
      },
      {
        type: 'list',
        items: [
          'Entrances and exits: ramps, automatic doors, level thresholds, adequate width for wheelchairs',
          'Vertical circulation: elevators, accessible stairways with handrails, ramps between levels',
          'Wayfinding and signage: tactile signage (braille, raised text), visual contrast, clear directional signs, tactile ground surface indicators (truncated domes)',
          'Restrooms: accessible stalls with grab bars, adequate turning space, accessible fixtures',
          'Parking: accessible parking spaces with proper dimensions and proximity to entrances',
          'Lighting and acoustics: adequate lighting for lip-reading, hearing loop (induction loop) systems, reduced echo for hearing aid users'
        ]
      },
      {
        type: 'heading',
        text: 'Floor and Ground Surfaces (ADA §302)'
      },
      {
        type: 'paragraph',
        text: 'ADA Standards §302.1 specifies that accessible floor and ground surfaces must be stable, firm, and slip-resistant. This three-word requirement is a classic exam answer. "Stable" means the surface does not move or shift under load; "firm" means it does not compress or deform significantly; "slip-resistant" means it provides adequate friction so people using canes, crutches, walkers, or wheelchairs do not slip.'
      },
      {
        type: 'list',
        items: [
          '§302.1 — All accessible floor and ground surfaces must be stable, firm, and slip-resistant',
          '§302.2 Carpet — If carpet is used, pile height is limited to 1/2 inch (measured to the backing, cushion, or pad). Carpet must be securely attached with a firm backing; exposed edges must be fastened and trimmed',
          '§302.3 Openings — Openings in floor or ground surfaces must not allow passage of a 1/2 inch diameter sphere (prevents cane tips and small wheels from catching). Elongated openings must be oriented perpendicular to the dominant direction of travel'
        ]
      },
      {
        type: 'heading',
        text: 'Changes in Level (ADA §303)'
      },
      {
        type: 'list',
        items: [
          'Changes in level up to 1/4 inch high may be vertical (no treatment required)',
          'Changes in level between 1/4 inch and 1/2 inch must be beveled with a slope no steeper than 1:2',
          'Changes in level greater than 1/2 inch must be treated as a ramp or curb ramp (see §405)'
        ]
      },
      {
        type: 'heading',
        text: 'Accessible Routes and Ramps (ADA §402, §403, §405)'
      },
      {
        type: 'list',
        items: [
          'Accessible route minimum clear width: 36 inches (§403.5). Width may be reduced to 32 inches minimum at a point (for example, a doorway) for a maximum length of 24 inches',
          'Ramp maximum running slope: 1:12 (§405.2) — one inch of rise for every twelve inches of run',
          'Ramp maximum rise per single run: 30 inches (§405.6). Longer ramps require intermediate landings',
          'Ramp minimum clear width: 36 inches between handrails (§405.5)',
          'Handrails are required on both sides of ramps with a rise greater than 6 inches (§405.8)',
          'Level landings are required at the top and bottom of each ramp run, and where ramps change direction'
        ]
      },
      {
        type: 'heading',
        text: 'Standards and Regulations'
      },
      {
        type: 'list',
        items: [
          'ADA Standards for Accessible Design (USA, 2010) — authoritative US requirements',
          'ISO 21542: Building construction — Accessibility and usability of the built environment',
          'EN 17210: European accessibility and usability of the built environment (functional requirements)',
          'Local building codes and accessibility regulations vary by country',
          'Universal Design principles apply to built environment design broadly'
        ]
      },
    ],
    relatedTopics: ['universal-design-principles', 'ada', 'mobility-disabilities'],
    examTips: [
      'ADA §302: accessible floor and ground surfaces must be stable, firm, and slip-resistant',
      'ADA §302.2: carpet pile height max 1/2 inch, securely attached, firm backing',
      'ADA §302.3: floor openings must not pass a 1/2 inch sphere',
      'ADA §303: level changes ≤1/4" untreated, 1/4"–1/2" beveled 1:2, >1/2" ramped',
      'ADA §405: ramp slope max 1:12, single run rise max 30", clear width 36" min',
      'Accessible route clear width: 36 inches minimum (32 inches allowable at a doorway)',
      'Tactile ground surface indicators (detectable warnings) use truncated dome patterns',
      'Physical and digital accessibility are both needed for full inclusion'
    ]
  },

  // ============================================================
  // DESIGN & USABILITY
  // ============================================================
  {
    slug: 'user-centered-design',
    title: 'User-Centered Design',
    category: 'Design & Usability',
    applicableTo: ['cpacc', 'was'],
    summary: 'A design philosophy and process that grounds every stage of design in the needs, wants, and limitations of end users.',
    content: [
      {
        type: 'paragraph',
        text: 'User-Centered Design (UCD) is an iterative design framework that places the end user at the center of every phase of the design and development process. Rather than designing based on assumptions about users, UCD involves researching, testing, and validating with real users throughout the process. When practiced inclusively, UCD naturally leads to more accessible outcomes because it surfaces the needs of users with disabilities alongside all other users.'
      },
      {
        type: 'heading',
        text: 'UCD Process Phases'
      },
      {
        type: 'list',
        items: [
          'Research / Understand: Study users, their tasks, environments, and needs through interviews, observation, and data analysis',
          'Specify Requirements: Define user requirements based on research findings',
          'Design Solutions: Create design solutions through ideation, prototyping, and iteration',
          'Evaluate: Test designs with real users, gather feedback, and iterate',
          'The process is iterative — cycling through these phases repeatedly until requirements are met'
        ]
      },
      {
        type: 'heading',
        text: 'UCD and Accessibility'
      },
      {
        type: 'paragraph',
        text: 'User-Centered Design and accessibility are natural allies. When design teams include people with disabilities in their research and testing, accessibility becomes a natural outcome of the design process rather than a compliance checkbox. The key principle is: include people with disabilities as participants throughout the design process, not just as an afterthought during testing.'
      },
    ],
    relatedTopics: ['usability-concepts', 'user-experience', 'universal-design-principles', 'accessibility-vs-accommodation'],
    examTips: [
      'UCD is iterative: research, specify, design, evaluate, repeat',
      'Including people with disabilities in UCD naturally improves accessibility',
      'UCD = design process; Universal Design = design principles — different concepts',
      'ISO 9241-210 defines the UCD process standard'
    ]
  },
  {
    slug: 'usability-concepts',
    title: 'Usability',
    category: 'Design & Usability',
    applicableTo: ['cpacc', 'was'],
    summary: 'The extent to which a product can be used by specified users to achieve specified goals with effectiveness, efficiency, and satisfaction.',
    content: [
      {
        type: 'paragraph',
        text: 'Usability, as defined by ISO 9241-11, is the extent to which a product can be used by specified users to achieve specified goals with effectiveness, efficiency, and satisfaction in a specified context of use. Usability is related to but distinct from accessibility — a product can be technically accessible (meets WCAG) but have poor usability for people with disabilities if the accessible features are cumbersome or confusing.'
      },
      {
        type: 'heading',
        text: 'Key Usability Components'
      },
      {
        type: 'list',
        items: [
          'Effectiveness: Can users accomplish their goals accurately and completely?',
          'Efficiency: How much effort and time does it take to accomplish the goal?',
          'Satisfaction: How pleasant and comfortable is the experience?',
          'Learnability: How easy is it for new users to learn the system?',
          'Memorability: Can returning users re-establish proficiency easily?',
          'Error rate: How many errors do users make, how severe are they, and how easily can they recover?'
        ]
      },
      {
        type: 'heading',
        text: 'Usability vs. Accessibility'
      },
      {
        type: 'paragraph',
        text: 'Accessibility ensures that people with disabilities CAN use a product. Usability ensures that the experience of using it is efficient, effective, and satisfying. Both are necessary — accessibility without usability means a product is technically operable but frustrating, while usability without accessibility means a product works beautifully but only for some users. The goal is usable accessibility.'
      },
    ],
    relatedTopics: ['user-centered-design', 'user-experience', 'accessibility-vs-accommodation'],
    examTips: [
      'ISO 9241-11 defines usability: effectiveness, efficiency, satisfaction',
      'Accessible but not usable = technically operable but frustrating',
      'Usable but not accessible = great for some, excludes others',
      'Usability testing with people with disabilities bridges the gap'
    ]
  },
  {
    slug: 'user-experience',
    title: 'User Experience (UX)',
    category: 'Design & Usability',
    applicableTo: ['cpacc', 'was'],
    summary: 'The overall experience a person has when interacting with a product, encompassing usability, accessibility, desirability, and emotional response.',
    content: [
      {
        type: 'paragraph',
        text: 'User Experience (UX) is the broadest design concept, encompassing every aspect of a person\'s interaction with a company, its services, and its products. The term was popularized by Don Norman while at Apple in the 1990s. UX includes usability and accessibility but goes further to encompass emotional response, brand perception, desirability, and the full end-to-end journey. Good UX for people with disabilities means not just that they can complete tasks, but that the experience is pleasant, dignified, and equitable.'
      },
      {
        type: 'heading',
        text: 'UX Components'
      },
      {
        type: 'list',
        items: [
          'Useful: Does the product serve a real need?',
          'Usable: Can people effectively and efficiently use it?',
          'Findable: Can users find what they need?',
          'Credible: Do users trust the product and organization?',
          'Desirable: Is the experience appealing and engaging?',
          'Accessible: Can people with disabilities use it?',
          'Valuable: Does it deliver value to the user and the business?'
        ]
      },
      {
        type: 'paragraph',
        text: 'Peter Morville\'s "UX Honeycomb" model identifies these seven facets of user experience. Accessibility is explicitly one of the seven facets, reinforcing that it is not separate from UX but an integral part of it. When accessibility is treated as a UX concern rather than merely a compliance requirement, it leads to better outcomes for all users.'
      },
    ],
    relatedTopics: ['usability-concepts', 'user-centered-design', 'accessibility-vs-accommodation'],
    examTips: [
      'UX is the broadest concept: UX > Usability > Accessibility',
      'Don Norman popularized the term "User Experience"',
      'Morville\'s UX Honeycomb: Useful, Usable, Findable, Credible, Desirable, Accessible, Valuable',
      'Accessibility is an integral facet of UX, not separate from it'
    ]
  },
  {
    slug: 'accessibility-vs-accommodation',
    title: 'Accessibility vs. Accommodation',
    category: 'Design & Usability',
    applicableTo: ['cpacc', 'was'],
    summary: 'Accessibility is proactive and universal (designing for all); accommodation is reactive and individual (adjustments for specific people).',
    content: [
      {
        type: 'paragraph',
        text: 'Accessibility and accommodation are both important, but they represent fundamentally different approaches. Accessibility is proactive — it means designing products, services, and environments to be usable by the widest possible range of people from the start. Accommodation is reactive — it means making individual adjustments or providing specific aids for a particular person after a barrier is identified. Both are necessary, but accessibility should always be the starting point.'
      },
      {
        type: 'heading',
        text: 'Key Differences'
      },
      {
        type: 'list',
        items: [
          'Accessibility is universal and proactive; accommodation is individual and reactive',
          'Accessibility is designed in from the start; accommodation is added after the fact',
          'Accessibility benefits everyone (curb-cut effect); accommodation benefits one specific person',
          'Accessibility is scalable; accommodation must be arranged individually each time',
          'Accessibility is typically more cost-effective long-term; accommodation has recurring per-person costs',
          'Example: A ramp (accessibility) vs. someone carrying a wheelchair user up the stairs (accommodation)'
        ]
      },
      {
        type: 'paragraph',
        text: 'The "curb-cut effect" illustrates the broader benefit of accessibility: curb cuts were designed for wheelchair users but benefit people pushing strollers, pulling luggage, riding bikes, making deliveries, and more. When we design accessibly, everyone benefits. Accommodations, while necessary, do not create these broader benefits.'
      },
    ],
    relatedTopics: ['universal-design-principles', 'social-model', 'usability-concepts'],
    examTips: [
      'Accessibility = proactive/universal; Accommodation = reactive/individual',
      'Curb-cut effect: accessibility benefits everyone, not just people with disabilities',
      'Captioned video = accessibility; individual sign interpreter = accommodation',
      'Accessibility is more cost-effective and scalable than accommodation'
    ]
  },

  // ============================================================
  // LEGAL FRAMEWORKS
  // ============================================================
  {
    slug: 'udhr',
    title: 'Universal Declaration of Human Rights (UDHR)',
    category: 'Legal Frameworks',
    applicableTo: ['cpacc'],
    summary: 'The foundational 1948 UN document establishing universal human rights, providing the philosophical basis for disability rights.',
    content: [
      {
        type: 'paragraph',
        text: 'The Universal Declaration of Human Rights (UDHR) was adopted by the United Nations General Assembly on December 10, 1948, in Paris. It is the foundational document for international human rights and establishes that all human beings are born free and equal in dignity and rights. While the UDHR does not specifically mention disability, its universal language inherently includes people with disabilities. It provides the philosophical foundation upon which later disability-specific instruments like the CRPD were built.'
      },
      {
        type: 'heading',
        text: 'Key Articles Relevant to Disability'
      },
      {
        type: 'list',
        items: [
          'Article 1: All human beings are born free and equal in dignity and rights',
          'Article 2: Everyone is entitled to rights without distinction of any kind',
          'Article 7: All are equal before the law and entitled to equal protection',
          'Article 19: Right to freedom of expression and to seek, receive, and impart information',
          'Article 23: Right to work and free choice of employment',
          'Article 25: Right to a standard of living adequate for health and well-being, including in the event of disability',
          'Article 26: Right to education'
        ]
      },
      {
        type: 'paragraph',
        text: 'The UDHR is a declaration, not a treaty, which means it is not legally binding in itself. However, it has become customary international law and has been incorporated into the constitutions and legal systems of many nations. It inspired the two binding International Covenants (ICCPR and ICESCR) and the CRPD.'
      },
    ],
    relatedTopics: ['crpd', 'human-rights-model', 'marrakesh-treaty'],
    examTips: [
      'Adopted December 10, 1948 by the UN General Assembly',
      'A declaration, not a treaty — not directly legally binding',
      'Article 25 specifically mentions disability',
      'Provides the philosophical foundation for the CRPD'
    ]
  },
  {
    slug: 'crpd',
    title: 'UN Convention on the Rights of Persons with Disabilities (CRPD)',
    category: 'Legal Frameworks',
    applicableTo: ['cpacc'],
    summary: 'The first legally binding international treaty protecting the rights of people with disabilities, adopted in 2006.',
    content: [
      {
        type: 'paragraph',
        text: 'The Convention on the Rights of Persons with Disabilities (CRPD) was adopted by the United Nations General Assembly on December 13, 2006, and entered into force on May 3, 2008. It is the first comprehensive, legally binding international human rights treaty specifically protecting the rights of people with disabilities. The CRPD does not create new rights — rather, it clarifies how existing human rights apply to people with disabilities and what obligations governments have.'
      },
      {
        type: 'heading',
        text: 'Key Principles (Article 3)'
      },
      {
        type: 'list',
        items: [
          'Respect for inherent dignity and individual autonomy',
          'Non-discrimination',
          'Full and effective participation and inclusion in society',
          'Respect for difference and acceptance of disability as part of human diversity',
          'Equality of opportunity',
          'Accessibility',
          'Equality between men and women',
          'Respect for the evolving capacities of children with disabilities'
        ]
      },
      {
        type: 'heading',
        text: 'Key Articles'
      },
      {
        type: 'list',
        items: [
          'Article 9 — Accessibility: Requires states to ensure accessibility of the physical environment, transportation, information and communications, including ICT',
          'Article 21 — Freedom of Expression and Access to Information: Includes providing information in accessible formats',
          'Article 24 — Education: Right to inclusive education at all levels',
          'Article 27 — Work and Employment: Right to work on an equal basis with others',
          'Optional Protocol: Allows individuals to file complaints to the CRPD Committee'
        ]
      },
    ],
    relatedTopics: ['udhr', 'human-rights-model', 'marrakesh-treaty', 'ada'],
    examTips: [
      'Adopted 2006, entered into force 2008 — first binding disability rights treaty',
      'Article 9 = Accessibility (including ICT)',
      'USA has signed but NOT ratified the CRPD',
      '"Nothing about us without us" — the CRPD development principle',
      'Embodies the Human Rights Model of Disability'
    ]
  },
  {
    slug: 'marrakesh-treaty',
    title: 'Marrakesh Treaty',
    category: 'Legal Frameworks',
    applicableTo: ['cpacc'],
    summary: 'A 2013 international treaty facilitating access to published works for people who are blind, visually impaired, or print disabled.',
    content: [
      {
        type: 'paragraph',
        text: 'The Marrakesh Treaty to Facilitate Access to Published Works for Persons Who Are Blind, Visually Impaired, or Otherwise Print Disabled was adopted in 2013 in Marrakesh, Morocco, and entered into force on September 30, 2016. It is a treaty under the World Intellectual Property Organization (WIPO) that creates an exception to copyright law, allowing the production and cross-border exchange of accessible format copies (braille, large print, audio, digital text) of published works without needing permission from the copyright holder.'
      },
      {
        type: 'heading',
        text: 'Key Provisions'
      },
      {
        type: 'list',
        items: [
          'Creates a copyright exception for producing accessible format copies of published works',
          'Allows cross-border exchange of accessible format copies between countries that have ratified the treaty',
          'Beneficiaries include people who are blind, visually impaired, or have print disabilities (including dyslexia and physical inability to hold a book)',
          'Authorized entities (libraries, organizations for the blind) can create and distribute accessible copies',
          'Addresses the "book famine" — prior to the treaty, only about 5% of published books worldwide were available in accessible formats'
        ]
      },
      {
        type: 'paragraph',
        text: 'The "book famine" refers to the fact that in developing countries, fewer than 1% of published books were available in accessible formats, and even in developed countries, the figure was only about 5-7%. The Marrakesh Treaty aims to address this by removing copyright barriers to the production and sharing of accessible materials.'
      },
    ],
    relatedTopics: ['crpd', 'udhr', 'visual-disabilities', 'refreshable-braille'],
    examTips: [
      'A WIPO treaty (intellectual property), adopted 2013, in force 2016',
      'Creates copyright exceptions for accessible format copies',
      'Addresses the "book famine" — only ~5% of books available in accessible formats',
      'Beneficiaries: blind, visually impaired, and print disabled (including dyslexia)'
    ]
  },
  {
    slug: 'ada',
    title: 'Americans with Disabilities Act (ADA)',
    category: 'Legal Frameworks',
    applicableTo: ['cpacc'],
    summary: 'The landmark 1990 US civil rights law prohibiting discrimination against people with disabilities in all areas of public life.',
    content: [
      {
        type: 'paragraph',
        text: 'The Americans with Disabilities Act (ADA) was signed into law on July 26, 1990, by President George H.W. Bush. It is the most comprehensive disability rights legislation in the United States, prohibiting discrimination against people with disabilities in employment, public services, public accommodations, telecommunications, and other areas. The ADA has been used as a model for disability legislation worldwide.'
      },
      {
        type: 'heading',
        text: 'ADA Titles'
      },
      {
        type: 'list',
        items: [
          'Title I — Employment: Prohibits discrimination in hiring, firing, advancement, and compensation by employers with 15 or more employees. Requires reasonable accommodations unless they cause "undue hardship." Enforced by the EEOC.',
          'Title II — Public Services (State and Local Government): Requires state and local governments and their entities (public schools, libraries, DMVs, police, public transit) to make their programs, services, and activities accessible. Applies regardless of whether the entity receives federal funding. Now explicitly references WCAG 2.1 AA for web and mobile content (DOJ 2024 rule).',
          'Title III — Public Accommodations (Private Businesses Open to the Public): Requires privately-operated places of public accommodation — restaurants, hotels, retail stores, theaters, doctor\'s offices, private schools, gyms — to be accessible. Has been extended to many commercial websites through court rulings.',
          'Title IV — Telecommunications: Required telephone companies to provide telecommunications relay services (TRS) for people who are deaf, hard of hearing, or have speech disabilities. Enforced by the FCC.',
          'Title V — Miscellaneous: Contains anti-retaliation provisions, attorney\'s fees provisions, and clarifies the ADA\'s relationship to other laws (including state laws that provide greater protection).'
        ]
      },
      {
        type: 'heading',
        text: 'Scenario-to-Title Quick Reference'
      },
      {
        type: 'list',
        items: [
          'A job applicant is denied reasonable accommodation during an interview → Title I (Employment)',
          'A city refuses to provide sign language interpretation at a public council meeting → Title II (State/Local Government)',
          'A public library\'s website is not screen reader accessible → Title II',
          'A restaurant has no ramp at its only entrance → Title III (Public Accommodations)',
          'A national retailer\'s e-commerce site is not keyboard accessible → Title III (typically, depending on circuit)',
          'A telephone company does not provide relay services for deaf callers → Title IV (Telecommunications)',
          'An employee is fired for filing an ADA complaint → Title V (anti-retaliation)',
          'Key distinction: Title II = government/public entity; Title III = private business open to the public'
        ]
      },
      {
        type: 'heading',
        text: 'Key Defenses and Limits'
      },
      {
        type: 'list',
        items: [
          '"Undue hardship" — an employer may deny an accommodation under Title I if providing it would cause significant difficulty or expense relative to the employer\'s size and resources',
          '"Fundamental alteration" — a public entity or business is not required to make a change that would fundamentally alter the nature of its program, service, or goods',
          '"Readily achievable" — Title III only requires barrier removal in existing facilities when it is readily achievable (easily accomplishable without much difficulty or expense)'
        ]
      },
      {
        type: 'paragraph',
        text: 'The ADA does not explicitly mention websites or digital accessibility (it was written in 1990), but courts have increasingly interpreted Titles II and III to apply to websites and digital services. The Department of Justice issued a rule in 2024 requiring state and local government websites and mobile apps to conform to WCAG 2.1 Level AA under Title II. Title III web accessibility requirements for private businesses continue to be shaped by court rulings, with most circuits applying the ADA to websites tied to physical places of business and some applying it to purely online businesses as well.'
      },
    ],
    relatedTopics: ['section-508', 'cvaa', 'crpd', 'national-disability-laws', 'built-environment'],
    examTips: [
      'Signed July 26, 1990 — know the five titles and which scenarios each covers',
      'Title I = Employment (15+ employees); defense = "undue hardship"',
      'Title II = State/Local Government (libraries, DMVs, public schools, public transit, government websites)',
      'Title III = Public Accommodations (restaurants, retail, hotels); existing-facility standard = "readily achievable"',
      'Title IV = Telecommunications Relay Services (TRS) — FCC enforced',
      'Title V = anti-retaliation, attorney\'s fees, relationship to state laws',
      'Title II vs III — the key distinction is government entity vs private business',
      'Title II DOJ 2024 rule explicitly requires WCAG 2.1 AA for web and mobile',
      'A civil rights law, not a technology standard'
    ]
  },
  {
    slug: 'section-508',
    title: 'Section 508 of the Rehabilitation Act',
    category: 'Legal Frameworks',
    applicableTo: ['cpacc', 'was'],
    summary: 'US federal law requiring that electronic and information technology developed or purchased by federal agencies be accessible to people with disabilities.',
    content: [
      {
        type: 'paragraph',
        text: 'Section 508 is an amendment to the Rehabilitation Act of 1973 that requires federal agencies to make their electronic and information technology (EIT) accessible to people with disabilities. Originally enacted in 1998, Section 508 was significantly updated in 2017 (the "Section 508 Refresh") to align with WCAG 2.0 Level AA and incorporate the requirements of EN 301 549 (the European ICT accessibility standard).'
      },
      {
        type: 'heading',
        text: 'Key Points'
      },
      {
        type: 'list',
        items: [
          'Applies to US federal agencies only (not state/local governments or private sector — those fall under ADA)',
          'Covers websites, documents, software, hardware, telecommunications, multimedia, and other ICT',
          'The 2017 Refresh incorporated WCAG 2.0 Level AA as the web content standard',
          'Requires that people with disabilities have access comparable to that of people without disabilities',
          'Section 508 applies to both developed and procured (purchased) technology',
          'Enforced through complaints to federal agencies, the Access Board, and through lawsuits'
        ]
      },
      {
        type: 'heading',
        text: 'Section 508 vs. ADA'
      },
      {
        type: 'paragraph',
        text: 'Section 508 and the ADA are both US laws addressing disability rights, but they differ in scope and specificity. Section 508 is specifically about ICT accessibility and applies only to federal agencies. The ADA is broader, covering all aspects of public life, and applies to employers, state/local governments, and public accommodations. Section 508 provides specific technical standards (based on WCAG); the ADA does not specify technical standards.'
      },
    ],
    relatedTopics: ['ada', 'wcag-overview', 'en-301-549', 'vpat', 'procurement-accessibility'],
    examTips: [
      'Applies to US federal agencies ONLY',
      '2017 Refresh aligned with WCAG 2.0 Level AA',
      'Covers both developed AND procured (purchased) technology',
      'Section 508 = federal; ADA Title II = state/local; ADA Title III = private sector'
    ]
  },
  {
    slug: 'cvaa',
    title: '21st Century Communications and Video Accessibility Act (CVAA)',
    category: 'Legal Frameworks',
    applicableTo: ['cpacc'],
    summary: 'US law requiring modern communications technologies (smartphones, broadband, video programming) to be accessible to people with disabilities.',
    content: [
      {
        type: 'paragraph',
        text: 'The 21st Century Communications and Video Accessibility Act (CVAA), signed into law in October 2010, updates US communications law to account for modern technologies like smartphones, broadband, and internet-based communications. It ensures that people with disabilities have access to modern communications services that have evolved since the original communications accessibility laws (like the Telecommunications Act of 1996) were written.'
      },
      {
        type: 'heading',
        text: 'Two Main Titles'
      },
      {
        type: 'list',
        items: [
          'Title I — Communications Access: Requires advanced communications services (VoIP, text messaging, email, video conferencing) to be accessible to people with disabilities. Applies to manufacturers and service providers.',
          'Title II — Video Programming: Requires video programming to include closed captions (expanded to internet-delivered video), video description (audio description of visual content), accessible emergency information, and accessible user interfaces on devices that display video (including set-top boxes and apps).'
        ]
      },
      {
        type: 'heading',
        text: 'Specific Requirements'
      },
      {
        type: 'list',
        items: [
          'IP-based telephone services must include relay services and hearing aid compatibility',
          'Internet-delivered video programming that previously aired on TV must include captions',
          'Video description requirements were expanded',
          'Navigation devices (set-top boxes, etc.) must have accessible user interfaces',
          'Smart TVs and video devices must support closed captioning and video description'
        ]
      },
    ],
    relatedTopics: ['ada', 'section-508', 'auditory-disabilities', 'hearing-assistive-tech'],
    examTips: [
      'Signed 2010 — updates communications law for modern technology',
      'Title I = Communications (VoIP, messaging), Title II = Video Programming',
      'Requires captions on internet video that previously aired on TV',
      'Applies to manufacturers and service providers, not just government'
    ]
  },
  {
    slug: 'eu-accessibility',
    title: 'EU Web Accessibility Directive & European Accessibility Act',
    category: 'Legal Frameworks',
    applicableTo: ['cpacc'],
    summary: 'European Union legislation requiring public sector websites and apps (Directive) and private sector products/services (EAA) to be accessible.',
    content: [
      {
        type: 'paragraph',
        text: 'The European Union has two major pieces of accessibility legislation. The Web Accessibility Directive (WAD), adopted in 2016, requires public sector websites and mobile applications to be accessible. The European Accessibility Act (EAA), adopted in 2019 with compliance required by June 28, 2025, extends accessibility requirements to private sector products and services. Together, they create a comprehensive accessibility framework across Europe.'
      },
      {
        type: 'heading',
        text: 'Web Accessibility Directive (2016/2102)'
      },
      {
        type: 'list',
        items: [
          'Applies to public sector bodies (governments, public institutions, publicly funded organizations)',
          'Requires websites and mobile applications to meet EN 301 549, which references WCAG 2.1 Level AA',
          'Requires an accessibility statement on each website explaining conformance status and contact information',
          'Member states must provide an enforcement mechanism and reporting',
          'Deadlines: New websites by September 2019, older websites by September 2020, mobile apps by June 2021'
        ]
      },
      {
        type: 'heading',
        text: 'European Accessibility Act (EAA / 2019/882)'
      },
      {
        type: 'list',
        items: [
          'Extends accessibility requirements to the private sector',
          'Covers: computers and operating systems, ATMs and ticketing machines, smartphones, e-readers, e-commerce, banking services, telecommunications, transportation services, and e-books',
          'Compliance required by June 28, 2025',
          'Aims to harmonize accessibility requirements across EU member states',
          'Applies to products and services placed on the EU market, regardless of where the company is based'
        ]
      },
      {
        type: 'heading',
        text: 'Related European Instruments'
      },
      {
        type: 'paragraph',
        text: 'Beyond the Web Accessibility Directive and the European Accessibility Act, two other European instruments often appear as exam distractors or correct answers and are worth knowing by name.'
      },
      {
        type: 'list',
        items: [
          'EN 17161:2019 — "Design for All — Accessibility following a Design for All approach in products, goods and services — Extending the range of users." Published by CEN in 2019. Unlike EN 301 549 (which is a technical ICT standard), EN 17161 is a process/management standard: it specifies requirements for how an organization should embed a Design for All approach into its development, procurement, and service delivery to reach the widest possible range of users, including people with disabilities. It is generic and applies regardless of organization size or sector, and it is sometimes adopted as a framework for continuous improvement of accessibility',
          'eIDAS — Regulation (EU) No 910/2014 on electronic identification and trust services for electronic transactions in the EU internal market. Entered into force in 2014 and became applicable in 2016. eIDAS is not primarily an accessibility law; it governs electronic identification (eID), electronic signatures, seals, timestamps, and qualified trust services for cross-border digital public services. The 2024 amendment (Regulation 2024/1183) introduced the European Digital Identity Wallet. Accessibility of eID means for persons with disabilities is expected via the horizontal accessibility requirements of the EAA and EN 301 549'
        ]
      },
    ],
    relatedTopics: ['en-301-549', 'wcag-overview', 'crpd', 'national-disability-laws', 'universal-design-principles'],
    examTips: [
      'Web Accessibility Directive (2016) = public sector; European Accessibility Act (2019, effective June 28 2025) = private sector',
      'Both reference EN 301 549, which incorporates WCAG 2.1 AA',
      'WAD requires accessibility statements on public sector websites',
      'EN 17161:2019 = Design for All process/management standard (CEN)',
      'eIDAS = Regulation 910/2014 on electronic identification and trust services (not primarily an accessibility law)',
      'EN 17161 is process-focused; EN 301 549 is technically-focused — both can appear as EU standard answers'
    ]
  },
  {
    slug: 'en-301-549',
    title: 'EN 301 549',
    category: 'Legal Frameworks',
    applicableTo: ['cpacc', 'was'],
    summary: 'The European standard for ICT accessibility, incorporating WCAG and extending it to cover software, hardware, documentation, and support services.',
    content: [
      {
        type: 'paragraph',
        text: 'EN 301 549 is the European standard for accessibility requirements for ICT products and services. First published in 2014, it was developed by the European Telecommunications Standards Institute (ETSI) on behalf of the European Commission. The standard is referenced by the EU Web Accessibility Directive and the European Accessibility Act. It goes beyond web content to cover software, hardware, documents, telecommunications, and support services.'
      },
      {
        type: 'heading',
        text: 'Scope and Structure'
      },
      {
        type: 'list',
        items: [
          'Chapter 9: Web content — directly incorporates WCAG 2.1 Level AA success criteria',
          'Chapter 10: Non-web documents — applies WCAG principles to PDFs, Word docs, and other non-web content',
          'Chapter 11: Software — applies WCAG principles to native applications and software interfaces',
          'Chapter 12: Documentation and support services — accessible user documentation, help desks, etc.',
          'Chapter 13: ICT providing relay or emergency service access',
          'Chapter 5-8: Generic requirements, ICT with two-way voice, ICT with video, hardware'
        ]
      },
      {
        type: 'paragraph',
        text: 'EN 301 549 is particularly important because it extends WCAG beyond web content. While WCAG itself only covers web content, EN 301 549 adapts WCAG criteria for non-web documents (Chapter 10) and native software (Chapter 11). This means organizations subject to EN 301 549 must make their PDFs, mobile apps, desktop software, and hardware accessible, not just their websites.'
      },
    ],
    relatedTopics: ['eu-accessibility', 'wcag-overview', 'section-508', 'vpat'],
    examTips: [
      'European ICT standard — incorporates WCAG 2.1 AA and extends beyond web',
      'Chapter 9 = web, Chapter 10 = documents, Chapter 11 = software',
      'Referenced by EU Web Accessibility Directive and European Accessibility Act',
      'US Section 508 Refresh also harmonized with EN 301 549'
    ]
  },
  {
    slug: 'national-disability-laws',
    title: 'Key National Disability Laws',
    category: 'Legal Frameworks',
    applicableTo: ['cpacc'],
    summary: 'Important disability and accessibility laws outside the US and EU, including UK Equality Act, Australia DDA, and Canada ACA.',
    content: [
      {
        type: 'paragraph',
        text: 'Many countries have enacted national disability legislation that includes digital accessibility requirements. While the CPACC exam focuses primarily on international frameworks and US law, it also covers key legislation from other major countries. These laws generally prohibit disability discrimination and increasingly address ICT accessibility specifically.'
      },
      {
        type: 'heading',
        text: 'United Kingdom'
      },
      {
        type: 'list',
        items: [
          'Equality Act 2010: Replaced the Disability Discrimination Act (DDA) 1995. Prohibits discrimination based on protected characteristics, including disability. Requires reasonable adjustments (equivalent to reasonable accommodations in the US). Applies to employers, service providers, and education.',
          'Public Sector Bodies Accessibility Regulations 2018: Implements the EU Web Accessibility Directive in the UK. Requires public sector websites and apps to meet WCAG 2.1 AA.'
        ]
      },
      {
        type: 'heading',
        text: 'Australia'
      },
      {
        type: 'list',
        items: [
          'Disability Discrimination Act (DDA) 1992: Prohibits discrimination on the basis of disability. Applied to web accessibility in the landmark Maguire v. SOCOG case (2000), where the Sydney Olympics website was found to discriminate against a blind user.',
          'The DDA was one of the first laws globally applied to web accessibility through a court ruling.'
        ]
      },
      {
        type: 'heading',
        text: 'Canada'
      },
      {
        type: 'list',
        items: [
          'Accessible Canada Act (ACA) 2019: Federal law aiming to make Canada barrier-free by 2040. Covers employment, built environment, ICT, communications, transportation, procurement, and program/service delivery. Established Accessibility Standards Canada to develop standards.',
          'Accessibility for Ontarians with Disabilities Act (AODA) 2005: Ontario provincial law requiring accessibility standards. Often cited as a model for the federal ACA.'
        ]
      },
    ],
    relatedTopics: ['ada', 'eu-accessibility', 'crpd', 'section-508'],
    examTips: [
      'UK: Equality Act 2010 (replaced DDA 1995), requires reasonable adjustments',
      'Australia: DDA 1992, Maguire v. SOCOG (2000) = landmark web accessibility case',
      'Canada: ACA 2019 (federal, barrier-free by 2040), AODA 2005 (Ontario province)',
      'Most countries\' disability laws now extend to digital/ICT accessibility'
    ]
  },

  // ============================================================
  // ORGANIZATIONAL STRATEGY
  // ============================================================
  {
    slug: 'w3c-wai',
    title: 'W3C WAI Recommendations',
    category: 'Organizational Strategy',
    applicableTo: ['cpacc'],
    summary: 'The World Wide Web Consortium\'s Web Accessibility Initiative develops standards, guidelines, and resources to make the web accessible.',
    content: [
      {
        type: 'paragraph',
        text: 'The Web Accessibility Initiative (WAI) is a project of the World Wide Web Consortium (W3C) that develops strategies, standards, and supporting resources to help make the web accessible to people with disabilities. WAI is the source of WCAG, ATAG, UAAG, and WAI-ARIA — the foundational technical standards for web accessibility. WAI also produces extensive educational resources and implementation guidance.'
      },
      {
        type: 'heading',
        text: 'Key WAI Standards and Resources'
      },
      {
        type: 'list',
        items: [
          'WCAG (Web Content Accessibility Guidelines): Standards for web content — the most widely known and referenced',
          'ATAG (Authoring Tool Accessibility Guidelines): Standards for tools that create web content (CMSes, editors, IDEs). Has two parts: Part A (the tool itself must be accessible) and Part B (the tool must help produce accessible content).',
          'UAAG (User Agent Accessibility Guidelines): Standards for web browsers and media players that render web content',
          'WAI-ARIA (Accessible Rich Internet Applications): A specification for adding accessibility semantics to dynamic web content and custom widgets',
          'WAI-ARIA Authoring Practices: Patterns and examples for building accessible widgets',
          'WCAG-EM (Website Accessibility Conformance Evaluation Methodology): Methodology for evaluating website accessibility'
        ]
      },
      {
        type: 'paragraph',
        text: 'WAI describes web accessibility as depending on three components working together: content (WCAG), authoring tools (ATAG), and user agents (UAAG). If any component fails, users with disabilities are affected. For example, if a CMS does not support adding alt text to images (ATAG failure), content authors cannot produce accessible content regardless of their intentions.'
      },
    ],
    relatedTopics: ['wcag-overview', 'wcag-robust', 'maturity-models'],
    examTips: [
      'WCAG = content, ATAG = authoring tools, UAAG = user agents/browsers',
      'ATAG Part A = tool is accessible; Part B = tool produces accessible content',
      'WAI-ARIA adds accessibility semantics to dynamic content and custom widgets',
      'WAI sees accessibility as three interdependent components: content + tools + user agents'
    ]
  },
  {
    slug: 'maturity-models',
    title: 'Accessibility Maturity Models',
    category: 'Organizational Strategy',
    applicableTo: ['cpacc', 'was'],
    summary: 'Frameworks for assessing and improving an organization\'s accessibility practices across dimensions like culture, process, technology, and training.',
    content: [
      {
        type: 'paragraph',
        text: 'Accessibility maturity models provide frameworks for organizations to assess their current level of accessibility practice and chart a path toward improvement. Rather than viewing accessibility as a binary (compliant/non-compliant), maturity models recognize that organizations progress through stages of capability and commitment. The most well-known is the W3C WAI\'s Accessibility Maturity Model, but other models exist from organizations like the Business Disability Forum and Level Access.'
      },
      {
        type: 'heading',
        text: 'Common Maturity Dimensions'
      },
      {
        type: 'list',
        items: [
          'Communication and awareness: Does the organization understand and communicate about accessibility?',
          'Leadership and management: Is there executive commitment and accountability?',
          'Training and development: Do staff have the accessibility skills they need?',
          'Personnel and recruitment: Are people with disabilities represented in the workforce?',
          'Technology and infrastructure: Are tools and platforms configured to support accessibility?',
          'Procurement: Does the organization require accessibility in purchasing decisions?',
          'Design and development: Is accessibility integrated into the creation process?',
          'Testing and evaluation: Is there systematic accessibility testing?',
          'Culture: Is accessibility valued as part of the organizational identity?'
        ]
      },
      {
        type: 'heading',
        text: 'Typical Maturity Levels'
      },
      {
        type: 'list',
        items: [
          'Level 1 — Inactive/Ad-hoc: No accessibility awareness or effort',
          'Level 2 — Planned/Reactive: Some awareness, ad-hoc responses to issues',
          'Level 3 — Managed/Defined: Policies and processes established, consistent effort',
          'Level 4 — Measured/Integrated: Accessibility is tracked, measured, and integrated into workflows',
          'Level 5 — Optimizing/Leading: Continuous improvement, accessibility is part of organizational DNA'
        ]
      },
    ],
    relatedTopics: ['w3c-wai', 'procurement-accessibility', 'vpat'],
    examTips: [
      'Maturity models = organizational capability assessment, not technical compliance',
      'Cover people, process, and technology dimensions',
      'Progress from ad-hoc/reactive to integrated/leading',
      'W3C WAI Accessibility Maturity Model is the key reference'
    ]
  },
  {
    slug: 'vpat',
    title: 'VPAT & Accessibility Conformance Reports',
    category: 'Organizational Strategy',
    applicableTo: ['cpacc', 'was'],
    summary: 'The Voluntary Product Accessibility Template (VPAT) is used to document how ICT products conform to accessibility standards, producing an Accessibility Conformance Report (ACR).',
    content: [
      {
        type: 'paragraph',
        text: 'The Voluntary Product Accessibility Template (VPAT) is a standardized document format created by the Information Technology Industry Council (ITI) that vendors use to self-report how their ICT products or services conform to accessibility standards. When a vendor fills out a VPAT, the resulting document is called an Accessibility Conformance Report (ACR). VPATs/ACRs are primarily used in procurement contexts — buyers review them to evaluate the accessibility of products they are considering purchasing.'
      },
      {
        type: 'heading',
        text: 'VPAT Editions'
      },
      {
        type: 'list',
        items: [
          'VPAT 2.x is the current version, available in multiple editions:',
          'WCAG Edition: Covers WCAG 2.x success criteria',
          'Section 508 Edition: Covers the Revised Section 508 Standards (for US federal procurement)',
          'EN 301 549 Edition: Covers the European ICT accessibility standard',
          'INT Edition (International): Covers all three standards in a single document'
        ]
      },
      {
        type: 'heading',
        text: 'Conformance Levels Used in VPATs'
      },
      {
        type: 'list',
        items: [
          'Supports: The functionality of the product fully meets the criterion',
          'Partially Supports: Some functionality meets the criterion',
          'Does Not Support: The majority of functionality does not meet the criterion',
          'Not Applicable: The criterion is not relevant to the product',
          'Not Evaluated: The product has not been evaluated against this criterion'
        ]
      },
    ],
    relatedTopics: ['procurement-accessibility', 'section-508', 'en-301-549', 'wcag-overview'],
    examTips: [
      'VPAT = template; ACR = completed report',
      'Self-reported by vendors, NOT independently audited',
      'Created by ITI (Information Technology Industry Council)',
      'Conformance levels: Supports, Partially Supports, Does Not Support, N/A, Not Evaluated'
    ]
  },
  {
    slug: 'procurement-accessibility',
    title: 'Accessibility in Procurement',
    category: 'Organizational Strategy',
    applicableTo: ['cpacc', 'was'],
    summary: 'Including accessibility requirements in purchasing decisions to ensure that acquired products and services are accessible to people with disabilities.',
    content: [
      {
        type: 'paragraph',
        text: 'Accessibility in procurement means including accessibility requirements when purchasing ICT products, services, and solutions. This is one of the most effective organizational strategies for ensuring accessibility because it shifts the burden of accessibility to vendors and leverages the organization\'s purchasing power. If an organization buys an inaccessible product, it inherits an accessibility problem that may be expensive to fix. Including accessibility in procurement prevents this.'
      },
      {
        type: 'heading',
        text: 'Key Steps in Accessible Procurement'
      },
      {
        type: 'list',
        items: [
          'Define accessibility requirements in RFPs (Requests for Proposal) and contracts',
          'Reference specific standards (WCAG 2.1 AA, EN 301 549, Section 508)',
          'Request VPATs / Accessibility Conformance Reports from vendors',
          'Evaluate VPATs critically — they are self-reported and vary in quality',
          'Include accessibility acceptance criteria in contracts',
          'Test products against accessibility requirements before accepting delivery',
          'Include remediation requirements and timelines for identified accessibility issues'
        ]
      },
      {
        type: 'heading',
        text: 'Legal Requirements'
      },
      {
        type: 'list',
        items: [
          'Section 508 requires US federal agencies to buy accessible ICT',
          'EN 301 549 and the EU Web Accessibility Directive apply to EU public procurement',
          'The European Accessibility Act extends procurement considerations to the private sector',
          'Many organizations adopt accessibility procurement policies voluntarily as best practice'
        ]
      },
    ],
    relatedTopics: ['vpat', 'section-508', 'en-301-549', 'maturity-models'],
    examTips: [
      'Procurement is one of the most impactful organizational accessibility strategies',
      'VPATs are self-reported — evaluate critically and verify with testing',
      'Include accessibility requirements in RFPs and contracts',
      'Section 508 requires accessible procurement for US federal agencies'
    ]
  },

  // ============================================================
  // ETIQUETTE & DEMOGRAPHICS
  // ============================================================
  {
    slug: 'disability-etiquette',
    title: 'Disability Etiquette',
    category: 'Etiquette & Demographics',
    applicableTo: ['cpacc', 'was'],
    summary: 'Guidelines for respectful, appropriate interaction with people with disabilities, emphasizing dignity, autonomy, and asking before helping.',
    content: [
      {
        type: 'paragraph',
        text: 'Disability etiquette refers to respectful, appropriate ways of interacting with people who have disabilities. Good etiquette is grounded in recognizing people with disabilities as full, autonomous human beings — not as objects of pity, inspiration, or curiosity. The fundamental principle is: treat people with disabilities the same way you would treat anyone else, with the same respect and courtesy, while being sensitive to specific needs related to their disability.'
      },
      {
        type: 'heading',
        text: 'General Guidelines'
      },
      {
        type: 'list',
        items: [
          'Speak directly to the person, not to their companion, interpreter, or aide',
          'Ask before helping — do not assume someone needs or wants assistance',
          'Do not touch a person\'s assistive device (wheelchair, cane, service animal) without permission',
          'Respect personal space and autonomy — a wheelchair is part of a person\'s personal space',
          'Avoid making assumptions about what a person can or cannot do',
          'Do not ask intrusive questions about someone\'s disability unless relevant and invited',
          'Use a normal tone of voice — do not shout at someone who is blind or speak slowly to someone in a wheelchair',
          'When meeting someone who is blind, identify yourself and others present'
        ]
      },
      {
        type: 'heading',
        text: 'Specific Situations'
      },
      {
        type: 'list',
        items: [
          'Wheelchair users: Sit or crouch for extended conversations to be at eye level. Do not lean on or push a wheelchair without permission.',
          'Blind/low vision: Identify yourself when approaching. Offer your arm for guidance (do not grab them). Describe visual information verbally.',
          'Deaf/hard of hearing: Face the person when speaking (for lip-reading). Get their attention with a gentle tap or wave. Use visual cues.',
          'Speech disabilities: Be patient. Do not pretend to understand if you don\'t. Ask the person to repeat or use alternative communication.',
          'Service animals: Do not pet, feed, or distract a service animal without permission.'
        ]
      },
    ],
    relatedTopics: ['inclusive-language', 'social-model', 'charity-model'],
    examTips: [
      'ASK BEFORE HELPING — the #1 etiquette rule',
      'Speak directly to the person, not their companion or interpreter',
      'A wheelchair is personal space — do not touch without permission',
      'Service animals are working — do not pet or distract without permission',
      'Do not make assumptions about capabilities'
    ]
  },
  {
    slug: 'inclusive-language',
    title: 'People-First vs. Identity-First Language',
    category: 'Etiquette & Demographics',
    applicableTo: ['cpacc', 'was'],
    summary: 'Understanding when to use people-first language ("person with a disability") vs. identity-first language ("disabled person") based on community preference.',
    content: [
      {
        type: 'paragraph',
        text: 'Language matters in disability discourse, and there are two major approaches: people-first language and identity-first language. People-first language places the person before the disability ("person with a disability," "person who is blind"). Identity-first language places the disability first as an identity descriptor ("disabled person," "blind person," "autistic person"). Neither is universally correct — the appropriate choice depends on the individual\'s or community\'s preference.'
      },
      {
        type: 'heading',
        text: 'People-First Language'
      },
      {
        type: 'list',
        items: [
          'Puts the person before the disability: "person with a disability," "person who uses a wheelchair"',
          'Emphasizes that the person is more than their disability',
          'Generally preferred in professional, medical, and government contexts',
          'Commonly preferred by people with intellectual disabilities and their advocates',
          'Example: "person with epilepsy" rather than "epileptic"'
        ]
      },
      {
        type: 'heading',
        text: 'Identity-First Language'
      },
      {
        type: 'list',
        items: [
          'Places the disability as an identity descriptor: "disabled person," "Deaf person," "autistic person"',
          'Embraces disability as an integral part of identity, not something to be separated from the person',
          'Preferred by many in the Deaf community (always "Deaf person," never "person with deafness")',
          'Increasingly preferred by many autistic adults ("autistic person," not "person with autism")',
          'Preferred by many in the blind community ("blind person")',
          'Aligns with the Social Identity Model'
        ]
      },
      {
        type: 'heading',
        text: 'Language to Avoid'
      },
      {
        type: 'list',
        items: [
          'Avoid: "suffers from," "afflicted with," "confined to a wheelchair," "wheelchair-bound"',
          'Avoid: "normal" (use "non-disabled" or "people without disabilities")',
          'Avoid: "handicapped" (outdated and considered offensive)',
          'Avoid: "special needs" (often seen as euphemistic and patronizing)',
          'Best practice: When in doubt, ask the individual their preference'
        ]
      },
    ],
    relatedTopics: ['disability-etiquette', 'social-identity-model', 'human-rights-model'],
    examTips: [
      'Neither approach is universally correct — respect individual/community preference',
      'Deaf community = identity-first ("Deaf person")',
      'Autistic community increasingly prefers identity-first ("autistic person")',
      'Avoid: "suffers from," "wheelchair-bound," "handicapped," "special needs," "normal"',
      'When in doubt, ask the person'
    ]
  },
  {
    slug: 'disability-demographics',
    title: 'Disability Demographics & Statistics',
    category: 'Etiquette & Demographics',
    applicableTo: ['cpacc', 'was'],
    summary: 'Key statistics about disability prevalence worldwide, organized by disability category, and the business case for accessibility.',
    content: [
      {
        type: 'paragraph',
        text: 'Understanding disability demographics helps establish the scope and importance of accessibility. Disability is far more common than many people realize, and the numbers are growing due to aging populations, longer life expectancy, and better diagnosis. These statistics also form the foundation of the business case for accessibility — when over a billion people worldwide have disabilities, accessibility is not a niche concern but a mainstream market need.'
      },
      {
        type: 'heading',
        text: 'Global & Regional Baselines'
      },
      {
        type: 'list',
        items: [
          'Global (WHO, 2023 fact sheet): ~1.3 billion people — about 16% of the world population, or roughly 1 in 6 — experience a significant disability',
          'European Union (Eurostat EU-SILC, 2022): more than one-quarter (>25%) of the EU population aged 16 and over reports a disability (activity limitation) — commonly cited as roughly 27%',
          'United States (CDC): approximately 26% of adults — 1 in 4 — have some type of disability',
          'Low- and middle-income countries generally have higher prevalence due to aging populations, conflict, and less-treated chronic conditions',
          'Disability prevalence grows with age — for EU residents aged 85+, over 76% report a disability (Eurostat 2022)'
        ]
      },
      {
        type: 'callout',
        text: 'Exam strategy: pay attention to the category keyword in the question stem. A question that says "this neurological condition affects ~50 million people" is pointing at epilepsy; "this sensory impairment affects ~430 million" is pointing at disabling hearing loss. Reading the category label is a reliable elimination strategy.'
      },
      {
        type: 'heading',
        text: 'Sensory Disabilities'
      },
      {
        type: 'list',
        items: [
          'Vision impairment: ~2.2 billion people globally have a near or distance vision impairment (WHO) — this is the headline sensory number',
          'Disabling hearing loss: ~430 million people require rehabilitation today (WHO), including about 34 million children',
          'Hearing loss projections: by 2050, nearly 2.5 billion people are projected to have some degree of hearing loss, with more than 700 million requiring rehabilitation',
          'Deaf-blindness is counted as a distinct sensory category requiring tactile communication methods'
        ]
      },
      {
        type: 'heading',
        text: 'Neurological Conditions'
      },
      {
        type: 'list',
        items: [
          'Epilepsy: ~50 million people worldwide live with epilepsy (WHO). Nearly 80% live in low- and middle-income countries. When an exam question mentions "a neurological condition affecting ~50 million," it is pointing at epilepsy',
          'Stroke: ~15 million people have a stroke each year (WHO), and about 5 million are left with permanent disability',
          'Migraine: widespread, and the leading cause of disability globally among people under age 50',
          'Other neurological conditions tested on CPACC include Parkinson\'s disease, multiple sclerosis (MS), cerebral palsy (which also counts as motor), Huntington\'s disease, and traumatic brain injury'
        ]
      },
      {
        type: 'heading',
        text: 'Cognitive & Neurodevelopmental'
      },
      {
        type: 'list',
        items: [
          'Cognitive disabilities (broad category) are the most common type of disability globally',
          'Autism spectrum disorder: WHO (2021 data) estimates ~1 in 127 people has autism — older sources cite ~1 in 100 children, and CDC US figures are higher (~1 in 36 children as of recent ADDM data)',
          'Intellectual disability: ~1% global prevalence',
          'ADHD: ~5–10% of children',
          'Dyslexia: ~5–10% of the population (a learning disability under the cognitive umbrella)',
          'Down syndrome: ~1 in 700 births (a genetic condition causing intellectual disability)',
          'Dementia: ~57 million people worldwide in 2021 (WHO), with nearly 10 million new cases per year and over 60% living in low- and middle-income countries'
        ]
      },
      {
        type: 'heading',
        text: 'Mental Health / Psychiatric Conditions'
      },
      {
        type: 'list',
        items: [
          'Depression: WHO estimates ~5.7% of adults globally experience depression — on the order of several hundred million people',
          'Anxiety disorders: among the most prevalent mental health conditions worldwide',
          'Schizophrenia: ~24 million people globally (WHO)',
          'Mental health conditions are often episodic, which affects how accommodations are designed and timed'
        ]
      },
      {
        type: 'heading',
        text: 'Motor / Physical Disabilities'
      },
      {
        type: 'list',
        items: [
          'Spinal cord injury: ~250,000 to 500,000 new cases each year globally (WHO)',
          'Arthritis is a leading cause of physical/motor disability, especially among older adults',
          'Cerebral palsy, muscular dystrophy, ALS, limb loss/amputation, and repetitive strain injuries are other common motor disabilities tested on the exam',
          'Motor disabilities frequently pair with AT like switch devices, eye-gaze, alternate keyboards, and voice control'
        ]
      },
      {
        type: 'heading',
        text: 'The Business Case for Accessibility'
      },
      {
        type: 'list',
        items: [
          'Market size: over 1 billion people with disabilities represent significant purchasing power',
          'Extended market: including friends and family, the "disability market" reaches over 2.3 billion people globally',
          'Legal risk: accessibility lawsuits (especially ADA Title III web cases in the US) are increasing year over year',
          'SEO benefits: accessibility practices like alt text, semantic HTML, and captions also improve search engine optimization',
          'Innovation / curb-cut effect: many mainstream technologies began as accessibility solutions (voice control, autocomplete, sidewalk curb cuts, automatic doors)',
          'Aging population: as populations age, the market for accessible products grows rapidly',
          'Employer brand: companies known for accessibility attract and retain diverse talent',
          'Disability intersects with poverty — people with disabilities are disproportionately affected, making accessibility a social-equity issue as well as an economic one'
        ]
      },
    ],
    relatedTopics: ['social-model', 'economic-model', 'ada', 'crpd', 'eu-accessibility'],
    examTips: [
      'Global: ~16% / ~1.3 billion (WHO, 2023 fact sheet)',
      'EU: more than one-quarter / ~1 in 4 (Eurostat EU-SILC 2022) — distinct from the global 16% figure',
      'US: ~26% / 1 in 4 adults (CDC)',
      'Epilepsy ~50M = the neurological condition most commonly cited on exams (WHO)',
      'Vision ~2.2B and disabling hearing loss ~430M = the headline sensory numbers (WHO)',
      'Dementia: ~57M in 2021 (WHO) — category overlap between neurological and cognitive',
      'Cognitive disabilities are the most common type globally',
      'Use the category keyword ("sensory," "neurological," "neurodevelopmental," "psychiatric," "motor") in the question stem to narrow options',
      'Business case: market size, legal risk, SEO, innovation (curb-cut effect), aging population'
    ]
  },

  // ============================================================
  // SEMANTIC HTML
  // ============================================================
  {
    slug: 'semantic-html',
    title: 'Semantic HTML for Accessibility',
    category: 'Semantic HTML',
    applicableTo: ['was'],
    summary: 'Using native HTML elements correctly is the foundation of web accessibility, providing built-in semantics, keyboard support, and screen reader compatibility.',
    content: [
      {
        type: 'paragraph',
        text: 'Semantic HTML means using HTML elements according to their intended purpose. When you use a <button> instead of a styled <div>, you get built-in keyboard operability, focus management, role announcement, and click/Enter/Space activation for free. Semantic HTML is the single most impactful thing developers can do for accessibility, and it directly supports WCAG 4.1.2 Name, Role, Value.'
      },
      {
        type: 'heading',
        text: 'Landmark Elements'
      },
      {
        type: 'list',
        items: [
          '<header> maps to role="banner" (when not nested inside <article> or <section>)',
          '<nav> maps to role="navigation" — use for primary, secondary, and breadcrumb navigation',
          '<main> maps to role="main" — there must be only one visible <main> per page',
          '<aside> maps to role="complementary" — for content tangentially related to the main content',
          '<footer> maps to role="contentinfo" (when not nested inside <article> or <section>)',
          '<section> maps to role="region" when it has an accessible name (aria-label or aria-labelledby)',
          '<form> maps to role="form" when it has an accessible name'
        ]
      },
      {
        type: 'heading',
        text: 'Heading Hierarchy'
      },
      {
        type: 'paragraph',
        text: 'Headings (<h1> through <h6>) create a document outline that screen reader users rely on for navigation. WCAG SC 1.3.1 (Info and Relationships) and SC 2.4.6 (Headings and Labels) require a logical heading structure. There should be one <h1> per page, headings should not skip levels (e.g., jumping from <h2> to <h4>), and headings should be descriptive of the content that follows them. Screen reader users frequently navigate by heading — studies show it is the #1 method for finding content on a page.'
      },
      {
        type: 'heading',
        text: 'Native Elements vs. ARIA'
      },
      {
        type: 'paragraph',
        text: 'The first rule of ARIA states: "If you can use a native HTML element with the semantics and behavior you require already built in, do so instead of repurposing an element and adding ARIA." Native elements like <button>, <a>, <input>, <select>, <table>, <ul>/<ol>, and <details>/<summary> provide built-in keyboard support, roles, states, and properties. ARIA should only be used when there is no native HTML equivalent for the pattern you need.'
      },
    ],
    relatedTopics: ['aria-overview', 'aria-roles', 'form-accessibility'],
    examTips: [
      'Native HTML elements have built-in roles, states, and keyboard behavior — always prefer them over ARIA',
      'Landmarks allow screen reader users to jump between page sections (banner, navigation, main, complementary, contentinfo)',
      'Headings must not skip levels and should be descriptive (SC 1.3.1, SC 2.4.6)',
      'SC 4.1.2 Name, Role, Value — all UI components must have programmatically determinable name and role',
      '<main> must appear only once per page; landmarks should be labeled if duplicated (e.g., multiple <nav>)'
    ]
  },
  {
    slug: 'form-accessibility',
    title: 'Accessible Forms',
    category: 'Semantic HTML',
    applicableTo: ['was'],
    summary: 'Accessible forms require proper label association, logical grouping with fieldset/legend, clear error handling, and appropriate input types.',
    content: [
      {
        type: 'paragraph',
        text: 'Forms are one of the most critical areas for web accessibility because they are the primary way users interact with and submit data. WCAG SC 1.3.1 (Info and Relationships), SC 3.3.1 (Error Identification), SC 3.3.2 (Labels or Instructions), and SC 4.1.2 (Name, Role, Value) all directly apply to form accessibility.'
      },
      {
        type: 'heading',
        text: 'Label Association'
      },
      {
        type: 'list',
        items: [
          'Explicit association: <label for="id"> matched with <input id="id"> — the most robust method',
          'Implicit association: wrapping the input inside the <label> element — works but explicit is preferred',
          'aria-label: provides an accessible name when a visible label is not feasible (use sparingly)',
          'aria-labelledby: references the id of another element that serves as the label — supports multiple ids',
          'The placeholder attribute is NOT a substitute for a label — it disappears on input and has low contrast'
        ]
      },
      {
        type: 'heading',
        text: 'Fieldset and Legend'
      },
      {
        type: 'paragraph',
        text: 'Related form controls must be grouped using <fieldset> with a <legend> that describes the group. This is essential for radio button groups and checkbox groups where individual labels make sense only in context (e.g., "Yes" and "No" need the legend "Do you agree to the terms?"). Screen readers announce the legend before each control in the group, giving users the full context.'
      },
      {
        type: 'heading',
        text: 'Error Handling and Validation'
      },
      {
        type: 'list',
        items: [
          'SC 3.3.1 Error Identification: errors must be identified in text and described to the user',
          'SC 3.3.3 Error Suggestion: when an error is detected and suggestions are known, provide them to the user',
          'SC 3.3.4 Error Prevention (Legal, Financial, Data): for significant submissions, allow review, confirmation, or reversal',
          'Use aria-describedby to associate error messages with their form controls',
          'Use aria-invalid="true" on controls that have failed validation',
          'Required fields should be indicated with the required attribute or aria-required="true", and visually indicated beyond just color (SC 1.4.1)'
        ]
      },
    ],
    relatedTopics: ['semantic-html', 'aria-states-properties', 'keyboard-testing'],
    examTips: [
      'Explicit <label for="id"> is the most robust labeling method',
      'Fieldset/legend is required for radio button and checkbox groups',
      'Placeholder is NOT an acceptable label — it fails SC 3.3.2',
      'aria-invalid="true" and aria-describedby link errors to controls programmatically',
      'SC 3.3.4 requires review/reversal for legal, financial, or data-deletion submissions'
    ]
  },

  // ============================================================
  // ARIA
  // ============================================================
  {
    slug: 'aria-overview',
    title: 'ARIA Overview',
    category: 'ARIA',
    applicableTo: ['was'],
    summary: 'ARIA (Accessible Rich Internet Applications) extends HTML semantics for dynamic web content and custom widgets when native HTML elements are insufficient.',
    content: [
      {
        type: 'paragraph',
        text: 'WAI-ARIA (Web Accessibility Initiative — Accessible Rich Internet Applications) is a W3C specification that defines a way to make dynamic web content and custom user interface controls accessible. ARIA provides additional semantics via roles, states, and properties that can be added to HTML elements. It bridges the gap between what native HTML offers and the complex interactions required by modern web applications.'
      },
      {
        type: 'heading',
        text: 'The 5 Rules of ARIA'
      },
      {
        type: 'list',
        items: [
          'Rule 1: If you can use a native HTML element with the semantics and behavior you require, do so. Do not repurpose an element and add ARIA.',
          'Rule 2: Do not change native semantics unless you really have to. For example, do not add role="heading" to a <tab> element.',
          'Rule 3: All interactive ARIA controls must be usable with the keyboard.',
          'Rule 4: Do not use role="presentation" or aria-hidden="true" on a visible focusable element.',
          'Rule 5: All interactive elements must have an accessible name.'
        ]
      },
      {
        type: 'heading',
        text: 'When to Use ARIA'
      },
      {
        type: 'paragraph',
        text: 'ARIA should be used when creating custom widgets that have no native HTML equivalent (e.g., tabs, tree views, comboboxes), when enhancing native elements with additional state information (e.g., aria-expanded on a disclosure button), for live regions that need to announce dynamic content changes, and to provide accessible names or descriptions where HTML cannot. ARIA is essential for single-page applications where DOM changes happen without full page loads.'
      },
      {
        type: 'heading',
        text: 'When NOT to Use ARIA'
      },
      {
        type: 'paragraph',
        text: 'Do not use ARIA when native HTML provides the same semantics. For example: use <button> not <div role="button">, use <nav> not <div role="navigation">, use <input type="checkbox"> not <div role="checkbox">. Incorrect ARIA is worse than no ARIA — it creates a false contract with assistive technology. If you set role="checkbox" you must also manage aria-checked state and keyboard interaction yourself.'
      },
    ],
    relatedTopics: ['semantic-html', 'aria-roles', 'aria-states-properties', 'aria-widget-patterns'],
    examTips: [
      'ARIA modifies the accessibility tree only — it does not add behavior, focus, or keyboard support',
      'Know all 5 rules of ARIA, especially Rule 1 (use native HTML first)',
      'Incorrect ARIA is worse than no ARIA — it creates false expectations for assistive technology users',
      'ARIA is essential for custom widgets, live regions, and single-page applications',
      'ARIA roles, states, and properties are the three categories of ARIA attributes'
    ]
  },
  {
    slug: 'aria-roles',
    title: 'ARIA Roles',
    category: 'ARIA',
    applicableTo: ['was'],
    summary: 'ARIA roles define what an element is or does, organized into landmark roles, widget roles, document structure roles, and live region roles.',
    content: [
      {
        type: 'paragraph',
        text: 'ARIA roles define the type of user interface element. When a role is assigned to an element, assistive technologies announce it accordingly and users expect specific interaction patterns. Roles are categorized into four main groups: landmark roles, widget roles, document structure roles, and live region roles. Once set, a role should not change dynamically.'
      },
      {
        type: 'heading',
        text: 'Landmark Roles'
      },
      {
        type: 'list',
        items: [
          'role="banner" — equivalent to <header> (top-level only); site-oriented content like logo and title',
          'role="navigation" — equivalent to <nav>; groups navigation links',
          'role="main" — equivalent to <main>; the primary content of the page (only one per page)',
          'role="complementary" — equivalent to <aside>; supporting content related to the main content',
          'role="contentinfo" — equivalent to <footer> (top-level only); information about the page like copyright',
          'role="search" — identifies a search facility; now available as the <search> HTML element',
          'role="form" — equivalent to <form> with an accessible name; identifies a form landmark',
          'role="region" — equivalent to <section> with an accessible name; a perceivable section of the page'
        ]
      },
      {
        type: 'heading',
        text: 'Widget Roles'
      },
      {
        type: 'list',
        items: [
          'role="button", role="link", role="checkbox", role="radio" — single interactive controls',
          'role="tab", role="tabpanel", role="tablist" — tabbed interface components',
          'role="dialog", role="alertdialog" — modal and alert dialog windows',
          'role="combobox", role="listbox", role="option" — combo box and list selection patterns',
          'role="menu", role="menubar", role="menuitem" — application-style menus (not for site navigation)',
          'role="tree", role="treeitem" — hierarchical tree views',
          'role="slider", role="spinbutton" — value selection controls'
        ]
      },
      {
        type: 'heading',
        text: 'Document Structure Roles'
      },
      {
        type: 'list',
        items: [
          'role="heading" with aria-level — defines a heading when semantic heading elements cannot be used',
          'role="list" and role="listitem" — defines a list structure',
          'role="table", role="row", role="cell", role="columnheader", role="rowheader" — table structure',
          'role="img" — groups elements that form a single image (e.g., SVG or CSS art)',
          'role="presentation" / role="none" — removes semantic meaning from an element',
          'role="group" — groups related elements together (e.g., a set of controls)'
        ]
      },
    ],
    relatedTopics: ['aria-overview', 'aria-states-properties', 'semantic-html', 'aria-widget-patterns'],
    examTips: [
      'Landmark roles help screen reader users navigate between page regions',
      'role="menu" is for application menus, NOT site navigation links',
      'role="presentation" and role="none" are synonymous — they remove semantics',
      'Widget roles require corresponding keyboard interaction patterns',
      'Only one role="main" / <main> landmark per page'
    ]
  },
  {
    slug: 'aria-states-properties',
    title: 'ARIA States & Properties',
    category: 'ARIA',
    applicableTo: ['was'],
    summary: 'ARIA states and properties provide additional semantics about elements, including names, descriptions, relationships, and current state information.',
    content: [
      {
        type: 'paragraph',
        text: 'ARIA states and properties are attributes added to HTML elements to convey information to assistive technologies. Properties typically do not change (like aria-label), while states change frequently based on user interaction (like aria-expanded). Together they enable assistive technology to understand and communicate the current condition and relationships of UI components.'
      },
      {
        type: 'heading',
        text: 'Naming and Describing'
      },
      {
        type: 'list',
        items: [
          'aria-label: provides an accessible name as a string directly on the element (no visible text needed)',
          'aria-labelledby: references the id(s) of visible element(s) that serve as the label; overrides other naming methods; supports multiple space-separated ids',
          'aria-describedby: references the id(s) of elements that provide a description; announced after the name and role; used for supplementary info like error messages or instructions',
          'The accessible name computation priority: aria-labelledby > aria-label > native label (e.g., <label>) > title attribute'
        ]
      },
      {
        type: 'heading',
        text: 'Visibility and Hiding'
      },
      {
        type: 'paragraph',
        text: 'aria-hidden="true" removes an element and all its children from the accessibility tree while keeping it visually present. It must NEVER be placed on a focusable element (ARIA Rule 4). Use it for decorative icons, redundant text, or content obscured by a modal. Note that aria-hidden="false" on a child of an aria-hidden="true" parent has no effect — once hidden, all descendants are hidden.'
      },
      {
        type: 'heading',
        text: 'Interactive States'
      },
      {
        type: 'list',
        items: [
          'aria-expanded="true/false": indicates whether a collapsible section controlled by this element is expanded or collapsed',
          'aria-pressed="true/false/mixed": indicates the current pressed state of a toggle button',
          'aria-selected="true/false": indicates the current selected state within a widget (tabs, listbox options)',
          'aria-checked="true/false/mixed": indicates the checked state of checkboxes and radios',
          'aria-disabled="true": indicates the element is perceivable but not operable (unlike the HTML disabled attribute, it does NOT prevent focus or interaction — you must handle that with JavaScript)',
          'aria-current="page/step/location/date/time/true": indicates the current item in a set (e.g., current page in navigation)'
        ]
      },
    ],
    relatedTopics: ['aria-overview', 'aria-roles', 'aria-live-regions', 'form-accessibility'],
    examTips: [
      'Accessible name computation: aria-labelledby > aria-label > native label > title',
      'aria-describedby is for supplementary info; aria-labelledby is for the name',
      'aria-hidden="true" removes from accessibility tree but keeps visually present',
      'Never put aria-hidden="true" on a focusable element',
      'aria-disabled does NOT prevent focus or interaction — unlike the HTML disabled attribute'
    ]
  },
  {
    slug: 'aria-live-regions',
    title: 'ARIA Live Regions',
    category: 'ARIA',
    applicableTo: ['was'],
    summary: 'Live regions enable screen readers to announce dynamic content changes without requiring the user to navigate to the updated area.',
    content: [
      {
        type: 'paragraph',
        text: 'ARIA live regions are a mechanism for programmatically exposing dynamic content changes to assistive technologies. When content within a live region changes, screen readers announce the update automatically without the user needing to navigate to it. This is critical for WCAG SC 4.1.3 (Status Messages, Level AA) which requires that status messages be programmatically determinable through role or properties so they can be announced without receiving focus.'
      },
      {
        type: 'heading',
        text: 'aria-live Values'
      },
      {
        type: 'list',
        items: [
          'aria-live="polite": waits until the screen reader finishes its current announcement before reading the update. Use for most status messages, search results counts, and non-urgent updates.',
          'aria-live="assertive": interrupts whatever the screen reader is currently saying to announce the update immediately. Use ONLY for urgent time-sensitive information like session timeouts or critical errors.',
          'aria-live="off" (default): changes are not announced. Use to suppress announcements for regions that update too frequently.'
        ]
      },
      {
        type: 'heading',
        text: 'Supporting Attributes'
      },
      {
        type: 'list',
        items: [
          'aria-atomic="true/false": when true, the entire region is announced on any change (not just the changed content). Default is false.',
          'aria-relevant="additions/removals/text/all": specifies which types of changes should be announced. Default is "additions text".',
          'The live region must exist in the DOM before content is injected into it — screen readers watch for changes to existing live regions.'
        ]
      },
      {
        type: 'heading',
        text: 'Implicit Live Region Roles'
      },
      {
        type: 'list',
        items: [
          'role="alert" — equivalent to aria-live="assertive" + aria-atomic="true". Use for error messages and urgent warnings.',
          'role="status" — equivalent to aria-live="polite" + aria-atomic="true". Use for status messages (e.g., "3 results found").',
          'role="log" — equivalent to aria-live="polite". Use for chat logs, activity feeds, or sequential updates.',
          'role="timer" — for time-related updates, though screen reader support varies.',
          'role="marquee" — for non-essential scrolling content, equivalent to aria-live="off".'
        ]
      },
    ],
    relatedTopics: ['aria-overview', 'aria-states-properties', 'aria-widget-patterns', 'screen-reader-testing'],
    examTips: [
      'SC 4.1.3 Status Messages (AA, WCAG 2.1) — status messages must be announced without focus',
      'aria-live="polite" waits; aria-live="assertive" interrupts — use assertive sparingly',
      'role="alert" = assertive + atomic; role="status" = polite + atomic',
      'Live region container must exist in the DOM before content is injected',
      'aria-atomic="true" announces the entire region; "false" announces only the change'
    ]
  },
  {
    slug: 'aria-widget-patterns',
    title: 'ARIA Widget Patterns',
    category: 'ARIA',
    applicableTo: ['was'],
    summary: 'Complex ARIA widgets like tabs, dialogs, menus, comboboxes, and accordions require specific roles, states, properties, and keyboard interaction patterns as defined by the APG.',
    content: [
      {
        type: 'paragraph',
        text: 'The ARIA Authoring Practices Guide (APG), maintained by the W3C, provides design patterns and reference implementations for common accessible widgets. Each pattern specifies the required ARIA roles, states, and properties, as well as the expected keyboard interaction model. Following these patterns is essential because assistive technology users expect consistent behavior based on the announced role.'
      },
      {
        type: 'heading',
        text: 'Tabs Pattern'
      },
      {
        type: 'list',
        items: [
          'Use role="tablist" on the container, role="tab" on each tab, role="tabpanel" on each panel',
          'aria-selected="true" on the active tab; other tabs have aria-selected="false"',
          'Each tab references its panel with aria-controls; each panel references its tab with aria-labelledby',
          'Keyboard: Arrow keys move between tabs, Tab key moves focus into the active panel, Home/End move to first/last tab'
        ]
      },
      {
        type: 'heading',
        text: 'Dialog Pattern'
      },
      {
        type: 'list',
        items: [
          'Use role="dialog" with aria-modal="true" for modal dialogs',
          'The dialog must have an accessible name via aria-label or aria-labelledby',
          'Focus must move into the dialog on open and be trapped within it (Tab cycles through focusable elements)',
          'Escape key closes the dialog; focus returns to the element that triggered it',
          'Content behind the modal should have aria-hidden="true" or use the inert attribute'
        ]
      },
      {
        type: 'heading',
        text: 'Menu and Combobox Patterns'
      },
      {
        type: 'list',
        items: [
          'Menu: role="menu" + role="menuitem"; Arrow keys navigate, Enter/Space activates, Escape closes',
          'Menus are for application-style actions — NOT for site navigation (use <nav> for navigation)',
          'Combobox: an input with role="combobox", aria-expanded, aria-autocomplete, and a linked listbox popup',
          'Combobox keyboard: typing filters options, Arrow Down opens/navigates popup, Enter selects, Escape closes'
        ]
      },
      {
        type: 'heading',
        text: 'Accordion Pattern'
      },
      {
        type: 'paragraph',
        text: 'Accordions use buttons as the triggers (ensuring keyboard accessibility) with aria-expanded="true/false" to indicate state. The controlled panel is referenced by aria-controls on the button. Each button is typically wrapped in a heading element for document structure. Keyboard: Enter/Space toggles the section, and optionally Arrow Up/Down moves between accordion headers.'
      },
    ],
    relatedTopics: ['aria-overview', 'aria-roles', 'aria-states-properties', 'keyboard-testing'],
    examTips: [
      'The APG (ARIA Authoring Practices Guide) defines expected keyboard patterns for each widget role',
      'Tabs: Arrow keys between tabs, Tab into panel, aria-selected on active tab',
      'Dialogs: focus trap, Escape to close, return focus to trigger, aria-modal="true"',
      'Menus are for application actions, NOT site navigation',
      'The role you assign determines the keyboard behavior users expect'
    ]
  },

  // ============================================================
  // ACCESSIBILITY TESTING
  // ============================================================
  {
    slug: 'testing-fundamentals',
    title: 'Accessibility Testing Fundamentals',
    category: 'Accessibility Testing',
    applicableTo: ['was'],
    summary: 'Effective accessibility testing combines automated tools, manual testing, and assistive technology testing, as no single method catches all barriers.',
    content: [
      {
        type: 'paragraph',
        text: 'Accessibility testing determines whether a website or application is usable by people with disabilities. A comprehensive testing approach combines three methods: automated testing (which catches about 30-40% of WCAG issues), manual testing (keyboard navigation, visual inspection, content review), and assistive technology testing (screen readers, magnification, voice control). No single method is sufficient on its own.'
      },
      {
        type: 'heading',
        text: 'What Automated Testing Catches'
      },
      {
        type: 'list',
        items: [
          'Missing alt text on images',
          'Missing form labels',
          'Color contrast violations',
          'Missing document language (lang attribute)',
          'Duplicate IDs',
          'Missing landmark structure',
          'ARIA syntax errors (e.g., invalid roles, missing required attributes)'
        ]
      },
      {
        type: 'heading',
        text: 'What Requires Manual Testing'
      },
      {
        type: 'list',
        items: [
          'Quality and accuracy of alt text (automated tools can detect missing alt, not bad alt)',
          'Logical reading order and content flow',
          'Keyboard focus order and focus management',
          'Whether ARIA widgets behave as expected',
          'Meaningful heading hierarchy (automated tools flag skipped levels but not meaningless headings)',
          'Timeout adequacy and ability to extend time',
          'Cognitive clarity — is the content understandable?'
        ]
      },
      {
        type: 'heading',
        text: 'Testing Methodology'
      },
      {
        type: 'paragraph',
        text: 'A systematic testing approach includes: (1) Run automated scans first to catch low-hanging fruit. (2) Perform keyboard-only navigation through the entire user flow. (3) Test with at least one screen reader (NVDA on Windows or VoiceOver on Mac). (4) Zoom to 200% and reflow at 320px to test responsive behavior. (5) Check color contrast with tools. (6) Review content structure — headings, landmarks, reading order. (7) Test forms end-to-end including error handling.'
      },
    ],
    relatedTopics: ['automated-testing-tools', 'screen-reader-testing', 'keyboard-testing'],
    examTips: [
      'Automated tools catch approximately 30-40% of WCAG violations',
      'Manual testing is required for alt text quality, reading order, focus management, and cognitive clarity',
      'A comprehensive approach combines automated, manual, and assistive technology testing',
      'Always test the full user flow, not just individual pages in isolation',
      'Testing should occur throughout development, not just at the end'
    ]
  },
  {
    slug: 'automated-testing-tools',
    title: 'Automated Testing Tools',
    category: 'Accessibility Testing',
    applicableTo: ['was'],
    summary: 'Tools like axe, WAVE, Lighthouse, and Pa11y automate detection of common WCAG violations but cannot replace manual testing.',
    content: [
      {
        type: 'paragraph',
        text: 'Automated accessibility testing tools analyze web pages against WCAG success criteria and report violations. They are essential for catching common, machine-detectable issues quickly and at scale. However, they share a fundamental limitation: they can only evaluate what is programmatically determinable. They cannot assess the quality, appropriateness, or contextual correctness of accessibility implementations.'
      },
      {
        type: 'heading',
        text: 'Major Tools'
      },
      {
        type: 'list',
        items: [
          'axe (by Deque): the most widely used accessibility engine. Available as a browser extension (axe DevTools), npm library (axe-core) for CI/CD integration, and API. Uses a rules-based engine with zero false positives as a design goal.',
          'WAVE (by WebAIM): browser extension and web service that provides visual overlays showing accessibility issues directly on the page. Excellent for visual learners and quick spot checks.',
          'Lighthouse (by Google): built into Chrome DevTools. Runs accessibility audits as part of broader performance/SEO audits. Uses axe-core under the hood for its accessibility checks.',
          'Pa11y: open-source Node.js tool for command-line and CI/CD integration. Supports WCAG 2.1 AA testing and can test against multiple standards. Good for automated regression testing.'
        ]
      },
      {
        type: 'heading',
        text: 'What Automated Tools Cannot Catch'
      },
      {
        type: 'list',
        items: [
          'Whether alt text accurately describes the image content',
          'Whether the reading order makes logical sense',
          'Whether keyboard focus management is correct in dynamic applications',
          'Whether ARIA widgets have correct keyboard interaction patterns',
          'Whether content is understandable to people with cognitive disabilities',
          'Whether video captions are accurate and synchronized',
          'Whether focus is moved appropriately when new content appears'
        ]
      },
    ],
    relatedTopics: ['testing-fundamentals', 'screen-reader-testing', 'keyboard-testing'],
    examTips: [
      'axe-core is the most widely used engine; Lighthouse uses it under the hood',
      'Automated tools aim for zero false positives — but that means they miss issues they cannot confirm',
      'WAVE provides visual overlays; axe provides structured results for developers',
      'Use automated tools in CI/CD to prevent regression, not as the sole testing method',
      'Automated tools cannot judge the quality or context of accessibility implementations'
    ]
  },
  {
    slug: 'screen-reader-testing',
    title: 'Screen Reader Testing',
    category: 'Accessibility Testing',
    applicableTo: ['was'],
    summary: 'Testing with screen readers like JAWS, NVDA, and VoiceOver verifies that content is announced correctly and interaction patterns work as expected.',
    content: [
      {
        type: 'paragraph',
        text: 'Screen readers convert digital text and UI elements into speech or Braille output. Testing with a screen reader is the most reliable way to verify that accessibility semantics (names, roles, states, descriptions) are correctly conveyed. The three major screen readers are JAWS (Windows, commercial), NVDA (Windows, free/open-source), and VoiceOver (macOS/iOS, built-in). Each has different behaviors and levels of support for ARIA.'
      },
      {
        type: 'heading',
        text: 'Screen Reader Market Overview'
      },
      {
        type: 'list',
        items: [
          'JAWS (Job Access With Speech): most widely used on desktop, commercial license, best ARIA support, pairs with IE/Chrome/Firefox on Windows',
          'NVDA (NonVisual Desktop Access): free, open-source, widely used for testing, pairs best with Firefox and Chrome on Windows',
          'VoiceOver: built into macOS and iOS, pairs with Safari, the dominant mobile screen reader on iOS',
          'TalkBack: built into Android, pairs with Chrome, primary mobile screen reader for Android',
          'WebAIM survey: JAWS and NVDA together account for the majority of desktop screen reader usage'
        ]
      },
      {
        type: 'heading',
        text: 'What to Test With Screen Readers'
      },
      {
        type: 'list',
        items: [
          'Page title and landmark structure announced correctly on page load',
          'Images: appropriate alt text announced; decorative images are silent',
          'Forms: labels, required indicators, error messages, and fieldset/legend announced in context',
          'Headings: correct level announced, hierarchical navigation works',
          'Links and buttons: meaningful names announced, roles are correct',
          'Dynamic content: live regions announce updates, focus moves appropriately',
          'Tables: row/column headers are announced when navigating data cells',
          'Custom widgets: roles, states (expanded/collapsed, selected, checked) announced correctly'
        ]
      },
    ],
    relatedTopics: ['testing-fundamentals', 'keyboard-testing', 'aria-states-properties', 'aria-live-regions'],
    examTips: [
      'Common pairings: JAWS + Chrome/Firefox, NVDA + Firefox, VoiceOver + Safari',
      'Two modes: Browse/Virtual mode (arrow keys to read) and Forms/Focus mode (Tab to interact)',
      'JAWS and NVDA are Windows-only; VoiceOver is macOS/iOS only',
      'Test page structure, forms, dynamic content, tables, and custom widgets',
      'WebAIM surveys show JAWS and NVDA dominate desktop screen reader usage'
    ]
  },
  {
    slug: 'keyboard-testing',
    title: 'Keyboard Navigation Testing',
    category: 'Accessibility Testing',
    applicableTo: ['was'],
    summary: 'Keyboard testing verifies that all functionality is operable without a mouse, with logical tab order, visible focus indicators, and no keyboard traps.',
    content: [
      {
        type: 'paragraph',
        text: 'Keyboard accessibility is a foundational WCAG requirement. SC 2.1.1 Keyboard (Level A) requires that all functionality be operable through a keyboard interface. SC 2.1.2 No Keyboard Trap (Level A) requires that focus can always be moved away from any component. Keyboard testing is one of the most impactful manual tests because it affects screen reader users, switch users, voice control users, and power users who prefer keyboard navigation.'
      },
      {
        type: 'heading',
        text: 'Essential Keyboard Behaviors to Test'
      },
      {
        type: 'list',
        items: [
          'Tab: moves focus forward through interactive elements; Shift+Tab moves backward',
          'Enter: activates links and buttons; submits forms',
          'Space: activates buttons, toggles checkboxes, selects radio buttons, and scrolls the page',
          'Arrow keys: navigate within composite widgets (tabs, menus, radio groups, sliders)',
          'Escape: closes modal dialogs, menus, and popups; returns focus to the trigger',
          'Home/End: move to first/last item within a widget or text field'
        ]
      },
      {
        type: 'heading',
        text: 'Tab Order and Focus Management'
      },
      {
        type: 'paragraph',
        text: 'The tab order should follow the visual reading order of the page (SC 2.4.3 Focus Order, Level A). Avoid positive tabindex values (tabindex="1", "2", etc.) as they override the natural DOM order and create confusing navigation. Use tabindex="0" to make non-interactive elements focusable and tabindex="-1" for elements that should be programmatically focusable but not in the tab order (e.g., headings that receive focus after navigation). Focus must be managed when content changes — for example, moving focus to a modal when it opens, or to an error summary after form submission.'
      },
      {
        type: 'heading',
        text: 'Keyboard Traps'
      },
      {
        type: 'paragraph',
        text: 'A keyboard trap occurs when a user can Tab into a component but cannot Tab out of it. This violates SC 2.1.2 No Keyboard Trap (Level A). Common sources: embedded media players, rich text editors, third-party widgets, and improperly implemented modal dialogs. The only acceptable "trap" is a modal dialog, which should trap focus intentionally but always provide an Escape key exit. Test for traps by tabbing through every interactive element on the page.'
      },
    ],
    relatedTopics: ['testing-fundamentals', 'focus-indicators', 'aria-widget-patterns'],
    examTips: [
      'SC 2.1.1 Keyboard (A) — all functionality must be keyboard operable',
      'SC 2.1.2 No Keyboard Trap (A) — users must be able to navigate away from all components',
      'tabindex="0" adds to tab order; tabindex="-1" is programmatic only; avoid positive values',
      'Tab order should match visual reading order (SC 2.4.3 Focus Order)',
      'Modal dialogs are the only acceptable focus trap — must have Escape key exit'
    ]
  },

  // ============================================================
  // CSS & VISUAL ACCESSIBILITY
  // ============================================================
  {
    slug: 'color-contrast',
    title: 'Color Contrast Requirements',
    category: 'CSS & Visual Accessibility',
    applicableTo: ['was'],
    summary: 'WCAG requires minimum contrast ratios of 4.5:1 for normal text, 3:1 for large text, and 3:1 for non-text elements like UI components and graphical objects.',
    content: [
      {
        type: 'paragraph',
        text: 'Color contrast ensures that text and meaningful visual elements are perceivable by people with low vision and color vision deficiencies. WCAG defines specific contrast ratios measured between the foreground and background colors. Contrast ratios range from 1:1 (no contrast, e.g., white on white) to 21:1 (maximum contrast, black on white).'
      },
      {
        type: 'heading',
        text: 'WCAG Contrast Success Criteria'
      },
      {
        type: 'list',
        items: [
          'SC 1.4.3 Contrast (Minimum) — Level AA: normal text requires 4.5:1; large text requires 3:1',
          'SC 1.4.6 Contrast (Enhanced) — Level AAA: normal text requires 7:1; large text requires 4.5:1',
          'SC 1.4.11 Non-text Contrast — Level AA (WCAG 2.1): UI components and graphical objects require 3:1 against adjacent colors',
          'Large text is defined as 18pt (24px) or 14pt bold (18.67px bold)',
          'Exceptions: logos, incidental text (disabled controls, decorative text), and text in images that are purely decorative'
        ]
      },
      {
        type: 'heading',
        text: 'Non-text Contrast (SC 1.4.11)'
      },
      {
        type: 'paragraph',
        text: 'Added in WCAG 2.1, SC 1.4.11 requires a 3:1 contrast ratio for user interface components (form field borders, button boundaries, focus indicators) and graphical objects (icons, chart elements) that are needed for understanding. This means a text input must have a visible boundary distinguishable from the background, and icons that convey meaning must meet contrast requirements.'
      },
      {
        type: 'heading',
        text: 'Tools for Checking Contrast'
      },
      {
        type: 'list',
        items: [
          'WebAIM Contrast Checker (webaim.org/resources/contrastchecker) — simple foreground/background checker',
          'Colour Contrast Analyser (CCA) by TPGi — desktop app with an eyedropper for sampling colors on screen',
          'axe/WAVE/Lighthouse — flag contrast violations during automated scans',
          'Chrome DevTools — shows contrast ratio in the color picker and highlights insufficient contrast',
          'Stark — design tool plugin for Figma/Sketch/Adobe XD for checking contrast during design'
        ]
      },
    ],
    relatedTopics: ['focus-indicators', 'responsive-accessibility', 'testing-fundamentals'],
    examTips: [
      '4.5:1 for normal text (AA), 3:1 for large text (AA), 7:1 for normal text (AAA)',
      'Large text = 18pt (24px) or 14pt bold (18.67px bold)',
      'SC 1.4.11 Non-text Contrast (AA, WCAG 2.1): 3:1 for UI components and graphical objects',
      'Exceptions: logos, incidental/decorative text, disabled controls',
      'Color must not be the only means of conveying information (SC 1.4.1 Use of Color)'
    ]
  },
  {
    slug: 'focus-indicators',
    title: 'Focus Indicators',
    category: 'CSS & Visual Accessibility',
    applicableTo: ['was'],
    summary: 'Visible focus indicators are required for keyboard navigation, governed by SC 2.4.7 (Level AA) and the enhanced SC 2.4.11/2.4.12 requirements in WCAG 2.2.',
    content: [
      {
        type: 'paragraph',
        text: 'Focus indicators are visual cues that show which element currently has keyboard focus. Without them, keyboard users cannot determine where they are on the page. WCAG SC 2.4.7 Focus Visible (Level AA) requires that the keyboard focus indicator is visible. WCAG 2.2 added SC 2.4.11 Focus Not Obscured (Minimum, Level AA) requiring that focus is not entirely hidden, and SC 2.4.13 Focus Appearance (Level AAA) defining minimum size and contrast for focus indicators.'
      },
      {
        type: 'heading',
        text: 'CSS Implementation'
      },
      {
        type: 'list',
        items: [
          ':focus — applies styles whenever an element has focus (keyboard or mouse click)',
          ':focus-visible — applies styles only when focus should be visibly indicated (typically keyboard focus). Recommended approach for modern browsers.',
          ':focus-within — applies when the element or any descendant has focus. Useful for styling parent containers.',
          'Common pattern: remove default outline for :focus, add visible outline for :focus-visible',
          'outline is preferred over border for focus styles because it does not affect layout'
        ]
      },
      {
        type: 'heading',
        text: 'Designing Effective Focus States'
      },
      {
        type: 'paragraph',
        text: 'Effective focus indicators should: (1) have sufficient contrast — at least 3:1 against adjacent colors per SC 1.4.11 Non-text Contrast, (2) be visible against all backgrounds the element may appear on, (3) have sufficient area/thickness to be perceivable, (4) not rely solely on color change. A common technique is a 2-3px solid outline with an offset, or a double-ring approach (dark outline + light outer ring) that works on both light and dark backgrounds.'
      },
      {
        type: 'heading',
        text: 'Common Pitfalls'
      },
      {
        type: 'list',
        items: [
          'Using outline: none or outline: 0 without providing an alternative focus style — removes focus visibility entirely',
          'Focus indicator that only changes background color — may be invisible to color-blind users',
          'Focus indicator hidden behind sticky headers, footers, or overlapping elements (SC 2.4.11)',
          'Focus indicator with insufficient contrast against the background',
          'Relying solely on the browser default focus ring — it may not be visible on all backgrounds'
        ]
      },
    ],
    relatedTopics: ['keyboard-testing', 'color-contrast', 'responsive-accessibility'],
    examTips: [
      'SC 2.4.7 Focus Visible (AA) — keyboard focus indicator must be visible',
      'SC 2.4.11 Focus Not Obscured (AA, WCAG 2.2) — focus must not be entirely hidden by other content',
      ':focus-visible targets keyboard focus; :focus targets all focus (including mouse click)',
      'Never use outline: none without providing an alternative visible focus style',
      'Focus indicators need 3:1 contrast per SC 1.4.11 Non-text Contrast'
    ]
  },
  {
    slug: 'responsive-accessibility',
    title: 'Responsive Design & Accessibility',
    category: 'CSS & Visual Accessibility',
    applicableTo: ['was'],
    summary: 'Accessible responsive design ensures content reflows at 320px width, supports 200% zoom, provides adequate touch targets, and addresses mobile-specific considerations.',
    content: [
      {
        type: 'paragraph',
        text: 'Responsive design and accessibility are deeply intertwined. WCAG includes specific success criteria for content adaptation: SC 1.4.4 Resize Text (Level AA) requires text to be resizable up to 200% without loss of content or functionality. SC 1.4.10 Reflow (Level AA, WCAG 2.1) requires content to reflow to a single column at 320px width (or 256px height for horizontal scrolling content) without requiring two-dimensional scrolling.'
      },
      {
        type: 'heading',
        text: 'Reflow and Zoom Requirements'
      },
      {
        type: 'list',
        items: [
          'SC 1.4.10 Reflow (AA): content must be usable at 320px wide (equivalent to 1280px at 400% zoom) without horizontal scrolling',
          'SC 1.4.4 Resize Text (AA): text must be resizable up to 200% without loss of content or functionality',
          'Exceptions to reflow: data tables, toolbars, maps, diagrams — content that requires two-dimensional layout for meaning',
          'Use relative units (rem, em, %) rather than fixed pixels for sizing',
          'Test by setting browser zoom to 400% at 1280px viewport width to simulate the 320px reflow test'
        ]
      },
      {
        type: 'heading',
        text: 'Touch Targets'
      },
      {
        type: 'paragraph',
        text: 'WCAG 2.2 added SC 2.5.8 Target Size (Minimum, Level AA) requiring that touch/pointer targets are at least 24x24 CSS pixels, with exceptions for inline targets, user agent controls, and essential presentations. SC 2.5.5 Target Size (Enhanced, Level AAA) recommends at least 44x44 CSS pixels. Adequate target size benefits people with motor impairments, older adults, and anyone using a touchscreen device.'
      },
      {
        type: 'heading',
        text: 'Mobile Accessibility Considerations'
      },
      {
        type: 'list',
        items: [
          'SC 1.3.4 Orientation (AA, WCAG 2.1): content must not be restricted to a single display orientation (portrait or landscape) unless essential',
          'SC 2.5.1 Pointer Gestures (A, WCAG 2.1): multipoint/path-based gestures must have single-pointer alternatives',
          'SC 2.5.2 Pointer Cancellation (A, WCAG 2.1): functionality triggered by a single pointer can be cancelled (up-event activation, undo, abort)',
          'Ensure virtual keyboard does not obscure form fields being filled',
          'Support pinch-to-zoom — never use maximum-scale=1 or user-scalable=no in the viewport meta tag'
        ]
      },
    ],
    relatedTopics: ['color-contrast', 'focus-indicators', 'testing-fundamentals'],
    examTips: [
      'SC 1.4.10 Reflow (AA): single-column at 320px width, no horizontal scrolling (except data tables)',
      'SC 1.4.4 Resize Text (AA): text must scale to 200% without loss of content',
      'SC 2.5.8 Target Size Minimum (AA, WCAG 2.2): 24x24 CSS pixels',
      'Never use user-scalable=no or maximum-scale=1 in viewport meta tag',
      'SC 1.3.4 Orientation (AA): do not lock to portrait or landscape unless essential'
    ]
  },

  // ============================================================
  // WAS-SPECIFIC: ARIA & ACCESSIBILITY TREE
  // ============================================================
  {
    slug: 'accessibility-tree',
    title: 'The Accessibility Tree',
    category: 'ARIA & Semantics',
    applicableTo: ['was'],
    summary: 'The accessibility tree is a simplified representation of the DOM that browsers expose to assistive technologies via platform accessibility APIs, containing each element\'s name, role, value, and state.',
    content: [
      {
        type: 'paragraph',
        text: 'When a browser parses an HTML document, it builds the DOM (Document Object Model). From the DOM, the browser generates a parallel structure called the accessibility tree — a simplified representation optimized for assistive technologies. The accessibility tree strips out purely visual information and exposes the semantic meaning of elements: their role, name, value, state, and relationships.'
      },
      {
        type: 'heading',
        text: 'How the Accessibility Tree Is Built'
      },
      {
        type: 'list',
        items: [
          'The browser processes the DOM and creates accessible objects for elements with semantic meaning',
          'Native HTML elements provide implicit roles: <button> becomes role="button", <nav> becomes role="navigation"',
          'ARIA attributes override or supplement native semantics: role, aria-label, aria-expanded, etc.',
          'CSS can affect the tree: display:none and visibility:hidden remove elements from the tree; aria-hidden="true" hides elements from AT but keeps them visible',
          'The accessibility tree is what the operating system\'s accessibility API exposes to assistive technologies'
        ]
      },
      {
        type: 'heading',
        text: 'Accessible Object Properties'
      },
      {
        type: 'list',
        items: [
          'Name: the accessible label that identifies the element (from text content, aria-label, aria-labelledby, alt attribute, or title)',
          'Role: what kind of element it is (button, link, heading, textbox, etc.)',
          'Value: the current value (e.g., text in an input field, the current slider position)',
          'State: dynamic properties like expanded/collapsed, checked/unchecked, disabled, selected',
          'Description: supplementary information (from aria-describedby or title)'
        ]
      },
      {
        type: 'heading',
        text: 'The Accessibility API Chain'
      },
      {
        type: 'paragraph',
        text: 'The chain works as follows: HTML + ARIA → DOM → Accessibility Tree → Platform Accessibility API (e.g., UIA on Windows, AX API on macOS, ATK/AT-SPI on Linux) → Assistive Technology (e.g., JAWS, NVDA, VoiceOver). The HTML Accessibility API Mappings (HTML-AAM) specification defines how native HTML elements map to accessibility API roles and properties.'
      },
      {
        type: 'heading',
        text: 'Debugging the Accessibility Tree'
      },
      {
        type: 'list',
        items: [
          'Chrome DevTools: Elements panel → Accessibility pane shows computed accessible name, role, and properties',
          'Firefox DevTools: Accessibility Inspector provides a full tree view of accessible objects',
          'Chrome DevTools also has a "Full Accessibility Tree" view that replaces the DOM tree with the a11y tree',
          'These tools help identify missing names, incorrect roles, or hidden elements that should be exposed'
        ]
      },
    ],
    relatedTopics: ['aria-overview', 'aria-roles', 'semantic-html', 'screen-readers'],
    examTips: [
      'The accessibility tree is a simplified representation of the DOM for assistive technologies',
      'Native HTML provides implicit ARIA roles — ARIA attributes override or supplement them',
      'Five key properties: name, role, value, state, description',
      'display:none hides from both display AND accessibility tree',
      'aria-hidden="true" hides from accessibility tree only — never use on focusable elements',
      'HTML-AAM specification defines native HTML to accessibility API mappings'
    ]
  },
  {
    slug: 'accessible-names-descriptions',
    title: 'Accessible Names & Descriptions',
    category: 'ARIA & Semantics',
    applicableTo: ['was'],
    summary: 'Every interactive element needs an accessible name so assistive technologies can identify it. The accessible name computation algorithm defines the priority order for determining an element\'s name.',
    content: [
      {
        type: 'paragraph',
        text: 'An accessible name is a short string that labels an element for assistive technology users. Every interactive element — links, buttons, form fields, widgets — must have an accessible name (WCAG SC 4.1.2 Name, Role, Value). An accessible description provides additional information beyond the name, announced by screen readers after the name, often after a brief pause.'
      },
      {
        type: 'heading',
        text: 'The Accessible Name Computation'
      },
      {
        type: 'paragraph',
        text: 'Browsers use a defined algorithm (the Accessible Name and Description Computation specification) to determine an element\'s name. When multiple naming sources exist, the source with the highest priority wins. The priority order from highest to lowest is:'
      },
      {
        type: 'list',
        items: [
          '1. aria-labelledby — references one or more elements by ID; their text content becomes the name. Highest priority and can concatenate text from multiple elements',
          '2. aria-label — a string directly on the element. Overrides all native naming methods but is itself overridden by aria-labelledby',
          '3. Native labeling — varies by element type: <label> for form controls, alt for images, text content for links and buttons, <caption> for tables, <legend> for fieldsets',
          '4. title attribute — used as a last resort if no other name source exists. Generally not recommended as the primary naming method because tooltip behavior is inconsistent'
        ]
      },
      {
        type: 'heading',
        text: 'Accessible Descriptions'
      },
      {
        type: 'list',
        items: [
          'aria-describedby references element(s) whose text content forms the description',
          'Descriptions supplement the name with additional context (e.g., format instructions for an input field)',
          'Screen readers announce the description after the name, typically with a brief pause',
          'The title attribute may serve as an accessible description if not already used as the name'
        ]
      },
      {
        type: 'heading',
        text: 'Common Naming Patterns'
      },
      {
        type: 'list',
        items: [
          'Buttons: text content inside the <button> element ("Submit", "Close")',
          'Links: text content between <a> tags; for icon-only links, use aria-label or visually hidden text',
          'Images: alt attribute; decorative images use alt="" (empty string)',
          'Form fields: associated <label> via for/id or wrapping; aria-label as fallback',
          'Icon buttons: aria-label on the button element, with aria-hidden="true" on the icon SVG',
          'Groups of radio buttons or checkboxes: <fieldset> with <legend> for the group name'
        ]
      },
    ],
    relatedTopics: ['aria-overview', 'aria-states-properties', 'form-accessibility', 'accessibility-tree'],
    examTips: [
      'Priority: aria-labelledby > aria-label > native label > title',
      'aria-labelledby can reference multiple IDs — text is concatenated in order',
      'aria-label overrides native text content (link text, button text)',
      'SC 4.1.2 Name, Role, Value: every interactive element needs an accessible name',
      'SC 2.5.3 Label in Name: visible label text must be included in the accessible name',
      'Accessible description (aria-describedby) supplements the name — announced after a pause'
    ]
  },

  // ============================================================
  // WAS-SPECIFIC: IMPLEMENTATION PATTERNS
  // ============================================================
  {
    slug: 'standard-vs-custom-controls',
    title: 'Standard Controls vs. Custom Controls',
    category: 'ARIA & Semantics',
    applicableTo: ['was'],
    summary: 'Native HTML controls provide built-in keyboard support, roles, and states for free. Custom controls require ARIA roles, keyboard handlers, and focus management — use them only when native HTML cannot meet the requirement.',
    content: [
      {
        type: 'paragraph',
        text: 'The choice between standard HTML controls and custom ARIA widgets significantly impacts accessibility. Native HTML elements like <button>, <input>, <select>, and <a> provide built-in keyboard support, implicit ARIA roles, state management, and consistent behavior across assistive technologies — all without any additional code.'
      },
      {
        type: 'heading',
        text: 'What Native HTML Provides for Free'
      },
      {
        type: 'list',
        items: [
          'Implicit ARIA roles: <button> is automatically role="button", <a href> is role="link"',
          'Keyboard support: buttons respond to Enter and Space, links respond to Enter, form controls support Tab navigation',
          'Focus management: native interactive elements are in the tab order by default',
          'State communication: <input type="checkbox"> automatically exposes checked state to AT',
          'Cross-browser and cross-AT compatibility: thoroughly tested by browser vendors'
        ]
      },
      {
        type: 'heading',
        text: 'When Custom Controls Are Necessary'
      },
      {
        type: 'list',
        items: [
          'Complex widgets not available in HTML: tab panels, tree views, comboboxes with autocomplete, date pickers',
          'Specific design requirements that standard controls cannot accommodate',
          'Highly interactive web applications requiring specialized interaction patterns',
          'When branding or design systems require visual customization beyond CSS styling of native elements'
        ]
      },
      {
        type: 'heading',
        text: 'Requirements for Accessible Custom Controls'
      },
      {
        type: 'list',
        items: [
          'Assign the correct ARIA role (e.g., role="tablist", role="tab", role="tabpanel")',
          'Manage ARIA states (aria-selected, aria-expanded, aria-checked, etc.)',
          'Implement full keyboard interaction per the ARIA Authoring Practices Guide (APG) patterns',
          'Manage focus within composite widgets using roving tabindex or aria-activedescendant',
          'Provide an accessible name for the widget and its interactive parts',
          'Test with multiple screen reader and browser combinations'
        ]
      },
      {
        type: 'heading',
        text: 'The 5 Rules of ARIA'
      },
      {
        type: 'list',
        items: [
          'Rule 1: Use native HTML instead of ARIA if possible — it already has the semantics and behavior built in',
          'Rule 2: Do not change native semantics unless you really have to (e.g., don\'t add role="button" to a heading)',
          'Rule 3: All interactive ARIA controls must be usable with the keyboard',
          'Rule 4: Do not use role="presentation" or aria-hidden="true" on a focusable element',
          'Rule 5: All interactive elements must have an accessible name'
        ]
      },
    ],
    relatedTopics: ['aria-overview', 'aria-widget-patterns', 'semantic-html', 'aria-roles'],
    examTips: [
      'Always prefer native HTML over custom ARIA — the first rule of ARIA',
      'ARIA roles override native roles completely',
      'ARIA adds semantics only — it does NOT change browser behavior or keyboard support',
      'Custom widgets require: correct role + ARIA states + keyboard handlers + focus management + accessible name',
      'The application role disables screen reader navigation keystrokes — use very sparingly',
      'Test custom widgets across multiple screen reader + browser combinations'
    ]
  },
  {
    slug: 'spa-accessibility',
    title: 'Single Page Application Accessibility',
    category: 'ARIA & Semantics',
    applicableTo: ['was'],
    summary: 'SPAs load content dynamically without full page reloads, creating accessibility challenges: screen readers miss route changes, focus gets lost, and the page title may not update.',
    content: [
      {
        type: 'paragraph',
        text: 'Single Page Applications (SPAs) use JavaScript frameworks (React, Vue, Angular) to dynamically update content without full page reloads. While this improves performance, it creates significant accessibility challenges. Screen readers rely on page load events to announce the page title and provide a structural summary — SPAs do not fire these events when navigating between views.'
      },
      {
        type: 'heading',
        text: 'Key Accessibility Challenges in SPAs'
      },
      {
        type: 'list',
        items: [
          'Screen readers do not announce route changes because there is no traditional page load event',
          'Focus remains on the element that triggered navigation (e.g., a link) instead of moving to the new content',
          'The document title (document.title) may not update to reflect the new view',
          'Content loaded via AJAX is not automatically announced to screen readers',
          'Browser back/forward navigation behavior may be inconsistent'
        ]
      },
      {
        type: 'heading',
        text: 'Recommended SPA Accessibility Patterns'
      },
      {
        type: 'list',
        items: [
          'Update document.title via JavaScript on every route change to reflect the current view',
          'Move focus to the new content — typically the main heading (h1) or the <main> element',
          'Use aria-live regions to announce the route change (e.g., "New page: About Us")',
          'Ensure skip navigation links still work correctly in the SPA context',
          'Manage focus when content is loaded asynchronously — send focus to new content when it is the result of a user action'
        ]
      },
      {
        type: 'heading',
        text: 'AJAX Content Notifications'
      },
      {
        type: 'list',
        items: [
          'If AJAX content is loaded as a direct result of a user action (e.g., clicking a button), notify the user — either by moving focus or using aria-live',
          'If AJAX content is loaded passively (not triggered by the user), notification may not be needed unless the content is urgent',
          'The aria-live container must exist in the DOM before injecting content — dynamically created live regions are unreliable',
          'Use aria-live="polite" for non-urgent updates and aria-live="assertive" only for critical alerts'
        ]
      },
    ],
    relatedTopics: ['aria-live-regions', 'javascript-accessibility', 'aria-overview', 'screen-readers'],
    examTips: [
      'SPAs do not fire page load events — screen readers miss route changes',
      'Three solutions: update document.title, move focus, and/or use aria-live',
      'User-triggered AJAX content should notify the user; passive content may not need notification',
      'aria-live container must exist in the DOM before content is injected',
      'Focus should move to the main heading or main content region after navigation',
      'Browser back/forward navigation must be supported — use the History API correctly'
    ]
  },
  {
    slug: 'javascript-accessibility',
    title: 'JavaScript & Accessibility',
    category: 'ARIA & Semantics',
    applicableTo: ['was'],
    summary: 'JavaScript can improve or damage accessibility. Accessible JavaScript requires progressive enhancement, device-independent event handlers, proper focus management, and correct ARIA state updates.',
    content: [
      {
        type: 'paragraph',
        text: 'Modern assistive technologies fully support JavaScript — there are no inherent barriers. However, JavaScript must be coded with accessibility in mind. The progressive enhancement approach means essential content and functionality are available even when JavaScript is unavailable or fails to load. JavaScript enables accessible dynamic content when used correctly: toggling ARIA states, managing focus, and announcing updates via live regions.'
      },
      {
        type: 'heading',
        text: 'Device-Independent Event Handlers'
      },
      {
        type: 'list',
        items: [
          'onClick on <button> and <a> automatically includes both mouse and keyboard activation — Enter for links, Enter/Space for buttons',
          'onClick on a non-semantic <div> or <span> provides mouse support only — you must add a keydown/keyup handler for Enter/Space and add tabindex="0" for focusability',
          'Avoid device-dependent event handlers like onMouseOver without a keyboard equivalent (onFocus)',
          'Multi-event elements (e.g., hover to expand + click to follow link) are problematic for keyboard, touch, and screen reader users',
          'Functionality must be available via keyboard, mouse, touch, and voice input'
        ]
      },
      {
        type: 'heading',
        text: 'Focus Management'
      },
      {
        type: 'list',
        items: [
          'Focus movement must be predictable and follow user expectations',
          'When a dialog opens, focus should move into the dialog; when it closes, focus returns to the trigger element',
          'When content is added dynamically, add it after the user\'s current focus position — screen reader users move forward, not backward',
          'Use element.focus() to programmatically move focus when needed',
          'Trap focus inside modal dialogs — Tab should cycle within the dialog, not escape to the background page'
        ]
      },
      {
        type: 'heading',
        text: 'Managing State with ARIA'
      },
      {
        type: 'list',
        items: [
          'Toggle ARIA state attributes with JavaScript: aria-expanded, aria-selected, aria-checked, aria-pressed, aria-hidden',
          'Standard HTML controls manage state automatically; custom controls need explicit ARIA state management',
          'Dynamic updates that do not receive focus must be announced via ARIA live regions (aria-live="polite" or role="alert")',
          'The live region container must be present in the DOM at page load, then content is injected dynamically'
        ]
      },
    ],
    relatedTopics: ['spa-accessibility', 'aria-states-properties', 'aria-live-regions', 'standard-vs-custom-controls'],
    examTips: [
      'onClick on semantic elements (button, link) includes keyboard support; on non-semantic elements it does NOT',
      'Progressive enhancement: essential content available without JavaScript',
      'Focus management: dialog opens → focus in; dialog closes → focus returns to trigger',
      'Add dynamic content AFTER the user\'s current focus position',
      'Roving tabindex vs. aria-activedescendant: two strategies for focus within composite widgets',
      'ARIA live region containers must exist in the DOM at page load'
    ]
  },

  // ============================================================
  // WAS-SPECIFIC: STANDARDS & GUIDELINES
  // ============================================================
  {
    slug: 'atag-overview',
    title: 'Authoring Tool Accessibility Guidelines (ATAG)',
    category: 'Standards & Guidelines',
    applicableTo: ['was'],
    summary: 'ATAG 2.0 ensures authoring tools (CMS, WYSIWYG editors, social media platforms) are accessible themselves and help authors produce accessible content.',
    content: [
      {
        type: 'paragraph',
        text: 'The Authoring Tool Accessibility Guidelines (ATAG) 2.0 is a W3C standard that addresses the accessibility of software used to create web content. Authoring tools include CMS platforms (WordPress, Drupal), WYSIWYG editors, site builders, form generators, social media platforms, learning management systems, and any tool that produces web content.'
      },
      {
        type: 'heading',
        text: 'ATAG\'s Two Parts'
      },
      {
        type: 'list',
        items: [
          'Part A: Make the authoring tool user interface accessible — the tool itself must be usable by people with disabilities, including those who use assistive technologies',
          'Part B: Support the production of accessible content — the tool should guide, assist, and automate the creation of accessible output (e.g., prompting for alt text on image upload, producing well-structured markup)'
        ]
      },
      {
        type: 'heading',
        text: 'ATAG Structure'
      },
      {
        type: 'list',
        items: [
          'Like WCAG, ATAG is organized into Principles, Guidelines, and Success Criteria at three conformance levels (A, AA, AAA)',
          'Part A principles cover: perceivable editing views, operable editing views, understandable editing views, and robust editing views',
          'Part B principles cover: automated accessible content production, assisting authors to produce accessible content, and promoting accessibility features',
          'Implementing ATAG 2.0 is the non-normative supporting document (similar to Understanding WCAG)'
        ]
      },
      {
        type: 'heading',
        text: 'Why ATAG Matters for WAS'
      },
      {
        type: 'list',
        items: [
          'Content created by authoring tools often inherits accessibility issues from the tool itself',
          'Understanding ATAG helps evaluate CMS platforms and other content creation tools during procurement',
          'Knowing whether a tool supports accessible output informs remediation strategies — some issues are best fixed at the tool level',
          'While ATAG currently references WCAG 2.0, the new WCAG 2.1/2.2 success criteria can be incorporated into ATAG analysis'
        ]
      },
    ],
    relatedTopics: ['wcag-overview', 'w3c-wai', 'procurement-accessibility'],
    examTips: [
      'Part A = tool UI is accessible; Part B = tool produces accessible content',
      'ATAG is a W3C Recommendation with three conformance levels (A, AA, AAA)',
      'Three WAI guidelines: WCAG (content), ATAG (authoring tools), UAAG (user agents)',
      'ATAG currently references WCAG 2.0 — apply WCAG 2.1/2.2 criteria when evaluating',
      'Examples of authoring tools: CMS, WYSIWYG editors, social media platforms, LMS'
    ]
  },

  // ============================================================
  // WAS-SPECIFIC: TESTING & EVALUATION
  // ============================================================
  {
    slug: 'wcag-em',
    title: 'WCAG-EM: Website Accessibility Conformance Evaluation Methodology',
    category: 'Accessibility Testing',
    applicableTo: ['was'],
    summary: 'WCAG-EM defines a structured 5-step process for evaluating website accessibility: define scope, explore the website, select a representative sample, audit the sample, and report findings.',
    content: [
      {
        type: 'paragraph',
        text: 'The Website Accessibility Conformance Evaluation Methodology (WCAG-EM) 1.0 is a W3C Working Group Note that provides a structured approach for evaluating websites against WCAG. It is especially useful for large websites where testing every page is not feasible. WCAG-EM defines how to select a representative sample and conduct a reliable evaluation.'
      },
      {
        type: 'heading',
        text: 'The 5 Steps of WCAG-EM'
      },
      {
        type: 'list',
        items: [
          'Step 1 — Define the evaluation scope: Identify the website scope (pages/states included), the WCAG conformance target level (A, AA, or AAA), and any specific browser/AT requirements',
          'Step 2 — Explore the website: Identify key pages, key functionality, types of content (forms, tables, multimedia, dynamic widgets), required technologies, and common page templates',
          'Step 3 — Select a representative sample: Choose a structured sample (pages representing key functionality and templates) plus a randomly selected sample; the sample must represent the website\'s full range of content and functionality',
          'Step 4 — Audit the selected sample: Evaluate each page against all applicable WCAG Success Criteria; combine automated testing with manual evaluation; record successes, failures, and not-applicable results',
          'Step 5 — Report the evaluation findings: Aggregate results; make conformance statements for each audited page; note that conformance is claimed per individual page, not for the entire website'
        ]
      },
      {
        type: 'heading',
        text: 'Key Principles'
      },
      {
        type: 'list',
        items: [
          'WCAG conformance is at the individual page level — a strict conformance claim can only apply to pages that were actually tested',
          'If any single Success Criterion fails on a page, that page does not conform',
          'WCAG-EM does not define how to test individual Success Criteria — it defines the evaluation process and sampling methodology',
          'The W3C provides a WCAG-EM Report Tool to assist auditors in generating structured evaluation reports',
          'Sampling conclusions about the overall website are estimates, not strict conformance claims'
        ]
      },
    ],
    relatedTopics: ['wcag-overview', 'testing-fundamentals', 'act-rules', 'automated-testing-tools'],
    examTips: [
      '5 steps: Define Scope → Explore Website → Select Sample → Audit Sample → Report Findings',
      'Conformance is per page — if one SC fails, the page does not conform',
      'Sample includes structured pages (key templates/functions) plus random pages',
      'WCAG-EM defines the evaluation process, not how to test individual SC',
      'A conforming alternate version must be equivalent and itself accessible',
      'Use the WCAG-EM Report Tool to generate structured reports'
    ]
  },
  {
    slug: 'act-rules',
    title: 'ACT Rules (Accessibility Conformance Testing)',
    category: 'Accessibility Testing',
    applicableTo: ['was'],
    summary: 'ACT Rules standardize how individual accessibility tests are defined and executed, improving consistency across automated tools and manual testing methodologies.',
    content: [
      {
        type: 'paragraph',
        text: 'The Accessibility Conformance Testing (ACT) Rules are developed by a W3C community group of accessibility tool vendors, test authors, and experts. ACT Rules aim to harmonize the interpretation of WCAG and WAI-ARIA standards for testing purposes, leading to more consistent results across different tools and evaluators.'
      },
      {
        type: 'heading',
        text: 'What ACT Rules Are'
      },
      {
        type: 'list',
        items: [
          'ACT Rules define specific, reproducible tests for individual aspects of WCAG Success Criteria',
          'Each rule checks for a single type of failure — a Success Criterion typically has multiple ACT Rules covering its different aspects',
          'Rules are primarily intended for tool developers and test methodology authors, not directly for content creators',
          'ACT Rules are non-normative W3C resources — they are NOT required for determining WCAG conformance'
        ]
      },
      {
        type: 'heading',
        text: 'ACT Rule Structure'
      },
      {
        type: 'list',
        items: [
          'Applicability: defines which page elements the rule applies to (e.g., "all img elements with an alt attribute")',
          'Expectations: defines what must be true for the element to pass the rule',
          'Assumptions: states assumptions that affect the applicability or expectation',
          'Each rule maps to one or more WCAG Success Criteria',
          'Test cases: each rule includes passed, failed, and inapplicable example code'
        ]
      },
      {
        type: 'heading',
        text: 'Limitations of ACT Rules'
      },
      {
        type: 'list',
        items: [
          'Passing an ACT Rule does NOT mean the corresponding SC is fully met — rules only check one specific aspect',
          'Failing an ACT Rule means the content has a specific issue, but further manual review may still be needed for context',
          'ACT Rules cannot assess content quality (e.g., whether alt text is meaningful, whether headings are descriptive)',
          'Automated tools implement ACT Rules, but no tool covers all rules — and some rules require semi-automated or manual testing'
        ]
      },
    ],
    relatedTopics: ['wcag-em', 'automated-testing-tools', 'testing-fundamentals', 'wcag-overview'],
    examTips: [
      'ACT Rules check for specific failures — passing does NOT equal full SC conformance',
      'Non-normative: NOT required for determining WCAG conformance',
      'Primarily for tool developers and test methodology authors',
      'Each rule has: applicability, expectations, assumptions, and test cases',
      'No automated tool covers all ACT Rules — manual testing is always needed',
      'ACT Rules standardize test interpretation for more consistent results across tools'
    ]
  },
  {
    slug: 'accessibility-qa-lifecycle',
    title: 'Accessibility QA in the Development Lifecycle',
    category: 'Accessibility Testing',
    applicableTo: ['was'],
    summary: 'Accessibility must be integrated throughout the entire product lifecycle — from planning through design, development, and testing — not bolted on at the end.',
    content: [
      {
        type: 'paragraph',
        text: 'Accessibility quality assurance is most effective when integrated into every phase of the product lifecycle: Plan, Create, Test (PCT). Discovering and fixing accessibility issues early (shift-left testing) is far more cost-effective than remediating after release. Every team member — from management to designers, developers, content creators, and QA — has a role in delivering an accessible product.'
      },
      {
        type: 'heading',
        text: 'Plan Phase'
      },
      {
        type: 'list',
        items: [
          'Include people with disabilities in user research',
          'Define the target conformance level and applicable standards (WCAG 2.2, EN 301 549)',
          'Include accessibility in the "Definition of Done" for all stories and tasks',
          'Assign accessibility responsibilities to team members',
          'Budget for accessibility training, expert consultation, and user testing with people with disabilities',
          'Review the development environment: coding libraries, component libraries, and automated checks'
        ]
      },
      {
        type: 'heading',
        text: 'Create Phase'
      },
      {
        type: 'list',
        items: [
          'Implement accessibility in information architecture and UX design',
          'Address user needs including people with disabilities in all design decisions',
          'Developers ensure code meets accessibility requirements using accessible patterns and components',
          'Content creators produce accessible content: structured headings, meaningful alt text, descriptive links and labels',
          'Design reviews should include accessibility checkpoints'
        ]
      },
      {
        type: 'heading',
        text: 'Test Phase'
      },
      {
        type: 'list',
        items: [
          'Combine automated and manual testing — automated tools catch only 30-50% of issues',
          'Test with assistive technologies (screen readers, keyboard-only, magnification)',
          'Follow the applicable standard consistently throughout iterative development',
          'Use a standard report structure for evaluation findings',
          'Ensure accessibility bugs are fixed, reviewed, and do not regress',
          'Track and communicate accessibility progress over time'
        ]
      },
      {
        type: 'heading',
        text: 'Agile vs. Waterfall'
      },
      {
        type: 'list',
        items: [
          'Agile: accessibility is integrated into each sprint — test early and often; include a11y criteria in story acceptance requirements; iterate based on testing feedback',
          'Waterfall: testing happens at the end of development — if issues are found late, they are more expensive and time-consuming to fix; tests may be rushed or omitted under time pressure',
          'Agile is generally more effective for accessibility because it enables early discovery and iterative improvement'
        ]
      },
    ],
    relatedTopics: ['testing-fundamentals', 'automated-testing-tools', 'wcag-em', 'remediation-prioritization'],
    examTips: [
      'Plan–Create–Test cycle: accessibility is part of every phase',
      'Shift-left: find issues early when they are cheaper to fix',
      'Every team member has a role in accessibility — not just QA',
      'Automated tools catch 30-50% of issues — manual testing always required',
      'Agile: accessibility in every sprint and Definition of Done',
      'Waterfall: late-stage testing is risky — issues are more expensive to fix'
    ]
  },

  // ============================================================
  // WAS-SPECIFIC: REMEDIATION
  // ============================================================
  {
    slug: 'remediation-prioritization',
    title: 'Remediation Prioritization & Severity',
    category: 'Remediation',
    applicableTo: ['was'],
    summary: 'Not all accessibility issues are equally critical. Prioritize by user impact, frequency of occurrence, legal risk, and cost-benefit — fix blocking issues on high-traffic flows first.',
    content: [
      {
        type: 'paragraph',
        text: 'Accessibility audits often reveal many issues that cannot all be fixed at once. Effective remediation requires prioritizing issues based on their severity and impact. The goal is to allocate limited resources to maximize accessibility improvement, especially when the website or app is already in production.'
      },
      {
        type: 'heading',
        text: 'Prioritization Factors'
      },
      {
        type: 'list',
        items: [
          'User impact: High-impact issues block users entirely (e.g., no keyboard access, CAPTCHAs without alternatives, content hidden from screen readers). Medium-impact issues make tasks difficult but not impossible. Low-impact issues cause minor inconvenience',
          'Frequency: Issues in templates, component libraries, or design systems multiply across the entire site — fixing them once fixes many pages. EN 301 549 Annex B maps requirements to user needs, helping determine impact breadth',
          'Key content and tasks: Prioritize pages and flows with the highest traffic — often 20% of pages receive 90% of traffic. Critical user flows like registration, search, and checkout should be fixed first',
          'Cost-benefit: Some fixes are quick and high-impact (adding alt text, fixing form labels); others require major redesign with less immediate user benefit',
          'Legal risk: Issues violating legally mandated standards (e.g., Level A or AA failures) carry higher legal risk than best-practice recommendations',
          'WCAG conformance level: Level A failures are generally more severe than AA, which are more severe than AAA recommendations'
        ]
      },
      {
        type: 'heading',
        text: 'Prioritization Strategy'
      },
      {
        type: 'list',
        items: [
          'Fix high-impact issues on high-traffic pages first',
          'Address template-level and component-library issues early — they affect many pages at once',
          'Tackle low-effort, high-impact fixes immediately (e.g., missing alt text, missing form labels, color contrast)',
          'Plan longer-term redesign for systemic issues that require architectural changes',
          'Establish a process for avoiding new barriers — integrate accessibility into the Definition of Done'
        ]
      },
    ],
    relatedTopics: ['remediation-strategies', 'wcag-overview', 'wcag-em', 'accessibility-qa-lifecycle'],
    examTips: [
      'Prioritize: high user impact + high traffic + low effort = fix first',
      'Template/component-level issues multiply across the site — fix early',
      'Level A failures are generally more severe than AA',
      'EN 301 549 Annex B maps requirements to user needs for impact analysis',
      '20% of pages often receive 90% of traffic — focus remediation there',
      'Establish processes to prevent new barriers, not just fix old ones'
    ]
  },
  {
    slug: 'remediation-strategies',
    title: 'Remediation Strategies',
    category: 'Remediation',
    applicableTo: ['was'],
    summary: 'Remediation ranges from quick fixes (adding alt text, fixing labels) to complete redesign. Choose the approach based on severity, code complexity, available resources, and long-term sustainability.',
    content: [
      {
        type: 'paragraph',
        text: 'Recommending effective remediation strategies requires understanding how to create accessible content (Domain 1), identifying issues accurately (Domain 2), and choosing appropriate fixes for the specific context. The approach depends on the severity of defects, code complexity, available resources, and the need for long-term sustainability.'
      },
      {
        type: 'heading',
        text: 'Fixing vs. Redesign'
      },
      {
        type: 'list',
        items: [
          'Fixing: targeted repairs to specific issues without changing the overall design — appropriate for localized, minor defects',
          'Redesign: rebuilding a component or page section from scratch — necessary when defects are widespread, deeply embedded in the architecture, or in templates/design systems',
          'Hybrid approach: immediately fix critical blockers while planning a longer-term redesign for systemic issues',
          'Consider: is the current code maintainable? Older, complex code may make fixing harder and more fragile than rewriting',
          'A rewrite can incorporate current best practices and be more future-proof, but requires more resources'
        ]
      },
      {
        type: 'heading',
        text: 'Failures vs. Best Practices'
      },
      {
        type: 'list',
        items: [
          'A conformance failure clearly violates a WCAG Success Criterion — it must be fixed to achieve conformance',
          'A best practice issue makes the experience suboptimal but does not technically fail a specific SC — it should still be recommended for better usability',
          'Auditors must clearly communicate the distinction: "This fails SC 1.1.1" vs. "This is a usability concern but not a WCAG failure"',
          'WCAG Sufficient Techniques are informative, not normative — there may be valid approaches not documented as techniques'
        ]
      },
      {
        type: 'heading',
        text: 'Common Remediation Patterns'
      },
      {
        type: 'list',
        items: [
          'Missing alt text: add descriptive alt for informative images; alt="" for decorative images',
          'Missing form labels: associate <label> elements via for/id or wrapping; use aria-label for icon-only controls',
          'Keyboard access: ensure all interactive elements are reachable and operable via keyboard; remove tabindex values greater than 0',
          'Color contrast: adjust foreground/background colors to meet 4.5:1 (text) or 3:1 (large text, UI components) ratios',
          'Heading structure: ensure logical heading hierarchy (h1 → h2 → h3); do not skip levels for visual styling',
          'ARIA patches: add ARIA roles, states, and properties to existing elements without full refactoring — use as a bridge to a proper semantic rewrite',
          'Focus management: add visible focus indicators; manage focus on dynamic content changes'
        ]
      },
    ],
    relatedTopics: ['remediation-prioritization', 'semantic-html', 'aria-overview', 'form-accessibility', 'color-contrast'],
    examTips: [
      'Conformance failure = violates a WCAG SC; best practice = improves UX but not a formal failure',
      'ARIA patches can fix issues without redesign, but semantic HTML is preferred long-term',
      'Hybrid approach: fix critical blockers immediately, plan redesign for systemic issues',
      'Communicate clearly: which SC fails, where on the page, and how to fix it',
      'Sufficient Techniques are informative, not normative — other valid approaches exist',
      'Consider code complexity and maintainability when choosing fix vs. redesign'
    ]
  },

  // ============================================================
  // WAS-SPECIFIC: USER STRATEGIES
  // ============================================================
  {
    slug: 'disability-user-strategies',
    title: 'How Users with Disabilities Navigate the Web',
    category: 'Assistive Technology',
    applicableTo: ['was'],
    summary: 'Different disability groups use distinct strategies and assistive technologies to navigate the web. Understanding these strategies is essential for creating, testing, and remediating accessible content.',
    content: [
      {
        type: 'paragraph',
        text: 'People with disabilities use a wide range of strategies, assistive technologies, and adaptive configurations to access web content. Understanding these approaches is fundamental to the WAS exam — it informs how you create accessible content, what you test for, and how you prioritize remediation. Strategies vary considerably even within a single disability group based on individual experience and technology expertise.'
      },
      {
        type: 'heading',
        text: 'Users Without Vision (Blind)'
      },
      {
        type: 'list',
        items: [
          'Primary AT: screen readers (JAWS, NVDA on Windows; VoiceOver on macOS/iOS; TalkBack on Android)',
          'Navigation strategies: jump by headings, landmarks, links, form controls, or tables using screen reader keyboard shortcuts',
          'Screen readers present content linearly following DOM order — visual layout is irrelevant',
          'Modes: Browse/Read mode (navigate by element), Forms mode (type in form fields), Application mode (widget keyboard patterns)',
          'Mobile: completely different gesture-based interaction model — swipe right/left to move forward/back, double-tap to activate',
          'Refreshable Braille displays may be used for reading output instead of or alongside speech'
        ]
      },
      {
        type: 'heading',
        text: 'Users with Low Vision'
      },
      {
        type: 'list',
        items: [
          'Strategies range from browser zoom (moderate vision loss) to dedicated magnification software (severe vision loss)',
          'Magnification software: ZoomText, Fusion (JAWS + magnification), built-in OS magnifiers — up to 60x (6000%) zoom',
          'Often combine magnification with screen reader speech output for orientation and reading longer text',
          'Orientation challenges at high magnification — users zoom out for overview, zoom in for detail',
          'May use high contrast modes (Windows High Contrast Mode), custom colors, enlarged cursors, and modified focus indicators',
          'Focus tracking is important: the visible portion of content must follow keyboard and pointer focus'
        ]
      },
      {
        type: 'heading',
        text: 'Users with Motor Disabilities'
      },
      {
        type: 'list',
        items: [
          'Keyboard-only users: navigate sequentially with Tab/Shift+Tab; cannot jump to headings or landmarks like screen reader users',
          'Switch device users: simulate Tab navigation with single switch input; large, clearly visible targets are essential',
          'Voice control users (Dragon, Voice Control): say "Click [label text]" to activate controls — the visible label must match the accessible name',
          'Head pointers, mouth sticks, eye trackers: need large click targets and adequate spacing between targets',
          'Skip navigation links are critical since keyboard-only users cannot navigate by headings or landmarks',
          'Prediction and autofill reduce the number of keystrokes needed for text input'
        ]
      },
      {
        type: 'heading',
        text: 'Users with Cognitive Disabilities'
      },
      {
        type: 'list',
        items: [
          'This is a very diverse group: ADHD, dyslexia, autism, memory loss, intellectual disabilities, neurological conditions',
          'Clear, simple language and consistent, predictable navigation are essential',
          'May use text-to-speech (not full screen readers) to help with reading comprehension',
          'Custom stylesheets, ad blockers, and screen masking tools to reduce distractions',
          'Autocomplete attributes on form fields help users fill in data with less cognitive effort',
          'Content alternatives (images, video, audio) alongside text help users who struggle with text-only content'
        ]
      },
      {
        type: 'heading',
        text: 'Users with Auditory Disabilities'
      },
      {
        type: 'list',
        items: [
          'Do not typically use assistive technology — rely on visual alternatives for audio content',
          'Pre-recorded audio: transcripts are required (SC 1.2.1 Level A)',
          'Pre-recorded and live video: captions are required (SC 1.2.2 Level A, SC 1.2.4 Level AA)',
          'Deaf sign language users: written text can be difficult — sign language videos are helpful (SC 1.2.6, Level AAA)',
          'Automatic captions must be reviewed and corrected — AI-generated captions contain errors',
          'Closed captions (can be shown/hidden) are preferred over open captions (burned in) because they are customizable'
        ]
      },
    ],
    relatedTopics: ['screen-readers', 'switch-devices', 'visual-disabilities', 'cognitive-disabilities', 'mobility-disabilities', 'auditory-disabilities'],
    examTips: [
      'Blind: screen readers, navigate by headings/landmarks/links, content is linear per DOM order',
      'Low vision: magnification + possibly screen reader, zoom out/in for orientation, need focus tracking',
      'Motor: keyboard-only users Tab sequentially — cannot jump by headings like SR users; voice control needs matching labels',
      'Cognitive: simple language, consistent navigation, text-to-speech (not full SR), autocomplete for forms',
      'Deaf: captions, transcripts, sign language videos; closed captions preferred over open; fix auto-caption errors',
      'Screen reader modes: Browse/Read mode, Forms mode, Application mode'
    ]
  },

  // ============================================================
  // TEST-TAKING STRATEGIES
  // ============================================================
  {
    slug: 'test-day-strategy',
    title: 'In-Test Strategy',
    category: 'Test-Taking Strategies',
    applicableTo: ['cpacc', 'was'],
    summary: 'How to approach questions during the exam: answering, flagging, and using the test interface tools.',
    content: [
      {
        type: 'paragraph',
        text: 'The IAAP certification exams are multiple-choice with no penalty for wrong answers. That single fact should shape your entire approach: an answer is always better than a blank. Even a random guess gives you a chance, while a blank is a guaranteed zero.'
      },
      {
        type: 'heading',
        text: 'First Pass: Answer Everything'
      },
      {
        type: 'paragraph',
        text: 'Work through every question on your first pass. For questions you feel confident about, select your answer and move on. For questions you are unsure about, select your best guess and flag it for review. The key is that every question has an answer before you loop back.'
      },
      {
        type: 'paragraph',
        text: 'As you flag questions, make a mental note of what information would help you answer them. Later questions sometimes contain context or phrasing that sheds light on earlier ones. By knowing what you are looking for, you can spot those clues when they appear.'
      },
      {
        type: 'heading',
        text: 'Using Strikethrough and Highlight'
      },
      {
        type: 'paragraph',
        text: 'The testing interface gives you two markup tools: strikethrough and highlight. Used deliberately, they create a decision hierarchy that helps you revisit flagged questions efficiently.'
      },
      {
        type: 'list',
        items: [
          'Strikethrough — options you have ruled out. Cross them off so they stop competing for your attention.',
          'Unmarked — options that are possible but not your pick.',
          'Highlight — your second-best option. If you come back and reconsider, this is the first alternative to evaluate.',
          'Selected answer — your current best guess.'
        ]
      },
      {
        type: 'paragraph',
        text: 'This gives you four tiers of confidence at a glance. When you return to a flagged question, the markup tells you exactly where your thinking was, so you can pick up without re-reading everything from scratch.'
      },
      {
        type: 'callout',
        text: 'Always commit an answer — even on questions you have flagged. Highlight marks a runner-up, not a replacement for answering. If you run out of review time, every question already has your best guess locked in.'
      }
    ],
    relatedTopics: ['test-taking-science', 'study-timeline'],
    examTips: [
      'No penalty for guessing — never leave a question blank',
      'Flag and revisit, but always select an answer on the first pass',
      'Use strikethrough to eliminate, highlight to mark your second choice'
    ]
  },
  {
    slug: 'study-timeline',
    title: 'Preparing for the Exam: A Timeline',
    category: 'Test-Taking Strategies',
    applicableTo: ['cpacc', 'was'],
    summary: 'A practical schedule for the month, week, and day before your IAAP certification exam.',
    content: [
      {
        type: 'paragraph',
        text: 'The CPACC and WAS exams cover a broad body of knowledge. Spreading your preparation over several weeks helps far more than a last-minute cram session. Below is a suggested timeline — adjust the details to fit your schedule, but respect the overall arc of learn, practice, consolidate, rest.'
      },
      {
        type: 'heading',
        text: '3–4 Weeks Before'
      },
      {
        type: 'list',
        items: [
          'Take the IAAP-provided preparatory course for your certification (CPACC or WAS). This is the single highest-value study activity.',
          'Read through the Body of Knowledge (BoK) at least once, even sections you think you already know.',
          'Set a realistic weekly study budget. Even 4–6 focused hours per week adds up quickly over a month.',
          'Start practicing with POURcast to identify your weak domains early.'
        ]
      },
      {
        type: 'heading',
        text: '1 Week Before'
      },
      {
        type: 'list',
        items: [
          'Practice under exam-like conditions: timed sessions, no notes, no breaks mid-quiz.',
          'Review your weakest domains using POURcast\'s score history — focus effort where it matters most.',
          'Stop adding brand-new material. This week is for consolidation, not discovery.',
          'Re-read any BoK sections that still feel shaky.'
        ]
      },
      {
        type: 'heading',
        text: 'Day Before'
      },
      {
        type: 'list',
        items: [
          'Light review only: skim your notes or do a short practice set. No cramming.',
          'Confirm your exam logistics: valid ID, test center location or remote-proctor software setup, scheduled start time.',
          'Lay out everything you need so the morning is friction-free.'
        ]
      },
      {
        type: 'heading',
        text: 'Day Of'
      },
      {
        type: 'list',
        items: [
          'Arrive or log in early. Give yourself a buffer for unexpected issues.',
          'Do not study new material. Trust the preparation you have already done.'
        ]
      },
      {
        type: 'callout',
        text: 'Do not underestimate the exam. The passing threshold is high and the questions are scenario-based, not simple recall. A structured study plan over several weeks is far more effective than raw hours crammed into a few days.'
      }
    ],
    relatedTopics: ['test-day-readiness', 'test-day-strategy'],
    examTips: [
      'The IAAP preparatory course is the single best study resource, take it if you can',
      'Identify weak domains early and target your study time there',
      'The last week should be consolidation, not new material'
    ]
  },
  {
    slug: 'test-day-readiness',
    title: 'Test-Day Readiness',
    category: 'Test-Taking Strategies',
    applicableTo: ['cpacc', 'was'],
    summary: 'Things within your control on test day: sleep, nutrition, logistics, and reducing avoidable friction.',
    content: [
      {
        type: 'paragraph',
        text: 'You cannot control what questions appear on the exam, but you can control the conditions under which you take it. The suggestions below are about reducing avoidable friction so you can focus on the test itself. They are not rules, so do what works for you.'
      },
      {
        type: 'heading',
        text: 'Sleep'
      },
      {
        type: 'paragraph',
        text: 'One good night of sleep does more for test performance than one extra night of studying. Sleep is when your brain consolidates what you learned during the day into long-term memory. Research consistently shows that sleep-deprived test-takers perform worse on recall and complex reasoning — exactly the skills the CPACC and WAS exams test.'
      },
      {
        type: 'heading',
        text: 'Food and Hydration'
      },
      {
        type: 'paragraph',
        text: 'Eat something you normally eat. Test day is not the day for dietary experiments. If you usually drink coffee, drink coffee. If you usually skip breakfast, that is fine too. The goal is a baseline your body already knows, not an optimized performance meal.'
      },
      {
        type: 'heading',
        text: 'Reducing Friction'
      },
      {
        type: 'list',
        items: [
          'Block your calendar for an hour before and after the exam to give yourself a buffer.',
          'If testing remotely: confirm your proctor software works, test your webcam and microphone the day before, and arrange a quiet space.',
          'If testing at a center: know exactly where it is and how long the commute takes. Arrive early.',
          'Have your valid ID ready. Check IAAP\'s requirements for what forms of identification are accepted.'
        ]
      },
      {
        type: 'callout',
        text: 'These are suggestions based on what generally helps people perform their best. Your situation is unique — adapt freely. The only non-negotiable is showing up on time with valid ID.'
      },
      {
        type: 'sources',
        items: [
          { text: 'Walker, M. (2017). Why We Sleep — summary of sleep and memory consolidation research', url: 'https://www.simonandschuster.com/books/Why-We-Sleep/Matthew-Walker/9781501144325' },
          { text: 'Diekelmann & Born (2010). The memory function of sleep. Nature Reviews Neuroscience', url: 'https://doi.org/10.1038/nrn2762' }
        ]
      }
    ],
    relatedTopics: ['study-timeline', 'test-day-strategy'],
    examTips: [
      'Prioritize sleep over last-minute studying the night before',
      'Stick to your normal routine for food and caffeine',
      'Test your remote-proctor setup the day before if taking the exam online'
    ]
  },
  {
    slug: 'test-taking-science',
    title: 'Evidence-Based Test-Taking Techniques',
    category: 'Test-Taking Strategies',
    applicableTo: ['cpacc', 'was'],
    summary: 'Research-backed strategies for answering multiple-choice questions and managing your time.',
    content: [
      {
        type: 'paragraph',
        text: 'Multiple-choice exams are their own skill, separate from knowing the material. The techniques below are supported by cognitive-science research and apply to any well-constructed exam, including the CPACC and WAS.'
      },
      {
        type: 'heading',
        text: 'Read the Stem First'
      },
      {
        type: 'paragraph',
        text: 'Read the question stem (the part before the answer options) carefully before looking at the choices. Try to formulate an answer in your head first. This reduces the priming effect of distractor options, which are specifically designed to look plausible and pull you away from what you actually know.'
      },
      {
        type: 'heading',
        text: 'Eliminate, Then Choose'
      },
      {
        type: 'paragraph',
        text: 'For "best answer" questions — where multiple options seem partially correct — start by eliminating what you know is wrong. This narrows your field and improves your odds even when you are not sure of the right answer. Two eliminations on a four-option question double your chances from 25% to 50%.'
      },
      {
        type: 'heading',
        text: 'Watch for Absolute Language'
      },
      {
        type: 'paragraph',
        text: 'Options containing words like "always," "never," "all," or "none" are often (but not always) incorrect. Real-world accessibility principles tend to involve context and nuance, which makes absolute statements unreliable. Treat this as a soft signal, not a rule — some absolutes are genuinely correct.'
      },
      {
        type: 'heading',
        text: 'Changing Your Answer Is Fine'
      },
      {
        type: 'paragraph',
        text: 'There is a persistent belief that your first instinct is usually right and you should not change answers. Research tells a different story: when test-takers change an answer, they change from wrong to right about twice as often as right to wrong. The key qualifier is "when you have a reason." If new information or a fresh reading gives you a genuine reason to switch, trust that reasoning. Do not change answers on a vague hunch.'
      },
      {
        type: 'heading',
        text: 'Time Management'
      },
      {
        type: 'paragraph',
        text: 'Divide the total exam time by the number of questions to get a rough per-question budget. Set a mental checkpoint at the halfway mark: if you are past halfway on questions but have used less than half your time, you are in good shape. If not, pick up the pace on your first pass and save difficult questions for review.'
      },
      {
        type: 'callout',
        text: 'These techniques complement your knowledge — they do not replace it. A well-prepared candidate who also tests strategically will outperform one who relies on either preparation or technique alone.'
      },
      {
        type: 'sources',
        items: [
          { text: 'Kruger, Wirtz, & Miller (2005). Counterfactual thinking and the first instinct fallacy. Journal of Personality and Social Psychology', url: 'https://doi.org/10.1037/0022-3514.88.5.725' },
          { text: 'Dunlosky et al. (2013). Improving students\' learning with effective learning techniques. Psychological Science in the Public Interest', url: 'https://doi.org/10.1177/1529100612453266' },
          { text: 'Butler & Roediger (2008). Feedback enhances the positive effects and reduces the negative effects of multiple-choice testing. Memory & Cognition', url: 'https://doi.org/10.3758/MC.36.3.604' }
        ]
      }
    ],
    relatedTopics: ['test-day-strategy', 'test-day-readiness'],
    examTips: [
      'Formulate your answer before reading the options to avoid distractor priming',
      'Eliminating two wrong options doubles your odds on a four-choice question',
      'Changing an answer with a reason is right more often than wrong — ignore the "first instinct" myth'
    ]
  }
];

// ============================================================
// UTILITY FUNCTIONS
// ============================================================

/**
 * Find a topic by its slug.
 * @param {string} slug - The topic slug to look up
 * @returns {object|undefined} The matching topic object, or undefined if not found
 */
export function getTopicBySlug(slug) {
  return topics.find(topic => topic.slug === slug);
}

/**
 * Get all topics within a given category.
 * @param {string} category - The category name to filter by
 * @returns {object[]} Array of topic objects in that category
 */
export function getTopicsByCategory(category) {
  return topics.filter(topic => topic.category === category);
}

/**
 * Get a list of all unique category names.
 * @returns {string[]} Array of unique category names
 */
export function getAllCategories() {
  return [...new Set(topics.map(topic => topic.category))];
}
