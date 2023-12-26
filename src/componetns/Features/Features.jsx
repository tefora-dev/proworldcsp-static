import React from 'react'
import experience from '../../assests/images/experience.png'
import satisfacation from '../../assests/images/satisfacation.png'
import guarantee from '../../assests/images/guarantee.png'
import providingservices from '../../assests/images/providingservices.png'
 
import './Features.css'

const Features = () => {
  return (
    <div className='features-section'>
        <div className='features container'>
            <div className='row all-features'>
            <div className='col-md-3 col-6 feature1'>
                <img src={experience}/>
                <div className='feature-content'>
                    <div className='count'>10+</div>
                    <p>Year Of Experience</p>
                </div>
            </div>
            <div className='col-md-3 col-6 feature1'>
                <img src={satisfacation}/>
                <div className='feature-content'>
                    <div className='count'>100%</div>
                    <p>Customer Satisfaction</p>
                </div>
            </div>
            <div className='col-md-3 col-6 feature1'>
                <img src={guarantee}/>
                <div className='feature-content'>
                    <div className='count'>100%</div>
                    <p>Service Guarantee</p>
                </div>
            </div>
            <div className='col-md-3 col-6 feature1'>
                <img src={providingservices}/>
                <div className='feature-content'>
                    <div className='count'>26+</div>
                    <p>Providing Services</p>
                </div>
            </div>
        </div>
        </div> 
    </div>
  )
}

export default Features