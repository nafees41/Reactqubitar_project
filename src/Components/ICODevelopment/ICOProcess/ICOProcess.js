import React from "react";
import "./ICOProcess.css";

import wallet from "../../../images/NFTStaking/wallet.png";
import plan from "../../../images/NFTStaking/plan.png";
import build from "../../../images/NFTStaking/build.png";
import implement from "../../../images/NFTStaking/implement.png";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
function ICOProcess() {
  return (
    <div className="caontainer-fluid java-bg">
      <div class="container">
        <div class="section-header">
          <div className="java_heading">
            <h1>ICO Development Process</h1>
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
                  <h4> Strategy Building</h4>
                </div>
                <div
                  className="java_card_desk"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  Softtik’s team of experienced and professional developers sits
                  with our client to know his business expectations and goals to
                  devise a strategy.
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
                  <h4>Whitepaper Creation</h4>
                </div>
                <div
                  className="java_card_desk"
                  data-aos="fade-up"
                  data-aos-duration="2000"
                >
                  <p>
                    After a proper strategy building, our team of technical
                    content specialists generates a draft of whitepaper and
                    lightpaper that projects your project’s vision.
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
                  <h4>IDO Token Development & Launch</h4>
                </div>
                <div
                  className="java_card_desk"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <p>
                    Once the whitepaper is created, our highly skilled
                    developers develop an IDO token with your preferred standard
                    and technology to launch it on the IDO platform.
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

export default ICOProcess;
