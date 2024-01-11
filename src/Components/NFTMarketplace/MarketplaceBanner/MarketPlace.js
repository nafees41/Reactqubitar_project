import React from "react";
import styled from "styled-components";
import threebars from "../../../images/NftDevelopment/threebars.png";

import nft_staking from "../../../images/NFTStaking/nft_staking.png";

import stak1 from "../../../images/NftDevelopment/stak1.png";
import launch1 from "../../../images/NftDevelopment/launch1.png";
import engine1 from "../../../images/NftDevelopment/engine1.png";
import auction1 from "../../../images/NftDevelopment/auction1.png";
import market1 from "../../../images/NftDevelopment/market1.png";
import mint1 from "../../../images/NftDevelopment/mint1.png";
import { NavHashLink } from "react-router-hash-link";
import marketbanner from "../../../images/NFTMarketplace/marketbanner.png";



import Wrapper from "./MarketPlace.styled";
function MarketPlace() {
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
            <h1 className="web_banner_heading">NFT Marketplace</h1>
            <p className="web_banner_para ">
            We help you launch your NFT marketplace and attract a growing community of NFT users. We can create NFT marketplaces that will be feature-rich, decentralized, and allow tokenization of all types of assets. Start a new era of blockchain dominance by availing of our first-class industrious NFT marketplace development services.
            </p>
            <ButtonGroup className="web_banner_btn">
             <NavHashLink to="/#bookappointment"> <LinkButton   style={{ color: 'white', backgroundColor: '#fc7e13' }}>Book an Appoinment</LinkButton></NavHashLink>
            <NavHashLink to="/#bookappointment">  <LinkButton className="gr_button" >Let’s Talk</LinkButton></NavHashLink>
            </ButtonGroup>


          </div>
          <div className="col-md-4 col-sm-4 col-4">
           <div className="cube">
           <img
                    src={marketbanner}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
       
           </div>
            <Ellipse>

              <Circle
                src={threebars}
                className="img-fluid mt-2"
                loading="lazy"
                alt="">

              </Circle>

            </Ellipse>

          </div>
        </div>
        <hr className="banner_line mt-5" />
        <div className="flex-container">
          <div className="slider-container">
          <ul className="slider">
              <li className="slider__slide">
                <div className="slider__content">
                  <img
                    src={stak1}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                  <span className="slider_span_para">NFT Staking Platform</span>
                </div>
              </li>
              <li className="slider__slide">
                <div className="slider__content">
                  <img
                    src={market1}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                  <span className="slider_span_para"> NFT Marketplace</span>
                </div>
              </li>
              <li className="slider__slide">
                <div className="slider__content">
                  <img
                    src={engine1}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                  <span className="slider_span_para">Minting Engine</span>
                </div>
              </li>
              <li className="slider__slide">
                <div className="slider__content">
                  <img
                    src={auction1}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                  <span className="slider_span_para">NFT Auction</span>
                </div>
              </li>
              <li className="slider__slide">
                <div className="slider__content">
                  <img
                    src={launch1}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                  <span className="slider_span_para">NFT Launchpad</span>
                </div>
              </li>
              <li className="slider__slide">
                <div className="slider__content">
                  <img
                    src={mint1}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                  <span className="slider_span_para">NFT Minting Website</span>
                </div>
              </li>
              <li className="slider__slide">
                <div className="slider__content">
                  <img
                    src={stak1}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                  <span className="slider_span_para">NFT Staking Platform</span>
                </div>
              </li>
              <li className="slider__slide">
                <div className="slider__content">
                  <img
                    src={market1}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                  <span className="slider_span_para"> NFT Marketplace</span>
                </div>
              </li>
              <li className="slider__slide">
                <div className="slider__content">
                  <img
                    src={engine1}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                  <span className="slider_span_para">Minting Engine</span>
                </div>
              </li>
              <li className="slider__slide">
                <div className="slider__content">
                  <img
                    src={auction1}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                  <span className="slider_span_para">NFT Auction</span>
                </div>
              </li>
              <li className="slider__slide">
                <div className="slider__content">
                  <img
                    src={launch1}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                  <span className="slider_span_para">NFT Launchpad</span>
                </div>
              </li>
              <li className="slider__slide">
                <div className="slider__content">
                  <img
                    src={mint1}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                  <span className="slider_span_para">NFT Minting Website</span>
                </div>
              </li>
 

              
             
            </ul>
          </div>
        </div>
      
        

      </div>


    
    </Wrapper>
  );
}

export default MarketPlace;
