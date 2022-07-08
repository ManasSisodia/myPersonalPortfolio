import React from 'react'
import Resume from '../../Resume/resume.pdf'
import './cta.css'

const CTA = () => {
  return (
    <div>
        <div className="cta">
            <a href={Resume} download = "Manas' Resume" className='download-btn'>Download CV</a>
        </div>
    </div>
  )
}

export default CTA