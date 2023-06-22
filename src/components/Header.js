import React from "react";
import "./Header.css"
import Logo from "./Logo";
import { Link } from "react-router-dom";

function Header(Props){
    return(
        <div className="header">
        <div className="mainhead">
            <Logo />
            <Link to={'/'} >
            <h3>Home</h3>
                </Link>
        </div>
        <div className="icons" > 
            <i class="fi fi-rr-share"></i>
            <i class="fi fi-rr-user"></i>
        </div>
        </div>
    )
}

export default Header;