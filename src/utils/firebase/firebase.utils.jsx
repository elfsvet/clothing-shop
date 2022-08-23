// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
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
const firebaseApp = initializeApp(firebaseConfig);
// it just one provider

const googleProvider = new GoogleAuthProvider();
// google wants that

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

// authentication similar
export const auth = getAuth();
// popup google window

export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);

export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

// create a user
export const createUserDocumentFromAuth = async (
  userAuth,
  // extended the functionality
  additionalInformation = {}
) => {
  if (!userAuth) return;
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        // extended the functionality if sometimes we have or not a value
        ...additionalInformation,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }
  return userDocRef;

  // if user data exists
  // if user data doesn't exist
  // create /set document with the data from userAuth in my collection
  // return userDocRef
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

// to sign in with a password we need email and password to pass
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  // if we don't have an email or password exit
  if (!email || !password) return;
  // if we have right email and password let's sign in and pass authentication with email and password
  return await signInWithEmailAndPassword(auth, email, password);
};
