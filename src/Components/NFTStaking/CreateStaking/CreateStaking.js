import React from 'react'
import tick from "../../../images/NFTStaking/tick.png";
import arrow from "../../../images/NFTStaking/arrow.png";
import arrow2 from "../../../images/NFTStaking/arrow2.png";
import create_staking1 from "../../../images/NFTStaking/create_staking1.png";
import create_staking2 from "../../../images/NFTStaking/create_staking2.png";
import main_nft1 from "../../../images/NftDevelopment/main_nft1.png";
import main_nft2 from "../../../images/NftDevelopment/main_nft2.png";
import main_nft3 from "../../../images/NftDevelopment/main_nft3.png";
import main_nft4 from "../../../images/NftDevelopment/main_nft4.png";
import nft_staking from "../../../images/NFTStaking/nft_staking.png";

import "./CreateStaking.css";


export default function CreateStaking() {
    return (
        <div className="container mt-5">
            <div className="row create_staking_row">
            {/* create_staking_left */}
                    <div className="col-md-3 ">
                        <div className="platform_lines">
                            <img
                                src={tick}
                                className="img-fluid "
                                alt="switch"
                                loading="lazy"
                            />
                            <span className='create_heading'>Highly Experienced Team</span>
                            <div className="create_staking_para">
                                Exploring NFT space and knowing about the market trending businesses.

                            </div>
                        </div>
                        <div className="create_arrow_2">
                            <img
                                src={arrow2}
                                className="img-fluid "
                                alt="switch"
                                loading="lazy"
                            />
                        </div>
                        <div className="platform_lines">
                            <img
                                src={tick}
                                className="img-fluid "
                                alt="switch"
                                loading="lazy"
                            />
                            <span className='create_heading'>Blockchain Network</span>
                            <div className="create_staking_para">
                                Choose a blockchain network that you wish to develop your platform.
                            </div>
                        </div>
                        <div className="create_arrow_2 ">
                            <img
                                src={arrow2}
                                className="img-fluid "
                                alt="switch"
                                loading="lazy"
                            />
                        </div>
                        <div className="platform_lines">
                            <img
                                src={tick}
                                className="img-fluid "
                                alt="switch"
                                loading="lazy"
                            />
                            <span className='create_heading'>Testing Product</span>
                            <div className="create_staking_para">
                            Quality assurance, testing & bug fixing.
                            </div>
                        </div>

                    </div>



                    <div className="col-md-3 " >
                        <div className="create_arrow">
                            <img
                                src={arrow}
                                className="img-fluid "
                                alt="switch"
                                loading="lazy"
                            />
                        </div>
                        <div className="platform_lines">
                            <img
                                src={tick}
                                className="img-fluid "
                                alt="switch"
                                loading="lazy"
                            />
                            <span className='create_heading'>Niche Selection</span>
                            <div className="create_staking_para">
                                Select a niche - elect the best tech development team to get extraordinary output.
                            </div>
                        </div>
                        <div className="create_arrow">
                            <img
                                src={arrow}
                                className="img-fluid "
                                alt="switch"
                                loading="lazy"
                            />
                        </div>
                        <div className="platform_lines">
                            <img
                                src={tick}
                                className="img-fluid "
                                alt="switch"
                                loading="lazy"
                            />
                            <span className='create_heading'>Choose Digital Asset
                            </span>
                            <div className="create_staking_para">
                                Select NFT assets to tokenize on the platform.
                            </div>
                        </div>
                        
                    </div>
               

                <div className="col-md-6">
                    <div className="create_staking_heading">
                        <h1 className='create_staking_heading'>How to Create an NFT Staking Platform?</h1>
                    </div>
                    <div className="create_staking_img">

                        <div className="staking_box_head">

                            <div className="staking_box mt-5">

                                <img src={main_nft4} alt="a small boat" />
                                <img src={create_staking1} alt="a hot air balloon" />
                                <img src={main_nft1} alt="a clock" />
                                <img src={main_nft2} alt="a sky photo of an old city" />

                                <img src={main_nft4} alt="a lonely man :(" />
                                <img src={main_nft1} alt="a forest" />


                            </div>
                        </div>
                        {/* <img
                            src={create_staking1}
                            className="img-fluid staking_img1"
                            alt="switch"
                            loading="lazy"
                        />
                        <img
                            src={create_staking2}
                            className="img-fluid staking_img2"
                            alt="switch"
                            loading="lazy"
                        /> */}

                    </div>
                </div>







            </div>
        </div>
    )
}
