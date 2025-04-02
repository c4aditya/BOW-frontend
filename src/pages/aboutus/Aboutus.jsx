
import './Aboutus.css';
import { useEffect } from 'react';
import aboutbg from '../../images/aboutbg.jpg';
import Instructors from '../instructors/Instructors';
import target from "../../images/target-icon.webp";
import doc from "../../images/document-icon.png";
import setting from "../../images/setting-icon.webp";
import network from "../../images/network-icon.webp";
import rocket from "../../images/rocket-icon.webp";
import calendar from "../../images/calendar-icon.webp";
import vision from "../../images/rightimage.jpg";
import leftimg from "../../images/leftimage.jpg";
import messege from "../../images/chairmanbg.jpg";




const Aboutus= () => {

    useEffect(() => {
      const elements = document.querySelectorAll('.why-us-image, .why-us-text');
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      });
  
      elements.forEach(element => observer.observe(element));
  
      // Cleanup observer
      return () => observer.disconnect();
    }, []);
  
    return (
      <div className="about-us-layout">
        {/* About Us Section */}
        <div className="about-us-section-bg" style={{ backgroundImage: `url(${aboutbg})` }}>
          <div className="about-us-page">
            <h1>ABOUT US</h1>
          
          </div>
        </div>
        <div className="ad">
              <marquee>Admission Opens For Session 2024- 2025 | 100% Job Placements Assistance | Admissions Open For New Batches | Register Now!</marquee>
        </div>
  
        <div className="why-us-section">
          {/* Section 1: Text on Left, Image on Right */}
          <div className="why-us-container">
            <div className="why-us-text">
              <h3>Awards Winner Support Center</h3>
              <p>
                At  Birds of the world Aviation Training Institute, we don’t just teach – we ignite curiosity, foster creativity, and promote innovation. 
                Our mission is to bridge the gap between theoretical knowledge and practical application, equipping learners with the tools they need to thrive in multiple industries.
                Since our inception, we have been committed to nurturing entrepreneurial spirit, encouraging fresh ideas.
                <br />
                Birds of the wrold Aviation Training Institute is more than just an institute; it's a community where students grow, dream, and achieve. 
                Here, we believe in empowering every learner to turn their aspirations into reality through hands-on learning, mentorship, and a deep understanding of the evolving professional world.
                Welcome to  BOW Aviation Training Institute – where your journey to success begins.
              </p>
            </div>
            <div className="why-us-image">
              <img src={leftimg} alt="Awards Winner Support Center" />
            </div>
          </div>
  
          {/* Section 2: Image on Left, Text on Right */}
          <div className="why-us-container reverse">
            <div className="why-us-image second">
              <img src={vision} alt="Our Story" />
              {/* <img src="pattern.png" alt="Dotted Pattern" className="dotted-pattern"/> */}
            </div>
            <div className="why-us-text">
              <h3>Our Story</h3>
              <p>
                It is a long-established fact that you should read. The best Diploma in multiple Courses like Diploma in Aviation, Banking & finance, Information Technology and Merchant Navy, Fire & Safety Training Institute in INDIA. Birds of the world Aviation Training Institute is managed by a team of highly skilled professionals. 
                <br />
                We motivate the students to perform any challenging situations which helps them to achieve the pinnacle in their professional life. 
                We impart the best of training methods about courteous customer service, grooming skills, presentation skills, and also about the quality of education which is required to excel in the Aviation, IT, Banking, Merchant-Navy and the Corporate sectors.
              </p>
            </div>
          </div>
        </div>
  
        {/* Message from Chairman Section */}
        <div className="message-chairman-section">
          <div> <Instructors/></div>
        </div>
        <div className="placement-container">
        <div className="placement-item-cc">
          <img src={target} alt="Career Counseling" className="placement-icon" />
          <h4>Personalized Career Counseling</h4>
          <p>One-on-one guidance tailored to align your career path with industry needs.</p>
        </div>
        <div className="placement-item-cc">
          <img src={doc} alt="Resume Assistance" className="placement-icon" />
          <h4>Resume & Cover Letter Assistance</h4>
          <p>Crafting professional resumes and cover letters to help you stand out.</p>
        </div>
        <div className="placement-item-cc">
          <img src={setting} alt="Interview Preparation" className="placement-icon" />
          <h4>Interview Preparation</h4>
          <p>Mock interviews and feedback sessions for confident performance.</p>
        </div>
        <div className="placement-item-cc">
          <img src={network} alt="Networking Opportunities" className="placement-icon" />
          <h4>Networking Opportunities</h4>
          <p>Connect with industry professionals via workshops and seminars.</p>
        </div>
        <div className="placement-item-cc">
          <img src={calendar} alt="Job Fairs" className="placement-icon" />
          <h4>Job Fairs & Recruitment Drives</h4>
          <p>Access exclusive events to interact with top employers.</p>
        </div>
        <div className="placement-item-cc">
          <img src={rocket} alt="Internship Assistance" className="placement-icon" />
          <h4>Internship & Job Placement Assistance</h4>
          <p>Find internships and job opportunities tailored to your diploma.</p>
        </div>
      </div>
         <div className='our-instructors'>

         </div>
      </div>
    );
  }
  
  export default Aboutus