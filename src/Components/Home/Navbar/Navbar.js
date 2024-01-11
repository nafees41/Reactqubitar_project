/** @format */

import React, { useEffect, useState } from "react";
import Wrapper from "./Navbar.styled";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { NavHashLink } from "react-router-hash-link";
import Logo from "../../../images/Logo.png";

import whatsapp from "../../../images/whatsapp.png";
import skyp from "../../../images/skyp.png";
import linkedin from "../../../images/linkedin.png";
import navarrow from "../../../images/navarrow.png";

import "./Navbar.css";



function Navbar() {
  const [mobileMenu, setMobileMenu] = useState(false);
  const [hidetop, sethidetop] = useState(false);
  // window resize hook
  useEffect(() => {
    // window size hook for sidenav
    function checkScreenSize() {
      if (window.innerWidth > 992) {
        setMobileMenu(false);
      }
    }
    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, [setMobileMenu]);

  // for mobile sidenav display
  useEffect(() => {
    const navContainer = document.querySelector(".nav-link-container");
    if (mobileMenu) {
      navContainer.style.height = 100 + "%";
    } else {
      navContainer.style.height = 0 + "px";
    }
  }, [mobileMenu]);

  // scroll function
  useEffect(() => {
    let navigation = document.querySelector("header");
    window.addEventListener("scroll", scrollFunc);

    function scrollFunc() {
      if (window.innerWidth) {
        if (
          document.body.scrollTop > 80 ||
          document.documentElement.scrollTop > 80
        ) {
          navigation.style.background = " #290b31";
          navigation.style.marginTop = 0 + "px";
        } else {
          navigation.style.background = "transparent";
          navigation.style.marginTop = 70 + "px";
        }
      } else {
        navigation.style.background = "#030b21";
      }
    }
  }, []);

  // scroll with offset
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -80;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };



  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;


    // const mediaQuery = window.matchMedia('(max-width: 768px)');

    if (window.innerWidth < 768 && prevScrollpos < 50) {
      document.getElementById("navWaper").style.top = '-10px';
    }
    else {
      document.getElementById("navWaper").style.top = '-95px';
      document.getElementById("navWaper").style.transition = ' all 1s ease';

      prevScrollpos = currentScrollPos;

    }

    if (prevScrollpos < 50) {
      document.getElementById("navWaper").style.top = '-10px';
    } else {


      document.getElementById("navWaper").style.top = '-75px';
      document.getElementById("navWaper").style.transition = ' all 1s ease';
    }
    prevScrollpos = currentScrollPos;
  }


  return (
    <Wrapper id="navWaper">

      <div className="container " >


        <div className="row">
          <div className="col-md-12 ">
            <div className="nav-logo ">
              <NavHashLink to="/">
                <img src={Logo} className="img-fluid " alt="logo" />
              </NavHashLink>
            </div>{" "}
            <div className="nav-link-container">
              <ul className="menu">
                <li className="navLink">
                  <NavHashLink
                    to="/"
                    scroll={(el) => scrollWithOffset(el)}
                    onClick={() => {
                      setMobileMenu(false);
                    }}>
                    Home
                  </NavHashLink>{" "}
                </li>
                <li className="navLink">
                  <NavHashLink
                  >
                    <ul class="menu">
                      <li class="dropdown dropdown-5">
                        <div className="iconDrop">
                          <div className="dropText"> Services</div>
                          <div className="icon">
                            <Icon icon="bxs:down-arrow" style={{ marginBottom: '4px' }} />
                          </div>
                        </div>
                        <ul class="dropdown_menu dropdown_menu-5">

                          <NavHashLink to='/web_development'>
                            <li class="dropdown_item-1">

                              Web Development


                            </li>
                          </NavHashLink>
                          <NavHashLink to='/mobile_dev'>
                            <li class="dropdown_item-2">

                              Mobile Development

                            </li>
                          </NavHashLink>
                          <NavHashLink to='/ui_ux_design'>

                            <li class="dropdown_item-3">

                              UI/UX Design

                            </li>
                          </NavHashLink>
                          <NavHashLink to='/digital_marketing'>

                            <li class="dropdown_item-4">

                              Digital Marketing

                            </li>
                          </NavHashLink>

                          {/* <li class="dropdown_item-5">
                            Q/A
                          </li> */}
                        </ul>
                      </li>
                    </ul>
                  </NavHashLink>
                </li>
                <li className="navLink">
                  <NavHashLink
                  >
                    <ul class="menu">
                      <li class="dropdown dropdown-5">
                        <div className="iconDrop">
                          <div className="dropText"> Web 3.0</div>
                          <div className="icon">
                            <Icon icon="bxs:down-arrow" style={{ marginBottom: '4px' }} />
                          </div>
                        </div>
                        <ul class="dropdown_menu dropdown_menu-5 ">

                          <NavHashLink to='/nft'>
                            <li class=" dropdown_item-1 ">



                              NFT Development


                            </li>
                          </NavHashLink>
                          <NavHashLink to='/nft_staking'>
                            <li class="dropdown_item-1">

                            Staking Platform Development

                            </li>
                          </NavHashLink>
                          <NavHashLink to='/nft_marketplace'>
                            <li class="dropdown_item-2">

                              NFT Marketplace

                            </li>
                          </NavHashLink>

                          <NavHashLink to='/nft_gaming'>
                            <li class="dropdown_item-3">

                            NFT Game Development

                            </li>
                          </NavHashLink>
                          <NavHashLink to='/real_estate_development'>
                            <li class="dropdown_item-4">

                            Real Estate Tokenization


                            </li>
                          </NavHashLink>
                          {/* <NavHashLink to='/token_development'>
                            <li class="dropdown_item-5">

                            Tokenomics Development


                            </li>
                          </NavHashLink> */}
                          <NavHashLink to='/ico_development'>
                            <li class="dropdown_item-6">

                              ICO Development

                            </li>
                          </NavHashLink>
                         


                        </ul>
                      </li>
                    </ul>
                  </NavHashLink>
                </li>






                <li className="navLink">
                  <NavHashLink
                    to='/portfolio'
                    scroll={(el) => scrollWithOffset(el)}
                    onClick={() => {
                      setMobileMenu(false);
                    }}>
                    Portfolio

                  </NavHashLink>
                </li>

                {/* <li className="navLink">
                  <NavHashLink
                    to='/blog'
                    scroll={(el) => scrollWithOffset(el)}
                    onClick={() => {
                      setMobileMenu(false);
                    }}>
                    Careers
                  </NavHashLink>
                </li> */}

                <li className="navLink">
                  <NavHashLink
                    to='/blog'
                    scroll={(el) => scrollWithOffset(el)}
                    onClick={() => {
                      setMobileMenu(false);
                    }}>
                    Blogs
                  </NavHashLink>
                </li>
                <li className="nav-button">
                  <li>
                    <NavHashLink
                      to="/#bookappointment"
                      smooth
                      scroll={(el) => scrollWithOffset(el)}
                      onClick={() => {
                        setMobileMenu(false);
                      }}>
                      {/* Contact Us */}

                      <div class="center">
                        <span data-attr="CONTACT " style={{paddingRight:'30px'}}>Contact</span>
                        <span data-attr="US">US</span>
                      </div>
                    </NavHashLink>
                  </li>
                </li>
              </ul>{" "}
            </div>{" "}
            <div className="mobile-menu">
              <button
                onClick={() => {
                  setMobileMenu(!mobileMenu);
                }}>
                {" "}
                {mobileMenu ? (
                  <Icon icon="akar-icons:cross" />
                ) : (
                  <Icon icon="uim:bars" />
                )}{" "}
              </button>{" "}
            </div>{" "}
          </div>
        </div>
        <div className="container-fluid" id="home">
          <div className="sm-icons ">
            <a  href="https://api.whatsapp.com/send?phone=+923026469153&amp;text=%20%20Hi%20there!" target="_blank" class="whatsapp-icon" rel="nofollow noopener"> <img
              src={whatsapp}

            
              className="img-fluid"
              alt="switch"
              loading="lazy"
            /></a>
            <a target='_blank' href="https://join.skype.com/invite/vSZo0hqcXPdn "> <img
              src={skyp}
              className="img-fluid"
              alt="switch"
              loading="lazy"
            /></a>
            <a target='_blank' href="https://www.linkedin.com/company/qubitars/">
              <img
                src={linkedin}
                className="img-fluid"
                alt="switch"
                loading="lazy"
              /></a>
          </div>
        </div>
      </div>


    </Wrapper>
  );
}

export default Navbar;
