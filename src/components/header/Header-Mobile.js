import React, { useState, useEffect } from 'react';
import Anime, {anime} from 'react-anime';
import AOS from 'aos'

import About from '../main-content-cmps/About'

const Header = () => {

    const [open, setOpen] = useState(false);

    const toggleMenu = () => {
        setOpen(!open);
    }

    const scroll = (x) => {
        let ht = (x * window.innerHeight) - (window.innerHeight * .15);
        console.log(ht);
        window.scrollTo({
            top: ht,
            behavior: 'smooth',
        });
        if(open){
            setOpen(false);
        }
    };

    const scrollToBottoom = () => {
        console.log(document.body.scrollHeight);
        window.scrollTo({
            top: document.body.scrollHeight,
            behavior: 'smooth',
        });
        if(open){
            setOpen(false);
        }
    };

    return ( 
        <div>
            <div id="header-container">
                <div id="header-logo">
                    <h1 id="logo-text-main">Nothing But Lashes</h1>
                    <p id="logo-text">Yucaipa & Redlands</p>
                    <p id="logo-text2">34409 Yucaipa Blvd</p>
                </div>
                <div id="header-icon">
                    <button id="header-icon-btn" onClick={toggleMenu}>MENU</button>
                </div>
                <div id="header-longMenu">
                        <ul>
                            <li><a className="longMenu-item" onClick={() => scroll(1)}>Our Story</a></li>
                            <li><a className="longMenu-item">Book Now</a></li>
                            <li><a className="longMenu-item" onClick={() => scroll(2.3)}>Extensions</a></li>
                            <li><a className="longMenu-item" onClick={scrollToBottoom}>Contact</a></li>
                        </ul>
                </div>
            </div>
            {open && (
                <Anime opacity={[0,1]}
                        easing='linear'
                        duration={10}>
                    <div id="drop-container">
                        <ul id="drop-menu">
                            <li className="drop-item" onClick={() => scroll(1)}><a>Our Story</a></li>
                            <li className="drop-item"><a>Book Now</a></li>
                            <li className="drop-item" onClick={() => scroll(2)}><a>Extensions</a></li>
                            <li className="drop-item" onClick={scrollToBottoom}><a>Contact</a></li>
                        </ul>
                    </div>
                </Anime>
            )}
        </div>
     );
}
 
export default Header;