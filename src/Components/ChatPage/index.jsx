import React from "react";
import { AiFillLock } from "react-icons/ai";
import { Chatpage, chatpageImg, downloadHead } from "./ChatPage.styled";

const ChatPage = () => {
  return (
    <Chatpage>
      <chatpageImg>
        <img src="image/whatsapp.png" alt="" />
        <downloadHead>Download Whatsapp for Windows</downloadHead>
        <p>
          Make calls, share your screen and get a faster experience when you
          download the Windows app.
        </p>
        <button>Get the app</button>
      </chatpageImg>
      <div className="encrypt-msg">
        <AiFillLock />
        <p>End-to-end encrypted</p>
      </div>
    </Chatpage>
  );
};

export default ChatPage;
