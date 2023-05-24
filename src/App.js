import React from "react"
import logo from "./images/airbnb 1.png"
import "./style.css"

function Navbar() {
    return (
        <div className="nav-bar">
            <div className="my-logo">
                <img clasName="logo" src={logo}/>
            </div>
        </div>
    )
}

function App() {
    return (
        <div>
            <Navbar />
        </div>
    )
}

export default App