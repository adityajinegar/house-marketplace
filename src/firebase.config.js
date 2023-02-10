import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBXUDA4ZZt81zEqExoqJDUoc55pirfWma0',
  authDomain: 'house-marketplace-app-74d87.firebaseapp.com',
  projectId: 'house-marketplace-app-74d87',
  storageBucket: 'house-marketplace-app-74d87.appspot.com',
  messagingSenderId: '61587400263',
  appId: '1:61587400263:web:10ddffe81893b1d1cab362',
  measurementId: 'G-S5XWNWR4DP',
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();
