import React from 'react'
import TitleCard from './TitleCard'
import UncheckedBox from './UncheckedBox'
import CommonSymptoms from './CommonSymptoms'
import Cross from './Cross'

import corner from './img/Corner.png'
import Line from './Line'

export default function () {
  return (
    <div className='grid'>
        <TitleCard divergence="two" />
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
        <div/><div/><div/><div/><div/><div/><div/>
        <UncheckedBox />
        <Line />
        <div/><div/><div/><div/><div/><div/><div/>
        <div className='corners-up'>
            <img src={corner} alt='corner' className='corner-up-right' />
        </div>
        <UncheckedBox />
        <div/><div/><div/><div/><div/><div/><div/><div/>
        <Line />
        <div/><div/><div/><div/><div/><div/>
        <div className='corner-se'>
                <img src={corner} alt='corner' />
        </div>
        <div className='corner-se'>
                <img src={corner} alt='corner' />
        </div>
        <UncheckedBox />
        <div className='corners-down'>
            <img src={corner} alt='corner' className='corner-down-left' />
        </div>
        <div className='corners-down'>
            <img src={corner} alt='corner' className='corner-down-left' />
        </div>
        <div/><div/><div/><div/>
        <UncheckedBox />
        <UncheckedBox />
        <Line />
        <UncheckedBox />
        <Line />
        <div/><div/><div/><div/>
        <div className='corners-up'>
            <img src={corner} alt='corner' className='corner-up-right' />
        </div>
        <div className='corners-up'>
            <img src={corner} alt='corner' className='corner-up-right' />
        </div>
        <UncheckedBox />
        <div className='corners-up'>
            <img src={corner} alt='corner' className='corner-up-left' />
        </div>
        <Line />
        <div/><div/><div/><div/><div/><div/>
        <Line />
        <div/>
        <Line />
        <div/><div/><div/><div/><div/><div/>
        <UncheckedBox />
        <Line horizontal="horizontal" />
        <UncheckedBox />
        <div/><div/><div/><div/><div/>
        <div className='corner-se'>
                <img src={corner} alt='corner' />
        </div>
        <Cross />
            <div className='corners-down'>
            <img src={corner} alt='corner' className='corner-down-left' />
        </div>
        <div/><div/><div/><div/><div/>
        <UncheckedBox />
        <div className='corner-se'>
                <img src={corner} alt='corner' />
        </div>
        <UncheckedBox />
        <Cross />
        <UncheckedBox />
        <div/><div/><div/><div/>
        <Line />       
        <Line />
        <Line />
        <Line />
        <div/><div/><div/><div/><div/>
        <UncheckedBox />
        <div className='corners-up'>
            <img src={corner} alt='corner' className='corner-up-left' />
        </div>
        <div className='corners-up'>
            <img src={corner} alt='corner' className='corner-up-right' />
        </div>
        <UncheckedBox />
    </div>
  )
}
