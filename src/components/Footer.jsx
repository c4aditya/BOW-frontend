import React from "react";

import { FaCheck } from "react-icons/fa6";
import { MdCall, MdLocationPin } from "react-icons/md";
import { Link } from 'react-router-dom';



const Footer = () => {

  return <footer >
    <div className="footer">
      <div className="sb_footer section_padding">
        <div className="sb_footer-links">
          <div className="contact_details">
            <h4>About us</h4>
            <hr></hr>

            <p> Birds of the world aviation training institute is proud to be recognized as one of the leading training institutes in India.Guided by a team of highly skilled professionals.</p>
          </div>
          <div className="page-links">
            <h4 className="in">Information Link</h4>
            <hr></hr>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/aboutus">About Us</Link></li>
              <li><Link to="/placement">Placement</Link></li>
              <li><Link to="/course">Courses</Link></li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/certificate">Certificate</Link></li>
              <li><Link to="/policy">Refund Policy</Link></li>
            </ul>
          </div>


          {/* <div className="sb_footer-links_div">
                    <h4>Popular courses</h4> 
                
                <a href="/course">
                        <p>Reengineering Program</p>
                    </a>
                <a href="/course">
                        <p>Hotel Management</p>
                    </a>
                <a href="/course">
                        <p>Airport Management</p>
                    </a>
                <a href="/course">
                        <p>Aviation</p>
                    </a>
                <a href="/course ">
                        <p>Air Hostess</p>
                    </a>
                <a href="/course ">
                        <p>Cruise Ship</p>
                    </a>
                
             </div> */}
          <div className="contact_details">
            <h4>Contacts</h4>
            <hr></hr>

            <p><MdLocationPin></MdLocationPin>  Birds of the world aviation training institute Office No 38, Bukhara Faridpur Road Bareilly (Uttar Pradesh) - 243201</p>
            {/* <p> Nehru market gate-4 </p> */}
            {/* <p> Greater Noida, 201301</p> */}
            <p><MdCall /> +91 7303275128</p>
             <p> <span><FaCheck /></span>  Ministry of Corporate Affairs </p>
             <p> <span><FaCheck /></span> International Organization for Standardization </p>
             <p> <span><FaCheck /></span> Skill India digital hub </p>
             <p><span><FaCheck /></span>  Indian Institute of Corporate Affairs</p>
             <p><span><FaCheck /></span> National Capital territory</p>


          </div>

        </div >
        <hr className="divider" />

        <div className="sb_footer-below">
          <div className="sb_footer-copyright">
            <p>
              © 2023  Birds of the world Aviation Training Institute.All Rights Reserved.
            </p>
          </div>
          <div className="sb_footer-below-links">
            {/* <h4>social media</h4> */}
            {/* <div className="socialmedia">
              <p><img src={fb} alt="" /></p>
              <p><img src={x} alt="" /></p>
              <p><img src={insta} alt="" /></p>
              <p><img src={linkdin} alt="" /></p>
            </div> */}

          </div>
        </div>


      </div>
    </div>

  </footer>
    ;

};

export default Footer;
