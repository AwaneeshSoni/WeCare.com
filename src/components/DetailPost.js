import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import "./detailpost.css"


export default function DetailPost(){
    return(
        <div>
            <Header />
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
                <div>
                    <h3>Read What People are saying about us </h3>
                    <div className="feeditem" >
                    <blockquote class="twitter-tweet"><p lang="en" dir="ltr">Loved the 0 to 1 journey, and nobody better than Graphy to take it 1 to N. Scenes has a decent product and GTM and I’m sure it’s only going to get bigger under <a href="https://twitter.com/sumjain?ref_src=twsrc%5Etfw">@sumjain</a><br></br>For me, it’s back to 0 to 1. AI is the last white collar stand and I want to be back heads down building! <a href="https://t.co/ruy043gyoG">https://t.co/ruy043gyoG</a></p>&mdash; Varun Mayya (@VarunMayya) <a href="https://twitter.com/VarunMayya/status/1671712581285986304?ref_src=twsrc%5Etfw">June 22, 2023</a>
                    </blockquote> 
                    <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}