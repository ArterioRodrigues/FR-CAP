import React from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
    {
        title: 'DashBoard',
        path: '/Home',
        icon: <AiIcons.AiFillHome/>,
        cName: 'nav-text'
    },

    {
        title: 'Workout',
        path: '/Workout',
        icon: <FaIcons.FaWeightHanging/>,
        cName: 'nav-text'
    },

    {
        title: 'Stats',
        path: '/Stats',
        icon: <IoIcons.IoIosCopy/>,
        cName: 'nav-text'
    }
]

export const sDataView = 

    SidebarData.map((item, index) => {
    return(
    <li key ={index} className ={item.cName}>
        <Link to ={item.path}> 
            {item.icon}
            <span>{item.title} </span>
        </Link>
    </li>
)})
