import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import {addTodo} from '../features/todo/todoSlice'
// AddTodo.jsx is lya  banaya ki store ka andhr kuch add krna ha add kasa hota ha dispatch sa.Tu apko kuch na kuch dispatch krna preh ga.// jb bi values bheajna ka liya useDispatch() use hota ha.
function AddTodo() {

    const [input,setInput] = useState('')
    const dispatch = useDispatch()           // dispatch kya krta ha , dispatch 1 reducer ko use krta hova store ka andhr changes krta ha

    const addTodoHandler = (e) =>{
        e.preventDefault()          //  dispatch ka andhr hi reducer ko call krna prta ha.
        dispatch(addTodo(input))   // is dispatch ka andhr jo bi apka reducer ha aur reducer import krna mt bhulna apna reducer import kiya aur dispatch ka through us reducer ko bheajh diya.
        setInput('')

    }

  return (
    <form onSubmit={addTodoHandler} className="space-x-3 mt-12">
      <input
        type="text"
        className="bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
        placeholder="Enter a Todo..."
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        type="submit"
        className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
      >
        Add Todo
      </button>
    </form>
  )
}

export default AddTodo
