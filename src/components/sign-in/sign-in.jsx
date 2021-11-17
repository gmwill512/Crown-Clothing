import React, { useState, useEffect } from 'react';
import FormInputs from '../form-input/form-input';
import './sign-in.scss';
import CustomButton from '../button/custom-button';
import { connect } from 'react-redux';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { selectCurrentUser } from '../../redux/user/user-selector';
import { createStructuredSelector } from 'reselect';
import { setCurrentUser } from '../../redux/user/user.action';

function SignIn({ setCurrentUser, currentUser }) {
  const [logInInfo, setLogInInfo] = useState({ email: '', password: '' });
  const [google, setGoogle] = useState(false);
  const { email, password } = logInInfo;

  function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    setGoogle(true);
    try {
      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;
          // The signed-in user info.
          const user = result.user;
          console.log(user, token);
          // ...
        })
        .catch((error) => {
          // Handle Errors here.
          const errorCode = error.code;
          const errorMessage = error.message;
          // The email of the user's account used.
          const email = error.email;
          // The AuthCredential type that was used.
          const credential = GoogleAuthProvider.credentialFromError(error);
          // ...
          console.log(errorCode, errorMessage, email, credential);
        });
    } catch {
      console.log('There was an error with firebase');
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
      })
      .catch((err) => {
        const errorCode = err.code;
        const errorMessage = err.message;
        console.log(errorCode, errorMessage);
      })
      .finally(() => {
        setLogInInfo({ email: '', password: '' });
      });
  }

  function handleChange(event) {
    const { value, name } = event.target;
    setLogInInfo({ ...logInInfo, [name]: value });
  }

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (userAuth) => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot((snapShot) => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data(),
          });
        });
      } else {
        setCurrentUser(userAuth);
      }
    });
    return () => {
      unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log('sign-in', currentUser);
  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={(e) => handleSubmit(e)}>
        <FormInputs
          name="email"
          value={logInInfo.email}
          required
          type="email"
          handleChange={handleChange}
          label="email"
          autoComplete="on"
        />
        <FormInputs
          name="password"
          value={logInInfo.password}
          required
          type="password"
          handleChange={handleChange}
          label="password"
          autoComplete="on"
        />
        <div className="buttons">
          <CustomButton type="submit">Sign In</CustomButton>
          <CustomButton onClick={signInWithGoogle} google={google}>
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
}

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
});

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
