import React from "react";
import "./MainContent.css"
import Banner from "./Banner";
import Posts from "./Posts";
import Data from "../data.json"


export default function MainContent(){

    return(
        <div className="maincontent" >
            <Banner />
            <div className="postdiv" >
                <Posts data={Data} />
            </div>
        </div>
    )
 }