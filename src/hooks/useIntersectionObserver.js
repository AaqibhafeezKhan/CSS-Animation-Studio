import { useEffect, useRef, useState } from 'react'

export function useIntersectionObserver(options = {}) {
  const ref = useRef(null)
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [hasIntersected, setHasIntersected] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting)
      if (entry.isIntersecting) setHasIntersected(true)
    }, {
      threshold: options.threshold ?? 0.1,
      rootMargin: options.rootMargin ?? '0px',
      root: options.root ?? null,
    })

    observer.observe(el)
    return () => observer.disconnect()
  }, [options.threshold, options.rootMargin])

  return { ref, isIntersecting, hasIntersected }
}
