import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import "./Contact.css";
import Contactbb from "../../images/contactbb.jpg";
import Contactcg from "../../images/contactcg.svg";

const Contact = () => {
  // State to manage form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phoneno: "",
    message: "",
  });

  // Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Form validation function
  const validateForm = () => {
    let isValid = true;
    if (!formData.name) {
      toast.error("Name is required");
      isValid = false;
    }
    if (!formData.email) {
      toast.error("Email is required");
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error("Invalid email format");
      isValid = false;
    }
    if (!formData.subject) {
      toast.error("Subject is required");
      isValid = false;
    }
    if (!formData.phoneno) {
      toast.error("Phone Number is required");
      isValid = false;
    } else if (!/^\d{10}$/.test(formData.phoneno)) {
      toast.error("Enter a valid 10-digit phone number");
      isValid = false;
    }
    if (!formData.message) {
      toast.error("Message is required");
      isValid = false;
    }

    return isValid;
  };

  // Handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      // If validation fails, exit early
      return;
    }

    try {
      const response = await fetch("https://api.botwavation.com/contactUs/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Form submitted successfully!");
      } else {
        const errorData = await response.json();
        toast.error(errorData.message || "Error while submitting form");
      }
    } catch (error) {
      toast.error("Something went wrong!");
    }

    // Reset form after submission
    setFormData({
      name: "",
      email: "",
      subject: "",
      phoneno: "",
      message: "",
    });
  };

  return (
    <div className="contact-page">
      <div
        className="contactbg"
        style={{ backgroundImage: `url(${Contactbb})` }}
      >
        <div className="contact-heading">
          <h1>CONTACT US</h1>
        </div>
      </div>

      <div className="ad">
        <marquee>
          Admission Opens For Session 2024-2025 | 100% Job Placements
          Assistance | Admissions Open For New Batches | Register Now!
        </marquee>
      </div>

      <div className="contact-content-form">
        <div className="form-section-cc">
          <div className="form-heading">
            <h1>What can we do for you?</h1>
          </div>

          <form onSubmit={handleSubmit} className="contact-form">
            <label>Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              value={formData.name}
              onChange={handleChange}
            />

            <label>E-Mail</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
            />

            <label>Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="Enter your subject"
              value={formData.subject}  
              onChange={handleChange}
            />

            <label>Phone No</label>
            <input
              type="number"
              name="phoneno"
              placeholder="Enter your Number"
              value={formData.phoneno}
              onChange={handleChange}
            />

            <label>Message</label>
            <textarea
              name="message"
              placeholder="Enter your message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>

            <div className="bottombtn">
              <button type="submit">Submit</button>
             
            </div>
          </form>
        </div>

        <div className="image-section-contact">
          <img src={Contactcg} alt="24/7 Service" />
        </div>
      </div>

      <div className="responsive-map">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d260.31543222490075!2d77.38305229211467!3d28.618580330229065!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ceff48e93f7d3%3A0x3954649815d0b89!2sVDS%20Technologies%20Business%20Centre!5e0!3m2!1sen!2sin!4v1736753110997!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <ToastContainer />
    </div>
  );
};

export default Contact;
