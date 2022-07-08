import React from 'react'
import "./about.css"
const About = () => {
  return (
    <section id = 'about' className='a' >
        <div className="a-left">
        <div className="a-card bg"></div>
            <div className="a-card">
            <img src="https://beebom.com/wp-content/uploads/2018/03/15-Best-Laptops-for-Programming-in-India.jpg?w=750&quality=75" alt="" className="a-img"/>
            </div>
        </div>
        <div className="a-right">
          <h1 className="a-title">About Me</h1>
          <p className="a-sub">
              I am a 4th year student pursuing Engineering from Delhi Technological University.
          </p>
          <p className="a-desc">
          I have done my 12th from Rishabh Public School with a percentage 
          of 94.5% marks.I have a knack for programming. I love to learn different programming languages and Techstack.I have done 3 Month Web Development internship from VisibleBox LLC .I also have a keen interest in problem-Solving. I have solved 700+ questions on leetcode, GeeksforGeeks, and Coding Ninjas. I am a beginner-level react developer and hoping to develop more projects using this technology
          </p>
        </div>
    </section>

  )
}

export default About