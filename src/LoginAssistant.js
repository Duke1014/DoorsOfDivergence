import React from 'react'

export default function LoginAssistant( {handleLogClick, handleSignClick} ) {

    const buttonStyle = {
        padding: '6px 16px',
        margin: '6px',
        outline: '1px solid black',
        outlineOffset: '2px',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        border: '1px solid black',
        color: 'black',
        // button:hover:not(:disabled),
        // button:focus:not(:disabled) {
        //     background-color: 'black';
        //     border: '1px solid black';
        //     color: 'white';
        // }
    }

  return (
    <section className="grid min-h-screen gap-5 md:grid-cols-2 font-archaic">
        <div className="grid p-8 text-white bg-black place-content-center bg-opacity-20">
            <h1 className="text-6xl">TIME HAS SHATTERED</h1>
            <p className="max-w-xs mt-4 text-lg">
                Hello, me. It’s you. <br />
                From the future, that is. <br />
                I know it's confusing - perhaps this map will help.
            </p>
        </div>
        <div className="grid p-8 text-center place-content-center">
            <h1 className="my-4 text-4xl font-archaic">Greetings, Parallel</h1>
            <p className="max-w-xs mb-4 text-lg">
                Log in or create a profile to track your progress in the The Order of the Three Keys.
            </p>
            <div className="flex flex-wrap gap-5 mb-4 place-self-center">
                <button style={buttonStyle} className="place-self-center" onClick={handleLogClick}>
                    Log in
                </button>
                <button style={buttonStyle} className="place-self-center" onClick={handleSignClick}>
                    Sign up
                </button>
            </div>
        </div>
    </section>
  )
}