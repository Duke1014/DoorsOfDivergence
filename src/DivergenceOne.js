import React from 'react'

import UncheckedBox from './UncheckedBox'
import line from './img/Line.png'
import corner from './img/Corner.png'
import CommonSymptoms from './CommonSymptoms'
import TitleCard from './TitleCard'

export default function () {
  return (
    <div>
        <div className='grid'>
            {/* <div className='checked'>
                <img src={checked} alt='check' /> */}
            {/* </div>*/}
             <div>
                <TitleCard divergence="one" />
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
            <div/><div/><div/><div/><div/><div/><div/><div/>
            <UncheckedBox />
            <div/><div/><div/><div/><div/><div/><div/>
            <UncheckedBox />
            <div className='crossed-lines'>
                <img src={line} alt="line" />
                <img src={line} alt="line" className='rotated-line'/>
            </div>
            <UncheckedBox />
            <div/><div/><div/><div/><div/><div/>
            <div className='corner-se'>
                <img src={corner} alt='corner' />
            </div>
            <div className='line'>
                <img src={line} alt="line" className='horizontal-line'/>
            </div>
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
            <div className='line'>
                <img src={line} alt="line"/>
            </div>
            <UncheckedBox />
            <div className='line'>
                <img src={line} alt="line"/>
            </div>
            <div/><div/><div/><div/><div/><div/>
            <UncheckedBox />         
            <div className='corners-up'>
                <img src={corner} alt='corner' className='corner-up-left' />
                <img src={corner} alt='corner' className='corner-up-right' />
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
            <div/><div/><div/><div/>
            <UncheckedBox /> 
            <div className='line'>
                <img src={line} alt="line" className='horizontal-line'/>
            </div>
            <UncheckedBox /> 
            <div className='crossed-lines'>
                <img src={line} alt="line" />
                <img src={line} alt="line" className='rotated-line'/>
            </div>
            <UncheckedBox /> 
            <div className='line'>
                <img src={line} alt="line" className='horizontal-line'/>
            </div>
            <UncheckedBox /> 
            <div/><div/><div/><div/>
            <div className='line'>
                <img src={line} alt="line"/>
            </div>
            <UncheckedBox />
            <div className='line'>
                <img src={line} alt="line"/>
            </div>
            <div/><div/><div/><div/><div/><div/>
            <UncheckedBox />
            <div className='corners-down'>
                <img src={corner} alt='corner' className='corner-down-left' />
                <img src={corner} alt='corner' className='corner-down-right' />
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
            <div className='corners-down'>
                <img src={corner} alt='corner' className='corner-down-left' />
                <img src={corner} alt='corner' className='corner-down-right' />
            </div>
            <div className='line'>
                <img src={line} alt="line"/>
            </div>
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
