import Fuse from 'fuse.js'
import ALL_ANIMATIONS from '../animations/index.js'

let fuseInstance = null

export function getFuseIndex(customAnimations = []) {
  if (!fuseInstance) {
    const all = [...ALL_ANIMATIONS, ...customAnimations]
    fuseInstance = new Fuse(all, {
      keys: [
        { name: 'name', weight: 0.4 },
        { name: 'tags', weight: 0.3 },
        { name: 'description', weight: 0.2 },
        { name: 'category', weight: 0.1 },
      ],
      threshold: 0.35,
      includeScore: true,
    })
  }
  return fuseInstance
}

export function invalidateFuseIndex() {
  fuseInstance = null
}

export function similarAnimations(animation, allAnimations, limit = 6) {
  const fuse = new Fuse(allAnimations.filter(a => a.id !== animation.id), {
    keys: [
      { name: 'tags', weight: 0.5 },
      { name: 'category', weight: 0.4 },
      { name: 'description', weight: 0.1 },
    ],
    threshold: 0.5,
    includeScore: true,
  })

  const query = [...animation.tags, animation.category].join(' ')
  return fuse.search(query).slice(0, limit).map(r => r.item)
}
