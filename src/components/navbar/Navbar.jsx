import React from "react";
import logo from '../../assets/logo.svg'
import './navbar.css';

function Navbar(){
    return(
        <div className="gpt3__navbar">
          <div className="gpt3__navbar-links">
            <div className="gpt3__navbar-links_logo">
                <img src={logo} alt="logo"/>
            </div>
            <div className="gpt3__navbar-links_container">
                <p><a href="#home">Home</a></p>
                <p><a href="#whatgpt3">What is GPT3</a></p>
                <p><a href="#possibility">Open AI</a></p>
                <p><a href="#features">Case Study</a></p>
                <p><a href="#blog">Library</a></p>

            </div>
          </div>
          <div className="gpt3__navbar-sign">
            <p>Sign In</p>
            <button type="button">Sign UP</button>
          </div>
        </div>
    );
};

export default Navbar;