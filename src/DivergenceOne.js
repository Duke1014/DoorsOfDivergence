import React, { useContext } from 'react'
import './divergenceone.css'
import './mobilephones.css'

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

export default function ({ setCpShow, setActiveNode }) {

    let ui = uiContent

    const { nodes } = useContext(UserContext)

    const handleClick = (nodeName) => {
        setCpShow(true)
        setActiveNode(nodeName)
    }

  return (
    <div className='madness'>
        <div>
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
                        <div className="checkbox" id='DelusionsOfGrandeur' style={{gridArea: '10/20/span 2/span 2'}}>
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
                        <div className="checkbox" id='AlienistInTraining' style={{gridArea: '1/13/span 2/span 2'}}>
                            {nodes && nodes.AlienistInTraining ? <>
                                <div className='checked'>
                                    <img 
                                        src={checkedsmall} 
                                        alt='checked'
                                        onClick={() => handleClick('AlienistInTraining')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.one.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={uncheckedsmall} 
                                        title='No Symptoms'
                                        alt='unchecked'
                                        onClick={() => handleClick('Hint: Alienist In Training')}  />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className='v-line-dash' style={{gridArea: '3/13/span 2/span 2'}}>
                            <img src={threeDashVertical} alt='line' style={{top: '15px'}} />
                        </div> 
                        <div className="checkbox" id='Oblivious' style={{gridArea: '5/13/span 2/span 2'}}>
                            {nodes && nodes.Oblivious ? <>
                                <div className='checked'>
                                    <img 
                                        src={checkedsmall} 
                                        alt='checked'
                                        onClick={() => handleClick('Oblivious')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.two.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={uncheckedsmall} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Oblivious')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="checkbox" id='NarrowMinded' style={{gridArea: '7/11/span 2/span 2'}}>
                            {nodes && nodes.NarrowMinded ? <>
                                <div className='checked'>
                                    <img 
                                        src={checkedsmall} 
                                        alt='checked'
                                        onClick={() => handleClick('NarrowMinded')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.three.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={uncheckedsmall} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Narrow-Minded')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="v-line-dash" style={{gridArea: '7/13/span 2/span 2'}}>
                            <img src={twoDashVertical} alt='line' />
                        </div>             
                        <div className="h-line-dash" style={{gridArea: '7/13/span 2/span 2'}}>
                            <img src={threeDashHorizontal} alt='line'/>
                        </div>
                        <div className="checkbox" id='Unmotivated' style={{gridArea: '7/15/span 2/span 2'}}>
                            {nodes && nodes.Unmotivated ? <>
                                <div className='checked'>
                                    <img 
                                        src={checkedsmall} 
                                        alt='checked'
                                        onClick={() => handleClick('Unmotivated')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.four.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={uncheckedsmall} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Unmotivated')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div style={{gridArea: '9/11/span 2/span 2', float: 'right', position: 'absolute'}}>
                            <img src={cornerDownRight} alt='corner' />
                        </div>
                        <div style={{gridArea: '9/12/span 2/span 2', position: 'relative', left: '-1rem'}}>
                            <img src={threeDashHorizontal} alt='line'/>
                        </div>
                        <div style={{gridArea: '9/14/span 2/span 2' , position: 'relative', left: '-0.5rem'}}>
                            <img src={threeDashHorizontal} alt='line'/>
                        </div>
                        <div style={{gridArea: '9/16/span 2/span 2'}}>
                            <img src={cornerDownLeft} alt='corner' />
                        </div>
                        <div className="checkbox" id='SoundofMind' style={{gridArea: '11/10/span 2/span 2'}}>
                            {nodes && nodes.SoundofMind ? <>
                                <div className='checked'>
                                    <img 
                                        src={checkedsmall} 
                                        alt='checked'
                                        onClick={() => handleClick('SoundOfMind')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.five.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={uncheckedsmall} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Sound Of Mind')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="h-line-dash" style={{gridArea: '11/12/span 2/span 2', top: '1.85rem', left: '-2rem', position: 'relative'}}>
                            <img src={oneDashHorizontal} alt='line'/>
                        </div>
                        <div style={{gridArea: '11/12/span 2/span 2', alignItems: 'flex-end', justifyContent: 'flex-end', display: 'flex'}}>
                            <img src={cornerDownLeft} alt='corner' style={{float: 'right', position: 'relative'}} />
                        </div>
                        <div style={{gridArea: '11/14/span 2/span 2', display: 'flex', alignItems: 'flex-end', left: '1rem', position: 'relative'}}>
                            <img src={cornerDownRight} alt='corner' />
                        </div>
                        <div className="h-line-dash" style={{gridArea: '11/15/span 2/span 2', top: '1.85rem', left: '-3rem', position: 'relative'}}>
                            <img src={oneDashHorizontal} alt='line'/>
                        </div>
                        <div className="checkbox" id='SoundOfBody' style={{gridArea: '11/16/span 2/span 2'}}>
                            {nodes && nodes.SoundOfBody ? <>
                                <div className='checked'>
                                    <img 
                                        src={checkedsmall} 
                                        alt='checked'
                                        onClick={() => handleClick('SoundOfBody')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.six.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={uncheckedsmall} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Sound Of Body')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="v-line-dash" style={{gridArea: '13/10/span 1/span 2', top: '1rem', position: 'relative'}}>
                            <img src={threeDashVertical} alt='line' />
                        </div>
                        <div className="checkbox" id='LeftToStarve' style={{gridArea: '13/13/span 2/span 2'}}>
                            {nodes && nodes.LeftToStarve ? <>
                                <div className='checked'>
                                    <img 
                                        src={checkedsmall} 
                                        alt='checked'
                                        onClick={() => handleClick('LeftToStarve')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.sixteen.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={uncheckedsmall} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Left To Starve')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="v-line-dash" style={{gridArea: '13/16/span 1/span 2', top: '1rem', position: 'relative'}}>
                            <img src={threeDashVertical} alt='line' />
                        </div>
                        <div className="checkbox" id='Anxious' style={{gridArea: '15/10/span 2/span 2'}}>
                            {nodes && nodes.Anxious ? <>
                                <div className='checked'>
                                    <img 
                                        src={checkedsmall} 
                                        alt='checked'
                                        onClick={() => handleClick('Anxious')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.nine.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={uncheckedsmall} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Anxious')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className='h-line-dash' style={{gridArea: '15/12/span 2/span 2', position: 'relative', top: '4.5rem', left: '-2rem', alignItems: 'baseline'}}>
                            <img src={oneDashHorizontal} alt='line' style={{}}/>
                        </div>
                        <div style={{gridArea: '15/12/span 2/span 2'}}>
                            <img src={cornerUpLeft} alt='corner' style={{position: 'relative', float: 'right'}}/>
                        </div>
                        <div style={{gridArea: '15/14/span 2/span 2', position: 'relative', left: '0.8rem'}}>
                            <img src={cornerUpRight} alt='corner'/>
                        </div>
                        <div className='h-line-dash' style={{gridArea: '15/14/span 2/span 2', position: 'relative', top: '4.3rem', left: '3rem', alignItems: 'baseline'}}>
                            <img src={oneDashHorizontal} alt='line' style={{}}/>
                        </div>
                        <div className="checkbox" id='Pyromania' style={{gridArea: '15/16/span 2/span 2'}}>
                            {nodes && nodes.Pyromania ? <>
                                <div className='checked'>
                                    <img 
                                        src={checkedsmall} 
                                        alt='checked'
                                        onClick={() => handleClick('Pyromania')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.ten.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={uncheckedsmall} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Pyromania')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="v-line-dash" style={{gridArea: '17/10/span 1/span 2', top: '1rem', position: 'relative'}}>
                            <img src={twoDashVertical} alt='line' />
                        </div>
                        <div className="checkbox" id='Co-ordinated' style={{gridArea: '17/13/span 2/span 2'}}>
                            {nodes && nodes.Coordinated ? <>
                                <div className='checked'>
                                    <img 
                                        src={checkedsmall} 
                                        alt='checked'
                                        onClick={() => handleClick('Co-ordinated')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.twentysix.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={uncheckedsmall} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Co-ordinated')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="v-line-dash" style={{gridArea: '17/16/span 1/span 2', top: '1rem', position: 'relative'}}>
                            <img src={twoDashVertical} alt='line' />
                        </div>
                        <div className="checkbox" id='OutWithABang' style={{gridArea: '19/7/span 2/span 2', position: 'relative', left: '3.5rem'}}>
                            {nodes && nodes.OutWithABang2 ? <>
                                <div className='checked'>
                                    <img 
                                        src={checkedsmall} 
                                        alt='checked'
                                        onClick={() => handleClick('OutWithABang2')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.twentytwo.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={uncheckedsmall} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Out With A Bang 2')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className='h-line-dash' style={{gridArea: '19/9/span 2/span 2', width: 'max-content', position: 'relative', left: '2rem'}}>
                            <img src={oneDashHorizontal} alt='line' />
                        </div>
                        <div className="checkbox" id='Thanatophobia' style={{gridArea: '19/10/span 2/span 2'}}>
                            {nodes && nodes.Thanatophobia ? <>
                                <div className='checked'>
                                    <img 
                                        src={checkedsmall} 
                                        alt='checked'
                                        onClick={() => handleClick('Thanatophobia')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.eleven.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={uncheckedsmall} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Thanatophobia')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="h-line-dash" style={{gridArea: '19/12/span 1/span 2'}}>
                            <img src={threeDashHorizontal} alt='line' />
                        </div>
                        <div className="v-line-dash" style={{gridArea: '19/13/span 2/span 2'}}>
                            <img src={threeDashVertical} alt='line' style={{position: 'relative', top: '1rem'}} />
                        </div>
                        <div className="h-line-dash" style={{gridArea: '19/14/span 1/span 2'}}>
                            <img src={threeDashHorizontal} alt='line' />
                        </div>

                        <div className="checkbox" id='HotHeaded' style={{gridArea: '19/16/span 2/span 2'}}>
                            {nodes && nodes.HotHeaded ? <>
                                <div className='checked'>
                                    <img 
                                        src={checkedsmall} 
                                        alt='checked'
                                        onClick={() => handleClick('HotHeaded')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.twelve.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={uncheckedsmall} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Hot-Headed')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className='h-line-dash' style={{gridArea: '19/18/span 2/span 2', width: 'max-content', position: 'relative', left: '-1.5rem'}}>
                            <img src={oneDashHorizontal} alt='line' />
                        </div>
                        <div className="checkbox" id='BlazeOfGlory' style={{gridArea: '19/18/span 2/span 2', position: 'relative', left: '2rem'}}>
                            {nodes && nodes.BlazeOfGlory ? <>
                                <div className='checked'>
                                    <img 
                                        src={checkedsmall} 
                                        alt='checked'
                                        onClick={() => handleClick('BlazeOfGlory')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.twentythree.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={uncheckedsmall} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Blaze Of Glory')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="v-line-dash" style={{gridArea: '21/10/span 1/span 2', top: '1rem', position: 'relative'}}>
                            <img src={twoDashVertical} alt='line' />
                        </div>
                        <div className="checkbox" id='Vocal' style={{gridArea: '21/13/span 2/span 2'}}>
                            {nodes && nodes.Vocal ? <>
                                <div className='checked'>
                                    <img 
                                        src={checkedsmall} 
                                        alt='checked'
                                        onClick={() => handleClick('Vocal')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.twentyseven.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={uncheckedsmall} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Vocal')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="v-line-dash" style={{gridArea: '21/16/span 1/span 2', top: '1rem', position: 'relative'}}>
                            <img src={twoDashVertical} alt='line' />
                        </div>
                        <div className="checkbox" id='Electrophilia' style={{gridArea: '23/10/span 2/span 2'}}>
                            {nodes && nodes.Electrophilia ? <>
                                <div className='checked'>
                                    <img 
                                        src={checkedsmall} 
                                        alt='checked'
                                        onClick={() => handleClick('Electrophilia')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.thirteen.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={uncheckedsmall} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Electrophilia')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="h-line-dash" style={{gridArea: '23/12/span 2/span 2', top: '1.4rem', left: '-2rem', position: 'relative'}}>
                            <img src={oneDashHorizontal} alt='line'/>
                        </div>
                        <div style={{gridArea: '23/12/span 2/span 2', position: 'relative', top: '7rem'}}>
                            <img src={cornerDownLeft} alt='corner' style={{float: 'right'}} />
                        </div>
                        <div style={{gridArea: '23/14/span 2/span 2', position: 'relative', top: '7rem', left: '1rem'}}>
                            <img src={cornerDownRight} alt='corner' />
                        </div>
                        <div className="h-line-dash" style={{gridArea: '23/15/span 2/span 2', top: '1.4rem', left: '-3rem', position: 'relative'}}>
                            <img src={oneDashHorizontal} alt='line'/>
                        </div>
                        <div className="checkbox" id='Epiplaphobia' style={{gridArea: '23/16/span 2/span 2'}}>
                            {nodes && nodes.Epiplaphobia ? <>
                                <div className='checked'>
                                    <img 
                                        src={checkedsmall} 
                                        alt='checked'
                                        onClick={() => handleClick('Epiplaphobia')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.fourteen.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={uncheckedsmall} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Epiplaphobia')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="checkbox" id='Indecisive' style={{gridArea: '24/13/span 2/span 2', top: '20px'}}>
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
                        <div className="v-line-dash" style={{gridArea: '25/10/span 1/span 2'}}>
                            <img src={twoDashVertical} alt='line' />
                        </div>
                        <div className="v-line-dash" style={{gridArea: '25/16/span 1/span 2'}}>
                            <img src={twoDashVertical} alt='line' />
                        </div>
                        <div className="v-line-dash" style={{gridArea: '27/10/span 1/span 2'}}>
                            <img src={twoDashVertical} alt='line' />
                        </div>
                        <div style={{gridArea: '27/11/span 2/span 2', top: '7rem', position: 'relative'}}>
                            <img src={twoDashHorizontal} alt='line'/>
                        </div>
                        <div style={{gridArea: '27/12/span 2/span 2', position: 'relative', top: '7rem', left: '-0.5rem'}}>
                            <img src={cornerDownLeft} alt='corner' style={{float: 'right', position: 'relative'}} />
                        </div>
                        <div style={{gridArea: '27/14/span 2/span 2', position: 'relative', top: '7rem', left: '1rem'}}>
                            <img src={cornerDownRight} alt='corner' />
                        </div>
                        <div style={{gridArea: '27/15/span 2/span 2', top: '7rem', position: 'relative'}}>
                            <img src={twoDashHorizontal} alt='line'/>
                        </div>
                        <div className="v-line-dash" style={{gridArea: '27/16/span 1/span 2'}}>
                            <img src={twoDashVertical} alt='line' />
                        </div>
                        <div style={{gridArea: '29/10/span 1/span 2', position: 'relative', left: '1.5rem'}}>
                            <img src={cornerUpLeft} alt='corner' />
                        </div>
                        <div style={{gridArea: '30/10/span 1/span 2', position: 'relative', left: '-4rem', top: '-1.8rem'}}>
                            <img src={cornerDownRight} alt='corner' />
                        </div>
                        <div className="checkbox" id='Gambler' style={{gridArea: '29/13/span 2/span 2'}}>
                            {nodes && nodes.Gambler ? <>
                                <div className='checked'>
                                    <img 
                                        src={checkedsmall} 
                                        alt='checked'
                                        onClick={() => handleClick('Gambler')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.fifteen.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={uncheckedsmall} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Gambler')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div style={{gridArea: '29/16/span 1/span 2', position: 'relative', left: '6rem'}}>
                            <img src={cornerUpRight} alt='corner' />
                        </div>
                        <div style={{gridArea: '30/18/span 1/span 2', position: 'relative', left: '-1rem', top: '-2rem'}}>
                            <img src={cornerDownLeft} alt='corner' />
                        </div>
                        <div className="checkbox" id='CruelCalculus' style={{gridArea: '30/9/span 2/span 2', left: '-4rem', top: '1rem'}}>
                            {nodes && nodes.CruelCalculus ? <>
                                <div className='checked'>
                                    <img
                                        src={checkedsmall} 
                                        alt='checked'
                                        onClick={() => handleClick('CruelCalculus')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.seventeen.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={uncheckedsmall} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Cruel Calculus')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="checkbox" id='AllTheThingsIMightHaveSaid' style={{gridArea: '31/11/span 2/span 2'}}>
                            {nodes && nodes.AllTheThingsIMightHaveSaid ? <>
                                <div className='checked'>
                                    <img 
                                        src={checkedsmall} 
                                        alt='checked'
                                        onClick={() => handleClick('AllTheThingsIMightHaveSaid')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.eighteen.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={uncheckedsmall} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: All The Things I Might Have Said')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div style={{gridArea: '31/12/span 2/span 2', position: 'relative', top: '3rem', left: '-0.5rem'}}>
                            <img src={cornerUpLeft} alt='corner' style={{float: 'right', position: 'relative'}} />
                        </div>
                        <div style={{gridArea: '31/14/span 2/span 2', position: 'relative', top: '3rem'}}>
                            <img src={cornerUpRight} alt='corner' />
                        </div>
                        <div className="checkbox" id='ACleansingFlame' style={{gridArea: '31/15/span 2/span 2', left: '-1rem'}}>
                            {nodes && nodes.ACleansingFlame ? <>
                                <div className='checked'>
                                    <img 
                                        src={checkedsmall} 
                                        alt='checked'
                                        onClick={() => handleClick('ACleansingFlame')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.nineteen.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={uncheckedsmall} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: A Cleansing Flame')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="checkbox" id='NoSecondChances' style={{gridArea: '30/17/span 2/span 2', left: '4rem', top: '1rem'}}>
                            {nodes && nodes.NoSecondChances ? <>
                                <div className='checked'>
                                    <img 
                                        src={checkedsmall} 
                                        alt='checked'
                                        onClick={() => handleClick('NoSecondChances')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.twenty.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={uncheckedsmall} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: No Second Chances')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </div>
  )
}
