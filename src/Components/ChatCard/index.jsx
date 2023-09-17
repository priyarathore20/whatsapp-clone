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
  handleCurrentConversation = () => {},
}) => {
  const { currentUser } = useContext(AuthContext);

  const setCurrentUser = () => {
    
    const userId = participants.filter((item) => item !== currentUser?.uid)[0];

    handleCurrentConversation(userId);
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
        <ContactName>{lastMessageUserName}</ContactName>
        <Message>{lastMessage}</Message>
      </Messages>

      <TimeStamp>5:30 Pm</TimeStamp>
    </ChatCardWrapper>
  );
};

export default ChatCard;
