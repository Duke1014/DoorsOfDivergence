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
    } else if (type === 3) {
        lineType = <img src={tinyline} alt="line" className="small-line-three" />
    } else if (type === 4) {
        lineType = <img src={tinyline} alt="line" className="small-line-four" />
    }
  
    return (
        <div className='small-line'>
            {lineType}
        </div>
    )
}
