import { Link } from 'react-router-dom';
import { ChevronRight, BookOpen, Brain, Scale, ShieldCheck, User, Globe, Code } from 'lucide-react';

const ICON_MAP = {
  user: User,
  brain: Brain,
  scale: Scale,
  shield: ShieldCheck,
  globe: Globe,
  code: Code,
  default: BookOpen,
};

function getAverage(history) {
  if (!history || history.length === 0) return null;
  return Math.round(history.reduce((a, b) => a + b, 0) / history.length);
}

function getScoreLabel(avg) {
  if (avg >= 90) return { text: 'Excellent', bg: 'var(--pill-correct-bg)', color: 'var(--pill-correct-text)' };
  if (avg >= 75) return { text: 'Good', bg: 'var(--pill-good-bg)', color: 'var(--pill-good-text)' };
  return { text: 'Keep practicing', bg: 'var(--pill-practice-bg)', color: 'var(--pill-practice-text)' };
}

export default function DomainCard({ domain, domainStats }) {
  const Icon = ICON_MAP[domain.iconName] || ICON_MAP.default;
  const history = domainStats?.history || [];
  const avg = getAverage(history);
  const scoreLabel = avg !== null ? getScoreLabel(avg) : null;

  return (
    <Link
      to={`/quiz/${domain.id}`}
      className="block p-5 rounded-2xl border-2 transition-all no-underline text-left group"
      style={{
        borderColor: 'var(--border-default)',
        backgroundColor: 'var(--bg-surface)',
      }}
    >
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 rounded-xl ${domain.color} flex items-center justify-center`}>
          <Icon size={20} className="text-white" aria-hidden="true" />
        </div>
        <div className="flex-1">
          <h3 className="font-bold transition-colors" style={{ color: 'var(--text-primary)' }}>
            {domain.title}
          </h3>
          <p className="text-base" style={{ color: 'var(--text-muted)' }}>{domain.description}</p>
        </div>
        <ChevronRight size={20} style={{ color: 'var(--text-muted)' }} aria-hidden="true" />
      </div>

      {avg !== null && (
        <div className="mt-3 flex items-center gap-2">
          <span
            className="text-base font-medium px-2 py-0.5 rounded-full"
            style={{ backgroundColor: scoreLabel.bg, color: scoreLabel.color }}
          >
            {scoreLabel.text}
          </span>
          <span className="text-base" style={{ color: 'var(--text-muted)' }}>
            Avg: {avg}% &middot; {history.length} attempt{history.length !== 1 ? 's' : ''}
          </span>
        </div>
      )}
      {avg === null && (
        <p className="mt-3 text-base font-medium" style={{ color: 'var(--text-accent)' }}>
          Start studying &rarr;
        </p>
      )}
    </Link>
  );
}
