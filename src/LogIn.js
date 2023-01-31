import React, { useState } from 'react'
import {
    //     getAuth,
    //     GoogleAuthProvider,
    //     signInWithPopup,
    //     onAuthStateChanged,
    //     updateProfile,
    //     createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        sendPasswordResetEmail,
    } from 'firebase/auth';

    import paper from "./img/vintagepaper4.png"

export default function Login({ auth, db, switchSignLog }) {

    // import { createEventDispatcher } from 'svelte';

    // import {
    //     getFirestore,
    //     collection,
    //     addDoc,
    //     updateDoc,
    //     doc,
    //     setDoc,
    //     getDoc,
    //     onSnapshot,
    // } from 'firebase/firestore';
    // export let auth;
    // export let db;
    // const dispatch = createEventDispatcher();
    // import { Recaptcha, recaptcha, observer } from 'svelte-recaptcha-v2';
    // const googleRecaptchaSiteKey = '6LcmTGMgAAAAAO5YDiZlX74yEjBcdGhsZ_Ee2dRa';
    // let captchaState = 'unset';
    let errorCode = false;

    let user = {
        firstName: null,
        lastName: null,
        email: null,
        password: null,
        repeatPassword: null,
        marketingOptIn: true,
    };

    function logInUser() {
        signInWithEmailAndPassword(auth, user.email, user.password)
            .then((userCredential) => {
                // Signed in
                // console.log(userCredential.user);
                user.uid = userCredential.user.uid;

                // saveUser();
                // ...
            })
            .catch((error) => {
                errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, ': ', errorMessage);
                // ..
            });
    }

    function sendReset() {
        sendPasswordResetEmail(auth, user.email)
            .then(() => {
                errorCode = 'success';
            })
            .catch((error) => {
                errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, ': ', errorMessage);
                // ..
            });
    }

    // async function saveUser() {
    //     const userRef = doc(db, 'users', user.uid);
    //     await setDoc(
    //         userRef,
    //         {
    //             uid: user.uid,
    //             name: user.firstName + ' ' + user.lastName,
    //             email: user.email,
    //             marketing: user.marketingOptIn,
    //         },
    //         { merge: true }
    //     );
    // }

    ////////////////////////////////////

    const handleErrorCode = () => {
        if (errorCode === 'auth/wrong-password') {
            return <p className="mb-2">The password you've entered is incorrect.</p>   
        } else if (errorCode === 'auth/user-not-found') {
           return <p className="mb-2">
            Sorry, a user with this email could not be found. Please check for
            typos or sign up for an account.
            </p>
        } else {
            return <p className="mb-2">Error: {errorCode}. Please try again or contact us.</p>
        }
    }

    const showErrorCode = () => {
        if (errorCode) {
            if (errorCode.includes('auth/invalid-value-')) {
                return <p className="mb-2">
                    Sorry, a user with this email could not be found. Please check for
                    typos or sign up for an account.
                </p>
            } else if (errorCode === 'auth/user-not-found') {
                return <p className="mb-2">
                    Sorry, a user with this email could not be found. Please check for
                    typos or sign up for an account.
                </p>
            } else if (errorCode === 'success') {
                return <div>
                    <p className="mb-2">The email is on its way. Please check your Inbox.</p>
                    <p className="mb-2" onClick={setShowForgotPassword(false)}>
                        Back to Sign in
                    </p>
                </div>
            } else {
                return <p className="mb-2">Error: {errorCode}. Please try again or contact us.</p>
            }
        }
    }

    const [userEmail, setUserEmail] = useState()
    const [userPassword, setUserPassword] = useState()

    const [showForgotPassword, setShowForgotPassword] = useState(false)

    const wrapStyle = {
        backgroundColor: '#d2b79e',
        backgroundImage: `url(${paper})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }


    return (
        <div className="fixed z-50 grid w-full h-full overflow-auto bg-black bg-opacity-70">
            <div className=" xs:p-4 wrap place-self-center max-w-prose" style={wrapStyle}>
                <div className="grid min-h-screen p-4 text-center text-black border-black place-content-center xs:min-h-0 xs:p-8 xs:border xs:outline outline-black outline-offset-2">
                    {showForgotPassword ? <>  
                        <h1 className="my-4 text-4xl font-archaic">Password Reset</h1>
                        <p className="text-lg">Enter your email to reset your password.</p>
                        <p className="mt-4 text-lg">
                            <small>
                                Clicked here by mistake? <span onClick={setShowForgotPassword(true)}
                                    >Log in as usual</span>.
                            </small>
                        </p>
                        <br />
                        <form onSubmit={sendReset}>
                            <div className="grid gap-x-4 md:text-left">
                                <label for="email">Email:</label>
                                <input
                                    type="email"
                                    name="email"
                                    autocomplete="username"
                                    id="email"
                                    placeholder="Enter your email"
                                    required
                                    value={userEmail}
                                    onChange={e => setUserEmail(e.target.value)}
                                />
                            </div>
                            {showErrorCode}
                            <button
                                className=" place-self-center"
                                disabled={user.email === null ? true : false}
                            >
                                Send reset instructions
                            </button>
                        </form>                        
                    </> : <>    
                        <h1 className="my-4 text-4xl font-archaic">Log In</h1>
                        <p className="text-lg">
                            Sign into your profile to track your progress in the The Order of the Three Keys.
                        </p>
                        <p className="mt-4 text-lg">
                            <small>
                                Don't have an account yet? 
                                <span onClick={switchSignLog}>Sign up instead</span>.
                            </small>
                        </p>
                        <br />
                        <form onSubmit={logInUser}>
                            <div className="grid gap-x-4 md:text-left">
                                <label for="email">Email:</label>
                                <input
                                    type="email"
                                    name="email"
                                    autocomplete="username"
                                    id="email"
                                    placeholder="Enter your email"
                                    required
                                    value={userEmail}
                                    onChange={e => setUserEmail(e.target.value)}
                                />
                                <label for="password">Password:</label>
                                <input
                                    type="password"
                                    minlength="6"
                                    name="password"
                                    autocomplete="current-password"
                                    id="password"
                                    placeholder="Enter your password"
                                    required
                                    value={userPassword}
                                    onChange={e => setUserPassword(e.target.value)}
                                />
                                <p className="mb-2 -mt-1 text-right">
                                    <small onClick={setShowForgotPassword(true)}
                                        >Forgot your password?</small>
                                </p>
                            </div>                            
                            {errorCode ? <>     
                                {handleErrorCode}
                                </> : <></>
                            }
                            <button
                                className=" place-self-center"
                                disabled={user.password === null || user.email === null ? true : false}
                            >Log in</button>
                        </form>
                    </>}
                </div>
            </div>
        </div>
    )
}



    // :global(.g-recaptcha) {
    //     display: inline-block;
    // }
    // input:not([type='checkbox']) {
    //     padding: 6px;
    //     margin-top: 6px;
    //     margin-bottom: 16px;
    //     background-color: rgba(255, 255, 255, 0.5);
    //     border: 1px solid darkgoldenrod;
    // }

    // input:not([type='checkbox']):hover {
    //     border: 1px solid black;
    // }
    // input:not([type='checkbox']):focus {
    //     outline: 1px solid black;
    //     outline-offset: 2px;
    //     border: 1px solid black;
    //     background-color: white;
    // }

    // button {
    //     padding: 6px 16px;
    //     margin: 6px;
    //     outline: 1px solid black;
    //     outline-offset: 2px;
    //     background-color: rgba(255, 255, 255, 0.5);
    //     border: 1px solid black;
    //     color: black;
    // }
    // button:hover:not(:disabled),
    // button:focus:not(:disabled) {
    //     background-color: black;
    //     border: 1px solid black;
    //     color: white;
    // }

    // button:disabled {
    //     opacity: 0.5;
    //     cursor: not-allowed;
    // }