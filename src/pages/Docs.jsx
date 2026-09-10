import { useState } from 'react'
import { CATEGORIES } from '../constants/categories.js'
import { EASINGS } from '../constants/easings.js'
import ALL_ANIMATIONS from '../animations/index.js'
import './Docs.css'

const SECTIONS = [
  {
    id: 'getting-started',
    title: 'Getting Started',
    content: `CSS Animation Studio is a library of 100 production-ready CSS animations organized by category. Every animation includes CSS, HTML, and optional JavaScript, complete with variants, browser support data, and performance analysis.

To use an animation: open its detail panel, select the CSS tab, and copy the keyframe block and class definition. Paste directly into your stylesheet. Customize with CSS custom properties for seamless theming.

All animations respect the --animation-speed-multiplier custom property, making global speed control trivial.`,
  },
  {
    id: 'categories',
    title: 'Animation Categories',
    content: `The library is organized into 12 categories:

hover — CSS :hover triggered transitions that require no JavaScript.
keyframe — Declarative @keyframes animations with auto or manual trigger.
button — Interactive button states including ripple, fill, depth, and magnetic.
text — Typography animations: typewriter, gradient, glitch, wave, and scramble.
background — Full-area effects: gradient morph, aurora, particle field, and mesh.
scroll — IntersectionObserver–driven reveal animations for scroll-based effects.
3d — CSS 3D transforms: card flip, cube, perspective tilt, and depth zoom.
svg — SVG stroke, path draw, morphing blob, and shape shift animations.
micro — UI microinteractions: checkbox tick, toggle switch, success checkmark.
loading — Loading states: skeleton shimmer, progress bar, spinner, dot cascade.
transition — Page-level transitions: slide, modal pop, and drawer slide.
morphing — CSS border-radius blob morph and liquid button effects.`,
  },
  {
    id: 'performance',
    title: 'Performance Guide',
    content: `CSS animations are divided into three performance tiers:

Composite tier (transform, opacity): GPU composited by the browser. These never trigger layout or paint recalculations. Always prefer transform over top/left and opacity over visibility.

Paint tier (background, color, filter, box-shadow): Forces the browser to repaint affected pixels each frame. Acceptable for short-duration effects but avoid running continuously.

Layout tier (width, height, margin, padding): Triggers full layout recalculation — the most expensive. Avoid animating layout properties. Use transform: scale() instead of width/height, and transform: translate() instead of top/left.

Use contain: layout style on animated elements to limit style recalculation scope. Set will-change: transform only on elements that actively animate — remove it after animation completes.`,
  },
  {
    id: 'theming',
    title: 'CSS Custom Properties',
    content: `All animations reference CSS custom properties for easy theming. The core properties:

--primary-color: Primary brand color (default: hsl(251, 100%, 69%))
--secondary-color: Secondary accent (default: hsl(330, 100%, 71%))
--accent-color: Tertiary accent (default: hsl(170, 80%, 50%))
--animation-speed-multiplier: Global speed scalar (default: 1)
--border-radius-base: Base radius token
--global-easing: Global easing function
--shadow-intensity: Shadow opacity multiplier

Override these in your :root block to instantly retheme all animations.`,
  },
  {
    id: 'builder',
    title: 'Animation Builder',
    content: `The Builder lets you create custom keyframe animations without writing code. Add keyframe stops at any percentage, adjust transform properties (translate, rotate, scale, skew), opacity, and background color for each stop. Configure duration, delay, easing, iteration count, and direction. The live preview canvas updates in real time. The Builder normalizes animation names into CSS-safe identifiers so generated keyframes and preview selectors remain valid. Export the generated @keyframes CSS or save the animation to your Library.`,
  },
  {
    id: 'keyboard',
    title: 'Keyboard Shortcuts',
    content: `/ or Ctrl+K — Focus search
G — Cycle grid layout (comfortable / compact / list)
F — Toggle favorite (when hovering a card)
C — Copy CSS of open animation
D — Download animation
B — Navigate to Builder
P — Navigate to Playlists
? — Show shortcut overlay
Escape — Close modal or panel
Arrow Left / Right — Navigate between animations in detail view`,
  },
  {
    id: 'import',
    title: 'Importing Custom CSS',
    content: `Paste raw @keyframes CSS into the Import section of Settings to add custom animations to your Library. The parser extracts keyframes, detects animated properties, and creates a full animation data object compatible with the rest of the studio.

Requirements: Must include at least one valid @keyframes block. CSS custom properties in the pasted code are honoured if they match the studio theme tokens. Multiple keyframe blocks in a single paste are all imported.`,
  },
  {
    id: 'pwa',
    title: 'PWA Installation',
    content: `CSS Animation Studio is a Progressive Web App. On Chrome and Edge: click the install button in the address bar or use the browser menu. On Safari on iOS: tap the Share button then "Add to Home Screen".

Once installed, the app works offline using a service worker that caches all static assets. Updates are applied automatically on next launch.`,
  },
]

export default function Docs() {
  const [activeSection, setActiveSection] = useState(SECTIONS[0].id)

  const section = SECTIONS.find(s => s.id === activeSection)

  return (
    <div className="docs-page">
      <div className="page-header">
        <h1 className="page-title">Documentation</h1>
      </div>

      <div className="docs-layout">
        <nav className="docs-nav" aria-label="Documentation sections">
          {SECTIONS.map(s => (
            <button
              key={s.id}
              className={`docs-nav-item ${activeSection === s.id ? 'docs-nav-item--active' : ''}`}
              onClick={() => setActiveSection(s.id)}
            >
              {s.title}
            </button>
          ))}
        </nav>

        <article className="docs-content">
          <h2 className="docs-section-title">{section?.title}</h2>
          <div className="docs-body">
            {section?.content.split('\n\n').map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>

          {activeSection === 'categories' && (
            <div className="docs-category-grid">
              {CATEGORIES.map(cat => (
                <div key={cat.id} className="docs-category-card" style={{ '--cat': cat.color }}>
                  <span className="docs-category-name">{cat.label}</span>
                  <span className="docs-category-count">
                    {ALL_ANIMATIONS.filter(a => a.category === cat.id).length} animations
                  </span>
                </div>
              ))}
            </div>
          )}

          {activeSection === 'theming' && (
            <div className="docs-props-table">
              <table>
                <thead>
                  <tr>
                    <th>Property</th>
                    <th>Default</th>
                    <th>Description</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { prop: '--primary-color', def: 'hsl(251,100%,69%)', desc: 'Primary brand color' },
                    { prop: '--secondary-color', def: 'hsl(330,100%,71%)', desc: 'Secondary accent' },
                    { prop: '--accent-color', def: 'hsl(170,80%,50%)', desc: 'Tertiary accent' },
                    { prop: '--animation-speed-multiplier', def: '1', desc: 'Global animation speed scalar' },
                    { prop: '--border-radius-base', def: '10px', desc: 'Base border-radius' },
                    { prop: '--global-easing', def: 'cubic-bezier(0.4,0,0.2,1)', desc: 'Default easing' },
                    { prop: '--shadow-intensity', def: '0.6', desc: 'Shadow opacity multiplier' },
                    { prop: '--blur-amount', def: '10px', desc: 'Backdrop blur amount' },
                  ].map(r => (
                    <tr key={r.prop}>
                      <td><code>{r.prop}</code></td>
                      <td><code>{r.def}</code></td>
                      <td>{r.desc}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </article>
      </div>
    </div>
  )
}
