import React, { useState, useEffect } from 'react'
import './App.css'

import About from './components/About/About'
import Cover from './components/cover/Cover'
import NavBar from './components/navbar/NavBar'
import Projects from './components/projects/Projects'
import { SocialButtons } from './components/SocialButtons/SocialButtons'
import { useScroll } from 'framer-motion'

function App() {
  const [scrollHeigth, setScrollHeigth] = useState(0)
  const handleScroll = () => {
    const position = window.pageYOffset
    setScrollHeigth(position)
  }
  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
  }, [scrollHeigth])

  const { scrollYProgress } = useScroll()

  return (
    <div className='App'>
      <NavBar scrolling={scrollYProgress} />
      <Cover />
      <SocialButtons scrolling={scrollYProgress} />
      <About />
      <Projects />
    </div>
  )
}

export default App
