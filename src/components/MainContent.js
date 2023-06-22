import React from "react";
import "./MainContent.css"
import Banner from "./Banner";
import Post from "./Post";
import { Link } from "react-router-dom";

export default function MainContent(){
    return(
        <div className="maincontent" >
            <Banner />
            <div className="postdiv" >
               <Link to='/DetailPost' ><Post /></Link>
               <Link to='/DetailPost' ><Post /></Link>
               <Link to='/DetailPost' ><Post /></Link>
               <Link to='/DetailPost' ><Post /></Link>
               <Link to='/DetailPost' ><Post /></Link>
               <Link to='/DetailPost' ><Post /></Link>
               <Link to='/DetailPost' ><Post /></Link>
               <Link to='/DetailPost' ><Post /></Link>
               <Link to='/DetailPost' ><Post /></Link>
               <Link to='/DetailPost' ><Post /></Link>
               <Link to='/DetailPost' ><Post /></Link>
               <Link to='/DetailPost' ><Post /></Link>
               <Link to='/DetailPost' ><Post /></Link>
            </div>
        </div>
    )
 }