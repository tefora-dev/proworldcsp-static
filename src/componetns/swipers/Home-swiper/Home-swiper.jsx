import React from "react";
import { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./Home-swiper.css";
import { Autoplay } from "swiper/modules";

import logoimg from "../../../assests/images/logo-1.png";

const Homeswiper = () => {
  return (
    <div className="Home-swiper">
      <Swiper
        direction={"vertical"}
        slidesPerView={1}
        spaceBetween={30}
        speed={1200}
        loop={true}
       
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="swiper-content">
            <img className="logoimg" src={logoimg} />

           <a href='#About-section'> <button className="swiper-btn">Explore</button></a>
           
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-content">
            <h1>Business Setup Services</h1>
            <p>
              Proworld is an Dubai based corporate Services firm delivering
              services such as Company Formation, Visa Assistance, Emirates ID
              and Medical Typing, Business Setup, Visa and PRO Services.
            </p>

            <a href='#About-section'> <button className="swiper-btn">Explore</button></a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-content">
            <h1>Visa Services</h1>
            <p>
              Proworld is an Dubai based corporate Services firm delivering
              services such as Company Formation, Visa Assistance, Emirates ID
              and Medical Typing, Business Setup, Visa and PRO Services.
            </p>

            <a href='#About-section'> <button className="swiper-btn">Explore</button></a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-content">
            <h1>PRO Services</h1>
            <p>
              Proworld is an Dubai based corporate Services firm delivering
              services such as Company Formation, Visa Assistance, Emirates ID
              and Medical Typing, Business Setup, Visa and PRO Services.
            </p>

            <a href='#About-section'> <button className="swiper-btn">Explore</button></a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-content">
            <h1>Emirates ID</h1>
            <p>
              Proworld is an Dubai based corporate Services firm delivering
              services such as Company Formation, Visa Assistance, Emirates ID
              and Medical Typing, Business Setup, Visa and PRO Services.
            </p>

            <a href='#About-section'> <button className="swiper-btn">Explore</button></a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-content">
            <h1>Medical Services</h1>
            <p>
              Proworld is an Dubai based corporate Services firm delivering
              services such as Company Formation, Visa Assistance, Emirates ID
              and Medical Typing, Business Setup, Visa and PRO Services.
            </p>

            <a href='#About-section'> <button className="swiper-btn">Explore</button></a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-content">
            <h1>Insurance Services</h1>
            <p>
              Proworld is an Dubai based corporate Services firm delivering
              services such as Company Formation, Visa Assistance, Emirates ID
              and Medical Typing, Business Setup, Visa and PRO Services.
            </p>

            <a href='#About-section'> <button className="swiper-btn">Explore</button></a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="swiper-content">
            <h1>Attestation Services</h1>
            <p>
              Proworld is an Dubai based corporate Services firm delivering
              services such as Company Formation, Visa Assistance, Emirates ID
              and Medical Typing, Business Setup, Visa and PRO Services.
            </p>

            <a href='#About-section'> <button className="swiper-btn">Explore</button></a>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Homeswiper;
