import React, { useContext, useState } from "react";
import "./LandingPage.styled.js";
import {
  LoginBox,
  LoginPage,
  LoginTutorial,
  LoginWindow,
} from "./LandingPage.styled.js";
import app from "../../firebaseConfig.js";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import { AuthContext } from "../../Context/AppContext.js";
import { useSnackbar } from "notistack";
import CircularLoader from "../../Components/CircularLoader/index.jsx";

const LandingPage = () => {
  const [phoneNumber, setPhoneNumber] = useState("7011266334");
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("rathorepriya1705@gmail.com");
  const [isNewUser, setIsNewUser] = useState(false);
  const [loading, setLoading] = useState(false);
  const auth = getAuth(app);
  const db = getFirestore(app);
  const { currentUser } = useContext(AuthContext);
  const { enqueueSnackbar } = useSnackbar();

  const addingUserdata = (docId, dataToAdd) => {
    const docRef = doc(db, "Profiles", docId);
    setDoc(docRef, dataToAdd)
      .then(() => {
        enqueueSnackbar("Signed in successfully", { variant: "success" });
        console.log("Data added successfully with custom document ID:", docId);
      })
      .catch((error) => {
        enqueueSnackbar(error?.message, { variant: "error" });
        console.log(error);
      });
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

      const documentID = data.user.uid;
      const dataToAdd = {
        name: fullName,
        phone: phoneNumber,
        email: email,
        uid: data.user.uid,
      };
      addingUserdata(documentID, dataToAdd);
      currentUser(data.user);
    } catch (error) {
      console.log(error);
      enqueueSnackbar("Details cannot be empty", { variant: "error" });
    }
  };

  const handleLoginUser = async (event) => {
    event.preventDefault();
    try {
      setLoading(true);
      const data = await signInWithEmailAndPassword(auth, email, phoneNumber);
      setLoading(false);
      console.log("user created", data);
    } catch (error) {
      setLoading(false);
      enqueueSnackbar("Details cannot be empty", { variant: "error" });
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
        {!isNewUser ? (
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
                  disabled={loading}
                />
              </p>
              <input
                type="text"
                placeholder="Email"
                className="number"
                value={email}
                disabled={loading}
                onChange={(e) => setEmail(e.target.value)}
              />
              <button
                disabled={loading}
                onClick={handleLoginUser}
                className="login-btn"
              >
                {loading ? <CircularLoader /> : "Next"}
              </button>
              <p onClick={() => setIsNewUser(true)} className="login-link">
                New user? Get started
              </p>
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
        ) : (
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

              <button onClick={handleSignupUser} className="login-btn">
                Next
              </button>
              <p onClick={() => setIsNewUser(false)} className="login-link">
                Already a user? Signin
              </p>
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
        )}
      </LoginBox>
    </LoginPage>
  );
};

export default LandingPage;
