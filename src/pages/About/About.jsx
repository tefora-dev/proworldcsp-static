import React, { useEffect } from "react";
import Aboutimg2 from "../../assests/images/About-img2.png";
import missonimg from "../../assests/images/mission.png";
import Visionimg from "../../assests/images/vision.png";
import { Link } from "react-router-dom";
import "./About.css";
const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <div className="About-page">
      <div className="About-banner  ">
        <div className="container">
          <h3 className="page-title">About Us</h3>
          <p className="page-path">
          <Link to='/' className="home-path" >Home</Link>
             / About Us</p>
        </div>
      </div>
      <div className="container">
        <div className=" About-pages-contents ">
          <div className="Aboutimg2">
            <img src={Aboutimg2} />
          </div>

          <div className="About-page-content">
            <p className="subtitle">About Us</p>
            <h2 className="section-title">Discover Our Story</h2>
            <p className="para">
              Proworld is an Dubai based corporate Services firm delivering
              services such as Company Formation, Visa Assistance, Emirates ID
              and Medical Typing, Business Setup, Visa and PRO Services.
              <br />
              <br /> We are here for you so that you get your documents cleared
              according to the UAE Government rule and regulations. Thereby,
              reducing your time and money spent on the clearing of documents.
              As our professionals are committed with strong business ties and
              professional relationship with local government agencies, banks,
              free zone entities we will help you set up your business and
              build relationships
            </p>
          </div>
        </div>

        <div className="mission-vision">
          <div className="mission ">
            <div className="misson-contents ">
              <div className="misson-icon">
                <img src={missonimg} />
              </div>
              <div className="mission-content">
                <p className="mission-title">Our Mission</p>
                <p className="mission-para">
                  To create customer-friendly and hassle-free transaction
                  concepts that are deﬁned by excellent service, ﬁne
                  workmanship, and a superior and refreshing after service
                  experience.
                </p>
              </div>
            </div>
          </div>
          <div className="mission ">
            <div className="misson-contents">
              <div className="misson-icon">
                <img src={Visionimg} />
              </div>
              <div className="mission-content">
                <p className="mission-title">Our Vision</p>
                <p className="mission-para">
                  To be the leader in handling Governmental and residential
                  Documentation needs by simplifying the transactions and making
                  Customer Satisfaction.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
