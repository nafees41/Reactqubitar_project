import React from "react";
import { HashLink } from "react-router-hash-link";
import Wrapper from "./WhatWeDo.styled";
import u1 from "../../../images/UIUXDesign/u1.png";
import u2 from "../../../images/UIUXDesign/u2.png";
import u3 from "../../../images/UIUXDesign/u3.png";
import u4 from "../../../images/UIUXDesign/u4.png";
import u5 from "../../../images/UIUXDesign/u5.png";
import u6 from "../../../images/UIUXDesign/u6.png";
import "./WhatWeDo.css";
function WhatWeDo() {
  function handleAccordion(e) {
    e.target.classList.toggle("active");
    let panel = e.target.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }

  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -120;
    window.scrollTo({ top: yCoordinate + yOffset, behavior:"smooth"});
  };

  return (
    <Wrapper>
      <div className="container mt-2">
        <center>
          <div className="what_head">
            <h1 className="what_head">What We Do</h1>
          </div>
          <div className="what_para">
            <p>
              We create intuitive and visually appealing digital experiences by
              conducting user research, designing effective information
              architecture, and crafting engaging visual and interaction design.
            </p>
          </div>
        </center>
        <div className="row Research-row">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-4">
            <div className="accordion-container">
              <div className="accordion-item">
                <img
                  style={{paddingRight:"10px"}}
                  src={u1}
                  className="img-fluid"
                  alt="switch"
                  loading="lazy"
                />
                User Research
              </div>
            </div>
            <div className="accordion-container">
              <div className="accordion-item">
                <img
                  style={{paddingRight:"10px"}}
                  src={u2}
                  className="img-fluid"
                  alt="switch"
                  loading="lazy"/>
                Information Architecture
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-4">
            <div className="accordion-container">
              <div className="accordion-item">
                <img
                  style={{paddingRight:"10px"}}
                  src={u3}
                  className="img-fluid"
                  alt="switch"
                  loading="lazy"
                />
                Wireframing
              </div>
            </div>
            <div className="accordion-container">
              <div className="accordion-item">
                <img
                  style={{paddingRight: "10px"}}
                  src={u4}
                  className="img-fluid"
                  alt="switch"
                  loading="lazy"
                />
                Visual Design
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-4">
            <div className="accordion-container">
              <div className="accordion-item">
                <img
                  style={{paddingRight:"10px"}}
                  src={u2}
                  className="img-fluid"
                  alt="switch"
                  loading="lazy"
                />
                  Interaction Design
              </div>
            </div>
            <div className="accordion-container">
              <div className="accordion-item">
                <img
                  style={{paddingRight:"10px"}}
                  src={u6}
                  className="img-fluid"
                  alt="switch"
                  loading="lazy"
                />
                Usability Testing
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default WhatWeDo;
