import React, { useState, useContext, useEffect } from 'react';
import FormInputs from '../form-input/form-input';
import './sign-in.scss';
import CustomButton from '../button/custom-button';
import { AuthContext } from '../../Context/AuthContext';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from 'firebase/auth';

function SignIn() {
  const { setCurrentUser } = useContext(AuthContext);
  const [logInInfo, setLogInInfo] = useState({ email: '', password: '' });
  const [google, setGoogle] = useState(false);
  const { email, password } = logInInfo;

  function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    setGoogle(true);
    return signInWithPopup(auth, provider);
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

export default SignIn;
