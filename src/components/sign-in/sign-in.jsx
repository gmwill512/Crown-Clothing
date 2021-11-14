import React, { useState } from 'react';
import FormInputs from '../form-input/form-input';
import './sign-in.scss';
import CustomButton from '../button/custom-button';
import { signInWithGoogle } from '../../firebase/firebase.utils';

function SignIn() {
  const [logInInfo, setLogInInfo] = useState({ email: '', password: '' });

  function handleSubmit(e) {
    e.prevent.default();
    setLogInInfo({ email: '', password: '' });
  }

  function handleChange(event) {
    const { value, name } = event.target;
    setLogInInfo({ ...logInInfo, [name]: value });
    console.log(logInInfo);
  }

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={() => handleSubmit()}>
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
          <CustomButton onClick={signInWithGoogle} isGoogeleSignIn>
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
