import React from "react";
import footerImage from "../../../images/footer-image.png";
import phone from "../../../images/phone.png";
import email from "../../../images/email.png";
import location from "../../../images/location.png";
import linkedin from "../../../images/WebDevelopment/linkedin.png";
import fb from "../../../images/WebDevelopment/fb.png";
import insta from "../../../images/WebDevelopment/insta.png";
import twiter from "../../../images/WebDevelopment/twiter.png";

import "./Footer1.css";

import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";

function Footer1() {
  return (
    <div className="container-fluid ff">
      <div className="container">
        <div className="row footer_row">
          <div className="col-md-12 mt-4">
            <div
              className="container"
              style={{
                backgroundColor: "var(--primary-color)",
                borderRadius: "20px",
              }}
            >
              <div className="row text-white p-4 mt-4">
                <div className="col-md-6">
                  <h5>NewsLetter</h5>
                  <p>
                    Be the first one to know about discounts, offers and events
                  </p>
                </div>
                <div className="col-md-6">
                  <div className="input-group mt-3">
                    <input
                      style={{ backgroundColor: "#E7B183" }}
                      type="text"
                      className="form-control"
                      placeholder="Enter Email"
                      aria-label="Recipient's username"
                      aria-describedby="basic-addon2"
                    />
                    <div class="input-group-append">
                      <button
                        className="btn btn-outline-secondary"
                        type="button"
                        style={{ backgroundColor: "#1F274F", color: "white" }}
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="footer_logo mt-4">
              <img src={footerImage} className="image-fluid" alt="switch" />
            </div>

            <div className="footer_desc mt-4">
              <p>
                “Qubitars delivers innovative and high-quality software
                solutions that solve your business challenges and drive your
                success. We strive to stay ahead of the curve by embracing
                emerging technologies and industry best practices while
                maintaining a focus on user-centric design and usability. ”
              </p>
            </div>
          </div>
          <div className="col-md-3">
            <div className="list">
              <div className="list-head">
                <h4>Services</h4>
              </div>

           <NavHashLink to="/ui_ux_design" > <div className="list-items mt-5">UI/UX Design</div></NavHashLink>   
             <NavHashLink to="/web_development"> <div className="list-items">Web Development</div></NavHashLink>
             <NavHashLink to="/mobile_dev"> <div className="list-items">Mobile Development</div></NavHashLink>
             <NavHashLink to="/nft"> <div className="list-items">NFT Development</div></NavHashLink>
              <div className="list-items">Software Quality</div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="list">
              <div className="list-head">

                <h4>Quick Links</h4>
              </div>
           <NavHashLink to="/#home_banner"> <div className="list-items mt-5">Home</div></NavHashLink>
             <NavHashLink to="/#about_us"> <div className="list-items">About</div></NavHashLink>
             <NavHashLink to="/#services"> <div className="list-items">Services</div></NavHashLink>
             <NavHashLink to="/"> <div className="list-items">Career</div></NavHashLink>
             <NavHashLink to="/blog"><div className="list-items">Blogs</div></NavHashLink> 
            </div>
          </div>
          <div className="col-md-3">
            <div className="list">
              <div className="list-head">
                <h4>Contact Info</h4>
              </div>
              <div className="list-items  mt-5 phone  ">
                <img
                  src={phone}
                  style={{ marginLeft: "-10px" }}
                  className="image-fluid"
                  alt="switch"
                />
               <a href="tel:+923026469153" target="_blank"> <div className="phone-desc dd_desk"  >+92 302 6469153</div></a>
              </div>
              <div className="list-items email mt-5">
                <img src={email} className="image-fluid" alt="switch" />
                <a href="mailto:info@qubitars.com">  <div className="email-desc dd_desk">info@qubitars.com</div></a>
              </div>
              <div className="list-items location mt-5">
                <img src={location} className="image-fluid" alt="switch" />
                <div className="location-desc dd_desk">Mumtaz Market, Gujranwala, Pakistan</div>
              </div>
            </div>
          </div>
        </div>

        <hr className="ll" />
        <div className="row">
          <div className="col-md-6 mt-3">
            <div className="copy-right dd_desk">
              Copyright © 2023 Qubitars. All rights reserved 
            </div>
          </div>
          <div className="col-md-6  ">
            <div className="footer_icons">
              <div className="footer_icon_space">
                <a href="https://www.linkedin.com/company/qubitars/" target="_blank">
                <img src={linkedin} style={{borderRadius:"8px"}} className="image-fluid " alt="switch" />

                </a>

              </div>
              <div className="footer_icon_space">
                <a href="https://www.facebook.com/qubitars" target="_blank">
                <img src={fb} style={{borderRadius:"8px"}} className="image-fluid " alt="switch" />

                </a>

              </div>
              <div className="footer_icon_space">
                <a href="https://www.instagram.com/qubitars/" target="_blank">
                <img src={insta} style={{borderRadius:"8px"}} className="image-fluid " alt="switch" />

                </a>

              </div>
              <div className="footer_icon_space">
                <a href="https://twitter.com/Qubitars" target="_blank">
                <img src={twiter} style={{borderRadius:"8px"}} className="image-fluid " alt="switch" />

                </a>

              </div>
           
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer1;
