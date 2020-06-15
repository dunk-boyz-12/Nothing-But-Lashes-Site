import React, { Component, useState } from 'react'

const Carousel = () => {

            const images = ["1", "2", "3"];

            return (
                <div id="carousel_container">
                    {
                        images.map((item, imageIndex) => {
                                return(
                                    <div key={imageIndex} className="carousel_slide">
                                        {item}
                                    </div>
                                )
                            }
                        )
                    }
                </div>
            );
}

export default Carousel