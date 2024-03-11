import React from "react";
import planning from "../../../images/WebDevelopment/planning.png";
import design from "../../../images/WebDevelopment/design.png";
import qa from "../../../images/WebDevelopment/qa.png";
import deploy from "../../../images/WebDevelopment/deploy.png";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Mvpprocess.css"

AOS.init();
function Mvpprocess() {
  return (
    <div className="caontainer-fluid Mvp-bg mt-5">
      <div class="container">
        <div class="Mvp-header">
          <div className="Mvp_heading">
            <h1>MVP Builder Process</h1>
          </div>
        </div>
        <div
          className="Mvp_para"
          data-aos="zoom-in-right"
          data-aos-duration="1000"
        >
          <p>
            Our MVP Builder Processs generally involves the following steps:
          </p>
        </div>
        <div class="Mvp_steps">
          <div class="Mvp-steps-container">
            <div class="Mvp_content">
              <div className="Mvp_card">
                <div className="card_logo">
                  <img
                    src={planning}
                    className="img-fluid"
                    alt="switch"
                    loading="lazy"
                  />
                </div>
                <div className="Mvp_card_heading">
                  <h4>Define MVP Scope</h4>
                </div>
                <div
                  className="Mvp_card_desk"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <ol>
                    <li>Define The Scope & Objectives Of MVP.</li>
                    <li>Determine Key Features & Functionalities.</li>
                    <li>Ensure Lean & Manageable Development Process..</li>
                  </ol>
                </div>
              </div>
            </div>
            <i class="Mvp-step-line"></i>
            <div class="Mvp_date">01</div>
          </div>
          <div class="Mvp-steps-container">
            <div class="Mvp_content">
              <div className="Mvp_card ">
                <div className="card_logo">
                  <img
                    src={design}
                    className="img-fluid"
                    alt="switch"
                    loading="lazy"
                  />
                </div>
                <div className="Mvp_card_heading">
                  <h4>Design and Prototyping</h4>
                </div>
                <div
                  className="Mvp_card_desk"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <ol>
                    <li>Visualize User Interface & User Flow.</li>
                    <li>
                      Refining Design User Feedback & Usability Considerations.
                    </li>
                    <li>
                      Develop Clickable Prototype Simulating MVP's Core
                      Functionality.
                    </li>
                  </ol>
                </div>
              </div>
            </div>
            <i class="Mvp-step-line"></i>
            <div class="Mvp_date">02</div>
          </div>
          <div class="Mvp-steps-container">
            <div class="Mvp_content">
              <div className="java_card ">
                <div className="card_logo">
                  <img
                    src={qa}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                </div>
                <div className="Mvp_card_heading">
                  <h4>Development</h4>
                </div>
                <div
                  className="Mvp_card_desk"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <ol>
                    <li>Develop MVP's Back-End And Front-End Components.</li>
                    <li>Implement Key Features & Functionalities..</li>
                  </ol>
                </div>
              </div>
            </div>
            <i class="Mvp-step-line"></i>
            <div class="Mvp_date">03</div>
          </div>
          <div class="Mvp-steps-container">
            <div class="Mvp_content">
              <div className="Mvp_card">
                <div className="card_logo">
                  <img
                    src={deploy}
                    className="img-fluid"
                    alt="switch"
                    loading="lazy"
                  />
                </div>
                <div className="Mvp_card_heading">
                  <h4>Testing and Go Live</h4>
                </div>
                <div
                  className="Mvp_card_desk"
                  data-aos="fade-up"
                  data-aos-duration="4000"
                >
                  <ol>
                    <li>Conduct Testing & Ensure MVP Functions.</li>
                    <li>Go Live And Gather User Feedback..</li>
                  </ol>
                </div>
              </div>
            </div>
            <i class="Mvp-step-line"></i>
            <div class="date">04</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mvpprocess;
