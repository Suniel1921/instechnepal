import React from 'react'
import Navbar from '../Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'

const Layout = () => {
  return (
    <>
    <div>
        {/* <div><Navbar/></div> */}
        <Outlet/>
         <div className='techstack services_component'><Footer /></div>
    </div>
      
    </>
  )
}

export default Layout
