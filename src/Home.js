import React, { useState } from 'react'

// import DivergenceOne from './DivergenceOne'
// import DivergenceTwo from './DivergenceTwo'
// import DivergenceThree from './DivergenceThree'
// import DivergenceFour from './DivergenceFour'

import LogIn from './LogIn'
import SignUp from './SignUp'
import LoginAssistant from './LoginAssistant'

////////////////////////////////////////////////

// import EnterCode from './EnterCode.svelte';

// import Grid from './Grid.svelte';

// Imports
import { initializeApp } from 'firebase/app';
// import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';
import {
    getAuth,
//     GoogleAuthProvider,
//     signInWithPopup,
//     onAuthStateChanged,
//     updateProfile,
} from 'firebase/auth';
// import { getAnalytics, logEvent } from 'firebase/analytics';
import {
    getFirestore,
//     collection,
//     addDoc,
//     updateDoc,
//     doc,
//     setDoc,
//     getDoc,
//     onSnapshot,
} from 'firebase/firestore';
// import { getStorage } from 'firebase/storage';
import { firebaseConfig } from './firebaseConfig';
import Footer from './Footer'
// import Tutorial from './Tutorial.svelte';
// import Loader from '../base/Loader.svelte';
// import LogInAssistant from './LogInAssistant.svelte';
// import SignUp from './SignUp.svelte';
// import Footer from './Footer.svelte';
// import LogIn from './LogIn.svelte';
// import Admin from '../admin/Admin.svelte';
// import GridDiv1 from './Grid_Div1.svelte';

const app = initializeApp(firebaseConfig);
// // const { initializeAppCheck, ReCaptchaV3Provider } = require('firebase/app-check');
const auth = getAuth(app);
// const analytics = getAnalytics();
const db = getFirestore();
// const storage = getStorage(firebaseApp);
// // const appCheck = initializeAppCheck(app, {
// //     provider: new ReCaptchaV3Provider('6LeecSogAAAAAF_ZjlX-JBhiXjxaGlbx3QgYfQ8W'),
// //     // Optional argument. If true, the SDK automatically refreshes App Check
// //     // tokens as needed.
// //     isTokenAutoRefreshEnabled: true,
// // });
// const google = new GoogleAuthProvider();


let user = {
    name: '',
    uid: '',
    photo: '',
    email: '',
};

// let loader = true;
// let pageloader = true;
// let scrollLock = false;
let isAdmin = false;
let showAdmin = false; //testing only

// $: isAdmin, (showAdmin = false);

// let nodes = false;

// let showCodePrompt = false;
// let message = false;
// let autoScrollTo = '#WelcomeToParadox';
// let addUnlockTo = false;

// let loginState = 'buttons';

///////////////////////////////

export default function () {

    const [signLog, setSignLog] = useState(false) // should not matter until loginState is true
    const [loginState, setLoginState] = useState(false) // Have we hit a signup or login button yet? 
    const [isLoggedIn, setIsLoggedIn] = useState(false)

  return (
    <div>
        {isLoggedIn ? <> {/* have we signed up/logged in at all yet? rest of components go here */}
        
            </> : <> 
            {loginState ? <> {/* have we pressed the sign up or login buttons yet? */}
                {signLog ? <>
                    <SignUp auth={auth} db={db} />
                </> : <>
                    <LogIn auth={auth} db={db} />
                </>}
            </> : <>
            
            </>}
            <LoginAssistant 
                setSignLog={setSignLog} 
                signLog={signLog} 
                setLoginState={setLoginState} 
            />
        </>}

        {/* <a>
            <DivergenceOne />
        </a>
        <a>
            <DivergenceTwo />
        </a>
        <a>
            <DivergenceThree />
        </a>
        <a>
            <DivergenceFour />
        </a> */}
        <Footer user={user} isLoggedIn={isLoggedIn} isAdmin={isAdmin} showAdmin={showAdmin} auth={auth} />
    </div>
  )
}

