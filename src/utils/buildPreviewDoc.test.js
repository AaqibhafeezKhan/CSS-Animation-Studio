import { describe, expect, it } from 'vitest'
import { buildPreviewDoc } from './buildPreviewDoc.js'

describe('buildPreviewDoc', () => {
  const animation = {
    name: 'Test animation',
    html: '<div class="box"></div>',
    css: '.box { width: 20px; height: 20px; animation: pulse 1s infinite; } @keyframes pulse { from { opacity: 0.5; } to { opacity: 1; } }',
    js: '',
  }

  it('keeps the preview iframe usable and adds external animation control', () => {
    const doc = buildPreviewDoc(animation)

    expect(doc).toContain('<div class="box"></div>')
    expect(doc).toContain('preview-animation-control')
    expect(doc).toContain('event.source !== window.parent')
    expect(doc).toContain("action === 'play'")
    expect(doc).toContain("else animation.pause()")
    expect(doc).not.toContain('Preview paused')
  })

  it('preserves animation javascript while adding the control script', () => {
    const doc = buildPreviewDoc({ ...animation, js: 'window.previewReady = true' })

    expect(doc).toContain('window.previewReady = true')
    expect(doc).toContain('preview-animation-control')
  })
})
