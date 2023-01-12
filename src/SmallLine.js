import React from 'react'
import tinyline from './img/tinyline.png'

export default function SmallLine({type}) {
  
    let lineType

    if (type === 1) {
        lineType = <img src={tinyline} alt="small-line" className='small-line-one' />
    } else if (type === 2) {
        lineType = <img src={tinyline} alt="small-line" className='small-line-two' />
    } else if (type === "horizontal-three") {
        lineType = <img src={tinyline} alt="line" className="horizontal-line-three" />
    } else if (type === "horizontal-six") {
        lineType = <img src={tinyline} alt="line" className="horizontal-line-six" />
    }
  
    return (
        <div className='small-line'>
            {lineType}
        </div>
    )
}
