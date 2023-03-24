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
    collection,
//     addDoc,
    updateDoc,
    doc,
    setDoc,
    getDoc,
    onSnapshot,
    query,
    where,
    getDocs,
    limit,
    orderBy,
    // arrayUnion,
} from 'firebase/firestore';
// import { ref, query } from 'firebase/database'
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebaseConfig';
// import { hasFormSubmit } from '@testing-library/user-event/dist/utils';

const UserContext = React.createContext()
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

function UserProvider({ children }) {

    const [user, setUser] = useState({}) // this gets used everywhere, stored info of user
    const [error, setError] = useState('')
    const [loggedIn, setLoggedIn] = useState(false) // this gets used everywhere, tells app that you are allowed to see things
    const [nodes, setNodes] = useState({})
    const [loader, setLoader] = useState(true)
    const [isAdmin, setIsAdmin] = useState(false)    
    const [codeStyle, setCodeStyle] = useState({color: 'black'})
    
    const [searchResults, setSearchResults] = useState([{}])
    const [selectedOption, setSelectedOption] = useState('name')

    // const [message, setMessage] = useState('')
    
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

    const sendReset = (email = user.email) => {
        sendPasswordResetEmail(auth, email)
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

    async function addNode(node) {
        const noderef = doc(db, 'users', user.uid)
        await updateDoc(
            noderef,
            {
                ['nodes.' + node]: true,
                lastNode: node,
            },
            { merge: true }
        )
        let nodeId = document.getElementById(node)
        // debugger
        nodeId.scrollIntoView({ behavior: 'smooth' })
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
        const docRef = doc(db, 'codes', 'heresy')  
        const codesSnap = await getDoc(docRef)
        setCodeStyle({color: 'black'})
        if (codesSnap) {
            let snapData = codesSnap.data()
            const matchingCode = Object.keys(snapData).find(key => key.toLowerCase() === e.toLowerCase())
            
            if (matchingCode) {
                console.log('EEEEY');
                setCodeStyle({color: 'black', animation: 'goodCode 2s'})
                // debugger
                snapData[matchingCode].forEach((element) => {
                    addNode(element)
                })


                // let newNodes = [...nodes, snapData[e]]
                // setNodes(newNodes)
                //////////////
                // snapData[e].forEach((node) => {
                //     setNodes(...nodes, node)
                // })
            } else {
                console.log('womp womp')
                setCodeStyle({color: 'black', animation: 'badCode 2s'})
            }
        } else {
            console.log('Ahm...this code is not valid... Please check and try again!');
        }
    }



     
            // setMessage('Ahm...this code is not valid... Please check and try again!')
                  
        // console.log(codesSnap)
        // if (codesSnap) {
            // console.log(codesSnap);
            
            // console.log(snapData);
            // console.log('code: ', e.detail);
            // debugger;
            // let prop = e
            // console.log(prop);
            // console.warn(snapData[prop]);
            // console.log(Object.keys(snapData));
            
            // let unlock;
            
            // console.warn(snapData[prop]);
            // snapData[prop].forEach((element) => {
            //     setNodes(element);
            //     unlock = element;
            //     // console.log(element);
            // });
            // setUnlock(unlock);
            
        // } else {
        //     console.log('No such document!');
        // }

        // console.log('code: ', e.detail);
    

    return (
        <UserContext.Provider value={{user, auth, db, error, login, logout, signup, sendReset, handleEnterCode, loggedIn, nodes, loader, isAdmin, codeStyle, searchResults, setSelectedOption, 
        // handleSearch
        }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }