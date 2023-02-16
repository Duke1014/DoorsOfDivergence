import React, { useState } from 'react'

    // export let activeNode = false;

export default function NodesContent({ activeNode }) {
    
    const [nodeContent, setNodeContent] = useState()

    // onMount(async () => {
    //     if (
    //         activeNode == 'OutWithABang' ||
    //         activeNode == 'DeathDeferred' ||
    //         activeNode == 'Misled' ||
    //         activeNode == 'BetterSafeThanSorry'
    //     ) {
    //         document.getElementById('video-iframe').requestFullscreen();
    //         // document.body.
    //     }
    // });

    if (activeNode === 'WelcomeToParadox') {
        return <div>
            <h1 class="my-4 text-4xl font-archaic">WELCOME TO PARADOX</h1>
            <p class="text-lg">You began the journey of (multiple) lifetimes</p>
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
    } else if (activeNode === 'AnInvitation'){
        return <div>
            <h1 class="my-4 text-4xl font-archaic">An Invitation</h1>
            <p class="text-lg">You answered Edmond Cavanaugh's summons</p>
            <br />
            <img src="img/node-AnInvitation.png" alt="An Invitation" loading="lazy" />
            <br />
            <blockquote>
                “As base metals are transmuted by our alchemy, so too do we transmute our spiritual forms. Discard your visage, it has no link to your mind. Discard your name, it does not baptize your spirit. Discard your past, it will not dictate your future. Take this mask, brother, and with it, show us the face of your soul.”
            </blockquote>
            <p class="max-w-sm mt-2 ml-auto italic text-right">
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
    } else if (activeNode === 'Stubborn') {
        return <div>
            <h1 class="my-4 text-4xl font-archaic">Stubborn</h1>
            <p class="text-lg">You refused the Proctor's offer</p>
            <br />
            <blockquote>
                “-sigils used in the ritual are not in any approved spellcraft. I have been unable to find a direct translation, but they appear to be derivative of a ritual described in a Goetic tome. I am asking the Elders to send a Proctor, as I believe a Rite of Inquisition is the only way to root out any heresy that may be-”
            </blockquote>
            <p class="max-w-sm mt-2 ml-auto italic text-right">
                — Discovered fragment of a letter, written approximately 1835
            </p>
            <p>
                The Rite of Inquisition is the most important duty of Proctors within the Order of the Three Keys. Any member, even an Elder, suspected of engaging in forbidden research, such as blood magic or Goetia, is put under immediate investigation by a Proctor. The Proctors are given wide latitude and serve as judge, jury, and, should the evidence prove the accused’s guilt, executioner. Mercy is seldom given, although some Proctors have been known to commute sentences should the accused help ferret out their fellow heretics.
            </p>
        </div>
    } else if (activeNode === 'SinsOfTheFather') {
        return <div>
            <h1 class="my-4 text-4xl font-archaic">Sins of the Father</h1>
            <p class="text-lg">You chose the Red cards</p>
            <br />
            <img src="img/node-SinsOfTheFather.png" alt="Sins of the Father" loading="lazy" />
            <br />
            <blockquote>
                “Victor’s condition is worsening. The attacks come at increasing frequency. All I can do is hold my darling boy and comfort him while he convulses, assuring him it will pass, lying to him that this will be the last time. Though there is no evidence that this ailment will become fatal, I fear it will continue to progress until he is forced to live in a state of perpetual agony.”
            </blockquote>
            <p class="max-w-sm mt-2 ml-auto italic text-right">
                — From the Journal of Edmond Cavanaugh, August 8th, 1896
            </p>
            <p>
                While Edmond had hoped his son would follow in his alchemical footsteps, or at the very least pursue history and Theurgy like his mother, Victor seemed singularly focused on the movement of the celestial spheres, and with it, the ancient mysteries of divination. Ever the doting father, Edmond did what he could to encourage the boy’s interests, secretly dreaming of his son becoming the youngest divination master in the Order’s recent history. These dreams were put to a halt, however, when Victor’s mysterious illness presented itself. Edmond’s search for a cure would drive him to madness.
            </p>
        </div>
    } else if (activeNode === 'ToTheNines') {
        return <div>
            <h1 class="my-4 text-4xl font-archaic">To the Nines</h1>
            <p class="text-lg">You donned Edmond's Order regalia</p>
            <br />
            <img src="img/node-ToTheNines.png" alt="To The Nines" loading="lazy" />
            <br />
            <blockquote>
                “Nature loves to hide her secrets, and she does not suffer the hidden truth about the essential nature of the gods to be flung in naked words to the ears of the profane”
            </blockquote>
            <p class="max-w-sm mt-2 ml-auto italic text-right">— ”Oration VII”, Julian the Apostate</p>
            <p>
                In 360 CE, the Order of the Three Keys was perhaps the most influential organization in the known world: members sat on the thrones of powerful empires, and while others had the ears of kings and queens. This did not come without cost- a growing dissent towards the Order came to a head with the assassination of Emperor Julian the Apostate in Rome, himself a Theurgist and Alchemist. His murder sounded a clarion call around the world, and a string of high-profile assassinations followed, driving the members of the Order into hiding in what would later be called the Great Dissolution. As a direct result, Order members would wear masks during their meetings, so that no member could be forced to reveal the identity of another. It would be over a millennium before the Order would be able to centralize their power again.
            </p>
        </div>
    } else if (activeNode === 'BeyondTheVeil') {
        return <div>
            <h1 class="my-4 text-4xl font-archaic">Beyond the Veil</h1>
            <p class="text-lg">You chose the blue cards</p>
            <br />
            <img src="img/node-BeyondTheVeil.png" alt="Beyond the Veil" loading="lazy" />
            <br />
            <blockquote>
                “Edmond- I must write fast. My findings at Pharaoh's Bath were plentiful- of prime interest are mentions of the Scarab of Osiris, and its use in the resurrection of its namesake. Ammut, the demoness, is described as being in attendance, at the heels of Anubis. Now the Elders have tasked me to find the Scarab, and told me to head to Mt. Horeb- that sacred mountain where so much history centers on. I cannot shake the feeling that we are on the cusp of watching a new era unfold- can you imagine? An artefact that can bring back the dead? Is it even possible?”
            </blockquote>
            <p class="max-w-sm mt-2 ml-auto italic text-right">
                — Excerpt from letter written by Eveline Cavanaugh, January 20, 1897
            </p>
            <p>
                Eveline Cavaunaugh was one of the Order’s most talented historians and archeologists, in addition to being a promising Theurgist. Her focus on the demons and folklore of Mesopotamia made her the first and only choice to undertake the Elders’ mission overseas. However, when she turned up dead, some among the Order doubted the offical cause of death, suspected she had been murdered by members of the Children of the Broken Chain. Her husband, however, has a different theory, a theory he would go to the ends of the earth- and beyond- to prove.
            </p>
        </div>
    } else if (activeNode === 'ASoulInLimbo') {
        return <div>
            <h1 class="my-4 text-4xl font-archaic">A Soul in Limbo</h1>
            <p class="text-lg">You discovered what remains of Evelyn</p>
            <br />
            <img src="img/node-ASoulInLimbo.png" alt="A Soul in Limbo" loading="lazy" />
            <br />
            <blockquote>
                “Defend thyself, O Babylon! <br />
                Ishtar’s gift, this Sapphire Gate,<br />
                Shields us chosen, makes us safe,<br />
                The souls of Hell break upon it,<br />
                Dust upon the rocks.”
            </blockquote>
            <p class="max-w-sm mt-2 ml-auto italic text-right">
                — Dedication of the Ishtar Gate (transl. 1823)
            </p>
            <p>
                Akkadian Cobalt, Soulstone, Gem of Winter- there are many names for this incredibly rare variant of Lapis Lazuli, and even more questions. It is rumored that, at one point, members of the Order had learned how to produce the stone at will, but the knowledge has been lost to time. What is known, however, is its properties: the mineral is capable of touching the other side of the veil, acting as a conduit through which otherworldly energies can be conducted, or, in certain cases, trapped. Experimentation with this substance is strictly forbidden, and the few pieces in the Order’s possession are kept under lock and key.
            </p>
        </div>
    } else if (activeNode === 'PandorasBox') {
        return <div>
            <h1 class="my-4 text-4xl font-archaic">Pandora's Box</h1>
            <p class="text-lg">You discovered Edmond's Elixir Engine</p>
            <br />
            <img src="img/node-PandorasBox.png" alt="Pandora's Box" loading="lazy" />
            <br />
            <blockquote>
                “The name Pandora stone is not chosen perfunctorily: its nature is chaos, change, and the unexpected. It is the energy of pure potential, crystalized and made manifest. Much like the fable after which it is named, extreme precautions should be taken before accessing its energies.”
            </blockquote>
            <p class="max-w-sm mt-2 ml-auto italic text-right">
                From “The Second Key: A Primer on Alchemy for Order Initiates”
            </p>
            <p>
                The Pandora Stone is the crowning achievement of the Order of the Three Keys, and its most closely guarded secret. Its discovery, oddly, was an accident, rooting back to the Order’s founding, when the deposed Egyptian pharaoh Psamtik III attempted to take his own life with a concoction of Realgar, a reddish stone of Arsenic Sulfide. However, the stone he used was an extremely rare naturally occurring variant of a Pandora Stone, imperfect, but capable of incredible feats of alchemical change. Instead of his death, Psamtik entered a coma, awakening after three weeks to find himself in a younger body, and possessing a longer lifespan that most humans. Using the imperfect stone was not without cost, however: Psamtik woke to discover his eyesight had been lost.
            </p>
        </div>
    } else if (activeNode === 'YouWereWarned') {
        return <div>
            <h1 class="my-4 text-4xl font-archaic">You Were Warned</h1>
            <p class="text-lg">You couldn't help yourself, could you?</p>
            <br />
            <img src="img/node-YouWereWarned.png" alt="You Were Warned" loading="lazy" />
            <br />
            <blockquote>
                “I am an alchemist. The laws of the physical world are mine to command. What use is this knowledge if I am not allowed to wield it?”
            </blockquote>
            <p class="max-w-sm mt-2 ml-auto italic text-right">
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
    } else if (activeNode === 'WhatWasLost') {
        return <div>
            <h1 class="my-4 text-4xl font-archaic">What Was Lost</h1>
            <p class="text-lg">You recovered the Proctor's belongings</p>
            <br />
            <img src="img/node-WhatWasLost.png" alt="What Was Lost" loading="lazy" />
            <br />
            <blockquote>
                “Magic, like any other energy, can be amplified, nullified, or contained by certain tools. Learning to use these tools is a foundational skill for a member of the Order, and even more so for a Proctor. Your focus is your life. Never leave it unattended.”
            </blockquote>
            <p class="max-w-sm mt-2 ml-auto italic text-right">
                — From <em>The Teachings of Proctor Hermes</em>, 1847.
            </p>
        </div>
    } else if (activeNode === 'OutOfTime') {
        return <div>
            <h1 class="my-4 text-4xl font-archaic">Out of Time</h1>
            <p class="text-lg">You failed to prove your dedication to the Proctor in time.</p>
            <br />
            <img src="img/node-OutOfTime.png" alt="OutOfTime" loading="lazy" />
            <br />
            <blockquote>
                “And I say this to you now, my fellows, my friends- even amongst the purest of us lies the potential for vileness. I have seen with my own eyes the evil that lives at the edge of our reality, hoping to prey upon our greed. And so I propose a bulwark, a sect within our Order, yet also outside of it, a Shepherd to keep the wolves at bay, but also to cull the flock, removing the sick and diseased with a merciful knife-”
            </blockquote>
            <p class="max-w-sm mt-2 ml-auto italic text-right">— The Comte de St. Germain, 1657</p>
            <p>
                The Proctors have long served as a force within the Order to police their members, ensuring that the urge for power does not bleed into the dark places of Blood Magic and Goetia. They answer to none but the Elders, and punish transgressions with extreme prejudice. Members of the Order respect and fear them, knowing that the presence of a Proctor at any Order meeting means someone in the room is under suspicion, and may be living their final night on earth.
            </p>
        </div>
    } else if (activeNode === 'MorsExMachina') {
        return <div>
            <h1 class="my-4 text-4xl font-archaic">Mors Ex Machina</h1>
            <p class="text-lg">You were unable to turn off the machine.</p>
            <br />
            <img src="img/node-MorsExMachina.png" alt="Mors Ex Machina" loading="lazy" />
            <br />
            <blockquote>
                “What makes us, my dear John, different then those fools you fought in Portugal, is from whence we pull our power. They bind themselves to the service of a shade for a taste of what we do. We, on our own merits and skill, forge our powers by tapping into the natural energies of the earth itself. Those leylines that wrap around our earth, bound to it by mysterious forces my work seeks to uncover, are the raw iron from which our miracles are hewn. The lord tells us to help ourselves, and has provided us with the Keys. I suppose that makes the leylines the door.”
            </blockquote>
            <p class="max-w-sm mt-2 ml-auto italic text-right">
                — A letter from Brother Sir Issac Newton to his friend Captain John Conduitt, 1722
            </p>
        </div>
    } else if (activeNode === 'Unbound') {
        return <div>
            <h1 class="my-4 text-4xl font-archaic">Unbound</h1>
            <p class="text-lg">You were unable to re-seal the Obelisk</p>
            <br />
            <img src="img/node-Unbound.png" alt="Unbound" loading="lazy" />
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
            <p class="max-w-sm mt-2 ml-auto italic text-right">
                — Prayer against Lamashtu, approx. 700 BCE
            </p>
            <p>
                Few figures inspired more fear in ancient Babylonian culture than the Demoness Lamashtu. That is, until her banishment in 500 BC by the Warrior Priestess Belatsunat and the Knights of Marduk. It is a commonly held story within the Order, especially amongst the Proctors, that during the banishment of Lamashtu, Belatsunat was given a vision of the far future, of a calamity where time and reality splinter open, and the world is undone. This revelation led Belatsunat to search for other enlightened souls, thus forming the Order of Three Keys. Of course, this story has never been proven.
            </p>
        </div>
    } else if (activeNode === 'TrainingWheels') {
        return <div>
            <h1 class="my-4 text-4xl font-archaic">Training Wheels</h1>
            <p class="text-lg">You required the Proctor's assistance five times</p>
            <br />
            <img src="img/node-TrainingWheels.png" alt="Training Wheels" loading="lazy" />
            <br />
            <blockquote>
                “All things have a history, an energy they accumulate from every small force that has affected them. No matter how small, the past will leave its mark, and the Theurgist can read those scars and tell their story.”
            </blockquote>
            <p class="max-w-sm mt-2 ml-auto italic text-right">
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
    } else if (activeNode === 'YourOwnTwoFeet') {
        return <div>
            <h1 class="my-4 text-4xl font-archaic">Your Own Two Feet</h1>
            <p class="text-lg">You never asked for the Proctor's assistance</p>
            <br />
            <img src="img/node-YourOwnTwoFeet.png" alt="Your Own Two Feet" loading="lazy" />
            <br />
            <blockquote>
                “A talented member of the Order can feel the flowing tides of reality. They know danger before it happens, can find things long ago lost and bring a foe low with a whispered truth unknown to all. But no member of the Order, no matter how talented, can sense those flows as well as the stars. They know all that has happened and all that could happen. We simply must listen to them.”
            </blockquote>
            <p class="max-w-sm mt-2 ml-auto italic text-right">— Brother Claudius Ptolemy</p>
            <p>
                Proctor Delphi has always had their eyes on the stars. Few Order members can claim more talent for the art of Divination, but such abilities can both shackle a Proctor as much as set them free. While Proctor Delphi’s main mission is to protect and guide members of the Order, attempting to prevent them from straying from the rules, they do not do anything without the consent of the stars. This contradiction confuses many- is Proctor Delphi an agent of change, or predestination?
            </p>
            <p>
                What is known about Proctor Delphi is this: like the Oracle that is their namesake, they know your future before you do. Should their horned silhouette darken your doorstep, it is already far too late to run- your fate is sealed.
            </p>
        </div>
    } else if (activeNode === 'MachineOfBlood') {
        return <div>
            <h1 class="my-4 text-4xl font-archaic">Machine of Blood</h1>
            <p class="text-lg">You activated Edmond's Elixir Engine</p>
            <br />
            <img src="img/node-MachineOfBlood.png" alt="Machine Of Blood" loading="lazy" />
            <br />
            <blockquote>
                “As the movement of the Sun affects the seasons, as the phase of the moon affects the tides, when we exercise our powers, we must be wary of unintended consequences. Alchemy, Theurgy and Divination come with costs and to access their power, you must be willing to pay them.”
            </blockquote>
            <p class="max-w-sm mt-2 ml-auto italic text-right">
                — The Scrolls of the Teacher, The Order of the Three Keys
            </p>
        </div>
    } else if (activeNode === 'ChainsThatBind') {
        return <div>
            <h1 class="my-4 text-4xl font-archaic">Chains that Bind</h1>
            <p class="text-lg">You recreated Edmond's forbidden ritual.</p>
            <br />
            <img src="img/node-ChainsThatBind.png" alt="Chains That Bind" loading="lazy" />
            <br />
            <blockquote>
                “I will abide by the rules of this Order any longer. I have found a power greater than any your petty alchemy can provide. Power is power, and your attempts to control it are offensive at their least. Stop me, if you can. I will not hide."
            </blockquote>
            <p class="max-w-sm mt-2 ml-auto italic text-right">
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
    } else if (activeNode === 'GoodHousekeeping') {
        return <div>
            <h1 class="my-4 text-4xl font-archaic">Good Housekeeping</h1>
            <p class="text-lg">You placed most things back where you found them.</p>
            <br />
            <img src="img/node-GoodHousekeeping.png" alt="Good Housekeeping" loading="lazy" />
            <br />
            <blockquote>
                “Flashed all their sabres bare, <br />
                Flashed as they turned in air <br />
                Sabring the gunners there, <br />
                Charging an army, while <br />
                All the world wondered.”
            </blockquote>
            <p class="max-w-sm mt-2 ml-auto italic text-right">
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
    } else if (activeNode === 'OutWithABang') {
        return <div>
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
    } else if (activeNode === 'DeathDeferred') {
        return <div>
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
    } else if (activeNode === 'Misled') {
        return <div>
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
    } else if (activeNode === 'BetterSafeThanSorry') {
        return <div>
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
    } else {return}
}

/* <style>
    p,
    blockquote {
        line-height: 2;
    }
    p:not(.text-lg) {
        text-indent: 2em;
        margin-bottom: 2em;
        text-align: left;
    }

    blockquote + p:not(.text-lg) {
        text-align: right;
        line-height: normal;
    }
    img {
        filter: drop-shadow(2px 4px 3px rgba(0, 0, 0, 0.3));
    }
    /* iframe {
        position: absolute;
        height: 100%;
        width: 100%;
        top:0;
        left:0;
    } */
//  </style> */}