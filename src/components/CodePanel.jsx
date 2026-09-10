import { useState, useCallback, useRef } from 'react'
import { highlightCss } from '../utils/cssTokenizer.js'
import useStore from '../store/useStore.js'
import { useShareUrl } from '../hooks/useShareUrl.js'
import { useLocalFile } from '../hooks/useLocalFile.js'
import './CodePanel.css'

const TABS = ['css', 'html', 'js', 'combined']

export default function CodePanel({ animation, variant = null }) {
  const [activeTab, setActiveTab] = useState('css')
  const [copied, setCopied] = useState(false)
  const { recordCopy, pushNotification, customVars } = useStore()
  const { copyText } = useShareUrl()
  const { downloadCss, downloadHtml } = useLocalFile()

  const getActiveAnimation = useCallback(() => {
    if (variant) {
      const v = animation.variants?.find(v => v.name === variant)
      if (v) return { ...animation, css: v.css }
    }
    return animation
  }, [animation, variant])

  const getCode = useCallback(() => {
    const active = getActiveAnimation()
    if (activeTab === 'css') return active.css
    if (activeTab === 'html') return active.html || ''
    if (activeTab === 'js') return active.js || '(No JavaScript required)'
    if (activeTab === 'combined') {
      const rootVars = Object.entries(customVars)
        .map(([k, v]) => `  ${k}: ${v};`)
        .join('\n')
      return `:root {\n${rootVars}\n}\n\n${active.css}${active.html ? '\n\n' + active.html : ''}${active.js ? '\n\n<script>\n' + active.js + '\n</script>' : ''}`
    }
    return ''
  }, [activeTab, getActiveAnimation, customVars])

  const handleCopy = useCallback(async () => {
    const code = getCode()
    await copyText(code)
    recordCopy(animation.id, activeTab)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }, [getCode, copyText, recordCopy, animation.id, activeTab])

  const handleDownload = useCallback(() => {
    const active = getActiveAnimation()
    if (activeTab === 'css' || activeTab === 'combined') {
      downloadCss(getCode(), `${active.slug}-animation.css`)
    } else if (activeTab === 'html') {
      downloadHtml(active.html || '', `${active.slug}.html`)
    } else {
      downloadCss(getCode(), `${active.slug}.js`)
    }
    recordCopy(animation.id, 'download')
    pushNotification(`Downloaded ${animation.name}`, 'success')
  }, [activeTab, getActiveAnimation, getCode, downloadCss, downloadHtml, recordCopy, animation, pushNotification])

  const code = getCode()
  const highlighted = activeTab === 'css' ? highlightCss(code) : null

  const hasJs = !!animation.js

  return (
    <div className="code-panel">
      <div className="code-panel__tabs" role="tablist" aria-label="Code tabs">
        {TABS.filter(t => t !== 'js' || hasJs).map(tab => (
          <button
            key={tab}
            role="tab"
            aria-selected={activeTab === tab}
            id={`code-tab-${tab}`}
            aria-controls={`code-panel-${tab}`}
            className={`code-panel__tab ${activeTab === tab ? 'code-panel__tab--active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.toUpperCase()}
            {tab === 'js' && hasJs && <span className="code-panel__tab-dot" aria-hidden="true" />}
          </button>
        ))}

        <div className="code-panel__actions">
          <button
            className={`code-panel__action-btn ${copied ? 'code-panel__action-btn--success' : ''}`}
            onClick={handleCopy}
            aria-label="Copy code"
            data-action="copy-css"
          >
            {copied ? (
              <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                <path d="M2 7l3.5 3.5L12 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            ) : (
              <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                <rect x="4" y="4" width="8" height="8" rx="1.5" stroke="currentColor" strokeWidth="1.3" fill="none"/>
                <path d="M3 3V2a1 1 0 0 1 1-1h7a1 1 0 0 1 1 1v7a1 1 0 0 1-1 1h-1" stroke="currentColor" strokeWidth="1.3" fill="none" strokeLinejoin="round"/>
              </svg>
            )}
            {copied ? 'Copied' : 'Copy'}
          </button>
          <button
            className="code-panel__action-btn"
            onClick={handleDownload}
            aria-label="Download code"
            data-action="download"
          >
            <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
              <path d="M7 1v7M4 5l3 3 3-3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              <path d="M2 10v2h10v-2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
            </svg>
            Download
          </button>
        </div>
      </div>

      <div
        id={`code-panel-${activeTab}`}
        role="tabpanel"
        aria-labelledby={`code-tab-${activeTab}`}
        className="code-panel__body"
      >
        <pre className="code-panel__pre">
          <code
            className="code-panel__code"
            dangerouslySetInnerHTML={highlighted ? { __html: highlighted } : undefined}
          >
            {highlighted ? undefined : code}
          </code>
        </pre>
      </div>
    </div>
  )
}
