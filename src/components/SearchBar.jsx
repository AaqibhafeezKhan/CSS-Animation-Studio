import { useId, useEffect, useRef } from 'react'
import useStore from '../store/useStore.js'
import { useDebounce } from '../hooks/useDebounce.js'
import './SearchBar.css'

export default function SearchBar() {
  const inputId = useId()
  const inputRef = useRef(null)
  const { search, setSearch, computeFiltered, filtered, animations } = useStore()
  const debounced = useDebounce(search, 120)

  useEffect(() => {
    computeFiltered()
  }, [debounced, computeFiltered])

  const handleClear = () => {
    setSearch('')
    inputRef.current?.focus()
  }

  return (
    <div className="search-bar" role="search">
      <label htmlFor={inputId} className="sr-only">Search animations</label>
      <div className="search-bar__inner">
        <svg className="search-bar__icon" width="16" height="16" viewBox="0 0 16 16" aria-hidden="true">
          <circle cx="6.5" cy="6.5" r="4" stroke="currentColor" strokeWidth="1.5" fill="none"/>
          <path d="M11 11l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>

        <input
          ref={inputRef}
          id={inputId}
          className="search-bar__input"
          type="search"
          placeholder="Search 60 animations…"
          value={search}
          onChange={e => setSearch(e.target.value)}
          aria-label="Search animations"
          autoComplete="off"
          spellCheck={false}
        />

        {search && (
          <button
            className="search-bar__clear"
            onClick={handleClear}
            aria-label="Clear search"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
              <path d="M2 2l8 8M10 2l-8 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          </button>
        )}
      </div>

      {search && (
        <div className="search-bar__count" aria-live="polite" aria-atomic="true">
          {filtered.length} of {animations.length}
        </div>
      )}
    </div>
  )
}
