import React, { useContext } from 'react'
import Checked from './img/Checked.png'
import unchecked from './img/unchecked.png'
import line from './img/Line.png'
import corner from './img/Corner.png'
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
                    <div className='text-2xl' style={{gridArea: '1/20/span 2/span 2'}}>Common Symptoms</div>
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
                                    src={Checked} 
                                    alt='checked'
                                    onClick={() => handleClick('UnhingedBehavior')} 
                                />
                                <p className='symptom-found'>{ui.madnessNodes.fourtyseven.title}</p>
                            </div> 
                        </>:<>
                            <div className='unchecked'>
                                <img 
                                    src={unchecked} 
                                    title='No Symptoms'
                                    alt='unchecked' 
                                    onClick={() => handleClick('Hint: Unhinged Behavior')} />
                                <p className='no-symptoms'>No Symptoms</p>
                            </div>
                        </>}
                    </div>
                    <div className="vertical-line-dash" style={{gridArea: '3/13/span 2/span 2', top: '-45px'}}>
                        <img src={line} alt='line' />
                    </div> 
                    <div className='corner-down-right' style={{gridArea: '4/10/span 2/span 2', width: '200px', top: '40px', left: '50px'}}>
                        <img src={corner} alt='corner' />
                    </div>
                    <div className="horizontal-line-dash" style={{gridArea: '4/11/span 2/span 2', left: '50px'}}>
                        <img src={line} alt='line'/>
                    </div>
                    <div className="checkbox" id='Committed' style={{gridArea: '4/13/span 2/span 2'}}>
                        {nodes && nodes.Committed ? <>
                            <div className='checked'>
                                <img 
                                    src={Checked} 
                                    alt='checked'
                                    onClick={() => handleClick('Committed')} 
                                />
                                <p className='symptom-found'>{ui.madnessNodes.fourtynine.title}</p>
                            </div> 
                        </>:<>
                            <div className='unchecked'>
                                <img 
                                    src={unchecked} 
                                    title='No Symptoms'
                                    alt='unchecked' 
                                    onClick={() => handleClick('Hint: Committed')} />
                                <p className='no-symptoms'>No Symptoms</p>
                            </div>
                        </>}
                    </div>
                    <div className="horizontal-line-dash"style={{gridArea: '4/15/span 2/span 2', left: '-40px'}}>
                        <img src={line} alt='line'/>
                    </div>
                    <div className='corner-down-left' style={{gridArea: '4/16/span 2/span 2', width: '200px', top: '48px', left: '-8px'}}>
                        <img src={corner} alt='corner' />
                    </div>
                    <div className="vertical-line-dash" style={{gridArea: '6/10/span 2/span 2', top: '-65px'}}>
                        <img src={line} alt='line' />
                    </div> 
                    <div className="vertical-line-dash" style={{gridArea: '6/13/span 2/span 2', top: '-45px'}}>
                        <img src={line} alt='line' />
                    </div> 
                    <div className="vertical-line-dash" style={{gridArea: '6/16/span 2/span 2', top: '-65px'}}>
                        <img src={line} alt='line' />
                    </div> 
                    <div className="checkbox" id='Retrophilic' style={{gridArea: '7/10/span 2/span 2'}}>
                        {nodes && nodes.Retrophilic ? <>
                            <div className='checked'>
                                <img 
                                    src={Checked} 
                                    alt='checked'
                                    onClick={() => handleClick('Retrophilic')} 
                                />
                                <p className='symptom-found'>{ui.madnessNodes.fifty.title}</p>
                            </div> 
                        </>:<>
                            <div className='unchecked'>
                                <img 
                                    src={unchecked} 
                                    title='No Symptoms'
                                    alt='unchecked' 
                                    onClick={() => handleClick('Hint: Retrophilic')} />
                                <p className='no-symptoms'>No Symptoms</p>
                            </div>
                        </>}
                    </div>
                    <div className="checkbox" id='Intractible' style={{gridArea: '7/13/span 2/span 2'}}>
                        {nodes && nodes.Intractible ? <>
                            <div className='checked'>
                                <img 
                                    src={Checked} 
                                    alt='checked'
                                    onClick={() => handleClick('Intractible')} 
                                />
                                <p className='symptom-found'>{ui.madnessNodes.fiftytwo.title}</p>
                            </div> 
                        </>:<>
                            <div className='unchecked'>
                                <img 
                                    src={unchecked} 
                                    title='No Symptoms'
                                    alt='unchecked' 
                                    onClick={() => handleClick('Hint: Intractible')} />
                                <p className='no-symptoms'>No Symptoms</p>
                            </div>
                        </>}
                    </div>
                    <div className="checkbox" id='Neophilic' style={{gridArea: '7/16/span 2/span 2'}}>
                        {nodes && nodes.Neophilic ? <>
                            <div className='checked'>
                                <img 
                                    src={Checked} 
                                    alt='checked'
                                    onClick={() => handleClick('Neophilic')} 
                                />
                                <p className='symptom-found'>{ui.madnessNodes.fiftyone.title}</p>
                            </div> 
                        </>:<>
                            <div className='unchecked'>
                                <img 
                                    src={unchecked} 
                                    title='No Symptoms'
                                    alt='unchecked' 
                                    onClick={() => handleClick('Hint: Neophilic')} />
                                <p className='no-symptoms'>No Symptoms</p>
                            </div>
                        </>}
                    </div>
                    <div className="vertical-line-dash" style={{gridArea: '9/13/span 2/span 2', top: '-45px'}}>
                        <img src={line} alt='line' />
                    </div> 
                    <div className="vertical-line-dash" style={{gridArea: '9/16/span 2/span 2', top: '-45px'}}>
                        <img src={line} alt='line' />
                    </div> 
                        <div className='corner-down-right' style={{gridArea: '10/10/span 2/span 2', top: '50px', left: '50px'}}>
                            <img src={corner} alt='corner' />
                        </div>
                    <div className="horizontal-line-dash"style={{gridArea: '10/11/span 2/span 2', left: '50px'}}>
                        <img src={line} alt='line'/>
                    </div>
                    <div className="checkbox" id='Paranoid' style={{gridArea: '10/13/span 2/span 2'}}>
                        {nodes && nodes.Paranoid ? <>
                            <div className='checked'>
                                <img 
                                    src={Checked} 
                                    alt='checked'
                                    onClick={() => handleClick('Paranoid')} 
                                />
                                <p className='symptom-found'>{ui.madnessNodes.fiftythree.title}</p>
                            </div> 
                        </>:<>
                            <div className='unchecked'>
                                <img 
                                    src={unchecked} 
                                    title='No Symptoms'
                                    alt='unchecked' 
                                    onClick={() => handleClick('Hint: Paranoid')} />
                                <p className='no-symptoms'>No Symptoms</p>
                            </div>
                        </>}
                    </div>
                    <div className="horizontal-line-dash"style={{gridArea: '10/15/span 2/span 2', left: '-40px'}}>
                        <img src={line} alt='line'/>
                    </div>
                    <div className='corner-up-left' style={{gridArea: '10/16/span 2/span 2', top: '-10px', left: '-10px'}}>
                        <img src={corner} alt='corner' />
                    </div>
                    <div className="checkbox" id='LikeINeedAHoleInMyHead' style={{gridArea: '11/10/span 2/span 2', top: '30px'}}>
                        {nodes && nodes.LikeINeedAHoleInMyHead ? <>
                            <div className='checked'>
                                <img 
                                    src={Checked} 
                                    alt='checked'
                                    onClick={() => handleClick('LikeINeedAHoleInTheHead')} 
                                />
                                <p className='symptom-found'>{ui.madnessNodes.fiftyfour.title}</p>
                            </div> 
                        </>:<>
                            <div className='unchecked'>
                                <img 
                                    src={unchecked} 
                                    title='No Symptoms'
                                    alt='unchecked' 
                                    onClick={() => handleClick('Hint: Like I Need A Hole In The Head')} />
                                <p className='no-symptoms'>No Symptoms</p>
                            </div>
                        </>}
                    </div>
                    <div className="vertical-line-dash" style={{gridArea: '12/13/span 2/span 2', top: '-45px'}}>
                        <img src={line} alt='line' />
                    </div> 
                    <div className='corner-down-right' style={{gridArea: '13/10/span 2/span 2', top: '40px'}}>
                        <img src={corner} alt='corner' />
                    </div>
                    <div className="horizontal-line-dash"style={{gridArea: '13/11/span 2/span 2'}}>
                        <img src={line} alt='line'/>
                    </div>
                    <div className='corner-down-right' style={{gridArea: '13/12/span 2/span 2', top: '40px'}}>
                        <img src={corner} alt='corner' />
                    </div>
                    <div className="checkbox" id='Dishonest' style={{gridArea: '13/13/span 2/span 2'}}>
                        {nodes && nodes.Dishonest ? <>
                            <div className='checked'>
                                <img 
                                    src={Checked} 
                                    alt='checked'
                                    onClick={() => handleClick('Dishonest')} 
                                />
                                <p className='symptom-found'>{ui.madnessNodes.fiftyfive.title}</p>
                            </div> 
                        </>:<>
                            <div className='unchecked'>
                                <img 
                                    src={unchecked} 
                                    title='No Symptoms'
                                    alt='unchecked' 
                                    onClick={() => handleClick('Hint: Dishonest')} />
                                <p className='no-symptoms'>No Symptoms</p>
                            </div>
                        </>}
                    </div>
                    <div className="horizontal-line-dash"style={{gridArea: '13/15/span 2/span 2', left: '-50px'}}>
                        <img src={line} alt='line'/>
                    </div>
                    <div className="checkbox" id='TheOneMadeMany' style={{gridArea: '13/16/span 2/span 2'}}>
                        {nodes && nodes.TheOneMadeMany ? <>
                            <div className='checked'>
                                <img 
                                    src={Checked} 
                                    alt='checked'
                                    onClick={() => handleClick('TheOneMadeMany')} 
                                />
                                <p className='symptom-found'>{ui.madnessNodes.fiftysix.title}</p>
                            </div> 
                        </>:<>
                            <div className='unchecked'>
                                <img 
                                    src={unchecked} 
                                    title='No Symptoms'
                                    alt='unchecked' 
                                    onClick={() => handleClick('Hint: The One Made Many')} />
                                <p className='no-symptoms'>No Symptoms</p>
                            </div>
                        </>}
                    </div>
                    <div className="checkbox" id='Kleptomania' style={{gridArea: '14/10/span 2/span 2', left: '-50px', top: '20px'}}>
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
                    <div className="checkbox" id='Lethargic' style={{gridArea: '14/12/span 2/span 2', left: '-50px', top: '20px'}}>
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
                    <div className="vertical-line-dash" style={{gridArea: '15/13/span 2/span 2', top: '-45px'}}>
                                <img src={line} alt='line' />
                            </div> 
                    <div className='corner-up-right' style={{gridArea: '16/10/span 2/span 2', top: '-30px'}}>
                        <img src={corner} alt='corner' />
                    </div>
                    <div className="horizontal-line-dash"style={{gridArea: '16/11/span 2/span 2', top: '-10px'}}>
                            <img src={line} alt='line'/>
                        </div>
                    <div className='corner-up-right' style={{gridArea: '16/12/span 2/span 2', top: '-30px'}}>
                        <img src={corner} alt='corner' />
                    </div>
                    <div className="checkbox" id='Deceitful' style={{gridArea: '16/13/span 2/span 2'}}>
                        {nodes && nodes.Deceitful ? <>
                            <div className='checked'>
                                <img 
                                    src={Checked} 
                                    alt='checked'
                                    onClick={() => handleClick('Deceitful')} 
                                />
                                <p className='symptom-found'>{ui.madnessNodes.fiftyseven.title}</p>
                            </div> 
                        </>:<>
                            <div className='unchecked'>
                                <img 
                                    src={unchecked} 
                                    title='No Symptoms'
                                    alt='unchecked' 
                                    onClick={() => handleClick('Hint: Deceitful')} />
                                <p className='no-symptoms'>No Symptoms</p>
                            </div>
                        </>}
                    </div>
                    <div className="checkbox" id='TheManyMadeOne' style={{gridArea: '18/10/span 2/span 2', top: '-30px', left: '-20px'}}>
                        {nodes && nodes.TheManyMadeOne ? <>
                            <div className='checked'>
                                <img 
                                    src={Checked} 
                                    alt='checked'
                                    onClick={() => handleClick('TheManyMadeOne')} 
                                />
                                <p className='symptom-found'>{ui.madnessNodes.fiftyeight.title}</p>
                            </div> 
                        </>:<>
                            <div className='unchecked'>
                                <img 
                                    src={unchecked} 
                                    title='No Symptoms'
                                    alt='unchecked' 
                                    onClick={() => handleClick('Hint: The Many Made One')} />
                                <p className='no-symptoms'>No Symptoms</p>
                            </div>
                        </>}
                    </div>
                    <div className="horizontal-line-dash"style={{gridArea: '17/11/span 2/span 2', top: '60px', left: '50px'}}>
                        <img src={line} alt='line'/>
                    </div>
                    <div className='corner-up-left' style={{gridArea: '17/13/span 2/span 2', top: '50px', left: '-30px'}}>
                        <img src={corner} alt='corner' />
                    </div>
                    <div className="vertical-line-dash" style={{gridArea: '18/13/span 2/span 2', top: '-45px'}}>
                        <img src={line} alt='line' />
                    </div> 
                    <div className='corner-down-right' style={{gridArea: '19/10/span 2/span 2', top: '40px', left: '15px'}}>
                        <img src={corner} alt='corner' />
                    </div>
                    <div className="horizontal-line-dash"style={{gridArea: '19/11/span 2/span 2', left: '40px'}}>
                        <img src={line} alt='line'/>
                    </div>
                    <div className="checkbox" id='Uneasy' style={{gridArea: '19/13/span 2/span 2'}}>
                        {nodes && nodes.Uneasy ? <>
                            <div className='checked'>
                                <img 
                                    src={Checked} 
                                    alt='checked'
                                    onClick={() => handleClick('Uneasy')} 
                                />
                                <p className='symptom-found'>{ui.madnessNodes.fiftynine.title}</p>
                            </div> 
                        </>:<>
                            <div className='unchecked'>
                                <img 
                                    src={unchecked} 
                                    title='No Symptoms'
                                    alt='unchecked' 
                                    onClick={() => handleClick('Hint: Uneasy')} />
                                <p className='no-symptoms'>No Symptoms</p>
                            </div>
                        </>}
                    </div>
                    <div className="horizontal-line-dash"style={{gridArea: '19/15/span 2/span 2', left: '-30px'}}>
                        <img src={line} alt='line'/>
                    </div>
                    <div className='corner-down-left' style={{gridArea: '19/16/span 2/span 2', left: '15px', top: '43px'}}>
                        <img src={corner} alt='corner' />
                    </div>
                    <div className="vertical-line-dash" style={{gridArea: '20/10/span 2/span 2', left: '-32px', top: '30px'}}>
                        <img src={line} alt='line' />
                    </div> 
                    <div className="vertical-line-dash" style={{gridArea: '21/13/span 2/span 2', top: '-45px'}}>
                        <img src={line} alt='line' />
                    </div> 
                    <div className="vertical-line-dash" style={{gridArea: '20/16/span 2/span 2', left: '23px', top: '30px'}}>
                        <img src={line} alt='line' />
                    </div>
                    <div className="vertical-line-dash" style={{gridArea: '22/10/span 2/span 2', left: '-32px', top: '-25px'}}>
                        <img src={line} alt='line' />
                    </div> 
                    <div className='corner-down-right' style={{gridArea: '22/11/span 2/span 2', width: '150px', left: '-30px', top: '60px'}}>
                        <img src={corner} alt='corner' />
                    </div>
                    <div className="horizontal-line-dash"style={{gridArea: '22/12/span 2/span 2', left: '-50px'}}>
                        <img src={line} alt='line'/>
                    </div>
                    <div className="checkbox" id='Opportunistic' style={{gridArea: '22/13/span 2/span 2'}}>
                        {nodes && nodes.Opportunistic ? <>
                            <div className='checked'>
                                <img 
                                    src={Checked} 
                                    alt='checked'
                                    onClick={() => handleClick('Opportunistic')} 
                                />
                                <p className='symptom-found'>{ui.madnessNodes.sixty.title}</p>
                            </div> 
                        </>:<>
                            <div className='unchecked'>
                                <img 
                                    src={unchecked} 
                                    title='No Symptoms'
                                    alt='unchecked' 
                                    onClick={() => handleClick('Hint: Opportunistic')} />
                                <p className='no-symptoms'>No Symptoms</p>
                            </div>
                        </>}
                    </div>
                    <div className="horizontal-line-dash"style={{gridArea: '22/14/span 2/span 2', left: '60px'}}>
                        <img src={line} alt='line'/>
                    </div>
                    <div className='corner-down-left' style={{gridArea: '22/15/span 2/span 2', width: '150px', left: '110px', top: '65px'}}>
                        <img src={corner} alt='corner' />
                    </div>
                    <div className="vertical-line-dash" style={{gridArea: '22/16/span 2/span 2', left: '23px', top: '-25px'}}>
                        <img src={line} alt='line' />
                    </div> 
                    <div className="checkbox" id='TerminalIllness' style={{gridArea: '22/10/span 2/span 2', left: '-30px', top: '140px'}}>
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
                    <div className="checkbox" id='ForeverAndADay' style={{gridArea: '22/15/span 2/span 2', left: '125px', top: '140px'}}>
                        {nodes && nodes.ForeverAndADay ? <>
                            <div className='checked'>
                                <img 
                                    src={Checked} 
                                    alt='checked'
                                    onClick={() => handleClick('ForeverAndADay')} 
                                />
                                <p className='symptom-found'>{ui.madnessNodes.fourtyfive.title}</p>
                            </div> 
                        </>:<>
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
