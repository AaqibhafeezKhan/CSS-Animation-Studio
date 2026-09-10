import Fuse from 'fuse.js'

let fuseInstance = null
let animationData = []

self.onmessage = (event) => {
  const { type, payload } = event.data

  if (type === 'INIT') {
    animationData = payload.animations
    fuseInstance = new Fuse(animationData, {
      keys: [
        { name: 'name', weight: 0.4 },
        { name: 'tags', weight: 0.3 },
        { name: 'description', weight: 0.2 },
        { name: 'category', weight: 0.1 },
      ],
      threshold: 0.35,
      includeScore: true,
    })
    self.postMessage({ type: 'INIT_DONE' })
    return
  }

  if (type === 'SEARCH') {
    if (!fuseInstance) {
      self.postMessage({ type: 'SEARCH_RESULT', payload: { results: [], query: payload.query } })
      return
    }
    const results = payload.query
      ? fuseInstance.search(payload.query).map(r => r.item)
      : animationData
    self.postMessage({ type: 'SEARCH_RESULT', payload: { results, query: payload.query } })
    return
  }

  if (type === 'UPDATE_ANIMATIONS') {
    animationData = payload.animations
    fuseInstance = new Fuse(animationData, {
      keys: [
        { name: 'name', weight: 0.4 },
        { name: 'tags', weight: 0.3 },
        { name: 'description', weight: 0.2 },
        { name: 'category', weight: 0.1 },
      ],
      threshold: 0.35,
      includeScore: true,
    })
    self.postMessage({ type: 'UPDATE_DONE' })
    return
  }
}
