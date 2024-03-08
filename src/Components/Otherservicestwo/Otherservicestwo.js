import "./Otherservicestwo.css";
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
import { NavHashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";

AOS.init();

function Services() {
  return (
    <section>
      <div className="conatiner-fluid">
        <div className="container">
          <center>
            <div className="services_head-page">
              <h1>Other Services</h1>
            </div>
            <div className="services_para-page">
              <p>
                We offer innovative and customized software solutions tailored
                to meet your business needs and drive growth.
              </p>
            </div>
          </center>

          <div className="swipp-page">
            <Swiper
              slidesPerView={5}
              spaceBetween={30}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              modules={[Autoplay]}
              className="mySwiper"
              style={{
                paddingBottom:"44px",
                paddingTop:"25px",
              }}
              breakpoints={{
                0: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                480: {
                  slidesPerView: 1,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 2,
                  spaceBetween: 15,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 15,
                },
                1280: {
                  slidesPerView: 4,
                  spaceBetween: 30,
                },
              }}
            >
              <SwiperSlide>
                <Tilt>
                <NavHashLink className="mobilelink" to="nft">
                  <div className="services_card-page">
                    <div className="services_cards_logo">
                      <img src={nft} className="img-fluid" alt="slider"/>
                      <div className="services_card_head-page mt-3">
                        <h3 className="web_head">NFT Devlopment</h3>
                      </div>
                      <div
                        className="services_card_para-page"
                        data-aos="zoom-out-down"
                        data-aos-duration="1000">
                        <p className="web_para">
                          NFT development is the process of creating unique,
                          non-fungible digital assets using blockchain
                          technology. Our service provides expertise in creating
                          and deploying NFTs for various industries and
                          applications.
                        </p>
                      </div>
                    </div>
                    <div className="services_card_more">
                      <Link className="linkstyle" to="/nft">More Detail</Link>
                    </div>
                    {/* <div className="services_card_arrow">
                      <img src={Arrow} className="img-fluid" alt="slider" />
                    </div> */}
                  </div>
                  </NavHashLink>
                </Tilt>
              </SwiperSlide>
              <SwiperSlide>
                <Tilt>
                <NavHashLink className="mobilelink" to="/web_development">
                  <div className="services_card-page">
                    <div className="services_cards_logo">
                      <img src={web} className="img-fluid " alt="slider" />
                      <div className="services_card_head-page mt-3">
                        <h3 className="web_head">Web Devlopment</h3>
                      </div>
                      <div
                        className="services_card_para-page"
                        data-aos="zoom-out-down"
                        data-aos-duration="1000"
                      >
                        <p className="web_para">
                          We design, develop, and maintain websites, providing
                          customized solutions to meet your specific needs. From
                          coding and programming to web server configuration, we
                          handle it all.
                        </p>
                      </div>
                    </div>
                    <div className="services_card_more-page">
                      <Link className="linkstyle" to="/web_development">
                        More Detail
                      </Link>
                    </div>
                    {/* <div className="services_card_arrow">
                      <img src={Arrow} className="img-fluid " alt="slider" />
                    </div> */}
                  </div>
                  </NavHashLink>
                </Tilt>
              </SwiperSlide>
              <SwiperSlide>
              <NavHashLink className="mobilelink" to="/mobile_dev">
                <Tilt>
                  <div className="services_card-page">
                    <div className="services_cards_logo">
                      <img src={mobile} className="img-fluid" alt="slider" />
                      <div className="services_card_head-page mt-3">
                        <h3 className="web_head">Mobile Development</h3>
                      </div>
                      <div
                        className="services_card_para-page"
                        data-aos="zoom-out-down"
                        data-aos-duration="1000"
                      >
                        <p className="web_para">
                          Our mobile development service creates and maintains
                          applications for iOS and Android devices, with
                          expertise in design, coding, and testing.
                        </p>
                      </div>
                    </div>
                    <div className="services_card_more">
                      <Link className="linkstyle" to="/mobile_dev">More Detail</Link>
                    </div>
                    {/* <div className="services_card_arrow">
                      <img src={Arrow} className="img-fluid " alt="slider" />
                    </div> */}
                  </div>
                </Tilt>
                </NavHashLink>
              </SwiperSlide>
              <SwiperSlide>
                <Tilt>
                <NavHashLink  className="mobilelink" to="/digital_marketing">
                  <div className="services_card-page">
                    <div className="services_cards_logo">
                      <img src={digital} className="img-fluid " alt="slider" />
                      <div className="services_card_head-page mt-3">
                        <h3 className="web_head">Digital Marketing</h3>
                      </div>
                      <div
                        className="services_card_para-page"
                        data-aos="zoom-out-down"
                        data-aos-duration="1000"
                      >
                        <p className="web_para">
                          Our digital marketing service utilizes online channels
                          to promote brands, products or services, including
                          SEO, social media, and other advertising strategies to
                          help businesses achieve their marketing goals.
                        </p>
                      </div>
                    </div>
                    <div className="services_card_more">
                      <Link  className="linkstyle" to="/digital_marketing">
                        More Detail
                      </Link>
                    </div>
                    {/* <div className="services_card_arrow">
                      <img src={Arrow} className="img-fluid " alt="slider" />
                    </div> */}
                  </div>
                  </NavHashLink>
                </Tilt>

              </SwiperSlide>
              <SwiperSlide>
                <Tilt>
                <NavHashLink   className="mobilelink" to="/ui_ux_design">
                  <div className="services_card-page">
                    <div className="services_cards_logo">
                      <img src={uiux} className="img-fluid " alt="slider" />
                      <div className="services_card_head-page mt-3">
                        <h3  className="web_head">UI/UX Design</h3>
                      </div>
                      <div
                        className="services_card_para-page"
                        data-aos="zoom-out-down"
                        data-aos-duration="1000"
                      >
                        <p className="web_para">
                          UI/UX design is the process of creating visually
                          appealing and intuitive interfaces for websites and
                          apps. It involves research, prototyping, and testing
                          to ensure a seamless user experience.
                        </p>
                      </div>
                    </div>
                    <div className="services_card_more">
                      <Link  className="linkstyle" to="/ui_ux_design">More Detail</Link>
                    </div>
                    {/* <div className="services_card_arrow">
                      <img src={Arrow} className="img-fluid " alt="slider" />
                    </div> */}
                  </div>
                  </NavHashLink>
                </Tilt>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
