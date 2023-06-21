import React from "react";
import "./Header.css"
import Logo from "./Logo";

function Header(Props){
    return(
        <div className="header">
        <div className="mainhead">
            <Logo />
            <h3>Home</h3>
        </div>
        <div className="icons" > 
            <i class="fi fi-rr-share"></i>
            <i class="fi fi-rr-user"></i>
        </div>
        </div>
    )
}

export default Header;