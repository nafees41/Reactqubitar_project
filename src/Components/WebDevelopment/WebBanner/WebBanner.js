import React from "react";
import styled from "styled-components";
import threebars from "../../../images/NftDevelopment/threebars.png";
import cube from "../../../images/NftDevelopment/cube.png";
import node from "../../../images/WebDevelopment/node.png";
import java from "../../../images/WebDevelopment/java.png";
import angular from "../../../images/WebDevelopment/angular.png";
import customWeb from "../../../images/WebDevelopment/customWeb.png";
import { NavHashLink } from "react-router-hash-link";
import Wrapper from "./WebBanner.styled";
import mission from "../../../images/mission.png";


function WebBanner() {
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

        <div className="row">
          <div className="col-md-8  col-sm-8 col-8 ">
            <h1 className="web_banner_heading">Web Development</h1>
            <p className="web_banner_para ">We provide top-notch web development services for businesses and individuals, using the latest technologies to create custom websites that are fast, functional, and secure. Our goal is to help clients establish a strong online presence and achieve their business objectives with expertly crafted websites.

            </p>
            <ButtonGroup className="web_banner_btn">
             <NavHashLink to="/#bookappointment"> <LinkButton   style={{ color: 'white', backgroundColor: '#fc7e13' }}>Book an Appoinment</LinkButton></NavHashLink>
            <NavHashLink to="/#bookappointment">  <LinkButton className="gr_button" >Let’s Talk</LinkButton></NavHashLink>
            </ButtonGroup>

          </div>
          <div className="col-md-4 col-sm-4 col-4">
            <div className="cube">
              <img
                src={mission}
                className="img-fluid "
                alt="switch"
                loading="lazy"
              />
            </div>
            <Ellipse>

              <Circle
                src={threebars}
                className="img-fluid mt-2"
                loading="lazy"
                alt="">

              </Circle>

            </Ellipse>

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
                  <span className="slider_span_para"> Custom Web Development</span>
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
                  <span className="slider_span_para">Angular JS Development</span>
                </div>
              </li>
              <li className="slider__slide">
                <div className="slider__content">
                  <img
                    src={node}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
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
                  <span className="slider_span_para"> Java Web Development</span>
                </div>
              </li>
              <li className="slider__slide">
                <div className="slider__content">
                  <img
                    src={customWeb}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                  <span className="slider_span_para"> Custom Web Development</span>
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
                  <span className="slider_span_para">Angular JS Development</span>
                </div>
              </li>
              <li className="slider__slide">
                <div className="slider__content">
                  <img
                    src={node}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
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
                  <span className="slider_span_para"> Java Web Development</span>
                </div>
              </li>
              <li className="slider__slide">
                <div className="slider__content">
                  <img
                    src={customWeb}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                  <span className="slider_span_para"> Custom Web Development</span>
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
                  <span className="slider_span_para">Angular JS Development</span>
                </div>
              </li>
              <li className="slider__slide">
                <div className="slider__content">
                  <img
                    src={node}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
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
                  <span className="slider_span_para"> Java Web Development</span>
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
