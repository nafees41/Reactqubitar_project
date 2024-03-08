import React from "react";
import "./WordpressDev.css";
import crm4 from "../../../images/crm4.png";
import Financeandbank from "../../../images/finance.jpg";
import bank from "../../../images/WebDevelopment/bank.png";
import healthcare from "../../../images/WebDevelopment/healthcare.png";
import ecommerce from "../../../images/WebDevelopment/ecommerce.png";
import estate from "../../../images/WebDevelopment/estate.png";
import education from "../../../images/WebDevelopment/education.png";
import Finance from "../../../images/WebDevelopment/Finanace.jpg";
import Ecommerce from "../../../images/WebDevelopment/E-learning.jpg";
import Realestate from "../../../images/WebDevelopment/Realestate.jpg";
import Healthimage from "../../../images/WebDevelopment/healthimage.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();
export default function WordpressDev() {
  return (
    // data-aos="flip-down"
    <div className="container mt-5 mb-5">
      <div className="row d-flex align-items-start">
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-6 px-4">
          <div class="tab-content" id="v-pills-tabContent">
            <div
              class="tab-pane fade show active"
              id="v-pills-home"
               role="tabpanel"
             aria-labelledby="v-pills-home-tab" 
              tabindex="0">
              <h1 className="wordpress_heading p-0 Services-head">
                 Services we provide for Website Development
              </h1>
              <p
                className="wordpress_para responsive-heading"
                data-aos="flip-right"
                data-aos-duration="1000">
                We are a leading web development company that crafts digital
                solutions with dexterity, from conceptualization to deployment,
                data migration, API integrations, and plugin development. For
                clients who want better business results, we create high
                performing and easy to manage webApps.
              </p>
              <div
                className="wordpress_img px-3"
                style={{borderRadius:"20%"}}>
                <img
                  src={Healthimage}
                  style={{borderRadius:"2%"}}
                  className="img-fluid Services-image"
                  alt="switch"
                  loading="lazy"/>
              </div>
            </div>
            <div
              class="tab-pane fade px-4"
              id="v-pills-profile"
              role="tabpanel"
              aria-labelledby="v-pills-profile-tab"
              tabindex="0">
              <h2 className="wordpress_heading responsive-head">
                Finance and Banking Services
              </h2>
              <p className="wordpress_para">
                We are a leading web development company that crafts digital
                solutions with dexterity, from conceptualization to deployment,
                data migration, API integrations, and plugin development. For
                clients who want better business results, we create high
                performing and easy to manage webApps.
              </p>
              <div
                className="wordpress_img px-3"
                style={{borderRadius:"20%"}}>
                <img
                  src={Finance}
                  style={{borderRadius:"2%",height:"100%"}}
                  className="img-fluid Services-image"
                  alt="switch"
                  loading="lazy"
                />
              </div>
            </div>
            <div
              class="tab-pane fade px-4"
              id="v-pills-Retail"
              role="tabpanel"
              aria-labelledby="v-pills-Retail-tab"
              tabindex="0"
            >
              <h2 className="wordpress_heading responsive-head">
                Retail and E-commerce Services
              </h2>
              <p className="wordpress_para">
                We are a leading web development company that crafts digital
                solutions with dexterity, from conceptualization to deployment,
                data migration, API integrations, and plugin development. For
                clients who want better business results, we create high
                performing and easy to manage webApps.
              </p>
              <div className="wordpress_img" style={{ borderRadius: "20%" }}>
                <img
                  src={Ecommerce}
                  style={{ borderRadius:"2%"}}
                  className="img-fluid Services-image"
                  alt="switch"
                  loading="lazy"
                />
              </div>
            </div>
            <div
              class="tab-pane fade px-4"
              id="v-pills-messages"
              role="tabpanel"
              aria-labelledby="v-pills-messages-tab"
              tabindex="0"
            >
              <h2 className="wordpress_heading responsive-head">
                Education and E-learning Services
              </h2>
              <p className="wordpress_para">
                We are a leading web development company that crafts digital
                solutions with dexterity, from conceptualization to deployment,
                data migration, API integrations, and plugin development. For
                clients who want better business results, we create high
                performing and easy to manage webApps.
              </p>
              <div className="wordpress_img" style={{ borderRadius: "20%" }}>
                <img
                  src={crm4}
                  style={{ borderRadius:"2%"}}
                  className="img-fluid"
                  alt="switch"
                  loading="lazy"
                />
              </div>
            </div>
            <div
              class="tab-pane fade px-3"
              id="v-pills-settings"
              role="tabpanel"
              aria-labelledby="v-pills-settings-tab"
              tabindex="0"
            >
              <h2 className="wordpress_heading responsive-head">Real Estate Services</h2>
              <p className="wordpress_para">
                We are a leading web development company that crafts digital
                solutions with dexterity, from conceptualization to deployment,
                data migration, API integrations, and plugin development. For
                clients who want better business results, we create high
                performing and easy to manage webApps.
              </p>
              <div
                className="wordpress_img px-3"
                style={{borderRadius:"20%"}}
              >
                <img
                  src={Realestate}
                  style={{borderRadius:"2%"}}
                  className="img-fluid Services-image"
                  alt="switch"
                  loading="lazy"/>
              </div>
            </div>
          </div>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12  col-xl-6 px-4 Tab-right">
          <div
            class="nav flex-column nav-pills"
            id="v-pills-tab"
            role="tablist"
            aria-orientation="vertical">
            <button
              class="nav-link mb-3 active p-0"
              id="v-pills-home-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-home"
              type="button"
              role="tab"
              aria-controls="v-pills-home"
              aria-selected="true">
              <div className="main_wordpress_right">
                <div className="wordpress_right">
                  <img
                    src={healthcare}
                    className="img-fluid Services-image"
                    alt="switch"
                    loading="lazy"
                  />
                  <span className="heath_care responsive-heading">
                    Healthcare and Medical Services
                  </span>
                  <hr className="w_banner_line" />
                </div>
              </div>
            </button>
            <button
              class="nav-link mb-4 p-0"
              id="v-pills-profile-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-profile"
              type="button"
              role="tab"
              aria-controls="v-pills-profile"
              aria-selected="false">
              <div className="wordpress_right">
                <img
                  src={bank}
                  className="img-fluid"
                  alt="switch"
                  loading="lazy"
                />
                <span className="heath_care responsive-heading">Finance and Banking Services</span>
                <hr className="w_banner_line" />
              </div>
            </button>

            <button
              class="nav-link mb-3 p-0"
              id="v-pills-Retail-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-Retail"
              type="button"
              role="tab"
              aria-controls="v-pills-Retail"
              aria-selected="false"
            >
              <div className="wordpress_right">
                <img
                  src={ecommerce}
                  className="img-fluid "
                  alt="switch"
                  loading="lazy"
                />
                <span className="heath_care responsive-heading">
                  Retail and E-commerce Services
                </span>
                <hr className="w_banner_line" />
              </div>
            </button>
            <button
              class="nav-link mb-3 p-0"
              id="v-pills-messages-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-messages"
              type="button"
              role="tab"
              aria-controls="v-pills-messages"
              aria-selected="false"
            >
              <div className="wordpress_right">
                <img
                  src={education}
                  className="img-fluid "
                  alt="switch"
                  loading="lazy"
                />
                <span className="heath_care responsive-heading">
                  Education and E-learning Services
                </span>
                <hr className="w_banner_line" />
              </div>
            </button>
            <button
              class="nav-link mb-3 p-0"
              id="v-pills-settings-tab"
              data-bs-toggle="pill"
              data-bs-target="#v-pills-settings"
              type="button"
              role="tab"
              aria-controls="v-pills-settings"
              aria-selected="false"
            >
              <div className="wordpress_right">
                <img
                  src={estate}
                  className="img-fluid "
                  alt="switch"
                  loading="lazy"
                />
                <span className="heath_care responsive-heading">Real Estate Services</span>
                <hr className="w_banner_line" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}