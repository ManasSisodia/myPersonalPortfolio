import React from 'react'
import "./skillList.css"
import Skill from "../Skill//Skill"
import { products } from '../../data'

const SkillList = () => {
  return (
    <section id = 'skills' className="sl">
        <div className="sl-texts">
        <div className="sl-title">Skills and Interests</div>
        <p className="sl-desc">
            Apart from Coding. I have a Keen interest in Reading,Sports and Music.
            I play cricket and badminton. I do workout and have a regular physical regime.
            I was underweight during my first year of college but gained 10kgs of weight during
            the pandemic due to home workout and healthy eating.
        </p>
    </div>
    <div className="sl-list">
      {products.map((item)=>(
          <Skill key={item.id} img = {item.img} link = {item.link}/>
      ))}
    </div>
    </section>
  )
}

export default SkillList