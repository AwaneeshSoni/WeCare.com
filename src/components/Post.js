import React from "react";
import "../components/post.css"

export default function Post(props){
    return(
        <div>
            <div className="post">
            <div className="imgdiv" >
                <img alt="wish" src={props.data.url} />
            </div>
            <div className="titlediv" >
                <h3>{props.data.title}</h3>
            </div>
        </div>
        </div>
    )
}