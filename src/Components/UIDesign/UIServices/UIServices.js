import React from "react";
import "./UIServices.css";

import ui1 from "../../../images/UIUXDesign/ui1.png";
import ui2 from "../../../images/UIUXDesign/ui2.png";
import ui3 from "../../../images/UIUXDesign/ui3.png";
import ui4 from "../../../images/UIUXDesign/ui4.png";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export default function UIServices() {
  return (
    <div className="container" >
      <div className="benefits_head">
        <h1 className="bfh" >UI/UX Design Services At A Glance</h1>
      </div>
      <div className="benefits_para">
        <p>
          Qubitars exclusive UI/UX Designing Services are the ultimate
          boosters that turn concepts into functional products. We read your
          mind before you share your idea!
        </p>
      </div>
      <div className="row mt-5">
        <div className="col-md-3 benefits_card_align">
          <div className="benefits_card">
            <div className="benefits_card_logo">
              <img
                src={ui1}
                className="img-fluid "
                alt="switch"
                loading="lazy"
              />
            </div>
            <div className="benefits_card_head">
              <h4>Mobile App UI/UX Design</h4>
            </div>
            <div className="benefits_card_para" data-aos="fade-up" data-aos-duration="1000">
              <p>
                We offer Mobile App UI/UX Design services that create visually
                appealing and intuitive experiences optimized for various
                devices and platforms, ensuring a seamless user experience.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 benefits_card_align">
          <div className="benefits_card">
            <div className="benefits_card_logo">
              <img
                src={ui2}
                className="img-fluid "
                alt="switch"
                loading="lazy"
              />
            </div>
            <div className="benefits_card_head">
              <h4>Web UI/UX Design</h4>
            </div>
            <div className="benefits_card_para" data-aos="fade-up" data-aos-duration="2000">
              <p>
                We offer Web UI/UX Design services that create visually
                appealing and intuitive experiences optimized for various
                devices and platforms, ensuring a seamless user experience.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 benefits_card_align">
          <div className="benefits_card">
            <div className="benefits_card_logo">
              <img
                src={ui3}
                className="img-fluid "
                alt="switch"
                loading="lazy"
              />
            </div>
            <div className="benefits_card_head">
              <h4>UI/UX Brand Identity </h4>
            </div>
            <div className="benefits_card_para" data-aos="fade-up" data-aos-duration="3000">
              <p>
                We offer UI/UX Brand Identity services that create consistent
                and memorable brand images across digital platforms, designed to
                reflect your brand.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-3 benefits_card_align">
          <div className="benefits_card">
            <div className="benefits_card_logo">
              <img
                src={ui4}
                className="img-fluid "
                alt="switch"
                loading="lazy"
              />
            </div>
            <div className="benefits_card_head">
              <h4>HCI Design</h4>
            </div>
            <div className="benefits_card_para">
              <p>
                We offer HCI Design services that create intuitive and efficient
                user interfaces optimized for human-computer interaction,
                designed to minimize errors and maximize productivity through
                user research and testing.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
