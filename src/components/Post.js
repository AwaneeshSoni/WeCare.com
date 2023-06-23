import React from "react";
import "../components/post.css"
import { Link } from "react-router-dom";

export default function Post(props){
    return(
        <div>
            <div className="post">
            <div className="imgdiv" >
                <img src={props.data.url} />
            </div>
            <div className="titlediv" >
                <h3>{props.data.title}</h3>
            </div>
        </div>
        </div>
    )
}