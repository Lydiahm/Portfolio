import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Portfolio from './App.jsx' // <- on importe ton composant

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>,
)
