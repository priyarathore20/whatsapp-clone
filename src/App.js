import { getAuth } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import app from "./firebaseConfig";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { AuthContext } from "./Context/AppContext";
import { Loader } from "./App.styled";
import HomePage from "./Pages/HomePage";
import LandingPage from "./Pages/LandingPage";
import MobileView from "./Pages/MobileView";
function App() {
  const auth = getAuth(app);
  const db = getFirestore(app);
  const { updateUser, currentUser } = useContext(AuthContext);
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      console.log(user);
      if (user) {
        try {
          const documentRef = doc(db, "Profiles", user.uid);
          const documentSnapshot = await getDoc(documentRef);
          console.log("here");
          if (documentSnapshot.exists()) {
            updateUser(documentSnapshot.data());
            console.log(documentSnapshot.data());
          } else {
            updateUser(null);
          }
        } catch (error) {
          console.error("Error fetching document:", error);
        } finally {
          setLoading(false);
        }
      } else {
        updateUser(null);
        auth.signOut();
        setLoading(false);
      }
    });
  }, []);

  useEffect(() => {
    if (window.innerWidth <= 1024) {
      setIsMobile(true);
    } else setIsMobile(false);
  }, []);

  if (loading) {
    return (
      <Loader>
        <img src="image/loader.png" alt="" />
      </Loader>
    );
  }

  if (isMobile) return <MobileView />;

  return (
    <Routes>
      <Route path="*" element={<Navigate to="/" replace />}></Route>
      <Route path="/" element={<WhatsApp currentUser={currentUser} />}></Route>
    </Routes>
  );
}

export default App;

const WhatsApp = ({ currentUser }) => {
  return <>{currentUser ? <HomePage /> : <LandingPage />}</>;
};
