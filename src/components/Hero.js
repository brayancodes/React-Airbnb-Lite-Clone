import React from "react"
import "../style.css"
import photogrid from "../images/Group 77.png"

function Hero() {
    return (
        <div className="hero-container">
            <div className="photo-grid">
                <img src={photogrid} className="photo-grid-photos"/>
            </div>
            <div className="experiences-title">
                Online Experiences
            </div>
            <div className = "experiences-description">
                Join unique online experiences led by one-of-a-kind hosts - all without 
                leaving home.
            </div>
        </div>
    )
}

export default Hero