import React, { useContext, useState } from 'react'
import './entercode.css'
import { UserContext } from './context/user'

export default function EnterCode({setShowCodePrompt}) {

    const [code, setCode] = useState('')
    const { handleEnterCode, codeStyle, message } = useContext(UserContext)

  return (
    <div className='relative enter-code-container'>
        <h1 className="my-4 text-4xl text-center enter-code">Enter Code</h1>
        <input
            type="text"
            value={code}
            onChange={e => setCode(e.target.value)}
            className="p-4 my-4 text-center enter-code-input"
            style={codeStyle}
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    handleEnterCode(code)
                }
            }}
        />
        <br />
        <p className='text-center relative inset-0 enter-code-message' style={message}>
            Incorrect Code.
        </p>
    </div>
  )
}
