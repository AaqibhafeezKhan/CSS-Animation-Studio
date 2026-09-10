const TOKEN_TYPES = {
  AT_RULE: 'at-rule',
  SELECTOR: 'selector',
  PROPERTY: 'property',
  VALUE: 'value',
  NUMBER: 'number',
  STRING: 'string',
  COMMENT: 'comment',
  PSEUDO: 'pseudo',
  BRACE_OPEN: 'brace-open',
  BRACE_CLOSE: 'brace-close',
  COLON: 'colon',
  SEMICOLON: 'semicolon',
  UNIT: 'unit',
  COLOR: 'color',
  FUNCTION: 'function',
  KEYWORD: 'keyword',
  PUNCTUATION: 'punctuation',
}

const CSS_KEYWORDS = new Set([
  'none', 'auto', 'inherit', 'initial', 'unset', 'revert',
  'linear', 'ease', 'ease-in', 'ease-out', 'ease-in-out',
  'normal', 'reverse', 'alternate', 'alternate-reverse',
  'forwards', 'backwards', 'both',
  'infinite', 'transparent', 'currentColor',
  'solid', 'dashed', 'dotted', 'double',
  'flex', 'grid', 'block', 'inline', 'inline-flex', 'inline-block',
  'relative', 'absolute', 'fixed', 'sticky',
  'center', 'left', 'right', 'top', 'bottom',
  'bold', 'normal', 'italic',
  'hidden', 'visible', 'scroll', 'overflow',
  'preserve-3d', 'flat',
  'from', 'to',
])

const CSS_UNITS = ['px', 'em', 'rem', 'vh', 'vw', 'vmin', 'vmax', '%', 'deg', 'rad', 'turn', 'ms', 's', 'fr', 'ch', 'ex']

export function cssTokenize(css) {
  const tokens = []
  let i = 0

  while (i < css.length) {
    if (css[i] === '/' && css[i + 1] === '*') {
      const end = css.indexOf('*/', i + 2)
      const comment = end === -1 ? css.slice(i) : css.slice(i, end + 2)
      tokens.push({ type: TOKEN_TYPES.COMMENT, value: comment })
      i += comment.length
      continue
    }

    if (css[i] === '@') {
      const match = css.slice(i).match(/^@[\w-]+/)
      if (match) {
        tokens.push({ type: TOKEN_TYPES.AT_RULE, value: match[0] })
        i += match[0].length
        continue
      }
    }

    if (css[i] === '{') {
      tokens.push({ type: TOKEN_TYPES.BRACE_OPEN, value: '{' })
      i++
      continue
    }

    if (css[i] === '}') {
      tokens.push({ type: TOKEN_TYPES.BRACE_CLOSE, value: '}' })
      i++
      continue
    }

    if (css[i] === ':' && css[i + 1] === ':') {
      const match = css.slice(i).match(/^::[\w-]+/)
      if (match) {
        tokens.push({ type: TOKEN_TYPES.PSEUDO, value: match[0] })
        i += match[0].length
        continue
      }
    }

    if (css[i] === ':' && css[i + 1] !== ':') {
      tokens.push({ type: TOKEN_TYPES.COLON, value: ':' })
      i++
      continue
    }

    if (css[i] === ';') {
      tokens.push({ type: TOKEN_TYPES.SEMICOLON, value: ';' })
      i++
      continue
    }

    if (css[i] === '"' || css[i] === "'") {
      const quote = css[i]
      let j = i + 1
      while (j < css.length && css[j] !== quote) {
        if (css[j] === '\\') j++
        j++
      }
      const str = css.slice(i, j + 1)
      tokens.push({ type: TOKEN_TYPES.STRING, value: str })
      i = j + 1
      continue
    }

    const numMatch = css.slice(i).match(/^-?\d*\.?\d+/)
    if (numMatch) {
      let numVal = numMatch[0]
      let unitVal = ''
      const rest = css.slice(i + numVal.length)
      for (const unit of CSS_UNITS) {
        if (rest.startsWith(unit) && !/\w/.test(rest[unit.length] || '')) {
          unitVal = unit
          break
        }
      }
      if (unitVal) {
        tokens.push({ type: TOKEN_TYPES.NUMBER, value: numVal + unitVal })
      } else {
        tokens.push({ type: TOKEN_TYPES.NUMBER, value: numVal })
      }
      i += numVal.length + unitVal.length
      continue
    }

    const colorMatch = css.slice(i).match(/^#([0-9a-fA-F]{3,8})/)
    if (colorMatch) {
      tokens.push({ type: TOKEN_TYPES.COLOR, value: colorMatch[0] })
      i += colorMatch[0].length
      continue
    }

    const funcMatch = css.slice(i).match(/^[\w-]+\(/)
    if (funcMatch) {
      tokens.push({ type: TOKEN_TYPES.FUNCTION, value: funcMatch[0] })
      i += funcMatch[0].length
      continue
    }

    const wordMatch = css.slice(i).match(/^[\w-]+/)
    if (wordMatch) {
      const word = wordMatch[0]
      if (CSS_KEYWORDS.has(word)) {
        tokens.push({ type: TOKEN_TYPES.KEYWORD, value: word })
      } else {
        tokens.push({ type: TOKEN_TYPES.VALUE, value: word })
      }
      i += word.length
      continue
    }

    tokens.push({ type: TOKEN_TYPES.PUNCTUATION, value: css[i] })
    i++
  }

  return tokens
}

export function cssTokensToHtml(tokens) {
  return tokens.map(t => {
    const escaped = t.value.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
    return `<span data-token="${t.type}">${escaped}</span>`
  }).join('')
}

export function highlightCss(css) {
  return cssTokensToHtml(cssTokenize(css))
}
