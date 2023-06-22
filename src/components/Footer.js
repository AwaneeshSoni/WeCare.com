import React from "react";
import "./Footer.css"
import FooterCard from "./FooterCard";
import { Link } from "react-router-dom";

export default function Footer(){
    return(
        <div className="footer" >
            <div className="footercarddiv">
            <FooterCard />
            </div>
            <div className="footerlinks" >
            <div>
                <Link to={'/'}>
                <h4>Home</h4>
                    </Link>
                <Link to={'/AboutUS'}>
                <h4>About Us</h4>
                    </Link>
                <h4>Privacy Policy</h4>
                <h4>Disclaimer</h4>
                <h4>Contact Us</h4>
            </div>
            <div className="footersocial" >
                <h4>Follow Us On Socials</h4>
                <h4>Instagram</h4>
                <h4>Facebook</h4>
                <h4>TikTok</h4>
                <h4>Twitter</h4>
            </div>
            </div>
        </div>
    )
}