import React from "react";
import "./shareus.css"
import Sharebutton from "./Sharebuttons";


export default function ShareUs(){
    return (
        <div className="shareus" >
            <Sharebutton to="Someone" message="Hey Checkout This amazing website !" />
        </div>
    )
}