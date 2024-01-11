import React from 'react'
import p1 from "../../../images/Portfolio/p1.png";
import p2 from "../../../images/Portfolio/p2.png";
import btn1 from "../../../images/Portfolio/btn1.png";
import './NftPortfolio.css'
import AOS from 'aos';
import 'aos/dist/aos.css'
AOS.init();

export default function NftPortfolio() {
  return (
   <div className="container-fluid  nft_portfolio">
    <div className="container">
        <div className="row">
            <div className="col-md-6" data-aos="flip-right"  data-aos-duration="1000">
                <div className="nft_potfolio_img">
            <img
                          src={p1}
                          className="img-fluid"
                          alt="switch"
                          loading="lazy"
                      />
                </div>
                </div>
            <div className="col-md-6" data-aos="fade-up"  data-aos-duration="2000">
                <div className="nft_p_head mt-5">
                    <h1>NFT Web Apps</h1>
                </div>
                <div className="nft_p_para">
                  <p>We can help you create, market, and sell your rare collectibles in the easiest way possible. With prior experience in 35+ NFT projects, our competent team knows what to do for your pr</p>
                </div>
                <div className="view_case_btn">
                <img
                          src={btn1}
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
