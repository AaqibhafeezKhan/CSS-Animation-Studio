# CSS Animation Studio

> A production-ready React application for exploring, building, comparing, and exporting CSS animations.

CSS Animation Studio is a Progressive Web App for creative developers who want a practical library of 100 CSS animations and a visual workflow for creating their own. The studio combines a searchable animation library with previews, performance metadata, a custom keyframe builder, comparison tools, playlists, favorites, analytics, theming, CSS import/export, and offline-capable installation.

## Live App

[CSS Animation Studio](https://buildafolio.github.io/CSS-Animation-Studio/#/)

## Features

- **Animation Library** — Browse 100 curated animations with search, categories, tags, sorting, filters, and responsive layouts.
- **Animation Details** — Inspect individual animations, previews, metadata, browser support, variants, and generated CSS/HTML.
- **Visual Builder** — Create custom keyframe animations without writing the keyframes by hand. Configure name, duration, delay, easing, iterations, direction, element dimensions, keyframe stops, transforms, and opacity.
- **Custom Animation Saving** — Save Builder creations directly into the Library.
- **Compare Mode** — Compare up to four animations side by side, including previews, performance metadata, and CSS.
- **Favorites and Playlists** — Organize useful animations for later reuse.
- **Performance Analytics** — Review animation performance and complexity information through the built-in analytics view.
- **CSS Import** — Import one or more `@keyframes` blocks from existing CSS through Settings.
- **Theme Controls** — Switch themes, adjust base font size, customize animation colors and visual tokens, and apply or save presets.
- **Playback Controls** — Configure reduced motion, autoplay, preview quality, and default playback speed.
- **Keyboard Shortcuts** — Use shortcuts for search, navigation, favorites, CSS copying, downloads, and common views.
- **PWA Support** — Install the studio as a standalone application and use its cached static assets offline.
- **Vanilla CSS Output** — Exported animations use CSS and HTML rather than requiring the studio's UI framework or component library.

## Application Areas

The application exposes the following routes:

| Area | Route | Purpose |
| --- | --- | --- |
| Library | `/` | Search, filter, browse, and preview animations |
| Favorites | `/favorites` | Review saved favorite animations |
| Playlists | `/playlists` | Organize animations into playlists |
| Builder | `/builder` | Create and save custom animations |
| Compare | `/compare` | Compare up to four animations |
| Analytics | `/analytics` | Review usage and performance analytics |
| Documentation | `/docs` | In-app usage and CSS animation guidance |
| Settings | `/settings` | Theme, playback, import, and customization controls |
| Animation details | `/animation/:slug` | Inspect an individual animation |

## Technology Stack

- React 18
- Vite 5
- React Router
- Zustand with Immer
- Fuse.js for fuzzy search
- Chart.js for analytics
- Mark.js for search highlighting
- FileSaver for downloads
- dnd-kit for drag-and-drop interactions
- Marked for Markdown rendering
- Vanilla CSS
- Vitest and Testing Library for tests
- vite-plugin-pwa for Progressive Web App support

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Install

```bash
git clone https://github.com/Buildafolio/CSS-Animation-Studio.git
cd CSS-Animation-Studio
npm install
```

### Run locally

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

### Run tests

```bash
npm test
```

## Using the Builder

1. Open **Builder** from the application navigation.
2. Enter an animation name. The Builder normalizes it into a CSS-safe identifier so generated keyframes and preview selectors remain valid.
3. Configure duration, delay, easing, iterations, and direction.
4. Adjust the preview element's background, width, and height.
5. Add or select keyframe stops and configure their percentage, transforms, and opacity.
6. Review the generated CSS in the code preview.
7. Select **Save to Library** to add the custom animation to the Library.

## Importing CSS

Open **Settings → Import Custom CSS** and paste CSS containing one or more valid `@keyframes` blocks. The studio parses the animation definitions and adds them to the Library.

## Theming

The studio exposes CSS custom properties for consistent visual customization, including:

- `--primary-color`
- `--secondary-color`
- `--accent-color`
- `--animation-speed-multiplier`
- `--border-radius-base`
- `--global-easing`
- `--shadow-intensity`
- `--blur-amount`

Theme values can be changed from Settings and exported as CSS.

## Progressive Web App

The application is configured as a PWA with automatic updates and cached static assets. Supported browsers can install it as a standalone application. The deployed GitHub Pages build uses relative asset paths so the application can run from its repository path.

## Documentation

The application includes an in-app **Documentation** section covering getting started, animation categories, performance guidance, theming, the Builder, keyboard shortcuts, CSS importing, and PWA installation.

## Contributing

Keep changes focused on the existing architecture and conventions. Use the repository's existing testing and build commands when changing behaviour, and keep animation definitions consistent with the structures already used under `src/animations`.
