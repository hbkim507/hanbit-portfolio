import { Link } from 'react-router-dom'
import { hero, about, skills, career, projectsSection, projects, site, flags } from '../data/content.js'
import { Bi } from '../components/Bi.jsx'
import { useReveal } from '../components/useReveal.js'

function SectionHead({ no, heading, title }) {
  return (
    <div className="section-head reveal">
      <div className="section-label">
        <span className="section-no">{no}</span>
        <Bi t={heading} className="section-heading" />
      </div>
      <Bi t={title} as="h2" className="section-title" />
    </div>
  )
}

function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <Bi t={hero.eyebrow} as="p" className="hero-eyebrow reveal visible" />
        <Bi t={hero.title} as="h1" className="hero-title reveal visible" />
        <Bi t={hero.sub} as="p" className="hero-sub reveal visible" />
        <div className="hero-ctas reveal visible">
          {flags.showProjects && (
            <Link to="/projects" className="btn btn-primary">
              <Bi t={hero.ctaProjects} />
            </Link>
          )}
          <Link to="/contact" className={`btn ${flags.showProjects ? 'btn-ghost' : 'btn-primary'}`}>
            <Bi t={hero.ctaContact} />
          </Link>
        </div>
      </div>
      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {[...hero.marquee, ...hero.marquee].map((item, i) => (
            <span key={i} className="marquee-item">
              {item}
              <span className="marquee-sep">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}

function About() {
  return (
    <section id={about.id} className="section">
      <SectionHead no={about.no} heading={about.heading} title={about.title} />
      <div className="about-grid">
        <div className="about-text">
          {about.paragraphs.map((p, i) => (
            <Bi key={i} t={p} as="p" className="about-para reveal" />
          ))}
        </div>
        <div className="about-cards">
          {about.highlights.map((h, i) => (
            <div key={i} className="card reveal">
              <Bi t={h.title} as="h3" className="card-title" />
              <Bi t={h.desc} as="p" className="card-desc" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function Skills() {
  return (
    <section id={skills.id} className="section">
      <SectionHead no={skills.no} heading={skills.heading} title={skills.title} />
      <div className="skills-grid">
        {skills.categories.map((cat, i) => (
          <div key={i} className="skill-cat reveal">
            <Bi t={cat.name} as="h3" className="skill-name" />
            <ul className="skill-items">
              {cat.items.map((item) => (
                <li key={item} className="skill-item">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

function Career() {
  return (
    <section id={career.id} className="section">
      <SectionHead no={career.no} heading={career.heading} title={career.title} />
      <div className="timeline">
        {career.entries.map((entry, i) => (
          <article key={i} className="timeline-entry reveal">
            <div className="timeline-meta">
              <Bi t={entry.period} className="timeline-period" />
            </div>
            <div className="timeline-body">
              <Bi t={entry.company} as="h3" className="timeline-company" />
              <Bi t={entry.role} as="p" className="timeline-role" />
              <ul className="timeline-bullets">
                {entry.bullets.map((b, j) => (
                  <li key={j}>
                    <Bi t={b} />
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

function ProjectsPreview() {
  return (
    <section id={projectsSection.id} className="section">
      <SectionHead
        no={projectsSection.no}
        heading={projectsSection.heading}
        title={projectsSection.title}
      />
      <div className="proj-list">
        {projects.map((p, i) => (
          <Link key={p.slug} to={`/projects/${p.slug}`} className="proj-row reveal">
            <span className="proj-index">{String(i + 1).padStart(2, '0')}</span>
            <span className="proj-main">
              <Bi t={p.title} as="span" className="proj-title" />
              <Bi t={p.tagline} as="span" className="proj-tagline" />
            </span>
            <Bi t={p.type} as="span" className="proj-type" />
            <span className="proj-arrow" aria-hidden="true">
              →
            </span>
          </Link>
        ))}
      </div>
      <div className="section-cta reveal">
        <Link to="/projects" className="btn btn-ghost">
          <Bi t={projectsSection.viewAll} />
        </Link>
      </div>
    </section>
  )
}

export function Home() {
  useReveal([])
  return (
    <>
      <Hero />
      <About />
      <Skills />
      <Career />
      {flags.showProjects && <ProjectsPreview />}
    </>
  )
}
