import React from 'react'
import video from '../../assests/video/video.mp4'
import './Hero.css'
import Homeswiper from '../swipers/Home-swiper/Home-swiper'
const Hero = () => {
  return (
    <div className='Hero-section ' >
        <div className='overlay'></div>
         <video className='video object-fit-cover' width="100%" height="657px" loop autoPlay muted>
        <source src={video} type="video/mp4" />
      
      </video>
      <div className='position-absolute'> <Homeswiper/></div>
      {/* <div className='position-absolute'> <Test/></div> */}
      
     
    </div>
  )
}

export default Hero