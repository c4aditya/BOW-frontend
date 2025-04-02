import React from "react";
import "./Autoscroll.css";

function ApplicationContainer() {
  const logos = [
    "https://www.imtacademy.in/assets/images/company-icons/company-icon-3.jpg",
    "https://www.imtacademy.in/assets/images/company-icons/company-icon-1.jpg",
    "https://www.imtacademy.in/assets/images/company-icons/company-icon-2.jpg",
    "https://www.imtacademy.in/assets/images/company-icons/company-icon-4.jpg",
    "https://www.imtacademy.in/assets/images/company-icons/company-icon-17.png",
    "https://www.imtacademy.in/assets/images/company-icons/company-icon-6.jpg",
    "https://www.imtacademy.in/assets/images/company-icons/company-icon-10.jpg",
    "https://www.imtacademy.in/assets/images/company-icons/company-icon-12.jpg",
    "https://www.imtacademy.in/assets/images/company-icons/company-icon-14.jpg",

  ];

  return (
    <div className="app-container">
      <div className="wrapper">
        <div className="text-autoscroll"></div>
        <div className="note"></div>
        <div className="marquee">
          <div className="marquee-group">
            {logos.map((logo, index) => (
              <div className="image-group" key={index}>
                <img className="image-auto" src={logo} alt={`Logo ${index}`} />
              </div>
            ))}
          </div>
          <div className="marquee-group">
            {logos.map((logo, index) => (
              <div className="image-group" key={`duplicate-${index}`}>
                <img className="image-auto" src={logo} alt={`Logo ${index}`} />
              </div>
            ))}
          </div>
          <div className="marquee-group">
            {logos.map((logo, index) => (
              <div className="image-group" key={`triplicate-${index}`}>
                <img className="image-auto" src={logo} alt={`Logo ${index}`} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ApplicationContainer;
