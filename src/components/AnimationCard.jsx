import { useState, useRef, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import PreviewIframe from './PreviewIframe.jsx'
import FavoriteButton from './FavoriteButton.jsx'
import ActionMenu from './ActionMenu.jsx'
import { CATEGORIES } from '../constants/categories.js'
import useStore from '../store/useStore.js'
import './AnimationCard.css'

export default function AnimationCard({ animation, onOpen, onHover }) {
  const navigate = useNavigate()
  const [stagger, setStagger] = useState(false)
  const cardRef = useRef(null)
  const addToCompare = useStore(state => state.addToCompare)
  const compareCount = useStore(state => state.compareList.length)
  const inCompare = useStore(state => state.compareList.includes(animation.id))
  const pushNotification = useStore(state => state.pushNotification)
  const recordView = useStore(state => state.recordView)

  const category = CATEGORIES.find(c => c.id === animation.category)

  const handleClick = useCallback((e) => {
    if (e.target.closest('[data-no-card-click]')) return
    recordView(animation.id)
    if (onOpen) onOpen(animation)
  }, [animation, onOpen, recordView])

  const handleView = useCallback((e) => {
    e.stopPropagation()
    recordView(animation.id)
    if (onOpen) onOpen(animation)
  }, [animation, onOpen, recordView])

  const handleKeyDown = useCallback((e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      handleClick(e)
    }
  }, [handleClick])

  const handleCompare = useCallback((e) => {
    e.stopPropagation()
    if (compareCount >= 4 && !inCompare) {
      pushNotification('Compare limit reached (max 4)', 'warning')
      return
    }
    addToCompare(animation.id)
    pushNotification(`Added "${animation.name}" to compare`, 'info')
  }, [animation, addToCompare, compareCount, inCompare, pushNotification])

  return (
    <article
      ref={cardRef}
      className={`animation-card ${inCompare ? 'animation-card--in-compare' : ''}`}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      onMouseEnter={() => onHover?.(animation.id)}
      onMouseLeave={() => onHover?.(null)}
      tabIndex={0}
      aria-label={`${animation.name} animation`}
      role="button"
    >
      <div className="animation-card__preview">
        <PreviewIframe animation={animation} stagger={stagger} />
        <div className="animation-card__overlay">
          <button
            className="animation-card__view-btn"
            onClick={handleView}
            data-no-card-click
            aria-label={`View ${animation.name} details`}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
              <path d="M8 3C4.5 3 1.5 8 1.5 8s3 5 6.5 5 6.5-5 6.5-5-3-5-6.5-5z" stroke="currentColor" strokeWidth="1.5" fill="none"/>
              <circle cx="8" cy="8" r="2" fill="currentColor"/>
            </svg>
            View
          </button>
        </div>
      </div>

      <div className="animation-card__body">
        <div className="animation-card__header">
          <span
            className="animation-card__category"
            style={{ '--cat-color': category?.color || 'var(--primary)' }}
          >
            {category?.label || animation.category}
          </span>
          <div className="animation-card__actions" data-no-card-click>
            <FavoriteButton animationId={animation.id} size="sm" />
            <ActionMenu animation={animation} onCompare={handleCompare} onStagger={() => setStagger(s => !s)} stagger={stagger} />
          </div>
        </div>

        <h3 className="animation-card__name">{animation.name}</h3>
        <p className="animation-card__description">{animation.description}</p>

        <div className="animation-card__meta">
          <span className="animation-card__score" title="Performance score">
            <svg width="10" height="10" viewBox="0 0 10 10" aria-hidden="true">
              <polygon points="5,1 6.2,3.8 9,4.3 6.9,6.2 7.4,9 5,7.6 2.6,9 3.1,6.2 1,4.3 3.8,3.8" fill="currentColor"/>
            </svg>
            {animation.performanceScore}/10
          </span>
          <span className="animation-card__complexity" title="Complexity score">
            {Array.from({ length: animation.complexityScore }, (_, i) => (
              <span key={i} className="animation-card__complexity-dot" aria-hidden="true" />
            ))}
          </span>
          <span className="animation-card__trigger badge badge-primary">{animation.triggerType}</span>
        </div>
      </div>
    </article>
  )
}
