import { useRef } from 'react';

export default function CourseSelector({ activeCourse, onSelect }) {
  const tabRefs = useRef([]);
  const courses = [
    { id: 'cpacc', label: 'CPACC', description: 'Core Competencies' },
    { id: 'was', label: 'WAS', description: 'Web Accessibility' },
  ];

  // APG tabs pattern: the selected tab is the only Tab stop; arrow keys move
  // between tabs and select as they go (panels are always rendered, so
  // automatic activation is cheap). The pressed tab's own index is the source
  // of truth so navigation stays deterministic even if a re-render is pending.
  function handleKeyDown(e, currentIndex) {
    let nextIndex;
    switch (e.key) {
      case 'ArrowLeft':
        nextIndex = (currentIndex - 1 + courses.length) % courses.length;
        break;
      case 'ArrowRight':
        nextIndex = (currentIndex + 1) % courses.length;
        break;
      case 'Home':
        nextIndex = 0;
        break;
      case 'End':
        nextIndex = courses.length - 1;
        break;
      default:
        return;
    }
    e.preventDefault();
    onSelect(courses[nextIndex].id);
    tabRefs.current[nextIndex]?.focus();
  }

  return (
    <div
      role="tablist"
      aria-label="Select certification"
      className="flex rounded-xl p-1 mb-6 gap-1"
      style={{ backgroundColor: 'var(--bg-surface-hover)' }}
    >
      {courses.map(({ id, label, description }, i) => {
        const isActive = activeCourse === id;
        return (
          <button
            key={id}
            ref={(el) => { tabRefs.current[i] = el; }}
            id={`${id}-tab`}
            role="tab"
            aria-selected={isActive}
            aria-controls={`${id}-panel`}
            tabIndex={isActive ? 0 : -1}
            onClick={() => onSelect(id)}
            onKeyDown={(e) => handleKeyDown(e, i)}
            className="flex-1 py-2.5 px-4 rounded-lg text-base font-semibold transition-colors text-center"
            style={{
              backgroundColor: isActive ? 'var(--bg-surface)' : 'transparent',
              color: isActive ? 'var(--text-accent)' : 'var(--text-muted)',
              boxShadow: isActive ? 'var(--shadow)' : 'none',
            }}
          >
            {label}
            <span
              className="block text-base font-normal mt-0.5"
              style={{ color: isActive ? 'var(--text-secondary)' : 'var(--text-muted)' }}
            >
              {description}
            </span>
          </button>
        );
      })}
    </div>
  );
}
