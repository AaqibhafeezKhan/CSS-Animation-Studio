export function buildPreviewDoc(animation, vars = {}, options = {}) {
  const { speed = 1, quality = 'high', stagger = false, count = 5 } = options

  const rootVars = Object.entries({
    '--primary-color': 'hsl(251, 100%, 69%)',
    '--secondary-color': 'hsl(330, 100%, 71%)',
    '--accent-color': 'hsl(170, 80%, 50%)',
    '--surface-color': 'hsl(235, 22%, 11%)',
    '--text-color': 'hsl(220, 20%, 95%)',
    '--border-radius-base': '10px',
    '--animation-speed-multiplier': String(speed),
    '--shadow-intensity': '0.6',
    '--blur-amount': '10px',
    '--global-easing': 'cubic-bezier(0.4, 0, 0.2, 1)',
    ...vars,
  }).map(([k, v]) => `  ${k}: ${v};`).join('\n')

  const willChange = quality === 'high' ? 'will-change: transform, opacity;' : ''

  const baseStyles = `
    *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
    body {
      display: flex;
      align-items: center;
      justify-content: center;
      min-height: 100vh;
      background: var(--surface-color);
      color: var(--text-color);
      font-family: 'Inter', system-ui, -apple-system, sans-serif;
      padding: 16px;
      overflow: hidden;
    }
    * { animation-duration: calc(var(--animation-speed-multiplier, 1) * 1s) !important; }
    ${willChange ? `[class] { ${willChange} }` : ''}
  `

  let htmlContent = animation.html
  let jsContent = animation.js || ''

  if (stagger) {
    const htmlEl = animation.html
    const items = Array.from({ length: count }, (_, i) => {
      const delay = i * 100
      return `<div style="animation-delay:${delay}ms">${htmlEl}</div>`
    }).join('\n')
    htmlContent = `<div style="display:flex;flex-direction:column;gap:8px;align-items:center">${items}</div>`
    jsContent = ''
  }

  const controlScript = `
    const controlPreviewAnimations = action => {
      document.getAnimations().forEach(animation => {
        try {
          if (action === 'play') animation.play()
          else animation.pause()
        } catch {}
      })
    }
    window.addEventListener('message', event => {
      if (event.source !== window.parent || !event.data || event.data.type !== 'preview-animation-control') return
      controlPreviewAnimations(event.data.action)
    })
    window.addEventListener('load', () => {
      controlPreviewAnimations('play')
    })
  `

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1"/>
  <style>
    :root {
${rootVars}
    }
    ${baseStyles}
    ${animation.css}
  </style>
</head>
<body>
  ${htmlContent}
  ${jsContent ? `<script>${jsContent}<\/script>` : ''}
  <script>${controlScript}<\/script>
</body>
</html>`
}
