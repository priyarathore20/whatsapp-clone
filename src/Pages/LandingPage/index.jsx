import React from "react";
import { RiWhatsappFill } from "react-icons/ri";
import "./LandingPage.styled.js";
import {
  LoginBox,
  LoginPage,
  LoginTutorial,
  LoginWindow,
} from "./LandingPage.styled.js";

const LandingPage = () => {
  return (
    <LoginPage>
      <div className="login-navbar"></div>
      <LoginBox>
        <div className="logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/767px-WhatsApp.svg.png"
            alt=""
          />
          <header className="logo-title">whatsapp web</header>
        </div>
        <LoginWindow>
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
          <LoginTutorial>
            <p className="login-tutorial-heading">Tutorial</p>
            <a
              className="tutorial-link"
              href="https://faq.whatsapp.com/1317564962315842/?cms_platform=web&lang=en"
            >
              Need help to get started?
            </a>
          </LoginTutorial>
        </LoginWindow>
      </LoginBox>
    </LoginPage>
  );
};

export default LandingPage;
