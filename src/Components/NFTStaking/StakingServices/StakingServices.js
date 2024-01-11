import React from "react";
import "./StakingServices.css";

import ui1 from "../../../images/UIUXDesign/ui1.png";
import ui2 from "../../../images/UIUXDesign/ui2.png";
import ui3 from "../../../images/UIUXDesign/ui3.png";
import ui4 from "../../../images/UIUXDesign/ui4.png";
import claim from "../../../images/NFTStaking/claim.png";
import delegate from "../../../images/NFTStaking/delegate.png";
import validate from "../../../images/NFTStaking/validate.png";

import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

export default function StakingServices() {
  return (

   <div className="container-fluid skating_bg mt-4">
     <div className="container mt-5" >
      <div className="benefits_head">
        <h1>How Can You Earn Rewards THROUGH STAKING SOLUTIONS?</h1>
      </div>
     
      <div className="row mt-5">
        <div className="col-md-4 benefits_card_align">
          <div className="benefits_card">
            <div className="benefits_card_logo">
              <img
                src={claim}
                className="img-fluid "
                alt="switch"
                loading="lazy"
              />
            </div>
            <div className="benefits_card_head">
              <h4>Claim</h4>
            </div>
            <div className="benefits_card_para" >
             <p>
This process includes rewarding users for locking their assets on your platform for a specific time. The rewards are calculated based on the locked purchases – higher locked-in assets result in higher dividends transferred to the users' wallets.</p>
            </div>
          </div>
        </div>
        <div className="col-md-4 benefits_card_align">
          <div className="benefits_card">
            <div className="benefits_card_logo">
              <img
                src={delegate}
                className="img-fluid "
                alt="switch"
                loading="lazy"
              />
            </div>
            <div className="benefits_card_head">
              <h4>Delegate</h4>
            </div>
            <div className="benefits_card_para" data-aos="fade-up" data-aos-duration="1000">
              <p>
              
Delegate is the participation of a fund manager with significant capital. Profits from this platform are reinvested, and dividends are distributed equally among users. The fund manager is compensated for his services and knowledge.
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-4 benefits_card_align">
          <div className="benefits_card">
            <div className="benefits_card_logo">
              <img
                src={validate}
                className="img-fluid "
                alt="switch"
                loading="lazy"
              />
            </div>
            <div className="benefits_card_head">
              <h4>Validate </h4>
            </div>
            <div className="benefits_card_para">
              <p>
              
Validate includes rewarding users for validating the blockchain. The validation tasks assigned to users are directly proportional to their assets. Users with more assets are assigned more validation tasks, resulting in higher rewards.
              </p>
            </div>
          </div>
        </div>
       
      </div>
    </div>
   </div>
  );
}
