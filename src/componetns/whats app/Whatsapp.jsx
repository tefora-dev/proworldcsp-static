import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom';
import './whats.css'
const Whatsapp = () => {
  return (
    <div className='Whats-app'>
        <Link to="https://wa.me/+919526910113?text=Hi there!" target="_blank">

        <FaWhatsapp size={45} color='white' />
        </Link>
        

    </div>
  )
}

export default Whatsapp