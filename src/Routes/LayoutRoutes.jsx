import React from 'react'
import { BrowserRouter as Router,Route,Routes } from 'react-router-dom'
import Header from '../componetns/header/Header'
import Home from '../pages/Home/Home'
import About from '../pages/About/About'
import Footer from '../componetns/Footer/Footer'
import Services from '../pages/Service/Services'
import Contact from '../pages/Contact/Contact'
import Whatsapp from '../componetns/whats app/Whatsapp'

const LayoutRoutes = () => {
  return (
    <div>
        <Router>
           <Header/>
           <Whatsapp/>
                <Routes>
                 
                    <Route path='/'element={<Home/>}/>
                  
                    <Route path='/AboutUs'element={ <About/>}/>
                    <Route path='/Services'  element={<Services/>}/>
                    <Route path='/ContactUs' element={<Contact/>}/>
                </Routes>
          <Footer/>
        </Router>


       
        
       
      
    </div>
  )
}

export default LayoutRoutes