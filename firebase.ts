// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3QlabqM52EsTukASbZccJMfi2RjsSx2Q",
  authDomain: "netflix-clone-tailwind.firebaseapp.com",
  projectId: "netflix-clone-tailwind",
  storageBucket: "netflix-clone-tailwind.appspot.com",
  messagingSenderId: "978267821009",
  appId: "1:978267821009:web:9696130d24e21450af86f0",
  measurementId: "G-R1BLL0M5LZ"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }