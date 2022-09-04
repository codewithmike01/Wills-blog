// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
// import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: 'AIzaSyDUJYivilxv7cdqffYIlMFghM9Dq0CJQAg',
  authDomain: 'willsblog-97e1f.firebaseapp.com',
  projectId: 'willsblog-97e1f',
  storageBucket: 'willsblog-97e1f.appspot.com',
  messagingSenderId: '600430174222',
  appId: '1:600430174222:web:6fcad3b526f4362bdd9c5f',
  measurementId: 'G-ZFRJJ5Q8CW',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// create a provider

const provider = new GoogleAuthProvider();

// Function to rep signing
const signInWithGoogle = () => {};

export default auth;
// const analytics = getAnalytics(app);
