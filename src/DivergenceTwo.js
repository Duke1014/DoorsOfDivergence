import React from 'react'
import TitleCard from './TitleCard'
import UncheckedBox from './UncheckedBox'
import CommonSymptoms from './CommonSymptoms'
import Cross from './Cross'
import SmallLine from './SmallLine'

import corner from './img/Corner.png'
import Line from './Line'

export default function () {
  return (
    <div className='grid-two'>
        <TitleCard divergence="two" />
        <div/><div/><div/>
        <UncheckedBox />
        <div/><div/><div/>
        <CommonSymptoms />
        <div/><div/><div/><div/>
        <Line />
        <div/><div/><div/><div/><div/><div/><div/>
        <div className='corner-dr-two'>
            <img src={corner} alt='corner-dr-two' />
        </div>
        <UncheckedBox />
        <div/><div/><div/><div/><div/><div/><div/>
        <UncheckedBox />
        <Line />
        <div/><div/><div/><div/><div/><div/><div/>
        <div className='corner-ur'>
            <img src={corner} alt='corner' className='corner-up-right' />
        </div>
        <UncheckedBox />
        <div/><div/><div/><div/><div/><div/><div/><div/>
        <Line />
        <div/><div/><div/><div/><div/><div/>
        <div className='corner-dr-three'>
                <img src={corner} alt='corner' />
                <SmallLine type="horizontal-three" />
        </div>
        <div className='corner-dr-three'>
                <img src={corner} alt='corner' />
        </div>
        <UncheckedBox />
        <div>
            <Line type="horizontal" />
            <div className='corner-dl-two'>
                <img src={corner} alt='corner' />
            </div>
        </div>
        <div className='corner-dl-three'>
            <img src={corner} alt='corner' />
        </div>
        <div/><div/><div/><div/>
        <UncheckedBox />
        <UncheckedBox />
        <Line type="cropped" />
        <UncheckedBox />
        <Line />
        <div/><div/><div/><div/>
        <div className='corner-ur-two'>
            <img src={corner} alt='corner' />
            <SmallLine type="horizontal-six" />
        </div>
        <div className='corner-ur-two'>
            <img src={corner} alt='corner' />
        </div>
        <UncheckedBox />
        <div className='corner-ul'>
            <img src={corner} alt='corner' className='corner-up-left' />
            <Line type="horizontal-four" />
        </div>
        <Line />
        <div/><div/><div/><div/><div/><div/>
        <Line />
        <div/>
        <Line />
        <div/><div/><div/><div/><div/><div/>
        <UncheckedBox />
        <Line type="horizontal" />
        <UncheckedBox />
        <div/><div/><div/><div/>
        <div className='corner-dr-four'>
                <img src={corner} alt='corner' />
        </div>
        <Line type="horizontal-five" />
        <Cross type={3} />
        <div className='corner-dl-four'>
            <img src={corner} alt='corner' className='corner-down-left' />
        </div>
        <div/><div/><div/><div/><div/>
        <UncheckedBox />
        <div className='corner-dr-three'>
                <img src={corner} alt='corner' />
        </div>
        <UncheckedBox />
        <Cross type={2} />
        <UncheckedBox />
        <div/><div/><div/><div/>
        <Line />       
        <Line />
        <Line />
        <Line />
        <div/><div/><div/><div/><div/>
        <UncheckedBox />
        <div className='corner-ul'>
            <img src={corner} alt='corner' className='corner-up-left' />
        </div>
        <div className='corner-ur'>
            <img src={corner} alt='corner' className='corner-up-right' />
        </div>
        <UncheckedBox />
    </div>
  )
}
