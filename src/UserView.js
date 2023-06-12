import React, { useContext, useState } from 'react'
import { UserContext } from './context/user'

export default function UserView({ r, setBubbleText }) {

    const { sendReset } = useContext(UserContext)
    const [node, setNode] = useState(false)

    const nodeClick = () => {
        setNode(!node)
        if (!node) {
            setBubbleText("The green nodes are the last nodes!")
        } else {
            setBubbleText("")
        }
    }
    const resetPassword = () => {
        setBubbleText("Password has been reset for " + r.name + "!")
        sendReset(r.email)
    }

    const nodes = Object.keys(r.nodes).map((n => {
        if (n === r.lastNode){
            return <li key={n} style={{color: 'green'}}>
                {n}
            </li>
        } else {
            return <li key={n}>
                {n}
            </li>
        }
    }))

  return (
    <li className='user-view'>
        <div>
            Name: {r.name}
        </div>
        <div>
            E-mail: {r.email}
        </div>
        <button className='node-check' onClick={nodeClick}>Check Nodes</button>
        <button className='password-reset' style={{backgroundColor: 'red'}} onClick={resetPassword}>Password Reset</button>
        {node ? <>
            <ol>
                {nodes}
            </ol>
        </>:<></>}
    </li>
  )
}
