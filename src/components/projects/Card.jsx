import React from 'react'
import './Projects.css'

export function Card ({ image, alt, title, description, link, tech }) {
  const icon = tech.map(e => {
    return (<img title={e[0].name} src={e[0].icons} alt="img" className='svg' />)
  })
  return (
    <div className="container">
      <div className="square">
        <a
          href={link}
          target='_blank'
          rel='noreferrer'
          style={{ textDecoration: 'none' }}
        >
          <img src={image} className="mask" alt={alt} />
          <div className="text">
            <h2>{title}</h2>
            <p>{description}</p>
            <strong>Tecnologías</strong>
            <div className='techs'>
              {icon}
            </div>
          </div>
        </a>
      </div>
    </div>
  )
}
