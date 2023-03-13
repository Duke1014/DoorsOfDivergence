import React, { useContext, useState } from 'react'
import './entercode.css'
import { UserContext } from './context/user'

// import paper from './img/paper.jpg'

export default function EnterCode({setShowCodePrompt}) {

    const [code, setCode] = useState('')
    const { message, handleEnterCode } = useContext(UserContext)

    // const wrapStyle = {
    //     backgroundColor: '#d2b79e',
    //     backgroundImage: `url(${paper})`,
    //     backgroundSize: 'cover',
    //     backgroundPosition: 'center'
    // }

  return (
    <div>
        {/* <div className="fixed z-50 grid w-full h-full overflow-auto bg-black bg-opacity-70">
            <div className="w-full xs:w-auto xs:p-4 wrap place-self-center max-w-prose" style={wrapStyle}>
                <div className="p-8 text-center text-black border-black place-content-center xs:border xs:outline outline-black outline-offset-2">
                    

                    <br />
                    {message ? <>
                        <p>{message}</p>
                        <br />
                    </> : <></>}
                    <button
                        disabled={code.length < 3 ? true : false}
                        className="p-2 border border-black hover:bg-black hover:text-white disabled:bg-gray-500 disabled:opacity-50 disabled:text-black disabled:cursor-not-allowed"
                        onClick={() => handleEnterCode(code)}
                        >Enter</button>
                    <button
                        className="p-2 border border-black hover:bg-black hover:text-white"
                        onClick={() => setShowCodePrompt(false)}
                        >Close</button>
                </div>
            </div>
        </div> */}
        <h1 className="my-4 text-4xl text-center">Enter Code</h1>
        <input
            type="text"
            value={code}
            onChange={e => setCode(e.target.value)}
            className="p-4 my-4 text-center text-black"
            onKeyDown={(e) => {
                if (e.key === 'Enter') {
                    handleEnterCode(code)
                }
            }}
        />
        <br />
        {message}
    </div>
  )
}
