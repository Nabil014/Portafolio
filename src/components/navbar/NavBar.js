import React from 'react'
import './NavBar.css'
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
          src='https://res.cloudinary.com/demf45vva/image/upload/v1677851460/logoPortafolio2_zerauc.png'
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
