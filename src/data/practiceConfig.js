/**
 * Mock exam configuration mirroring the real IAAP proctored exams.
 *
 * CPACC: 100 questions / 120 minutes / 65% to pass, domains weighted 40/40/20.
 * WAS:    75 questions / 120 minutes / 70% to pass, domains weighted 40/40/20.
 */
export const PRACTICE_CONFIG = {
  cpacc: {
    courseId: 'cpacc',
    courseLabel: 'CPACC',
    courseName: 'Certified Professional in Accessibility Core Competencies',
    totalQuestions: 100,
    timeLimitSec: 120 * 60,
    passPercent: 65,
    domains: [
      { domainId: 'domain1', count: 40 },
      { domainId: 'domain2', count: 40 },
      { domainId: 'domain3', count: 20 },
    ],
  },
  was: {
    courseId: 'was',
    courseLabel: 'WAS',
    courseName: 'Web Accessibility Specialist',
    totalQuestions: 75,
    timeLimitSec: 120 * 60,
    passPercent: 70,
    domains: [
      { domainId: 'was-domain1', count: 30 },
      { domainId: 'was-domain2', count: 30 },
      { domainId: 'was-domain3', count: 15 },
    ],
  },
};

/** Timer milestones (in seconds remaining) that trigger announcements. */
export const TIMER_MILESTONES_SEC = [60 * 60, 30 * 60, 15 * 60, 5 * 60, 60];

/** Milestones announced assertively (urgent). */
export const ASSERTIVE_MILESTONES_SEC = [5 * 60, 60];

/** Remaining-time threshold for the visual warning state. */
export const TIMER_WARN_THRESHOLD_SEC = 15 * 60;

/** Maximum stored attempts per course in practice history. */
export const MAX_HISTORY_PER_COURSE = 20;
