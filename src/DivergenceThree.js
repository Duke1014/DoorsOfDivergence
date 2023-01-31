import React from 'react'
import TitleCard from './TitleCard'
import Box from './Box'
import CommonSymptoms from './CommonSymptoms'

import Line from './Line'
import corner from './img/Corner.png'
import SmallLine from './SmallLine'

export default function DivergenceThree() {
  return (
    <div className='grid-three'>
        <TitleCard divergence="three" />
        <div/><div/><div/>
        <Box node={39} />
        <div/><div/><div/>
        <CommonSymptoms />
        <div/><div/><div/><div/>
        <Line />
        <div/><div/><div/><div/><div/><div/>
        <div className='corner-dr'>
                <img src={corner} alt='corner' />
        </div>
        <Line type="horizontal" />
        <Box node={40} />
        <Line type="horizontal" />
        <div className='corner-dl'>
            <img src={corner} alt='corner' className='corner-down-left' />
        </div>
        <div/><div/><div/><div/>
        <Line />
        <div/>
        <Line />
        <div/>
        <Line />
        <div/><div/><div/><div/>
        <Box node={41} />
        <div/>
        <Box node={42} />
        <div/>
        <Box node={43} />
        <div/><div/><div/><div/><div/><div/>
        <Line />
        <div/>
        <Line />
        <div/><div/><div/><div/>
        <div className='corner-dr'>
            <img src={corner} alt='corner' />
        </div>
        <Line type="horizontal" />
        <Box node={44} />
        <Line type="horizontal" />
        <div className='corner-ul-two'>
            <img src={corner} alt='corner' />
        </div>
        <div/><div/><div/><div/>
        <Box node={45} />
        <div/>
        <Line />
        <div/><div/><div/><div/><div/><div/>
        <div className='corner-dr-two'>
            <img src={corner} alt='corner' />
            <SmallLine type="horizontal-three" />
        </div>
        <div className='corner-dr-two'>
            <img src={corner} alt='corner' />
        </div>
        <Box node={46} />
        <Line type="horizontal" />
        <Box node={47} />
        <div/><div/><div/><div/>
        <Box node={48} />
        <Box node={49} />
        <Line />
        <div/><div/><div/><div/><div/><div/>
        <div className='corner-ur'>
            <img src={corner} alt='corner' />
            <SmallLine type="horizontal-six" />
        </div>
        <div className='corner-ur'>
            <img src={corner} alt='corner' />
        </div>
        <Box node={50} />
        <div/><div/><div/><div/><div/><div/>
        <Box node={51} />
        <Line type="horizontal-two" />
        <div className='corner-ul'>
            <img src={corner} alt='corner' />
            <Line type="vertical-two" />
        </div>
        <div/><div/><div/><div/><div/><div/>
        <div className='corner-dr'>
            <img src={corner} alt='corner' />
        </div>
        <Line type="horizontal" />
        <Box node={52} />
        <Line type="horizontal" />
        <div className='corner-dl'>
            <img src={corner} alt='corner' className='corner-down-left' />
        </div>
        <div/><div/><div/><div/>
        <Line />
        <div/>
        <Line />
        <div/>
        <Line />
        <div/><div/><div/><div/>
        <Line />
        <Line type="horizontal-two" />
        <Box node={53} />
        <Line type="horizontal-two" />
        <Line />
        <div/><div/><div/><div/>
        <Box node={54} />
        <div/><div/><div/>        
        <Box node={55} />
    </div>
  )
}
