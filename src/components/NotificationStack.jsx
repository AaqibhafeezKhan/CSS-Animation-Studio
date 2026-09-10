import { useEffect } from 'react'
import useStore from '../store/useStore.js'
import './NotificationStack.css'

export default function NotificationStack() {
  const { notifications, dismissNotification } = useStore()

  useEffect(() => {
    notifications.forEach(n => {
      const timer = setTimeout(() => dismissNotification(n.id), n.duration || 4000)
      return () => clearTimeout(timer)
    })
  }, [notifications, dismissNotification])

  if (notifications.length === 0) return null

  return (
    <div className="notification-stack" aria-live="polite" aria-label="Notifications">
      {notifications.map(n => (
        <div key={n.id} className={`notification notification--${n.type}`} role="alert">
          <div className="notification__icon" aria-hidden="true">
            {n.type === 'success' && (
              <svg width="16" height="16" viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M5 8l2.5 2.5L11 5.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
              </svg>
            )}
            {n.type === 'error' && (
              <svg width="16" height="16" viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M5.5 5.5l5 5M10.5 5.5l-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" fill="none"/>
              </svg>
            )}
            {n.type === 'warning' && (
              <svg width="16" height="16" viewBox="0 0 16 16">
                <path d="M8 1.5L14.5 13.5H1.5L8 1.5z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
                <path d="M8 6v3.5M8 11v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
            )}
            {n.type === 'info' && (
              <svg width="16" height="16" viewBox="0 0 16 16">
                <circle cx="8" cy="8" r="7" fill="none" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M8 7v4.5M8 5v.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
              </svg>
            )}
          </div>
          <span className="notification__message">{n.message}</span>
          <button
            className="notification__dismiss"
            onClick={() => dismissNotification(n.id)}
            aria-label="Dismiss"
          >
            <svg width="12" height="12" viewBox="0 0 12 12" aria-hidden="true">
              <path d="M2 2l8 8M10 2l-8 8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
      ))}
    </div>
  )
}
