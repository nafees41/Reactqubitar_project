import React from "react";
import "./Categories.css";
import eApp from "../../../images/MobileDevelopment/eApp.png";
import sApp from "../../../images/MobileDevelopment/sApp.png";
import rApp from "../../../images/MobileDevelopment/rApp.png";
import hApp from "../../../images/MobileDevelopment/hApp.png";
import fApp from "../../../images/MobileDevelopment/fApp.png";
import iphone from "../../../images/MobileDevelopment/iphone.png";
import android from "../../../images/MobileDevelopment/android.png";
import react from "../../../images/MobileDevelopment/react.png";
import ecommerce from "../../../images/MobileDevelopment/ecommerce.png";
import flutter from "../../../images/MobileDevelopment/flutter.png";
import service5 from "../../../images/MobileDevelopment/mobile-apps-for-education.jpg";
import service6 from "../../../images/MobileDevelopment/socialmedia.jpg";
import service7 from "../../../images/MobileDevelopment/realestate.jpg";
import service8 from "../../../images/MobileDevelopment/fintech.jpg";
import service9 from "../../../images/MobileDevelopment/ecommerce-1.png";
import service10 from "../../../images/MobileDevelopment/health.jpg";


export default function Categories() {
  return (
    <section id="categories">
      <center>
        <div className="categories_heading">
          <h1>Categories of Applications</h1>
        </div>
        <div className="categories_para">
          <p>
            We provide blockchain development services from our proficient
            experts for a wide range of applications.
          </p>
        </div>
      </center>

      <div className="container mt-5 mb-5">
        <div className="row d-flex align-items-start">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 px-4">
            <div class="tab-content" id="v-pills-tabContent">
              <div
                class="tab-pane fade show active"
                id="v-pills-home"
                role="tabpanel"
                aria-labelledby="v-pills-home-tab"
                tabindex="0"
              >
                <h1 className="categories_heading px-3">Educational App</h1>
                <p
                  className="wordpress_para"
                  data-aos="flip-right"
                  data-aos-duration="1000"
                >
                  We provide blockchain development services from our proficient
                  experts for a wide range of applications.
                </p>
                <div
                  className="wordpress_img px-3"
                  style={{ borderRadius: "20%" }}
                >
                  <img
                    src={service5}
                    style={{ borderRadius: "2%" }}
                    className="img-fluid"
                    alt="switch"
                    loading="lazy"
                  />
                </div>
              </div>
              <div
                class="tab-pane fade px-4"
                id="v-pills-profile"
                role="tabpanel"
                aria-labelledby="v-pills-profile-tab"
                tabindex="0"
              >
                <h2 className="categories_heading px-3">Social media apps</h2>
                <p className="wordpress_para">
                  We are a leading web development company that crafts digital
                  solutions with dexterity, from conceptualization to
                  deployment, data migration, API integrations, and plugin
                  development. For clients who want better business results, we
                  create high performing and easy to manage webApps.
                </p>

                <div
                  className="wordpress_img px-3"
                  style={{ borderRadius: "20%" }}
                >
                  <img
                    src={service6}
                    style={{ borderRadius: "2%" }}
                    className="img-fluid"
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
                <h2 className="categories_heading px-3">Real Estate App</h2>
                <p className="wordpress_para">
                  We are a leading web development company that crafts digital
                  solutions with dexterity, from conceptualization to
                  deployment, data migration, API integrations, and plugin
                  development. For clients who want better business results, we
                  create high performing and easy to manage webApps.
                </p>
                <div
                  className="wordpress_img px-3"
                  style={{ borderRadius: "20%" }}
                >
                  <img
                    src={service7}
                    style={{ borderRadius: "2%" }}
                    className="img-fluid"
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
                <h2 className="categories_heading px-3">Health Care</h2>
                <p className="wordpress_para">
                  We are a leading web development company that crafts digital
                  solutions with dexterity, from conceptualization to
                  deployment, data migration, API integrations, and plugin
                  development. For clients who want better business results, we
                  create high performing and easy to manage webApps.
                </p>
                <div
                  className="wordpress_img px-3"
                  style={{ borderRadius: "20%" }}
                >
                  <img
                    src={service8}
                    style={{ borderRadius: "2%" }}
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
                tabindex="0" >
                <h2 className="categories_heading px-3">Fintech</h2>
                <p className="wordpress_para">
                  We are a leading web development company that crafts digital
                  solutions with dexterity, from conceptualization to
                  deployment, data migration, API integrations, and plugin
                  development. For clients who want better business results, we
                  create high performing and easy to manage webApps.
                </p>
                <div
                  className="wordpress_img px-3"
                  style={{borderRadius:"20%"}}
                >
                  <img
                    src={service9}
                    style={{borderRadius:"2%"}}
                    className="img-fluid"
                    alt="switch"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 px-4">
            <div
              class="nav flex-column nav-pills"
              id="v-pills-tab"
              role="tablist"
              aria-orientation="vertical"
            >
              <button
                class="navcategory-link  mb-3 active p-0"
                id="v-pills-home-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-home"
                type="button"
                role="tab"
                aria-controls="v-pills-home"
                aria-selected="true"
              >
                <div className="categories_left_side">
                  <div className="educational_app">
                    <img
                      src={eApp}
                      className="img-fluid edu_app_outer"
                      alt="switch"
                      loading="lazy"
                    />
                    <span className="edu_app_para">Educational apps</span>
                  </div>
                </div>
                <hr className="w_banner_line" />
              </button>
              <button
                class="navcategory-link  mb-4 p-0"
                id="v-pills-profile-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-profile"
                type="button"
                role="tab"
                aria-controls="v-pills-profile"
                aria-selected="false"
              >
                <div className="categories_left_side">
                  <div className="educational_app">
                    <img
                      src={sApp}
                      className="img-fluid edu_app_outer"
                      alt="switch"
                      loading="lazy"
                    />
                    <span className="edu_app_para">Social media apps</span>
                  </div>
                </div>
                <hr className="w_banner_line" />
              </button>

              <button
                class="navcategory-link  mb-3 p-0"
                id="v-pills-Retail-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-Retail"
                type="button"
                role="tab"
                aria-controls="v-pills-Retail"
                aria-selected="false"
              >
                <div className="categories_left_side">
                  <div className="educational_app">
                    <img
                      src={rApp}
                      className="img-fluid edu_app_outer"
                      alt="switch"
                      loading="lazy"
                    />
                    <span className="edu_app_para">Real Estate App</span>
                  </div>
                </div>
                <hr className="w_banner_line" />
              </button>
              <button
                class="navcategory-link  mb-3 p-0"
                id="v-pills-messages-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-messages"
                type="button"
                role="tab"
                aria-controls="v-pills-messages"
                aria-selected="false"
              >
                <div className="categories_left_side">
                  <div className="educational_app">
                    <img
                      src={hApp}
                      className="img-fluid edu_app_outer"
                      alt="switch"
                      loading="lazy"
                    />
                    <span className="edu_app_para">Health Care</span>
                  </div>
                </div>
                <hr className="w_banner_line" />
              </button>
              <button
                class="navcategory-link  mb-3 p-0"
                id="v-pills-settings-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-settings"
                type="button"
                role="tab"
                aria-controls="v-pills-settings"
                aria-selected="false"
              >
                <div className="categories_left_side">
                  <div className="educational_app">
                    <img
                      src={fApp}
                      className="img-fluid edu_app_outer"
                      alt="switch"
                      loading="lazy"
                    />
                    <span className="edu_app_para">Fintech</span>
                  </div>
                </div>
                <hr className="w_banner_line" />
              </button>
              <button
                class="navcategory-link  mb-3 p-0"
                id="v-pills-settings-tab"
                data-bs-toggle="pill"
                data-bs-target="#v-pills-settings"
                type="button"
                role="tab"
                aria-controls="v-pills-settings"
                aria-selected="false"
              >
                <div className="categories_left_side">
                  <div className="educational_app">
                    <img
                      src={sApp}
                      className="img-fluid edu_app_outer"
                      alt="switch"
                      loading="lazy"
                    />
                    <span className="edu_app_para">E-Commerce</span>
                  </div>
                </div>
                <hr className="w_banner_line" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
