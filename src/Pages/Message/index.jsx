import React, { useContext, useEffect, useRef, useState } from "react";
import { Header } from "../../Components/Sidebar/styles";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
  arrayUnion,
  collection,
  doc,
  getFirestore,
  onSnapshot,
  query,
  setDoc,
  updateDoc,
} from "firebase/firestore";
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
import { useSnackbar } from "notistack";

const Messages = ({ currentConversation }) => {
  const chatRef = useRef();
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);
  const { enqueueSnackbar } = useSnackbar();
  const db = getFirestore(app);
  const { currentUser } = useContext(AuthContext);
  const messagesref = currentConversation?.messagesRef;

  const sendMessage = async (event) => {
    event.preventDefault();
    if (message.trim() === "") {
      enqueueSnackbar("Enter valid message", { variant: "info" });
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

      const chatCollection = doc(db, "chats", messagesref);
      updateDoc(chatCollection, {
        lastMessage: message,
        lastMessageTimestamp: timestamp,
        lastMessageUserId: uid,
      });

      console.log("message sent");

      setMessage("");
    } catch (error) {
      console.log(error);
      enqueueSnackbar(error?.message, { variant: "error" });
    }
  };

  useEffect(() => {
    const q = query(collection(db, "messages"));
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      const fetchedMessages = [];

      QuerySnapshot.forEach((doc) => {
        fetchedMessages.push({ ...doc.data(), id: doc.id });
        setChats(doc.data()?.chats || []);
      });
    });

    return () => unsubscribe;
  }, []);

  useEffect(() => {
    if (chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
    }
  }, [chats]);

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
      <Chat ref={chatRef}>
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
