/**
 * Resolves full question objects from an array of question IDs across all domains.
 */
export function getQuestionsByIds(ids, domains) {
  const idSet = new Set(ids);
  const questions = [];
  for (const domain of domains) {
    for (const q of domain.questions) {
      if (idSet.has(q.id)) questions.push(q);
    }
  }
  return questions;
}
