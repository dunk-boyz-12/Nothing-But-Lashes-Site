import React from "react";

//icons
import { SocialIcon } from "react-social-icons";
//helpers
import setApp from "../components/HelperFunctions";

const Footer = () => {
  return (
    <div id="footer-container">
      <div
        className="form-total-container"
        data-aos="fade-up"
        data-aos-delay={300}
      >
        <div className="form-text-container">
          <h3 className="form-header">
            Eyelash Extension <br />
            Consent Form
          </h3>
          <p className="form-text">
            Eyelash Extension Consent Forms must be completed prior to your
            appointment starting.
            <br />
            <br />
            No lash treatment of any kind will be done prior to recieving a
            signed & completed Eyelash Extension Consent Form.
            <br />
            <br />
            No exceptions.
          </p>
        </div>
      </div>
      <div id="btn-container" data-aos="fade-up" data-aos-delay={350}>
        <button id="appt-btn" onClick={setApp}>
          Book An Appointment
        </button>
      </div>
      <div id="address-container" data-aos="fade-up" data-aos-delay={400}>
        <h3>Nothing But Lashes</h3>
        <p>
          34409 Yucaipa Blvd
          <br />
          Yucaipa, CA 92320
          <br />
          (951) 888- 8765
          <br />
          lashlabrose@gmail.com
        </p>
      </div>
      <div id="social-media-container">
        <SocialIcon
          url="http://instagram.com/lash.lab.rose?igshid=119e3d1p1czxe"
          target="_blank"
          bgColor="lightpink"
          className="social-icon"
          style={{ height: 35, width: 35 }}
        ></SocialIcon>
      </div>
      <div id="copy-container">
        <p>&copy;2020 @dunk-boyz-12</p>
        <p>Nothing But Lashes &copy;2020</p>
      </div>
    </div>
  );
};

export default Footer;
