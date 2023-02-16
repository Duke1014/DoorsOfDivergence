import React, { useState } from 'react'
import './grid.css'
// import { createEventDispatcher, onMount } from 'svelte';
import ContentPlot from './ContentPlot.js';
import { uiContent } from './lib/content.js';
import NodesContent from './NodesContent.js';

import GoldBlank from './img/gold-blank.png'
import Gold from './img/gold.png'
import RedBlank from './img/red-blank.png'
import Red from './img/red.png'
import BlueBlank from './img/blue-blank.png'
import Blue from './img/blue.png'


export default function Grid({ nodes, setShowCodePrompt }) {

    // const dispatch = createEventDispatcher();
    const [scrollStyle, setScrollStyle] = useState('')

    // export let nodes;
    // export let autoScrollTo;
    // export let addUnlockTo;

    let cpShow = false;
    let ui = uiContent;
    let activeNode = false;

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

    const testStyle = {
        gridArea: '2 / 13 / 4 / span 2'
    }

    const testStyle2 = {
        gridArea: '6 / 13 / 8 / span 2'
    }

    const testStyle3 = {
        gridArea: '6 / 18 / 8 / span 2'
    }

    const fuckinBullshit = {
        gridArea: '1 / 1 / 2 / 2'
    }

    // .heresy-grid .stamp .title {
    //     grid-area: 1/1/2/2;
    // }

    return (
    <div>
        <div>
        {/* <svelte:window bind:scrollY={scrollHeight} /> */}
        {/* <!-- <svelte:window on:load={() => autoscrollIntoView(autoScrollTo, 'end', 'center')} /> --> */}

            {cpShow ? <>
                <ContentPlot onCloseCP={() => (cpShow = false)}>
                    <NodesContent activeNode={activeNode} />
                </ContentPlot>
            </> : <></>}

            <section
                className="grid h-full font-archaic"
                // style={{scrollStyle}}
                // on:mousemove|once={() => autoscrollIntoView(autoScrollTo, 'end', 'center')}
                // on:load|once={() => autoscrollIntoView(autoScrollTo, 'end', 'center')}
            >
                <div className="flex flex-wrap justify-between w-full gap-5 p-8 text-3xl text-white">
                    <h1 className="z-10 text-6xl text-white">HERESY,<br />1897</h1>

                    <div className="flex gap-4 transition-all cursor-pointer group place-self-start place-items-center"
                        onClick={() => setShowCodePrompt(true)}
                    >
                        <h1>Enter Code</h1>
                        <div className="p-4 bg-white rounded-full bg-opacity-20 ">
                            <img
                                className="transition-transform rotate-0 group-hover:rotate-90"
                                src="img/key.svg"
                                alt="KEY"
                            />
                        </div>
                    </div>
                </div>
                <div
                    className="fixed bottom-0 left-0 right-0 z-20 p-2 m-auto text-center text-white transition-all bg-black border-t border-white pointer-events-none bg-opacity-30"
                >

                    {/* <span className=" lg:hidden">{ui.general.swipe}</span>
                    <span className="hidden lg:block">{ui.general.scroll}</span> */}
                </div>
                {/* <!-- {#if nodes} --> */}
                <div className="grid place-content-center">
                    <div className="trans-heresy" style={{gridArea: '1/1/2/2'}} />
                    <div
                        className="relative grid w-full h-full mx-auto heresy-grid"
                        style={{gridArea: '1/1/2/2'}}
                        id="scrollable"
                    >
                        <p />
                        <div className="stamp" style={{gridArea: '2/13/4/span 2'}} id="WelcomeToParadox">
                            {nodes && nodes.WelcomeToParadox ? <>
                                <img
                                    src={GoldBlank}
                                    alt="Stamp"
                                    onClick={() => {
                                        cpShow = true;
                                        activeNode = 'WelcomeToParadox';
                                    }}
                                />
                                <p className="w-2/3 text-2xl text-center text-white" style={{transform: 'translate(0px, -140px)'}}>{ui.nodes.one.title}</p>
                                {/* <img src={Gold} alt="Stamp" className="locked" /> */}
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
                        <div className="stamp" style={{gridArea: '6/13/8/span 2'}} id="AnInvitation">
                            {nodes && nodes.AnInvitation ? <>
                                <img
                                    src={GoldBlank}
                                    alt="Stamp"
                                    onClick={() => {
                                        cpShow = true;
                                        activeNode = 'AnInvitation';
                                    }}
                                />
                                <p className="w-2/3 text-2xl text-center text-white title" style={{transform: 'translate(0px, -120px)'}}>{ui.nodes.two.title}</p>
                                {/* <img src={Gold} alt="Stamp" className="locked" /> */}
                            </> : <>
                                <img
                                    className="disabled"
                                    title={ui.general.not_unlocked}
                                    src={Gold}
                                    alt="Stamp"
                                />
                            </>}
                        </div>
                        <div className="vertical-line" style={{gridArea: '7 / 13 / 11 / span 2'}} />
                        <div className="horizontal-line" style={{gridArea: '6 / 14 / 8 / 19'}} />
                        <div className="stamp" style={{gridArea: '6/18/8/span 2'}} id="Stubborn">
                            {nodes && nodes.Stubborn ? <>
                                <img
                                    src={{GoldBlank}}
                                    alt="Stamp"
                                    onClick={() => {
                                        cpShow = true;
                                        activeNode = 'Stubborn';
                                    }}
                                />
                                <p className="w-2/3 text-2xl text-center text-white title" style={{transform: 'translate(0px, -120px)'}}>{ui.nodes.three.title}</p>
                                {/* <img src={Gold} alt="Stamp" className="locked" /> */}
                            </> : <>
                                <img
                                    className="disabled"
                                    title={ui.general.not_unlocked}
                                    src={Gold}
                                    alt="Stamp"
                                />  
                            </>}
                        </div>
                        <div className="stamp" style={{gridArea: '10 / 5 / span 2 / span 4'}} id="SinsOfTheFather">
                            {nodes && nodes.SinsOfTheFather ? <>
                                <img
                                    src={RedBlank}
                                    alt="Stamp"
                                    onClick={() => {
                                        cpShow = true;
                                        activeNode = 'SinsOfTheFather';
                                    }}
                                />
                                <p className="w-2/3 text-2xl text-center text-white title" style={{transform: 'translate(0px, -120px)'}}>{ui.nodes.four.title}</p>
                                {/* <img src={Red} alt="Stamp" className="locked" /> */}
                            </> : <>
                                <img
                                    className="disabled"
                                    title={ui.general.not_unlocked}
                                    src={Red}
                                    alt="Stamp"
                                />
                            </>}
                        </div>
                        <div className="horizontal-line" style={{gridArea: '10 / 7 / 12 / 14'}} />
                        <div className="stamp" style={{gridArea: '10 / 13 / span 2 / span 2'}} id="ToTheNines">
                            {nodes && nodes.ToTheNines ? <>
                                <img
                                    src={GoldBlank}
                                    alt="Stamp"
                                    onClick={() => {
                                        cpShow = true;
                                        activeNode = 'ToTheNines';
                                    }}
                                />
                                <p className="w-2/3 text-2xl text-center text-white title" style={{transform: 'translate(0px, -120px)'}}>{ui.nodes.five.title}</p>
                                {/* <img src={Gold} alt="Stamp" className="locked" /> */}
                            </> : <>
                                <img
                                    className="disabled"
                                    title={ui.general.not_unlocked}
                                    src={Gold}
                                    alt="Stamp"
                                />
                            </>}
                        </div>
                        <div className="horizontal-line" style={{gridArea: '10 / 14 / 12 / 21'}}/>
                        <div className="stamp" style={{gridArea: '10 / 19 / span 2 / span 4'}} id="BeyondTheVeil">
                            {nodes && nodes.BeyondTheVeil ? <>
                                <img
                                    src={BlueBlank}
                                    alt="Stamp"
                                    onClick={() => {
                                        cpShow = true;
                                        activeNode = 'BeyondTheVeil';
                                    }}
                                />
                                <p className="w-2/3 text-2xl text-center text-white title" style={{transform: 'translate(0px, -130px)'}}>{ui.nodes.six.title}</p>
                                {/* <img src={Blue} alt="Stamp" className="locked" /> */}
                            </> : <>
                            <img
                                    className="disabled"
                                    title={ui.general.not_unlocked}
                                    src={Blue}
                                    alt="Stamp"
                                />
                            </>}
                        </div>
                        <div className="horizontal-line" style={{gridArea: '14 / 21 / 16 / 25'}} />
                        <div className="vertical-line" style={{gridArea: '13 / 24 / 15 / span 2'}}/>
                        <div className="stamp" style={{gridArea: '12 / 24 / span 2 / span 2'}} id="WhatWasLost">
                            {nodes && nodes.WhatWasLost ? <>
                                <img
                                    src={BlueBlank}
                                    alt="Stamp"
                                    onClick={() => {
                                        cpShow = true;
                                        activeNode = 'WhatWasLost';
                                    }}
                                />
                                <p className="w-2/3 text-2xl text-center text-white title" style={{transform: 'translate(0px, -120px)'}}>
                                    {ui.nodes.seven.title}
                                </p>
                                {/* <img src={Blue} alt="Stamp" className="locked" /> */}
                            </> : <>
                                <img
                                    className="disabled"
                                    title={ui.general.not_unlocked}
                                    src={Blue}
                                    alt="Stamp"
                                />
                            </>}
                        </div>
                        <div className="vertical-line" style={{gridArea: '11 / 6 / 15 / span 2'}} />
                        <div className="vertical-line" style={{gridArea: '11 / 6 / 13 / span 2', marginLeft: 'calc(var(--spacing) * 4)'}}/>
                        <div className="horizontal-line" style={{gridArea: '12 / 7 / 14 / 14', marginInline: 'calc(var(--spacing) * 2 - var(--border))'}}/>
                        <div className="vertical-line" style={{gridArea: '13 / 13 / 15 / span 2', marginRight: 'calc(var(--spacing) * 4)'}}/>
                        <div className="bg-red-100 stamp green" style={{gridArea: '14 / 5 / span 2 / span 4'}} id="PandorasBox">
                            {nodes && nodes.PandorasBox ? <>
                                <img
                                    src={RedBlank}
                                    alt="Stamp"
                                    onClick={() => {
                                        cpShow = true;
                                        activeNode = 'PandorasBox';
                                    }}
                                />
                                <p className="w-2/3 text-2xl text-center text-white title" style={{transform: 'translate(0px, -120px)'}}>
                                    {ui.nodes.eight.title}
                                </p>
                                {/* <img src={Red} alt="Stamp" className="locked" /> */}
                            </> : <>
                                <img
                                    className="disabled"
                                    title={ui.general.not_unlocked}
                                    src={Red}
                                    alt="Stamp"
                                />
                            </>}
                        </div>
                        <div className="horizontal-line" style={{gridArea: '14 / 7 / 16 / 14'}} />
                        <div className="horizontal-line" style={{gridArea: '14 / 14 / 16 / 21'}} />
                        <div className="bg-red-200 stamp red" style={{gridArea: '14 / 13 / span 2 / span 2'}} id="OutOfTime">
                            {nodes && nodes.OutOfTime ? <>
                                <img
                                    src={GoldBlank}
                                    alt="Stamp"
                                    onClick={() => {
                                        cpShow = true;
                                        activeNode = 'OutOfTime';
                                    }}
                                />
                                <p className="w-2/3 text-2xl text-center text-white title" style={{transform: 'translate(0px, -120px)'}}>{ui.nodes.nine.title}</p>
                                {/* <img src={Gold} alt="Stamp" className="locked" /> */}
                            </> : <>
                                <img
                                    className="disabled"
                                    title={ui.general.not_unlocked}
                                    src={Gold}
                                    alt="Stamp"
                                />
                            </>}
                        </div>
                        <div className="vertical-line" style={{gridArea: '11 / 20 / 15 / span 2'}} />
                        <div className="vertical-line" style={{gridArea: '11 / 20 / 13 / span 2', marginRight: 'calc(var(--spacing) * 4)'}}/>
                        <div className="horizontal-line" style={{gridArea: '12 / 14 / 14 / 21', marginInline: 'calc(var(--spacing) * 2 - var(--border))'}}/>
                        <div className="vertical-line" style={{gridArea: '13 / 13 / 15 / span 2', marginLeft: 'calc(var(--spacing) * 4)'}}/>
                        <div className="bg-red-300 stamp blue" style={{gridArea: '14 / 19 / span 2 / span 4'}} id="ASoulInLimbo">
                            {nodes && nodes.ASoulInLimbo ? <>
                                <img
                                    src={BlueBlank}
                                    alt="Stamp"
                                    onClick={() => {
                                        cpShow = true;
                                        activeNode = 'ASoulInLimbo';
                                    }}
                                />
                                <p className="w-2/3 text-2xl text-center text-white title" style={{transform: 'translate(0px, -120px)'}}>{ui.nodes.ten.title}</p>
                                {/* <img src={Blue} alt="Stamp" className="locked" /> */}
                            </> : <>
                                <img
                                    className="disabled"
                                    title={ui.general.not_unlocked}
                                    src={Blue}
                                    alt="Stamp"
                                />
                            </>}
                        </div>
                        <div className="horizontal-line" style={{gridArea: '14 / 5 / 16 / 7'}} />
                        <div className="vertical-line" style={{gridArea: '15 / 4 / 17 / span 2'}} />
                        <div className="bg-red-500 stamp green" style={{gridArea: '16 / 4 / span 2 / span 2'}} id="YouWereWarned">
                            {nodes && nodes.YouWereWarned ? <>
                                <img
                                    src={RedBlank}
                                    alt="Stamp"
                                    onClick={() => {
                                        cpShow = true;
                                        activeNode = 'YouWereWarned';
                                    }}
                                />
                                <p className="w-2/3 text-2xl text-center text-white title" style={{transform: 'translate(0px, -120px)'}}>
                                    {ui.nodes.eleven.title}
                                </p>
                                {/* <img src={Red} alt="Stamp" className="locked" /> */}
                            </> : <>
                                <img
                                    className="disabled"
                                    title={ui.general.not_unlocked}
                                    src={Red}
                                    alt="Stamp"
                                />
                            </>}
                        </div>
                        <div className="bg-red-700 stamp" style={{gridArea: '18 / 9 / span 2 / span 5'}} id="TrainingWheels">
                            {nodes && nodes.TrainingWheels ? <>
                                <img
                                    src={GoldBlank}
                                    alt="Stamp"
                                    onClick={() => {
                                        cpShow = true;
                                        activeNode = 'TrainingWheels';
                                    }}
                                />
                                <p className="w-2/3 text-2xl text-center text-white title" style={{transform: 'translate(0px, -120px)'}}>
                                    {ui.nodes.twelve.title}
                                </p>
                                {/* <img src={Gold} alt="Stamp" className="locked" /> */}
                            </> : <>
                                <img
                                    className="disabled"
                                    title={ui.general.not_unlocked}
                                    src={Gold}
                                    alt="Stamp"
                                />
                            </>}
                        </div>
                        <div className="bg-red-800 stamp" style={{gridArea: '18 / 14 / span 2 / span 5'}} id="YourOwnTwoFeet">
                            {nodes && nodes.YourOwnTwoFeet ? <>
                                <img
                                    src={GoldBlank}
                                    alt="Stamp"
                                    onClick={() => {
                                        cpShow = true;
                                        activeNode = 'YourOwnTwoFeet';
                                    }}
                                />
                                <p className="w-2/3 text-2xl text-center text-white title" style={{transform: 'translate(0px, -120px)'}}>
                                    {ui.nodes.thirteen.title}
                                </p>
                                {/* <img src={Gold} alt="Stamp" className="locked" /> */}
                            </> : <>
                                <img
                                    className="disabled"
                                    title={ui.general.not_unlocked}
                                    src={Gold}
                                    alt="Stamp"
                                />
                            </>}

                        </div>
                        <div className="vertical-line" style={{gridArea: '15 / 6 / 21 / span 2'}}/>
                        <div className="bg-green-800 stamp" style={{gridArea: '20 / 5 / span 2 / span 4'}} id="MachineOfBlood">
                            {nodes && nodes.MachineOfBlood ? <>
                                <img
                                    src={RedBlank}
                                    alt="Stamp"
                                    onClick={() => {
                                        cpShow = true;
                                        activeNode = 'MachineOfBlood';
                                    }}
                                />
                                <p className="w-2/3 text-2xl text-center text-white title" style={{transform: 'translate(0px, -120px)'}}>
                                    {ui.nodes.fourteen.title}
                                </p>
                                {/* <img src={Red} alt="Stamp" className="locked" /> */}
                            </> : <>
                                <img
                                    className="disabled"
                                    title={ui.general.not_unlocked}
                                    src={Red}
                                    alt="Stamp"
                                />
                            </>}
                        </div>
                        <div className="vertical-line" style={{gridArea: '15 / 20 / 21 / span 2'}} />
                        <div className="horizontal-line" style={{gridArea: '20 / 7 / 22 / 21'}} />
                        <div className="horizontal-line" style={{gridArea: '16 / 7 / 18 / 21', marginInline: 'calc(var(--spacing) * 2 - var(--border))'}}/>
                        <div className="vertical-line" style={{gridArea: '19 / 10 / 21 / span 2'}} />
                        <div className="vertical-line" style={{gridArea: '17 / 16 / 19 / span 2'}}/>
                        <div className="vertical-line" style={{gridArea: '21 / 13 / 23 / span 2'}} />
                        <div className="vertical-line" style={{gridArea: '17 / 20 / 21 / span 2', marginRight: 'calc(var(--spacing) * 4)'}}/>
                        <div className="vertical-line" style={{gridArea: '17 / 6 / 21 / span 2', marginLeft: 'calc(var(--spacing) * 4)'}}/>
                        <div className="bg-green-600 stamp" style={{gridArea: '20 / 19 / span 2 / span 4'}} id="ChainsThatBind">
                            {nodes && nodes.ChainsThatBind ? <>
                                <img
                                    src={BlueBlank}
                                    alt="Stamp"
                                    onClick={() => {
                                        cpShow = true;
                                        activeNode = 'ChainsThatBind';
                                    }}
                                />
                                <p className="w-2/3 text-2xl text-center text-white title" style={{transform: 'translate(0px, -120px)'}}>
                                    {ui.nodes.fifteen.title}
                                </p>
                                {/* <img src={Blue} alt="Stamp" className="locked" /> */}
                            </> : <>
                                <img
                                    className="disabled"
                                    title={ui.general.not_unlocked}
                                    src={Blue}
                                    alt="Stamp"
                                />
                            </>}
                        </div>
                        <div className="horizontal-line" style={{gridArea: '20 / 5 / span 2 / 7'}}/>
                        <div className="vertical-line" style={{gridArea: '21 / 4 / 23 / span 2'}}/>
                        <div className="horizontal-line" style={{gridArea: '22 / 3 / span 2 / 5'}} />
                        <div className="horizontal-line" style={{gridArea: '22 / 23 / span 2 / span 2'}} />
                        <div className="vertical-line" style={{gridArea: '21 / 22 / 23 / span 2'}} />
                        <div className="horizontal-line" style={{gridArea: '20 / 21 / span 2 / span 2'}} />
                        <div className="bg-green-400 stamp" style={{gridArea: '22 / 2 / span 2 / span 2'}} id="MorsExMachina">
                            {nodes && nodes.MorsExMachina ? <>
                                <img
                                    src={RedBlank}
                                    alt="Stamp"
                                    onClick={() => {
                                        cpShow = true;
                                        activeNode = 'MorsExMachina';
                                    }}
                                />
                                <p className="w-2/3 text-2xl text-center text-white title" style={{transform: 'translate(0px, -120px)'}}>
                                    {ui.nodes.sixteen.title}
                                </p>
                                <img src={Red} alt="Stamp" className="locked" />
                            </> : <>
                                <img
                                    className="disabled"
                                    title={ui.general.not_unlocked}
                                    src={Red}
                                    alt="Stamp"
                                />
                            </>}
                        </div>
                        <div className="bg-green-200 stamp" style={{gridArea: '22 / 24 / span 2 / span 2'}} id="Unbound">
                            {nodes && nodes.Unbound ? <>
                                <img
                                    src={BlueBlank}
                                    alt="Stamp"
                                    onClick={() => {
                                        cpShow = true;
                                        activeNode = 'Unbound';
                                    }}
                                />
                                <p className="w-2/3 text-2xl text-center text-white title" style={{transform: 'translate(0px, -120px)'}}>
                                    {ui.nodes.seventeen.title}
                                </p>
                                {/* <img src={Blue} alt="Stamp" className="locked" /> */}
                            </> : <>
                                <img
                                    className="disabled"
                                    title={ui.general.not_unlocked}
                                    src={Blue}
                                    alt="Stamp"
                                />
                            </>}
                        </div>
                        <div className="bg-blue-100 stamp" style={{gridArea: '22 / 13 / span 2 / span 2'}} id="GoodHousekeeping">
                            {nodes && nodes.GoodHousekeeping ? <>
                                <img
                                    src={GoldBlank}
                                    alt="Stamp"
                                    onClick={() => {
                                        cpShow = true;
                                        activeNode = 'GoodHousekeeping';
                                    }}
                                />
                                <p className="w-2/3 text-2xl text-center text-white title" style={{transform: 'translate(0px, -120px)'}}>
                                    {ui.nodes.eighteen.title}
                                </p>
                                {/* <img src={Gold} alt="Stamp" className="locked" /> */}
                            </> : <>
                                <img
                                    className="disabled"
                                    title={ui.general.not_unlocked}
                                    src={Gold}
                                    alt="Stamp"
                                />
                            </>}
                        </div>
                        <div className="vertical-line" style={{gridArea: '21 / 6 / 25 / span 2', marginRight: 'calc(var(--spacing) * 4)'}}/>
                        <div className="vertical-line" style={{gridArea: '21 / 6 / 25 / span 2', marginLeft: 'calc(var(--spacing) * 4)'}}/>
                        <div className="vertical-line" style={{gridArea: '21 / 20 / 25 / span 2', marginRight: 'calc(var(--spacing) * 4)'}}/>
                        <div className="vertical-line" style={{gridArea: '21 / 20 / 25 / span 2', marginLeft: 'calc(var(--spacing) * 4)'}}/>
                        <div className="vertical-line" style={{gridArea: '25 / 22 / 29 / span 2'}} />
                        <div className="vertical-line" style={{gridArea: '25 / 18 / 29 / span 2'}} />
                        <div className="vertical-line" style={{gridArea: '25 / 8 / 29 / span 2'}} />
                        <div className="vertical-line" style={{gridArea: '25 / 4 / 29 / span 2'}} />
                        <div className="horizontal-line" style={{gridArea: '24 / 5 / span 2 / 7', marginRight: 'calc(var(--spacing) * 2 - var(--border))'}}/>
                        <div className="horizontal-line" style={{gridArea: '24 / 7 / span 2 / 9', marginLeft: 'calc(var(--spacing) * 2 - var(--border))'}}/>
                        <div className="horizontal-line" style={{gridArea: '24 / 19 / span 2 / span 2', marginRight: 'calc(var(--spacing) * 2 - var(--border))'}}/>
                        <div className="horizontal-line" style={{gridArea: '24 / 21 / span 2 / span 2', marginLeft: 'calc(var(--spacing) * 2 - var(--border))'}}/>
                        <div className="bg-blue-900 stamp" style={{gridArea: '28 / 4 / span 2 / span 2'}} id="OutWithABang">
                            {nodes && nodes.OutWithABang ? <>
                                <img
                                    src={RedBlank}
                                    alt="Stamp"
                                    onClick={() => {
                                        cpShow = true;
                                        activeNode = 'OutWithABang';
                                    }}
                                />
                                <p className="w-2/3 text-2xl text-center text-white title" style={{transform: 'translate(0px, -120px)'}}>
                                    {ui.nodes.nineteen.title}
                                </p>
                                {/* <img src={Red} alt="Stamp" className="locked" /> */}
                            </> : <>
                                <img
                                    className="disabled"
                                    title={ui.general.not_unlocked}
                                    src={Red}
                                    alt="Stamp"
                                />
                            </>}
                        </div>
                        <div className="bg-blue-200 stamp" style={{gridArea: '28 / 8 / span 2 / span 2'}} id="DeathDeferred">
                            {nodes && nodes.DeathDeferred ? <>
                                <img
                                    src={RedBlank}
                                    alt="Stamp"
                                    onClick={() => {
                                        cpShow = true;
                                        activeNode = 'DeathDeferred';
                                    }}
                                />
                                <p className="w-2/3 text-2xl text-center text-white title" style={{transform: 'translate(0px, -120px)'}}>
                                    {ui.nodes.twenty.title}
                                </p>
                                {/* <img src={Red} alt="Stamp" className="locked" /> */}
                            </> : <>
                                <img
                                    className="disabled"
                                    title={ui.general.not_unlocked}
                                    src={Red}
                                    alt="Stamp"
                                />
                            </>}
                        </div>
                        <div className="bg-blue-500 stamp" style={{gridArea: '28 / 18 / span 2 / span 2'}} id="Misled">
                            {nodes && nodes.Misled ? <>
                                <img
                                    src={BlueBlank}
                                    alt="Stamp"
                                    onClick={() => {
                                        cpShow = true;
                                        activeNode = 'Misled';
                                    }}
                                />
                                <p className="w-2/3 text-2xl text-center text-white title" style={{transform: 'translate(0px, -120px)'}}>
                                    {ui.nodes.twentyone.title}
                                </p>
                                {/* <img src={Blue} alt="Stamp" className="locked" /> */}
                            </> : <>
                                <img
                                    className="disabled"
                                    title={ui.general.not_unlocked}
                                    src={Blue}
                                    alt="Stamp"
                                />
                            </>}
                        </div>
                        <div className="bg-blue-800 stamp" style={{gridArea: '28 / 22 / span 2 / span 2'}} id="BetterSafeThanSorry">
                            {nodes && nodes.BetterSafeThanSorry ? <>
                                <img
                                    src={BlueBlank}
                                    alt="Stamp"
                                    onClick={() => {
                                        cpShow = true;
                                        activeNode = 'BetterSafeThanSorry';
                                    }}
                                />
                                <p className="w-2/3 text-2xl text-center text-white title" style={{transform: 'translate(0px, -120px)'}}>
                                    {ui.nodes.twentytwo.title}
                                </p>
                                {/* <img src={Blue} alt="Stamp" className="locked" /> */}
                            </> : <>
                                <img
                                    className="disabled"
                                    title={ui.general.not_unlocked}
                                    src={Blue}
                                    alt="Stamp"
                                />
                            </>}
                        </div>
                        <div className="vertical-line" style={{gridArea: '29 / 22 / 31 / span 2', backgroundColor: 'transparent', backgroundImage: 'linear-gradient(white, white, transparent)'}}/>
                        <div className="vertical-line" style={{ gridArea: '29 / 18 / 31 / span 2', backgroundColor: 'transparent', backgroundImage: 'linear-gradient(white, white, transparent)'}}/>
                        <div className="vertical-line" style={{gridArea: '29 / 8 / 31 / span 2', backgroundColor: 'transparent', backgroundImage: 'linear-gradient(white, white, transparent)'}}/>
                        <div className="vertical-line" style={{gridArea: '29 / 4 / 31 / span 2', backgroundColor: 'transparent', backgroundImage: 'linear-gradient(white, white, transparent)'}}/>
                    </div>
                </div>
            </section>
            <div className="w-full pb-8 font-extrabold background-image: url(img/madness-bg.png); background-size: cover; background-position: top center; padding-top: 10vw;">
                <h1 className="z-10 px-8 text-6xl font-light font-family:'Typewriter','Courier New', Courier, monospace">
                    Madness,<br />1917
                </h1>
                <h3 className="max-w-xl px-8 text-xl font-light font-family:'Typewriter','Courier New', Courier, monospace">
                    The story continues onto chapter 2, but that is a chapter yet to be written.
                </h3>
            </div>
        </div>
    </div>
  )
}
