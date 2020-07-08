import React, { useEffect } from 'react' 
import ReactDOM from 'react-dom'
import AOS from 'aos'

import About from './main-content-cmps/About'
import Extensions from './main-content-cmps/Extensions'

import lashImage1 from './main-content-cmps/lashImages/IMG_4403.JPG'
import lashImage2 from './main-content-cmps/lashImages/IMG_4404.JPG'
import lashImage3 from './main-content-cmps/lashImages/IMG_4405.JPG'


const MainContent = () => {

    const values1 = {
        image: lashImage2,
        h1: "CLASSIC FULL SET",
        text: "Classic sets are recommended for clients who have never had lash extensions before and are looking for a natural, everyday look. Each extension is applied to one natual lash so the fullness of each set will vary from person to person. All lash sets are transitional.",
        duration: "1 Hour 15 Minutes"
    };

    const values2 = {
        image: lashImage2,
        h1: "CLASSIC 2 WEEK FILL",
        text: "Requires around 45 - 50 percent of previous Classic lash extensions.",
        duration: "1 Hour 30 Minutes"
    };

    const values3 = {
        image: lashImage2,
        h1: "CLASSIC 1 WEEK FILL",
        text: "This fill is for those who think their Classic lash set could use a little extra love around 7 days after their most recent fill",
        duration: "1 Hour 15 Minutes"
    };

    const values4 = {
        image: lashImage2,
        h1: "HYBRID FULL SET",
        text: "Hybrid lash sets can give you a more full look. It is a mixture of individual extensions and handmade fans. You can request a light, medium, or full set. This set is a bit more versatile than our other sets.",
        duration: "2 Hours"
    };

    const values5= {
        image: lashImage2,
        h1: "HYBRID 2 WEEK FILL",
        text: "Requires around 45 - 50 percent of previous Hybrid lash extensions.",
        duration: "1 Hour 45 Minutes"
    };

    const values6 = {
        image: lashImage2,
        h1: "HYBRID 1 WEEK FILL",
        text: "This fill is for those who think their Hybrid lash set could use a little extra love around 7 days after their most recent fill",
        duration: "1 Hour 30 Minutes"
    };

    const values7 = {
        image: lashImage2,
        h1: "VOLUME FULL SET",
        text: "Three(3) to Four(4) extensions will be added to one (1) natural lash to give your lashes a more full look.",
        duration: "3 Hours 10 Minutes"
    };

    const values8 = {
        image: lashImage2,
        h1: "VOLUME 2 - 3 WEEK FILL",
        text: "Requires around 45 - 50 percent of previous Volume lash extensions.",
        duration: "1 Hour 30 Minutes"
    };

    const values9 = {
        image: lashImage2,
        h1: "VOLUME 1 WEEK FILL",
        text: "This fill is for those who think their Volume lash set could use a little extra love around 7 days after their most recent fill",
        duration: "30 Minutes"
    };

    const values10 = {
        image: lashImage2,
        h1: "MEGA-VOLUME FULL SET",
        text: "Volume still not enough for you? Here's our fullest lash set yet. Our Mega-Volume lash set includes 6-15 extensions placed onto one natural lash for the most volume possible.",
        duration: "30 Minutes"
    };

    const values11 = {
        image: lashImage2,
        h1: "MEGA-VOLUME 2 WEEK FILL",
        text: "Requires around 45 - 50 percent of previous Mega-Volume lash extensions.",
        duration: "30 Minutes"
    };

    const values12 = {
        image: lashImage2,
        h1: "MEGA-VOLUME 1 WEEK FILL",
        text: "This fill is for those who think their Mega-Volume lash set could use a little extra love around 7 days after their most recent fill.",
        duration: "30 Minutes"
    };

    useEffect(()=> {
        AOS.init();
    });

    return (
        <div id="main-content-container">
            <About id="abt-top"/>
            <div id="ext-header-container">
                <h2 data-aos="zoom-in" id="ext-header-text">Lash Extensions</h2>
            </div>
            <Extensions image={values1.image} header={values1.h1} text={values1.text} price={values1.price} duration={values1.duration}/>
            <Extensions image={values2.image} header={values2.h1} text={values2.text} price={values2.price} duration={values2.duration}/>
            <Extensions image={values3.image} header={values3.h1} text={values3.text} price={values3.price} duration={values3.duration}/>
            <Extensions image={values1.image} header={values4.h1} text={values4.text} price={values4.price} duration={values4.duration}/>
            <Extensions image={values2.image} header={values5.h1} text={values5.text} price={values5.price} duration={values5.duration}/>
            <Extensions image={values3.image} header={values6.h1} text={values6.text} price={values6.price} duration={values6.duration}/>
            <Extensions image={values1.image} header={values7.h1} text={values7.text} price={values7.price} duration={values7.duration}/>
            <Extensions image={values2.image} header={values8.h1} text={values8.text} price={values8.price} duration={values8.duration}/>
            <Extensions image={values3.image} header={values9.h1} text={values9.text} price={values9.price} duration={values9.duration}/>
            <Extensions image={values3.image} header={values10.h1} text={values10.text} price={values10.price} duration={values10.duration}/>
            <Extensions image={values3.image} header={values11.h1} text={values11.text} price={values11.price} duration={values11.duration}/>
            <Extensions image={values3.image} header={values12.h1} text={values12.text} price={values12.price} duration={values12.duration}/>
        </div>
    );
};

export default MainContent