import { useState, useEffect, useRef } from 'react'
import useStore from '../store/useStore.js'
import { EASINGS } from '../constants/easings.js'
import './Builder.css'

const ELEMENTS = ['div', 'button', 'span', 'p', 'img']
const SIZES = [40, 60, 80, 100, 120, 160, 200]

export default function Builder() {
  const {
    builderKeyframes, builderName, builderDuration, builderEasing, builderIterations,
    builderDirection, builderDelay, builderBg, builderWidth, builderHeight,
    setBuilderName, setBuilderDuration, setBuilderEasing, setBuilderIterations,
    setBuilderDirection, setBuilderDelay, setBuilderBg, setBuilderWidth, setBuilderHeight,
    addKeyframeStop, removeKeyframeStop, updateKeyframeStop, exportBuilderCSS,
    addCustomAnimation, pushNotification,
  } = useStore()

  const [activeKfId, setActiveKfId] = useState(builderKeyframes[0]?.id)
  const [preview, setPreview] = useState(false)
  const previewRef = useRef(null)

  const activeKf = builderKeyframes.find(kf => kf.id === activeKfId) || builderKeyframes[0]

  const css = exportBuilderCSS()

  const updateTransform = (key, value) => {
    updateKeyframeStop(activeKfId, { transform: { ...activeKf.transform, [key]: +value } })
  }

  const handleSave = () => {
    const now = new Date().toISOString()
    addCustomAnimation({
      id: `custom-${Date.now()}`,
      name: builderName,
      slug: `custom-${builderName.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
      category: 'custom',
      tags: ['custom', 'builder'],
      description: `Custom: ${builderName}`,
      longDescription: `A custom animation built with the CSS Motion Builder. Duration: ${builderDuration}ms, Easing: ${builderEasing}.`,
      addedAt: now, updatedAt: now, author: 'Builder',
      browserSupport: { chrome: 43, firefox: 16, safari: 9, edge: 12 },
      performanceScore: 8, complexityScore: 3,
      animatedProperties: ['transform', 'opacity'],
      triggerType: 'auto',
      css, html: `<div class="${builderName}-el">Preview</div>`, js: null,
      keyframes: {}, variants: [], relatedIds: [],
    })
    pushNotification(`Saved "${builderName}" to Library`, 'success')
  }

  return (
    <div className="builder-page">
      <div className="page-header">
        <h1 className="page-title">Animation Builder</h1>
      </div>

      <div className="builder-layout">
        <aside className="builder-controls">
          <section className="builder-section">
            <h3 className="builder-section-title">Animation</h3>
            <div className="builder-field">
              <label className="builder-label">Name</label>
              <input className="builder-input" value={builderName} onChange={e => setBuilderName(e.target.value)} />
            </div>
            <div className="builder-field">
              <label className="builder-label">Duration: {builderDuration}ms</label>
              <input className="builder-range" type="range" min="100" max="5000" step="50" value={builderDuration} onChange={e => setBuilderDuration(+e.target.value)} />
            </div>
            <div className="builder-field">
              <label className="builder-label">Delay: {builderDelay}ms</label>
              <input className="builder-range" type="range" min="0" max="2000" step="50" value={builderDelay} onChange={e => setBuilderDelay(+e.target.value)} />
            </div>
            <div className="builder-field">
              <label className="builder-label">Easing</label>
              <select className="builder-select" value={builderEasing} onChange={e => setBuilderEasing(e.target.value)}>
                {EASINGS.map(e => <option key={e.value} value={e.value}>{e.label}</option>)}
              </select>
            </div>
            <div className="builder-field">
              <label className="builder-label">Iterations</label>
              <select className="builder-select" value={builderIterations} onChange={e => setBuilderIterations(e.target.value)}>
                {['1', '2', '3', '5', 'infinite'].map(v => <option key={v} value={v}>{v}</option>)}
              </select>
            </div>
            <div className="builder-field">
              <label className="builder-label">Direction</label>
              <select className="builder-select" value={builderDirection} onChange={e => setBuilderDirection(e.target.value)}>
                {['normal', 'reverse', 'alternate', 'alternate-reverse'].map(v => <option key={v} value={v}>{v}</option>)}
              </select>
            </div>
          </section>

          <section className="builder-section">
            <h3 className="builder-section-title">Element</h3>
            <div className="builder-field">
              <label className="builder-label">Background</label>
              <div className="builder-color-row">
                <input type="color" className="builder-color" value={builderBg} onChange={e => setBuilderBg(e.target.value)} />
                <span className="builder-color-val">{builderBg}</span>
              </div>
            </div>
            <div className="builder-field">
              <label className="builder-label">Width: {builderWidth}px</label>
              <input className="builder-range" type="range" min="40" max="240" step="10" value={builderWidth} onChange={e => setBuilderWidth(+e.target.value)} />
            </div>
            <div className="builder-field">
              <label className="builder-label">Height: {builderHeight}px</label>
              <input className="builder-range" type="range" min="40" max="240" step="10" value={builderHeight} onChange={e => setBuilderHeight(+e.target.value)} />
            </div>
          </section>

          <section className="builder-section">
            <div className="builder-section-header">
              <h3 className="builder-section-title">Keyframes</h3>
              <button className="btn btn-sm btn-primary" onClick={addKeyframeStop}>+ Add Stop</button>
            </div>
            <div className="builder-kf-list">
              {builderKeyframes.map(kf => (
                <div
                  key={kf.id}
                  className={`builder-kf-item ${activeKfId === kf.id ? 'builder-kf-item--active' : ''}`}
                  onClick={() => setActiveKfId(kf.id)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={e => e.key === 'Enter' && setActiveKfId(kf.id)}
                >
                  <span className="builder-kf-pct">{kf.percentage}%</span>
                  {builderKeyframes.length > 2 && (
                    <button
                      className="icon-btn-xs"
                      onClick={e => { e.stopPropagation(); removeKeyframeStop(kf.id) }}
                      aria-label="Remove keyframe stop"
                    >
                      <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
                        <path d="M2 2l6 6M8 2l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                    </button>
                  )}
                </div>
              ))}
            </div>
          </section>

          {activeKf && (
            <section className="builder-section">
              <h3 className="builder-section-title">Stop at {activeKf.percentage}%</h3>
              <div className="builder-field">
                <label className="builder-label">Percentage</label>
                <input className="builder-range" type="range" min="0" max="100" value={activeKf.percentage}
                  onChange={e => updateKeyframeStop(activeKfId, { percentage: +e.target.value })} />
              </div>
              {[
                { key: 'translateX', label: 'TranslateX', min: -300, max: 300 },
                { key: 'translateY', label: 'TranslateY', min: -300, max: 300 },
                { key: 'rotateZ', label: 'RotateZ', min: -360, max: 360 },
                { key: 'scaleX', label: 'ScaleX', min: 0, max: 4, step: 0.1 },
                { key: 'scaleY', label: 'ScaleY', min: 0, max: 4, step: 0.1 },
                { key: 'skewX', label: 'SkewX', min: -60, max: 60 },
              ].map(({ key, label, min, max, step = 1 }) => (
                <div key={key} className="builder-field">
                  <label className="builder-label">{label}: {activeKf.transform[key]}</label>
                  <input className="builder-range" type="range" min={min} max={max} step={step}
                    value={activeKf.transform[key]}
                    onChange={e => updateTransform(key, e.target.value)} />
                </div>
              ))}
              <div className="builder-field">
                <label className="builder-label">Opacity: {activeKf.opacity}</label>
                <input className="builder-range" type="range" min="0" max="1" step="0.01"
                  value={activeKf.opacity}
                  onChange={e => updateKeyframeStop(activeKfId, { opacity: +e.target.value })} />
              </div>
            </section>
          )}

          <div className="builder-save-row">
            <button className="btn btn-primary" onClick={handleSave}>Save to Library</button>
          </div>
        </aside>

        <main className="builder-preview-area">
          <div className="builder-canvas">
            <style>{css}</style>
            <div
              className={`${builderName}-el`}
              style={{
                width: builderWidth,
                height: builderHeight,
                background: builderBg,
                borderRadius: '12px',
              }}
            />
          </div>
          <div className="builder-code-preview">
            <pre className="builder-pre">{css}</pre>
          </div>
        </main>
      </div>
    </div>
  )
}
