import React from "react";
import styled from "styled-components";
import threebars from "../../../images/NftDevelopment/threebars.png";

import { NavHashLink } from "react-router-hash-link";
import main_nft1 from "../../../images/SAli.jpeg";
import main_nft2 from "../../../images/hammad.jpeg";
import main_nft3 from "../../../images/talha.jpeg";
import main_nft4 from "../../../images/hadid.jpg";

import Wrapper from "./Dedicatedbanner.styled";


function Dedicatedbanner() {
  const BannerItem = styled.div`
    text-align: center;
  `;
  const BannerContent = styled.div``;
  const ButtonGroup = styled.div`
    margin-top: 20px;
  `;
  const LinkButton = styled.a`
    border: 1px solid #fc7e13;
    padding: 10px 20px;
    border-radius: 5px;
    margin-right: 30px;
    transition: 0.5s ease-in-out;
    cursor: pointer;

    &:hover {
      background-color: #fc7e13;
      border: 1px solid #fc7e13;
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
    width: 8%;
    position: absolute;
    top: 48%;
    transform: translate(0, -30%);
    left: auto;
    right: 0;
    @media (max-width: 1192px) {
      width: 15%;
    }
    @media (max-width: 575.98px) {
      transform: translate(0, -10%);
      top: 22%;
    }
  `;
  return (
    <Wrapper>
     
      <div className="container">

        <div className="row">
          <div className="col-md-8  col-sm-8 col-8 ">
            <h1 className="web_banner_heading">Dedicated Team</h1>
            <p className="web_banner_para ">
            We offer professional NFT development services that cater to your specific needs. Our team of experts can help you create unique and secure non-fungible tokens that are built on blockchain technology. With our NFT development services, you can leverage the power of blockchain to create digital assets that are tamper-proof and immutable. Whether you are an artist, musician, or a business looking to tokenize assets, we can help you navigate the complexities of NFT development and create a solution that meets your requirements.

            </p>
            <ButtonGroup className="web_banner_btn">
             <NavHashLink to="/#bookappointment"> 
             <button class="item button-rainbow mx-2">
                Schedule a Call
                <span>
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
                </span>
              </button>
             </NavHashLink>
            </ButtonGroup>

          </div>
          <div className="col-md-4 col-sm-4 col-4">
           <div className="cube">
           <div className="gallery">
          
                    <img
                    src={main_nft2}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                    <img
                    src={main_nft3}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                    <img
                    src={main_nft4}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                   <img
                    src={main_nft1}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
</div>
           </div>
            <Ellipse>

              {/* <Circle
                src={threebars}
                className="img-fluid mt-2"
                loading="lazy"
                alt="">

              </Circle> */}

            </Ellipse>

          </div>
        </div>
        <hr className="banner_line mt-5" />
   </div>
 </Wrapper>
  );
}

export default Dedicatedbanner;
