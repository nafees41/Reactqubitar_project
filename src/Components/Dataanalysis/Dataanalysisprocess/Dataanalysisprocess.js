import React from "react";
import planning from "../../../images/WebDevelopment/planning.png";
import design from "../../../images/WebDevelopment/design.png";
import qa from "../../../images/WebDevelopment/qa.png";
import deploy from "../../../images/WebDevelopment/deploy.png";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Dataanalysisprocess.css"
AOS.init();
function Dataanalysisprocess() {
  return (
    <div className="caontainer-fluid java-bg mt-5">
      <div class="container">
        <div class="section-header">
          <div className="java_heading">
            <h1>Data Analytics Process</h1>
          </div>
        </div>
        <div
             className="java_para"
          data-aos="zoom-in-right"
          data-aos-duration="1000">
          <p>
            Our  Data Analytics Processs generally involves the following steps:
          </p>
        </div>
        <div  class="steps">
          <div class="steps-container">
            <div class="content">
              <div className="java_card">
                <div className="card_logo">
                  <img
                    src={planning}
                    className="img-fluid"
                    alt="switch"
                    loading="lazy"
                  />
                </div>
                <div className="java_card_heading">
                  <h4>Data-Driven Strategy</h4>
                </div>
                <div
                  className="java_card_desk"
                  data-aos="fade-up"
                  data-aos-duration="1000">
                <ol>
              <li>Formulate Strategies Based On Data.</li>
              <li>Align Business Goals With Insights.</li>
              <li>Drive Decision-Making With Data.</li>
        

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
                  <h4>Data Collection & Integration</h4>
                </div>
                <div
                  className="java_card_desk"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                     <ol>
              <li>Gather Data From Various Sources.</li>
              <li>Ensure Seamless Integration.</li>
              <li>Create A Unified Data Repository.</li>
        

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
                <div className="Data_logo">
                  <img
                    src={qa}
                    className="img-fluid"
                    alt="switch"
                    loading="lazy"
                  />
                </div>
                <div className="java_card_heading">
                  <h4>Insight Unveiling</h4>
                </div>
                <div
                  className="java_card_desk"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >

                     <ol>
              <li>Analyze & Interpret Data.</li>
              <li>Extract Valuable Insights..</li>
              <li>Identify Trends & Patterns.</li>
        

             </ol>
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
                  <h4>Visualized Data Impact</h4>
                </div>
                <div
                  className="java_card_desk"
                  data-aos="fade-up"
                  data-aos-duration="4000"
                >
                          <ol>
              <li>Present Data Through Visualizations.</li>
              <li>Enhance Data Comprehension.</li>
              <li>Facilitate Informed Decisions.</li>
        

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
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                </div>
                <div className="java_card_heading">
                  <h4>Continuous Optimization</h4>
                </div>
                <div
                  className="java_card_desk"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                        <ol>
              <li>Improve Data Analytics Processes.</li>
              <li>Refine Data Collection Methods.</li>
              <li>Adapt To Changing Data Requirements.</li>
        

             </ol>
                </div>
              </div>
            </div>
            <i class="step-line"></i>
            <div class="date">05</div>
          </div>
          <div class="steps-container">
            <div class="content">
              <div className="java_card ">
                <div className="card_logo">
                  <img
                    src={deploy}
                    className="img-fluid"
                    alt="switch"
                    loading="lazy"
                  />
                </div>
                <div className="java_card_heading">
                  <h4>Analytics-Infused Success</h4>
                </div>
                <div
                  className="java_card_desk"
                  data-aos="fade-up"
                  data-aos-duration="4000"
                >
                            <ol>
              <li>Harness The Power Of Analytics.</li>
              <li>Drive Business Success Through Insights.</li>
              <li>Achieve Data-Driven Excellence.</li>
        

             </ol>
                </div>
              </div>
            </div>
                  className="_card_desk"
            <i class="step-line"></i>
            <div class="date">06</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dataanalysisprocess;
