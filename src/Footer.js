import React, { useContext } from 'react'
import { UserContext } from './context/user';

export default function Footer({ scrolled }) {

    const { user, loggedIn, logout } = useContext(UserContext)
    let year = new Date().getFullYear();

/* <button onClick={showAdmin(false)} className="hover:underline">
    Close Admin View
</button></> : <><button onClick={showAdmin(true)} className="hover:underline">
    Open Admin View
</button> */

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

  return (
    <div>
        <footer
            id="footer"
            className={!scrolled ? "footerscrolled flex flex-wrap self-end justify-between p-4 text-center text-white bg-black justify-items-center" : "footer flex flex-wrap self-end justify-between p-4 text-center text-white bg-black justify-items-center"}
        >
        <p>
            {year} &copy; Doors of Divergence. <span className="hidden xs:inline-block">
                Powered by <a
                    href="mailto:duke.norsworthy@gmail.com"
                    className="hover:underline"
                    title="Get in touch with Duke"
                    >Duke
                </a>.
            </span>
        </p>
        <button className='text-2xl' onClick={scrollToTop}>Scroll To Top</button>
        {loggedIn ? <>
            <p>You're currently logged in{user.name > 0 ? <> as {user.name}.</> : <>.</>} <button onClick={() => logout()}>Sign out here.</button></p>
        </> : <>
            <p>You are not logged in.</p>
        </>}
        </footer>
    </div>
  )
}
