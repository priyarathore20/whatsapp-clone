import React, { useEffect, useState } from "react";
import { Header } from "../../Components/Sidebar/styles";
import { BsThreeDotsVertical } from "react-icons/bs";
import {
  addDoc,
  collection,
  getFirestore,
  limit,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { MdSend } from "react-icons/md";
import {
  Avatar,
  Chat,
  MessageWrapper,
  Messenger,
  Textfield,
  Username,
} from "./styles";
import app from "../../firebaseConfig";

const Messages = () => {
  const [message, setMessage] = useState("");
  const db = getFirestore(app);
  const auth = getAuth(app);

  const sendMessage = async (event) => {
    event.preventDefault();
    if (message.trim() === "") {
      alert("Enter valid message");
      return;
    }
    const { uid, displayName, photoURL } = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: message,
      name: displayName,
      avatar: photoURL,
      createdAt: serverTimestamp(),
      uid,
    });
    setMessage("");
  };

  useEffect(() => {
    const q = query(
      collection(db, "messages"),
      orderBy("createdAt", "desc"),
      limit(50)
    );
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      const fetchedMessages = [];
      QuerySnapshot.forEach((doc) => {
        fetchedMessages.push({ ...doc.data(), id: doc.id });
      });
      const sortedMessages = fetchedMessages.sort(
        (a, b) => a.createdAt - b.createdAt
      );
      setMessage(sortedMessages);
    });
    return () => unsubscribe;
  }, []);

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
      <Chat>
        {message?.map((message) => (
          <Messenger key={message.id} message={message} />
        ))}
      </Chat>
      <Textfield onSubmit={sendMessage}>
        <input
          placeholder="Type a message"
          onChange={(e) => setMessage(e.target.value)}
          value={message}
        />
        <MdSend type="submit" />
      </Textfield>
    </MessageWrapper>
  );
};

export default Messages;
