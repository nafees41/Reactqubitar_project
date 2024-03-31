import React from "react";

import planning from "../../../images/WebDevelopment/planning.png";
import design from "../../../images/WebDevelopment/design.png";
import qa from "../../../images/WebDevelopment/qa.png";
import deploy from "../../../images/WebDevelopment/deploy.png";
import AOS from "aos";
import "aos/dist/aos.css";
import "./AIdevelopmentprocess.css"

AOS.init();
function AIdevelopmentprocess() {
  return (
    <div className="caontainer-fluid java-bg mt-5">
      <div class="container">
        <div class="section-header">
          <div className="java_heading">
            <h1>AI  Development Process Guide</h1>
          </div>
        </div>
        <div
          className="java_para"
          data-aos="zoom-in-right"
          data-aos-duration="1000">
          <p>
            Our  AI  Development Process Guide  generally involves the following steps:
          </p>
        </div>
        <div class="steps">
          <div class="steps-container">
            <div class="content">
              <div className="java_card ">
                <div className="card_logo">
                  <img
                    src={planning}
                    className="img-fluid"
                    alt="switch"
                    loading="lazy"
                  />
                </div>
                <div className="java_card_heading">
                  <h4>Data-Driven Insights</h4>
                </div>
                <div
                  className="java_card_desk"
                  data-aos="fade-up"
                  data-aos-duration="1000">
                  <ol>
                    <li>Extract Insights From Data.   </li>
                    <li>Use Machine Learning For Predictive Analytics.</li>
                    <li>Support Data-Based Decision-Making</li>
                  </ol>
                </div>
              </div>
            </div>
            <i class="step-line"></i>
            <div class="date">01</div>
          </div>
          <div class="steps-container">
            <div class="content">
              <div className="java_card">
                <div className="card_logo">
                  <img
                    src={design}
                    className="img-fluid"
                    alt="switch"
                    loading="lazy"
                  />
                </div>
                <div className="java_card_heading">
                  <h4>IOT Connectivity</h4>
                </div>
                <div
                  className="java_card_desk "
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                 <ol>
                  <li>Connect IOT Devices.</li>
                  <li>Enable Real-Time Data Exchange.</li>
                  <li>Enhance Automation & Monitoring.</li>
                 </ol>
                </div>
              </div>
            </div>
            <i class="step-line"></i>
            <div class="date">02</div>
          </div>
          <div class="steps-container">
            <div class="content">
              <div className="java_card">
                <div className="card_logo">
                  <img
                    src={qa}
                    className="img-fluid"
                    alt="switch"
                    loading="lazy"
                  />
                </div>
                <div className="java_card_heading">
                  <h4>Transparent Blockchain</h4>
                </div>
                <div
                  className="java_card_desk"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                 <ol>
                  <li>Ensure Data Integrity With Blockchain.</li>
                  <li>Secure & Authenticate Transactions.</li>
                  <li>Foster Trust & Accountability.</li>

                 </ol>
                </div>
              </div>
            </div>
            <i class="step-line"></i>
            <div class="date">03</div>
          </div>
          <div class="steps-container">
            <div class="content">
              <div className="java_card">
                <div className="card_logo">
                  <img
                    src={deploy}
                    className="img-fluid"
                    alt="switch"
                    loading="lazy"
                  />
                </div>
                <div className="java_card_heading">
                  <h4>Immersive Ar/Vr</h4>
                </div>
                <div
                  className="java_card_desk"
                  data-aos="fade-up"
                  data-aos-duration="4000"
                >
                  <ol>
                    <li>Develop Ar/Vr Experiences.</li>
                    <li>Enhance Training & Simulations.</li>
                  <li>Create Engaging User Interfaces.</li>
                  </ol>
                </div>
              </div>
            </div>
            <i class="step-line"></i>
            <div class="date">04</div>
          </div>
          <div class="steps-container">
            <div class="content">
              <div className="java_card">
                <div className="card_logo">
                  <img
                    src={qa}
                    className="img-fluid"
                    alt="switch"
                    loading="lazy"
                  />
                </div>
                <div className="java_card_heading">
                  <h4>Scalable Cloud Solutions</h4>
                </div>
                <div
                  className="java_card_desk"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
              <ol>
                <li>Offer Cloud Infrastructure For AI.</li>
                <li>Scale Resources As Needed.</li>
                <li>Ensure High Availability & Performance.</li>
              </ol>
                </div>
              </div>
            </div>
            <i class="step-line"></i>
            <div class="date">05</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AIdevelopmentprocess;
