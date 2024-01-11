import React from "react";
import "./StakingProcess.css";

import wallet from "../../../images/NFTStaking/wallet.png";
import plan from "../../../images/NFTStaking/plan.png";
import build from "../../../images/NFTStaking/build.png";
import implement from "../../../images/NFTStaking/implement.png";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
function StakingProcess() {
  return (
    <div className="caontainer-fluid java-bg">
      <div class="container">
        <div class="section-header">
          <div className="java_heading">
            <h1>Our NFT Staking Development Process</h1>
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
                  <h4>Decentralize banking wallet</h4>
                </div>
                <div className="java_card_desk" data-aos="fade-up" data-aos-duration="1000">
                  <p>
                    We collaborate with our clients to understand their needs
                    and design a blockchain framework that meets their needs.
                    This isn't just about sharing the benefits of our product
                    with you; we'll also look into how it can help solve some
                    common pain points in novel ways.
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
                  <h4>Organize and plan</h4>
                </div>
                <div className="java_card_desk" data-aos="fade-up" data-aos-duration="2000">
                  <p>
                    Our services range from assessing organizational readiness
                    to anticipating business impacts and developing go-to-market
                    strategies to ensure your company's success in the new
                    economy. We have a team that can deliver work on specified
                    timelines.
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
                  <h4>Build</h4>
                </div>
                <div className="java_card_desk" data-aos="fade-up" data-aos-duration="3000">
                  <p>
                    A well-designed plan is efficient and can also significantly
                    impact the company. We want to engage stakeholders so they
                    can build solutions that are ready for deployment. We
                    conduct market research, make strategies, and collect
                    information to gain desired results.
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
                  <h4> Implement</h4>
                </div>
                <div className="java_card_desk" data-aos="fade-up" data-aos-duration="4000">
                  The last part of the process is implementing the collected
                  data and strategies to provide clients with their desired
                  results. We have a dedicated team that remains in touch with
                  the clients to provide support and maintenance services from
                  the start to the end.
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

export default StakingProcess;
