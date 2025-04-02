import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link, useNavigate } from "react-router-dom";
import mainlogo from "../images/main-logo.png"
// import fb from "../images/facebook.png"
// import linkdin from "../images/linkedin.png"
// import insta from "../images/instagram.png"
// import wht from "../images/whatsapp.png"
import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";

function Navbar() {
  const [scroll , setScroll] = useState(false);
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const navigate = useNavigate();

  // Sidebar open/close toggle function
  function handleClickHamburger() {
    setSidebarOpen(!isSidebarOpen);
  }

  // Close sidebar function
  function closeSidebar() {
    setSidebarOpen(false);
  }

  // Manage body scroll when sidebar is open
  useEffect(() => {
    if (isSidebarOpen) {
      document.body.style.overflow = "hidden"; // Disable scrolling
    } else {
      document.body.style.overflow = "auto"; // Enable scrolling
    }
  }, [isSidebarOpen]);

  // Function for the ONLINE ADMISSION button click
  function clickHandler() {
    navigate("/onlineform");
    closeSidebar(); // Close sidebar when navigating
  }

  // changing the background color while scrolling 

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
        <div className="info-top">
          <div className="social-media-logos">
          
            <div>
              <a href="https://facebook.com">  <CiFacebook/></a>
           
            </div>
            <div>
              <a href="https://linkedin.com">  <CiLinkedin/></a>
          
            </div>
            <div>
              <a href="https://instagram.com"> <CiInstagram/></a>
            

              </div>
              <div>
                <a href="https://twitter.com">  <CiTwitter/></a>
            
              </div>
              <div>
                <a href="https://whatsapp.com"> <FaWhatsapp/></a>
            
              </div>
           
          </div>
         
        

          <div className="online-addimission-top">
          <div className="call-email">
            <div className="call">
              <ul>
                <li>For Addmission : +91 8276363636 </li>
              </ul>
            </div>

            <div className="email">
              <ul>
                <li>Email :- addmission@bow.in</li>
              </ul>
            </div>
          </div>
            <button>Online Class </button>
          </div>
        </div>
      {/* Main Navbar */}
      <nav className={`tops  ${scroll ? "scrollcolor" : "noScrollcolor"}` }>
      
        <div className="main-top-class">
          <div className="nav-bar-main-class">
          <div className="logo">
                <img src={mainlogo} alt="logo"/>
              </div>
              

              <div className="meanu-list">
                <ul>
              
                  <li><Link to="/" onClick={closeSidebar}>Home</Link></li>
                  <li><Link to="/course" onClick={closeSidebar}>Course</Link></li>
                  <li><Link to="/aboutus" onClick={closeSidebar}>About Us</Link></li>
                  <li><Link to="/contact" onClick={closeSidebar}>Contact</Link></li>
                  <li><Link to="/placement" onClick={closeSidebar}>Placement</Link></li>
                  <li><Link to="/certificate" onClick={closeSidebar}>Certificate</Link></li>
                  
                </ul>

              </div> 
              <div className="button-main">
              <div className="buttons">
              {/* Online Admission button */}
              <button className="onlineAddmissionbtn" onClick={clickHandler}>ONLINE ADMISSION</button>

              {/* Hamburger menu button */}
              <div className="hamburger">
                <button onClick={handleClickHamburger} className="btn-hamburger">
                  <FontAwesomeIcon icon={faBars} />
                </button>
              </div>
            </div>       
            </div>           
          </div>
          

        </div>
      </nav>

      {/* Sidebar */}
      {isSidebarOpen && <div className="backdrop" onClick={closeSidebar}></div>}
      {isSidebarOpen && (
        <div className="sidebar">
          <ul>
            <li><Link to="/" onClick={closeSidebar}>Home</Link></li>
            <li><Link to="/course" onClick={closeSidebar}>Course</Link></li>
            <li><Link to="/aboutus" onClick={closeSidebar}>About Us</Link></li>
            <li><Link to="/contact" onClick={closeSidebar}>Contact</Link></li>
            <li><Link to="/placement" onClick={closeSidebar}>Placement</Link></li>
            <li><Link to="/certificate" onClick={closeSidebar}>Certificate</Link></li>
            <li><Link to="/policy" onClick={closeSidebar}>Policy</Link></li>
          </ul>

          {/* Close button for sidebar */}
          <ul className="cancle">
            <li onClick={closeSidebar}>X</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Navbar;
