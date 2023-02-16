import React, {useEffect, useState} from 'react'
import {
    getAuth,
//     GoogleAuthProvider,
//     signInWithPopup,
    onAuthStateChanged,
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
    getDoc,
    onSnapshot,
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
    const [nodes, setNodes] = useState({})
    const [loader, setLoader] = useState(true)
    const [isAdmin, setIsAdmin] = useState(true)    

    const [message, setMessage] = useState('')
    
    //     if (errorCode.includes('auth/invalid-value-')) {
    //         setError("Sorry, a user with this email could not be found. Please check for typos or sign up for an account.")
    //     } else if (errorCode === 'auth/wrong-password') {
    //         setError("The password you've entered is incorrect.")  
    //     } else if (errorCode === 'auth/user-not-found') {
    //         setError("Sorry, a user with this email could not be found. Please check for typos or sign up for an account.")
    //     } else if (errorCode === 'success') {
    //         setError("The email is on its way. Please check your Inbox.")
    //     } else {
    //         setError(`Error: ${errorCode}. Please try again or contact us.`)
    //     } 

    const login = (user) => {
        signInWithEmailAndPassword(auth, user.email, user.password)
        .then((userCredential) => {
            console.log(userCredential)
            user.uid = userCredential.user.uid;
            // debugger
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
        auth.signOut()
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

    useEffect(() => {
        onAuthStateChanged(auth, (authUser) => {
            if (authUser) {
                console.log(authUser);
                // debugger
                // list of available properties - https://firebase.google.com/docs/reference/js/firebase.User -- 2/11/2023: this does nothing
                // user.name = authUser.displayName;
                // user.photo = authUser.photoURL;
                user.uid = authUser.uid;
                // isLoggedIn = true;
                setLoggedIn(true)
                // setUser(authUser)
                // state = 'user';
                // console.log(authUser);
                setLoader(false)
                // checkActiveSession(authUser.uid);
                // console.log(authUser.uid);
                checkAdmin(authUser.uid);
                checkNodes(authUser.uid);
            } else {
                // state = 'login_buttons';
                // console.log('No User');
                // user = {
                //     name: '',
                //     uid: '',
                //     photo: '',
                //     email: '',
                // };
                // isLoggedIn = false;
                setNodes({})
                setLoader(false)
            }
        });    
    }, [])

    async function checkNodes(authUID) {
        // console.log(authUID);
        setLoader(true)
        const actSesSnap = await getDoc(doc(db, 'users', authUID));
        // debugger
        if (actSesSnap.exists()) {
            // console.log(actSesSnap);
            let snapData = actSesSnap.data();
            if (snapData.nodes) {
                setNodes(snapData.nodes)
                user.name = snapData.name;
                // startListener(authUID);
                setLoader(false)
            } else {
                setNodes({})
                setLoader(false)
            }
        } else {
            console.log('No such document!');
            setNodes({})
        }
        startListener(authUID);
    }

    async function checkAdmin(authUID) {
        // console.log(authUID);
        setLoader(true)
        const actSesSnap = await getDoc(doc(db, 'users', authUID));

        if (actSesSnap.exists()) {
            // console.log(actSesSnap);
            let snapData = actSesSnap.data();
            // console.log(snapData);
            if (snapData.isAdmin) {
                setIsAdmin(snapData.isAdmin)
                console.log('An admin is in!');
            }
        } else {
            console.log('No such document!');
            setNodes({})
        }
    }

    function startListener(listener) {
        const listenTo = listener;
        onSnapshot(doc(db, 'users', listenTo), (doc) => {
            const source = doc.metadata.hasPendingWrites ? 'Local' : 'Server';
            console.log(source, ' data: ', doc.data());
        //     // setLoader(true)
            let snapData = doc.data();
            setNodes(snapData.nodes)
        //     // getCurrentTask();
        });
        // console.warn('Listener started!');
    }

    async function handleEnterCode(e) {
        // const codesSnap = await getDoc(doc(db, 'codes', 'heresy'));
console.log(e)
        // if (codesSnap.exists()) {
        //     // console.log(codesSnap);
        //     let snapData = codesSnap.data();
        //     // console.log(snapData);
        //     // console.log('code: ', e.detail);
        //     let prop = e.detail;
        //     // console.log(prop);
        //     // console.warn(snapData[prop]);
        //     // console.log(Object.keys(snapData));
        //     if (snapData[prop]) {
        //         let unlock;
        //         // console.log('EEEEY');
        //         // console.warn(snapData[prop]);
        //         snapData[prop].forEach((element) => {
        //             setNode(element);
        //             unlock = element;
        //             // console.log(element);
        //         });
        //         setUnlock(unlock);
        //     } else {
        //         setMessage('Ahm...this code is not valid... Please check and try again!')
        //         // console.log('Ahm...this code is not valid... Please check and try again!');
        //     }
        // } else {
        //     console.log('No such document!');
        // }

        // console.log('code: ', e.detail);
    }

    return (
        <UserContext.Provider value={{user, auth, db, error, login, logout, signup, sendReset, handleEnterCode, loggedIn, nodes, loader, isAdmin}}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }