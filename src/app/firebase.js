// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import {
  getStorage,
  ref,
  uploadBytes,
  uploadBytesResumable,
} from "firebase/storage";
import { v4 } from "uuid";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC733SMfFaa5L26eC6wMwib9Psq5lxHGyI",
  authDomain: "restaurant-aa6aa.firebaseapp.com",
  projectId: "restaurant-aa6aa",
  storageBucket: "restaurant-aa6aa.appspot.com",
  messagingSenderId: "841108111360",
  appId: "1:841108111360:web:fe4a4ce9404b07bc8b18e5",
  measurementId: "G-MXLBR9PH5Q",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const storage = getStorage();

const metadata = {
  contentType: "image/jpeg",
};

export const uploadFile = (file) => {
  const storageRef = ref(storage, v4());
  uploadBytesResumable(storageRef, file, metadata).then((snapshot) => {
    console.log(snapshot);
  });
};
// se esta subiendo como C:/fakepath/miduconf.jpg

let analytics;
isSupported().then((isSupported) => {
  if (isSupported) {
    analytics = getAnalytics(app);
  }
});
export { analytics };
