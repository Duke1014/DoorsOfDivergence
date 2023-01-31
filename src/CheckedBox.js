import React from 'react'
import Checked from './img/Checked.png'

export default function CheckedBox({node}) {

  const titles = [
    "Alienist In Training", 
    "Oblivious",
    "Narrow-minded",
    "Unmotivated",
    "Sound of Mind",
    "Sound of Body",
    "Critical Thinker",
    "Strong Willed",
    "Anxious",
    "Pyromania",
    "Thanatopobia",
    "Hot-headed",
    "Electrophilia",
    "Epiplaphobia",
    "Gambler",
    "Left to Starve",
    "Cruel Calculus",
    "All the Things I Might Have Said",
    "A Cleansing Flame",
    "No Second Chances",
    "Indecisive",
    "Out With A Bang",
    "Blaze of Glory",
    "Narcoleptic",
    "Narcissistic",
    "Co-ordinated",
    "Vocal",
    "Obstinate",
    "Arrogant",
    "Mission of Mercy",
    "Nepotism",
    "Inactive",
    "Sanguine",
    "Frequent Attacks",
    "Kleptomania",
    "Lethargic",
    "Insubordinate",
    "Patricidal",
    "Disloyal",
    "Draining Day",
    "Bloodthirsty",
    "Terminal Illness",
    "Forever And A Day",
    "Reckless",
    "Unhinged Behavior",
    "Knowledgeabe",
    "Committed",
    "Retrophilic",
    "Neophilic",
    "Intractible",
    "Paranoid",
    "Like I Need A Hole In The Head",
    "Dishonest",
    "The One Made Many",
    "Deceitful",
    "The Many Made One",
    "Uneasy",
    "Opportunistic",
    "Better The Devil You Know",
    "Gone For Good (?)",
    "A Lead",
    "Combative",
    "Hesitant",
    "Hallucinations",
    "Taciturn",
    "Confused",
    "Impatient",
    "Unflappable",
    "Dumbfounded",
    "Invasive Procedures",
    "Fickle",
    "A New Day",
    "Finally Free",
    "Headstrong",
    "Delusions of Grandeur"
  ]

  // const nodeList = [
  //   {
  //     nodeNumber : 0, 
  //     title : "Alienist In Training", 
  //     description : "You took a position at Hollow Grove Sanitarium"
  //   },
  //   {
  //     nodeNumber : 1,
  //     title: "Oblivious",
  //     description : "You entered Hollow Grove Sanitarium"
  //   },
  //   {
  //     nodeNumber : 2,
  //     title: "Narrow-minded",
  //     description : "You chose the same color serums"
  //   },
  //   {
  //     nodeNumber : 3,
  //     title: "Unmotivated",
  //     description : "You kept the doctor waiting"
  //   },
  //   {
  //     nodeNumber : 4,
  //     title: "Sound of Mind",
  //     description : "You chose more blue Serums"
  //   },
  //   {
  //     nodeNumber : 5,
  //     title : "Sound of Body",
  //     description : "You chose more red Serums"
  //   },
  //   {
  //     nodeNumber : 6,
  //     title : "Critical Thinker",
  //     description : "Discovered Charles's true motivations"
  //   },
  //   {
  //     nodeNumber : 7,
  //     title : "Strong Willed",
  //     description : "Discovered Grace's true motivations"
  //   },
  //   {
  //     nodeNumber : 8,
  //     title : "Anxious",
  //     description : "Learned what was done to Charles"
  //   },
  //   {
  //     nodeNumber : 9,
  //     title : "Pyromania",
  //     description : "You learned what was done to Grace"
  //   },
  //   {
  //     nodeNumber : 10,
  //     title : "Thanatopobia",
  //     description : "Witnessed Edmond's end at Charles' hands"
  //   },
  //   {
  //     nodeNumber : 11,
  //     title : "Hot-headed",
  //     description : "Witnessed Edmond's End at Grace's hands"
  //   },
  //   {
  //     nodeNumber : 12,
  //     title : "Electrophilia",
  //     description : "Shocked a friend to secure your escape"
  //   },
  //   {
  //     nodeNumber : 13,
  //     title : "Epiplaphobia",
  //     description : "Took a seat in the Electric Chair"
  //   },
  //   {
  //     nodeNumber : 14,
  //     title: "Gambler",
  //     description : "You saved your ally by playing the Odds"
  //   },
  //   {
  //     nodeNumber : 15,
  //     title : "Left to Starve",
  //     description : "You were abandoned"
  //   },
  //   {
  //     nodeNumber : 16,
  //     title : "Cruel Calculus",
  //     description : "You killed Grace"
  //   },
  //   {
  //     nodeNumber : 17,
  //     title : "All the Things I Might Have Said",
  //     description : "You saved Grace"
  //   },
  //   {
  //     nodeNumber : 18,
  //     title : "A Cleansing Flame",
  //     description : "You saved Charles"
  //   },
  //   {
  //     nodeNumber : 19,
  //     title : "No Second Chances",
  //     description : "You killed Charles"
  //   },
  //   {
  //     nodeNumber : 20,
  //     title : "Indecisive",
  //     description : "You were given one final chance to save your life."
  //   },
  //   {
  //     nodeNumber : 21,
  //     title : "Out With A Bang",
  //     description : "You died at Charles' hands"
  //   },
  //    {
  //     nodeNumber : 22,
  //     title : "Blaze of Glory",
  //     description : "You were burned alive by Grace"
  //   },
  //   { 
  //     nodeNumber : 23,
  //     title : "Narcoleptic",
  //     description : "Went to sleep"
  //   },
  //   {
  //     nodeNumber : 24,
  //     title : "Narcissistic",
  //     description : "Put on clothes that don't belong to you"
  //   },
  //   {
  //     nodeNumber : 25,
  //     title : "Co-ordinated",
  //     description : "Impressed Hamlin with your Dancing Skills"
  //   },
  //   {
  //     nodeNumber : 26,
  //     title : "Vocal",
  //     description : "Impressed Hamlin with your singing skills"
  //   },
  //   {
  //     nodeNumber : 27,
  //     title : "Obstinate",
  //     description : "Never rang the bell"
  //   },
  //   {
  //     nodeNumber : 28,
  //     title : "Arrogant",
  //     description : "This still isn't a Marvel Movie."
  //   },
  //   {
  //     nodeNumber : 29,
  //     title : "Mission of Mercy",
  //     description : "Received word of Edmond's whereabouts"
  //   },
  //   {
  //     nodeNumber : 30,
  //     title : "Nepotism",
  //     description : "Encountered Edmond's Children"
  //   },
  //   {
  //     nodeNumber : 31,
  //     title : "Inactive",
  //     description : "You left the Doctor waiting"
  //   },
  //   {
  //     nodeNumber : 32,
  //     title : "Sanguine",
  //     description : "You discovered more about Edmond's activities"
  //   },
  //   {
  //     nodeNumber : 33,
  //     title : "Frequent Attacks",
  //     description : "You learned more about the family history"
  //   },
  //   {
  //     nodeNumber : 34,
  //     title : "Kleptomania",
  //     description : "You stole a key"
  //   },
  //   {
  //     nodeNumber : 35,
  //     title : "Lethargic",
  //     description : "You left the key behind"
  //   },
  //   {
  //     nodeNumber : 36,
  //     title : "Insubordinate",
  //     description : "You refused to do as you were told."
  //   },
  //   {
  //     nodeNumber : 37,
  //     title : "Patricidal",
  //     description : "You witnessed the end of Edmond Cavanaugh"
  //   },
  //   {
  //     nodeNumber : 38,
  //     title : "Disloyal",
  //     description : "You brokered a deal with Constance"
  //   },
  //   {
  //     nodeNumber : 39,
  //     title : "Draining Day",
  //     description : "You failed to escape Hollow Grove in time."
  //   },
  //   {
  //     nodeNumber : 40,
  //     title : "Bloodthirsty",
  //     description : "You chose to kill Constance"
  //   },
  //   {
  //     nodeNumber : 41,
  //     title : "Terminal Illness",
  //     description : "You failed to save Constance"
  //   },
  //   {
  //     nodeNumber : 42,
  //     title : "Forever And A Day",
  //     description : "You saved Constance"
  //   },
  //   {
  //     nodeNumber : 43,
  //     title : "Reckless",
  //     description : "You lived three lives in one night."
  //   },
  //   {
  //     nodeNumber : 44,
  //     title : "Unhinged Behavior",
  //     description : "You were sent to Hollow Grove Sanitarium"
  //   },
  //   {
  //     nodeNumber : 45,
  //     title : "Knowledgeabe",
  //     description : "Reminded Tidwell of the Swiss Alienist's name"
  //   },
  //   {
  //     nodeNumber : 46,
  //     title : "Committed",
  //     description : "Met Tidwell and Doss"
  //   },
  //   {
  //     nodeNumber : 47,
  //     title : "Retrophilic",
  //     description : "Rejected the modern for the classic"
  //   },
  //   {
  //     nodeNumber : 48,
  //     title : "Neophilic",
  //     description : "Rejected the classic for the modern"
  //   },
  //   {
  //     nodeNumber : 49,
  //     title : "Intractible",
  //     description : "You left the Doctor waiting"
  //   },
  //   {
  //     nodeNumber : 50,
  //     title : "Paranoid",
  //     description : "Learned more about Tidwell's practices"
  //   },
  //   {
  //     nodeNumber : 51,
  //     title : "Like I Need A Hole In The Head",
  //     description : "Lobotomized by Doctor Tidwell"
  //   },
  //   {
  //     nodeNumber : 52,
  //     title : "Dishonest",
  //     description : 'Revealed "Tidwell"s true nature'
  //   },
  //   {
  //     nodeNumber : 53,
  //     title : "The One Made Many",
  //     description : '"Tidwell" ripped Lamashtu from you'
  //   },
  //   {
  //     nodeNumber : 54,
  //     title : "Deceitful",
  //     description : "Revealed Doss's true nature"
  //   },
  //   {
  //     nodeNumber : 55,
  //     title : "The Many Made One",
  //     description : "Lamashtu took her soul back from you"
  //   },
  //   {
  //     nodeNumber : 56,
  //     title : "Uneasy",
  //     description : 'Brokered an alliance with "Tidwell"'
  //   },
  //   {
  //     nodeNumber : 57,
  //     title : "Opportunistic",
  //     description : 'Did not release your fellow inmates before making your choice'
  //   },
  //   {
  //     nodeNumber : 58,
  //     title : "Better The Devil You Know",
  //     description : "Sided with Lamashtu a second time."
  //   },
  //   {
  //     nodeNumber : 59,
  //     title : "Gone For Good(?)",
  //     description : "Banished Lamashtu"
  //   },
  //   {
  //     nodeNumber : 60,
  //     title : "A Lead",
  //     description : "Discovered Edmond's whereabouts"
  //   },
  //   {
  //     nodeNumber : 61,
  //     title : "Combative",
  //     description : "Confronted Doctor Tidwell"
  //   },
  //   {
  //     nodeNumber : 62,
  //     title : "Hesitant",
  //     description : "Escorted from Hollow Grove Prematurely"
  //   },
  //   {
  //     nodeNumber : 63,
  //     title : "Hallucinations",
  //     description : "Received visions of Eveline"
  //   },
  //   {
  //     nodeNumber : 64,
  //     title : "Taciturn",
  //     description : "Refused to answer Tidwell's questions"
  //   },
  //   {
  //     nodeNumber : 65,
  //     title : "Confused",
  //     description : 'Learned more about what Edmond was doing.'
  //   },
  //   {
  //     nodeNumber : 66,
  //     title : "Impatient",
  //     description: "Removed the Blindfold"
  //   },
  //   {
  //     nodeNumber : 67,
  //     title : "Unflappable",
  //     description : "Didn't remove the blindfold"
  //   },
  //   {
  //     nodeNumber : 68,
  //     title : "Dumbfounded",
  //     description : "You began to question reality"
  //   },
  //   {
  //     nodeNumber : 69, //nice
  //     title : "Invasive Procedures",
  //     description : "Tidwell was forced to try a more extreme treatment"
  //   },
  //   {
  //     nodeNumber : 70,
  //     title : "Fickle",
  //     description : "Faced a decision on who to believe"
  //   },
  //   {
  //     nodeNumber : 71,
  //     description : "You chose to embrace the truth"
  //   },
  //   {
  //     nodeNumber : 72,
  //     title : "Finally Free",
  //     description : 'You released Eveline from her imprisonment'
  //   },
  //   {
  //     nodeNumber : 73,
  //     title : "Headstrong",
  //     description : "You kept the doctor waiting"
  //   },
  //   {
  //     nodeNumber : 74,
  //     title : "Delusions of Grandeur",
  //     description : "You saw a message from the future"
  //   }
  // ]

  const handleClick = () => {
    // setUnlocked(!unlocked)
    // console.log(nodeList[node])
  }

  return (
    <div onClick={handleClick} className='checked'>
        <img src={Checked} alt='checked' />
        <p className='symptom-found'>{titles[node]}</p>
    </div>
  )
}
