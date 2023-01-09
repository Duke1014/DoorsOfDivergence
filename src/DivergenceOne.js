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
            <Cross />
            <UncheckedBox />
            <div/><div/><div/><div/><div/><div/>
            <div className='corner-se'>
                <img src={corner} alt='corner' />
            </div>
            <Line horizontal="horizontal" />
            <div className='corner-sw'>
                <img src={corner} alt='corner' />
            </div>
            <div/><div/><div/><div/><div/><div/>
            <UncheckedBox />
            <div className='corners-down'>
                <img src={corner} alt='corner' className='corner-down-left' />
                <img src={corner} alt='corner' className='corner-down-right' />
            </div>
            <UncheckedBox />
            <div/><div/><div/><div/><div/><div/>
            <Line />
            <UncheckedBox />
            <Line />
            <div/><div/><div/><div/><div/><div/>
            <UncheckedBox />         
            <div className='corners-up'>
                <img src={corner} alt='corner' className='corner-up-left' />
                <img src={corner} alt='corner' className='corner-up-right' />
            </div>
            <UncheckedBox />
            <div/><div/><div/><div/><div/><div/>
            <Line />
            <UncheckedBox /> 
            <Line />
            <div/><div/><div/><div/>
            <UncheckedBox /> 
            <Line horizontal="horizontal" />
            <UncheckedBox /> 
            <Cross />
            <UncheckedBox /> 
            <Line horizontal="horizontal" />
            <UncheckedBox /> 
            <div/><div/><div/><div/>
            <Line />
            <UncheckedBox />
            <Line />
            <div/><div/><div/><div/><div/><div/>
            <UncheckedBox />
            <div className='corners-down'>
                <img src={corner} alt='corner' className='corner-down-left' />
                <img src={corner} alt='corner' className='corner-down-right' />
            </div>
            <UncheckedBox /> 
            <div/><div/><div/><div/><div/><div/>
            <Line />
            <UncheckedBox /> 
            <Line />
            <div/><div/><div/><div/><div/><div/>
            <Line />
            <div className='corners-down'>
                <img src={corner} alt='corner' className='corner-down-left' />
                <img src={corner} alt='corner' className='corner-down-right' />
            </div>
            <Line />
            <div/><div/><div/><div/><div/>
            <div className='corners-down'>
                <img src={corner} alt='corner' className='corner-down-right' />
            </div>
            <div className='corners-up'>
                <img src={corner} alt='corner' className='corner-up-left' />
            </div>
            <UncheckedBox />
            <div className='corners-up'>
                <img src={corner} alt='corner' className='corner-up-right' />
            </div>
            <div className='corners-down'>
                <img src={corner} alt='corner' className='corner-down-left' />
            </div>
            <div/><div/><div/><div/>
            <UncheckedBox />
            <UncheckedBox />
            <div className='corners-up'>
                <img src={corner} alt='corner' className='corner-up-left' />
                <img src={corner} alt='corner' className='corner-up-right' />
            </div>
            <UncheckedBox />
            <UncheckedBox />
        </div>
    </div>
  )
}
