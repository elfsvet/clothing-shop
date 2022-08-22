// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from 'firebase/auth';

import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBwKIYQ30aiOzy8wB5CGkFgdOPYjhG8j7g',
  authDomain: 'crwn-clothing-db-e0783.firebaseapp.com',
  projectId: 'crwn-clothing-db-e0783',
  storageBucket: 'crwn-clothing-db-e0783.appspot.com',
  messagingSenderId: '446436527070',
  appId: '1:446436527070:web:1de2c4616a7e06ad8eab4f',
};

// Initialize Firebase
const fireBaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
// google wants that
provider.setCustomParameters({
  prompt: 'select_account',
});
// authentication similar
export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();
export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, 'users', userAuth.uid);

  console.log(userDocRef);
  const userSnapshot = await getDoc(userDocRef)
  console.log(userSnapshot);
  console.log(userSnapshot.exists());
};
