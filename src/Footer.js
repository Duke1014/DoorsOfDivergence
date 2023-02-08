import React, { useContext } from 'react'
import { UserContext } from './context/user';

export default function Footer() {

    const { user, loggedIn } = useContext(UserContext)
    let year = new Date().getFullYear();

/* <button onClick={showAdmin(false)} className="hover:underline">
    Close Admin View
</button></> : <><button onClick={showAdmin(true)} className="hover:underline">
    Open Admin View
</button> */

  return (
    <div>
        <footer
            id="footer"
            className="flex flex-wrap self-end justify-between p-4 text-center text-white bg-black justify-items-center"
        >
        <p>
            {year} &copy; Doors of Divergence. 
            <span className="hidden xs:inline-block">
                Powered by 
                <a
                    href="mailto:obelisk@vutreshenglas.com"
                    className="hover:underline"
                    title="Get in touch with Obelisk">Obelisk
                </a>.
            </span>
        </p>
        {loggedIn ? <>
            <p>You're currently logged in {user.name > 0 ? <>
                    as {user.name}.
                </> : <>.</>}
                </p>
        </> : <>
            <p>You are not logged in.</p>
        </>}
        </footer>
    </div>
  )
}
