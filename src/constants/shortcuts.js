export const SHORTCUTS = [
  {
    category: 'Global',
    items: [
      { keys: ['Escape'], description: 'Close modal or exit slideshow', action: 'close' },
      { keys: ['/'], description: 'Focus search bar', action: 'focusSearch' },
      { keys: ['Ctrl', 'K'], description: 'Focus search bar', action: 'focusSearch' },
      { keys: ['?'], description: 'Open keyboard shortcut reference', action: 'openShortcuts' },
      { keys: ['G'], description: 'Cycle layout mode', action: 'cycleLayout' },
      { keys: ['S'], description: 'Open sort dropdown', action: 'openSort' },
    ]
  },
  {
    category: 'Navigation',
    items: [
      { keys: ['B'], description: 'Go to Builder', action: 'goBuilder' },
      { keys: ['P'], description: 'Go to Playlists', action: 'goPlaylists' },
      { keys: ['ArrowLeft'], description: 'Previous animation in modal or slideshow', action: 'prev' },
      { keys: ['ArrowRight'], description: 'Next animation in modal or slideshow', action: 'next' },
    ]
  },
  {
    category: 'Animation',
    items: [
      { keys: ['F'], description: 'Toggle favorite on hovered card', action: 'toggleFavorite' },
      { keys: ['C'], description: 'Copy CSS of hovered or open animation', action: 'copyCss' },
      { keys: ['D'], description: 'Download full-page HTML of open animation', action: 'download' },
      { keys: ['Space'], description: 'Play or pause in modal or slideshow', action: 'playPause' },
      { keys: ['+'], description: 'Increase playback speed', action: 'speedUp' },
      { keys: ['-'], description: 'Decrease playback speed', action: 'speedDown' },
    ]
  }
]
