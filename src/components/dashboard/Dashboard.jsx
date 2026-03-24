import { useRef, useState } from 'react';
import { usePageFocus } from '../../hooks/usePageFocus';
import DomainCard from './DomainCard';
import CourseSelector from './CourseSelector';

const COURSE_INFO = {
  cpacc: {
    title: 'IAAP CPACC',
    subtitle: 'Certified Professional in Accessibility Core Competencies',
  },
  was: {
    title: 'IAAP WAS',
    subtitle: 'Web Accessibility Specialist',
  },
};

export default function Dashboard({ cpaccDomains, wasDomains, stats }) {
  const headingRef = useRef(null);
  const [activeCourse, setActiveCourse] = useState('cpacc');

  usePageFocus(headingRef);

  const domains = activeCourse === 'cpacc' ? cpaccDomains : wasDomains;
  const { title, subtitle } = COURSE_INFO[activeCourse];

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <CourseSelector activeCourse={activeCourse} onSelect={setActiveCourse} />

      <div
        id={`${activeCourse}-panel`}
        role="tabpanel"
        aria-label={title}
      >
        <div className="text-center mb-8">
          <h1
            ref={headingRef}
            tabIndex={-1}
            className="text-3xl font-bold mb-2"
            style={{ color: 'var(--text-primary)' }}
          >
            {title}
          </h1>
          <p style={{ color: 'var(--text-muted)' }}>
            {subtitle}
          </p>
        </div>

        <section aria-label="Study domains">
          <h2 className="text-lg font-semibold mb-4" style={{ color: 'var(--text-secondary)' }}>Domains</h2>
          <div className="space-y-4">
            {domains.map((domain) => (
              <DomainCard
                key={domain.id}
                domain={domain}
                domainStats={stats.domainStats?.[domain.id]}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
