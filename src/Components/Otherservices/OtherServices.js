import "./Otherservices.css";
import nft from "../../images/nft.png";
import web from "../../images/web.png";
import mobile from "../../images/mobile.png";
import uiux from "../../images/uiux.png";
import digital from "../../images/digital.png";
import Arrow from "../../images/arrow.png";
import Tilt from "react-parallax-tilt";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
AOS.init();

function OtherServices() {
  return (
    <section>
      <div className="conatiner-fluid">
        <div className="container">
          <center>
            <div className="otherservices_head">
              <h1 className="card_head">Other Services</h1>
            </div>
            <div className="otherservices_para">
              <p>
                We offer innovative and customized software solutions tailored
                to meet your business needs and drive growth.
              </p>
            </div>
          </center>
          <div>
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-4">
                  <div className="otherservices_card">
                    <div className="services_cards_logo">
                      <img src={web} className="img-fluid " alt="slider" />
                      <div className="otherservices_card_head  mt-3">
                        <h4 className="card_head">Web Devlopment</h4>
                      </div>
                      <div
                        className="services_card_para"
                        data-aos="zoom-out-down"
                        data-aos-duration="1000"
                      >
                        <p>
                          NFT development is the process of creating unique,
                          non-fungible digital assets using blockchain
                          technology. Our service provides expertise in creating
                          and deploying NFTs for various industries and
                          applications.
                        </p>
                      </div>
                    </div>
                    <div className="otherservices_card_more">
                      <Link to="/web_development">More Detail</Link>
                    </div>
                    <div className="services_card_arrow">
                      <img src={Arrow} className="img-fluid " alt="slider" />
                    </div>
                  </div>
                </div>
             <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-4">
                  <div className="otherservices_card">
                    <div className="services_cards_logo">
                      <img src={mobile} className="img-fluid" alt="slider" />
                      <div className="services_card_head-1 mt-3">
                        <h4 className="card_head">Mobile Development</h4>
                      </div>
                      <div
                        className="services_card_para-1"
                        data-aos="zoom-out-down"
                        data-aos-duration="1000"
                      >
                        <p>
                          Our mobile development service creates and maintains
                          applications for iOS and Android devices, with
                          expertise in design, coding, and testing.
                        </p>
                      </div>
                    </div>
                    <br />
                    <br />
                    <div className="services_card_more">
                      <Link to="/mobile_dev">More Detail</Link>
                    </div>
                    <div className="services_card_arrow">
                      <img src={Arrow} className="img-fluid " alt="slider" />
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-4">
                  <div className="otherservices_card">
                    <div className="services_cards_logo">
                      <img src={uiux} className="img-fluid " alt="slider" />
                      <div className="services_card_head-1 mt-3">
                        <h4 className="card_head"> UI/UX Design</h4>
                      </div>
                      <div
                        className="services_card_para-1"
                        data-aos="zoom-out-down"
                        data-aos-duration="1000"
                      >
                        <p>
                          Our digital marketing service utilizes online channels
                          to promote brands, products or services, including
                          SEO, social media, and other advertising strategies to
                          help businesses achieve their marketing goals.
                        </p>
                      </div>
                    </div>
                    <div className="services_card_more">
                      <Link to="/ui_ux_design">More Detail</Link>
                    </div>
                    <div className="services_card_arrow">
                      <img src={Arrow} className="img-fluid " alt="slider" />
                    </div>
                  </div>
                </div>
           
              </div>
            </div>
            <br />
            <div className="container">
              <div className="row d-flex justify-content-center">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-4">
                  <div className="otherservices_card">
                    <div className="services_cards_logo">
                      <div className="services_card_head mt-3">
                        <h4 className="card_head"> Staking Platform Development</h4>
                      </div>
                      <div
                        className="services_card_para"
                        data-aos="zoom-out-down"
                        data-aos-duration="1000"
                      >
                        <p>
                          UI/UX design is the process of creating visually
                          appealing and intuitive interfaces for websites and
                          apps. It involves research, prototyping, and testing
                          to ensure a seamless user experience.
                        </p>
                      </div>
                    </div>
                    <div className="services_card_more">
                      <Link to="/nft_staking">More Detail</Link>
                    </div>
                    <div className="services_card_arrow">
                      <img src={Arrow} className="img-fluid " alt="slider" />
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-4">
                  <div className="otherservices_card">
                    <div className="services_cards_logo">
                      <div className="services_card_head mt-3">
                        <h4 className="card_head">NFT Marketplace</h4>
                      </div>
                      <div
                        className="services_card_para"
                        data-aos="zoom-out-down"
                        data-aos-duration="1000"
                      >
                        <p>
                          UI/UX design is the process of creating visually
                          appealing and intuitive interfaces for websites and
                          apps. It involves research, prototyping, and testing
                          to ensure a seamless user experience.
                        </p>
                      </div>
                    </div>
                    <div className="services_card_more">
                      <Link to="/nft_marketplace">More Detail</Link>
                    </div>
                    <div className="services_card_arrow">
                      <img src={Arrow} className="img-fluid " alt="slider" />
                    </div>
                  </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-4">
                  <div className="otherservices_card">
                    <div className="services_cards_logo">
                      <div className="services_card_head mt-3">
                        <h3 className="card_head"> NFT Game Development</h3>
                      </div>
                      <div
                        className="services_card_para"
                        data-aos="zoom-out-down"
                        data-aos-duration="1000"
                      >
                        <p>
                          UI/UX design is the process of creating visually
                          appealing and intuitive interfaces for websites and
                          apps. It involves research, prototyping, and testing
                          to ensure a seamless user experience.
                        </p>
                      </div>
                    </div>
                    <div className="services_card_more">
                      <Link to="/nft_gaming">More Detail</Link>
                    </div>
                    <div className="services_card_arrow">
                      <img src={Arrow} className="img-fluid " alt="slider" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <br/>
            <div className="container">
              <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-4">
                  <div className="otherservices_card">
                    <div className="services_cards_logo">
                      <div className="services_card_head mt-3">
                        <h4 className="card_head">NFT Development</h4>
                      </div>
                      <div
                        className="services_card_para"
                        data-aos="zoom-out-down"
                        data-aos-duration="1000">
                        <p>
                          UI/UX design is the process of creating visually
                          appealing and intuitive interfaces for websites and
                          apps. It involves research, prototyping, and testing
                          to ensure a seamless user experience.
                        </p>
                      </div>
                    </div>
                    <br />
                    <br />
                    <div className="services_card_more">
                      <Link to="/nft">More Detail</Link>
                    </div>
                    <div className="services_card_arrow">
                      <img src={Arrow} className="img-fluid " alt="slider" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OtherServices;
