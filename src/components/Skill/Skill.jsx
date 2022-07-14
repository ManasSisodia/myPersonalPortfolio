import React, { useContext } from 'react'
import { ThemeContext } from '../../context';
import "./skill.css"



const Skill  = ({img,link,info}) => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className='s' style={{borderColor:  darkMode && "#222"}}>
      <div className="s-browser" style={{backgroundColor:  darkMode && "black"}}>
        <div style={{backgroundColor:  darkMode && "#222"}} className="s-circle"></div>
        <div style={{backgroundColor:  darkMode && "#222"}} className="s-circle"></div>
        <div style={{backgroundColor:  darkMode && "#222"}} className="s-circle"></div>
        <div className='skill-detail'>{info}</div>
      </div>
      <a href={link} target="_blank" rel="noreferrer">
        <img src={img} alt="" className="s-img" />
      </a>
    </div>
    
  )
}

export default Skill