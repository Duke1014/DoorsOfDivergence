import React from 'react'

import line from './img/Line.png'

export default function Cross({type}) {

  let cross

  if (type === 1) {
    cross = <div className='crossed-lines-one'>
                <img src={line} alt="line" />
                <img src={line} alt="line" className='rotated-line'/>
              </div>
  } else if (type === 2) {
    cross =  <div className='crossed-lines-two'>
                <img src={line} alt="line" />
                <img src={line} alt="line" className='rotated-line'/>
              </div>
  } else if (type === 3) {

  } else if (type === 4) {

  }

  return (
    <div>
      {cross}
    </div>

  )
}
