import React from 'react'
import './Projects.css'

export function Card ({ image, alt, title, description, link, tech, stack }) {
  const icon = tech.map(e => {
    return (<img key={e[0].name} title={e[0].name} src={e[0].icons} alt="img" className='svg' />)
  })

  return (
    <div className="container">
      <a
        href={link}
        target='_blank'
        rel='noreferrer'
        style={{ textDecoration: 'none' }}
      >
        <div className="square">
          <div className='stack'>
            <span >{stack}</span>
          </div>
          <img src={image} className="mask" alt={alt} />
          <div className="text">
            <h2>{title}</h2>
            <p>{description}</p>
            <strong>Tecnologías</strong>
            <div className='techs'>
              {icon}
            </div>
          </div>
        </div>
      </a>
    </div>
  )
}
