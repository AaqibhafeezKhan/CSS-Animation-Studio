import { nanoid } from 'nanoid'

const KNOWN_PROPS = new Set([
  'transform', 'opacity', 'background', 'background-color', 'color',
  'filter', 'box-shadow', 'border-color', 'width', 'height', 'top',
  'left', 'right', 'bottom', 'margin', 'padding', 'border-radius',
  'font-size', 'letter-spacing', 'clip-path', 'd', 'stroke-dashoffset',
  'stroke', 'fill', 'scale', 'rotate', 'translate',
])

function parseKeyframeBlock(block) {
  const declarations = {}
  const declRegex = /([\w-]+)\s*:\s*([^;]+)/g
  let match
  while ((match = declRegex.exec(block)) !== null) {
    const prop = match[1].trim()
    const value = match[2].trim()
    declarations[prop] = value
  }
  return declarations
}

function extractAnimatedProperties(keyframes) {
  const props = new Set()
  Object.values(keyframes).forEach(stop => {
    Object.keys(stop).forEach(p => props.add(p))
  })
  return [...props].filter(p => KNOWN_PROPS.has(p))
}

export function importParser(rawCss) {
  if (!rawCss || typeof rawCss !== 'string') {
    throw new Error('Invalid CSS input')
  }

  const results = []
  const kfRegex = /@keyframes\s+([\w-]+)\s*\{([\s\S]*?)\}(?=\s*(?:@keyframes|$|\s*\.[^{]+\{))/g

  let processedCss = rawCss.replace(/\/\*[\s\S]*?\*\//g, '')

  const kfBlocks = []
  let match
  const kfFullRegex = /@keyframes\s+([\w-]+)\s*\{/g
  let lastIdx = 0

  const segments = processedCss.split(/@keyframes\s+[\w-]+\s*\{/)

  let tempCss = processedCss
  const animNames = []
  const nameRegex = /@keyframes\s+([\w-]+)/g
  let nameMatch
  while ((nameMatch = nameRegex.exec(processedCss)) !== null) {
    animNames.push(nameMatch[1])
  }

  animNames.forEach(name => {
    const startIdx = tempCss.indexOf(`@keyframes ${name}`)
    if (startIdx === -1) return

    let depth = 0
    let i = startIdx
    while (i < tempCss.length) {
      if (tempCss[i] === '{') depth++
      else if (tempCss[i] === '}') {
        depth--
        if (depth === 0) {
          kfBlocks.push({ name, block: tempCss.slice(startIdx, i + 1) })
          break
        }
      }
      i++
    }
  })

  kfBlocks.forEach(({ name, block }) => {
    const keyframes = {}
    const stopRegex = /(from|to|\d+%(?:\s*,\s*\d+%)*)\s*\{([^}]*)\}/g
    let stopMatch

    while ((stopMatch = stopRegex.exec(block)) !== null) {
      const percentages = stopMatch[1]
        .split(',')
        .map(p => p.trim() === 'from' ? '0%' : p.trim() === 'to' ? '100%' : p.trim())
      const declarations = parseKeyframeBlock(stopMatch[2])
      percentages.forEach(pct => { keyframes[pct] = declarations })
    }

    if (Object.keys(keyframes).length === 0) return

    const animatedProperties = extractAnimatedProperties(keyframes)
    const now = new Date().toISOString()
    const slug = name.toLowerCase().replace(/[^a-z0-9-]/g, '-')

    results.push({
      id: `custom-${nanoid(8)}`,
      name,
      slug: `custom-${slug}`,
      category: 'custom',
      tags: ['custom', 'imported'],
      description: `Imported animation: ${name}`,
      longDescription: `Custom animation imported from CSS. Contains ${Object.keys(keyframes).length} keyframe stops animating: ${animatedProperties.join(', ')}.`,
      addedAt: now,
      updatedAt: now,
      author: 'Imported',
      browserSupport: { chrome: 43, firefox: 16, safari: 9, edge: 12 },
      performanceScore: 7,
      complexityScore: 2,
      animatedProperties,
      triggerType: 'auto',
      css: block + `\n\n.${slug}-el {\n  animation: ${name} 1s ease infinite;\n}`,
      html: `<div class="${slug}-el">Preview</div>`,
      js: null,
      keyframes,
      variants: [
        { name: 'Fast', css: block + `\n\n.${slug}-el {\n  animation: ${name} 0.5s ease infinite;\n}` },
        { name: 'Slow', css: block + `\n\n.${slug}-el {\n  animation: ${name} 2s ease infinite;\n}` },
      ],
      relatedIds: [],
    })
  })

  if (results.length === 0) {
    throw new Error('No valid @keyframes blocks found in the provided CSS.')
  }

  return results
}
