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
import { doc, getDoc, getFirestore } from "firebase/firestore";
import app from "../../firebaseConfig.js";

const ChatCard = ({
  participants = [],
  messagesRef = "",
  handleCurrentConversation = () => {},
}) => {
  const [lastMessage, setLastMessage] = useState("");
  const [timestamp, setTimestamp] = useState("");
  const db = getFirestore(app);
  // console.log(messagesRef);
  const { currentUser } = useContext(AuthContext);
  const userObj = participants.filter(
    (item) => item?.userId !== currentUser?.uid
  )[0];
  const chatPersonName = userObj?.name;

  useEffect(() => {
    (async () => {
      // const messagesRef = conversations?.messagesRef;

      // console.log(messagesRef);
      // if (messagesRef) {
      try {
        const documentRef = doc(db, "messages", "E97mi4gDR3tUr1VcXM3v");
        const documentSnapshot = await getDoc(documentRef);
        let chatArray = [];
        let lastText = "";
        if (documentSnapshot.exists()) {
          chatArray = documentSnapshot.data();
          if (Array.isArray(chatArray) && chatArray.length > 0) {
            lastText = chatArray[chatArray.length - 1]; // Correct way to access the last element
            console.log(lastText);
          }
          setLastMessage(lastText?.content);
          function timestampToTime(timestampInSeconds) {
            const date = new Date(timestampInSeconds * 1000); // Convert seconds to milliseconds
            return date.toLocaleTimeString();
          }
          setTimestamp(timestampToTime(documentSnapshot?.data?.timestamp));
        } else {
          console.log("No doc");
        }
      } catch (error) {
        console.log(error);
        return false;
        // }
      }
    })();

    return () => {};
  }, []);

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

      <TimeStamp>{timestamp}</TimeStamp>
    </ChatCardWrapper>
  );
};

export default ChatCard;
