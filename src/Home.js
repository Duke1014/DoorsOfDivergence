import React, { useState, useContext, useEffect } from 'react'
import LogIn from './LogIn'
import SignUp from './SignUp'
import LoginAssistant from './LoginAssistant'
import Admin from './Admin'
import Loader from './Loader'
import { UserContext } from './context/user'
import Footer from './Footer'
import Grid from './Grid'

let showAdmin = false

export default function () {

    const { user, loggedIn, auth, db, loader } = useContext(UserContext)
    const [signLog, setSignLog] = useState(false) 
    const [loginState, setLoginState] = useState(false)
    const [adminMode, setAdminMode] = useState(false)

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
            {adminMode ? <>
                <Admin />
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
            </>}
            
            <Footer 
                scrolled={scrolled}
                user={user} 
                setAdminMode={setAdminMode}
                adminMode={adminMode}
                showAdmin={showAdmin} 
                auth={auth} 
            />
        </>}
    </div>
  )
}