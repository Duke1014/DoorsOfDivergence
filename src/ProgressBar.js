import React, { useContext, useEffect, useState } from 'react'
import { UserContext } from './context/user'

export default function ProgressBar({ ui }) {
  
    const [progress, setProgress] = useState(0)
    const { nodes } = useContext(UserContext)

    useEffect(() => {
        let numerator = Object.values(nodes).length
        let denominator = Object.values(ui.nodes).length
        let answer = numerator / denominator * 100
        setProgress(answer.toFixed(2))
    }, [])

    return (
        <div className='progress-bar-outer' style={{backgroundColor: 'black'}}>
            <div className='progress-bar text-white' style={{width: `${progress}%`, backgroundColor: 'blue'}}>
                {progress}%
            </div>
        </div>
    )
}
