import React from 'react'
import blogbanner from "../../../images/Blog/blogbanner.png";

import "./BlogBanner.css";
export default function BlogBanner() {
    return (
        <section id='blog'>
            <div className="container blog_container">
                <div className="row">


                    <div className="col-md-6">
                        <div className="">
                            <h1 className='blog_heading'>Lear to grow Qubitars Blog</h1>
                        </div>
                        <div className="blog_para">
                            <p>We can help you create, market, and sell your rare collectibles in the easiest way possible. With prior experience in 35+ NFT projects, our competent team knows what to do for your projec</p>
                        </div>
                    </div>

                    <div className="col-md-6 blog_img">
                        <img
                            src={blogbanner}
                            className="img-fluid blog_img"
                            alt="switch"
                            loading="lazy"
                        />
                    </div>
                </div>

            </div>
        </section>

    )
}
