import React from 'react'
import './Cover.css'
import coverVideo from '../../media/coverVideo.mp4'
const Cover = () => {
  return (
    <div className='container-cover'>
        <video className='video' src={coverVideo} autoPlay loop muted/>
        <h1>Nabil Allis</h1>
        <p>&lt; Full Stack Developer /&gt;</p>
    </div>
  )
}

export default Cover