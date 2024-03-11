import "./Otherservices.css";
import web from "../../images/web.png";
import mobile from "../../images/mobile.png";
import uiux from "../../images/uiux.png";
import Arrow from "../../images/arrow.png";
import React from "react";
import "swiper/css";
import AOS from "aos";
import "aos/dist/aos.css";
import { Link } from "react-router-dom";
import Tilt from "react-parallax-tilt";

AOS.init();

function OtherServices() {
  return (
    <div >
      <div className="container responsive_card">
        <div className="row d-flex align-items-center justify-content-center">
        <div className="col-xs-12 col-sm-10 col-md-10 col-lg-4 col-xl-3">
        <Tilt>
              <Link className="linkstyle" to="/ui_ux_design">
                <div className="otherservices_card">
                  <div className="services_cards_logo">
                    <img src={uiux} className="img-fluid" alt="slider" />
                    <div className="services_card_head-1 mt-3">
                      <h5 className="card_head"> UI/UX Design</h5>
                    </div>
                    <div
                      className="otherservices_para"
                      data-aos="zoom-out-down"
                      data-aos-duration="1000"
                    >
                      <p>
                        Our digital marketing service utilizes online channels
                        to promote brands, products or services, including SEO,
                        social media, and other advertising strategies to help
                        businesses achieve their marketing goals.
                      </p>
                    </div>
                  </div>
                  <div className="services_card_more">
                    <Link className="linkstyle" to="/ui_ux_design">
                      More Detail
                    </Link>
                  </div>
                  {/* <div className="services_card_arrow">
                      <img src={Arrow} className="img-fluid " alt="slider" />
                    </div> */}
                </div>
              </Link>
            </Tilt>  
          </div>
          <div className="col-xs-12 col-sm-10 col-md-10 col-lg-4 col-xl-3">
          <Tilt>
              <Link className="linkstyle" to="/web_development">
                <div className="otherservices_card">
                  <div className="services_cards_logo">
                    <img src={web} className="img-fluid" alt="slider" />
                    <div className="otherservices_card_head  mt-3">
                      <h5 className="card_head">Web Devlopment</h5>
                    </div>
                    <div
                      className="otherservices_para"
                      data-aos-duration="1000">
                      <p>
                        NFT development is the process of creating unique,
                        non-fungible digital assets using blockchain technology.
                        Our service provides expertise in creating and deploying
                        NFTs for various industries and applications.
                      </p>
                    </div>
                  </div>
                  <div className="otherservices_card_more">
                    <Link className="linkstyle" to="/web_development">
                      More Detail
                    </Link>
                  </div>
                </div>
              </Link>
            </Tilt>
          </div>
          <div className="col-xs-12 col-sm-10 col-md-10 col-lg-4 col-xl-3">
          <Link className="linkstyle" to="/mobile_dev">
              <Tilt>
                <div className="otherservices_card">
                  <div className="services_cards_logo">
                    <img src={mobile} className="img-fluid" alt="slider" />
                    <div className="services_card_head-1 mt-3">
                      <h5 className="card_head">Mobile Development</h5>
                    </div>
                    <div
                      className="otherservices_para"
                      data-aos="zoom-out-down"
                      data-aos-duration="1000"
                    >
                      <p>
                        Our mobile development service creates and maintains
                        applications for iOS and Android devices, with expertise
                        in design, coding, and testing.
                      </p>
                    </div>
                  </div>
                  <br />
                  <div className="services_card_more">
                    <Link className="linkstyle" to="/mobile_dev">
                      More Detail
                    </Link>
                  </div>
                  {/* <div className="services_card_arrow">
                      <img src={Arrow} className="img-fluid " alt="slider" />
                    </div> */}
                </div>
              </Tilt>
            </Link>
          </div>
          
        </div>
      </div>
      <br/>
   <div className="container responsive_card">
        <div className="row d-flex align-items-center justify-content-center">
        <div className="col-xs-12 col-sm-10 col-md-10 col-lg-4 col-xl-3">
        <Link className="linkstyle" to="/SQApage">
              <Tilt>
                <div className="otherservices_card">
                  <div className="services_cards_logo">
                    <div className="services_card_head mt-3">
                      <h5 className="card_head">
                      Quality Assurance
                      </h5>
                    </div>
                    <div
                      className="otherservices_para"
                      data-aos="zoom-out-down"
                      data-aos-duration="1000"
                    >
                      <p>
                      Providing well-tested and bug-free web and mobile apps, ensuring high-quality and the best user experience.
                      </p>
                    </div>
                  </div>
                  <div className="services_card_more">
                    <Link className="linkstyle" to="/SQApage">
                      More Detail
                    </Link>
                  </div>
                </div>
              </Tilt>
            </Link>
          </div>
          <div className="col-xs-12 col-sm-10 col-md-10 col-lg-4 col-xl-3">
          <Link className="linkstyle" to="/Mvppage">
              <Tilt>
                <div className="otherservices_card ">
                  <div className="services_cards_logo">
                    <div className="services_card_head mt-3">
                      <h5 className="card_head">MVP Builder</h5>
                    </div>
                    <div
                      className="otherservices_para"
                      data-aos="zoom-out-down"
                      data-aos-duration="1000"
                    >
                      <p>
                      Streamlined MVPs of development expedites the product journey and validates market potential while insuring well engineering.
                      </p>
                    </div>
                  </div>
                  <div className="services_card_more">
                    <Link className="linkstyle" to="/Mvppage">
                      More Detail
                    </Link>
                  </div>
                </div>
              </Tilt>
            </Link>
          </div>
          <div className="col-xs-12 col-sm-10 col-md-10 col-lg-4 col-xl-3">
          <Link className="linkstyle" to="/Web30page">
              <Tilt>
                <div className="otherservices_card">
                  <div className="services_cards_logo">
                    <div className="services_card_head mt-3">
                      <h5 className="card_head"> Web 3.0</h5>
                    </div>
                    <div
                      className="otherservices_para"
                      data-aos="zoom-out-down"
                      data-aos-duration="1000"
                    >
                      <p>
                      Web 3.0 is the process of creating visually
                        appealing and intuitive interfaces for websites and
                        apps. It involves research, prototyping, and testing to
                        ensure a seamless user experience.
                      </p>
                    </div>
                  </div>
                  <div className="services_card_more">
                    <Link className="linkstyle" to="/Web30page">
                      More Detail
                    </Link>
                  </div>
                </div>
              </Tilt>
            </Link>
          </div>
       
        </div>
      </div>
   <br/>
      <div className="container m-0 responsive_card pb-4">
        <div className="row">
        <div className="col-xs-12 col-sm-10 col-md-10 col-lg-4 col-xl-3 Nft-development  offset-xl-2  offset-lg-1  offset-md-3">
        <Link className="linkstyle" to="/DataAnalysis">
              <Tilt>
                <div className="otherservices_card">
                  <div className="services_cards_logo">
                    <div className="services_card_head mt-3">
                      <h5 className="card_head">Data Analysis</h5>
                    </div>
                    <div
                      className="otherservices_para"
                      data-aos="zoom-out-down"
                      data-aos-duration="1000">
                      <p>
                      Exploit within the capability of data extracting valuable insights for informed decisions and
                      accelerated business growth.
                      </p>
                    </div>
                  </div>
                  <div className="services_card_more">
                    <Link className="linkstyle" to="/DataAnalysis">
                      More Detail
                    </Link>
                  </div>
                </div>
              </Tilt>
            </Link>
          </div>
          <div className="col-xs-12 col-sm-10 col-md-10 col-lg-4 col-xl-3 ">
        <Link className="linkstyle" to="/Dedicatedpage">
              <Tilt>
                <div className="otherservices_card">
                  <div className="services_cards_logo">
                    <div className="services_card_head mt-3">
                      <h5 className="card_head">Dedicated Teams</h5>
                    </div>
                    <div
                      className="otherservices_para"
                      data-aos="zoom-out-down"
                      data-aos-duration="1000">
                      <p>
                      Onboard our dedicated designers, developers and skilled engineers on a full-time basis to achieve your business objectives.
                      </p>
                    </div>
                  </div>
                  <div className="services_card_more">
                    <Link className="linkstyle" to="/Dedicatedpage">
                      More Detail
                    </Link>
                  </div>
                </div>
              </Tilt>
            </Link>
          </div>
          <div className="col-xs-12 col-sm-10 col-md-10 col-lg-4 col-xl-3 ">
        <Link className="linkstyle" to="/AIdevelopment">
              <Tilt>
                <div className="otherservices_card">
                  <div className="services_cards_logo">
                    <div className="services_card_head mt-3">
                      <h5 className="card_head">AI Development</h5>
                    </div>
                    <div
                      className="otherservices_para"
                      data-aos="zoom-out-down"
                      data-aos-duration="1000">
                      <p>
                      Infuse your devices with AI to create smarter, more autonomous, &amp; more efficient
                      products
                      </p>
                    </div>
                  </div>
                  <div className="services_card_more">
                    <Link className="linkstyle" to="/AIdevelopment">
                      More Detail
                    </Link>
                  </div>
                  
                </div>
              </Tilt>
            </Link>
          </div>
          </div>

      </div>
    </div>
  );
}

export default OtherServices;
