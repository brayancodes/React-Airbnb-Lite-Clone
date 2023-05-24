import React from "react"
import "../style.css"
import logo from "../images/airbnb 1.png"

function Navbar() {
    return (
        <div className="nav-bar">
            <div className="my-logo">
                <img clasName="logo" src={logo}/>
            </div>
        </div>
    )
}

export default Navbar