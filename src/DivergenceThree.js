import React from 'react'
import TitleCard from './TitleCard'
import UncheckedBox from './UncheckedBox'
import CommonSymptoms from './CommonSymptoms'

import Line from './Line'
import corner from './img/Corner.png'
import SmallLine from './SmallLine'

export default function DivergenceThree() {
  return (
    <div className='grid-three'>
        <TitleCard divergence="three" />
        <div/><div/><div/>
        <UncheckedBox />
        <div/><div/><div/>
        <CommonSymptoms />
        <div/><div/><div/><div/>
        <Line />
        <div/><div/><div/><div/><div/><div/>
        <div className='corner-dr'>
                <img src={corner} alt='corner' />
        </div>
        <Line type="horizontal" />
        <UncheckedBox />
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
        <UncheckedBox />
        <div/>
        <UncheckedBox />
        <div/>
        <UncheckedBox />
        <div/><div/><div/><div/><div/><div/>
        <Line />
        <div/>
        <Line />
        <div/><div/><div/><div/>
        <div className='corner-dr'>
            <img src={corner} alt='corner' />
        </div>
        <Line type="horizontal" />
        <UncheckedBox />
        <Line type="horizontal" />
        <div className='corner-ul-two'>
            <img src={corner} alt='corner' />
        </div>
        <div/><div/><div/><div/>
        <UncheckedBox />
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
        <UncheckedBox />
        <Line type="horizontal" />
        <UncheckedBox />
        <div/><div/><div/><div/>
        <UncheckedBox />
        <UncheckedBox />
        <Line />
        <div/><div/><div/><div/><div/><div/>
        <div className='corner-ur'>
            <img src={corner} alt='corner' />
            <SmallLine type="horizontal-six" />
        </div>
        <div className='corner-ur'>
            <img src={corner} alt='corner' />
        </div>
        <UncheckedBox />
        <div/><div/><div/><div/><div/><div/>
        <UncheckedBox />
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
        <UncheckedBox />
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
        <UncheckedBox />
        <Line type="horizontal-two" />
        <Line />
        <div/><div/><div/><div/>
        <UncheckedBox />
        <div/><div/><div/>        
        <UncheckedBox />
    </div>
  )
}
