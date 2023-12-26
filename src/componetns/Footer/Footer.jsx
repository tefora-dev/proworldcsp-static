import React from "react";
import logo from "../../assests/images/Proworld Logo-1.png";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { IoLogoYoutube } from "react-icons/io";
import { FiPhone, FiMail, FiMapPin } from "react-icons/fi";
import { Link } from "react-router-dom";
import "./Footer.css";
const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="container">
          <div className="row">
            <div class=" col-md-3 col-12">
              <a class="navbar-brand " href="#">
                <img className="footer-logo mb-4" src={logo} alt="" />
              </a>
              <p>
             
              </p>
              <div className="icons">
                <a href="">
                  <FaFacebookF size={25} />
                </a>
                <a href="">
                  {" "}
                  <FaTwitter size={25} />
                </a>
                <a href="">
                  {" "}
                  <AiFillInstagram size={25} />
                </a>
                <a href="">
                  {" "}
                  <IoLogoYoutube size={25} />
                </a>
              </div>
            </div>
          
            <div className="col-md-3 col-12 ">
              <h5>Company</h5>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/AboutUs">About Us</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
                <li>
                  <Link to="/ContactUs">Contacts</Link>
                </li>
              </ul>
            </div>
            <div class=" col-md-3 col-12">
              <h5>Services</h5>
              <ul>
                <li>
                  <Link to="/services">Business Setup Services</Link>
                </li>
                <li>
                  <Link to="/services">Visa Services</Link>
                </li>
                <li>
                  <Link to="/services"> PRO Services</Link>
                </li>
                <li>
                  <Link to="/services"> Emirates ID</Link>
                </li>
                <li>
                  <Link to="/services">Medical Services</Link>
                </li>
                <li>
                  <Link to="/services">Insurance Services</Link>
                </li>
                <li>
                  <Link to="/services">Attestation Services</Link>
                </li>
              </ul>
            </div>
            <div className="col-md-3 col-12">
              <h5>Contact Us</h5>
              <ul>
                <li className="contact-data">
                  <div>
                    <FiMail size={20} color="#170F49" />
                  </div>
                  <p>info@proworldcsp.com</p>
                </li>
                <li className="contact-data">
                  <div>
                    <FiPhone size={20} color="#170F49" />
                  </div>
                  <p>+971562532737</p>
                </li>

                <li className="contact-data">
                  <div>
                    <FiMapPin color="#170F49" size={20} />
                  </div>
                  <p>Nesto Hypermarket,Al badaa street,Al Satwa,Dubai,UAE</p>
                </li>
                <li className="contact-data">
                  <div>
                    <FiMapPin color="#170F49" size={20} />
                  </div>
                  <p>Nesto Hypermarket,Al Nahda-2,Dubai,UAE</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="terms-condtion">
        <p className="footer-bottom">
          All Rights Reserved | Terms and Conditions | Privacy Policy
        </p>
      </div>
    </>
  );
};

export default Footer;
