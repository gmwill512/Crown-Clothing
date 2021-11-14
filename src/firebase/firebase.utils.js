// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBs4SIMjnAtrOBLCJ5xmHC8QnvL1mGRhi4',
  authDomain: 'crown-clothing-fb8a4.firebaseapp.com',
  projectId: 'crown-clothing-fb8a4',
  storageBucket: 'crown-clothing-fb8a4.appspot.com',
  messagingSenderId: '1016810766108',
  appId: '1:1016810766108:web:40c1a3c1c4dcbb2c0584d9',
  measurementId: 'G-2KSBF44ET5',
};

firebase.initializeApp(config);

export const auth = getAuth();
export const firestore = firebase.firestore();

const googleProvider = new firebase.auth.GoogleAuthProvider();
export const signInWithGoogle = () => {
  signInWithPopup(auth, googleProvider)
    .then((res) => {
      //   const credentials = new GoogleAuthProvider.credentialFromResult(res);
      //   const token = credentials.accessToken;
      //   const user = res.displayName;
      // console.log(credentials, token, user);
    })
    .catch((err) => {
      //   const errCode = err.code;
      //   const errMessage = err.message;
      //   const email = err.email;
      //   const credentials = new GoogleAuthProvider(err);
      //console.log(credentials, errCode, errMessage, email);
    });
};

export default firebase;
