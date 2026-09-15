import { Link } from 'react-router-dom'
import { projects, projectsSection } from '../data/content.js'
import { Bi } from '../components/Bi.jsx'
import { ProjectCover } from '../components/ProjectCover.jsx'
import { useReveal } from '../components/useReveal.js'

export function Projects() {
  useReveal([])
  return (
    <section className="section page-top">
      <div className="section-head reveal visible">
        <div className="section-label">
          <span className="section-no">{projectsSection.no}</span>
          <Bi t={projectsSection.heading} className="section-heading" />
        </div>
        <Bi t={projectsSection.title} as="h2" className="section-title" />
      </div>

      <div className="proj-grid">
        {projects.map((p, i) => (
          <Link key={p.slug} to={`/projects/${p.slug}`} className="proj-card reveal">
            <ProjectCover slug={p.slug} />
            <div className="proj-card-top">
              <div className="proj-top-left">
                <span className="proj-index">{String(i + 1).padStart(2, '0')}</span>
                {p.period.ko === p.period.en ? (
                  <span className="proj-period">{p.period.ko}</span>
                ) : (
                  <Bi t={p.period} className="proj-period" />
                )}
              </div>
              <Bi t={p.type} className="proj-type" />
            </div>
            <Bi t={p.title} as="h3" className="proj-card-title" />
            <Bi t={p.tagline} as="p" className="proj-card-tagline" />
            <div className="proj-stack">
              {p.stack.map((s) => (
                <span key={s} className="tag">
                  {s}
                </span>
              ))}
            </div>
          </Link>
        ))}
      </div>
    </section>
  )
}
