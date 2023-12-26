import React, { useEffect, useRef } from "react";
import emailjs from "emailjs-com";
import "./Contact.css";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6yls7nw",
        "template_9ebszzf",
        form.current,
        "abUo3ugWyGR2BymQ1"
      )
      .then(
        (result) => {
          console.log(result.text);

          form.current.reset();
          toast.success("Submit Successfully!", {
            position: toast.POSITION.TOP_RIGHT,
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="Contact">
      <ToastContainer />
      <div className="Contact-banner  ">
        <div className="container">
          <h3 className="page-title">Contact Us</h3>
          <p className="page-path">
            <Link to="/" className="home-path">
              Home
            </Link>
            / Contact Us
          </p>
        </div>
      </div>
      <div className="container  ">
        <div className="row main-container">
          <div class="col-lg-6">
          <div class="map mb-4">
         <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.1392365484435!2d55.270371775282655!3d25.232234877688335!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x887648eb57b26adb%3A0x38aef391b6c8f0e8!2sProworld%20Corporate%20Service%20Providers!5e0!3m2!1sen!2sin!4v1702803219749!5m2!1sen!2sin"
        title="Google Map"
        width="90%"
        height="510px"
        style={{ border: '0' }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
     </div>
          </div>
          <div class="col-lg-6 contact-box">
            <h2 className="pb-4">Get In Touch</h2>
            <div class="contact-form">
              <form ref={form} onSubmit={sendEmail}>
                <div class="row">
                  <div class="col-md-6">
                    <label for="">Full Name</label>
                    <input
                      type="text"
                      name="from_name"
                      placeholder="Full Name"
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="">Email Address</label>
                    <input
                      type="email"
                      name="from_mail"
                      placeholder="Email Address"
                    />
                  </div>
                </div>
                <div class="row mt-4">
                  <div class="col-md-6">
                    <label for="">Phone Number</label>
                    <input
                      type="text"
                      name="from_number"
                      placeholder="Phone Number"
                    />
                  </div>
                  <div class="col-md-6">
                    <label for="">Discription</label>
                    <input
                      type="text"
                      name="from_description"
                      placeholder="Subject"
                    />
                  </div>
                </div>
                <div class="row mt-4">
                  <div class="col-md-12">
                    <label for="">Message</label>
                    <textarea
                      id=""
                      name="message"
                      rows="5"
                      placeholder="Comments ..."
                    ></textarea>
                  </div>
                </div>
                <button value="Send" class="btn  w-100 mt-3">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Contact;
