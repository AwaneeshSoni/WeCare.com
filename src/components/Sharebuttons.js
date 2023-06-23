import React from "react";
import { WhatsappIcon, WhatsappShareButton } from "react-share";
import "./privcy.css"

export default function Sharebutton(props){
    return(
        <div className="aboutus" >
            <WhatsappShareButton title={props.message} url="https://we-care-com-by-awaneesh-soni.vercel.app/" >
                <h4>Share this On WhatsApp with {props.to}</h4>
                <WhatsappIcon size={50} round={true} />
            </WhatsappShareButton>
        </div>
    )
}