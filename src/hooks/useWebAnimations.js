import { useRef, useCallback, useEffect } from 'react'

export function useWebAnimations(iframeRef) {
  const animationsRef = useRef([])

  const getAnimations = useCallback(() => {
    try {
      const doc = iframeRef.current?.contentDocument
      if (!doc) return []
      const anims = doc.getAnimations ? doc.getAnimations() : []
      animationsRef.current = anims
      return anims
    } catch {
      return []
    }
  }, [iframeRef])

  const play = useCallback(() => {
    getAnimations().forEach(a => { try { a.play() } catch {} })
  }, [getAnimations])

  const pause = useCallback(() => {
    getAnimations().forEach(a => { try { a.pause() } catch {} })
  }, [getAnimations])

  const restart = useCallback(() => {
    getAnimations().forEach(a => {
      try { a.currentTime = 0; a.play() } catch {}
    })
  }, [getAnimations])

  const setSpeed = useCallback((rate) => {
    getAnimations().forEach(a => { try { a.playbackRate = rate } catch {} })
  }, [getAnimations])

  const stepForward = useCallback((ms = 16.67) => {
    const anims = getAnimations()
    anims.forEach(a => {
      try {
        a.pause()
        a.currentTime = (a.currentTime || 0) + ms
      } catch {}
    })
  }, [getAnimations])

  const stepBackward = useCallback((ms = 16.67) => {
    const anims = getAnimations()
    anims.forEach(a => {
      try {
        a.pause()
        a.currentTime = Math.max(0, (a.currentTime || 0) - ms)
      } catch {}
    })
  }, [getAnimations])

  const updateStyles = useCallback((css) => {
    try {
      const doc = iframeRef.current?.contentDocument
      if (!doc) return
      let styleEl = doc.getElementById('dynamic-override')
      if (!styleEl) {
        styleEl = doc.createElement('style')
        styleEl.id = 'dynamic-override'
        doc.head.appendChild(styleEl)
      }
      styleEl.textContent = css
    } catch {}
  }, [iframeRef])

  return { play, pause, restart, setSpeed, stepForward, stepBackward, updateStyles, getAnimations }
}
