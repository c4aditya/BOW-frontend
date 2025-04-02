import React, { useRef, useState } from "react";
import "./Certificate.css";
import certificate from '../../images/certificateex.jpeg'
import { motion, useInView } from "framer-motion";
import certificatebb from '../../images/certificatebb.jpg';


const fadeInUpAnimation = {
  hidden: {
    opacity: 0,
    y: 100,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

// Stagger effect for heading and image
const containerAnimation = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Certificate = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Observe the element and trigger the animation once

  // State for form data
  const [formData, setFormData] = useState({
    name: "",
    fatherName: "",
    enrollmentNumber: "",
    email: "",
    contactNumber: "",
  });

  // Handle input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  // Handle form submission
  async function submitHandler(event) {
    event.preventDefault();

    try {
      const responce = await fetch("https://api.botwavation.com/certificate/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
    }

    catch (error) {

      console.log("The data is not send ")

      }

      console.log("Form Submitted:", formData); // Log form data to console

      // Reset the form fields
      setFormData({
        name: "",
        fatherName: "",
        enrollmentNumber: "",
        email: "",
        contactNumber: "",
      });
    };

    return (
      <div className="cert-page">
        <div className="certbg" style={{ backgroundImage: `url(${certificatebb})` }}>
          <div className="cert-heading">
            <h1>CERTIFICATE</h1>
        
          </div>
        </div>
        <div className="ad">
          <marquee>
            Admission Opens For Session 2024-2025 | 100% Job Placements Assistance | Admissions Open For New Batches |
            Register Now!
          </marquee>
        </div>
        <div className="cert-content">
          <div className="cert-section">
            <div className="cert-head">
              <h1>REQUEST FOR CERTIFICATE</h1>
            </div>
            <form className="cert-form" onSubmit={submitHandler}>
              <label>Name*</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Enter your name"
                required
              />
              <label>Father's Name*</label>
              <input
                type="text"
                name="fatherName"
                value={formData.fatherName}
                onChange={handleChange}
                placeholder="Enter your father's name"
                required
              />
              <label>Enrollment Number*</label>
              <input
                type="text"
                name="enrollmentNumber"
                value={formData.enrollmentNumber}
                onChange={handleChange}
                placeholder="Enter your enrollment number"
                required
              />
              <label>Email*</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
              />
              <label>Contact Number*</label>
              <input
                type="number"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                placeholder="Enter your contact number"
                required
              />
              <div className="submitbtn">
                <button type="submit">Submit</button>
              </div>
            </form>
            <div>
              <p>
                Note*: Once we receive all these details, you'll get a confirmation email with the requested details. We
                will take up to 5 days to fulfill your request, and you'll receive your Certificate via Email.
              </p>
            </div>
          </div>
        </div>

        <motion.div
          className="certificate"
          ref={ref}
          initial="hidden"
          animate={isInView ? "show" : "hidden"}
          variants={containerAnimation}
        >
          {/* Heading animation */}
          <motion.h1 variants={fadeInUpAnimation}>Certificate</motion.h1>
          {/* Image animation */}
          <motion.img
            src={certificate}
            alt="CERTIFICATION"
            className="certificate-img"
            variants={fadeInUpAnimation}
          />
        </motion.div>

      </div>
    );
  };

  export default Certificate;
