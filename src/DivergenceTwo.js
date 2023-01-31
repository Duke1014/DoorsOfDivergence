import React from 'react'
import TitleCard from './TitleCard'
import Box from './Box'
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
        <Box node={23} />
        <div/><div/><div/>
        <CommonSymptoms />
        <div/><div/><div/><div/>
        <Line />
        <div/><div/><div/><div/><div/><div/><div/>
        <div className='corner-dr-two'>
            <img src={corner} alt='corner-dr-two' />
        </div>
        <Box node={24} />
        <div/><div/><div/><div/><div/><div/><div/>
        <Box node={25} />
        <Line />
        <div/><div/><div/><div/><div/><div/><div/>
        <div className='corner-ur'>
            <img src={corner} alt='corner' className='corner-up-right' />
        </div>
        <Box node={26} />
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
        <Box node={27} />
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
        <Box node={28} />
        <Box node={29} />
        <Line type="cropped" />
        <Box node={30} />
        <Line />
        <div/><div/><div/><div/>
        <div className='corner-ur-two'>
            <img src={corner} alt='corner' />
            <SmallLine type="horizontal-six" />
        </div>
        <div className='corner-ur-two'>
            <img src={corner} alt='corner' />
        </div>
        <Box node={31} />
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
        <Box node={32} />
        <Line type="horizontal-two" />
        <Box node={33} />
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
        <Box node={34} />
        <div className='corner-dr-three'>
                <img src={corner} alt='corner' />
        </div>
        <Box node={35} />
        <Cross type={2} />
        <Box node={36} />
        <div/><div/><div/><div/>
        <Line />       
        <Line />
        <Line />
        <Line />
        <div/><div/><div/><div/><div/>
        <Box node={37} />
        <div className='corner-ul'>
            <img src={corner} alt='corner' className='corner-up-left' />
        </div>
        <div className='corner-ur'>
            <img src={corner} alt='corner' className='corner-up-right' />
        </div>
        <Box node={38} />
    </div>
  )
}
