import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Footer from './Footer'

function Layout({children}) {
  return (
      <div>
          <Navbar/>
          <Sidebar/>
          <main>{children}</main>
          <Footer/>
      </div>
  )
}

export default Layout