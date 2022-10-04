import React from 'react'
import './About.css'
import Perfil from '../../media/perfil.png'

const About = () => {
  return (
    <div className='container-about'>
         <div className='fotoPerfil'>
            <img src={Perfil} alt='img'/>
        </div>
        <div className='description'>
            <h3>Te cuento un poco sobre mi..</h3>
            <p>Hola! soy Nabil, un argentino apasionado por la tecnología y el desarrollo web. Me encuentro en constante búsqueda de nuevos desafios para seguir creciendo como programador Full Stack. Soy una persona proactiva, comprometida y muy responsable con su trabajo. Me gusta el trabajo en equipo y siempre trato de ayudar a los demás intercambiando conocimiento.</p>
        </div>
       
    </div>
  )
}

export default About