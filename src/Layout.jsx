import React from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import { Outlet } from 'react-router-dom'

//basically layout is use for call  common components for rendering time this component are 
// common on every page for example header,footer,nav 
const Layout = () => {
  return (
    <>
     <Header/>      {/* header is common in this website */}

     <Outlet />       {/* outlet is react router property basically it is use for change component */}     
    
     <Footer/>       {/* header is common in this website */}
    </>
  )
}

export default Layout