import { shuffle } from './shuffle';
import { applyOptionOrder, randomOptionOrder } from './applyOptionOrder';
import { PRACTICE_CONFIG } from '../data/practiceConfig';

/**
 * Draw a full mock exam for a course: a stratified random sample per domain
 * (matching the real exam's 40/40/20 weighting), interleaved like the real
 * exam. Each entry is fully serializable so a saved session restores the
 * exact same test — same questions, same option order.
 *
 * @param {string} courseId - 'cpacc' | 'was'
 * @param {object} domainsByCourse - { cpacc: [domain...], was: [domain...] }
 * @returns {Array<{qid:number, domainId:string, optionOrder:number[]}>|null}
 *   null if the course/config is unknown
 */
export function drawPracticeTest(courseId, domainsByCourse) {
  const config = PRACTICE_CONFIG[courseId];
  const domains = domainsByCourse[courseId];
  if (!config || !domains) return null;

  const entries = [];
  for (const { domainId, count } of config.domains) {
    const domain = domains.find((d) => d.id === domainId);
    if (!domain) continue;
    const picked = shuffle(domain.questions).slice(0, Math.min(count, domain.questions.length));
    for (const q of picked) {
      entries.push({ qid: q.id, domainId, optionOrder: randomOptionOrder(q) });
    }
  }
  // Interleave domains the way the real exam does
  return shuffle(entries);
}

/**
 * Resolve serialized session entries back into full question objects with
 * the stored option order applied.
 *
 * @param {Array} entries - [{qid, domainId, optionOrder}]
 * @param {Array} allDomains - all domain objects (both courses)
 * @returns {{questions: object[], missingIds: number[]}}
 *   questions[i] corresponds to entries[i]; missing qids (e.g. removed in an
 *   app update) are reported in missingIds and skipped in questions.
 */
export function resolveEntries(entries, allDomains) {
  const byId = new Map();
  for (const domain of allDomains) {
    for (const q of domain.questions) byId.set(q.id, q);
  }

  const questions = [];
  const missingIds = [];
  for (const entry of entries) {
    const q = byId.get(entry.qid);
    if (!q) {
      missingIds.push(entry.qid);
      continue;
    }
    questions.push(applyOptionOrder(q, entry.optionOrder));
  }
  return { questions, missingIds };
}

/**
 * Grade a finished session. Unanswered questions count as incorrect.
 *
 * @param {object} session - { courseId, entries, answers: {qid: selectedIdx} }
 * @param {object[]} questions - resolved questions aligned with session.entries
 * @returns {{score:number, total:number, percentage:number, passed:boolean,
 *            perDomain: Object<string,{correct:number,total:number}>}}
 */
export function gradeSession(session, questions) {
  const config = PRACTICE_CONFIG[session.courseId];
  const byId = new Map(questions.map((q) => [q.id, q]));

  let score = 0;
  const perDomain = {};
  for (const entry of session.entries) {
    const q = byId.get(entry.qid);
    if (!q) continue;
    if (!perDomain[entry.domainId]) perDomain[entry.domainId] = { correct: 0, total: 0 };
    perDomain[entry.domainId].total += 1;
    if (session.answers?.[entry.qid] === q.correct) {
      score += 1;
      perDomain[entry.domainId].correct += 1;
    }
  }

  const total = questions.length;
  const percentage = total > 0 ? Math.round((score / total) * 100) : 0;
  const passed = percentage >= (config?.passPercent ?? 100);
  return { score, total, percentage, passed, perDomain };
}
