import { useState } from 'react'
import './App.css'
import Card from './component/Card'
// ab yeh component tu yeh html ki tra behaive kra ga

function App() {
  

  let myObj = {
    username:"Ali",
    age:21,
  }

  let arr = [1,2,3]
  

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-5' >Tailwind Test</h1>

     <Card username="Ali-Arif" btnText = "Click me" someObj = {myObj} myArr = {arr}/> {/* btnText = "Click me" App.jsx ma yeh props pass kr rha ha .aur Card.jsx ma props ko handle bi krna para ga. */}

     <Card username="Ali-Arif" btnText = "Click me" someObj = {myObj} myArr = {arr}/>   {/* btnText = "Click me" App.jsx ma yeh props pass kr rha ha .aur Card.jsx ma props ko handle bi krna para ga. */}
     <Card username="Ali-Arif Developer"  btnText = "Visit me"/> {/* Do baar card lika ha but Delba name lika a raha ha tu hm name change kr skta ha by writing username ="Anyname" */}
     <Card/>
     <Card/>
     {/* inside card above ki ha hm ak component dosra component ma value pass kr skta ho. aur value ko recive krna ha tu mijah Card.jsx ma mijah jb bi function declare kr rha ho Card ka tu uska andhr props ka access hota ha. */}
{/* Props component ko banata ha resuable ak baar apna card bna liya khu na us card ko component ma rak diya jai aur usko baar baar us kr liya jai */}
    </>
  )
}

export default App
