import React from "react";
import "./Footer.css"
import FooterCard from "./FooterCard";

export default function Footer(){
    return(
        <div className="footer" >
            <div>
            <FooterCard />
            </div>
            <div className="footerlinks" >
            <div>
                <h4>Home</h4>
                <h4>About Us</h4>
                <h4>Privacy Policy</h4>
                <h4>Disclaimer</h4>
                <h4>Contact Us</h4>
            </div>
            <div>
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