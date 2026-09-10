import { useCallback, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import useStore from '../store/useStore.js'
import SearchBar from './SearchBar.jsx'
import ShortcutHelp from './ShortcutHelp.jsx'
import './Header.css'

export default function Header() {
  const location = useLocation()
  const navigate = useNavigate()
  const { theme, toggleTheme, compareList, layout, setLayout } = useStore()
  const [mobileNavOpen, setMobileNavOpen] = useState(false)
  const [shortcutsOpen, setShortcutsOpen] = useState(false)

  const LAYOUTS = ['comfortable', 'compact', 'list']
  const LAYOUT_ICONS = {
    comfortable: (
      <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
        <rect x="1" y="1" width="6" height="6" rx="1.5" fill="currentColor" opacity="0.7"/>
        <rect x="9" y="1" width="6" height="6" rx="1.5" fill="currentColor" opacity="0.7"/>
        <rect x="1" y="9" width="6" height="6" rx="1.5" fill="currentColor" opacity="0.7"/>
        <rect x="9" y="9" width="6" height="6" rx="1.5" fill="currentColor" opacity="0.7"/>
      </svg>
    ),
    compact: (
      <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
        <rect x="1" y="1" width="4" height="4" rx="1" fill="currentColor" opacity="0.7"/>
        <rect x="6" y="1" width="4" height="4" rx="1" fill="currentColor" opacity="0.7"/>
        <rect x="11" y="1" width="4" height="4" rx="1" fill="currentColor" opacity="0.7"/>
        <rect x="1" y="6" width="4" height="4" rx="1" fill="currentColor" opacity="0.7"/>
        <rect x="6" y="6" width="4" height="4" rx="1" fill="currentColor" opacity="0.7"/>
        <rect x="11" y="6" width="4" height="4" rx="1" fill="currentColor" opacity="0.7"/>
        <rect x="1" y="11" width="4" height="4" rx="1" fill="currentColor" opacity="0.7"/>
        <rect x="6" y="11" width="4" height="4" rx="1" fill="currentColor" opacity="0.7"/>
        <rect x="11" y="11" width="4" height="4" rx="1" fill="currentColor" opacity="0.7"/>
      </svg>
    ),
    list: (
      <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
        <rect x="1" y="2" width="14" height="3" rx="1" fill="currentColor" opacity="0.7"/>
        <rect x="1" y="6.5" width="14" height="3" rx="1" fill="currentColor" opacity="0.7"/>
        <rect x="1" y="11" width="14" height="3" rx="1" fill="currentColor" opacity="0.7"/>
      </svg>
    ),
  }

  const nextLayout = useCallback(() => {
    const current = LAYOUTS.indexOf(layout)
    const next = LAYOUTS[(current + 1) % LAYOUTS.length]
    setLayout(next)
  }, [layout, setLayout])

  const navLinks = [
    { path: '/', label: 'Library' },
    { path: '/favorites', label: 'Favorites' },
    { path: '/playlists', label: 'Playlists' },
    { path: '/builder', label: 'Builder' },
    { path: '/analytics', label: 'Analytics' },
    { path: '/docs', label: 'Docs' },
  ]

  return (
    <header className="header" role="banner">
      <div className="header__inner">
        <div className="header__brand">
          <Link to="/" className="header__logo" aria-label="CSS Motion Master home">
            <div className="header__logo-mark" aria-hidden="true">
              <svg width="28" height="28" viewBox="0 0 28 28">
                <rect x="2" y="2" width="24" height="24" rx="6" fill="url(#logoGrad)"/>
                <path d="M8 14 Q14 6 20 14 Q14 22 8 14Z" fill="white" opacity="0.9"/>
                <defs>
                  <linearGradient id="logoGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="hsl(251,100%,69%)"/>
                    <stop offset="100%" stopColor="hsl(330,100%,71%)"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <span className="header__logo-text">CSS Motion Master</span>
          </Link>

          <nav className={`header__nav ${mobileNavOpen ? 'header__nav--open' : ''}`} aria-label="Main navigation">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`header__nav-link ${location.pathname === path ? 'header__nav-link--active' : ''}`}
                onClick={() => setMobileNavOpen(false)}
              >
                {label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="header__search">
          <SearchBar />
        </div>

        <div className="header__actions">
          {compareList.length > 0 && (
            <button
              className="header__compare-badge"
              onClick={() => navigate('/compare')}
              aria-label={`Compare ${compareList.length} animations`}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                <rect x="1" y="2" width="5" height="10" rx="1" stroke="currentColor" strokeWidth="1.3" fill="none"/>
                <rect x="8" y="2" width="5" height="10" rx="1" stroke="currentColor" strokeWidth="1.3" fill="none"/>
              </svg>
              Compare {compareList.length}
            </button>
          )}

          <button
            className="header__icon-btn"
            onClick={nextLayout}
            aria-label={`Switch layout. Current: ${layout}`}
            title={`Layout: ${layout}`}
          >
            {LAYOUT_ICONS[layout]}
          </button>

          <button
            className="header__icon-btn"
            id="keyboard-shortcut-overlay-trigger"
            onClick={() => setShortcutsOpen(true)}
            aria-label="Keyboard shortcuts"
            aria-haspopup="dialog"
            title="Keyboard shortcuts (?)"
          >
            ?
          </button>

          <button
            className="header__icon-btn"
            onClick={toggleTheme}
            aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
          >
            {theme === 'dark' ? (
              <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                <circle cx="8" cy="8" r="3" fill="currentColor"/>
                <path d="M8 1v1.5M8 13.5V15M1 8h1.5M13.5 8H15M3.22 3.22l1.06 1.06M11.72 11.72l1.06 1.06M11.72 4.28l-1.06 1.06M4.28 11.72l1.06-1.06" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
              </svg>
            ) : (
              <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M13.5 10.5A5.5 5.5 0 0 1 5.5 2.5a6 6 0 1 0 8 8z" fill="currentColor"/>
              </svg>
            )}
          </button>

          <Link to="/settings" className="header__icon-btn" aria-label="Settings">
            <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
              <circle cx="8" cy="8" r="2.5" stroke="currentColor" strokeWidth="1.3" fill="none"/>
              <path d="M8 1.5v1.2M8 13.3v1.2M1.5 8h1.2M13.3 8h1.2M3.4 3.4l.85.85M11.75 11.75l.85.85M3.4 12.6l.85-.85M11.75 4.25l.85-.85" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
            </svg>
          </Link>

          <button
            className={`header__hamburger ${mobileNavOpen ? 'header__hamburger--open' : ''}`}
            onClick={() => setMobileNavOpen(o => !o)}
            aria-label="Toggle navigation"
            aria-expanded={mobileNavOpen}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
      <ShortcutHelp open={shortcutsOpen} onClose={() => setShortcutsOpen(false)} />
    </header>
  )
}
