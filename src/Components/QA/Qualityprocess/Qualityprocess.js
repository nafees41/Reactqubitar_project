import React from "react";
import planning from "../../../images/WebDevelopment/planning.png";
import design from "../../../images/WebDevelopment/design.png";
import qa from "../../../images/WebDevelopment/qa.png";
import deploy from "../../../images/WebDevelopment/deploy.png";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Qualityprocess.css"
AOS.init();
function Qualityprocess() {
  return (
    <div className="caontainer-fluid Assurance-bg mt-5">
      <div class="container">
        <div class="Assurance-header">
          <div className="Assurance_heading">
            <h1>Quality Assurance Process</h1>
          </div>
        </div>
        <div
          className="Assurance_para"
          data-aos="zoom-in-right"
          data-aos-duration="1000">
          <p>
            Our  Quality Assurance Process Design process generally involves the following steps:
          </p>
        </div>
        <div class="Assurance_steps">
          <div class="Assurance-steps-container">
            <div class="Assurance_content">
              <div className="Assurance_card">
                <div className="card_logo">
                  <img
                    src={planning}
                    className="img-fluid"
                    alt="switch"
                    loading="lazy"
                  />
                </div>
                <div className="Assurance_card_heading">
                  <h4>Requirement Analysis</h4>
                </div>
                <div
                  className="Assurance_card_desk"
                  data-aos="fade-up"
                  data-aos-duration="1000">
                  <ol>
                    <li>Thoroughly Analyze Software Requirements.</li>
                    <li>Identify Functional & Non-Functional Specifications.</li>
                    <li>Collaborate With Stakeholders To Clarify Expectations & Objectives.</li>

                  </ol>
                </div>
              </div>
            </div>
            <i class="Assurance-step-line"></i>
            <div class="Assurance_date">01</div>
          </div>
          <div class="Assurance-steps-container">
            <div class="Assurance_content">
              <div className="Assurance_card">
                <div className="card_logo">
                  <img
                    src={design}
                    className="img-fluid"
                    alt="switch"
                    loading="lazy"
                  />
                </div>
                <div className="Assurance_card_heading">
                  <h4>Test Planning</h4>
                </div>
                <div
                  className="Assurance_card_desk"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <ol>
                    <li>Define Test Objectives, Scope, & Strategies..</li>
                    <li>Develop A Comprehensive Test Plan & Schedule.</li>
                    <li>Identify Test Deliverables & Resource Requirements.</li>

                  </ol>
                </div>
              </div>
            </div>
            <i class="Assurance-step-line"></i>
            <div class="Assurance_date">02</div>
          </div>
          <div class="Assurance-steps-container">
            <div class="Assurance_content">
              <div className="Assurance_card">
                <div className="card_logo">
                  <img
                    src={qa}
                    className="img-fluid"
                    alt="switch"
                    loading="lazy"
                  />
                </div>
                <div className="Assurance_card_heading">
                  <h4>Test Case Design</h4>
                </div>
                <div
                  className="Assurance_card_desk"
                  data-aos="fade-up"
                  data-aos-duration="3000">
                  <ol>
                    <li>Thoroughly Analyze Software Requirements.</li>
                    <li>Identify Functional & Non-Functional Specifications.</li>
                    <li>Collaborate With Stakeholders To Clarify Expectations & Objectives.</li>

                  </ol>
                </div>
              </div>
            </div>
            <i class="Assurance-step-line"></i>
            <div class="Assurance_date">03</div>
          </div>
          <div class="Assurance-steps-container">
            <div class="Assurance_content">
              <div className="Assurance_card">
                <div className="card_logo">
                  <img
                    src={deploy}
                    className="img-fluid"
                    alt="switch"
                    loading="lazy"
                  />
                </div>
                <div className="Assurance_card_heading">
                  <h4>Test Execution</h4>
                </div>
                <div
                  className="Assurance_card_desk"
                  data-aos="fade-up"
                  data-aos-duration="4000"
                >
                  <ol>
                    <li>Execute Test Cases According To Test Plan.</li>
                    <li>Verify Results Against Expected Results</li>
                    <li>Record & Report Defects Found.</li>

                  </ol>
                </div>
              </div>
            </div>
            <i class="Assurance-step-line"></i>
            <div class="Assurance_date">04</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Qualityprocess;
