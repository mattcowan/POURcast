import { Link } from 'react-router-dom';
import { BookOpen } from 'lucide-react';
import { getTopicBySlug } from '../../data/knowledgeBase/index';

export default function TopicLinks({ slugs = [], label = 'Dive deeper:' }) {
  if (!slugs || slugs.length === 0) return null;

  const topics = slugs
    .map((slug) => getTopicBySlug(slug))
    .filter(Boolean);

  if (topics.length === 0) return null;

  return (
    <div className="mt-3">
      <p className="text-base font-medium mb-2" style={{ color: 'var(--text-muted)' }}>{label}</p>
      <div className="flex flex-wrap gap-2">
        {topics.map((topic) => (
          <Link
            key={topic.slug}
            to={`/learn/${topic.slug}`}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full text-base font-medium no-underline transition-colors"
            style={{
              backgroundColor: 'var(--bg-accent)',
              color: 'var(--text-accent)',
            }}
          >
            <BookOpen size={14} aria-hidden="true" />
            {topic.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
