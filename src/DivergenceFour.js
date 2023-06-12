import React, { useContext } from 'react'

import oneDashHorizontal from './img/1 Dash Horizontal.png'
import twoDashHorizontal from './img/2 Dash Horizontal.png'
// import threeDashHorizontal from './img/3 Dash Horizontal.png'
import twoDashVertical from './img/2 Dash Vertical.png'
// import threeDashVertical from './img/3 Dash Vertical.png'
import cornerDownLeft from './img/Corner Down-Left.png'
import cornerDownRight from './img/Corner Down-Right.png'
import cornerUpLeft from './img/Corner Up- Left.png'
import cornerUpRight from './img/Corner Up-Right.png'

import uncheckedsmall from './img/uncheckedsmall.png'
import checkedsmall from './img/Checkedsmall.png'

import { uiContent } from './lib/content'
import { UserContext } from './context/user'

export default function DivergenceFour({ setCpShow, setActiveNode, setIsHesitant }) {
  
    let ui = uiContent    

    const { nodes } = useContext(UserContext)

    const handleClick = (nodeName) => {
        setCpShow(true)
        setActiveNode(nodeName)
        if (nodeName === 'Hesitant') {
            setIsHesitant(true)
        } else {
            setIsHesitant(false)
        }
    }
  
    return (
        <div className='madness'>
            <section className='grid h-full w-full'>
                <div className='flex flex-wrap w-full h-52'/>
                <div className='grid w-screen place-content-center madness-grid-container'>
                    <div className='relative grid w-screen h-full mx-auto madness-grid'>    
                        <div className='text-2xl' style={{gridArea: '1/20/span 2/span 2', textAlign: 'center', position: 'relative', top: '-2.5rem'}}>Common Symptoms</div>
                        <div className="checkbox" id='Narcoleptic' style={{gridArea: '1/20/span 2/span 2'}}>
                            {nodes && nodes.Narcoleptic ? <>
                                <div className='checked'>
                                    <img 
                                        src={checkedsmall} 
                                        alt='checked'
                                        onClick={() => handleClick('Narcoleptic')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.twentyfour.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={uncheckedsmall} 
                                        title='No Symptoms'
                                        alt='unchecked'
                                        onClick={() => handleClick('Hint: Narcoleptic')}
                                    />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="checkbox" id='Narcissistic' style={{gridArea: '3/20/span 2/span 2'}}>
                            {nodes && nodes.Narcissistic ? <>
                                <div className='checked'>
                                    <img 
                                        src={checkedsmall} 
                                        alt='checked'
                                        onClick={() => handleClick('Narcissistic')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.twentyfive.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={uncheckedsmall} 
                                        title='No Symptoms'
                                        alt='unchecked'
                                        onClick={() => handleClick("Hint: Narcissistic")}
                                    />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="checkbox" id='Obstinate' style={{gridArea: '5/20/span 2/span 2'}}>
                            {nodes && nodes.Obstinate ? <>
                                <div className='checked'>
                                    <img 
                                        src={checkedsmall} 
                                        alt='checked'
                                        onClick={() => handleClick('Obstinate')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.twentyeight.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={uncheckedsmall} 
                                        title='No Symptoms'
                                        alt='unchecked'
                                        onClick={() => handleClick('Hint: Obstinate')}
                                    />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="checkbox" id='Arrogant' style={{gridArea: '7/20/span 2/span 2'}}>
                            {nodes && nodes.Arrogant ? <>
                                <div className='checked'>
                                    <img 
                                        src={checkedsmall} 
                                        alt='checked'
                                        onClick={() => handleClick('Arrogant')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.twentynine.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={uncheckedsmall} 
                                        title='No Symptoms'
                                        alt='unchecked'
                                        onClick={() => handleClick('Hint: Arrogant')}
                                    />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="checkbox" id='DelusionsOfGrandeur' style={{gridArea: '9/20/span 2/span 2'}}>
                            {nodes && nodes.DelusionsOfGrandeur ? <>
                                <div className='checked'>
                                    <img 
                                        src={checkedsmall} 
                                        alt='checked'
                                        onClick={() => handleClick('DelusionsOfGrandeur')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.seventyseven.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={uncheckedsmall} 
                                        title='No Symptoms'
                                        alt='unchecked'
                                        onClick={() => handleClick('Hint: Delusions Of Grandeur')}
                                    />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="checkbox" id='ALead' style={{gridArea: '1/13/span 2/span 2'}}>
                            {nodes && nodes.ALead ? <>
                                <div className='checked'>
                                    <img 
                                        src={checkedsmall} 
                                        alt='checked'
                                        onClick={() => handleClick('ALead')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.sixtythree.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={uncheckedsmall} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: A Lead')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="v-line-dash" style={{gridArea: '3/13/span 2/span 2'}}>
                            <img src={twoDashVertical} alt='line' />
                        </div> 
                        <div style={{gridArea: '5/9/span 2/span 2', position: 'relative', top: '5.7rem', left: '6rem'}}>
                            <img src={cornerDownRight} alt='corner' />
                        </div>
                        <div className="h-line-dash" style={{gridArea: '5/11/span 2/span 2'}}>
                            <img src={twoDashHorizontal} alt='line'/>
                        </div>
                        <div className="checkbox" id='Combative' style={{gridArea: '5/13/span 2/span 2'}}>
                            {nodes && nodes.Combative ? <>
                                <div className='checked'>
                                    <img 
                                        src={checkedsmall} 
                                        alt='checked'
                                        onClick={() => handleClick('Combative')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.sixtyfour.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={uncheckedsmall} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Combative')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="h-line-dash" style={{gridArea: '5/15/span 2/span 2'}}>
                            <img src={twoDashHorizontal} alt='line'/>
                        </div>
                        <div style={{gridArea: '5/17/span 2/span 2', position: 'relative', top: '5.7rem', left: '1.4rem'}}>
                            <img src={cornerDownLeft} alt='corner' />
                        </div>
                        <div className="checkbox" id='Hesitant' style={{gridArea: '7/9/span 2/span 2'}}>
                            {nodes && nodes.Hesitant ? <>
                                <div className='checked'>
                                    <img 
                                        src={checkedsmall} 
                                        alt='checked'
                                        onClick={() => handleClick('Hesitant')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.sixtyfive.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={uncheckedsmall} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Hesitant')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="v-line-dash" style={{gridArea: '7/13/span 2/span 2'}}>
                            <img src={twoDashVertical} alt='line' />
                        </div> 
                        <div className="checkbox" id='Knowledgeable' style={{gridArea: '7/17/span 2/span 2'}}>
                            {nodes && nodes.Knowledgeable ? <>
                                <div className='checked'>
                                    <img 
                                        src={checkedsmall} 
                                        alt='checked'
                                        onClick={() => handleClick('Knowledgeable')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.fourtyeight.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={uncheckedsmall} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Knowledgeable')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div style={{gridArea: '9/9/span 2/span 2', position: 'relative', top: '5.7rem', left: '6rem'}}>
                            <img src={cornerDownRight} alt='corner' />
                        </div>
                        <div className="h-line-dash" style={{gridArea: '9/11/span 2/span 2'}}>
                            <img src={twoDashHorizontal} alt='line'/>
                        </div>
                        <div className="v-line-dash" style={{gridArea: '9/13/span 2/span 2'}}>
                            <img src={twoDashVertical} alt='line' />
                        </div> 
                        <div className="h-line-dash" style={{gridArea: '9/15/span 2/span 2'}}>
                            <img src={twoDashHorizontal} alt='line'/>
                        </div>
                        <div style={{gridArea: '9/17/span 2/span 2', position: 'relative', top: '5.7rem', left: '1.4rem'}}>
                            <img src={cornerDownLeft} alt='corner' />
                        </div>
                        <div className="checkbox" id='Retrophilic' style={{gridArea: '11/9/span 2/span 2'}}>
                            {nodes && nodes.Retrophilic ? <>
                                <div className='checked'>
                                    <img 
                                        src={checkedsmall} 
                                        alt='checked'
                                        onClick={() => handleClick('Retrophilic')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.fifty.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={uncheckedsmall} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Retrophilic')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="checkbox" id='Headstrong' style={{gridArea: '11/13/span 2/span 2'}}>
                            {nodes && nodes.Headstrong ? <>
                                <div className='checked'>
                                    <img 
                                        src={checkedsmall} 
                                        alt='checked'
                                        onClick={() => handleClick('Headstrong')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.seventysix.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={uncheckedsmall} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Headstrong')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="checkbox" id='Neophilic' style={{gridArea: '11/17/span 2/span 2'}}>
                            {nodes && nodes.Neophilic ? <>
                                <div className='checked'>
                                    <img 
                                        src={checkedsmall} 
                                        alt='checked'
                                        onClick={() => handleClick('Neophilic')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.fiftyone.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={uncheckedsmall} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Neophilic')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div style={{gridArea: '13/9/span 2/span 2', position: 'relative', top: '1.3rem', left: '6rem'}}>
                            <img src={cornerUpRight} alt='corner' />
                        </div>
                        <div className="h-line-dash" style={{gridArea: '13/11/span 2/span 2'}}>
                            <img src={twoDashHorizontal} alt='line'/>
                        </div>
                        <div className="v-line-dash" style={{gridArea: '13/13/span 2/span 2'}}>
                            <img src={twoDashVertical} alt='line' />
                        </div> 
                        <div className="h-line-dash" style={{gridArea: '13/15/span 2/span 2'}}>
                            <img src={twoDashHorizontal} alt='line'/>
                        </div>
                        <div style={{gridArea: '13/17/span 2/span 2', position: 'relative', top: '1.3rem', left: '2rem'}}>
                            <img src={cornerUpLeft} alt='corner' />
                        </div>
                        <div style={{gridArea: '15/7/span 2/span 2', position: 'relative', top: '5.7rem', left: '6rem'}}>
                            <img src={cornerDownRight} alt='corner' />
                        </div>
                        <div className="h-line-dash" style={{gridArea: '15/9/span 2/span 2', position: 'relative', left: '3rem'}}>
                            <img src={oneDashHorizontal} alt='line'/>
                        </div>             
                        <div style={{gridArea: '16/10/span 2/span 2', position: 'relative', top: '0.5rem'}}>
                            <img src={cornerDownRight} alt='corner' />
                        </div>
                        <div className="h-line-dash" style={{gridArea: '15/11/span 2/span 2'}}>
                            <img src={twoDashHorizontal} alt='line'/>
                        </div>
                        <div className="h-line-dash"style={{gridArea: '15/11/span 2/span 2', position: 'relative', top: '1rem'}}>
                            <img src={twoDashHorizontal} alt='line'/>
                        </div>
                        <div className="checkbox" id='Hallucinations' style={{gridArea: '15/13/span 2/span 2'}}>
                            {nodes && nodes.Hallucinations ? <>
                                <div className='checked'>
                                    <img 
                                        src={checkedsmall} 
                                        alt='checked'
                                        onClick={() => handleClick('Hallucinations')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.sixtysix.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={uncheckedsmall} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Hallucinations')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="v-line-dash" style={{gridArea: '17/8/span 2/span 2'}}>
                            <img src={twoDashVertical} alt='line' />
                        </div> 
                        <div className="checkbox" id='Taciturn' style={{gridArea: '17/9/span 2/span 2'}}>
                            {nodes && nodes.Taciturn ? <>
                                <div className='checked'>
                                    <img 
                                        src={checkedsmall} 
                                        alt='checked'
                                        onClick={() => handleClick('Taciturn')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.sixtyseven.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={uncheckedsmall} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Taciturn')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="v-line-dash" style={{gridArea: '17/13/span 2/span 2'}}>
                            <img src={twoDashVertical} alt='line' />
                        </div> 
                        <div className="v-line-dash" style={{gridArea: '19/8/span 2/span 2'}}>
                            <img src={twoDashVertical} alt='line' />
                        </div> 
                        <div style={{gridArea: '19/10/span 2/span 2', position: 'relative', top: '1.4rem'}}>
                            <img src={cornerUpRight} alt='corner' />
                        </div>
                        <div style={{gridArea: '20/10/span 2/span 2', position: 'relative', top: '0.5rem'}}>
                            <img src={cornerDownRight} alt='corner' />
                        </div>
                        <div className="h-line-dash" style={{gridArea: '19/11/span 2/span 2'}}>
                            <img src={twoDashHorizontal} alt='line'/>
                        </div>
                        <div className="h-line-dash" style={{gridArea: '19/11/span 2/span 2', position: 'relative', top: '1rem'}}>
                            <img src={twoDashHorizontal} alt='line'/>
                        </div>
                        <div className="checkbox" id='Confused' style={{gridArea: '19/13/span 2/span 2'}}>
                            {nodes && nodes.Confused ? <>
                                <div className='checked'>
                                    <img 
                                        src={checkedsmall} 
                                        alt='checked'
                                        onClick={() => handleClick('Confused')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.sixtyeight.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={uncheckedsmall} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Confused')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="h-line-dash" style={{gridArea: '19/15/span 2/span 2'}}>
                            <img src={twoDashHorizontal} alt='line'/>
                        </div>
                        <div style={{gridArea: '19/17/span 2/span 2', position: 'relative', top: '5.7rem', left: '1.5rem'}}>
                            <img src={cornerDownLeft} alt='corner' />
                        </div>
                        <div className="v-line-dash" style={{gridArea: '21/8/span 2/span 2'}}>
                            <img src={twoDashVertical} alt='line' />
                        </div> 
                        <div className="checkbox" id='Impatient' style={{gridArea: '21/9/span 2/span 2'}}>
                            {nodes && nodes.Impatient ? <>
                                <div className='checked'>
                                    <img 
                                        src={checkedsmall} 
                                        alt='checked'
                                        onClick={() => handleClick('Impatient')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.sixtynine.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={uncheckedsmall} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Impatient')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="checkbox" id='Unflappable' style={{gridArea: '21/17/span 2/span 2'}}>
                            {nodes && nodes.Unflappable ? <>
                                <div className='checked'>
                                    <img 
                                        src={checkedsmall} 
                                        alt='checked'
                                        onClick={() => handleClick('Unflappable')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.seventy.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={uncheckedsmall} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Unflappable')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="v-line-dash" style={{gridArea: '23/8/span 2/span 2'}}>
                            <img src={twoDashVertical} alt='line' />
                        </div> 
                        <div style={{gridArea: '23/9/span 2/span 2', position: 'relative', top: '1.4rem', left: '6rem'}}>
                            <img src={cornerUpRight} alt='corner' />
                        </div>
                        <div className="h-line-dash" style={{gridArea: '23/11/span 2/span 2'}}>
                            <img src={twoDashHorizontal} alt='line'/>
                        </div>
                        <div className="checkbox" id='Dumbfounded' style={{gridArea: '23/13/span 2/span 2'}}>
                            {nodes && nodes.Dumbfounded ? <>
                                <div className='checked'>
                                    <img 
                                        src={checkedsmall} 
                                        alt='checked'
                                        onClick={() => handleClick('Dumbfounded')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.seventyone.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={uncheckedsmall} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Dumbfounded')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="h-line-dash" style={{gridArea: '23/15/span 2/span 2'}}>
                            <img src={twoDashHorizontal} alt='line'/>
                        </div>
                        <div style={{gridArea: '23/17/span 2/span 2', position: 'relative', top: '1.2rem', left: '1.5rem'}}>
                            <img src={cornerUpLeft} alt='corner' />
                        </div>
                        <div className="checkbox" id='InvasiveProcedures' style={{gridArea: '25/8/span 2/span 2'}}>
                            {nodes && nodes.InvasiveProcedures ? <>
                                <div className='checked'>
                                    <img 
                                        src={checkedsmall} 
                                        alt='checked'
                                        onClick={() => handleClick('InvasiveProcedures')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.seventytwo.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={uncheckedsmall} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Invasive Procedures')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="h-line-dash" style={{gridArea: '25/9/span 2/span 2', position: 'relative', left: '3rem'}}>
                            <img src={oneDashHorizontal} alt='line'/>
                        </div>
                        <div className="h-line-dash" style={{gridArea: '25/11/span 2/span 2'}}>
                            <img src={twoDashHorizontal} alt='line'/>
                        </div>
                        <div style={{gridArea: '25/13/span 2/span 2', position: 'relative', top: '1.2rem'}}>
                            <img src={cornerUpLeft} alt='corner' />
                        </div>
                        <div className="v-line-dash" style={{gridArea: '25/13/span 2/span 2'}}>
                            <img src={twoDashVertical} alt='line' />
                        </div> 
                        <div style={{gridArea: '27/9/span 2/span 2', position: 'relative', top: '5.7rem', left: '6rem'}}>
                            <img src={cornerDownRight} alt='corner' />
                        </div>
                        <div className="h-line-dash" style={{gridArea: '27/11/span 2/span 2'}}>
                            <img src={twoDashHorizontal} alt='line'/>
                        </div>
                        <div className="checkbox" id='Fickle' style={{gridArea: '27/13/span 2/span 2'}}>
                            {nodes && nodes.Fickle ? <>
                                <div className='checked'>
                                    <img 
                                        src={checkedsmall} 
                                        alt='checked'
                                        onClick={() => handleClick('Fickle')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.seventythree.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={uncheckedsmall} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Fickle')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="h-line-dash" style={{gridArea: '27/15/span 2/span 2'}}>
                            <img src={twoDashHorizontal} alt='line'/>
                        </div>
                        <div style={{gridArea: '27/17/span 2/span 2', position: 'relative', top: '5.7rem', left: '1.5rem'}}>
                            <img src={cornerDownLeft} alt='corner' />
                        </div>
                        <div className="checkbox" id='ANewDay' style={{gridArea: '29/9/span 2/span 2'}}>
                            {nodes && nodes.ANewDay ? <>
                                <div className='checked'>
                                    <img 
                                        src={checkedsmall} 
                                        alt='checked'
                                        onClick={() => handleClick('ANewDay')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.seventyfour.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={uncheckedsmall} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: A New Day')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="checkbox" id='FinallyFree' style={{gridArea: '29/17/span 2/span 2'}}>
                            {nodes && nodes.FinallyFree ? <>
                                <div className='checked'>
                                    <img 
                                        src={checkedsmall} 
                                        alt='checked'
                                        onClick={() => handleClick('FinallyFree')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.seventyfive.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={uncheckedsmall} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Finally Free')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                    </div>
                </div>
        </section>
    </div>
  )
}
