import React, { useContext } from 'react'
import Checked from './img/Checked.png'
import unchecked from './img/unchecked.png'
import line from './img/Line.png'
import corner from './img/Corner.png'

import oneDashHorizontal from './img/1 Dash Horizontal.png'
import twoDashHorizontal from './img/2 Dash Horizontal.png'
import threeDashHorizontal from './img/3 Dash Horizontal.png'
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

export default function DivergenceThree({ setCpShow, setActiveNode }) {

    let ui = uiContent

    const { nodes } = useContext(UserContext)

    const handleClick = (nodeName) => {
        setCpShow(true)
        setActiveNode(nodeName)
    }

  return (
    <div className='madness'>
        <section className='grid h-full'>
            <div className='flex flex-wrap w-full h-52'/>
            <div className='grid place-content-center'>
                <div className='relative grid w-full h-full mx-auto madness-grid'>
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
                    <div className="checkbox" id='UnhingedBehavior' style={{gridArea: '1/13/span 2/span 2'}}>
                        {nodes && nodes.UnhingedBehavior ? <>
                            <div className='checked'>
                                <img 
                                    src={checkedsmall} 
                                    alt='checked'
                                    onClick={() => handleClick('UnhingedBehavior')} 
                                />
                                <p className='symptom-found'>{ui.madnessNodes.fourtyseven.title}</p>
                            </div> 
                        </>:<>
                            <div className='unchecked'>
                                <img 
                                    src={uncheckedsmall} 
                                    title='No Symptoms'
                                    alt='unchecked' 
                                    onClick={() => handleClick('Hint: Unhinged Behavior')} />
                                <p className='no-symptoms'>No Symptoms</p>
                            </div>
                        </>}
                    </div>
                    <div className="v-line-dash" style={{gridArea: '3/13/span 2/span 2'}}>
                        <img src={twoDashVertical} alt='line' />
                    </div> 
                    <div className='corner-down-right' style={{gridArea: '5/9/span 2/span 2'}}>
                        <img src={corner} alt='corner' />
                    </div>
                    <div className="h-line-dash" style={{gridArea: '5/11/span 2/span 2'}}>
                        <img src={twoDashHorizontal} alt='line'/>
                    </div>
                    <div className="checkbox" id='Committed' style={{gridArea: '5/13/span 2/span 2'}}>
                        {nodes && nodes.Committed ? <>
                            <div className='checked'>
                                <img 
                                    src={checkedsmall} 
                                    alt='checked'
                                    onClick={() => handleClick('Committed')} 
                                />
                                <p className='symptom-found'>{ui.madnessNodes.fourtynine.title}</p>
                            </div> 
                        </>:<>
                            <div className='unchecked'>
                                <img 
                                    src={uncheckedsmall} 
                                    title='No Symptoms'
                                    alt='unchecked' 
                                    onClick={() => handleClick('Hint: Committed')} />
                                <p className='no-symptoms'>No Symptoms</p>
                            </div>
                        </>}
                    </div>
                    <div className="h-line-dash" style={{gridArea: '5/15/span 2/span 2'}}>
                        <img src={twoDashHorizontal} alt='line'/>
                    </div>
                    <div className='corner-down-left' style={{gridArea: '5/17/span 2/span 2'}}>
                        <img src={corner} alt='corner' />
                    </div>
                    <div className="v-line-dash" style={{gridArea: '7/9/span 2/span 2'}}>
                        <img src={twoDashVertical} alt='line' />
                    </div> 
                    <div className="v-line-dash" style={{gridArea: '7/13/span 2/span 2'}}>
                        <img src={twoDashVertical} alt='line' />
                    </div> 
                    <div className="v-line-dash" style={{gridArea: '7/17/span 2/span 2'}}>
                        <img src={twoDashVertical} alt='line' />
                    </div> 
                    <div className="checkbox" id='Retrophilic' style={{gridArea: '9/9/span 2/span 2'}}>
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
                    <div className="checkbox" id='Intractible' style={{gridArea: '9/13/span 2/span 2'}}>
                        {nodes && nodes.Intractible ? <>
                            <div className='checked'>
                                <img 
                                    src={checkedsmall} 
                                    alt='checked'
                                    onClick={() => handleClick('Intractible')} 
                                />
                                <p className='symptom-found'>{ui.madnessNodes.fiftytwo.title}</p>
                            </div> 
                        </>:<>
                            <div className='unchecked'>
                                <img 
                                    src={uncheckedsmall} 
                                    title='No Symptoms'
                                    alt='unchecked' 
                                    onClick={() => handleClick('Hint: Intractible')} />
                                <p className='no-symptoms'>No Symptoms</p>
                            </div>
                        </>}
                    </div>
                    <div className="checkbox" id='Neophilic' style={{gridArea: '9/17/span 2/span 2'}}>
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
                    <div className="v-line-dash" style={{gridArea: '11/13/span 2/span 2'}}>
                        <img src={twoDashVertical} alt='line' />
                    </div> 
                    <div className="v-line-dash" style={{gridArea: '11/17/span 2/span 2'}}>
                        <img src={twoDashVertical} alt='line' />
                    </div> 
                    <div style={{gridArea: '13/9/span 2/span 2'}}>
                        <img src={cornerDownRight} alt='corner' />
                    </div>
                    <div className="h-line-dash" style={{gridArea: '13/11/span 2/span 2'}}>
                        <img src={twoDashHorizontal} alt='line' />
                    </div> 
                    <div className="checkbox" id='Paranoid' style={{gridArea: '13/13/span 2/span 2'}}>
                        {nodes && nodes.Paranoid ? <>
                            <div className='checked'>
                                <img 
                                    src={checkedsmall} 
                                    alt='checked'
                                    onClick={() => handleClick('Paranoid')} 
                                />
                                <p className='symptom-found'>{ui.madnessNodes.fiftythree.title}</p>
                            </div> 
                        </>:<>
                            <div className='unchecked'>
                                <img 
                                    src={uncheckedsmall} 
                                    title='No Symptoms'
                                    alt='unchecked' 
                                    onClick={() => handleClick('Hint: Paranoid')} />
                                <p className='no-symptoms'>No Symptoms</p>
                            </div>
                        </>}
                    </div>
                    <div className="h-line-dash" style={{gridArea: '13/15/span 2/span 2'}}>
                        <img src={twoDashHorizontal} alt='line' />
                    </div> 
                    <div style={{gridArea: '13/17/span 2/span 2'}}>
                        <img src={cornerUpLeft} alt='corner' />
                    </div>
                    <div className="checkbox" id='LikeINeedAHoleInMyHead' style={{gridArea: '15/9/span 2/span 2'}}>
                        {nodes && nodes.LikeINeedAHoleInMyHead ? <>
                            <div className='checked'>
                                <img 
                                    src={checkedsmall} 
                                    alt='checked'
                                    onClick={() => handleClick('LikeINeedAHoleInTheHead')} 
                                />
                                <p className='symptom-found'>{ui.madnessNodes.fiftyfour.title}</p>
                            </div> 
                        </>:<>
                            <div className='unchecked'>
                                <img 
                                    src={uncheckedsmall} 
                                    title='No Symptoms'
                                    alt='unchecked' 
                                    onClick={() => handleClick('Hint: Like I Need A Hole In The Head')} />
                                <p className='no-symptoms'>No Symptoms</p>
                            </div>
                        </>}
                    </div>
                    <div className="v-line-dash" style={{gridArea: '15/13/span 2/span 2'}}>
                        <img src={twoDashVertical} alt='line' />
                    </div> 
                    <div style={{gridArea: '17/9/span 2/span 2'}}>
                        <img src={cornerDownRight} alt='corner' />
                    </div>
                    <div className="h-line-dash" style={{gridArea: '17/11/span 2/span 2'}}>
                        <img src={twoDashHorizontal} alt='line' />
                    </div> 
                    <div style={{gridArea: '17/12/span 2/span 2'}}>
                        <img src={cornerDownRight} alt='corner' />
                    </div>
                    <div className="checkbox" id='Dishonest' style={{gridArea: '17/13/span 2/span 2'}}>
                        {nodes && nodes.Dishonest ? <>
                            <div className='checked'>
                                <img 
                                    src={checkedsmall} 
                                    alt='checked'
                                    onClick={() => handleClick('Dishonest')} 
                                />
                                <p className='symptom-found'>{ui.madnessNodes.fiftyfive.title}</p>
                            </div> 
                        </>:<>
                            <div className='unchecked'>
                                <img 
                                    src={uncheckedsmall} 
                                    title='No Symptoms'
                                    alt='unchecked' 
                                    onClick={() => handleClick('Hint: Dishonest')} />
                                <p className='no-symptoms'>No Symptoms</p>
                            </div>
                        </>}
                    </div>
                    <div className="h-line-dash" style={{gridArea: '17/15/span 2/span 2'}}>
                        <img src={twoDashHorizontal} alt='line' />
                    </div> 
                    <div className="checkbox" id='TheOneMadeMany' style={{gridArea: '17/17/span 2/span 2'}}>
                        {nodes && nodes.TheOneMadeMany ? <>
                            <div className='checked'>
                                <img 
                                    src={checkedsmall} 
                                    alt='checked'
                                    onClick={() => handleClick('TheOneMadeMany')} 
                                />
                                <p className='symptom-found'>{ui.madnessNodes.fiftysix.title}</p>
                            </div> 
                        </>:<>
                            <div className='unchecked'>
                                <img 
                                    src={uncheckedsmall} 
                                    title='No Symptoms'
                                    alt='unchecked' 
                                    onClick={() => handleClick('Hint: The One Made Many')} />
                                <p className='no-symptoms'>No Symptoms</p>
                            </div>
                        </>}
                    </div>
                    <div className="checkbox" id='Kleptomania' style={{gridArea: '19/9/span 2/span 2'}}>
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
                    <div className="checkbox" id='Lethargic' style={{gridArea: '19/11/span 2/span 2'}}>
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
                    <div className="v-line-dash" style={{gridArea: '19/13/span 2/span 2'}}>
                        <img src={twoDashVertical} alt='line' />
                    </div> 
                    <div style={{gridArea: '21/9/span 2/span 2'}}>
                        <img src={cornerUpRight} alt='corner' />
                    </div>
                    <div className="h-line-dash" style={{gridArea: '21/11/span 2/span 2'}}>
                        <img src={twoDashHorizontal} alt='line' />
                    </div> 
                    <div style={{gridArea: '21/12/span 2/span 2'}}>
                        <img src={cornerUpRight} alt='corner' />
                    </div>
                    <div className="checkbox" id='Deceitful' style={{gridArea: '21/13/span 2/span 2'}}>
                        {nodes && nodes.Deceitful ? <>
                            <div className='checked'>
                                <img 
                                    src={checkedsmall} 
                                    alt='checked'
                                    onClick={() => handleClick('Deceitful')} 
                                />
                                <p className='symptom-found'>{ui.madnessNodes.fiftyseven.title}</p>
                            </div> 
                        </>:<>
                            <div className='unchecked'>
                                <img 
                                    src={uncheckedsmall} 
                                    title='No Symptoms'
                                    alt='unchecked' 
                                    onClick={() => handleClick('Hint: Deceitful')} />
                                <p className='no-symptoms'>No Symptoms</p>
                            </div>
                        </>}
                    </div>
                    <div className="checkbox" id='TheManyMadeOne' style={{gridArea: '23/9/span 2/span 2'}}>
                        {nodes && nodes.TheManyMadeOne ? <>
                            <div className='checked'>
                                <img 
                                    src={checkedsmall} 
                                    alt='checked'
                                    onClick={() => handleClick('TheManyMadeOne')} 
                                />
                                <p className='symptom-found'>{ui.madnessNodes.fiftyeight.title}</p>
                            </div> 
                        </>:<>
                            <div className='unchecked'>
                                <img 
                                    src={uncheckedsmall} 
                                    title='No Symptoms'
                                    alt='unchecked' 
                                    onClick={() => handleClick('Hint: The Many Made One')} />
                                <p className='no-symptoms'>No Symptoms</p>
                            </div>
                        </>}
                    </div>
                    <div className="v-line-dash" style={{gridArea: '23/11/span 2/span 2'}}>
                        <img src={twoDashVertical} alt='line' />
                    </div> 
                    <div style={{gridArea: '23/13/span 2/span 2'}}>
                        <img src={cornerUpLeft} alt='corner' />
                    </div>
                    <div className="v-line-dash" style={{gridArea: '23/13/span 2/span 2'}}>
                        <img src={twoDashVertical} alt='line' />
                    </div> 
                    <div style={{gridArea: '25/9/span 2/span 2'}}>
                        <img src={cornerDownRight} alt='corner' />
                    </div>
                    <div className="h-line-dash" style={{gridArea: '25/11/span 2/span 2'}}>
                        <img src={twoDashHorizontal} alt='line' />
                    </div> 
                    <div className="checkbox" id='Uneasy' style={{gridArea: '25/13/span 2/span 2'}}>
                        {nodes && nodes.Uneasy ? <>
                            <div className='checked'>
                                <img 
                                    src={checkedsmall} 
                                    alt='checked'
                                    onClick={() => handleClick('Uneasy')} 
                                />
                                <p className='symptom-found'>{ui.madnessNodes.fiftynine.title}</p>
                            </div> 
                        </>:<>
                            <div className='unchecked'>
                                <img 
                                    src={uncheckedsmall} 
                                    title='No Symptoms'
                                    alt='unchecked' 
                                    onClick={() => handleClick('Hint: Uneasy')} />
                                <p className='no-symptoms'>No Symptoms</p>
                            </div>
                        </>}
                    </div>
                    <div className="h-line-dash" style={{gridArea: '25/15/span 2/span 2'}}>
                        <img src={twoDashHorizontal} alt='line' />
                    </div> 
                    <div style={{gridArea: '25/17/span 2/span 2'}}>
                        <img src={cornerDownLeft} alt='corner' />
                    </div>
                    <div className="v-line-dash" style={{gridArea: '27/9/span 2/span 2'}}>
                        <img src={twoDashVertical} alt='line' />
                    </div> 
                    <div className="v-line-dash" style={{gridArea: '27/13/span 2/span 2'}}>
                        <img src={twoDashVertical} alt='line' />
                    </div> 
                    <div className="v-line-dash" style={{gridArea: '27/16/span 2/span 2'}}>
                        <img src={twoDashVertical} alt='line' />
                    </div> 
                    <div className="v-line-dash" style={{gridArea: '29/9/span 2/span 2'}}>
                        <img src={twoDashVertical} alt='line' />
                    </div>  
                    <div style={{gridArea: '29/11/span 2/span 2'}}>
                        <img src={cornerDownRight} alt='corner' />
                    </div>
                    <div className="h-line-dash" style={{gridArea: '29/12/span 2/span 2'}}>
                        <img src={twoDashHorizontal} alt='line' />
                    </div> 
                    <div className="checkbox" id='Opportunistic' style={{gridArea: '29/13/span 2/span 2'}}>
                        {nodes && nodes.Opportunistic ? <>
                            <div className='checked'>
                                <img 
                                    src={checkedsmall} 
                                    alt='checked'
                                    onClick={() => handleClick('Opportunistic')} 
                                />
                                <p className='symptom-found'>{ui.madnessNodes.sixty.title}</p>
                            </div> 
                        </>:<>
                            <div className='unchecked'>
                                <img 
                                    src={uncheckedsmall} 
                                    title='No Symptoms'
                                    alt='unchecked' 
                                    onClick={() => handleClick('Hint: Opportunistic')} />
                                <p className='no-symptoms'>No Symptoms</p>
                            </div>
                        </>}
                    </div>
                    <div className="h-line-dash" style={{gridArea: '29/15/span 2/span 2'}}>
                        <img src={twoDashHorizontal} alt='line' />
                    </div> 
                    <div style={{gridArea: '29/16/span 2/span 2'}}>
                        <img src={cornerDownLeft} alt='corner' />
                    </div>
                    <div className="v-line-dash" style={{gridArea: '29/13/span 2/span 2'}}>
                        <img src={twoDashVertical} alt='line' />
                    </div> 
                    <div className="checkbox" id='TerminalIllness' style={{gridArea: '31/9/span 2/span 2'}}>
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
                    <div className="checkbox" id='ForeverAndADay' style={{gridArea: '31/15/span 2/span 2'}}>
                        {nodes && nodes.ForeverAndADay ? <>
                            <div className='checked'>
                                <img 
                                    src={checkedsmall} 
                                    alt='checked'
                                    onClick={() => handleClick('ForeverAndADay')} 
                                />
                                <p className='symptom-found'>{ui.madnessNodes.fourtyfive.title}</p>
                            </div> 
                        </>:<>
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
