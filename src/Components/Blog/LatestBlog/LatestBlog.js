import React from 'react'
import lb1 from "../../../images/Blog/lb1.png";
import lb2 from "../../../images/Blog/lb2.png";
import lb3 from "../../../images/Blog/lb3.png";
import button_img from "../../../images/Blog/button_img.png";
import "./LatestBlog.css"
export default function LatestBlog() {
  return (

   <section id='latest_blog'>
    <div className="container">
        <div className="">
            <h3 className='latest_blog'>Latest Bogs</h3>
        </div>
        <div className="row latest_blog_cards">
            <div className="col-md-4">
                <div className="blog_card">
                    <div className="blog_card_img">
                    
                    <img
                        src={lb1}
                        className="img-fluid blog_img"
                        alt="switch"
                        loading="lazy"
                    />
                                              

                    </div>
                    <div className="button_img">
                    <img
                        src={button_img}
                        className="img-fluid btn_img"
                        alt="switch"
                        loading="lazy"
                    />
                      
                    </div>
                    <div className="blog_card_date">
                    <p>24 March 2023</p>

                    </div>
                    <div className="blog_card_desk">
                    Fractional NFTs and their Role in Ecosystem
                    </div>

                </div>
            </div>
            <div className="col-md-4">
            <div className="blog_card">
                    <div className="blog_card_img">
                    
                    <img
                        src={lb2}
                        className="img-fluid blog_img"
                        alt="switch"
                        loading="lazy"
                    />
                                              

                    </div>
                    <div className="button_img">
                    <img
                        src={button_img}
                        className="img-fluid btn_img"
                        alt="switch"
                        loading="lazy"
                    />
                      
                    </div>
                    <div className="blog_card_date">
                    <p>24 March 2023</p>

                    </div>
                    <div className="blog_card_desk">
                    6 Unique Web 3.0 trends in 2023 and Beyond
                    </div>

                </div>
            </div>
            <div className="col-md-4">
            <div className="blog_card">
                    <div className="blog_card_img">
                    
                    <img
                        src={lb3}
                        className="img-fluid blog_img"
                        alt="switch"
                        loading="lazy"
                    />
                                              

                    </div>
                    <div className="button_img">
                    <img
                        src={button_img}
                        className="img-fluid btn_img"
                        alt="switch"
                        loading="lazy"
                    />
                      
                    </div>
                    <div className="blog_card_date">
                    <p>24 March 2023</p>

                    </div>
                    <div className="blog_card_desk">
                    Key Features of Web 3.0
                    </div>

                </div>
            </div>
        </div>
    </div>

   </section>
  )
}
