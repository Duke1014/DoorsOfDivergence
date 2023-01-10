import React from 'react'

import UncheckedBox from './UncheckedBox'
import Line from './Line'
import corner from './img/Corner.png'
import CommonSymptoms from './CommonSymptoms'
import TitleCard from './TitleCard'
import Cross from './Cross'

export default function () {
  return (
    <div>
        <div className='grid'>
            {/* <div className='checked'>
                <img src={checked} alt='check' /> */}
            {/* </div>*/}
            <TitleCard divergence="one" />
            <div/><div/><div/>
            <UncheckedBox />
            <div/><div/><div/>
            <CommonSymptoms />
            <div/><div/><div/><div/>
            <Line />
            <div/><div/><div/><div/><div/><div/><div/><div/>
            <UncheckedBox />
            <div/><div/><div/><div/><div/><div/><div/>
            <UncheckedBox />
            <Cross type={1} />
            <UncheckedBox />
            <div/><div/><div/><div/><div/><div/>
            <div className='corner-dr'>
                <img src={corner} alt='corner' />
            </div>
            <Line horizontal="horizontal" />
            <div className='corner-dl'>
                <img src={corner} alt='corner' />
            </div>
            <div/><div/><div/><div/><div/><div/>
            <UncheckedBox />
            <div className='corners-down'>
                <img src={corner} alt='corner' className='corners-dl' />
                <img src={corner} alt='corner' className='corners-dr' />
            </div>
            <UncheckedBox />
            <div/><div/><div/><div/><div/><div/>
            <Line />
            <UncheckedBox />
            <Line />
            <div/><div/><div/><div/><div/><div/>
            <UncheckedBox />         
            <div className='corners-up'>
                <img src={corner} alt='corner' className='corners-ul' />
                <img src={corner} alt='corner' className='corners-ur' />
            </div>
            <UncheckedBox />
            <div/><div/><div/><div/><div/><div/>
            <Line />
            <UncheckedBox /> 
            <Line />
            <div/><div/><div/><div/>
            <UncheckedBox /> 
            <Line horizontal="horizontal-two" />
            <UncheckedBox /> 
            <Cross type={2} />
            <UncheckedBox /> 
            <Line horizontal="horizontal-two" />
            <UncheckedBox /> 
            <div/><div/><div/><div/>
            <Line />
            <UncheckedBox />
            <Line />
            <div/><div/><div/><div/><div/><div/>
            <UncheckedBox />
            <div className='corners-down'>
                <img src={corner} alt='corner' className='corners-dl' />
                <img src={corner} alt='corner' className='corners-dr' />
            </div>
            <UncheckedBox /> 
            <div/><div/><div/><div/><div/><div/>
            <Line />
            <UncheckedBox /> 
            <Line />
            <div/><div/><div/><div/><div/><div/>
            <Line />
            <div className='corners-down'>
                <img src={corner} alt='corner' className='corners-dl' />
                <img src={corner} alt='corner' className='corners-dr' />
            </div>
            <Line />
            <div/><div/><div/><div/><div/>
            <div className='corners-down'>
                <img src={corner} alt='corner' className='corners-dr-two' />
            </div>
            <div className='corners-up'>
                <img src={corner} alt='corner' className='corners-ul-two' />
            </div>
            <UncheckedBox />
            <div className='corners-up'>
                <img src={corner} alt='corner' className='corners-ur-two' />
            </div>
            <div className='corners-down'>
                <img src={corner} alt='corner' className='corners-dl-two' />
            </div>
            <div/><div/><div/><div/>
            <UncheckedBox />
            <UncheckedBox />
            <div className='corners-up'>
                <img src={corner} alt='corner' className='corners-ul-three' />
                <img src={corner} alt='corner' className='corners-ur-three' />
            </div>
            <UncheckedBox />
            <UncheckedBox />
        </div>
    </div>
  )
}
