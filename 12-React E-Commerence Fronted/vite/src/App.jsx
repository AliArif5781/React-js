import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
// import pages
import Home from './Pages/Home'
import ProductDetail from './Pages/ProductDetail'
// import components
import Sidebar from './Components/Sidebar'
import Header from './Components/Header'
import Footer from './Components/Footer'



function App() {
  return (
    <>
     <BrowserRouter>
      <Header/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/product/:id' element={<ProductDetail/>}/>
        </Routes>
        <Sidebar/>
      <Footer/>
     </BrowserRouter> 
    </>
  )
}

export default App
