import { useRef, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, Lightbulb } from 'lucide-react';
import { getTopicBySlug } from '../../data/knowledgeBase/index';

export default function TopicPage() {
  const { slug } = useParams();
  const topic = getTopicBySlug(slug);
  const headingRef = useRef(null);

  useEffect(() => {
    headingRef.current?.focus();
    window.scrollTo(0, 0);
  }, [slug]);

  if (!topic) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-12 text-center">
        <h1 className="text-2xl font-bold mb-2" style={{ color: 'var(--text-primary)' }}>Topic Not Found</h1>
        <p className="mb-4" style={{ color: 'var(--text-muted)' }}>
          We couldn&apos;t find that topic in The Study Shelf.
        </p>
        <Link to="/learn" className="font-medium no-underline" style={{ color: 'var(--link-color)' }}>
          &larr; Back to The Study Shelf
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto px-4 py-6">
      {/* Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="mb-6">
        <ol className="flex items-center gap-2 text-base" style={{ color: 'var(--text-muted)' }}>
          <li>
            <Link to="/learn" className="no-underline" style={{ color: 'var(--text-muted)' }}>
              The Study Shelf
            </Link>
          </li>
          <li aria-hidden="true">&rsaquo;</li>
          <li>
            <Link to="/learn" className="no-underline" style={{ color: 'var(--text-muted)' }}>
              {topic.category}
            </Link>
          </li>
          <li aria-hidden="true">&rsaquo;</li>
          <li aria-current="page" className="font-medium" style={{ color: 'var(--text-primary)' }}>
            {topic.title}
          </li>
        </ol>
      </nav>

      <h1
        ref={headingRef}
        tabIndex={-1}
        className="text-2xl font-bold mb-2"
        style={{ color: 'var(--text-primary)' }}
      >
        {topic.title}
      </h1>
      <p className="text-base font-medium mb-6" style={{ color: 'var(--text-accent)' }}>{topic.category}</p>

      <article className="space-y-4">
        {topic.content.map((block, i) => (
          <ContentBlock key={i} block={block} />
        ))}
      </article>

      {topic.examTips && topic.examTips.length > 0 && (
        <div
          className="mt-8 border rounded-xl p-5"
          style={{
            backgroundColor: 'var(--warning-bg)',
            borderColor: 'var(--warning-border)',
          }}
        >
          <div className="flex items-center gap-2 mb-3">
            <Lightbulb size={18} style={{ color: 'var(--warning-text)' }} aria-hidden="true" />
            <h2 className="text-base font-bold" style={{ color: 'var(--warning-text)' }}>Exam Tips</h2>
          </div>
          <ul className="space-y-2">
            {topic.examTips.map((tip, i) => (
              <li key={i} className="text-base" style={{ color: 'var(--warning-text)' }}>&bull; {tip}</li>
            ))}
          </ul>
        </div>
      )}

      {topic.relatedTopics && topic.relatedTopics.length > 0 && (
        <div className="mt-8">
          <h2
            className="text-base font-bold mb-3 flex items-center gap-2"
            style={{ color: 'var(--text-secondary)' }}
          >
            <BookOpen size={16} aria-hidden="true" />
            Related Topics
          </h2>
          <div className="flex flex-wrap gap-2">
            {topic.relatedTopics.map((relSlug) => {
              const rel = getTopicBySlug(relSlug);
              if (!rel) return null;
              return (
                <Link
                  key={relSlug}
                  to={`/learn/${relSlug}`}
                  className="inline-flex items-center px-3 py-1.5 rounded-full text-base font-medium no-underline transition-colors"
                  style={{
                    backgroundColor: 'var(--bg-accent)',
                    color: 'var(--text-accent)',
                  }}
                >
                  {rel.title}
                </Link>
              );
            })}
          </div>
        </div>
      )}

      <div className="mt-10 pt-6 border-t" style={{ borderColor: 'var(--border-default)' }}>
        <Link
          to="/learn"
          className="inline-flex items-center gap-2 font-medium no-underline"
          style={{ color: 'var(--link-color)' }}
        >
          <ArrowLeft size={16} aria-hidden="true" />
          Back to The Study Shelf
        </Link>
      </div>
    </div>
  );
}

function ContentBlock({ block }) {
  switch (block.type) {
    case 'paragraph':
      return <p className="leading-relaxed" style={{ color: 'var(--text-secondary)' }}>{block.text}</p>;
    case 'heading':
      return <h2 className="text-lg font-bold mt-6 mb-2" style={{ color: 'var(--text-primary)' }}>{block.text}</h2>;
    case 'list':
      return (
        <ul className="space-y-1 ml-4">
          {block.items.map((item, i) => (
            <li key={i} className="list-disc text-base" style={{ color: 'var(--text-secondary)' }}>
              {item}
            </li>
          ))}
        </ul>
      );
    case 'callout':
      return (
        <div
          className="border-l-4 p-4 rounded-r-lg"
          style={{
            backgroundColor: 'var(--info-bg)',
            borderColor: 'var(--info-border)',
          }}
        >
          <p className="text-base font-medium" style={{ color: 'var(--info-text)' }}>{block.text}</p>
        </div>
      );
    case 'sources':
      if (!Array.isArray(block.items) || block.items.length === 0) return null;
      return (
        <div className="mt-6 pt-4 border-t" style={{ borderColor: 'var(--border-default)' }}>
          <h2 className="text-base font-semibold mb-2" style={{ color: 'var(--text-muted)' }}>Sources</h2>
          <ul className="space-y-1 ml-4">
            {block.items.map((source, i) => (
              <li key={i} className="list-disc text-base" style={{ color: 'var(--text-muted)' }}>
                <a
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="no-underline transition-colors"
                  style={{ color: 'var(--link-color)' }}
                >
                  {source.text}
                </a>
              </li>
            ))}
          </ul>
        </div>
      );
    default:
      return <p style={{ color: 'var(--text-secondary)' }}>{block.text}</p>;
  }
}
