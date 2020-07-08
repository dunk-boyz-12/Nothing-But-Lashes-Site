import React, { useState, useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const About = () => {

    useEffect(()=> {
        AOS.init();
    });

    return (
        <div id="about-container">
            <div data-aos="zoom-in" data-aos-delay={50} id="about-header-container">
                <h1 id="about-heading">Our Story</h1>
            </div>
            <div id="about-content-container">
                <p data-aos="fade-up" data-aos-delay={500}>Our lash studios are located in the gorgeous cities of Yucaipa and downtown
                    Redlands. Here at Nothing But Lashes, our fully independent and self-employed lash artists are ready
                    to give your lashes the love they deserve. </p>
                <p data-aos="fade-up" data-aos-delay={550}>We offer both lash extensions, as well as lash lifts. All of our
                    lash sets are uniquely tailored to suit our client's wants and needs for their lashes. We offer a wide variety of lash sets 
                    that include : 
                </p>
                <div className="about-services" data-aos="fade-up" data-aos-delay={600}>
                    <h2>Classic</h2>
                    <h2>Hybrid</h2>
                    <h2>Volume</h2>
                    <h2>Mega-Volume</h2>
                </div>
                <p data-aos="fade-up" data-aos-delay={650}>
                    We know how important your lashes are and strive
                    to exceed your expectations and give you the lashes of your dreams!
                </p>
            </div>
        </div>
    );
};

export default About