import {routes} from './Router/routes'
import { getAuth } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { BrowserRouter , Routes, Route, Navigate } from "react-router-dom";
import app from "./firebaseConfig";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import { AuthContext } from "./Context/AppContext";
function App() {
  const auth = getAuth(app)
  const db = getFirestore(app)
  // const {updateUser, currentUser} = useContext(AuthContext)
  const [loading, setLoading] = useState(false)

  // useEffect(() => {
  //   auth.onAuthStateChanged(async (user) => {
  //     console.log(user);
  //     if (user) {
  //       try {
  //         const documentRef = doc(db, "Profiles", user.uid);
  //         const documentSnapshot = await getDoc(documentRef);
  //         console.log("here");
  //         if (documentSnapshot.exists()) {
  //           updateUser(documentSnapshot.data());
  //           console.log(documentSnapshot.data());
  //         } else {
  //           updateUser(null);
  //         }
  //       } catch (error) {
  //         console.error("Error fetching document:", error);
  //       } finally {
  //         setLoading(false);
  //       }
  //     } else {
  //       updateUser(null);
  //       auth.signOut();
  //       setLoading(false);
  //     }
  //   });
  // }, []);

  if (loading) {
    return (
      <div>
        <img src='image/loader.png' alt=''/>
      </div>
    )
  }

  return (
    <BrowserRouter>
    <Routes>
      {routes.map((item) => {
        const { name, component: Component, isProtected, path } = item;
        // const isAuthenticated = currentUser != null;

        return (
          <Route
            key={name}
            path={path}
            element={
              // !isProtected || isAuthenticated ? (
                <Component />
              // ) : (
              //   <Navigate to="/" replace />
              // )
            }
          />
        );
      })}
    </Routes>
  </BrowserRouter>
  );
}

export default App;
