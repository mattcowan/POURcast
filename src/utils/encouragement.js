const phrases = [
  "You've got this!",
  "Nailed it!",
  "Excellent recall!",
  "Right on track!",
  "You really know your stuff!",
  "Spot on!",
  "Keep that momentum going!",
  "That's the one!",
  "Your studying is paying off!",
  "Crushed it!",
];

let lastIndex = -1;

export function getEncouragement() {
  let index;
  do {
    index = Math.floor(Math.random() * phrases.length);
  } while (index === lastIndex);
  lastIndex = index;
  return phrases[index];
}
