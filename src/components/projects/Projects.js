import React from 'react'
import './Projects.css'
import { dataProjects } from './dataProjects'
import { Card } from './Card'
import { techs } from '../Tech/Tech'

const Projects = () => {
  return (
    <div className='container-projects'>
      <h2>Mis Proyectos</h2>
      <div className='cards'>
        {dataProjects.map((project) => {
          const te = project.tech.map((e) => {
            return techs.filter((t) => t.name === e)
          })
          return (
            <div
              className='item'
              key={project.id}
            >
              <Card
                image={project.image}
                alt={project.alt}
                description={project.description}
                title={project.title}
                link={project.link}
                tech={te}
              />
            </div>
          )
        })}
      </div>
      <div className='frase'>
        <img
          src='/icons/right-quotation-com.png'
          alt='quotation marks'
        />
        <span>
          Creando soluciones completas para hacer posible lo imposible.
        </span>
      </div>
    </div>
  )
}

export default Projects
