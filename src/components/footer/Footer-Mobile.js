import React from 'react'

//icons
import { SocialIcon } from 'react-social-icons'

const Footer = () => {
    return (
        <div id="footer-container">
            <div id="footer-filler" data-aos="fade-up" data-aos-delay={300}></div>
            <div id="btn-container" data-aos="fade-up" data-aos-delay={350}>
                <button id="appt-btn">Book An Appointment</button>
            </div>
            <div id="address-container" data-aos="fade-up" data-aos-delay={400}>
                    <h3>Nothing But Lashes</h3>
                    <p>34409 Yucaipa Blvd<br/>Yucaipa, CA 92320<br/>(951) 888- 8765<br/>NothingButLashes@gmail.com</p>
            </div>
            <div id="social-media-container" data-aos="fade-up" data-aos-delay={450}>
                <a><SocialIcon url="http://instagram.com/in/jaketrent" bgColor="lightpink"></SocialIcon></a>
                <a><SocialIcon url="http://twitter.com/in/jaketrent" bgColor="lightpink"></SocialIcon></a>
            </div>
            <div id="copy-container">
                <p>&copy;2020 @dunk-boyz-12</p>
                <p>Nothing But Lashes</p>
            </div>
        </div>
    );
};

export default Footer