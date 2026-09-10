import useStore from '../store/useStore.js'
import { importParser } from '../utils/importParser.js'
import { useState } from 'react'
import './Settings.css'

const PRESET_LIST = ['Default', 'Neon', 'Soft', 'Minimal', 'Sharp']

export default function Settings() {
  const {
    customVars, setCustomVar, resetCustomVars, savePreset, loadPreset,
    savedPresets, applyThemePreset, exportTheme, theme, toggleTheme,
    reducedMotion, setReducedMotion, previewQuality, setPreviewQuality,
    defaultSpeed, setDefaultSpeed, autoPlay, setAutoPlay,
    fontSizeBase, setFontSizeBase, addCustomAnimation, pushNotification,
  } = useStore()

  const [importCss, setImportCss] = useState('')
  const [presetName, setPresetName] = useState('')

  const handleImport = () => {
    try {
      const animations = importParser(importCss)
      animations.forEach(a => addCustomAnimation(a))
      pushNotification(`Imported ${animations.length} animation(s)`, 'success')
      setImportCss('')
    } catch (err) {
      pushNotification(err.message, 'error')
    }
  }

  const handleSavePreset = () => {
    if (!presetName.trim()) return
    savePreset(presetName.trim())
    pushNotification(`Preset "${presetName.trim()}" saved`, 'success')
    setPresetName('')
  }

  const handleExportTheme = async () => {
    const css = exportTheme()
    try {
      await navigator.clipboard.writeText(css)
      pushNotification('Theme CSS copied to clipboard', 'success')
    } catch {
      pushNotification('Copy failed', 'error')
    }
  }

  const colorVars = [
    { key: '--primary-color', label: 'Primary Color' },
    { key: '--secondary-color', label: 'Secondary Color' },
    { key: '--accent-color', label: 'Accent Color' },
  ]

  const rangeVars = [
    { key: '--animation-speed-multiplier', label: 'Animation Speed', min: 0.2, max: 3, step: 0.1 },
    { key: '--shadow-intensity', label: 'Shadow Intensity', min: 0, max: 1, step: 0.05 },
  ]

  return (
    <div className="settings-page">
      <div className="page-header">
        <h1 className="page-title">Settings</h1>
      </div>

      <div className="settings-grid">
        <section className="settings-card">
          <h2 className="settings-card-title">Appearance</h2>
          <div className="settings-row">
            <span className="settings-label">Theme</span>
            <button className="btn btn-sm btn-ghost" onClick={toggleTheme}>
              {theme === 'dark' ? 'Switch to Light' : 'Switch to Dark'}
            </button>
          </div>
          <div className="settings-row">
            <span className="settings-label">Font Size Base: {fontSizeBase}px</span>
            <input className="settings-range" type="range" min="12" max="20" step="1"
              value={fontSizeBase} onChange={e => setFontSizeBase(+e.target.value)} />
          </div>
        </section>

        <section className="settings-card">
          <h2 className="settings-card-title">Colors</h2>
          {colorVars.map(({ key, label }) => (
            <div key={key} className="settings-row">
              <span className="settings-label">{label}</span>
              <div className="settings-color-row">
                <div className="settings-color-preview" style={{ background: customVars[key] }} />
                <input className="settings-input" value={customVars[key]} onChange={e => setCustomVar(key, e.target.value)} />
              </div>
            </div>
          ))}
          {rangeVars.map(({ key, label, min, max, step }) => (
            <div key={key} className="settings-row">
              <span className="settings-label">{label}: {customVars[key]}</span>
              <input className="settings-range" type="range" min={min} max={max} step={step}
                value={parseFloat(customVars[key])}
                onChange={e => setCustomVar(key, e.target.value)} />
            </div>
          ))}
          <div className="settings-actions">
            <button className="btn btn-sm btn-ghost" onClick={resetCustomVars}>Reset Colors</button>
            <button className="btn btn-sm btn-ghost" onClick={handleExportTheme}>Export Theme CSS</button>
          </div>
        </section>

        <section className="settings-card">
          <h2 className="settings-card-title">Theme Presets</h2>
          <div className="settings-preset-grid">
            {PRESET_LIST.map(p => (
              <button key={p} className="btn btn-sm btn-ghost" onClick={() => { applyThemePreset(p); pushNotification(`Applied "${p}" preset`, 'info') }}>
                {p}
              </button>
            ))}
          </div>
          <div className="settings-row" style={{ marginTop: 'var(--spacing-md)' }}>
            <input className="settings-input" placeholder="Preset name…" value={presetName} onChange={e => setPresetName(e.target.value)} />
            <button className="btn btn-sm btn-primary" onClick={handleSavePreset}>Save</button>
          </div>
          {savedPresets.length > 0 && (
            <div className="settings-preset-grid">
              {savedPresets.map(p => (
                <button key={p.name} className="btn btn-sm btn-ghost" onClick={() => { loadPreset(p.name); pushNotification(`Loaded "${p.name}"`, 'info') }}>
                  {p.name}
                </button>
              ))}
            </div>
          )}
        </section>

        <section className="settings-card">
          <h2 className="settings-card-title">Playback</h2>
          <div className="settings-row">
            <span className="settings-label">Reduced Motion</span>
            <label className="settings-toggle">
              <input type="checkbox" checked={reducedMotion} onChange={e => setReducedMotion(e.target.checked)} />
              <span className="settings-toggle-track"><span className="settings-toggle-thumb" /></span>
            </label>
          </div>
          <div className="settings-row">
            <span className="settings-label">Auto Play</span>
            <label className="settings-toggle">
              <input type="checkbox" checked={autoPlay} onChange={e => setAutoPlay(e.target.checked)} />
              <span className="settings-toggle-track"><span className="settings-toggle-thumb" /></span>
            </label>
          </div>
          <div className="settings-row">
            <span className="settings-label">Preview Quality</span>
            <select className="settings-select" value={previewQuality} onChange={e => setPreviewQuality(e.target.value)}>
              <option value="high">High</option>
              <option value="medium">Medium</option>
              <option value="low">Low</option>
            </select>
          </div>
          <div className="settings-row">
            <span className="settings-label">Default Speed: {defaultSpeed}x</span>
            <input className="settings-range" type="range" min="0.25" max="4" step="0.25"
              value={defaultSpeed} onChange={e => setDefaultSpeed(+e.target.value)} />
          </div>
        </section>

        <section className="settings-card settings-card--full">
          <h2 className="settings-card-title">Import Custom CSS</h2>
          <p className="settings-hint">Paste a CSS block containing one or more @keyframes rules to add custom animations to your library.</p>
          <textarea
            className="settings-textarea"
            placeholder="@keyframes myAnimation { from { ... } to { ... } }"
            value={importCss}
            onChange={e => setImportCss(e.target.value)}
            rows={8}
          />
          <button className="btn btn-primary" onClick={handleImport} disabled={!importCss.trim()}>Import Animations</button>
        </section>
      </div>
    </div>
  )
}
