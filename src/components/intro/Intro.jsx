 import React from 'react'
 import "./intro.css"
 import Me from "../../img/me.png"
 import CTA from './CTA'
 const Intro = () => {
   return (
     <div className="i">
        <div className="i-left">
            <div className="i-left-wrapper">
                <h2 className='i-intro'>Hello, My name is</h2>
                <h1 className='i-name'>Manas Sisodia</h1>
                <div className="i-title">
                    <div className="i-title-wrapper">
                        <div className="i-title-item">Web Developer</div>
                        <div className="i-title-item">Programmer</div>
                        <div className="i-title-item">Reader</div>
                        <div className="i-title-item">Student</div>
                        <div className="i-title-item">Sports Enthusiast</div>
                    </div>
                </div>
                <p className="i-desc">
                    I am a Mechanical Engineering Student from Delhi Technological University but I have a keen Interest
                    in Web Development and Computer Science.
                </p>
                <CTA/>
            </div>
        </div>
        <div className="i-right">
            <div className="i-bg"></div>
            <img src={Me} alt="" className="i-img" />
        </div>
     </div>
   )
 }
 
 export default Intro