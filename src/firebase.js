// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import Api_file from "./Api_file"
import { getStorage } from "firebase/storage";
// Initialize Firebase
const app = initializeApp(Api_file);
// const analytics = getAnalytics(app);
export let auth=getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);