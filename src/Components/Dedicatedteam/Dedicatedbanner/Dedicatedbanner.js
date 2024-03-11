import React from "react";
import styled from "styled-components";
import threebars from "../../../images/NftDevelopment/threebars.png";

import { NavHashLink } from "react-router-hash-link";
import main_nft1 from "../../../images/WebDevelopment/angular_side-1.png";
import main_nft2 from "../../../images/WebDevelopment/angular_side-1.png";
import main_nft3 from "../../../images/talha.jpeg";
import Wrapper from "./Dedicatedbanner.style";

function Dedicatedbanner() {

  const BannerContent = styled.div``;
  const ButtonGroup = styled.div`
    margin-top: 20px;
  `;
   return (
    <Wrapper>
      <div className="container">
        <div className="row">
          <div className="col-md-8  col-sm-8 col-8 ">
            <h1 className="Dedicatedteam_heading">Dedicated Team</h1>
            <p className="Dedicated_para">
            Onboard our dedicated designers, developers and skilled engineers on a full-time basis to achieve your business objectives.
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
                      viewBox="0 0 16 16"
                    >
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
            <div className="Dedicated_cube">
              <div className="Dedicated_gallery">
                <img
                  src={main_nft2}
                  className="img-fluid"
                  alt="switch"
                  loading="lazy"
                />
                <img
                  src={main_nft3}
                  className="img-fluid"
                  alt="switch"
                  loading="lazy"
                />
                <img
                  src={main_nft3}
                  className="img-fluid"
                  alt="switch"
                  loading="lazy"
                />
                <img
                  src={main_nft1}
                  className="img-fluid"
                  alt="switch"
                  loading="lazy"
                />
              </div>
            </div>
        
          </div>
        </div>
        {/*<hr className="Dedicated_line mt-5"/>*/}
      </div>
    </Wrapper>
  );
}

export default Dedicatedbanner;
