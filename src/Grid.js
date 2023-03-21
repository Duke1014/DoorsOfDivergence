import React, { useContext, useState } from 'react'
import './grid.css'
// import { createEventDispatcher, onMount } from 'svelte';
import ContentPlot from './ContentPlot.js';
// import ProgressBar from './ProgressBar';
import EnterCode from './EnterCode';
import { uiContent } from './lib/content.js';

import GoldBlank from './img/gold-blank.png'
import Gold from './img/gold.png'
import RedBlank from './img/red-blank.png'
import Red from './img/red.png'
import BlueBlank from './img/blue-blank.png'
import Blue from './img/blue.png'
import { UserContext } from './context/user';
import madnessBg from './img/madness-bg.png'
import DivergenceOne from './DivergenceOne';
import DivergenceTwo from './DivergenceTwo';
import DivergenceThree from './DivergenceThree';
import DivergenceFour from './DivergenceFour';

export default function Grid() {

    // const dispatch = createEventDispatcher();
    // const [scrollStyle, setScrollStyle] = useState('')
    const { nodes } = useContext(UserContext)
    const [cpShow, setCpShow] = useState(false)
    const [activeNode, setActiveNode] = useState()
    // const [mouseOver, setMouseOver] = useState(false)
    const [tabStyleOne, setTabStyleOne] = useState({})
    const [tabStyleTwo, setTabStyleTwo] = useState({})
    const [tabStyleThree, setTabStyleThree] = useState({})
    const [tabStyleFour, setTabStyleFour] = useState({})
    const [clickedTab, setClickedTab] = useState('')
    const [isHesitant, setIsHesitant] = useState(false)
    // export let nodes;
    // export let autoScrollTo;
    // export let addUnlockTo;

    let ui = uiContent;

    const handleTab = (tab) => {
        if (tab === 'one') {
            setClickedTab('one')
            setTabStyleOne({
                backgroundColor: 'rgb(238, 196, 119)',
                width: '36%'
            })
            setTabStyleTwo({width: '20%'})
            setTabStyleThree({width: '20%'})
            setTabStyleFour({width: '20%'})
        } else if (tab === 'two') {
            setClickedTab('two')
            setTabStyleOne({width: '20%'})
            setTabStyleTwo({
                backgroundColor: 'rgb(238, 196, 119)',
                width: '36%'
            })
            setTabStyleThree({width: '20%'})
            setTabStyleFour({width: '20%'})
        } else if (tab === 'three') {
            setClickedTab('three')
            setTabStyleOne({width: '20%'})
            setTabStyleTwo({width: '20%'})
            setTabStyleThree({
                backgroundColor: 'rgb(238, 196, 119)',
                width: '36%'
            })
            setTabStyleFour({width: '20%'})
        } else if (tab === 'four') {
            setClickedTab('four')
            setTabStyleOne({width: '20%'})
            setTabStyleTwo({width: '20%'})
            setTabStyleThree({width: '20%'})
            setTabStyleFour({
                backgroundColor: 'rgb(238, 196, 119)',
                width: '36%'
            })
        }
    }

    // $: document.body.classList[cpShow ? 'add' : 'remove']('noscroll');

    // $: autoScrollTo, autoscrollIntoView(autoScrollTo);
    // console.log(autoScrollTo);
    // $: addUnlockTo, addUnlockClass(addUnlockTo);

    // function scrollIntoView({ target }) {
    //     const el = document.querySelector(target.getAttribute('href'));
    //     if (!el) return;
    //     el.scrollIntoView({
    //         behavior: 'smooth',
    //         block: 'center',
    //         inline: 'center',
    //     });
    // }

    // function addUnlockClass(target) {
    //     if (target) {
    //         const el = document.querySelector(target);
    //         el.classList.add('unlock');
    //     }
    // }
    // function autoscrollIntoView(target, block, inline) {
    //     const el = document.querySelector(target);
    //     if (!el) return;
    //     if (arguments.length === 3) {
    //         el.scrollIntoView({
    //             behavior: 'smooth',
    //             block: block,
    //             inline: inline,
    //         });
    //     } else {
    //         el.scrollIntoView({
    //             behavior: 'smooth',
    //             block: 'center',
    //             inline: 'center',
    //         });
    //     }
    // }
    // let scrollHeight;
      // onMount(async () => {
    //     setTimeout(autoscrollIntoView(autoScrollTo, 'end', 'center'), 1200);
    // });
    // const handleScroll = (e) => {
    //     console.log(e.scrollHeight)
    //     if (e.scrollHeight > 200) {
    //         setScrollStyle({transform:'translate(0%, 100%)', opacity:'0'})
    //     } else {
    //         setScrollStyle({})
    //     }
    // }

    const handleClick = (nodeName) => {
        setCpShow(true)
        setActiveNode(nodeName)
    }

    let madnessMap = null

    switch (clickedTab) {
        case 'one':
            madnessMap = (
                <div>
                    <DivergenceOne setCpShow={setCpShow} setActiveNode={setActiveNode} />
                </div>
            )
        break;
        case 'two':
            madnessMap = (
                <div>
                    <DivergenceTwo setCpShow={setCpShow} setActiveNode={setActiveNode} />
                </div>
            )
        break;
        case 'three':
            madnessMap = (
                <div>
                    <DivergenceThree setCpShow={setCpShow} setActiveNode={setActiveNode} />
                </div>
            )
        break;
        case 'four':
            madnessMap = (
                <div>
                    <DivergenceFour setCpShow={setCpShow} setActiveNode={setActiveNode} setIsHesitant={setIsHesitant} />
                </div>
            )
        break;
        default:
        break;
    }
        
    return (
    <div>
        <div>
            {cpShow ? <>
                <ContentPlot setCpShow={setCpShow} activeNode={activeNode} isHesitant={isHesitant} />
            </> : <></>}
            <section className="grid h-full font-archaic">
                <div className="flex flex-wrap justify-between w-full gap-5 p-8 text-3xl text-white">
                    <h1 className="z-10 text-6xl text-white">HERESY,<br />1897</h1>
                    <EnterCode />
                </div>
                <div className="grid place-content-center">
                    <div className="trans-heresy" style={{gridArea: '1/1/2/2'}} />
                    <div
                        className="relative grid w-full h-full mx-auto heresy-grid"
                        style={{gridArea: '1/1/2/2'}}
                        id="scrollable"
                    >
                        {/* <div style={{gridArea: '1/1/2/2'}}>
                            <ProgressBar ui={ui} />
                        </div> */}
                        <p />
                        <div className="stamp" style={{gridArea: '2/13/4/span 2'}} id="WelcomeToParadox">
                            {nodes && nodes.WelcomeToParadox ? <>
                                <img
                                    src={GoldBlank}
                                    alt="Stamp"
                                    onClick={() => handleClick('WelcomeToParadox')}
                                />
                                <p className="w-2/3 text-2xl text-white title">{ui.nodes.one.title}</p>
                            </> : <>
                                <img
                                    className="disabled"
                                    title={ui.general.not_unlocked}
                                    src={GoldBlank}
                                    alt="Stamp"
                                />
                            </>}
                        </div>
                        <div className="vertical-line" style={{gridArea: '3 / 13 / 7 / span 2'}} />
                        <div className="stamp" style={{gridArea: '4/13/8/span 2'}} id="AnInvitation">
                            {nodes && nodes.AnInvitation ? <>
                                <img
                                    src={GoldBlank}
                                    alt="Stamp"
                                    onClick={() => handleClick('AnInvitation')}
                                />
                                <p className="text-2xl text-white title">{ui.nodes.two.title}</p>
                            </> : <>
                                <img
                                    className="disabled"
                                    title={ui.general.not_unlocked}
                                    src={Gold}
                                    alt="Stamp"
                                    onClick={() => handleClick('Hint: An Invitation')}
                                />
                            </>}
                        </div>
                        <div className="vertical-line" style={{gridArea: '4 / 13 / span 8 / span 2'}} />
                        <div className="horizontal-line" style={{gridArea: '4 / 14 / 8 / span 2'}} />
                        <div className="stamp" style={{gridArea: '4/15/span 4/span 2'}} id="Stubborn">
                            {nodes && nodes.Stubborn ? <>
                                <img
                                    src={GoldBlank}
                                    alt="Stamp"
                                    onClick={() => handleClick('Stubborn')}
                                />
                                <p className="w-2/3 text-2xl text-white title">{ui.nodes.three.title}</p>
                            </> : <>
                                <img
                                    className="disabled"
                                    title={ui.general.not_unlocked}
                                    src={Gold}
                                    alt="Stamp"
                                    onClick={() => handleClick('Hint: Stubborn')}
                                />  
                            </>}
                        </div>
                        <div className="stamp" style={{gridArea: '8 / 11 / span 2 / span 2'}} id="Theurgist">
                            {nodes && nodes.TrainingWheels ? <>
                                <img
                                    src={GoldBlank}
                                    alt="Stamp"
                                    onClick={() => handleClick('Theurgist')}
                                />
                                <p className="w-2/3 text-2xl text-white title">{ui.nodes.sixteen.title}</p>
                            </> : <>
                                <img
                                    className="disabled"
                                    title={ui.general.not_unlocked}
                                    src={Gold}
                                    alt="Stamp"
                                    onClick={() => handleClick('Hint: Theurgist')}
                                />
                            </>}
                            
                        </div>
                        <div className="horizontal-line"  style={{gridArea: '3 / 12 / 12 / span 4'}} />
                        <div className="stamp" style={{gridArea: '8 / 13 / span 2 / span 2'}} id="Divinator">
                            {nodes && nodes.YourOwnTwoFeet ? <>
                                <img
                                    src={GoldBlank}
                                    alt="Stamp"
                                    onClick={() => handleClick('Divinator')}
                                />
                                <p className="w-2/3 text-2xl text-white title">Divinator</p>
                            </> : <>
                            <img
                                    className="disabled"
                                    title={ui.general.not_unlocked}
                                    src={Gold}
                                    alt="Stamp"
                                    onClick={() => handleClick('Hint: Divinator')}
                                />
                            </>}
                        </div>
                        <div className="horizontal-line" style={{gridArea: '3 / 14 / 12 / span 2'}}/>
                        <div className="stamp" style={{gridArea: '8 / 15 / span 2 / span 2'}} id="BeyondTheVeil">
                            {nodes && nodes.YouWereWarned ? <>
                            <img
                                    src={GoldBlank}
                                    alt="Stamp"
                                    onClick={() => handleClick('Alchemist')}
                                />
                                <p className="w-2/3 text-2xl text-white title">{ui.nodes.ten.title}</p>
                            </> : <>
                                <img
                                    className="disabled"
                                    title={ui.general.not_unlocked}
                                    src={Gold}
                                    alt="Stamp"
                                    onClick={() => handleClick('Hint: Alchemist')}
                                />
                            </>}
                        </div>
                        <div className="bg-red-100 stamp green" style={{gridArea: '11 / 10 / span 2 / span 2'}} id="SinsOfTheFather">
                            {nodes && nodes.SinsOfTheFather ? <>
                                <img
                                    src={RedBlank}
                                    alt="Stamp"
                                    onClick={() => handleClick('SinsOfTheFather')}
                                />
                                <p className="w-2/3 text-2xl text-white title">{ui.nodes.four.title}</p>
                            </> : <>
                                <img
                                    className="disabled"
                                    title={ui.general.not_unlocked}
                                    src={Red}
                                    alt="Stamp"
                                    onClick={() => handleClick('Hint: Sins of the Father')}
                                />
                            </>}
                        </div>
                        <div className="bg-red-200 stamp red" style={{gridArea: '11 / 13 / span 2 / span 2'}} id="ToTheNines">
                            {nodes && nodes.ToTheNines ? <>
                                <img
                                    src={GoldBlank}
                                    alt="Stamp"
                                    onClick={() => handleClick('ToTheNines')}
                                />
                                <p className="w-2/3 text-2xl text-white title">{ui.nodes.six.title}</p>
                            </> : <>
                                <img
                                    className="disabled"
                                    title={ui.general.not_unlocked}
                                    src={Gold}
                                    alt="Stamp"
                                    onClick={() => handleClick('Hint: To The Nines')}
                                />
                            </>}
                        </div>
                        <div className="bg-red-300 stamp blue" style={{gridArea: '11 / 16 / span 2 / span 2'}} id="BeyondTheVeil">
                            {nodes && nodes.BeyondTheVeil ? <>
                                <img
                                    src={BlueBlank}
                                    alt="Stamp"
                                    onClick={() => handleClick('BeyondTheVeil')}
                                />
                                <p className="w-2/3 text-2xl text-white title">{ui.nodes.nine.title}</p>
                            </> : <>
                                <img
                                    className="disabled"
                                    title={ui.general.not_unlocked}
                                    src={Blue}
                                    alt="Stamp"
                                    onClick={() => handleClick('Hint: Beyond The Veil')}
                                />
                            </>}
                        </div>
                        <div className="bg-red-500 stamp green" style={{gridArea: '14 / 10 / span 2 / span 2'}} id="PandorasBox">
                            {nodes && nodes.PandorasBox ? <>
                                <img
                                    src={RedBlank}
                                    alt="Stamp"
                                    onClick={() => handleClick('PandorasBox')}
                                />
                                <p className="w-2/3 text-2xl text-white title" >{ui.nodes.eight.title}</p>
                            </> : <>
                                <img
                                    className="disabled"
                                    title={ui.general.not_unlocked}
                                    src={Red}
                                    alt="Stamp"
                                    onClick={() => handleClick('Hint: What Was Lost')}
                                />
                            </>}
                        </div>
                        <div className="bg-red-700 stamp" style={{gridArea: '14 / 13 / span 2 / span 2'}} id="OutOfTime">
                            {nodes && nodes.OutOfTime ? <>
                            <img
                                    src={GoldBlank}
                                    alt="Stamp"
                                    onClick={() => handleClick('OutOfTime')}
                                />
                                <p className="w-2/3 text-2xl text-white title">{ui.nodes.seven.title}</p>
                            </> : <>
                                <img
                                    className="disabled"
                                    title={ui.general.not_unlocked}
                                    src={Gold}
                                    alt="Stamp"
                                    onClick={() => handleClick('Hint: Out Of Time')}
                                />
                            </>}
                        </div>
                        <div className="stamp" style={{gridArea: '14 / 16 / span 2 / span 2'}} id="ASoulInLimbo">
                            {nodes && nodes.ASoulInLimbo ? <>
                                <img
                                    src={BlueBlank}
                                    alt="Stamp"
                                    onClick={() => handleClick('ASoulInLimbo')}
                                />
                                <p className="w-2/3 text-2xl text-white title">A Soul In Limbo</p>
                            </> : <>
                                <img
                                    className="disabled"
                                    title={ui.general.not_unlocked}
                                    src={Blue}
                                    alt="Stamp"
                                    onClick={() => handleClick('Hint: A Soul In Limbo')}
                                />
                            </>}
                        </div>
                        <div className="vertical-line" style={{gridArea: '7 / 14 / span 4 / 10', marginTop: 'calc(var(--spacing) * 6)', marginBottom: 'calc(var(--spacing) * 7)'}}/>
                        <div className="horizontal-line" style={{gridArea: '7 / 12 / 14 / 14'}}/>
                        <div className="vertical-line" style={{gridArea: '7 / 15 / span 4 / span 2', marginTop: 'calc(var(--spacing) * 6)', marginBottom: 'calc(var(--spacing) * 7)'}}/>
                        <div className="horizontal-line" style={{gridArea: '7 / 14 / 14 / span 2'}}/>
                        <div className="vertical-line" style={{gridArea: '13 / 13 / span 2 / span 2', marginRight: 'calc(var(--spacing) * 4)', marginTop: 'calc(var(--spacing) * 4)'}}/>
                        <div className="vertical-line" style={{gridArea: '13 / 13 / span 2 / span 2', marginLeft: 'calc(var(--spacing) * 4', marginTop: 'calc(var(--spacing) * 4)'}}/>
                        <div className="vertical-line" style={{gridArea: '12 / 10 / span 7 / span 2'}} />
                        <div className="vertical-line" style={{gridArea: '12 / 16 / span 7 / span 2'}} />
                        <div className="horizontal-line" style={{gridArea: '8 / 11 / 16 / span 3'}} />
                        <div className="horizontal-line" style={{gridArea: '8 / 14 / 16 / span 3'}} />
                        <div className="horizontal-line" style={{gridArea: '10 / 11 / 16 / span 3', marginLeft: 'calc(var(--spacing) * 4)', marginTop: 'calc(var(--spacing) * 9)', marginRight: 'calc(var(--spacing) * 2)'}} />
                        <div className="horizontal-line" style={{gridArea: '10 / 14 / 16 / span 3', marginLeft: 'calc(var(--spacing) * 2)', marginTop: 'calc(var(--spacing) * 9)', marginRight: 'calc(var(--spacing) * 4)'}} />
                        <div className="vertical-line" style={{gridArea: '12 / 10 / 14 / span 2', marginLeft: 'calc(var(--spacing) * 8', marginBottom:'calc(var(--spacing) * 8'}} />
                        <div className="vertical-line" style={{gridArea: '12 / 16 / 14 / span 2', marginRight: 'calc(var(--spacing) * 8', marginBottom:'calc(var(--spacing) * 8'}} />
                        <div className="horizontal-line" style={{gridArea: '14 / 11 / 16 / span 3'}} />
                        <div className="horizontal-line" style={{gridArea: '14 / 14 / 16 / span 3'}} />
                        <div className="horizontal-line" style={{gridArea: '15 / 11 / span 2 / span 6', marginLeft: 'calc(var(--spacing) * 4)', marginTop: 'calc(var(--spacing) * 10)', marginRight: 'calc(var(--spacing) * 4)'}} />
                        <div className="horizontal-line" style={{gridArea: '18 / 10 / span 2 / span 8'}} />
                        <div className="vertical-line" style={{gridArea: '16 / 14 / span 2 / span 3', marginRight: 'calc(var(--spacing) * 14)', marginTop: 'calc(var(--spacing) * 5)'}} />
                        <div className="vertical-line" style={{gridArea: '16 / 9 / span 3 / span 3', marginTop: 'calc(var(--spacing) * 5)', marginLeft: 'calc(var(--spacing) * 24)'}} />
                        <div className="vertical-line" style={{gridArea: '16 / 16 / span 3 / span 3', marginRight: 'calc(var(--spacing) * 24)', marginTop: 'calc(var(--spacing) * 5)'}} />
                        <div className="vertical-line" style={{gridArea: '18 / 12 / 19 / span 3', marginRight: 'calc(var(--spacing) * 14)', marginTop: 'calc(var(--spacing) * 5)'}} />
                        <div className="bg-blue-100 stamp" style={{gridArea: '17 / 12 / span 2 / span 2'}} id="WhatWasLost">
                            {nodes && nodes.WhatWasLost ? <>
                                <img
                                    src={GoldBlank}
                                    alt="Stamp"
                                    onClick={() => handleClick('WhatWasLost')}
                                />
                                <p className="w-2/3 text-2xl text-white title">{ui.nodes.eleven.title}</p>
                            </> : <>
                                <img
                                    className="disabled"
                                    title={ui.general.not_unlocked}
                                    src={Gold}
                                    alt="Stamp"
                                    onClick={() => handleClick('Hint: What Was Lost')}
                                />
                            </>}
                        </div>
                        <div className="bg-red-800 stamp" style={{gridArea: '17 / 14 / span 2 / span 2'}} id="Honesty">
                            {nodes && nodes.GoodHousekeeping ? <>
                                <img
                                    src={GoldBlank}
                                    alt="Stamp"
                                    onClick={() => handleClick('Honesty')}
                                />
                                <p className="w-2/3 text-2xl text-white title">{ui.nodes.eighteen.title}</p>
                            </> : <>
                                <img
                                    className="disabled"
                                    title={ui.general.not_unlocked}
                                    src={Gold}
                                    alt="Stamp"
                                    onClick={() => handleClick('Hint: Honesty')}
                                />
                            </>}
                        </div>
                        <div className="vertical-line" style={{gridArea: '19 / 9 / 21 / span 3', marginRight: 'calc(var(--spacing) * 15)'}} />
                        <div className="vertical-line" style={{gridArea: '19 / 17 / 21 / span 3', marginRight: 'calc(var(--spacing) * 14)'}} />
                        <div className="horizontal-line" style={{gridArea: '20 / 9 / span 2 / span 1'}} />
                        <div className="horizontal-line" style={{gridArea: '20 / 18 / span 2 / span 1', marginLeft: 'calc(var(--spacing) * 0.5)'}} />
                        <div className="bg-green-800 stamp" style={{gridArea: '20 / 8 / span 2 / span 2'}} id="MorsExMachina">
                            {nodes && nodes.MorsExMachina ? <>
                                <img
                                    src={RedBlank}
                                    alt="Stamp"
                                    onClick={() => handleClick('MorsExMachina')}
                                />
                                <p className="w-2/3 text-2xl text-white title">{ui.nodes.fourteen.title}</p>
                            </> : <>
                                <img
                                    className="disabled"
                                    title={ui.general.not_unlocked}
                                    src={Red}
                                    alt="Stamp"
                                    onClick={() => handleClick('Hint: Mors Ex Machina')}
                                />
                            </>}
                        </div>
                        <div className="vertical-line" style={{gridArea: '19 / 10 / span 3 / span 2', marginRight: 'calc(var(--spacing) * 4'}} />
                        <div className="vertical-line" style={{gridArea: '19 / 10 / span 3 / span 2', marginLeft: 'calc(var(--spacing) * 4'}} />
                        <div className="vertical-line" style={{gridArea: '19 / 16 / span 3 / span 2', marginRight: 'calc(var(--spacing) * 4'}} />
                        <div className="vertical-line" style={{gridArea: '19 / 16 / span 3 / span 2', marginLeft: 'calc(var(--spacing) * 4'}} />
                        <div className="vertical-line" style={{gridArea: '22 / 9 / span 2 / span 2'}} />
                        <div className="vertical-line" style={{gridArea: '22 / 11 / span 2 / span 2'}} />
                        <div className="vertical-line" style={{gridArea: '22 / 15 / span 2 / span 2'}} />
                        <div className="vertical-line" style={{gridArea: '22 / 17 / span 2 / span 2'}} />
                        <div className="horizontal-line" style={{gridArea: '21 / 10 / span 2 / span 1', marginRight: 'calc(var(--spacing) * 2'}} />
                        <div className="horizontal-line" style={{gridArea: '21 / 11 / span 2 / span 1', marginLeft: 'calc(var(--spacing) * 2'}} />
                        <div className="horizontal-line" style={{gridArea: '21 / 16 / span 2 / span 1', marginRight: 'calc(var(--spacing) * 2'}} />
                        <div className="horizontal-line" style={{gridArea: '21 / 17 / span 2 / span 1', marginLeft: 'calc(var(--spacing) * 2'}} />
                        <div className="bg-green-400 stamp" style={{gridArea: '18 / 10 / span 2 / span 2'}} id="MachineOfBlood">
                            {nodes && nodes.MachineOfBlood ? <>
                                <img
                                    src={RedBlank}
                                    alt="Stamp"
                                    onClick={() => handleClick('MachineOfBlood')}
                                />
                                <p className="w-2/3 text-2xl text-white title" >{ui.nodes.twelve.title}</p>
                            </> : <>
                                <img
                                    className="disabled"
                                    title={ui.general.not_unlocked}
                                    src={Red}
                                    alt="Stamp"
                                    onClick={() => handleClick('Hint: Machine Of Blood')}
                                />
                            </>}
                        </div>
                        <div className="bg-green-600 stamp" style={{gridArea: '18 / 16 / span 2 / span 2'}} id="Unbound">
                            {nodes && nodes.ChainsThatBind ? <>
                            <img
                                    src={BlueBlank}
                                    alt="Stamp"
                                    onClick={() => handleClick('ChainsThatBind')}
                                />
                                <p className="w-2/3 text-2xl text-white title">{ui.nodes.thirteen.title}</p>
                            </> : <>
                                <img
                                    className="disabled"
                                    title={ui.general.not_unlocked}
                                    src={Blue}
                                    alt="Stamp"
                                    onClick={() => handleClick('Hint: Chains That Bind')}
                                />
                            </>}
                        </div>
                        <div className="bg-green-200 stamp" style={{gridArea: '20 / 18 / span 2 / span 2'}} id="Oracle">
                            {nodes && nodes.Unbound ? <>
                                <img
                                    src={BlueBlank}
                                    alt="Stamp"
                                    onClick={() => handleClick('Unbound')}
                                />
                                <p className="w-2/3 text-2xl text-white title" >{ui.nodes.fifteen.title}</p>
                            </> : <>
                                <img
                                    className="disabled"
                                    title={ui.general.not_unlocked}
                                    src={Blue}
                                    alt="Stamp"
                                    onClick={() => handleClick('Hint: Unbound')}
                                />
                            </>}
                        </div>
                        <div className="bg-blue-900 stamp" style={{gridArea: '23 / 9 / span 2 / span 2'}} id="OutWithABang">
                            {nodes && nodes.OutWithABang ? <>
                                <img
                                    src={RedBlank}
                                    alt="Stamp"
                                    onClick={() => handleClick('OutWithABang')}
                                />
                                <p className="w-2/3 text-2xl text-white title">{ui.nodes.nineteen.title}</p>
                            </> : <>
                                <img
                                    className="disabled"
                                    title={ui.general.not_unlocked}
                                    src={Red}
                                    alt="Stamp"
                                    onClick={() => handleClick('Hint: Out With A Bang')}
                                />
                            </>}
                        </div>
                        <div className="bg-blue-200 stamp" style={{gridArea: '23 / 11 / span 2 / span 2'}} id="DeathDeferred">
                            {nodes && nodes.DeathDeferred ? <>
                                <img
                                    src={RedBlank}
                                    alt="Stamp"
                                    onClick={() => handleClick('DeathDeferred')}
                                />
                                <p className="w-2/3 text-2xl text-white title">{ui.nodes.twenty.title}</p>
                            </> : <>
                                <img
                                    className="disabled"
                                    title={ui.general.not_unlocked}
                                    src={Red}
                                    alt="Stamp"
                                    onClick={() => handleClick('Hint: Death Deferred')}
                                />
                            </>}
                        </div>
                        <div className="bg-blue-500 stamp" style={{gridArea: '23 / 15 / span 2 / span 2'}} id="Broken Chains">
                            {nodes && nodes.Misled ? <>
                                <img
                                    src={BlueBlank}
                                    alt="Stamp"
                                    onClick={() => handleClick('Misled')}
                                />
                                <p className="w-2/3 text-2xl text-white title">{ui.nodes.twentyone.title}</p>
                            </> : <>
                                <img
                                    className="disabled"
                                    title={ui.general.not_unlocked}
                                    src={Blue}
                                    alt="Stamp"
                                    onClick={() => handleClick('Hint: Misled')}
                                />
                            </>}
                        </div>
                        <div className="bg-blue-800 stamp" style={{gridArea: '23 / 17 / span 2 / span 2'}} id="BetterSafeThanSorry">
                            {nodes && nodes.BetterSafeThanSorry ? <>
                                <img
                                    src={BlueBlank}
                                    alt="Stamp"
                                    onClick={() => handleClick('BetterSafeThanSorry')}
                                />
                                <p className="w-2/3 text-2xl text-white title">{ui.nodes.twentytwo.title}</p>
                            </> : <>
                                <img
                                    className="disabled"
                                    title={ui.general.not_unlocked}
                                    src={Blue}
                                    alt="Stamp"
                                    onClick={() => handleClick('Hint: Better Safe Than Sorry')}
                                />
                            </>}
                        </div>
                        <div className="vertical-line" style={{gridArea: '24 / 15 / span 4 / span 2', backgroundColor: 'transparent', backgroundImage: 'linear-gradient(white, white, transparent)'}}/>
                        <div className="vertical-line" style={{gridArea: '24 / 17 / span 4 / span 2', backgroundColor: 'transparent', backgroundImage: 'linear-gradient(white, white, transparent)'}}/>
                        <div className="vertical-line" style={{gridArea: '24 / 9 / span 4 / span 2', backgroundColor: 'transparent', backgroundImage: 'linear-gradient(white, white, transparent)'}}/>
                        <div className="vertical-line" style={{gridArea: '24 / 11 / span 4 / span 2', backgroundColor: 'transparent', backgroundImage: 'linear-gradient(white, white, transparent)'}}/>
                    </div>
                </div>
            </section>
            <div 
                className="w-full p-8 font-extrabold padding-top: 10vh madness"
                style={{backgroundImage: `url(${madnessBg})`, backgroundSize: '100% 100%', backgroundPosition: 'top center', backgroundRepeat: 'no-repeat'
                    // , backgroundAttachment: 'fixed'
                }}
            >
                <h1 className="z-10 px-8 text-6xl font-light madness-title" style={{paddingTop: '100px'}}>
                    Madness,<br />1917
                </h1>
                {/* <div className='w-full min-h-10' /> */}
                <div className='flex flex-wrap justify-between w-full px-8 pt-8 text-4xl madness-tab-container'>
                    {nodes.OutWithABang || nodes.AlienistInTraining ? <>
                        <span
                            className='text-3xl madness-tab'
                            onClick={() => handleTab('one')}     
                            style={tabStyleOne}   
                        >Elixirs and Alienists</span>
                    </>:<>
                        <span
                            className='text-3xl redacted'
                            onClick={() => handleClick('TabOne')}     
                            style={tabStyleOne}
                        >REDACTED</span>
                    </>}
                    {nodes.DeathDeferred || nodes.MissionOfMercy ? <>
                        <span 
                            className='text-3xl madness-tab'
                            onClick={() => handleTab('two')}     
                            style={tabStyleTwo}   
                        >On the Bleeding Edge</span>
                    </>:<>
                        <span
                            className='text-3xl redacted'
                            onClick={() => handleClick('TabTwo')}
                            style={tabStyleTwo}
                        >REDACTED</span>
                    </>}
                    {nodes.Misled || nodes.UnhingedBehavior ? <>
                        <span
                            className='text-3xl madness-tab'
                            onClick={() => handleTab('three')}   
                            style={tabStyleThree}
                        >Inner Demons</span>
                    </>:<>
                        <span
                            className='text-3xl redacted'
                            onClick={() => handleClick('TabThree')}
                            style={tabStyleThree}
                        >REDACTED</span>
                    </>}
                    {nodes.BetterSafeThanSorry || nodes.ALead ? <>
                        <span 
                            className='text-3xl madness-tab'
                            onClick={() => handleTab('four')}    
                            style={tabStyleFour}  
                        >A Voice in the Veil</span>
                    </>:<>
                        <span
                            className='text-3xl redacted'
                            onClick={() => handleClick('TabFour')} 
                            style={tabStyleFour}
                        >REDACTED</span>
                    </>}
                </div>
                
                {/* <h3 className="max-w-xl px-8 text-xl font-light font-family:'Typewriter','Courier New', Courier, monospace">
                    The story continues onto chapter 2, but that is a chapter yet to be written.
                </h3> */}
            </div>
            {madnessMap}
        </div>
    </div>
  )
}
