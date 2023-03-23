import React, { useState, useContext, useEffect } from 'react'
import LogIn from './LogIn'
import SignUp from './SignUp'
import LoginAssistant from './LoginAssistant'
import Loader from './Loader'
import { UserContext } from './context/user'
// import { initializeAppCheck, ReCaptchaV3Provider } from 'firebase/app-check';

// import { getAnalytics, logEvent } from 'firebase/analytics';

// import { getStorage } from 'firebase/storage';

import Footer from './Footer'
import Grid from './Grid'
// import Tutorial from './Tutorial.svelte';

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

// let showCodePrompt = false;
// let message = false;
// let autoScrollTo = '#WelcomeToParadox';
// let addUnlockTo = false;

// let loginState = 'buttons';

///////////////////////////////

export default function () {

    const { user, loggedIn, auth, db, loader } = useContext(UserContext)
    const [signLog, setSignLog] = useState(false) // should not matter until loginState is true
    const [loginState, setLoginState] = useState(false) // Have we hit a signup or login button yet? 

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
        const position = window.pageYOffset;
        if (position > 100) { // change 100 to the distance you want the user to scroll before the footer appears
            setScrolled(true);
        } else {
            setScrolled(false);
        }
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => {
        window.removeEventListener("scroll", handleScroll);
        };
    }, []);

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
        {loader ? <>
            <Loader />
        </> : <>
            {loggedIn ? <>
                <Grid />
                </> : <> 
                {loginState ? <>
                    {signLog ? <>
                        <SignUp auth={auth} db={db} handleLogClick={handleLogClick} />
                    </> : <>
                        <LogIn auth={auth} db={db} handleSignClick={handleSignClick} />
                    </>}
                </> : <></>}
                <LoginAssistant handleLogClick={handleLogClick} handleSignClick={handleSignClick} />
            </>}
            <Footer 
                scrolled={scrolled}
                user={user} 
                // isAdmin={isAdmin} 
                showAdmin={showAdmin} 
                auth={auth} 
            />
        </>}
    </div>
  )
}