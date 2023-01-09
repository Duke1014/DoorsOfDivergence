import React from 'react'
import line from './img/Line.png'

export default function Line({horizontal}) {
  return (
    <div className='line'>
        {horizontal ? <img src={line} alt="line" className="horizontal-line" /> : <img src={line} alt="line" />}
    </div>
  )
}
