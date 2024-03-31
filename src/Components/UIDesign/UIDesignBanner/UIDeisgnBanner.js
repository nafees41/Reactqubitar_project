import React from "react";
import styled from "styled-components";
import threebars from "../../../images/NftDevelopment/threebars.png";
import tbanner from "../../../images/UIUXDesign/uiBanner.png";
import adobe from "../../../images/UIUXDesign/Adobe.png";
import figma from "../../../images/UIUXDesign/figma.png";
import flanto from "../../../images/UIUXDesign/flanto.png";
import sketch from "../../../images/UIUXDesign/sketch.png";
import inv from "../../../images/UIUXDesign/inv.png";
import zeplin from "../../../images/UIUXDesign/zeplin.png";
import { NavHashLink } from "react-router-hash-link";
import node from "../../../images/WebDevelopment/node.png";
import java from "../../../images/WebDevelopment/java.png";
import angular from "../../../images/WebDevelopment/angular.png";
import customWeb from "../../../images/WebDevelopment/customWeb.png";
import "./UIDesignBanner.css";
import Wrapper from "./UIDesignBanner.styled";

function UIDesignBanner() {
  const ButtonGroup = styled.div`
    margin-top: 20px;
  `;
  return (
    <Wrapper>

      <div className="container" id="ui_ux_design">
        <div className="row UX-design">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-8">
            <h1 className="web_banner_heading">UI/UX Design</h1>
            <p className="web_banner_para web_banner_paragraph">
              UI UX design is the process of creating digital products, such as websites or mobile applications, with a focus on enhancing user experience and user interface design. Our UI UX design service involves understanding the needs of the user and designing interfaces that are intuitive, easy to use, and visually appealing. We work closely with our clients to create designs that not only meet their requirements but also exceed their expectations, resulting in digital products that are both functional and visually stunning.
            </p>
            <ButtonGroup className="web_banner_btn web_banner_button">
              <NavHashLink to="/#bookappointment">
                <button class="item button-rainbow mx-4">
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
              </NavHashLink>
              {/* <NavHashLink to="/#bookappointment">  <LinkButton className="gr_button" >Let’s Talk</LinkButton></NavHashLink> */}
            </ButtonGroup>
     </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-4">
            <div className="cube" style={{paddingRight:'40px'}}>
              <img
                src={tbanner}
                className="img-fluid image-responsive"
                alt="switch"
                loading="lazy"/>
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
                    src={zeplin}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                </div>
              </li>
              <li className="slider__slide">
                <div className="slider__content">
                  <img
                    src={inv}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                </div>
              </li>
              <li className="slider__slide">
                <div className="slider__content">
                  <img
                    src={sketch}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                </div>
              </li>
              <li className="slider__slide">
                <div className="slider__content">
                  <img
                    src={flanto}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                </div>
              </li>
              <li className="slider__slide">
                <div className="slider__content">
                  <img
                    src={figma}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                </div>
              </li>
              <li className="slider__slide">
                <div className="slider__content">
                  <img
                    src={adobe}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                </div>
              </li>
              <li className="slider__slide">
                <div className="slider__content">
                  <img
                    src={zeplin}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                </div>
              </li>
              <li className="slider__slide">
                <div className="slider__content">
                  <img
                    src={inv}
                    className="img-fluid"
                    alt="switch"
                    loading="lazy"
                  />
                </div>
              </li>
              <li className="slider__slide">
                <div className="slider__content">
                  <img
                    src={sketch}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                </div>
              </li>
              <li className="slider__slide">
                <div className="slider__content">
                  <img
                    src={flanto}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                </div>
              </li>
              <li className="slider__slide">
                <div className="slider__content">
                  <img
                    src={figma}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                </div>
              </li>
              <li className="slider__slide">
                <div className="slider__content">
                  <img
                    src={adobe}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                </div>
              </li>
             </ul>
          </div>
        </div>
        </div>
  </Wrapper>
  );
}

export default UIDesignBanner;
