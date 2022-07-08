import React, { useContext, useRef } from 'react'
import "./contact.css"
import Phone from "../../img/phone.png"
import Email from "../../img/email.png"
import Address from "../../img/address.png"
import emailjs from '@emailjs/browser';
import { useState } from 'react'
import { ThemeContext } from '../../context'
const Contact = () => {
    const formRef = useRef();

    const theme = useContext(ThemeContext);
    const darkMode = theme.state.darkMode;

    const [done,setdone] = useState(false);
    const [click,setclick] = useState(false);
    const handleSubmit= e =>{
        e.preventDefault();
        setclick(true);
        emailjs.sendForm(
         'service_s91jj5y',
         'template_5dfatdt',
          formRef.current,
          'zEfOGtrAdE_xsIqzz')
      .then((result) => {
          console.log(result.text);
          setdone(true);
      }, (error) => {
          console.log(error.text);
      });
    }
  return (
    <section id = 'contact' className='c'>
    <div className="c-bg"></div>
    <div className="c-wrapper">
        <div className="c-left">
            <h1 className="c-title">Contact Me</h1>
            <div className="c-info">
                <div className="c-info-item">
                    <img className='c-icon' 
                    src={Phone} 
                    alt="" />
                    +91 8178439724
                </div>

                <div className="c-info-item">
                    <img className='c-icon' 
                    src={Email} 
                    alt="" />
                    manassisodia<br></br>200052@gmail.com
                </div>

                <div className="c-info-item">
                    <img className='c-icon' 
                    src={Address} 
                    alt="" />
                    New Delhi
                </div>
            </div>
        </div>
        <div className="c-right">
            <p className='c-desc'>
            I am available for Full-time job opportunities, internships, projects and other work opportunities in the domain of Software Development. I'm open to Freelancing too. <br></br>
            <b>Do you have An idea? Let's discuss :).</b>
            </p>
            <form ref={formRef} onSubmit={handleSubmit}>
                <input style={{backgroundColor:  darkMode && "#333",color:darkMode && "white"}} type="text" placeholder='Name' name="user_name"/>
                <input style={{backgroundColor:  darkMode && "#333",color:darkMode && "white"}} type="text" placeholder='Subject' name="user_subject"/>
                <input style={{backgroundColor:  darkMode && "#333",color:darkMode && "white"}} type="text" placeholder='Email' name="user_email"/>
                <textarea style={{backgroundColor:  darkMode && "#333",color:darkMode && "white"}} name="message" rows="5" placeholder='message'></textarea>
                <button>Submit</button>
                <div className="submit" style = {{color:darkMode && "white"}}>
                    {click && !done && "Sending..."}
                    {click && done && "Mail Sent"}
                </div>
                {/* {done && "Submitted"} */}
            </form>
        </div>
    </div>
    </section>
    
  )
}

export default Contact