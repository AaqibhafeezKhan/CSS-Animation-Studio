import { useEffect, useState, useCallback } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import PreviewIframe from '../components/PreviewIframe.jsx'
import CodePanel from '../components/CodePanel.jsx'
import FavoriteButton from '../components/FavoriteButton.jsx'
import AnimationCard from '../components/AnimationCard.jsx'
import AnimationDetailModal from '../components/AnimationDetailModal.jsx'
import { analyzeAnimation, getSuggestions, TIERS } from '../utils/performanceTier.js'
import { similarAnimations } from '../utils/fuzzyIndex.js'
import useStore from '../store/useStore.js'
import { useShareUrl } from '../hooks/useShareUrl.js'
import './AnimationDetail.css'

export default function AnimationDetail() {
  const { slug } = useParams()
  const navigate = useNavigate()
  const { getAnimationBySlug, animations, customAnimations, addToHistory, recordView, pushNotification } = useStore()
  const { copyText, buildAnimationUrl } = useShareUrl()

  const animation = getAnimationBySlug(slug)
  const [speed, setSpeed] = useState(1)
  const [variant, setVariant] = useState(null)
  const [selected, setSelected] = useState(null)

  const all = [...animations, ...customAnimations]
  const similar = animation ? similarAnimations(animation, all, 4) : []

  useEffect(() => {
    if (!animation) return
    addToHistory(animation.id)
    recordView(animation.id)
  }, [animation?.id, addToHistory, recordView])

  if (!animation) {
    return (
      <div className="animation-detail-page">
        <div className="empty-state">
          <p>Animation not found.</p>
          <button className="btn btn-primary" onClick={() => navigate('/')}>Back to Library</button>
        </div>
      </div>
    )
  }

  const analysis = analyzeAnimation(animation.animatedProperties)
  const suggestions = getSuggestions(animation.animatedProperties)
  const TIER_COLORS = { [TIERS.COMPOSITE]: 'var(--accent)', [TIERS.PAINT]: 'hsl(47,100%,65%)', [TIERS.LAYOUT]: 'hsl(0,80%,65%)' }

  const handleShare = async () => {
    const url = buildAnimationUrl(animation.slug)
    await copyText(url)
  }

  return (
    <div className="animation-detail-page">
      <button className="anim-detail-back btn btn-ghost" onClick={() => navigate(-1)}>
        <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
          <path d="M9 2L4 7l5 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" fill="none"/>
        </svg>
        Back
      </button>

      <div className="anim-detail-header">
        <div className="anim-detail-title-row">
          <h1 className="anim-detail-title">{animation.name}</h1>
          <span className="badge badge-primary">{animation.category}</span>
        </div>
        <div className="anim-detail-header-actions">
          <FavoriteButton animationId={animation.id} />
          <button className="icon-btn" onClick={handleShare} aria-label="Share">
            <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
              <circle cx="13" cy="3" r="2" stroke="currentColor" strokeWidth="1.3" fill="none"/>
              <circle cx="3" cy="8" r="2" stroke="currentColor" strokeWidth="1.3" fill="none"/>
              <circle cx="13" cy="13" r="2" stroke="currentColor" strokeWidth="1.3" fill="none"/>
              <path d="M5 7l6-3M5 9l6 3" stroke="currentColor" strokeWidth="1.3"/>
            </svg>
          </button>
        </div>
      </div>

      <p className="anim-detail-description">{animation.longDescription}</p>
      <div className="anim-detail-tags">
        {animation.tags.map(t => <span key={t} className="tag">{t}</span>)}
      </div>

      <div className="anim-detail-layout">
        <div className="anim-detail-left">
          <div className="anim-detail-preview-wrap">
            <PreviewIframe animation={animation} variant={variant} speed={speed} />

            {animation.variants?.length > 0 && (
              <div className="anim-detail-variants">
                <button className={`anim-detail-variant-btn ${!variant ? 'anim-detail-variant-btn--active' : ''}`} onClick={() => setVariant(null)}>Default</button>
                {animation.variants.map(v => (
                  <button key={v.name} className={`anim-detail-variant-btn ${variant === v.name ? 'anim-detail-variant-btn--active' : ''}`} onClick={() => setVariant(v.name)}>
                    {v.name}
                  </button>
                ))}
              </div>
            )}

            <div className="anim-detail-speed">
              <span>Speed: {speed}x</span>
              <input type="range" min="0.25" max="4" step="0.25" value={speed} onChange={e => setSpeed(+e.target.value)} className="settings-range" />
            </div>
          </div>

          <div className="anim-detail-meta-card">
            <div className="anim-detail-meta-grid">
              <div className="anim-detail-meta-item">
                <span className="anim-detail-meta-label">Performance</span>
                <div className="detail-modal__perf-bar"><div className="detail-modal__perf-fill" style={{ width: `${animation.performanceScore * 10}%` }} /></div>
                <span className="anim-detail-meta-val">{animation.performanceScore}/10</span>
              </div>
              <div className="anim-detail-meta-item">
                <span className="anim-detail-meta-label">Complexity</span>
                <div className="detail-modal__dots">
                  {Array.from({ length: 5 }, (_, i) => <span key={i} className={`detail-modal__dot ${i < animation.complexityScore ? 'detail-modal__dot--on' : ''}`} />)}
                </div>
              </div>
              <div className="anim-detail-meta-item">
                <span className="anim-detail-meta-label">Trigger</span>
                <span className="badge badge-secondary">{animation.triggerType}</span>
              </div>
              <div className="anim-detail-meta-item">
                <span className="anim-detail-meta-label">JS Required</span>
                <span className={`badge ${animation.js ? 'badge-warning' : 'badge-success'}`}>{animation.js ? 'Yes' : 'No'}</span>
              </div>
            </div>

            <div className="anim-detail-props">
              <span className="detail-modal__props-label">Animated Properties</span>
              <div className="detail-modal__props-list">
                {analysis.map(({ property, tier }) => (
                  <span key={property} className="detail-modal__prop-badge" style={{ '--prop-color': TIER_COLORS[tier] }}>{property}</span>
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
        </div>

        <div className="anim-detail-right">
          <CodePanel animation={animation} variant={variant} />
        </div>
      </div>

      {similar.length > 0 && (
        <section className="anim-detail-similar">
          <h2 className="anim-detail-similar-title">Similar Animations</h2>
          <div className="favorites-grid">
            {similar.map(a => (
              <AnimationCard key={a.id} animation={a} onOpen={setSelected} />
            ))}
          </div>
        </section>
      )}

      {selected && <AnimationDetailModal animation={selected} onClose={() => setSelected(null)} />}
    </div>
  )
}
