import { useState, useCallback } from 'react'
import { nanoid } from 'nanoid'
import AnimationCard from '../components/AnimationCard.jsx'
import AnimationDetailModal from '../components/AnimationDetailModal.jsx'
import useStore from '../store/useStore.js'
import './Playlists.css'

export default function Playlists() {
  const { playlists, createPlaylist, deletePlaylist, renamePlaylist, getAnimationById, pushNotification } = useStore()
  const [selected, setSelected] = useState(null)
  const [newName, setNewName] = useState('')
  const [activePlaylist, setActivePlaylist] = useState(null)
  const [editingId, setEditingId] = useState(null)
  const [editName, setEditName] = useState('')

  const handleCreate = useCallback(() => {
    if (!newName.trim()) return
    createPlaylist(newName.trim())
    setNewName('')
    pushNotification(`Playlist "${newName.trim()}" created`, 'success')
  }, [newName, createPlaylist, pushNotification])

  const handleDelete = useCallback((id) => {
    const pl = playlists.find(p => p.id === id)
    deletePlaylist(id)
    if (activePlaylist?.id === id) setActivePlaylist(null)
    pushNotification(`Playlist "${pl?.name}" deleted`, 'info')
  }, [playlists, deletePlaylist, activePlaylist, pushNotification])

  const handleRenameSubmit = useCallback((id) => {
    if (!editName.trim()) return
    renamePlaylist(id, editName.trim())
    setEditingId(null)
    setEditName('')
  }, [editName, renamePlaylist])

  const viewPlaylist = playlists.find(p => p.id === activePlaylist?.id)
  const viewAnims = (viewPlaylist?.items || []).map(id => getAnimationById(id)).filter(Boolean)

  return (
    <div className="playlists-page">
      <div className="page-header">
        <h1 className="page-title">Playlists</h1>
        <span className="page-count">{playlists.length} playlists</span>
      </div>

      <div className="playlists-layout">
        <aside className="playlists-sidebar">
          <div className="playlists-create">
            <input
              className="playlists-input"
              type="text"
              placeholder="New playlist name…"
              value={newName}
              onChange={e => setNewName(e.target.value)}
              onKeyDown={e => e.key === 'Enter' && handleCreate()}
              aria-label="New playlist name"
            />
            <button className="btn btn-primary btn-sm" onClick={handleCreate}>Create</button>
          </div>

          <div className="playlists-list">
            {playlists.length === 0 && (
              <p className="playlists-empty-msg">No playlists yet.</p>
            )}
            {playlists.map(pl => (
              <div
                key={pl.id}
                className={`playlists-item ${activePlaylist?.id === pl.id ? 'playlists-item--active' : ''}`}
                onClick={() => setActivePlaylist(pl)}
                tabIndex={0}
                onKeyDown={e => e.key === 'Enter' && setActivePlaylist(pl)}
                role="button"
                aria-selected={activePlaylist?.id === pl.id}
              >
                {editingId === pl.id ? (
                  <input
                    className="playlists-edit-input"
                    value={editName}
                    onChange={e => setEditName(e.target.value)}
                    onKeyDown={e => {
                      if (e.key === 'Enter') handleRenameSubmit(pl.id)
                      if (e.key === 'Escape') setEditingId(null)
                    }}
                    onClick={e => e.stopPropagation()}
                    autoFocus
                    aria-label="Rename playlist"
                  />
                ) : (
                  <>
                    <span className="playlists-item-name">{pl.name}</span>
                    <span className="playlists-item-count">{pl.items.length}</span>
                  </>
                )}
                <div className="playlists-item-actions" onClick={e => e.stopPropagation()}>
                  <button
                    className="icon-btn-xs"
                    onClick={() => { setEditingId(pl.id); setEditName(pl.name) }}
                    aria-label="Rename playlist"
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
                      <path d="M2 8.5L7.5 3l1.5 1.5L3.5 10H2V8.5z" stroke="currentColor" strokeWidth="1" fill="none"/>
                      <path d="M7.5 3l1.5-1.5 1.5 1.5-1.5 1.5L7.5 3z" stroke="currentColor" strokeWidth="1" fill="none"/>
                    </svg>
                  </button>
                  <button
                    className="icon-btn-xs icon-btn-xs--danger"
                    onClick={() => handleDelete(pl.id)}
                    aria-label="Delete playlist"
                  >
                    <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
                      <path d="M2 3h8M5 3V2h2v1M4 3v6h4V3H4z" stroke="currentColor" strokeWidth="1" strokeLinecap="round" fill="none"/>
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </aside>

        <main className="playlists-content">
          {!activePlaylist ? (
            <div className="empty-state">
              <svg width="64" height="64" viewBox="0 0 64 64" aria-hidden="true">
                <rect x="8" y="12" width="48" height="6" rx="3" fill="currentColor" opacity="0.3"/>
                <rect x="8" y="24" width="40" height="6" rx="3" fill="currentColor" opacity="0.3"/>
                <rect x="8" y="36" width="36" height="6" rx="3" fill="currentColor" opacity="0.3"/>
              </svg>
              <p>Select a playlist to view its animations.</p>
            </div>
          ) : viewAnims.length === 0 ? (
            <div className="empty-state">
              <p>This playlist is empty. Add animations from the Library using their action menu.</p>
            </div>
          ) : (
            <>
              <div className="page-header">
                <h2 className="page-title" style={{ fontSize: '1.3rem' }}>{viewPlaylist.name}</h2>
                <span className="page-count">{viewAnims.length} animations</span>
              </div>
              <div className="favorites-grid">
                {viewAnims.map(anim => (
                  <AnimationCard key={anim.id} animation={anim} onOpen={setSelected} />
                ))}
              </div>
            </>
          )}
        </main>
      </div>

      {selected && <AnimationDetailModal animation={selected} onClose={() => setSelected(null)} />}
    </div>
  )
}
