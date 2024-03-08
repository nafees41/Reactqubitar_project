import React from "react";
import styled from "styled-components";
import threebars from "../../../images/NftDevelopment/threebars.png";
import mobileBanner from "../../../images/MobileDevelopment/mobileBanner.png";
import android from "../../../images/MobileDevelopment/android.png";
import iphone from "../../../images/MobileDevelopment/iphone.png";
import flutter from "../../../images/MobileDevelopment/flutter.png";
import react from "../../../images/MobileDevelopment/react.png";
import line from "../../../images/WebDevelopment/line.png";
import { NavHashLink } from "react-router-hash-link";
import Firebase from "../../../images/WebDevelopment/mangicon.png";
import Wrapper from "./MobileBanner.styled";
import "./MobileBanner.css"

function MobileBanner() {
  const BannerItem = styled.div`
    text-align: center;
  `;
  const BannerContent = styled.div``;
  const ButtonGroup = styled.div`
    margin-top: 20px;
  `;
  const LinkButton = styled.a`
    border: 1px solid #fc7e13;
    padding: 10px 20px;
    border-radius: 5px;
    margin-right: 30px;
    transition: 0.5s ease-in-out;
    cursor: pointer;

    &:hover {
      background-color: #fc7e13;
      border: 1px solid #fc7e13;
      color: white;
    }
    @media (max-width: 575.98px) {
      padding: 10px 10px;

      margin-right: 10px;
    }
  `;

  const PolygonWrap = styled.div`
    position: absolute;
    top: 50%;
    transform: translate(0, -30%);
    @media (max-width: 575.98px) {
      transform: translate(0, 20%);
    }
  `;
  const PolygonImg = styled.img`
    width: 70%;
    @media (max-width: 1192px) {
      width: 54%;
    }
    @media (max-width: 992px) {
      width: 40%;
    }
    @media (max-width: 992px) {
      width: 28%;
    }
    @media (max-width: 575.98px) {
      width: 15%;
    }
  `;
  const Ellipse = styled.div``;
  const Circle = styled.img`
    width: 8%;
    position: absolute;
    top: 50%;
    transform: translate(0, -30%);
    left: auto;
    right: 0;
    @media (max-width: 1192px) {
      width: 15%;
    }
    @media (max-width: 575.98px) {
      transform: translate(0, -10%);
      top: 22%;
    }
  `;
  return (
    <Wrapper>
     <div className="container">
       <div className="row mobile-responsive">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-8">
            <h1 className="web_banner_heading mobile-heading">Mobile Development</h1>
            <p className="web_banner_para mobile_para">We offer professional mobile development services, specializing in creating high-quality mobile applications for various platforms such as iOS and Android. Our team of skilled developers utilizes the latest tools and technologies to design, develop, and deploy custom mobile applications that cater to our clients' unique business needs. Whether it's a simple app or a complex enterprise-level solution, we deliver robust and scalable mobile applications that exceed our clients' expectations   </p>
            <ButtonGroup className="web_banner_btn mobile_button">
             <NavHashLink to="/#bookappointment"> 
             <button class="item button-rainbow  mx-2">
                Schedule a Call
                <span className="p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-arrow-right"
                    viewBox="0 0 16 16" >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                    />
                  </svg>
                </span>
              </button>
             {/* <LinkButton   style={{ color: 'white', backgroundColor: '#fc7e13' }}>Book an Appoinment</LinkButton> */}
             </NavHashLink>
            {/* <NavHashLink to="/#bookappointment">  <LinkButton className="gr_button" >Let’s Talk</LinkButton></NavHashLink> */}
            </ButtonGroup>
             </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-4">
            <div className="cube">
              <img
                src={mobileBanner}
                className="img-fluid mobile-image"
                alt="switch"
                loading="lazy"/>
            </div>
          </div>
        </div>
        <hr className="banner_line mt-5" />
        <div className="flex-container">
          <div className="slider-container">
            <ul className="slider">
              <li className="slider__slide">
                <div className="slider__content">
                  <img
                    src={react}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                  <span className="slider_span_para">React App Development</span>
                </div>
              </li>
              <li className="slider__slide">
                <div className="slider__content">
                  <img
                    src={flutter}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                  <span className="slider_span_para">Flutter App Development</span>
                </div>
              </li>
              <li className="slider__slide">
                <div className="slider__content">
                  <img
                    src={android}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                  <span className="slider_span_para">Android App Development</span>
                </div>
              </li>
              <li className="slider__slide">
                <div className="slider__content">
                  <img
                    src={iphone}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                  <span className="slider_span_para"> IOS App Development</span>
                </div>
              </li>
              <li className="slider__slide">
                <div className="slider__content">
                  <img
                    src={react}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                  <span className="slider_span_para">React App Development</span>
                </div>
              </li>
              <li className="slider__slide">
                <div className="slider__content">
                  <img
                    src={flutter}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                  <span className="slider_span_para">Flutter App Development</span>
                </div>
              </li>
              <li className="slider__slide">
                <div className="slider__content">
                  <img
                    src={android}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                  <span className="slider_span_para">Android App Development</span>
                </div>
              </li>
              <li className="slider__slide">
                <div className="slider__content">
                  <img
                    src={iphone}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                  <span className="slider_span_para">IOS App Development</span>
                </div>
              </li>
              <li className="slider__slide">
                <div className="slider__content">
                  <img
                    src={react}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                  <span className="slider_span_para">React App Development</span>
                </div>
              </li>
              <li className="slider__slide">
                <div className="slider__content">
                  <img
                    src={flutter}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                  <span className="slider_span_para">Flutter App Development</span>
                </div>
              </li>
              <li className="slider__slide">
                <div className="slider__content">
                  <img
                    src={android}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                  <span className="slider_span_para">Andriod App Development</span>
                </div>
              </li>
              <li className="slider__slide">
                <div className="slider__content">
                  <img
                    src={iphone}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                  <span className="slider_span_para">IOS App Development</span>
                </div>
              </li>
              <li>
                <div>
                   <img
                    src={Firebase}
                    className="img-fluid"
                    alt="switch"
                    loading="lazy"
                  />
                  <span> Firebase Development </span>
                </div>
              </li>
              </ul>
          </div>
        </div>



      </div>



    </Wrapper>
  );
}

export default MobileBanner;
