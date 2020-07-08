import React from 'react'

//components
import Header from './components/header/Header-Mobile'
import LandingPage from './components/landingPage/LandingPage-Mobile'
import Footer from './components/footer/Footer-Mobile'
import MainContent from './components/MainContent'


const Site = () => {
    return (
        <React.Fragment>
            <Header/>
            <div id="landing_container">
                <LandingPage/>
            </div>   
            <MainContent/>
            <Footer/>
        </React.Fragment>
    );
};

export default Site