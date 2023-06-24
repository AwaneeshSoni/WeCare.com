import React from "react";
import "./Header.css"
import Logo from "./Logo";
import { Link } from "react-router-dom";

function Header(Props){
    return(
        <div className="header">
        <div  className="mainhead">
            <Logo />
            <Link  style={{ textDecoration: 'none' }} to={'/'} >
            <h3  >Home</h3>
                </Link>
        </div>
        <div className="icons" > 
            <Link style={{ textDecoration: 'none' }} to={'/ShareUs'} > 
            <i class="  fi fi-rr-share"></i>
            </Link>
            <Link style={{ textDecoration: 'none' }} to={'/Profile'} >
            <i class="fi fi-rr-user"></i>
            </Link>
        </div>
        </div>
    )
}

export default Header;