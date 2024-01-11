import React from "react";
import "./RealEstateProcess.css";

import wallet from "../../../images/NFTStaking/wallet.png";
import plan from "../../../images/NFTStaking/plan.png";
import build from "../../../images/NFTStaking/build.png";
import implement from "../../../images/NFTStaking/implement.png";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
function RealEstateProcess() {
  return (
    <div className="caontainer-fluid java-bg">
      <div class="container">
        <div class="section-header">
          <div className="java_heading">
            <h1>Our NFT Real Estate Development Process</h1>
          </div>
        </div>
        <div className="java_para">
          {/* <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation venia
                    </p> */}
        </div>
        <div class="steps">
          <div class="steps-container">
            <div class="content">
              <div className="java_card ">
                <div className="card_logo">
                  <img
                    src={wallet}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                </div>
                <div className="java_card_heading">
                  <h4>Business Plan & Requirements</h4>
                </div>
                <div
                  className="java_card_desk"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <p>
                    The first plan consists of assessing the client’s business
                    goal and expectations. Our experts suggest the latest
                    technology in the sector after analyzing your business
                    ambitions and requirements.
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
                    src={plan}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                </div>
                <div className="java_card_heading">
                  <h4>Smart Contracts</h4>
                </div>
                <div
                  className="java_card_desk"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <p>
                    The next step of the real estate tokenization platform
                    development includes developing and integrating smart
                    contracts. The Smart contract automates the whole process
                    for the transparent activity.
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
                    src={build}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                </div>
                <div className="java_card_heading">
                  <h4>Website Development</h4>
                </div>
                <div
                  className="java_card_desk"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <p>
                    This development phase includes creating materials like a
                    whitepaper, light paper, one-pager, etc. Our professional
                    technical writers generate content that reflects your
                    business vision and goals.
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
                    src={implement}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                </div>
                <div className="java_card_heading">
                  <h4> Platform Development</h4>
                </div>
                <div
                  className="java_card_desk"
                  data-aos="fade-up"
                  data-aos-duration="4000"
                >
                  Our knowledgeable and experienced web designers and developers
                  get to work to build feature-rich, secure, and engaging
                  websites for tokenization platforms. UI/UX is a priority of
                  this particular task.{" "}
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

export default RealEstateProcess;
