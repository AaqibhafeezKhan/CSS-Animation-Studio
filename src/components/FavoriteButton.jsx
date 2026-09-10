import { useCallback } from 'react'
import useStore from '../store/useStore.js'
import './FavoriteButton.css'

export default function FavoriteButton({ animationId, size = 'md' }) {
  const { isFavorite, toggleFavorite, pushNotification, getAnimationById } = useStore()
  const active = isFavorite(animationId)

  const handleClick = useCallback((e) => {
    e.stopPropagation()
    toggleFavorite(animationId)
    const anim = getAnimationById(animationId)
    pushNotification(
      active ? `Removed "${anim?.name}" from favorites` : `Added "${anim?.name}" to favorites`,
      active ? 'info' : 'success'
    )
  }, [animationId, toggleFavorite, pushNotification, getAnimationById, active])

  const iconSize = size === 'sm' ? 14 : 18

  return (
    <button
      className={`favorite-btn favorite-btn--${size} ${active ? 'favorite-btn--active' : ''}`}
      onClick={handleClick}
      aria-label={active ? 'Remove from favorites' : 'Add to favorites'}
      aria-pressed={active}
    >
      <svg width={iconSize} height={iconSize} viewBox="0 0 24 24" aria-hidden="true">
        <path
          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          fill={active ? 'var(--secondary)' : 'none'}
          stroke={active ? 'var(--secondary)' : 'currentColor'}
          strokeWidth="2"
        />
      </svg>
    </button>
  )
}
