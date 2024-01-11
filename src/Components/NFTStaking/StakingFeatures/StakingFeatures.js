import React from 'react'
import './StakingFeatures.css';
import wordpress from "../../../images/WebDevelopment/wordpress.png";
import w1 from "../../../images/NftDevelopment/nft_program.png";
import w2 from "../../../images/NftDevelopment/nft_no.png";
import w3 from "../../../images/NftDevelopment/nft_smart.png";
import w4 from "../../../images/NftDevelopment/nft_asset.png";
import w5 from "../../../images/NftDevelopment/nft_user.png";
import w6 from "../../../images/NftDevelopment/nft_global.png";
import nftFeatures from "../../../images/NftDevelopment/nft_features.png";


import angular from "../../../images/WebDevelopment/angular.png";

export default function StakingFeatures() {
  return (
    <div className="container mt-5">
        <div className="row">
            <div className="col-md-6">
                <h1 className="wordpress_heading">
                Features Of NFT Staking Development

                </h1>
                <p className="wordpress_para">
                Qubitars Technology’s diverse team with its vast experience is offering a whole set of services related to NFTs.



                  
                </p>
                <div className="nft_feature_img mb-4">
                      <img
                          src={nftFeatures}
                          className="img-fluid "
                          alt="switch"
                          loading="lazy"
                      />
                </div>
            </div>
            <div className="col-md-6">
                <div className="main_wordpress_right">
                <div className="wordpress_right">
                      <img
                          src={w6}
                          className="img-fluid "
                          alt="switch"
                          loading="lazy"
                      />
                      <span>1- Program Equity</span>
                          <hr className="w_banner_line" />

                </div>
                  <div className="wordpress_right">
                      <img
                          src={w1}
                          className="img-fluid "
                          alt="switch"
                          loading="lazy"
                      />
                          <span> 2- No Third Party Invention</span>
                          <hr className="w_banner_line" />

                  </div>
                  <div className="wordpress_right">
                      <img
                          src={w2}
                          className="img-fluid "
                          alt="switch"
                          loading="lazy"
                      />
                          <span>3- Tailored Smart Contract</span>
                          <hr className="w_banner_line" />

                  </div>
                  <div className="wordpress_right">
                      <img
                          src={w3}
                          className="img-fluid "
                          alt="switch"
                          loading="lazy"
                      />
                          <span>4- Fractionalization of Larger Assets</span>
                          <hr className="w_banner_line" />

                  </div>
                  <div className="wordpress_right">
                      <img
                          src={w4}
                          className="img-fluid "
                          alt="switch"
                          loading="lazy"
                      />
                          <span>5- User Centric Design</span>
                          <hr className="w_banner_line" />

                  </div>
                  {/* <div className="wordpress_right">
                      <img
                          src={w5}
                          className="img-fluid "
                          alt="switch"
                          loading="lazy"
                      />
                          <span>6- Global Capital Investment</span>
                          <hr className="w_banner_line" />

                  </div> */}
                  </div>
            </div>
        </div>
    </div>
  )
}
