import enquiryImg from "../images/enquiryNowImg.jpg";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';

function EnquiryNow() {
  const [enquiryData, setEnquiryData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    number: "",
    gender: "",
    course: "",
    message: ""
  });

  function changeHandler(event) {
    setEnquiryData(prevData => {
      return {
        ...prevData,
        [event.target.name]: event.target.value
      };
    });
  }

  const submitform = async (event) => {
    event.preventDefault();
  
    const validateMessage = {
      firstName: "First Name is required",
      lastName: "Last Name is required",
      email: "Email is required",
      number: "Mobile Number is required",
      gender: "Gender is required",
      course: "Course is required"
    };
  
    // Check empty fields
    for (const key in validateMessage) {
      if (enquiryData[key] === "") {
        toast.error(validateMessage[key]);
        return;  // Exit if there's a validation error
      }
    }
  
    try {
      const response = await fetch("http://localhost:5500/enquiryNow/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(enquiryData),
      });
  
      // Check if the response is OK
      if (response.ok) {
        console.log("The data is sent to the database");
        toast.success("Form submitted successfully!");
      } else {
        const errorData = await response.json(); // Get the error message from the backend
        toast.error(errorData.message || "Error while submitting form"); // Display backend error message
      }
  
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong!");
    }
  
    setEnquiryData({
      firstName: "",
      lastName: "",
      email: "",
      number: "",
      gender: "",
      course: "",
      message: ""
    });
  };
  

  return (
    <div className="main-enquiry-now-class">
      <div className="top-enquiry-div">
        <div className="main-enquiry-div">
          <div className="content-enquiry-div">
            <div className="enquiry-now-heading">
              <h1>ENQUIRY NOW</h1>
              <hr />
            </div>
            <div className="form-content-enquiry-div">
              <form onSubmit={submitform}>
                <div className="name">
                  <input
                    name="firstName"
                    value={enquiryData.firstName}
                    onChange={changeHandler}
                    type="text"
                    placeholder="First Name"
                  />
                  <input
                    name="lastName"
                    value={enquiryData.lastName}
                    onChange={changeHandler}
                    type="text"
                    placeholder="Last Name"
                  />
                </div>
                <div className="data">
                  <input
                    name="email"
                    value={enquiryData.email}
                    onChange={changeHandler}
                    type="email"
                    placeholder="@email."
                  />
                  <input
                    name="number"
                    value={enquiryData.number}
                    onChange={changeHandler}
                    type="number"
                    placeholder="Mobile No."
                  />
                </div>
                <div className="options">
                  <select name='gender' onChange={changeHandler} value={enquiryData.gender}>
                    <option value="" disabled>Select Gender</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                    <option value="Other">Other</option>
                  </select>

                  <select name='course' onChange={changeHandler} value={enquiryData.course}>
                    <option value="" disabled>Select Course</option>
                    <option value="aviation">Aviation</option>
                    <option value="cruise">Cruise</option>
                    <option value="airport">Airport Management</option>
                    <option value="hotel">Hotel Management</option>
                    <option value="airhostess">Air Hostess</option>
                  </select>
                </div>
                <textarea
                  name="message"
                  onChange={changeHandler}
                  value={enquiryData.message}
                  className="text-area"
                  placeholder="Message"
                  rows="10"
                  cols="20"
                ></textarea>

                <button type="submit" className="btn-EnquiryNow">Submit</button>

                <ToastContainer />
              </form>
            </div>
          </div>

          <div className="img-enquiry-div">
            <img src={enquiryImg} alt="Enquiry" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default EnquiryNow;
