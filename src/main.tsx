import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import '@styles/global.scss'
import App from './App.tsx'
import {  HashRouter } from 'react-router-dom'

createRoot(document.getElementById('root')!).render(
  // For production wrap <BrowserRouter> with <StrictMode>
  <HashRouter>
    <App />
  </HashRouter>
)
