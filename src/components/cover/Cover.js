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
      <svg
        viewBox='0 0 24 24'
        width='24'
        height='40'
        xmlns='http://www.w3.org/2000/svg'
        fill='#FFFF'
        className='icon-scroll'
      >
        <path d='M12 18.4l-6.2-6.2-1.4 1.4 7.6 7.6c.4.4 1 .4 1.4 0l7.6-7.6-1.4-1.4-6.2 6.2v-14.8h-1.2v14.8z'>
          <animateTransform
            attributeName='transform'
            attributeType='XML'
            type='translate'
            dur='1.4s'
            values='0 0; 0 8; 0 0'
            repeatCount='indefinite'
            begin='0s'
          />
          <animate
            attributeName='opacity'
            dur='1.4s'
            values='0.1; 1; 0.2'
            repeatCount='indefinite'
            begin='0s'
          />
        </path>
      </svg>
    </div>
  )
}

export default Cover
