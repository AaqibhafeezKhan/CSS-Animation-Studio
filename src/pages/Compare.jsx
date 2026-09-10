import { useState, useMemo } from 'react'
import PreviewIframe from '../components/PreviewIframe.jsx'
import CodePanel from '../components/CodePanel.jsx'
import { diffCss } from '../utils/diffCss.js'
import useStore from '../store/useStore.js'
import './Compare.css'

export default function Compare() {
  const { compareList, clearCompare, getAnimationById, removeFromCompare } = useStore()
  const animations = compareList.map(id => getAnimationById(id)).filter(Boolean)
  const diff = useMemo(() => diffCss(animations), [animations])

  return (
    <div className="compare-page">
      <div className="page-header">
        <h1 className="page-title">Compare Animations</h1>
        {animations.length > 0 && (
          <button className="btn btn-ghost" onClick={clearCompare}>Clear All</button>
        )}
      </div>

      {animations.length === 0 ? (
        <div className="empty-state">
          <p>Add up to 4 animations to compare using the card action menus in the Library.</p>
        </div>
      ) : (
        <>
          <div className="compare-grid" style={{ gridTemplateColumns: `repeat(${animations.length}, 1fr)` }}>
            {animations.map(anim => (
              <div key={anim.id} className="compare-col">
                <div className="compare-col-header">
                  <h2 className="compare-col-title">{anim.name}</h2>
                  <button
                    className="icon-btn"
                    onClick={() => removeFromCompare(anim.id)}
                    aria-label={`Remove ${anim.name} from compare`}
                  >
                    <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                      <path d="M2 2l10 10M12 2L2 12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
                    </svg>
                  </button>
                </div>
                <PreviewIframe animation={anim} />

                <div className="compare-meta">
                  <div className="compare-meta-row">
                    <span>Performance</span>
                    <span className="compare-meta-val">{anim.performanceScore}/10</span>
                  </div>
                  <div className="compare-meta-row">
                    <span>Complexity</span>
                    <span className="compare-meta-val">{anim.complexityScore}/5</span>
                  </div>
                  <div className="compare-meta-row">
                    <span>Trigger</span>
                    <span className="compare-meta-val">{anim.triggerType}</span>
                  </div>
                  <div className="compare-meta-row">
                    <span>JS</span>
                    <span className="compare-meta-val">{anim.js ? 'Yes' : 'No'}</span>
                  </div>
                  <div className="compare-meta-row">
                    <span>Properties</span>
                    <span className="compare-meta-val">{anim.animatedProperties.join(', ')}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="compare-diff">
            <h3 className="compare-diff-title">CSS Diff</h3>
            <div className="compare-diff-grid" style={{ gridTemplateColumns: `repeat(${animations.length}, 1fr)` }}>
              {animations.map(anim => (
                <div key={anim.id} className="compare-diff-col">
                  <CodePanel animation={anim} />
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  )
}
