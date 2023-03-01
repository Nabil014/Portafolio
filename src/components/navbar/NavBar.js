import React from 'react'
import './NavBar.css'

import logo from '../../media/logo portafolio2.png'
import { motion, useSpring } from 'framer-motion'

const NavBar = ({ scrolling }) => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const scaleX = useSpring(scrolling, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  })

  return (
    <nav className={`navbar ${scrolling.current > 0.1 ? 'scroll' : null}`}>
      <div
        className='navbar-logo'
        onClick={scrollTop}
      >
        <img
          src={logo}
          alt='img'
        />
      </div>
      <div className='scrollbar'>
        <motion.div
          className='progress-bar'
          style={{ scaleX }}
        />
      </div>
    </nav>
  )
}

export default NavBar
