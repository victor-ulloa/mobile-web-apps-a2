import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyB7doagwqBYrYRt32QqpUl20Km7Wdh9IV4",
  authDomain: "mobile-apps-a2.firebaseapp.com",
  projectId: "mobile-apps-a2",
  storageBucket: "mobile-apps-a2.appspot.com",
  messagingSenderId: "412996223650",
  appId: "1:412996223650:web:601fe449ace31243a40dfb"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);