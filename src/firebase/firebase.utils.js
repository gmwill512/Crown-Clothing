// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth } from 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBs4SIMjnAtrOBLCJ5xmHC8QnvL1mGRhi4',
  authDomain: 'crown-clothing-fb8a4.firebaseapp.com',
  projectId: 'crown-clothing-fb8a4',
  storageBucket: 'crown-clothing-fb8a4.appspot.com',
  messagingSenderId: '1016810766108',
  appId: '1:1016810766108:web:40c1a3c1c4dcbb2c0584d9',
  measurementId: 'G-2KSBF44ET5',
};

export const app = firebase.initializeApp(config);
export const auth = getAuth();
export const firestore = firebase.firestore();

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);
  const snapShot = await userRef.get();
  console.log(userAuth);
  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export default firebase;
