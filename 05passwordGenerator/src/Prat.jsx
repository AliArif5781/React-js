import React, { useCallback, useEffect, useRef, useState } from 'react'

function Prat() {
  const [length , setLength] = useState(8);
  const [password ,setPassword] = useState("");
  const [numberAllowed , SetnumberAllowed] =  useState(false);
  const [charAllowed , setcharAllowed] = useState(false)



// ref hook
const passwordRef = useRef(null);

const copyPasswordToClipboard = useCallback(()=>{
  window.navigator.clipboard.writeText(password)
  passwordRef.current?.select()
  passwordRef.current?.setSelectionRange(0,5)
},[password])


  const passwordGenerator = useCallback(()=>{
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    let pass = ''
    if(numberAllowed) str += '0123456789';
    if(charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char)
      setPassword(pass)
    }
  }, [length,charAllowed,numberAllowed,password])
  
  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,setPassword])
  return (
      <>
    <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
     <h1 className='text-white text-center my-3'>PassWord Generator</h1>
     <div className='flex shadow rounded-lg overflow-hidden mb-4'>

       <input type="text"  className='outline-none w-full py-1 px-3'  placeholder='Password' value={password} readOnly ref={passwordRef} />

       <button  className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0' 
        onClick={copyPasswordToClipboard}>copy</button>
       
     </div>
     <div className='flex text-sm gap-x-2'>
         <div className='flex items-center gap-x-1'>
             <input type="range" min={6} max={100} className='cursor-pointer' onChange={(e)=>setLength(e.target.value)} />
             <label>length:{length}</label>
         </div>
         <div className='flex items-center gap-x-1'>
           <input type="checkbox"  id='numberInput' defaultChecked={numberAllowed} onChange={()=>{
            SetnumberAllowed((prev)=> !prev)
           }} />
           <label htmlFor="numberInput">Numbers</label>
         </div>
         <div className='flex items-center gap-x-1'>
           <input type="checkbox"  id='characterInput' defaultChecked={charAllowed} onChange={()=>{
            setcharAllowed((prev)=> !prev)
           }}/>
           <label htmlFor="characterInput">Character</label>
         </div>
     </div>
    </div>
   </>
  )
}

export default Prat
