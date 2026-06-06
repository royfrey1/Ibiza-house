import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
import Hero from './components/Hero'
import Navbar from './components/NavBar'
import { Categorias } from './components/Categorias'
import Lanzamientos from './components/Lanzamientos'
import Oferta from './components/Ofertas'
import Ubicacion from './components/Ubicacion'
import Footer from './components/Footer'
import Envio from './components/Envio'
// import Men from './components/Men'
import About from './components/About'
import Proximamente from './components/Proximamente'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App bg-ibiza-sand min-h-screen text-ibiza-dark font-sans">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Categorias />
              <Lanzamientos />
              <Oferta />
              <Ubicacion />
              <Envio />
            </>
          } />  
          <Route path="/men" element={<Proximamente seccion="Hombres" />} />
          <Route path="/women" element={<Proximamente seccion="Mujeres" />} />
          <Route path="/resort" element={<Proximamente seccion="Accesorios" />} />
          <Route path="/about" element={<About />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}
export default App
