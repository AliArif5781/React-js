import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
  
  return (
    <UserContextProvider>
     <h1>React</h1>
     <Login/>       {/* Ab mara pass App.jsx ma jobi component la ga wo component  ka pass  directly access mila ga.*/}
     <Profile/>
    </UserContextProvider>
  )
}

export default App
