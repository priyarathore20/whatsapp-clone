import React from "react";
import { RiWhatsappFill } from "react-icons/ri";
import "./styles.css";

const LandingPage = () => {
  return (
    <div className="login-page">
      <div className="login-navbar">
        <div className="logo">
          <RiWhatsappFill className="login-icon" />
          <header className="logo-title">whatsapp web</header>
        </div>
      </div>
      <div className="login-box">
        <div className="login-window">
          <div className="login-window-details">
            <p className="number-title">Enter phone number</p>
            <p className="number-para">
              Select a country and enter your WhatsApp phone number.
            </p>
            <button className="number-btn">
              <img
                className="flag-img"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfIxIXllljcGXBwxXL9cSZuuDOQCaqtYBzzQ&usqp=CAU"
                alt=""
              />
              <span className="flag-name">India</span>
            </button>
            <p className="number">
              +91 <input className="number-input" type="text" />
            </p>
            <button>Next</button>
          </div>
          <div className="login-tutorial">
            <p>Tutorial</p>
            <p>Need help to get started?</p>
            <video src="https://web.whatsapp.com/whatsapp-webclient-login_c09223f0813e7c3adc16476cba2a5d0d.mp4"></video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
