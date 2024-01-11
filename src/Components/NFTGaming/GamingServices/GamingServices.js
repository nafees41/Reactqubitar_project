import React from 'react'
import './GamingServices.css';
import add from "../../../images/WebDevelopment/add.png";
import manage from "../../../images/WebDevelopment/manage.png";
import desk from "../../../images/WebDevelopment/desk.png";
import nft_sample from "../../../images/NftDevelopment/nft_sample.png";

function GamingServices() {
    return (
        <div className="container">
            <div class="tabinator ">
                <div className="ecommerce_heading gaming_services mt-5">
                    <h1>Our NFT Gaming Development Services</h1>
                </div>

                <input type="radio" className='mt-5' id="tabb1" name="tabs" checked />
                <label for="tabb1"><h5>NFT Minting Platform</h5></label>
                <input type="radio" id="tabb2" name="tabs" checked />
                <label for="tabb2"><h5>NFT Smart Contract Development</h5></label>
                <input type="radio" id="tabb3" name="tabs" checked />
                <label for="tabb3"><h5>Non-Fungible Token (NFT) Development</h5></label>
                <input type="radio" id="tabb4" name="tabs" checked />
                <label for="tabb4"><h5>NFT Support & Maintenance</h5></label>
                <div id="content1 ">
                    <div className="row mt-5">
                        <div className="col-md-6">
                            <div className="ncard">
                                <img
                                    src={add}
                                    className="img-fluid "
                                    alt="switch"
                                    loading="lazy"
                                />
                                <div className="ecard_heading mt-4"> <h4>NFT Minting Platform
                                </h4></div>
                                <div className="ecard_desk">
                                    <p>Provide an opportunity for investment and trading of NFTs to your non-tech users with a user-friendly and easy-to-use platform. Our competent team of developers can provide customized platforms with all necessary features and functionalities.
                                        customized platforms with all necessary features and functionalities.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 ncard_img">
                        <img
                                    src={nft_sample}
                                    className="img-fluid ncard_img"
                                    alt="switch"
                                    loading="lazy"
                                />

                        </div>
                    </div>
                </div>
                <div id="content2">
                <div className="row mt-5">
                        <div className="col-md-6">
                            <div className="ncard">
                                <img
                                    src={add}
                                    className="img-fluid "
                                    alt="switch"
                                    loading="lazy"
                                />
                                <div className="ecard_heading mt-4"> <h4>NFT Smart Contract Development
                                </h4></div>
                                <div className="ecard_desk">
                                    <p>Provide an opportunity for investment and trading of NFTs to your non-tech users with a user-friendly and easy-to-use platform. Our competent team of developers can provide customized platforms with all necessary features and functionalities.
                                        customized platforms with all necessary features and functionalities.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 ncard_img">
                        <img
                                    src={nft_sample}
                                    className="img-fluid ncard_img"
                                    alt="switch"
                                    loading="lazy"
                                />

                        </div>
                    </div>

                </div>
                <div id="content3">
                <div className="row mt-5">
                        <div className="col-md-6">
                            <div className="ncard">
                                <img
                                    src={add}
                                    className="img-fluid "
                                    alt="switch"
                                    loading="lazy"
                                />
                                <div className="ecard_heading mt-4"> <h4>Non-Fungible Token (NFT) Development
                                </h4></div>
                                <div className="ecard_desk">
                                    <p>Provide an opportunity for investment and trading of NFTs to your non-tech users with a user-friendly and easy-to-use platform. Our competent team of developers can provide customized platforms with all necessary features and functionalities.
                                        customized platforms with all necessary features and functionalities.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 ncard_img">
                        <img
                                    src={nft_sample}
                                    className="img-fluid ncard_img"
                                    alt="switch"
                                    loading="lazy"
                                />

                        </div>
                    </div>

                </div>
                <div id="content4">
                <div className="row mt-5">
                        <div className="col-md-6">
                            <div className="ncard">
                                <img
                                    src={add}
                                    className="img-fluid "
                                    alt="switch"
                                    loading="lazy"
                                />
                                <div className="ecard_heading mt-4"> <h4>NFT Support & Maintenance
                                </h4></div>
                                <div className="ecard_desk">
                                    <p>Provide an opportunity for investment and trading of NFTs to your non-tech users with a user-friendly and easy-to-use platform. Our competent team of developers can provide customized platforms with all necessary features and functionalities.
                                        customized platforms with all necessary features and functionalities.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6 ncard_img">
                        <img
                                    src={nft_sample}
                                    className="img-fluid ncard_img"
                                    alt="switch"
                                    loading="lazy"
                                />

                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default GamingServices;