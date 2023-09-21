import React, { useContext, useEffect, useState } from "react";
import "./styles.js";
import {
  ChatCardAvatar,
  ChatCardWrapper,
  ContactName,
  Message,
  Messages,
  TimeStamp,
} from "./styles.js";
import { AuthContext } from "../../Context/AppContext.js";
import { getFirestore } from "firebase/firestore";
import app from "../../firebaseConfig.js";

const ChatCard = ({
  participants = [],
  messagesRef = "",
  lastMessage = "",
  handleCurrentConversation = () => {},
}) => {
  const { currentUser } = useContext(AuthContext);
  const userObj = participants.filter(
    (item) => item?.userId !== currentUser?.uid
  )[0];
  const chatPersonName = userObj?.name;
  let lastText = lastMessage;

  const setCurrentUser = () => {
    handleCurrentConversation({ ...userObj, messagesRef });
  };

  return (
    <ChatCardWrapper onClick={setCurrentUser}>
      <ChatCardAvatar>
        <img
          src="https://img.freepik.com/premium-vector/portrait-young-man-with-beard-hair-style-male-avatar-vector-illustration_266660-423.jpg?w=2000"
          alt=""
        />
      </ChatCardAvatar>
      <Messages>
        <ContactName>{chatPersonName}</ContactName>
        <Message>{lastText}</Message>
      </Messages>

      <TimeStamp>1 pm</TimeStamp>
    </ChatCardWrapper>
  );
};

export default ChatCard;
