import React from 'react'
import ReactDOM from 'react-dom/client'
import Card from './components/Card.jsx'
import Barra from './components/Barra.jsx'
import Footer from './components/Footer.jsx'
import Hero from './components/Hero.jsx'
//Bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap"

// index.css'
import '../styles/index.css'

// components
import Home from './components/Home';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <div className="container-fluid">
  
          <Barra />
          <Hero />
          <div className="row g-4 row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4">
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <Footer />
    </div>
  </React.StrictMode>,
)
