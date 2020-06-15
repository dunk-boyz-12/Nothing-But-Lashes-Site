import React, { Component } from 'react'

class Header extends React.Component {

    constructor() {
        super();
        this.state = {
            x: "drop_menu_container_hidden",
            y: "M E N U"
       };
    };

    openMenu = () => {
        if(this.state.x == "drop_menu_container")
        {
            this.setState({x: "drop_menu_container_hidden"});
            this.setState({y: "M E N U"});
        }
        else {
            this.setState({x: "drop_menu_container"});
            this.setState({y: "C L O S E"});
        }
        console.log(this.state);
    };

    render() {
        return (
            <React.Fragment>
            <div className="header_container">
                    <button id="drop_menu_icon" className="button" onClick={this.openMenu}><h5>{this.state.y}</h5></button>
                    <h1>Nothing But Lashes</h1>
            </div>
            <div id={this.state.x}>
                <div className="drop_menu_item"><h4>Our Story</h4></div>
                <div className="drop_menu_item"><h4>Lash Services</h4></div>
                <div className="drop_menu_item"><h4>Lash Aftercare</h4></div>
                <div className="drop_menu_item"><h4>Contact Us</h4></div>
                <div className="drop_menu_item"><h4>FAQ</h4></div>
            </div>
            </React.Fragment>
        );
    }
};

export default Header