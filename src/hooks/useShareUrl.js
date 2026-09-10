import { useCallback } from 'react'
import { useLocation } from 'react-router-dom'
import useStore from '../store/useStore.js'

export function useShareUrl() {
  const location = useLocation()
  const { pushNotification } = useStore()

  const copyCurrentUrl = useCallback(async () => {
    const url = window.location.href
    try {
      await navigator.clipboard.writeText(url)
      pushNotification('Link copied to clipboard', 'success')
    } catch {
      pushNotification('Failed to copy link', 'error')
    }
    return url
  }, [location, pushNotification])

  const buildAnimationUrl = useCallback((slug, variant = null, speed = null) => {
    const base = window.location.origin + window.location.pathname
    const params = new URLSearchParams()
    if (variant) params.set('variant', variant)
    if (speed) params.set('speed', speed)
    const qs = params.toString()
    return `${base}#/animation/${slug}${qs ? '?' + qs : ''}`
  }, [])

  const buildCompareUrl = useCallback((slugs) => {
    return `${window.location.origin}${window.location.pathname}#/compare?slugs=${slugs.join(',')}`
  }, [])

  const buildPlaylistShareUrl = useCallback((playlist) => {
    const encoded = btoa(JSON.stringify({ name: playlist.name, items: playlist.items }))
    return `${window.location.origin}${window.location.pathname}#/playlists/share?data=${encoded}`
  }, [])

  const copyText = useCallback(async (text) => {
    try {
      await navigator.clipboard.writeText(text)
      pushNotification('Copied to clipboard', 'success')
    } catch {
      pushNotification('Failed to copy', 'error')
    }
  }, [pushNotification])

  return { copyCurrentUrl, buildAnimationUrl, buildCompareUrl, buildPlaylistShareUrl, copyText }
}
