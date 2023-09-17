import React, { useContext, useState } from "react";
import "./LandingPage.styled.js";
import {
  LoginBox,
  LoginPage,
  LoginTutorial,
  LoginWindow,
} from "./LandingPage.styled.js";
import app from "../../firebaseConfig.js";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes } from "firebase/storage";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AppContext.js";

const LandingPage = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [image, setImage] = useState(null);
  const storage = getStorage(app);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const navigate = useNavigate();
  const { currentUser } = useContext(AuthContext);

  const addingUserdata = (docId, dataToAdd) => {
    const docRef = doc(db, "Profiles", docId);
    setDoc(docRef, dataToAdd)
      .then(() => {
        console.log("Data added successfully with custom document ID:", docId);

        navigate("/home");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleImageChange = (e) => {
    setImage(e.target?.files[0]);
  };

  const handleSignupUser = async (e) => {
    e.preventDefault();
    try {
      const data = await createUserWithEmailAndPassword(
        auth,
        email,
        phoneNumber
      );
      console.log("user created", data);

      // let avatarURL = "";
      // const avatarRef = ref(
      //   storage,
      //   `avatar/${data?.user?.uid}.${image.name.split(".").pop()}`
      // );
      // const snapshot = await uploadBytes(avatarRef, image);
      // avatarURL = snapshot?.metadata?.fullPath;

      const documentID = data.user.uid;
      const dataToAdd = {
        name: fullName,
        phone: phoneNumber,
        email: email,
        // avatarURL: avatarURL,
        uid: data.user.uid,
      };
      addingUserdata(documentID, dataToAdd);
      currentUser(data.user);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <LoginPage>
      <div className="login-navbar"></div>
      <LoginBox>
        <div className="logo">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/WhatsApp.svg/767px-WhatsApp.svg.png"
            alt=""
          />
          <header className="logo-title">whatsapp web</header>
        </div>
        <LoginWindow>
          <div className="login-window-details">
            <p className="number-title">Enter your details</p>
            <p className="number">
              +91{" "}
              <input
                className="number-input"
                type="text"
                onChange={(e) => setPhoneNumber(e.target.value)}
                value={phoneNumber}
              />
            </p>
            <input
              type="text"
              placeholder="Full name"
              className="number"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
            <input
              type="text"
              placeholder="Email"
              className="number"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p className="number">
              Select your avatar:{" "}
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="number-input"
              />
            </p>
            <button onClick={handleSignupUser} className="login-btn">
              Next
            </button>
          </div>
          <LoginTutorial>
            <p className="login-tutorial-heading">Tutorial</p>
            <a
              className="tutorial-link"
              href="https://faq.whatsapp.com/1317564962315842/?cms_platform=web&lang=en"
            >
              Need help to get started?
            </a>
          </LoginTutorial>
        </LoginWindow>
      </LoginBox>
    </LoginPage>
  );
};

export default LandingPage;
