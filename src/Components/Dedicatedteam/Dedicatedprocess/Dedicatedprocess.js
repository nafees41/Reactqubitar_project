import React from "react";
import planning from "../../../images/WebDevelopment/planning.png";
import design from "../../../images/WebDevelopment/design.png";
import qa from "../../../images/WebDevelopment/qa.png";
import deploy from "../../../images/WebDevelopment/deploy.png";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Dedicatedprocess.css"

AOS.init();
function Dedicatedprocess() {
  return (
    <div className="caontainer-fluid Dedicated-bg mt-5">
      <div class="container">
        <div class="section-header">
          <div className="Dedicated_heading">
            <h1>Dedicated Teams Process</h1>
          </div>
        </div>
        <div
          className="Dedicated_para"
          data-aos="zoom-in-right"
          data-aos-duration="1000">
          <p>
            Our  Dedicated Teams  Processs generally involves the following steps:
          </p>
        </div>
        <div class="steps">
          <div class="steps-container">
            <div class="content">
              <div className="Dedicated _card ">
                <div className="card_logo">
                  <img
                    src={planning}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                </div>
                <div className="Dedicated _card_heading">
                  <h4>A Quick Meeting</h4>
                </div>
                <div
                  className="Dedicated _card_desk"
                  data-aos="fade-up"
                  data-aos-duration="1000">
                  <p>
                    The first step is to conduct research to understand the
                    target audience and their needs. This involves gathering
                    data through interviews, surveys, and other research methods
                    to identify user preferences, behaviors, and pain points.
                  </p>
                </div>
              </div>
            </div>
            <i class="step-line"></i>
            <div class="date">01</div>
          </div>
          <div class="steps-container">
            <div class="content">
              <div className="Dedicated _card ">
                <div className="card_logo">
                  <img
                    src={design}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                </div>
                <div className="Dedicated _card_heading">
                  <h4>Talent Selection</h4>
                </div>
                <div
                  className="Dedicated _card_desk "
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <p>
                    After gathering research data, the next step is to create an
                    information architecture that outlines the site's or app's
                    structure, user flow, and content hierarchy. This step helps
                    to ensure that the design is organized, intuitive, and easy
                    to navigate.
                  </p>
                </div>
              </div>
            </div>
            <i class="step-line"></i>
            <div class="date">02</div>
          </div>
          <div class="steps-container">
            <div class="content">
              <div className="Dedicated _card ">
                <div className="card_logo">
                  <img
                    src={qa}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                </div>
                <div className="Dedicated _card_heading">
                  <h4>Onboarding and Collaboration</h4>
                </div>
                <div
                  className="Dedicated _card_desk"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <p>
                    {" "}
                    Once the information architecture is established, the next
                    step is to create a prototype. This involves creating a
                    visual representation of the design using wireframes,
                    mockups, or other design tools. Prototyping helps to test
                    and refine the design before moving into the development
                    phase.
                  </p>
                </div>
              </div>
            </div>
            <i class="step-line"></i>
            <div class="date">03</div>
          </div>
        
        </div>
      </div>
    </div>
  );
}

export default Dedicatedprocess;
