// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions, httpsCallable } from "firebase/functions";
const firebaseConfig = {
  apiKey: process.env.REACT_APP_DEV_FIREBASE_API_KEY,
  authDomain: process.env.REACT_APP_DEV_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_DEV_FIREBASE_PROJECT_ID,
  storageBucket: process.env.REACT_APP_DEV_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_DEV_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_DEV_FIREBASE_APP_ID,
  measurementId: process.env.REACT_APP_DEV_FIREBASE_MEASUREMENT_ID,
};

const app = initializeApp(firebaseConfig, "AminoDev");
const functions = getFunctions(app);

export const sendMail = async (subject, message) => {
  const sendMailCall = httpsCallable(functions, "sendEmail");
  const resp = await sendMailCall({
    to: "contact@aminorewards.com",
    subject: subject,
    text: message,
  });
  return resp;
};
export const auth = getAuth(app);
export const db = getFirestore(app);
