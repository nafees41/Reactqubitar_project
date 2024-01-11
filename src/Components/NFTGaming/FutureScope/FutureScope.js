import React from 'react'
import "./FutureScope.css"
import green_robot from "../../../images/NFTGaming/green_robot.png";
import pink_robot from "../../../images/NFTGaming/pink_robot.png";

export default function FutureScope() {
  return (
      <div className="container-fluid future_scope">
        <div className="container">
        <div className="row">
        <div className="col-md-3">
            <img
                    src={green_robot}
                    className="img-fluid robot"
                    alt="switch"
                    loading="lazy"
                  />
        </div>
        <div className="col-md-3">
            <img
                    src={pink_robot}
                    className="img-fluid  robot"
                    alt="switch"
                    loading="lazy"
                  />
        </div>
        <div className="col-md-6">
            <div className="future_scope_head ">
                <h1>FUTURE SCOPE OF NFTS AND  <span className='gaming_space'>BLOCKCHAIN IN THE GAMING SPACE</span> 
</h1>
            </div>
            <div className="future_scope_para">
                <p>Qubitars is an NFT Staking platform development company with a team of top blockchain and NFT developers who can develop futuristic NFT Staking Platforms for startups and enterprises. With our wide range of services we provide high-quality, bug-free, and scalable solutions suiting your specific business requirements. Our developers build NFT staking websites using next-generation technologies with outstanding features that help users to stake various NFTs and earn a passive income. We leverage various blockchain networks such as Binancrs to stake various NFTs and earn a passive income. We leverage various blockchain networks such as Binanc</p>
            </div>
        </div>
        </div>
        </div>

      </div>
  )
}
