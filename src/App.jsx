/* eslint-disable no-unused-vars */
import { useState, useEffect } from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
 

  return (
    <>
     <Header/>
     <main>
        <Hero/>
        <About/>
        <Skills/>
        <Projects/>
        <Contact/>
     </main>
     <Footer/>
    </>
  )
}

export default App
