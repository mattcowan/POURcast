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
      question: "What year was the Universal Declaration of Human Rights (UDHR) adopted by the United Nations?",
      options: [
        "1948",
        "1966",
        "1975",
        "1990"
      ],
      correct: 0,
      explanation: "The UDHR was adopted by the UN General Assembly on December 10, 1948. It is the foundational international human rights document and has influenced numerous subsequent treaties and laws.",
      wrongExplanations: {
        1: "1966 is when the International Covenants on Civil and Political Rights and on Economic, Social and Cultural Rights were adopted — not the UDHR.",
        2: "1975 is the year the UN Declaration on the Rights of Disabled Persons was adopted, not the UDHR.",
        3: "1990 is the year the Americans with Disabilities Act was signed into law in the United States, not the UDHR adoption year."
      },
      topicLinks: ['udhr'],
      difficulty: 'easy',
      tags: ['legal-international']
    },
    {
      id: 302,
      question: "Article 1 of the Universal Declaration of Human Rights states that:",
      options: [
        "All human beings are born free and equal in dignity and rights",
        "Everyone has the right to education without discrimination",
        "States shall ensure accessibility of public services",
        "No one shall be subjected to arbitrary detention"
      ],
      correct: 0,
      explanation: "Article 1 of the UDHR declares that 'All human beings are born free and equal in dignity and rights.' This foundational principle underpins all subsequent human rights instruments, including those addressing disability rights.",
      wrongExplanations: {
        1: "While education rights are addressed in the UDHR (Article 26), this is not the text of Article 1.",
        2: "Accessibility of public services is addressed in instruments like the CRPD, not in Article 1 of the UDHR.",
        3: "Arbitrary detention is addressed in Article 9 of the UDHR, not Article 1."
      },
      topicLinks: ['udhr'],
      difficulty: 'easy',
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
      question: "The Americans with Disabilities Act (ADA) was signed into law in which year?",
      options: [
        "1990",
        "1973",
        "1986",
        "2001"
      ],
      correct: 0,
      explanation: "The ADA was signed into law on July 26, 1990, by President George H.W. Bush. It is the most comprehensive civil rights law prohibiting discrimination against people with disabilities in the United States.",
      wrongExplanations: {
        1: "1973 is the year the Rehabilitation Act was passed, which includes Section 504 and later Section 508 — not the ADA.",
        2: "1986 does not correspond to any major US disability legislation. The ADA was signed in 1990.",
        3: "2001 is not the year the ADA was enacted. By 2001, the ADA had already been in effect for over a decade."
      },
      topicLinks: ['ada'],
      difficulty: 'easy',
      tags: ['legal-national']
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
      question: "When a vendor completes a VPAT, the resulting document is called:",
      options: [
        "An Accessibility Conformance Report (ACR)",
        "A WCAG Audit Certificate",
        "A Section 508 Compliance License",
        "An Accessibility Impact Assessment"
      ],
      correct: 0,
      explanation: "When a vendor fills out a VPAT (the template), the resulting document is called an Accessibility Conformance Report (ACR). The ACR details the product's level of conformance with relevant accessibility standards.",
      wrongExplanations: {
        1: "There is no official document called a 'WCAG Audit Certificate.' The completed VPAT is an Accessibility Conformance Report.",
        2: "There is no 'Section 508 Compliance License.' The VPAT produces an Accessibility Conformance Report that documents conformance levels.",
        3: "An 'Accessibility Impact Assessment' is not the standard name for a completed VPAT. The correct term is Accessibility Conformance Report (ACR)."
      },
      topicLinks: ['vpat'],
      difficulty: 'medium',
      tags: ['management', 'procurement']
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
      question: "A VPAT is specifically designed for reporting conformance of:",
      options: [
        "Information and communication technology (ICT) products and services",
        "Physical buildings and architectural features",
        "Employment hiring practices",
        "Transportation vehicles and infrastructure"
      ],
      correct: 0,
      explanation: "The VPAT (Voluntary Product Accessibility Template) is specifically designed for ICT accessibility conformance reporting. It covers software, hardware, web content, electronic documents, and other ICT products and services against standards like Section 508, WCAG, and EN 301 549.",
      wrongExplanations: {
        1: "Physical building accessibility is assessed through architectural reviews and ADA compliance inspections, not VPATs.",
        2: "Employment hiring practices are governed by laws like Title I of the ADA. VPATs address ICT product accessibility, not HR practices.",
        3: "Transportation accessibility is governed by laws like the ADA and the Air Carrier Access Act. VPATs are for ICT products, not vehicles."
      },
      topicLinks: ['vpat'],
      difficulty: 'medium',
      tags: ['management', 'procurement']
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
    }
  ]
};
