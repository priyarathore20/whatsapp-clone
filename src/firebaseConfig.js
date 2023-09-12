// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMDKarv55Ayw0pCwC7MohJZ1LG46BFonU",
  authDomain: "whatsapp-clone-e2430.firebaseapp.com",
  projectId: "whatsapp-clone-e2430",
  storageBucket: "whatsapp-clone-e2430.appspot.com",
  messagingSenderId: "777498250311",
  appId: "1:777498250311:web:d92046481ca3f0269a3562",
  measurementId: "G-T53CHB74X0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

export default app;