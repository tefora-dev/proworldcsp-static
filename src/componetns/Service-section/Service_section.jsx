import React from 'react'
import business from "../../assests/images/businessman.png"
import visa from '../../assests/images/visa.png'
import pro from "../../assests/images/pro.png"
import emiratesid from "../../assests/images/emirates-id.png"
import medical from "../../assests/images/medical.png"
import insurance from "../../assests/images/insurance.png"
import attestation from "../../assests/images/attestation.png"
import other from "../../assests/images/other.png"

import icon1 from '../../assests/images/icon1.png'
import icon2 from '../../assests/images/icon2.png'
import icon3 from '../../assests/images/icon3.png'
import icon4 from '../../assests/images/icon4.png'
import icon5 from '../../assests/images/icon5.png'
import icon6 from '../../assests/images/icon6.png'
import icon7 from '../../assests/images/icon7.png'
import icon8 from '../../assests/images/icon8.png'
import { Link } from "react-router-dom";
import { FaArrowRightLong } from "react-icons/fa6";
import './Service_section.css'
const Service_section = () => {
  return (
    <div className='Service-section'>
        <div className='container'>
            <div className='section-title '>
                <h6 className='subtitle mb-4'>Services</h6>
                <h2>Explore Our Comprehensive Services</h2>

            </div>
            <div className='row'>
                <div className='col-md-3 col-6'>
        <div class="service-card">
                    <div className='icon'>
                        <img className='img1' src={business}/>
                        <img className='img2' src={icon1}/>
                        
                    </div>
                    <div>
                        <h6>Business Setup Services</h6>
                    </div>
                </div>

                </div>
                <div className='col-md-3 col-6'>
                 <div class="service-card">
                    <div className='icon'>
                        <img className='img1' src={visa}/>
                        <img className='img2' src={icon2}/>
                    </div>
                    <div>
                        <h6 >Visa Services</h6>
                    </div>
                </div>
         
                </div>
                <div className='col-md-3 col-6'>
                <div class="service-card">
                    <div className='icon'>
                        <img className='img1' src={pro}/>
                        <img className='img2' src={icon3}/>
                    </div>
                    <div>
                        <h6>PRO Services</h6>
                    </div>
                </div>
                </div>
                <div className='col-md-3 col-6'>
                <div class="service-card">
                    <div className='icon'>
                        <img className='img1' src={emiratesid}/>
                        <img className='img2' src={icon4}/>
                    </div>
                    <div>
                        <h6 className='card-content'>Emirates ID</h6>
                    </div>
                </div>
                </div>
                <div className='col-md-3 col-6'>
                <div class="service-card">
                    <div className='icon'>
                        <img className='img1' src={medical}/>
                        <img className='img2' src={icon5}/>
                    </div>
                    <div>
                        <h6 className='card-content'>Medical Services</h6>
                    </div>
                </div>
                </div>
                <div className='col-md-3 col-6'>
                <div class="service-card">
                    <div className='icon'>
                        <img className='img1' src={insurance}/>
                        <img className='img2' src={icon6}/>
                    </div>
                    <div>
                        <h6 className='card-content'>Insurance Services</h6>
                    </div>
                </div>
                </div>
                <div className='col-md-3 col-6'>
                <div class="service-card">
                    <div className='icon'>
                        <img className='img1' src={attestation}/>
                        <img className='img2' src={icon7}/>
                    </div>
                    <div>
                        <h6 className='card-content'>Attestation Services</h6>
                    </div>
                </div>
                </div>
                <div className='col-md-3 col-6'>
                <div class="service-card">
                    <div className='icon'>
                        <img className='img1' src={other}/>
                        <img className='img2' src={icon8}/>
                    </div>
                    <div>
                        <h6 className='card-content'>Other Services</h6>
                    </div>
                </div>
                </div>
            </div>
            
        </div>
       <Link to='/services' ><button className='btn-4'>View All  <FaArrowRightLong /> </button></Link>
    </div>
  )
}

export default Service_section