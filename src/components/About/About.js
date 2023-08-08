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
        <h3>¡Hola! 👋 Te cuento un poco sobre mi..</h3>
        <p>
          Soy
          <RoughNotation
            animate={true}
            type='highlight'
            color='#FF8C72'
            show={true}
            multiline={true}
          >
            <span className='span-circle'>Nabil</span>
          </RoughNotation>
          , argentino con experiencia como desarrollador Freelance.
          <p>
            Como
            <RoughNotation
              animate={true}
              type='highlight'
              color='#FF8C72'
              show={true}
              multiline={true}
            >
              <span className='span-circle'> Full Stack Developer</span>
            </RoughNotation>
            me especializo en crear y diseñar aplicaciones web que luzcan
            geniales, con una buena experiencia de usuario, además de crear el
            Backend para un desarrollo completo.
          </p>
        </p>
        <div className='availability'>
          <div className='availability-circle'></div>
          <span className='availability-text'>Disponible</span>
        </div>
      </div>
    </div>
  )
}

export default About
