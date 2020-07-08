import React, { useState, useEffect } from 'react'
import Anime, {anime} from 'react-anime'
import AOS from 'aos'

const Extensions = (props) => {

    useEffect(()=>{
        AOS.init();
    });

    return (
        <div id="ext-container">
            <Anime>
                <div data-aos="fade-up" data-aos-delay={350} className="ext-image-container">
                    <img src={props.image}></img>
                </div>
            </Anime>
            <Anime>
                <div className="ext-header" data-aos="fade-up" data-aos-delay={350}>
                    {props.header}
                </div>
            </Anime>
            <Anime>
                <div className="ext-text" data-aos="fade-up" data-aos-delay={500}>
                    {props.text}
                </div>
            </Anime>
                <div className="ext-duration" data-aos="fade-up" data-aos-delay={600}>
                    {props.duration}
                </div>
                <div className="ext-btn-container">
                    <button className="ext-btn" data-aos="fade-up" data-aos-delay={700}>Book An Appointment</button>
                </div>
        </div>
    );
};

export default Extensions