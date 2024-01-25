import React from "react";
import "./WebProcess.css";

import planning from "../../../images/WebDevelopment/planning.png";
import design from "../../../images/WebDevelopment/design.png";
import qa from "../../../images/WebDevelopment/qa.png";
import deploy from "../../../images/WebDevelopment/deploy.png";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
function JavaDev() {
  return (
    <div className="caontainer-fluid java-bg">
      <div class="container">
        <div class="section-header">
          <div className="java_heading">
            <h1>Web Application Development Process</h1>
          </div>
        </div>
        <div
          className="java_para"
          data-aos="zoom-in-right"
          data-aos-duration="1000"
        >
          <p>
            Our web development process generally involves the following steps:{" "}
          </p>
        </div>
        <div class="steps">
          <div class="steps-container">
            <div class="content">
              <div className="java_card">
                <div className="card_logo">
                  <img
                    src={planning}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                </div>
                <div className="java_card_heading">
                  <h4>Planning and Analysis</h4>
                </div>
                <div
                  className="java_card_desk"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <p>
                    {" "}
                    This phase includes defining the project's requirements,
                    goals, and objectives. It involves identifying the target
                    audience, selecting the appropriate technologies, and
                    creating a roadmap for the project.
                  </p>
                </div>
              </div>
            </div>
            <i class="step-line"></i>
            <div class="date">01</div>
          </div>
          <div class="steps-container">
            <div class="content">
              <div className="java_card ">
                <div className="card_logo">
                  <img
                    src={design}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                </div>
                <div className="java_card_heading">
                  <h4>Design and Development</h4>
                </div>
                <div
                  className="java_card_desk "
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <p>
                    This phase involves designing the website's layout, user
                    interface, and functionality. It includes creating the
                    website's content, integrating third-party services, and
                    building custom features and functionality.
                  </p>
                </div>
              </div>
            </div>
            <i class="step-line"></i>
            <div class="date">02</div>
          </div>
          <div class="steps-container">
            <div class="content">
              <div className="java_card ">
                <div className="card_logo">
                  <img
                    src={qa}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                </div>
                <div className="java_card_heading">
                  <h4>Testing and Quality Assurance</h4>
                </div>
                <div
                  className="java_card_desk"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <p>
                    This phase includes testing the website for bugs, errors,
                    and other issues. It involves user testing, functionality
                    testing, and cross-browser testing, ensuring that the
                    website is compatible with all major web browsers.
                  </p>
                </div>
              </div>
            </div>
            <i class="step-line"></i>
            <div class="date">03</div>
          </div>
          <div class="steps-container">
            <div class="content">
              <div className="java_card ">
                <div className="card_logo">
                  <img
                    src={deploy}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                </div>
                <div className="java_card_heading">
                  <h4>Deployment and Maintenance</h4>
                </div>
                <div
                  className="java_card_desk"
                  data-aos="fade-up"
                  data-aos-duration="4000"
                >
                  <p>
                    This phase involves deploying the website to a live server
                    and making it available to the public. It includes ongoing
                    maintenance and support, such as updating content, fixing
                    bugs, and optimizing the website's performance.
                  </p>
                </div>
              </div>
            </div>
            <i class="step-line"></i>
            <div class="date">04</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JavaDev;
