import { useRef, useEffect } from 'react'
import { Chart, registerables } from 'chart.js'
import useStore from '../store/useStore.js'
import { CATEGORIES } from '../constants/categories.js'
import './Analytics.css'

Chart.register(...registerables)

function useChart(ref, config, deps) {
  useEffect(() => {
    if (!ref.current) return
    const chart = new Chart(ref.current, config)
    return () => chart.destroy()
  }, deps)
}

export default function Analytics() {
  const { viewCounts, copyEvents, downloadEvents, sessions, getTopViewed, getCopyEventsByDay, getCopyTabDistribution, getTotalSessionTime, clearAnalytics, pushNotification } = useStore()

  const topViewed = getTopViewed(8)
  const copyByDay = getCopyEventsByDay(14)
  const tabDist = getCopyTabDistribution()
  const totalMs = getTotalSessionTime()
  const totalMins = Math.round(totalMs / 60000)

  const barRef = useRef(null)
  const lineRef = useRef(null)
  const donutRef = useRef(null)

  const dayLabels = Object.keys(copyByDay).reverse()
  const dayCounts = dayLabels.map(d => copyByDay[d])

  useChart(barRef, {
    type: 'bar',
    data: {
      labels: topViewed.map(e => e.animation.name),
      datasets: [{
        label: 'Views',
        data: topViewed.map(e => e.count),
        backgroundColor: 'hsla(251,100%,69%,0.7)',
        borderColor: 'hsl(251,100%,69%)',
        borderWidth: 1,
        borderRadius: 6,
      }],
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { grid: { color: 'hsla(220,20%,50%,0.15)' }, ticks: { color: 'hsl(220,20%,65%)' } },
        y: { grid: { color: 'hsla(220,20%,50%,0.15)' }, ticks: { color: 'hsl(220,20%,65%)', stepSize: 1 }, beginAtZero: true },
      },
    },
  }, [topViewed.length])

  useChart(lineRef, {
    type: 'line',
    data: {
      labels: dayLabels,
      datasets: [{
        label: 'Copies',
        data: dayCounts,
        borderColor: 'hsl(170,80%,50%)',
        backgroundColor: 'hsla(170,80%,50%,0.1)',
        fill: true,
        tension: 0.4,
        pointRadius: 4,
        pointBackgroundColor: 'hsl(170,80%,50%)',
      }],
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { display: false } },
      scales: {
        x: { grid: { color: 'hsla(220,20%,50%,0.15)' }, ticks: { color: 'hsl(220,20%,65%)' } },
        y: { grid: { color: 'hsla(220,20%,50%,0.15)' }, ticks: { color: 'hsl(220,20%,65%)', stepSize: 1 }, beginAtZero: true },
      },
    },
  }, [copyByDay])

  const tabLabels = Object.keys(tabDist)
  const tabCounts = tabLabels.map(t => tabDist[t])
  const tabColors = ['hsl(251,100%,69%)', 'hsl(330,100%,71%)', 'hsl(170,80%,50%)', 'hsl(47,100%,65%)']

  useChart(donutRef, {
    type: 'doughnut',
    data: {
      labels: tabLabels,
      datasets: [{
        data: tabCounts,
        backgroundColor: tabColors.slice(0, tabLabels.length),
        borderWidth: 2,
        borderColor: 'hsl(235,22%,11%)',
      }],
    },
    options: {
      responsive: true, maintainAspectRatio: false,
      plugins: { legend: { position: 'right', labels: { color: 'hsl(220,20%,65%)', padding: 16 } } },
    },
  }, [tabDist])

  const stats = [
    { label: 'Total Views', value: Object.values(viewCounts).reduce((a, b) => a + b, 0) },
    { label: 'Total Copies', value: copyEvents.length },
    { label: 'Downloads', value: downloadEvents.length },
    { label: 'Session Time', value: `${totalMins}m` },
    { label: 'Sessions', value: sessions.length },
    { label: 'Unique Viewed', value: Object.keys(viewCounts).length },
  ]

  const handleClear = () => {
    clearAnalytics()
    pushNotification('Analytics cleared', 'info')
  }

  return (
    <div className="analytics-page">
      <div className="page-header">
        <h1 className="page-title">Analytics Dashboard</h1>
        <button className="btn btn-ghost" onClick={handleClear}>Clear Data</button>
      </div>

      <div className="analytics-stats-grid">
        {stats.map(s => (
          <div key={s.label} className="analytics-stat-card">
            <span className="analytics-stat-val">{s.value}</span>
            <span className="analytics-stat-label">{s.label}</span>
          </div>
        ))}
      </div>

      <div className="analytics-charts-grid">
        <div className="analytics-chart-card analytics-chart-card--wide">
          <h3 className="analytics-chart-title">Top Viewed Animations</h3>
          {topViewed.length === 0 ? (
            <p className="analytics-empty">No view data yet. Start exploring the Library.</p>
          ) : (
            <div className="analytics-chart-container">
              <canvas ref={barRef} />
            </div>
          )}
        </div>

        <div className="analytics-chart-card analytics-chart-card--wide">
          <h3 className="analytics-chart-title">Copies Per Day (Last 14 Days)</h3>
          {copyEvents.length === 0 ? (
            <p className="analytics-empty">No copy events yet.</p>
          ) : (
            <div className="analytics-chart-container">
              <canvas ref={lineRef} />
            </div>
          )}
        </div>

        <div className="analytics-chart-card">
          <h3 className="analytics-chart-title">Copy Tab Distribution</h3>
          {tabLabels.length === 0 ? (
            <p className="analytics-empty">No tab data yet.</p>
          ) : (
            <div className="analytics-chart-container">
              <canvas ref={donutRef} />
            </div>
          )}
        </div>

        <div className="analytics-chart-card">
          <h3 className="analytics-chart-title">Views by Category</h3>
          <div className="analytics-category-list">
            {CATEGORIES.map(cat => {
              const catAnims = Object.keys(viewCounts).filter(id => {
                const a = useStore.getState().getAnimationById(id)
                return a?.category === cat.id
              })
              const total = catAnims.reduce((sum, id) => sum + (viewCounts[id] || 0), 0)
              const max = Math.max(...CATEGORIES.map(c => {
                const ids = Object.keys(viewCounts).filter(id => useStore.getState().getAnimationById(id)?.category === c.id)
                return ids.reduce((s, id) => s + (viewCounts[id] || 0), 0)
              }), 1)
              return (
                <div key={cat.id} className="analytics-cat-row">
                  <span className="analytics-cat-label">{cat.label}</span>
                  <div className="analytics-cat-bar-track">
                    <div className="analytics-cat-bar-fill" style={{ width: `${(total / max) * 100}%`, background: cat.color }} />
                  </div>
                  <span className="analytics-cat-count">{total}</span>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}
