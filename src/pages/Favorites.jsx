import { useState } from 'react'
import AnimationCard from '../components/AnimationCard.jsx'
import AnimationDetailModal from '../components/AnimationDetailModal.jsx'
import useStore from '../store/useStore.js'
import './Favorites.css'

export default function Favorites() {
  const { getFavoriteAnimations } = useStore()
  const [selected, setSelected] = useState(null)
  const favorites = getFavoriteAnimations()

  return (
    <div className="favorites-page">
      <div className="page-header">
        <h1 className="page-title">Favorites</h1>
        <span className="page-count">{favorites.length} saved</span>
      </div>

      {favorites.length === 0 ? (
        <div className="empty-state">
          <svg width="64" height="64" viewBox="0 0 64 64" aria-hidden="true">
            <path d="M32 54.35l-3.63-3.29C14.6 39.29 5 30.2 5 19.75 5 10.55 12.1 3.5 21.25 3.5c4.87 0 9.54 2.28 12.75 5.88C37.21 5.78 41.88 3.5 46.75 3.5 55.9 3.5 63 10.55 63 19.75c0 10.45-9.6 19.54-23.37 31.31L32 54.35z" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3"/>
          </svg>
          <p>No favorites yet. Click the heart on any animation to save it here.</p>
        </div>
      ) : (
        <div className="favorites-grid">
          {favorites.map(anim => (
            <AnimationCard
              key={anim.id}
              animation={anim}
              onOpen={setSelected}
            />
          ))}
        </div>
      )}

      {selected && <AnimationDetailModal animation={selected} onClose={() => setSelected(null)} />}
    </div>
  )
}
