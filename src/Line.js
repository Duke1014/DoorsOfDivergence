import React from 'react'
import line from './img/Line.png'

export default function Line({horizontal}) {

  let lineType

  if (horizontal === "horizontal") {
    lineType = <img src={line} alt="line" className="horizontal-line" />
  } else if (horizontal === "horizontal-two") {
    lineType = <img src={line} alt="line" className="horizontal-line-two" />
  } else {
    lineType = <img src={line} alt="line" />
  }

  return (
    <div className='line'>
        {lineType}
    </div>
  )
}
