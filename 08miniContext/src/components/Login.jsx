import React , {useState,useContext} from 'react'
import UserContext from '../Context/UserContext' // UserContext ka andhr jo values ha wo kasa fetch kro ga ma uska liya apko help krta ha useContext line no.1 .aur wo kasa krta ha jasa apna useState() hook use kiya ha wasa hi use krna ha.

function Login() {
    const [username,setusername] = useState('')
    const [password,setPassword] = useState('')


    const {setUser} = useContext(UserContext)      /* {setUser} = Object la lehta ha aur setUser leh ga.aur phr la liya useContext aur uska andhr UserContext ki value pass kr di.*/
    const handleSubmit =(e) => {
        e.preventDefault()
        setUser({username , password}) // setUser method liya ha tu usma username , password pass kr do.is tra data bheajna ha.Yeh tu baat hoi data bheajna ki.Ab data lana kasa ha
    }
  return (
    <div>
      <h2>Login</h2>
      <input type="text" placeholder='Username' value={username} onChange={(e)=> setusername(e.target.value)} />
      {"   "}
      <input type="text" placeholder='password' value={password} onChange={(e)=> setPassword(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
