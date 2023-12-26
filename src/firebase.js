import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "adminapp-537c6.firebaseapp.com",
  projectId: "adminapp-537c6",
  storageBucket: "adminapp-537c6.appspot.com",
  messagingSenderId: "933072964918",
  appId: "1:933072964918:web:7c296b364f8534ed317797",
};

const app = initializeApp(firebaseConfig);
