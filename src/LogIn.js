import React, { useContext, useState, useEffect } from 'react'
import PasswordReset from './PasswordReset';
import paper from "./img/vintagepaper4.png"
import { UserContext } from './context/user';

export default function Login({ handleSignClick }) {

    const { error, login } = useContext(UserContext)
    
    const handleButtonStyle = () => {
        if (mouseOver) {
            setButtonStyle(buttonOn)
        } else {
            setButtonStyle(normalButton)
        }
    }

    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [showForgotPassword, setShowForgotPassword] = useState(false)
    const [mouseOver, setMouseOver] = useState()
    const [buttonStyle, setButtonStyle] = useState({})

    const wrapStyle = {
        backgroundColor: '#d2b79e',
        backgroundImage: `url(${paper})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }

    const buttonOn = {
        padding: '6px 16px',
        margin: '6px',
        outline: '1px solid black',
        outlineOffset: '2px',
        backgroundColor: 'black',
        border: '1px solid black',
        color: 'white'
    }
    
    const normalButton = {
        padding: '6px 16px',
        margin: '6px',
        outline: '1px solid black',
        outlineOffset: '2px',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        border: '1px solid black',
        color: 'black'
    }

    useEffect(() => {
        handleButtonStyle()
    }, [mouseOver])

    const handleSubmit = (e) => {
        e.preventDefault()
        let user = {
            email: userEmail,
            password: userPassword
        }
        login(user)
    }

    return (
        <div className="fixed z-50 grid w-full h-full overflow-auto bg-black bg-opacity-70">
            <div className=" xs:p-4 wrap place-self-center max-w-prose" style={wrapStyle}>
                <div className="grid min-h-screen p-4 text-center text-black border-black place-content-center xs:min-h-0 xs:p-8 xs:border xs:outline outline-black outline-offset-2">
                    {showForgotPassword ? <>  
                        <PasswordReset 
                            setUserEmail={setUserEmail} 
                            showForgotPassword={showForgotPassword}
                            setShowForgotPassword={setShowForgotPassword} 
                            userEmail={userEmail}
                        />           
                    </> : <>    
                        <h1 className="my-4 text-4xl font-archaic">Log In</h1>
                        <p className="text-lg">
                            Sign into your profile to track your progress in the The Order of the Three Keys.
                        </p>
                        <p className="mt-4 text-lg">
                            <small>
                                Don't have an account yet? <span onClick={handleSignClick} style={{cursor: 'pointer', textDecoration: 'underline'}}>Sign up instead</span>.
                            </small>
                        </p>
                        <br />
                        <form onSubmit={handleSubmit}>
                            <div className="grid gap-x-4 md:text-left">
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="email"
                                    name="email"
                                    autoComplete="username"
                                    id="email"
                                    placeholder="Enter your email"
                                    required
                                    value={userEmail}
                                    onChange={e => setUserEmail(e.target.value)}
                                />
                                <label htmlFor="password">Password:</label>
                                <input
                                    type="password"
                                    minLength="6"
                                    name="password"
                                    autoComplete="current-password"
                                    id="password"
                                    placeholder="Enter your password"
                                    required
                                    value={userPassword}
                                    onChange={e => setUserPassword(e.target.value)}
                                />
                                <p className="mb-2 -mt-1 text-right">
                                    <small style={{cursor: 'pointer', textDecoration: 'underline'}} onClick={() => setShowForgotPassword(!showForgotPassword)}>
                                        Forgot your password?
                                    </small>
                                </p>
                            </div>                            
                            <button
                                className="place-self-center"
                                style={buttonStyle}
                                onMouseOver={() => setMouseOver(true)}
                                onMouseLeave={() => setMouseOver(false)}
                                disabled={userPassword === null || userEmail === null ? true : false}
                            >Log in</button>
                        </form>
                    </>}
                    <p className="mb-2">{error}</p>
                </div>
            </div>
        </div>
    )
}