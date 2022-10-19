import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData' 
import './ComponentCSS/SidebarComponent.css'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import headshot from '../Images/HeadShot.JPEG'

function SidebarComponent() {

  const [sidebar, setSidebar] = useState(true);

const changeToX = () => {
  setSidebar(sidebar => !sidebar);
}

let toggleSidebar = 
<div className='sidebar-bars'>
  <Link onClick={changeToX} to="#" className='sidebar-menu'>
    {sidebar ? <FaIcons.FaBars/> : <AiIcons.AiOutlineClose/>}
  </Link>
</div>



  return (
    <div className='sidebar'>
        <div>
            {toggleSidebar}
        </div>
      <div className={sidebar ? 'sidebar-menu active' : 'sidebar-menu'}>
          <ul>
            {SidebarData.map((item, index) => {
                return (
                    <li  key={index} className={item.cName} >
                    <Link to={item.path}>
                        {item.icon}
                        <span>{item.title}</span>
                    </Link>
                    </li>
                    )
                })}
            </ul>
      </div>
    </div>
  )
}

export default SidebarComponent