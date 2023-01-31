import React from 'react'

import Box from './Box'
import Line from './Line'
import corner from './img/Corner.png'
import CommonSymptoms from './CommonSymptoms'
import TitleCard from './TitleCard'
import Cross from './Cross'
import SmallLine from './SmallLine'

export default function () {
  return (
    <div>
        <div className='grid-one'>
            <TitleCard divergence="one" />
            <div/><div/><div/>
            <Box node={0} />
            <div/><div/><div/>
            <CommonSymptoms />
            <div/><div/><div/><div/>
            <Line />
            <div/><div/><div/><div/><div/><div/><div/><div/>
            <Box node={1} />
            <div/><div/><div/><div/><div/><div/><div/>
            <Box node={2} />
            <Cross type={1} />
            <Box node={3} />
            <div/><div/><div/><div/><div/><div/>
            <div className='corner-dr'>
                <img src={corner} alt='corner' />
            </div>
            <Line type="horizontal" />
            <div className='corner-dl'>
                <img src={corner} alt='corner' />
            </div>
            <div/><div/><div/><div/><div/><div/>
            <Box node={4} />
            <div className='corners-down'>
                <img src={corner} alt='corner' className='corners-dl' />
                <img src={corner} alt='corner' className='corners-dr' />
            </div>
            <Box node={5} />
            <div/><div/><div/><div/><div/><div/>
            <Line />
            <Box node={6} />
            <Line />
            <div/><div/><div/><div/><div/><div/>
            <Box node={7} />       
            <div className='corners-up'>
                <img src={corner} alt='corner' className='corners-ul' />
                <img src={corner} alt='corner' className='corners-ur' />
            </div>
            <Box node={8} />
            <div/><div/><div/><div/><div/><div/>
            <Line type="bigger" />
            <Box node={9} />
            <Line type="bigger" />
            <div/><div/><div/><div/>
            <Box node={10} />
            <Line type="horizontal-two" />
            <Box node={11} />
            <Cross type={2} />
            <Box node={12} /> 
            <Line type="horizontal-two" />
            <Box node={13} /> 
            <div/><div/><div/><div/>
            <Line />
            <Box node={14} />
            <Line />
            <div/><div/><div/><div/><div/><div/>
            <Box node={15} />
            <div className='corners-down'>
                <img src={corner} alt='corner' className='corners-dl' />
                <img src={corner} alt='corner' className='corners-dr' />
            </div>
            <Box node={16} /> 
            <div/><div/><div/><div/><div/><div/>
            <Line />
            <Box node={17} /> 
            <Line />
            <div/><div/><div/><div/><div/><div/>
            <Line />
            <div className='corners-down'>
                <img src={corner} alt='corner' className='corners-dl-three' />
                <img src={corner} alt='corner' className='corners-dr-three' />
                <SmallLine type={1} />
                <SmallLine type={2} />
            </div>
            <Line />
            <div/><div/><div/><div/><div/>
            <div className='corners-down'>
                <img src={corner} alt='corner' className='corners-dr-two' />
            </div>
            <div className='corners-up'>
                <img src={corner} alt='corner' className='corners-ul-two' />
            </div>
            <Box node={18} />
            <div className='corners-up'>
                <img src={corner} alt='corner' className='corners-ur-two' />
            </div>
            <div className='corners-down'>
                <img src={corner} alt='corner' className='corners-dl-two' />
            </div>
            <div/><div/><div/><div/>
            <Box node={19} />
            <Box node={20} />
            <div className='corners-up'>
                <img src={corner} alt='corner' className='corners-ul-three' />
                <img src={corner} alt='corner' className='corners-ur-three' />
            </div>
            <Box node={21} />
            <Box node={22} />
        </div>
    </div>
  )
}
