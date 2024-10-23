import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          Established in 2024, Somaiya WeCare is a tertiary and quaternary healthcare hospital that lays its foundation on a ‘Patient first’ ideology. Our hospitals in Vidyavihar follow a Greenfield strategy for catering end-to-end healthcare needs of our patients.  
          </p>
          <p>To give patient and his family a clear advantage to win their war against disease by creating the best infrastructure, technology and support. To put patient first & foremost and be futuristic and innovative in the delivery of healthcare.</p>
          <p>Catering to our ‘Patient First’ ideology, Somaiya WeCare infrastructure has latest medical technology and equipments. Our hospital’s building is environmentally conscious BEEP certified.</p>
          <p>Our vision is to be the most comprehensive, transparent and cost effective healthcare solution provider in the region.</p>
        </div>
      </div>
    </>
  );
};

export default Biography;
