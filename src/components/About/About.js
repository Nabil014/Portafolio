import React from 'react'
import { RoughNotation } from 'react-rough-notation'
import './About.css'

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
          ¡Hola Mundo! 👋 Soy
          <RoughNotation
            animate={true}
            type='highlight'
            color='#FF8C72'
            show={true}
            multiline={true}
          >
            <span className='span-circle'> Nabil </span>
          </RoughNotation>
          , desarrollador
          <RoughNotation
            animate={true}
            type='highlight'
            color='#FF8C72'
            show={true}
            multiline={true}
          >
            <span className='span-circle'> Full Stack Developer </span>
          </RoughNotation>
          argentino. Especializado en crear y diseñar aplicaciones web que
          luzcan geniales, con una buena experiencia de usuario y con diseño
          responsive para todos los dispositivos.
        </p>
      </div>
    </div>
  )
}

export default About
