import React from "react";
import { RiWhatsappFill } from "react-icons/ri";
import "./styles.css";

const LandingPage = () => {
  return (
    <div className="login-page">
      <div className="login-navbar">
        <div className="logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/767px-WhatsApp.svg.png"
            alt=""
            className="login-icon"
          />
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
            <button className="login-btn">Next</button>
          </div>
          <div className="login-tutorial">
            <p className="login-tutorial-heading">Tutorial</p>
            <a
              className="tutorial-link"
              href="https://www.youtube.com/watch?v=zzCy6gZAWQk"
            >
              Need help to get started?
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
