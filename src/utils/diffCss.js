export function diffCss(animations) {
  if (!animations || animations.length < 2) return []

  const parseLines = (css) =>
    css.split('\n').map(l => l.trim()).filter(Boolean)

  const allLines = animations.map(a => parseLines(a.css))

  const uniqueToAll = new Set()
  const lineOwners = {}

  allLines.forEach((lines, idx) => {
    lines.forEach(line => {
      if (!lineOwners[line]) lineOwners[line] = new Set()
      lineOwners[line].add(idx)
    })
  })

  const allUnique = Object.entries(lineOwners)
    .filter(([, owners]) => owners.size === animations.length)
    .map(([line]) => line)

  const sharedSet = new Set(allUnique)

  const result = []

  const union = [...new Set(allLines.flat())]
  union.forEach(line => {
    const owners = lineOwners[line]
    if (sharedSet.has(line)) {
      result.push({ line, type: 'shared', owners: null })
    } else {
      result.push({ line, type: 'unique', owners: [...owners] })
    }
  })

  return result
}

export function mergeCss(animations, vars = {}) {
  if (!animations || animations.length === 0) return ''

  const rootVars = Object.entries(vars)
  const rootBlock = rootVars.length
    ? `:root {\n${rootVars.map(([k, v]) => `  ${k}: ${v};`).join('\n')}\n}\n\n`
    : ''

  const seen = new Set()
  const keyframesSeen = new Set()
  const rules = []
  const keyframes = []

  animations.forEach(anim => {
    const css = anim.css

    const kfRegex = /@keyframes[\s\S]*?\{[\s\S]*?\}/g
    let kfMatch
    while ((kfMatch = kfRegex.exec(css)) !== null) {
      const kf = kfMatch[0].trim()
      const nameMatch = kf.match(/@keyframes\s+([\w-]+)/)
      if (nameMatch && !keyframesSeen.has(nameMatch[1])) {
        keyframesSeen.add(nameMatch[1])
        keyframes.push(kf)
      }
    }

    const noKf = css.replace(/@keyframes[\s\S]*?\{[\s\S]*?\}/g, '').trim()
    const ruleRegex = /([^{}]+)\{([^{}]*)\}/g
    let ruleMatch
    while ((ruleMatch = ruleRegex.exec(noKf)) !== null) {
      const selector = ruleMatch[1].trim()
      const declarations = ruleMatch[2].trim()
      const key = `${selector}{${declarations}}`
      if (!seen.has(key)) {
        seen.add(key)
        rules.push({ selector, declarations })
      }
    }
  })

  const rulesStr = rules.map(r => `${r.selector} {\n  ${r.declarations.split(';').filter(Boolean).map(d => d.trim()).join(';\n  ')};\n}`).join('\n\n')
  const keyframesStr = keyframes.join('\n\n')

  return `${rootBlock}${keyframesStr}\n\n${rulesStr}`
}
