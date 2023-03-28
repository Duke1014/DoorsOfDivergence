import React, { useContext, useState } from 'react'
import './entercode.css'
import { UserContext } from './context/user'

// import paper from './img/paper.jpg'

export default function EnterCode({setShowCodePrompt}) {

    const [code, setCode] = useState('')
    const { handleEnterCode, codeStyle, message } = useContext(UserContext)

    // const wrapStyle = {
    //     backgroundColor: '#d2b79e',
    //     backgroundImage: `url(${paper})`,
    //     backgroundSize: 'cover',
    //     backgroundPosition: 'center'
    // }

  return (
    <div className='relative'>
        <h1 className="my-4 text-4xl text-center">Enter Code</h1>
        <input
            type="text"
            value={code}
            onChange={e => setCode(e.target.value)}
            className="p-4 my-4 text-center"
            style={codeStyle}
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    handleEnterCode(code)
                }
            }}
        />
        <br />
        <p className='text-center relative inset-0' style={message}>
            Incorrect Code.
        </p>
    </div>
  )
}
