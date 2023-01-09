import React from 'react'
import TitleCard from './TitleCard'
import UncheckedBox from './UncheckedBox'
import CommonSymptoms from './CommonSymptoms'

import line from './img/Line.png'
import corner from './img/Corner.png'

export default function DivergenceFour() {
  return (
    <div className='grid'>
        <div>
            <TitleCard />
        </div>
        <div/><div/><div/>
        <UncheckedBox />
        <div/><div/><div/>
        <div>
            <CommonSymptoms />
        </div>
        <div/><div/><div/><div/>
        <div className='line'>
            <img src={line} alt="line" />
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
        <div className='line'>
            <img src={line} alt="line" />
        </div>
        <UncheckedBox />
        <div/><div/><div/><div/><div/><div/>
        <div className='corner-se'>
                <img src={corner} alt='corner' />
        </div>
        <div className='crossed-lines'>
            <img src={line} alt="line" />
            <img src={line} alt="line" className='rotated-line'/>
        </div>
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
        <div className='crossed-lines'>
            <img src={line} alt="line" />
            <img src={line} alt="line" className='rotated-line'/>
        </div>
        <div className='corners-up'>
            <img src={corner} alt='corner' className='corner-up-left' />
        </div>
        <div/><div/><div/><div/><div/>
        <div className='corner-se'>
                <img src={corner} alt='corner' />
        </div>
        <div className='line'>
            <img src={line} alt="line" className='horizontal-line'/>
        </div>
        <UncheckedBox />
        <div/><div/><div/><div/><div/><div/>
        <div className='line'>
            <img src={line} alt="line"/>
        </div>
        <UncheckedBox />
        <div className='line'>
            <img src={line} alt="line"/>
        </div>
        <div/><div/><div/><div/><div/><div/>
        <div className='line'>
            <img src={line} alt="line"/>
        </div>
        <div className='corner-se'>
            <img src={corner} alt='corner' />
            <img src={corner} alt='corner' className='corner-up-right' />
        </div>
        <UncheckedBox />
        <div className='corners-down'>
            <img src={corner} alt='corner' className='corner-down-left' />
        </div>
        <div/><div/><div/><div/><div/>
        <div className='line'>
            <img src={line} alt="line"/>
        </div>
        <UncheckedBox />
        <div/>
        <UncheckedBox />
        <div/><div/><div/><div/><div/>
        <div className='line'>
            <img src={line} alt="line"/>
        </div>
        <div className='corners-up'>
            <img src={corner} alt='corner' className='corner-up-right' />
        </div>
        <UncheckedBox />
        <div className='corners-up'>
            <img src={corner} alt='corner' className='corner-up-left' />
        </div>
        <div/><div/><div/><div/><div/>
        <UncheckedBox />
        <div className='line'>
            <img src={line} alt="line" className='horizontal-line'/>
        </div>
        <div className='corners-up'>
            <img src={corner} alt='corner' className='corner-up-left' />
            <img src={line} alt="line"/>
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
