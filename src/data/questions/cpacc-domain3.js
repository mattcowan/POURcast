export const domain3 = {
  id: 'domain3',
  courseId: 'cpacc',
  title: 'Standards, Laws & Management Strategies',
  iconName: 'scale',
  color: 'bg-emerald-600',
  description: 'Legal frameworks, ICT standards, organizational strategies, and procurement.',
  questions: [
    // =============================================
    // International Instruments (Questions 301-310)
    // =============================================

    {
      id: 301,
      question: "Why is the Universal Declaration of Human Rights (UDHR) considered foundational to disability rights, even though it does not specifically mention disability?",
      options: [
        "It established that ALL human beings are born free and equal in dignity and rights — a universal principle that later treaties like the CRPD built upon",
        "It was the first document to define accessibility requirements for buildings and technology",
        "It created the legal enforcement mechanism used to prosecute disability discrimination worldwide",
        "It specifically listed disability as a protected category alongside race and gender"
      ],
      correct: 0,
      explanation: "The UDHR (1948) declared universal human rights for all people without distinction. While it did not specifically mention disability, its universal principles — equality, dignity, non-discrimination — became the foundation on which later disability-specific instruments like the CRPD were built. Understanding this lineage helps explain why disability rights are framed as human rights.",
      wrongExplanations: {
        1: "The UDHR addresses broad human rights principles, not specific accessibility requirements. Technical accessibility standards came much later through instruments like WCAG and the CRPD.",
        2: "The UDHR is a declaration, not a legally binding treaty with enforcement mechanisms. Enforcement of disability rights varies by country through domestic laws and specific treaties.",
        3: "The UDHR does not explicitly list disability as a protected category. It uses the language 'without distinction of any kind,' which has been interpreted to include disability."
      },
      topicLinks: ['udhr', 'crpd'],
      difficulty: 'medium',
      tags: ['legal-international']
    },
    {
      id: 302,
      question: "The CRPD (2006) represented a major shift in how disability is viewed internationally. Which statement BEST describes this shift?",
      options: [
        "From viewing people with disabilities as objects of charity and medical treatment to recognizing them as rights-holders entitled to full participation in society",
        "From a legal framework to a purely medical classification system for disabilities",
        "From international cooperation to each country independently defining disability without guidance",
        "From including disability in general human rights to removing disability from the human rights framework entirely"
      ],
      correct: 0,
      explanation: "The CRPD marked a paradigm shift from the charity/medical model — where people with disabilities were seen as needing help or 'fixing' — to a human rights model where they are recognized as rights-holders. This aligns with the social model by placing responsibility on society to remove barriers rather than expecting individuals to overcome them.",
      wrongExplanations: {
        1: "The shift was in the opposite direction — AWAY from purely medical frameworks and toward a rights-based approach that views disability through a social lens.",
        2: "The CRPD actually strengthened international cooperation and established shared standards. It is the most comprehensive binding international treaty on disability rights.",
        3: "The CRPD reinforced and expanded the inclusion of disability within human rights frameworks — it did not remove it."
      },
      topicLinks: ['crpd', 'human-rights-model', 'social-model'],
      difficulty: 'medium',
      tags: ['legal-international']
    },
    {
      id: 303,
      question: "Which international treaty is considered the most comprehensive legally binding instrument on disability rights?",
      options: [
        "The UN Convention on the Rights of Persons with Disabilities (CRPD)",
        "The Universal Declaration of Human Rights (UDHR)",
        "The Marrakesh Treaty",
        "The Standard Rules on the Equalization of Opportunities"
      ],
      correct: 0,
      explanation: "The UN CRPD, adopted in 2006, is the most comprehensive legally binding international treaty specifically addressing the rights of persons with disabilities. It covers civil, political, economic, social, and cultural rights.",
      wrongExplanations: {
        1: "The UDHR is a foundational human rights document but is not legally binding and does not specifically focus on disability rights.",
        2: "The Marrakesh Treaty focuses specifically on access to published works for people who are blind or visually impaired — it is not a comprehensive disability rights instrument.",
        3: "The Standard Rules (1993) are non-binding guidelines, not a legally binding treaty, and they preceded the more comprehensive CRPD."
      },
      topicLinks: ['crpd'],
      difficulty: 'easy',
      tags: ['legal-international']
    },
    {
      id: 304,
      question: "Article 9 of the UN CRPD specifically addresses which topic?",
      options: [
        "Accessibility",
        "Education",
        "Employment",
        "Health"
      ],
      correct: 0,
      explanation: "Article 9 of the CRPD is dedicated to accessibility. It requires States Parties to take appropriate measures to ensure persons with disabilities have access to the physical environment, transportation, information and communications technologies, and other facilities and services.",
      wrongExplanations: {
        1: "Education is addressed in Article 24 of the CRPD, not Article 9.",
        2: "Employment (work and employment) is covered under Article 27 of the CRPD, not Article 9.",
        3: "Health is addressed in Article 25 of the CRPD, not Article 9."
      },
      topicLinks: ['crpd'],
      difficulty: 'medium',
      tags: ['legal-international']
    },
    {
      id: 305,
      question: "What is the purpose of the Optional Protocol to the UN CRPD?",
      options: [
        "It allows individuals to submit complaints to the CRPD Committee when domestic remedies are exhausted",
        "It establishes specific technical accessibility standards for ICT",
        "It extends the CRPD to cover children with disabilities",
        "It requires countries to adopt the CRPD into domestic law within five years"
      ],
      correct: 0,
      explanation: "The Optional Protocol to the CRPD establishes a complaints mechanism. It allows individuals or groups who believe their rights under the CRPD have been violated to submit communications to the Committee on the Rights of Persons with Disabilities, after exhausting domestic remedies.",
      wrongExplanations: {
        1: "Technical accessibility standards for ICT are addressed by documents like EN 301 549, not by the Optional Protocol.",
        2: "The CRPD itself already covers children with disabilities (Article 7). The Optional Protocol creates a complaints mechanism, not expanded coverage.",
        3: "The Optional Protocol does not impose a timeline for domestic adoption. It establishes an individual complaints procedure."
      },
      topicLinks: ['crpd'],
      difficulty: 'medium',
      tags: ['legal-international']
    },
    {
      id: 306,
      question: "The Marrakesh Treaty (2013) primarily benefits which group of people?",
      options: [
        "People who are blind, visually impaired, or otherwise print disabled",
        "People with hearing impairments who need captioned media",
        "People with mobility impairments who need physical access to buildings",
        "People with intellectual disabilities who need simplified communications"
      ],
      correct: 0,
      explanation: "The Marrakesh Treaty to Facilitate Access to Published Works for Persons Who Are Blind, Visually Impaired, or Otherwise Print Disabled was adopted in 2013. It creates exceptions to copyright law to allow the creation of accessible format copies (such as Braille or audio) of published works.",
      wrongExplanations: {
        1: "Captioning and hearing-related access are not addressed by the Marrakesh Treaty, which focuses specifically on access to published works in accessible formats like Braille and audio.",
        2: "Physical building access is a matter for national disability and building code laws, not the Marrakesh Treaty, which deals with published works.",
        3: "While simplified text could benefit some people, the Marrakesh Treaty specifically targets access to published works for people who are blind, visually impaired, or print disabled."
      },
      topicLinks: ['marrakesh-treaty'],
      difficulty: 'easy',
      tags: ['legal-international']
    },
    {
      id: 307,
      question: "What does the Marrakesh Treaty require signatory countries to do?",
      options: [
        "Create copyright exceptions that allow production and distribution of accessible format copies of published works",
        "Fund the development of screen reader technology",
        "Make all government websites WCAG 2.1 AA compliant",
        "Establish national Braille libraries in every major city"
      ],
      correct: 0,
      explanation: "The Marrakesh Treaty requires signatory countries to adopt copyright exceptions or limitations that permit the creation of accessible format copies (Braille, large print, audio, etc.) of published works and allow cross-border exchange of those copies.",
      wrongExplanations: {
        1: "The treaty does not mandate funding for assistive technology development. It addresses copyright barriers to creating accessible copies of published works.",
        2: "WCAG compliance for government websites is a matter for national law (such as Section 508 in the US or the EU Web Accessibility Directive), not the Marrakesh Treaty.",
        3: "The treaty does not mandate specific infrastructure like Braille libraries. It removes copyright barriers so accessible copies can be legally produced and shared."
      },
      topicLinks: ['marrakesh-treaty'],
      difficulty: 'medium',
      tags: ['legal-international']
    },
    {
      id: 308,
      question: "The UN Standard Rules on the Equalization of Opportunities for Persons with Disabilities (1993) are:",
      options: [
        "Non-binding guidelines that serve as a moral and political commitment",
        "Legally binding requirements for all UN member states",
        "Technical specifications for accessible building design",
        "A replacement for the CRPD"
      ],
      correct: 0,
      explanation: "The Standard Rules, adopted by the UN General Assembly in 1993, are non-binding. They represent a moral and political commitment by governments to take action toward equalization of opportunities for persons with disabilities. They preceded the legally binding CRPD (2006).",
      wrongExplanations: {
        1: "The Standard Rules are not legally binding. They are advisory and represent a political commitment, unlike the CRPD which is a binding treaty.",
        2: "The Standard Rules address broad policy areas like education, employment, and social security — not technical building specifications.",
        3: "The Standard Rules (1993) preceded the CRPD (2006) and were not replaced by it. They continue to exist as a reference, though the CRPD is now the primary binding instrument."
      },
      topicLinks: ['crpd'],
      difficulty: 'medium',
      tags: ['legal-international']
    },
    {
      id: 309,
      question: "Which statement best describes the relationship between the UDHR and the CRPD?",
      options: [
        "The UDHR established foundational human rights principles that the CRPD applies specifically to persons with disabilities",
        "The CRPD replaced the UDHR as the primary human rights document",
        "The UDHR and CRPD address completely different sets of rights with no overlap",
        "The UDHR was created to implement the CRPD at the national level"
      ],
      correct: 0,
      explanation: "The UDHR (1948) established universal human rights principles. The CRPD (2006) builds on those principles and applies them specifically to ensure the full and equal enjoyment of all human rights by persons with disabilities.",
      wrongExplanations: {
        1: "The CRPD did not replace the UDHR. The UDHR remains the foundational human rights document; the CRPD builds on and extends its principles.",
        2: "There is significant overlap. The CRPD explicitly builds on rights established in the UDHR, applying them to the disability context.",
        3: "The UDHR (1948) was adopted decades before the CRPD (2006). It could not have been created to implement a later treaty."
      },
      topicLinks: ['udhr', 'crpd'],
      difficulty: 'medium',
      tags: ['legal-international']
    },
    {
      id: 310,
      question: "A country has ratified the UN CRPD but not its Optional Protocol. What mechanism is unavailable to its citizens?",
      options: [
        "Filing individual complaints with the CRPD Committee after exhausting domestic remedies",
        "Protection under the CRPD's articles on accessibility and non-discrimination",
        "Participating in the Conference of States Parties",
        "Submitting periodic reports on CRPD implementation"
      ],
      correct: 0,
      explanation: "Without ratifying the Optional Protocol, individuals in that country cannot submit complaints directly to the CRPD Committee. The individual complaints mechanism is established solely by the Optional Protocol, not the CRPD itself.",
      wrongExplanations: {
        1: "Ratifying the CRPD itself provides protection under its articles. The Optional Protocol is not required for the treaty's provisions to apply.",
        2: "The Conference of States Parties is established by the CRPD itself (Article 40). Participation does not require the Optional Protocol.",
        3: "Periodic reporting is required under the CRPD itself (Article 35). The Optional Protocol is not needed for this obligation."
      },
      topicLinks: ['crpd'],
      difficulty: 'hard',
      tags: ['legal-international']
    },

    // =============================================
    // Regional & National Laws (Questions 311-325)
    // =============================================

    {
      id: 311,
      question: "An employee with a mobility disability is denied a promotion at a private company with 50 employees, and believes it was due to disability discrimination. Which US law MOST directly protects them in this situation?",
      options: [
        "Title I of the ADA — which prohibits employment discrimination by private employers with 15 or more employees",
        "Section 508 of the Rehabilitation Act — which requires accessible information technology",
        "The 21st Century Communications and Video Accessibility Act — which requires accessible communications technology",
        "The Air Carrier Access Act — which protects airline passengers with disabilities"
      ],
      correct: 0,
      explanation: "Title I of the ADA prohibits disability discrimination in employment (hiring, firing, advancement, compensation) by private employers with 15 or more employees. This is the primary law protecting employees from disability-based discrimination in the private sector. Section 508 covers federal ICT, the CVAA covers communications technology, and the ACAA covers air travel.",
      wrongExplanations: {
        1: "Section 508 requires federal agencies and their contractors to make ICT accessible. It does not address employment discrimination in the private sector.",
        2: "The CVAA requires that communications services and video programming be accessible to people with disabilities. It does not cover employment discrimination.",
        3: "The Air Carrier Access Act specifically covers discrimination against airline passengers with disabilities, not workplace discrimination."
      },
      topicLinks: ['ada'],
      difficulty: 'medium',
      tags: ['legal-national', 'scenario']
    },
    {
      id: 312,
      question: "Which title of the ADA covers employment discrimination against people with disabilities?",
      options: [
        "Title I",
        "Title II",
        "Title III",
        "Title IV"
      ],
      correct: 0,
      explanation: "Title I of the ADA prohibits employment discrimination against qualified individuals with disabilities. It covers hiring, firing, advancement, compensation, training, and other terms and conditions of employment for employers with 15 or more employees.",
      wrongExplanations: {
        1: "Title II covers state and local government services and programs, not private employment.",
        2: "Title III covers public accommodations and commercial facilities operated by private entities, not employment specifically.",
        3: "Title IV covers telecommunications, specifically requiring telephone and internet companies to provide relay services."
      },
      topicLinks: ['ada'],
      difficulty: 'medium',
      tags: ['legal-national']
    },
    {
      id: 313,
      question: "Title II of the ADA applies to:",
      options: [
        "State and local government services, programs, and activities",
        "Private employers with 15 or more employees",
        "Public accommodations operated by private entities",
        "Federal government agencies and contractors"
      ],
      correct: 0,
      explanation: "Title II of the ADA prohibits discrimination by state and local government entities. It requires that all services, programs, and activities of state and local governments are accessible to people with disabilities.",
      wrongExplanations: {
        1: "Private employers with 15 or more employees are covered under Title I of the ADA, not Title II.",
        2: "Public accommodations operated by private entities (restaurants, hotels, theaters, etc.) are covered under Title III, not Title II.",
        3: "Federal government agencies are covered under Section 504 and Section 508 of the Rehabilitation Act, not Title II of the ADA."
      },
      topicLinks: ['ada'],
      difficulty: 'medium',
      tags: ['legal-national']
    },
    {
      id: 314,
      question: "Title III of the ADA requires accessibility in:",
      options: [
        "Public accommodations and commercial facilities operated by private entities",
        "Federal government agencies",
        "State and local government employment",
        "Telecommunications relay services"
      ],
      correct: 0,
      explanation: "Title III of the ADA prohibits discrimination on the basis of disability in public accommodations and commercial facilities operated by private entities. This includes businesses like restaurants, hotels, theaters, retail stores, and doctors' offices.",
      wrongExplanations: {
        1: "Federal government agencies are covered under Section 504 and Section 508 of the Rehabilitation Act, not Title III of the ADA.",
        2: "State and local government employment falls under Title II of the ADA (and Title I for employment aspects), not Title III.",
        3: "Telecommunications relay services are covered under Title IV of the ADA, not Title III."
      },
      topicLinks: ['ada'],
      difficulty: 'medium',
      tags: ['legal-national']
    },
    {
      id: 315,
      question: "Section 508 of the Rehabilitation Act requires accessibility of:",
      options: [
        "Information and communication technology (ICT) developed, procured, maintained, or used by federal agencies",
        "All private sector websites in the United States",
        "Advanced communications services like VoIP and video conferencing",
        "Public accommodations such as restaurants and hotels"
      ],
      correct: 0,
      explanation: "Section 508 of the Rehabilitation Act specifically requires that federal agencies make their information and communication technology (ICT) accessible to people with disabilities. This includes websites, software, hardware, and electronic documents developed, procured, maintained, or used by federal agencies.",
      wrongExplanations: {
        1: "Section 508 applies to federal agencies, not all private sector websites. Private websites may be covered under other laws like the ADA.",
        2: "Advanced communications services are addressed by the CVAA (21st Century Communications and Video Accessibility Act), not Section 508.",
        3: "Public accommodations like restaurants and hotels are covered under Title III of the ADA, not Section 508 of the Rehabilitation Act."
      },
      topicLinks: ['section-508'],
      difficulty: 'easy',
      tags: ['legal-national']
    },
    {
      id: 316,
      question: "Section 508 is part of which US law?",
      options: [
        "The Rehabilitation Act of 1973",
        "The 21st Century Communications and Video Accessibility Act (CVAA)",
        "The Americans with Disabilities Act (ADA)",
        "The Telecommunications Act of 1996"
      ],
      correct: 0,
      explanation: "Section 508 is a section of the Rehabilitation Act of 1973 (added via amendment in 1986 and significantly strengthened in 1998). It is NOT part of the CVAA or the ADA — it specifically comes from the Rehabilitation Act.",
      wrongExplanations: {
        1: "The CVAA (2010) addresses advanced communications and video programming accessibility. Section 508 is part of the Rehabilitation Act, not the CVAA. This is a common point of confusion.",
        2: "The ADA (1990) is a separate civil rights law. While both address disability rights, Section 508 specifically belongs to the Rehabilitation Act of 1973.",
        3: "The Telecommunications Act of 1996 addresses telecommunications regulation broadly. Section 508 comes from the Rehabilitation Act."
      },
      topicLinks: ['section-508'],
      difficulty: 'medium',
      tags: ['legal-national']
    },
    {
      id: 317,
      question: "The 21st Century Communications and Video Accessibility Act (CVAA) primarily addresses accessibility of:",
      options: [
        "Advanced communications services (VoIP, messaging) and video programming",
        "Federal government websites and electronic documents",
        "Physical access to public buildings and transportation",
        "Employment practices of telecommunications companies"
      ],
      correct: 0,
      explanation: "The CVAA (2010) updates communications law to address modern technologies. It requires accessibility of advanced communications services (such as VoIP, text messaging, and video conferencing) and video programming (such as captioning and video description on television and online).",
      wrongExplanations: {
        1: "Federal government websites and electronic documents are covered by Section 508 of the Rehabilitation Act, not the CVAA.",
        2: "Physical access to buildings and transportation is addressed by the ADA, not the CVAA, which focuses on communications and video technology.",
        3: "Employment practices are covered by Title I of the ADA. The CVAA focuses on the accessibility of communications products and services, not employment."
      },
      topicLinks: ['cvaa'],
      difficulty: 'easy',
      tags: ['legal-national']
    },
    {
      id: 318,
      question: "What is the key difference between Section 508 and the CVAA?",
      options: [
        "Section 508 covers federal agency ICT, while the CVAA covers advanced communications and video programming more broadly",
        "Section 508 is legally binding but the CVAA is voluntary",
        "The CVAA replaced Section 508 in 2010",
        "Section 508 applies to the private sector while the CVAA applies to government"
      ],
      correct: 0,
      explanation: "Section 508 specifically applies to ICT used by federal agencies (from the Rehabilitation Act). The CVAA applies more broadly to advanced communications services and video programming provided by private industry. They address different scopes and contexts.",
      wrongExplanations: {
        1: "Both Section 508 and the CVAA are legally binding. Neither is voluntary.",
        2: "The CVAA did not replace Section 508. They are separate laws with different scopes — Section 508 covers federal ICT, the CVAA covers communications and video.",
        3: "This is backwards. Section 508 applies to federal government agencies, while the CVAA applies to private communications and video programming providers."
      },
      topicLinks: ['section-508', 'cvaa'],
      difficulty: 'hard',
      tags: ['legal-national']
    },
    {
      id: 319,
      question: "The EU Web Accessibility Directive (2016) requires which entities to make their websites and mobile apps accessible?",
      options: [
        "Public sector bodies in EU member states",
        "All businesses operating within the EU",
        "Only EU institutions in Brussels",
        "Private e-commerce websites only"
      ],
      correct: 0,
      explanation: "The EU Web Accessibility Directive (Directive 2016/2102) requires public sector bodies across EU member states to make their websites and mobile applications accessible, in conformance with the EN 301 549 standard (which references WCAG 2.1 Level AA).",
      wrongExplanations: {
        1: "The Web Accessibility Directive specifically targets public sector bodies, not all businesses. The European Accessibility Act (2019) later extended requirements to certain private sector products and services.",
        2: "The directive applies to public sector bodies across all EU member states, not just EU institutions in Brussels.",
        3: "Private e-commerce websites are not the focus of this directive. The Web Accessibility Directive targets public sector bodies."
      },
      topicLinks: ['eu-accessibility'],
      difficulty: 'medium',
      tags: ['legal-international']
    },
    {
      id: 320,
      question: "The European Accessibility Act (2019) differs from the EU Web Accessibility Directive by:",
      options: [
        "Extending accessibility requirements to certain private sector products and services",
        "Applying only to government websites in the EU",
        "Replacing the EN 301 549 standard with a new framework",
        "Focusing exclusively on physical accessibility of buildings"
      ],
      correct: 0,
      explanation: "The European Accessibility Act (Directive 2019/882) extends accessibility requirements beyond the public sector to cover certain private sector products and services, including computers, smartphones, e-commerce, banking, e-books, and transport services.",
      wrongExplanations: {
        1: "Government websites are already covered by the EU Web Accessibility Directive (2016). The EAA extends beyond government to the private sector.",
        2: "The EAA does not replace EN 301 549. EN 301 549 continues as the harmonized European ICT accessibility standard.",
        3: "The EAA covers a broad range of products and services — not just physical buildings. It includes digital products, services, and technologies."
      },
      topicLinks: ['eu-accessibility'],
      difficulty: 'medium',
      tags: ['legal-international']
    },
    {
      id: 321,
      question: "EN 301 549 is best described as:",
      options: [
        "A European standard for ICT accessibility requirements, harmonized with WCAG",
        "A US federal regulation for website compliance",
        "A W3C recommendation for authoring tool accessibility",
        "A United Nations treaty on digital rights"
      ],
      correct: 0,
      explanation: "EN 301 549 is the harmonized European standard for ICT accessibility. It provides accessibility requirements for ICT products and services and incorporates WCAG 2.1 Level AA criteria for web content. It is referenced by the EU Web Accessibility Directive.",
      wrongExplanations: {
        1: "EN 301 549 is a European standard, not a US federal regulation. US federal requirements are primarily governed by Section 508.",
        2: "Authoring tool accessibility is addressed by ATAG (Authoring Tool Accessibility Guidelines) from W3C, not EN 301 549.",
        3: "EN 301 549 is a European technical standard, not a UN treaty. The UN CRPD is the relevant UN treaty on disability rights."
      },
      topicLinks: ['en-301-549'],
      difficulty: 'easy',
      tags: ['legal-international', 'standards']
    },
    {
      id: 322,
      question: "The UK Equality Act 2010 addresses disability by:",
      options: [
        "Prohibiting discrimination against disabled people and requiring reasonable adjustments",
        "Mandating WCAG 2.1 AAA compliance for all UK websites",
        "Establishing a government agency specifically for disability technology",
        "Requiring all employers to hire a minimum percentage of disabled workers"
      ],
      correct: 0,
      explanation: "The UK Equality Act 2010 is a comprehensive anti-discrimination law that protects people from discrimination based on various protected characteristics, including disability. It requires service providers and employers to make reasonable adjustments to avoid disadvantaging disabled people.",
      wrongExplanations: {
        1: "The Equality Act does not mandate a specific WCAG conformance level. It requires reasonable adjustments, which may include digital accessibility, but does not prescribe AAA compliance.",
        2: "The Equality Act is a broad anti-discrimination law, not a mandate to create a specific government technology agency.",
        3: "The Equality Act does not set minimum hiring quotas. It prohibits discrimination and requires reasonable adjustments in employment."
      },
      topicLinks: ['national-disability-laws'],
      difficulty: 'medium',
      tags: ['legal-international']
    },
    {
      id: 323,
      question: "Australia's Disability Discrimination Act (DDA) of 1992 is significant in digital accessibility because:",
      options: [
        "It has been applied to web accessibility, notably in the Maguire v. SOCOG case involving the Sydney Olympics website",
        "It was the first law to mandate WCAG compliance globally",
        "It established the Web Content Accessibility Guidelines",
        "It only applies to government websites in Australia"
      ],
      correct: 0,
      explanation: "The DDA (1992) prohibits discrimination on the basis of disability. It gained digital accessibility significance through the 2000 Maguire v. SOCOG case, where the Sydney Organising Committee for the Olympic Games was found to have violated the DDA by failing to make the Olympics website accessible.",
      wrongExplanations: {
        1: "The DDA does not specifically mandate WCAG compliance. WCAG was developed by W3C, and while the DDA addresses discrimination, it does not reference WCAG directly.",
        2: "WCAG was established by the W3C (World Wide Web Consortium), not by the Australian DDA.",
        3: "The DDA applies broadly to discrimination in areas including employment, education, services, and access to premises — not just government websites."
      },
      topicLinks: ['national-disability-laws'],
      difficulty: 'hard',
      tags: ['legal-international']
    },
    {
      id: 324,
      question: "Canada's Accessible Canada Act (ACA), enacted in 2019, applies to:",
      options: [
        "Federally regulated entities such as the federal government, banks, telecommunications, and transportation",
        "All private businesses in Canada regardless of size",
        "Only Canadian government websites",
        "Provincial and territorial governments exclusively"
      ],
      correct: 0,
      explanation: "The Accessible Canada Act (2019) applies to federally regulated entities, including the federal government, Crown corporations, and private sector organizations under federal jurisdiction such as banks, telecommunications companies, and interprovincial transportation providers.",
      wrongExplanations: {
        1: "The ACA applies to federally regulated entities, not all private businesses. Businesses under provincial jurisdiction may be covered by separate provincial accessibility laws.",
        2: "The ACA covers much more than just government websites — it addresses employment, the built environment, ICT, communications, procurement, transportation, and program/service design.",
        3: "Provincial and territorial governments fall under their own jurisdiction. The ACA specifically applies to federally regulated entities."
      },
      topicLinks: ['national-disability-laws'],
      difficulty: 'medium',
      tags: ['legal-international']
    },
    {
      id: 325,
      question: "The Air Carrier Access Act (ACAA) in the United States prohibits discrimination against people with disabilities in:",
      options: [
        "Air travel and airline services",
        "All forms of public transportation",
        "Federal government buildings",
        "Telecommunications services"
      ],
      correct: 0,
      explanation: "The Air Carrier Access Act (1986) specifically prohibits discrimination against people with disabilities by air carriers. It applies to all flights to, from, and within the United States, covering areas such as boarding assistance, seating accommodations, and service animals.",
      wrongExplanations: {
        1: "The ACAA specifically covers air travel. Other forms of public transportation are addressed by the ADA (particularly Titles II and III) and the Rehabilitation Act.",
        2: "Federal government buildings are addressed by the Architectural Barriers Act and Section 504/508 of the Rehabilitation Act, not the ACAA.",
        3: "Telecommunications services accessibility is addressed by Title IV of the ADA and the CVAA, not the Air Carrier Access Act."
      },
      topicLinks: ['national-disability-laws'],
      difficulty: 'easy',
      tags: ['legal-national']
    },

    // ==================================================
    // Organizational Strategy (Questions 326-340)
    // ==================================================

    {
      id: 326,
      question: "Which W3C WAI guideline specifically addresses the accessibility of web authoring tools?",
      options: [
        "ATAG (Authoring Tool Accessibility Guidelines)",
        "WCAG (Web Content Accessibility Guidelines)",
        "UAAG (User Agent Accessibility Guidelines)",
        "WAI-ARIA (Accessible Rich Internet Applications)"
      ],
      correct: 0,
      explanation: "ATAG (Authoring Tool Accessibility Guidelines) addresses the accessibility of web authoring tools. It has two parts: Part A ensures the authoring tool itself is accessible to authors with disabilities, and Part B ensures the tool helps produce accessible content.",
      wrongExplanations: {
        1: "WCAG addresses the accessibility of web content (websites, apps, documents), not authoring tools specifically.",
        2: "UAAG addresses the accessibility of user agents like web browsers and media players, not authoring tools.",
        3: "WAI-ARIA is a technical specification for making dynamic web content accessible. It is not a guideline for authoring tools."
      },
      topicLinks: ['w3c-wai'],
      difficulty: 'easy',
      tags: ['standards']
    },
    {
      id: 327,
      question: "UAAG (User Agent Accessibility Guidelines) applies to:",
      options: [
        "Web browsers, media players, and other software that renders web content",
        "Tools used to create websites and web applications",
        "The content displayed on web pages",
        "Server-side technologies and databases"
      ],
      correct: 0,
      explanation: "UAAG addresses the accessibility of user agents — software that retrieves and renders web content. This includes web browsers, browser extensions, media players, and other applications that display web content to users.",
      wrongExplanations: {
        1: "Tools used to create websites are covered by ATAG (Authoring Tool Accessibility Guidelines), not UAAG.",
        2: "The content displayed on web pages is covered by WCAG (Web Content Accessibility Guidelines), not UAAG.",
        3: "Server-side technologies are not directly addressed by UAAG. UAAG focuses on client-side user agents that render content for users."
      },
      topicLinks: ['w3c-wai'],
      difficulty: 'easy',
      tags: ['standards']
    },
    {
      id: 328,
      question: "Which statement about accessibility maturity models is correct?",
      options: [
        "There is no single 'best' maturity model — the right choice depends on organizational culture and needs",
        "The Business Disability Forum model is universally recognized as the only valid maturity model",
        "Maturity models are only applicable to technology companies",
        "Organizations must achieve the highest maturity level before they can claim any accessibility progress"
      ],
      correct: 0,
      explanation: "There is no single 'best' accessibility maturity model. Different models (Business Disability Forum, CMU Capability Maturity Model, European Agency model, etc.) suit different organizational cultures and needs. The right model depends on the organization's size, sector, goals, and existing practices.",
      wrongExplanations: {
        1: "While the BDF model is well-respected, it is not the only valid model. Multiple maturity models exist, and the best choice depends on organizational context.",
        2: "Maturity models apply to organizations of all types — not just technology companies. Any organization can benefit from assessing and improving its accessibility maturity.",
        3: "Maturity models describe a progression. Organizations at any level can demonstrate progress and improvement — they do not need to reach the highest level to have meaningful accessibility achievements."
      },
      topicLinks: ['maturity-models'],
      difficulty: 'medium',
      tags: ['management']
    },
    {
      id: 329,
      question: "The Business Disability Forum (BDF) Accessibility Maturity Model is primarily used to:",
      options: [
        "Assess an organization's overall disability confidence and accessibility practices across multiple dimensions",
        "Test individual web pages for WCAG conformance",
        "Certify products as meeting Section 508 requirements",
        "Measure website performance metrics like page load speed"
      ],
      correct: 0,
      explanation: "The BDF Accessibility Maturity Model (also known as the Disability Smart framework) helps organizations assess their overall disability confidence across multiple dimensions, including leadership, strategy, employment practices, customer service, and digital accessibility.",
      wrongExplanations: {
        1: "Testing web pages for WCAG conformance is done with accessibility evaluation tools, not a maturity model. Maturity models assess organizational practices, not individual page compliance.",
        2: "Section 508 certification is handled through accessibility conformance reports (using VPATs), not through the BDF maturity model.",
        3: "Page load speed is a web performance metric. The BDF model measures organizational maturity in accessibility practices, not technical website performance."
      },
      topicLinks: ['maturity-models'],
      difficulty: 'medium',
      tags: ['management']
    },
    {
      id: 330,
      question: "An organization wants to adopt a maturity model based on established software process improvement principles. Which model would be most aligned with this approach?",
      options: [
        "CMU Capability Maturity Model (CMM)-based accessibility model",
        "Business Disability Forum model",
        "WCAG conformance levels",
        "Universal Design principles"
      ],
      correct: 0,
      explanation: "The CMU (Carnegie Mellon University) Capability Maturity Model originated in software process improvement. An accessibility maturity model based on CMM principles uses defined maturity levels (Initial, Managed, Defined, Quantitatively Managed, Optimizing) familiar to software engineering organizations.",
      wrongExplanations: {
        1: "The BDF model is a comprehensive disability confidence framework. While valuable, it is not specifically based on software process improvement principles like CMM.",
        2: "WCAG conformance levels (A, AA, AAA) measure content accessibility, not organizational maturity. They are not a maturity model.",
        3: "Universal Design principles guide the design of products and environments. They are design principles, not an organizational maturity model."
      },
      topicLinks: ['maturity-models'],
      difficulty: 'hard',
      tags: ['management']
    },
    {
      id: 331,
      question: "What is a VPAT (Voluntary Product Accessibility Template)?",
      options: [
        "A standardized document used to declare how an ICT product or service conforms to accessibility standards",
        "A testing tool that automatically scans websites for accessibility issues",
        "A government form required to register a disability accommodation request",
        "A certification that guarantees a product is fully accessible"
      ],
      correct: 0,
      explanation: "A VPAT is a standardized template used by vendors to document and declare how their ICT product or service conforms to accessibility standards (such as Section 508, WCAG, or EN 301 549). The completed VPAT produces an Accessibility Conformance Report (ACR).",
      wrongExplanations: {
        1: "A VPAT is a documentation template, not an automated testing tool. Automated scanners are separate tools used during accessibility evaluation.",
        2: "A VPAT is used by product vendors to report accessibility conformance of ICT products, not to register accommodation requests.",
        3: "A VPAT does not guarantee full accessibility. It is a self-reported declaration of conformance levels, and the accuracy depends on the vendor's evaluation."
      },
      topicLinks: ['vpat'],
      difficulty: 'easy',
      tags: ['management', 'procurement']
    },
    {
      id: 332,
      question: "A procurement team receives a vendor's Accessibility Conformance Report (ACR) claiming their product 'Supports' all WCAG 2.1 AA criteria. Why should the team NOT rely solely on this document?",
      options: [
        "ACRs are self-reported by vendors and may not reflect actual user experience — independent testing with assistive technologies and users with disabilities is also needed",
        "ACRs are only valid for Section 508, not WCAG, so they are irrelevant to web accessibility",
        "Only government agencies can read or interpret ACRs, so private companies cannot use them",
        "ACRs expire after 30 days and must be renewed with each software update"
      ],
      correct: 0,
      explanation: "A VPAT/ACR is a self-reported document — the vendor fills it out themselves. While it is a valuable procurement tool, it has limitations: vendors may overstate conformance, testing methodology varies, and the report is a snapshot that may not cover all use cases. Best practice is to supplement ACR review with independent testing, including testing with actual assistive technologies and users with disabilities.",
      wrongExplanations: {
        1: "Modern VPAT templates (like the ITI VPAT 2.x) include columns for WCAG 2.x, Section 508, and EN 301 549. ACRs are widely used for web accessibility evaluation, not only Section 508.",
        2: "ACRs are publicly available documents that any organization — government or private — can request and use for procurement decisions.",
        3: "ACRs do not have a fixed expiration date. However, they can become outdated as products change, which is why they should be reviewed periodically."
      },
      topicLinks: ['vpat', 'procurement-accessibility'],
      difficulty: 'hard',
      tags: ['management', 'procurement', 'scenario']
    },
    {
      id: 333,
      question: "In the context of accessibility management, an 'accessibility champion' is:",
      options: [
        "A person within the organization who advocates for accessibility and helps drive awareness and implementation",
        "An external auditor who certifies website compliance",
        "A software tool that automatically fixes accessibility issues",
        "A legal requirement under Section 508 for all federal agencies"
      ],
      correct: 0,
      explanation: "An accessibility champion is an internal advocate who promotes accessibility within their organization. They raise awareness, encourage best practices, connect teams with resources, and help integrate accessibility into workflows and culture.",
      wrongExplanations: {
        1: "External auditors conduct assessments but are not 'accessibility champions.' Champions are internal advocates embedded within the organization.",
        2: "An accessibility champion is a person and a role, not a software tool. No tool can replace human advocacy and organizational influence.",
        3: "While federal agencies may designate accessibility coordinators, the concept of an accessibility champion is an organizational best practice, not a Section 508 legal requirement."
      },
      topicLinks: ['maturity-models'],
      difficulty: 'easy',
      tags: ['management']
    },
    {
      id: 334,
      question: "What is the purpose of an accessibility steering committee in an organization?",
      options: [
        "To provide strategic direction, oversight, and cross-departmental coordination for accessibility efforts",
        "To personally test every web page for WCAG compliance",
        "To serve as the sole team responsible for fixing all accessibility bugs",
        "To replace the need for individual developers to learn about accessibility"
      ],
      correct: 0,
      explanation: "An accessibility steering committee provides strategic direction and governance for an organization's accessibility program. It typically includes representatives from multiple departments and helps ensure accessibility is prioritized, funded, and integrated across the organization.",
      wrongExplanations: {
        1: "A steering committee provides strategic oversight, not hands-on testing. Accessibility testing is done by QA teams, testers, and developers.",
        2: "Fixing accessibility bugs is a shared responsibility across development teams. A steering committee governs strategy and priorities, not day-to-day bug fixing.",
        3: "A steering committee coordinates and promotes accessibility but does not replace the need for developers to have accessibility knowledge. Accessibility is everyone's responsibility."
      },
      topicLinks: ['maturity-models'],
      difficulty: 'easy',
      tags: ['management']
    },
    {
      id: 335,
      question: "When evaluating ICT products for procurement, an organization should prioritize:",
      options: [
        "Reviewing the vendor's VPAT/ACR and conducting independent accessibility testing",
        "Choosing the lowest-cost option regardless of accessibility",
        "Relying solely on the vendor's marketing claims about accessibility",
        "Delaying accessibility evaluation until after the product is deployed"
      ],
      correct: 0,
      explanation: "Effective accessibility procurement involves reviewing the vendor's VPAT/ACR (Accessibility Conformance Report) and supplementing it with independent accessibility testing. VPATs are self-reported and should be verified. Evaluating accessibility before procurement prevents costly retrofitting.",
      wrongExplanations: {
        1: "Cost is important, but ignoring accessibility can lead to legal risk, higher remediation costs, and exclusion of users with disabilities.",
        2: "Marketing claims alone are insufficient. VPATs provide structured conformance information, and independent testing verifies the claims.",
        3: "Evaluating accessibility after deployment is far more costly and disruptive than assessing it during procurement. Accessibility should be a procurement criterion."
      },
      topicLinks: ['procurement-accessibility', 'vpat'],
      difficulty: 'medium',
      tags: ['management', 'procurement']
    },
    {
      id: 336,
      question: "Which of the following is a key benefit of including people with disabilities in accessibility testing?",
      options: [
        "They provide real-world insights into barriers that automated tools and non-disabled testers may miss",
        "It eliminates the need for any automated accessibility testing",
        "It guarantees legal compliance with all accessibility laws",
        "It is a requirement of WCAG Level AAA conformance"
      ],
      correct: 0,
      explanation: "People with disabilities bring firsthand experience using assistive technologies and navigating barriers. Their testing reveals real-world usability issues that automated tools and non-disabled testers often miss, providing invaluable insights for improving accessibility.",
      wrongExplanations: {
        1: "Including people with disabilities in testing complements but does not replace automated testing. Both approaches are valuable and catch different types of issues.",
        2: "While user testing improves quality, no single testing method guarantees legal compliance. Compliance requires comprehensive evaluation and ongoing effort.",
        3: "WCAG does not require user testing with people with disabilities for any conformance level. However, it is widely recognized as a best practice."
      },
      topicLinks: ['procurement-accessibility'],
      difficulty: 'easy',
      tags: ['management']
    },
    {
      id: 337,
      question: "An effective accessibility training strategy for an organization should include:",
      options: [
        "Role-specific training tailored to designers, developers, content creators, and managers",
        "A single one-hour presentation given once to the entire organization",
        "Training only for the IT department since accessibility is purely technical",
        "Training only when a legal complaint is received"
      ],
      correct: 0,
      explanation: "Effective accessibility training is role-specific and ongoing. Designers need to understand color contrast and interaction patterns; developers need to implement ARIA and semantic HTML; content creators need to write accessible content; managers need to understand policy and strategy.",
      wrongExplanations: {
        1: "A single one-time presentation is insufficient. Accessibility training needs to be role-specific, practical, and ongoing to be effective.",
        2: "Accessibility is not purely technical. It involves design, content, management, procurement, and organizational culture — training should reach all relevant roles.",
        3: "Reactive training (only after complaints) is insufficient. Proactive, ongoing training prevents barriers from being created in the first place."
      },
      topicLinks: ['maturity-models'],
      difficulty: 'easy',
      tags: ['management']
    },
    {
      id: 338,
      question: "A procurement officer is evaluating two software products for accessibility. Vendor A provides an ACR showing 'Supports' for all criteria. Vendor B provides an ACR showing 'Partially Supports' for some criteria but includes detailed remediation plans and user testing data. What is the BEST course of action?",
      options: [
        "Investigate further — request demonstrations with assistive technologies, review both vendors' testing methodology, and consider Vendor B's transparency as a positive indicator",
        "Choose Vendor A immediately since 'Supports' is always better than 'Partially Supports'",
        "Reject both vendors because neither achieved 'Not Applicable' for all criteria",
        "Ignore the ACRs entirely since they have no value in procurement decisions"
      ],
      correct: 0,
      explanation: "A blanket 'Supports' claim should be investigated — it may indicate superficial self-assessment. A vendor that honestly reports 'Partially Supports' with remediation plans and user testing data may actually demonstrate greater accessibility maturity. Best procurement practice involves requesting AT demonstrations, reviewing testing methodology, and evaluating the vendor's commitment to ongoing accessibility improvement.",
      wrongExplanations: {
        1: "A 'Supports' claim is only as reliable as the testing behind it. Without verifying methodology, a 'Supports' claim may be less trustworthy than a transparent 'Partially Supports' with detailed evidence.",
        2: "'Not Applicable' means a criterion does not apply to the product — it is not a measure of quality. Rejecting products based on this misunderstanding would eliminate viable options.",
        3: "ACRs are a valuable starting point in procurement. While they should not be the sole factor, they provide standardized information that helps compare products."
      },
      topicLinks: ['vpat', 'procurement-accessibility'],
      difficulty: 'hard',
      tags: ['management', 'procurement', 'scenario']
    },
    {
      id: 339,
      question: "Why is recruiting people with disabilities important for an organization's accessibility program?",
      options: [
        "Employees with disabilities bring lived experience that helps identify barriers and improve products and services",
        "It is the only way to comply with WCAG",
        "People with disabilities can only work in accessibility-related roles",
        "It replaces the need for accessibility auditing and testing"
      ],
      correct: 0,
      explanation: "Recruiting people with disabilities brings diverse perspectives and lived experience to the organization. Employees with disabilities can identify barriers that others might overlook, contribute to more inclusive design, and help build a culture of accessibility throughout the organization.",
      wrongExplanations: {
        1: "WCAG is a set of technical guidelines for web content. Compliance with WCAG does not require hiring people with disabilities, though their involvement improves outcomes.",
        2: "People with disabilities work in all types of roles across every industry. They are not limited to accessibility-related positions.",
        3: "Hiring people with disabilities complements but does not replace formal accessibility auditing and testing. Both are important parts of a comprehensive program."
      },
      topicLinks: ['maturity-models'],
      difficulty: 'easy',
      tags: ['management']
    },
    {
      id: 340,
      question: "An organization is choosing an accessibility maturity model and has a strong engineering culture with established process improvement practices. A colleague insists the Business Disability Forum model is 'the best' for all organizations. What is the most accurate response?",
      options: [
        "No single maturity model is the best for all organizations — a CMM-based model might be a better fit given the engineering culture, but the BDF model could also work",
        "The colleague is correct — the BDF model is universally the best choice",
        "Maturity models are unnecessary; WCAG conformance is sufficient",
        "The organization should create its own model from scratch instead of using any existing one"
      ],
      correct: 0,
      explanation: "There is no single 'best' accessibility maturity model. The right choice depends on organizational culture, needs, and context. An engineering-focused organization might prefer a CMM-based model aligned with their existing process improvement practices, though the BDF model could also be adapted to fit.",
      wrongExplanations: {
        1: "While the BDF model is valuable, no single model is universally 'the best.' Different organizations benefit from different models based on their culture and needs.",
        2: "WCAG conformance addresses web content accessibility but does not replace the need for organizational maturity assessment. Maturity models address strategy, governance, culture, and processes beyond just content conformance.",
        3: "Existing maturity models are well-researched and tested. While customization may be needed, building from scratch ignores decades of existing frameworks and best practices."
      },
      topicLinks: ['maturity-models'],
      difficulty: 'hard',
      tags: ['management']
    },
    {
      id: 341,
      question: "A new Chief Accessibility Officer has been hired at a large enterprise. Their first priority is to establish a long-term accessibility program. Which approach is MOST likely to succeed?",
      options: [
        "Building a shared accessibility vision aligned with the organization's existing strategic goals and securing executive sponsorship",
        "Immediately auditing every product for WCAG conformance before taking any other action",
        "Hiring a large accessibility team and delegating all responsibility to them",
        "Purchasing the most expensive automated testing tool available"
      ],
      correct: 0,
      explanation: "Management's most important role in launching accessibility efforts is building a shared vision and aligning it with the organization's broader strategic goals. Executive sponsorship ensures the program has authority, resources, and longevity. Without strategic alignment, accessibility initiatives often remain isolated projects rather than sustainable programs.",
      wrongExplanations: {
        1: "While auditing is valuable, jumping directly to audits without first establishing vision, strategy, and executive buy-in results in findings that lack organizational support for remediation.",
        2: "Centralizing all accessibility responsibility in a dedicated team creates a silo. Accessibility must be integrated across the organization — it's everyone's responsibility, not just a specialist team's.",
        3: "Tools are important but are only one component. Without vision, strategy, and organizational commitment, even the best tools will not create a sustainable accessibility program."
      },
      topicLinks: ['maturity-models', 'w3c-wai'],
      difficulty: 'medium',
      tags: ['management']
    },
    {
      id: 342,
      question: "An organization has purchased accessibility testing tools and written an accessibility policy, but products continue to ship with significant barriers. What is the MOST likely root cause?",
      options: [
        "The testing tools are outdated",
        "The accessibility efforts are not grounded in the organization's culture, processes, and everyday practices",
        "The policy document is too short",
        "The organization needs to hire more accessibility specialists"
      ],
      correct: 1,
      explanation: "Accessibility tools and policies alone are insufficient. For accessibility to succeed, it must be embedded in the organization's culture, integrated into existing workflows, and reflected in daily practices. When accessibility remains separate from how people actually work, it is easily bypassed or forgotten — regardless of available tools or written policies.",
      wrongExplanations: {
        0: "While outdated tools can be a problem, even the best tools won't help if the organization's culture and processes don't support accessibility. Tools are only as effective as the practices surrounding them.",
        2: "Policy length is not the issue. A short, well-integrated policy that is part of everyday processes is far more effective than a lengthy policy that no one follows.",
        3: "More specialists may help, but if accessibility is not woven into the organization's culture and processes, specialists become bottlenecks rather than enablers."
      },
      topicLinks: ['maturity-models'],
      difficulty: 'medium',
      tags: ['management']
    },
    {
      id: 343,
      question: "A company's HR department wants to improve recruitment of people with disabilities. Which strategy is MOST effective?",
      options: [
        "Adding a general diversity statement to existing job postings",
        "Posting positions on disability-focused job boards, partnering with disability employment organizations, and ensuring the application process itself is accessible",
        "Only recruiting from universities with disability services offices",
        "Waiting for candidates with disabilities to apply through normal channels"
      ],
      correct: 1,
      explanation: "Effective disability recruitment requires proactive, multi-pronged strategies: posting on disability-focused job boards (such as AbilityJobs or Getting Hired), partnering with disability employment organizations, and critically, ensuring the entire application process — from the job posting to the online form to the interview — is fully accessible. A passive approach will miss qualified candidates.",
      wrongExplanations: {
        0: "A general diversity statement is a starting point but not an effective recruitment strategy on its own. Proactive outreach and accessible processes are needed to actually reach and include candidates with disabilities.",
        2: "Limiting recruitment to specific universities is unnecessarily restrictive and misses many qualified candidates with disabilities who may come from other educational paths or career backgrounds.",
        3: "A passive approach assumes people with disabilities will find and navigate existing channels, which may themselves contain barriers. Proactive outreach is essential."
      },
      topicLinks: ['disability-demographics', 'disability-etiquette'],
      difficulty: 'easy',
      tags: ['management']
    },
    {
      id: 344,
      question: "During a software procurement process, a vendor provides a VPAT/ACR claiming full WCAG 2.1 AA conformance. What is the BEST procurement practice?",
      options: [
        "Accept the VPAT at face value and proceed with purchase",
        "Reject the vendor because VPATs are unreliable documents",
        "Verify the claims by requesting assistive technology demonstrations, reviewing the vendor's testing methodology, and conducting independent testing",
        "Only check whether the vendor has an accessibility statement on their website"
      ],
      correct: 2,
      explanation: "Best procurement practice requires verification, not blind trust. VPATs/ACRs are self-reported documents and their quality varies enormously. Responsible procurement involves requesting live demonstrations with assistive technologies, understanding how the vendor conducted testing, and ideally conducting independent evaluation. This ensures the product actually meets users' needs.",
      wrongExplanations: {
        0: "Accepting self-reported claims without verification is a common procurement mistake. VPATs are only as reliable as the testing behind them, and many contain inaccurate or overly optimistic assessments.",
        1: "VPATs/ACRs are valuable tools in the procurement process when used correctly. They provide a standardized format for comparing products — the key is to verify the claims rather than dismiss them entirely.",
        3: "An accessibility statement is a positive signal but is not evidence of actual product accessibility. It does not replace the need for hands-on verification of accessibility claims."
      },
      topicLinks: ['vpat', 'procurement-accessibility'],
      difficulty: 'easy',
      tags: ['procurement']
    },
    {
      id: 345,
      question: "A development team relies solely on automated accessibility testing tools and considers their product accessible because it passes all automated checks. Why is this approach insufficient?",
      options: [
        "Automated tools can only detect approximately 30-40% of potential accessibility issues; manual testing with assistive technologies and involving users with disabilities are essential for comprehensive coverage",
        "Automated tools are always wrong and should never be used",
        "Automated tools are only needed for mobile applications, not web applications",
        "Manual testing is only needed when the project has extra budget"
      ],
      correct: 0,
      explanation: "Automated testing tools are valuable but limited — they can typically detect only about 30-40% of accessibility issues (such as missing alt text or color contrast failures). Many critical issues — like whether alt text is meaningful, whether keyboard navigation order is logical, or whether a screen reader experience makes sense — require human judgment, manual testing with assistive technologies, and usability testing with people with disabilities.",
      wrongExplanations: {
        1: "Automated tools are valuable and efficient for catching certain categories of issues. The problem is relying on them exclusively, not using them at all.",
        2: "Automated tools are relevant for all platforms including web, mobile, and desktop. The distinction is not about platform but about the inherent limitations of automation.",
        3: "Manual testing and user involvement are fundamental requirements for accessibility, not budget-dependent nice-to-haves. Skipping manual testing leads to inaccessible products regardless of automated test results."
      },
      topicLinks: ['maturity-models', 'procurement-accessibility'],
      difficulty: 'medium',
      tags: ['testing']
    },
    {
      id: 346,
      question: "A mid-sized company has one passionate developer who informally helps colleagues fix accessibility issues and occasionally presents at team meetings about inclusive design. What term BEST describes this role, and how should the organization support it?",
      options: [
        "This person is acting as an accessibility champion; the organization should formally recognize the role, provide dedicated time, and connect them with a network of champions across teams",
        "This person is overstepping their role boundaries and should focus only on their assigned development tasks",
        "This person should be promoted to Chief Accessibility Officer immediately",
        "This informal approach is the ideal model — formalizing it would add unnecessary bureaucracy"
      ],
      correct: 0,
      explanation: "Accessibility champions are advocates within their teams who build awareness, provide guidance, and help integrate accessibility into daily work. The most effective programs formally recognize champions, allocate dedicated time for the role, provide training and resources, and create a network so champions can support each other and share knowledge across the organization.",
      wrongExplanations: {
        1: "Accessibility champion activities — peer education, team guidance, awareness-building — are valuable organizational contributions, not distractions. Organizations benefit enormously from distributed accessibility advocacy.",
        2: "While this person's passion is valuable, the champion role and the CAO role are different. A CAO sets organizational strategy; a champion advocates at the team level. Both are needed but they serve different functions.",
        3: "While organic advocacy is a great starting point, formalizing the champion role with dedicated time, training, and organizational support makes it sustainable and effective rather than dependent on one person's volunteer effort."
      },
      topicLinks: ['maturity-models', 'w3c-wai'],
      difficulty: 'medium',
      tags: ['management']
    },
    {
      id: 347,
      question: "An organization has assessed itself at Level 1 (Initial/Ad hoc) on an accessibility maturity model. Accessibility efforts are reactive and depend on individual initiative rather than organizational process. What are the MOST appropriate next steps?",
      options: [
        "Immediately attempt to reach Level 5 (Optimizing) by implementing all best practices at once",
        "Establish a formal accessibility policy, assign responsibility to specific roles, and begin integrating accessibility checkpoints into existing processes",
        "Maintain the current approach since Level 1 is acceptable for most organizations",
        "Focus exclusively on purchasing automated testing tools"
      ],
      correct: 1,
      explanation: "Moving from Level 1 (ad hoc/reactive) to Level 2 (Planned/Managed) requires establishing foundational structures: a formal policy, assigned responsibilities, and initial integration into existing processes. Maturity models are designed for incremental progress — each level builds on the previous one. Trying to skip levels is unrealistic and unsustainable.",
      wrongExplanations: {
        0: "Maturity models are designed for incremental improvement. Attempting to jump from Level 1 to Level 5 ignores the foundational work needed at each stage and is likely to fail. Sustainable progress requires building on each level sequentially.",
        2: "Level 1 indicates that accessibility is reactive and person-dependent rather than systematic. This is not a sustainable or effective approach. Organizations should always strive to move beyond ad hoc efforts toward structured processes.",
        3: "While tools can help, purchasing tools without foundational processes, policies, and assigned responsibilities won't move the organization forward. Tools support processes — they don't replace them."
      },
      topicLinks: ['maturity-models'],
      difficulty: 'medium',
      tags: ['management']
    },
    {
      id: 348,
      question: "A company completed a major accessibility remediation project last year and fixed all known issues. Management considers accessibility 'done' and has dissolved the accessibility team. Why is this approach problematic?",
      options: [
        "It is fine — once all issues are fixed, accessibility maintenance is unnecessary",
        "Accessibility is a continuous process, not a one-time project; without ongoing governance, new barriers will inevitably be introduced as products evolve",
        "The only problem is that the team was dissolved — the 'done' mindset is correct",
        "Remediation projects are never effective, so the effort was wasted regardless"
      ],
      correct: 1,
      explanation: "Accessibility requires continuous improvement, not one-time compliance. Products evolve — new features are added, content changes, technologies update — and each change can introduce new barriers. Without ongoing testing, training, governance, and integration into development processes, accessibility degrades over time. A sustainable approach treats accessibility as an ongoing practice, not a project with an end date.",
      wrongExplanations: {
        0: "Accessibility is never 'done.' Every product update, content change, and new feature has the potential to introduce barriers. Ongoing attention is essential.",
        2: "Both elements are problematic. The 'done' mindset misunderstands accessibility as a one-time fix, and dissolving the team removes the capacity for ongoing governance. The mindset and the structural change are both issues.",
        3: "Remediation projects can be very effective at addressing existing barriers. The problem is treating remediation as a one-time event rather than part of an ongoing accessibility practice."
      },
      topicLinks: ['maturity-models', 'w3c-wai'],
      difficulty: 'easy',
      tags: ['management']
    },
    {
      id: 349,
      question: "A procurement officer selected a collaboration tool based on the vendor's VPAT claiming 'Supports' for all WCAG criteria. After deployment, screen reader users report they cannot navigate the tool's main interface. What should the organization do?",
      options: [
        "Tell the screen reader users to use a different tool while keeping the current one for everyone else",
        "Assume the screen reader users are using their assistive technology incorrectly",
        "Engage the vendor to remediate the barriers, establish testing benchmarks, and update procurement processes to include hands-on assistive technology testing for future purchases",
        "Accept the situation since the VPAT indicated conformance"
      ],
      correct: 2,
      explanation: "When deployed products fail to meet their claimed accessibility, organizations should work with the vendor to remediate issues (potentially using contractual accessibility requirements), establish benchmarks for verification, and critically, improve procurement processes to prevent recurrence. This means adding hands-on assistive technology testing as part of future evaluation — not just relying on vendor self-reports.",
      wrongExplanations: {
        0: "Providing a separate tool for people with disabilities is a segregated, unequal solution that violates accessibility principles. The goal is equal access to the same tools everyone uses.",
        1: "Blaming users rather than investigating the product is inappropriate. When multiple users report consistent barriers, the product — not the users — is the problem.",
        3: "A VPAT/ACR is a self-reported document. When real-world experience contradicts it, the user experience takes precedence. The organization has a responsibility to ensure actual accessibility, not just paperwork conformance."
      },
      topicLinks: ['vpat', 'procurement-accessibility'],
      difficulty: 'hard',
      tags: ['procurement']
    },
    {
      id: 350,
      question: "A software company wants to integrate accessibility into their development lifecycle rather than treating it as a final-stage QA check. Which approach BEST achieves this?",
      options: [
        "Adding accessibility requirements to user stories, conducting design reviews for accessibility, including accessibility in code reviews, and testing throughout development — not just before release",
        "Hiring an accessibility consultant to review the finished product before each release",
        "Adding an accessibility testing sprint at the end of each development cycle",
        "Training only the QA team on accessibility testing"
      ],
      correct: 0,
      explanation: "True SDLC integration means accessibility is addressed at every phase: requirements include accessibility criteria, designs are reviewed for accessibility before development begins, code reviews check accessibility implementation, and testing happens throughout — not just at the end. This 'shift left' approach catches issues early when they are cheaper and easier to fix.",
      wrongExplanations: {
        1: "A consultant review before release is still a final-stage check. Issues found at this point are expensive to fix and may delay releases. Accessibility needs to be integrated throughout development, not bolted on at the end.",
        2: "A dedicated accessibility sprint at the end of the cycle is better than nothing but still treats accessibility as a separate final step. Issues found at this stage require rework. Integration throughout the cycle is more effective and efficient.",
        3: "Training only QA limits accessibility to a testing concern. Designers, developers, content creators, and product managers all need accessibility knowledge to prevent barriers from being created in the first place."
      },
      topicLinks: ['maturity-models', 'w3c-wai'],
      difficulty: 'medium',
      tags: ['management']
    },
    {
      id: 351,
      question: "An organization is drafting its first public accessibility statement. Which components are MOST important to include?",
      options: [
        "The organization's conformance target, known limitations, contact information for reporting barriers, and a commitment to ongoing improvement",
        "Only a statement that the organization complies with all applicable laws",
        "A complete technical audit report with all WCAG success criteria listed",
        "A disclaimer stating the organization is not responsible for accessibility barriers"
      ],
      correct: 0,
      explanation: "An effective accessibility statement should include: the accessibility standard being targeted (e.g., WCAG 2.1 AA), known limitations or areas of non-conformance with plans for remediation, clear contact information so users can report barriers and request accommodations, and an organizational commitment to continuous improvement. Transparency builds trust with users.",
      wrongExplanations: {
        1: "A vague legal compliance statement provides no useful information to users. It does not tell them what standard is being met, what limitations exist, or how to get help when they encounter barriers.",
        2: "A full technical audit report is too detailed for a public-facing accessibility statement. The statement should be user-friendly and actionable, summarizing conformance status and providing clear channels for feedback.",
        3: "A disclaimer denying responsibility for barriers is the opposite of what an accessibility statement should convey. The purpose is to demonstrate commitment, transparency, and accountability — not to deflect responsibility."
      },
      topicLinks: ['w3c-wai', 'maturity-models'],
      difficulty: 'easy',
      tags: ['management']
    },
    {
      id: 352,
      question: "A team is preparing a business case for accessibility investment to present to their executive board. Which argument is MOST comprehensive and compelling?",
      options: [
        "Accessibility helps the organization avoid lawsuits",
        "Accessibility benefits include expanding market reach to over 1 billion people with disabilities globally, improving usability for all users, strengthening brand reputation, driving innovation, and reducing legal risk — while also being the right thing to do",
        "Accessibility is required by law so there is no choice",
        "Accessibility will be handled by the existing QA team at no additional cost"
      ],
      correct: 1,
      explanation: "The strongest business case connects multiple dimensions: market opportunity (1+ billion people with disabilities worldwide, plus aging populations), usability improvements that benefit all users (curb-cut effect), brand and reputation benefits, innovation drivers, legal risk reduction, and the ethical imperative. Framing accessibility only as legal compliance or risk avoidance undersells its value.",
      wrongExplanations: {
        0: "Legal risk avoidance is a valid but narrow argument. Leading with lawsuits frames accessibility negatively as a cost center rather than positively as a value creator. A comprehensive business case includes legal risk as one factor among many.",
        2: "While legal requirements exist, framing accessibility purely as a legal obligation suggests minimum compliance rather than strategic investment. This approach typically results in the bare minimum effort and misses broader benefits.",
        3: "This underestimates the investment needed and frames accessibility as having zero cost. While leveraging existing teams is smart, accessibility requires training, tools, process changes, and ongoing commitment — presenting it as 'free' undermines credibility."
      },
      topicLinks: ['disability-demographics', 'maturity-models'],
      difficulty: 'medium',
      tags: ['management']
    },
    {
      id: 353,
      question: "In an organization with a mature accessibility program, a product manager says, 'Accessibility is the accessibility team's job — my team just builds features.' What is the BEST response?",
      options: [
        "The product manager is correct — accessibility specialists should handle all accessibility work",
        "Accessibility is everyone's responsibility: product managers define accessible requirements, designers create inclusive designs, developers implement accessible code, and QA tests for accessibility — the accessibility team provides guidance and governance, not all the work",
        "Only developers are responsible for accessibility since it involves code changes",
        "Accessibility only matters during the testing phase, so it is QA's responsibility"
      ],
      correct: 1,
      explanation: "In a mature accessibility program, every role has accessibility responsibilities. Product managers include accessibility in requirements. Designers ensure inclusive design patterns. Developers write semantic, accessible code. Content creators write accessible content. QA tests with assistive technologies. The accessibility team provides expertise, training, governance, and guidance — but does not do all the work themselves.",
      wrongExplanations: {
        0: "Centralizing all accessibility work in a specialist team creates a bottleneck that cannot scale. It also removes accountability from the teams creating the products, which is where accessibility needs to be integrated.",
        2: "Accessibility spans the entire product development process. Developers implement accessibility, but if requirements don't include it and designs don't support it, developers cannot retrofit it effectively.",
        3: "Testing is important but is only one phase. If accessibility is only addressed in testing, barriers discovered at that point require costly rework. Accessibility must be considered from requirements through design, development, and testing."
      },
      topicLinks: ['maturity-models', 'w3c-wai'],
      difficulty: 'easy',
      tags: ['management']
    },
    {
      id: 354,
      question: "The W3C WAI suggests organizations follow a phased approach to implementing accessibility. An organization has already initiated accessibility awareness and is now developing an organizational accessibility policy with assigned roles. Which WAI implementation phase are they in?",
      options: [
        "Initiate",
        "Plan",
        "Implement",
        "Sustain"
      ],
      correct: 1,
      explanation: "The W3C WAI organizational implementation phases are: Initiate (build awareness, assess current state), Plan (develop policy, assign responsibilities, create plan), Implement (execute the plan, build capability, integrate into processes), and Sustain (monitor, continuously improve, adapt). Developing policy and assigning roles are key activities of the Plan phase.",
      wrongExplanations: {
        0: "The Initiate phase focuses on learning about accessibility, building initial awareness, and assessing the current state of accessibility in the organization. This organization has moved beyond initiation into active planning.",
        2: "The Implement phase involves executing the accessibility plan, building organizational capability, and integrating accessibility into development and procurement processes. This organization is still developing its plan, not yet executing it.",
        3: "The Sustain phase focuses on monitoring progress, continuous improvement, and adapting the accessibility program over time. This phase comes after implementation is underway, not during initial planning."
      },
      topicLinks: ['w3c-wai', 'maturity-models'],
      difficulty: 'medium',
      tags: ['management']
    },
    {
      id: 355,
      question: "An organization is planning accessibility training for its teams. Which approach to training is MOST effective?",
      options: [
        "Role-specific, ongoing training — designers learn inclusive design patterns, developers learn semantic HTML and ARIA, content creators learn accessible writing, and managers learn accessibility strategy and policy",
        "A single annual company-wide presentation covering WCAG guidelines",
        "Sending only the accessibility team to external conferences",
        "Providing access to an online accessibility course and leaving it optional for all employees"
      ],
      correct: 0,
      explanation: "Effective accessibility training is role-specific (each role needs different knowledge and skills), practical (with hands-on exercises relevant to actual work), and ongoing (not a one-time event). Designers need different training than developers, who need different training than content creators or managers. Regular refreshers and updates keep knowledge current.",
      wrongExplanations: {
        1: "A single annual presentation lacks the depth, specificity, and frequency needed to build real accessibility skills. Different roles need different training content, and annual delivery is insufficient for building lasting competency.",
        2: "While the accessibility team benefits from conferences, limiting training to specialists does not build the broad organizational capability needed. Every team member who creates products needs relevant accessibility training.",
        3: "Optional training results in low participation, especially among those who most need it. Making training role-specific and integrating it into professional development signals organizational commitment and ensures coverage."
      },
      topicLinks: ['w3c-wai', 'maturity-models'],
      difficulty: 'easy',
      tags: ['management']
    },
    {
      id: 356,
      question: "Consider three scenarios: (A) A federal government agency launches a new internal employee portal. (B) A private company's commercial website is inaccessible to customers. (C) A telecom company's video service lacks closed captions. Under US law, which law PRIMARILY applies to each scenario?",
      options: [
        "A: Section 508, B: ADA (Title III), C: CVAA",
        "A: ADA, B: Section 508, C: CVAA",
        "A: CVAA, B: ADA, C: Section 508",
        "A: Section 508, B: CVAA, C: ADA"
      ],
      correct: 0,
      explanation: "Section 508 applies to federal government ICT (Scenario A — federal employee portal). The ADA Title III covers public accommodations including commercial websites (Scenario B — private company's website). The CVAA (21st Century Communications and Video Accessibility Act) covers advanced communications and video programming (Scenario C — telecom video service). Each law has a distinct scope based on the entity type and technology involved.",
      wrongExplanations: {
        1: "The ADA does not primarily govern federal agency ICT — that is Section 508's domain. Section 508 does not apply to private companies — the ADA covers their public-facing services.",
        2: "The CVAA does not apply to federal agency portals, and Section 508 does not govern commercial telecom services. Each law has a specific scope that doesn't match these assignments.",
        3: "While Section 508 correctly applies to scenario A, the CVAA covers communications/video technology (not general commercial websites), and the ADA covers public accommodations (not telecom video services specifically)."
      },
      topicLinks: ['section-508', 'ada', 'cvaa'],
      difficulty: 'hard',
      tags: ['legal']
    },
    {
      id: 357,
      question: "A colleague confuses Section 504 and Section 508 of the Rehabilitation Act. How would you BEST explain the distinction?",
      options: [
        "Section 504 prohibits disability discrimination in any program receiving federal funding, while Section 508 specifically requires federal ICT (information and communications technology) to be accessible",
        "Section 504 covers web accessibility and Section 508 covers physical accessibility",
        "Section 504 applies only to education and Section 508 applies only to employment",
        "Both sections cover exactly the same requirements but Section 508 is newer"
      ],
      correct: 0,
      explanation: "Section 504 is a broad civil rights provision that prohibits discrimination on the basis of disability in any program or activity receiving federal financial assistance. Section 508 is more specific — it requires that electronic and information technology developed, procured, maintained, or used by federal agencies be accessible to people with disabilities. They are related but have distinct scopes.",
      wrongExplanations: {
        1: "This is incorrect in both directions. Section 504 covers discrimination broadly (not just web), and Section 508 covers ICT accessibility (not physical accessibility).",
        2: "Section 504 is not limited to education — it covers any federally funded program or activity. Section 508 is not limited to employment — it covers all federal ICT. Both have broader scope than these narrow characterizations suggest.",
        3: "The sections have fundamentally different scopes. Section 504 addresses disability discrimination broadly in federally funded programs, while Section 508 specifically addresses ICT accessibility in federal agencies. They are complementary, not duplicative."
      },
      topicLinks: ['section-508', 'ada'],
      difficulty: 'medium',
      tags: ['legal']
    },
    {
      id: 358,
      question: "An employee with a visual impairment requests screen reader-compatible software to perform their job duties. The employer argues that the cost is too high. Under disability rights law, what standard determines whether this accommodation must be provided?",
      options: [
        "The employer must provide any accommodation the employee wants, regardless of cost",
        "The employer must provide reasonable accommodation unless they can demonstrate it would cause 'undue hardship' — significant difficulty or expense relative to the organization's size and resources",
        "The employer has no obligation to provide accommodations for technology",
        "The accommodation only needs to be provided if it costs less than $500"
      ],
      correct: 1,
      explanation: "Disability rights laws (such as the ADA in the US, the Equality Act in the UK, and the CRPD internationally) require employers to provide reasonable accommodations. The 'undue hardship' or 'undue burden' standard considers factors such as the cost relative to the organization's overall budget and resources, the nature of the organization, and the impact on operations. A large corporation would have a much harder time claiming undue hardship than a small business.",
      wrongExplanations: {
        0: "The obligation is for 'reasonable' accommodation, not unlimited accommodation. Accommodations that would cause genuine undue hardship — significant difficulty or expense relative to organizational resources — may not be required.",
        2: "Disability rights laws explicitly cover technology accommodations in the workplace. Employers are required to provide accessible tools and technologies as reasonable accommodations when needed for job performance.",
        3: "There is no fixed dollar threshold for reasonable accommodation. The determination depends on the specific circumstances, including the employer's size, financial resources, and the nature of the accommodation needed."
      },
      topicLinks: ['ada', 'crpd'],
      difficulty: 'medium',
      tags: ['legal']
    },
    {
      id: 359,
      question: "What is the key difference in scope between the EU Web Accessibility Directive and the European Accessibility Act (EAA)?",
      options: [
        "The Web Accessibility Directive applies to public sector websites and mobile apps, while the EAA extends accessibility requirements to private sector products and services including e-commerce, banking, and transportation",
        "They cover the same scope but the EAA replaced the Directive",
        "The Web Accessibility Directive covers the private sector and the EAA covers the public sector",
        "The EAA only applies to physical products, not digital services"
      ],
      correct: 0,
      explanation: "The EU Web Accessibility Directive (2016) requires public sector body websites and mobile applications to be accessible. The European Accessibility Act (2019, with member state implementation by 2025) significantly broadens scope to include private sector products and services: computers, smartphones, e-commerce, banking services, e-books, transportation ticketing, and more. Together they create comprehensive public and private sector coverage.",
      wrongExplanations: {
        1: "The EAA did not replace the Web Accessibility Directive — both are in force simultaneously. They complement each other by covering different sectors (public vs. expanded private sector).",
        2: "This reverses the actual scope. The Web Accessibility Directive targets public sector bodies, and the EAA extends requirements to the private sector.",
        3: "The EAA covers both physical products (computers, smartphones, payment terminals) and digital services (e-commerce, banking, e-books). Its scope is deliberately broad to cover the entire user experience."
      },
      topicLinks: ['eu-accessibility'],
      difficulty: 'hard',
      tags: ['legal']
    },
    {
      id: 360,
      question: "How does the European standard EN 301 549 relate to WCAG?",
      options: [
        "EN 301 549 is a completely separate standard with no connection to WCAG",
        "EN 301 549 incorporates WCAG 2.1 Level AA requirements for web content and extends accessibility requirements to non-web ICT such as software, hardware, and documents",
        "EN 301 549 replaces WCAG in Europe",
        "WCAG is a European standard that EN 301 549 is based on"
      ],
      correct: 1,
      explanation: "EN 301 549 is the harmonized European standard for ICT accessibility. For web content, it directly incorporates WCAG 2.1 Level AA success criteria (in its Chapter/Clause 9). But EN 301 549 goes beyond web content to cover software (Chapter 11), documents (Chapter 10), hardware (Chapter 8), and other ICT. It serves as the technical standard referenced by the EU Web Accessibility Directive and the European Accessibility Act.",
      wrongExplanations: {
        0: "EN 301 549 directly incorporates WCAG for its web content requirements. They are closely connected — the relationship is intentional and explicit.",
        2: "EN 301 549 does not replace WCAG — it incorporates WCAG for web content while adding requirements for other ICT types. WCAG remains the foundational web accessibility standard globally.",
        3: "WCAG is a W3C international standard, not a European standard. EN 301 549 is the European standard that incorporates WCAG and extends its principles to other ICT types."
      },
      topicLinks: ['en-301-549', 'eu-accessibility'],
      difficulty: 'medium',
      tags: ['legal']
    },
    {
      id: 361,
      question: "The Charter of Fundamental Rights of the European Union includes provisions relevant to disability. Which statement BEST describes its coverage?",
      options: [
        "It only addresses accessibility of websites",
        "It prohibits discrimination on grounds including disability and recognizes the right of persons with disabilities to benefit from measures designed to ensure their independence, social and occupational integration, and participation in community life",
        "It exclusively covers employment discrimination",
        "It applies only to people with physical disabilities, not cognitive or sensory disabilities"
      ],
      correct: 1,
      explanation: "The EU Charter of Fundamental Rights (Article 21) prohibits discrimination on various grounds including disability, and (Article 26) recognizes the right of persons with disabilities to benefit from measures ensuring their independence, social and occupational integration, and participation in the life of the community. It provides a broad rights framework that underpins more specific EU directives and regulations.",
      wrongExplanations: {
        0: "The Charter covers fundamental rights broadly, not just website accessibility. It addresses non-discrimination, independence, social integration, and community participation — far beyond any single technology domain.",
        2: "While employment non-discrimination is included, the Charter's disability provisions extend to independence, social integration, and community participation — covering life well beyond the workplace.",
        3: "The Charter does not distinguish between disability types. Its protections apply to all persons with disabilities, including physical, sensory, cognitive, intellectual, and psychosocial disabilities."
      },
      topicLinks: ['eu-accessibility', 'crpd'],
      difficulty: 'hard',
      tags: ['legal']
    },
    {
      id: 362,
      question: "What is the scope of the EU Employment Equality Directive as it relates to disability?",
      options: [
        "It covers accessibility of consumer products and services",
        "It establishes a general framework for equal treatment in employment and occupation, prohibiting disability discrimination in areas such as hiring, working conditions, promotion, and vocational training",
        "It only applies to public sector employers",
        "It sets technical accessibility standards for workplace software"
      ],
      correct: 1,
      explanation: "The EU Employment Equality Directive (2000/78/EC) establishes a general framework for combating discrimination on several grounds, including disability, specifically in the context of employment and occupation. It covers hiring, working conditions, advancement, vocational training, and membership in worker organizations. Member states must implement it through national legislation, including provisions for reasonable accommodation.",
      wrongExplanations: {
        0: "The Employment Equality Directive focuses on employment and occupation, not consumer products and services. Consumer-facing accessibility is addressed by other instruments like the European Accessibility Act.",
        2: "The Directive applies to both public and private sector employers. It establishes minimum standards for equal treatment across all employment contexts in EU member states.",
        3: "The Directive addresses discrimination and equal treatment principles, not technical accessibility specifications. Technical standards for ICT are covered by EN 301 549."
      },
      topicLinks: ['eu-accessibility', 'national-disability-laws'],
      difficulty: 'hard',
      tags: ['legal']
    },
    {
      id: 363,
      question: "What is the primary goal of the Accessible Canada Act, and what is its scope?",
      options: [
        "It applies to all Canadian businesses and requires WCAG AAA conformance",
        "It aims to create a barrier-free Canada by 2040, applying to federally regulated entities including federal government, telecommunications, banking, and transportation sectors",
        "It only applies to Canadian government websites",
        "It requires all Canadian provinces to adopt identical accessibility standards"
      ],
      correct: 1,
      explanation: "The Accessible Canada Act (2019) sets an ambitious goal of a barrier-free Canada by 2040. Its scope covers federally regulated entities — the federal government, Crown corporations, and federally regulated private sector organizations in areas such as banking, telecommunications, and inter-provincial transportation. It addresses barriers across employment, the built environment, ICT, communication, procurement, and program/service delivery.",
      wrongExplanations: {
        0: "The Act applies to federally regulated entities, not all Canadian businesses. Provincial and territorial organizations are covered by their own accessibility legislation (such as Ontario's AODA). It also does not specify WCAG AAA as a requirement.",
        2: "The Act's scope is much broader than websites. It covers employment practices, built environments, ICT, communications, procurement, and service delivery across all federally regulated entities.",
        3: "Canada's accessibility framework involves both federal and provincial/territorial legislation. The Accessible Canada Act does not require provinces to adopt identical standards — provinces like Ontario (AODA) and Manitoba have their own accessibility laws."
      },
      topicLinks: ['national-disability-laws'],
      difficulty: 'medium',
      tags: ['legal']
    },
    {
      id: 364,
      question: "How does the UK Equality Act 2010 protect people with disabilities?",
      options: [
        "It only prevents discrimination in education settings",
        "It protects against discrimination in employment, education, access to goods and services, housing, and public functions, and requires reasonable adjustments to remove barriers for disabled people",
        "It only applies to physical disabilities in the workplace",
        "It sets specific technical standards for website accessibility"
      ],
      correct: 1,
      explanation: "The UK Equality Act 2010 provides comprehensive protection against discrimination on the basis of disability (among other protected characteristics) across multiple areas of life: employment, education, access to goods and services, housing, transport, and public functions. Crucially, it includes a duty to make 'reasonable adjustments' — proactive steps to remove or reduce barriers that put disabled people at a substantial disadvantage.",
      wrongExplanations: {
        0: "The Equality Act's scope extends far beyond education. It covers employment, goods and services, housing, transport, public functions, and more. Education is just one of many protected areas.",
        2: "The Act covers all types of disability (physical, sensory, cognitive, mental health, learning disabilities) and applies across many settings beyond the workplace, including services, education, housing, and public functions.",
        3: "The Equality Act establishes legal principles of non-discrimination and reasonable adjustments — it does not set technical standards. Technical accessibility standards (like WCAG) are referenced as ways to help meet Equality Act obligations."
      },
      topicLinks: ['national-disability-laws'],
      difficulty: 'easy',
      tags: ['legal']
    },
    {
      id: 365,
      question: "Article 9 of the CRPD addresses accessibility. How has this article influenced national laws around the world?",
      options: [
        "It has had no influence because the CRPD is non-binding",
        "It has served as a framework and catalyst for countries to develop or strengthen their own accessibility laws, with many nations aligning domestic legislation with CRPD principles after ratification",
        "It replaced all national accessibility laws upon each country's ratification",
        "It only influenced laws in European countries"
      ],
      correct: 1,
      explanation: "CRPD Article 9 requires states parties to take appropriate measures to ensure persons with disabilities have access to the physical environment, transportation, information and communications technologies, and other facilities and services. After ratifying the CRPD, many countries have developed or updated domestic legislation to align with its principles — examples include the Accessible Canada Act, India's Rights of Persons with Disabilities Act, and updates to EU accessibility directives.",
      wrongExplanations: {
        0: "While the CRPD's enforcement mechanisms vary, it has been highly influential as a framework for domestic legislation. Countries that ratify the CRPD commit to aligning their laws with its principles, and many have done so — making its influence substantial and concrete.",
        2: "The CRPD does not replace national laws — it establishes principles that countries implement through their own domestic legislation. Each country adapts CRPD principles to their legal system and context.",
        3: "The CRPD's influence is global, not just European. Countries across Asia, Africa, the Americas, and Oceania have developed or strengthened accessibility laws following CRPD ratification."
      },
      topicLinks: ['crpd', 'national-disability-laws'],
      difficulty: 'hard',
      tags: ['legal']
    },
    {
      id: 366,
      question: "The W3C WAI publishes three complementary sets of guidelines: WCAG, ATAG, and UAAG. A company builds a content management system (CMS) that authors use to create websites. Which guideline set is MOST relevant to the CMS itself?",
      options: [
        "WCAG — Web Content Accessibility Guidelines",
        "ATAG — Authoring Tool Accessibility Guidelines",
        "UAAG — User Agent Accessibility Guidelines",
        "WAI-ARIA — Accessible Rich Internet Applications"
      ],
      correct: 1,
      explanation: "ATAG (Authoring Tool Accessibility Guidelines) applies to tools used to create web content — including CMSs, website builders, code editors, and social media platforms. ATAG has two parts: Part A ensures the authoring tool itself is accessible to authors with disabilities, and Part B ensures the tool helps produce accessible content. WCAG applies to the web content produced, and UAAG applies to browsers and media players (user agents).",
      wrongExplanations: {
        0: "WCAG applies to the web content that is produced by the CMS, not to the CMS tool itself. The websites authors create with the CMS should conform to WCAG, but the CMS as an authoring tool falls under ATAG.",
        2: "UAAG applies to user agents — software that retrieves and presents web content to users, such as browsers, media players, and browser extensions. A CMS is an authoring tool, not a user agent.",
        3: "WAI-ARIA is a technical specification for making dynamic web content more accessible through additional semantics. It is not a guideline set for evaluating tools — it is an implementation technology."
      },
      topicLinks: ['w3c-wai'],
      difficulty: 'medium',
      tags: ['standards']
    },
    {
      id: 367,
      question: "What did WCAG 2.1 add beyond WCAG 2.0, and what was new in WCAG 2.2?",
      options: [
        "WCAG 2.1 added success criteria addressing mobile accessibility, low vision, and cognitive disabilities; WCAG 2.2 added criteria including focus appearance, dragging movements, and accessible authentication",
        "WCAG 2.1 only added mobile-specific criteria; WCAG 2.2 completely replaced the POUR framework",
        "WCAG 2.1 and 2.2 made no substantive changes — they only reorganized existing 2.0 criteria",
        "WCAG 2.1 added cognitive accessibility criteria; WCAG 2.2 removed all mobile-related criteria"
      ],
      correct: 0,
      explanation: "WCAG 2.1 (2018) added 17 new success criteria addressing gaps in mobile/touch accessibility (e.g., Orientation, Pointer Cancellation), low vision (e.g., Reflow, Text Spacing), and cognitive/learning disabilities (e.g., Input Purpose). WCAG 2.2 (2023) added 9 more criteria including Focus Appearance, Dragging Movements, Accessible Authentication, and Redundant Entry — further addressing cognitive accessibility and interaction patterns. Both versions are backward-compatible with WCAG 2.0.",
      wrongExplanations: {
        1: "WCAG 2.1 addressed mobile, low vision, AND cognitive accessibility — not just mobile. WCAG 2.2 built upon the existing POUR framework (Perceivable, Operable, Understandable, Robust) — it did not replace it.",
        2: "Both versions added substantive new success criteria. WCAG 2.1 added 17 new criteria and WCAG 2.2 added 9 new criteria, addressing real gaps in the original WCAG 2.0 coverage.",
        3: "WCAG 2.1 addressed mobile, low vision, and cognitive accessibility (not just cognitive). WCAG 2.2 did not remove any criteria — each WCAG version is a superset of the previous version, maintaining backward compatibility."
      },
      topicLinks: ['w3c-wai'],
      difficulty: 'hard',
      tags: ['standards']
    },
    {
      id: 368,
      question: "WCAG is a W3C recommendation, not a law. Yet it has legal force in many countries. How does this happen?",
      options: [
        "WCAG automatically becomes law in every country when published",
        "Countries and regulations reference or incorporate WCAG into their legal frameworks — for example, Section 508 references WCAG through EN 301 549, the EU Web Accessibility Directive references EN 301 549 which incorporates WCAG, and many national laws directly reference WCAG 2.1 AA",
        "WCAG only has legal force in the United States",
        "WCAG becomes law only through court decisions, not through legislation"
      ],
      correct: 1,
      explanation: "WCAG gains legal force when governments reference it in legislation, regulation, or policy. This happens worldwide: the US Section 508 refresh incorporated WCAG 2.0 AA criteria, the EU Web Accessibility Directive references EN 301 549 (which incorporates WCAG), Canada's accessibility standards reference WCAG, and many other countries directly cite WCAG 2.1 AA in their accessibility laws. This 'incorporation by reference' model makes WCAG the de facto global standard with legal weight.",
      wrongExplanations: {
        0: "WCAG does not automatically become law — it requires active incorporation by governments through legislation, regulation, or policy. Each country decides whether and how to reference WCAG in their legal framework.",
        2: "WCAG has legal force or is referenced in laws across many countries, including the US, EU member states, Canada, Australia, Israel, and many others. Its influence is global, not limited to any single country.",
        3: "While courts have sometimes referenced WCAG, its primary path to legal force is through legislative and regulatory action — governments explicitly referencing WCAG in their accessibility laws and standards."
      },
      topicLinks: ['w3c-wai', 'section-508', 'eu-accessibility'],
      difficulty: 'hard',
      tags: ['standards']
    },
    {
      id: 369,
      question: "When reading the WCAG specification, what is the difference between normative and non-normative (informative) content?",
      options: [
        "Normative content (success criteria, conformance requirements) defines what MUST be met for conformance; non-normative content (Understanding documents, Techniques) provides guidance and examples but is not required",
        "Normative content is optional best practice; non-normative content is required",
        "All WCAG content is normative and equally required for conformance",
        "Non-normative content is outdated material kept for historical reference only"
      ],
      correct: 0,
      explanation: "In WCAG, normative content includes the success criteria, conformance requirements, and definitions — this is what must be satisfied for conformance. Non-normative (informative) content includes the Understanding documents (explaining intent and benefits), Techniques (specific implementation approaches), and How to Meet guides. These informative resources are invaluable for implementation but are not requirements — there may be multiple valid ways to meet each success criterion.",
      wrongExplanations: {
        1: "This reverses the relationship. Normative content defines mandatory requirements; non-normative content provides optional guidance. Conformance is measured against normative content only.",
        2: "WCAG explicitly distinguishes normative from non-normative content. Only the normative portions (success criteria, conformance requirements, definitions) are required for conformance claims.",
        3: "Non-normative content is actively maintained and updated. The Understanding documents and Techniques are regularly revised to reflect current best practices, new technologies, and improved implementation approaches."
      },
      topicLinks: ['w3c-wai'],
      difficulty: 'hard',
      tags: ['standards']
    },
    {
      id: 370,
      question: "A developer is building a custom interactive component (a star rating widget) that has no native HTML equivalent. What is WAI-ARIA's role in this situation, and when is ARIA appropriate to use?",
      options: [
        "ARIA should be used on every HTML element to improve accessibility",
        "ARIA should never be used — only native HTML elements are accessible",
        "ARIA bridges the gap when native HTML semantics are insufficient; for this custom widget, ARIA roles, states, and properties communicate the component's purpose and state to assistive technologies — but native HTML should always be preferred when available",
        "ARIA replaces the need for keyboard accessibility and focus management"
      ],
      correct: 2,
      explanation: "WAI-ARIA (Accessible Rich Internet Applications) provides a way to add semantic information to custom widgets and dynamic content when native HTML elements do not convey the needed role, state, or property information. For a star rating widget, ARIA might convey the rating role, current value, and range. However, the first rule of ARIA is: if a native HTML element can do the job, use it instead. ARIA adds semantics but does not add behavior — keyboard interaction and focus management must still be implemented separately.",
      wrongExplanations: {
        0: "Adding ARIA to every element often makes accessibility worse, not better. Redundant ARIA (e.g., adding role='button' to a <button>) is unnecessary, and incorrect ARIA creates confusing experiences for assistive technology users. ARIA should only be used when needed.",
        1: "While native HTML should always be the first choice, complex custom widgets sometimes require ARIA to communicate their semantics to assistive technologies. ARIA exists precisely for cases where HTML alone is insufficient.",
        3: "ARIA communicates semantics (roles, states, properties) to assistive technologies but does not provide behavior. Keyboard interaction, focus management, and event handling must all be implemented separately in JavaScript. ARIA complements these efforts — it does not replace them."
      },
      topicLinks: ['w3c-wai'],
      difficulty: 'easy',
      tags: ['standards']
    }
  ]
};
