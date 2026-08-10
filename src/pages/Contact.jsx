import { useState } from 'react'
import { contact, site } from '../data/content.js'
import { Bi } from '../components/Bi.jsx'
import { useReveal } from '../components/useReveal.js'

export function Contact() {
  const [copied, setCopied] = useState(false)
  useReveal([])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(site.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch (e) {
      // 클립보드 미지원 환경에서는 무시
    }
  }

  return (
    <section className="section page-top contact">
      <div className="contact-inner reveal visible">
        <Bi t={contact.heading} as="h1" className="contact-heading" />
        <Bi t={contact.body} as="p" className="contact-body" />

        <div className="contact-email-box">
          <span className="contact-email">{site.email}</span>
          <div className="contact-actions">
            <a href={`mailto:${site.email}`} className="btn btn-primary">
              <Bi t={contact.emailCta} />
            </a>
            <button type="button" className="btn btn-ghost" onClick={copyEmail}>
              <Bi t={copied ? contact.copied : contact.copy} />
            </button>
          </div>
        </div>

        <div className="contact-links">
          <Bi t={contact.linksHeading} as="h2" className="contact-links-heading" />
          <div className="contact-links-row">
            {site.links.map((l) => (
              <a key={l.label} href={l.url} target="_blank" rel="noreferrer" className="contact-link">
                {l.label} ↗
              </a>
            ))}
          </div>
          <Bi t={site.location} as="p" className="contact-location" />
        </div>
      </div>
    </section>
  )
}
