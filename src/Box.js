import React, { useState } from 'react'
import CheckedBox from './CheckedBox'
import UncheckedBox from './UncheckedBox'

export default function Box({node}) {

  const [unlocked, setUnlocked] = useState(false)

  // const handleClick = (e) => {
    // setUnlocked(!unlocked)
    // console.log(nodeList[e.target.id].title)
  // }



  return (
    <div id={node} >
      {/* {unlocked ? <CheckedBox nodeList={nodeList} node={node} /> : <UncheckedBox />} */}
      <CheckedBox node={node} />
      {/* <p className='symptom-found'>{}</p> */}
    </div>
  )
}
