import React from "react";
import { AiFillLock } from "react-icons/ai";

const ChatPage = () => {
  return (
    <div>
      <div>
        <img
          src="https://web.whatsapp.com/img/native-desktop-hero_a22b846aefcd2de817624e95873b2064.png"
          alt=""
        />
        <p>Download Whatsapp for Windows</p>
        <p>
          Make calls, share your screen and get a faster experience when you
          download the Windows app.
        </p>
        <button>Get the app</button>
      </div>
      <div className="encrypt-msg">
        <AiFillLock />
        <p>End-to-end encrypted</p>
      </div>
    </div>
  );
};

export default ChatPage;
