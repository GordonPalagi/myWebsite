import React from 'react'
import { Link } from 'react-router-dom'
import './LayoutCSS/Navbar.css'
import { SidebarData } from '../Components/SidebarData'

function Navbar() {

  const sidebarMap = 
  <div className='nav-links-con'>
    {SidebarData.map((item) => {
      return (
        <ul className='container'>

        <li key={item.id}>
          <Link className='nav-link-elements' to={item.path}>
            <span>{item.title}</span>
          </Link>
        </li>
        </ul>
      )
    })}
  </div>
  
  return (
    <div className='navbar'>
      <div className='nav-links-con'>
        {sidebarMap}
      </div>
    </div>
  )
}

export default Navbar