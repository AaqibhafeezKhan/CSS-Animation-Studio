import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'
import { immer } from 'zustand/middleware/immer'
import { nanoid } from 'nanoid'
import Fuse from 'fuse.js'
import ALL_ANIMATIONS from '../animations/index.js'

const STORE_VERSION = 1

const createAnimationsSlice = (set, get) => ({
  animations: ALL_ANIMATIONS,
  customAnimations: [],
  filtered: ALL_ANIMATIONS,
  search: '',
  activeCategories: [],
  activeTags: [],
  activeBrowserFilter: {},
  activeTrigger: 'all',
  complexityRange: [1, 5],
  performanceRange: [1, 10],
  hasJs: false,
  sort: 'newest',
  layout: 'comfortable',
  customOrder: [],
  reorderMode: false,
  fuseIndex: null,

  initFuse: () => {
    const all = [...ALL_ANIMATIONS, ...get().customAnimations]
    const index = new Fuse(all, {
      keys: [
        { name: 'name', weight: 0.4 },
        { name: 'tags', weight: 0.3 },
        { name: 'description', weight: 0.2 },
        { name: 'category', weight: 0.1 },
      ],
      threshold: 0.35,
      includeScore: true,
    })
    set(state => { state.fuseIndex = index })
  },

  setSearch: (q) => set(state => { state.search = q }),
  toggleCategory: (cat) => set(state => {
    const idx = state.activeCategories.indexOf(cat)
    if (idx === -1) state.activeCategories.push(cat)
    else state.activeCategories.splice(idx, 1)
  }),
  toggleTag: (tag) => set(state => {
    const idx = state.activeTags.indexOf(tag)
    if (idx === -1) state.activeTags.push(tag)
    else state.activeTags.splice(idx, 1)
  }),
  setBrowserFilter: (browser, version) => set(state => {
    if (version === null) delete state.activeBrowserFilter[browser]
    else state.activeBrowserFilter[browser] = version
  }),
  setTrigger: (t) => set(state => { state.activeTrigger = t }),
  setComplexityRange: (r) => set(state => { state.complexityRange = r }),
  setPerformanceRange: (r) => set(state => { state.performanceRange = r }),
  setHasJs: (v) => set(state => { state.hasJs = v }),
  setSort: (s) => set(state => { state.sort = s }),
  setLayout: (l) => set(state => { state.layout = l }),
  setReorderMode: (v) => set(state => { state.reorderMode = v }),
  setCustomOrder: (ids) => set(state => { state.customOrder = ids }),

  addCustomAnimation: (anim) => set(state => {
    state.customAnimations.push(anim)
  }),

  computeFiltered: () => {
    const {
      search, activeCategories, activeTags, activeBrowserFilter,
      activeTrigger, complexityRange, performanceRange, hasJs,
      sort, customOrder, fuseIndex, customAnimations
    } = get()

    const all = [...ALL_ANIMATIONS, ...customAnimations]

    let result = all
    if (search && fuseIndex) {
      result = fuseIndex.search(search).map(r => r.item)
    }

    result = result.filter(a => {
      if (activeCategories.length && !activeCategories.includes(a.category)) return false
      if (activeTags.length && !activeTags.some(t => a.tags.includes(t))) return false
      if (activeTrigger !== 'all' && a.triggerType !== activeTrigger) return false
      if (a.complexityScore < complexityRange[0] || a.complexityScore > complexityRange[1]) return false
      if (a.performanceScore < performanceRange[0] || a.performanceScore > performanceRange[1]) return false
      if (hasJs && a.js === null) return false
      for (const [browser, minVer] of Object.entries(activeBrowserFilter)) {
        if ((a.browserSupport[browser] || 999) > minVer) return false
      }
      return true
    })

    if (!search) {
      result = [...result].sort((a, b) => {
        if (sort === 'name-az') return a.name.localeCompare(b.name)
        if (sort === 'name-za') return b.name.localeCompare(a.name)
        if (sort === 'oldest') return new Date(a.addedAt) - new Date(b.addedAt)
        if (sort === 'performance') return b.performanceScore - a.performanceScore
        if (sort === 'complexity') return b.complexityScore - a.complexityScore
        return new Date(b.addedAt) - new Date(a.addedAt)
      })

      if (customOrder.length) {
        const orderMap = Object.fromEntries(customOrder.map((id, i) => [id, i]))
        result = [...result].sort((a, b) => {
          const ai = orderMap[a.id] ?? Infinity
          const bi = orderMap[b.id] ?? Infinity
          return ai - bi
        })
      }
    }

    set(state => { state.filtered = result })
  },

  getAllTags: () => {
    const all = [...ALL_ANIMATIONS, ...get().customAnimations]
    return [...new Set(all.flatMap(a => a.tags))].sort()
  },

  getAnimationById: (id) => {
    const all = [...ALL_ANIMATIONS, ...get().customAnimations]
    return all.find(a => a.id === id) || null
  },

  getAnimationBySlug: (slug) => {
    const all = [...ALL_ANIMATIONS, ...get().customAnimations]
    return all.find(a => a.slug === slug) || null
  },
})

const createFavoritesSlice = (set, get) => ({
  favorites: [],
  toggleFavorite: (id) => set(state => {
    const idx = state.favorites.indexOf(id)
    if (idx === -1) state.favorites.push(id)
    else state.favorites.splice(idx, 1)
  }),
  isFavorite: (id) => get().favorites.includes(id),
  getFavoriteAnimations: () => {
    const { favorites, getAnimationById } = get()
    return favorites.map(id => getAnimationById(id)).filter(Boolean)
  },
})

const createHistorySlice = (set, get) => ({
  history: [],
  addToHistory: (id) => set(state => {
    state.history = state.history.filter(h => h.id !== id)
    state.history.unshift({ id, timestamp: new Date().toISOString() })
    if (state.history.length > 30) state.history = state.history.slice(0, 30)
  }),
  clearHistory: () => set(state => { state.history = [] }),
  getHistoryAnimations: () => {
    const { history, getAnimationById } = get()
    return history.map(h => ({ ...h, animation: getAnimationById(h.id) })).filter(h => h.animation)
  },
})

const createCompareSlice = (set) => ({
  compareList: [],
  addToCompare: (id) => set(state => {
    if (state.compareList.length < 4 && !state.compareList.includes(id)) {
      state.compareList.push(id)
    }
  }),
  removeFromCompare: (id) => set(state => {
    state.compareList = state.compareList.filter(i => i !== id)
  }),
  clearCompare: () => set(state => { state.compareList = [] }),
  isInCompare: (id) => (state) => state.compareList.includes(id),
})

const createPlaylistSlice = (set) => ({
  playlists: [],
  createPlaylist: (name) => set(state => {
    state.playlists.push({ id: nanoid(), name, items: [], createdAt: new Date().toISOString() })
  }),
  deletePlaylist: (id) => set(state => {
    state.playlists = state.playlists.filter(p => p.id !== id)
  }),
  renamePlaylist: (id, name) => set(state => {
    const p = state.playlists.find(p => p.id === id)
    if (p) p.name = name
  }),
  addToPlaylist: (playlistId, animId) => set(state => {
    const p = state.playlists.find(p => p.id === playlistId)
    if (p && !p.items.includes(animId)) p.items.push(animId)
  }),
  removeFromPlaylist: (playlistId, animId) => set(state => {
    const p = state.playlists.find(p => p.id === playlistId)
    if (p) p.items = p.items.filter(i => i !== animId)
  }),
  reorderPlaylist: (playlistId, newItems) => set(state => {
    const p = state.playlists.find(p => p.id === playlistId)
    if (p) p.items = newItems
  }),
})

const createBuilderSlice = (set) => ({
  builderElement: 'div',
  builderWidth: 200,
  builderHeight: 120,
  builderBg: '#6c63ff',
  builderKeyframes: [
    { id: nanoid(), percentage: 0, transform: { translateX: 0, translateY: 0, translateZ: 0, rotateX: 0, rotateY: 0, rotateZ: 0, scaleX: 1, scaleY: 1, skewX: 0, skewY: 0 }, opacity: 1, backgroundColor: '', filter: { blur: 0, brightness: 100, contrast: 100, hueRotate: 0, saturate: 100 } },
    { id: nanoid(), percentage: 100, transform: { translateX: 0, translateY: -30, translateZ: 0, rotateX: 0, rotateY: 0, rotateZ: 0, scaleX: 1, scaleY: 1, skewX: 0, skewY: 0 }, opacity: 1, backgroundColor: '', filter: { blur: 0, brightness: 100, contrast: 100, hueRotate: 0, saturate: 100 } },
  ],
  builderName: 'myAnimation',
  builderDuration: 1000,
  builderEasing: 'ease-in-out',
  builderIterations: 'infinite',
  builderDirection: 'normal',
  builderDelay: 0,

  setBuilderElement: (el) => set(state => { state.builderElement = el }),
  setBuilderWidth: (w) => set(state => { state.builderWidth = w }),
  setBuilderHeight: (h) => set(state => { state.builderHeight = h }),
  setBuilderBg: (c) => set(state => { state.builderBg = c }),
  setBuilderName: (n) => set(state => { state.builderName = n }),
  setBuilderDuration: (d) => set(state => { state.builderDuration = d }),
  setBuilderEasing: (e) => set(state => { state.builderEasing = e }),
  setBuilderIterations: (i) => set(state => { state.builderIterations = i }),
  setBuilderDirection: (d) => set(state => { state.builderDirection = d }),
  setBuilderDelay: (d) => set(state => { state.builderDelay = d }),

  addKeyframeStop: () => set(state => {
    state.builderKeyframes.push({
      id: nanoid(), percentage: 50,
      transform: { translateX: 0, translateY: 0, translateZ: 0, rotateX: 0, rotateY: 0, rotateZ: 0, scaleX: 1, scaleY: 1, skewX: 0, skewY: 0 },
      opacity: 1, backgroundColor: '',
      filter: { blur: 0, brightness: 100, contrast: 100, hueRotate: 0, saturate: 100 }
    })
    state.builderKeyframes.sort((a, b) => a.percentage - b.percentage)
  }),

  removeKeyframeStop: (id) => set(state => {
    if (state.builderKeyframes.length > 2) {
      state.builderKeyframes = state.builderKeyframes.filter(kf => kf.id !== id)
    }
  }),

  updateKeyframeStop: (id, updates) => set(state => {
    const kf = state.builderKeyframes.find(kf => kf.id === id)
    if (kf) Object.assign(kf, updates)
    state.builderKeyframes.sort((a, b) => a.percentage - b.percentage)
  }),

  reorderKeyframes: (newOrder) => set(state => { state.builderKeyframes = newOrder }),

  exportBuilderCSS: () => {
    const { builderName, builderKeyframes, builderDuration, builderEasing, builderIterations, builderDirection, builderDelay } = useStore.getState()
    const stops = builderKeyframes.map(kf => {
      const t = kf.transform
      const f = kf.filter
      const transformStr = `translateX(${t.translateX}px) translateY(${t.translateY}px) translateZ(${t.translateZ}px) rotateX(${t.rotateX}deg) rotateY(${t.rotateY}deg) rotateZ(${t.rotateZ}deg) scaleX(${t.scaleX}) scaleY(${t.scaleY}) skewX(${t.skewX}deg) skewY(${t.skewY}deg)`
      const filterStr = `blur(${f.blur}px) brightness(${f.brightness}%) contrast(${f.contrast}%) hue-rotate(${f.hueRotate}deg) saturate(${f.saturate}%)`
      return `  ${kf.percentage}% {\n    transform: ${transformStr};\n    opacity: ${kf.opacity};\n    filter: ${filterStr};${kf.backgroundColor ? `\n    background-color: ${kf.backgroundColor};` : ''}\n  }`
    }).join('\n')
    return `@keyframes ${builderName} {\n${stops}\n}\n\n.${builderName}-el {\n  animation: ${builderName} ${builderDuration}ms ${builderEasing} ${builderDelay}ms ${builderIterations} ${builderDirection};\n}`
  },
})

const createThemeSlice = (set) => ({
  theme: 'dark',
  customVars: {
    '--primary-color': 'hsl(251, 100%, 69%)',
    '--secondary-color': 'hsl(330, 100%, 71%)',
    '--accent-color': 'hsl(170, 80%, 50%)',
    '--surface-color': 'hsl(235, 22%, 11%)',
    '--text-color': 'hsl(220, 20%, 95%)',
    '--border-radius-base': '10px',
    '--animation-speed-multiplier': '1',
    '--shadow-intensity': '0.6',
    '--blur-amount': '10px',
    '--global-easing': 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
  savedPresets: [],
  toggleTheme: () => set(state => {
    state.theme = state.theme === 'dark' ? 'light' : 'dark'
    if (state.theme === 'light') {
      state.customVars['--surface-color'] = 'hsl(0, 0%, 100%)'
      state.customVars['--text-color'] = 'hsl(220, 25%, 10%)'
    } else {
      state.customVars['--surface-color'] = 'hsl(235, 22%, 11%)'
      state.customVars['--text-color'] = 'hsl(220, 20%, 95%)'
    }
  }),
  setCustomVar: (key, value) => set(state => { state.customVars[key] = value }),
  resetCustomVars: () => set(state => {
    state.customVars = {
      '--primary-color': 'hsl(251, 100%, 69%)',
      '--secondary-color': 'hsl(330, 100%, 71%)',
      '--accent-color': 'hsl(170, 80%, 50%)',
      '--surface-color': state.theme === 'dark' ? 'hsl(235, 22%, 11%)' : 'hsl(0, 0%, 100%)',
      '--text-color': state.theme === 'dark' ? 'hsl(220, 20%, 95%)' : 'hsl(220, 25%, 10%)',
      '--border-radius-base': '10px',
      '--animation-speed-multiplier': '1',
      '--shadow-intensity': '0.6',
      '--blur-amount': '10px',
      '--global-easing': 'cubic-bezier(0.4, 0, 0.2, 1)',
    }
  }),
  savePreset: (name) => set(state => {
    state.savedPresets.push({ name, vars: { ...state.customVars } })
  }),
  loadPreset: (name) => set(state => {
    const preset = state.savedPresets.find(p => p.name === name)
    if (preset) state.customVars = { ...preset.vars }
  }),
  applyThemePreset: (presetName) => set(state => {
    const presets = {
      Default: {
        '--primary-color': 'hsl(251, 100%, 69%)',
        '--secondary-color': 'hsl(330, 100%, 71%)',
        '--accent-color': 'hsl(170, 80%, 50%)',
        '--border-radius-base': '10px',
        '--animation-speed-multiplier': '1',
        '--shadow-intensity': '0.6',
        '--blur-amount': '10px',
      },
      Neon: {
        '--primary-color': 'hsl(145, 100%, 55%)',
        '--secondary-color': 'hsl(330, 100%, 65%)',
        '--accent-color': 'hsl(60, 100%, 55%)',
        '--border-radius-base': '4px',
        '--animation-speed-multiplier': '1.2',
        '--shadow-intensity': '0.9',
        '--blur-amount': '4px',
      },
      Soft: {
        '--primary-color': 'hsl(251, 60%, 75%)',
        '--secondary-color': 'hsl(330, 60%, 75%)',
        '--accent-color': 'hsl(170, 50%, 60%)',
        '--border-radius-base': '20px',
        '--animation-speed-multiplier': '0.8',
        '--shadow-intensity': '0.3',
        '--blur-amount': '16px',
      },
      Minimal: {
        '--primary-color': 'hsl(220, 15%, 55%)',
        '--secondary-color': 'hsl(220, 10%, 70%)',
        '--accent-color': 'hsl(220, 20%, 60%)',
        '--border-radius-base': '6px',
        '--animation-speed-multiplier': '0.7',
        '--shadow-intensity': '0.2',
        '--blur-amount': '0px',
      },
      Sharp: {
        '--primary-color': 'hsl(251, 100%, 60%)',
        '--secondary-color': 'hsl(0, 100%, 60%)',
        '--accent-color': 'hsl(47, 100%, 55%)',
        '--border-radius-base': '0px',
        '--animation-speed-multiplier': '1.5',
        '--shadow-intensity': '1',
        '--blur-amount': '0px',
      },
    }
    if (presets[presetName]) {
      Object.assign(state.customVars, presets[presetName])
    }
  }),
  exportTheme: () => {
    const { customVars } = useStore.getState()
    return `:root {\n${Object.entries(customVars).map(([k, v]) => `  ${k}: ${v};`).join('\n')}\n}`
  },
})

const createAnalyticsSlice = (set, get) => ({
  viewCounts: {},
  copyEvents: [],
  downloadEvents: [],
  sessions: [],
  sessionStart: null,

  startSession: () => set(state => { state.sessionStart = new Date().toISOString() }),
  endSession: () => set(state => {
    if (state.sessionStart) {
      const duration = Date.now() - new Date(state.sessionStart).getTime()
      state.sessions.push({ start: state.sessionStart, duration })
      state.sessionStart = null
    }
  }),
  recordView: (id) => set(state => {
    state.viewCounts[id] = (state.viewCounts[id] || 0) + 1
  }),
  recordCopy: (id, tab) => set(state => {
    state.copyEvents.push({ id, tab, timestamp: new Date().toISOString() })
  }),
  recordDownload: (id) => set(state => {
    state.downloadEvents.push({ id, timestamp: new Date().toISOString() })
  }),
  clearAnalytics: () => set(state => {
    state.viewCounts = {}
    state.copyEvents = []
    state.downloadEvents = []
    state.sessions = []
  }),
  getTopViewed: (n = 10) => {
    const { viewCounts, getAnimationById } = get()
    return Object.entries(viewCounts)
      .sort((a, b) => b[1] - a[1])
      .slice(0, n)
      .map(([id, count]) => ({ animation: getAnimationById(id), count }))
      .filter(e => e.animation)
  },
  getTotalSessionTime: () => {
    return get().sessions.reduce((sum, s) => sum + s.duration, 0)
  },
  getCopyEventsByDay: (days = 14) => {
    const { copyEvents } = get()
    const result = {}
    for (let i = 0; i < days; i++) {
      const d = new Date()
      d.setDate(d.getDate() - i)
      result[d.toISOString().slice(0, 10)] = 0
    }
    copyEvents.forEach(ev => {
      const day = ev.timestamp.slice(0, 10)
      if (day in result) result[day]++
    })
    return result
  },
  getCopyTabDistribution: () => {
    const { copyEvents } = get()
    const result = {}
    copyEvents.forEach(ev => { result[ev.tab] = (result[ev.tab] || 0) + 1 })
    return result
  },
})

const createNotificationSlice = (set) => ({
  notifications: [],
  pushNotification: (message, type = 'info', duration = 4000) => set(state => {
    const id = nanoid()
    state.notifications.push({ id, message, type, duration })
  }),
  dismissNotification: (id) => set(state => {
    state.notifications = state.notifications.filter(n => n.id !== id)
  }),
})

const createSettingsSlice = (set) => ({
  reducedMotion: typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  previewQuality: 'high',
  defaultSpeed: 1,
  autoPlay: true,
  gridDensity: 1,
  fontSizeBase: 16,

  setReducedMotion: (v) => set(state => { state.reducedMotion = v }),
  setPreviewQuality: (q) => set(state => { state.previewQuality = q }),
  setDefaultSpeed: (s) => set(state => { state.defaultSpeed = s }),
  setAutoPlay: (v) => set(state => { state.autoPlay = v }),
  setGridDensity: (d) => set(state => { state.gridDensity = d }),
  setFontSizeBase: (s) => set(state => { state.fontSizeBase = s }),
})

const useStore = create(
  persist(
    immer((set, get) => ({
      ...createAnimationsSlice(set, get),
      ...createFavoritesSlice(set, get),
      ...createHistorySlice(set, get),
      ...createCompareSlice(set),
      ...createPlaylistSlice(set),
      ...createBuilderSlice(set),
      ...createThemeSlice(set),
      ...createAnalyticsSlice(set, get),
      ...createNotificationSlice(set),
      ...createSettingsSlice(set),
    })),
    {
      name: 'css-motion-master-store',
      version: STORE_VERSION,
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        favorites: state.favorites,
        history: state.history,
        compareList: state.compareList,
        playlists: state.playlists,
        theme: state.theme,
        customVars: state.customVars,
        savedPresets: state.savedPresets,
        viewCounts: state.viewCounts,
        copyEvents: state.copyEvents,
        downloadEvents: state.downloadEvents,
        sessions: state.sessions,
        sort: state.sort,
        layout: state.layout,
        customOrder: state.customOrder,
        reducedMotion: state.reducedMotion,
        previewQuality: state.previewQuality,
        defaultSpeed: state.defaultSpeed,
        autoPlay: state.autoPlay,
        gridDensity: state.gridDensity,
        fontSizeBase: state.fontSizeBase,
        customAnimations: state.customAnimations,
      }),
      migrate: (persistedState, version) => {
        if (version === 0) {
          return { ...persistedState, customAnimations: [], fontSizeBase: 16 }
        }
        return persistedState
      },
    }
  )
)

export default useStore
