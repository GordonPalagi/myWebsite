import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData' 
import './ComponentCSS/SidebarComponent.css'


function SidebarComponent() {

  const [sidebar, setSidebar] = useState(true);

const changeToX = () => {
  setSidebar(sidebar => !sidebar);
}



  return (
    <div className='sidebar'>
      <div className={sidebar ? 'sidebar-menu active' : 'sidebar-menu'}>
          {SidebarData.map((item, index) => {
            return (
              <ul className='sidebar-menu-items'>
                <li  key={index} className={item.cName} >
                  <Link to={item.path} title={item.title}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              </ul>
            )
          })}
      </div>
    </div>
  )
}

export default SidebarComponent