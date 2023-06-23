import React from "react";
import Post from "./Post";
import {Link} from "react-router-dom";
import "./MainContent.css"

export default function Posts(props){
    const data = (props.data || props.data).map((element) =>
            <Link to={`/DetailPost/${element.id}`} >
         <Post data={element} />
             </Link>)

    return(
        <div className="postdiv" >
            {data}
        </div>
    )
}