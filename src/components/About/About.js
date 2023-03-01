import React from 'react'
import './About.css'
import Perfil from '../../media/perfil.png'

const About = () => {
  return (
    <div className='container-about'>
      <div className='fotoPerfil'>
        <img
          src='https://res.cloudinary.com/demf45vva/image/upload/v1677533249/1677533150064_xv5tbc.jpg'
          alt='imagen de perfil'
        />
      </div>
      <div className='description'>
        <h3>Te cuento un poco sobre mi..</h3>
        <p>
          Hola! 👋 soy Nabil, argentino apasionado por el desarrollo web y la tecnología. Me encanta enfrentar nuevos desafíos que me ayuden a seguir mejorando como programador. Me considero una persona responsable, comprometida y busco ser el mejor desarrollador del mundo!!!
        </p>
      </div>
    </div>
  )
}

export default About
