import React from 'react'
import onlineLearning from "../images/online-learning.png"
import onlineCertificate from "../images/online-certificate.png";
import teamWork  from "../images/teamwork.png";
import doubtSolving from "../images/doubtSolving.png"

function Feather() {
  return (
    <div >
   
      <div className='top-feather'>
      <div className='feather-imside-width'>
      <div className='feathers-images'>
      <div className='image-content'>
        <img src={onlineCertificate}></img>
      </div>
      <div className='fether-content'>
        <p>Online Certifications</p>
      </div>
      </div>

      <div className='feathers-images'>
      <div className='image-content'>
        <img src={onlineLearning}></img>
      </div>
      <div className='fether-content'>
        <p>Online Learning</p>
      </div>
      </div>

      <div className='feathers-images'>
      <div className='image-content'>
        <img src={teamWork }></img>
      </div>
      <div className='fether-content'>
        <p>Experienced Members</p>
      </div>
      </div>

      <div className='feathers-images'>
      <div className='image-content'>
        <img src={doubtSolving}></img>
      </div>
      <div className='fether-content'>
        <p>Doubt solving</p>
      </div>
      </div>
      </div>
    </div>
    </div>
  )
}

export default Feather;