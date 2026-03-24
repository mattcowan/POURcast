export default function CourseSelector({ activeCourse, onSelect }) {
  const courses = [
    { id: 'cpacc', label: 'CPACC', description: 'Core Competencies' },
    { id: 'was', label: 'WAS', description: 'Web Accessibility' },
  ];

  return (
    <div
      role="tablist"
      aria-label="Select certification"
      className="flex rounded-xl p-1 mb-6 gap-1"
      style={{ backgroundColor: 'var(--bg-surface-hover)' }}
    >
      {courses.map(({ id, label, description }) => {
        const isActive = activeCourse === id;
        return (
          <button
            key={id}
            role="tab"
            aria-selected={isActive}
            aria-controls={`${id}-panel`}
            onClick={() => onSelect(id)}
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
