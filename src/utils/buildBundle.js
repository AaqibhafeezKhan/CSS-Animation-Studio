import { saveAs } from 'file-saver'

export function buildBundle(animations, vars = {}) {
  if (!animations || animations.length === 0) {
    throw new Error('No animations selected')
  }

  const rootVars = Object.entries(vars)
  const rootBlock = rootVars.length
    ? `:root {\n${rootVars.map(([k, v]) => `  ${k}: ${v};`).join('\n')}\n}\n\n`
    : ''

  const seenKeyframes = new Set()
  const seenRules = new Set()
  const keyframeBlocks = []
  const ruleBlocks = []

  animations.forEach(anim => {
    const css = anim.css

    const kfRegex = /@keyframes\s+([\w-]+)\s*\{/g
    let kfStart
    while ((kfStart = kfRegex.exec(css)) !== null) {
      const name = kfStart[1]
      if (seenKeyframes.has(name)) continue
      seenKeyframes.add(name)

      let depth = 0
      let i = kfStart.index
      let blockStart = -1
      while (i < css.length) {
        if (css[i] === '{') { depth++; if (depth === 1) blockStart = i }
        else if (css[i] === '}') {
          depth--
          if (depth === 0) {
            keyframeBlocks.push(css.slice(kfStart.index, i + 1))
            break
          }
        }
        i++
      }
    }

    const noKf = css.replace(/@keyframes[\s\S]*?\}\s*\}/g, '').trim()
    const ruleRegex = /([^{}@]+)\{([^{}]*)\}/g
    let ruleMatch
    while ((ruleMatch = ruleRegex.exec(noKf)) !== null) {
      const selector = ruleMatch[1].trim()
      if (!selector) continue
      const declarations = ruleMatch[2].trim()
      const key = `${selector}{${declarations}}`
      if (seenRules.has(key)) continue
      seenRules.add(key)
      ruleBlocks.push(`${selector} {\n  ${declarations.split(';').map(d => d.trim()).filter(Boolean).join(';\n  ')};\n}`)
    }
  })

  const header = `/* CSS Motion Master — Animation Bundle */\n/* Generated: ${new Date().toISOString()} */\n/* Animations: ${animations.map(a => a.name).join(', ')} */\n\n`

  return header + rootBlock + keyframeBlocks.join('\n\n') + '\n\n' + ruleBlocks.join('\n\n')
}

export function downloadBundle(animations, vars = {}) {
  const css = buildBundle(animations, vars)
  const blob = new Blob([css], { type: 'text/css;charset=utf-8' })
  saveAs(blob, 'css-motion-bundle.css')
  return css
}
