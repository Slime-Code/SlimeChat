import * as firebase from 'firebase/app';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import 'firebase/auth'
import 'firebase/database'

const firebaseConfig = {
  apiKey: "AIzaSyDwuJInDakXNABczTBzyiXJXahmt_4w9fU",
  authDomain: "slime-chat-5453a.firebaseapp.com",
  projectId: "slime-chat-5453a",
  storageBucket: "slime-chat-5453a.appspot.com",
  messagingSenderId: "719707964345",
  appId: "1:719707964345:web:60f3bac586b1f9de5d6c68",
  measurementId: "G-QCM45WW6C9"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = firebase.auth()
const database = firebase.database()

export{auth, database}