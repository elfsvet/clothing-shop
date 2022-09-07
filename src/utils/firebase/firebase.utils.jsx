// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// My web app's Firebase configuration
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

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = collection(db, collectionKey);
  // batch
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log('done');
};
// to minimize the third party impact on the application, 
export const getCategoriesAndDocuments = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(docSnapshot => docSnapshot.data())

  // .reduce((acc, docSnapshot) => {
  //   const { title, items } = docSnapshot.data();
  //   acc[title.toLowerCase()] = items;
  //   return acc;
  // }, {});

  // return categoryMap;
};

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
// to sign out we will use authentication
export const signOutUser = async () => await signOut(auth);

// permanent listener stays and listen stop on unmount. Create a listener for me using this callback
export const onAuthStateChangedListener = (callback) =>
  onAuthStateChanged(auth, callback);
