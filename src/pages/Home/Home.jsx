import React, { useEffect } from 'react'
import Aboutsection from '../../componetns/About-section/About-section';
import Contact_section from '../../componetns/Contact-section/Contact_section';
import Features from '../../componetns/Features/Features';
import Hero from '../../componetns/Hero/Hero'
import Service_section from "../../componetns/Service-section/Service_section"
import LinkedWith from "../../componetns/LinkedWith/LinkedWith"
const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className='Home'>
    <Hero/>
   <Aboutsection/>
   <Service_section/>
   <Features/>
   <LinkedWith/>
   <Contact_section/>
    </div>
  )
}

export default Home