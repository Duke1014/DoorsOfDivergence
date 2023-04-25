import React, { useState, useContext, useEffect } from 'react'
import { UserContext } from './context/user';
import { reactKey } from './lib/config.js';
import paper from './img/vintagepaper4.png'
import Recaptcha from "react-google-recaptcha"

export default function SignUp({ handleLogClick }) {

    const { signup, error } = useContext(UserContext)

    const wrapStyle = {
        backgroundColor: '#d2b79e',
        backgroundImage: `url(${paper})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
    }

    const handleButtonStyle = () => {
        if (mouseOver) {
            setButtonStyle(buttonOn)
        } else {
            setButtonStyle(normalButton)
        }
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

    const [userFirstName, setUserFirstName] = useState('')
    const [userLastName, setUserLastName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setUserPassword] = useState('')
    const [userRepeatPassword, setUserRepeatPassword] = useState('')
    const [checked, setChecked] = useState(true)
    const [captchaState, setCaptchaState] = useState(false)
    const [mouseOver, setMouseOver] = useState()
    const [buttonStyle, setButtonStyle] = useState({})

    useEffect(() => {
        handleButtonStyle()
    }, [mouseOver])

    const handleSubmit = (e) => {
        e.preventDefault()
        let user = {
            firstName: userFirstName,
            lastName: userLastName,
            email: userEmail,
            password: userPassword,
            marketingOptIn: checked,
        }
        if (!captchaState) {
            console.log('do the captcha thing first')
        } else if (userFirstName === null ||
            userLastName === null ||
            userPassword === null ||
            userRepeatPassword === null) {
            console.log('fill the form out all the way')
        } else if (userPassword !== userRepeatPassword) {
            console.log('password must equal repeat password')
        } else {
            signup(user)
        }
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
                            Already have an account? <span onClick={handleLogClick} style={{cursor: "pointer", textDecoration: "underline"}}>Log in instead</span>.
                        </small>
                    </p>
                    <br />
                    <form onSubmit={handleSubmit}>
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
                                onChange={() => setChecked(!checked)}
                            />
                            <label htmlFor="marketing-optin">
                                I'd like to receive news about your experiences.
                                <br />
                                <small>
                                    Don't worry, we won't spam your Inbox, but save our emails only for the
                                    important occasions.
                                </small>
                            </label>
                        </div>     

                        {captchaState ? <>
                            <p className="m-8">Marvelous, you're not a robot! Come join our ranks.</p>
                        </> : <>
                            <div>
                                <div className="justify-center my-4 text-center place-self-center">
                                    <Recaptcha
                                        sitekey={reactKey.REACT_APP_SITE_KEY}
                                        badge={'inline'}
                                        size={'normal'}
                                        onChange={() => setCaptchaState(!captchaState)}
                                    /> 
                                    <p>
                                        <small>
                                            If you don’t see our <a href="https://www.google.com/recaptcha/about/" style={{textDecoration: 'underline'}}>reCAPTCHA</a> above, <a href="https://m.me/doorsofdivergence" style={{textDecoration: 'underline'}}> contact us</a>.
                                        </small>
                                    </p>
                                </div>
                            </div>
                        </>}         
                        {error}
                        <button
                            className="place-self-center"
                            style={buttonStyle}
                            onMouseOver={() => setMouseOver(true)}
                            onMouseLeave={() => setMouseOver(false)}
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