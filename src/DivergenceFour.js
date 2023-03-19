import React, { useContext } from 'react'
import Checked from './img/Checked.png'
import unchecked from './img/unchecked.png'
// import CommonSymptoms from './CommonSymptoms'
import corner from './img/Corner.png'
import line from './img/Line.png'
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
                        <div className="checkbox" id='ALead' style={{gridArea: '1/13/span 2/span 2'}}>
                            {nodes && nodes.ALead ? <>
                                <div className='checked'>
                                    <img 
                                        src={Checked} 
                                        alt='checked'
                                        onClick={() => handleClick('ALead')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.sixtythree.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={unchecked} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: A Lead')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="vertical-line-dash" style={{gridArea: '3/13/span 2/span 2', top: '-45px'}}>
                            <img src={line} alt='line' />
                        </div> 
                        <div className='corner-down-right' style={{gridArea: '4/10/span 2/span 2', top: '40px', left: '-50px'}}>
                            <img src={corner} alt='corner' />
                        </div>
                        <div className="horizontal-line-dash"style={{gridArea: '4/11/span 2/span 2'}}>
                            <img src={line} alt='line'/>
                        </div>
                        <div className="checkbox" id='Combative' style={{gridArea: '4/13/span 2/span 2'}}>
                            {nodes && nodes.Combative ? <>
                                <div className='checked'>
                                    <img 
                                        src={Checked} 
                                        alt='checked'
                                        onClick={() => handleClick('Combative')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.sixtyfour.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={unchecked} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Combative')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="horizontal-line-dash"style={{gridArea: '4/15/span 2/span 2'}}>
                            <img src={line} alt='line'/>
                        </div>
                        <div className='corner-down-left' style={{gridArea: '4/17/span 2/span 2', width: '200px', top: '48px', left: '-20px'}}>
                            <img src={corner} alt='corner' />
                        </div>
                        <div className="checkbox" id='Hesitant' style={{gridArea: '5/9/span 2/span 2', top: '30px'}}>
                            {nodes && nodes.Hesitant ? <>
                                <div className='checked'>
                                    <img 
                                        src={Checked} 
                                        alt='checked'
                                        onClick={() => handleClick('Hesitant')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.sixtyfive.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={unchecked} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Hesitant')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="vertical-line-dash" style={{gridArea: '6/13/span 2/span 2', top: '-45px'}}>
                            <img src={line} alt='line' />
                        </div> 
                        <div className="checkbox" id='Knowledgeable' style={{gridArea: '5/17/span 2/span 2', top: '30px'}}>
                            {nodes && nodes.Knowledgeable ? <>
                                <div className='checked'>
                                    <img 
                                        src={Checked} 
                                        alt='checked'
                                        onClick={() => handleClick('Knowledgeable')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.fourtyeight.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={unchecked} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Knowledgeable')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className='corner-down-right' style={{gridArea: '7/10/span 2/span 2', width: '200px', left: '60px', top: '5px'}}>
                            <img src={corner} alt='corner' />
                        </div>
                        <div className="horizontal-line-dash"style={{gridArea: '7/12/span 2/span 2', top: '-40px', left: '-40px'}}>
                            <img src={line} alt='line'/>
                        </div>
                        <div className="vertical-line-dash" style={{gridArea: '7/13/span 2/span 2', top: '-45px'}}>
                            <img src={line} alt='line' />
                        </div> 
                        <div className="horizontal-line-dash"style={{gridArea: '7/14/span 2/span 2', top: '-40px'}}>
                            <img src={line} alt='line'/>
                        </div>
                        <div className='corner-down-left' style={{gridArea: '7/16/span 2/span 2', width: '200px', left: '-20px', top: '10px'}}>
                            <img src={corner} alt='corner' />
                        </div>
                        <div className="checkbox" id='Retrophilic' style={{gridArea: '8/10/span 2/span 2'}}>
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
                        <div className="checkbox" id='Headstrong' style={{gridArea: '8/13/span 2/span 2'}}>
                            {nodes && nodes.Headstrong ? <>
                                <div className='checked'>
                                    <img 
                                        src={Checked} 
                                        alt='checked'
                                        onClick={() => handleClick('Headstrong')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.seventysix.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={unchecked} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Headstrong')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="checkbox" id='Neophilic' style={{gridArea: '8/16/span 2/span 2'}}>
                            {nodes && nodes.Neoliphic ? <>
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
                        <div className='corner-up-right' style={{gridArea: '10/10/span 2/span 2', top: '-60px', left: '60px', width: '200px'}}>
                            <img src={corner} alt='corner' />
                        </div>
                        <div className="horizontal-line-dash"style={{gridArea: '10/12/span 2/span 2', top: '-45px'}}>
                            <img src={line} alt='line'/>
                        </div>
                        <div className="vertical-line-dash" style={{gridArea: '10/13/span 2/span 2', top: '-45px'}}>
                            <img src={line} alt='line' />
                        </div>
                        <div className="horizontal-line-dash"style={{gridArea: '10/14/span 2/span 2', top: '-45px'}}>
                            <img src={line} alt='line'/>
                        </div> 
                        <div className='corner-up-left' style={{gridArea: '10/16/span 2/span 2', top: '-60px', left: '-30px', width: '200px'}}>
                            <img src={corner} alt='corner' />
                        </div>
                        <div className='corner-down-right' style={{gridArea: '11/8/span 2/span 2', width: '200px'}}>
                            <img src={corner} alt='corner' />
                        </div>
                        <div className="horizontal-line-dash"style={{gridArea: '11/9/span 2/span 2', top: '-45px'}}>
                            <img src={line} alt='line'/>
                        </div>                    
                        <div className='corner-down-right' style={{gridArea: '11/10/span 2/span 2', width: '150px', top: '60px', left: '-20px'}}>
                            <img src={corner} alt='corner' />
                        </div>
                        <div className="horizontal-line-dash"style={{gridArea: '11/11/span 2/span 2', top: '-45px'}}>
                            <img src={line} alt='line'/>
                        </div>
                        <div className="horizontal-line-dash"style={{gridArea: '11/11/span 2/span 2', top: '-10px'}}>
                            <img src={line} alt='line'/>
                        </div>
                        <div className="checkbox" id='Hallucinations' style={{gridArea: '11/13/span 2/span 2'}}>
                            {nodes && nodes.Hallucinations ? <>
                                <div className='checked'>
                                    <img 
                                        src={Checked} 
                                        alt='checked'
                                        onClick={() => handleClick('Hallucinations')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.sixtysix.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={unchecked} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Hallucinations')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="vertical-line-dash" style={{gridArea: '12/8/span 2/span 2', left: '-45px', top: '10px'}}>
                            <img src={line} alt='line' />
                        </div> 
                        <div className="checkbox" id='Taciturn' style={{gridArea: '12/9/span 2/span 2', top: '10px'}}>
                            {nodes && nodes.Taciturn ? <>
                                <div className='checked'>
                                    <img 
                                        src={Checked} 
                                        alt='checked'
                                        onClick={() => handleClick('Taciturn')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.sixtyseven.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={unchecked} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Taciturn')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="vertical-line-dash" style={{gridArea: '13/13/span 2/span 2', top: '-45px'}}>
                            <img src={line} alt='line' />
                        </div> 
                        <div className="vertical-line-dash" style={{gridArea: '14/8/span 2/span 2', left: '-45px', top: '-50px'}}>
                            <img src={line} alt='line' />
                        </div> 
                        <div className='corner-up-right' style={{gridArea: '14/9/span 2/span 2', width: '200px', top: '-50px', left: '40px'}}>
                            <img src={corner} alt='corner' />
                        </div>
                        <div className='corner-down-right' style={{gridArea: '14/9/span 2/span 2', width: '200px', top: '50px', left: '45px'}}>
                            <img src={corner} alt='corner' />
                        </div>
                        <div className="horizontal-line-dash"style={{gridArea: '14/11/span 2/span 2', top: '-45px'}}>
                            <img src={line} alt='line'/>
                        </div>
                        <div className="horizontal-line-dash"style={{gridArea: '14/11/span 2/span 2', top: '0px'}}>
                            <img src={line} alt='line'/>
                        </div>
                        <div className="checkbox" id='Confused' style={{gridArea: '14/13/span 2/span 2'}}>
                            {nodes && nodes.Confused ? <>
                                <div className='checked'>
                                    <img 
                                        src={Checked} 
                                        alt='checked'
                                        onClick={() => handleClick('Confused')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.sixtyeight.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={unchecked} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Confused')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="horizontal-line-dash"style={{gridArea: '14/15/span 2/span 2', top: '0px'}}>
                            <img src={line} alt='line'/>
                        </div>
                        <div className='corner-down-left' style={{gridArea: '14/16/span 2/span 2', width: '200px', top: '50px', left: '90px'}}>
                            <img src={corner} alt='corner' />
                        </div>
                        <div className="vertical-line-dash" style={{gridArea: '15/8/span 2/span 2', left: '-45px', top: '10px'}}>
                            <img src={line} alt='line' />
                        </div>
                        <div className="checkbox" id='Impatient' style={{gridArea: '15/9/span 2/span 2', top: '50px'}}>
                            {nodes && nodes.Impatient ? <>
                                <div className='checked'>
                                    <img 
                                        src={Checked} 
                                        alt='checked'
                                        onClick={() => handleClick('Impatient')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.sixtynine.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={unchecked} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Impatient')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="checkbox" id='Unflappable' style={{gridArea: '15/16/span 2/span 2', top: '50px', left: '90px'}}>
                            {nodes && nodes.Unflappable ? <>
                                <div className='checked'>
                                    <img 
                                        src={Checked} 
                                        alt='checked'
                                        onClick={() => handleClick('Unflappable')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.seventy.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={unchecked} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Unflappable')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="vertical-line-dash" style={{gridArea: '17/8/span 2/span 2', left: '-45px', top: '-45px'}}>
                            <img src={line} alt='line' />
                        </div>
                        <div className='corner-up-right' style={{gridArea: '17/9/span 2/span 2', width: '200px', left: '30px'}}>
                            <img src={corner} alt='corner' />
                        </div>
                        <div className="horizontal-line-dash"style={{gridArea: '17/11/span 2/span 2', top: '15px'}}>
                            <img src={line} alt='line'/>
                        </div>
                        <div className="checkbox" id='Dumbfounded' style={{gridArea: '17/13/span 2/span 2'}}>
                            {nodes && nodes.Dumbfounded ? <>
                                <div className='checked'>
                                    <img 
                                        src={Checked} 
                                        alt='checked'
                                        onClick={() => handleClick('Dumbfounded')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.seventyone.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={unchecked} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Dumbfounded')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="horizontal-line-dash"style={{gridArea: '17/15/span 2/span 2', top: '15px'}}>
                            <img src={line} alt='line'/>
                        </div>
                        <div className='corner-up-left' style={{gridArea: '17/16/span 2/span 2', width: '200px', left: '90px'}}>
                            <img src={corner} alt='corner' />
                        </div>
                        <div className="checkbox" id='InvasiveProcedures' style={{gridArea: '18/8/span 2/span 2', left: '-45px'}}>
                            {nodes && nodes.InvasiveProcedures ? <>
                                <div className='checked'>
                                    <img 
                                        src={Checked} 
                                        alt='checked'
                                        onClick={() => handleClick('InvasiveProcedures')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.seventytwo.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={unchecked} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Invasive Procedures')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="horizontal-line-dash"style={{gridArea: '18/9/span 2/span 2', top: '15px', left: '20px'}}>
                            <img src={line} alt='line'/>
                        </div>
                        <div className="horizontal-line-dash"style={{gridArea: '18/11/span 2/span 2', top: '15px', left: '-20px'}}>
                            <img src={line} alt='line'/>
                        </div>
                        <div className='corner-up-left' style={{gridArea: '18/13/span 2/span 2', width: '150px', left: '-45px', top: '35px'}}>
                            <img src={corner} alt='corner' />
                        </div>
                        <div className="vertical-line-dash" style={{gridArea: '19/13/span 2/span 2', top: '-45px'}}>
                            <img src={line} alt='line' />
                        </div>
                        <div className='corner-down-right' style={{gridArea: '20/9/span 2/span 2', left: '50px', top: '50px'}}>
                            <img src={corner} alt='corner' />
                        </div>
                        <div className="horizontal-line-dash"style={{gridArea: '20/11/span 2/span 2', left: '-40px'}}>
                            <img src={line} alt='line'/>
                        </div>
                        <div className="checkbox" id='Fickle' style={{gridArea: '20/13/span 2/span 2'}}>
                            {nodes && nodes.Fickle ? <>
                                <div className='checked'>
                                    <img 
                                        src={Checked} 
                                        alt='checked'
                                        onClick={() => handleClick('Fickle')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.seventythree.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={unchecked} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: Fickle')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="horizontal-line-dash"style={{gridArea: '20/15/span 2/span 2', left: '-30px'}}>
                            <img src={line} alt='line'/>
                        </div>
                        <div className='corner-down-left' style={{gridArea: '20/17/span 2/span 2', top: '50px'}}>
                            <img src={corner} alt='corner' />
                        </div>
                        <div className="checkbox" id='ANewDay' style={{gridArea: '21/9/span 2/span 2', top: '30px'}}>
                            {nodes && nodes.ANewDay ? <>
                                <div className='checked'>
                                    <img 
                                        src={Checked} 
                                        alt='checked'
                                        onClick={() => handleClick('ANewDay')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.seventyfour.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={unchecked} 
                                        title='No Symptoms'
                                        alt='unchecked' 
                                        onClick={() => handleClick('Hint: A New Day')} />
                                    <p className='no-symptoms'>No Symptoms</p>
                                </div>
                            </>}
                        </div>
                        <div className="checkbox" id='FinallyFree' style={{gridArea: '21/17/span 2/span 2', top: '30px'}}>
                            {nodes && nodes.FinallyFree ? <>
                                <div className='checked'>
                                    <img 
                                        src={Checked} 
                                        alt='checked'
                                        onClick={() => handleClick('FinallyFree')} 
                                    />
                                    <p className='symptom-found'>{ui.madnessNodes.seventyfive.title}</p>
                                </div> 
                            </>:<>
                                <div className='unchecked'>
                                    <img 
                                        src={unchecked} 
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
