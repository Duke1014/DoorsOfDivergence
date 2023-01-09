import React from 'react'
import TitleCard from './TitleCard'
import UncheckedBox from './UncheckedBox'
import CommonSymptoms from './CommonSymptoms'
import Cross from './Cross'

import corner from './img/Corner.png'
import Line from './Line'

export default function DivergenceFour() {
  return (
    <div className='grid'>
        <TitleCard divergence="four" />
        <div/><div/><div/>
        <UncheckedBox />
        <div/><div/><div/>
        <CommonSymptoms />
        <div/><div/><div/><div/>
        <Line />
        <div/><div/><div/><div/><div/><div/><div/>
        <div className='corner-se'>
                <img src={corner} alt='corner' />
        </div>
        <UncheckedBox />
        <div className='corners-down'>
            <img src={corner} alt='corner' className='corner-down-left' />
        </div>
        <div/><div/><div/><div/><div/><div/>
        <UncheckedBox />
        <Line />
        <UncheckedBox />
        <div/><div/><div/><div/><div/><div/>
        <div className='corner-se'>
                <img src={corner} alt='corner' />
        </div>
        <Cross />
        <div className='corners-down'>
            <img src={corner} alt='corner' className='corner-down-left' />
        </div>
        <div/><div/><div/><div/><div/><div/>
        <UncheckedBox />
        <UncheckedBox />
        <UncheckedBox />
        <div/><div/><div/><div/><div/><div/>
        <div className='corners-up'>
            <img src={corner} alt='corner' className='corner-up-right' />
        </div>
        <Cross />
        <div className='corners-up'>
            <img src={corner} alt='corner' className='corner-up-left' />
        </div>
        <div/><div/><div/><div/><div/>
        <div className='corner-se'>
                <img src={corner} alt='corner' />
        </div>
        <Line />
        <UncheckedBox />
        <div/><div/><div/><div/><div/><div/>
        <Line />
        <UncheckedBox />
        <Line />
        <div/><div/><div/><div/><div/><div/>
        <Line />
        <div className='corner-se'>
            <img src={corner} alt='corner' />
            <img src={corner} alt='corner' className='corner-up-right' />
        </div>
        <UncheckedBox />
        <div className='corners-down'>
            <img src={corner} alt='corner' className='corner-down-left' />
        </div>
        <div/><div/><div/><div/><div/>
        <Line />
        <UncheckedBox />
        <div/>
        <UncheckedBox />
        <div/><div/><div/><div/><div/>
        <Line />
        <div className='corners-up'>
            <img src={corner} alt='corner' className='corner-up-right' />
        </div>
        <UncheckedBox />
        <div className='corners-up'>
            <img src={corner} alt='corner' className='corner-up-left' />
        </div>
        <div/><div/><div/><div/><div/>
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
        <UncheckedBox />
        <div/>
        <UncheckedBox />
    </div>
  )
}
