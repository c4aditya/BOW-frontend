import React, { useState } from "react";
import '@fontsource/roboto'; // Defaults to weight 400
import Seemore from "./components/Seemore.jsx";
import { BrowserRouter as Router, Routes, Route, Navigate, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import Counter from "./components/Counter";
import Card from "./components/Card";
import Feather from "./components/Feathers";
import MoreAboutUs from "./components/MoreAboutUs";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Topscroll from "./components/Topscroll.jsx";
import CoursePage from "./pages/CoursePage";
import data from "./Data";
import "./components/main.css";
import OnlineAddmission from "./components/OnlineAddmissionForm";
import CourseDetails from "./components/CourseDetails";
import EnquiryNow from "./components/EnquiryNow";
import Enrollement from "./components/Enrollement";
import Placement from "./pages/placement/Placement.jsx";
import Certificate from "./pages/Certificate/Certificate.jsx";
import Contact from "./pages/contact/Contact.jsx";
import Aboutus from "./pages/aboutus/Aboutus.jsx";
import Refund from "./pages/refund/Refund.jsx"
import Scroll from "./components/Autoscroll.jsx"
// import { useNavigate } from "react-router-dom";
function App() {
  const [getData] = useState(data);


  return (
    
    <Router>
      <Navbar/>
      <Topscroll/>
      <Routes>
        {/* Home Route */}
        <Route
          path="/"
          element={
            <div className="width" >
              <Home />
              <Counter />
              <div className="card-container">
                <div className="heading-content">
                  <p>POPULAR COURSES</p>
                  <h1>Pick a course to get started your study</h1>
                </div>
                <div className="main-cards-container">
                  {getData.map((item) => (
                    <Card
                      key={item.id}
                      id={item.id}
                      title={item.title}
                      description={item.description}
                      image={item.image}
                    />
                  ))}
                </div>

                <Seemore/>
                
              </div>
             
              <Feather /> 
              <MoreAboutUs />
            </div>
          }
        />

        {/* Course Page Route */}
        <Route path="/course" element={<CoursePage/>} />
        <Route path="/details/:id" element={<CourseDetails/>} />
        <Route path="/onlineform"  element={<OnlineAddmission/>} />
        <Route path="/enquiry" element={<EnquiryNow/>} />
        <Route path ="/enrollment" element={<Enrollement/>}/>
        <Route path="/placement" element={<Placement />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/policy" element={<Refund />} />

        
        

       
       
        
      </Routes>
      <Scroll/>
      <Footer />
    </Router>
    
  );
}

export default App;
