import React, { useEffect } from "react";
import styled from "styled-components";
import AOS from "aos";

import setApp from "../HelperFunctions";

//images
import image1 from "../landingPage/images-landingPage/image1-inside.jpg";
// import image2 from '../landingPage/images-landingPage/image1-inside.jpg'
// import image2 from '../landingPage/images-landingPage/image1-inside.jpg'

const LandingPage = () => {
  const Image = styled.img`
    object-fit: cover;
    height: 100%;
    width: 100%;
  `;

  useEffect(() => {
    AOS.init();
  });

  return (
    <div id="total-container">
      <div id="info-container">
        <h2 data-aos="fade-right" data-aos-delay={500}>
          Love Your Lashes
        </h2>
        <h3 data-aos="zoom-in" data-aos-delay={1000}>
          Extensions
          <br />
          Volume, Hybrid, Classic, & Mega-Volume
        </h3>
        <div data-aos="zoom-in" data-aos-delay={1500}>
          <button onClick={setApp}>Book An Appointment</button>
        </div>
      </div>
      <div id="image-container">
        <Image src={image1} />
      </div>
    </div>
  );
};

export default LandingPage;
