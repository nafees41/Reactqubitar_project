import React from 'react'
import "./StakingPlatform.css";
import platform_card from "../../../images/NFTStaking/platform_card.png";
import platform_coin from "../../../images/NFTStaking/platform_coin.png";
import tick from "../../../images/NFTStaking/tick.png";
import platform_card_bottom from "../../../images/NFTStaking/platform_card_bottom.png";


export default function StakingPlatform() {
    return (
        <div className="container ">
            <div className="row ">
                <div className="col-md-6">
                    <div className="staking_platform_heading">
                        <h1>NFT Staking Platform Development Company</h1>
                    </div>
                    <div className="row mt-5">
                        <div className="col-md-3">
                        <div className="staking_platform_card">
                            <img
                                src={platform_card}
                                className="img-fluid ntf_card_top"
                                alt="switch"
                                loading="lazy"
                            />
                            
                            <img
                                src={platform_card_bottom}
                                className="img-fluid  ntf_card_bottom"
                                alt="switch"
                                loading="lazy"
                            />
                        </div>

                        </div>
                       <div className="col-md-3">
                                <div className="staking_platform_coin" style={{  marginRight:'-50px'}}>
                            <img
                                src={platform_coin}
                                className="img-fluid staking_platform_coin" 
                                alt="switch"
                                loading="lazy"
                            />
                        </div>
                       </div>
                       

                    </div>

                </div>
                <div className="col-md-6">
                    <div className="platform_para">
                        <p>Qubitars is an NFT Staking platform development company with a team of top blockchain and NFT developers who can develop futuristic NFT Staking Platforms for startups and enterprises. With our wide range of services we provide high-quality, bug-free, and scalable solutions suiting your specific business requirements. Our developers build NFT staking websites using next-generation technologies with outstanding features that help users to stake various NFTs and earn a passive income. We leverage various blockchain networks such as Binance Smart Chain (BSC), Ethereum, Solana, Polygon, Tron, etc to build websites for staking NFTs ensuring a seamless experience for the NFT users.Qubitars is an NFT Staking platform development company with a team of top blockchain and NFT developers who can develop futuristic NFT Staking Platforms for startups and enterprises. With our wide range of services we provide high-quality, bug-free, and scalable solutions suiting your specific business requirements. Our developers build NFT stakin</p>
                    </div>
                    <div className="row  platform_lines_row">
                        <div className="col-md-6">
                            <div className="platform_lines">
                                <img
                                    src={tick}
                                    className="img-fluid "
                                    alt="switch"
                                    loading="lazy"
                                />
                                <span className='platform_lines_para'>Highly Experienced Team</span>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="platform_lines">
                                <img
                                    src={tick}
                                    className="img-fluid "
                                    alt="switch"
                                    loading="lazy"
                                />
                                <span className='platform_lines_para Unique_Agile'>Unique Agile Development</span>
                            </div>
                        </div>
                        <div className="col-md-6 mt-3">
                            <div className="platform_lines">
                                <img
                                    src={tick}
                                    className="img-fluid "
                                    alt="switch"
                                    loading="lazy"
                                />
                                <span className='platform_lines_para'>100% Quality Guarantee</span>
                            </div>
                        </div>
                        <div className="col-md-6 mt-3">
                            <div className="platform_lines">
                                <img
                                    src={tick}
                                    className="img-fluid "
                                    alt="switch"
                                    loading="lazy"
                                />
                                <span className='platform_lines_para'>Secure Code base</span>
                            </div>
                        </div>
                        

                    </div>
                </div>
            </div>
        </div>
    )
}
