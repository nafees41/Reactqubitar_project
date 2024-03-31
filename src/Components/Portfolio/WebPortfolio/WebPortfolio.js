import React from 'react'
import p2 from "../../../images/Portfolio/p2.png";
import btn3 from "../../../images/Portfolio/btn3.png";
import './WebPortfolio.css'
import AOS from 'aos';
import 'aos/dist/aos.css'
AOS.init();

export default function WebPortfolio() {
  return (
   <div className="container-fluid  web_portfolio mt-5" >
    <div className="container spacing-top" id='porfiliocontent'>
        <div className="row">
           <div className="col-md-6" data-aos="fade-up"  data-aos-duration="2000">
                <div className="web_p_head mt-5">
                    <h1 className="fw-bolder px-3"> Web Applications</h1>
                </div>
                <div className="web_p_para">
                  <p>We can help you create, market, and sell your rare collectibles in the easiest way possible. With prior experience in 35+ NFT projects, our competent team knows what to do for your pr</p>
                </div>
                <div className="view_case_btn px-3">
                <img
                          src={btn3}
                          className="img-fluid"
                          alt="switch"
                          loading="lazy"
                      />
                </div>
            </div>
            <div className="col-md-6"  data-aos="flip-left"  data-aos-duration="1000">
                <div className="web_potfolio_img ">
            <img
                          src={p2}
                          className="img-fluid"
                          alt="switch"
                          loading="lazy"
                      />
                </div>
                </div>
        </div>
    </div>
   </div>
  )
}
