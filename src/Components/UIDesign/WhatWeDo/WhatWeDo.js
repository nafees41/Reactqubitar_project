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
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <Wrapper>
      <div className="container mt-2">
        <center>
          <div className="what_head">
            <h1>What We Do</h1>
          </div>
          <div className="what_para">
            <p>
              We create intuitive and visually appealing digital experiences by
              conducting user research, designing effective information
              architecture, and crafting engaging visual and interaction design.
            </p>
          </div>
        </center>
        <div className="row">
          <div className="col-md-4">
            <div className="accordion-container ">
              <button className="accordion-item" onClick={handleAccordion}>
                <img
                  style={{ paddingRight: "10px" }}
                  src={u1}
                  className="img-fluid  "
                  alt="switch"
                  loading="lazy"
                />
                User Research
              </button>
              <div className="panel">
                <p>
                  We conduct thorough user research to understand your target
                  audience and their needs. This helps us create designs that
                  are tailored to your users&#39; preferences and expectations.
                </p>
              </div>
            </div>
            <div className="accordion-container">
              <button className="accordion-item" onClick={handleAccordion}>
                <img
                  style={{ paddingRight: "10px" }}
                  src={u2}
                  className="img-fluid  "
                  alt="switch"
                  loading="lazy"
                />
                Information Architecture
              </button>
              <div className="panel">
                <p>
                  We organize information in a logical and intuitive manner,
                  ensuring that users can easily find what they are looking for.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="accordion-container">
              <button className="accordion-item" onClick={handleAccordion}>
                <img
                  style={{ paddingRight: "10px" }}
                  src={u3}
                  className="img-fluid  "
                  alt="switch"
                  loading="lazy"
                />
                Wireframing
              </button>
              <div className="panel">
                <p>
                  We create wireframes, which are blueprints of your design, to
                  visualize the layout and user flow before moving onto the
                  actual design phase.
                </p>
              </div>
            </div>
            <div className="accordion-container">
              <button className="accordion-item" onClick={handleAccordion}>
                <img
                  style={{ paddingRight: "10px" }}
                  src={u4}
                  className="img-fluid  "
                  alt="switch"
                  loading="lazy"
                />
                Visual Design
              </button>
              <div className="panel">
                <p>
                  We design visually appealing interfaces that reflect your
                  brand&#39;s personality and values while ensuring usability
                  and accessibility.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="accordion-container">
              <button className="accordion-item" onClick={handleAccordion}>
                <img
                  style={{ paddingRight: "10px" }}
                  src={u2}
                  className="img-fluid  "
                  alt="switch"
                  loading="lazy"
                />
                Interaction Design
              </button>
              <div className="panel">
                <p>
                  We design interactions that are intuitive and natural, making
                  it easy for users to accomplish their goals and engage with
                  your product or service.
                </p>
              </div>
            </div>
            <div className="accordion-container">
              <button className="accordion-item" onClick={handleAccordion}>
                <img
                  style={{ paddingRight: "10px" }}
                  src={u6}
                  className="img-fluid  "
                  alt="switch"
                  loading="lazy"
                />
                Usability Testing
              </button>
              <div className="panel">
                <p>
                  We conduct usability testing to identify and address any
                  usability issues, ensuring that your design meets the needs of
                  your users and achieves your business objectives.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

export default WhatWeDo;
