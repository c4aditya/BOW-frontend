import React from "react";
import "./Autoscroll.css";

function ApplicationContainer() {
  const logos = [
    "https://res.cloudinary.com/dxgmovaih/image/upload/v1757157503/logo_02_p5mys3.jpg",
    "https://res.cloudinary.com/dxgmovaih/image/upload/v1757157493/indigoImage_ivrjla.jpg",
    "https://res.cloudinary.com/dxgmovaih/image/upload/v1757157477/10_tg1bt6.jpg",
    "https://res.cloudinary.com/dxgmovaih/image/upload/v1757157450/7_eqibns.jpg",
    "https://res.cloudinary.com/dxgmovaih/image/upload/v1757157427/4_ol54uk.jpg",
    "https://res.cloudinary.com/dxgmovaih/image/upload/v1757157420/2_oswrkl.jpg",
 

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
