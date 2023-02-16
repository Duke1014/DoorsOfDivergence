import React, { useState } from 'react'

import ContentPlot from './ContentPlot.js';
import { uiContent } from './lib/content.js';
import NodesContent from './NodesContent.js';

    // export let nodes;
    // export let autoScrollTo;
    // export let addUnlockTo;
    
    let cpShow = false;
    let ui = uiContent;
    // let activeNode = false;

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
    //     if (arguments.length == 3) {
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
    let scrollHeight;

    // onMount(async () => {
    //     setTimeout(autoscrollIntoView(autoScrollTo, 'end', 'center'), 1200);
    // });

    let select = 1;

export default function Grid_Div1({ nodes }) {

    const [activeNode, setActiveNode] = useState('')

    return (
        <div>

            {/* <svelte:window bind:scrollY={scrollHeight} /> */}
            {/* <!-- <svelte:window on:load={() => autoscrollIntoView(autoScrollTo, 'end', 'center')} /> --> */}
            {cpShow ? <>
                <ContentPlot onCloseCP={() => (cpShow = false)}>
                    <NodesContent activeNode={activeNode} />
                </ContentPlot>
            </> : <></>}

            <div className="div1_wrap">
                <section
                    className="grid h-full font-remington"
                    // on:mousemove|once={() => autoscrollIntoView(autoScrollTo, 'end', 'center')}
                    // on:load|once={() => autoscrollIntoView(autoScrollTo, 'end', 'center')}
                >
                    <div className="sticky top-0 z-10 flex flex-wrap justify-center w-full gap-5 p-8 text-3xl text-black sm:justify-between">
                        <div className="text-center ">
                            <h1 className="z-10 text-6xl text-black">MADNESS, 1917</h1>
                            <h2>Divergence 1: <br />ELIXIRS AND ALIENISTS</h2>
                        </div>

                        <div className="flex gap-4 transition-all cursor-pointer group place-self-start place-items-center"
                            // onClick={() => dispatch('codePrompt', true)}
                        >
                            <h1>Enter Code</h1>
                            <div className="p-4 border-2 border-black rounded-full bg-opacity-20 ">
                                <img
                                    className="transition-transform rotate-0 group-hover:rotate-90"
                                    src="img/key_black.svg"
                                    alt="Stamp"
                                />
                            </div>
                        </div>
                    </div>
                    <div
                        className="fixed bottom-0 left-0 right-0 z-20 p-2 m-auto text-center text-white transition-all bg-black border-t border-white pointer-events-none bg-opacity-30"
                        // style={scrollHeight > 200 ? 'transform:translate(0,100%); opacity:0' : ''}
                    >
                        <span className=" lg:hidden">{ui.general.swipe}</span>
                        <span className="hidden lg:block">{ui.general.scroll}</span>
                    </div>
                    {/* <!-- {#if nodes} --> */}
                    <div className="grid place-content-center">
                        <div className="trans-heresy grid-area:1/1/2/2 ;" />
                        <div
                            className="relative grid w-full h-full mx-auto heresy-grid grid-area:1/1/2/2;"
                            id="scrollable"
                        >
                            <p />
                            {/* <!-- Generator: Adobe Illustrator 26.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  --> */}
                            <svg
                                version="1.1"
                                id="Layer_1"
                                xmlns="http://www.w3.org/2000/svg"
                                // xmlns:xlink="http://www.w3.org/1999/xlink"
                                x="0px"
                                y="0px"
                                height="100"
                                viewBox="0 0 200 80"
                                // style={"enable-background:new 0 0 200 80;"}
                                // xml:space="preserve"
                            >
                                {/* <style type="text/css">
                                    {/* .st0 {
                                        fill: #3ce1bb;
                                    } */}
                                {/* </style> */} 
                                {select === 1 || select === 4 || select === 5 ? <>
                                <path
                                    className="st0 animate-pulse animate-bounce"
                                    d="M58,57.5H46.6v-28c0-0.2-0.1-0.3-0.2-0.4c-0.1-0.1-0.3-0.2-0.4-0.2h-3c-0.2,0-0.3,0.1-0.4,0.2s-0.2,0.3-0.2,0.4
                                    v28H7.2L38.8,2.7c0.1-0.2,0.1-0.3,0-0.5C38.8,2.1,38.6,2,38.4,2h-3.2c-0.3,0-0.6,0.2-0.8,0.5l-32.9,57c-0.1,0.2-0.1,0.5-0.1,0.8v0.5
                                    c0,0.2,0,0.3,0.1,0.5c0.1,0.2,0.2,0.2,0.4,0.2h40.7v16c0,0.2,0.1,0.3,0.2,0.4c0.1,0.1,0.3,0.2,0.4,0.2h3c0.2,0,0.3-0.1,0.4-0.2
                                    c0.1-0.1,0.2-0.3,0.2-0.4v-16H58c0.2,0,0.4-0.1,0.5-0.2c0.1-0.2,0.2-0.3,0.2-0.5V58c0-0.2-0.1-0.3-0.2-0.4
                                    C58.4,57.5,58.2,57.5,58,57.5z"
                                />
                                </> : <></>}
            
                                {select === 2 || select === 4 || select === 5 ? <>
                                <path
                                    className="st0"
                                    d="M198.6,57.6c-0.1-0.1-0.3-0.2-0.5-0.2h-11.4v-28c0-0.2-0.1-0.3-0.2-0.4s-0.3-0.2-0.4-0.2h-3
                                    c-0.2,0-0.3,0.1-0.4,0.2c-0.1,0.1-0.2,0.3-0.2,0.4v28h-35.2l31.6-54.8c0.1-0.2,0.1-0.3,0-0.5c-0.1-0.2-0.2-0.2-0.5-0.2h-3.2
                                    c-0.3,0-0.6,0.2-0.8,0.5l-32.9,57c-0.1,0.2-0.1,0.5-0.1,0.8v0.5c0,0.2,0,0.3,0.1,0.5c0.1,0.2,0.2,0.2,0.4,0.2h40.7v16
                                    c0,0.2,0.1,0.3,0.2,0.4c0.1,0.1,0.3,0.2,0.4,0.2h3c0.2,0,0.3-0.1,0.4-0.2c0.1-0.1,0.2-0.3,0.2-0.4v-16h11.4c0.2,0,0.4-0.1,0.5-0.2
                                    c0.1-0.2,0.2-0.3,0.2-0.5V58C198.8,57.9,198.7,57.7,198.6,57.6z"
                                />
                                </> : <></>}

                                {select === 3 || select === 5 ? <>
                                    <path
                                        className="st0"
                                        d="M139.6,38c0-0.7-0.1-1.3-0.2-2c0-0.3-0.1-0.7-0.1-1c-0.1-0.6-0.2-1.2-0.3-1.9c-0.1-0.3-0.1-0.7-0.2-1
                                        c-0.1-0.3-0.1-0.6-0.2-0.9c0,0,0,0,0,0c-1.7-7.1-5.1-13.4-10.4-18.8l0,0C114.4-1.9,90.1-3.1,74.9,10.4c-17.1,14.3-18.1,41.8-2,57.3
                                        l0,0c4.9,4.9,10.6,8.1,17,10c0.7,0.2,1.4,0.4,2.1,0.5c0.6,0.2,1.4,0.3,2,0.4l0.2,0c1,0.2,2.6,0.3,3.6,0.4l2.8,0.1
                                        c21.1,0.4,39.6-18.1,39.1-39.2h0C139.7,39.3,139.7,38.7,139.6,38z M80.7,69.4c0.3,0.2,0.5,0.3,0.8,0.5c-0.1-0.1-0.3-0.2-0.4-0.2
                                        C80.9,69.6,80.8,69.5,80.7,69.4z M98,75.4C98,75.4,98,75.4,98,75.4c-0.6,0-1.1-0.1-1.6-0.2c-0.5-0.1-1.1-0.1-1.6-0.2
                                        c-0.3,0-0.5-0.1-0.8-0.1c-0.3,0-0.5-0.1-0.8-0.2c-0.3,0-0.5-0.1-0.8-0.2c-0.3-0.1-0.5-0.1-0.8-0.2c-0.3-0.1-0.5-0.1-0.8-0.2
                                        c-0.2,0-0.4-0.1-0.6-0.2c-0.2,0-0.3-0.1-0.5-0.1c-0.2-0.1-0.5-0.1-0.7-0.2c-0.5-0.2-1-0.3-1.5-0.5c0,0,0,0-0.1,0c0,0,0,0,0,0
                                        c-0.3-0.1-0.5-0.2-0.8-0.3c-0.3-0.1-0.5-0.2-0.8-0.3c-0.8-0.3-1.5-0.7-2.3-1.1c-0.2-0.1-0.5-0.3-0.7-0.4c-0.1,0-0.2-0.1-0.2-0.1
                                        c-0.1,0-0.1-0.1-0.2-0.1c-0.1-0.1-0.2-0.1-0.3-0.2c-0.2-0.1-0.5-0.3-0.7-0.5c0.4,0.2,0.7,0.4,1.1,0.6c0.4,0.2,0.7,0.4,1.1,0.6
                                        c-2.5-1.4-4.8-3-6.9-4.9l4.2-4.2c1.4,1.3,3,2.4,4.6,3.3c0.4,0.2,0.8,0.5,1.2,0.7c0.2,0.1,0.3,0.2,0.5,0.3c0.2,0.1,0.5,0.2,0.8,0.4
                                        c0.1,0.1,0.3,0.1,0.4,0.2c0.3,0.1,0.6,0.3,0.9,0.4c0.2,0.1,0.4,0.2,0.7,0.3c0.2,0.1,0.4,0.2,0.7,0.2c0.2,0.1,0.4,0.2,0.7,0.2
                                        c0.2,0.1,0.4,0.1,0.6,0.2c0.2,0.1,0.4,0.1,0.6,0.2c0.2,0.1,0.4,0.1,0.6,0.2c0.2,0.1,0.4,0.1,0.6,0.1c0.6,0.1,1.1,0.3,1.7,0.4
                                        c0.2,0,0.4,0.1,0.5,0.1c0.1,0,0.3,0,0.4,0.1c0.2,0,0.3,0,0.5,0.1c0.3,0,0.5,0.1,0.8,0.1c0.2,0,0.4,0,0.7,0.1l0.2,0v6
                                        C98.5,75.4,98.2,75.4,98,75.4z M125.7,65.1c-6.5,6.5-14.8,9.9-23.3,10.3v-6c1.9-0.1,3.9-0.4,5.8-0.9l-0.9-3.5
                                        c-2.2,0.6-4.5,0.9-6.7,0.9v0c-1.4,0-2.9-0.1-4.3-0.4c-0.3,0-0.5-0.1-0.8-0.1c-0.3,0-0.5-0.1-0.8-0.2c-0.2,0-0.3-0.1-0.5-0.1
                                        c-0.5-0.1-0.9-0.2-1.4-0.4c-0.1,0-0.2-0.1-0.4-0.1c-0.1,0-0.2-0.1-0.4-0.1c-0.2-0.1-0.5-0.2-0.7-0.3c-0.3-0.1-0.7-0.3-1-0.4
                                        c-0.3-0.1-0.5-0.2-0.8-0.3c-0.3-0.1-0.5-0.3-0.8-0.4c-0.2-0.1-0.3-0.2-0.5-0.3c-0.2-0.1-0.4-0.2-0.6-0.3c-0.3-0.2-0.7-0.4-1-0.6
                                        c-0.1-0.1-0.2-0.1-0.3-0.2c-0.3-0.2-0.6-0.4-0.9-0.6c-0.2-0.1-0.4-0.3-0.6-0.4c-0.2-0.2-0.5-0.4-0.7-0.5c-0.2-0.2-0.4-0.3-0.6-0.5
                                        c-0.2-0.2-0.4-0.4-0.6-0.5c-0.2-0.2-0.4-0.4-0.6-0.6c-1.6-1.6-3-3.4-4.2-5.4L75,54.8c1,1.7,2.2,3.3,3.4,4.8l-4.2,4.2
                                        C68.5,57.5,65,49.1,65,40v0c0-4.6,0.9-8.9,2.4-12.9c1.6-4,3.9-7.7,6.7-10.8l4.2,4.2c-1.3,1.5-2.4,3.1-3.4,4.8l0,0
                                        c-1.3,2.2-2.3,4.6-3,7.1l0,0c-0.3,1-0.5,1.9-0.6,2.9c0,0.2-0.1,0.4-0.1,0.7c0,0.2,0,0.3-0.1,0.5c0,0.2,0,0.4-0.1,0.6
                                        c0,0.1,0,0.1,0,0.2c0,0.2,0,0.4,0,0.6c0,0.1,0,0.2,0,0.2c0,0.3,0,0.6,0,0.9c0,0.3,0,0.6,0,1v0c0,2.6,0.3,5.2,1,7.7l3.5-1
                                        c-0.4-1.6-0.7-3.2-0.8-4.9h6.1c0.4,4.6,2.5,8.9,5.7,12.2h0l0.5,0.4c0.2,0.2,0.4,0.3,0.5,0.5l1.4,1.1c0.1,0.1,0.2,0.2,0.4,0.3
                                        c0.2,0.2,0.5,0.3,0.7,0.5l0.1,0.1c0.1,0.1,0.3,0.2,0.4,0.3c0,0,0,0,0,0l1.8-3.2c-0.1-0.1-0.2-0.1-0.4-0.2c-0.1,0-0.2-0.1-0.2-0.1
                                        c-0.1-0.1-0.3-0.2-0.4-0.3c-0.2-0.2-0.5-0.3-0.7-0.5c-0.1-0.1-0.2-0.2-0.3-0.3c-0.2-0.2-0.4-0.3-0.6-0.5c0.1,0.1,0.2,0.2,0.3,0.3
                                        c0.1,0.1,0.2,0.2,0.3,0.3c0,0,0.1,0.1,0.1,0.1c0,0-0.1-0.1-0.1-0.1l4.1-4.1c4.1,2.9,9.7,2.4,13.3-1.2c1.6-1.6,2.5-3.5,2.9-5.5l5.8,0
                                        c-0.4,3.6-2,7-4.6,9.6c-3.1,3.2-7.3,4.7-11.4,4.7v0c-0.7,0-1.4,0-2.1-0.1c-0.7-0.1-1.4-0.2-2.1-0.4l-0.9,3.5c0,0,0,0,0.1,0
                                        c0.2,0,0.4,0.1,0.6,0.1c0.2,0.1,0.4,0.1,0.6,0.1c0.1,0,0.3,0.1,0.4,0.1c0.1,0,0.3,0,0.4,0.1c0.1,0,0.2,0,0.4,0l1.4,0.1
                                        c0.2,0,0.4,0,0.6,0c4.7,0.2,9.5-1.4,13.3-4.5l4.3,4.3c-1.2,1.1-2.6,2-4,2.9l1.8,3.2c2.2-1.3,4.3-2.9,6.1-4.7
                                        c1.8-1.8,3.4-3.9,4.7-6.1l-3.2-1.8c-0.8,1.4-1.8,2.8-2.9,4l-4.3-4.3c4.1-4.9,5.6-11.5,3.9-17.8l0,0l-3.5,0.9
                                        c0.2,0.8,0.3,1.6,0.4,2.3h0l-5.8,0c0-0.3-0.1-0.6-0.2-0.9c0-0.1-0.1-0.2-0.1-0.4c-0.1-0.3-0.2-0.6-0.3-0.9l0,0
                                        c-0.1-0.3-0.3-0.6-0.4-0.9c-0.1-0.1-0.2-0.3-0.2-0.4c-0.2-0.3-0.4-0.6-0.6-0.8c-0.3-0.4-0.6-0.8-1-1.1l0,0l-2.6,2.6l0.6,0.7
                                        c0.1,0.1,0.1,0.2,0.2,0.3c0.1,0.2,0.2,0.4,0.3,0.6c0.1,0.1,0.1,0.2,0.1,0.3c0.1,0.1,0.1,0.2,0.2,0.3c0.3,0.8,0.5,1.7,0.5,2.6h0v0
                                        c0,1.7-0.7,3.4-2,4.7c-1.3,1.3-3,2-4.8,2c-0.2,0-0.4,0-0.7,0c0.2,0,0.4,0,0.7,0v0c-0.8,0-1.5-0.1-2.2-0.4c-0.2-0.1-0.5-0.2-0.7-0.3
                                        c-0.1,0-0.2-0.1-0.3-0.1c-0.2-0.1-0.4-0.2-0.6-0.3c-0.3-0.2-0.7-0.5-1-0.8l0,0c-1.2-1.2-2-2.9-2-4.7v0c0-1.8,0.8-3.5,2-4.7
                                        c1.2-1.2,2.9-2,4.7-2v-3.7c-0.2,0-0.3,0-0.5,0c0,0-0.1,0-0.1,0c-0.1,0-0.3,0-0.4,0c-0.4,0-0.8,0.1-1.2,0.2c-0.1,0-0.3,0.1-0.4,0.1
                                        c-0.7,0.2-1.3,0.4-1.9,0.7c-0.1,0.1-0.3,0.1-0.4,0.2c-0.3,0.2-0.7,0.4-1,0.6l-4.1-4.1c0.2-0.1,0.4-0.3,0.5-0.4
                                        c0.4-0.3,0.8-0.6,1.3-0.8c0.3-0.2,0.5-0.3,0.8-0.5c0.1-0.1,0.3-0.2,0.4-0.2c0.1-0.1,0.3-0.1,0.4-0.2c0.3-0.1,0.6-0.3,0.9-0.4
                                        c0.1,0,0.2-0.1,0.3-0.1c0.2-0.1,0.4-0.1,0.5-0.2c0.2-0.1,0.5-0.1,0.7-0.2c0.2-0.1,0.4-0.1,0.7-0.2c0.2,0,0.4-0.1,0.6-0.1
                                        c0,0,0,0,0.1,0c0.2,0,0.3,0,0.5-0.1c0.1,0,0.2,0,0.4,0c0.1,0,0.2,0,0.4,0c0.2,0,0.3,0,0.5,0c4.7-0.3,9.3,1.6,12.5,4.7
                                        c0.2,0.2,0.3,0.4,0.5,0.5c0.1,0.2,0.3,0.3,0.4,0.5c0.1,0.1,0.3,0.3,0.4,0.5c0.5,0.6,0.9,1.2,1.3,1.9l3.2-1.8l0,0
                                        c-0.9-1.5-1.9-2.9-3.2-4.1l0,0c-3.2-3.2-7.4-5.3-12.2-5.7v-6.1c1.6,0.1,3.3,0.4,4.9,0.8l0.9-3.5c-2.8-0.7-5.7-1.1-8.6-1
                                        c-0.3,0-0.6,0-0.8,0c-0.2,0-0.4,0-0.7,0c0,0-0.1,0-0.1,0c0,0-0.1,0-0.2,0c-0.1,0-0.3,0-0.4,0c-0.1,0-0.2,0-0.4,0c-0.1,0-0.2,0-0.4,0
                                        c-0.5,0.1-1,0.1-1.5,0.2l-0.6,0.1c-0.6,0.1-1.2,0.2-1.7,0.4l0,0l0.9,3.5c1.6-0.4,3.2-0.7,4.9-0.8v0v6.1c-0.1,0-0.2,0-0.2,0
                                        c-0.2,0-0.4,0-0.7,0.1c-0.3,0-0.6,0.1-0.9,0.1c-0.2,0-0.4,0.1-0.5,0.1c-0.4,0.1-0.8,0.2-1.2,0.3c-0.6,0.2-1.1,0.3-1.7,0.5
                                        c-0.2,0.1-0.4,0.1-0.5,0.2c-0.3,0.1-0.7,0.3-1,0.5c0,0-0.1,0-0.1,0c-0.3,0.2-0.7,0.4-1,0.5c-0.3,0.2-0.7,0.4-1,0.6
                                        c-0.2,0.1-0.5,0.3-0.7,0.5c-0.2,0.1-0.4,0.3-0.6,0.5c-0.3,0.2-0.6,0.4-0.8,0.7c-0.2,0.2-0.4,0.3-0.6,0.5c-0.2,0.2-0.4,0.4-0.6,0.6
                                        c-0.2,0.2-0.4,0.4-0.6,0.6c-0.6,0.7-1.2,1.4-1.7,2.1c-0.3,0.4-0.6,0.9-0.8,1.3l0,0l3.2,1.8c0.1-0.1,0.1-0.2,0.2-0.3
                                        c0.1-0.2,0.3-0.4,0.4-0.7c0.1-0.2,0.3-0.4,0.4-0.5c0.1-0.2,0.2-0.3,0.4-0.5l4.1,4.1c-0.1,0.1-0.1,0.2-0.2,0.3
                                        c-0.1,0.1-0.2,0.2-0.2,0.4c-0.1,0.2-0.2,0.4-0.3,0.6c0,0.1-0.1,0.2-0.1,0.3c0,0,0,0,0,0.1c0,0.1-0.1,0.2-0.1,0.3
                                        c-0.2,0.4-0.3,0.9-0.4,1.3c0,0.1-0.1,0.2-0.1,0.4c-0.1,0.4-0.2,0.8-0.2,1.2c0,0.1,0,0.3,0,0.4c0,0,0,0,0,0.1c0,0.2,0,0.3,0,0.5v0
                                        c0,2.2,0.7,4.2,1.9,5.9L87.9,50c-2.2-2.8-3.5-6.3-3.5-10v0c0-0.2,0-0.5,0-0.7l0.2-1.7c0-0.3,0.1-0.6,0.2-0.9l0-0.1
                                        c0-0.2,0.1-0.5,0.2-0.7c0,0,0-0.1,0-0.1l-3.5-0.9h0c0,0.1-0.1,0.3-0.1,0.5c0,0.1,0,0.1,0,0.2c-0.1,0.3-0.1,0.5-0.2,0.8
                                        c-0.1,0.3-0.1,0.6-0.1,0.9c0,0,0,0,0,0c0,0.3-0.1,0.6-0.1,0.9h-6.1c0-0.1,0-0.2,0-0.3c0-0.2,0-0.4,0.1-0.6c0-0.2,0-0.4,0.1-0.7
                                        c0-0.2,0.1-0.4,0.1-0.6c0-0.2,0.1-0.4,0.1-0.6c0,0,0,0,0,0c0,0,0-0.1,0-0.1c0,0,0,0,0-0.1c0,0,0,0,0,0c0.1-0.3,0.1-0.6,0.2-0.9
                                        c-0.1,0.3-0.1,0.6-0.2,0.9c0.5-2.9,1.6-5.6,3-8.1c1-1.7,2.1-3.3,3.5-4.7c0.2-0.2,0.4-0.4,0.6-0.6c0.2-0.2,0.4-0.4,0.6-0.6
                                        c0.1-0.1,0.2-0.2,0.3-0.2c0.1-0.1,0.3-0.3,0.4-0.4c0.1-0.1,0.3-0.3,0.4-0.4c0.2-0.2,0.5-0.4,0.7-0.6c0.2-0.2,0.4-0.3,0.6-0.5
                                        c0.1,0,0.1-0.1,0.2-0.1c0.2-0.2,0.4-0.3,0.7-0.5c0.5-0.3,1-0.7,1.5-1l-1.8-3.1l0,0c-1.7,1-3.3,2.2-4.8,3.4l-4.2-4.2
                                        c12.3-12,35.2-12,47.5,0l-4.2,4.2c-1.5-1.3-3.1-2.4-4.8-3.4l-1.8,3.2c2,1.2,3.8,2.6,5.4,4.2c0.2,0.2,0.4,0.4,0.6,0.7
                                        c0.3,0.3,0.5,0.6,0.8,0.9c0.2,0.3,0.4,0.5,0.6,0.8c1.1,1.4,2,2.9,2.8,4.5c0.3,0.5,0.5,1.1,0.7,1.6c0.1,0.1,0.1,0.3,0.2,0.4
                                        c0.1,0.1,0.1,0.3,0.2,0.4c0.1,0.3,0.2,0.6,0.3,0.9c0.2,0.6,0.4,1.2,0.5,1.8c0.1,0.2,0.1,0.4,0.1,0.7c0,0.2,0.1,0.3,0.1,0.5
                                        c0.1,0.3,0.1,0.6,0.2,0.8c0.2,1.4,0.4,2.8,0.4,4.3v0.1c0,2.2-0.3,4.5-0.9,6.6l3.5,0.9c0.5-1.9,0.8-3.9,0.9-5.8h6
                                        C135.5,50.3,132.1,58.7,125.7,65.1z M130,38.2l0-0.2c0-0.2,0-0.4-0.1-0.7c0-0.2,0-0.4-0.1-0.7c0-0.2-0.1-0.4-0.1-0.7
                                        c0-0.2-0.1-0.4-0.1-0.7c-0.1-0.7-0.2-1.3-0.4-2c-0.2-0.9-0.4-1.7-0.7-2.6c-0.1-0.4-0.2-0.7-0.4-1.1c0-0.1,0-0.1-0.1-0.2
                                        c-0.1-0.2-0.2-0.4-0.2-0.6c-0.2-0.4-0.3-0.8-0.5-1.2c-1.2-2.6-2.8-5-4.7-7.2l0,0l4.2-4.2c3,3.3,5.4,7.2,7,11.5
                                        c0.1,0.3,0.2,0.6,0.3,0.9c0.1,0.3,0.2,0.5,0.3,0.8c0.1,0.3,0.2,0.5,0.2,0.8c0.1,0.2,0.1,0.4,0.2,0.7c0.1,0.3,0.2,0.6,0.2,0.9
                                        c0.1,0.5,0.2,1.1,0.3,1.6c0.2,0.8,0.3,1.6,0.4,2.5c0,0.3,0.1,0.5,0.1,0.8v0c0.1,0.5,0.1,1,0.1,1.6H130z"
                                    />
                                    </> : <></>}
                            </svg>
{/* 
                        <select name="" id="" value={select}>
                            <option value="1">1</option>
                            <option value="2">22</option>
                            <option value="3">333</option>
                            <option value="4">4444</option>
                            <option value="5">55555</option>
                        </select> */}

                        <div className="stamp grid-area: 2 / 13 / 4 / span 2;" id="WelcomeToParadox">
                            {nodes && nodes.WelcomeToParadox ? <>
                                <img
                                    src="img/gold-blank.png"
                                    alt="Stamp"
                                    onClick={() => {
                                        cpShow = true;
                                        setActiveNode('WelcomeToParadox')
                                    }}
                                />
                                <p className="w-2/3 text-2xl text-center text-white title">
                                    {ui.nodes.one.title}
                                </p>
                                <img src="img/gold.png" alt="Stamp" className="locked" />
                            </> : <>
                                <img
                                    className="disabled"
                                    title={ui.general.not_unlocked}
                                    src="img/gold.png"
                                    alt="Stamp"
                                />
                            </>}
                        </div>

                    <div className="vertical-line grid-area: 3 / 13 / 7 / span 2;" />

                    <div className="stamp grid-area: 6 / 13 / 8 / span 2;" id="AnInvitation">
                        {nodes && nodes.AnInvitation ? <>
                            <img
                                src="img/gold-blank.png"
                                alt="Stamp"
                                onClick={() => {
                                    cpShow = true;
                                    setActiveNode('AnInvitation');
                                }}
                            />
                            <p className="w-2/3 text-2xl text-center text-white title">
                                {ui.nodes.two.title}
                            </p>
                            <img src="img/gold.png" alt="Stamp" className="locked" />
                        </> : <>
                            <img
                                className="disabled"
                                title={ui.general.not_unlocked}
                                src="img/gold.png"
                                alt="Stamp"
                            />
                        </>}
                    </div>
                    <div className="vertical-line grid-area: 7 / 13 / 11 / span 2;" />
                    <div className="horizontal-line grid-area: 6 / 14 / 8 / 19;" />

                    <div className="stamp grid-area: 6 / 18 / 8 / span 2;" id="Stubborn">
                        {nodes && nodes.Stubborn ? <>
                            <img
                                src="img/gold-blank.png"
                                alt="Stamp"
                                onClick={() => {
                                    cpShow = true;
                                    setActiveNode('Stubborn');
                                }}
                            />
                            <p className="w-2/3 text-2xl text-center text-white title">
                                {ui.nodes.three.title}
                            </p>
                            <img src="img/gold.png" alt="Stamp" className="locked" />
                        </> : <>
                            <img
                                className="disabled"
                                title={ui.general.not_unlocked}
                                src="img/gold.png"
                                alt="Stamp"
                            />
                        </>}
                    </div>
                    <div className="stamp grid-area: 10 / 5 / span 2 / span 4;" id="SinsOfTheFather" >
                        {nodes && nodes.SinsOfTheFather ? <>
                            <img
                                src="img/red-blank.png"
                                alt="Stamp"
                                onClick={() => {
                                    cpShow = true;
                                    setActiveNode('SinsOfTheFather');
                                }}
                            />
                            <p className="w-2/3 text-2xl text-center text-white title">
                                {ui.nodes.four.title}
                            </p>
                            <img src="img/red.png" alt="Stamp" className="locked" />
                        </> : <>
                        <img
                                className="disabled"
                                title={ui.general.not_unlocked}
                                src="img/red.png"
                                alt="Stamp"
                            />
                        </>}
                    </div>
                    <div className="horizontal-line grid-area: 10 / 7 / 12 / 14;" />

                    <div className="stamp grid-area: 10 / 13 / span 2 / span 2;" id="ToTheNines">
                        {nodes && nodes.ToTheNines ? <>
                            <img
                                src="img/gold-blank.png"
                                alt="Stamp"
                                onClick={() => {
                                    cpShow = true;
                                    setActiveNode('ToTheNines');
                                }}
                            />
                            <p className="w-2/3 text-2xl text-center text-white title">
                                {ui.nodes.five.title}
                            </p>
                            <img src="img/gold.png" alt="Stamp" className="locked" />
                        </> : <>
                            <img
                                className="disabled"
                                title={ui.general.not_unlocked}
                                src="img/gold.png"
                                alt="Stamp"
                            />
                        </>}
                    </div>
                    <div className="horizontal-line grid-area: 10 / 14 / 12 / 21; " />
                    <div className="stamp grid-area: 10 / 19 / span 2 / span 4;" id="BeyondTheVeil">
                        {nodes && nodes.BeyondTheVeil ? <>
                            <img
                                src="img/blue-blank.png"
                                alt="Stamp"
                                onClick={() => {
                                    cpShow = true;
                                    setActiveNode('BeyondTheVeil');
                                }}
                            />
                            <p className="w-2/3 text-2xl text-center text-white title">
                                {ui.nodes.six.title}
                            </p>
                            <img src="img/blue.png" alt="Stamp" className="locked" />
                        </> : <>
                            <img
                                className="disabled"
                                title={ui.general.not_unlocked}
                                src="img/blue.png"
                                alt="Stamp"
                            />
                        </>}
                    </div>
                    <div className="horizontal-line grid-area: 14 / 21 / 16 / 25;" />
                    <div className="vertical-line grid-area: 13 / 24 / 15 / span 2;" />
                    <div className="stamp grid-area: 12 / 24 / span 2 / span 2;" id="WhatWasLost">
                        {nodes && nodes.WhatWasLost ? <>
                            <img
                                src="img/blue-blank.png"
                                alt="Stamp"
                                onClick={() => {
                                    cpShow = true;
                                    setActiveNode('WhatWasLost');
                                }}
                            />
                            <p className="w-2/3 text-2xl text-center text-white title">
                                {ui.nodes.seven.title}
                            </p>
                            <img src="img/blue.png" alt="Stamp" className="locked" />
                        </> : <>
                        <img
                                className="disabled"
                                title={ui.general.not_unlocked}
                                src="img/blue.png"
                                alt="Stamp"
                            />
                        </>}
                    </div>
                    <div className="vertical-line grid-area: 11 / 6 / 15 / span 2;" />
                    <div
                        className="vertical-line grid-area: 11 / 6 / 13 / span 2; margin-left: calc(var(--spacing) * 4);"
                    />
                    <div
                        className="horizontal-line grid-area: 12 / 7 / 14 / 14;    margin-inline: calc(var(--spacing) * 2 - var(--border));"
                    />
                    <div
                        className="vertical-line  grid-area: 13 / 13 / 15 / span 2;margin-right:calc(var(--spacing) * 4)"
                    />
                    <div
                        className="bg-red-100 stamp green grid-area: 14 / 5 / span 2 / span 4;"
                        id="PandorasBox"
                    >
                        {nodes && nodes.PandorasBox ? <>
                            <img
                                src="img/red-blank.png"
                                alt="Stamp"
                                onClick={() => {
                                    cpShow = true;
                                    setActiveNode('PandorasBox');
                                }}
                            />
                            <p className="w-2/3 text-2xl text-center text-white title">
                                {ui.nodes.eight.title}
                            </p>
                            <img src="img/red.png" alt="Stamp" className="locked" />
                        </> : <>
                            <img
                                className="disabled"
                                title={ui.general.not_unlocked}
                                src="img/red.png"
                                alt="Stamp"
                            />
                        </>}

                    </div>
                    <div className="horizontal-line grid-area: 14 / 7 / 16 / 14;  " />
                    <div className="horizontal-line grid-area: 14 / 14 / 16 / 21; " />
                    <div
                        className="bg-red-200 stamp red grid-area: 14 / 13 / span 2 / span 2;"
                        id="OutOfTime"
                    >
                        {nodes && nodes.OutOfTime ? <>
                            <img
                                src="img/gold-blank.png"
                                alt="Stamp"
                                onClick={() => {
                                    cpShow = true;
                                    setActiveNode('OutOfTime');
                                }}
                            />
                            <p className="w-2/3 text-2xl text-center text-white title">
                                {ui.nodes.nine.title}
                            </p>
                            <img src="img/gold.png" alt="Stamp" className="locked" />
                        </> : <>
                            <img
                                className="disabled"
                                title={ui.general.not_unlocked}
                                src="img/gold.png"
                                alt="Stamp"
                            />
                        </>}
                    </div>
                    <div className="vertical-line grid-area: 11 / 20 / 15 / span 2;" />
                    <div
                        className="vertical-line grid-area: 11 / 20 / 13 / span 2; margin-right: calc(var(--spacing) * 4);"
                    />
                    <div
                        className="horizontal-line grid-area: 12 / 14 / 14 / 21;     margin-inline: calc(var(--spacing) * 2 - var(--border));"
                    />
                    <div
                        className="vertical-line grid-area: 13 / 13 / 15 / span 2;  margin-left: calc(var(--spacing) * 4);"
                    />
                    <div
                        className="bg-red-300 stamp blue grid-area: 14 / 19 / span 2 / span 4;"
                        id="ASoulInLimbo"
                    >
                        {nodes && nodes.ASoulInLimbo ? <>
                            <img
                                src="img/blue-blank.png"
                                alt="Stamp"
                                onClick={() => {
                                    cpShow = true;
                                    setActiveNode('ASoulInLimbo');
                                }}
                            />
                            <p className="w-2/3 text-2xl text-center text-white title">
                                {ui.nodes.ten.title}
                            </p>
                            <img src="img/blue.png" alt="Stamp" className="locked" />
                        </> : <>
                            <img
                                className="disabled"
                                title={ui.general.not_unlocked}
                                src="img/blue.png"
                                alt="Stamp"
                            />
                        </>}

                    </div>
                    <div className="horizontal-line grid-area: 14 / 5 / 16 / 7;" />
                    <div className="vertical-line grid-area: 15 / 4 / 17 / span 2;" />
                    <div
                        className="bg-red-500 stamp green grid-area: 16 / 4 / span 2 / span 2"
                        id="YouWereWarned"
                    >
                        {nodes && nodes.YouWereWarned ? <>
                            <img
                                src="img/red-blank.png"
                                alt="Stamp"
                                onClick={() => {
                                    cpShow = true;
                                    setActiveNode('YouWereWarned');
                                }}
                            />
                            <p className="w-2/3 text-2xl text-center text-white title">
                                {ui.nodes.eleven.title}
                            </p>
                            <img src="img/red.png" alt="Stamp" className="locked" />
                        </> : <>
                            <img
                                className="disabled"
                                title={ui.general.not_unlocked}
                                src="img/red.png"
                                alt="Stamp"
                            />
                        </>}
                    </div>

                    <div
                        className="bg-red-700 stamp grid-area: 18 / 9 / span 2 / span 5"
                        id="TrainingWheels"
                    >
                        {nodes && nodes.TrainingWheels ? <>
                            <img
                                src="img/gold-blank.png"
                                alt="Stamp"
                                onClick={() => {
                                    cpShow = true;
                                    setActiveNode('TrainingWheels');
                                }}
                            />
                            <p className="w-2/3 text-2xl text-center text-white title">
                                {ui.nodes.twelve.title}
                            </p>
                            <img src="img/gold.png" alt="Stamp" className="locked" />
                        </> : <>
                            <img
                                className="disabled"
                                title={ui.general.not_unlocked}
                                src="img/gold.png"
                                alt="Stamp"
                            />
                        </>}
                    </div>

                    <div
                        className="bg-red-800 stamp grid-area: 18 / 14 / span 2 / span 5;"
                        id="YourOwnTwoFeet"
                    >
                        {nodes && nodes.YourOwnTwoFeet ? <>
                            <img
                                src="img/gold-blank.png"
                                alt="Stamp"
                                onClick={() => {
                                    cpShow = true;
                                    setActiveNode('YourOwnTwoFeet');
                                }}
                            />
                            <p className="w-2/3 text-2xl text-center text-white title">
                                {ui.nodes.thirteen.title}
                            </p>
                            <img src="img/gold.png" alt="Stamp" className="locked" />
                        </> : <>
                            <img
                                className="disabled"
                                title={ui.general.not_unlocked}
                                src="img/gold.png"
                                alt="Stamp"
                            />
                        </>}
                    </div>

                    <div className="vertical-line grid-area: 15 / 6 / 21 / span 2;" />
                    <div
                        className="bg-green-800 stamp grid-area: 20 / 5 / span 2 / span 4;"
                        id="MachineOfBlood"
                    >
                        {nodes && nodes.MachineOfBlood ? <>
                            <img
                                src="img/red-blank.png"
                                alt="Stamp"
                                onClick={() => {
                                    cpShow = true;
                                    setActiveNode('MachineOfBlood');
                                }}
                            />
                            <p className="w-2/3 text-2xl text-center text-white title">
                                {ui.nodes.fourteen.title}
                            </p>
                            <img src="img/red.png" alt="Stamp" className="locked" />
                        </> : <>
                        <img
                                className="disabled"
                                title={ui.general.not_unlocked}
                                src="img/red.png"
                                alt="Stamp"
                            />
                        </>}
                    </div>

                    <div className="vertical-line grid-area: 15 / 20 / 21 / span 2;" />
                    <div className="horizontal-line grid-area: 20 / 7 / 22 / 21;" />
                    <div
                        className="horizontal-line grid-area: 16 / 7 / 18 / 21;     margin-inline: calc(var(--spacing) * 2 - var(--border));"
                    />
                    <div className="vertical-line grid-area: 19 / 10 / 21 / span 2;" />
                    <div className="vertical-line grid-area: 17 / 16 / 19 / span 2;" />
                    <div className="vertical-line grid-area: 21 / 13 / 23 / span 2;" />
                    <div
                        className="vertical-line grid-area: 17 / 20 / 21 / span 2;margin-right: calc(var(--spacing) * 4);"
                    />
                    <div
                        className="vertical-line grid-area: 17 / 6 / 21 / span 2;margin-left: calc(var(--spacing) * 4);"
                    />

                    <div
                        className="bg-green-600 stamp grid-area: 20 / 19 / span 2 / span 4;"
                        id="ChainsThatBind"
                    >
                        {nodes && nodes.ChainsThatBind ? <>
                            <img
                                src="img/blue-blank.png"
                                alt="Stamp"
                                onClick={() => {
                                    cpShow = true;
                                    setActiveNode('ChainsThatBind');
                                }}
                            />
                            <p className="w-2/3 text-2xl text-center text-white title">
                                {ui.nodes.fifteen.title}
                            </p>
                            <img src="img/blue.png" alt="Stamp" className="locked" />
                        </> : <>
                            <img
                                className="disabled"
                                title={ui.general.not_unlocked}
                                src="img/blue.png"
                                alt="Stamp"
                            />
                        </>}
                    </div>

                    <div className="horizontal-line grid-area: 20 / 5 / span 2 / 7;" />
                    <div className="vertical-line grid-area: 21 / 4 / 23 / span 2;" />
                    <div className="horizontal-line grid-area: 22 / 3 / span 2 / 5;" />
                    <div className="horizontal-line grid-area: 22 / 23 / span 2 / span 2;" />
                    <div className="vertical-line grid-area: 21 / 22 / 23 / span 2;" />
                    <div className="horizontal-line grid-area: 20 / 21 / span 2 / span 2;" />

                    <div
                        className="bg-green-400 stamp grid-area: 22 / 2 / span 2 / span 2;"
                        id="MorsExMachina"
                    >
                        {nodes && nodes.MorsExMachina ? <>
                            <img
                                src="img/red-blank.png"
                                alt="Stamp"
                                onClick={() => {
                                    cpShow = true;
                                    setActiveNode('MorsExMachina');
                                }}
                            />
                            <p className="w-2/3 text-2xl text-center text-white title">
                                {ui.nodes.sixteen.title}
                            </p>
                            <img src="img/red.png" alt="Stamp" className="locked" />
                        </> : <>
                            <img
                                className="disabled"
                                title={ui.general.not_unlocked}
                                src="img/red.png"
                                alt="Stamp"
                            />
                        </>}

                    </div>
                    <div
                        className="bg-green-200 stamp grid-area: 22 / 24 / span 2 / span 2;"
                        id="Unbound"
                    >
                        {nodes && nodes.Unbound ? <>
                            <img
                                src="img/blue-blank.png"
                                alt="Stamp"
                                onClick={() => {
                                    cpShow = true;
                                    setActiveNode('Unbound');
                                }}
                            />
                            <p className="w-2/3 text-2xl text-center text-white title">
                                {ui.nodes.seventeen.title}
                            </p>
                            <img src="img/blue.png" alt="Stamp" className="locked" />
                        </> : <>
                        <img
                                className="disabled"
                                title={ui.general.not_unlocked}
                                src="img/blue.png"
                                alt="Stamp"
                            />
                        </>}
                </div>
                <div
                    className="bg-blue-100 stamp grid-area: 22 / 13 / span 2 / span 2;"
                    id="GoodHousekeeping"
                >
                    {nodes && nodes.GoodHousekeeping ? <>
                        <img
                            src="img/gold-blank.png"
                            alt="Stamp"
                            onClick={() => {
                                cpShow = true;
                                setActiveNode('GoodHousekeeping');
                            }}
                        />
                        <p className="w-2/3 text-2xl text-center text-white title">
                            {ui.nodes.eighteen.title}
                        </p>
                        <img src="img/gold.png" alt="Stamp" className="locked" />
                    </> : <>
                        <img
                            className="disabled"
                            title={ui.general.not_unlocked}
                            src="img/gold.png"
                            alt="Stamp"
                        />
                    </>}

                </div>

                <div
                    className="vertical-line grid-area: 21 / 6 / 25 / span 2;margin-right: calc(var(--spacing) * 4);"
                />
                <div
                    className="vertical-line grid-area: 21 / 6 / 25 / span 2;margin-left: calc(var(--spacing) * 4);"
                />
                <div
                    className="vertical-line grid-area: 21 / 20 / 25 / span 2;margin-right: calc(var(--spacing) * 4);"
                />
                <div
                    className="vertical-line grid-area: 21 / 20 / 25 / span 2;margin-left: calc(var(--spacing) * 4);"
                />

                <div className="vertical-line grid-area: 25 / 22 / 29 / span 2;" />
                <div className="vertical-line grid-area: 25 / 18 / 29 / span 2;" />
                <div className="vertical-line grid-area: 25 / 8 / 29 / span 2;" />
                <div className="vertical-line grid-area: 25 / 4 / 29 / span 2;" />

                <div
                    className="horizontal-line grid-area: 24 / 5 / span 2 / 7;margin-right: calc(var(--spacing) * 2 - var(--border));"
                />
                <div
                    className="horizontal-line grid-area: 24 / 7 / span 2 / 9;margin-left: calc(var(--spacing) * 2 - var(--border));"
                />
                <div
                    className="horizontal-line grid-area: 24 / 19 / span 2 / span 2;margin-right: calc(var(--spacing) * 2 - var(--border));"
                />
                <div
                    className="horizontal-line grid-area: 24 / 21 / span 2 / span 2;margin-left: calc(var(--spacing) * 2 - var(--border));"
                />

                <div
                    className="bg-blue-900 stamp grid-area: 28 / 4 / span 2 / span 2;"
                    id="OutWithABang"
                >
                    {nodes && nodes.OutWithABang ? <>
                        <img
                            src="img/red-blank.png"
                            alt="Stamp"
                            onClick={() => {
                                cpShow = true;
                                setActiveNode('OutWithABang');
                            }}
                        />
                        <p className="w-2/3 text-2xl text-center text-white title">
                            {ui.nodes.nineteen.title}
                        </p>
                        <img src="img/red.png" alt="Stamp" className="locked" />
                    </> : <>
                        <img
                            className="disabled"
                            title={ui.general.not_unlocked}
                            src="img/red.png"
                            alt="Stamp"
                        />
                    </>}
                </div>
                <div
                    className="bg-blue-200 stamp grid-area: 28 / 8 / span 2 / span 2;"
                    id="DeathDeferred"
                >
                    {nodes && nodes.DeathDeferred ? <>
                        <img
                            src="img/red-blank.png"
                            alt="Stamp"
                            onClick={() => {
                                cpShow = true;
                                setActiveNode('DeathDeferred');
                            }}
                        />
                        <p className="w-2/3 text-2xl text-center text-white title">
                            {ui.nodes.twenty.title}
                        </p>
                        <img src="img/red.png" alt="Stamp" className="locked" />
                    </> : <>
                        <img
                            className="disabled"
                            title={ui.general.not_unlocked}
                            src="img/red.png"
                            alt="Stamp"
                        />
                    </>}
                </div>
                <div
                    className="bg-blue-500 stamp grid-area: 28 / 18 / span 2 / span 2;"
                    id="Misled"
                >
                    {nodes && nodes.Misled ? <>
                        <img
                            src="img/blue-blank.png"
                            alt="Stamp"
                            onClick={() => {
                                cpShow = true;
                                setActiveNode('Misled');
                            }}
                        />
                        <p className="w-2/3 text-2xl text-center text-white title">
                            {ui.nodes.twentyone.title}
                        </p>
                        <img src="img/blue.png" alt="Stamp" className="locked" />
                    </> : <>
                        <img
                            className="disabled"
                            title={ui.general.not_unlocked}
                            src="img/blue.png"
                            alt="Stamp"
                        />
                    </>}
                </div>
                <div
                    className="bg-blue-800 stamp grid-area: 28 / 22 / span 2 / span 2;"
                    id="BetterSafeThanSorry"
                >
                    {nodes && nodes.BetterSafeThanSorry ? <>
                        <img
                            src="img/blue-blank.png"
                            alt="Stamp"
                            onClick={() => {
                                cpShow = true;
                                setActiveNode('BetterSafeThanSorry');
                            }}
                        />
                        <p className="w-2/3 text-2xl text-center text-white title">
                            {ui.nodes.twentytwo.title}
                        </p>
                        <img src="img/blue.png" alt="Stamp" className="locked" />
                    </> : <>
                        <img
                            className="disabled"
                            title={ui.general.not_unlocked}
                            src="img/blue.png"
                            alt="Stamp"
                        />
                    </>}
                </div>
                <div
                    className="vertical-line grid-area: 29 / 22 / 31 / span 2;background-color: transparent;background-image: linear-gradient(white, white, transparent);"
                />
                <div
                    className="vertical-line grid-area: 29 / 18 / 31 / span 2;background-color: transparent;background-image: linear-gradient(white, white, transparent);"
                />
                <div
                    className="vertical-line grid-area: 29 / 8 / 31 / span 2;background-color: transparent;background-image: linear-gradient(white, white, transparent);"
                />
                <div
                    className="vertical-line grid-area: 29 / 4 / 31 / span 2;background-color: transparent;background-image: linear-gradient(white, white, transparent);"
                />
                {/* <!-- <div className="bg-teal-100 " id="23">23</div> --> */}
            </div>
        </div>
    </section>
    <div className="w-full pb-8 font-extrabold"
        // style="background-image: url(img/madness-bg.png); background-size: cover; background-position: top center; padding-top: 10vw;"
    >
        <h1 className="z-10 px-8 text-6xl font-light" 
        // style="font-family:'Typewriter','Courier New', Courier, monospace"
        >
            Madness,<br />1917
        </h1>
        <h3
            className="max-w-xl px-8 text-xl font-light"
            // style="font-family:'Typewriter','Courier New', Courier, monospace"
        >
            The story continues onto chapter 2, but that is a chapter yet to be written.
        </h3>
    </div></div></div>

)}