import React from 'react'
import './NavBar.css'
import logo from '../../media/logo portafolio2.png'

const NavBar = ({scrolling}) => {
    const scrollTop = ()=>{
        window.scrollTo({top: 0,behavior:'smooth'})
    }

  return (
    <nav className={`navbar ${scrolling > 20 ? "scroll": null}`}>
        <div className='navbar-logo' onClick={scrollTop}>
            <img src={logo} alt='img'/>
        </div>

    </nav>
  )
}

export default NavBar