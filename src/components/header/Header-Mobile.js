import React, { useState, useEffect } from "react";
import Anime, { anime } from "react-anime";

import setApp from "../HelperFunctions";

const Header = () => {
  const [open, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!open);
  };

  const scroll = (x) => {
    let ht = x * window.innerHeight - window.innerHeight * 0.15;
    window.scrollTo({
      top: ht,
      behavior: "smooth",
    });
    if (open) {
      setOpen(false);
    }
  };

  const scrollDesktop = (x) => {
    let ht = x * window.innerHeight - window.innerHeight * x * 0.15;
    window.scrollTo({
      top: ht,
      behavior: "smooth",
    });
    if (open) {
      setOpen(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: document.body.scrollHeight * -1,
      behavior: "smooth",
    });
  };

  const scrollToBottoom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: "smooth",
    });
    if (open) {
      setOpen(false);
    }
  };

  return (
    <div>
      <div id="header-container">
        <div id="header-logo" onClick={scrollToTop}>
          <h1 id="logo-text-main">Nothing But Lashes</h1>
          <p id="logo-text">Yucaipa & Downtown Redlands</p>
          <p id="logo-text2">34409 Yucaipa Blvd, Yucaipa 92320</p>
        </div>
        <div id="header-icon">
          <button id="header-icon-btn" onClick={toggleMenu}>
            MENU
          </button>
        </div>
        <div id="header-longMenu">
          <ul>
            <li>
              <a className="longMenu-item" onClick={() => scrollDesktop(1)}>
                Our Story
              </a>
            </li>
            <li>
              <a className="longMenu-item" onClick={setApp}>
                Book Now
              </a>
            </li>
            <li>
              <a className="longMenu-item" onClick={() => scrollDesktop(2.3)}>
                Extensions
              </a>
            </li>
            <li>
              <a className="longMenu-item" onClick={scrollToBottoom}>
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      {open && (
        <Anime opacity={[0, 1]} easing="linear" duration={10}>
          <div id="drop-container">
            <ul id="drop-menu">
              <li className="drop-item" onClick={() => scroll(1)}>
                <a className="drop-text">Our Story</a>
              </li>
              <li className="drop-item">
                <a className="drop-text" onClick={setApp}>
                  Book Now
                </a>
              </li>
              <li className="drop-item" onClick={() => scroll(2)}>
                <a className="drop-text">Extensions</a>
              </li>
              <li className="drop-item" onClick={scrollToBottoom}>
                <a className="drop-text">Contact</a>
              </li>
            </ul>
          </div>
        </Anime>
      )}
    </div>
  );
};

export default Header;
