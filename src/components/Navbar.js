import React from "react";
import { Link } from "react-router-dom"

function Navbar() {
    return (
        <div className="navbar">
            <Link to="/"><h1>Event Manager</h1></Link>  {/* link to homepage */}
            <Link to="/login"><h1>Login</h1></Link>
            <Link to="/register"><h1>Register</h1></Link>

        </div>
    )
}

export default Navbar;