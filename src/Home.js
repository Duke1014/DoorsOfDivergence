import React from 'react'
import DivergenceFour from './DivergenceFour'

// import UncheckedBox from './UncheckedBox'
// import TitleCard from './TitleCard'
// import CommonSymptoms from './CommonSymptoms'

// import checked from './img/Checked.png'
// import line from './img/Line.png'
// import unchecked from './img/unchecked.png'
// import corner from './img/Corner.png'
import DivergenceOne from './DivergenceOne'
import DivergenceThree from './DivergenceThree'
import DivergenceTwo from './DivergenceTwo'

export default function () {

  return (
    <div className='elixirs-and-alienists'>
        <a>
            <DivergenceOne />
        </a>
        <a>
            <DivergenceTwo />
        </a>
        <a>
            <DivergenceThree />
        </a>
        <a>
            <DivergenceFour />
        </a>
    </div>
  )
}
