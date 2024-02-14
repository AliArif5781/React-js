import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  // UI updation ko react krta ha.
  const [Counter,setCounter] =useState(15)        //    [1=variable ha aur iski default value 15 ha change bi kr skta ha , 2= yeh function ha joki responsible ha is 1=varibale ko update krna ka liya ]          // yeh hook apki apki state ko change krna ka liya responsible.
// let Counter = 5;

function addValue(){
  if (Counter < 20) {
    setCounter(Counter+1)
  }
  // setCounter(Counter+1)
}
function removeValue(){
  if (Counter > 0 ) {
    setCounter(Counter-1)
  }
  // setCounter(Counter-1)
}
  return (
    <>
    <h1>Chai aur React</h1> 
    <h2>Counter Value:{Counter}</h2> {/* koi bi value inject krni ho tu {} use krta ha */}

    <button onClick={addValue}>Add Value {Counter}</button>
    <button onClick={removeValue}>remove value {Counter}</button>
    <p>footer:{Counter}</p>
    </>
  )
}

export default App

// In React.js, "useState" is a Hook that allows functional components to manage state in a simple and straightforward manner. It's part of the React Hooks API introduced in React version 16.8.
