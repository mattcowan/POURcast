import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// All progress lives in localStorage with no backend copy, so ask the browser
// to exempt this origin from automatic storage eviction. Best-effort: browsers
// may ignore it (Safari) or grant it silently based on engagement (Chrome).
if (navigator.storage?.persist) {
  navigator.storage.persist().catch(() => {})
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
