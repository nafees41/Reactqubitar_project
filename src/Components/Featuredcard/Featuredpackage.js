import React from "react";
import Tilt from "react-parallax-tilt";
import { NavHashLink } from "react-router-hash-link";
import { Link } from "react-router-dom";
import "./Featuredpackage.css";

const Featuredpackage = () => {
  return (
    <div className="container featured_card pb-5" id="featuedcard">
      <div className="row m-0  d-flex align-items-center justify-content-center">
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
          <Tilt className="mt-5">
            <NavHashLink className="linkstyle" to="/#bookappointment">
              <div className="featured_card-page">
                <div className="services_cards_logo">
                  <div className="featured_card_head  mt-3">
                    <h4 className="featured_head"> Website Basic package</h4>
                    <h3 className="featured_subhead">$ 150.</h3>
                    <h6 className="featured_childhead">
                  Single page complete Mobile friendly Wordpress website.Best for personal
                  or portfilio website
                    </h6>
                  </div>
                  <div className="featured_para" data-aos-duration="1000">
                    <ul>
                      <li aria-current="true">Finctional Wordpress Website</li>
                      <li>6 pages</li>
                      <li> Responsive Design</li>
                      <li>Content Upload</li>
                      <li>45 products</li>
                      <li> speed optimization</li>

                      <li>Hosting setup</li>
                      <li>Social media Icons</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <Link className="linkstyle" to="/#bookappointment">
                    <button class="Featured_card_more">Buy Now</button>
                  </Link>
                </div>
              </div>
            </NavHashLink>
          </Tilt>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
          <Tilt className="mt-5">
            <NavHashLink className="linkstyle" to="/#bookappointment">
              <div className="featured_card-page">
                <div className="services_cards_logo">
                  <div className="featured_card_head-1 mt-3">
                    <h4 className="featured_head">Website Standard package</h4>
                    <h3 className="featured_subhead">$ 250.</h3>
                    <h6  className="featured_childhead">
                      Upto 5 pages complete Wordpress website with essential plugins
                       + basic Seo best for Business+Blog
                    </h6>
                  </div>
                  <div
                    className="featured_para"
                    data-aos="zoom-out-down"
                    data-aos-duration="1000"
                  >
                    <ul>
                      <li aria-current="true">Finctional Website</li>
                      <li>12 pages</li>
                      <li> Responsive Design</li>
                      <li>Content Upload</li>
                      <li> 8 plugins/extensions </li>
                      <li> E-commerce Functionality</li>
                      <li>20 products</li>
                      <li>Hosting setup</li>
                      <li>Social media Icons</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <Link className="linkstyle" to="/#bookappointment">
                    <button class="Featured_card_more">Buy Now</button>
                  </Link>
                </div>
              </div>
            </NavHashLink>
          </Tilt>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
          <Tilt className="mt-5">
            <NavHashLink className="linkstyle" to="/#bookappointment">
              <div className="featured_card-page">
                <div className="services_cards_logo">
                  <div className="featured_card_head-1 mt-3">
                    <h4 className="featured_head"> Website Premium Package</h4>
                    <h3 className="featured_subhead"> $ 400.</h3>
                    <h6 className="featured_childhead">
                      complete Wordpress website with Premium theme 
                       + e-commerce along with full customization +Basic SEO
                    </h6>
                  </div>
                  <div
                    className="featured_para"
                    data-aos="zoom-out-down"
                    data-aos-duration="1000"
                  >
                    <ul>
                      <li aria-current="true">Finctional Website</li>
                      <li>18 pages</li>
                      <li> Responsive Design</li>
                      <li>Content Upload</li>
                      <li> 8 plugins/extensions </li>
                      <li> E-commerce Functionality</li>
                      <li>45 products</li>
                      <li> payment processing</li>
                      <li> speed optimization</li>
                      <li>Hosting setup</li>
                      <li>Social media Icons</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <Link className="linkstyle" to="/#bookappointment">
                    <button class="Featured_card_more">Buy Now</button>
                  </Link>
                </div>
              </div>
            </NavHashLink>
          </Tilt>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
          <Tilt className="mt-5">
            <NavHashLink className="linkstyle" to="/#bookappointment">
              <div className="featured_card-page">
                <div className="services_cards_logo">
                  <div className="featured_card_head  mt-3">
                    <h4 className="featured_head"> Mobile App basic package</h4>
                    <h3 className="featured_subhead">$ 550.</h3>
                  </div>
                  <div className="featured_para" data-aos-duration="1000">
                    <ul>
                      <li aria-current="true">Finctional App</li>
                      <li>2 Opearting system</li>
                      <li> APP ICON</li>
                      <li>SPLASH SCREEN</li>
                      <li> SOURCE CODE </li>
                      <li> E-commerce Functionality</li>
                      <li>UP TO 8 SCREENS</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <Link className="linkstyle" to="/#bookappointment">
                    <button class="Featured_card_more">Buy Now</button>
                  </Link>
                </div>
              </div>
            </NavHashLink>
          </Tilt>
        </div>
        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
          <Tilt className="mt-5">
            <NavHashLink className="linkstyle" to="/#bookappointment">
              <div className="featured_card-page">
                <div className="services_cards_logo">
                  <div className="featured_card_head-1 mt-3">
                    <h4 className="featured_head">
                      {" "}
                      Mobile App Standard package{" "}
                    </h4>
                    <h3 className="featured_subhead">$ 950.</h3>
                  </div>
                  <div
                    className="featured_para"
                    data-aos="zoom-out-down"
                    data-aos-duration="1000"
                  >
                    <ul>
                      <li aria-current="true">Finctional App</li>
                      <li aria-current="true">App Submission</li>
                      <li>2 Opearting system</li>
                      <li> APP ICON</li>
                      <li>SPLASH SCREEN</li>
                      <li> SOURCE CODE </li>
                      <li> ADD network integration</li>
                      <li>UP TO 15 SCREENS</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <Link className="linkstyle" to="/#bookappointment">
                    <button class="Featured_card_more">Buy Now</button>
                  </Link>
                </div>
              </div>
            </NavHashLink>
          </Tilt>
        </div>

        <div className="col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-4">
          <Tilt className="mt-5">
            <NavHashLink className="linkstyle" to="/#bookappointment">
              <div className="featured_card-page">
                <div className="services_cards_logo">
                  <div className="featured_card_head-1 mt-3">
                    <h4 className="featured_head">
                      {" "}
                      Mobile App Premium package{" "}
                    </h4>
                    <h3 className="featured_subhead"> $ 1500.</h3>
                  </div>
                  <div
                    className="featured_para"
                    data-aos="zoom-out-down"
                    data-aos-duration="1000"
                  >
                    <ul>
                      <li aria-current="true">Finctional App</li>
                      <li aria-current="true">App Submission</li>
                      <li>2 Opearting system</li>
                      <li> APP ICON</li>
                      <li>SPLASH SCREEN</li>
                      <li> SOURCE CODE </li>
                      <li> ADD network integration</li>
                      <li>UP TO 30 SCREENS</li>
                    </ul>
                  </div>
                </div>
                <div>
                  <Link className="linkstyle" to="/#bookappointment">
                    <button class="Featured_card_more">Buy Now</button>
                  </Link>
                </div>
              </div>
            </NavHashLink>
          </Tilt>
        </div>
      </div>
    </div>
  );
};

export default Featuredpackage;
