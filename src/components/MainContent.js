import React from "react";
import "./MainContent.css"
import Banner from "./Banner";
import Post from "./Post";

export default function MainContent(){
    return(
        <div className="maincontent" >
            <Banner />
            <div className="postdiv" >
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
 }