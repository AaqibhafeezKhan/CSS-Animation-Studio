import { useEffect } from 'react'
import { CATEGORIES, TRIGGER_TYPES } from '../constants/categories.js'
import useStore from '../store/useStore.js'
import './FilterPanel.css'

export default function FilterPanel({ id, mobileOpen = false, onClose, collapsed = false }) {
  const {
    activeCategories, toggleCategory,
    activeTags, toggleTag, getAllTags,
    activeTrigger, setTrigger,
    sort, setSort,
    performanceRange, setPerformanceRange,
    complexityRange, setComplexityRange,
    hasJs, setHasJs,
    computeFiltered, filtered, animations,
  } = useStore()

  useEffect(() => { computeFiltered() }, [
    activeCategories, activeTags, activeTrigger, sort,
    performanceRange, complexityRange, hasJs, computeFiltered
  ])

  const allTags = getAllTags()
  const activeSomething = activeCategories.length > 0 || activeTags.length > 0 || activeTrigger !== 'all' || hasJs || performanceRange[0] !== 1 || performanceRange[1] !== 10 || complexityRange[0] !== 1 || complexityRange[1] !== 5 || sort !== 'newest'
  const reset = () => {
    activeCategories.forEach(c => toggleCategory(c))
    activeTags.forEach(t => toggleTag(t))
    setTrigger('all')
    setHasJs(false)
    setPerformanceRange([1, 10])
    setComplexityRange([1, 5])
    setSort('newest')
  }

  if (collapsed) return null

  const handleMinRange = (value, range, setter) => setter([Math.min(value, range[1]), range[1]])
  const handleMaxRange = (value, range, setter) => setter([range[0], Math.max(value, range[0])])

  return (
    <aside id={id} className={`filter-panel ${mobileOpen ? 'filter-panel--mobile-open' : ''}`} aria-label="Animation filters">
      <div className="filter-panel__header">
        <span className="filter-panel__title">Filters</span>
        <span className="filter-panel__count">{filtered.length}/{animations.length}</span>
        {onClose && mobileOpen && (
          <button className="filter-panel__close" onClick={onClose} aria-label="Close filters">×</button>
        )}
        {activeSomething && (
          <button className="filter-panel__reset" onClick={reset} aria-label="Reset filters">
            Reset
          </button>
        )}
      </div>

      <div className="filter-panel__section">
        <h3 className="filter-panel__section-title">Sort By</h3>
        <div className="filter-panel__sort-grid">
          {[
            { value: 'newest', label: 'Newest' },
            { value: 'oldest', label: 'Oldest' },
            { value: 'name-az', label: 'A–Z' },
            { value: 'name-za', label: 'Z–A' },
            { value: 'performance', label: 'Performance' },
            { value: 'complexity', label: 'Complexity' },
          ].map(s => (
            <button
              key={s.value}
              className={`filter-panel__sort-btn ${sort === s.value ? 'filter-panel__sort-btn--active' : ''}`}
              onClick={() => setSort(s.value)}
            >
              {s.label}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-panel__section">
        <h3 className="filter-panel__section-title">Category</h3>
        <div className="filter-panel__chip-group">
          {CATEGORIES.map(cat => (
            <button
              key={cat.id}
              className={`filter-panel__chip ${activeCategories.includes(cat.id) ? 'filter-panel__chip--active' : ''}`}
              onClick={() => toggleCategory(cat.id)}
              style={{ '--chip-color': cat.color }}
              aria-pressed={activeCategories.includes(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-panel__section">
        <h3 className="filter-panel__section-title">Trigger Type</h3>
        <div className="filter-panel__chip-group">
          {['all', ...TRIGGER_TYPES].map(t => (
            <button
              key={t}
              className={`filter-panel__chip ${activeTrigger === t ? 'filter-panel__chip--active' : ''}`}
              onClick={() => setTrigger(t)}
              aria-pressed={activeTrigger === t}
            >
              {t}
            </button>
          ))}
        </div>
      </div>

      <div className="filter-panel__section">
        <h3 className="filter-panel__section-title">
          Performance
          <span className="filter-panel__range-val">{performanceRange[0]}–{performanceRange[1]}</span>
        </h3>
        <div className="filter-panel__range-two">
          <input
            type="range" min="1" max="10" step="1"
            value={performanceRange[0]}
            onChange={e => handleMinRange(+e.target.value, performanceRange, setPerformanceRange)}
            aria-label="Minimum performance score"
            className="filter-panel__range-input"
          />
          <input
            type="range" min="1" max="10" step="1"
            value={performanceRange[1]}
            onChange={e => handleMaxRange(+e.target.value, performanceRange, setPerformanceRange)}
            aria-label="Maximum performance score"
            className="filter-panel__range-input"
          />
        </div>
      </div>

      <div className="filter-panel__section">
        <h3 className="filter-panel__section-title">
          Complexity
          <span className="filter-panel__range-val">{complexityRange[0]}–{complexityRange[1]}</span>
        </h3>
        <div className="filter-panel__range-two">
          <input
            type="range" min="1" max="5" step="1"
            value={complexityRange[0]}
            onChange={e => handleMinRange(+e.target.value, complexityRange, setComplexityRange)}
            aria-label="Minimum complexity"
            className="filter-panel__range-input"
          />
          <input
            type="range" min="1" max="5" step="1"
            value={complexityRange[1]}
            onChange={e => handleMaxRange(+e.target.value, complexityRange, setComplexityRange)}
            aria-label="Maximum complexity"
            className="filter-panel__range-input"
          />
        </div>
      </div>

      <div className="filter-panel__section">
        <h3 className="filter-panel__section-title">Options</h3>
        <label className="filter-panel__toggle-label">
          <input
            type="checkbox"
            className="filter-panel__checkbox"
            checked={hasJs}
            onChange={e => setHasJs(e.target.checked)}
          />
          <span className="filter-panel__toggle-track">
            <span className="filter-panel__toggle-thumb" />
          </span>
          JS required
        </label>
      </div>

      <div className="filter-panel__section">
        <h3 className="filter-panel__section-title">Tags</h3>
        <div className="filter-panel__tag-cloud">
          {allTags.slice(0, 30).map(tag => (
            <button
              key={tag}
              className={`filter-panel__tag ${activeTags.includes(tag) ? 'filter-panel__tag--active' : ''}`}
              onClick={() => toggleTag(tag)}
              aria-pressed={activeTags.includes(tag)}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>
    </aside>
  )
}
