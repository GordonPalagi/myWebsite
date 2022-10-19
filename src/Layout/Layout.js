import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'
import './LayoutCSS/Layout.css'

function Layout({children}) {
  return (
      <div className='layout'>
          <Navbar/>
          <main>{children}</main>
      </div>
  )
}

export default Layout
{/* <Navbar/>
<div className='main-con'>
  <Sidebar/>
  <main>{children}</main>
</div>
<Footer/> */}