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
                <Link style={{ textDecoration: 'none' }}  to={'/'}>
                <h4>Home</h4>
                    </Link>
                <Link style={{ textDecoration: 'none' }}  to={'/AboutUS'}>
                <h4>About Us</h4>
                    </Link>
                <Link style={{ textDecoration: 'none' }}  to={'/PrivacyPolicy'} >
                <h4>Privacy Policy</h4>
                </Link>
                <Link style={{ textDecoration: 'none' }}  to={'/Disclaimer'} >
                <h4>Disclaimer</h4>
                </Link>
                <Link style={{ textDecoration: 'none' }}  to={'/ContactUs'}>
                <h4>Contact Us</h4>
                </Link>
            </div>
            <div className="footersocial" >
                <Link  style={{ textDecoration: 'none' }} to={'/'}>

                </Link>
                <Link style={{ textDecoration: 'none' }}  to={'/'}>
                <h4>Follow Us On Socials</h4>

                </Link>
                <Link style={{ textDecoration: 'none' }}  to={'/'}>
                <h4>Instagram</h4>

                </Link>
                <Link style={{ textDecoration: 'none' }}  to={'/'}>
                <h4>Facebook</h4>

                </Link>
                <Link style={{ textDecoration: 'none' }}  to={'/'}>
                <h4>TikTok</h4>

                </Link>
                <Link style={{ textDecoration: 'none' }}  to={'/'}>
                <h4>Twitter</h4>

                </Link>
            </div>
            </div>
        </div>
    )
}