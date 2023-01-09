import React from 'react'
import TitleCard from './TitleCard'
import UncheckedBox from './UncheckedBox'
import CommonSymptoms from './CommonSymptoms'

import Line from './Line'
import corner from './img/Corner.png'

export default function DivergenceThree() {
  return (
    <div className='grid'>
        <TitleCard divergence="three" />
        <div/><div/><div/>
        <UncheckedBox />
        <div/><div/><div/>
        <CommonSymptoms />
        <div/><div/><div/><div/>
        <Line />
        <div/><div/><div/><div/><div/><div/>
        <div className='corner-se'>
                <img src={corner} alt='corner' />
        </div>
        <Line horizontal="horizontal" />
        <UncheckedBox />
        <Line horizontal="horizontal" />
        <div className='corners-down'>
            <img src={corner} alt='corner' className='corner-down-left' />
        </div>
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
        <div className='corner-se'>
                <img src={corner} alt='corner' />
        </div>
        <Line horizontal="horizontal" />
        <UncheckedBox />
        <Line horizontal="horizontal" />
        <div className='corners-up'>
            <img src={corner} alt='corner' className='corner-up-left' />
        </div>
        <div/><div/><div/><div/>
        <UncheckedBox />
        <div/>
        <Line />
        <div/><div/><div/><div/><div/><div/>
        <div className='corner-se'>
                <img src={corner} alt='corner' />
        </div>
        <div className='corner-se'>
                <img src={corner} alt='corner' />
        </div>
        <UncheckedBox />
        <Line horizontal="horizontal" />
        <UncheckedBox />
        <div/><div/><div/><div/>
        <UncheckedBox />
        <UncheckedBox />
        <Line />
        <div/><div/><div/><div/><div/><div/>
        <div className='corners-up'>
            <img src={corner} alt='corner' className='corner-up-right' />
        </div>
        <div className='corners-up'>
            <img src={corner} alt='corner' className='corner-up-right' />
        </div>
        <UncheckedBox />
        <div/><div/><div/><div/><div/><div/>
        <UncheckedBox />
        <Line horizontal="horizontal" />
        <div className='corners-up'>
            <img src={corner} alt='corner' className='corner-up-left' />
            <Line />
        </div>
        <div/><div/><div/><div/><div/><div/><div/>
        <div className='corner-se'>
                <img src={corner} alt='corner' />
        </div>
        <UncheckedBox />
        <div className='corners-down'>
            <img src={corner} alt='corner' className='corner-down-left' />
        </div>
        <div/><div/><div/><div/><div/><div/>
        <Line />
        <Line />
        <Line />
        <div/><div/><div/><div/><div/><div/>
        <Line horizontal="horizontal" />
        <UncheckedBox />
        <Line horizontal="horizontal" />
        <div/><div/><div/><div/><div/><div/>
        <UncheckedBox />
        <div/>
        <UncheckedBox />
    </div>
  )
}
