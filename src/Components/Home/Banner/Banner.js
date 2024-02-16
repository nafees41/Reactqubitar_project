import React from "react";
import styled from "styled-components";
import Wrapper from "./Banner.styled";
import Polygon from "../../../images/polygon.png";
import Switch from "../../../images/switch.png";
import EllipsePic from "../../../images/ellipse.png";
import EllipsePic1 from "../../../images/ellipsee.png";
import { useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css'
import { NavHashLink } from "react-router-hash-link";
import "./Banner.css"
AOS.init();
function Banner() {
  const BannerItem = styled.div`
    text-align: center;
  `;
  const BannerContent = styled.div``;
  const ButtonGroup = styled.div`
    margin-top: 20px;
  `;
  const LinkButton = styled.a`
    border: 1px solid var(--primary-color);
    padding: 10px 20px;
    border-radius: 5px;
    margin-right: 30px;
    transition: 0.5s ease-in-out;
    cursor: pointer;

    &:hover {
      background-color: var(--primary-color);
      border: 1px solid var(--primary-color);
      color: white;
    }
    @media (max-width: 575.98px) {
      padding: 10px 10px;

      margin-right: 10px;
    }
  `;

  const PolygonWrap = styled.div`
    position: absolute;
    top: 50%;
    transform: translate(0, -30%);
    @media (max-width: 575.98px) {
      transform: translate(0, 20%);
    }
  `;
  const PolygonImg = styled.img`
    width: 70%;
    @media (max-width: 1192px) {
      width: 54%;
    }
    @media (max-width: 992px) {
      width: 40%;
    }
    @media (max-width: 992px) {
      width: 28%;
    }
    @media (max-width: 575.98px) {
      width: 15%;
    }
  `;
  const Ellipse = styled.div``;
  const Circle = styled.img`
    width: 12%;
    position: absolute;
    top: 50%;
    transform: translate(0, -30%);
    left: auto;
    right: 0;
    @media (max-width: 1192px) {
      width: 15%;
    }
    @media (max-width: 575.98px) {
      transform: translate(0, -10%);
    }
  `;
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Wrapper>
     
      <div className="container" id="home_banner">
      
        <div className="row justify-content-center">
          <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-6">
            <BannerItem>
              <BannerContent>
                <h2 className="common_header"  data-aos="zoom-in-right"  data-aos-duration="2000" >We support</h2>
                <h3 className="mainPara">
                  gr
                  <span>
                    <img
                      src={Switch}
                      className="img-fluid growthe"
                      alt="switch"
                      loading="lazy"
                    /><span className="wth">wth</span>
                    
                  </span>
                  
                </h3>
                <p className="commonHeaderPera mb-4"  data-aos="zoom-in-left"  data-aos-duration="2000">
                Your Partner in Digital Success
                </p>
              </BannerContent>
              <ButtonGroup >
                <NavHashLink 
                to="/#bookappointment" 
                smooth 
                >
             <button class="item button-rainbow">
                Schedule a Call
                <span className="p-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    class="bi bi-arrow-right"
                    viewBox="0 0 16 16" >
                    <path
                      fill-rule="evenodd"
                      d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8"
                    />
                  </svg>
                </span>{" "}
              </button>
                
                </NavHashLink>
                 {/* <NavHashLink   to="/#bookappointment" 
                smooth ><LinkButton className="gr_button" >Let’s Talk</LinkButton></NavHashLink> */}
              </ButtonGroup>
            </BannerItem>
          </div>
        </div>
      </div>
      <PolygonWrap>
        <PolygonImg
          src={Polygon}
          className="img-fluid"
          loading="lazy"></PolygonImg>
      </PolygonWrap>

      <Ellipse>
       
        <Circle
          src={EllipsePic}
          className="img-fluid mt-2"
          loading="lazy"
          alt="">

          </Circle>
        <Circle
        style={{marginTop:"6px",paddingLeft:'5px'}}
          src={EllipsePic1}
          className="img-fluid EllipsePic1"
          loading="lazy"
          alt="">
 </Circle>
      </Ellipse>
    </Wrapper>
  );
}

export default Banner;
