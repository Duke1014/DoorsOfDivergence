import React, {useEffect, useState} from 'react'
import {
    getAuth,
//     GoogleAuthProvider,
//     signInWithPopup,
    onAuthStateChanged,
//     updateProfile,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    sendPasswordResetEmail,
} from 'firebase/auth';
import {
    getFirestore,
    collection,
//     addDoc,
    updateDoc,
    doc,
    setDoc,
    getDoc,
    onSnapshot,
    query,
    where,
    getDocs,
    limit,
    orderBy,
    // arrayUnion,
} from 'firebase/firestore';
// import { ref, query } from 'firebase/database'
import { initializeApp } from 'firebase/app';
import { firebaseConfig } from '../firebaseConfig';
// import { hasFormSubmit } from '@testing-library/user-event/dist/utils';

const UserContext = React.createContext()
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

function UserProvider({ children }) {

    const [user, setUser] = useState({}) // this gets used everywhere, stored info of user
    const [error, setError] = useState('')
    const [loggedIn, setLoggedIn] = useState(false) // this gets used everywhere, tells app that you are allowed to see things
    const [nodes, setNodes] = useState({})
    const [loader, setLoader] = useState(true)
    const [isAdmin, setIsAdmin] = useState(false)    
    const [codeStyle, setCodeStyle] = useState({color: 'black'})
    const [message, setMessage] = useState({visibility: 'hidden'})

    const [tabStyleOne, setTabStyleOne] = useState({})
    const [tabStyleTwo, setTabStyleTwo] = useState({})
    const [tabStyleThree, setTabStyleThree] = useState({})
    const [tabStyleFour, setTabStyleFour] = useState({})
    
    const [searchResults, setSearchResults] = useState([{}])
    const [selectedOption, setSelectedOption] = useState('name')

    let madnessList = {
        div1 : [
            'AlienistInTraining',
            'Oblivious',
            'Unmotivated',
            'SoundOfMind',
            'SoundOfBody',
            'CriticalThinker',
            'StrongWilled',
            'Anxious',
            'Pyromania',
            'Thanatophobia',
            'HotHeaded',
            'Electrophilia',
            'Epiplaphobia',
            'Gambler',
            'LeftToStarve',
            'CruelCalculus',
            'AllTheThingsIMightHaveSaid',
            'ACleansingFlame',
            'NoSecondChances',
            'OutWithABang',
            'BlazeOfGlory',
            'Coordinated',
            'Vocal'
        ],
        div2 : [
            'MissionOfMercy',
            'Nepotism',
            'Inactive',
            'Sanguine',
            'FrequentAttacks',
            'Insubordinate',
            'Patricidal',
            'Disloyal',
            'DrainingDay',
            'Bloodthirsty',
            'TerminalIllness',
            'ForeverAndADay',
            'Reckless'
        ],
        div3 : [
            'UnhingedBehavior',
            'Committed',
            'Knowledgable',
            'Intractible',
            'Paranoid',
            'LikeINeedAHoleInMyHead',
            'Dishonest',
            'TheOneMadeMany',
            'Deceitful',
            'TheManyMadeOne',
            'Uneasy',
            'Opportunistic',
            'BetterTheDevilYouKnow',
            'GoneForGood'
        ],
        div4 : [
            'ALead',
            'Combative',
            'Hesitant',
            'Hallucinations',
            'Taciturn',
            'Confused',
            'Impatient',
            'Unflappable',
            'Dumbfounded',
            'InvasiveProcedures',
            'Fickle',
            'ANewDay',
            'FinallyFree',
            'Headstrong',
        ],
        all : [
            'Narcoleptic',
            'Narcissistic',
            'Obstinate',
            'Arrogant',
            'DelusionsOfGrandeur'
        ],
        divs1and2 : [
            'Indecisive'
        ],
        divs2and3 : [
            'Kleptomania',
            'Lethargic'
        ],
        divs3and4 : [
            'Retrophilic',
            'Neophilic'
        ]
    }

    // const [message, setMessage] = useState('')
    
    //     if (errorCode.includes('auth/invalid-value-')) {
    //         setError("Sorry, a user with this email could not be found. Please check for typos or sign up for an account.")
    //     } else if (errorCode === 'auth/wrong-password') {
    //         setError("The password you've entered is incorrect.")  
    //     } else if (errorCode === 'auth/user-not-found') {
    //         setError("Sorry, a user with this email could not be found. Please check for typos or sign up for an account.")
    //     } else if (errorCode === 'success') {
    //         setError("The email is on its way. Please check your Inbox.")
    //     } else {
    //         setError(`Error: ${errorCode}. Please try again or contact us.`)
    //     } 

    const login = (user) => {
        signInWithEmailAndPassword(auth, user.email, user.password)
        .then((userCredential) => {
            console.log(userCredential)
            user.uid = userCredential.user.uid;
            setUser(user)
            setLoggedIn(true)
        })
        .catch((error) => {
            setError(error.message)
        });
    }

    const logout = () => {
        auth.signOut()
        setUser({})
        setLoggedIn(false)
    }

    const signup = (user) => {        
        createUserWithEmailAndPassword(auth, user.email, user.password)
        .then((userCredential) => {
            console.log(userCredential);
            user.uid = userCredential.user.uid;
            saveUser();
        })
        .then(() => {
            setUser(user)
            setLoggedIn(true)
        })
        .catch((error) => {
            setError(error.message)
        })
    }

    const sendReset = (email = user.email) => {
        sendPasswordResetEmail(auth, email)
        .then(() => {
            setError('success')
            console.log("Success")
        })
        .catch((error) => {
            setError(error.message)
            console.log(error.message)
        });
    }

    async function saveUser() {
        const userRef = doc(db, 'users', user.uid);
        await setDoc(
            userRef,
            {
                uid: user.uid,
                name: user.firstName + ' ' + user.lastName,
                email: user.email,
                marketing: user.marketingOptIn,
            },
            { merge: true }
        );
    }

    useEffect(() => {
        onAuthStateChanged(auth, (authUser) => {
            if (authUser) {
                user.uid = authUser.uid;
                setLoggedIn(true)
                setLoader(false)
                checkAdmin(authUser.uid);
                checkNodes(authUser.uid);
            } else {
                setNodes({})
                setLoader(false)
            }
        });    
    }, [])

    async function checkNodes(authUID) {
        setLoader(true)
        const actSesSnap = await getDoc(doc(db, 'users', authUID));
        if (actSesSnap.exists()) {
            let snapData = actSesSnap.data();
            if (snapData.nodes) {
                setNodes(snapData.nodes)
                user.name = snapData.name;
                setLoader(false)
            } else {
                setNodes({})
                setLoader(false)
            }
        } else {
            console.log('No such document!');
            setNodes({})
        }
        startListener(authUID);
    }

    async function addNode(node) {
        const noderef = doc(db, 'users', user.uid)
        await updateDoc(
            noderef,
            {
                ['nodes.' + node]: true,
                lastNode: node,
            },
            { merge: true }
        )
        console.log(madnessList)
        debugger
        let madnessId = document.getElementById('madness')
        if (madnessList.div1.find(n => n === node)) {
            madnessId.scrollIntoView({ behavior: 'smooth' })
            handleTab('div1') // MAKE THESE TURN THEIR COORESPONDING TABS INTO GLOWY BOIS THANKS
        } else if (madnessList.div2.find(n => n === node)) {
            madnessId.scrollIntoView({ behavior: 'smooth' })
            handleTab('div2')
        } else if (madnessList.div3.find(n => n === node)) {
            madnessId.scrollIntoView({ behavior: 'smooth' })
            handleTab('div3')
        } else if (madnessList.div4.find(n => n === node)) {
            madnessId.scrollIntoView({ behavior: 'smooth' })
            handleTab('div4')
        } else if (madnessList.all.find(n => n === node)) {
            madnessId.scrollIntoView({ behavior: 'smooth' })
            handleTab('divAll')
        } else if (madnessList.divs1and2.find(n => n === node)) {
            madnessId.scrollIntoView({ behavior: 'smooth' })
            handleTab('div12')
        } else if (madnessList.divs2and3.find(n => n === node)) {
            madnessId.scrollIntoView({ behavior: 'smooth' })
            handleTab('div23')
        } else if (madnessList.divs3and4.find(n => n === node)) {
            madnessId.scrollIntoView({ behavior: 'smooth' })
            handleTab('div34')
        } else {
            let nodeId = document.getElementById(node)
            nodeId.scrollIntoView({ behavior: 'smooth' })
        }
    }

    const handleTab = (div) => {
        if (div === 'div1') {
            setTabStyleOne({
                ...tabStyleOne, 
                animationName: 'glow',
                animationDuration: '2s',
                animationIterationCount: 'infinite'  
            })
        } else if (div === 'div2') {
            setTabStyleTwo({
                ...tabStyleTwo,
                animationName: 'glow',
                animationDuration: '2s',
                animationIterationCount: 'infinite'  
            })
        } else if (div === 'div3') {
            setTabStyleThree({
                ...tabStyleThree,
                animationName: 'glow',
                animationDuration: '2s',
                animationIterationCount: 'infinite'  
            })
        } else if (div === 'div4') {
            setTabStyleFour({
                ...tabStyleFour,
                animationName: 'glow',
                animationDuration: '2s',
                animationIterationCount: 'infinite'  
            })
        } else if (div === 'divAll') {
            setTabStyleOne({
                ...tabStyleOne, 
                animationName: 'glow',
                animationDuration: '2s',
                animationIterationCount: 'infinite'  
            })
            setTabStyleTwo({
                ...tabStyleTwo,
                animationName: 'glow',
                animationDuration: '2s',
                animationIterationCount: 'infinite'  
            })
            setTabStyleThree({
                ...tabStyleThree,
                animationName: 'glow',
                animationDuration: '2s',
                animationIterationCount: 'infinite'  
            })
            setTabStyleFour({
                ...tabStyleFour,
                animationName: 'glow',
                animationDuration: '2s',
                animationIterationCount: 'infinite'  
            })
        } else if (div === 'div12') {
            setTabStyleOne({
                ...tabStyleOne, 
                animationName: 'glow',
                animationDuration: '2s',
                animationIterationCount: 'infinite'  
            })
            setTabStyleTwo({
                ...tabStyleTwo,
                animationName: 'glow',
                animationDuration: '2s',
                animationIterationCount: 'infinite'  
            })
        } else if (div === 'div23') {
            setTabStyleTwo({
                ...tabStyleTwo,
                animationName: 'glow',
                animationDuration: '2s',
                animationIterationCount: 'infinite'  
            })
            setTabStyleThree({
                ...tabStyleThree,
                animationName: 'glow',
                animationDuration: '2s',
                animationIterationCount: 'infinite'  
            })
        } else if (div === 'div34') {
            setTabStyleThree({
                ...tabStyleThree,
                animationName: 'glow',
                animationDuration: '2s',
                animationIterationCount: 'infinite'  
            })
            setTabStyleFour({
                ...tabStyleFour,
                animationName: 'glow',
                animationDuration: '2s',
                animationIterationCount: 'infinite'  
            })
        }
    }

    async function checkAdmin(authUID) {
        setLoader(true)
        const actSesSnap = await getDoc(doc(db, 'users', authUID));

        if (actSesSnap.exists()) {
            let snapData = actSesSnap.data();
            if (snapData.isAdmin) {
                setIsAdmin(snapData.isAdmin)
                console.log('An admin is in!');
            }
        } else {
            setNodes({})
        }
    }

    function startListener(listener) {
        const listenTo = listener;
        onSnapshot(doc(db, 'users', listenTo), (doc) => {
            const source = doc.metadata.hasPendingWrites ? 'Local' : 'Server';
            console.log(source, ' data: ', doc.data());
            let snapData = doc.data();
            setNodes(snapData.nodes)
        });
    }

    async function handleEnterCode(e) {
        setMessage({visibility: 'hidden'})
        const docRef = doc(db, 'codes', 'heresy')  
        const codesSnap = await getDoc(docRef)
        setCodeStyle({color: 'black'})
        if (codesSnap) {
            let snapData = codesSnap.data()
            const matchingCode = Object.keys(snapData).find(key => key.toLowerCase() === e.toLowerCase())
            if (matchingCode) {
                setCodeStyle({color: 'black', animation: 'goodCode 2s'})
                snapData[matchingCode].forEach((element) => {
                    addNode(element)
                })
            } else {
                setMessage({visibility: 'visible', animation: 'badCode2 2s'})
                setCodeStyle({color: 'black', animation: 'badCode 2s'})
            }
        } else {
            setMessage({visibility: 'visible', animation: 'badCode2 2s'})
        }
        setTimeout(() => {
            setMessage({visibility: 'hidden'})
        }, 3000)
    }

    return (
        <UserContext.Provider 
            value={{
                user, 
                auth, 
                db, 
                error, 
                login, 
                logout, 
                signup, 
                sendReset, 
                handleEnterCode, 
                loggedIn, 
                nodes, 
                loader, 
                isAdmin, 
                codeStyle, 
                searchResults, 
                setSelectedOption, 
                message,
                tabStyleOne,
                setTabStyleOne,
                tabStyleTwo,
                setTabStyleTwo,
                tabStyleThree,
                setTabStyleThree,
                tabStyleFour,
                setTabStyleFour
        }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserContext, UserProvider }