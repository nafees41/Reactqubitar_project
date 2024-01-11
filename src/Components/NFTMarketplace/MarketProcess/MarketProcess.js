import React from "react";
import "./MarketProcess.css";

import wallet from "../../../images/NFTStaking/wallet.png";
import plan from "../../../images/NFTStaking/plan.png";
import build from "../../../images/NFTStaking/build.png";
import implement from "../../../images/NFTStaking/implement.png";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
function MarketProcess() {
  return (
    <div className="caontainer-fluid java-bg">
      <div class="container">
        <div class="section-header">
          <div className="java_heading">
            <h1>Our NFT Marketplace Development Process</h1>
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
                  <h4>Brainstorming</h4>
                </div>
                <div
                  className="java_card_desk"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <p>
                    Our team will have a brainstorming session with you to
                    analyze your vision and target audience for a customized NFT
                    development solution.
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
                  <h4>Blockchain Analysis</h4>
                </div>
                <div
                  className="java_card_desk"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <p>
                    After analyzing your expectations and vision, we do
                    extensive research to select the best-suited blockchain for
                    creating your NFT marketplace.
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
                  <h4>Design</h4>
                </div>
                <div
                  className="java_card_desk"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <p>
                    Once planning is done correctly, our creative team of
                    designers starts working on the design. We make sure to
                    provide a stellar design that can attract the audience.
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
                  <h4> Development</h4>
                </div>
                <div
                  className="java_card_desk"
                  data-aos="fade-up"
                  data-aos-duration="4000"
                >
                  With immense experience in this space, our developers start
                  coding to shape your idea into reality.
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

export default MarketProcess;
