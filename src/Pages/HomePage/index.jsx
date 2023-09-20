import React, { useContext, useEffect, useState } from "react";
import Sidebar from "../../Components/Sidebar";
import ChatPage from "../../Components/ChatPage";
import { Home } from "./Home.styled";
import Messages from "../Message";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { AuthContext } from "../../Context/AppContext";
import app from "../../firebaseConfig";
import { useSnackbar } from "notistack";

const HomePage = () => {
  const db = getFirestore(app);
  const auth = getAuth(app);
  const { currentUser } = useContext(AuthContext);
  const { enqueueSnackbar } = useSnackbar();
  const [conversations, setConversations] = useState([]);
  const [currentConversation, setCurrentConversation] = useState(null);

  const handleCurrentConversation = (userObj) => {
    setCurrentConversation(userObj);
  };

  useEffect(() => {
    (async () => {
      const userId = currentUser?.uid; // Replace with the actual user's ID
      if (userId) {
        try {
          const users = [];
          const collectionRef = collection(db, "chats");
          const q = query(
            collectionRef,
            where("members", "array-contains", userId)
          );
          // Execute the query and get the result
          const querySnapshot = await getDocs(q);
          querySnapshot.forEach((doc) => {
            users.push(doc.data());
          });
          console.log(users);
          setConversations(users);
        } catch (error) {
          console.log(error);
          enqueueSnackbar(error?.message, { variant: "error" });
          return false;
        }
      }
    })();
  }, []);

  return (
    <Home>
      <Sidebar
        conversations={conversations}
        handleCurrentConversation={handleCurrentConversation}
      />
      {currentConversation != null ? (
        <Messages currentConversation={currentConversation} />
      ) : (
        <ChatPage />
      )}
    </Home>
  );
};

export default HomePage;
