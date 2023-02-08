import React, { useState, useContext } from 'react'

// import DivergenceOne from './DivergenceOne'
// import DivergenceTwo from './DivergenceTwo'
// import DivergenceThree from './DivergenceThree'
// import DivergenceFour from './DivergenceFour'

import LogIn from './LogIn'
import SignUp from './SignUp'
import LoginAssistant from './LoginAssistant'
import { UserContext } from './context/user'

////////////////////////////////////////////////

// import EnterCode from './EnterCode.svelte';

// import Grid from './Grid.svelte';

// Imports

// import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';

// import { getAnalytics, logEvent } from 'firebase/analytics';

// import { getStorage } from 'firebase/storage';

import Footer from './Footer'
// import Tutorial from './Tutorial.svelte';
// import Loader from '../base/Loader.svelte';
// import LogInAssistant from './LogInAssistant.svelte';
// import SignUp from './SignUp.svelte';
// import Footer from './Footer.svelte';
// import LogIn from './LogIn.svelte';
// import Admin from '../admin/Admin.svelte';
// import GridDiv1 from './Grid_Div1.svelte';


// // const { initializeAppCheck, ReCaptchaV3Provider } = require('firebase/app-check');

// const analytics = getAnalytics();

// const storage = getStorage(firebaseApp);
// // const appCheck = initializeAppCheck(app, {
// //     provider: new ReCaptchaV3Provider('6LeecSogAAAAAF_ZjlX-JBhiXjxaGlbx3QgYfQ8W'),
// //     // Optional argument. If true, the SDK automatically refreshes App Check
// //     // tokens as needed.
// //     isTokenAutoRefreshEnabled: true,
// // });
// const google = new GoogleAuthProvider();

// let loader = true;
// let pageloader = true;
// let scrollLock = false;

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

    const { user, loggedIn, auth, db } = useContext(UserContext)
    const [signLog, setSignLog] = useState(false) // should not matter until loginState is true
    const [loginState, setLoginState] = useState(false) // Have we hit a signup or login button yet? 

    const handleLogClick = () => {
        setLoginState(true)
        setSignLog(false)
    }

    const handleSignClick = () => {
        setLoginState(true)
        setSignLog(true)
    }

  return (
    <div>
        {loggedIn ? <> {/* have we signed up/logged in at all yet? rest of components go here */}
                WEEEE
            </> : <> 
            {loginState ? <> {/* have we pressed the sign up or login buttons yet? */}
                {signLog ? <>
                    <SignUp auth={auth} db={db} handleLogClick={handleLogClick} />
                </> : <>
                    <LogIn auth={auth} db={db} handleSignClick={handleSignClick} />
                </>}
            </> : <>
            
            </>}
            <LoginAssistant 
                handleLogClick={handleLogClick}
                handleSignClick={handleSignClick}
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
        <Footer 
            user={user} 
            // isAdmin={isAdmin} 
            showAdmin={showAdmin} 
            auth={auth} 
        />
    </div>
  )
}

