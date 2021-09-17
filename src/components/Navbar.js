import React from "react";
import { Link } from "react-router-dom"
import "./misc/Navbar.scss";

function Navbar() {
    return (
        <div className="navbar">
            <Link to="/"><h1>Event Manager</h1></Link>  {/* link to homepage */}
            <Link to="/login"><h2>Login</h2></Link>
            <Link to="/register"><h2>Register</h2></Link>

        </div>
    )
}

export default Navbar;