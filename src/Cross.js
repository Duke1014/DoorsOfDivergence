import React from 'react'

import line from './img/Line.png'

export default function Cross() {
  return (
    <div className='crossed-lines'>
        <img src={line} alt="line" />
        <img src={line} alt="line" className='rotated-line'/>
    </div>
  )
}
