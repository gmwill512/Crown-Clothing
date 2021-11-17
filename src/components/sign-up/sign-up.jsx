import React, { useState, useEffect } from 'react';
import FormInputs from '../form-input/form-input';
import CustomButton from '../button/custom-button';
import './sign-up.scss';
import { connect } from 'react-redux';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';
import { createStructuredSelector } from 'reselect';
import { setCurrentUser } from '../../redux/user/user.action';
import { selectCurrentUser } from '../../redux/user/user-selector';

function SignUp({ setCurrentUser, currentUser }) {
  const [signUpInfo, setSignUpInfo] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const { displayName, email, password, confirmPassword } = signUpInfo;

  function handleSubmit(e) {
    e.preventDefault();
    if (confirmPassword !== password) {
      alert('Your passwords do not match!');
      return;
    }
    // your register logic here
    createUserWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log(res);
        return res;
      })
      .then(async (auth) => {
        const newUser = await createUserProfileDocument(auth.user, {
          displayName,
        });
        console.log(newUser);
      })
      .then(() => {
        setSignUpInfo({
          displayName: '',
          email: '',
          password: '',
          confirmPassword: '',
        });
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  function handleChange(event) {
    const { value, name } = event.target;
    setSignUpInfo({ ...signUpInfo, [name]: value });
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user ? user : null);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  useEffect(() => {
    console.log('The user is', currentUser);
  }, [currentUser]);

  return (
    <div className="sign-up">
      <h2 className="title">I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className="sign-up-form" onSubmit={(e) => handleSubmit(e)}>
        <FormInputs
          type="text"
          name="displayName"
          value={displayName}
          handleChange={handleChange}
          required
          label="Display Name"
          autoComplete="true"
        />
        <FormInputs
          type="email"
          name="email"
          value={email}
          handleChange={handleChange}
          required
          label="Email"
          autoComplete="true"
        />
        <FormInputs
          type="password"
          name="password"
          value={password}
          handleChange={handleChange}
          required
          label="Password"
          autoComplete="true"
        />
        <FormInputs
          type="password"
          name="confirmPassword"
          value={confirmPassword}
          handleChange={handleChange}
          required
          label="Confirm Password"
          autoComplete="true"
        />
        <CustomButton type="submit">SIGN UP</CustomButton>
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

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
