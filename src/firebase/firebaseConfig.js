import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyD2149j7HkZJecK2k-2LBW1IziEXoTjacU",
  authDomain: "todolist-b577e.firebaseapp.com",
  projectId: "todolist-b577e",
  storageBucket: "todolist-b577e.appspot.com",
  messagingSenderId: "762166728859",
  appId: "1:762166728859:web:07b8fecfa21a5bd0ecce3e",
  measurementId: "G-5QZBZ2J5X5"
};


export const app = initializeApp(firebaseConfig);
export const db = getFirestore()
const analytics = getAnalytics(app);
