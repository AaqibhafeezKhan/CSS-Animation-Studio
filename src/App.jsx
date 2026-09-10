import { Suspense, lazy, useEffect, useRef } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom'
import Header from './components/Header.jsx'
import NotificationStack from './components/NotificationStack.jsx'
import useStore from './store/useStore.js'
import './global.css'

const Library = lazy(() => import('./pages/Library.jsx'))
const Favorites = lazy(() => import('./pages/Favorites.jsx'))
const Playlists = lazy(() => import('./pages/Playlists.jsx'))
const Builder = lazy(() => import('./pages/Builder.jsx'))
const Compare = lazy(() => import('./pages/Compare.jsx'))
const Analytics = lazy(() => import('./pages/Analytics.jsx'))
const Docs = lazy(() => import('./pages/Docs.jsx'))
const Settings = lazy(() => import('./pages/Settings.jsx'))
const AnimationDetail = lazy(() => import('./pages/AnimationDetail.jsx'))

function PageLoader() {
  return (
    <div style={{ display:'flex', alignItems:'center', justifyContent:'center', minHeight:'60vh' }}>
      <div style={{ width:40, height:40 }}>
        <svg viewBox="0 0 32 32" width="40" height="40">
          <style>{'@keyframes sr{to{transform:rotate(360deg)}}@keyframes sd{0%{stroke-dashoffset:94}50%{stroke-dashoffset:24}100%{stroke-dashoffset:94}}.sr{animation:sr 1.5s linear infinite}.sd{animation:sd 1.5s ease-in-out infinite}'}</style>
          <g className="sr">
            <circle className="sd" cx="16" cy="16" r="12" stroke="hsl(251,100%,69%)" strokeWidth="4" fill="none" strokeLinecap="round" strokeDasharray="94" strokeDashoffset="94"/>
          </g>
        </svg>
      </div>
    </div>
  )
}

function ThemeApplier() {
  const theme = useStore(state => state.theme)
  const customVars = useStore(state => state.customVars)
  const toggleTheme = useStore(state => state.toggleTheme)
  const initialized = useRef(false)

  useEffect(() => {
    if (!initialized.current) {
      initialized.current = true
      if (theme === 'dark') toggleTheme()
    }
  }, [theme, toggleTheme])

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    const root = document.documentElement
    Object.entries(customVars).forEach(([k, v]) => root.style.setProperty(k, v))
  }, [theme, customVars])

  return null
}

export default function App() {
  const startSession = useStore(state => state.startSession)
  const endSession = useStore(state => state.endSession)
  const initFuse = useStore(state => state.initFuse)

  useEffect(() => {
    initFuse()
    startSession()
    return () => endSession()
  }, [initFuse, startSession, endSession])

  return (
    <HashRouter>
      <ThemeApplier />
      <Header />
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/" element={<Library />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/playlists" element={<Playlists />} />
          <Route path="/builder" element={<Builder />} />
          <Route path="/compare" element={<Compare />} />
          <Route path="/analytics" element={<Analytics />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/animation/:slug" element={<AnimationDetail />} />
        </Routes>
      </Suspense>
      <NotificationStack />
    </HashRouter>
  )
}
