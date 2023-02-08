import React, {useState} from 'react'
import {
    getAuth,
//     GoogleAuthProvider,
//     signInWithPopup,
//     onAuthStateChanged,
//     updateProfile,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
} from 'firebase/auth';
import {
    getFirestore,
//     collection,
//     addDoc,
//     updateDoc,
    doc,
    setDoc,
//     getDoc,
//     onSnapshot,
} from 'firebase/firestore';

import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebaseConfig';

const UserContext = React.createContext()
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

function UserProvider({ children }) {

    const [user, setUser] = useState({}) // this gets used everywhere, stored info of user
    const [error, setError] = useState('')
    // let isAdmin = false;
    const [loggedIn, setLoggedIn] = useState(false) // this gets used everywhere, tells app that you are allowed to see things

    const login = (user) => {
        signInWithEmailAndPassword(auth, user.email, user.password)
        .then((userCredential) => {
            user.uid = userCredential.user.uid;
            setUser(user)
            setLoggedIn(true)
        })
        .catch((error) => {
            // errorCode = error.code;
            // const errorMessage = error.message;
            // console.log(errorCode, ': ', errorMessage);
            setError(error.message)
        });
    }

    const logout = () => {
        setUser({})
        setLoggedIn(false)
    }

    const signup = (user) => {        
        createUserWithEmailAndPassword(auth, user.email, user.password)
        .then((userCredential) => {
            console.log(userCredential);
            user.uid = userCredential.user.uid;
            saveUser();
        })
        .then(() => {
            setUser(user)
            setLoggedIn(true)
        })
        .catch((error) => {
            // errorCode = error.code;
            // const errorMessage = error.message;
            // console.log(errorCode, ': ', errorMessage);
            setError(error.message)
            console.log(error.message)
        })
    }

    const sendReset = () => {
        sendPasswordResetEmail(auth, user.email)
        .then(() => {
            setError('success')
            console.log("Success")
        })
        .catch((error) => {
            // errorCode = error.code;
            // const errorMessage = error.message;
            // console.log(errorCode, ': ', errorMessage);
            setError(error.message)
            console.log(error.message)
        });
    }

    async function saveUser() {
        const userRef = doc(db, 'users', user.uid);
        await setDoc(
            userRef,
            {
                uid: user.uid,
                name: user.firstName + ' ' + user.lastName,
                email: user.email,
                marketing: user.marketingOptIn,
            },
            { merge: true }
        );
    }

    return (
        <UserContext.Provider value={{user, auth, db, error, login, logout, signup, sendReset, loggedIn}}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }