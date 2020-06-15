import React from 'react'
import { Component } from 'react'

import Header from './lib/Header.js'
import Carousel from './lib/carousel/Carousel.js'
import About from './lib/About.js'

const Site = () => {
    return (
        <React.Fragment>
            <section className="main_section_landing">
                <Header/>
                <Carousel/>
            </section>
            <section className="main_section">
                <About/>
            </section>
            <section className="main_section">

            </section>
            <section className="main_section">

            </section>
        </React.Fragment>
    );
};

export default Site