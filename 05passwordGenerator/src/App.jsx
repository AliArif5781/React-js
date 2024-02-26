import { useState, useCallback ,useEffect, useRef } from 'react'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed,SetnumberAllowed] = useState(false);
  const [charAllowed,setcharAllowed] = useState(false);
  const [Password,setPassword] = useState("");


  // ref hook
  const  passwordRef =  useRef(null)
  // useCallback() ==> mara pass ak function ha usko jitna ho ska cache(memory) ma rak lo agr ma usko dobara sa run kro jitna part phela ka use hota ha usko use kr lo.
  const passwordGenerator = useCallback(()=>{   // useCallback() funtion ko memorize krta ha jitna ho ska. || they use for optimization.
    let pass = '';
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if (numberAllowed) str += '0123456789';
    if (charAllowed) str += "!@#$%^&*-_+=[]{}~`";

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length +1);  // yeh krna sa index value mila gi.
      pass += str.charAt(char)   // charAt() => Returns the character at the specified index.//
      
    }
    setPassword(pass)
  }, [length,numberAllowed,charAllowed,setPassword])  // Question: setPassword khu diya?  agr password hoga tu  har baar password change hoga usko ran krwata jai ga.setPassword is use for optimization. ||  dependencies  ha apki aur possible run hoga kasa bi us method ko optimize kr lo.inma sa kuch bi change hota ha mara method dobara sa run hota ha usko optimize kro.

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()   // ? is use for optional ho skta ha ki current value zero ho.
    passwordRef.current?.setSelectionRange(0,3)
    window.navigator.clipboard.writeText(Password)
  },[Password])

  useEffect(()=>{     // useEffect jb bi hmara page load hota ha first time pa yeh call hota ha aur agr inma sa dependencies masa chair char hoi mean kuch bi badla(change hova) ma dobara sa re-run hojao ga.Also use for clean-up function. || dependencies ma kuch bi chair char ho tu dobara run kr do.
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])
  return (
    <>
     <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500'>
      <h1 className='text-white text-center my-3'>PassWord Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4'>
        <input type="text" value={Password} className='outline-none w-full py-1 px-3' placeholder='Password' readOnly  ref={passwordRef}/>
        <button  onClick={copyPasswordToClipboard}className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>copy</button>
        
      </div>
      <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
              <input type="range" min={6} max={100} value={length} className='cursor-pointer' onChange={(e) => {setLength(e.target.value)}}/>
              <label>length:{length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={numberAllowed} id='numberInput' onChange={()=> {
              SetnumberAllowed((prev)=> !prev)      // prev value jo bi ha usko reverse kr do  = !prev || true or false flip hota raha ga.
            }} />
            <label htmlFor="numberInput">Numbers</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type="checkbox" defaultChecked={charAllowed} id='characterInput' onChange={()=>{
              setcharAllowed((prev) => !prev)
            }} />
            <label htmlFor="characterInput">Character</label>
          </div>
      </div>
     </div>
    </>
  )
}
/*
      State and useState()
// any data the changes the application is called state when the state changes react update the UI so the latest changes are reflected to the end user.
*/


// useCallback:
// useCallback is a React Hook that lets you cache a function definition between re-renders.
// useCallback(fn,[dependencies]);
export default App
