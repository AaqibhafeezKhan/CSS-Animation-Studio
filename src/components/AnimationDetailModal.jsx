import { useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import PreviewIframe from './PreviewIframe.jsx'
import CodePanel from './CodePanel.jsx'
import FavoriteButton from './FavoriteButton.jsx'
import { analyzeAnimation, getSuggestions, TIERS } from '../utils/performanceTier.js'
import useStore from '../store/useStore.js'
import { useShareUrl } from '../hooks/useShareUrl.js'
import './AnimationDetailModal.css'

export default function AnimationDetailModal({ animation, onClose }) {
  const navigate = useNavigate()
  const { addToHistory, recordView, pushNotification } = useStore()
  const { buildAnimationUrl, copyText } = useShareUrl()
  const analysis = analyzeAnimation(animation.animatedProperties)
  const suggestions = getSuggestions(animation.animatedProperties)

  useEffect(() => {
    addToHistory(animation.id)
    recordView(animation.id)
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [animation.id, addToHistory, recordView])

  const handleBackdropClick = useCallback((e) => {
    if (e.target === e.currentTarget) onClose()
  }, [onClose])

  const handleShare = useCallback(async () => {
    const url = buildAnimationUrl(animation.slug)
    await copyText(url)
  }, [animation.slug, buildAnimationUrl, copyText])

  const handleNavigateToDetail = useCallback(() => {
    onClose()
    navigate(`/animation/${animation.slug}`)
  }, [onClose, navigate, animation.slug])

  const TIER_COLORS = { [TIERS.COMPOSITE]: 'var(--accent)', [TIERS.PAINT]: 'hsl(47,100%,65%)', [TIERS.LAYOUT]: 'hsl(0,80%,65%)' }

  return (
    <div className="detail-modal-backdrop" onClick={handleBackdropClick} role="dialog" aria-modal="true" aria-label={`${animation.name} animation details`}>
      <div className="detail-modal">
        <div className="detail-modal__header">
          <div className="detail-modal__title-row">
            <h2 className="detail-modal__title">{animation.name}</h2>
            <span className="detail-modal__category badge badge-primary">{animation.category}</span>
          </div>
          <div className="detail-modal__header-actions">
            <FavoriteButton animationId={animation.id} />
            <button className="icon-btn" onClick={handleShare} aria-label="Share animation">
              <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                <circle cx="13" cy="3" r="2" stroke="currentColor" strokeWidth="1.3" fill="none"/>
                <circle cx="3" cy="8" r="2" stroke="currentColor" strokeWidth="1.3" fill="none"/>
                <circle cx="13" cy="13" r="2" stroke="currentColor" strokeWidth="1.3" fill="none"/>
                <path d="M5 7l6-3M5 9l6 3" stroke="currentColor" strokeWidth="1.3"/>
              </svg>
            </button>
            <button className="icon-btn" onClick={handleNavigateToDetail} aria-label="Open full page">
              <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M7 2H2v12h12V9" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" fill="none"/>
                <path d="M10 2h4v4M14 2l-7 7" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" fill="none"/>
              </svg>
            </button>
            <button className="icon-btn" onClick={onClose} aria-label="Close">
              <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
                <path d="M3 3l10 10M13 3L3 13" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="detail-modal__body">
          <div className="detail-modal__preview-col">
            <PreviewIframe animation={animation} />

            <div className="detail-modal__meta-grid">
              <div className="detail-modal__meta-item">
                <span className="detail-modal__meta-label">Performance</span>
                <div className="detail-modal__perf-bar">
                  <div className="detail-modal__perf-fill" style={{ width: `${animation.performanceScore * 10}%` }} />
                </div>
                <span className="detail-modal__meta-val">{animation.performanceScore}/10</span>
              </div>
              <div className="detail-modal__meta-item">
                <span className="detail-modal__meta-label">Complexity</span>
                <div className="detail-modal__dots">
                  {Array.from({ length: 5 }, (_, i) => (
                    <span key={i} className={`detail-modal__dot ${i < animation.complexityScore ? 'detail-modal__dot--on' : ''}`} />
                  ))}
                </div>
              </div>
              <div className="detail-modal__meta-item">
                <span className="detail-modal__meta-label">Trigger</span>
                <span className="badge badge-secondary">{animation.triggerType}</span>
              </div>
              <div className="detail-modal__meta-item">
                <span className="detail-modal__meta-label">JS Required</span>
                <span className={`badge ${animation.js ? 'badge-warning' : 'badge-success'}`}>{animation.js ? 'Yes' : 'No'}</span>
              </div>
            </div>

            <div className="detail-modal__props">
              <span className="detail-modal__props-label">Animated Properties</span>
              <div className="detail-modal__props-list">
                {analysis.map(({ property, tier }) => (
                  <span
                    key={property}
                    className="detail-modal__prop-badge"
                    style={{ '--prop-color': TIER_COLORS[tier] }}
                    title={`Tier: ${tier}`}
                  >
                    {property}
                  </span>
                ))}
              </div>
            </div>

            {suggestions.length > 0 && (
              <div className="detail-modal__suggestions">
                <span className="detail-modal__suggestions-title">Performance Tips</span>
                {suggestions.map(s => (
                  <div key={s.property} className="detail-modal__suggestion">
                    <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
                      <path d="M6 1L1 10h10L6 1z" fill="none" stroke="hsl(47,100%,65%)" strokeWidth="1.2" strokeLinejoin="round"/>
                      <path d="M6 5v2M6 8.5v.5" stroke="hsl(47,100%,65%)" strokeWidth="1.2" strokeLinecap="round"/>
                    </svg>
                    {s.message}
                  </div>
                ))}
              </div>
            )}

            <div className="detail-modal__browser">
              <span className="detail-modal__props-label">Browser Support</span>
              {Object.entries(animation.browserSupport).map(([browser, version]) => (
                <div key={browser} className="detail-modal__browser-row">
                  <span className="detail-modal__browser-name">{browser}</span>
                  <span className="detail-modal__browser-ver">{version}+</span>
                </div>
              ))}
            </div>
          </div>

          <div className="detail-modal__code-col">
            <p className="detail-modal__description">{animation.longDescription}</p>
            <div className="detail-modal__tags">
              {animation.tags.map(t => (
                <span key={t} className="tag">{t}</span>
              ))}
            </div>
            <CodePanel animation={animation} />
          </div>
        </div>
      </div>
    </div>
  )
}
