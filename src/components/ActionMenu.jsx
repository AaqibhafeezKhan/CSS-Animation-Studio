import { useState, useRef, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import useStore from '../store/useStore.js'
import './ActionMenu.css'

export default function ActionMenu({ animation, onCompare, onStagger, stagger }) {
  const [open, setOpen] = useState(false)
  const menuRef = useRef(null)
  const navigate = useNavigate()
  const { playlists, addToPlaylist, pushNotification } = useStore()

  const toggle = useCallback((e) => {
    e.stopPropagation()
    setOpen(o => !o)
  }, [])

  const handleAddToPlaylist = useCallback((e, playlistId) => {
    e.stopPropagation()
    addToPlaylist(playlistId, animation.id)
    const pl = playlists.find(p => p.id === playlistId)
    pushNotification(`Added to "${pl?.name}"`, 'success')
    setOpen(false)
  }, [animation.id, addToPlaylist, playlists, pushNotification])

  const handleViewDetails = useCallback((e) => {
    e.stopPropagation()
    navigate(`/animation/${animation.slug}`)
    setOpen(false)
  }, [animation.slug, navigate])

  return (
    <div className="action-menu" ref={menuRef} data-no-card-click>
      <button
        className="action-menu__trigger"
        onClick={toggle}
        aria-label="More actions"
        aria-haspopup="true"
        aria-expanded={open}
      >
        <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
          <circle cx="8" cy="3" r="1.5" fill="currentColor"/>
          <circle cx="8" cy="8" r="1.5" fill="currentColor"/>
          <circle cx="8" cy="13" r="1.5" fill="currentColor"/>
        </svg>
      </button>

      {open && (
        <div className="action-menu__dropdown" role="menu">
          <button className="action-menu__item" onClick={handleViewDetails} role="menuitem">
            <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
              <path d="M7 1.5C4 1.5 1.5 7 1.5 7S4 12.5 7 12.5 12.5 7 12.5 7 10 1.5 7 1.5z" stroke="currentColor" strokeWidth="1.2" fill="none"/>
              <circle cx="7" cy="7" r="1.8" fill="currentColor"/>
            </svg>
            Open Detail Page
          </button>

          <button className="action-menu__item" onClick={(e) => { e.stopPropagation(); onCompare?.(); setOpen(false) }} role="menuitem">
            <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
              <rect x="1" y="3" width="5" height="8" rx="1" stroke="currentColor" strokeWidth="1.2" fill="none"/>
              <rect x="8" y="3" width="5" height="8" rx="1" stroke="currentColor" strokeWidth="1.2" fill="none"/>
            </svg>
            Add to Compare
          </button>

          <button className="action-menu__item" onClick={(e) => { e.stopPropagation(); onStagger?.(); setOpen(false) }} role="menuitem">
            <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
              <rect x="1" y="2" width="3" height="10" rx="1" fill="currentColor" opacity="0.4"/>
              <rect x="5.5" y="4" width="3" height="8" rx="1" fill="currentColor" opacity="0.7"/>
              <rect x="10" y="6" width="3" height="6" rx="1" fill="currentColor"/>
            </svg>
            {stagger ? 'Single Preview' : 'Stagger Preview'}
          </button>

          {playlists.length > 0 && (
            <div className="action-menu__submenu-parent" role="none">
              <button className="action-menu__item" role="menuitem">
                <svg width="14" height="14" viewBox="0 0 14 14" aria-hidden="true">
                  <path d="M2 4h10M2 7h8M2 10h6" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
                  <circle cx="11" cy="10" r="2" fill="none" stroke="currentColor" strokeWidth="1.2"/>
                  <path d="M11 9v2M10 10h2" stroke="currentColor" strokeWidth="1"/>
                </svg>
                Add to Playlist
              </button>
              <div className="action-menu__submenu">
                {playlists.map(pl => (
                  <button
                    key={pl.id}
                    className="action-menu__item action-menu__item--sub"
                    onClick={(e) => handleAddToPlaylist(e, pl.id)}
                    role="menuitem"
                  >
                    {pl.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
