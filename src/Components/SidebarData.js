import React from 'react';
import * as AiIcons from 'react-icons/ai'
import * as GrIcons from 'react-icons/gr'
import * as FcIcons from 'react-icons/fc'
import * as RiIcons from 'react-icons/ri'


export const SidebarData = [

    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiOutlineHome/>,
        cName: 'nav-text'
    },
    {
        title: 'Projects',
        path: '/projects',
        icon: <GrIcons.GrProjects/>,
        cName: 'nav-text'
    },
    {
        title: 'About',
        path: 'about',
        icon: <FcIcons.FcAbout/>,
        cName: 'nav-text'
    },
    {
        title: 'Contact',
        path: '/contact',
        icon: <RiIcons.RiMailSendLine/>,
        cName: 'nav-text'       
    }
]