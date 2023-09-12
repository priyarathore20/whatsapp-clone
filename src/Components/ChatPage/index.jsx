import React from "react";
import { AiFillLock } from "react-icons/ai";
import {
  Chatpage,
  ChatpageImgWrapper,
  DownloadHead,
  DownloadPara,
  Encryption,
} from "./ChatPage.styled";

const ChatPage = () => {
  return (
    <Chatpage>
      <ChatpageImgWrapper>
        <img src="image/whatsapp.png" alt="" />
        <DownloadHead>Download Whatsapp for Windows</DownloadHead>
        <DownloadPara>
          Make calls, share your screen and get a faster experience when you
          download the Windows app.
        </DownloadPara>
        <button>Get the app</button>
      </ChatpageImgWrapper>
      <Encryption>
        <AiFillLock />
        <p>End-to-end encrypted</p>
      </Encryption>
    </Chatpage>
  );
};

export default ChatPage;
