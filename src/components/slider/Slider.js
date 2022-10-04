import React from 'react'
import Carousel from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css';
import Slides from './Slides'
import './Slider.css'
import { slidesToShowPlugin } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

const Slider = () => {
  return (
    <div className='carousel-container'>
        <div className='carousel-title'>
            <h2>
                Mis Proyectos
            </h2>
        </div> 
       <Carousel 
        plugins={[
          'centered',
          'arrows',
          'infinite',
          {
            resolve: slidesToShowPlugin,
            options: {
             numberOfSlides: 3
            }
          },
      ]}
        offset={50}
        itemWidth={400}
        slides={Slides}
        breakpoints={{
          960:{
            plugins: [
              'infinite',
              'centered',
              {
                resolve: slidesToShowPlugin,
                options: {
                 numberOfSlides: 2
                }
              },
            ]
          }
        }}
        /> 
    </div>
  )
}

export default Slider