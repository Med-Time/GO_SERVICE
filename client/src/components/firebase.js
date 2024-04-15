// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
// import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyDkeKJezWPzXu9N4A3Wf9HKW9hDm_9wFQY",
  authDomain: "goservice-417211.firebaseapp.com",
  projectId: "goservice-417211",
  storageBucket: "goservice-417211.appspot.com",
  messagingSenderId: "853707336847",
  appId: "1:853707336847:web:4d5b5cf80585b7ad8154fa",
  measurementId: "G-G8MNLL3VWK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
// const analytics = getAnalytics(app);