import React, { useState, useEffect } from 'react';
import { BookOpen, Award, AlertCircle, CheckCircle, XCircle, Trophy, Brain, Scale, Globe, User, RotateCcw, BarChart3, ChevronRight, Loader2, ShieldCheck, GraduationCap } from 'lucide-react';

// --- CONFIGURATION: ICON MAPPING ---
const ICON_MAP = {
  'user': <User size={24} />,
  'brain': <Brain size={24} />,
  'scale': <Scale size={24} />,
  'shield': <ShieldCheck size={24} />,
  'laptop': <BookOpen size={24} />,
  'default': <BookOpen size={24} />
};

const getIconForDomain = (iconName) => ICON_MAP[iconName] || ICON_MAP['default'];

// --- DATA SERVICE ---

// Course Metadata
const COURSES = [
  { id: 'cpacc', title: 'IAAP CPACC', description: 'Strategy, Laws, & Universal Design' },
  { id: 'dhs', title: 'DHS Trusted Tester', description: 'Section 508 Compliance & ANDI Tool' }
];

// CPACC DATA (Existing)
const CPACC_DATA = [
  {
    id: 'domain1',
    courseId: 'cpacc',
    title: 'Disabilities & AT',
    iconName: 'user',
    color: 'bg-blue-600',
    description: 'Models of disability, categories, and assistive technologies.',
    questions: [
      {
        id: 101,
        question: "Which model of disability views disability as a 'defect' or 'problem' within the individual that needs to be cured?",
        options: ["Social Model", "Medical Model", "Functional Solutions Model", "Charity Model"],
        correct: 1,
        explanation: "The Medical Model views disability as a biological deficiency to be fixed. The Social Model views it as a mismatch between the person and the environment."
      },
      {
        id: 102,
        question: "A person with low vision uses a screen magnifier. This is an example of which type of technology?",
        options: ["Assistive Technology (AT)", "Adaptive Strategy", "Universal Design", "Mainstream Technology"],
        correct: 0,
        explanation: "Assistive Technology (AT) is any item or equipment used to increase, maintain, or improve functional capabilities."
      },
      {
        id: 103,
        question: "Which disability category includes conditions like dyslexia, ADHD, and autism?",
        options: ["Psychological Disabilities", "Cognitive/Learning Disabilities", "Developmental Disabilities", "Sensory Disabilities"],
        correct: 1,
        explanation: "Cognitive disabilities affect mental processes such as memory, problem-solving, attention, and reading comprehension."
      },
      {
        id: 104,
        question: "Which assistive technology would a person with quadriplegia most likely use to navigate a computer?",
        options: ["Screen Reader", "Switch Device / Sip-and-Puff", "Refreshable Braille Display", "Screen Magnifier"],
        correct: 1,
        explanation: "Switch devices allow users with limited mobility to interact with computers using minimal movement (e.g., breath, head tilt)."
      },
      {
        id: 105,
        question: "Which is an example of an 'Adaptive Strategy' rather than AT?",
        options: ["Using a screen reader", "Memorizing the layout of a room to navigate in the dark", "Using a wheelchair", "Wearing hearing aids"],
        correct: 1,
        explanation: "Adaptive strategies are techniques people use to accomplish tasks, whereas AT involves tools or devices."
      },
      {
        id: 106,
        question: "The 'Functional Solutions Model' of disability focuses on:",
        options: ["Civil rights", "Innovation and overcoming limitations through technology", "Moral obligation", "Medical diagnosis"],
        correct: 1,
        explanation: "The Functional Solutions Model is a practical approach that focuses on solving the specific functional challenge, often through product design."
      }
    ]
  },
  {
    id: 'domain2',
    courseId: 'cpacc',
    title: 'Accessibility & UD',
    iconName: 'brain',
    color: 'bg-purple-600',
    description: 'Universal Design principles, WCAG, and accommodation vs. access.',
    questions: [
      {
        id: 201,
        question: "Which of the following best describes 'Universal Design'?",
        options: [
          "Retrofitting a building to add a ramp",
          "Designing products to be usable by all people, to the greatest extent possible, without adaptation",
          "Providing a separate accessible website for screen reader users",
          "Creating a product specifically for people with disabilities"
        ],
        correct: 1,
        explanation: "Universal Design aims to make things accessible to everyone from the start, avoiding 'separate but equal' solutions."
      },
      {
        id: 202,
        question: "In WCAG 2.1, what does the acronym POUR stand for?",
        options: [
          "Practical, Open, Usable, Robust",
          "Perceivable, Operable, Understandable, Robust",
          "Perceivable, Organized, Uniform, Reliable",
          "Public, Open, Universal, Responsive"
        ],
        correct: 1,
        explanation: "POUR is the foundation of WCAG: Content must be Perceivable, Operable, Understandable, and Robust."
      },
      {
        id: 203,
        question: "Which WCAG principle ensures content is compatible with current and future user agents?",
        options: ["Perceivable", "Operable", "Understandable", "Robust"],
        correct: 3,
        explanation: "Robustness ensures compatibility. This is why valid HTML and correct parsing are critical."
      },
      {
        id: 204,
        question: "Accommodations vs. Accessibility: Which statement is true?",
        options: [
          "They are the same thing.",
          "Accessibility is proactive (systemic); Accommodation is reactive (individual).",
          "Accommodation is better because it is personalized.",
          "Accessibility is only for digital products."
        ],
        correct: 1,
        explanation: "Accessibility builds inclusion into the system for everyone. Accommodations fix a barrier for a specific person upon request."
      },
      {
        id: 205,
        question: "What is the difference between WCAG Level A and Level AA?",
        options: [
          "Level A is for mobile, AA is for desktop",
          "Level A deals with essential accessibility; AA deals with major barriers for a wider group",
          "Level AA is only required for government sites",
          "Level A is harder to achieve than AA"
        ],
        correct: 1,
        explanation: "Level A prevents the most serious barriers (complete lack of access). AA is the standard for most regulations and covers more user needs."
      }
    ]
  },
  {
    id: 'domain3',
    courseId: 'cpacc',
    title: 'Standards & Laws',
    iconName: 'scale',
    color: 'bg-emerald-600',
    description: 'ADA, Section 508, EN 301 549, and management strategies.',
    questions: [
      {
        id: 301,
        question: "Which US law specifically prohibits discrimination on the basis of disability in employment, State and local government, public accommodations?",
        options: ["Section 508", "The Americans with Disabilities Act (ADA)", "CVAA", "The Air Carrier Access Act"],
        correct: 1,
        explanation: "The ADA (1990) is the broad civil rights law covering public life. Section 508 is specifically for Federal agencies."
      },
      {
        id: 302,
        question: "What is EN 301 549?",
        options: [
          "The European standard for accessibility requirements for ICT products and services",
          "The Canadian web accessibility standard",
          "The Japanese industrial standard for assistive tech",
          "A United Nations treaty on disability rights"
        ],
        correct: 0,
        explanation: "EN 301 549 is the European Standard for digital accessibility, used for public procurement in the EU."
      },
      {
        id: 303,
        question: "Section 508 of the Rehabilitation Act applies to:",
        options: ["All websites in the USA", "Federal agencies and their procurement/use of ICT", "Private universities", "State governments only"],
        correct: 1,
        explanation: "Section 508 applies to the Federal government. It requires them to make their electronic and information technology accessible."
      },
      {
        id: 304,
        question: "Who is primarily responsible for ensuring accessibility in a procurement process?",
        options: ["The vendor only", "The organization purchasing the product", "The end user", "The government"],
        correct: 1,
        explanation: "The purchasing organization is responsible for verifying the accessibility of what they buy, often by requesting an ACR/VPAT."
      }
    ]
  }
];

// DHS TRUSTED TESTER DATA (New)
const DHS_DATA = [
  {
    id: 'dhs_domain1',
    courseId: 'dhs',
    title: 'Trusted Tester Process',
    iconName: 'shield',
    color: 'bg-indigo-600',
    description: 'The Trusted Tester methodology, ANDI tool, and reporting.',
    questions: [
      {
        id: 401,
        question: "What is the primary automated inspection tool required by the DHS Trusted Tester v5 process?",
        options: ["WAVE", "ANDI (Accessible Name & Description Inspector)", "Axe DevTools", "Google Lighthouse"],
        correct: 1,
        explanation: "ANDI is the mandatory tool developed by the SSA and used in the DHS Trusted Tester methodology to expose underlying code to the tester."
      },
      {
        id: 402,
        question: "True or False: The Trusted Tester process allows you to pass a test case based solely on visual inspection.",
        options: ["True", "False"],
        correct: 1,
        explanation: "False. The methodology requires code inspection (using ANDI or Source View) to verify the accessible name, role, and value, not just visual appearance."
      },
      {
        id: 403,
        question: "Which Section 508 standard generally aligns with the success criteria used in Trusted Tester v5?",
        options: ["WCAG 2.0 Level AA", "WCAG 2.1 Level AA", "WCAG 2.2 Level AAA", "Section 508 has no relation to WCAG"],
        correct: 0,
        explanation: "Currently, the Revised Section 508 Standards incorporate WCAG 2.0 Level AA by reference."
      },
      {
        id: 404,
        question: "When identifying content types in the Trusted Tester process, what is the first step?",
        options: ["Run a screen reader", "Identify the page title", "Define the user path", "Identify the technology used (HTML, PDF, etc.)"],
        correct: 1,
        explanation: "Identifying the page title is often one of the very first checks (Test ID 1) to ensure the user knows where they are."
      },
      {
        id: 405,
        question: "If ANDI finds an alert, does that automatically mean the test case fails?",
        options: ["Yes, ANDI is the authority", "No, manual verification is always required", "Yes, but only for color contrast", "No, unless it is a Level A failure"],
        correct: 1,
        explanation: "ANDI provides alerts and warnings, but the human tester must determine if it is an actual failure based on the Trusted Tester pass/fail criteria."
      },
      {
        id: 406,
        question: "What is the purpose of the 'Meaningful Image' test in the DHS process?",
        options: ["To ensure every image has alt text", "To ensure decorative images are hidden and meaningful images have equivalent text", "To ensure images are high resolution", "To ensure images load quickly"],
        correct: 1,
        explanation: "The core logic is distinguishing between decorative (must have empty alt/aria-hidden) and meaningful (must have descriptive alt)."
      }
    ]
  },
  {
    id: 'dhs_domain2',
    courseId: 'dhs',
    title: 'Forms & Interaction',
    iconName: 'laptop',
    color: 'bg-indigo-600',
    description: 'Testing inputs, labels, and interactive elements.',
    questions: [
      {
        id: 410,
        question: "In the DHS Trusted Tester process, a form field must have a programmatically associated label. Which attribute creates the strongest association?",
        options: ["placeholder", "title", "for/id pairing", "name"],
        correct: 2,
        explanation: "The 'for' attribute on the label matching the 'id' of the input is the standard, most robust method required for passing this test condition."
      },
      {
        id: 411,
        question: "When testing a data table, what must contain the scope attribute if headers are ambiguous?",
        options: ["<td> elements", "The <caption>", "<th> elements", "The <table> tag"],
        correct: 2,
        explanation: "The <th> (table header) element uses the scope attribute (row/col) to programmatically associate headers with data cells."
      },
      {
        id: 412,
        question: "If a user interface component is keyboard accessible, the focus indicator must be:",
        options: ["Blue", "Visually discernible", "A dotted line", "At least 2px thick"],
        correct: 1,
        explanation: "Section 508 (and WCAG 2.0) requires the focus indicator to be visually discernible. It does not strictly mandate color or thickness, though those are best practices."
      },
      {
        id: 413,
        question: "Which ARIA attribute handles the 'state' of a toggle button (e.g., expanded/collapsed)?",
        options: ["aria-live", "aria-expanded", "aria-controls", "aria-haspopup"],
        correct: 1,
        explanation: "aria-expanded='true' or 'false' communicates the current state of an expandable component to the accessibility API."
      },
      {
        id: 414,
        question: "When testing color use, the rule is:",
        options: ["Color can be used, but it cannot be the ONLY means of conveying information", "Color should never be used", "Only blue and black text is allowed", "All graphs must be black and white"],
        correct: 0,
        explanation: "This is a core 508 requirement. You must provide a secondary indicator (text, pattern, shape) alongside color."
      }
    ]
  }
];

const RAW_DATA_SOURCE = [...CPACC_DATA, ...DHS_DATA];

const fetchQuestions = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(RAW_DATA_SOURCE);
    }, 1000); 
  });
};

// --- COMPONENTS ---

const CourseSelector = ({ activeCourse, onSelect, stats }) => {
  return (
    <div className="bg-white p-4 border-b border-gray-100">
      <div className="flex gap-2 p-1 bg-gray-100 rounded-xl">
        {COURSES.map(course => (
          <button
            key={course.id}
            onClick={() => onSelect(course.id)}
            className={`flex-1 flex flex-col items-center justify-center py-2 rounded-lg text-sm font-bold transition-all ${
              activeCourse === course.id 
                ? 'bg-white text-blue-600 shadow-sm' 
                : 'text-gray-500 hover:text-gray-700'
            }`}
          >
            <span>{course.title}</span>
          </button>
        ))}
      </div>
    </div>
  );
};

const ProgressBar = ({ current, total }) => {
  const percentage = Math.round((current / total) * 100);
  return (
    <div className="w-full bg-gray-200 rounded-full h-4 mb-6" role="progressbar" aria-valuenow={percentage} aria-valuemin="0" aria-valuemax="100" aria-label="Lesson Progress">
      <div 
        className="bg-blue-600 h-4 rounded-full transition-all duration-500 ease-out" 
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

const QuizCard = ({ question, onAnswer, feedback }) => {
  return (
    <div className="flex flex-col h-full max-w-2xl mx-auto w-full animate-in fade-in slide-in-from-bottom-4 duration-500">
      <div className="mb-4">
        <span className="text-sm font-bold tracking-widest text-gray-400 uppercase">Question {question.index + 1}</span>
      </div>
      <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-8 leading-relaxed" tabIndex="-1">
        {question.question}
      </h2>
      
      <div className="grid gap-4 w-full">
        {question.options.map((option, index) => {
          let stateStyles = "border-2 border-gray-200 hover:bg-gray-50 hover:border-gray-300";
          
          if (feedback) {
            if (index === question.correct) {
              stateStyles = "border-2 border-green-500 bg-green-50 text-green-800 font-medium";
            } else if (index === feedback.selected && index !== question.correct) {
              stateStyles = "border-2 border-red-500 bg-red-50 text-red-800 opacity-75";
            } else {
              stateStyles = "border-gray-100 opacity-50";
            }
          }

          return (
            <button
              key={index}
              onClick={() => !feedback && onAnswer(index)}
              disabled={!!feedback}
              className={`p-4 md:p-5 rounded-xl text-left text-lg transition-all duration-200 active:scale-95 ${stateStyles} ${!feedback ? 'focus:ring-2 focus:ring-blue-600 focus:outline-none' : ''}`}
              aria-pressed={feedback?.selected === index}
            >
              <div className="flex items-center gap-3">
                <span className="flex-shrink-0 w-8 h-8 rounded-full border border-current flex items-center justify-center text-sm font-bold">
                  {String.fromCharCode(65 + index)}
                </span>
                <span>{option}</span>
              </div>
            </button>
          );
        })}
      </div>

      {feedback && (
        <div className={`mt-8 p-6 rounded-xl border-l-4 animate-in fade-in zoom-in-95 duration-300 ${feedback.isCorrect ? 'bg-green-50 border-green-500 text-green-900' : 'bg-red-50 border-red-500 text-red-900'}`}>
          <div className="flex items-start gap-4">
            <div className="mt-1 flex-shrink-0">
              {feedback.isCorrect ? <CheckCircle size={28} className="text-green-600" /> : <XCircle size={28} className="text-red-600" />}
            </div>
            <div>
              <h3 className="font-bold text-lg mb-1">
                {feedback.isCorrect ? "Correct!" : "Not quite right..."}
              </h3>
              <p className="leading-relaxed">
                {question.explanation}
              </p>
            </div>
          </div>
          <button 
            onClick={feedback.onNext}
            className={`mt-6 w-full py-4 rounded-xl font-bold text-white text-lg tracking-wide shadow-lg transition-transform active:scale-95 focus:ring-4 focus:ring-offset-2 focus:outline-none ${feedback.isCorrect ? 'bg-green-600 hover:bg-green-700 focus:ring-green-400' : 'bg-red-600 hover:bg-red-700 focus:ring-red-400'}`}
          >
            CONTINUE
          </button>
        </div>
      )}
    </div>
  );
};

const GradePill = ({ label, score }) => {
  if (score === undefined || score === null) return null;
  
  let color = "bg-gray-100 text-gray-500";
  if (score >= 90) color = "bg-green-100 text-green-700";
  else if (score >= 75) color = "bg-yellow-100 text-yellow-700";
  else if (score > 0) color = "bg-red-100 text-red-700";

  return (
    <div className={`flex flex-col items-center p-2 rounded-lg ${color} min-w-[70px]`}>
      <span className="text-[10px] font-bold uppercase tracking-wider opacity-70">{label}</span>
      <span className="text-lg font-black">{score > 0 ? `${Math.round(score)}%` : '-'}</span>
    </div>
  );
};

const Dashboard = ({ domains, startLesson, stats, activeCourse }) => {
  // Filter domains by active course
  const courseDomains = domains.filter(d => d.courseId === activeCourse);
  const courseInfo = COURSES.find(c => c.id === activeCourse);

  return (
    <div className="max-w-md mx-auto w-full pb-20">
      
      {/* HEADER SECTION */}
      <div className="px-4 py-6 text-center">
         <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            <GraduationCap size={16} /> Current Course
         </div>
         <h1 className="text-2xl font-black text-gray-800">{courseInfo.title}</h1>
         <p className="text-gray-500 text-sm mt-1">{courseInfo.description}</p>
      </div>

      <div className="px-4 space-y-6">
        {courseDomains.map((domain, index) => {
          // Logic for unlocking: simple sequential unlock for now
          // We check how many domains of THIS course have been completed
          const courseSpecificCompleted = stats.completedDomains[activeCourse] || 0;
          const isLocked = index > 0 && courseSpecificCompleted < index;

          const dStats = stats.domainStats[domain.id] || { history: [] };
          const history = dStats.history;
          
          const overall = history.length > 0 ? history.reduce((a, b) => a + b, 0) / history.length : 0;
          const last5 = history.slice(-5).length > 0 ? history.slice(-5).reduce((a, b) => a + b, 0) / history.slice(-5).length : 0;
          const last15 = history.slice(-15).length > 0 ? history.slice(-15).reduce((a, b) => a + b, 0) / history.slice(-15).length : 0;
          
          const iconComponent = getIconForDomain(domain.iconName);

          return (
            <div key={domain.id} className="relative group animate-in slide-in-from-bottom-2 duration-500" style={{animationDelay: `${index * 100}ms`}}>
              <button
                onClick={() => !isLocked && startLesson(domain)}
                disabled={isLocked}
                className={`w-full relative flex flex-col items-center p-6 rounded-t-3xl transition-all duration-300 ${
                  isLocked 
                    ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                    : `${domain.color} text-white hover:brightness-110 cursor-pointer shadow-lg active:scale-[0.99]`
                }`}
              >
                <div className="p-4 bg-white/20 rounded-full mb-3 backdrop-blur-sm">
                  {isLocked ? <AlertCircle size={32} /> : iconComponent}
                </div>
                <h3 className="text-xl font-bold">
                  {domain.title}
                </h3>
                <p className="text-sm mt-1 font-medium opacity-90 flex items-center gap-1">
                  {isLocked ? 'Complete previous unit' : <>Start Questions <ChevronRight size={14}/></>}
                </p>
              </button>
              
              {!isLocked && (
                <div className="bg-white border-2 border-t-0 border-gray-100 rounded-b-3xl p-4 flex justify-between items-center shadow-sm">
                  <div className="flex items-center gap-1 text-gray-400 text-xs font-medium">
                    <BarChart3 size={16} /> Grades
                  </div>
                  <div className="flex gap-2">
                    <GradePill label="Overall" score={overall} />
                    <GradePill label="Last 5" score={last5} />
                  </div>
                </div>
              )}
            </div>
          );
        })}
        
        <div className="mt-12 bg-gray-50 p-6 rounded-2xl border-2 border-gray-100">
          <h3 className="font-bold text-gray-700 flex items-center gap-2 mb-2">
            <BookOpen size={20} /> Daily Goal
          </h3>
          <p className="text-gray-500 text-sm mb-4">Complete 1 lesson to keep your streak!</p>
          <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
            <div className="h-full bg-orange-400 w-1/3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const SuccessScreen = ({ score, totalQuestions, stats, xpGained, onHome, onRetry }) => {
  const percentage = Math.round((score / totalQuestions) * 100);
  
  return (
    <div className="flex flex-col items-center justify-center h-full text-center p-6 animate-in zoom-in-95 duration-500">
      <div className={`w-24 h-24 rounded-full flex items-center justify-center mb-6 animate-bounce ${percentage >= 70 ? 'bg-yellow-400' : 'bg-gray-200'}`}>
        <Trophy size={48} className={percentage >= 70 ? 'text-yellow-700' : 'text-gray-500'} />
      </div>
      <h2 className="text-3xl font-black text-gray-800 mb-2">{percentage >= 70 ? "Lesson Complete!" : "Keep Studying!"}</h2>
      <p className="text-gray-500 text-lg mb-8">You scored {score} out of {totalQuestions}</p>
      
      <div className="grid grid-cols-2 gap-4 w-full max-w-sm mb-8">
        <div className="bg-orange-50 border-2 border-orange-100 p-4 rounded-xl">
          <div className="text-sm text-orange-600 font-bold uppercase">Total XP</div>
          <div className="text-3xl font-black text-orange-500">{stats.xp} <span className="text-sm text-green-500">+{xpGained}</span></div>
        </div>
        <div className="bg-blue-50 border-2 border-blue-100 p-4 rounded-xl">
          <div className="text-sm text-blue-600 font-bold uppercase">Accuracy</div>
          <div className="text-3xl font-black text-blue-500">{percentage}%</div>
        </div>
      </div>

      <div className="w-full max-w-sm space-y-3">
        <button 
          onClick={onHome}
          className="w-full py-4 rounded-xl font-bold text-white text-lg bg-green-600 hover:bg-green-700 border-b-4 border-green-800 active:border-b-0 active:translate-y-1 transition-all"
        >
          BACK TO PATH
        </button>
        <button 
          onClick={onRetry}
          className="w-full py-4 rounded-xl font-bold text-gray-600 bg-white hover:bg-gray-50 border-2 border-gray-200 transition-all flex items-center justify-center gap-2"
        >
          <RotateCcw size={20} /> TRY ANOTHER SET
        </button>
      </div>
    </div>
  );
};

const LoadingScreen = () => {
  return (
    <div className="h-full flex flex-col items-center justify-center p-8 text-center animate-in fade-in duration-700">
      <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mb-6 animate-pulse">
        <Loader2 size={32} className="text-blue-500 animate-spin" />
      </div>
      <h2 className="text-xl font-bold text-gray-800">Loading AccessAcademy...</h2>
      <p className="text-gray-500 mt-2">Preparing your personal study plan</p>
    </div>
  );
};

// --- MAIN APP COMPONENT ---

export default function App() {
  const [view, setView] = useState('loading'); // loading, dashboard, quiz, success
  const [appData, setAppData] = useState([]);
  const [activeCourse, setActiveCourse] = useState('cpacc'); // 'cpacc' or 'dhs'
  
  const [activeDomain, setActiveDomain] = useState(null);
  const [activeQuestions, setActiveQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [feedback, setFeedback] = useState(null);
  const [sessionScore, setSessionScore] = useState(0);
  
  // Persisted Stats (Updated structure for multiple courses)
  const [stats, setStats] = useState({
    xp: 1250,
    streak: 12,
    completedDomains: {
      'cpacc': 0,
      'dhs': 0
    },
    domainStats: {
      domain1: { history: [85, 90, 100] },
      dhs_domain1: { history: [] } // Example init
    }
  });

  // INITIAL DATA FETCH EFFECT
  useEffect(() => {
    fetchQuestions().then(data => {
      setAppData(data);
      setView('dashboard');
    });
  }, []);

  const QUESTIONS_PER_LESSON = 5; // Reduced slightly for quick testing of new feature

  // Shuffle array utility
  const shuffleArray = (array) => {
    const newArr = [...array];
    for (let i = newArr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArr[i], newArr[j]] = [newArr[j], newArr[i]];
    }
    return newArr;
  };

  const startLesson = (domain) => {
    const shuffled = shuffleArray(domain.questions);
    const selected = shuffled.slice(0, Math.min(shuffled.length, QUESTIONS_PER_LESSON));
    const indexedQuestions = selected.map((q, idx) => ({ ...q, index: idx }));

    setActiveDomain(domain);
    setActiveQuestions(indexedQuestions);
    setCurrentQuestionIndex(0);
    setSessionScore(0);
    setFeedback(null);
    setView('quiz');
  };

  const handleAnswer = (selectedIndex) => {
    const question = activeQuestions[currentQuestionIndex];
    const isCorrect = selectedIndex === question.correct;
    
    if (isCorrect) setSessionScore(prev => prev + 1);
    
    setFeedback({
      isCorrect,
      selected: selectedIndex,
      onNext: () => {
        if (currentQuestionIndex < activeQuestions.length - 1) {
          setCurrentQuestionIndex(prev => prev + 1);
          setFeedback(null);
        } else {
          finishLesson(isCorrect ? sessionScore + 1 : sessionScore);
        }
      }
    });
  };

  const finishLesson = (finalScore) => {
    const percentage = (finalScore / activeQuestions.length) * 100;
    const xpGained = finalScore * 10;
    
    setStats(prev => {
      const newDomainStats = { ...prev.domainStats };
      if (!newDomainStats[activeDomain.id]) {
        newDomainStats[activeDomain.id] = { history: [] };
      }
      newDomainStats[activeDomain.id].history = [...newDomainStats[activeDomain.id].history, percentage];

      // Update completed count FOR THIS COURSE
      const newCompletedDomains = { ...prev.completedDomains };
      const currentCourseDomains = appData.filter(d => d.courseId === activeCourse);
      const currentDomainIndex = currentCourseDomains.findIndex(d => d.id === activeDomain.id);
      
      // If we passed (60%+) and this was the next domain in line, unlock the next
      if (percentage >= 60 && currentDomainIndex === prev.completedDomains[activeCourse]) {
         newCompletedDomains[activeCourse] = currentDomainIndex + 1;
      }

      return {
        ...prev,
        xp: prev.xp + xpGained,
        completedDomains: newCompletedDomains,
        domainStats: newDomainStats
      };
    });

    setView('success');
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (view === 'quiz' && !feedback) {
        if (['1', '2', '3', '4'].includes(e.key)) {
          handleAnswer(parseInt(e.key) - 1);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [view, feedback, activeQuestions]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans selection:bg-green-200">
      <main className="h-screen max-w-3xl mx-auto bg-white shadow-2xl overflow-hidden flex flex-col relative">
        {view === 'loading' && <LoadingScreen />}

        {view === 'dashboard' && (
          <div className="h-full flex flex-col">
            <header className="flex justify-between items-center py-4 px-4 bg-white border-b border-gray-100 shrink-0">
              <div className="flex items-center gap-2">
                <Globe className="text-gray-400" size={24} />
                <span className="font-bold text-gray-400">AccessAcademy</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 text-orange-500 font-bold" title="Current Streak">
                  <Trophy size={20} />
                  <span>{stats.streak}</span>
                </div>
                <div className="flex items-center gap-1 text-yellow-500 font-bold" title="Total XP">
                  <Award size={20} />
                  <span>{stats.xp}</span>
                </div>
              </div>
            </header>

            <CourseSelector activeCourse={activeCourse} onSelect={setActiveCourse} stats={stats} />

            <div className="flex-1 overflow-y-auto custom-scrollbar">
              <Dashboard 
                domains={appData} 
                startLesson={startLesson} 
                stats={stats} 
                activeCourse={activeCourse}
              />
            </div>
          </div>
        )}

        {view === 'quiz' && activeDomain && (
          <div className="h-full flex flex-col">
            <div className="p-6 flex items-center gap-4 border-b border-gray-100">
              <button 
                onClick={() => setView('dashboard')}
                className="text-gray-400 hover:bg-gray-100 p-2 rounded-lg transition-colors"
                aria-label="Quit Lesson"
              >
                <XCircle size={24} />
              </button>
              <ProgressBar current={currentQuestionIndex + 1} total={activeQuestions.length} />
            </div>
            <div className="flex-1 overflow-y-auto p-6 flex flex-col justify-center">
              <QuizCard 
                question={activeQuestions[currentQuestionIndex]} 
                onAnswer={handleAnswer} 
                feedback={feedback}
              />
            </div>
          </div>
        )}
        {view === 'success' && (
          <SuccessScreen 
            score={sessionScore} 
            totalQuestions={activeQuestions.length}
            stats={stats} 
            xpGained={sessionScore * 10} 
            onHome={() => setView('dashboard')} 
            onRetry={() => startLesson(activeDomain)}
          />
        )}
      </main>
    </div>
  );
}