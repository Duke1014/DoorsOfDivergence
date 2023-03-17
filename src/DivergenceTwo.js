import React, { useContext } from 'react'

// import CommonSymptoms from './CommonSymptoms'

import corner from './img/Corner.png'
import line from './img/Line.png'
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
        <div>
            <section className='grid h-full'>
                <div className='grid place-content-center'>
                    <div className='relative grid w-full h-full mx-auto madness-grid'>
                    <div style={{gridArea: '1/20/span 2/span 2'}}>Common Symptoms</div>
                        <div className="checkbox" id='Narcoleptic' style={{gridArea: '1/20/span 2/span 2'}}>
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
                        <div className="checkbox" id='Narcissistic' style={{gridArea: '3/20/span 2/span 2'}}>
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
                        <div className="checkbox" id='Obstinate' style={{gridArea: '5/20/span 2/span 2'}}>
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
                        <div className="checkbox" id='Arrogant' style={{gridArea: '7/20/span 2/span 2'}}>
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
                        <div className="checkbox" id='DelusionsOfGrandeur' style={{gridArea: '9/20/span 2/span 2'}}>
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
                        <div className="checkbox" id='MissionOfMercy' style={{gridArea: '1/13/span 2/span 2'}}>
                            {nodes && nodes.MissionOfMercy ? <>
                                <div className='checked'>
                                    <img 
                                        src={Checked} 
                                        alt='checked'
                                        onClick={() => handleClick('MissionOfMercy')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.thirty.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={unchecked} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Mission Of Mercy')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="vertical-line-dash" style={{gridArea: '3/13/span 2/span 2', top: '-45px'}}>
                            <img src={line} alt='line' />
                        </div>
                        <div className='corner-down-right' style={{gridArea: '4/12/span 2/span 2', top: '50px'}}>
                            <img src={corner} alt='corner' />
                        </div>
                        <div className="checkbox" id='Nepotism' style={{gridArea: '4/13/span 2/span 2'}}>
                            {nodes && nodes.Nepotism ? <>
                                <div className='checked'>
                                    <img 
                                        src={Checked} 
                                        alt='checked'
                                        onClick={() => handleClick('Nepotism')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.thirtyone.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={unchecked} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Nepotism')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="checkbox" id='Inactive' style={{gridArea: '5/12/span 2/span 2', left: '-80px', top: '60px'}}>
                            {nodes && nodes.Inactive ? <>
                                <div className='checked'>
                                    <img 
                                        src={Checked} 
                                        alt='checked'
                                        onClick={() => handleClick('Inactive')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.thirtyfour.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={unchecked} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Inactive')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="vertical-line-dash" style={{gridArea: '5/13/span 2/span 2', marginTop: 'calc(var(--spacing) * 10)'}}>
                            <img src={line} alt='line' />
                        </div> 
                        <div className='corner-up-right' style={{gridArea: '7/12/span 2/span 2', top: '-35px'}}>
                            <img src={corner} alt='corner' />
                        </div>
                        <div className="checkbox" id='Sanguine' style={{gridArea: '7/13/span 2/span 2'}}>
                            {nodes && nodes.Sanguine ? <>
                                <div className='checked'>
                                    <img 
                                        src={Checked} 
                                        alt='checked'
                                        onClick={() => handleClick('Sanguine')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.thirtyfive.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={unchecked} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Sanguine')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="vertical-line-dash" style={{gridArea: '9/13/span 2/span 2', top: '-45px'}}>
                            <img src={line} alt='line' />
                        </div> 
                        <div className='corner-down-right' style={{gridArea: '10/10/span 2/span 2', top: '45px'}}>
                            <img src={corner} alt='corner' />
                        </div>
                        <div className="horizontal-line-dash" style={{gridArea: '10/11/span 2/span 2'}}>
                            <img src={line} alt='line'/>
                        </div>
                        <div className='corner-down-right' style={{gridArea: '10/12/span 2/span 2', top: '45px'}}>
                            <img src={corner} alt='corner' />
                        </div>
                        <div className="checkbox" id='FrequentAttacks' style={{gridArea: '10/13/span 2/span 2'}}>
                            {nodes && nodes.FrequentAttacks ? <>
                                <div className='checked'>
                                    <img 
                                        src={Checked} 
                                        alt='checked'
                                        onClick={() => handleClick('FrequentAttacks')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.thirtysix.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={unchecked} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Frequent Attacks')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="horizontal-line-dash" style={{gridArea: '10/14/span 2/span 2', left:'70px'}}>
                            <img src={line} alt='line'/>
                        </div>
                        <div className="horizontal-line-dash" style={{gridArea: '10/14/span 2/span 2', left:'70px', top: '-20px'}}>
                            <img src={line} alt='line'/>
                        </div>
                        <div className="horizontal-line-dash" style={{gridArea: '10/16/span 2/span 2', left:'30px', top: '-20px'}}>
                            <img src={line} alt='line'/>
                        </div>
                        <div className='corner-down-left' style={{gridArea: '10/16/span 2/span 2', width: '200px', top: '50px'}}>
                            <img src={corner} alt='corner' />
                        </div>
                        <div className='corner-down-left' style={{gridArea: '10/18/span 2/span 2', width: '200px', top: '28px', left: '-40px'}}>
                            <img src={corner} alt='corner' />
                        </div>
                        <div className="checkbox" id='Kleptomania' style={{gridArea: '11/10/span 2/span 2', left: '-50px', top: '50px'}}>
                            {nodes && nodes.Kleptomania ? <>
                                <div className='checked'>
                                    <img 
                                        src={Checked} 
                                        alt='checked'
                                        onClick={() => handleClick('Kleptomania')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.thirtyseven.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={unchecked} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Kleptomania')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="checkbox" id='Lethargic' style={{gridArea: '11/12/span 2/span 2', left: '-50px', top: '50px'}}>
                            {nodes && nodes.Lethargic ? <>
                                <div className='checked'>
                                    <img 
                                        src={Checked} 
                                        alt='checked'
                                        onClick={() => handleClick('Lethargic')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.thirtyeight.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={unchecked} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Lethargic')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="vertical-line-dash" style={{gridArea: '12/13/span 2/span 2', top: '-45px'}}>
                            <img src={line} alt='line' />
                        </div> 
                        <div className="checkbox" id='Insubordinate' style={{gridArea: '11/16/span 2/span 2', left: '10px', top: '50px'}}>
                            {nodes && nodes.Insubordinate ? <>
                                <div className='checked'>
                                    <img 
                                        src={Checked} 
                                        alt='checked'
                                        onClick={() => handleClick('Insubordinate')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.thirtynine.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={unchecked} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Insubordinate')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="vertical-line-dash" style={{gridArea: '11/18/span 2/span 2', top: '30px', left: '-25px'}}>
                            <img src={line} alt='line' />
                        </div> 
                        <div className='corner-up-right' style={{gridArea: '13/9/span 2/span 2', width: '200px', left: '0px'}}>
                            <img src={corner} alt='corner' />
                        </div>
                        <div className="horizontal-line-dash" style={{gridArea: '13/11/span 2/span 2', left:'10px', top: '15px'}}>
                            <img src={line} alt='line'/>
                        </div>
                        <div className='corner-up-right' style={{gridArea: '13/12/span 2/span 2'}}>
                            <img src={corner} alt='corner' />
                        </div>
                        <div className="checkbox" id='Patricidal' style={{gridArea: '13/13/span 2/span 2'}}>
                            {nodes && nodes.Patricidal ? <>
                                <div className='checked'>
                                    <img 
                                        src={Checked} 
                                        alt='checked'
                                        onClick={() => handleClick('Patricidal')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.fourty.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={unchecked} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Patricidal')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="horizontal-line-dash" style={{gridArea: '13/15/span 2/span 2', left:'-35px'}}>
                            <img src={line} alt='line'/>
                        </div>
                        <div className="horizontal-line-dash" style={{gridArea: '13/15/span 2/span 2', left:'-35px', top: '-20px'}}>
                            <img src={line} alt='line'/>
                        </div>
                        <div className='corner-up-left' style={{gridArea: '13/16/span 2/span 2', top: '-30px'}}>
                            <img src={corner} alt='corner' />
                        </div>
                        <div className="horizontal-line-dash" style={{gridArea: '13/17/span 2/span 2', left:'-55px'}}>
                            <img src={line} alt='line'/>
                        </div>
                        <div className="vertical-line-dash" style={{gridArea: '13/18/span 2/span 2', left: '-25px', top: '-20px'}}>
                            <img src={line} alt='line' />
                        </div> 
                        <div className="vertical-line-dash" style={{gridArea: '15/13/span 2/span 2', top: '-45px'}}>
                            <img src={line} alt='line' />
                        </div> 
                        <div className="vertical-line-dash" style={{gridArea: '15/18/span 2/span 2', top: '-55px', left: '-25px'}}>
                            <img src={line} alt='line' />
                        </div> 
                        <div className="checkbox" id='Disloyal' style={{gridArea: '16/13/span 2/span 2'}}>
                            {nodes && nodes.Disloyal ? <>
                                <div className='checked'>
                                    <img 
                                        src={Checked} 
                                        alt='checked'
                                        onClick={() => handleClick('Disloyal')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.fourtyone.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={unchecked} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Disloyal')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="horizontal-line-dash"style={{gridArea: '16/15/span 2/span 2', left: '-30px'}}>
                            <img src={line} alt='line'/>
                        </div>
                        <div className="horizontal-line-dash"style={{gridArea: '16/16/span 2/span 2', left: '20px'}}>
                            <img src={line} alt='line'/>
                        </div>
                        <div className="checkbox" id='DrainingDay' style={{gridArea: '16/18/span 2/span 2', left: '-25px'}}>
                            {nodes && nodes.DrainingDay ? <>
                                <div className='checked'>
                                    <img 
                                        src={Checked} 
                                        alt='checked'
                                        onClick={() => handleClick('DrainingDay')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.fourtytwo.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={unchecked} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Draining Day')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className='corner-down-right' style={{gridArea: '18/11/span 2/span 2', top: '-10px', left: '0px'}}>
                            <img src={corner} alt='corner' />
                        </div>
                        <div className="horizontal-line-dash"style={{gridArea: '18/12/span 2/span 2', top: '-55px', left: '20px'}}>
                            <img src={line} alt='line'/>
                        </div>
                        <div className="vertical-line-dash" style={{gridArea: '18/13/span 2/span 2', top: '-45px'}}>
                            <img src={line} alt='line' />
                        </div> 
                        <div className="horizontal-line-dash"style={{gridArea: '18/14/span 2/span 2', top: '-55px', left: '-5px'}}>
                            <img src={line} alt='line'/>
                        </div>
                        <div className='corner-down-left' style={{gridArea: '18/15/span 2/span 2', top: '-5px', left: '0px'}}>
                            <img src={corner} alt='corner' />
                        </div>
                        <div className="checkbox" id='Bloodthirsty' style={{gridArea: '19/11/span 2/span 2', top: '0px', left:'-50px'}}>
                            {nodes && nodes.Bloodthirsty ? <>
                                <div className='checked'>
                                    <img 
                                        src={Checked} 
                                        alt='checked'
                                        onClick={() => handleClick('Bloodthirsty')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.fourtythree.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={unchecked} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Bloodthirsty')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className='corner-down-right' style={{gridArea: '19/12/span 2/span 2', width: '150px', top: '50px', left:'40px'}}>
                            <img src={corner} alt='corner' />
                        </div>
                        <div className="checkbox" id='Indecisive' style={{gridArea: '19/13/span 2/span 2'}}>
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
                        <div className="horizontal-line-dash"style={{gridArea: '19/15/span 2/span 2', left: '-40px', top: '0px'}}>
                            <img src={line} alt='line'/>
                        </div>
                        <div className="vertical-line-dash" style={{gridArea: '19/15/span 2/span 2', top: '0px', left: '10px'}}>
                            <img src={line} alt='line' />
                        </div> 
                        <div className="horizontal-line-dash"style={{gridArea: '19/16/span 2/span 2', left: '10px', top: '0px'}}>
                            <img src={line} alt='line'/>
                        </div>
                        <div className="checkbox" id='Reckless' style={{gridArea: '19/18/span 2/span 2', left: '-25px'}}>
                            {nodes && nodes.Reckless ? <>
                                <div className='checked'>
                                    <img 
                                        src={Checked} 
                                        alt='checked'
                                        onClick={() => handleClick('Reckless')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.fourtysix.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={unchecked} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Reckless')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="vertical-line-dash" style={{gridArea: '21/11/span 2/span 2', top: '-45px', left: '-50px'}}>
                            <img src={line} alt='line' />
                        </div> 
                        <div className="vertical-line-dash" style={{gridArea: '20/12/span 2/span 2', top: '0px', left: '-25px'}}>
                            <img src={line} alt='line' />
                        </div> 
                        <div className="vertical-line-dash" style={{gridArea: '21/12/span 2/span 2', top: '0px', left: '-25px'}}>
                            <img src={line} alt='line' />
                        </div> 
                        <div className="vertical-line-dash" style={{gridArea: '21/13/span 2/span 2', top: '-20px', left: '0px'}}>
                            <img src={line} alt='line' />
                        </div> 
                        <div className="vertical-line-dash" style={{gridArea: '20/15/span 2/span 2', top: '60px', left: '10px'}}>
                            <img src={line} alt='line' />
                        </div>
                        <div className="checkbox" id='TerminalIllness' style={{gridArea: '22/11/span 2/span 2', left: '-50px'}}>
                            {nodes && nodes.TerminalIllness ? <>
                                <div className='checked'>
                                    <img 
                                        src={Checked} 
                                        alt='checked'
                                        onClick={() => handleClick('TerminalIllness')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.fourtyfour.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={unchecked} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Terminal Illness')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className='corner-up-left' style={{gridArea: '22/12/span 2/span 2', width: '150px', top: '10px', left: '-10px'}}>
                            <img src={corner} alt='corner' />
                        </div>
                        <div className='corner-up-right' style={{gridArea: '22/13/span 2/span 2', left: '50px'}}>
                            <img src={corner} alt='corner' />
                        </div>
                        <div className="checkbox" id='ForeverAndADay' style={{gridArea: '22/15/span 2/span 2'}}>
                            {nodes && nodes.ForeverAndADay ? <>
                                <div className='checked'>
                                    <img 
                                        src={Checked} 
                                        alt='checked'
                                        onClick={() => handleClick('ForeverAndADay')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.fourtyfive.title}</p>
                                </div> 
                            </>  :   <>
                                <div className='unchecked'>
                                    <img 
                                        src={unchecked} 
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
