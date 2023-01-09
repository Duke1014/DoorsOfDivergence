import React, { useEffect, useState } from 'react'

export default function ({divergence}) {

    const [title, setTitle] = useState("")
    const [number, setNumber] = useState(0)
    
    useEffect(() => {
        if (divergence === "one") {
            setTitle("Elixirs and Alienists")
            setNumber(1)
        } else if (divergence === "two") {
            setTitle("On the Bleeding Edge")
            setNumber(2)
        } else if (divergence === "three") {
            setTitle("Inner Demons")
            setNumber(3)
        } else if (divergence === "four") {
            setTitle("A Voice in the Veil")
            setNumber(4)
        }
    }, [])
    
  return (
    <div>
        <h1>MADNESS, 1917</h1>
        <h4>Divergence {number}:</h4>
        <h3>{title}</h3>
    </div>
  )
}
