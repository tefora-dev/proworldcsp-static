import React from 'react'
import About_img from '../../assests/images/About.png'
import './About-section.css'
import { Link } from "react-router-dom";
const Aboutsection = () => {
  return (
    <div className='About-section' id='About-section'>
        <div className='container'>
            <div className='row main-container'>
                <div className='col-md-6'>
                    <img src={About_img}/>
                </div>
                <div className='col-md-6'>
                    <div className='About-content'>
                        <p className='subtitle'>About Us</p>
                        <h2 className='section-title'>Discover Our Story</h2>
                        <p className='para'>Proworld is an Dubai based corporate Services firm delivering services such as Company Formation, Visa Assistance, Emirates ID and Medical Typing, Business Setup, Visa and PRO Services.<br/><br/> We are here for you so that you get your documents cleared according to the UAE Government rule and regulations. Thereby, reducing your time and money spent on the clearing of documents. As our professionals are committed with strong business ties and professional
                         relationship with local government agencies, banks, free zone entities we will help you set up your business and build relationships</p>
                        <Link to='/AboutUs'><button className='btn-3'>Read More</button></Link> 
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Aboutsection