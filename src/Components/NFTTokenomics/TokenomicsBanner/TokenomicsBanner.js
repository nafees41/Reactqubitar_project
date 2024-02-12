import React from "react";
import styled from "styled-components";
import threebars from "../../../images/NftDevelopment/threebars.png";
import nftdev from "../../../images/NftDevelopment/nftdev.png";
import nftlaunch from "../../../images/NftDevelopment/nftlaunch.png";
import nftmarket from "../../../images/NftDevelopment/nftmarket.png";
import nftmint from "../../../images/NftDevelopment/nftmarket.png";
import main_nft1 from "../../../images/NftDevelopment/main_nft1.png";
// import main_nft2 from "../../../images/NftDevelopment/main_nft2.png";
import main_nft3 from "../../../images/NftDevelopment/main_nft3.png";
import main_nft4 from "../../../images/NftDevelopment/main_nft4.png";
import tbanner from "../../../images/NFTTokenomics/tBanner.png";




import Wrapper from "./TokenomicsBanner.styled";
function TokenomicsBanner() {
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
            <h1 className="web_banner_heading">Tokenomics</h1>
            <p className="web_banner_para ">
            We can help you create, market, and sell your rare collectibles in the easiest way possible. With prior experience in 35+ NFT projects, our competent team knows what to do for your project to stand out in the secondary marketplace. Start with our best NFT development service to push your business growth.

            </p>
            <ButtonGroup className="web_banner_btn">
            <button class="item button-rainbow mx-4">
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
              {/* <LinkButton to='#1' style={{ color: 'white', backgroundColor: '#fc7e13' }}>Book an Appoinment</LinkButton>
              <LinkButton className="gr_button" >Let’s Talk</LinkButton> */}
            </ButtonGroup>

          </div>
          <div className="col-md-4 col-sm-4 col-4">
           <div className="cube" style={{paddingRight:'40px'}}>
           <img
                    src={tbanner}
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
                    src={nftdev}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                  <span className="slider_span_para">NFT Development</span>
                </div>
              </li>
              <li className="slider__slide">
                <div className="slider__content">
                  <img
                    src={nftmarket}
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
                    src={nftmint}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                  <span className="slider_span_para">NFT Minting Development</span>
                </div>
              </li>
              <li className="slider__slide">
                <div className="slider__content">
                  <img
                    src={nftlaunch}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                  <span className="slider_span_para"> NFT LaunchPad</span>
                </div>
              </li>
              <li className="slider__slide">
                <div className="slider__content">
                  <img
                    src={nftdev}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                  <span className="slider_span_para">NFT Development</span>
                </div>
              </li>
              <li className="slider__slide">
                <div className="slider__content">
                  <img
                    src={nftmarket}
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
                    src={nftmint}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                  <span className="slider_span_para">NFT Minting Development</span>
                </div>
              </li>
              <li className="slider__slide">
                <div className="slider__content">
                  <img
                    src={nftlaunch}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                  <span className="slider_span_para"> NFT LaunchPad</span>
                </div>
              </li>

              <li className="slider__slide">
                <div className="slider__content">
                  <img
                    src={nftdev}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                  <span className="slider_span_para">NFT Development</span>
                </div>
              </li>
              <li className="slider__slide">
                <div className="slider__content">
                  <img
                    src={nftmarket}
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
                    src={nftmint}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                  <span className="slider_span_para">NFT Minting Development</span>
                </div>
              </li>
              <li className="slider__slide">
                <div className="slider__content">
                  <img
                    src={nftlaunch}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />
                  <span className="slider_span_para"> NFT LaunchPad</span>
                </div>
              </li>


              
             
            </ul>
          </div>
        </div>
      
        

      </div>


    
    </Wrapper>
  );
}

export default TokenomicsBanner;
