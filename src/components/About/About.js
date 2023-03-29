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
          ¡Hola! 👋 Soy
          <RoughNotation
            animate={true}
            type='highlight'
            color='#FF8C72'
            show={true}
            multiline={true}
            padding={[20, 20, 20, 30]}
          >
            <span className='span-circle'> Nabil</span>
          </RoughNotation>
          , argentino apasionado por el desarrollo web y la tecnología.
          Actualmente me estoy capacitando para ser
          <RoughNotation
            animate={true}
            type='highlight'
            color='#FF8C72'
            show={true}
            multiline={true}
            padding={[60, 20, 20, 60]}
          >
            <span className='span-circle'> Frontend developer</span>
          </RoughNotation>
          . Me encanta enfrentar nuevos desafíos para seguir mejorando como
          programador. Me considero una persona responsable, comprometida y
          busco ser el mejor desarrollador del mundo!!!
        </p>
      </div>
    </div>
  )
}

export default About
