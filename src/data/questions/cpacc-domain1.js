export const domain1 = {
  id: 'domain1',
  courseId: 'cpacc',
  title: 'Disabilities, Barriers & Assistive Technologies',
  iconName: 'user',
  color: 'bg-blue-600',
  description: 'Models of disability, types of disabilities, barriers, and assistive technologies.',
  questions: [
    // =============================================
    // DISABILITY MODELS (101-120)
    // =============================================
    {
      id: 101,
      question: "Which model of disability views disability primarily as a health condition that needs to be treated or cured by medical professionals?",
      options: [
        "Medical model",
        "Social model",
        "Human rights model",
        "Charity model"
      ],
      correct: 0,
      explanation: "The medical model frames disability as an individual deficiency or pathology that requires medical intervention, treatment, or cure. It focuses on 'fixing' the person.",
      wrongExplanations: {
        1: "The social model views disability as caused by societal barriers, not individual medical conditions.",
        2: "The human rights model focuses on disability as a human rights issue, emphasizing dignity and equality rather than medical treatment.",
        3: "The charity model views people with disabilities as objects of pity who need help, but does not specifically frame disability as a medical condition requiring treatment."
      },
      topicLinks: ['medical-model'],
      difficulty: 'easy',
      tags: ['disability-models']
    },
    {
      id: 102,
      question: "According to the social model of disability, what is the primary cause of disability?",
      options: [
        "Genetic or biological factors within the individual",
        "Barriers created by society, including attitudes and environment",
        "Lack of charitable support and funding",
        "Insufficient medical research and treatment options"
      ],
      correct: 1,
      explanation: "The social model holds that disability is caused by the way society is organized — through physical barriers, attitudes, and institutional practices — rather than by the individual's impairment.",
      wrongExplanations: {
        0: "Focusing on genetic or biological factors is characteristic of the medical model, not the social model.",
        2: "Framing disability in terms of charitable support aligns with the charity model, not the social model.",
        3: "Emphasizing insufficient medical research reflects the medical model's focus on treatment and cure."
      },
      topicLinks: ['social-model'],
      difficulty: 'easy',
      tags: ['disability-models']
    },
    {
      id: 103,
      question: "A company redesigns its website to be accessible rather than expecting users with disabilities to adapt. Which model of disability does this BEST reflect?",
      options: [
        "Medical model",
        "Charity model",
        "Social model",
        "Economic model"
      ],
      correct: 2,
      explanation: "The social model places responsibility on society (including organizations) to remove barriers. Redesigning the website to be accessible reflects the social model's principle that the environment should adapt, not the individual.",
      wrongExplanations: {
        0: "The medical model would focus on the individual's impairment rather than changing the environment.",
        1: "The charity model would frame the accessible redesign as an act of generosity rather than an obligation to remove barriers.",
        3: "The economic model focuses on the economic impact of disability and cost-benefit of inclusion, not specifically on environmental adaptation."
      },
      topicLinks: ['social-model'],
      difficulty: 'medium',
      tags: ['disability-models', 'scenario']
    },
    {
      id: 104,
      question: "Which model of disability combines elements of both the medical and social models, recognizing that disability results from the interaction between health conditions and contextual factors?",
      options: [
        "Human rights model",
        "Functional solutions model",
        "Biopsychosocial model",
        "Social identity model"
      ],
      correct: 2,
      explanation: "The biopsychosocial model, adopted by the WHO's International Classification of Functioning (ICF), integrates biological, psychological, and social factors. It recognizes that disability arises from the interaction between a person's health condition and their environment.",
      wrongExplanations: {
        0: "The human rights model focuses on disability as a human rights issue, emphasizing legal protections and dignity rather than integrating medical and social perspectives.",
        1: "The functional solutions model focuses on practical, pragmatic solutions to accessibility challenges rather than explaining the nature of disability.",
        3: "The social identity model views disability as an identity and source of community pride, not as a combination of medical and social factors."
      },
      topicLinks: ['biopsychosocial-model'],
      difficulty: 'easy',
      tags: ['disability-models']
    },
    {
      id: 105,
      question: "The UN Convention on the Rights of Persons with Disabilities (CRPD) is most closely aligned with which model of disability?",
      options: [
        "Medical model",
        "Economic model",
        "Charity model",
        "Human rights model"
      ],
      correct: 3,
      explanation: "The CRPD is grounded in the human rights model of disability, which recognizes that people with disabilities are entitled to the same rights as everyone else and that society must ensure these rights are protected.",
      wrongExplanations: {
        0: "The medical model focuses on diagnosis and cure, not on rights and legal protections.",
        1: "The economic model focuses on the economic impact and productivity of people with disabilities, not on fundamental human rights.",
        2: "The charity model treats people with disabilities as objects of pity, which is the opposite of the rights-based approach of the CRPD."
      },
      topicLinks: ['human-rights-model'],
      difficulty: 'medium',
      tags: ['disability-models']
    },
    {
      id: 106,
      question: "A person who is blind needs to access a website. The functional solutions model would MOST likely focus on:",
      options: [
        "Researching a cure for the person's blindness",
        "Providing financial assistance for the person",
        "Ensuring the website works with screen reader technology",
        "Advocating for anti-discrimination legislation"
      ],
      correct: 2,
      explanation: "The functional solutions model is pragmatic and focuses on practical solutions that enable people with disabilities to accomplish tasks. Ensuring screen reader compatibility directly addresses the functional barrier.",
      wrongExplanations: {
        0: "Researching a cure reflects the medical model's focus on treating the condition.",
        1: "Providing financial assistance aligns with the charity or economic model, not the functional solutions model.",
        3: "Advocating for legislation aligns with the human rights model rather than the practical, solutions-oriented functional model."
      },
      topicLinks: ['functional-solutions-model'],
      difficulty: 'medium',
      tags: ['disability-models', 'scenario']
    },
    {
      id: 107,
      question: "Which model of disability views people with disabilities primarily as recipients of pity and goodwill, often positioning them as helpless?",
      options: [
        "Social model",
        "Charity model",
        "Economic model",
        "Biopsychosocial model"
      ],
      correct: 1,
      explanation: "The charity model frames people with disabilities as unfortunate individuals who need help and compassion. It positions non-disabled people as benefactors and can reinforce dependency and pity.",
      wrongExplanations: {
        0: "The social model empowers people with disabilities by placing responsibility on society to remove barriers, not positioning them as objects of pity.",
        2: "The economic model focuses on the economic costs and benefits of disability and inclusion, not on pity or goodwill.",
        3: "The biopsychosocial model takes a holistic view combining medical, psychological, and social factors without characterizing people as helpless."
      },
      topicLinks: ['charity-model'],
      difficulty: 'easy',
      tags: ['disability-models']
    },
    {
      id: 108,
      question: "The economic model of disability is PRIMARILY concerned with:",
      options: [
        "The dignity and rights of individuals with disabilities",
        "The impact of disability on a person's ability to work and contribute economically, and the cost-benefit of accommodations",
        "Creating community and cultural identity around disability",
        "Diagnosing and treating impairments through medical intervention"
      ],
      correct: 1,
      explanation: "The economic model views disability through the lens of economic impact — assessing productivity, workforce participation, costs of accommodation, and the economic benefits of inclusion.",
      wrongExplanations: {
        0: "Focusing on dignity and rights aligns with the human rights model, not the economic model.",
        2: "Creating community and cultural identity is central to the social identity/cultural model.",
        3: "Diagnosing and treating impairments describes the medical model."
      },
      topicLinks: ['economic-model'],
      difficulty: 'easy',
      tags: ['disability-models']
    },
    {
      id: 109,
      question: "A member of the Deaf community who capitalizes 'Deaf' and views deafness as a cultural identity rather than a disability is BEST aligned with which model?",
      options: [
        "Medical model",
        "Social identity/cultural model",
        "Biopsychosocial model",
        "Functional solutions model"
      ],
      correct: 1,
      explanation: "The social identity/cultural model views disability (or in this case, Deafness) as a source of identity, community, and pride. Capital-D 'Deaf' specifically denotes cultural identity and belonging to the Deaf community.",
      wrongExplanations: {
        0: "The medical model would classify deafness as a hearing impairment to be treated, the opposite of embracing it as an identity.",
        2: "The biopsychosocial model integrates medical and social perspectives but does not specifically frame disability as a cultural identity.",
        3: "The functional solutions model focuses on practical accommodations rather than cultural identity."
      },
      topicLinks: ['social-identity-model', 'deaf-culture'],
      difficulty: 'medium',
      tags: ['disability-models', 'scenario']
    },
    {
      id: 110,
      question: "What is a KEY criticism of the medical model of disability?",
      options: [
        "It is too expensive to implement",
        "It places the burden on the individual and can lead to stigma by framing disability as a deficiency",
        "It ignores the biological reality of impairments",
        "It gives too much power to people with disabilities"
      ],
      correct: 1,
      explanation: "A major criticism of the medical model is that it locates the 'problem' within the individual, which can lead to stigmatization, reduced agency, and a focus on 'fixing' people rather than addressing societal barriers.",
      wrongExplanations: {
        0: "Cost of implementation is not a primary criticism of the medical model; this concern is more relevant to the economic model's perspective.",
        2: "The medical model actually centers on biological reality — this criticism applies more to the social model, which some argue underestimates the role of impairment.",
        3: "The medical model is actually criticized for giving too little agency to people with disabilities, not too much."
      },
      topicLinks: ['medical-model'],
      difficulty: 'medium',
      tags: ['disability-models']
    },
    {
      id: 111,
      question: "What is a KEY criticism of the social model of disability?",
      options: [
        "It focuses too much on medical treatment",
        "It relies on pity and charity",
        "It can minimize the real impact of pain, fatigue, and impairment on daily life",
        "It only applies to physical disabilities"
      ],
      correct: 2,
      explanation: "A common criticism of the social model is that by focusing entirely on societal barriers, it can overlook or minimize the genuine physical pain, fatigue, and functional limitations that some impairments cause, regardless of social context.",
      wrongExplanations: {
        0: "Focusing too much on medical treatment is a criticism of the medical model, not the social model.",
        1: "Relying on pity and charity describes the charity model, not the social model.",
        3: "The social model applies to all disability types; this is not a recognized criticism of the model."
      },
      topicLinks: ['social-model'],
      difficulty: 'medium',
      tags: ['disability-models']
    },
    {
      id: 112,
      question: "An employer argues that hiring people with disabilities is a good business decision because diverse teams are more innovative and the disability market is underserved. This argument BEST reflects which model?",
      options: [
        "Charity model",
        "Economic model",
        "Medical model",
        "Human rights model"
      ],
      correct: 1,
      explanation: "The economic model frames disability inclusion in terms of business value, market opportunity, innovation benefits, and return on investment rather than moral obligation or legal compliance.",
      wrongExplanations: {
        0: "The charity model would frame hiring as an act of goodwill rather than a business decision.",
        2: "The medical model focuses on health conditions and treatment, not business cases for inclusion.",
        3: "The human rights model would argue for hiring based on dignity and equal rights, not business benefits."
      },
      topicLinks: ['economic-model'],
      difficulty: 'medium',
      tags: ['disability-models', 'scenario']
    },
    {
      id: 113,
      question: "Which model of disability is the foundation for the WHO's International Classification of Functioning, Disability and Health (ICF)?",
      options: [
        "Social model",
        "Medical model",
        "Biopsychosocial model",
        "Functional solutions model"
      ],
      correct: 2,
      explanation: "The ICF is based on the biopsychosocial model, which integrates biological (body functions/structures), individual (activities), and social (participation) dimensions of health and disability.",
      wrongExplanations: {
        0: "While the social model influenced the ICF, the framework explicitly integrates medical and social factors, going beyond the purely social model.",
        1: "The medical model alone was the basis for the older International Classification of Impairments, Disabilities, and Handicaps (ICIDH), which the ICF replaced.",
        3: "The functional solutions model focuses on practical accommodations rather than classification frameworks."
      },
      topicLinks: ['biopsychosocial-model', 'icf'],
      difficulty: 'medium',
      tags: ['disability-models']
    },
    {
      id: 114,
      question: "A telethon raises money 'for the poor, suffering children with disabilities who need your help.' This messaging BEST represents which model?",
      options: [
        "Human rights model",
        "Social model",
        "Charity model",
        "Social identity model"
      ],
      correct: 2,
      explanation: "The charity model portrays people with disabilities as objects of pity who depend on the generosity of others. Language like 'poor, suffering children who need your help' is a hallmark of the charity model.",
      wrongExplanations: {
        0: "The human rights model emphasizes empowerment, dignity, and equal rights — the opposite of this messaging.",
        1: "The social model would focus on removing societal barriers rather than portraying individuals as suffering.",
        3: "The social identity model celebrates disability as an identity and source of pride, contradicting the pity-based messaging."
      },
      topicLinks: ['charity-model'],
      difficulty: 'easy',
      tags: ['disability-models', 'scenario']
    },
    {
      id: 115,
      question: "Which of the following BEST describes how the human rights model differs from the social model?",
      options: [
        "The human rights model focuses on medical treatment while the social model does not",
        "The human rights model goes beyond barrier removal to affirm inherent dignity and demand legal protections and equality",
        "The social model is newer than the human rights model",
        "The human rights model only applies to developing countries"
      ],
      correct: 1,
      explanation: "While both models reject the medical model's individual-deficit framing, the human rights model extends beyond the social model by explicitly affirming the inherent dignity of all people and demanding legal protections, non-discrimination, and full participation as rights rather than favors.",
      wrongExplanations: {
        0: "Neither the human rights model nor the social model focuses on medical treatment; that is characteristic of the medical model.",
        2: "The social model (1970s-80s) actually predates much of the formalized human rights model (CRPD adopted 2006).",
        3: "The human rights model applies globally and is not limited to developing countries."
      },
      topicLinks: ['human-rights-model', 'social-model'],
      difficulty: 'hard',
      tags: ['disability-models']
    },
    {
      id: 116,
      question: "A rehabilitation center focuses exclusively on helping a person with a spinal cord injury regain maximum physical function. This approach MOST closely aligns with which model?",
      options: [
        "Social model",
        "Medical model",
        "Economic model",
        "Social identity model"
      ],
      correct: 1,
      explanation: "Focusing exclusively on regaining physical function reflects the medical model's emphasis on treating, rehabilitating, and maximizing function of the individual's body, without addressing environmental or social factors.",
      wrongExplanations: {
        0: "The social model would focus on removing environmental barriers (e.g., ramps, accessible buildings) rather than solely on physical rehabilitation.",
        2: "The economic model would assess the costs and economic benefits of rehabilitation and return to work, not just physical function.",
        3: "The social identity model would focus on community belonging and disability pride, not on physical rehabilitation."
      },
      topicLinks: ['medical-model'],
      difficulty: 'easy',
      tags: ['disability-models', 'scenario']
    },
    {
      id: 117,
      question: "Which model of disability would be MOST likely to advocate for accessibility standards as a matter of law rather than voluntary goodwill?",
      options: [
        "Charity model",
        "Economic model",
        "Functional solutions model",
        "Human rights model"
      ],
      correct: 3,
      explanation: "The human rights model positions accessibility as a fundamental right that should be guaranteed by law. It advocates for legal mandates rather than leaving accessibility to voluntary action or charity.",
      wrongExplanations: {
        0: "The charity model relies on voluntary generosity and goodwill, not legal mandates.",
        1: "The economic model might support standards if cost-effective but would frame it as a business decision, not a legal right.",
        2: "The functional solutions model focuses on practical solutions but does not specifically advocate for legal mandates."
      },
      topicLinks: ['human-rights-model'],
      difficulty: 'medium',
      tags: ['disability-models']
    },
    {
      id: 118,
      question: "A person with a mobility impairment says: 'My disability isn't my wheelchair — it's the stairs.' This statement BEST reflects which model?",
      options: [
        "Medical model",
        "Biopsychosocial model",
        "Social model",
        "Charity model"
      ],
      correct: 2,
      explanation: "This statement perfectly captures the social model's core principle: disability is created by environmental barriers (stairs) rather than the person's impairment. The person can function well with their wheelchair — it is the inaccessible environment that disables them.",
      wrongExplanations: {
        0: "The medical model would locate the problem in the person's body, not in the stairs.",
        1: "While the biopsychosocial model acknowledges environmental factors, this statement focuses entirely on the environmental barrier without referencing the interaction with health conditions.",
        3: "The charity model would focus on helping the person cope with their situation rather than identifying environmental barriers."
      },
      topicLinks: ['social-model'],
      difficulty: 'easy',
      tags: ['disability-models', 'scenario']
    },
    {
      id: 119,
      question: "All of the following are characteristics of the biopsychosocial model EXCEPT:",
      options: [
        "It considers environmental and social factors",
        "It acknowledges the role of biological and health conditions",
        "It views disability solely as a social construct with no biological component",
        "It examines the interaction between the person and their environment"
      ],
      correct: 2,
      explanation: "The biopsychosocial model explicitly integrates biological, psychological, AND social factors. Viewing disability solely as a social construct with no biological component describes the social model, not the biopsychosocial model.",
      wrongExplanations: {
        0: "The biopsychosocial model does consider environmental and social factors as part of its integrated framework.",
        1: "The biopsychosocial model explicitly acknowledges biological and health conditions as one of its three pillars.",
        3: "Examining the interaction between person and environment is central to the biopsychosocial model's approach."
      },
      topicLinks: ['biopsychosocial-model'],
      difficulty: 'medium',
      tags: ['disability-models']
    },
    {
      id: 120,
      question: "A government decides to invest in workplace accessibility programs because studies show that for every $1 spent on accommodations, employers gain $4 in productivity and retention. This decision-making process BEST reflects which model?",
      options: [
        "Social model",
        "Human rights model",
        "Economic model",
        "Charity model"
      ],
      correct: 2,
      explanation: "Making policy decisions based on cost-benefit analysis and return on investment is characteristic of the economic model, which evaluates disability inclusion in terms of financial impact and productivity gains.",
      wrongExplanations: {
        0: "The social model would advocate for accessibility as barrier removal regardless of financial return.",
        1: "The human rights model would advocate for accessibility as a fundamental right, not because of economic returns.",
        3: "The charity model would frame accessibility spending as charitable giving, not as an investment with measurable returns."
      },
      topicLinks: ['economic-model'],
      difficulty: 'medium',
      tags: ['disability-models', 'scenario']
    },

    // =============================================
    // DISABILITY TYPES (121-155)
    // =============================================

    // --- Visual ---
    {
      id: 121,
      question: "Which of the following BEST describes the difference between blindness and low vision?",
      options: [
        "Blindness means no light perception; low vision means any reduced sight",
        "Blindness includes total and functional vision loss not correctable by standard means; low vision is significant visual impairment that still allows some usable vision",
        "Low vision is a temporary condition; blindness is permanent",
        "There is no meaningful difference; the terms are interchangeable"
      ],
      correct: 1,
      explanation: "Blindness encompasses total vision loss and functional blindness (very limited vision not correctable by standard glasses/contacts). Low vision refers to significant visual impairment where some usable vision remains, even with correction.",
      wrongExplanations: {
        0: "Blindness does not exclusively mean zero light perception — it includes functional blindness where some minimal perception may exist but is not usable for daily tasks.",
        2: "Both low vision and blindness can be temporary or permanent depending on the cause; neither term implies a specific duration.",
        3: "The terms have distinct clinical and functional meanings and are not interchangeable."
      },
      topicLinks: ['visual-disabilities', 'blindness', 'low-vision'],
      difficulty: 'easy',
      tags: ['disability-types', 'visual']
    },
    {
      id: 122,
      question: "A data analyst creates a dashboard that uses only red and green to distinguish 'failing' vs. 'passing' metrics — no labels, icons, or patterns. Which user group is MOST likely to face a barrier, and why?",
      options: [
        "People with color vision deficiency — red-green is the most common type, affecting roughly 8% of males",
        "People who are deaf — they cannot hear alert sounds that accompany the colors",
        "People with motor disabilities — the color-coded elements are difficult to click",
        "People with cognitive disabilities — dashboards are inherently too complex"
      ],
      correct: 0,
      explanation: "Red-green color vision deficiency is the most common type, affecting approximately 8% of males and 0.5% of females. Relying solely on red vs. green with no other visual indicators (labels, icons, patterns) makes the information inaccessible to this significant group. WCAG requires that color is not the only means of conveying information.",
      wrongExplanations: {
        1: "Deafness relates to audio barriers, not visual color distinctions. Even if alerts accompanied the colors, the core issue is the visual-only color coding.",
        2: "Motor disabilities affect interaction with controls, not the ability to perceive color differences in a display.",
        3: "While cognitive load is a real concern, the specific barrier described — relying solely on red vs. green — is a color vision deficiency issue, not a general complexity issue."
      },
      topicLinks: ['color-vision-deficiency', 'visual-disabilities'],
      difficulty: 'medium',
      tags: ['disability-types', 'visual', 'scenario']
    },
    {
      id: 123,
      question: "Color vision deficiency affects approximately 8% of males but only 0.5% of females. What is the PRIMARY reason for this large difference, and what does it mean for design?",
      options: [
        "The most common forms are X-linked recessive — males need only one affected X chromosome, so designers must assume a significant portion of any audience is affected",
        "Females have better-developed retinal cones due to hormonal differences, so accessibility guidelines only need to consider male users",
        "Color vision deficiency is a learned condition that develops more in males due to environmental factors",
        "Males are more likely to report symptoms, so the actual rates are probably equal"
      ],
      correct: 0,
      explanation: "Red-green color vision deficiency is X-linked recessive. Males (XY) need only one affected X chromosome, while females (XX) need two. This genetic basis means the prevalence is real and consistent — roughly 1 in 12 males. Designers must ensure color is never the sole means of conveying information, since a significant minority of any audience will be affected.",
      wrongExplanations: {
        1: "The difference is genetic (X-linked), not hormonal. Accessibility guidelines apply universally — the point is that color-only coding fails for a significant portion of ALL audiences.",
        2: "Color vision deficiency is a genetic condition, not an environmentally learned one. The prevalence difference is due to X-linked inheritance patterns.",
        3: "The difference is well-documented through clinical testing and reflects genuine genetic prevalence, not reporting bias."
      },
      topicLinks: ['color-vision-deficiency', 'visual-disabilities'],
      difficulty: 'medium',
      tags: ['disability-types', 'visual', 'scenario']
    },
    {
      id: 124,
      question: "A web designer relies solely on color to indicate required form fields (red for required, black for optional). Which group is MOST likely to be impacted by this design choice?",
      options: [
        "People who are deaf",
        "People with color vision deficiency",
        "People with motor disabilities",
        "People with cognitive disabilities"
      ],
      correct: 1,
      explanation: "People with color vision deficiency may not be able to distinguish red from black fields. Using color alone to convey information violates accessibility principles — additional indicators like asterisks or labels should be used.",
      wrongExplanations: {
        0: "Deaf users are not impacted by visual color choices; their barriers relate to audio content.",
        2: "Motor disabilities affect physical interaction with interfaces, not color perception.",
        3: "While cognitive disabilities can affect many aspects of comprehension, the specific issue of color-only coding primarily impacts those with color vision deficiency."
      },
      topicLinks: ['color-vision-deficiency', 'visual-disabilities'],
      difficulty: 'easy',
      tags: ['disability-types', 'visual', 'scenario']
    },
    {
      id: 125,
      question: "Which of the following is NOT a common type of color vision deficiency?",
      options: [
        "Protanopia (red deficiency)",
        "Deuteranopia (green deficiency)",
        "Tritanopia (blue-yellow deficiency)",
        "Tetranopia (full spectrum deficiency)"
      ],
      correct: 3,
      explanation: "Tetranopia is not a recognized type of color vision deficiency. The three main types are protanopia (red), deuteranopia (green), and tritanopia (blue-yellow). Complete color blindness is called achromatopsia.",
      wrongExplanations: {
        0: "Protanopia is a real type of color vision deficiency involving reduced sensitivity to red light.",
        1: "Deuteranopia is a real type — the most common form — involving reduced sensitivity to green light.",
        2: "Tritanopia is a real type involving difficulty distinguishing blue and yellow, though it is rarer than red-green deficiencies."
      },
      topicLinks: ['color-vision-deficiency'],
      difficulty: 'hard',
      tags: ['disability-types', 'visual']
    },
    {
      id: 126,
      question: "Deaf-blindness is BEST described as:",
      options: [
        "Complete loss of both vision and hearing",
        "A combination of visual and hearing impairments that together cause significant communication and access challenges",
        "A condition that always requires institutionalization",
        "A temporary condition caused by aging"
      ],
      correct: 1,
      explanation: "Deaf-blindness is a combination of visual and hearing impairments. It does not necessarily mean total loss of both senses — the combined effect creates unique challenges for communication, learning, and accessing information that require specialized support.",
      wrongExplanations: {
        0: "Deaf-blindness does not require complete loss of both senses; many deaf-blind individuals have some residual vision or hearing.",
        2: "People who are deaf-blind can live independently with appropriate support and do not inherently require institutionalization.",
        3: "Deaf-blindness can occur at any age and from many causes; it is not exclusively temporary or age-related."
      },
      topicLinks: ['deaf-blindness', 'visual-disabilities', 'auditory-disabilities'],
      difficulty: 'medium',
      tags: ['disability-types', 'visual', 'auditory']
    },

    // --- Auditory ---
    {
      id: 127,
      question: "What is the KEY distinction between being 'deaf' (lowercase) and 'Deaf' (uppercase)?",
      options: [
        "Lowercase 'deaf' refers to mild hearing loss; uppercase 'Deaf' refers to severe hearing loss",
        "Lowercase 'deaf' refers to the audiological condition; uppercase 'Deaf' refers to cultural identity and community membership",
        "They are identical in meaning; capitalization is a matter of personal preference only",
        "Uppercase 'Deaf' is the medical term; lowercase 'deaf' is informal"
      ],
      correct: 1,
      explanation: "Lowercase 'deaf' describes the audiological condition of not hearing. Uppercase 'Deaf' denotes identification with Deaf culture and community, use of sign language, and a shared cultural identity — aligning with the social identity model.",
      wrongExplanations: {
        0: "The distinction is not about severity of hearing loss but about cultural identification vs. audiological description.",
        2: "The capitalization represents a meaningful distinction recognized in disability studies and the Deaf community.",
        3: "The uppercase form is a cultural designation, not a medical term; medical terminology uses clinical descriptions."
      },
      topicLinks: ['deaf-culture', 'auditory-disabilities'],
      difficulty: 'medium',
      tags: ['disability-types', 'auditory']
    },
    {
      id: 128,
      question: "Which of the following BEST describes 'hard of hearing'?",
      options: [
        "A person who has total hearing loss",
        "A person with some degree of hearing loss ranging from mild to severe, who typically communicates through spoken language",
        "A person who only uses sign language",
        "A temporary hearing condition caused by ear infections"
      ],
      correct: 1,
      explanation: "Hard of hearing refers to people with mild to severe hearing loss who typically have some usable hearing. Many use spoken language, hearing aids, and/or other amplification. It is distinct from deafness, which involves profound hearing loss.",
      wrongExplanations: {
        0: "Total hearing loss is more accurately described as deafness, not hard of hearing.",
        2: "People who are hard of hearing may or may not use sign language; many rely primarily on spoken language with amplification.",
        3: "Hard of hearing is not defined as a temporary condition; it can be permanent or progressive."
      },
      topicLinks: ['auditory-disabilities', 'hard-of-hearing'],
      difficulty: 'easy',
      tags: ['disability-types', 'auditory']
    },

    // --- Speech ---
    {
      id: 129,
      question: "Which of the following is an example of an organic speech disorder?",
      options: [
        "Speech anxiety caused by social situations",
        "Stuttering caused by psychological trauma",
        "Dysarthria caused by cerebral palsy affecting the muscles used for speech",
        "Selective mutism in specific social contexts"
      ],
      correct: 2,
      explanation: "Organic speech disorders have a physical/physiological cause. Dysarthria from cerebral palsy is caused by neurological damage affecting the muscles used in speech, making it an organic disorder.",
      wrongExplanations: {
        0: "Speech anxiety from social situations would be classified as a functional or psychological issue, not an organic speech disorder.",
        1: "Stuttering from psychological trauma would be classified as a functional (psychogenic) speech disorder, not organic.",
        3: "Selective mutism is a psychological/behavioral condition, not an organic speech disorder."
      },
      topicLinks: ['speech-disabilities', 'organic-speech-disorders'],
      difficulty: 'medium',
      tags: ['disability-types', 'speech']
    },
    {
      id: 130,
      question: "Aphasia is BEST described as:",
      options: [
        "Loss of muscle control affecting speech production",
        "A language disorder caused by brain damage that affects the ability to produce and/or comprehend language",
        "A voice disorder causing hoarseness",
        "Difficulty with social communication skills"
      ],
      correct: 1,
      explanation: "Aphasia is a language disorder resulting from damage to the brain (most commonly from stroke). It can affect speaking, understanding, reading, and writing. It impacts language processing, not just speech production.",
      wrongExplanations: {
        0: "Loss of muscle control affecting speech is dysarthria, not aphasia. Aphasia affects language processing in the brain.",
        2: "Voice disorders causing hoarseness relate to the vocal cords/larynx and are distinct from aphasia's language-processing impairment.",
        3: "Difficulty with social communication may describe pragmatic language disorder or aspects of autism, not aphasia specifically."
      },
      topicLinks: ['speech-disabilities', 'aphasia'],
      difficulty: 'medium',
      tags: ['disability-types', 'speech']
    },
    {
      id: 131,
      question: "Augmentative and Alternative Communication (AAC) devices are PRIMARILY designed for people with:",
      options: [
        "Visual disabilities",
        "Hearing disabilities",
        "Speech disabilities",
        "Cognitive disabilities"
      ],
      correct: 2,
      explanation: "AAC devices are specifically designed to help people with speech disabilities communicate. These include both low-tech tools (picture boards) and high-tech devices (speech-generating devices). AAC is for speech output, not for visual or hearing access.",
      wrongExplanations: {
        0: "People with visual disabilities use screen readers and magnifiers, not AAC devices. AAC is about producing speech, not accessing visual content.",
        1: "People with hearing disabilities use hearing aids, cochlear implants, and captions — not AAC devices, which assist with speech production.",
        3: "While some people with cognitive disabilities may also use AAC, the primary purpose of AAC is to address speech and communication limitations."
      },
      topicLinks: ['aac', 'aac-devices', 'speech-disabilities', 'assistive-technology'],
      difficulty: 'medium',
      tags: ['disability-types', 'speech', 'assistive-technology', 'emphasis']
    },
    {
      id: 132,
      question: "Mutism is BEST described as:",
      options: [
        "The inability to hear speech",
        "The inability to speak, which may be caused by physical or psychological factors",
        "A reading disability",
        "A cognitive processing disorder"
      ],
      correct: 1,
      explanation: "Mutism is the inability to speak. It can have physical causes (damage to speech organs) or psychological causes (selective mutism, where a person can speak in some contexts but not others due to anxiety).",
      wrongExplanations: {
        0: "The inability to hear speech describes hearing loss/deafness, not mutism.",
        2: "A reading disability would be dyslexia or a similar learning difference, not mutism.",
        3: "Mutism specifically affects speech production, not cognitive processing in general."
      },
      topicLinks: ['speech-disabilities', 'mutism'],
      difficulty: 'easy',
      tags: ['disability-types', 'speech']
    },

    // --- Mobility/Flexibility/Body Structure ---
    {
      id: 133,
      question: "Which of the following is an example of a fine motor disability?",
      options: [
        "Inability to walk long distances",
        "Difficulty using a mouse or typing on a keyboard due to limited hand/finger dexterity",
        "Inability to see small text on screen",
        "Difficulty hearing quiet sounds"
      ],
      correct: 1,
      explanation: "Fine motor disabilities affect small, precise movements, particularly of the hands and fingers. Difficulty with mouse use and typing are common manifestations that impact computer interaction.",
      wrongExplanations: {
        0: "Inability to walk long distances is an ambulation/gross motor disability, not a fine motor disability.",
        2: "Inability to see small text is a visual disability (low vision), not a motor disability.",
        3: "Difficulty hearing quiet sounds is an auditory disability, not a motor disability."
      },
      topicLinks: ['mobility-disabilities', 'fine-motor'],
      difficulty: 'easy',
      tags: ['disability-types', 'mobility']
    },
    {
      id: 134,
      question: "A person experiences muscle fatigue that worsens with activity and improves with rest. This is MOST characteristic of:",
      options: [
        "Color vision deficiency",
        "Dyslexia",
        "Neuromuscular conditions such as myasthenia gravis or muscular dystrophy",
        "Selective mutism"
      ],
      correct: 2,
      explanation: "Progressive muscle fatigue that worsens with activity is characteristic of neuromuscular conditions. Myasthenia gravis specifically causes muscle weakness that increases with use and improves with rest.",
      wrongExplanations: {
        0: "Color vision deficiency affects color perception and has no relationship to muscle fatigue.",
        1: "Dyslexia is a cognitive/learning disability affecting reading and has no relationship to muscle fatigue.",
        3: "Selective mutism is a speech/psychological condition and does not involve muscle fatigue."
      },
      topicLinks: ['mobility-disabilities', 'muscle-fatigue'],
      difficulty: 'easy',
      tags: ['disability-types', 'mobility']
    },
    {
      id: 135,
      question: "Ambulation disabilities PRIMARILY affect:",
      options: [
        "A person's ability to see and read",
        "A person's ability to walk and move around the environment",
        "A person's ability to hear spoken language",
        "A person's ability to process written information"
      ],
      correct: 1,
      explanation: "Ambulation disabilities affect a person's ability to walk or move around their environment. This includes conditions requiring wheelchair use, crutches, or other mobility aids.",
      wrongExplanations: {
        0: "Ability to see and read relates to visual disabilities, not ambulation disabilities.",
        2: "Ability to hear spoken language relates to auditory disabilities, not ambulation disabilities.",
        3: "Processing written information relates to cognitive or visual disabilities, not ambulation disabilities."
      },
      topicLinks: ['mobility-disabilities', 'ambulation'],
      difficulty: 'easy',
      tags: ['disability-types', 'mobility']
    },
    {
      id: 136,
      question: "Body size and structure disabilities can create barriers in the digital environment when:",
      options: [
        "Websites use too many colors",
        "Physical hardware like keyboards, desks, and kiosks are designed only for average body dimensions",
        "Content is available only in text format",
        "Audio content is too loud"
      ],
      correct: 1,
      explanation: "Body size and structure disabilities (e.g., dwarfism, limb differences, obesity) create barriers when physical technology and environments are designed only for average body dimensions, making hardware, kiosks, and workstations inaccessible.",
      wrongExplanations: {
        0: "Color usage on websites is a concern for color vision deficiency, not body size and structure.",
        2: "Text-only content is a concern for visual disabilities and literacy, not body size and structure.",
        3: "Audio volume is a concern for auditory disabilities, not body size and structure."
      },
      topicLinks: ['mobility-disabilities', 'body-structure'],
      difficulty: 'medium',
      tags: ['disability-types', 'mobility']
    },

    // --- Cognitive ---
    {
      id: 137,
      question: "ADHD (Attention Deficit Hyperactivity Disorder) is classified as which type of disability?",
      options: [
        "Psychological disability",
        "Neurological disability",
        "Cognitive disability",
        "Speech disability"
      ],
      correct: 2,
      explanation: "ADHD is classified as a cognitive disability. It affects attention, executive function, and self-regulation. While it has neurological underpinnings, for CPACC classification purposes, ADHD falls under cognitive disabilities along with other learning and intellectual differences.",
      wrongExplanations: {
        0: "ADHD is NOT classified as a psychological disability. Psychological disabilities include conditions like anxiety disorders, depression, and bipolar disorder. ADHD is a cognitive/neurodevelopmental condition.",
        1: "While ADHD has neurological underpinnings, in CPACC classification it is categorized under cognitive disabilities, not neurological disabilities (which include epilepsy, stroke, and MS).",
        3: "ADHD does not primarily affect speech production or communication in the way speech disabilities do."
      },
      topicLinks: ['cognitive-disabilities', 'adhd'],
      difficulty: 'medium',
      tags: ['disability-types', 'cognitive', 'emphasis', 'classification']
    },
    {
      id: 138,
      question: "Dyslexia is classified as which type of disability?",
      options: [
        "Visual disability",
        "Psychological disability",
        "Cognitive disability",
        "Neurological disability"
      ],
      correct: 2,
      explanation: "Dyslexia is a cognitive disability — specifically a learning disability that affects reading, writing, and spelling. It involves difficulties with phonological processing, not with eyesight or psychological conditions.",
      wrongExplanations: {
        0: "Dyslexia is not a visual disability. While it affects reading, the issue is in cognitive processing of language, not in the eyes or visual system.",
        1: "Dyslexia is NOT a psychological disability. It is a specific learning disability classified under cognitive disabilities.",
        3: "While dyslexia has neurological underpinnings, it is classified as a cognitive/learning disability in CPACC, not under neurological disabilities."
      },
      topicLinks: ['cognitive-disabilities', 'dyslexia'],
      difficulty: 'medium',
      tags: ['disability-types', 'cognitive', 'emphasis', 'classification']
    },
    {
      id: 139,
      question: "What is the approximate prevalence of dyslexia in the population?",
      options: [
        "Less than 1%",
        "5-10%",
        "20-25%",
        "Over 40%"
      ],
      correct: 1,
      explanation: "Dyslexia affects approximately 5-10% of the population, making it one of the most common learning disabilities. Prevalence varies by definition and diagnostic criteria used.",
      wrongExplanations: {
        0: "Less than 1% significantly underestimates dyslexia prevalence; it is much more common.",
        2: "20-25% overestimates dyslexia prevalence, though broader reading difficulties may affect more people.",
        3: "Over 40% drastically overestimates dyslexia prevalence."
      },
      topicLinks: ['cognitive-disabilities', 'dyslexia'],
      difficulty: 'medium',
      tags: ['disability-types', 'cognitive', 'statistics']
    },
    {
      id: 140,
      question: "Dyscalculia is BEST described as:",
      options: [
        "A disability that affects reading ability",
        "A disability that affects the ability to understand and work with numbers and mathematical concepts",
        "A disability that affects handwriting",
        "A disability that affects attention and focus"
      ],
      correct: 1,
      explanation: "Dyscalculia is a cognitive/learning disability specifically affecting mathematical ability, including difficulty understanding numbers, learning math facts, and performing calculations.",
      wrongExplanations: {
        0: "A disability affecting reading ability is dyslexia, not dyscalculia.",
        2: "A disability affecting handwriting is dysgraphia, not dyscalculia.",
        3: "A disability affecting attention and focus is ADHD, not dyscalculia."
      },
      topicLinks: ['cognitive-disabilities', 'dyscalculia'],
      difficulty: 'easy',
      tags: ['disability-types', 'cognitive']
    },
    {
      id: 141,
      question: "Dysgraphia PRIMARILY affects:",
      options: [
        "The ability to read printed text",
        "The ability to write, including handwriting, spelling, and organizing thoughts on paper",
        "The ability to perform mathematical calculations",
        "The ability to pay attention during conversations"
      ],
      correct: 1,
      explanation: "Dysgraphia is a cognitive/learning disability that affects writing ability, including handwriting legibility, spelling, and the ability to organize and express thoughts in written form.",
      wrongExplanations: {
        0: "Difficulty reading printed text is characteristic of dyslexia, not dysgraphia.",
        2: "Difficulty with mathematical calculations is characteristic of dyscalculia, not dysgraphia.",
        3: "Difficulty paying attention is characteristic of ADHD, not dysgraphia."
      },
      topicLinks: ['cognitive-disabilities', 'dysgraphia'],
      difficulty: 'easy',
      tags: ['disability-types', 'cognitive']
    },
    {
      id: 142,
      question: "What is the approximate prevalence of ADHD in children?",
      options: [
        "Less than 1%",
        "2-7%",
        "15-20%",
        "Over 30%"
      ],
      correct: 1,
      explanation: "ADHD affects approximately 2-7% of children worldwide. Prevalence estimates vary based on diagnostic criteria, but this range is widely cited in research literature.",
      wrongExplanations: {
        0: "Less than 1% significantly underestimates the prevalence of ADHD in children.",
        2: "15-20% overestimates ADHD prevalence in children.",
        3: "Over 30% drastically overestimates ADHD prevalence."
      },
      topicLinks: ['cognitive-disabilities', 'adhd'],
      difficulty: 'medium',
      tags: ['disability-types', 'cognitive', 'statistics']
    },
    {
      id: 143,
      question: "Autism spectrum disorder is classified as which type of disability for CPACC purposes?",
      options: [
        "Psychological disability",
        "Speech disability",
        "Cognitive disability",
        "Neurological disability"
      ],
      correct: 2,
      explanation: "For CPACC classification, autism spectrum disorder falls under cognitive disabilities. It is a neurodevelopmental condition affecting social communication, behavior patterns, and sensory processing.",
      wrongExplanations: {
        0: "Autism is not classified as a psychological disability. Psychological disabilities include anxiety disorders, depression, and bipolar disorder.",
        1: "While autism can affect communication, it is not classified as a speech disability. It is a broader neurodevelopmental condition classified under cognitive disabilities.",
        3: "While autism has neurological underpinnings, it is classified under cognitive disabilities in CPACC, alongside other neurodevelopmental conditions like ADHD."
      },
      topicLinks: ['cognitive-disabilities', 'autism'],
      difficulty: 'medium',
      tags: ['disability-types', 'cognitive', 'classification']
    },
    {
      id: 144,
      question: "Which of the following BEST describes intellectual disability?",
      options: [
        "A temporary condition caused by lack of education",
        "Significant limitations in both intellectual functioning and adaptive behavior, originating before age 18",
        "A condition that only affects academic performance",
        "A type of mental illness"
      ],
      correct: 1,
      explanation: "Intellectual disability is characterized by significant limitations in intellectual functioning (reasoning, learning, problem-solving) AND adaptive behavior (conceptual, social, and practical skills), with onset during the developmental period (before age 18).",
      wrongExplanations: {
        0: "Intellectual disability is not caused by lack of education and is not temporary; it is a developmental condition.",
        2: "Intellectual disability affects many areas of life beyond academics, including daily living skills and social functioning.",
        3: "Intellectual disability is a cognitive/developmental condition, not a mental illness. They are distinct categories."
      },
      topicLinks: ['cognitive-disabilities', 'intellectual-disability'],
      difficulty: 'medium',
      tags: ['disability-types', 'cognitive']
    },
    {
      id: 145,
      question: "A student can speak fluently and has no hearing problems, but struggles significantly with reading despite adequate intelligence and instruction. This MOST likely describes:",
      options: [
        "ADHD",
        "Dyscalculia",
        "Dyslexia",
        "Aphasia"
      ],
      correct: 2,
      explanation: "Dyslexia is a specific learning disability that affects reading ability despite normal intelligence and adequate instruction. The student's fluent speech and hearing rule out speech and auditory issues.",
      wrongExplanations: {
        0: "ADHD primarily affects attention and executive function; while it can impact reading, the specific profile of reading difficulty with adequate intelligence points more to dyslexia.",
        1: "Dyscalculia affects mathematical ability, not reading.",
        3: "Aphasia is caused by brain damage and affects language production and comprehension broadly, not just reading. It typically occurs after stroke or brain injury, not as a developmental pattern."
      },
      topicLinks: ['cognitive-disabilities', 'dyslexia'],
      difficulty: 'easy',
      tags: ['disability-types', 'cognitive', 'scenario']
    },

    // --- Neurological ---
    {
      id: 146,
      question: "What is the approximate prevalence of migraine in the population?",
      options: [
        "1-2%",
        "5-7%",
        "14-15%",
        "30-35%"
      ],
      correct: 2,
      explanation: "Migraine affects approximately 14-15% of the global population, making it one of the most common neurological conditions. It is more prevalent in women than men.",
      wrongExplanations: {
        0: "1-2% significantly underestimates migraine prevalence.",
        1: "5-7% underestimates migraine prevalence.",
        3: "30-35% significantly overestimates migraine prevalence."
      },
      topicLinks: ['neurological-disabilities', 'migraine'],
      difficulty: 'medium',
      tags: ['disability-types', 'neurological', 'statistics']
    },
    {
      id: 147,
      question: "What is the approximate prevalence of vestibular disorders in the population?",
      options: [
        "1-3%",
        "5-8%",
        "15-20%",
        "40-50%"
      ],
      correct: 2,
      explanation: "Vestibular disorders affect approximately 15-20% of the population. These conditions affect balance and spatial orientation, causing dizziness, vertigo, and difficulties with movement perception.",
      wrongExplanations: {
        0: "1-3% significantly underestimates the prevalence of vestibular disorders.",
        1: "5-8% underestimates the prevalence of vestibular disorders.",
        3: "40-50% significantly overestimates the prevalence of vestibular disorders."
      },
      topicLinks: ['neurological-disabilities', 'vestibular-disorders'],
      difficulty: 'medium',
      tags: ['disability-types', 'neurological', 'statistics']
    },
    {
      id: 148,
      question: "Photosensitive epilepsy is triggered by:",
      options: [
        "Loud, sudden sounds",
        "Strong emotional stress",
        "Flashing or flickering visual stimuli, typically between 3-30 flashes per second",
        "Physical exertion"
      ],
      correct: 2,
      explanation: "Photosensitive epilepsy is a neurological condition where seizures are triggered by visual stimuli such as flashing lights, flickering patterns, or rapid transitions, particularly in the range of 3-30 flashes per second.",
      wrongExplanations: {
        0: "Sound-triggered seizures (audiogenic seizures) are extremely rare and distinct from photosensitive epilepsy.",
        1: "While stress can lower seizure thresholds in epilepsy generally, photosensitive epilepsy is specifically triggered by visual stimuli.",
        3: "Physical exertion can trigger seizures in some forms of epilepsy but is not the trigger for photosensitive epilepsy specifically."
      },
      topicLinks: ['neurological-disabilities', 'photosensitive-epilepsy', 'seizure-disorders'],
      difficulty: 'easy',
      tags: ['disability-types', 'neurological']
    },
    {
      id: 149,
      question: "Cerebral palsy is BEST classified as which type of disability?",
      options: [
        "Cognitive disability only",
        "A group of neurological disorders affecting movement, muscle tone, and posture caused by damage to the developing brain",
        "A psychological disability",
        "A progressive degenerative disease"
      ],
      correct: 1,
      explanation: "Cerebral palsy is a group of neurological disorders caused by brain damage during development. It primarily affects movement, muscle tone, and posture. While it may co-occur with cognitive or sensory disabilities, it is fundamentally a neurological/motor condition.",
      wrongExplanations: {
        0: "Cerebral palsy primarily affects movement and motor control; while cognitive disabilities may co-occur, it is not classified solely as a cognitive disability.",
        2: "Cerebral palsy is a neurological/motor condition, not a psychological disability.",
        3: "Cerebral palsy is non-progressive — the brain damage does not worsen over time, though symptoms may change. This distinguishes it from degenerative diseases like MS."
      },
      topicLinks: ['neurological-disabilities', 'cerebral-palsy'],
      difficulty: 'medium',
      tags: ['disability-types', 'neurological']
    },
    {
      id: 150,
      question: "Multiple sclerosis (MS) differs from cerebral palsy in that MS is:",
      options: [
        "Present from birth",
        "A progressive condition that can worsen over time",
        "Caused by damage during brain development",
        "Only affecting children"
      ],
      correct: 1,
      explanation: "MS is a progressive autoimmune neurological condition where the immune system attacks the myelin sheath around nerve fibers, and symptoms can worsen over time. Cerebral palsy, by contrast, is non-progressive and results from early brain damage.",
      wrongExplanations: {
        0: "MS is typically diagnosed in adulthood (ages 20-50), not present from birth. Cerebral palsy is the condition present from early development.",
        2: "Damage during brain development describes cerebral palsy, not MS. MS involves autoimmune-mediated damage to myelin.",
        3: "MS primarily affects adults, not only children. Cerebral palsy is the condition that begins in childhood."
      },
      topicLinks: ['neurological-disabilities', 'multiple-sclerosis'],
      difficulty: 'medium',
      tags: ['disability-types', 'neurological']
    },
    {
      id: 151,
      question: "A website includes an auto-playing animation with rapid flashing. This is MOST dangerous for users with:",
      options: [
        "Color vision deficiency",
        "Photosensitive epilepsy",
        "Dyslexia",
        "Hard of hearing"
      ],
      correct: 1,
      explanation: "Rapid flashing content can trigger seizures in users with photosensitive epilepsy, making it a serious safety hazard. WCAG requires that content not flash more than 3 times per second.",
      wrongExplanations: {
        0: "Color vision deficiency affects color perception but is not affected by flashing animations in a dangerous way.",
        2: "Dyslexia affects reading, not visual processing of flashing content.",
        3: "Hard of hearing relates to auditory perception and is not affected by visual flashing."
      },
      topicLinks: ['neurological-disabilities', 'photosensitive-epilepsy'],
      difficulty: 'easy',
      tags: ['disability-types', 'neurological', 'scenario']
    },

    // --- Psychological ---
    {
      id: 152,
      question: "Which of the following is classified as a psychological disability rather than a cognitive disability?",
      options: [
        "ADHD",
        "Dyslexia",
        "Clinical depression (major depressive disorder)",
        "Autism spectrum disorder"
      ],
      correct: 2,
      explanation: "Clinical depression is classified as a psychological disability. Psychological disabilities include mood disorders (depression, bipolar), anxiety disorders, and other mental health conditions. ADHD, dyslexia, and autism are classified as cognitive disabilities.",
      wrongExplanations: {
        0: "ADHD is classified as a cognitive disability, not a psychological disability, despite sometimes being confused with psychological conditions.",
        1: "Dyslexia is a learning disability classified under cognitive disabilities, not psychological disabilities.",
        3: "Autism spectrum disorder is classified as a cognitive disability (neurodevelopmental), not a psychological disability."
      },
      topicLinks: ['psychological-disabilities', 'depression'],
      difficulty: 'hard',
      tags: ['disability-types', 'psychological', 'emphasis', 'classification']
    },
    {
      id: 153,
      question: "Seasonal Affective Disorder (SAD) is classified as which type of disability?",
      options: [
        "Cognitive disability",
        "Neurological disability",
        "Psychological disability",
        "Visual disability"
      ],
      correct: 2,
      explanation: "Seasonal Affective Disorder is a mood disorder (a type of depression related to seasonal changes in light) and is classified as a psychological disability alongside other mood and anxiety disorders.",
      wrongExplanations: {
        0: "SAD is not a cognitive disability; it does not primarily affect learning, attention, or intellectual functioning.",
        1: "While SAD has neurological underpinnings, it is classified as a psychological disability (mood disorder) in CPACC.",
        3: "Although SAD is related to light exposure, it is not a visual disability — it is a mood disorder."
      },
      topicLinks: ['psychological-disabilities', 'seasonal-affective-disorder'],
      difficulty: 'medium',
      tags: ['disability-types', 'psychological']
    },
    {
      id: 154,
      question: "Bipolar disorder is BEST classified as:",
      options: [
        "A cognitive disability",
        "A neurological disability",
        "A psychological disability involving extreme mood episodes",
        "A speech disability"
      ],
      correct: 2,
      explanation: "Bipolar disorder is classified as a psychological disability. It is a mood disorder characterized by episodes of mania (or hypomania) and depression, affecting emotional regulation and daily functioning.",
      wrongExplanations: {
        0: "Bipolar disorder is not a cognitive disability; while it can affect concentration during episodes, it is fundamentally a mood disorder.",
        1: "While bipolar disorder has neurological underpinnings, it is classified as a psychological disability (mood disorder) in CPACC.",
        3: "Bipolar disorder does not primarily affect speech production and is not a speech disability."
      },
      topicLinks: ['psychological-disabilities', 'bipolar-disorder'],
      difficulty: 'easy',
      tags: ['disability-types', 'psychological']
    },
    {
      id: 155,
      question: "A person has both a mobility impairment and a visual impairment. This is BEST described as:",
      options: [
        "A compound disability that cancels out both impairments",
        "Multiple/complex disabilities, where the combination creates unique challenges beyond either disability alone",
        "An intellectual disability",
        "A temporary disability"
      ],
      correct: 1,
      explanation: "Multiple/complex disabilities refers to the co-occurrence of two or more disabilities. The combination often creates challenges that are greater and more complex than the sum of individual disabilities, requiring coordinated support.",
      wrongExplanations: {
        0: "Multiple disabilities do not cancel each other out; they compound challenges and create unique barriers.",
        2: "Having mobility and visual impairments does not constitute an intellectual disability; these are separate categories.",
        3: "Multiple disabilities are not inherently temporary; they can be permanent depending on the underlying conditions."
      },
      topicLinks: ['multiple-disabilities'],
      difficulty: 'easy',
      tags: ['disability-types', 'multiple-disabilities']
    },

    // =============================================
    // ASSISTIVE TECHNOLOGIES (156-175)
    // =============================================
    {
      id: 156,
      question: "A screen reader like JAWS navigates a web page by building an 'accessibility tree' from the page's code. Which element of web development is MOST critical for screen readers to work correctly?",
      options: [
        "Semantic HTML — proper headings, landmarks, and labels give the accessibility tree meaningful structure",
        "Visual CSS styling — screen readers interpret colors and fonts to determine content importance",
        "JavaScript animations — screen readers need motion cues to understand page transitions",
        "High-resolution images — screen readers analyze image pixels to describe visual content"
      ],
      correct: 0,
      explanation: "Screen readers like JAWS rely on the accessibility tree, which is built from semantic HTML structure — headings (h1-h6), landmarks (nav, main, aside), form labels, alt text, and ARIA attributes. Without proper semantics, the accessibility tree is flat and unusable. CSS styling, animations, and image resolution are irrelevant to screen reader navigation.",
      wrongExplanations: {
        1: "Screen readers do not interpret CSS visual styling. Colors, fonts, and layout are invisible to them — only the semantic structure of the HTML matters.",
        2: "JavaScript animations are visual effects. Screen readers cannot interpret motion. In fact, excessive animations can be problematic for users with vestibular or cognitive disabilities.",
        3: "Screen readers cannot analyze image pixels. They rely entirely on text alternatives (alt attributes) provided by the developer."
      },
      topicLinks: ['screen-readers', 'assistive-technology'],
      difficulty: 'medium',
      tags: ['assistive-technology', 'scenario']
    },
    {
      id: 157,
      question: "Dragon NaturallySpeaking is a voice recognition software PRIMARILY used by people with:",
      options: [
        "Visual disabilities",
        "Motor/mobility disabilities",
        "Hearing disabilities",
        "Speech disabilities"
      ],
      correct: 1,
      explanation: "Dragon NaturallySpeaking is voice recognition software that allows users to control their computer and dictate text using speech. It is primarily used by people with motor disabilities who have difficulty using a keyboard and mouse.",
      wrongExplanations: {
        0: "People with visual disabilities primarily use screen readers (like JAWS or NVDA), not voice recognition software. Dragon is an input technology, not an output technology for visual access.",
        2: "People with hearing disabilities need visual output (captions), not voice input. Dragon requires the user to speak, which is not related to hearing access.",
        3: "Dragon requires clear speech input from the user. People with speech disabilities would have difficulty using voice recognition and instead use AAC devices."
      },
      topicLinks: ['voice-recognition', 'dragon-naturallyspeaking', 'assistive-technology'],
      difficulty: 'medium',
      tags: ['assistive-technology', 'emphasis']
    },
    {
      id: 158,
      question: "What is the KEY difference between JAWS and Dragon NaturallySpeaking?",
      options: [
        "JAWS is for Windows; Dragon is for Mac only",
        "JAWS converts screen content to speech for blind users (output); Dragon converts spoken commands to text/actions for users with motor disabilities (input)",
        "JAWS is free; Dragon is paid",
        "JAWS is for deaf users; Dragon is for blind users"
      ],
      correct: 1,
      explanation: "JAWS is a screen reader that provides speech OUTPUT of screen content for blind users. Dragon NaturallySpeaking is voice recognition that accepts speech INPUT to replace keyboard/mouse for users with motor disabilities. They serve completely different purposes.",
      wrongExplanations: {
        0: "Both JAWS and Dragon have been available on Windows. The key distinction is their function, not their platform.",
        2: "JAWS is commercial software (not free); while NVDA is the free screen reader alternative. This is not the key distinction.",
        3: "This is backwards and incorrect: JAWS is for blind users (not deaf), and Dragon is for motor disabilities (not blindness)."
      },
      topicLinks: ['screen-readers', 'jaws', 'voice-recognition', 'dragon-naturallyspeaking'],
      difficulty: 'hard',
      tags: ['assistive-technology', 'emphasis']
    },
    {
      id: 159,
      question: "NVDA (NonVisual Desktop Access) differs from JAWS in that NVDA is:",
      options: [
        "A commercial product requiring an annual license",
        "A free, open-source screen reader for Windows",
        "Designed for users with motor disabilities",
        "Only available on macOS"
      ],
      correct: 1,
      explanation: "NVDA is a free, open-source screen reader for Windows, while JAWS is a commercial product requiring a paid license. Both serve blind and visually impaired users, but NVDA's free availability makes it widely accessible.",
      wrongExplanations: {
        0: "JAWS is the commercial product requiring a license, not NVDA. NVDA is free and open-source.",
        2: "NVDA, like JAWS, is a screen reader designed for users who are blind or visually impaired, not for motor disabilities.",
        3: "NVDA is available on Windows. VoiceOver is the screen reader built into macOS."
      },
      topicLinks: ['screen-readers', 'nvda', 'assistive-technology'],
      difficulty: 'medium',
      tags: ['assistive-technology']
    },
    {
      id: 160,
      question: "VoiceOver is a screen reader that comes built into:",
      options: [
        "Windows operating systems",
        "Android devices only",
        "Apple products (macOS, iOS, iPadOS)",
        "Linux distributions"
      ],
      correct: 2,
      explanation: "VoiceOver is Apple's built-in screen reader, included at no extra cost in macOS, iOS, iPadOS, watchOS, and tvOS. It allows blind and visually impaired users to access Apple devices.",
      wrongExplanations: {
        0: "Windows includes Narrator as its built-in screen reader, not VoiceOver.",
        1: "Android includes TalkBack as its built-in screen reader, not VoiceOver.",
        3: "Linux has Orca as its primary screen reader, not VoiceOver."
      },
      topicLinks: ['screen-readers', 'voiceover', 'assistive-technology'],
      difficulty: 'easy',
      tags: ['assistive-technology']
    },
    {
      id: 161,
      question: "Screen magnification software is PRIMARILY used by people with:",
      options: [
        "Blindness (total vision loss)",
        "Low vision",
        "Hearing disabilities",
        "Cognitive disabilities"
      ],
      correct: 1,
      explanation: "Screen magnifiers enlarge portions of the screen for people with low vision who have some usable sight. People who are totally blind use screen readers instead, since magnification of visual content would not help them.",
      wrongExplanations: {
        0: "People with total blindness cannot benefit from magnified visual content; they use screen readers that convert content to speech or braille.",
        2: "People with hearing disabilities need captions and visual alerts, not screen magnification.",
        3: "While some people with cognitive disabilities may benefit from larger text, screen magnifiers are specifically designed for low vision needs."
      },
      topicLinks: ['screen-magnifiers', 'low-vision', 'assistive-technology'],
      difficulty: 'easy',
      tags: ['assistive-technology', 'emphasis']
    },
    {
      id: 162,
      question: "A refreshable braille display is an assistive technology PRIMARILY used by:",
      options: [
        "People who are deaf",
        "People who are blind",
        "People with motor disabilities",
        "People with speech disabilities"
      ],
      correct: 1,
      explanation: "Refreshable braille displays convert digital text into raised braille characters that blind users can read with their fingertips. They work alongside screen readers to provide tactile access to digital content.",
      wrongExplanations: {
        0: "People who are deaf primarily need visual communication methods like captions, not braille displays.",
        2: "People with motor disabilities need alternative input devices, not braille displays which require fine touch sensation.",
        3: "People with speech disabilities use AAC devices, not braille displays."
      },
      topicLinks: ['braille-displays', 'refreshable-braille', 'assistive-technology'],
      difficulty: 'easy',
      tags: ['assistive-technology']
    },
    {
      id: 163,
      question: "A person with a severe motor disability who cannot use their hands or voice might use which assistive technology to interact with a computer?",
      options: [
        "Screen magnifier",
        "Sip-and-puff device",
        "Hearing loop",
        "AAC device"
      ],
      correct: 1,
      explanation: "A sip-and-puff device detects air pressure from sipping (inhaling) or puffing (exhaling) through a tube, allowing people with severe motor disabilities to control a computer or wheelchair without using hands or voice.",
      wrongExplanations: {
        0: "Screen magnifiers enlarge visual content for people with low vision; they do not provide alternative input for motor disabilities.",
        2: "Hearing loops transmit audio directly to hearing aids for people with hearing loss; they are unrelated to motor input.",
        3: "AAC devices help with speech/communication output, not with computer input for motor disabilities."
      },
      topicLinks: ['switch-devices', 'sip-and-puff', 'assistive-technology'],
      difficulty: 'medium',
      tags: ['assistive-technology']
    },
    {
      id: 164,
      question: "Switch devices are assistive technologies PRIMARILY designed for people with:",
      options: [
        "Visual disabilities",
        "Hearing disabilities",
        "Motor/mobility disabilities",
        "Cognitive disabilities"
      ],
      correct: 2,
      explanation: "Switch devices are alternative input devices for people with motor disabilities. They allow users to interact with technology through simplified actions (pressing, blinking, sipping) rather than standard keyboard/mouse input.",
      wrongExplanations: {
        0: "People with visual disabilities use screen readers and magnifiers, not switch devices.",
        1: "People with hearing disabilities use captions and hearing aids, not switch devices.",
        3: "While some people with cognitive disabilities may use simplified interfaces, switch devices are primarily designed for motor access."
      },
      topicLinks: ['switch-devices', 'assistive-technology'],
      difficulty: 'easy',
      tags: ['assistive-technology']
    },
    {
      id: 165,
      question: "Hearing loops (induction loops) work by:",
      options: [
        "Amplifying all sounds in a room",
        "Transmitting audio signals directly to hearing aids equipped with telecoils via electromagnetic field",
        "Converting speech to text on a screen",
        "Translating speech into sign language"
      ],
      correct: 1,
      explanation: "Hearing loops use an electromagnetic field to transmit audio directly to hearing aids or cochlear implants with telecoil (T-coil) receivers, providing clear audio without background noise interference.",
      wrongExplanations: {
        0: "Hearing loops do not amplify all sounds; they transmit specific audio signals directly to compatible hearing aids, reducing background noise.",
        2: "Converting speech to text describes real-time captioning or speech-to-text technology, not hearing loops.",
        3: "Translating speech into sign language would require a sign language interpreter or avatar, not a hearing loop."
      },
      topicLinks: ['hearing-aids', 'hearing-loops', 'hearing-assistive-tech', 'assistive-technology'],
      difficulty: 'medium',
      tags: ['assistive-technology']
    },
    {
      id: 166,
      question: "Captions and transcripts are assistive accommodations PRIMARILY for people who are:",
      options: [
        "Blind or have low vision",
        "Deaf or hard of hearing",
        "Have motor disabilities",
        "Have speech disabilities"
      ],
      correct: 1,
      explanation: "Captions and transcripts convert audio content into text, making it accessible to people who are deaf or hard of hearing. Captions are synchronized with video; transcripts are standalone text versions of audio content.",
      wrongExplanations: {
        0: "People who are blind need audio descriptions of visual content, not captions (which are visual text).",
        2: "Motor disabilities affect physical interaction; captions do not address motor access barriers.",
        3: "Speech disabilities affect a person's ability to produce speech; captions address the ability to receive/perceive audio content."
      },
      topicLinks: ['captions', 'transcripts', 'assistive-technology'],
      difficulty: 'easy',
      tags: ['assistive-technology']
    },
    {
      id: 167,
      question: "A person who is blind is trying to use a website. Which combination of assistive technologies would they MOST likely use?",
      options: [
        "Hearing aid and screen magnifier",
        "Screen reader and refreshable braille display",
        "AAC device and switch access",
        "Voice recognition and screen magnifier"
      ],
      correct: 1,
      explanation: "A blind user would most likely use a screen reader (to convert visual content to speech) and potentially a refreshable braille display (to read content tactilely). These are the primary assistive technologies for blind computer users.",
      wrongExplanations: {
        0: "A hearing aid is for hearing loss, not blindness. A screen magnifier is for low vision, not complete blindness.",
        2: "AAC devices are for speech disabilities and switch access is for motor disabilities — neither addresses blindness.",
        3: "Voice recognition is for motor disabilities (input), and screen magnifiers are for low vision. Neither is the primary AT for blindness."
      },
      topicLinks: ['screen-readers', 'braille-displays', 'refreshable-braille', 'assistive-technology'],
      difficulty: 'medium',
      tags: ['assistive-technology', 'emphasis']
    },
    {
      id: 168,
      question: "A VOCA (Voice Output Communication Aid) is a type of AAC device. It is PRIMARILY used by people with:",
      options: [
        "Visual disabilities",
        "Hearing disabilities",
        "Speech disabilities",
        "Cognitive disabilities"
      ],
      correct: 2,
      explanation: "A VOCA is a speech-generating device that produces spoken output for people who cannot speak or have limited speech. It is a type of AAC device designed specifically for people with speech disabilities to communicate.",
      wrongExplanations: {
        0: "VOCAs/AAC devices produce speech output for communication; they are not designed for accessing visual content. Screen readers serve that purpose for visual disabilities.",
        1: "People with hearing disabilities need to receive audio in alternative formats, not generate speech. VOCAs generate speech for the user.",
        3: "While some people with cognitive disabilities may also have speech limitations, VOCAs are specifically AT for speech disabilities."
      },
      topicLinks: ['aac', 'aac-devices', 'voca', 'speech-disabilities', 'assistive-technology'],
      difficulty: 'medium',
      tags: ['assistive-technology', 'emphasis']
    },
    {
      id: 169,
      question: "Which of the following correctly matches each assistive technology to its PRIMARY user group?",
      options: [
        "JAWS → motor disabilities; Dragon → visual disabilities; AAC → hearing disabilities",
        "JAWS → visual disabilities; Dragon → motor disabilities; AAC → speech disabilities",
        "JAWS → hearing disabilities; Dragon → speech disabilities; AAC → visual disabilities",
        "JAWS → speech disabilities; Dragon → cognitive disabilities; AAC → motor disabilities"
      ],
      correct: 1,
      explanation: "JAWS is a screen reader for blind/visually impaired users. Dragon NaturallySpeaking is voice recognition for users with motor disabilities. AAC devices help people with speech disabilities communicate.",
      wrongExplanations: {
        0: "This incorrectly assigns all three technologies. JAWS is for visual (not motor), Dragon is for motor (not visual), and AAC is for speech (not hearing).",
        2: "This incorrectly assigns all three technologies. JAWS is for visual (not hearing), Dragon is for motor (not speech), and AAC is for speech (not visual).",
        3: "This incorrectly assigns all three technologies. JAWS is for visual (not speech), Dragon is for motor (not cognitive), and AAC is for speech (not motor)."
      },
      topicLinks: ['screen-readers', 'voice-recognition', 'aac', 'aac-devices', 'assistive-technology'],
      difficulty: 'hard',
      tags: ['assistive-technology', 'emphasis']
    },
    {
      id: 170,
      question: "A cochlear implant differs from a hearing aid in that a cochlear implant:",
      options: [
        "Amplifies sound for the existing hearing system",
        "Bypasses damaged portions of the ear and directly stimulates the auditory nerve",
        "Is worn externally without any surgical procedure",
        "Is only effective for mild hearing loss"
      ],
      correct: 1,
      explanation: "A cochlear implant is a surgically implanted device that bypasses damaged hair cells in the inner ear and directly stimulates the auditory nerve. Hearing aids, by contrast, amplify sound for the remaining hearing system.",
      wrongExplanations: {
        0: "Amplifying sound for the existing hearing system describes a hearing aid, not a cochlear implant.",
        2: "Cochlear implants require surgery to place the internal component; hearing aids are the non-surgical, external devices.",
        3: "Cochlear implants are typically for severe to profound hearing loss, not mild hearing loss. Hearing aids are used for the full range of hearing loss."
      },
      topicLinks: ['cochlear-implants', 'hearing-aids', 'hearing-assistive-tech', 'assistive-technology'],
      difficulty: 'medium',
      tags: ['assistive-technology']
    },
    {
      id: 171,
      question: "An employee with a motor disability affecting their hands needs to write long documents on a computer. Which assistive technology would be MOST appropriate?",
      options: [
        "Screen reader (JAWS)",
        "Screen magnifier (ZoomText)",
        "Voice recognition software (Dragon NaturallySpeaking)",
        "Refreshable braille display"
      ],
      correct: 2,
      explanation: "Dragon NaturallySpeaking allows the employee to dictate text and control the computer by voice, bypassing the need for keyboard and mouse use. This directly addresses the motor barrier of typing long documents.",
      wrongExplanations: {
        0: "JAWS is a screen reader for blind users; it converts screen content to audio output but does not solve the input problem of typing with a motor disability.",
        1: "ZoomText magnifies screen content for people with low vision; it does not address the inability to type.",
        3: "A refreshable braille display is for blind users to read digital content in braille; it does not address motor input barriers."
      },
      topicLinks: ['voice-recognition', 'dragon-naturallyspeaking', 'assistive-technology'],
      difficulty: 'easy',
      tags: ['assistive-technology', 'scenario', 'emphasis']
    },
    {
      id: 172,
      question: "A person who is deaf-blind would MOST likely use which assistive technology for digital access?",
      options: [
        "Standard screen reader with audio output",
        "Refreshable braille display paired with a screen reader",
        "Screen magnifier with audio enhancement",
        "Hearing loop with captions"
      ],
      correct: 1,
      explanation: "A deaf-blind person cannot use audio output (due to deafness) or visual display (due to blindness). A refreshable braille display paired with a screen reader converts digital content to tactile braille, providing access through touch.",
      wrongExplanations: {
        0: "A standard screen reader with audio output would not work for a deaf-blind person because they cannot hear the audio.",
        2: "A screen magnifier requires usable vision, and audio enhancement requires hearing — neither is accessible for a deaf-blind person.",
        3: "Hearing loops require hearing, and captions require vision — neither is accessible for a deaf-blind person."
      },
      topicLinks: ['braille-displays', 'refreshable-braille', 'deaf-blindness', 'assistive-technology'],
      difficulty: 'hard',
      tags: ['assistive-technology', 'scenario']
    },
    {
      id: 173,
      question: "Assistive technologies can be grouped into categories based on the type of barrier they address. Which grouping CORRECTLY matches the AT category to its purpose?",
      options: [
        "Output AT (screen readers, braille displays) makes digital content perceivable; Input AT (switches, eye trackers, voice recognition) makes interfaces operable",
        "Output AT (voice recognition, sip-and-puff) lets users control devices; Input AT (screen readers, captions) presents content to users",
        "Sensory AT (screen magnifiers, hearing aids) addresses cognitive barriers; Motor AT (JAWS, NVDA) addresses physical barriers",
        "All assistive technologies serve the same purpose — they make content perceivable to users with any type of disability"
      ],
      correct: 0,
      explanation: "AT can be categorized by function: Output AT (screen readers, braille displays, screen magnifiers) makes content perceivable by converting it to accessible formats. Input AT (switches, sip-and-puff, eye trackers, voice recognition like Dragon) provides alternative ways to operate interfaces. Understanding these categories helps match the right AT to the right barrier.",
      wrongExplanations: {
        1: "This reverses the categories. Voice recognition and sip-and-puff are input technologies (alternatives to keyboard/mouse). Screen readers are output technologies (they present content in accessible formats).",
        2: "Screen magnifiers address visual (sensory) barriers, but JAWS and NVDA are screen readers that also address visual barriers — not motor/physical barriers. The categories here are incorrectly matched.",
        3: "Different AT serves very different purposes. A screen reader addresses visual barriers, while a switch device addresses motor barriers. One-size-fits-all is not how AT works."
      },
      topicLinks: ['screen-readers', 'switch-devices', 'assistive-technology'],
      difficulty: 'hard',
      tags: ['assistive-technology']
    },
    {
      id: 174,
      question: "A student who cannot speak due to cerebral palsy needs to participate in a classroom discussion. Which assistive technology is MOST appropriate?",
      options: [
        "Screen reader",
        "Hearing aid",
        "AAC/VOCA device (speech-generating device)",
        "Screen magnifier"
      ],
      correct: 2,
      explanation: "An AAC or VOCA (Voice Output Communication Aid) device generates spoken output, allowing a person who cannot speak to participate in verbal communication. This directly addresses the speech barrier caused by cerebral palsy.",
      wrongExplanations: {
        0: "A screen reader converts visual content to audio for blind users; it does not generate communicative speech for the user.",
        1: "A hearing aid amplifies sound for people with hearing loss; it does not help someone who cannot produce speech.",
        3: "A screen magnifier enlarges visual content for people with low vision; it does not address speech production."
      },
      topicLinks: ['aac', 'aac-devices', 'voca', 'speech-disabilities', 'assistive-technology'],
      difficulty: 'easy',
      tags: ['assistive-technology', 'scenario', 'emphasis']
    },
    {
      id: 175,
      question: "A person with ALS (amyotrophic lateral sclerosis) has limited speech AND limited motor control. They need to both browse the web and communicate with others. Which combination of AT would BEST address both needs?",
      options: [
        "Eye-tracking input device paired with a screen reader and AAC software — eye tracking provides input, the screen reader makes content accessible, and AAC enables communication",
        "Dragon NaturallySpeaking paired with a hearing aid — voice recognition provides input and the hearing aid handles output",
        "A standard keyboard with a screen magnifier — magnification solves all access barriers",
        "Captions and a sip-and-puff device — captions make all content accessible and sip-and-puff handles input"
      ],
      correct: 0,
      explanation: "ALS often affects both speech and motor function. Eye tracking provides an alternative input method that requires minimal physical movement. A screen reader makes web content perceivable as audio or braille. AAC software with eye-gaze control enables communication. This combination addresses the intersection of motor and speech barriers — an important example of how people with complex needs may use multiple AT together.",
      wrongExplanations: {
        1: "Dragon NaturallySpeaking requires clear speech input, which would not work for someone with limited speech due to ALS. A hearing aid addresses hearing loss, which is not the barrier described.",
        2: "A standard keyboard requires motor control that someone with ALS may lack. Screen magnification addresses low vision, which is not the barrier described.",
        3: "Captions address hearing barriers for audio/video content, not general web browsing. While sip-and-puff could work for input, it alone doesn't address communication or content output needs."
      },
      topicLinks: ['switch-devices', 'screen-readers', 'aac-devices', 'assistive-technology'],
      difficulty: 'hard',
      tags: ['assistive-technology', 'scenario']
    },

    // =============================================
    // ETIQUETTE & DEMOGRAPHICS (176-180)
    // =============================================
    {
      id: 176,
      question: "People with disabilities are often described as 'the world's largest minority group.' What does this framing imply for organizations designing products and services?",
      options: [
        "With roughly 16% of the global population affected, accessibility is not a niche concern — it impacts a significant portion of any audience and should be integrated from the start",
        "Since it is the largest minority, accommodations should only be provided when specifically requested by disabled users",
        "The large number means most disabilities are minor and do not require design changes",
        "Organizations should focus on the majority (non-disabled users) first, then add accessibility features later if budget allows"
      ],
      correct: 0,
      explanation: "The WHO estimates approximately 16% of the global population (about 1.3 billion people) lives with some form of disability. Framing this as 'the world's largest minority' highlights that accessibility affects a significant share of every audience — not a small edge case. This supports the business and ethical case for building accessibility in from the beginning rather than treating it as an afterthought.",
      wrongExplanations: {
        1: "Waiting for requests is the accommodation model, not inclusive design. The large prevalence actually supports proactive inclusion rather than reactive accommodations.",
        2: "Disability prevalence includes the full spectrum — from significant to moderate impact. A 16% prevalence rate means design barriers affect a large, diverse group with varied needs.",
        3: "This describes the 'bolt-on' approach, which is more expensive and less effective than inclusive design. The high prevalence supports building accessibility into the design process from the start."
      },
      topicLinks: ['disability-demographics'],
      difficulty: 'medium',
      tags: ['demographics', 'scenario']
    },
    {
      id: 177,
      question: "Which of the following is an example of people-first language?",
      options: [
        "'The disabled' need better access",
        "'A person with a disability' has the right to equal access",
        "'The blind man' couldn't read the sign",
        "'Handicapped people' face many challenges"
      ],
      correct: 1,
      explanation: "People-first language puts the person before the disability: 'a person with a disability.' This emphasizes their personhood rather than defining them by their condition.",
      wrongExplanations: {
        0: "'The disabled' is label-first language that defines people entirely by their disability status.",
        2: "'The blind man' leads with the disability label rather than the person.",
        3: "'Handicapped' is considered outdated and offensive terminology, and 'handicapped people' is not people-first language."
      },
      topicLinks: ['people-first-language', 'inclusive-language', 'disability-etiquette'],
      difficulty: 'easy',
      tags: ['etiquette', 'language']
    },
    {
      id: 178,
      question: "Identity-first language (e.g., 'Deaf person,' 'autistic person') is sometimes preferred because:",
      options: [
        "It is always considered more respectful than people-first language",
        "Some communities embrace disability as a core part of their identity and culture, not something to be separated from personhood",
        "It is required by law in all countries",
        "Medical professionals mandate its use"
      ],
      correct: 1,
      explanation: "Some disability communities, particularly the Deaf community and many autistic self-advocates, prefer identity-first language because they view their disability as an integral, valued part of who they are — not something to distance from with 'person with' phrasing.",
      wrongExplanations: {
        0: "Neither form is universally more respectful; preference varies by individual and community. The best practice is to ask and respect individual preferences.",
        2: "No country mandates identity-first language by law; it is a matter of community preference and respect.",
        3: "Medical professionals do not mandate identity-first language; language preferences are driven by disability communities themselves."
      },
      topicLinks: ['identity-first-language', 'inclusive-language', 'disability-etiquette', 'deaf-culture'],
      difficulty: 'medium',
      tags: ['etiquette', 'language']
    },
    {
      id: 179,
      question: "When interacting with a person who uses a wheelchair, which of the following is MOST appropriate?",
      options: [
        "Push their wheelchair without asking to help them move faster",
        "Lean on or touch their wheelchair casually during conversation",
        "Speak to them at eye level when possible and never touch their wheelchair without permission",
        "Speak louder because they may also have hearing difficulties"
      ],
      correct: 2,
      explanation: "A wheelchair is part of a person's personal space. Best practice is to speak at eye level (sit down if conversation will be extended), never touch or lean on the wheelchair without permission, and treat the person with the same respect as anyone else.",
      wrongExplanations: {
        0: "Never push someone's wheelchair without their explicit permission — this violates their autonomy and personal space.",
        1: "Leaning on or touching a wheelchair is like leaning on the person; it invades personal space and should be avoided.",
        3: "Using a wheelchair does not imply hearing loss; speaking louder is based on an incorrect assumption and can be patronizing."
      },
      topicLinks: ['disability-etiquette', 'interaction-guidelines'],
      difficulty: 'easy',
      tags: ['etiquette']
    },
    {
      id: 180,
      question: "When communicating with a person who has a speech disability and uses an AAC device, you should:",
      options: [
        "Finish their sentences to save time",
        "Pretend to understand even if you don't",
        "Be patient, allow extra time, and ask for clarification if needed without pretending to understand",
        "Speak to their companion instead"
      ],
      correct: 2,
      explanation: "Best practice is to be patient, give the person time to communicate, ask for clarification when needed, and never pretend to understand. Speaking directly to the person (not a companion) shows respect for their autonomy.",
      wrongExplanations: {
        0: "Finishing someone's sentences is presumptuous and disrespectful; allow them to complete their own communication.",
        1: "Pretending to understand leads to miscommunication and is disrespectful; honest clarification is always better.",
        3: "Speaking to a companion instead of the person directly is patronizing and denies their autonomy."
      },
      topicLinks: ['disability-etiquette', 'aac', 'aac-devices', 'interaction-guidelines'],
      difficulty: 'easy',
      tags: ['etiquette']
    },
    // =============================================
    // KNOWLEDGE BASE GAPS & UNDERREPRESENTED TOPICS (181-194)
    // =============================================
    {
      id: 181,
      question: "A speech-language pathologist is evaluating AAC options for a young child with cerebral palsy who has limited fine motor control but can point with a closed fist. Which AAC solution is MOST appropriate as a starting point?",
      options: [
        "A high-tech eye-gaze speech-generating device",
        "A low-tech picture communication board with large symbols the child can indicate by pointing",
        "A standard keyboard with word prediction software",
        "No AAC should be introduced until the child develops natural speech"
      ],
      correct: 1,
      explanation: "AAC solutions range from low-tech (picture boards, alphabet boards, symbol cards) to high-tech (speech-generating devices with eye tracking). Best practice is to start with the simplest effective option. Since this child can point, a large-symbol picture board matches their current motor abilities while building communication skills. More complex technology can be introduced later as needs evolve.",
      wrongExplanations: {
        0: "Eye-gaze devices are powerful but are typically recommended when a person cannot reliably use their hands or other body parts to make selections. Since this child can point, a simpler solution is more appropriate to start with.",
        2: "A standard keyboard requires fine motor skills that this child lacks due to limited fine motor control. This would create a barrier rather than support communication.",
        3: "Withholding AAC is harmful. Research consistently shows that AAC does not prevent speech development — it supports communication and can actually facilitate speech. Early AAC intervention is recommended."
      },
      topicLinks: ['aac-devices', 'speech-disabilities'],
      difficulty: 'medium',
      tags: ['assistive-technology', 'aac']
    },
    {
      id: 182,
      question: "Eye-gaze AAC technology tracks a user's eye movements to select words or symbols on a screen, which are then spoken aloud by the device. For which group of people is this technology MOST critical?",
      options: [
        "People with mild hearing loss who need amplification",
        "People with conditions like ALS or severe cerebral palsy who cannot reliably use their hands or voice",
        "People with dyslexia who need reading support",
        "People with low vision who need screen magnification"
      ],
      correct: 1,
      explanation: "Eye-gaze AAC technology is most critical for people who have intact cognitive and visual abilities but cannot use their hands, body, or voice to communicate — such as people with ALS (amyotrophic lateral sclerosis), locked-in syndrome, or severe cerebral palsy. For these individuals, eye movement may be their only reliable voluntary motor control, making eye-gaze technology a lifeline for communication.",
      wrongExplanations: {
        0: "People with hearing loss benefit from hearing assistive technologies like hearing aids, cochlear implants, or hearing loops — not eye-gaze AAC devices, which are designed for speech output, not sound amplification.",
        2: "People with dyslexia benefit from text-to-speech tools, adjustable fonts, and reading support software. Eye-gaze AAC is designed for people who cannot speak or use their hands, not for reading difficulties.",
        3: "People with low vision benefit from screen magnifiers and large displays. Eye-gaze AAC is a communication tool for people who cannot speak, not a visual accommodation."
      },
      topicLinks: ['aac-devices', 'mobility-disabilities'],
      difficulty: 'easy',
      tags: ['assistive-technology', 'aac']
    },
    {
      id: 183,
      question: "You are helping plan an accessible conference. The venue needs to accommodate attendees who are deaf or hard of hearing during keynote presentations in a large auditorium. Which combination of accommodations provides the MOST comprehensive access?",
      options: [
        "Providing printed copies of all slides before each session",
        "Installing a hearing loop (induction loop) system, providing an FM system option, and arranging CART (Communication Access Realtime Translation) captioning",
        "Placing speakers closer to the front rows so sound is louder",
        "Asking all presenters to speak slowly and face the audience"
      ],
      correct: 1,
      explanation: "Comprehensive hearing access at events requires multiple complementary systems: hearing loops transmit audio directly to telecoil-equipped hearing aids, FM systems provide wireless transmission for other hearing device users, and CART provides real-time text captioning for people who are deaf or do not use hearing aids. Together, these serve the widest range of needs — no single solution works for everyone.",
      wrongExplanations: {
        0: "Printed slides help but do not provide access to the spoken content of presentations, audience questions, or real-time discussion. They are a supplement, not a primary accommodation.",
        2: "Louder sound does not help people who are deaf and provides minimal benefit for hearing aid users, who need cleaner signal delivery (like hearing loops) rather than just more volume. It may also be uncomfortably loud for others.",
        3: "While speaking clearly and facing the audience helps some lip-readers, this alone is vastly insufficient. Most people cannot rely on lip reading alone, and it does nothing for people who are fully deaf."
      },
      topicLinks: ['hearing-assistive-tech', 'auditory-disabilities'],
      difficulty: 'hard',
      tags: ['assistive-technology', 'hearing']
    },
    {
      id: 184,
      question: "A software development team is building a mobile banking app. Which feature BEST supports users who are deaf or hard of hearing when the app needs to alert them about important account activity?",
      options: [
        "An audio alarm that plays at maximum volume",
        "Visual alerts (screen flash, banner notification) combined with haptic/vibration feedback",
        "A voice call to the user's phone number",
        "Sending alerts only by postal mail for security"
      ],
      correct: 1,
      explanation: "For users who are deaf or hard of hearing, alerts must use non-auditory channels. Visual alerts (screen flashes, color-coded banners, on-screen notifications) combined with haptic feedback (vibration) ensure that important information reaches the user through sight and touch. This multi-sensory approach follows the principle of not relying on any single sense for critical information.",
      wrongExplanations: {
        0: "Audio-only alerts, even at high volume, are inaccessible to people who are deaf. Volume increases do not help when a person cannot perceive sound. Alerts must be available through non-auditory channels.",
        2: "A voice call is audio-based and inaccessible to people who are deaf. Even for hard-of-hearing users, phone calls can be difficult. Text-based and visual notifications are far more accessible.",
        3: "Postal mail is far too slow for time-sensitive account alerts and does not leverage the real-time notification capabilities that mobile devices offer through visual and haptic channels."
      },
      topicLinks: ['hearing-assistive-tech', 'auditory-disabilities'],
      difficulty: 'easy',
      tags: ['assistive-technology', 'hearing']
    },
    {
      id: 185,
      question: "Why are refreshable braille displays considered essential assistive technology for people who are deaf-blind, rather than simply an alternative to screen readers?",
      options: [
        "Braille displays are cheaper than screen readers",
        "Braille displays produce larger text that is easier to read",
        "Screen readers produce audio output, which is inaccessible to someone who is also deaf — braille displays convert digital text to tactile output that does not rely on hearing",
        "Braille displays work without electricity, making them more portable"
      ],
      correct: 2,
      explanation: "For deaf-blind users, the combination of vision loss and hearing loss eliminates both visual and auditory channels for receiving information. Screen readers output information as synthesized speech — useless if the person cannot hear. Refreshable braille displays solve this by converting digital text into tactile braille characters that can be read by touch, making them not just preferred but essential for deaf-blind computer access.",
      wrongExplanations: {
        0: "Refreshable braille displays are actually quite expensive (often $3,000–$15,000). Cost is not the reason they are essential for deaf-blind users — the reason is that they provide tactile output when both audio and visual output are inaccessible.",
        1: "Braille displays do not produce larger text; they produce raised tactile dots in braille patterns. Their importance for deaf-blind users is about providing a tactile channel, not about text size.",
        3: "Refreshable braille displays are electronic devices that require power. Their essentialness for deaf-blind users is about providing a tactile output channel, not about portability or power requirements."
      },
      topicLinks: ['refreshable-braille', 'deaf-blindness'],
      difficulty: 'medium',
      tags: ['assistive-technology', 'deaf-blindness']
    },
    {
      id: 186,
      question: "How do a screen reader and a refreshable braille display work together to provide access to digital content?",
      options: [
        "The braille display replaces the screen reader entirely and reads web pages on its own",
        "The screen reader processes the digital content and sends text to the braille display, which raises and lowers pins to form braille characters line by line",
        "The braille display converts speech from the screen reader into braille",
        "The screen reader translates braille input from the user into text on screen"
      ],
      correct: 1,
      explanation: "Screen readers and refreshable braille displays work as a team: the screen reader software (like JAWS or NVDA) interprets the digital content — reading the page structure, text, and interactive elements. It then sends this text to the braille display, which has rows of small pins that raise and lower to form braille characters. The user reads each line by touch, and can navigate forward through the content. The screen reader does the processing; the braille display provides the tactile output.",
      wrongExplanations: {
        0: "A braille display cannot process web pages or digital content on its own. It is an output device that depends on a screen reader to interpret the content and send it text to display in braille.",
        2: "The braille display does not convert audio speech into braille. It receives text data directly from the screen reader software, which sends the content as text — not as audio — to the display.",
        3: "While braille displays can serve as input devices (with braille keys), the question asks about how they provide access to content. The primary relationship is that the screen reader sends content to the braille display for tactile reading."
      },
      topicLinks: ['refreshable-braille', 'screen-readers'],
      difficulty: 'medium',
      tags: ['assistive-technology', 'braille']
    },
    {
      id: 187,
      question: "A person's available sensory inputs are limited to touch, smell, and taste. They cannot see or hear. Which type of disability does this person MOST likely have?",
      options: [
        "A visual disability only",
        "An auditory disability only",
        "Deaf-blindness — a combined vision and hearing loss",
        "A cognitive disability affecting sensory processing"
      ],
      correct: 2,
      explanation: "When a person cannot use either vision or hearing, leaving only touch, smell, and taste as sensory channels, this describes deaf-blindness — a combined loss of both vision and hearing. Deaf-blindness is considered its own distinct disability category because the combination creates unique challenges far beyond what either condition alone would cause. Communication and information access must rely entirely on tactile methods.",
      wrongExplanations: {
        0: "A visual disability alone would leave hearing intact, meaning the person could still receive information through sound, speech, and audio. The scenario describes loss of both distance senses.",
        1: "An auditory disability alone would leave vision intact, meaning the person could still see, read text, and use visual information. The scenario describes loss of both vision and hearing.",
        3: "Sensory processing disorders affect how the brain interprets sensory input, not whether the senses themselves function. The scenario describes a person who lacks both visual and auditory input entirely, pointing to deaf-blindness."
      },
      topicLinks: ['deaf-blindness', 'multiple-disabilities'],
      difficulty: 'medium',
      tags: ['disability-types', 'deaf-blindness']
    },
    {
      id: 188,
      question: "Which of the following is a recognized communication method used by people who are deaf-blind?",
      options: [
        "Standard American Sign Language performed at a distance across a room",
        "Tactile sign language, where the deaf-blind person places their hands over the signer's hands to feel the signs being formed",
        "Written notes in standard print held up for the person to read",
        "Audio recordings played through headphones at high volume"
      ],
      correct: 1,
      explanation: "Tactile sign language (also called hand-over-hand signing) is a key communication method for deaf-blind people. The deaf-blind person places their hands over the signer's hands to feel the shape, movement, and position of each sign. Other methods include print on palm (tracing letters on the person's palm), close-range sign language (for those with some remaining vision), and communication through refreshable braille devices.",
      wrongExplanations: {
        0: "Standard sign language performed at a distance requires vision to see the signs. A person who is deaf-blind cannot visually perceive signs across a room. Tactile or close-range methods are needed instead.",
        2: "Standard print requires vision to read. A person who is deaf-blind cannot read printed notes visually. Tactile methods like braille, print-on-palm, or tactile sign language are used instead.",
        3: "Audio recordings require hearing to perceive. A person who is deaf-blind cannot access information through auditory channels, even at high volume. Tactile methods must be used."
      },
      topicLinks: ['deaf-blindness'],
      difficulty: 'medium',
      tags: ['disability-types', 'deaf-blindness', 'communication']
    },
    {
      id: 189,
      question: "As people age, they frequently acquire multiple disabilities simultaneously — such as declining vision, hearing loss, reduced mobility, and cognitive changes. Why is this pattern particularly important for accessibility planning?",
      options: [
        "Because older adults do not use technology, so accessibility does not apply to them",
        "Because age-related changes are always minor and do not require accommodations",
        "Because the growing aging population means that designing for single disabilities is insufficient — products and environments must address multiple, intersecting access needs",
        "Because aging is a medical problem that should be solved before worrying about accessibility"
      ],
      correct: 2,
      explanation: "Aging commonly brings multiple simultaneous changes: presbyopia (age-related vision loss), presbycusis (age-related hearing loss), reduced dexterity and mobility, and sometimes cognitive changes. With the global population aging rapidly, accessibility planning must account for these intersecting needs. A person may need larger text AND captioned audio AND simplified navigation simultaneously. Designing only for single, isolated disabilities misses the reality of how many people actually experience disability.",
      wrongExplanations: {
        0: "This is a harmful myth. Older adults are increasingly active technology users. In many countries, internet use among people over 65 has grown dramatically. Accessibility is highly relevant to this population.",
        1: "Age-related changes can significantly impact daily functioning. Vision loss may prevent reading standard text, hearing loss may prevent following conversations, and mobility changes may prevent using stairs. These are not minor issues.",
        3: "Framing aging purely as a medical problem to be 'solved' reflects the medical model's limitations. Accessible design (a social model approach) ensures that environments and products work for people as they age, regardless of medical intervention."
      },
      topicLinks: ['disability-demographics', 'multiple-disabilities'],
      difficulty: 'hard',
      tags: ['demographics', 'aging', 'disability-types']
    },
    {
      id: 190,
      question: "An employer notices that several older employees are struggling with the company's new small-screen digital tools due to vision and dexterity changes. A manager suggests sending all employees over 55 to occupational health for assessment. How would applying the social model of disability change this approach?",
      options: [
        "The social model would agree that the employees need medical assessment to determine their limitations",
        "The social model would suggest the employees retire early since they cannot keep up with technology",
        "The social model would focus on redesigning the digital tools to be usable by people with varying vision and dexterity — making the tools adapt to the users, not the other way around",
        "The social model would recommend providing separate, older technology only for employees over 55"
      ],
      correct: 2,
      explanation: "The social model of disability locates the problem in the environment, not the person. Rather than treating age-related changes as a medical problem requiring individual assessment (medical model thinking), the social model asks: why are these tools designed so that they exclude people with common vision and dexterity variations? The solution is to redesign tools with adjustable text size, sufficient contrast, and flexible input methods — benefiting all users, not just older employees.",
      wrongExplanations: {
        0: "Sending employees for medical assessment treats the employees as the problem (medical model). The social model instead asks what barriers the tools themselves create and how to remove those barriers.",
        1: "Suggesting retirement because of inaccessible tools is discriminatory and reflects neither the social model nor good practice. The social model says the tools should change, not the people.",
        3: "Providing separate, older technology is segregation, not inclusion. The social model advocates for universal design — making the same tools work for everyone through flexible design, rather than creating separate systems."
      },
      topicLinks: ['social-model', 'medical-model', 'disability-demographics'],
      difficulty: 'hard',
      tags: ['disability-models', 'aging', 'scenario']
    },
    {
      id: 191,
      question: "During a business meeting, you need to communicate with a deaf colleague through a sign language interpreter. Where should you direct your eye contact and speech?",
      options: [
        "Look at and speak to the interpreter, since they are conveying your message",
        "Look at and speak directly to your deaf colleague, as you would with any other person in the conversation",
        "Alternate your gaze equally between the interpreter and your deaf colleague",
        "Look down at your notes to avoid making anyone uncomfortable"
      ],
      correct: 1,
      explanation: "When speaking through a sign language interpreter, always look at and speak directly to the deaf person — not the interpreter. Say 'Do you agree with the proposal?' not 'Ask them if they agree.' The interpreter is a communication facilitator, not a participant in the conversation. Directing your attention to the deaf person shows respect, acknowledges their presence as an equal participant, and follows standard disability etiquette.",
      wrongExplanations: {
        0: "Speaking to the interpreter rather than the deaf person treats the deaf individual as if they are not present in the conversation. It is disrespectful and excludes them from direct interaction. The interpreter is a tool for communication, not the conversation partner.",
        2: "While it might seem polite, alternating gaze treats the interpreter as a co-participant rather than a facilitator. Standard etiquette is to maintain focus on the deaf person, just as you would look at anyone you are speaking with.",
        3: "Avoiding eye contact entirely disengages from the conversation and can make the deaf person feel ignored or that you are uncomfortable with them. Direct, natural eye contact is appropriate and respectful."
      },
      topicLinks: ['disability-etiquette'],
      difficulty: 'easy',
      tags: ['etiquette', 'deaf', 'communication']
    },
    {
      id: 192,
      question: "You see a person using crutches approaching a heavy door that appears difficult to open. What is the MOST appropriate response according to disability etiquette?",
      options: [
        "Rush ahead to open the door without saying anything",
        "Ignore the situation entirely because offering help might be offensive",
        "Ask the person if they would like assistance before acting",
        "Open the door and hold it while loudly announcing that you are helping"
      ],
      correct: 2,
      explanation: "The cornerstone of disability etiquette is respecting autonomy. The correct approach is to ask before helping — a simple 'Would you like me to get the door?' respects the person's right to accept or decline. Many people with disabilities have developed effective techniques for managing daily tasks and may not need or want help. Asking first treats them as capable adults who can make their own decisions.",
      wrongExplanations: {
        0: "Rushing to help without asking assumes the person cannot manage and removes their choice. It can be startling, patronizing, or may interfere with a technique they have for managing doors. Always ask first.",
        1: "Ignoring someone who might benefit from assistance is not respectful — it is avoidant. There is nothing offensive about a polite offer of help. The key is asking rather than assuming, and accepting their answer gracefully.",
        3: "Opening the door while loudly announcing your help draws unnecessary attention and can be embarrassing. A quiet offer, followed by quiet assistance if accepted, is far more respectful of the person's dignity."
      },
      topicLinks: ['disability-etiquette', 'mobility-disabilities'],
      difficulty: 'easy',
      tags: ['etiquette', 'scenario']
    },
    {
      id: 193,
      question: "Which of the following phrases is considered inappropriate and should be AVOIDED when discussing disability, and why?",
      options: [
        "'Person with a disability' — because it is overly formal",
        "'Wheelchair user' — because it mentions the assistive device",
        "'Suffers from cerebral palsy' — because it frames disability as inherent suffering and positions the person as a victim",
        "'Deaf person' — because it uses identity-first language"
      ],
      correct: 2,
      explanation: "'Suffers from' implies that disability is inherently tragic, painful, and defined by suffering. It positions the person as a victim rather than someone who simply has a different experience of the world. Similarly, terms like 'wheelchair-bound' (implies imprisonment rather than mobility), 'handicapped' (outdated and considered offensive by many), and 'special needs' (euphemistic othering) should be avoided. Preferred alternatives: 'has cerebral palsy,' 'uses a wheelchair,' 'person with a disability,' 'accessibility needs.'",
      wrongExplanations: {
        0: "'Person with a disability' is widely accepted people-first language and is not overly formal. It is recommended by many disability organizations and style guides as a respectful default.",
        1: "'Wheelchair user' is preferred language. It accurately describes someone who uses a wheelchair as a tool for mobility. The term to avoid is 'wheelchair-bound,' which implies the person is trapped or confined.",
        3: "'Deaf person' is widely embraced by the Deaf community as identity-first language. Many Deaf individuals prefer this because deafness is central to their cultural identity. It is not considered inappropriate."
      },
      topicLinks: ['inclusive-language', 'disability-etiquette'],
      difficulty: 'medium',
      tags: ['inclusive-language', 'etiquette']
    },
    {
      id: 194,
      question: "A style guide team is debating whether to mandate people-first language ('person with autism') or identity-first language ('autistic person') across all company communications. What does current best practice in inclusive language recommend?",
      options: [
        "Always use people-first language in every situation because it is universally preferred",
        "Always use identity-first language because it is more modern and progressive",
        "Avoid mentioning disability entirely to prevent causing offense",
        "Recognize that both forms are valid — some communities prefer identity-first (the Deaf community, many autistic people) while others prefer people-first — and default to the individual's or community's stated preference"
      ],
      correct: 3,
      explanation: "There is no single correct form that works for all disability communities. The Deaf community widely prefers 'Deaf person' (identity-first) because deafness is a cultural identity. Many autistic self-advocates prefer 'autistic person' because they view autism as integral to who they are. Others prefer people-first language ('person with a disability') to emphasize personhood before diagnosis. Best practice is to learn community preferences, respect individual preferences when known, and use people-first language as a safe default when preferences are unknown.",
      wrongExplanations: {
        0: "Mandating people-first language ignores the strong preferences of communities like the Deaf community and many autistic self-advocates who find people-first language distancing or even offensive to their identity. One-size-fits-all mandates are not inclusive.",
        1: "Mandating identity-first language ignores that many people with disabilities prefer people-first language. Neither form is universally preferred, and claiming one is 'more progressive' oversimplifies a nuanced cultural conversation.",
        2: "Avoiding disability language entirely erases disabled people from the conversation and can contribute to stigma through silence. Disability is not a negative thing that should be hidden — using respectful, appropriate language is far better than avoidance."
      },
      topicLinks: ['inclusive-language'],
      difficulty: 'hard',
      tags: ['inclusive-language', 'etiquette']
    },
    // =============================================
    // EXPANDED DISABILITY STATISTICS (195-202)
    // =============================================
    {
      id: 195,
      question: "According to the WHO, this neurological condition affects approximately 50 million people worldwide, making it one of the most common neurological diseases globally. Which condition is it?",
      options: [
        "Parkinson's disease",
        "Epilepsy",
        "Multiple sclerosis",
        "Huntington's disease"
      ],
      correct: 1,
      explanation: "The WHO reports that around 50 million people worldwide live with epilepsy, and nearly 80% of them live in low- and middle-income countries. Epilepsy is one of the most common neurological diseases globally.",
      wrongExplanations: {
        0: "Parkinson's disease is a significant neurological condition but affects far fewer people — roughly 10 million worldwide.",
        2: "Multiple sclerosis affects approximately 2.8 million people worldwide, far fewer than 50 million.",
        3: "Huntington's disease is a rare inherited neurological condition affecting only about 3–10 per 100,000 people."
      },
      topicLinks: ['disability-demographics'],
      difficulty: 'medium',
      tags: ['statistics', 'neurological']
    },
    {
      id: 196,
      question: "According to Eurostat (EU-SILC 2022 data), approximately what share of the EU population aged 16 and over reports a disability (activity limitation)?",
      options: [
        "About 10%",
        "About 16%",
        "More than one-quarter (roughly 27%)",
        "About 40%"
      ],
      correct: 2,
      explanation: "Eurostat's 2022 EU-SILC data shows that more than one-quarter of the EU population aged 16 and over had a disability (activity limitation) — commonly cited as about 27%. This is notably higher than the 16% global figure from the WHO because the EU population is older on average and uses a broader self-reported definition of activity limitation.",
      wrongExplanations: {
        0: "10% is too low — no major EU data source reports a figure this low.",
        1: "16% is the WHO's global prevalence, not the EU-specific rate. Exam questions often use this as a distractor to test whether you can distinguish global from regional statistics.",
        3: "40% would overstate the EU figure. While some Member States like Latvia (~38.5%) approach this, the EU-wide average is closer to 27%."
      },
      topicLinks: ['disability-demographics', 'eu-accessibility'],
      difficulty: 'hard',
      tags: ['statistics', 'eu']
    },
    {
      id: 197,
      question: "The WHO estimates that approximately 1.3 billion people worldwide experience a significant disability. What percentage of the global population does this represent?",
      options: [
        "About 5%",
        "About 16% (roughly 1 in 6)",
        "About 30%",
        "About 50%"
      ],
      correct: 1,
      explanation: "Per the WHO's 2023 fact sheet on disability and health, approximately 1.3 billion people — about 16% of the global population, or roughly 1 in 6 — experience a significant disability. This figure is growing because of aging populations and increases in noncommunicable diseases.",
      wrongExplanations: {
        0: "5% is far too low — the actual global figure is more than triple this.",
        2: "30% exceeds even regional figures like the EU (~27%) and would overstate the global rate.",
        3: "50% is dramatically higher than any credible global disability prevalence estimate."
      },
      topicLinks: ['disability-demographics'],
      difficulty: 'easy',
      tags: ['statistics', 'global']
    },
    {
      id: 198,
      question: "According to the WHO, this sensory impairment affects approximately 430 million people worldwide and requires rehabilitation. Which condition does this describe?",
      options: [
        "Low vision",
        "Disabling hearing loss",
        "Deaf-blindness",
        "Congenital blindness"
      ],
      correct: 1,
      explanation: "The WHO reports that over 5% of the world's population — about 430 million people, including 34 million children — have disabling hearing loss that requires rehabilitation. By 2050, nearly 2.5 billion people are projected to have some degree of hearing loss, with more than 700 million requiring rehabilitation.",
      wrongExplanations: {
        0: "Low vision falls under the broader vision-impairment umbrella. The WHO reports approximately 2.2 billion people have some form of vision impairment, which is a much larger number than 430 million.",
        2: "Deaf-blindness is a relatively rare combined sensory impairment affecting a much smaller population.",
        3: "Congenital blindness alone affects far fewer people — the 430 million figure specifically describes disabling hearing loss."
      },
      topicLinks: ['disability-demographics'],
      difficulty: 'medium',
      tags: ['statistics', 'sensory']
    },
    {
      id: 199,
      question: "Which category of disability is most commonly cited as the most prevalent globally?",
      options: [
        "Motor / physical disabilities",
        "Sensory disabilities (vision and hearing)",
        "Cognitive disabilities",
        "Psychiatric disabilities"
      ],
      correct: 2,
      explanation: "Cognitive disabilities are the most common category of disability globally. This broad category includes learning disabilities, intellectual disabilities, ADHD, memory impairments, and age-related cognitive decline. Because cognitive disabilities cover such a wide range of conditions, they represent the largest overall group.",
      wrongExplanations: {
        0: "Motor/physical disabilities are common but not the most prevalent category globally.",
        1: "Sensory disabilities like vision impairment (2.2B) affect enormous numbers, but the broad cognitive category — which includes many distinct conditions — is still the most commonly cited as most prevalent.",
        3: "Psychiatric conditions like depression and anxiety are widespread, but they are typically reported as a separate mental health category and are not usually cited as the single most common disability type."
      },
      topicLinks: ['disability-demographics', 'cognitive-disabilities'],
      difficulty: 'medium',
      tags: ['statistics', 'cognitive']
    },
    {
      id: 200,
      question: "The WHO reports that this neurodevelopmental condition affects approximately 1 in 127 people globally based on 2021 estimates. Which condition is it?",
      options: [
        "Down syndrome",
        "ADHD",
        "Autism spectrum disorder",
        "Dyslexia"
      ],
      correct: 2,
      explanation: "The WHO estimates that in 2021 about 1 in 127 persons had autism spectrum disorder, although reported prevalence varies substantially across studies and some national sources (like the US CDC) cite higher rates for children specifically.",
      wrongExplanations: {
        0: "Down syndrome is a genetic condition occurring in approximately 1 in 700 births, which is much rarer than autism.",
        1: "ADHD is far more prevalent than 1 in 127 — it affects roughly 5–10% of children, or about 1 in 10 to 1 in 20.",
        3: "Dyslexia affects an estimated 5–10% of the population — much more prevalent than 1 in 127."
      },
      topicLinks: ['disability-demographics', 'cognitive-disabilities'],
      difficulty: 'hard',
      tags: ['statistics', 'neurodevelopmental']
    },
    {
      id: 901,
      question: "According to the WHO, approximately how many people worldwide have some form of vision impairment (near or distance)?",
      options: [
        "About 430 million",
        "About 1 billion",
        "About 2.2 billion",
        "About 4 billion"
      ],
      correct: 2,
      explanation: "The WHO reports that globally, at least 2.2 billion people have a near or distance vision impairment. For at least 1 billion of these people, the vision impairment could have been prevented or has yet to be addressed. This is the headline sensory statistic often cited on the exam.",
      wrongExplanations: {
        0: "430 million is the WHO's figure for disabling hearing loss, not vision impairment. Watch for this as a distractor swap.",
        1: "1 billion represents the subset of the 2.2 billion whose vision impairment could have been prevented or is unaddressed — not the total.",
        3: "4 billion would be about half the world's population, which exceeds all published vision impairment estimates."
      },
      topicLinks: ['disability-demographics'],
      difficulty: 'medium',
      tags: ['statistics', 'sensory']
    },
    {
      id: 902,
      question: "Which statement about global vs. EU disability prevalence is most accurate?",
      options: [
        "The WHO global figure (~16%) and the Eurostat EU figure (~27%) describe the same measurement and should match",
        "The EU figure is higher partly because the EU population is older on average and uses a broader self-reported activity-limitation definition",
        "The EU figure is lower than the global figure because European healthcare reduces disability",
        "The WHO and Eurostat use identical methodologies, so any difference is a reporting error"
      ],
      correct: 1,
      explanation: "Global and regional disability figures differ because of methodology and demographics. The WHO's ~16% global figure uses a 'significant disability' threshold across all ages and income levels, while Eurostat's ~27% figure is for adults aged 16+ in the EU using a self-reported activity-limitation measure from the EU-SILC survey. The EU population is also older on average, which increases measured disability.",
      wrongExplanations: {
        0: "The two figures use different age ranges, definitions, and survey methodologies — they are not directly comparable.",
        2: "EU disability rates are higher than the global average, not lower. Better healthcare access leads to longer lifespans, which in turn increases the measured prevalence of age-related disability.",
        3: "The methodologies differ significantly; differences are a feature of the definitions, not errors."
      },
      topicLinks: ['disability-demographics', 'eu-accessibility'],
      difficulty: 'hard',
      tags: ['statistics', 'methodology']
    },
    // =============================================
    // DISABILITY-TO-SOLUTION MATCHING (903-910)
    // =============================================
    {
      id: 903,
      question: "A person who is blind from birth and has never had any usable vision would benefit MOST from which of the following?",
      options: [
        "A screen magnifier with high-contrast color themes",
        "A screen reader combined with a refreshable braille display",
        "Closed captions on all video content",
        "Voice control software for hands-free operation"
      ],
      correct: 1,
      explanation: "A person who is blind relies on non-visual access to information. A screen reader converts on-screen content to synthesized speech, and a refreshable braille display renders it as tactile braille — together they provide complete non-visual access to digital content.",
      wrongExplanations: {
        0: "Screen magnifiers benefit people with low vision who have some usable sight. They are not useful to someone who is blind.",
        2: "Captions benefit people who are Deaf or hard of hearing, not blind users. Audio description (not captions) is what benefits blind users consuming video.",
        3: "Voice control primarily benefits people with motor disabilities. A blind person can typically use a keyboard with a screen reader without needing voice input."
      },
      topicLinks: ['screen-readers', 'visual-disabilities'],
      difficulty: 'easy',
      tags: ['assistive-tech', 'matching']
    },
    {
      id: 904,
      question: "A person with severe motor impairment from ALS who cannot use their hands and has very limited head movement would benefit MOST from which assistive technology?",
      options: [
        "A standard ergonomic keyboard",
        "Screen magnification software",
        "An eye-gaze (eye tracking) communication and computer access system",
        "A refreshable braille display"
      ],
      correct: 2,
      explanation: "When someone has extremely limited motor control — unable to use their hands and with very limited head movement — eye-gaze technology allows them to control a computer and communicate using only their eye movements. Users select letters, words, or commands by looking at targets on the screen.",
      wrongExplanations: {
        0: "An ergonomic keyboard still requires hand use, which this individual does not have.",
        1: "Screen magnification addresses vision, not motor access.",
        3: "Refreshable braille displays are for people who are blind and read braille, not for people with motor disabilities."
      },
      topicLinks: ['mobility-disabilities'],
      difficulty: 'medium',
      tags: ['assistive-tech', 'matching', 'motor']
    },
    {
      id: 905,
      question: "A student with severe dyslexia struggles to decode printed text, even though their reading comprehension is strong when content is read aloud. Which tool is MOST likely to help?",
      options: [
        "A text-to-speech tool that reads on-screen content aloud",
        "A screen magnifier",
        "Switch access controls",
        "Closed captions"
      ],
      correct: 0,
      explanation: "Text-to-speech (TTS) tools read digital text aloud, bypassing the decoding barrier that dyslexia creates. Because the student's comprehension is strong when content is heard, TTS lets them access the same material as their peers without the decoding bottleneck.",
      wrongExplanations: {
        1: "Magnification addresses vision size, not decoding.",
        2: "Switch access is for people with motor disabilities who cannot use a standard input device.",
        3: "Captions convert speech to text — the opposite of what a dyslexic reader needs."
      },
      topicLinks: ['cognitive-disabilities'],
      difficulty: 'easy',
      tags: ['assistive-tech', 'matching', 'cognitive']
    },
    {
      id: 906,
      question: "A child with cerebral palsy has significant motor control challenges and cannot reliably use a mouse or standard keyboard, but can reliably press a single large button. Which assistive technology is most appropriate?",
      options: [
        "A refreshable braille display",
        "A switch-access system with scanning",
        "A hearing loop",
        "A screen reader"
      ],
      correct: 1,
      explanation: "Switch access paired with on-screen scanning is designed exactly for this scenario. The computer highlights options sequentially, and the user presses a single switch (often a large button) when the desired option is highlighted. This provides full computer access with minimal motor demand.",
      wrongExplanations: {
        0: "Braille displays are for blind users, not motor users.",
        2: "Hearing loops are assistive listening devices for people with hearing aids.",
        3: "Screen readers are for people with visual impairments, not motor disabilities."
      },
      topicLinks: ['mobility-disabilities'],
      difficulty: 'medium',
      tags: ['assistive-tech', 'matching', 'motor']
    },
    {
      id: 907,
      question: "An adult with low vision (not blindness) has usable sight but needs text to be much larger and higher-contrast than standard displays provide. Which tool is MOST appropriate?",
      options: [
        "A screen reader with synthesized speech",
        "An eye-gaze communication system",
        "A screen magnifier with customizable color themes",
        "A single-switch scanning system"
      ],
      correct: 2,
      explanation: "People with low vision typically retain usable sight and benefit most from visual enhancements — magnification, customizable high-contrast color schemes, and cursor enhancements. Screen magnifiers let the user zoom the entire display and adjust colors to their preference.",
      wrongExplanations: {
        0: "Screen readers are primarily for people who are blind or have vision so limited that visual access is not practical. Someone with usable low vision typically prefers to continue reading visually with magnification.",
        1: "Eye-gaze is a motor-access technology.",
        3: "Switch scanning is a motor-access technology."
      },
      topicLinks: ['visual-disabilities'],
      difficulty: 'easy',
      tags: ['assistive-tech', 'matching', 'vision']
    },
    {
      id: 908,
      question: "A person with aphasia (language impairment) following a stroke has difficulty producing spoken words but can recognize pictures and symbols. Which solution would be MOST helpful for everyday communication?",
      options: [
        "A refreshable braille display",
        "A picture-based augmentative and alternative communication (AAC) app or device",
        "Closed captioning",
        "A screen reader"
      ],
      correct: 1,
      explanation: "Picture-based AAC systems let people with aphasia or other expressive communication disabilities communicate by selecting symbols or images. Many users can recognize and select pictures even when they cannot produce or recall spoken words, and modern AAC apps can generate spoken output from the selections.",
      wrongExplanations: {
        0: "Braille displays are for people who are blind and read braille.",
        2: "Captions convert speech to written text — this helps people who have trouble hearing speech, not people who have trouble producing it.",
        3: "Screen readers convert digital text to speech — they are output tools for visual impairment, not input tools for communication difficulties."
      },
      topicLinks: ['speech-disabilities', 'cognitive-disabilities'],
      difficulty: 'medium',
      tags: ['assistive-tech', 'matching', 'communication']
    },
    {
      id: 909,
      question: "A person who is Deaf-blind (has both significant hearing and vision loss) is meeting with a group of colleagues. Which communication method is MOST likely to work?",
      options: [
        "A laptop displaying captions on-screen",
        "A sign language interpreter standing at the front of the room",
        "A Support Service Provider (SSP) or tactile interpreter using methods such as Protactile or tactile sign language",
        "An assistive listening device broadcast to the room"
      ],
      correct: 2,
      explanation: "People who are Deaf-blind typically rely on tactile communication methods like tactile sign language, Protactile, or print-on-palm, facilitated by a Support Service Provider (SSP) or tactile interpreter. Visual captions and visual sign language both require sight, which rules them out for someone who is also blind.",
      wrongExplanations: {
        0: "Captions require usable vision.",
        1: "Visual sign language requires usable vision.",
        3: "Assistive listening devices require usable hearing."
      },
      topicLinks: ['auditory-disabilities', 'visual-disabilities', 'deaf-blindness'],
      difficulty: 'hard',
      tags: ['assistive-tech', 'matching', 'deaf-blind']
    },
    {
      id: 910,
      question: "A student with dyscalculia (a specific learning disability affecting number processing) is taking a math assessment. Which accommodation is MOST directly related to their disability?",
      options: [
        "Extended time and access to a calculator or math-support software",
        "A sign language interpreter",
        "A screen reader",
        "A wheelchair-accessible desk"
      ],
      correct: 0,
      explanation: "Dyscalculia specifically impairs number sense and numerical processing. The most directly relevant accommodations are extended time (to compensate for slower computation) and access to a calculator or dedicated math-support software, which reduces the cognitive load of basic numerical operations so the student can demonstrate their conceptual understanding.",
      wrongExplanations: {
        1: "A sign language interpreter addresses hearing access, not number processing.",
        2: "A screen reader addresses visual access, not number processing.",
        3: "A wheelchair-accessible desk addresses mobility, not number processing."
      },
      topicLinks: ['cognitive-disabilities'],
      difficulty: 'medium',
      tags: ['assistive-tech', 'matching', 'cognitive']
    },
    // =============================================
    // BUILT ENVIRONMENT — FLOOR SURFACES & ROUTES (911-914)
    // =============================================
    {
      id: 911,
      question: "According to ADA Standards §302.1, accessible floor and ground surfaces must have which three characteristics?",
      options: [
        "Smooth, polished, and level",
        "Stable, firm, and slip-resistant",
        "Textured, padded, and cushioned",
        "Flexible, pliable, and shock-absorbing"
      ],
      correct: 1,
      explanation: "ADA Standards §302.1 requires that accessible floor and ground surfaces be stable (not shifting under load), firm (not compressing significantly), and slip-resistant (providing adequate friction for canes, crutches, walkers, and wheelchair wheels). This three-word phrase is a classic exam answer.",
      wrongExplanations: {
        0: "Polished surfaces can be dangerously slippery — the opposite of slip-resistant.",
        2: "Padded or cushioned surfaces compress under wheelchair wheels, making them unstable and difficult to traverse. The requirement is firm, not soft.",
        3: "Pliable and shock-absorbing surfaces are unstable for wheelchair users and would violate the firm and stable requirements."
      },
      topicLinks: ['built-environment'],
      difficulty: 'medium',
      tags: ['ada', 'built-environment', 'floor-surfaces']
    },
    {
      id: 912,
      question: "ADA Standards §302.2 limits carpet pile height in accessible routes to what maximum?",
      options: [
        "1/8 inch",
        "1/2 inch",
        "1 inch",
        "2 inches"
      ],
      correct: 1,
      explanation: "ADA §302.2 limits carpet pile height to 1/2 inch maximum, measured to the backing, cushion, or pad. Carpet must be securely attached with a firm backing, and exposed edges must be fastened and trimmed. Deeper pile creates excessive rolling resistance for wheelchair users and is a tripping hazard for people using mobility aids.",
      wrongExplanations: {
        0: "1/8 inch would be stricter than the actual ADA requirement of 1/2 inch.",
        2: "1 inch is double the allowed maximum and would impede wheelchair travel.",
        3: "2 inches of pile would be impassable for most wheelchair users."
      },
      topicLinks: ['built-environment'],
      difficulty: 'hard',
      tags: ['ada', 'built-environment']
    },
    {
      id: 913,
      question: "ADA Standards §405.2 sets the maximum running slope for an accessible ramp at:",
      options: [
        "1:8",
        "1:10",
        "1:12",
        "1:20"
      ],
      correct: 2,
      explanation: "ADA §405.2 limits the running slope of accessible ramps to 1:12 — one inch of vertical rise for every twelve inches of horizontal run. Each single ramp run is also limited to a maximum rise of 30 inches before a landing is required. In alterations where space is limited, slightly steeper slopes (1:10 for ≤6\" rise, 1:8 for ≤3\" rise) are permitted as exceptions.",
      wrongExplanations: {
        0: "1:8 is only permitted as a space-limited exception for very small rises (≤3 inches), not as the standard maximum.",
        1: "1:10 is only permitted as a space-limited exception for ≤6 inches of rise.",
        3: "1:20 is the cut-off slope below which a walkway is not even considered a ramp — it is gentler than the ramp maximum."
      },
      topicLinks: ['built-environment'],
      difficulty: 'medium',
      tags: ['ada', 'built-environment', 'ramps']
    },
    {
      id: 914,
      question: "ADA Standards §403.5 requires that accessible routes have what minimum clear width?",
      options: [
        "24 inches",
        "32 inches",
        "36 inches",
        "48 inches"
      ],
      correct: 2,
      explanation: "ADA §403.5 requires accessible routes to have a minimum clear width of 36 inches. This may be reduced to 32 inches minimum at a point (for example, at a doorway) for a maximum length of 24 inches. The 36-inch minimum ensures most wheelchairs, walkers, and mobility scooters can pass comfortably.",
      wrongExplanations: {
        0: "24 inches is too narrow for most wheelchairs — it is not a valid minimum.",
        1: "32 inches is the allowable point reduction at a doorway, not the general minimum width for a route.",
        3: "48 inches exceeds the ADA minimum — wider is better, but 36 inches is the required minimum."
      },
      topicLinks: ['built-environment'],
      difficulty: 'medium',
      tags: ['ada', 'built-environment', 'routes']
    }
  ]
};
