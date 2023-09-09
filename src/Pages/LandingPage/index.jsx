import React, { useState } from "react";
import "./LandingPage.styled.js";
import {
  LoginBox,
  LoginPage,
  LoginTutorial,
  LoginWindow,
} from "./LandingPage.styled.js";
import app from "../../firebaseConfig.js";
import { getAuth, signInWithPhoneNumber } from "firebase/auth";

const LandingPage = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [verificationCode, setVerificationCode] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);
  const auth = getAuth(app);

  const handleSendCode = async () => {
    try {
      const confirmationResult = await signInWithPhoneNumber(auth, phoneNumber);
      console.log(confirmationResult);
      setConfirmationResult(confirmationResult);
    } catch (error) {
      console.error("Error sending verification code:", error);
    }
  };

  const handleVerifyCode = async () => {
    try {
      const userCredential = await confirmationResult.confirm(verificationCode);
      const user = userCredential.user;
      console.log("Phone number authentication successful. User:", user);
    } catch (error) {
      console.error("Error verifying code:", error);
    }
  };

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
              +91{" "}
              <input
                className="number-input"
                type="text"
                onChange={(e) => setPhoneNumber(e.target.value)}
                value={phoneNumber}
              />
            </p>
            <button onClick={handleSendCode} className="login-btn">
              Next
            </button>
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
