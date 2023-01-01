import React from 'react'

import checked from './img/Checked.png'
import line from './img/Line.png'
import unchecked from './img/unchecked.png'
import corner from './img/Corner.png'

export default function () {

  return (
    <div>
        <div className='grid'>
            <div className='checked'>
                <img src={checked} alt='check' />
                <p>Welcome to Paradox</p>
            </div>
            <div className='line'>
                <img src={line} alt="line" />
            </div>
            <div className='unchecked'>
                <img src={unchecked} alt='unchecked' />
            </div>
            <div className='corner-line'>
                <img src={corner} alt='corner' />
            </div>
        </div>
    </div>
  )
}
