import React from "react";
import tokenization from "../../../images/NFTRealEstate/tokenization.png";
import "./Tokenization.css";

export default function Tokenization() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="tokenization_head">
            <h1>Tokenization Of Real Estate Assets</h1>
          </div>
          <div className="tokenization_para">
            <p>
              Real estate tokenization is the latest trend that combines real
              estate investing and blockchain technology. Tokenization enables
              asset or fund owners to raise capital more efficiently while
              providing investors unimaginable access to real estate
              investments, transparency, and liquidity. Do you want to get into
              the real estate business? We are pioneers in real estate
              tokenization services offering spectacular opportunities in this
              space.
            </p>
            <p>
              We have the expertise to tokenize real estate, digital or
              physical, through our firm’s developed framework. We have assisted
              many businesses in unraveling new realms of financial freedom
              through our services.
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <div className="tokenization_img">
            <img
              src={tokenization}
              className="img-fluid "
              alt="switch"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
