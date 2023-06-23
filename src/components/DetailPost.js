import React, { useState } from "react";
import "./detailpost.css"
import Posts from "./Posts";
import {  useParams } from "react-router-dom";
import Data from "../data.json";
import Sharebutton from "./Sharebuttons";


export default function DetailPost(){

const [to,setTo] = React.useState("");
const [from,setFrom] = React.useState("");


    const [choose,setChoose] = useState(false);
    const {id} = useParams();
    const data =Data.find(p => p.id === id);
    function HandleChange1(e){
        setFrom(e.target.value)
    }
    function HandleChange2(e){
        setTo(e.target.value)
    }
    const [message,setMessage] =useState("");
    function HandleClick(){
        if(to !== "" && from !== ""){
            setChoose(true);
            setMessage(`Hey ${to},
            ${from} is wishing you a ${data.main}`);
            setTo("")
            setFrom("")
        }
        else{
            setMessage('')
            setChoose(false);
        }
    }
    return(
        <div>
            <div className="detailp" >
                <div className="maindiv" >
                    <div>
                        <img alt="wish" id="imgdiv" src={data.url} />
                    </div>
                    <div className="content" >
                        <h3>{data.title}</h3>
                        <h4>What is Your Name ?</h4>
                        <input value={from} type="text" onChange={HandleChange1} placeholder="Enter Name"></input>
                        <h4>Deliver To</h4>
                        <input value={to} 
                        onChange={HandleChange2} type="text" placeholder="Enter Name" ></input>

                        <button onClick={HandleClick} type="submit" >Submit
                        </button>
                        <div  >
                            {
                                choose === true ? <div className="Okshare" >
                                    <div className="sharemessage" >
                                            <h1>
                                            Preview:
                                                </h1>
                                            <br></br>
                                            {message}
                                    </div>
                                    <div className="sharebutton" >
                                            <Sharebutton
                                            to={to} from = {from} message={message}
                                            />
                                    </div>
                                </div> 
                                : 
                                <div></div>
                            }
                            
                        </div>
                    </div>
                </div>
                <h3>Browse our other products</h3>
                <div className="otherproducts" >
                    <Posts data={Data} />
                </div>
            </div>
        </div>
    )
}