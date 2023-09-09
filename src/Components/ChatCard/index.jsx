import React from "react";
import "./styles.js";
import {
  ChatCardAvatar,
  ChatCardWrapper,
  ContactName,
  Message,
  Messages,
  TimeStamp,
} from "./styles.js";

const ChatCard = () => {
  return (
    <ChatCardWrapper>
      <ChatCardAvatar>
        <img
          src="https://img.freepik.com/premium-vector/portrait-young-man-with-beard-hair-style-male-avatar-vector-illustration_266660-423.jpg?w=2000"
          alt=""
        />
      </ChatCardAvatar>
      <Messages>
        <ContactName>Mr. xyz</ContactName>
        <Message>~ Hello</Message>
      </Messages>
      <div>
        <TimeStamp>5:30 Pm</TimeStamp>
      </div>
    </ChatCardWrapper>
  );
};

export default ChatCard;
