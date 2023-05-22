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
            // padding={[20, 20, 20]}
          >
            <span className='span-circle'> Nabil </span>
          </RoughNotation>
          , argentino, con experiencia en el mundo del desarrollo web y la
          tecnología.
          <RoughNotation
            animate={true}
            type='highlight'
            color='#FF8C72'
            show={true}
            multiline={true}
            padding={[60, 20, 20, 60]}
          >
            <span className='span-circle'> Full Stack Developer </span>
          </RoughNotation>
          y actualmente me estoy capacitando para ser Frontend pero sin
          descuidar el Backend. Mejorando día a día como programador para
          enfrentar nuevos desafíos. Me considero responsable, comprometido y
          busco ser el mejor desarrollador del mundo!!!
        </p>
      </div>
    </div>
  )
}

export default About
