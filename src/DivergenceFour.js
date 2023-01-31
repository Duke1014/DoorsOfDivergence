import React from 'react'
import TitleCard from './TitleCard'
import Box from './Box'
import CommonSymptoms from './CommonSymptoms'
import Cross from './Cross'

import corner from './img/Corner.png'
import Line from './Line'
import SmallLine from './SmallLine'

export default function DivergenceFour() {
  return (
    <div className='grid-four'>
        <TitleCard divergence="four" />
        <div/><div/><div/>
        <Box node={56} />
        <div/><div/><div/>
        <CommonSymptoms />
        <div/><div/><div/><div/>
        <Line />
        <div/><div/><div/><div/><div/><div/><div/>
        <div className='corner-dr'>
                <img src={corner} alt='corner' />
        </div>
        <Box node={57} />
        <div className='corner-dl'>
            <img src={corner} alt='corner' className='corner-down-left' />
        </div>
        <div/><div/><div/><div/><div/><div/>
        <Box node={58} />
        <SmallLine type={4}/>
        <Box node={59} />
        <div/><div/><div/><div/><div/><div/>
        <div className='corner-dr-two'>
            <img src={corner} alt='corner' />
        </div>
        <Cross type={3} />
        <div className='corner-dl-four'>
            <img src={corner} alt='corner' className='corner-down-left' />
        </div>
        <div/><div/><div/><div/><div/><div/>
        <Box node={60} />
        <Box node={61} />
        <Box node={62} />
        <div/><div/><div/><div/><div/><div/>
        <div className='corner-ur'>
            <img src={corner} alt='corner' className='corner-up-right' />
        </div>
        <Cross type={3} />
        <div className='corner-ul'>
            <img src={corner} alt='corner' className='corner-up-left' />
        </div>
        <div/><div/><div/><div/><div/>
        <div className='corner-dr'>
            <img src={corner} alt='corner' />
        </div>
        <div>
            <Line type="horizontal" />
            <div className='corner-dr-five'>
                <img src={corner} alt='corner' />    
            </div> 
        </div>
        <Box node={63} />
        <div/><div/><div/><div/><div/><div/>
        <Line />
        <Box node={64} />
        <Line type="cropped"/>
        <div/><div/><div/><div/><div/><div/>
        <Line />
        <div>
            <div className='corner-ur-three'>
                <img src={corner} alt='corner' />
            </div>
            <div className='corner-dr-six'>
                <img src={corner} alt='corner' />
            </div>
        </div>
        <Box node={65} />
        <div className='corner-dl-five'>
            <img src={corner} alt='corner' />
        </div>
        <div/><div/><div/><div/><div/>
        <Line />
        <Box node={66} />
        <div/>
        <Box node={67} />
        <div/><div/><div/><div/><div/>
        <Line />
        <div className='corner-ur'>
            <img src={corner} alt='corner' />
        </div>
        <Box node={68} />
        <div className='corner-ul'>
            <img src={corner} alt='corner' />
        </div>
        <div/><div/><div/><div/><div/>
        <Box node={69} />
        <Line type="horizontal-two" />
        <div className='corner-ul-three'>
            <img src={corner} alt='corner' className='corner-up-left' />
            <Line type="vertical-two" />
        </div>
        <div/><div/><div/><div/><div/><div/><div/>
        <div className='corner-dr-two'>
            <img src={corner} alt='corner' />
        </div>
        <Box node={70} />
        <div className='corner-dl-five'>
            <img src={corner} alt='corner' />
        </div>
        <div/><div/><div/><div/><div/><div/>
        <Box node={71} />
        <div/>
        <Box node={72} />
    </div>
  )
}
