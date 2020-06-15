import React, { Component, useState } from 'react'

import Slide from '../carousel/ImgComp.js'
import image1 from './images/woman1.jpg'
import image2 from './images/woman2.jpg'
import image3 from './images/woman3.jpg'

const Carousel = () => {

            const images = [<Slide src={image2}/>, <Slide src={image1}/>, <Slide src={image3}/>];

            const [position, setPosition] = useState(0);

            const goRight = () => {
                if(position === (images.length - 1)*-100){
                    setPosition(0);
                }
                else {
                    setPosition(position - 100);
                }
            };

            const goLeft = () => {
                if(position === 0) {
                    setPosition((images.length - 1)*-100);
                }
                else {
                    setPosition(position + 100);
                }
            };

            return (
                <div id="carousel_container">
                    {
                        images.map((item, imageIndex) => {
                                return(
                                    <div key={imageIndex} className="carousel_slide" style={{transform: `translateX(${position}%)`}}>
                                        {item}
                                    </div>
                                )
                            }
                        )
                    }
                    <button id="carousel_button_left" onClick={goLeft}>L</button>
                    <button id="carousel_button_right" onClick={goRight}>R</button>
                </div>
            );
}

export default Carousel