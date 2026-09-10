import { useState, useEffect, useRef, useCallback } from 'react'

const CARD_HEIGHT = 320
const BUFFER = 2

export function useVirtualGrid(items, columns = 3) {
  const containerRef = useRef(null)
  const frameRef = useRef(null)
  const [visibleRange, setVisibleRange] = useState({ start: 0, end: Math.min(items.length, 60) })
  const rowHeight = CARD_HEIGHT + 24

  const updateRange = useCallback(() => {
    if (frameRef.current !== null) return

    frameRef.current = window.requestAnimationFrame(() => {
      frameRef.current = null
      const container = containerRef.current
      if (!container) return

      const scrollTop = Math.max(0, window.scrollY - container.offsetTop)
      const viewportHeight = window.innerHeight
      const firstVisibleRow = Math.max(0, Math.floor(scrollTop / rowHeight) - BUFFER)
      const visibleRows = Math.ceil(viewportHeight / rowHeight) + BUFFER * 2
      const start = firstVisibleRow * columns
      const end = Math.min(items.length, (firstVisibleRow + visibleRows) * columns)

      setVisibleRange(prev => {
        if (prev.start === start && prev.end === end) return prev
        return { start, end }
      })
    })
  }, [items.length, columns, rowHeight])

  useEffect(() => {
    setVisibleRange({ start: 0, end: Math.min(items.length, 60) })
    updateRange()
  }, [items.length, columns, updateRange])

  useEffect(() => {
    window.addEventListener('scroll', updateRange, { passive: true })
    window.addEventListener('resize', updateRange, { passive: true })
    return () => {
      window.removeEventListener('scroll', updateRange)
      window.removeEventListener('resize', updateRange)
      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current)
        frameRef.current = null
      }
    }
  }, [updateRange])

  const totalHeight = Math.ceil(items.length / columns) * rowHeight
  const offsetTop = Math.floor(visibleRange.start / columns) * rowHeight
  const visibleItems = items.slice(visibleRange.start, visibleRange.end)

  return { containerRef, visibleItems, totalHeight, offsetTop, visibleRange }
}
