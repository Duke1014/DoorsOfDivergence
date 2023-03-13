import React from 'react'
import './loader.css'
import keys from "./img/keys-transparent-min.png"

export default function Loader() {
  return (
    <div>
        <div className="wrap fixed w-full h-full z-[100] grid bg-indigo-900">
            <img
                className="w-10/12 max-w-xs place-self-center animate-pulse"
                src={keys}
                alt=""
            />
        </div>
    </div>
  )
}
