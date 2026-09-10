import { useEffect, useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { SHORTCUTS } from '../constants/shortcuts.js'
import useStore from '../store/useStore.js'

export function useKeyboardShortcuts({ onClose, onPlayPause, onNext, onPrev, hoveredId } = {}) {
  const navigate = useNavigate()
  const { layout, setLayout, toggleFavorite, pushNotification, isFavorite, getAnimationById } = useStore()

  const LAYOUTS = ['comfortable', 'compact', 'list']

  const handler = useCallback((e) => {
    const tag = document.activeElement.tagName.toLowerCase()
    const isEditing = ['input', 'textarea', 'select'].includes(tag) || document.activeElement.isContentEditable

    if (e.key === 'Escape') {
      if (onClose) onClose()
      return
    }

    if ((e.key === '/' || (e.ctrlKey && e.key === 'k'))) {
      e.preventDefault()
      const searchInput = document.getElementById('global-search-input')
      if (searchInput) searchInput.focus()
      return
    }

    if (isEditing) return

    if (e.key === '?') {
      e.preventDefault()
      const overlay = document.getElementById('keyboard-shortcut-overlay-trigger')
      if (overlay) overlay.click()
      return
    }

    if (e.key === 'G' || e.key === 'g') {
      const current = LAYOUTS.indexOf(layout)
      const next = LAYOUTS[(current + 1) % LAYOUTS.length]
      setLayout(next)
      return
    }

    if (e.key === 'B' || e.key === 'b') { navigate('/builder'); return }
    if (e.key === 'P' || e.key === 'p') { navigate('/playlists'); return }

    if (e.key === 'F' || e.key === 'f') {
      if (hoveredId) {
        toggleFavorite(hoveredId)
        const anim = getAnimationById(hoveredId)
        pushNotification(
          isFavorite(hoveredId) ? `Removed "${anim?.name}" from favorites` : `Added "${anim?.name}" to favorites`,
          'success'
        )
      }
      return
    }

    if (e.key === 'S' || e.key === 's') {
      const sortBtn = document.getElementById('sort-dropdown-trigger')
      if (sortBtn) sortBtn.click()
      return
    }

    if (e.key === 'ArrowLeft' && onPrev) { onPrev(); return }
    if (e.key === 'ArrowRight' && onNext) { onNext(); return }
    if (e.key === ' ' && onPlayPause) { e.preventDefault(); onPlayPause(); return }

    if (e.key === 'C' || e.key === 'c') {
      const copyBtn = document.querySelector('[data-action="copy-css"]')
      if (copyBtn) copyBtn.click()
      return
    }

    if (e.key === 'D' || e.key === 'd') {
      const downloadBtn = document.querySelector('[data-action="download"]')
      if (downloadBtn) downloadBtn.click()
      return
    }
  }, [layout, setLayout, navigate, toggleFavorite, pushNotification, isFavorite, getAnimationById, hoveredId, onClose, onPlayPause, onNext, onPrev])

  useEffect(() => {
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [handler])
}
