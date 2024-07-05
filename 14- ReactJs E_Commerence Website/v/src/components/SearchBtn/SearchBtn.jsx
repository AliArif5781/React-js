import React, { useState } from 'react'

const SearchBtn = ({setQuery}) => {
    const [color,setColor]=useState(false);
    const colorToggle =()=>{
        setColor(true)
    }
    const colorToggles =()=>{
        setColor(false)
    }
  return (
    <div className='flex justify-end items-end'>   
      <div className='flex  justify-end'>
       <input type="text" 
       onClick={colorToggle}
        placeholder='Search...'
        className={`border p-2  outline-none mb-10 mt-5 ${color? "border-indigo-500": colorToggles}`}
        onChange={(e)=> setQuery(e.target.value)}
        /> 
</div>

   
    
     </div>

  )
}

export default SearchBtn
