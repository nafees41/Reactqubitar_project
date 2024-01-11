import React from 'react'
import './WordpressDev.css';
import wordpress from "../../../images/WebDevelopment/wordpress.png";
import bank from "../../../images/WebDevelopment/bank.png";
import healthcare from "../../../images/WebDevelopment/healthcare.png";
import ecommerce from "../../../images/WebDevelopment/ecommerce.png";
import estate from "../../../images/WebDevelopment/estate.png";
import education from "../../../images/WebDevelopment/education.png";
import flight from "../../../images/WebDevelopment/flight.png";
import w4 from "../../../images/WebDevelopment/w4.png";
import w5 from "../../../images/WebDevelopment/w5.png";
import w6 from "../../../images/WebDevelopment/w6.png";
import w7 from "../../../images/WebDevelopment/w7.png";

import angular from "../../../images/WebDevelopment/angular.png";
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
                      Website Development
                </h1>
                <p className="wordpress_para" data-aos="flip-right"  data-aos-duration="1000">
                      We are a leading WordPress web development
                      company that crafts digital solutions with dexterity,
                      from conceptualization to deployment, data migration,
                      API integrations, and plugin development. For clients
                      who want better business results, we create high
                      performing and easy to manage WordPress websites.


                  
                </p>
                <div className="wordpress_img">
                      <img
                          src={wordpress}
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
