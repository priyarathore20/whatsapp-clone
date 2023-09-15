import React from "react";
import { Header } from "../../Components/Sidebar/styles";
import { BsThreeDotsVertical } from "react-icons/bs";
import { MdSend } from "react-icons/md";
import { Avatar, Chat, MessageWrapper, Textfield, Username } from "./styles";

const Messages = () => {
  return (
    <MessageWrapper>
      <Header>
        <div>
          <Avatar>
            <img src="image/avatar.png" alt="" />
          </Avatar>
          <div>
            <Username></Username>
          </div>
          <BsThreeDotsVertical />
        </div>
      </Header>
      <Chat></Chat>
      <Textfield>
        <input placeholder="Type a message" />
        <MdSend />
      </Textfield>
    </MessageWrapper>
  );
};

export default Messages;
