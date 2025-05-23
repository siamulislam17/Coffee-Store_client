import React, { useState } from 'react';
import AuthContext from './AuthContext';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase.init';

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);

    const signIn = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }

    const CreateAccount = (email,password) => {
       return createUserWithEmailAndPassword(auth,email,password)
        
    }





    const userInfo = {
        signIn,
        user,
        CreateAccount,
        setUser,
    }
    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;