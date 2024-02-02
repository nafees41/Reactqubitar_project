import React from "react";
import "./Otherservices.css";
import { NavHashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import Layout from "../Home/Layout/Layout";
import OurApps from "../MobileDevelopment/OurApps/OurApps";
import BookApointment from "../Home/BookAppointment/BookApointment";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function OtherServices() {
  return (
    <section className="custom_web" id="">
      <div className="container mb-5">
        <center>
          <h4
            className="custom_heading"
            data-aos="zoom-in-right"
            data-aos-duration="1000">
            Other Services
          </h4>
        </center>
        <div className="container">
          <div className="row card-responsive d-flex justify-content-center  services_cards">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3  custom_box">
              <Link to="/web_development" className="linkstyle">
                <h3 className="third_party  card-heading mt-4">
                  Web Development
                </h3>

                <p className="customWeb_para  card-paragraph">
                  The initial phase of custom web development where the project
                  requirements and objectives are discussed and defined, laying
                  the foundation for the entire project
                </p>
              </Link>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3  custom_box">
              <Link to="/mobile_dev" className="linkstyle">
                <h3 className="third_party card-heading text-xs-center mt-4">
                  Mobile Development
                </h3>

                <p className="customWeb_para card-paragraph">
                  The phase where the website is built, including creating the
                  layout, designing the user interface, developing the website's
                  functionality, and integrating necessary third-party services.
                </p>
              </Link>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 custom_box">
              <Link to="/ui_ux_design" className="linkstyle">
                <h3 className="third_party card-heading  mt-4">
                  UI/UX Design
                </h3>

                <p className="customWeb_para card-paragraph">
                  The final phase where the website is tested thoroughly to
                  ensure it meets project requirements, including user testing,
                  browser testing, and quality assurance testing, before
                  launching the website for public access.
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row card-responsive d-flex justify-content-center custom_web_cards">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3  custom_box">
              <Link to="/nft" className="linkstyle">
                <h3 className="third_party card-heading mt-4">Web 3.0</h3>

                <p className="customWeb_para card-paragraph">
                  The initial phase of custom web development where the project
                  requirements and objectives are discussed and defined, laying
                  the foundation for the entire project
                </p>
              </Link>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 custom_box">
              <Link to="/nft_staking" className="linkstyle">
                <h3 className="third_party card-heading text-xs-center mt-4">
                  NFT Development
                </h3>

                <p className="customWeb_para card-paragraph">
                  The phase where the website is built, including creating the
                  layout, designing the user interface, developing the website's
                  functionality, and integrating necessary third-party services.
                </p>
              </Link>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 custom_box">
              <Link className="linkstyle">
                <h6 className="third_party card-heading mt-4">
                  Staking Platform Development
                </h6>

                <p className="customWeb_para card-paragraph">
                  The final phase where the website is tested thoroughly to
                  ensure it meets project requirements, including user testing,
                  browser testing, and quality assurance testing, before
                  launching the website for public access.
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row card-responsive d-flex justify-content-center custom_web_cards">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3  custom_box">
              <Link to="/nft_marketplace" className="linkstyle">
                <h3 className="third_party card-heading  mt-4">
                  NFT Marketplace
                </h3>

                <p className="customWeb_para card-paragraph">
                  The initial phase of custom web development where the project
                  requirements and objectives are discussed and defined, laying
                  the foundation for the entire project
                </p>
              </Link>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 custom_box">
              <Link to="/nft_gaming" className="linkstyle">
                <h3 className="third_party card-heading text-xs-center  mt-4">
                  NFT Game Development
                </h3>

                <p className="customWeb_para card-paragraph">
                  The phase where the website is built, including creating the
                  layout, designing the user interface, developing the website's
                  functionality, and integrating necessary third-party services.
                </p>
              </Link>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 custom_box">
              <Link to="/real_estate_development" className="linkstyle">
                <h3 className="third_party card-heading mt-4">
                  Real Estate Tokenization
                </h3>

                <p className="customWeb_para card-paragraph">
                  The final phase where the website is tested thoroughly to
                  ensure it meets project requirements, including user testing,
                  browser testing, and quality assurance testing, before
                  launching the website for public access.
                </p>
              </Link>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row card-responsive d-flex justify-content-center  custom_web_cards">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3  custom_box">
              <Link to="/ico_development" className="linkstyle">
                <h3 className="third_party card-heading mt-4">ICO Development</h3>

                <p className="customWeb_para">
                  The initial phase of custom web development where the project
                  requirements and objectives are discussed and defined, laying
                  the foundation for the entire project
                </p>
              </Link>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-3 custom_box">
              <Link to="/digital_marketing" className="linkstyle">
                <h3 className="third_party  card-heading text-xs-center mt-4">
                  Digital Marketing
                </h3>
                <p className="customWeb_para">
                  The phase where the website is built, including creating the
                  layout, designing the user interface, developing the website's
                  functionality, and integrating necessary third-party services.
                </p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OtherServices;
