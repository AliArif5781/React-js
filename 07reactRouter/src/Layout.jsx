import React from 'react'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import { Outlet } from 'react-router-dom'
function Layout() {
  return (
    <>
     <Header/> 
     <Outlet/>            {/*AB ma yeh chata ho ki dynamically cheeza pass kr do Home, About bi kr do tu kis tra sa ma kr skta ho is lya apko react router dom sa interesting cheez milti ha. jiska name ha Outlet in line no.4 * .Yeh Outlet kya krta ha  is layout ko as a base use kr leh ga aur isma jobi cheeza ai gi navbar and footer wo same raka ga.jaha pa apna Outlet da diya wha pa ap cheezo ko change kr skta ho. <Header/> same rha ga  <Footer/> same raha ga iska andhr cheeza change hoti rha gi. Aur iski baki kam main.jsx ma ha. */}
     <Footer/>
    </>
  )
}

export default Layout
