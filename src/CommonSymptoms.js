import React, { useContext } from 'react'
import { UserContext } from './context/user'
import Checked from './img/Checked.png'
import unchecked from './img/unchecked.png'

import { uiContent } from './lib/content'

export default function CommonSymptoms({ handleClick }) {

  const { nodes } = useContext(UserContext)

  let ui = uiContent

  return (
    <div style={{gridArea: '1/17/span 2/span 2'}}>
      <p>Common Symptoms</p>
      <div className="checkbox" id='Narcoleptic' >
        {nodes && nodes.Narcoleptic ? <>
          <div className='checked'>
            <img 
              src={Checked} 
              alt='checked'
              onClick={() => handleClick('Narcoleptic')} 
            />
            <p className='symptom-found'>{ui.madnessNodes.twentyfour.title}</p>
          </div> 
        </>:<>
          <div className='unchecked'>
            <img 
              src={unchecked} 
              title='No Symptoms'
              alt='unchecked'
            />
            <p className='no-symptoms'>No Symptoms</p>
          </div>
        </>}
      </div>

      <div className="checkbox" id='Narcissistic'>
        {nodes && nodes.Narcissistic ? <>
          <div className='checked'>
            <img 
              src={Checked} 
              alt='checked'
              onClick={() => handleClick('Narcissistic')} 
            />
            <p className='symptom-found'>{ui.madnessNodes.twentyfive.title}</p>
          </div> 
        </>:<>
          <div className='unchecked'>
            <img 
              src={unchecked} 
              title='No Symptoms'
              alt='unchecked'
            />
            <p className='no-symptoms'>No Symptoms</p>
          </div>
        </>}
      </div>

      <div className="checkbox" id='Obstinate'>
        {nodes && nodes.Obstinate ? <>
          <div className='checked'>
            <img 
              src={Checked} 
              alt='checked'
              onClick={() => handleClick('Obstinate')} 
            />
            <p className='symptom-found'>{ui.madnessNodes.twentyeight.title}</p>
          </div> 
        </>:<>
          <div className='unchecked'>
            <img 
              src={unchecked} 
              title='No Symptoms'
              alt='unchecked'
            />
            <p className='no-symptoms'>No Symptoms</p>
          </div>
        </>}
      </div>
      
      <div className="checkbox" id='Arrogant'>
        {nodes && nodes.Arrogant ? <>
          <div className='checked'>
            <img 
              src={Checked} 
              alt='checked'
              onClick={() => handleClick('Arrogant')} 
            />
            <p className='symptom-found'>{ui.madnessNodes.twentynine.title}</p>
          </div> 
        </>:<>
          <div className='unchecked'>
            <img 
              src={unchecked} 
              title='No Symptoms'
              alt='unchecked'
            />
            <p className='no-symptoms'>No Symptoms</p>
          </div>
        </>}
      </div>

      <div className="checkbox" id='DelusionsOfGrandeur'>
        {nodes && nodes.DelusionsOfGrandeur ? <>
          <div className='checked'>
            <img 
              src={Checked} 
              alt='checked'
              onClick={() => handleClick('DelusionsOfGrandeur')} 
            />
            <p className='symptom-found'>{ui.madnessNodes.seventyseven.title}</p>
          </div> 
        </>:<>
          <div className='unchecked'>
            <img 
              src={unchecked} 
              title='No Symptoms'
              alt='unchecked'
            />
            <p className='no-symptoms'>No Symptoms</p>
          </div>
        </>}
      </div>
    </div>
  )
}
