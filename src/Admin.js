import React, { useContext, useState } from 'react'
import { UserContext } from './context/user'
import {
    // getFirestore,
    collection,
//     addDoc,
    // updateDoc,
    // doc,
    // setDoc,
    // getDoc,
    // onSnapshot,
    query,
    where,
    getDocs,
    limit,
    // orderBy,
    // arrayUnion,
} from 'firebase/firestore';
import UserView from './UserView';

import Subject from './img/Subject.png'

export default function Admin() {

    const { db } = useContext(UserContext)
    
    const [searchText, setSearchText] = useState('')
    const [selectedOption, setSelectedOption] = useState('name')
    const [searchAmount, setSearchAmount] = useState(10)
    const [newResults, setNewResults] = useState([])
    const [bubbleText, setBubbleText] = useState('')

    const handleSelect = e => {
        setSelectedOption(e.target.value)
        handleSearch(searchText)
    }
    const handleText = e => {
        setSearchText(e.target.value)
        handleSearch(e.target.value)
    }
    // const handleAmount = e => {
    //     setSearchAmount(e.target.value)
    //     handleSearch(searchText)
    // }

    async function handleSearch(e) {
        const q = query(collection(db, 'users'), where(`${selectedOption}`, '>=', e), limit(searchAmount))
        const querySnapshot = await getDocs(q)
        let thing = []
        querySnapshot.forEach((doc) => {
            let data = doc.data()
            thing.push(data)
        })
        setNewResults(thing)
    }

    const resultsElements = newResults.map((r) => {
        return <UserView key={r.uid} r={r} setBubbleText={setBubbleText} />
    })

    const handleCalypso = () => {
        const texts = [
            "Stop it, Father. I must report the data", 
            "I've seen the face of God, and she was MOMMY.", 
            "Ouch.",
            "The only sun lamp I need is the flames of my mind.",
            "IA LAMASHTU.",
            "I swallowed the Fourth Key. Father musn't know."
        ]
        const logic = Math.floor(Math.random() * texts.length)
        setBubbleText(texts[logic])
    }
    
    return (
        <div className='admin'>
            <form 
                onSubmit={e => e.preventDefault()}
            >
                <input 
                    type='text'
                    value={searchText} 
                    placeholder='Search here...'
                    onChange={e => handleText(e)}
                />
                <select name="categories" className="category-select" onChange={handleSelect}>
                    <option value="name">Name</option>
                    <option value='email'>E-Mail</option>
                </select>
                {/* <select name='amount' className='amount-select' onChange={handleAmount}>
                    <option value='10'>10</option>
                    <option value='25'>25</option>
                    <option value='50'>50</option>
                    <option value='100'>100</option>
                </select> */}
            </form>
            {searchText.length > 0 ? <>
                <ul>
                    {resultsElements}
                </ul>
            </> : <>
                <div style={{height: '90rem', width: '100%'}}>.</div>
            </>}
            
            <img src={Subject} alt='DAUGHTER' className='calypso' onClick={handleCalypso}/>
            <div className='speech-bubble'>{bubbleText}</div>
            <div style={{minHeight: '96px', width: 'full', position: 'absolute'}}>.</div>
        </div>
    )
}
