import React from 'react'

export default function Footer({ user, isLoggedIn, isAdmin, showAdmin, auth }) {

    let year = new Date().getFullYear();

    const showLogin = () => {
        if (isAdmin) {
            return <div>
                <p>
                    You're logged in as {user.name} (an admin).
                </p>
                {showAdmin ? <><button onClick={showAdmin(false)} className="hover:underline">
                        Close Admin View
                    </button></> : <><button onClick={showAdmin(true)} className="hover:underline">
                        Open Admin View
                    </button>
                </>}
                <button onClick={() => auth.signOut()} className="hover:underline">
                    Log out
                </button>
            </div>
        } else if (user.name.length > 0) {
            return <p>
                You're logged in as {user.name}.
                <button onClick={() => auth.signOut()} className="hover:underline">
                    Log out
                </button>
            </p>
        } else if (isLoggedIn) {
            return <p>You're currently logged in.</p>
        } else {
            return <p>You're currently not logged in.</p>
        }   
    }

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

        {showLogin}

        </footer>
    </div>
  )
}
