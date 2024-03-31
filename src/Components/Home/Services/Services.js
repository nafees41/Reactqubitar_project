import "./Services.css";
import nft from "../../../images/nft.png";
import web from "../../../images/web.png";
import mobile from "../../../images/mobile.png";
import uiux from "../../../images/uiux.png";
import digital from "../../../images/digital.png";
import Arrow from "../../../images/arrow.png";
import Tilt from "react-parallax-tilt";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import "swiper/css";
import AOS from "aos";
import "aos/dist/aos.css";
import { NavHashLink } from "react-router-hash-link";
AOS.init();

function Services() {
  return (
    <section id="services">
      <div className="conatiner-fluid">
        <div className="container">
          <center>
            <div className="services_head">
              <h1>Our Services</h1>
            </div>
            <div className="services_para">
              <p>
                We offer innovative and customized software solutions tailored
                to meet your business needs and drive growth.
              </p>
            </div>
          </center>
          <div className="swipp">
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
                paddingBottom: "44px",
                paddingTop: "25px",
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
                  <NavHashLink className="NavHashLink" to="/AIdevelopment">
                    <div className="services_card">
                      <div className="services_cards_logo">
                        <img src={nft} className="img-fluid" alt="slider" />
                        <div className="services_card_head mt-3">
                          <h3 className="head-responsive">Ai development</h3>
                        </div>
                        <div
                          className="services_card_para"
                          data-aos="zoom-out-down"
                          data-aos-duration="1000"
                        >
                          <p className="para-responsive">
                          Ai development is the process of creating unique,
                            non-fungible digital assets using blockchain
                            technology. Our service provides expertise in
                            creating and deploying Ai for various industries
                            and applications.
                          </p>
                        </div>
                      </div>
                      <div className="services_card_more">
                        <NavHashLink className="NavHashLink" to="/AIdevelopment">
                          More Detail
                        </NavHashLink>
                      </div>
                      
                    </div>
                  </NavHashLink>
                </Tilt>
              </SwiperSlide>
              <SwiperSlide>
                <Tilt>
                  <NavHashLink className="NavHashLink" to="web_development">
                    <div className="services_card">
                      <div className="services_cards_logo">
                        <img src={web} className="img-fluid " alt="slider" />
                        <div className="services_card_head mt-3">
                          <h3 className="head-responsive">Web Devlopment</h3>
                        </div>
                        <div
                          className="services_card_para"
                          data-aos="zoom-out-down"
                          data-aos-duration="1000"
                        >
                          <p className="para-responsive">
                            We design, develop, and maintain websites, providing
                            customized solutions to meet your specific needs.
                            From coding and programming to web server
                            configuration, we handle it all.
                          </p>
                        </div>
                      </div>
                      <div className="services_card_more">
                        <NavHashLink
                          className="NavHashLink"
                          to="web_development"
                        >
                          More Detail
                        </NavHashLink>
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
                  <NavHashLink className="NavHashLink" to="mobile_dev">
                    <div className="services_card">
                      <div className="services_cards_logo">
                        <img src={mobile} className="img-fluid" alt="slider" />
                        <div className="services_card_head mt-3">
                          <h3 className="head-responsive">
                            Mobile Development
                          </h3>
                        </div>
                        <div
                          className="services_card_para"
                          data-aos="zoom-out-down"
                          data-aos-duration="1000"
                        >
                          <p className="para-responsive">
                            Our mobile development service creates and maintains
                            applications for iOS and Android devices, with
                            expertise in design, coding, and testing.
                          </p>
                        </div>
                      </div>
                      <div className="services_card_more">
                        <NavHashLink className="NavHashLink" to="mobile_dev">
                          More Detail
                        </NavHashLink>
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
                  <NavHashLink className="NavHashLink" to="digital_marketing">
                    <div className="services_card">
                      <div className="services_cards_logo">
                        <img
                          src={digital}
                          className="img-fluid "
                          alt="slider"
                        />
                        <div className="services_card_head mt-3">
                          <h3 className="head-responsive">Digital Marketing</h3>
                        </div>
                        <div
                          className="services_card_para"
                          data-aos="zoom-out-down"
                          data-aos-duration="1000"
                        >
                          <p className="para-responsive">
                            Our digital marketing service utilizes online
                            channels to promote brands, products or services,
                            including SEO, social media, and other advertising
                            strategies goal.
                          </p>
                        </div>
                      </div>
                      <div className="services_card_more">
                        <NavHashLink
                          className="NavHashLink"
                          to="digital_marketing"
                        >
                          More Detail
                        </NavHashLink>
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
                  <NavHashLink className="NavHashLink" to="/Dedicatedpage">
                    <div className="services_card">
                      <div className="services_cards_logo">
                        <img src={uiux} className="img-fluid " alt="slider" />
                        <div className="services_card_head mt-3">
                          <h3 className="head-responsive">Dedicated Team</h3>
                        </div>
                        <div
                          className="services_card_para"
                          data-aos="zoom-out-down"
                          data-aos-duration="1000">
                          <p className="para-responsive">
                          Onboard our dedicated designers, developers and skilled engineers on a full-time basis to achieve your business objectives.

                          </p>
                        </div>
                      </div>
                      <div className="services_card_more">
                        <NavHashLink className="NavHashLink" to="/Dedicatedpage">
                          More Detail
                        </NavHashLink>
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
                  <NavHashLink className="NavHashLink" to="/SQApage">
                    <div className="services_card">
                      <div className="services_cards_logo">
                        <img src={web} className="img-fluid " alt="slider" />
                        <div className="services_card_head mt-3">
                          <h3 className="head-responsive">Quality Assurance</h3>
                        </div>
                        <div
                          className="services_card_para"
                          data-aos="zoom-out-down"
                          data-aos-duration="1000"
                        >
                          <p className="para-responsive">
                          Providing well-tested and bug-free web and mobile apps, ensuring high-quality and the best user experience.

                          </p>
                        </div>
                      </div>
                      <div className="services_card_more">
                        <NavHashLink
                          className="NavHashLink"
                          to="/SQApage"
                        >
                          More Detail
                        </NavHashLink>
                      </div>
                    </div>
                  </NavHashLink>
                </Tilt>
              </SwiperSlide>
              <SwiperSlide>
                <Tilt>
                  <NavHashLink className="NavHashLink" to="/Mvppage">
                    <div className="services_card">
                      <div className="services_cards_logo">
                        <img src={mobile} className="img-fluid" alt="slider" />
                        <div className="services_card_head mt-3">
                          <h3 className="head-responsive">MVP Builder</h3>
                        </div>
                        <div
                          className="services_card_para"
                          data-aos="zoom-out-down"
                          data-aos-duration="1000"
                        >
                          <p className="para-responsive">
                          Streamlined MVPs of development expedites the product journey and validates market potential while insuring well engineering.

                          </p>
                        </div>
                      </div>
                      <div className="services_card_more">
                        <NavHashLink className="NavHashLink" to="/Mvppage">
                          More Detail
                        </NavHashLink>
                      </div>
                    </div>
                  </NavHashLink>
                </Tilt>
              </SwiperSlide>
              <SwiperSlide>
                <Tilt>
                  <NavHashLink className="NavHashLink" to="/Web30page">
                    <div className="services_card">
                      <div className="services_cards_logo">
                        <img
                          src={digital}
                          className="img-fluid"
                          alt="slider"
                        />
                        <div className="services_card_head mt-3">
                          <h3 className="head-responsive">Web 3.0</h3>
                        </div>
                        <div
                          className="services_card_para"
                          data-aos="zoom-out-down"
                          data-aos-duration="1000"
                        >
                          <p className="para-responsive">
                          Web 3.0 is the process of creating visually
                        appealing and intuitive interfaces for websites and
                        apps. It involves research, prototyping, and testing to
                        ensure a seamless user experience.
                          </p>
                        </div>
                      </div>
                      <div className="services_card_more">
                        <NavHashLink
                          className="NavHashLink"
                          to="/Web30page"
                        >
                          More Detail
                        </NavHashLink>
                      </div>
                    </div>
                  </NavHashLink>
                </Tilt>
              </SwiperSlide>
              <SwiperSlide>
                <Tilt>
                  <NavHashLink className="NavHashLink" to="/DataAnalysis">
                    <div className="services_card">
                      <div className="services_cards_logo">
                        <img src={uiux} className="img-fluid " alt="slider" />
                        <div className="services_card_head mt-3">
                          <h3 className="head-responsive">Data Analysis</h3>
                        </div>
                        <div
                          className="services_card_para"
                          data-aos="zoom-out-down"
                          data-aos-duration="1000"
                        >
                          <p className="para-responsive">
                          Exploit within the capability of data extracting valuable insights for informed decisions and
                      accelerated business growth.
                          </p>
                        </div>
                      </div>
                      <div className="services_card_more">
                        <NavHashLink className="NavHashLink" to="/DataAnalysis">
                          More Detail
                        </NavHashLink>
                      </div>
                     
                    </div>
                  </NavHashLink>
                </Tilt>
              </SwiperSlide>{" "}
            </Swiper>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
