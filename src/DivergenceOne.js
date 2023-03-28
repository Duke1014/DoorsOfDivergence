import React, { useContext } from 'react'
import './divergenceone.css'
import './mobilephones.css'
// import EnterCode from './EnterCode'

import line from './img/Line.png'
import corner from './img/Corner.png'
import Checked from './img/Checked.png'
import unchecked from './img/unchecked.png'

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
                <div className='flex flex-wrap w-full h-52'/>
                <div className='grid place-content-center'>
                    <div className='relative grid w-full h-full mx-auto madness-grid'>
                    <div className='text-2xl' style={{gridArea: '1/18/span 2/span 2'}}>Common Symptoms</div>
                        <div className="checkbox" id='Narcoleptic' style={{gridArea: '1/18/span 2/span 2'}}>
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
                                        onClick={() => handleClick('Hint: Narcoleptic')}
                                    />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="checkbox" id='Narcissistic' style={{gridArea: '3/18/span 2/span 2'}}>
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
                                        onClick={() => handleClick("Hint: Narcissistic")}
                                    />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="checkbox" id='Obstinate' style={{gridArea: '5/18/span 2/span 2'}}>
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
                                        onClick={() => handleClick('Hint: Obstinate')}
                                    />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="checkbox" id='Arrogant' style={{gridArea: '7/18/span 2/span 2'}}>
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
                                        onClick={() => handleClick('Hint: Arrogant')}
                                    />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="checkbox" id='DelusionsOfGrandeur' style={{gridArea: '9/18/span 2/span 2'}}>
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
                                        src={Checked} 
                                        alt='checked'
                                        onClick={() => handleClick('AlienistInTraining')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.one.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={unchecked} 
                                        title='No Symptoms'
                                        alt='unchecked'
                                        onClick={() => handleClick('Hint: Alienist In Training')}  />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="vertical-line-dash" style={{gridArea: '2/13/span 2/span 2', marginBottom: 'calc(var(--spacing) * 12', marginTop: 'calc(var(--spacing) * 12'}}>
                            <img src={line} alt='line' />
                        </div> 
                        <div className="checkbox" id='Oblivious' style={{gridArea: '4/13/span 2/ span 2'}}>
                            {nodes && nodes.Oblivious ? <>
                                <div className='checked'>
                                    <img 
                                        src={Checked} 
                                        alt='checked'
                                        onClick={() => handleClick('Oblivious')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.two.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={unchecked} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Oblivious')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="checkbox" id='NarrowMinded' style={{gridArea: '6/11/span 2/span 2', left: '50px'}}>
                            {nodes && nodes.NarrowMinded ? <>
                                <div className='checked'>
                                    <img 
                                        src={Checked} 
                                        alt='checked'
                                        onClick={() => handleClick('NarrowMinded')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.three.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={unchecked} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Narrow-Minded')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="vertical-line-dash" style={{gridArea: '6/13/span 2/span 2'}}>
                            <img src={line} alt='line' />
                        </div>             
                        <div className="horizontal-line-dash" style={{gridArea: '6/13/span 2/span 2'}}>
                            <img src={line} alt='line'/>
                        </div>
                        <div className="checkbox" id='Unmotivated' style={{gridArea: '6/15/span 2/span 2', right: '50px'}}>
                            {nodes && nodes.Unmotivated ? <>
                                <div className='checked'>
                                    <img 
                                        src={Checked} 
                                        alt='checked'
                                        onClick={() => handleClick('Unmotivated')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.four.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={unchecked} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Unmotivated')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className='corner-down-right' style={{gridArea: '7/10/span 2/span 2', marginLeft: 'calc(var(--spacing) * 8', marginTop: 'calc(var(--spacing) * 8', top: '-20px'}}>
                            <img src={corner} alt='corner' />
                        </div>
                        <div className="horizontal-line-dash" style={{gridArea: '7/11/span 2/span 2', top: '-10px', left: '50px'}}>
                            <img src={line} alt='line'/>
                        </div>
                        <div className="horizontal-line-dash" style={{gridArea: '7/13/span 2/span 2', top: '-10px'}}>
                            <img src={line} alt='line'/>
                        </div>
                        <div className="horizontal-line-dash" style={{gridArea: '7/15/span 2/span 2', top: '-10px', right: '50px'}}>
                            <img src={line} alt='line'/>
                        </div>
                        <div className='corner-down-left' style={{gridArea: '7/16/span 2/span 2', marginRight: 'calc(var(--spacing) * 6', marginTop: 'calc(var(--spacing) * 8', top: '-20px', left: '0px'}}>
                            <img src={corner} alt='corner' />
                        </div>
                        <div className="checkbox" id='SoundofMind' style={{gridArea: '8/10/span 2/span 2'}}>
                            {nodes && nodes.SoundofMind ? <>
                                <div className='checked'>
                                    <img 
                                        src={Checked} 
                                        alt='checked'
                                        onClick={() => handleClick('SoundOfMind')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.five.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={unchecked} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Sound Of Mind')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="horizontal-line-dash" style={{gridArea: '8/12/span 2/span 2', left: '-50px'}}>
                            <img src={line} alt='line'/>
                        </div>
                        <div className='corners-down' style={{gridArea: '8/13/span 2/span 2'}}>
                            <img src={corner} alt='corner' className='corner-down-left' style={{gridArea: '8/13/span 2/span 2', marginLeft: 'calc(var(--spacing) * 8', marginTop: 'calc(var(--spacing) * 8', left: '-80px', top: '-17px'}}/>
                            <img src={corner} alt='corner' className='corner-down-right' style={{gridArea: '8/13/span 2/span 2', marginLeft: 'calc(var(--spacing) * 8', marginTop: 'calc(var(--spacing) * 8', top: '-24px'}} />
                        </div>
                        <div className="horizontal-line-dash" style={{gridArea: '8/14/span 2/span 2', left: '60px'}}>
                            <img src={line} alt='line'/>
                        </div>
                        <div className="checkbox" id='SoundOfBody' style={{gridArea: '8/16/span 2/span 2'}}>
                            {nodes && nodes.SoundOfBody ? <>
                                <div className='checked'>
                                    <img 
                                        src={Checked} 
                                        alt='checked'
                                        onClick={() => handleClick('SoundOfBody')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.six.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={unchecked} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Sound Of Body')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="vertical-line-dash" style={{gridArea: '10/10/span 1/span 2', top: '-30px'}}>
                            <img src={line} alt='line' />
                        </div>
                        <div className="checkbox" id='LeftToStarve' style={{gridArea: '9/13/span 2/span 2', top: '20px'}}>
                            {nodes && nodes.LeftToStarve ? <>
                                <div className='checked'>
                                    <img 
                                        src={Checked} 
                                        alt='checked'
                                        onClick={() => handleClick('LeftToStarve')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.sixteen.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={unchecked} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Left To Starve')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="vertical-line-dash" style={{gridArea: '10/16/span 1/span 2', top: '-30px'}}>
                            <img src={line} alt='line' />
                        </div>
                        <div className="checkbox" id='Anxious' style={{gridArea: '11/10/span 2/span 2'}}>
                            {nodes && nodes.Anxious ? <>
                                <div className='checked'>
                                    <img 
                                        src={Checked} 
                                        alt='checked'
                                        onClick={() => handleClick('Anxious')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.nine.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={unchecked} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Anxious')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="horizontal-line-dash" style={{gridArea: '10/12/span 2/span 2', left: '-50px', top: '78px'}}>
                            <img src={line} alt='line'/>
                        </div>
                        <div className='corners-up' style={{gridArea: '10/13/span 2/span 2'}}>
                            <img src={corner} alt='corner' className='corner-up-left' style={{gridArea: '10/13/span 2/span 2', marginLeft: 'calc(var(--spacing) * 8', marginTop: 'calc(var(--spacing) * 8', left: '-80px', top: '3px'}}/>
                            <img src={corner} alt='corner' className='corner-up-right' style={{gridArea: '10/13/span 2/span 2', marginLeft: 'calc(var(--spacing) * 8', marginTop: 'calc(var(--spacing) * 8', top: '-4px'}} />
                        </div>
                        <div className="horizontal-line-dash" style={{gridArea: '10/14/span 2/span 2', left: '60px', top: '78px'}}>
                            <img src={line} alt='line'/>
                        </div>
                        <div className="checkbox" id='Pyromania' style={{gridArea: '11/16/span 2/span 2'}}>
                            {nodes && nodes.Pyromania ? <>
                                <div className='checked'>
                                    <img 
                                        src={Checked} 
                                        alt='checked'
                                        onClick={() => handleClick('Pyromania')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.ten.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={unchecked} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Pyromania')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="vertical-line-dash" style={{gridArea: '13/10/span 2/span 2', top: '-40px'}}>
                            <img src={line} alt='line' />
                        </div>
                        <div className="checkbox" id='Co-ordinated' style={{gridArea: '13/13/span 2/span 2', top:'-40px'}}>
                            {nodes && nodes.Coordinated ? <>
                                <div className='checked'>
                                    <img 
                                        src={Checked} 
                                        alt='checked'
                                        onClick={() => handleClick('Co-ordinated')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.twentysix.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={unchecked} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Co-ordinated')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="vertical-line-dash" style={{gridArea: '13/16/span 2/span 2', top: '-40px'}}>
                            <img src={line} alt='line' />
                        </div>
                        <div className="checkbox" id='OutWithABang' style={{gridArea: '14/8/span 2/span 2'}}>
                            {nodes && nodes.OutWithABang2 ? <>
                                <div className='checked'>
                                    <img 
                                        src={Checked} 
                                        alt='checked'
                                        onClick={() => handleClick('OutWithABang2')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.twentytwo.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={unchecked} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Out With A Bang 2')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="horizontal-line-dash" style={{gridArea: '14/9/span 2/span 2', left: '0px', width: '100px'}}>
                            <img src={line} alt='line' />
                        </div>
                        <div className="checkbox" id='Thanatophobia' style={{gridArea: '14/10/span 2/span 2'}}>
                            {nodes && nodes.Thanatophobia ? <>
                                <div className='checked'>
                                    <img 
                                        src={Checked} 
                                        alt='checked'
                                        onClick={() => handleClick('Thanatophobia')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.eleven.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={unchecked} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Thanatophobia')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="horizontal-line-dash" style={{gridArea: '14/12/span 2/span 2', left: '-50px'}}>
                            <img src={line} alt='line' />
                        </div>
                        <div className="vertical-line-dash" style={{gridArea: '14/13/span 2/span 2', display: 'flex', justifyContent: 'center', top: '60px'}}>
                            <img src={line} alt='line' style={{height: '120px', width: '100px'}}/>
                        </div>
                        <div className="horizontal-line-dash" style={{gridArea: '14/13/span 2/span 2'}}>
                            <img src={line} alt='line' />
                        </div>
                        <div className="horizontal-line-dash" style={{gridArea: '14/14/span 2/span 2', left: '70px'}}>
                            <img src={line} alt='line' />
                        </div>
                        <div className="checkbox" id='HotHeaded' style={{gridArea: '14/16/span 2/span 2'}}>
                            {nodes && nodes.HotHeaded ? <>
                                <div className='checked'>
                                    <img 
                                        src={Checked} 
                                        alt='checked'
                                        onClick={() => handleClick('HotHeaded')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.twelve.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={unchecked} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Hot-Headed')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="horizontal-line-dash" style={{gridArea: '14/17/span 2/span 2', left: '0px', width: '100px'}}>
                            <img src={line} alt='line' />
                        </div>
                        <div className="checkbox" id='BlazeOfGlory' style={{gridArea: '14/18/span 2/span 2', left: '0px'}}>
                            {nodes && nodes.BlazeOfGlory ? <>
                                <div className='checked'>
                                    <img 
                                        src={Checked} 
                                        alt='checked'
                                        onClick={() => handleClick('BlazeOfGlory')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.twentythree.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={unchecked} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Blaze Of Glory')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="vertical-line-dash" style={{gridArea: '16/10/span 2/span 2', top: '-40px'}}>
                            <img src={line} alt='line' />
                        </div>
                        <div className="checkbox" id='Vocal' style={{gridArea: '15/13/span 2/span 2'}}>
                            {nodes && nodes.Vocal ? <>
                                <div className='checked'>
                                    <img 
                                        src={Checked} 
                                        alt='checked'
                                        onClick={() => handleClick('Vocal')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.twentyseven.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={unchecked} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Vocal')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="vertical-line-dash" style={{gridArea: '16/16/span 2/span 2', top: '-40px'}}>
                            <img src={line} alt='line' />
                        </div>
                        <div className="checkbox" id='Electrophilia' style={{gridArea: '17/10/span 2/span 2'}}>
                            {nodes && nodes.Electrophilia ? <>
                                <div className='checked'>
                                    <img 
                                        src={Checked} 
                                        alt='checked'
                                        onClick={() => handleClick('Electrophilia')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.thirteen.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={unchecked} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Electrophilia')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="horizontal-line-dash" style={{gridArea: '17/12/span 2/span 2', left: '-50px', top: '-10px'}}>
                            <img src={line} alt='line' />
                        </div>
                        <div className='corners-down' style={{gridArea: '17/13/span 2/span 2'}}>
                            <img src={corner} alt='corner' className='corner-down-left' style={{gridArea: '17/13/span 2/span 2', marginLeft: 'calc(var(--spacing) * 8', marginTop: 'calc(var(--spacing) * 8', left: '-80px', top: '-27px'}}/>
                            <img src={corner} alt='corner' className='corner-down-right' style={{gridArea: '17/13/span 2/span 2', marginLeft: 'calc(var(--spacing) * 8', marginTop: 'calc(var(--spacing) * 8', top: '-34px'}} />
                        </div>
                        <div className="horizontal-line-dash" style={{gridArea: '17/14/span 2/span 2', left: '63px', top: '-10px'}}>
                            <img src={line} alt='line' />
                        </div>
                        <div className="checkbox" id='Epiplaphobia' style={{gridArea: '17/16/span 2/span 2'}}>
                            {nodes && nodes.Epiplaphobia ? <>
                                <div className='checked'>
                                    <img 
                                        src={Checked} 
                                        alt='checked'
                                        onClick={() => handleClick('Epiplaphobia')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.fourteen.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={unchecked} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Epiplaphobia')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="vertical-line-dash" style={{gridArea: '19/10/span 2/span 2', top: '-40px'}}>
                            <img src={line} alt='line' />
                        </div>
                        <div className="checkbox" id='Indecisive' style={{gridArea: '18/13/span 2/span 2', top: '20px'}}>
                            {nodes && nodes.Indecisive ? <>
                                <div className='checked'>
                                    <img 
                                        src={Checked} 
                                        alt='checked'
                                        onClick={() => handleClick('Indecisive')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.twentyone.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={unchecked} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Indecisive')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="vertical-line-dash" style={{gridArea: '19/16/span 2/span 2', top: '-40px'}}>
                            <img src={line} alt='line' />
                        </div>
                        <div className="vertical-line-dash" style={{gridArea: '20/10/span 2/span 2', top: '-40px'}}>
                            <img src={line} alt='line' />
                        </div>
                        <div className="horizontal-line-dash" style={{gridArea: '20/11/span 2/span 2', left: '-10px'}}>
                            <img src={line} alt='line' />
                        </div>
                        <div className="horizontal-line-dash" style={{gridArea: '20/12/span 2/span 2', left: '-10px'}}>
                            <img src={line} alt='line' />
                        </div>
                        <div className='corners-down' style={{gridArea: '20/13/span 2/span 2'}}>
                            <img src={corner} alt='corner' className='corner-down-left' style={{gridArea: '20/13/span 2/span 2', marginLeft: 'calc(var(--spacing) * 8', marginTop: 'calc(var(--spacing) * 8', left: '-80px', top: '-16px'}}/>
                            <img src={corner} alt='corner' className='corner-down-right' style={{gridArea: '20/13/span 2/span 2', marginLeft: 'calc(var(--spacing) * 8', marginTop: 'calc(var(--spacing) * 8', top: '-22px'}} />
                        </div>
                        <div className="horizontal-line-dash" style={{gridArea: '20/14/span 2/span 2', left: '20px'}}>
                            <img src={line} alt='line' />
                        </div>
                        <div className="horizontal-line-dash" style={{gridArea: '20/15/span 2/span 2', left: '20px'}}>
                            <img src={line} alt='line' />
                        </div>
                        <div className="vertical-line-dash" style={{gridArea: '20/16/span 2/span 2', top: '-40px'}}>
                            <img src={line} alt='line' />
                        </div>
                        <div className='corner-down-right' style={{gridArea: '21/9/span 2/span 2', left: '20px', top: '27px'}}>
                            <img src={corner} alt='corner' />
                        </div>
                        <div className='corner-up-left' style={{gridArea: '21/10/span 2/span 2', left: '-15px', top: '-25px'}}>
                            <img src={corner} alt='corner' />
                        </div>
                        <div className="checkbox" id='Gambler' style={{gridArea: '21/13/span 2/span 2', top: '30px'}}>
                            {nodes && nodes.Gambler ? <>
                                <div className='checked'>
                                    <img 
                                        src={Checked} 
                                        alt='checked'
                                        onClick={() => handleClick('Gambler')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.fifteen.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={unchecked} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Gambler')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className='corner-up-right' style={{gridArea: '21/16/span 2/span 2', left: '50px', top: '-25px'}}>
                            <img src={corner} alt='corner' />
                        </div>
                        <div className='corner-down-left' style={{gridArea: '21/17/span 2/span 2', left: '-13px', top: '30px'}}>
                            <img src={corner} alt='corner' />
                        </div>
                        <div className='corners-up' style={{gridArea: '22/13/span 2/span 2'}}>
                            <img src={corner} alt='corner' className='corner-up-left' style={{gridArea: '22/13/span 2/span 2', left: '0px', top: '100px', width: '100px'}}/>
                            <img src={corner} alt='corner' className='corner-up-right' style={{gridArea: '22/13/span 2/span 2', left: '130px', top: '97px', width: '100px'}} />
                        </div>
                        <div className="checkbox" id='CruelCalculus' style={{gridArea: '22/9/span 2/span 2', left: '0px'}}>
                            {nodes && nodes.CruelCalculus ? <>
                                <div className='checked'>
                                    <img
                                        src={Checked} 
                                        alt='checked'
                                        onClick={() => handleClick('CruelCalculus')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.seventeen.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={unchecked} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Cruel Calculus')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="checkbox" id='AllTheThingsIMightHaveSaid' style={{gridArea: '22/11/span 2/span 2', left: '50px'}}>
                            {nodes && nodes.AllTheThingsIMightHaveSaid ? <>
                                <div className='checked'>
                                    <img 
                                        src={Checked} 
                                        alt='checked'
                                        onClick={() => handleClick('AllTheThingsIMightHaveSaid')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.eighteen.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={unchecked} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: All The Things I Might Have Said')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="checkbox" id='ACleansingFlame' style={{gridArea: '22/15/span 2/span 2', left: '-40px'}}>
                            {nodes && nodes.ACleansingFlame ? <>
                                <div className='checked'>
                                    <img 
                                        src={Checked} 
                                        alt='checked'
                                        onClick={() => handleClick('ACleansingFlame')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.nineteen.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={unchecked} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: A Cleansing Flame')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="checkbox" id='NoSecondChances' style={{gridArea: '22/17/span 2/span 2'}}>
                            {nodes && nodes.NoSecondChances ? <>
                                <div className='checked'>
                                    <img 
                                        src={Checked} 
                                        alt='checked'
                                        onClick={() => handleClick('NoSecondChances')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.twenty.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={unchecked} 
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
