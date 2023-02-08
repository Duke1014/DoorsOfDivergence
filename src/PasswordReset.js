import React, { useContext } from 'react'
import { UserContext } from './context/user';

export default function PasswordReset({ setShowForgotPassword, showForgotPassword, setUserEmail, user, userEmail }) {

    const { sendReset } = useContext(UserContext)

    const buttonStyle = {
        padding: '6px 16px',
        margin: '6px',
        outline: '1px solid black',
        outlineOffset: '2px',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        border: '1px solid black',
        color: 'black'
    }

  return (
    <div>
        <h1 className="my-4 text-4xl font-archaic">Password Reset</h1>
        <p className="text-lg">Enter your email to reset your password.</p>
        <p className="mt-4 text-lg">
            <small>
                Clicked here by mistake? <span 
                style={{cursor: 'pointer'}}
                onClick={() => setShowForgotPassword(!showForgotPassword)}
                    >Log in as usual</span>.
            </small>
        </p>
        <br />
        <form onSubmit={sendReset}>
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
            </div>
            <br/>
            <button 
                className="place-self-center" 
                style={buttonStyle}
                disabled={userEmail === null ? true : false}>
                Send reset instructions
            </button>
        </form>
    </div>
  )
}
