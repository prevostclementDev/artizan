import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Router from './navigation/Router.jsx'
import Header from './components/header/Header.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <Router />
  </React.StrictMode>,
)
