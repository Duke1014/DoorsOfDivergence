import React, { useState } from 'react'
import paper from './img/vintagepaper4.png'
import {
//         getAuth,
//         GoogleAuthProvider,
//         signInWithPopup,
//         onAuthStateChanged,
//         updateProfile,
    createUserWithEmailAndPassword,
} from 'firebase/auth';
import {
//         getFirestore,
//         collection,
//         addDoc,
//         updateDoc,
    doc,
    setDoc,
//         getDoc,
//         onSnapshot,
} from 'firebase/firestore';
import Recaptcha from "react-google-recaptcha"

export default function SignUp({ auth, db, switchSignLog }) {

    let errorCode = false;

    let user = {
        firstName: null,
        lastName: null,
        email: null,
        password: null,
        repeatPassword: null,
        marketingOptIn: true,
    }

    const wrapStyle = {
        backgroundColor: '#d2b79e',
        backgroundImage: `url(${paper})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }

    const buttonStyle = {
        padding: '6px 16px',
        margin: '6px',
        outline: '1px solid black',
        outlineOffset: '2px',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        border: '1px solid black',
        color: 'black'
    }

    function createUser() {
        createUserWithEmailAndPassword(auth, user.email, user.password)
            .then((userCredential) => {
                // Signed in
                // console.log(userCredential.user);
                user.uid = userCredential.user.uid;

                saveUser();
                // ...
            })
            .catch((error) => {
                errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, ': ', errorMessage);
                // ..
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

    // let REACT_APP_SECRET_KEY = "6Lf-Qj0kAAAAAGGBE9_n2ZiuUqQjd17JXo5Oqh_6"
    let REACT_APP_SITE_KEY = "6Lf-Qj0kAAAAAMLpNC5j8INXH_4zYEDb6iHxPtWH"

    const showErrorCode = () => {
        if (errorCode) {
            if (errorCode === 'auth/email-already-in-use') {
                return <p className="mb-2">Sorry, this e-mail is already used.</p>
            } else if (errorCode === 'auth/user-disabled') {
                return <p className="mb-2">Sorry, this email has been disabled</p>
            } else {
                return <p className="mb-2">Error: {errorCode}. Please try again or contact us.</p>
            }
        }
    }

    const [userFirstName, setUserFirstName] = useState()
    const [userLastName, setUserLastName] = useState()
    const [userEmail, setUserEmail] = useState()
    const [userPassword, setUserPassword] = useState()
    const [userRepeatPassword, setUserRepeatPassword] = useState()
    const [checked, setChecked] = useState(true)
    const [captchaState, setCaptchaState] = useState()

    const handleCheck = (e) => {
        setChecked(!checked)
    }

  return (
    <div>
        <div className="fixed z-50 grid w-full h-full overflow-auto bg-black bg-opacity-70">
            <div className=" xs:p-4 wrap place-self-center max-w-prose" style={wrapStyle}>
                <div className="grid min-h-screen p-4 text-center text-black border-black xs:min-h-0 xs:p-8 xs:border xs:outline outline-black outline-offset-2">
                    <h1 className="my-4 text-4xl font-archaic">Sign Up</h1>
                    <p className="text-lg">
                        Create your profile to track your progress in the The Order of the Three Keys.
                    </p>
                    <p className="mt-4 text-lg">
                        <small>
                            Already have an account? <span onClick={switchSignLog}>Log in instead</span>.
                        </small>
                    </p>
                    <br />
                    <form onSubmit={createUser}>
                        <div className="grid md:grid-cols-2 gap-x-4 md:text-left">
                            <div className="grid">
                                <label htmlFor="first-name">First name:</label>
                                <input
                                    type="text"
                                    name="first-name"
                                    id="first-name"
                                    required
                                    placeholder="First name"
                                    value={userFirstName}
                                    onChange={e => setUserFirstName(e.target.value)}
                                />
                            </div>
                            <div className="grid">
                                <label htmlFor="last-name">Last name:</label>
                                <input
                                    type="text"
                                    name="last-name"
                                    id="last-name"
                                    required
                                    placeholder="Last name"
                                    value={userLastName}
                                    onChange={e => setUserLastName(e.target.value)}
                                />
                            </div>
                            <div className="grid">
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    name="email"
                                    autoComplete="username"
                                    id="email"
                                    placeholder="Your email"
                                    required
                                    value={userEmail}
                                    onChange={e => setUserEmail(e.target.value)}
                                />
                            </div>
                            <br className="hidden md:block" />
                            <div className="grid">
                                <label htmlFor="password">Password:</label>
                                <input
                                    type="password"
                                    minLength="8"
                                    name="password"
                                    autoComplete="new-password"
                                    id="password"
                                    placeholder="Your secure password"
                                    required
                                    value={userPassword}
                                    onChange={e => setUserPassword(e.target.value)}
                                />
                            </div>
                            <div className="grid">
                                <label htmlFor="password-repeat">Repeat password:</label>
                                <input
                                    type="password"
                                    minLength="8"
                                    name="password-repeat"
                                    autoComplete="new-password"
                                    id="password-repeat"
                                    placeholder="Confirm your password"
                                    required
                                    value={userRepeatPassword}
                                    onChange={e => setUserRepeatPassword(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="flex gap-3 text-left place-items-center">
                            <input
                                type="checkbox"
                                name="marketing-optin"
                                id="marketing-optin"
                                checked={checked}
                                onClick={handleCheck}
                            />
                            <label htmlFor="marketing-optin"
                                >I'd like to receive news about your experiences.
                                <br />
                                <small
                                    >Don't worry, we won't spam your Inbox, but save our emails only for the
                                    important occasions.</small>
                            </label>
                        </div>     

                        {captchaState ? <>
                            <p className="m-8">Marvelous, you're not a robot! Come join our ranks.</p>
                        </> : <>
                            <div className="justify-center my-4 text-center place-self-center">
                                <Recaptcha
                                    sitekey={REACT_APP_SITE_KEY}
                                    badge={'inline'}
                                    size={'normal'}
                                    onSuccess={setCaptchaState(!captchaState)}
                                /> 
                                <p>
                                    <small>
                                        If you don’t see our
                                        <a href="https://www.google.com/recaptcha/about/" > {/* target="_blank" */}
                                            reCAPTCHA
                                        </a>
                                        above,
                                        <a href="https://m.me/doorsofdivergence"> contact us</a>
                                        .
                                    </small>
                                </p>
                            </div>
                        </>}
         
                        {showErrorCode}

                        {/* <!-- on:click={() => authAnonymously()} --> */}
                        <button
                            className="place-self-center"
                            style={buttonStyle}
                            disabled={captchaState !== 'success' ||
                            user.password !== user.repeatPassword ||
                            user.password === null ||
                            user.repeatPassword === null
                                ? true
                                : false}
                        >
                            Confirm
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}


{/* 

    :global(.g-recaptcha) {
        display: inline-block;
    }
    input:not([type='checkbox']) {
        padding: 6px;
        margin-top: 6px;
        margin-bottom: 16px;
        background-color: rgba(255, 255, 255, 0.5);
        border: 1px solid darkgoldenrod;
    }

    input:not([type='checkbox']):hover {
        border: 1px solid black;
    }
    input:not([type='checkbox']):focus {
        outline: 1px solid black;
        outline-offset: 2px;
        border: 1px solid black;
        background-color: white;
    }


    button:hover:not(:disabled),
    button:focus:not(:disabled) {
        background-color: black;
        border: 1px solid black;
        color: white;
    }

    button:disabled {
        opacity: 0.5;
        cursor: not-allowed;
    } */}