import React from "react";
import "./detailpost.css"
import Post from "./Post";



export default function DetailPost(){
    return(
        <div>
            <div className="detailp" >
                <div className="maindiv" >
                    <div>
                        <img id="imgdiv" src="https://th.bing.com/th/id/OIP.2lG_Ek2oS8SB7p1gTuB6HgHaEK?pid=ImgDet&rs=1" />
                    </div>
                    <div className="content" >
                        <h3>Wish someone a Happy Borthday</h3>
                        <h4>What is Your Name ?</h4>
                        <input type="text" ></input>
                        <h4>Who's Berthday is this</h4>
                        <input type="text" ></input>

                        <button type="submit" >Submit
                        </button>
                        <div>
                            Share link will come here
                        </div>
                    </div>
                </div>
                <h3>Browse our other products</h3>
                <div className="otherproducts" >
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
        </div>
    )
}