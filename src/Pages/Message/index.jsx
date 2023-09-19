import React, { useContext, useEffect, useState } from "react";
import { Header } from "../../Components/Sidebar/styles";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
  arrayUnion,
  doc,
  getDoc,
  getFirestore,
  setDoc,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { MdSend } from "react-icons/md";
import {
  Avatar,
  Chat,
  ChatItem,
  Form,
  HeaderName,
  MessageWrapper,
  Username,
} from "./styles";
import app from "../../firebaseConfig";
import { AuthContext } from "../../Context/AppContext";

const Messages = ({ currentConversation }) => {
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);

  const db = getFirestore(app);
  const auth = getAuth(app);
  const { currentUser } = useContext(AuthContext);
  const messagesref = currentConversation?.messagesRef;

  const sendMessage = async (event) => {
    event.preventDefault();
    if (message.trim() === "") {
      alert("Enter valid message");
      return;
    }
    const { uid } = currentUser;

    const timestamp = new Date();

    try {
      const messagesCollection = doc(db, "messages", messagesref);
      await setDoc(
        messagesCollection,
        {
          chats: arrayUnion({
            content: message,
            sentBy: uid,
            timestamp,
          }),
        },
        { merge: true }
      );
      console.log("message sent");

      setMessage("");
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(() => {
  //   const q = query(
  //     collection(db, 'messages'),
  //     orderBy('createdAt', 'desc'),
  //     limit(50)
  //   );
  //   const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
  //     const fetchedMessages = [];
  //     QuerySnapshot.forEach((doc) => {
  //       fetchedMessages.push({ ...doc.data(), id: doc.id });
  //     });
  //     const sortedMessages = fetchedMessages.sort(
  //       (a, b) => a.createdAt - b.createdAt
  //     );
  //     setMessage(sortedMessages);
  //   })
  //   return () => unsubscribe;
  // }, []);

  useEffect(() => {
    (async () => {
      const messagesRef = currentConversation?.messagesRef;

      console.log(messagesRef);
      if (messagesRef) {
        try {
          const documentRef = doc(db, "messages", "E97mi4gDR3tUr1VcXM3v");
          const documentSnapshot = await getDoc(documentRef);

          if (documentSnapshot.exists()) {
            setChats(documentSnapshot.data()?.chats || []);
          } else {
            console.log("No doc");
          }
        } catch (error) {
          console.log(error);
          return false;
        }
      }
    })();

    return () => {};
  }, []);

  return (
    <MessageWrapper>
      <Header>
        <HeaderName>
          <Avatar>
            <img src="image/avatar.jpg" alt="" />
          </Avatar>
          <div>
            <Username>{currentConversation?.name}</Username>
          </div>
        </HeaderName>
        <BsThreeDotsVertical style={{ color: "white", cursor: "pointer" }} />
      </Header>
      <Chat>
        {chats?.map((message, index) => (
          <ChatItem key={index} isSent={message?.sentBy === currentUser?.uid}>
            <p>{message?.content}</p>
          </ChatItem>
        ))}
      </Chat>

      <Form onSubmit={sendMessage}>
        <input
          placeholder="Type a message"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <MdSend type="submit" />
      </Form>
    </MessageWrapper>
  );
};

export default Messages;
