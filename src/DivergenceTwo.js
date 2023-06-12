import React, { useContext } from 'react'

import oneDashHorizontal from './img/1 Dash Horizontal.png'
import twoDashHorizontal from './img/2 Dash Horizontal.png'
// import threeDashHorizontal from './img/3 Dash Horizontal.png'
import twoDashVertical from './img/2 Dash Vertical.png'
import threeDashVertical from './img/3 Dash Vertical.png'
import cornerDownLeft from './img/Corner Down-Left.png'
import cornerDownRight from './img/Corner Down-Right.png'
import cornerUpLeft from './img/Corner Up- Left.png'
import cornerUpRight from './img/Corner Up-Right.png'

import uncheckedsmall from './img/uncheckedsmall.png'
import checkedsmall from './img/Checkedsmall.png'

import { uiContent } from './lib/content'
import { UserContext } from './context/user'

export default function ({ setCpShow, setActiveNode }) {
    
    let ui = uiContent

    const { nodes } = useContext(UserContext)

    const handleClick = (nodeName) => {
        setCpShow(true)
        setActiveNode(nodeName)
    }

    return (
        <div className='madness'>
            <section className='grid h-full w-full'>
                <div className='flex flex-wrap w-screen h-52'/>
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
                        <div className="checkbox" id='MissionOfMercy' style={{gridArea: '1/13/span 2/span 2'}}>
                            {nodes && nodes.MissionOfMercy ? <>
                                <div className='checked'>
                                    <img 
                                        src={checkedsmall} 
                                        alt='checked'
                                        onClick={() => handleClick('MissionOfMercy')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.thirty.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={uncheckedsmall} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Mission Of Mercy')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="v-line-dash" style={{gridArea: '3/13/span 2/span 2'}}>
                            <img src={twoDashVertical} alt='line' />
                        </div> 
                        
                        <div style={{gridArea: '5/11/span 2/span 2', display: 'flex', alignItems: 'flex-end'}}>
                            <img src={cornerDownRight} alt='corner' style={{position: 'relative', top: '-1.8rem', left: '6rem'}}/>
                        </div>
                        <div className="checkbox" id='Nepotism' style={{gridArea: '5/13/span 2/span 2'}}>
                            {nodes && nodes.Nepotism ? <>
                                <div className='checked'>
                                    <img 
                                        src={checkedsmall} 
                                        alt='checked'
                                        onClick={() => handleClick('Nepotism')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.thirtyone.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={uncheckedsmall} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Nepotism')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="checkbox" id='Inactive' style={{gridArea: '7/11/span 2/span 2'}}>
                            {nodes && nodes.Inactive ? <>
                                <div className='checked'>
                                    <img 
                                        src={checkedsmall} 
                                        alt='checked'
                                        onClick={() => handleClick('Inactive')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.thirtyfour.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={uncheckedsmall} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Inactive')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="v-line-dash" style={{gridArea: '7/13/span 2/span 2'}}>
                            <img src={twoDashVertical} alt='line' />
                        </div> 
                        <div style={{gridArea: '9/11/span 2/span 2'}}>
                            <img src={cornerUpRight} alt='corner' style={{position: 'relative', top: '2rem', left: '6rem'}}/>
                        </div>
                        <div className="checkbox" id='Sanguine' style={{gridArea: '9/13/span 2/span 2'}}>
                            {nodes && nodes.Sanguine ? <>
                                <div className='checked'>
                                    <img 
                                        src={checkedsmall} 
                                        alt='checked'
                                        onClick={() => handleClick('Sanguine')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.thirtyfive.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={uncheckedsmall} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Sanguine')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="v-line-dash" style={{gridArea: '11/13/span 2/span 2'}}>
                            <img src={twoDashVertical} alt='line' />
                        </div>                       
                        <div style={{gridArea: '13/9/span 2/span 2', display: 'flex', alignItems: 'flex-end'}}>
                            <img src={cornerDownRight} alt='corner' style={{position: 'relative', top: '-1.8rem', left: '6rem'}}/>
                        </div>
                        <div className="h-line-dash" style={{gridArea: '13/10/span 2/span 2', position: 'relative', left: '3rem'}}>
                            <img src={oneDashHorizontal} alt='line' />
                        </div> 
                        <div style={{gridArea: '13/11/span 2/span 2', display: 'flex', alignItems: 'flex-end'}}>
                            <img src={cornerDownRight} alt='corner' style={{position: 'relative', top: '-1.8rem', left: '6rem'}}/>
                        </div>
                        <div className="checkbox" id='FrequentAttacks' style={{gridArea: '13/13/span 2/span 2'}}>
                            {nodes && nodes.FrequentAttacks ? <>
                                <div className='checked'>
                                    <img 
                                        src={checkedsmall} 
                                        alt='checked'
                                        onClick={() => handleClick('FrequentAttacks')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.thirtysix.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={uncheckedsmall} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Frequent Attacks')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="h-line-dash" style={{gridArea: '13/15/span 2/span 2', position: 'relative', top: '-1rem'}}>
                            <img src={twoDashHorizontal} alt='line' />
                        </div> 
                        <div className="h-line-dash" style={{gridArea: '13/15/span 2/span 2', position: 'relative', left: '-2rem'}}>
                            <img src={oneDashHorizontal} alt='line' />
                        </div> 
                        <div style={{gridArea: '13/16/span 2/span 2', display: 'flex', alignItems: 'flex-end'}}>
                            <img src={cornerDownLeft} alt='corner' style={{position: 'relative', top: '-1.8rem', left: '1.5rem'}}/>
                        </div>
                        <div style={{gridArea: '13/17/span 2/span 2', display: 'flex', alignItems: 'flex-end'}}>
                            <img src={cornerDownLeft} alt='corner' style={{position: 'relative', top: '-2.8rem', left: '1.5rem'}}/>
                        </div>
                        <div className="checkbox" id='Kleptomania' style={{gridArea: '15/9/span 2/span 2'}}>
                            {nodes && nodes.Kleptomania ? <>
                                <div className='checked'>
                                    <img 
                                        src={checkedsmall} 
                                        alt='checked'
                                        onClick={() => handleClick('Kleptomania')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.thirtyseven.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={uncheckedsmall} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Kleptomania')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="checkbox" id='Lethargic' style={{gridArea: '15/11/span 2/span 2'}}>
                            {nodes && nodes.Lethargic ? <>
                                <div className='checked'>
                                    <img 
                                        src={checkedsmall} 
                                        alt='checked'
                                        onClick={() => handleClick('Lethargic')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.thirtyeight.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={uncheckedsmall} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Lethargic')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="v-line-dash" style={{gridArea: '15/13/span 2/span 2'}}>
                            <img src={twoDashVertical} alt='line' />
                        </div> 
                       
                        <div className="checkbox" id='Insubordinate' style={{gridArea: '15/16/span 2/span 2'}}>
                            {nodes && nodes.Insubordinate ? <>
                                <div className='checked'>
                                    <img 
                                        src={checkedsmall} 
                                        alt='checked'
                                        onClick={() => handleClick('Insubordinate')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.thirtynine.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={uncheckedsmall} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Insubordinate')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="v-line-dash" style={{gridArea: '15/17/span 2/span 2'}}>
                            <img src={threeDashVertical} alt='line' />
                        </div> 
                        <div style={{gridArea: '17/9/span 2/span 2'}}>
                            <img src={cornerUpRight} alt='corner' style={{position: 'relative', top: '2rem', left: '6rem'}}/>
                        </div>
                        <div className="h-line-dash" style={{gridArea: '17/10/span 2/span 2', position: 'relative', top: '0.6rem', left: '3rem'}}>
                            <img src={oneDashHorizontal} alt='line' />
                        </div> 
                        <div style={{gridArea: '17/11/span 2/span 2'}}>
                            <img src={cornerUpRight} alt='corner' style={{position: 'relative', top: '2rem', left: '6rem'}}/>
                        </div>
                        <div className="checkbox" id='Patricidal' style={{gridArea: '17/13/span 2/span 2'}}>
                            {nodes && nodes.Patricidal ? <>
                                <div className='checked'>
                                    <img 
                                        src={checkedsmall} 
                                        alt='checked'
                                        onClick={() => handleClick('Patricidal')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.fourty.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={uncheckedsmall} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Patricidal')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div style={{gridArea: '17/16/span 2/span 2'}}>
                            <img src={cornerUpLeft} alt='corner' style={{position: 'relative', top: '1.2rem', left: '1.7rem'}}/>
                        </div>
                        <div className="h-line-dash" style={{gridArea: '17/15/span 2/span 2', position: 'relative', left: '-2rem'}}>
                            <img src={oneDashHorizontal} alt='line' />
                        </div>
                        <div className="h-line-dash" style={{gridArea: '17/15/span 2/span 2', position: 'relative', top: '1rem'}}>
                            <img src={twoDashHorizontal} alt='line' />
                        </div> 
                        <div className="h-line-dash" style={{gridArea: '17/16/span 2/span 2', position: 'relative', top: '1rem', left: '1.5rem'}}>
                            <img src={oneDashHorizontal} alt='line' />
                        </div> 
                        <div className="v-line-dash" style={{gridArea: '17/17/span 2/span 2'}}>
                            <img src={twoDashVertical} alt='line' />
                        </div> 
                        <div className="v-line-dash" style={{gridArea: '19/13/span 2/span 2'}}>
                            <img src={twoDashVertical} alt='line' />
                        </div> 
                        <div className="v-line-dash" style={{gridArea: '19/17/span 2/span 2'}}>
                            <img src={twoDashVertical} alt='line' />
                        </div> 
                        <div className="checkbox" id='Disloyal' style={{gridArea: '21/13/span 2/span 2'}}>
                            {nodes && nodes.Disloyal ? <>
                                <div className='checked'>
                                    <img 
                                        src={checkedsmall} 
                                        alt='checked'
                                        onClick={() => handleClick('Disloyal')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.fourtyone.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={uncheckedsmall} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Disloyal')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="h-line-dash" style={{gridArea: '21/15/span 2/span 2'}}>
                            <img src={twoDashHorizontal} alt='line' />
                        </div> 
                        <div className="checkbox" id='DrainingDay' style={{gridArea: '21/17/span 2/span 2'}}>
                            {nodes && nodes.DrainingDay ? <>
                                <div className='checked'>
                                    <img 
                                        src={checkedsmall} 
                                        alt='checked'
                                        onClick={() => handleClick('DrainingDay')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.fourtytwo.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={uncheckedsmall} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Draining Day')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>                       
                        {/* <div style={{gridArea: '24/10/span 1/span 2'}}>
                            <img src={cornerDownRight} alt='corner' style={{position: 'relative', top: '-1.8rem'}} />
                        </div> */}
                        {/* <div className="h-line-dash" style={{gridArea: '23/11/span 2/span 2'}}>
                            <img src={twoDashHorizontal} alt='line' />
                        </div>  */}
                        <div className="h-line-dash" style={{gridArea: '23/13/span 2/span 2', position: 'relative', left: '3rem'}}>
                            <img src={oneDashHorizontal} alt='line' />
                        </div> 
                        <div className="v-line-dash" style={{gridArea: '23/13/span 2/span 2'}}>
                            <img src={twoDashVertical} alt='line' />
                        </div> 
                        <div style={{gridArea: '24/15/span 1/span 2'}}>
                            <img src={cornerDownLeft} alt='corner' style={{position: 'relative', top: '-1.8rem', left: '1.4rem'}} />
                        </div>
                        {/* <div className="checkbox" id='Bloodthirsty' style={{gridArea: '26/9/span 2/span 2'}}>
                            {nodes && nodes.Bloodthirsty ? <>
                                <div className='checked'>
                                    <img 
                                        src={checkedsmall} 
                                        alt='checked'
                                        onClick={() => handleClick('Bloodthirsty')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.fourtythree.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={uncheckedsmall} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Bloodthirsty')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div> */}

                        <div style={{gridArea: '27/12/span 1/span 2'}}>
                            <img src={cornerDownRight} alt='corner' style={{position: 'relative', top: '-1.8rem'}} />
                        </div>
                        <div className="checkbox" id='Indecisive' style={{gridArea: '26/13/span 2/span 2'}}>
                            {nodes && nodes.Indecisive ? <>
                                <div className='checked'>
                                    <img 
                                        src={checkedsmall} 
                                        alt='checked'
                                        onClick={() => handleClick('Indecisive')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.twentyone.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={uncheckedsmall} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Indecisive')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="h-line-dash" style={{gridArea: '26/15/span 2/span 2'}}>
                            <img src={twoDashHorizontal} alt='line' />
                        </div> 
                        <div className="v-line-dash" style={{gridArea: '26/15/span 2/span 2'}}>
                            <img src={twoDashVertical} alt='line' />
                        </div> 
                        <div className="checkbox" id='Reckless' style={{gridArea: '26/17/span 2/span 2'}}>
                            {nodes && nodes.Reckless ? <>
                                <div className='checked'>
                                    <img 
                                        src={checkedsmall} 
                                        alt='checked'
                                        onClick={() => handleClick('Reckless')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.fourtysix.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={uncheckedsmall} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Reckless')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        {/* <div className="v-line-dash" style={{gridArea: '28/9/span 2/span 2'}}>
                            <img src={twoDashVertical} alt='line' />
                        </div>  */}
                        <div className="v-line-dash" style={{gridArea: '28/11/span 2/span 2'}}>
                            <img src={twoDashVertical} alt='line' />
                        </div> 
                        <div className="v-line-dash" style={{gridArea: '28/13/span 2/span 2'}}>
                            <img src={twoDashVertical} alt='line' />
                        </div> 
                        <div className="v-line-dash" style={{gridArea: '28/15/span 2/span 2'}}>
                            <img src={twoDashVertical} alt='line' />
                        </div> 
                        <div className="checkbox" id='TerminalIllness' style={{gridArea: '30/9/span 2/span 2'}}>
                            {nodes && nodes.TerminalIllness ? <>
                                <div className='checked'>
                                    <img 
                                        src={checkedsmall} 
                                        alt='checked'
                                        onClick={() => handleClick('TerminalIllness')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.fourtyfour.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={uncheckedsmall} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Terminal Illness')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div style={{gridArea: '30/11/span 2/span 2'}}>
                            <img src={cornerUpLeft} alt='corner' style={{position: 'relative', top: '2rem', left: '1.5rem'}} />
                        </div>    
                        <div style={{gridArea: '30/13/span 2/span 2'}}>
                            <img src={cornerUpRight} alt='corner' style={{position: 'relative', top: '2rem', left: '6rem'}} />
                        </div>
                        <div className="checkbox" id='ForeverAndADay' style={{gridArea: '30/15/span 2/span 2'}}>
                            {nodes && nodes.ForeverAndADay ? <>
                                <div className='checked'>
                                    <img 
                                        src={checkedsmall} 
                                        alt='checked'
                                        onClick={() => handleClick('ForeverAndADay')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.fourtyfive.title}</p>
                                </div> 
                            </>  :   <>
                                <div className='unchecked'>
                                    <img 
                                        src={uncheckedsmall} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Forever And A Day')} />
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
