import React from 'react'
import './Cover.css'
const Cover = () => {
  return (
    <div className='container-cover'>
      <video
        className='video'
        src='https://res.cloudinary.com/demf45vva/video/upload/q_50/v1677855323/coverVideo_pp7vav.mp4'
        autoPlay
        loop
        muted
      />
      <h1>Nabil Allis</h1>
      <p>&lt; Full Stack Developer /&gt;</p>
      <div className='scroll'>
        <img
          src='/icons/avance-rapido.gif'
          alt='img'
          className='scroll-icon'
        ></img>
      </div>
    </div>
  )
}

export default Cover
