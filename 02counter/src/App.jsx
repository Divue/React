import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
  // REACT controls UI updation
function App() {

  // to propogate or update ui
  let [counter, setCounter] = useState(5)

  // let counter =5   // it will propogate but will never reflect into ui

  const addValue =() =>{
    if(counter < 20){
    setCounter(counter+1)}
    console.log("Clicked",counter);  

  }

  const removeValue=() => {
    if( counter>0){
    setCounter(counter-1)}
    console.log("Clicked",counter);  

  }

  return (
    <>
      <h1>Chai aur React</h1>
      <h2>Counter value: {counter}</h2>
      <button
      onClick={addValue}
      >Add value</button>
      <br/>
      <button
      onClick={removeValue}
      >Remove value</button>
    </>
  )
}

export default App
