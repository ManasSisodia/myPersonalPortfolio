import React from 'react'
import portfolio from "../../portfolio_images/portfolio.png"
import "./about.css"
const About = () => {
  return (
    <section id = 'about' className='a' >
        <div className="a-left">
        <div className="a-card bg"></div>
            <div className="a-card">
            <img src={portfolio} alt="" className="a-img"/>
            </div>
        </div>
        <div className="a-right">
          <h1 className="a-title">About Me</h1>
          <p className="a-sub">
              I am a 4th year student pursuing Engineering from Delhi Technological University.<br/>I also have a Minor in Information Technology.
          </p>
          <p className="a-desc">
          I have done my 12th from Rishabh Public School with a percentage 
          of 95 .I have a knack for programming. I love to learn different programming languages and Techstack.I have done a 3 Months Web Development internship from VisibleBox LLC .I also have a keen interest in problem-Solving. I have solved 700+ questions on leetcode, GeeksforGeeks, and Coding Ninjas. I am a beginner-level react developer and hoping to develop more projects using this technology
          </p>

          <p className="a-project">
              1.) I have made a fully responsive Portfolio Project using HTML,CSS and ReactJS. It shows all my skills,Interests and Projects.It also contains a dark mode.<br/><br/>
              2.) I have made a fully responsive GYM App using HTML, CSS and ReactJS. It has a lot of functionalities like a number of exercises to do according to a targer muscle or an equipment. It also shows your BMI . All this is done using an API EXERCISEDB from RapidAPI.
          </p>
        </div>
    </section>

  )
}

export default About