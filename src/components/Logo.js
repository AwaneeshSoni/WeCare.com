import React from "react";
import "../components/logo.css"
import { Link } from "react-router-dom";

export default function Logo(){
    return(
        <div>
            <Link to={'/'} >
            <div className="logodiv" >
                <h1 className="logotxt" >WC</h1>
            </div>
            </Link>
        </div>
    )
}