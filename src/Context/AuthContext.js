import React, { useContext, useState } from 'react';
import { auth } from '../firebase/firebase.utils';

const AuthContext = React.createContext();

export function UseContext() {
  return useContext(AuthProvider);
}

function AuthProvider({ children }) {
  const [currentUser, setCurrentUser] = useState(null);

  function sign
    
  const value = { currentUser };

  return <AuthContext value={value}>{children}</AuthContext>;
}

export default AuthProvider;
