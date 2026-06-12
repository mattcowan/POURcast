import { shuffle } from './shuffle';

/**
 * Reorder a question's options using an explicit permutation, remapping
 * `correct` and `wrongExplanations` so the answer data stays consistent.
 *
 * @param {object} question - Question with options, correct, wrongExplanations
 * @param {number[]} order - Permutation of original option indices, e.g. [2,0,3,1]
 *   means the new first option is the original options[2].
 * @returns {object} New question object with reordered options
 */
export function applyOptionOrder(question, order) {
  const newOptions = order.map((i) => question.options[i]);
  const newCorrect = order.indexOf(question.correct);

  let newWrongExplanations;
  if (question.wrongExplanations) {
    newWrongExplanations = {};
    for (const [oldIdx, text] of Object.entries(question.wrongExplanations)) {
      const newIdx = order.indexOf(Number(oldIdx));
      newWrongExplanations[newIdx] = text;
    }
  }

  return {
    ...question,
    options: newOptions,
    correct: newCorrect,
    wrongExplanations: newWrongExplanations || question.wrongExplanations,
  };
}

/**
 * Generate a random option permutation for a question.
 * @param {object} question
 * @returns {number[]} Shuffled array of option indices
 */
export function randomOptionOrder(question) {
  return shuffle(question.options.map((_, i) => i));
}
