import React from "react";
import styled from "styled-components";
import java from "../../../images/WebDevelopment/java.png";
import angular from "../../../images/WebDevelopment/angular.png";
import customWeb from "../../../images/WebDevelopment/customWeb.png";
import Nextjs from "../../../images/WebDevelopment/next-js.svg";
import Devoppicon from "../../../images/WebDevelopment/Devicon.png";
// import Sql from "../../../images/WebDevelopment/mango.svg";
import Firebase from "../../../images/WebDevelopment/mangicon.png";
import { NavHashLink } from "react-router-hash-link";
import Wrapper from "./WebBanner.styled";
import "./WebBanner.css";
import mission from "../../../images/mission.png";
import { MDBIcon } from "mdbreact";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "mdbreact/dist/css/mdb.css";

function WebBanner() {
 
  const BannerContent = styled.div``;
  const ButtonGroup = styled.div`
    margin-top: 20px;
  `;



  return (
    <Wrapper>
      <div className="container px-4" id="websitedev">
        <div className="row style-responsive">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-8">
            <h1 className="web_banner_heading responsive-heading">Custom Development</h1>
            <p className="web_banner_para banner_para">
              We provide top-notch web development services for businesses and
              individuals, using the latest technologies to create custom
              websites that are fast, functional, and secure. Our goal is to
              help clients establish a strong online presence and achieve their
              business objectives with expertly crafted websites.
            </p>
            <ButtonGroup className="web_banner_btn  banner_button">
              <NavHashLink to="/#bookappointment">
                <button class="item button-rainbow  mx-4">
                  Schedule a Call
                  <span className="p-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-arrow-right"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                      />
                    </svg>
                  </span>
                </button>
              </NavHashLink>
             
            </ButtonGroup>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-4">
            <div className="cube">
              <img
                src={mission}
                className="img-fluid"
                alt="switch"
                loading="lazy"
              />
            </div>
          </div>
        </div>
        <hr className="banner_line mt-5" />
        <div className="flex-container mt-5">
          <div className="slider-container">
            <ul className="slider">
              <li className="slider__slide">
                <div className="slider__content">
                  <img
                    src={customWeb}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                  <span className="slider_span_para"> Custom Development</span>
                </div>
              </li>
              <li className="slider__slide">
                <div className="slider__content">
                  <img
                    src={angular}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                  <span className="slider_span_para">
                    Angular JS Development
                  </span>
                </div>
              </li>
              <li className="slider__slide">
                <div className="slider__content d-flex">
                  <i class="fab fa-node"></i>
                  <span className="slider_span_para">Node JS Development</span>
                </div>
              </li>
              <li className="slider__slide">
                <div className="slider__content">
                  <img
                    src={java}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                  <span className="slider_span_para">Java Development</span>
                </div>
              </li>
              <li className="slider__slide">
                <div className="slider__content d-flex">
                  <MDBIcon fab icon="react" size="2x" />

                  <span className="slider_span_para">React js Development</span>
                </div>
              </li>
              <li className="slider__slide">
                <div className="slider__content">
                  <img
                    src={Nextjs}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                  <i class="cib-next-js"></i>
                  <span className="slider_span_para">Next JS Development</span>
                </div>
              </li>
              <li className="slider__slide">
                <div className="slider__content d-flex">
                  <MDBIcon fab icon="python" size="2x" />
                  <span className="slider_span_para"> Python Development</span>
                </div>
              </li>
              <li className="slider__slide">
                <div className="slider__content">
                  <img
                    src={Devoppicon}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />

                  <span className="slider_span_para">DevOpp Development</span>
                </div>
              </li>
              <li className="slider__slide">
                <div className="slider__content">
                  <img
                    src={Firebase}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                  <span className="slider_span_para">Firebase Development</span>
                </div>
              </li>
              <li className="slider__slide">
                <div className="slider__content">
                  <i class="fab fa-aws"></i>
                  <span className="slider_span_para">
                    {" "}
                    AWS cloud Development
                  </span>
                </div>
              </li>
              <li className="slider__slide">
                <div className="slider__content">
                  <i class="fa fa-database" aria-hidden="true"></i>
                  <span className="slider_span_para">Mango db Development</span>
                </div>
              </li>
              <li className="slider__slide">
                <div className="slider__content">
                  <img
                    src={java}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                  <span className="slider_span_para"> MySQL Development</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default WebBanner;
