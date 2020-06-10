import React, { Component, useState } from 'react'


const Carousel = () => {

    let slides = ["image1", "image2", "image3", "image4"];

    const [image, changeImage] = useState(slides[0]);

    return (
    <React.Fragment>
        <div id="carousel_container">
        </div>
    </React.Fragment>
    );
};

export default Carousel