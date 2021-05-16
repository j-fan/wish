import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/analytics";

export type Wish = {
  id: string;
  value: string;
  timestamp: firebase.firestore.Timestamp;
};

const firebaseConfig = {
  apiKey: "AIzaSyDnyGa4r0OWxSjgUZ3_U2EKucy0H6PqDZo",
  authDomain: "alvin-wish.firebaseapp.com",
  projectId: "alvin-wish",
  storageBucket: "alvin-wish.appspot.com",
  messagingSenderId: "402466955936",
  appId: "1:402466955936:web:9d24f640ad918100461fc5",
  measurementId: "G-XWC5106SHG",
};

let db: firebase.firestore.Firestore;
let initialized = false;
export const wishesCollecionName = "wishes";

export const setupDb = () => {
  if (initialized) {
    return;
  }
  initialized = true;
  firebase.initializeApp(firebaseConfig);
  db = firebase.firestore();
  firebase.analytics();
};

export const getDb = () => {
  return db;
};
