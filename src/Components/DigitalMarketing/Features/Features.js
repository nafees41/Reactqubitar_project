import React from 'react'
import './Features.css';
import wordpress from "../../../images/WebDevelopment/wordpress.png";
import bank from "../../../images/WebDevelopment/bank.png";
import healthcare from "../../../images/WebDevelopment/healthcare.png";
import ecommerce from "../../../images/WebDevelopment/ecommerce.png";
import estate from "../../../images/WebDevelopment/estate.png";
import education from "../../../images/WebDevelopment/education.png";
import digitalservice from "../../../images/DigitalMarketing/mBanner.png";

import AOS from 'aos';
import 'aos/dist/aos.css'
AOS.init();

export default function Features() {
  return (
    // data-aos="flip-down"
    <div className="container mt-5"  >
        <div className="row">
            <div className="col-md-6">
                <h1 className="wordpress_heading">
                      Services we provide for
                       Digital Marketing
                </h1>
                <p className="wordpress_para" data-aos="flip-right"  data-aos-duration="1000">
                Digital marketing is a strategic approach to promoting products, services, or brands through various digital channels. This includes search engines, social media platforms, email marketing, mobile apps, and websites. By leveraging these channels, businesses can reach their target audience, generate leads, increase sales, and build brand awareness. Digital marketing services often include search engine optimization (SEO), pay-per-click (PPC) advertising, social media marketing, email marketing, content marketing, and analytics to measure the effectiveness of campaigns.


                  
                </p>
                <div className="wordpress_img">
                      <img
                          src={digitalservice}
                          className="img-fluid "
                          alt="switch"
                          loading="lazy"
                      />
                </div>
            </div>
            <div className="col-md-6">
                <div className="main_wordpress_right">
                <div className="wordpress_right">
                      <img
                          src={healthcare}
                          className="img-fluid "
                          alt="switch"
                          loading="lazy"
                      />
                      <span className='heath_care' >Healthcare and Medical Services</span>
                          <hr className="w_banner_line" />

                </div>
                  <div className="wordpress_right">
                      <img
                          src={bank}
                          className="img-fluid "
                          alt="switch"
                          loading="lazy"
                      />
                          <span className='heath_care'>Finance and Banking Services</span>
                          <hr className="w_banner_line" />

                  </div>
                  <div className="wordpress_right">
                      <img
                          src={ecommerce}
                          className="img-fluid "
                          alt="switch"
                          loading="lazy"
                      />
                          <span className='heath_care'>Retail and E-commerce Services</span>
                          <hr className="w_banner_line" />

                  </div>
                  <div className="wordpress_right">
                      <img
                          src={education}
                          className="img-fluid "
                          alt="switch"
                          loading="lazy"
                      />
                          <span className='heath_care'>Education and E-learning Services</span>
                          <hr className="w_banner_line" />

                  </div>
                  {/* <div className="wordpress_right">
                      <img
                          src={flight}
                          className="img-fluid "
                          alt="switch"
                          loading="lazy"
                      />
                          <span className='heath_care'>Hospitality and Tourism Services</span>
                          <hr className="w_banner_line" />

                  </div> */}
                  <div className="wordpress_right">
                      <img
                          src={estate}
                          className="img-fluid "
                          alt="switch"
                          loading="lazy"
                      />
                          <span className='heath_care'>Real Estate Services</span>
                          <hr className="w_banner_line" />

                  </div>
                  </div>
            </div>
        </div>
    </div>
  )
}
