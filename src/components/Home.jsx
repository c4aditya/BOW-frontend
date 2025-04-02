import React from 'react'
import poster1 from "../images/poster1.jpg";
import poster2 from "../images/poster2.jpg";
import poster3 from "../images/poster3.jpg";
import poster4 from "../images/poster4.jpg";
import cyberSecurity from "../images/cyber-security.png";
import web from "../images/data-science.png";
import cloud from "../images/cloud-computing.png";
import devops from  "../images/devops.png";
import BI from "../images/BI.png";
import CRM from "../images/CRM(1).png";
import frameimg from "../images/frame-work.png";
import { useNavigate } from 'react-router-dom';



function Home() {
  const navigate = useNavigate()
 function enrollNowPage(){
  console.log("the button is clicked")
  navigate("/enquiry")
 }

  return (
    <div>
     
        <section >
        <div className='main-content'>
        <div className='top-content'>
        <div className='top-left-content'>
        <div className='heading'>
        <h1>Reach your aspirations alongside  <span className='text'> India's top </span> educators</h1>
        <p>Over <b className='text'> 1 lakhs </b>  learners trust us for their preparation</p>

        </div>
        <div className='enquiry'>
           <button onClick={enrollNowPage} className='btn'>Enquire Now!</button>
        </div>

        </div>
        <div className='top-lift-images'>
        <div className='left'>
        <div className='poster1'>
            <img src={poster1} alt='image not found'></img>
        </div>
        <div className='poster1'>
            <img src={poster2} alt='image not found'></img>
        </div>
        </div>
   
        <div className='right'>
        <div className='poster1'>
            <img src={poster3} alt='image not found'></img>
        </div>
        <div className='right'>
        <div className='poster1'>
            <img src={poster4} alt='image not found'></img>
        </div>
        </div>
        </div>

        </div>


        </div>
        </div>
      </section>

      <section>
        <div className='categories'>
        <div className='categories-heading-content'>
        <p>CHECK OUT OUR CATEGORIES</p>
        <h1>Top categories for popular courses to show</h1>
        </div>
        <div className='categories-icon'>
        <div className='width'>
        <div className='categories-icons-image'>

        <div className='icon-with-text'>
        <img src={cyberSecurity}></img>
        <p>Cyber Security</p>
        </div>

        
        <div className='icon-with-text'>
        <div className='web'>
        <img src={web}></img>
        <p>Data Science</p>
        </div>
        </div>

        
        <div className='icon-with-text'>
        <img src={cloud}></img>
        <p>Cloud Computing</p>
        </div>

        
        <div className='icon-with-text'>
        <img src={devops}></img>
        <p>DevOps</p>
        </div>

        <div className='icon-with-text'>
        <img src={frameimg}></img>
        <p>Pro. Frameworks</p>
        </div>

        <div className='icon-with-text'>
        <img src={CRM}></img>
        <p>management methodologies</p>
        </div>
        <div className='icon-with-text'>
        <img src={BI}></img>
        <p>Bi and visualization</p>
        </div>
          
        </div>

        </div>
        </div>
       
        </div>

      
      </section>
    </div>
  )
}

export default Home