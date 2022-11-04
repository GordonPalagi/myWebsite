import React from 'react'
import './LayoutCSS/Layout.css'

function Layout({children}) {
  return (
      <div className='layout'>
          <main>{children}</main>
      </div>
  )
}

export default Layout