import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { site, nav, themes, footer, flags } from '../data/content.js'
import { Bi } from './Bi.jsx'

const THEME_KEY = 'hanbit-theme'

function getInitialTheme() {
  try {
    const t = localStorage.getItem(THEME_KEY)
    if (themes.some((th) => th.id === t)) return t
  } catch (e) {}
  return 'neon'
}

// 라우트 이동/해시 변경 시 스크롤 처리
function ScrollManager() {
  const { pathname, hash } = useLocation()
  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash)
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        return
      }
    }
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname, hash])
  return null
}

export function Layout({ children }) {
  const [theme, setTheme] = useState(getInitialTheme)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    try {
      localStorage.setItem(THEME_KEY, theme)
    } catch (e) {}
  }, [theme])

  useEffect(() => setMenuOpen(false), [pathname])

  return (
    <div className="layout">
      <ScrollManager />
      <header className="header">
        <Link to="/" className="brand" aria-label="Home">
          <span className="brand-mark">H</span>
          <span className="brand-text">
            <span className="brand-ko">{site.name.ko}</span>
            <span className="brand-en">{site.name.en}</span>
          </span>
        </Link>

        <nav className={`nav ${menuOpen ? 'open' : ''}`} aria-label="Main navigation">
          {nav
            .filter((item) => flags.showProjects || item.href !== '/projects')
            .map((item) =>
            item.href.startsWith('/#') ? (
              <Link key={item.href} to={item.href} className="nav-link">
                <Bi t={item.label} />
              </Link>
            ) : (
              <Link
                key={item.href}
                to={item.href}
                className={`nav-link ${pathname.startsWith(item.href) ? 'active' : ''}`}
              >
                <Bi t={item.label} />
              </Link>
            )
          )}
        </nav>

        <div className="header-right">
          <div className="theme-switch" role="group" aria-label="Theme">
            {themes.map((th) => (
              <button
                key={th.id}
                type="button"
                className={`theme-dot theme-dot-${th.id} ${theme === th.id ? 'active' : ''}`}
                title={`${th.label.ko} / ${th.label.en}`}
                aria-pressed={theme === th.id}
                onClick={() => setTheme(th.id)}
              />
            ))}
          </div>
          <button
            type="button"
            className="menu-btn"
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <span />
            <span />
          </button>
        </div>
      </header>

      <main>{children}</main>

      <footer className="footer">
        <div className="footer-inner">
          <div className="footer-left">
            <span className="footer-name">
              {site.name.ko} <em>{site.name.en}</em>
            </span>
            <a href={`mailto:${site.email}`} className="footer-mail">
              {site.email}
            </a>
          </div>
          <Bi t={footer.note} as="p" className="footer-note" />
          <span className="footer-copy">© {new Date().getFullYear()}</span>
        </div>
      </footer>
    </div>
  )
}
