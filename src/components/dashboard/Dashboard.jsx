import { useRef, useState } from 'react';
import { usePageFocus } from '../../hooks/usePageFocus';
import DomainCard from './DomainCard';
import MissedBankCard from './MissedBankCard';
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

export default function Dashboard({ cpaccDomains, wasDomains, stats, missedBank, onStartReview }) {
  const headingRef = useRef(null);
  const [activeCourse, setActiveCourse] = useState('cpacc');

  usePageFocus(headingRef);

  return (
    <div className="max-w-2xl mx-auto px-4 py-8">
      <CourseSelector activeCourse={activeCourse} onSelect={setActiveCourse} />

      {Object.entries(COURSE_INFO).map(([courseKey, { title, subtitle }]) => {
        const isActive = activeCourse === courseKey;
        const courseDomains = courseKey === 'cpacc' ? cpaccDomains : wasDomains;

        return (
          <div
            key={courseKey}
            id={`${courseKey}-panel`}
            role="tabpanel"
            aria-labelledby={`${courseKey}-tab`}
            hidden={!isActive}
          >
            <div className="text-center mb-8">
              <h1
                ref={isActive ? headingRef : null}
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

            {missedBank && (() => {
              const missedCount = missedBank.getMissedIds(courseKey).length;
              return missedCount > 0 ? (
                <section aria-label="Missed questions review" className="mb-6">
                  <MissedBankCard
                    courseId={courseKey}
                    count={missedCount}
                    onStartReview={onStartReview}
                  />
                </section>
              ) : null;
            })()}

            <section aria-label="Study domains">
              <h2 className="text-lg font-semibold mb-4" style={{ color: 'var(--text-secondary)' }}>Domains</h2>
              <div className="space-y-4">
                {courseDomains.map((domain) => (
                  <DomainCard
                    key={domain.id}
                    domain={domain}
                    domainStats={stats.domainStats?.[domain.id]}
                  />
                ))}
              </div>
            </section>
          </div>
        );
      })}
    </div>
  );
}
