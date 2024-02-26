import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Contact from './Components/Contact/Contact.jsx'
import User from './Components/User/User.jsx'
import Github, { githubInfoLoader } from './Components/Github/Github.jsx'

  // const router = createBrowserRouter([
  //   {
  //     path:'/',
  //     element: <Layout/>,
  //     children:[
  //       {
  //         path:"",
  //         element: <Home/>
  //       },
  //       {
  //         path:"about",
  //         element:<About/>
  //       },
  //       {
  //         path:"Contact-Us",
  //         element:<Contact/>
  //       }
  //     ]
  //   }
  // ])

    // OR
  // Another way of nesting:

   const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Layout/>}>
          <Route path='' element={<Home/>}/>
          <Route path='about' element={<About/>}/>
          <Route path='contact' element={<Contact/>}/>
          <Route path='user/:userid' element={<User/>}/>
          <Route loader={githubInfoLoader} path='github' element={<Github/>}/>  {/* loader kya krta ha  jb bi apna koi bi data fetch krna ha  api sa ya phr database sa kuch bi  tu ap direct api call yaha si kr skta ha */}
      </Route>
    )
   )

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router}/> {/* yeh component ak prop lata ha jb tk yeh prop ni laga yeh km ni kra ga . RouterProvider = yeh apka rapper ha uska andhr apna sa lapait diya ha.*/}
  </React.StrictMode>,
)
