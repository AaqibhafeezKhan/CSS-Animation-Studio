import { useEffect } from 'react'
import { SHORTCUTS } from '../constants/shortcuts.js'
import './ShortcutHelp.css'

export default function ShortcutHelp({ open, onClose }) {
  useEffect(() => {
    if (!open) return undefined
    const handleKeyDown = e => {
      if (e.key === 'Escape') onClose()
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [open, onClose])

  if (!open) return null

  return (
    <div className="shortcut-help" role="presentation">
      <button className="shortcut-help__backdrop" onClick={onClose} aria-label="Close keyboard shortcuts" />
      <section className="shortcut-help__dialog" role="dialog" aria-modal="true" aria-labelledby="shortcut-help-title">
        <div className="shortcut-help__header">
          <h2 id="shortcut-help-title">Keyboard Shortcuts</h2>
          <button className="shortcut-help__close" onClick={onClose} aria-label="Close keyboard shortcuts">×</button>
        </div>
        <div className="shortcut-help__content">
          {SHORTCUTS.map(group => (
            <section key={group.category} className="shortcut-help__group">
              <h3>{group.category}</h3>
              {group.items.map(item => (
                <div key={`${group.category}-${item.action}`} className="shortcut-help__row">
                  <span className="shortcut-help__description">{item.description}</span>
                  <span className="shortcut-help__keys">
                    {item.keys.map(key => <kbd key={key}>{key}</kbd>)}
                  </span>
                </div>
              ))}
            </section>
          ))}
        </div>
      </section>
    </div>
  )
}
