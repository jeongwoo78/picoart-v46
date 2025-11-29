import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './styles/App.css'

// 모바일 디버깅용 콘솔 (URL에 ?debug 붙이면 활성화)
if (window.location.search.includes('debug')) {
  import('eruda').then(eruda => {
    eruda.default.init()
  }).catch(err => {
    console.log('Eruda load failed:', err)
  })
}

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
