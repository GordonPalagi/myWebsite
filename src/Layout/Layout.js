import React from 'react'
import Navbar from './Navbar'
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