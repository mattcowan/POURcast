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
      question: "Approximately what percentage of males have color vision deficiency (color blindness)?",
      options: [
        "1%",
        "4%",
        "8%",
        "15%"
      ],
      correct: 2,
      explanation: "Approximately 8% of males have some form of color vision deficiency. The much lower rate in females (about 0.5%) is because the most common types are linked to the X chromosome.",
      wrongExplanations: {
        0: "1% significantly underestimates the prevalence of color vision deficiency in males.",
        1: "4% is lower than the actual prevalence of approximately 8% in males.",
        3: "15% significantly overestimates the prevalence of color vision deficiency in males."
      },
      topicLinks: ['color-vision-deficiency'],
      difficulty: 'medium',
      tags: ['disability-types', 'visual', 'statistics']
    },
    {
      id: 123,
      question: "What is the approximate prevalence of color vision deficiency in females?",
      options: [
        "0.5%",
        "4%",
        "8%",
        "12%"
      ],
      correct: 0,
      explanation: "Approximately 0.5% of females have color vision deficiency, compared to about 8% of males. The lower rate in females is because the most common forms are X-linked recessive traits, requiring two affected X chromosomes in females.",
      wrongExplanations: {
        1: "4% is much higher than the actual prevalence of approximately 0.5% in females.",
        2: "8% is the prevalence rate for males, not females.",
        3: "12% is far higher than the actual prevalence in either sex."
      },
      topicLinks: ['color-vision-deficiency'],
      difficulty: 'medium',
      tags: ['disability-types', 'visual', 'statistics']
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
      topicLinks: ['aac', 'speech-disabilities', 'assistive-technology'],
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
      question: "JAWS (Job Access With Speech) is a screen reader PRIMARILY used by people with:",
      options: [
        "Motor disabilities",
        "Hearing disabilities",
        "Visual disabilities (blindness)",
        "Speech disabilities"
      ],
      correct: 2,
      explanation: "JAWS is a screen reader that converts on-screen text to synthesized speech or braille output. It is primarily used by people who are blind or have severe visual impairments to access computers and the web.",
      wrongExplanations: {
        0: "People with motor disabilities typically use alternative input devices (switches, voice recognition) rather than screen readers like JAWS.",
        1: "People with hearing disabilities need visual accommodations (captions, sign language), not audio-based screen readers.",
        3: "People with speech disabilities use AAC devices for communication, not screen readers. JAWS produces speech output but is not an assistive technology for speech disabilities."
      },
      topicLinks: ['screen-readers', 'jaws', 'assistive-technology'],
      difficulty: 'easy',
      tags: ['assistive-technology', 'emphasis']
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
      topicLinks: ['braille-displays', 'assistive-technology'],
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
      topicLinks: ['hearing-aids', 'hearing-loops', 'assistive-technology'],
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
      topicLinks: ['screen-readers', 'braille-displays', 'assistive-technology'],
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
      topicLinks: ['aac', 'voca', 'speech-disabilities', 'assistive-technology'],
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
      topicLinks: ['screen-readers', 'voice-recognition', 'aac', 'assistive-technology'],
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
      topicLinks: ['cochlear-implants', 'hearing-aids', 'assistive-technology'],
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
      topicLinks: ['braille-displays', 'deaf-blindness', 'assistive-technology'],
      difficulty: 'hard',
      tags: ['assistive-technology', 'scenario']
    },
    {
      id: 173,
      question: "Which of the following is NOT a screen reader?",
      options: [
        "JAWS",
        "NVDA",
        "Dragon NaturallySpeaking",
        "VoiceOver"
      ],
      correct: 2,
      explanation: "Dragon NaturallySpeaking is voice recognition software (speech input), not a screen reader (speech output). JAWS, NVDA, and VoiceOver are all screen readers that convert visual content to speech for blind users.",
      wrongExplanations: {
        0: "JAWS (Job Access With Speech) is one of the most widely used commercial screen readers.",
        1: "NVDA (NonVisual Desktop Access) is a free, open-source screen reader for Windows.",
        3: "VoiceOver is Apple's built-in screen reader for macOS and iOS devices."
      },
      topicLinks: ['screen-readers', 'voice-recognition', 'assistive-technology'],
      difficulty: 'medium',
      tags: ['assistive-technology', 'emphasis']
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
      topicLinks: ['aac', 'voca', 'speech-disabilities', 'assistive-technology'],
      difficulty: 'easy',
      tags: ['assistive-technology', 'scenario', 'emphasis']
    },
    {
      id: 175,
      question: "Which of the following statements about assistive technologies is INCORRECT?",
      options: [
        "Screen readers convert visual content to speech or braille for blind users",
        "AAC devices help people with speech disabilities communicate",
        "Dragon NaturallySpeaking is a screen reader used by blind people",
        "Sip-and-puff devices allow people with severe motor disabilities to control computers"
      ],
      correct: 2,
      explanation: "Dragon NaturallySpeaking is NOT a screen reader — it is voice recognition software used primarily by people with motor disabilities. Screen readers (JAWS, NVDA, VoiceOver) are the AT used by blind people.",
      wrongExplanations: {
        0: "This statement is correct: screen readers do convert visual content to speech or braille output for blind users.",
        1: "This statement is correct: AAC devices are designed to help people with speech disabilities communicate.",
        3: "This statement is correct: sip-and-puff devices detect breath patterns to control computers and wheelchairs for users with severe motor disabilities."
      },
      topicLinks: ['voice-recognition', 'screen-readers', 'assistive-technology'],
      difficulty: 'hard',
      tags: ['assistive-technology', 'emphasis']
    },

    // =============================================
    // ETIQUETTE & DEMOGRAPHICS (176-180)
    // =============================================
    {
      id: 176,
      question: "According to the World Health Organization, approximately what percentage of the global population has a disability?",
      options: [
        "5%",
        "10%",
        "16%",
        "25%"
      ],
      correct: 2,
      explanation: "The WHO estimates that approximately 16% of the global population — about 1.3 billion people — lives with some form of significant disability. This makes people with disabilities the world's largest minority group.",
      wrongExplanations: {
        0: "5% significantly underestimates the global disability prevalence according to WHO data.",
        1: "10% was an older estimate; the WHO's more recent data indicates approximately 16%.",
        3: "25% overestimates the current WHO estimate of approximately 16%."
      },
      topicLinks: ['disability-demographics', 'disability-statistics'],
      difficulty: 'medium',
      tags: ['demographics', 'statistics']
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
      topicLinks: ['people-first-language', 'disability-etiquette'],
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
      topicLinks: ['identity-first-language', 'disability-etiquette', 'deaf-culture'],
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
      topicLinks: ['disability-etiquette', 'aac', 'interaction-guidelines'],
      difficulty: 'easy',
      tags: ['etiquette']
    }
  ]
};
