import React, { useContext } from 'react';
import './styles.js';
import {
  ChatCardAvatar,
  ChatCardWrapper,
  ContactName,
  Message,
  Messages,
  TimeStamp,
} from './styles.js';
import { AuthContext } from '../../Context/AppContext.js';

const ChatCard = ({
  lastMessage = '',
  lastMessageUserName = '',
  participants = [],
  messagesRef = '',
  handleCurrentConversation = () => {},
}) => {
  console.log(messagesRef);
  const { currentUser } = useContext(AuthContext);
  const userObj = participants.filter(
    (item) => item?.userId !== currentUser?.uid
  )[0];
  const chatPersonName = userObj?.name;

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
        <Message>{lastMessage}</Message>
      </Messages>

      <TimeStamp>5:30 Pm</TimeStamp>
    </ChatCardWrapper>
  );
};

export default ChatCard;
