import React from 'react'
import { Link } from 'react-router-dom'
import './LayoutCSS/Navbar.css'
import { SidebarData } from '../Components/SidebarData'

function Navbar() {

  const navbarMap = 
  <div className='nav-links-con'>
    {SidebarData.map((item) => {
      return (
        <ul className='container'>
          <li key={item.id}>
            <Link className='nav-link-elements' to={item.path}>
              <span className='nav-link-title'>{item.title}</span>
            </Link>
          </li>
        </ul>
      )
    })}
  </div>
  
  return (
    <div className='navbar'>
      <div className='nav-links-con'>
        {navbarMap}
      </div>
    </div>
  )
}

export default Navbar