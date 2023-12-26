import React from 'react'
import Marquee from "react-fast-marquee";
import logo1 from '../../assests/images/serviceslogo1.png'
import logo2 from '../../assests/images/serviceslogo2.png'
import logo8 from '../../assests/images/serviceslogo8.png'
import logo3 from '../../assests/images/serviceslogo3.png'
import logo4 from '../../assests/images/serviceslogo4.png'
import logo5 from '../../assests/images/serviceslogo5.png'
import logo6 from '../../assests/images/serviceslogo6.png'
import logo7 from '../../assests/images/serviceslogo7.png'


import logo9 from '../../assests/images/serviceslogo9.png'

import './LinkedWith.css'

const LinkedWith = () => {
  return (
    <div className='linked'>
        <div className='container'>
         <h2>We are Linked With</h2>   
       
         <Marquee>
  <img src={logo1} className="linked-image" alt="logo1"/> 
  
  <img src={logo2} className="linked-image" alt="logo2"/> 
  <img src={logo3} className="linked-image" alt="logo3"/> 
  <img src={logo9} className="linked-image" alt="logo9"/>
  <img src={logo4} className="linked-image" alt="logo4"/> 
  <img src={logo8} className="linked-image" alt="logo8"/> 
  <img src={logo5} className="linked-image" alt="logo5"/> 
  <img src={logo6} className="linked-image" alt="logo6"/> 
  <img src={logo7} className="linked-image" alt="logo7"/> 
 
  
   
</Marquee>

  </div>
    </div>
  )
}

export default LinkedWith