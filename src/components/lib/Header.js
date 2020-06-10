import React, { Component } from 'react'

class Header extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            x: "drop_menu_container_hidden"
       };
    };

    openMenu = () => {
        if(this.state.x == "drop_menu_container")
        {
            this.setState({x: "drop_menu_container_hidden"});
        }
        else {
            this.setState({x: "drop_menu_container"});
        }
        console.log(this.state);
    };

    render() {
        return (
            <React.Fragment>
            <div className="header_container">
                    <button id="drop_menu_icon" className="button" onClick={this.openMenu}><h5>M E N U</h5></button>
                    <h1>Nothing But Lashes</h1>
            </div>
            <div id={this.state.x}>
                <div className="drop_menu_item"><h3>Our Story</h3></div>
                <div className="drop_menu_item"><h3>Lash Services</h3></div>
                <div className="drop_menu_item"><h3>Lash Aftercare</h3></div>
                <div className="drop_menu_item"><h3>Contact Us</h3></div>
                <div className="drop_menu_item"><h3>FAQ</h3></div>
            </div>
            </React.Fragment>
        );
    }
};

export default Header