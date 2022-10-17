import React from 'react'
import { Link } from 'react-router-dom'
import './LayoutCSS/Navbar.css'
import { SidebarData } from '../Components/SidebarData'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { useState } from 'react'

function Navbar() {

  const [sidebar, setSidebar] = useState(true);

  const changeToX = () => setSidebar(sidebar => !sidebar);
  
  

  let toggleSidebar = 
  <div className='sidebar-bars'>
    <Link onClick={changeToX} to="#" className='sidebar-menu'>
      {sidebar ? <FaIcons.FaBars/> : <AiIcons.AiOutlineClose/>}
    </Link>
  </div>
  
  return (
    <div className='navbar'>
      {toggleSidebar}
        {SidebarData.map((item, index) => {
          return (
            <ul className='nav-con'>
              <li className='nav-link-con' key={index}>
                <Link className='nav-links' to={item.path}>{item.title}</Link>
              </li>
            </ul>
          )
        })}
    </div>
  )
}

export default Navbar