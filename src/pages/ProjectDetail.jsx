import { Link, useParams } from 'react-router-dom'
import { projects, projectsSection } from '../data/content.js'
import { Bi } from '../components/Bi.jsx'
import { useReveal } from '../components/useReveal.js'

export function ProjectDetail() {
  const { slug } = useParams()
  const project = projects.find((p) => p.slug === slug)
  useReveal([slug])

  if (!project) {
    return (
      <section className="section page-top">
        <h2 className="section-title">404</h2>
        <p className="about-para">
          프로젝트를 찾을 수 없습니다. <br />
          <span className="bi-en">Project not found.</span>
        </p>
        <div className="section-cta">
          <Link to="/projects" className="btn btn-ghost">
            <Bi t={projectsSection.backToList} />
          </Link>
        </div>
      </section>
    )
  }

  const labels = projectsSection.metaLabels

  return (
    <article className="section page-top project-detail">
      <Link to="/projects" className="back-link reveal visible">
        ← <Bi t={projectsSection.backToList} />
      </Link>

      <header className="detail-head reveal visible">
        <Bi t={project.type} className="proj-type" />
        <Bi t={project.title} as="h1" className="detail-title" />
        <Bi t={project.tagline} as="p" className="detail-tagline" />
      </header>

      <div className="detail-meta reveal">
        <div className="meta-item">
          <Bi t={labels.role} className="meta-label" />
          <Bi t={project.role} className="meta-value" />
        </div>
        <div className="meta-item">
          <Bi t={labels.period} className="meta-label" />
          <Bi t={project.period} className="meta-value" />
        </div>
        <div className="meta-item meta-stack">
          <Bi t={labels.stack} className="meta-label" />
          <div className="proj-stack">
            {project.stack.map((s) => (
              <span key={s} className="tag">
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>

      <section className="detail-block reveal">
        <Bi t={projectsSection.overview} as="h2" className="detail-block-title" />
        <Bi t={project.summary} as="p" className="detail-summary" />
      </section>

      <section className="detail-block reveal">
        <Bi t={projectsSection.features} as="h2" className="detail-block-title" />
        <ul className="detail-list">
          {project.features.map((f, i) => (
            <li key={i}>
              <Bi t={f} />
            </li>
          ))}
        </ul>
      </section>

      <section className="detail-block reveal">
        <Bi t={projectsSection.achievements} as="h2" className="detail-block-title" />
        <ul className="detail-list detail-achievements">
          {project.achievements.map((a, i) => (
            <li key={i}>
              <Bi t={a} />
            </li>
          ))}
        </ul>
      </section>
    </article>
  )
}
