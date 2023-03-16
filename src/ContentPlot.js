import React from 'react'
import './contentplot.css'

import AnInvitation from "./img/node-AnInvitation.png"
import SinsOfTheFather from "./img/node-SinsOfTheFather.png"
import ToTheNines from "./img/node-ToTheNines.png"
import BeyondTheVeil from "./img/node-BeyondTheVeil.png"
import ASoulInLimbo from "./img/node-ASoulInLimbo.png"
import PandorasBox from "./img/node-PandorasBox.png"
import YouWereWarned from "./img/node-YouWereWarned.png"
import WhatWasLost from "./img/node-WhatWasLost.png"
import OutOfTime from "./img/node-OutOfTime.png"
import MorsExMachina from "./img/node-MorsExMachina.png"
import Unbound from "./img/node-Unbound.png"
import TrainingWheels from "./img/node-TrainingWheels.png"
import YourOwnTwoFeet from "./img/node-YourOwnTwoFeet.png"
import MachineOfBlood from "./img/node-MachineOfBlood.png"
import ChainsThatBind from "./img/node-ChainsThatBind.png"
import GoodHousekeeping from "./img/node-GoodHousekeeping.png"
import node0 from "./img/Node 0- ALIENIST IN TRAINING Letter.jpg"
import node2 from "./img/Node 2.jpg"
import node3 from "./img/Node 3.jpg"
import node4 from "./img/Node 4.jpg"
import node5 from "./img/Node 5.jpg"
import node6 from "./img/Node 6.jpg"
import node7 from "./img/Node 7.jpg"
import node8 from "./img/Node 8.jpg"
import node9 from "./img/Node 9.jpg"
import node10 from "./img/Node 10.jpg"
import node11 from "./img/Node 11.jpg"
import node12 from "./img/Node 12.jpg"
import node13 from "./img/Node 13.jpg"
import node14 from "./img/Node 14.jpg"
import node20 from "./img/Node 20.jpg"
import node23 from "./img/Node 23.jpg"
import node24 from "./img/Node 24.jpg"
import node25 from "./img/Node 25.jpg"
import node26 from "./img/Node 26.jpg"
import node27 from "./img/Node 27.jpg"
import node28 from "./img/Node 28.jpg"
import node29 from "./img/Node 29- Mission of Mercy Letter.jpg"
import node31 from "./img/Node 31.jpg"
import node32 from "./img/Node 32.jpg"
import node33 from "./img/Node 33.jpg"
import node34 from "./img/Node 34.jpg"
import node35 from "./img/Node 35.jpg"
import node36 from "./img/Node 36.jpg"
import node37 from "./img/Node 37.jpg"
import node38 from "./img/Node 38.jpg"
import node40 from "./img/Node 40.jpg"
import node43 from "./img/Node 43.jpg"
import node44 from "./img/Node 44- Unhinged Behavior Letter.jpg"
import node45 from "./img/Node 45.jpg"
import node47 from "./img/Node 47.jpg"
import node48 from "./img/Node 48.jpg"
import node49 from "./img/Node 49.jpg"
import node50 from "./img/Node 50.jpg"
import node52 from "./img/Node 52.jpg"
import node54 from "./img/Node 54.jpg"
import node56 from "./img/Node 56.jpg"
import node57 from "./img/Node 57.jpg"
import node60 from "./img/Node 60- A Lead Letter.jpg"
import node62 from "./img/Node 62.jpg"
import node63 from "./img/Node 63.jpg"
import node64 from "./img/Node 64.jpg"
import node65 from "./img/Node 65.jpg"
import node66 from "./img/Node 66.jpg"
import node67 from "./img/Node 67.jpg"
import node68 from "./img/Node 68.jpg"
import node70 from "./img/Node 70.jpg"
import node73 from "./img/Node 73.jpg"

export default function ContentPlot({ setCpShow, activeNode }) {

    let nodeContent = null

    switch (activeNode) {
        case 'WelcomeToParadox': 
            nodeContent = (
            <div>
                <h1 className="my-4 text-4xl font-archaic">WELCOME TO PARADOX</h1>
                <p className="text-lg">You began the journey of (multiple) lifetimes</p>
                <br />
                <p>
                    Hello me, it’s you. From the future, that is. It’s confusing, but trust me, you’ll understand eventually.
                </p>
                <p>
                    If you’re reading this- I mean, I know you are, I remember reading it, which is how I knew to send it back to you, or rather, myself… sorry, even I have trouble wrapping my head around things.
                </p>
                <p>
                    The important thing is: you’re getting this message because you’ve decided to enter the rift in time and space, and for good reason: it needs to be charted and fixed, and you have a big part to play in that. But don’t worry, it’s not all on your shoulders. You are one of many people to answer a summons from your future self- you’re going to meet other Parallels on your journey. (That’s what we call ourselves: people who have been sent on this journey bytheir future, living in a parallel iteration of- ah, don’t worry about it right now.)
                </p>
                <p>
                    This is where it gets weird: at the nexus point of the fracture, there’s a bar called Paradox. The first parallels set it up- they found an old bar from the 1950’s that had broken through the void. Some other places and times have broken through, too, and it looks like more are trying to push their way through. It’s kind of a watering hole for those of us trying to repair reality- a place to meet, talk about our efforts, and compare notes while we try to find the right set of choices that will fix this rift once and for all. Talk to them. They’re there to help.
                </p>
                <p>
                    One last thing I can give you- I’m providing you a map, of sorts, of all of the choices we’ve charted so far. Use this to track your progress, see where the unexplored places are. I wish I could help more, but we’re probably stretching the laws of causality enough just writing this letter.
                </p>
                <p>Good luck. You’re in for the ride of your lives.</p>
            </div>
        ) 
        break;
        case 'AnInvitation': 
            nodeContent = (
                <div>
                    <h1 className="my-4 text-4xl font-archaic">An Invitation</h1>
                    <p className="text-lg">You answered Edmond Cavanaugh's summons</p>
                    <br />
                    <img src={AnInvitation} alt="An Invitation" loading="lazy" />
                    <br />
                    <blockquote>
                        “As base metals are transmuted by our alchemy, so too do we transmute our spiritual forms. Discard your visage, it has no link to your mind. Discard your name, it does not baptize your spirit. Discard your past, it will not dictate your future. Take this mask, brother, and with it, show us the face of your soul.”
                    </blockquote>
                    <p className="max-w-sm mt-2 ml-auto italic text-right">
                        — From the Ritual of Initiation into the Order of the Three Keys, (Author unknown)
                    </p>
                    <p>
                        The members of the Order value anonymity to a high degree. They also value individuality. To this end, all members, upon joining, are given a unique mask, and choose a new name. This serves as their identity within the Order, and also ensures they do not recognize one another in the outside world.
                    </p>
                    <p>
                        This mask also serves as a signature of sorts, with many members choosing to use its imagery as letter seals, heraldry, etc.
                    </p>
                    <p>
                        There are times when Order members learn the outside identities of their peers, but it is considered the height of impropriety, and a grievous insult, to use a fellow member’s real name in mixed company.
                    </p>
                </div>
            )
        break;
        case 'Stubborn': 
            nodeContent = (
                <div>
                    <h1 className="my-4 text-4xl font-archaic">Stubborn</h1>
                    <p className="text-lg">You refused the Proctor's offer</p>
                    <br />
                    <blockquote>
                        “-sigils used in the ritual are not in any approved spellcraft. I have been unable to find a direct translation, but they appear to be derivative of a ritual described in a Goetic tome. I am asking the Elders to send a Proctor, as I believe a Rite of Inquisition is the only way to root out any heresy that may be-”
                    </blockquote>
                    <p className="max-w-sm mt-2 ml-auto italic text-right">
                        — Discovered fragment of a letter, written approximately 1835
                    </p>
                    <p>
                        The Rite of Inquisition is the most important duty of Proctors within the Order of the Three Keys. Any member, even an Elder, suspected of engaging in forbidden research, such as blood magic or Goetia, is put under immediate investigation by a Proctor. The Proctors are given wide latitude and serve as judge, jury, and, should the evidence prove the accused’s guilt, executioner. Mercy is seldom given, although some Proctors have been known to commute sentences should the accused help ferret out their fellow heretics.
                    </p>
                </div>
            )  
        break;
        case 'SinsOfTheFather': 
            nodeContent = (
                <div>
                    <h1 className="my-4 text-4xl font-archaic">Sins of the Father</h1>
                    <p className="text-lg">You chose the Red cards</p>
                    <br />
                    <img src={SinsOfTheFather} alt="Sins of the Father" loading="lazy" />
                    <br />
                    <blockquote>
                        “Victor’s condition is worsening. The attacks come at increasing frequency. All I can do is hold my darling boy and comfort him while he convulses, assuring him it will pass, lying to him that this will be the last time. Though there is no evidence that this ailment will become fatal, I fear it will continue to progress until he is forced to live in a state of perpetual agony.”
                    </blockquote>
                    <p className="max-w-sm mt-2 ml-auto italic text-right">
                        — From the Journal of Edmond Cavanaugh, August 8th, 1896
                    </p>
                    <p>
                        While Edmond had hoped his son would follow in his alchemical footsteps, or at the very least pursue history and Theurgy like his mother, Victor seemed singularly focused on the movement of the celestial spheres, and with it, the ancient mysteries of divination. Ever the doting father, Edmond did what he could to encourage the boy’s interests, secretly dreaming of his son becoming the youngest divination master in the Order’s recent history. These dreams were put to a halt, however, when Victor’s mysterious illness presented itself. Edmond’s search for a cure would drive him to madness.
                    </p>
                </div>
            )
        break;
        case 'ToTheNines':
            nodeContent = (
                <div>
                    <h1 className="my-4 text-4xl font-archaic">To the Nines</h1>
                    <p className="text-lg">You donned Edmond's Order regalia</p>
                    <br />
                    <img src={ToTheNines} alt="To The Nines" loading="lazy" />
                    <br />
                    <blockquote>
                        “Nature loves to hide her secrets, and she does not suffer the hidden truth about the essential nature of the gods to be flung in naked words to the ears of the profane”
                    </blockquote>
                    <p className="max-w-sm mt-2 ml-auto italic text-right">— ”Oration VII”, Julian the Apostate</p>
                    <p>
                        In 360 CE, the Order of the Three Keys was perhaps the most influential organization in the known world: members sat on the thrones of powerful empires, and while others had the ears of kings and queens. This did not come without cost- a growing dissent towards the Order came to a head with the assassination of Emperor Julian the Apostate in Rome, himself a Theurgist and Alchemist. His murder sounded a clarion call around the world, and a string of high-profile assassinations followed, driving the members of the Order into hiding in what would later be called the Great Dissolution. As a direct result, Order members would wear masks during their meetings, so that no member could be forced to reveal the identity of another. It would be over a millennium before the Order would be able to centralize their power again.
                    </p>
                </div>
            )
        break;
        case 'BeyondTheVeil':
            nodeContent = (
                <div>
                    <h1 className="my-4 text-4xl font-archaic">Beyond the Veil</h1>
                    <p className="text-lg">You chose the blue cards</p>
                    <br />
                    <img src={BeyondTheVeil} alt="Beyond the Veil" loading="lazy" />
                    <br />
                    <blockquote>
                        “Edmond- I must write fast. My findings at Pharaoh's Bath were plentiful- of prime interest are mentions of the Scarab of Osiris, and its use in the resurrection of its namesake. Ammut, the demoness, is described as being in attendance, at the heels of Anubis. Now the Elders have tasked me to find the Scarab, and told me to head to Mt. Horeb- that sacred mountain where so much history centers on. I cannot shake the feeling that we are on the cusp of watching a new era unfold- can you imagine? An artefact that can bring back the dead? Is it even possible?”
                    </blockquote>
                    <p className="max-w-sm mt-2 ml-auto italic text-right">
                        — Excerpt from letter written by Eveline Cavanaugh, January 20, 1897
                    </p>
                    <p>
                        Eveline Cavaunaugh was one of the Order’s most talented historians and archeologists, in addition to being a promising Theurgist. Her focus on the demons and folklore of Mesopotamia made her the first and only choice to undertake the Elders’ mission overseas. However, when she turned up dead, some among the Order doubted the offical cause of death, suspected she had been murdered by members of the Children of the Broken Chain. Her husband, however, has a different theory, a theory he would go to the ends of the earth- and beyond- to prove.
                    </p>
                </div> 
            )
        break;
        case 'ASoulInLimbo':
            nodeContent = (
                <div>
                    <h1 className="my-4 text-4xl font-archaic">A Soul in Limbo</h1>
                    <p className="text-lg">You discovered what remains of Evelyn</p>
                    <br />
                    <img src={ASoulInLimbo} alt="A Soul in Limbo" loading="lazy" />
                    <br />
                    <blockquote>
                        “Defend thyself, O Babylon! <br />
                        Ishtar’s gift, this Sapphire Gate,<br />
                        Shields us chosen, makes us safe,<br />
                        The souls of Hell break upon it,<br />
                        Dust upon the rocks.”
                    </blockquote>
                    <p className="max-w-sm mt-2 ml-auto italic text-right">
                        — Dedication of the Ishtar Gate (transl. 1823)
                    </p>
                    <p>
                        Akkadian Cobalt, Soulstone, Gem of Winter- there are many names for this incredibly rare variant of Lapis Lazuli, and even more questions. It is rumored that, at one point, members of the Order had learned how to produce the stone at will, but the knowledge has been lost to time. What is known, however, is its properties: the mineral is capable of touching the other side of the veil, acting as a conduit through which otherworldly energies can be conducted, or, in certain cases, trapped. Experimentation with this substance is strictly forbidden, and the few pieces in the Order’s possession are kept under lock and key.
                    </p>
                </div>
            )
        break;
        case 'PandorasBox':
            nodeContent = (
                <div>
                    <h1 className="my-4 text-4xl font-archaic">Pandora's Box</h1>
                    <p className="text-lg">You discovered Edmond's Elixir Engine</p>
                    <br />
                    <img src={PandorasBox} alt="Pandora's Box" loading="lazy" />
                    <br />
                    <blockquote>
                        “The name Pandora stone is not chosen perfunctorily: its nature is chaos, change, and the unexpected. It is the energy of pure potential, crystalized and made manifest. Much like the fable after which it is named, extreme precautions should be taken before accessing its energies.”
                    </blockquote>
                    <p className="max-w-sm mt-2 ml-auto italic text-right">
                        From “The Second Key: A Primer on Alchemy for Order Initiates”
                    </p>
                    <p>
                        The Pandora Stone is the crowning achievement of the Order of the Three Keys, and its most closely guarded secret. Its discovery, oddly, was an accident, rooting back to the Order’s founding, when the deposed Egyptian pharaoh Psamtik III attempted to take his own life with a concoction of Realgar, a reddish stone of Arsenic Sulfide. However, the stone he used was an extremely rare naturally occurring variant of a Pandora Stone, imperfect, but capable of incredible feats of alchemical change. Instead of his death, Psamtik entered a coma, awakening after three weeks to find himself in a younger body, and possessing a longer lifespan that most humans. Using the imperfect stone was not without cost, however: Psamtik woke to discover his eyesight had been lost.
                    </p>
                </div>
            )
        break;
        case 'Alchemist':
            nodeContent = (
                <div>
                    <h1 className="my-4 text-4xl font-archaic">Alchemist</h1>
                    <p className="text-lg">You encountered Proctor Caduceus</p>
                    <br />
                    <img src={YouWereWarned} alt="You Were Warned" loading="lazy" />
                    <br />
                    <blockquote>
                        “I am an alchemist. The laws of the physical world are mine to command. What use is this knowledge if I am not allowed to wield it?”
                    </blockquote>
                    <p className="max-w-sm mt-2 ml-auto italic text-right">
                        — Edmond Cavanaugh, Letter to the Elders of the London Chapter, 1897.
                    </p>
                    <p>
                        Proctor Caduceus is the perfect epitome of an Alchemist, with a singular focus on the nature of matter, and how to transmute it at will. As a youth, they took a particular interest in the metamorphosis properties of insects, and soon began research into how those properties might be harnessed through both magical and chemical means.
                    </p>
                    <p>
                        It was a young lover’s tryst with the chemist Elias Howell that brought them into the Order- Howell, sensing the young alchemist’s abilities, began teaching the youth everything he knew. Caduceus sees the world as a game to be perfected, and as such has a deep and abiding love for strategy and precision- there are no better chess players in the Order.
                    </p>
                    <p>
                        The only alchemist in recent years to rival their skill was one Edmond Cavanaugh. Edmond’s effortless advances rankled Caduceus, fostering a bitter, although perhaps one-sided, rivalry. When the word came from the Elders to investigate Cavanaugh, the Proctor jumped at the chance.
                    </p>
                    <p>
                        While Caduceus is an agent of precision, do not be fooled: there are few Proctors more unpredictable. After all, the properties of transmutation cannot always be foreseen
                    </p>
                </div>
                )
        break;
        case 'WhatWasLost':
            nodeContent = (
                <div>
                    <h1 className="my-4 text-4xl font-archaic">What Was Lost</h1>
                    <p className="text-lg">You recovered the Proctor's belongings</p>
                    <br />
                    <img src={WhatWasLost} alt="What Was Lost" loading="lazy" />
                    <br />
                    <blockquote>
                        “Magic, like any other energy, can be amplified, nullified, or contained by certain tools. Learning to use these tools is a foundational skill for a member of the Order, and even more so for a Proctor. Your focus is your life. Never leave it unattended.”
                    </blockquote>
                    <p className="max-w-sm mt-2 ml-auto italic text-right">
                        — From <em>The Teachings of Proctor Hermes</em>, 1847.
                    </p>
                </div>
            )
        break;
        case 'OutOfTime':
            nodeContent = (
                <div>
                    <h1 className="my-4 text-4xl font-archaic">Out of Time</h1>
                    <p className="text-lg">You failed to prove your dedication to the Proctor in time.</p>
                    <br />
                    <img src={OutOfTime} alt="OutOfTime" loading="lazy" />
                    <br />
                    <blockquote>
                        “And I say this to you now, my fellows, my friends- even amongst the purest of us lies the potential for vileness. I have seen with my own eyes the evil that lives at the edge of our reality, hoping to prey upon our greed. And so I propose a bulwark, a sect within our Order, yet also outside of it, a Shepherd to keep the wolves at bay, but also to cull the flock, removing the sick and diseased with a merciful knife-”
                    </blockquote>
                    <p className="max-w-sm mt-2 ml-auto italic text-right">— The Comte de St. Germain, 1657</p>
                    <p>
                        The Proctors have long served as a force within the Order to police their members, ensuring that the urge for power does not bleed into the dark places of Blood Magic and Goetia. They answer to none but the Elders, and punish transgressions with extreme prejudice. Members of the Order respect and fear them, knowing that the presence of a Proctor at any Order meeting means someone in the room is under suspicion, and may be living their final night on earth.
                    </p>
                </div>
            )
        break;
        case 'MorsExMachina':
            nodeContent = (
                <div>
                    <h1 className="my-4 text-4xl font-archaic">Mors Ex Machina</h1>
                    <p className="text-lg">You were unable to turn off the machine.</p>
                    <br />
                    <img src={MorsExMachina} alt="Mors Ex Machina" loading="lazy" />
                    <br />
                    <blockquote>
                        “What makes us, my dear John, different then those fools you fought in Portugal, is from whence we pull our power. They bind themselves to the service of a shade for a taste of what we do. We, on our own merits and skill, forge our powers by tapping into the natural energies of the earth itself. Those leylines that wrap around our earth, bound to it by mysterious forces my work seeks to uncover, are the raw iron from which our miracles are hewn. The lord tells us to help ourselves, and has provided us with the Keys. I suppose that makes the leylines the door.”
                    </blockquote>
                    <p className="max-w-sm mt-2 ml-auto italic text-right">
                        — A letter from Brother Sir Issac Newton to his friend Captain John Conduitt, 1722
                    </p>
                </div>
            )
        break;
        case 'Unbound':
            nodeContent = (
                <div>
                    <h1 className="my-4 text-4xl font-archaic">Unbound</h1>
                    <p className="text-lg">You were unable to re-seal the Obelisk</p>
                    <br />
                    <img src={Unbound} alt="Unbound" loading="lazy" />
                    <br />
                    <blockquote>
                        “Lamashtu! Most Terrible! <br />
                        She of Seven Names and Seven Witches! <br />
                        Dimme! Ammut! Daughter of Anu! <br />
                        Nightmare Bringer! Harbinger of Miscarriage! <br />
                        Disease-borne! Curse-ridden! <br />
                        This tablet takes my blood, that you might taste it,<br />
                        This box holds my bread, that you might take it,<br />
                        This basket floats downriver, that you might chase it <br />
                        Flyover this house tonight, Lillit, and be sated.”
                    </blockquote>
                    <p className="max-w-sm mt-2 ml-auto italic text-right">
                        — Prayer against Lamashtu, approx. 700 BCE
                    </p>
                    <p>
                        Few figures inspired more fear in ancient Babylonian culture than the Demoness Lamashtu. That is, until her banishment in 500 BC by the Warrior Priestess Belatsunat and the Knights of Marduk. It is a commonly held story within the Order, especially amongst the Proctors, that during the banishment of Lamashtu, Belatsunat was given a vision of the far future, of a calamity where time and reality splinter open, and the world is undone. This revelation led Belatsunat to search for other enlightened souls, thus forming the Order of Three Keys. Of course, this story has never been proven.
                    </p>
                </div>
            )
        break;
        case 'Theurgist':
            nodeContent = (
                <div>
                    <h1 className="my-4 text-4xl font-archaic">Theurgist</h1>
                    <p className="text-lg">You encountered Proctor Isa.</p>
                    <br />
                    <img src={TrainingWheels} alt="Training Wheels" loading="lazy" />
                    <br />
                    <blockquote>
                        “All things have a history, an energy they accumulate from every small force that has affected them. No matter how small, the past will leave its mark, and the Theurgist can read those scars and tell their story.”
                    </blockquote>
                    <p className="max-w-sm mt-2 ml-auto italic text-right">
                        — Elder Mademoiselle Madeleine-Françoise Calais, Theurgist Lodge de Paris, Order of the Three Keys
                    </p>
                    <p>
                        Proctor Isa is unique among her fellow Theurgists- at an early age, she demonstrated a talent for the rare skill of Psychometry, the ability to discern an object’s history by touch alone. The constant flood of strange memories was unsettling for the small child, and only made worse by her parents’ dismissal of her condition as an overactive imagination. It was not until an Oxford professor and member of the Order discovered her talents that she began to understand her destiny.
                    </p>
                    <p>
                        Isa’s talents have sometimes proven a curse, even in adulthood- what would you do if you instantly knew the history of any person you touched, including lovers?
                    </p>
                    <p>
                        In recent years, Isa joined the Proctors, and found a new calling, devoting herself to tracking down members of the Children of the Broken Chain. Her innate abilities give her a natural talent for detective work. Few members of the Order are able to lie to Proctor Isa and escape unscathed.
                    </p>
                </div>
            )
        break;
        case 'Divinator':
            nodeContent = (
                <div>
                    <h1 className="my-4 text-4xl font-archaic">Divinator</h1>
                    <p className="text-lg">You encountered Proctor Delphi.</p>
                    <br />
                    <img src={YourOwnTwoFeet} alt="Your Own Two Feet" loading="lazy" />
                    <br />
                    <blockquote>
                        “A talented member of the Order can feel the flowing tides of reality. They know danger before it happens, can find things long ago lost and bring a foe low with a whispered truth unknown to all. But no member of the Order, no matter how talented, can sense those flows as well as the stars. They know all that has happened and all that could happen. We simply must listen to them.”
                    </blockquote>
                    <p className="max-w-sm mt-2 ml-auto italic text-right">— Brother Claudius Ptolemy</p>
                    <p>
                        Proctor Delphi has always had their eyes on the stars. Few Order members can claim more talent for the art of Divination, but such abilities can both shackle a Proctor as much as set them free. While Proctor Delphi’s main mission is to protect and guide members of the Order, attempting to prevent them from straying from the rules, they do not do anything without the consent of the stars. This contradiction confuses many- is Proctor Delphi an agent of change, or predestination?
                    </p>
                    <p>
                        What is known about Proctor Delphi is this: like the Oracle that is their namesake, they know your future before you do. Should their horned silhouette darken your doorstep, it is already far too late to run- your fate is sealed.
                    </p>
                </div>
            )
        break;
        case 'MachineOfBlood':
            nodeContent = (
                <div>
                    <h1 className="my-4 text-4xl font-archaic">Machine of Blood</h1>
                    <p className="text-lg">You activated Edmond's Elixir Engine</p>
                    <br />
                    <img src={MachineOfBlood} alt="Machine Of Blood" loading="lazy" />
                    <br />
                    <blockquote>
                        “As the movement of the Sun affects the seasons, as the phase of the moon affects the tides, when we exercise our powers, we must be wary of unintended consequences. Alchemy, Theurgy and Divination come with costs and to access their power, you must be willing to pay them.”
                    </blockquote>
                    <p className="max-w-sm mt-2 ml-auto italic text-right">
                        — The Scrolls of the Teacher, The Order of the Three Keys
                    </p>
                </div>
            )
        break;
        case 'ChainsThatBind':
            nodeContent = (
                <div>
                    <h1 className="my-4 text-4xl font-archaic">Chains that Bind</h1>
                    <p className="text-lg">You recreated Edmond's forbidden ritual.</p>
                    <br />
                    <img src={ChainsThatBind} alt="Chains That Bind" loading="lazy" />
                    <br />
                    <blockquote>
                        “I will abide by the rules of this Order any longer. I have found a power greater than any your petty alchemy can provide. Power is power, and your attempts to control it are offensive at their least. Stop me, if you can. I will not hide."
                    </blockquote>
                    <p className="max-w-sm mt-2 ml-auto italic text-right">
                        — Letter from Kolgrim to Elder Apostis, 1403
                    </p>
                    <p>
                        Goetia, or dark magic, is a practice long forbidden to members of the Order. Any ritual or procedure that violates the primary tenets falls under this category, including: <br />
                        — Magic to reverse death <br />
                        — Procedures to steal the life of another <br />
                        — Rituals that invoke the power of beings from another realm
                    </p>
                    <p>
                        Any Order member suspected of engaging in Goetic practices will quickly find themselves interrogated by a Proctor, a fate to be urgently avoided at all costs.
                    </p>
                </div>
            )
        break;
        case 'Honesty':
            nodeContent = (
                <div>
                    <h1 className="my-4 text-4xl font-archaic">Honesty</h1>
                    <p className="text-lg">You made an admission to the Proctor.</p>
                    <br />
                    <img src={GoodHousekeeping} alt="Good Housekeeping" loading="lazy" />
                    <br />
                    <blockquote>
                        “Flashed all their sabres bare, <br />
                        Flashed as they turned in air <br />
                        Sabring the gunners there, <br />
                        Charging an army, while <br />
                        All the world wondered.”
                    </blockquote>
                    <p className="max-w-sm mt-2 ml-auto italic text-right">
                        — <em>The Charge of the Light Brigade</em> by Order Theurgist Alfred, Lord Tennyson, 1854.
                    </p>
                    <p>Edmond Cavanaugh was not, unlike many of his contemporaries, born into money.</p>
                    <p>
                        Instead, he was forced to scrape and beg, until finally discovering an innate talent for alchemy. He was self-taught- no member of the Order could be bothered to sponsor such an unkempt scoundrel, regardless of his talent, until he crossed paths with Eveline DuPont, the young daughter of a wealthy Order family. Their love affair was scandalous, but the two young paramours eventually convinced the critics of Edmond’s worth, and Cavanaugh assumed a position in the Order’s upper echelons.
                    </p>
                    <p>
                        There are still many detractors, which has caused Edmond to develop a disdain for many of the Order’s rules, and given him a single-minded focus on securing his legacy. In the scales of his life, his research as an alchemist and his love of his family are equally weighed.
                    </p>
                </div>
            )
        break;
        case 'OutWithABang':
            nodeContent = (
                <div>
                    <iframe
                        width="560"
                        height="315"
                        id="video-iframe"
                        src="https://www.youtube.com/embed/Jurugctlcqs?&autoplay=1"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    />
                </div>
            )
        break;
        case 'DeathDeferred':
            nodeContent = (
                <div>
                    <iframe
                        width="560"
                        height="315"
                        id="video-iframe"
                        src="https://www.youtube.com/embed/_-6G7Oc7lI4?&autoplay=1"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    />
                </div>
            )
        break;
        case 'Misled':
            nodeContent = (
                <div>
                    <iframe
                        width="560"
                        height="315"
                        id="video-iframe"
                        src="https://www.youtube.com/embed/YhMO011AtgY?&autoplay=1"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    />
                </div>
            )
        break;
        case 'BetterSafeThanSorry':
            nodeContent = (
                <div>
                    <iframe
                        width="560"
                        height="315"
                        id="video-iframe"
                        src="https://www.youtube.com/embed/LrHt9dnBJDE?&autoplay=1"
                        title="YouTube video player"
                        frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowfullscreen
                    />
                </div>
            )
        break;
        case 'AlienistInTraining':
            nodeContent = (
                <div>
                    <h1 className="my-4 text-4xl font-archaic">Alienist In Training</h1>
                    <p className="text-lg">You took a position at Hollow Grove Sanitarium.</p>
                    <br />
                    <img src={node0} alt='Alienist In Training' loading='lazy' />
                    <br />
                </div>
            )
        break;
        case 'Oblivious':
            nodeContent = (
                <div>
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/N0R0Tnc53pQ?&autoplay=1" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                    />
                </div>
            )
        break;
        case 'NarrowMinded':
            nodeContent = (
                <div>
                    <h1 className="my-4 text-4xl font-archaic">Narrow-minded</h1>
                    <p className="text-lg">You chose the same color serums.</p>
                    <br />
                    <img src={node2} alt='Narrow-minded' loading='lazy' />
                    <br />
                    <blockquote>
                        “It seems as though the serum must be formulated to heal either the mind or the body- it cannot do both. When I try to combine the effects, it leads to disastrous results. I wonder, though, even with these breakthroughs… could I have saved Victor?”
                    </blockquote>
                    <p className="max-w-sm mt-2 ml-auto italic text-right">
                        - Excerpt from Edmond Cavanaugh’s journals, 1903
                    </p>
                    <p>
                        After failing to create a cure for his son’s condition, Edmond Cavanaugh became obsessed with what could have been. He toiled day and night to create a serum that could have cured his son, but instead stumbled upon a new serum that, when catalyzed with electricity while inside the subject’s body, could, in theory, have astounding effects. Of course, he’d need access to test subjects no one would miss and a method of introducing electric current into the body with ease. When he heard Hollow Grove sanitarium was hiring, it was as though the Fates themselves had led him there.
                    </p>
                </div>
            )
        break;
        case 'Unmotivated':
            nodeContent = (
                <div>
                    <h1 className="my-4 text-4xl font-archaic">Unmotivated</h1>
                    <p className="text-lg">You kept the doctor waiting.</p>
                    <br />
                    <img src={node3} alt='Unmotivated' loading='lazy' />
                    <br />
                    <blockquote>
                        “But here let me say one thing: From the moment I entered the insane ward on the Island, I made no attempt to keep up the assumed role of insanity. I talked and acted just as I do in ordinary life. Yet strange to say, the more sanely I talked and acted the crazier I was thought to be by all except one physician, whose kindness and gentle ways I shall not soon forget.”
                    </blockquote>
                    <p className="max-w-sm mt-2 ml-auto italic text-right">
                        -Excerpt from Ten Days in a Madhouse by Journalist (and Order Historian) Nellie Bly, 1887
                    </p>
                    <p>
                        In the late 1800’s there was a concerted effort to humanize and update the manner in which mental health was diagnosed and treated. Hollow Grove Sanitarium was one of the many institutions that benefited from this campaign, and was updated with, amongst other things, a state-of-the-art electrical system and facility remodel. The practices of Hollow Grove were also modified for more humane treatment Many unqualified doctors were let go in favor of new applicants- a turnover during which Edmond Cavanaugh, using falsified credentials, soon positioned himself as the new superintendent.
                    </p>
                </div>
            )
        break;
        case 'SoundOfMind':
            nodeContent = (
                <div>
                    <h1 className="my-4 text-4xl font-archaic">Sound Of Mind</h1>
                    <p className="text-lg">You chose more blue serums.</p>
                    <br />
                    <img src={node4} alt='Sound of Mind' loading='lazy' />
                    <br />
                    <blockquote>
                        “A new patient was admitted to the facility, a young man by the name of Charles. Withdrawn, cold, shy- something behind his eyes, though. I don’t like him. I’m not supposed to say that, I know, but I don’t trust him. There's malice there, that no one else seems to see. He’s a writer, too, which means I have to clean the walls every day. More work for me.”
                    </blockquote>
                    <p className="max-w-sm mt-2 ml-auto italic text-right">
                        -Excerpt from Gunther’s journal,<br />
                        September 15, 1905
                    </p>
                </div>
            )
        break;
        case 'SoundOfBody':
            nodeContent = (
                <div>
                    <h1 className="my-4 text-4xl font-archaic">Sound Of Body</h1>
                    <p className="text-lg">You chose more red serums.</p>
                    <br />
                    <img src={node5} alt='Sound of Body' loading='lazy' />
                    <br />
                    <blockquote>
                        “First day at Hollow Grove was today. My excitement at the new job was quickly doused, however, when we took on a new patient- Grace, all of eight years old. My heart broke seeing her for the first time- a tiny little thing, malnourished, forgotten, and yet, when I introduced myself, she clung to my waist, hugging me as tightly as she could- all the world’s cruelty cannot wash away the good in this child.”
                    </blockquote>
                    <p className="max-w-sm mt-2 ml-auto italic text-right">
                        -Excerpt from Gunther’s journal,<br />
                        January 14th, 1898
                    </p>
                </div>
            )
        break;
        case 'CriticalThinker':
            nodeContent = (
                <div>
                    <h1 className="my-4 text-4xl font-archaic">Critical Thinker</h1>
                    <p className="text-lg">Discovered Charles' true motivations.</p>
                    <br />
                    <img src={node6} alt='Critical Thinker' loading='lazy' />
                    <br />
                    <blockquote>
                        "I hate Charles’ little game. I don’t want to play it. But Dr. Cavanaugh insists. He says it’s good for the boy’s social development. He doesn’t speak much otherwise. And since Charles only wants to play with a select few orderlies, myself included, my hand is forced. So he says words, and I have to repeat them, exactly as he does, with the same intonation. And if I get it wrong, he laughs, and writes it down. He tries to trick me, says I lose a lot. I don’t understand the rules. It feels like he’s judging me, looking down on me… but I’m not the one locked in a cell."
                    </blockquote>
                    <p className="max-w-sm mt-2 ml-auto italic text-right">
                        -Excerpt from Gunther’s Journal,<br/>
                        July 23, 1907
                    </p>
                </div>
            )
        break;
        case 'StrongWilled':
            nodeContent = (
                <div>
                    <h1 className="my-4 text-4xl font-archaic">Strong Willed</h1>
                    <p className="text-lg">Discovered Grace's true motivations.</p>
                    <br />
                    <img src={node7} alt='Strong Willed' loading='lazy' />
                    <br />
                    <blockquote>
                        "Grace’s tenth birthday today. She was so happy for the attention. The superintendent is cold and uncaring, so I had to smuggle the cake in while he wasn’t looking. Woke her up to give it to her, she could barely contain her squeals of delight. But an odd thing- when I lit the candles, told her to blow them out, she just stared at them, letting them burn almost all the way down. I had to shake her by the shoulder to snap her out of it. Perhaps next year I should consider a different present. Maybe a dollhouse."
                    </blockquote>
                    <p className="max-w-sm mt-2 ml-auto italic text-right">
                        -Excerpt from Gunther’s journal, <br/>
                        April 11, 1900
                    </p>


                </div>
            )
        break;
        case 'Anxious':
            nodeContent = (
                <div>
                    <h1 className="my-4 text-4xl font-archaic">Anxious</h1>
                    <p className="text-lg">Learned what was done to Charles.</p>
                    <br />
                    <img src={node8} alt='Anxious' loading='lazy' />
                    <br />
                    <blockquote>
                        "I’m missing time. The past two weeks, I’ll find myself in an exam room, holding a scalpel, or in the basement, staring at an electrical box, with no idea how I got there. Maybe it’s the stress- this thing in Serbia is getting out of hand, they’re saying all of Europe’s gonna be on fire before the year is out. War is a madness we just accept as part of living. When one of these patients harms someone out of panic or fear, we lock them in a cell, but when a king or a prime minister sends thousands to die, we don’t consider him mad, do we? I’m starting to think I’m on the wrong side of the cell."	
                    </blockquote>
                    <p className="max-w-sm mt-2 ml-auto italic text-right">
                        -Excerpt from Gunther’s journal, <br/>
                        August 2, 1914
                    </p>
                </div>
            )
        break;
        case 'Pyromania':
            nodeContent = (
                <div>
                    <h1 className="my-4 text-4xl font-archaic">Pyromania</h1>
                    <p className="text-lg">You learned what was done to Grace.</p>
                    <br />
                    <img src={node9} alt='Pyromania' loading='lazy' />
                    <br />
                        "Grace has taken a shine to Charles. So much so that the superintendent has seen fit to put them in adjacent cells. Says that it might help both of them. If I didn’t know better, I’d say she has her first crush. I’ve tried to dissuade her, but she won’t listen. She’s even picked up his habit of writing all over her cell walls."
                    <p className="max-w-sm mt-2 ml-auto italic text-right">
                        -Excerpt from Gunther’s journal, <br/>
                        September 15, 1905
                    </p>
                </div>
            )
        break;
        case 'Thanatophobia':
            nodeContent = (
                <div>
                    <h1 className="my-4 text-4xl font-archaic">Thanatophobia</h1>
                    <p className="text-lg">Witnessed Edmond's end at Charles' hands.</p>
                    <br />
                    <img src={node10} alt='Thanatophobia' loading='lazy' />
                    <br />
                    <blockquote>
                        "The blackouts are getting more frequent. I haven’t told anyone, for fear of losing my job-or worse- but I may need to have a word with Cavanaugh soon. I’ve been trying to reconstruct events, and one thing stands out- before every missing block of time, I’ve encountered Charles. He’s usually the last thing I remember, but not always- sometimes I cross paths with him hours before I lose my memory, but always on the same day. Is it paranoia to believe he’s somehow responsible? It must be. I need a vacation."
                    </blockquote>
                    <p className="max-w-sm mt-2 ml-auto italic text-right">
                        -Excerpt from Gunther’s journal, <br/>
                        February 19, 1916
                    </p>
                </div>
            )
        break;
        case 'HotHeaded':
            nodeContent = (
                <div>
                    <h1 className="my-4 text-4xl font-archaic">Hot-headed</h1>
                    <p className="text-lg">Witnessed Edmond's end at Grace's hands.</p>
                    <br />
                    <img src={node11} alt='Hot-headed' loading='lazy' />
                    <br />
                    <blockquote>
                        "Seventh patient has been mysteriously discharged from the facility. I’ve tried speaking to the other orderlies about it but they refuse to talk much. Something has everyone scared. Staff who go digging into the superintendent’s experiments get transferred pretty quickly. I think the only reason I’ve kept my job this long is because of my size- no one else can restrain a panicked patient like me. Still, I worry. The superintendent considers patients for his new procedure once they turn 21, and Grace’s birthday is in less than a month. There must be something I can do."
                    </blockquote>
                    <p className="max-w-sm mt-2 ml-auto italic text-right">
                        -Excerpt from Gunther’s journal, <br/>
                        March 17, 1910
                    </p>
                </div>
            )
        break;
        case 'Electrophilia':
            nodeContent = (
                <div>
                    <h1 className="my-4 text-4xl font-archaic">Electrophilia</h1>
                    <p className="text-lg">Shocked a friend to secure your escape.</p>
                    <br />
                    <img src={node12} alt='Electrophilia' loading='lazy' />
                    <br />
                    <blockquote>
                        "He wants us to round up all the patients in the east wing. Including Charles and Grace. I don’t know what he’s planning, but I don’t like the looks of it. The other orderlies are too scared to do anything, but perhaps I can get a few of the patients away from here. I’ll just need to call in a favor or two."
                    </blockquote>
                    <p className="max-w-sm mt-2 ml-auto italic text-right">
                        -Excerpt from Gunther’s journal, <br/>
                        March 7, 1917
                    </p>
                </div>
            )
        break;
        case 'Epiplaphobia':
            nodeContent = (
                <div>
                    <h1 className="my-4 text-4xl font-archaic">Epiplaphobia</h1>
                    <p className="text-lg">Took a seat in the electric chair.</p>
                    <br />
                    <img src={node13} alt='Epiplaphobia' loading='lazy' />
                    <br />
                    <blockquote>
                        "I don’t recognize Grace anymore. Cavanaugh has gone too far. This serum of his… it’s broken her. I have to get her out of here. Tonight. Perhaps, away from this place she’ll heal. He’s calling for me again. Keeps calling me a dolt. I swear, if I don’t wring his neck before the night is out, it will be a small miracle.""
                    </blockquote>
                    <p className="max-w-sm mt-2 ml-auto italic text-right">
                        -Excerpt from Gunther’s journal, <br/>
                        March 7, 1917
                    </p>
                </div>
            )
        break;
        case 'Gambler':
            nodeContent = (
                <div>
                    <h1 className="my-4 text-4xl font-archaic">Gambler</h1>
                    <p className="text-lg">You saved your ally by playing the odds.</p>
                    <br />
                    <img src={node14} alt='Gambler' loading='lazy' />
                    <br />
                    <blockquote>
                        “Which switch is the switch, Miss, for Ipswich?<br/>
                        It’s the Ipswich switch which I require.<br/>
                        Which switch switches Ipswich with this switch?<br/>
                        You switched my switch on the wrong wire.<br/>
                        You’ve switched me on Northwich...... not Ipswich!<br/>
                        So now to prevent further hitch<br/>
                        If you’ll tell me which switch is Northwich and which switch is Ipswich,<br/>
                        I’ll know which switch is which!”
                    </blockquote>
                    <p className="max-w-sm mt-2 ml-auto italic text-right">
                        -From “Which Switch is the Switch, Miss, for Ipswitch” by Billy Murray, 1911
                    </p>
                </div>
            )
        break;
        case 'LeftToStarve':
            nodeContent = (
                <div>
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/earK1gmZWP4?&autoplay=1" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                    />
                </div>
            )
        break;
        case 'CruelCalculus':
            nodeContent = (
                <div>
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/edv1fvUqU9k?&autoplay=1" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                    />
                </div>
            )
        break;
        case 'AllTheThingsIMightHaveSaid':
            nodeContent = (
                <div>
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/Tg9YoNuG4Vk?&autoplay=1" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                    />
                </div>
            )
        break;
        case 'ACleansingFlame':
            nodeContent = (
                <div>
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/CKj_bJomDU8?&autoplay=1" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                    />
                </div>
            )
        break;
        case 'NoSecondChances':
            nodeContent = (
                <div>
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/LF9AoRqimUM?&autoplay=1" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                    />
                </div>
            )
        break;
        case 'Indecisive':
            nodeContent = (
                <div>
                    <h1 className="my-4 text-4xl font-archaic">Indecisive</h1>
                    <p className="text-lg">You were given one final chance to save your life.</p>
                    <br />
                    <img src={node20} alt='Indecisive' loading='lazy' />
                    <br />
                    “One poor girl used to tell me every morning, "I dreamed of my mother last night. I think she may come to-day and take me home." That one thought, that longing, is always present, yet she has been confined some four years.
What a mysterious thing madness is. I have watched patients whose lips are forever sealed in a perpetual silence. They live, breathe, eat; the human form is there, but that something, which the body can live without, but which cannot exist without the body, was missing. I have wondered if behind those sealed lips there were dreams we ken not of, or if all was blank?”
-Excerpt from Ten Days in a Madhouse by Journalist (and Order Historian) Nellie Bly, 1887

Lost time is a commonly stated symptom amongst those living within an asylum, but just as common is a pervading sense of déjà vu. Many patients of Hollow Grove have claimed to experience the same days, hours, or even seconds over again, but the question is: are they actually in a time loop, or is it simply the day-to-day sameness of living in this dreary building?
                </div>
            )
        break;
        case 'OutWithABang':
            nodeContent = (
                <div>
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/GoMUTGuWMkU?&autoplay=1" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                    />
                </div>
            )
        break;
        case 'BlazeOfGlory':
            nodeContent = (
                <div>
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/7o5veA4RusE?&autoplay=1" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                    />
                </div>
            )
        break;
        case 'Narcoleptic':
            nodeContent = (
                <div>
                    <h1 className="my-4 text-4xl font-archaic">Narcoleptic</h1>
                    <p className="text-lg">Went to sleep.</p>
                    <br />
                    <img src={node23} alt='Narcoleptic' loading='lazy' />
                    <br />
                    “My goodness, man, don’t you know how to spell? Now all of our medical supplies are going to be shipped off to God-knows-where, France!”

		-Dr. Henry Culpepper, Former Superintendent of Hollow Grove Sanitarium (1882-1891)

	There has been some confusion of late for those attempting to study the history of Hollow Grove, mostly due to the existence of two facilities by that name:  Hollow Grove Sanatorium, which existed in Verdun France until 1932, and Hollow Grove Sanitarium in Providence RI. The site of the latter is now the home of the Little Whispers Orphanage. 

	Hollow Grove Sanitarium was founded in 1856 as a general wellness resort- a place for people with many different symptoms to come and alleviate their conditions. Over the years, the directors of the facility found more financial gain in converting the facility into an asylum, and charging rent to the state in exchange for easing the strained penitentiary system.

This changed, for a time, in the late 1800’s after a concerted push for humanization of the mental health community, sparked by Nelly Bly’s expose, 10 Days in a Madhouse. Hollow Grove was updated with new electric lights and more modern treatment plans.
                </div>
            )
        break;
        case 'Narcissistic':
            nodeContent = (
                <div>
                    <h1 className="my-4 text-4xl font-archaic">Narcissistic</h1>
                    <p className="text-lg">Put on clothes that don't belong to you.</p>
                    <br />
                    <img src={node24} alt='Narcissistic' loading='lazy' />
                    <br />
                    “Mon Dieu, mec, tu ne sais pas épeler ? Maintenant, toutes nos fournitures médicales vont être expédiées quelque part aux États-Unis !”

		-Dr. Antoine Baschet, Former Superintendent of Hollow Grove Sanitorium (1871-1892)
	
There has been some confusion of late for those attempting to study the history of Hollow Grove, mostly due to the existence of two facilities by that name:  Hollow Grove Sanatorium, which existed in Verdun France until 1932, and Hollow Grove Sanitarium in Providence RI. The site of the former has now been turned into a WWI museum.

Hollow Grove Sanatorium was founded in 1863 by Christian missionaries as a center for the treatment of respiratory diseases like tuberculosis (the name was a mistranslated attempt at “Hallowed Grounds”). With the coming of the Great War, the facility was quickly co-opted as a war hospital due to its proximity to the Western Front. A great many wounded soldiers passed through its doors, and few survived, either due to the nature of their wounds, or the inept or malicious nature of the staff. Because of the strain of medical facilities throughout Europe during this time, Hollow Grove also doubled as an asylum, taking in those who could not handle the mental stresses of the war. There are no records remaining of the poor souls committed to Hollow Grove, however, almost as though someone or something did not want their existence known. 

                </div>
            )
        break;
        case 'Co-ordinated':
            nodeContent = (
                <div>
                    <h1 className="my-4 text-4xl font-archaic">Co-ordinated</h1>
                    <p className="text-lg">Impressed Hamlin with your dancing skills.</p>
                    <br />
                    <img src={node25} alt='Co-ordinated' loading='lazy' />
                    <br />
                    “You see, sometimes… things get worse. Take, for example, our resident agoraphobe who has become so afraid of the outside world he’s taken up residence inside the facility’s walls.”
		
		-Charles (as the late Dr. Tidwell), 1917

The agoraphobe known only to the staff and faculty at Hollow Grove as “Hamlin” has lived at the facility for longer than anyone cares to remember- he has seen the changeover of four different superintendents and countless staff members. Before the arrival of Edmond Cavanaugh, Hamlin was content to stay within his cell, but an adverse reaction to the newest superintendent’s experimental serum only exacerbated his condition.

Hamlin’s real name has been lost to time: a flood in the facility in 1896 resulted in the loss of a number of records, including his, and Hamlin has either does not remember or care to tell anyone his real name. The moniker seems to suit him just fine.
                </div>
            )
        break;
        case 'Vocal':
            nodeContent = (
                <div>
                    <h1 className="my-4 text-4xl font-archaic">Vocal</h1>
                    <p className="text-lg">Impressed Hamlin with your singing skills.</p>
                    <br />
                    <img src={node26} alt='Vocal' loading='lazy' />
                    <br />
                    “There came into the towne of Hamel in the countrie of Brunswicke an old kind of companion, who for the fantasticall coate which he wore being wrought with sundrie colours, was called the pide Piper; for a Piper he was, besides his other qualities.
This fellow forsooth offered the townse-men for a certaine somme of money to rid the towne of all the rats that were in it (for at that time the Burgers were with that vermine greatly annoyed).
The accord in fine being made; the pide Piper with a shrill pipe went piping through the streets, and forthwith the rats came all running out of the houses in great numbers after him; all which hee led into the river of Weaser and therein drowned them.”
	-Excerpt from The Pide Piper, Richard Verstegan, 1628
The moniker of “Hamlin” was given to the agoraphobe living within the walls of Hollow Grove by a staff member who noted the “rat-like” appearance of the man, specifically citing his “over-large front teeth” and “constant hand-wringing”. Little did he know the name would prove more accurate once Hamlin began to share living conditions with the other rats within the facility’s walls. There have been multiple attempts to track down his permanent home, but Hamlin appears to be migratory, never staying in one portion of the Sanitarium for very long.  
In addition to agoraphobia, Hamlin also suffers from chronic kleptomania, and has used his new accommodations to his advantage. He finds particular enjoyment in pickpocketing oblivious staff through broken patches and cracks in the walls.

                </div>
            )
        break;
        case 'Obstinate':
            nodeContent = (
                <div>
                    <h1 className="my-4 text-4xl font-archaic">Obstinate</h1>
                    <p className="text-lg">Never rang the bell.</p>
                    <br />
                    <img src={node27} alt='Obstinate' loading='lazy' />
                    <br />
                    “We shall embody this viewpoint in a principle of self-consistency, which states that the only solutions to the laws of physics that can occur locally in the real Universe are those which are globally self-consistent.”

	-Igor Dmitriyevich Novikov, [et al.] “Cauchy problem in spacetimes with closed timelike curves”,  1990.

“Bullshit.”
-Anna Payne, Astro-physicist (and member of the Order), vocal response to Novikov, 1990

There has long been debate in the physics community concerning the hypothetical practicality of time travel. Of specific concern are the effects of creating a paradox. There are some who believe that a causal loop, or “bootstrap paradox”, (wherein a time traveler going into the past to change events ends up creating the very events he traveled back to change) would create a logical inconsistency that could break the fabric of time. Others believe that a bootstrap paradox is the only form of paradox that could be allowed by the laws of physics to exist; it is instead the “Grandfather Paradox”, (named for the hypothetical time traveler who goes back in time and kills his own grandfather, thus preventing his birth and subsequent parricide) that threatens space-time with a logical fallacy powerful enough to tear it apart.

Of course, these models disregard the possibility of multiple timelines and realities created by individual choices. Ultimately, this debate may never be settled, given its purely speculative nature. After all, time travel and branching realities are things of pure fiction impossible for any one person to truly observe, aren’t they?
                </div>
            )
        break;
        case 'Arrogant':
            nodeContent = (
                <div>
                    <h1 className="my-4 text-4xl font-archaic">Arrogant</h1>
                    <p className="text-lg">This still isn't a Marvel movie...</p>
                    <br />
                    <img src={node28} alt='Arrogant' loading='lazy' />
                    <br />
                    “I have never seen water damage do anything like this. I’ll see what I can do. In the meantime, have you considered speaking with a Priest?
		-Mason Frank Lester, speaking with Superintendent of Hollow Grove, 1916

Hollow Grove enjoyed a modest reputation as being a generally well-kept and modern facility. It wasn’t until the later half of 1916 that things began to rapidly fall apart. Holes appeared in the walls, the plaster crumbled away, the paint chipped and peeled, and water stains were plentiful. All of this could have been explained if it weren’t for the evidentiary age and scope of the decay- mold and water marks that would have taken years to form suddenly appeared in a matter of days. Even stranger was the confusion among those that lived and worked there- had the damage in fact formed almost overnight? Hadn’t it always been there? Were their minds just playing tricks on them? And what was it about those particularly odd cracks, the ones that, if you looked at the right angle, seemed to gleam with an iridescent light? The cracks that, if you looked too long, would stare back at you, whispering siren melodies of things that hadn’t yet happened, that couldn’t possibly have occurred?

No, it must be a trick of the light. 

                </div>
            )
        break;
        case 'MissionOfMercy':
            nodeContent = (
                <div>
                    <h1 className="my-4 text-4xl font-archaic">Mission of Mercy</h1>
                    <p className="text-lg">Received word of Edmond's whereabouts.</p>
                    <br />
                    <img src={node29} alt='Mission Of Mercy' loading='lazy' />
                    <br />
                </div>
            )
        break;
        case 'Nepotism':
            nodeContent = (
                <div>
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/-BttwQESOMI?&autoplay=1" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                    />
                </div>
            )
        break;
        case 'Inactive':
            nodeContent = (
                <div>
                    <h1 className="my-4 text-4xl font-archaic">Inactive</h1>
                    <p className="text-lg">You kept Victor waiting.</p>
                    <br />
                    <img src={node31} alt='Inactive' loading='lazy' />
                    <br />
                    “- Father? 
- Yes, Victor, what is it? 
- Is that Hercules?
- Hmm, let me see, lad. No, that’s Aquila, the eagle. 
- A-Q-U-I-L-A. And this one? 
- That’s Leo, the lion that Hercules slew. Let me adjust this telescope. Now there’s Lyra, the harp. I know you can find that one. And next to it is the crown of Queen Cassopeia.
- C-a-s-s- uh, E?
- I. O-p-e-i-a. We need to work on your letters. And which one is this? 
- Oh! THAT’S Hercules!
- Well done, my boy! We’ll make an astronomer of you yet!
- Yes, Father. I- 
- What’s wrong?
- My chest- it hurts… father, help, I can’t-
- Victor? VICTOR?! Hold on, boy. Constance! Come back here, there’s something wrong with your brother! I can’t-”


		-Recorded exchange between Edmond Cavanaugh and his son, Victor, 1894.
                </div>
            )
        break;
        case 'Sanguine':
            nodeContent = (
                <div>
                    <h1 className="my-4 text-4xl font-archaic">Sanguine</h1>
                    <p className="text-lg">You discovered more about Edmond's activities.</p>
                    <br />
                    <img src={node32} alt='Sanguine' loading='lazy' />
                    <br />
                    “It has now been three years since I was forced to run from my family home. I was so close to curing Victor. Instead, we’ve come to this Sanitarium, offering my services as a doctor in exchange for a place to live.
I have managed to keep Victor alive through frequent blood transfusions.  It was Constance’s idea, actually. Precocious little girl, she is. “If the problem is in Victor’s blood, why don’t you give him new blood, Daddy?” It’s not a cure, but it keeps him alive, and keeps the symptoms to a minimum. And no one questions the tragic deaths of our more troubled patients. After all, there’s only so much modern medicine can accomplish…”

		Recording of Edmond Cavanaugh, 1900.
                </div>
            )
        break;
        case 'FrequentAttacks':
            nodeContent = (
                <div>
                    <h1 className="my-4 text-4xl font-archaic">Frequent Attacks</h1>
                    <p className="text-lg">You learned more about the family history.</p>
                    <br />
                    <img src={node33} alt='Frequent Attacks' loading='lazy' />
                    <br />
                    “I have watched my son over the years, and I cannot escape the thought that I have made a mistake. He has grown cold, vicious… bloodthirsty, in more ways than one. More and more frequent transfusions are required to keep him alive. At least this Great War has supplied us with fresh blood. No one questions the disappearance of wounded soldiers. I’ve lost count of how many people I’ve drained to keep my son alive. Hundreds? Thousands? At what point will it be too much?”

-Recording of Edmond Cavanaugh, 1915

                </div>
            )
        break;
        case 'Kleptomania':
            nodeContent = (
                <div>
                    <h1 className="my-4 text-4xl font-archaic">Kleptomania</h1>
                    <p className="text-lg">You stole a key.</p>
                    <br />
                    <img src={node34} alt='Kleptomania' loading='lazy' />
                    <br />
                    “We're telling lies; we know we're telling lies; we don't tell the public the truth, that we're losing more officers than the Germans, and that it's impossible to get through on the Western Front.”

		-Lord Rothmere, Britain journalist, 1917.

Edmond Cavanaugh had already taken up residence as a physician in Hollow Grove Sanatorium well before the fighting in Europe began- but the conversion of the facility lead to an influx of fresh blood. Many patients brought through the doors of Hollow Grove were not expected to survive, so when Edmond drained them of their blood in order to further his research for a cure, no one gave it a second thought. After all, soldiers die, and never before in such great numbers as in the Great War.
                </div>
            )
        break;
        case 'Lethargic':
            nodeContent = (
                <div>
                    <h1 className="my-4 text-4xl font-archaic">Lethargic</h1>
                    <p className="text-lg">You left the key behind.</p>
                    <br />
                    <img src={node35} alt='Lethargic' loading='lazy' />
                    <br />
                    “Is Europe to be drenched in blood? And are we to be involved because, in an obscure town, a madman kills a prince? It is incredible that a Liberal government, whose members have spoken eloquently for peace, should abandon our impregnable independence. Let the people revolt against so criminal an act. Were we to fight, the consequences would be too awful to contemplate.”

Edwin T Heys, British citizen, August 1914

Victor had always had a latent talent for Divination, something that he never had the opportunity to develop. However, during his frequent transfusions, he discovered something fascinating: during an exsanguination, at the point of lowest blood pressure- as he began to feel lightheaded, his vision blurred, his fingertips numb- it was here that his abilities manifested strongly, and brief flashes of the future came to him, unbidden but clear, and often accurate. He began to formulate a theory about altered states of consciousness and their effects on a Divinator’s ability to see the future- but that was a thesis that, unfortunately, had no future.

                </div>
            )
        break;
        case 'Insubordinate':
            nodeContent = (
                <div>
                    <h1 className="my-4 text-4xl font-archaic">Insubordinate</h1>
                    <p className="text-lg">You refused to do as you were told.</p>
                    <br />
                    <img src={node36} alt='Insubordinate' loading='lazy' />
                    <br />
                    In the 1750’s a member of the Order put forth a theory: it was possible, he said, to replicate the process of creating a Pandora stone in an unorthodox method. Instead of utilizing an alchemically infused container, he suggested using a human heart as a vessel. What better container on earth to hold blood than the one nature designed? Of course, the cost of creating such a stone would be a human life, a proposition the Elders of the Order did not agree with. The forgotten alchemist was cast out of the Order, his name stricken from all records, and every shred of his research destroyed- or so it was assumed. One can’t help but wonder, though- what if something of his theory survived? Perhaps some page of a document, some note in the margin of an extant alchemy text, something that, when encountered by a child prodigy, might reignite whatever smoldering embers remained of his radical theories.
                </div>
            )
        break;
        case 'Patricidal':
            nodeContent = (
                <div>
                    <h1 className="my-4 text-4xl font-archaic">Patricidal</h1>
                    <p className="text-lg">You witnessed the end of Edmond Cavanaugh.</p>
                    <br />
                    <img src={node37} alt='Patricidal' loading='lazy' />
                    <br />
                    “I love my son, and I’ve devoted my life to curing him, but now, on the precipice, knowing the price… he is not the man I thought he’d be. He has grown cruel, emotionless, with none of the Cavanaugh spark of inspiration. He cannot be my legacy. It is time I accepted- Victor? How long have you been standing there? What are you doing? Put that down, pleas- “

		-Last words of Edmond Cavanaugh, 1897.
                </div>
            )
        break;
        case 'Disloyal':
            nodeContent = (
                <div>
                    <h1 className="my-4 text-4xl font-archaic">Disloyal</h1>
                    <p className="text-lg">You brokered a deal with Constance.</p>
                    <br />
                    <img src={node38} alt='Disloyal' loading='lazy' />
                    <br />
                    “There are few forces in the universe more powerful than love. This is something we Hermeticists have long understood- it is an energy, same as light, or gravity, and it bends the world to its will. Now I understand what drives Edmond’s madness.”

	-Unnamed Proctor to Edmond Cavanaugh’s acquaintances, 1897.

Try as he might, Edmond was never able to discern the cause of Victor’s chronic illness. He was only able to see its symptoms: bouts of debilitating pain, seizures, temporary blindness, bleeding from the eyes, ears, and nose. 
In his research, he speculated that the condition might be genetic, with himself a passive carrier of the gene, only activated in his son. Perhaps this is why he drove himself to madness attempting to find a cure: he blamed himself for cursing his son with the condition.

                </div>
            )
        break;
        case 'DrainingDay':
            nodeContent = (
                <div>
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/ZsHebHeC1XU?&autoplay=1" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                    />
                </div>
            )
        break;
        case 'Bloodthirsty':
            nodeContent = (
                <div>
                    <h1 className="my-4 text-4xl font-archaic">Bloodthirsty</h1>
                    <p className="text-lg">You chose to kill Constance.</p>
                    <br />
                    <img src={node40} alt='Bloodthirsty' loading='lazy' />
                    <br />
                    “-seems to me these techniques are maintained simply because the Elders have not bothered to try new things. This old Order of Father’s has clearly stagnated, afraid of pioneering new techniques. The advent of production lines, electricity, new mathematical techniques- these  should be accounted for in the alchemical processes, and updated their methods. The wonders they could accomplish if they but tried! It would take someone unafraid of the future to shake them out of their complacency. But my fantasy of our family regaining our status in the Order of the Three Keys remains just that- a young girl’s silly daydreams.”

		-Excerpt from the journal of Constance Cavanaugh, 1912.

Constance Cavanaugh spent most of her young life hiding. Hiding from the Order’s Proctors who pursued her family. Hiding from the ghosts of her father’s past. Hiding her talents for alchemy from her distracted father. She chose to learn in secret, stealing his books and reading them by the light of her lantern in the middle of the night. She had a hunger for knowledge and an unmatched skill for alchemy, which may have resulted in something wondrous, had her life not been cut short by the actions of the Proctors who finally caught up to her.
                </div>
            )
        break;
        case 'TerminalIllness':
            nodeContent = (
                <div>
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/b9-_xPKu-kU?&autoplay=1" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                    />
                </div>
            )
        break;
        case 'ForeverAndADay':
            nodeContent = (
                <div>
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/M5zIcAIq4FI?&autoplay=1" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                    />
                </div>
            )
        break;
        case 'Reckless':
            nodeContent = (
                <div>
                    <h1 className="my-4 text-4xl font-archaic">Reckless</h1>
                    <p className="text-lg">You lived three lives in one night.</p>
                    <br />
                    <img src={node43} alt='Reckless' loading='lazy' />
                    <br />
                    “You get it, don’t you? If every possible outcome branches off into a different reality, it means that there is a world where the bullet fires and one where the bullet doesn’t fire. And while there’s a version of you that sees me die, and a version of you that sees me survive, there is only one version of me- the one that survives. We can’t experience our own death. From our own viewpoints, and only from our own viewpoints, we are each immortal. We are quite literal Gods among men!”

Oscar Pentigras, PhD candidate and former initiate to the Order of the Three Keys (now excommunicated on “reasons of unsound principles”)

                </div>
            )
        break;
        case 'UnhingedBehavior':
            nodeContent = (
                <div>
                    <h1 className="my-4 text-4xl font-archaic">Unhinged Behavior</h1>
                    <p className="text-lg">You were sent to Hollow Grove Sanitarium.</p>
                    <br />
                    <img src={node44} alt='Unhinged Behavior' loading='lazy' />
                    <br />
                    To the superintendent of Hollow Grove Sanitarium:

	The letter accompanies the newest inmates, hereby ordered by this Court for involuntary hospitalization to your facility for a time period of indeterminate length, with their stay only to be ended when your staff and this Court can both be convinced of their return to sanity.
	These inmates have proven dangerous and absent of their faculties, prone to periodic fits of madness, visions, and violent outbursts. They seem unable to control themselves, and have been labeled a danger to society.

Of note is that most of the offenses are barely, if at all, remembered by the subjects, many being committed when the patient was in a fugue state. In addition, during interrogations by apprehending officers, each subject used the phrases “the one made many”, despite being detained in different times and places. I can only assume some sort of shared trauma, but have no evidence to back up this theory.

This Court directs these poor souls to your care. Treat them at your best discretion.

                </div>
            )
        break;
        case 'Knowledgable':
            nodeContent = (
                <div>
                    <h1 className="my-4 text-4xl font-archaic">Knowledgable</h1>
                    <p className="text-lg">Reminded Tidwell of the Swiss alienist's name.</p>
                    <br />
                    <img src={node45} alt='Knowledgable' loading='lazy' />
                    <br />
                    “Almost all subjects regard the experiment as a test of imagination. This conception is so general that it becomes, practically, a condition of the experiment. Nevertheless, the interpretation of the figures actually has little to do with imagination, and it is unnecessary to consider imagination a prerequisite....The interpretation of the chance forms falls in the field of perception and apperception rather than imagination.”
Hermann Rorschach, “Psychodiagnostics: A Diagnostic Test Based on Perception”  1921


Patients in Hollow Grove Sanitarium all began to exhibit signs of paranoia and hallucinations within a startlingly short period of time of one another. While the staff first saw this a coincidence, they soon began to hear the same phrases muttered under different breaths, and identical messages scrawled on floors and ceilings. Stories about a woman whispering in the walls spread so quickly that the staff thought the madness must be spread through suggestion, and greatly increased the isolation of each patient in an attempt to stop it multiplying. This proved a mistake. 
The patients put into solitary rooms had their symptoms grow inexorably worse. They screamed that they could not tune her out, that there was safety in the flock, that the wolf always attacks those that stray.


They all yelled those exact same words. At the exact same time. In different wings of the building.


Soon after, the staff returned them to their more communal lifestyle. 

                </div>
            )
        break;
        case 'Committed':
            nodeContent = (
                <div>
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/bl066N48PTA?&autoplay=1" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                    />
                </div>
            )
        break;
        case 'Retrophilic':
            nodeContent = (
                <div>
                    <h1 className="my-4 text-4xl font-archaic">Retrophilic</h1>
                    <p className="text-lg">Rejected the modern for the classic.</p>
                    <br />
                    <img src={node47} alt='Retrophilic' loading='lazy' />
                    <br />
                    “It matters not what toys and gadgets you bring to our doorstep. You cannot buy your way into our organization with ‘innovations’ we have already had for fifty years. Who do you think allowed you to create such things? Who served as the spark for your meager imagination? There is a larger world you will never be allowed to enter, Thomas, because if you did, it would swallow you whole.”

	Elder Brahe of the Order of the Three Keys, in a letter to Thomas Edison, 1879

It was the invention of the phonograph in 1877 that catapulted the man named Thomas Edison onto the world’s stage and earned him the moniker “The Wizard of Menlo Park”. Many other inventions would follow, and with them, money and fame. But no matter his success, there was one thing that remained out of Edison’s grasp: admittance into that strange social club he had heard tell of, and its strange lodge in Union Square. Even when he founded the Edison Electric Company with the help of the Vanderbilts, a family he knew frequented that enigmatic lodge, he could not get them to speak a word of its existence, instead receiving a look of disdain at its mere mention. 
And yet, whenever he tried to contact someone within the organization, he would soon after find a stray note, or scrap of paper on one of his work tables detailing a new concept that would lead him to another invention. He could never get over the feeling that someone was giving him a consolation prize.
                </div>
            )
        break;
        case 'Neophilic':
            nodeContent = (
                <div>
                    <h1 className="my-4 text-4xl font-archaic">Neoliphic</h1>
                    <p className="text-lg">Rejected the classic for the modern.</p>
                    <br />
                    <img src={node48} alt='Neophilic' loading='lazy' />
                    <br />
                    “I don't want to get well
I don't want to get well
I'm glad they shot me on the fighting line, fine!
The doctor says that I'm in bad condition
But oh, oh, oh, I've got so much ambition;
I don't want to get well
I don't want to get well
For I'm having a wonderful time”

-”I Don’t Want to Get Well”. Composed by Harold Jentes, Lyrics by Harry Pease and Howard Johnson, 1917

The staff at Hollow Grove know that the Superintendent's radio has a tendency to act weirdly. Its strange static and periodic interruptions have become so commonplace that none give it much thought anymore. Sure, sometimes their favorite Scott Joplin rag is interrupted by a man selling something called a “tell-a-vision”, or by incredibly aggressive music made by instruments no one amongst the crew can place, or by someone repeated the words “Chronos” and “1971” again and again, but really, is it any stranger than the other things they deal with on a day to day basis? Better to leave it alone.  

                </div>
            )
        break;
        case 'Intractible':
            nodeContent = (
                <div>
                    <h1 className="my-4 text-4xl font-archaic">Intractible</h1>
                    <p className="text-lg">You left Tidwell waiting.</p>
                    <br />
                    <img src={node49} alt='Intractible' loading='lazy' />
                    <br />
                    “Into whatsoever houses I enter, I will enter to help the sick, and I will abstain from all intentional wrong-doing and harm, especially from abusing the bodies of man or woman, bond or free. And whatsoever I shall see or hear in the course of my profession, as well as outside my profession in my intercourse with men, if it be what should not be published abroad, I will never divulge, holding such things to be holy secrets.”


		-From the Hippocratic Oath, translated from the Greek (1923 Loeb Edition)

The man known as Jeremiah Tidwell pursued a career in medicine only after trying and failing at a number of other vocations. A slight man, he struck others as feckless and bumbling, struggling to garner respect in those around him. He enrolled in medical school in an attempt to avoid being drafted in the military ahead of the rising conflicts in Europe. Imagine his dismay when, upon graduating, he was sent to a Sanitarium dangerously close to the Western Front.

The staff at Hollow Grove had been told to expect a stuttering, timid new doctor, but the man who arrived on their doorstep was not what they expected. Sure, he seemed quiet and withdrawn, but with a cold, calculating presence that seemed to fill the room with danger. One could be excused for thinking that the man who boarded the boat in New York City was not the same man who stepped off in France.
                </div>
            )
        break;
        case 'Paranoid':
            nodeContent = (
                <div>
                    <h1 className="my-4 text-4xl font-archaic">Paranoid</h1>
                    <p className="text-lg">You learned more about Tidwell's practices.</p>
                    <br />
                    <img src={node50} alt='Paranoid' loading='lazy' />
                    <br />
                    “Little by little all Bithynia and Galatia and Thrace came running, for every one of those who returned said that he saw the god born and touched him with his hands when after a while he became great and presented a human form. Images and statues were also made, representing that holy dragon, some of bronze, some of silver, and the god was given the name of Glykon, as a consequence of the emmeter and divine order, which Alexander pronounced: I am Glykon, third degree descendant of Zeus, light for men.”
- From Alexander, a False Prophet, by Lucian of Samosata, approximately 160 AD

In 135 AD, a Greek mystic and oracle known as Alexander the Paphlagonian founded a group known as a Cult of Glycon, and worshiped a deity depicted as a large snake with humanlike features. The cult gained popularity over the next twenty to thirty years, but its true purpose was known to only a few: Glycon was a fabrication of Alexander, and the real subject of their worship was the Mesopotamian demoness, Lamashtu. 
Soon after the Cult’s founding, Alexander learned of the existence of a large, three sided Obelisk, hidden inside the Library of Alexandria and powerful enough, he believed, to return Lamashtu to our world. Though Alexander died before his task could be completed, his followers managed to steal Obelisk and bring it to the city of Chalcedon, where they undertook a dangerous ritual. They would have succeeded, had it not been for the intervention of the Order of the Three Keys. Instead of banishing her again, they had no choice but to seal her inside the Obelisk, and keep her contained with alchemically-imbued chains. They then tossed the Obelisk into the Black Sea, hoping to keep Lamastu hidden from the world forever. They would henceforth be known as the Order of the Three Keys.

But the demoness had other ideas. 

                </div>
            )
        break;
        case 'LikeINeedAHoleInTheHead':
            nodeContent = (
                <div>
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/c_X5ji2HGmU?&autoplay=1" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                    />
                </div>
            )
        break;
        case 'Dishonest':
            nodeContent = (
                <div>
                    <h1 className="my-4 text-4xl font-archaic">Dishonest</h1>
                    <p className="text-lg">Revealed "Tidwell"'s true nature.</p>
                    <br />
                    <img src={node52} alt='Dishonest' loading='lazy' />
                    <br />
                    “A week ago our hunters were able to track down the Proctor serving as Lamashtu’s host body. We lost three in the fight, but managed to kill it. That means her essence should be weakened and split, taking up residence in the minds of those whom she made her original deal with. If so, their minds won’t be able to take the strain, and they’ll crack. Our network is ensuring any mental patients with appropriate symptoms are sent to Hollow Grove. It will be up to you to undertake the ritual, reconstitute her, and bind her to our service. We await your success.”

		-Adeptus Valefor, in a message to an unnamed agent of the Children of the 
Broken Chain

Stedelin and Kolgrim were middling Theurgists at best, with no real status in the Order. However their traveling companion, a man known to history as the Comte de St. Germain, was an exceptionally talented alchemist, and in possession of something of incredible value: a map to the underwater location of the forgotten Obelisk. It was, therefore, extremely unfortunate that their caravan should be set upon by a raiding party belonging to the Khan of the Golden Horde, Jani Beg.
Stedelin and Kolgrim were middling at pain tolerance, as well, and it did not take long before the Khan’s torturer forced them to confess the map’s importance. Obsessed with what he saw as the ultimate weapon, Jani Beg raided the port city of Kaffi, stole two boats, and had his men dredge up the Obelisk from its resting place of over a thousand years. 
St. Germain managed to escape into the night while the Khan’s attention was divided, but the ritual to break the Chains of Chalcedon was simple, even for two middling Theurgists. Lamashtu soon walked the world again after two millenia, and seeing the rise of corruption and feudalism across Europe, decided that a cleansing was in order. She created an illness the world would later come to call the Black Plague, and used the Golden Khan’s armies to spread it, demanding that they launch infected bodies over the walls of cities he invaded.
Stedelin and Kolgrim, for their service, were granted wisdom and power by their Nightmare Queen, and formed a new cult, the Children of the Broken Chain, devoting themselves to new knowledge, and the pursuit of power, whatever the cost.
                </div>
            )
        break;
        case 'TheOneMadeMany':
            nodeContent = (
                <div>
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/RPVx6qxjnac?&autoplay=1" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                    />
                </div>
            )
        break;
        case 'Deceitful':
            nodeContent = (
                <div>
                    <h1 className="my-4 text-4xl font-archaic">Deceitful</h1>
                    <p className="text-lg">Revealed "Doss"'s true nature.</p>
                    <br />
                    <img src={node54} alt='Deceitful' loading='lazy' />
                    <br />
                    “This vessel of earth, in this form, is called by the Philosophers their Triple Vessel, for within it, there is in the midst a Stage, or Floor, and upon that a dish or platter full of lukewarm ashes, within which is set the Philosophical Egg, a container that might hold even the most violent of souls-”


-From The Book of Hieroglyphical Figures, by Nicholas Flamel and translated by Eirenaeus Orandus, 1624

It took over ten years for the Comte De St. Germain to muster up hermeticists strong enough to combat Lamashtu’s campaign of terror. The Order of the Three Keys had long since scattered, weakened by the Great Dissolution of 363 AD and hadn’t attempted to centralize their power since. The organization only existed in small clusters, very few evening knowing of the other’s existence. St. Germain traveled throughout the world, attempting to rejoin the broken pieces of the Order, and finally crossed paths with a man by the name of Nicholas Flamel. 
Flamel was not a member of the Order, but was still a supremely talented alchemist, with skill that put even St. Germain to shame. He also had connections all over Europe. Within months, he had managed to put together a group of Hermeticists strong enough to stand up to Lamashtu.
The banishment ritual was grueling, and more than a few lost their lives in the struggle, but by the end, the demoness found herself bound within the Obelisk once again, and a divinator named Jacobina Felice was charged with hiding the the Obelisk where no one else could find it.
Saddened by his role in Lamashtu’s release, St. Germain lamented there was not time enough to make up for his mistakes. Hearing this, Flamel produced a vial of red liquid, and insisted St. Germain take a single sip, then remarked that perhaps he could find the time after all. Flamel left, never crossing paths with the Order again.


Historical accounts state that a man called the Comte de St. Germain died in 1784. 

                </div>
            )
        break;
        case 'TheManyMadeOne':
            nodeContent = (
                <div>
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/VDrgD-SYacw?&autoplay=1" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                    />
                </div>
            )
        break;
        case 'Uneasy':
            nodeContent = (
                <div>
                    <h1 className="my-4 text-4xl font-archaic">Uneasy</h1>
                    <p className="text-lg">Brokered an alliance with "Tidwell".</p>
                    <br />
                    <img src={node56} alt='Uneasy' loading='lazy' />
                    <br />
                    “Daughter Vepar- 
Know, first, that the idea of writing this letter fills me with loathing. But it is nothing compared to the need I have for your cabal’s power. I have a ritual I must undertake, one that requires an artefact capable of harnessing energy from beyond the veil. Specifically, I seek a substance known as Akkadian Cobalt- I know your organization is in possession of a large amount. 

Therefore, I regretfully request your assistance, as my own peers have denied me. I know not what I can offer in recompense, save for this: I am sure my attempts to pierce through whatever it is that separate our world from the world beyond will result in data you will desperately want for whatever designs you may have. I will offer the results of my experiments freely, you must simply give me use of the Obelisk until my needs are sated.”

		-Edmond Cavanaugh, a letter to the Children of the Broken Chain, 1897.

Unbeknownst to most, the Divinator Jacobina Felice hid the Obelisk under a catacomb in the city of Sevastopol, intending for the knowledge of its whereabouts to die with her. However, in her final months, she was racked with doubts- what if this artefact was needed by her Order in the future? Her visions had failed years ago, and she was no longer sure of her predictions. In a fit of weakness, she left clues that, if followed, would lead back to the Obelisk’s hiding place.


Unfortunately for Felice, it was the Children of the Broken Chain that would find those clues. But by the time they located the Obelisk, it lay buried under a bustling city, and excavating Sevastopol was not something done in secret. So the Children began whispering in the ears of the right people, stoking conflict, fanning the flames until the world heard the opening salvos of the Crimean War.

The chaos of the siege of Sevastopol served as a perfect cover to enter the city, find the Obelisk, and remove it without being noticed. The naval bombardments and trench digging did have the excavation for them, and the ill-fated and infamous Charge of the Light Brigade (itself a credit to the string-pulling abilities of the Children) ensured that there were no English troops around to witness the Obelisk being pulled from the Earth.

The only problem, of course, was that the Children had long lost the knowledge of how to release Lamashtu from the Obelisk again. But perhaps they could trick someone else into unwittingly doing it for them. Someone willing to direct vast amounts of power and arcane energies into the Obelisk… someone desperate, with nothing left to lose…
                </div>
            )
        break;
        case 'Opportunistic':
            nodeContent = (
                <div>
                    <h1 className="my-4 text-4xl font-archaic">Opportunistic</h1>
                    <p className="text-lg">Did not release your fellow inmates before making your choice.</p>
                    <br />
                    <img src={node57} alt='Opportunistic' loading='lazy' />
                    <br />
                    “She who sees beyond the curves of time. She who peers through the keyhole of fate. She is the arbiter of balance, the cleansing flame in a forest of chaos and corruption. Daughter of Anu, She of Seven Names, The Hand the Holds the Oar. Guide us. Lead us. Purge Us. Free Us.”


- “Devotion to the Nightmare Queen,” excerpt from an unnamed text found on the body of a suspected Heretic, circa 1765.

There is a reason Lamashtu has had so many devoted followers over the millenia, and why so many cults spring up to worship her. These people are not inherently evil, but they are filled with the sense that Something is Not Right. The world is on a collision course with disaster, and only something with extreme power can divert its trajectory. 

Throughout history, cults connected to Lamashtu have written of a coming calamity, one that could swallow up the world, and of Lamashtu’s singular ability to prevent it. Her followers believe all her terrible acts are a necessary evil, clearing the bad seeds of humanity before they have a chance to manifest their chaos. And there are some who believe this calamity has already begun.

But every writing is frustratingly vague about the nature of this disaster- is it something mundane as a force of nature? Something extrasolar? Or something even bigger? Is existence itself at risk? Is time? 

                </div>
            )
        break;
        case 'BetterTheDevilYouKnow':
            nodeContent = (
                <div>
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/IacstgmDJsA?&autoplay=1" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                    />
                </div>
            )
        break;
        case 'GoneForGood':
            nodeContent = (
                <div>
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/p_pQRr4p0rI?&autoplay=1" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                    />
                </div>
            )
        break;
        case 'ALead':
            nodeContent = (
                <div>
                    <h1 className="my-4 text-4xl font-archaic">A Lead</h1>
                    <p className="text-lg">Discovered Edmond's whereabouts.</p>
                    <br />
                    <img src={node60} img='A Lead' loading='lazy' />
                    <br />
                    Proctors-

We are dispatching you to investigate Hollow Grove Sanitarium. According to our informants, the patients are suffering from a sudden outbreak of psychosis and mass delusions. Many have been hearing voices. One escaped patient, when detained by police, would not speak, instead writing the name E. Cavanaugh over and over.


Upon further investigation, we discovered Edmond has taken up residence there as a staff doctor. This is the closest we’ve gotten to him in almost 20 years. Proceed with haste, but do not alert him.


Present this letter to the staff when you arrive. This seal will identify you as Proctors of the Order, with all the authority that afford you. The on-call alienist, Dr. Tidwell, will give you any assistance you require. If he resists, kindly remind him about the incident at Edinburgh Hospital, and how unfortunate it would be if news of his involvement were made public. 

						-Elder Lockyear
						Theurgist of the Second Key
                </div>
            )
        break;
        case 'Combative':
            nodeContent = (
                <div>
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/zfUmDCknsaU?&autoplay=1" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                    />
                </div>
            )
        break;
        case 'Hesitant':
            nodeContent = (
                <div>
                    <h1 className="my-4 text-4xl font-archaic">Hesitant</h1>
                    <p className="text-lg">Escorted from Hollow Grove prematurely.</p>
                    <br />
                    <img src={node62} alt='Hesitant' loading='lazy' />
                    <br />
                    “...all the symptoms of a virus. It’s almost like it's evolving.”
“How so?”
“Every treatment just gets absorbed into the fantasy. The projective tests, the ECT, they just get reinterpreted and introduced into the delusion.”
“But you specified a virus. Do you mean-”
“It’s spreading. Like their madness is contagious.”

-Excerpt from audio recording between Dr. Tidwell and an undisclosed Hollow Grove staff member, year unknown.

The Royal Edinburgh Hospital has a rich and storied history, dating back to its founding in 1807. It was originally established as the Edinburgh Lunatic Asylum, a place where*(hfkjhsf8&*

alsuer)*hf1965, Edinburgh University was at the forefront of a series of U.S. Government-backed experiments in quantum physics and particle acceleration. However, tragedy struck(yALKHkjdf(

lks,hlkhejhospital's past is not without controversy. In 1917, a number of patients mysteriously disappeared from the hospital, and their records would later be found to be missing. This led to rumors of a cover-upLakhflkheALKH

qwrwqerwhen a catastrophic explosion in the accelerator killed 23 people and left several others in a coma. Further investigation uncovered the use of unapproved, previously sealed materials that may have lead toklashfasd 
airjlarjwerp0w38rsome speculating that the missing patients had been the subjects of unethical medical experimentsalkhlFSkljlfhFLHyuieyuihlhERROR LOADING JAVASCRIPT

                </div>
            )
        break;
        case 'Hallucinations':
            nodeContent = (
                <div>
                    <h1 className="my-4 text-4xl font-archaic">Hallucinations</h1>
                    <p className="text-lg">Received visions of Eveline.</p>
                    <br />
                    <img src={node63} alt='Hallucinations' loading='lazy' />
                    <br />
                    
                </div>
            )
        break;
        case 'Taciturn':
            nodeContent = (
                <div>
                    <h1 className="my-4 text-4xl font-archaic">Taciturn</h1>
                    <p className="text-lg">Refused to answer Tidwell's questions.</p>
                    <br />
                    <img src={node64} alt='Taciturn' loading='lazy' />
                    <br />
                    “-more about these shared delusions? I noticed the records were sparse.”
“I’m just not sure where to start. There’s an incredibly rich lore here, and depending on the session, they’ll talk about events from nearly 5000 years.”
“5000?”
“Yes. An esoteric order that has roots in Ancient Greece, Babylon, and Egypt. A cadre of mask wearing demon hunters, alchemists, people who see the future-”
“Well, we’ve heard stories like this before.”
“Of course. But the scope of it, the breadth and depth of this invented world, let alone the fact that each of them share it, down to the most minute details. One could almost be forgiven if they, even just for a second, allowed themself to believe-”
“I’m going to stop you there, Tidwell. This kind of talk is dangerous. You must not risk the patients hearing you give their false realities and kind of legitimacy.”


-Excerpt from audio recording between Dr. Tidwell and superintendent of Hollow Grove, year unknown.

                </div>
            )
        break;
        case 'Confused':
            nodeContent = (
                <div>
                    <h1 className="my-4 text-4xl font-archaic">Confused</h1>
                    <p className="text-lg">Learned more about what Edmond was doing.</p>
                    <br />
                    <img src={node65} alt='Confused' loading='lazy' />
                    <br />

                </div>
            )
        break;
        case 'Impatient':
            nodeContent = (
                <div>
                    <h1 className="my-4 text-4xl font-archaic">Impatient</h1>
                    <p className="text-lg">Removed the blindfold.</p>
                    <br />
                    <img src={node66} alt='Impatient' loading='lazy' />
                    <br />
                    “And I beheld a great schism, a fracture in the fabric of space and time. It was as if a thousand million pasts and futures coalesced in a single moment, and I was but a mere witness to its enormity. The infinite realities of the universe were laid bare before me, stretching out into the vastness of the void, an endless expanse of what could have been and what might never be. 

I knew that my mortal mind could not comprehend the fullness of its meaning. For who among us can truly grasp the immensity of the cosmos, the uncountable threads of fate that bind us all together? And yet, there in the midst of it all, I saw a shadowy silhouette, a dark and ominous presence at the center of the fracture, staring out at me with cold and unfeeling eyes.”


- Recovered Testimony of Proctor Ananke, from the collection of the Order’s Apocrypha. Year of origin unknown.

Long have the initiated known of the Three Hermetic Keys: Theurgy, with its focus on the past; Alchemy, the study of the present nature of things; and Divination, the viewing and prediction of the future. Those who travel in these circles also know of the “Fourth Key”, Goetia: forbidden by some, it is the magic of the void outside our reality, and its study focuses on entropy and communication with the entities that exist outside the walls of our timeline.

But there has long been rumored the existence of a “Fifth Key”: never given a name, for fear that it might solidify it beyond the speculative. Those who suspect its existence refer to it as “Reality magic”, the ability to see beyond our own timeline, beyond the void that surrounds out world, and into the timelines of the infinite other realities that exist beyond the space between spaces.

What if one could observe these other realities? Could contact them, bring things from one reality to another? These whispered questions are quickly silenced, however, as the people who know about such things also know that some threads are better left unpulled. 
                </div>
            )
        break;
        case 'Unflappable':
            nodeContent = (
                <div>
                    <h1 className="my-4 text-4xl font-archaic">Unflappable</h1>
                    <p className="text-lg">Didn't remove the blindfold.</p>
                    <br />
                    <img src={node67} alt='Unflappable' loading='lazy' />
                    <br />
                    “I don’t have weeks, Ramey! The Engine needs another Plutonium core if I’m expected to finish these rounds of tests. … The regulations are purely political, you know that. There has to be another source for… what? I thought it was destroyed! … No, no, no, it’s fine. do what you need to do, just get it to me. And keep it quiet. If word got out, people might think-”


-Excerpt from phone conversation between Edmond Cavanaugh, Director of Project Eveline, and James T. Ramey, Vice Chairman of the Atomic Energy Commision, 1964


There are few objects in modern history that can truly be said to be cursed. The plutonium sphere known as the “Demon Core” certainly fits the bill. Originally part of a third atomic bomb scheduled for use on Japan, the war’s end changed its destiny. Instead, it was used in multiple experiments on radioactivity, but in not one but two separate trials, an accident exposed scientists to lethal doses of radiation. The more superstitious among the scientific community began to think that the core was trying to make up for lives it was owed.
Officially, the core was melted down after the second incident, but a select few knew the truth: the core was kept in deep storage, off the books, in case another use could be found. Twenty years later, it disappeared from its storage facility.  
                </div>
            )
        break;
        case 'Dumbfounded':
            nodeContent = (
                <div>
                    <h1 className="my-4 text-4xl font-archaic">Dumbfounded</h1>
                    <p className="text-lg">You begin to question reality.</p>
                    <br />
                    <img src={node68} alt='Dumbfounded' loading='lazy' />
                    <br />

                </div>
            )
        break;
        case 'InvasiveProcedures':
            nodeContent = (
                <div>
                    <iframe 
                        width="560"     
                        height="315" 
                        src="https://www.youtube.com/embed/dV-FQD9YFWU?&autoplay=1" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                    />
                </div>
            )
        break;
        case 'Fickle':
            nodeContent = (
                <div>
                    <h1 className="my-4 text-4xl font-archaic">Fickle</h1>
                    <p className="text-lg">You faced a decision on who to believe.</p>
                    <br />
                    <img src={node70} alt='Fickle' loading='lazy' />
                    <br />

                </div>
            )
        break;
        case 'ANewDay':
            nodeContent = (
                <div>
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/O0jNT7-U-bs?&autoplay=1" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                    />
                </div>
            )
        break;
        case 'FinallyFree':
            nodeContent = (
                <div>
                    <iframe 
                        width="560" 
                        height="315" 
                        src="https://www.youtube.com/embed/iCddPGiKTiM?&autoplay=1" 
                        title="YouTube video player" 
                        frameborder="0" 
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                        allowfullscreen
                    />
                </div>
            )
        break;
        case 'Headstrong':
            nodeContent = (
                <div>
                    <h1 className="my-4 text-4xl font-archaic">Headstrong</h1>
                    <p className="text-lg">You kept the doctor waiting.</p>
                    <br />
                    <img src={node73} alt='Headstrong' loading='lazy' />
                    <br />

                </div>
            )
        break;
        case 'DelusionsOfGrandeur':
            nodeContent = (
                <div>
                    <h1 className="my-4 text-4xl font-archaic">Delusions Of Grandeur</h1>
                    <p className="text-lg">You saw a message from the future.</p>
                </div>
            )
        break;
        case 'Hint: Stubborn':
            nodeContent = (
                <div>
                    Sometimes, a hero refuses the call.
                </div>
            )
        break;
        case 'Hint: Sins of the Father': 
        case 'Hint: Sound Of Body':
            nodeContent = (
                <div>
                    Sometimes red is a flattering color.
                </div>
            )
        break;
        case 'Hint: Beyond The Veil': 
        case 'Hint: Sound Of Mind':
            nodeContent = (
                <div>
                    Sometimes blue is a flattering color.
                </div>
            )
        break;
        case 'Hint: To The Nines': 
        case 'Hint: Narcissistic':
            nodeContent = (
                <div>
                    Sometimes we must dress the part.
                </div>
            )
        break;
        case 'Hint: Alchemist': 
        case 'Hint: Theurgist': 
        case 'Hint: Oracle':
            nodeContent = (
                <div>
                    Some encounters are merely a matter of timing.
                </div>
            )
        break;
        case 'Hint: What Was Lost':
            nodeContent = (
                <div>
                    Sometimes things should be returned.
                </div>
            )
        break;
        case 'Hint: Honesty':
            nodeContent = (
                <div>
                    Sometimes honesty is the best policy.
                </div>
            )
        break;
        case 'Hint: Narrow-Minded':
            nodeContent = (
                <div>
                    Sometimes we must be consistent with our choices.
                </div>
            )
        break;
        case 'Hint: Unmotivated': 
        case 'Hint: Inactive': 
        case 'Hint: Intractible': 
        case 'Hint: Headstrong':
            nodeContent = (
                <div>
                    Sometimes inaction is a choice.
                </div>
            )
        break;
        case 'Hint: Gambler':
            nodeContent = (
                <div>
                    Sometimes it's quicker to just guess.
                </div>
            )
        break;
        case 'Hint: Indecisive':
            nodeContent = (
                <div>
                    Sometimes it's better to run down the clock.
                </div>
            )
        break;
        case 'Hint: Narcoleptic':
            nodeContent = (
                <div>
                    Sometimes we all need a rest.
                </div>
            )
        break;
        case 'Hint: Co-ordinated':
            nodeContent = (
                <div>
                    Sometimes your moves can impress the right people.
                </div>
            )
        break;
        case 'Hint: Vocal':
            nodeContent = (
                <div>
                    Sometimes your voice can impress the right person.
                </div>
            )
        break;
        case 'Hint: Obstinate':
            nodeContent = (
                <div>
                    Sometimes independence can be rewarded.
                </div>
            )
        break;
        case 'Hint: Arrogant':
            nodeContent = (
                <div>
                    Sometimes you need to wait around for awhile.
                </div>
            )
        break;
        case 'Hint: Kleptomania':
            nodeContent = (
                <div>
                    Sometimes you need to take what isn't yours.
                </div>
            )
        break;
        case 'Hint: Lethargic':
            nodeContent = (
                <div>
                    Sometimes you need to leave well enough alone.
                </div>
            )
        break;
        case 'Hint: Insubordinate':
            nodeContent = (
                <div>
                    Sometimes you feel the need to refuse an order.
                </div>
            )
        break;
        case 'Hint: Bloodthirsty':
            nodeContent =(
                <div>
                    Sometimes you make sacrifices.
                </div>
            )
        break;
        case 'Hint: Reckless':
            nodeContent = (
                <div>
                    Sometimes refusal to play by the rules pays off.
                </div>
            )
        break;
        case 'Hint: Knowledgable':
            nodeContent = (
                <div>
                    Sometimes it's good to show off what you know.
                </div>
            )
        break;
        case 'Hint: Retrophilic':
            nodeContent = (
                <div>
                    Sometimes the classics are better.
                </div>
            )
        break;
        case 'Hint: Neophilic':
            nodeContent = (
                <div>
                    Sometimes newer is better.
                </div>
            )
        break;
        case 'Hint: Opportunistic':
            nodeContent = (
                <div>
                    Sometimes it's better to take matters into your own hands.
                </div>
            )
        break;
        case 'Hint: Hesitant':
            nodeContent = (
                <div>
                    Sometimes it's better to be a pushover.
                </div>
            )
        break;
        case 'Hint: Taciturn':
            nodeContent = (
                <div>
                    Sometimes silence is the best policy
                </div>
            )
        break;
        case 'Hint: Impatient':
            nodeContent = (
                <div>
                    Sometimes taking a peek won't kill you.
                </div>
            )
        break;
        case 'Hint: Unflappable':
            nodeContent = (
                <div>
                    Sometimes it's better not to look.
                </div>
            )
        break;
        case 'Hint: Delusions of Grandeur':
            nodeContent = (
                <div>
                    Sometimes you find a message in an unexpected place.
                </div>
            )
        break;
        case 'Hint: Death Deferred': 
        case 'Hint: Misled': 
        case 'Hint: Better Safe Than Sorry':
        case 'Hint: Cruel Calculus': 
        case "Hint: All The Things I Might Have Said": 
        case 'Hint: A Cleansing Flame': 
        case 'Hint: No Second Chances':
        case 'Hint: Terminal Illness': 
        case 'Hint: Forever And A Day': 
        case 'Hint: Better The Devil You Know': 
        case 'Hint: Gone For Good(?)':
        case 'Hint: A New Day': 
        case 'Hint: Finally Free':
            nodeContent = (
                <div>
                    This important choice will be placed before you, should you travel the path far enough.
                </div>
            )
        break;
        case 'Hint: An Invitation': 
        case 'Hint: Out Of Time': 
        case 'Hint: Pandoras Box': 
        case 'Hint: A Soul in Limbo': 
        case 'Hint: Machine Of Blood':
        case 'Hint: Chains That Bind': 
        case 'Hint: Mors Ex Machina': 
        case 'Hint: Unbound': 
        case 'Hint: Alienist In Training': 
        case 'Hint: Oblivious':
        case 'Hint: Critical Thinker': 
        case 'Hint: Strong Willed': 
        case 'Hint: Anxious': 
        case 'Hint: Pyromania': 
        case 'Hint: Thanatophobia':
        case 'Hint: Hot-Headed': 
        case 'Hint: Electrophilia': 
        case 'Hint: Epiplaphobia': 
        case 'Hint: Left To Starve': 
        case 'Hint: Out With A Bang':
        case 'Hint: Blaze Of Glory': 
        case 'Hint: Mission Of Mercy': 
        case 'Hint: Nepotism': 
        case 'Hint: Sanguine': 
        case 'Hint: Frequent Attacks':
        case 'Hint: Patricidal': 
        case 'Hint: Disloyal': 
        case 'Hint: Draining Day': 
        case 'Hint: Unhinged Behavior': 
        case 'Hint: Committed':
        case 'Hint: Paranoid': 
        case 'Hint: Like I Need A Hole In The Head': 
        case 'Hint: Dishonest': 
        case 'Hint: The One Made Many':
        case 'Hint: Deceitful': 
        case 'Hint: The Many Made One': 
        case 'Hint: Uneasy': 
        case 'Hint: A Lead': 
        case 'Hint: Combative': 
        case 'Hint: Hallucinations':
        case 'Hint: Confused': 
        case 'Hint: Dumbfounded': 
        case 'Hint: Invasive Procedures': 
        case 'Hint: Fickle':
            nodeContent = (
                <div>
                    Certain things are pre-destined, all you need to do is walk the path before you.
                </div>
            )
        break;
        default:
        break;
    }

  return (
    <div>
        <div className="fixed z-50 grid w-full h-full overflow-auto bg-black wrapper bg-opacity-70">
            <div className="p-4 wrap place-self-center max-w-prose md:my-20">
                <div className="p-8 text-center text-black bg-white border border-black place-content-center outline outline-black outline-offset-2 bg-opacity-40">
                    {nodeContent}
                    <br />
                    <button
                        className="p-2 border border-black hover:bg-black hover:text-white"
                        onClick={() => setCpShow(false)}
                        >Close</button>
                </div>
            </div>
        </div>
    </div>
  )
}