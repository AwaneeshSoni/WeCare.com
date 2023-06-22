import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./AboutUs.css"


export default function AboutUs(){
    return(
        <div className="aboutus">
            <Header />
            <h2>About Us </h2>
            <p className="aboutusp" >
            Your brand story. Tell shoppers the origin story of your business and why you started it. For the most impact, make it memorable and personal, so customers relate and connect with your brand.
Who you serve. What do you offer and who is it for? Help shoppers see the value of your product or service by sharing how it solves problems or needs.
How you operate. If you offer a service, explain your business model or how your products are made. If you have a unique way of doing things, show it. This builds credibility with shoppers and helps you stand out against competitors.
The face of your business. Feature photos of the founders or key people on your team. Customers like to see who they are buying from or working with.
            </p>
            <Footer />
        </div>
    )
}