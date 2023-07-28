// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
  apiKey: "AIzaSyC04pFqtEpIn_S7PbOIPpKNhDvpC4UEnFI",
  authDomain: "fir-todo-app-927cc.firebaseapp.com",
  projectId: "fir-todo-app-927cc",
  storageBucket: "fir-todo-app-927cc.appspot.com",
  messagingSenderId: "181095744293",
  appId: "1:181095744293:web:6bc7077878c4b6df3810cc"
};
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
