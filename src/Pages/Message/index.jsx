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
import { useSnackbar } from "notistack";

const Messages = ({ currentConversation }) => {
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);
  const { enqueueSnackbar } = useSnackbar();
  const db = getFirestore(app);
  const auth = getAuth(app);
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
      console.log("message sent");

      setMessage("");
    } catch (error) {
      console.log(error);
      enqueueSnackbar(error?.message, { variant: "error" });
    }
  };

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
