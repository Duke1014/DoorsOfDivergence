import React from 'react'
    // import { createEventDispatcher, onMount } from 'svelte';
    // const dispatch = createEventDispatcher();
    // onMount(() => {
    //     document.body.style = 'overflow:hidden';
    // });

    // let innerHeight;
export default function ContentPlot() {
  return (
    <div>
        <div class="fixed z-50 grid w-full h-full overflow-auto bg-black wrapper bg-opacity-70">
            {/* <!-- style={'height:' + innerHeight + 'px;'} --> */}
            <div class="p-4 wrap place-self-center max-w-prose md:my-20">
                <div
                    class="p-8 text-center text-black bg-white border border-black place-content-center outline outline-black outline-offset-2 bg-opacity-40"
                >
                    <slot />
                    <br />
                    <button
                        class="p-2 border border-black hover:bg-black hover:text-white"
                        // on:click={() => dispatch('closeCP', false)}
                        >Close</button>
                </div>
            </div>
        </div>
    </div>
  )
}

 
    /* <style>
    .wrap {
        background-color: #d2b79e;
        background-image: url(../img/paper.jpg);
        background-size: cover;
        background-position: center;
        animation-name: moveUp;
        animation-duration: 1s;
        animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1.275);
    }
    @media only screen and (max-width: 600px) {
        @supports (-webkit-touch-callout: none) {
            /* CSS specific to iOS devices */
//             .wraper {
//                 border: 1px solid transparent;
//                 height: 100vh;
//                 width: 100vw;
//                 /* position: absolute; */
//                 top: 0;
//                 right: 0;
//                 bottom: 0;
//                 left: 0;
//                 overflow: auto;
//             }
//         }
//     }
//     :global(body.noscroll) {
//         overflow: hidden;
//     }

//     @keyframes moveUp {
//         from {
//             margin-top: 100vh;
//         }
//         to {
//         }
//     }
// </style> */