import React from "react";
import "./AboutUs.css";
import mission from "../../../images/mission1.png";
import vision from "../../../images/vision.png";
import star from "../../../images/Star.png";
import eye from "../../../images/eye2.gif";
import { Parallax } from "react-parallax";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export default function AboutUs() {
  return (
    <section id="about_us">
      <div className="container">
        <center>
          <div
            className="aboutus_head mt-4"
            data-aos="zoom-in-right"
            data-aos-duration="1000"
          >
            <h1>About Us</h1>
          </div>
          <div className="aboutus_para">
            <p>
              Empowering businesses through innovative software solutions that
              drive growth and efficiency.
            </p>
          </div>
        </center>
        <div className="container">
          <div className="row our_mission_row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 mission_div">
              <div className="our_mission_head">
                <h2>Mission statement</h2>
              </div>
              <div
                className="our_mission_para"
                data-aos="zoom-in-right"
                data-aos-duration="1000"
              >
                <p>
                  At Qubitars, our mission is to deliver innovative and
                  high-quality software solutions that solve our client's
                  business challenges and drive their success. We strive to stay
                  ahead of the curve by embracing emerging technologies and
                  industry best practices while maintaining a focus on
                  user-centric design and usability. Our team of skilled and
                  passionate developers works collaboratively with our clients
                  to understand their needs and goals, and to deliver customized
                  solutions that exceed their expectations. We are committed to
                  building long-term partnerships with our clients based on
                  transparency, integrity, and mutual respect. Our ultimate goal
                  is to empower our clients to thrive in a digital world through
                  reliable, scalable, and secure software solutions.
                </p>
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div
                className="mission_img"
                data-aos="fade-up"
                data-aos-duration="1500"
              >
                <img
                  src={mission}
                  className="img-fluid growthe"
                  alt="switch"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row our_vision_row second-card vission-responsive">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-6">
              <div
                className="vision_img"
                data-aos="zoom-out-down"
                data-aos-duration="1500"
              >
                <img
                  src={eye}
                  className="img-fluid growthe"
                  alt="switch"
                  loading="lazy"
                />
              </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-6  mt-5 vision_div ">
              <div className="our_mission_head mt-2">
                <h2>Vision statement </h2>
              </div>
              <div
                className="our_mission_para"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <p>
                  Our vision is to be a leading provider of transformative
                  software solutions that enable our clients to achieve their
                  full potential. We aim to push the boundaries of what's
                  possible with technology, and to become a driving force behind
                  the digital transformation of businesses across industries. We
                  aspire to be recognized for our ability to deliver
                  game-changing solutions that are user-friendly, scalable, and
                  secure, and that leverage cutting-edge technologies such as
                  artificial intelligence, machine learning, blockchain, and the
                  internet of things. We strive to foster a culture of
                  innovation, creativity, and continuous improvement, and to
                  attract and retain the best talent in the industry. We are
                  committed to making a positive impact on the world by using
                  technology to solve complex problems and to create a more
                  sustainable, equitable, and prosperous future for all.
                </p>
              </div>
            </div>
          
          </div>
        </div>
      </div>
    </section>
  );
}
