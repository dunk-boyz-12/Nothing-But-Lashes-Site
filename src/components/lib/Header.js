import React, { Component } from 'react'

const Header = () => {
    return (
        <React.Fragment>
        <div className="header_container">
                <button className="button">M E N U</button>
                <h1>Nothing But Lashes</h1>
        </div>
        <div id="drop_menu_container">
            <div><h3>Our Story</h3></div>
            <div><h3>Lash Services</h3></div>
            <div><h3>Lash Aftercare</h3></div>
            <div><h3>Contact Us</h3></div>
            <div></div>
        </div>
        </React.Fragment>
    );
};

export default Header