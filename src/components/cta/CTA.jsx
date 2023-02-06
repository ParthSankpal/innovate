import React from "react";
import './cta.css';

function CTA(){
    return(
        <div className="gpt3__cta">
            <div className="gpt3__cta-content">
                <p>Request Early Access to Get Started</p>
                <h1>Register Today & start exploring the endless possibilities.</h1>
            </div>
            <div className="gpt3__cta-btn">
                <button type="button">Get Started</button>
            </div>
        </div>
    );
};

export default CTA;