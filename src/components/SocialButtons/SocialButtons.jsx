import React from 'react'
import './SocialButtons.css'

export function SocialButtons ({ scrolling }) {
  console.log(scrolling.current)
  return (
    <div className={`${scrolling.current > 0.15 ? 'box' : 'box-none'}`}>
      <div className="container-social">
        <div className="icon linkedin">
          <div className="tooltip">
            Linkedin
          </div>
          <span><a href="https://www.linkedin.com/in/nabil-allis/" target='_blank' rel='noreferrer'><i className="fab fa-linkedin-in"></i></a></span>
        </div>

        <div className="icon github">
          <div className="tooltip">
            GitHub
          </div>
          <span><a href="https://github.com/Nabil014" target='_blank' rel='noreferrer'><i className="fab fa-github"></i></a></span>
        </div>

      </div >
    </div >
  )
}
