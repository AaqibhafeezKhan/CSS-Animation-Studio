import { useRef, useEffect, useCallback } from 'react'
import { buildPreviewDoc } from '../utils/buildPreviewDoc.js'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver.js'
import useStore from '../store/useStore.js'
import './PreviewIframe.css'

export default function PreviewIframe({ animation, variant = null, stagger = false, speed = 1 }) {
  const iframeRef = useRef(null)
  const customVars = useStore(state => state.customVars)
  const previewQuality = useStore(state => state.previewQuality)
  const reducedMotion = useStore(state => state.reducedMotion)
  const { ref: wrapperRef, isIntersecting } = useIntersectionObserver({ threshold: 0.05, rootMargin: '200px' })

  const getActiveCss = useCallback(() => {
    if (variant) {
      const v = animation.variants?.find(v => v.name === variant)
      if (v) return { ...animation, css: v.css }
    }
    return animation
  }, [animation, variant])

  const controlAnimations = useCallback(() => {
    const iframe = iframeRef.current
    if (!iframe?.contentWindow) return
    iframe.contentWindow.postMessage({
      type: 'preview-animation-control',
      action: isIntersecting && !reducedMotion ? 'play' : 'pause',
    }, '*')
  }, [isIntersecting, reducedMotion])

  const inject = useCallback(() => {
    const iframe = iframeRef.current
    if (!iframe) return
    const active = getActiveCss()
    const doc = buildPreviewDoc(active, customVars, { speed, quality: previewQuality, stagger })
    iframe.srcdoc = doc
  }, [getActiveCss, customVars, speed, previewQuality, stagger])

  useEffect(() => {
    if (isIntersecting) inject()
  }, [isIntersecting, inject])

  useEffect(() => {
    controlAnimations()
  }, [controlAnimations])

  return (
    <div ref={wrapperRef} className="preview-iframe-wrapper" aria-label="Animation preview">
      <iframe
        ref={iframeRef}
        className="preview-iframe"
        title={`Preview of ${animation.name}`}
        sandbox="allow-scripts"
        loading="lazy"
        onLoad={controlAnimations}
      />
    </div>
  )
}
