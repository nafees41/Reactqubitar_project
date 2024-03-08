import React from "react";
// import juliana from "../../../images/WebDevelopment/juliana.png";
// import lonewolf from "../../../images/WebDevelopment/lonewolf.png";
// import yesbear from "../../../images/WebDevelopment/yesbear.png";
// import metamates from "../../../images/WebDevelopment/metamates.png";
// import rvt from "../../../images/WebDevelopment/rvt.png";

import nft from "../../../images/nft.png";
import web from "../../../images/web.png";
import mobile from "../../../images/mobile.png";
import uiux from "../../../images/uiux.png";
import digital from "../../../images/digital.png";

import { NavHashLink } from "react-router-hash-link";

import "./Project.css";
export default function Project() {
  return (
    <div className="container mt-5">
      <hr className="banner_line" />
      <div className="flex-container mt-3">
        <div className="slider-container">
          <ul className="slider">
            <li className="slider__slide">
              <div className="slider__content">
                <NavHashLink to="nft">
                  <img
                    src={nft}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                  <span className="slider_span_para">NFT Development</span>
                </NavHashLink>
              </div>
            </li>
            <li className="slider__slide">
              <div className="slider__content">
                <NavHashLink to="web_development">
                  <img
                    src={web}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                  <span className="slider_span_para">Web Development</span>
                </NavHashLink>
              </div>
            </li>
            <li className="slider__slide">
              <div className="slider__content">
                <NavHashLink to="mobile_dev">
                  <img
                    src={mobile}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                  <span className="slider_span_para">Mobile Development</span>
                </NavHashLink>
              </div>
            </li>
            <li className="slider__slide">
              <div className="slider__content">
                <NavHashLink to="ui_ux_design">
                  <img
                    src={uiux}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                  <span className="slider_span_para">UI/UX Design</span>
                </NavHashLink>
              </div>
            </li>
            <li className="slider__slide">
              <div className="slider__content">
                <NavHashLink to="digital_marketing">
                  <img
                    src={digital}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                  <span className="slider_span_para">Digital Marketing</span>
                </NavHashLink>
              </div>
            </li>
            <li className="slider__slide">
              <div className="slider__content">
                <NavHashLink to="nft">
                  <img
                    src={nft}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                  <span className="slider_span_para">NFT Development</span>
                </NavHashLink>
              </div>
            </li>
            <li className="slider__slide">
              <div className="slider__content">
                <NavHashLink to="web_development">
                  <img
                    src={web}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                  <span className="slider_span_para">Web Development</span>
                </NavHashLink>
              </div>
            </li>
            <li className="slider__slide">
              <div className="slider__content">
                <NavHashLink to="mobile_dev">
                  <img
                    src={mobile}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                  <span className="slider_span_para">Mobile Development</span>
                </NavHashLink>
              </div>
            </li>
            <li className="slider__slide">
              <div className="slider__content">
                <NavHashLink to="ui_ux_design">
                  <img
                    src={uiux}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                  <span className="slider_span_para">UI/UX Design</span>
                </NavHashLink>
              </div>
            </li>
            <li className="slider__slide">
              <div className="slider__content">
                <NavHashLink to="digital_marketing">
                  <img
                    src={digital}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                  <span className="slider_span_para">Digital Marketing</span>
                </NavHashLink>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
