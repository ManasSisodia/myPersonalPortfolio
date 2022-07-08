import React from 'react'
import './nav.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {FcIdea} from 'react-icons/fc'
import {BiMessageDetail} from 'react-icons/bi'
import { useState } from 'react'


const Nav = () => {
    const [activeNav,setActiveNav] = useState('#');
  return (
    <nav>
        <a className={activeNav === '#' ? 'active' : ''} href="#" onClick={()=> setActiveNav('#')}><AiOutlineHome/></a>
        <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser/></a>
        <a href="#skills" onClick={()=> setActiveNav('#skills')} className={activeNav === '#skills' ? 'active' : ''}><FcIdea/></a>
        <a href="#contact" onClick={()=> setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageDetail/></a>
    </nav>
  )
}

export default Nav