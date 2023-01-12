import React from 'react'
import line from './img/Line.png'

export default function Line({type}) {

  let lineType

  if (type === "horizontal") {
    lineType = <img src={line} alt="line" className="horizontal-line" />
  } else if (type === "horizontal-two") {
    lineType = <img src={line} alt="line" className="horizontal-line-two" />
  } else if (type === "horizontal-four") {
    lineType = <img src={line} alt="line" className="horizontal-line-four" />
  } else if (type === "horizontal-five") {
    lineType = <img src={line} alt="line" className="horizontal-line-five" />
  } else if (type === "bigger") {
    lineType = <img src={line} alt="line" className="bigger" />
  } else if(type === "cropped") {
    lineType = <img src={line} alt="line" className="cropped-line" />
  } else {
    lineType = <img src={line} alt="line" />
  }

  return (
    <div className='line'>
        {lineType}
    </div>
  )
}
