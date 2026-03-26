import { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Search, BookOpen, ChevronDown, ChevronRight } from 'lucide-react';
import { usePageFocus } from '../../hooks/usePageFocus';
import { topics, getAllCategories, getTopicsByCategory } from '../../data/knowledgeBase/index';

const FILTERS = [
  { value: 'all', label: 'All Topics' },
  { value: 'cpacc', label: 'CPACC' },
  { value: 'was', label: 'WAS' },
];

export default function KnowledgeHome() {
  const [search, setSearch] = useState('');
  const [testFilter, setTestFilter] = useState('all');
  const [expandedCategory, setExpandedCategory] = useState(null);
  const headingRef = useRef(null);
  const categories = getAllCategories();

  usePageFocus(headingRef);

  function matchesFilter(topic) {
    if (testFilter === 'all') return true;
    return topic.applicableTo?.includes(testFilter);
  }

  const filteredTopics = search.trim()
    ? topics.filter(
        (t) =>
          matchesFilter(t) &&
          (t.title.toLowerCase().includes(search.toLowerCase()) ||
          t.summary.toLowerCase().includes(search.toLowerCase()))
      )
    : null;

  function toggleCategory(cat) {
    setExpandedCategory(expandedCategory === cat ? null : cat);
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      <div className="text-center mb-8">
        <h1
          ref={headingRef}
          tabIndex={-1}
          className="text-3xl font-bold mb-2"
          style={{ color: 'var(--text-primary)' }}
        >
          The Study Shelf
        </h1>
        <p style={{ color: 'var(--text-muted)' }}>
          Your accessibility reference library. Browse topics or search for specific concepts.
        </p>
      </div>

      <div
        role="group"
        aria-label="Filter by certification"
        className="flex rounded-xl p-1 mb-4 gap-1"
        style={{ backgroundColor: 'var(--bg-surface-hover)' }}
      >
        {FILTERS.map(({ value, label }) => (
          <button
            key={value}
            onClick={() => setTestFilter(value)}
            aria-pressed={testFilter === value}
            className="flex-1 py-2 px-3 rounded-lg text-base font-semibold transition-colors text-center"
            style={{
              backgroundColor: testFilter === value ? 'var(--bg-surface)' : 'transparent',
              color: testFilter === value ? 'var(--text-accent)' : 'var(--text-secondary)',
              boxShadow: testFilter === value ? 'var(--shadow)' : 'none',
            }}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="relative mb-8">
        <label htmlFor="topic-search" className="sr-only">
          Search topics
        </label>
        <Search
          size={18}
          className="absolute left-3 top-1/2 -translate-y-1/2"
          style={{ color: 'var(--text-muted)' }}
          aria-hidden="true"
        />
        <input
          id="topic-search"
          type="search"
          placeholder="Search topics..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-3 border rounded-xl"
          style={{
            backgroundColor: 'var(--bg-surface)',
            borderColor: 'var(--border-default)',
            color: 'var(--text-primary)',
          }}
        />
      </div>

      {filteredTopics && (
        <section aria-label="Search results">
          <h2 className="text-base font-semibold mb-3" style={{ color: 'var(--text-muted)' }}>
            {filteredTopics.length} result{filteredTopics.length !== 1 ? 's' : ''} for &ldquo;{search}&rdquo;
          </h2>
          {filteredTopics.length === 0 ? (
            <p className="text-center py-8" style={{ color: 'var(--text-muted)' }}>
              No topics found. Try a different search term.
            </p>
          ) : (
            <div className="space-y-2">
              {filteredTopics.map((topic) => (
                <TopicRow key={topic.slug} topic={topic} />
              ))}
            </div>
          )}
        </section>
      )}

      {!filteredTopics && (
        <section aria-label="Topics by category">
          <div className="space-y-2">
            {categories.map((cat) => {
              const isExpanded = expandedCategory === cat;
              const catTopics = getTopicsByCategory(cat).filter(matchesFilter);
              if (catTopics.length === 0) return null;
              return (
                <div
                  key={cat}
                  className="border rounded-xl overflow-hidden"
                  style={{ borderColor: 'var(--border-default)' }}
                >
                  <button
                    onClick={() => toggleCategory(cat)}
                    aria-expanded={isExpanded}
                    className="w-full flex items-center justify-between p-4 transition-colors text-left hover-surface"
                    style={{ backgroundColor: 'var(--bg-surface)' }}
                  >
                    <div className="flex items-center gap-2">
                      <BookOpen size={18} style={{ color: 'var(--text-accent)' }} aria-hidden="true" />
                      <span className="font-semibold" style={{ color: 'var(--text-primary)' }}>{cat}</span>
                      <span className="text-base" style={{ color: 'var(--text-muted)' }}>({catTopics.length})</span>
                    </div>
                    {isExpanded ? (
                      <ChevronDown size={18} style={{ color: 'var(--text-muted)' }} aria-hidden="true" />
                    ) : (
                      <ChevronRight size={18} style={{ color: 'var(--text-muted)' }} aria-hidden="true" />
                    )}
                  </button>
                  {isExpanded && (
                    <div
                      className="border-t p-2 space-y-1"
                      style={{
                        borderColor: 'var(--border-default)',
                        backgroundColor: 'var(--bg-surface-hover)',
                      }}
                    >
                      {catTopics.map((topic) => (
                        <TopicRow key={topic.slug} topic={topic} />
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}
    </div>
  );
}

function TopicRow({ topic }) {
  const [hovered, setHovered] = useState(false);

  return (
    <Link
      to={`/learn/${topic.slug}`}
      className="block p-3 rounded-lg transition-colors no-underline"
      style={{
        backgroundColor: hovered ? 'var(--bg-accent)' : 'transparent',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onFocus={() => setHovered(true)}
      onBlur={() => setHovered(false)}
    >
      <div className="flex items-center justify-between gap-2">
        <h3 className="font-medium text-base" style={{ color: hovered ? 'var(--text-accent)' : 'var(--text-primary)' }}>
          {topic.title}
        </h3>
        {topic.applicableTo && (
          <div className="flex gap-1 shrink-0">
            {topic.applicableTo.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded-full text-base font-medium"
                style={{
                  backgroundColor: 'var(--bg-surface)',
                  color: 'var(--text-secondary)',
                  border: '1px solid var(--border-default)',
                }}
              >
                {tag.toUpperCase()}
              </span>
            ))}
          </div>
        )}
      </div>
      <p className="text-base mt-0.5 line-clamp-1" style={{ color: 'var(--text-secondary)' }}>{topic.summary}</p>
    </Link>
  );
}
