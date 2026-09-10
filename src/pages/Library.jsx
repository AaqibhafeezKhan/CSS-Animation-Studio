import { useState, useCallback, useEffect, useRef } from 'react'
import { useSearchParams } from 'react-router-dom'
import { shallow } from 'zustand/shallow'
import AnimationCard from '../components/AnimationCard.jsx'
import AnimationDetailModal from '../components/AnimationDetailModal.jsx'
import FilterPanel from '../components/FilterPanel.jsx'
import useStore from '../store/useStore.js'
import { useKeyboardShortcuts } from '../hooks/useKeyboardShortcuts.js'
import { useVirtualGrid } from '../hooks/useVirtualGrid.js'
import './Library.css'

const LAYOUT_COLS = { comfortable: 3, compact: 4, list: 1 }

const parseRange = (value, fallback, max) => {
  if (!value) return fallback
  const parts = value.split(',').map(Number)
  if (parts.length !== 2 || parts.some(Number.isNaN)) return fallback
  const min = Math.max(1, Math.min(parts[0], parts[1], max))
  const maxValue = Math.max(min, Math.min(Math.max(parts[0], parts[1]), max))
  return [min, maxValue]
}

export default function Library() {
  const [searchParams, setSearchParams] = useSearchParams()
  const {
    filtered, layout, computeFiltered,
    search, setSearch,
    activeCategories, toggleCategory,
    activeTags, toggleTag,
    activeTrigger, setTrigger,
    performanceRange, setPerformanceRange,
    complexityRange, setComplexityRange,
    hasJs, setHasJs,
    sort, setSort,
    activeBrowserFilter, setBrowserFilter,
    initFuse,
  } = useStore(state => ({
    filtered: state.filtered,
    layout: state.layout,
    computeFiltered: state.computeFiltered,
    search: state.search,
    setSearch: state.setSearch,
    activeCategories: state.activeCategories,
    toggleCategory: state.toggleCategory,
    activeTags: state.activeTags,
    toggleTag: state.toggleTag,
    activeTrigger: state.activeTrigger,
    setTrigger: state.setTrigger,
    performanceRange: state.performanceRange,
    setPerformanceRange: state.setPerformanceRange,
    complexityRange: state.complexityRange,
    setComplexityRange: state.setComplexityRange,
    hasJs: state.hasJs,
    setHasJs: state.setHasJs,
    sort: state.sort,
    setSort: state.setSort,
    activeBrowserFilter: state.activeBrowserFilter,
    setBrowserFilter: state.setBrowserFilter,
    initFuse: state.initFuse,
  }), shallow)
  const [selected, setSelected] = useState(null)
  const [hoveredId, setHoveredId] = useState(null)
  const [filtersOpen, setFiltersOpen] = useState(false)
  const initializedFromUrl = useRef(false)

  useEffect(() => {
    initFuse()
    computeFiltered()
  }, [initFuse, computeFiltered])

  useEffect(() => {
    if (!initializedFromUrl.current) {
      const categories = (searchParams.get('category') || '').split(',').filter(Boolean)
      const tags = (searchParams.get('tag') || '').split(',').filter(Boolean)
      categories.forEach(toggleCategory)
      tags.forEach(toggleTag)
      setSearch(searchParams.get('q') || '')
      setTrigger(searchParams.get('trigger') || 'all')
      setPerformanceRange(parseRange(searchParams.get('performance'), [1, 10], 10))
      setComplexityRange(parseRange(searchParams.get('complexity'), [1, 5], 5))
      setHasJs(searchParams.get('js') === '1')
      setSort(searchParams.get('sort') || 'newest')
      initializedFromUrl.current = true
      return
    }

    const next = new URLSearchParams()
    if (search) next.set('q', search)
    if (activeCategories.length) next.set('category', activeCategories.join(','))
    if (activeTags.length) next.set('tag', activeTags.join(','))
    if (activeTrigger !== 'all') next.set('trigger', activeTrigger)
    if (performanceRange[0] !== 1 || performanceRange[1] !== 10) next.set('performance', performanceRange.join(','))
    if (complexityRange[0] !== 1 || complexityRange[1] !== 5) next.set('complexity', complexityRange.join(','))
    if (hasJs) next.set('js', '1')
    if (sort !== 'newest') next.set('sort', sort)
    if (next.toString() !== searchParams.toString()) setSearchParams(next, { replace: true })
  }, [
    searchParams, setSearchParams, search, setSearch,
    activeCategories, toggleCategory, activeTags, toggleTag,
    activeTrigger, setTrigger, performanceRange, setPerformanceRange,
    complexityRange, setComplexityRange, hasJs, setHasJs, sort, setSort,
  ])

  useEffect(() => {
    if (!filtersOpen) return undefined
    const handleKeyDown = e => {
      if (e.key === 'Escape') setFiltersOpen(false)
    }
    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [filtersOpen])

  const cols = LAYOUT_COLS[layout] || 3
  const { containerRef, visibleItems, totalHeight, offsetTop } = useVirtualGrid(filtered, cols)

  const handleOpen = useCallback((anim) => setSelected(anim), [])
  const handleClose = useCallback(() => setSelected(null), [])

  const clearFilters = useCallback(() => {
    activeCategories.forEach(toggleCategory)
    activeTags.forEach(toggleTag)
    Object.keys(activeBrowserFilter).forEach(browser => setBrowserFilter(browser, null))
    setSearch('')
    setTrigger('all')
    setPerformanceRange([1, 10])
    setComplexityRange([1, 5])
    setHasJs(false)
    setSort('newest')
  }, [activeCategories, toggleCategory, activeTags, toggleTag, activeBrowserFilter, setBrowserFilter, setSearch, setTrigger, setPerformanceRange, setComplexityRange, setHasJs, setSort])

  useKeyboardShortcuts({
    onClose: handleClose,
    hoveredId,
  })

  return (
    <div className="library-page">
      <button
        className="library-filter-mobile-button btn btn-ghost"
        onClick={() => setFiltersOpen(true)}
        aria-expanded={filtersOpen}
        aria-controls="library-filter-panel"
      >
        Filters
      </button>
      {filtersOpen && <button className="library-filter-backdrop" onClick={() => setFiltersOpen(false)} aria-label="Close filters" />}
      <FilterPanel id="library-filter-panel" mobileOpen={filtersOpen} onClose={() => setFiltersOpen(false)} />

      <main className="library-main">
        <div className="library-toolbar">
          <h1 className="library-heading">Animation Library</h1>
          <span className="library-count">{filtered.length} animations</span>
        </div>

        {filtered.length === 0 ? (
          <div className="library-empty">
            <svg width="64" height="64" viewBox="0 0 64 64" aria-hidden="true">
              <circle cx="32" cy="32" r="28" stroke="currentColor" strokeWidth="2" fill="none" opacity="0.3"/>
              <path d="M20 32h24M32 20v24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" opacity="0.3"/>
            </svg>
            <p>No animations match your current filters.</p>
            <button className="btn btn-primary" onClick={clearFilters}>
              Clear Filters
            </button>
          </div>
        ) : (
          <div ref={containerRef} className="library-virtual-container" style={{ height: totalHeight }}>
            <div
              className={`library-grid library-grid--${layout}`}
              style={{ transform: `translateY(${offsetTop}px)` }}
            >
              {visibleItems.map(anim => (
                <AnimationCard
                  key={anim.id}
                  animation={anim}
                  onOpen={handleOpen}
                  onHover={setHoveredId}
                />
              ))}
            </div>
          </div>
        )}
      </main>

      {selected && (
        <AnimationDetailModal animation={selected} onClose={handleClose} />
      )}
    </div>
  )
}
