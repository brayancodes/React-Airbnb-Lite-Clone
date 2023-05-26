import React from "react"
import thumbnail from "../images/katie-zafares.png"
import star from "../images/star.png"
import "../style.css"

function Card() {
    return(
        <div className ="card-container">
            <img src={thumbnail} className ="thumbnail-image"/>
            <div className ="rating-and-location">
                <img src={star} className = "the-star"/>
                <div className="the-rating">5.0</div>
                <div className="size-and-location">(6) • USA</div>
            </div>
            <div className = "brief-description">Life lessons with Katie Zafares</div>
            <div className = "pricing">
                <div className="pricing-part-one">From $136</div>
                <div className="pricing-part-two">/ person</div>
            </div>
        </div>
    )
}

export default Card