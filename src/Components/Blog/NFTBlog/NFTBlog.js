import React from 'react'
import nftblog1 from "../../../images/Blog/nftblog1.png";
import nftblog2 from "../../../images/Blog/nftblog2.png";
import nftblog3 from "../../../images/Blog/nftblog3.png";
import button_img from "../../../images/Blog/button_img.png";

import "./NFTBlog.css";

export default function NFTBlog() {
    
    return (
        <section id='nftBlog'>
            <div className="container mt-5">
                <div className="">
                    <h3 className='latest_blog'>NFT Blogs</h3>
                </div>

                <div className="row ">
                    <div className="col-md-4 nft_blog_cards">
                        <div className="nft_card_body">
                            <div className="blog_img">
                                <img
                                    src={nftblog1}
                                    className="img-fluid blog_img"
                                    alt="switch"
                                    loading="lazy"
                                />
                            </div>

                            <div className="nft_card_desk">
                            How To Mint An NFT Art On An NFT Marketplace                            </div>
                            <div className="nft_card_para">
                                <p>NFTs enable irreplaceable ownership of digital assets like art and music, among other things. With artists generating millions of dollars from music, souvenirs, and designs, the NFT space is moving ahead at maximum speed. While it's difficult to predict if they'll retain or regain their appeal during a market downturn, there are still many reasons why someone may want to try their hand at making one.</p>
                            </div>
                            {/* <button className='btn btn-primary read_now'>Read Now</button> */}
                            <div className="nft_button_img">
                    <img
                        src={button_img}
                        className="img-fluid btn_img"
                        alt="switch"
                        loading="lazy"
                    />
                      
                    </div>
                        </div>
                    </div>
                    <div className="col-md-4 nft_blog_cards">
                    <div className="nft_card_body">
                            <div className="blog_img">
                                <img
                                    src={nftblog2}
                                    className="img-fluid blog_img"
                                    alt="switch"
                                    loading="lazy"
                                />
                            </div>

                            <div className="nft_card_desk">
                            Best Blockchain Wallet Development Companies in 2023
                            </div>
                            <div className="nft_card_para">
                            <p>The application used to conduct transactions and examine cryptocurrency holdings on the blockchain is referred to as a blockchain wallet. Exchanges can transfer certain digital assets publicly thanks to the public address explicitly assigned to individual wallet owners in the form of crypto-specific account numbers. </p>
                            </div>
                            {/* <button className='btn btn-primary read_now'>Read Now</button> */}
                            <div className="nft_button_img">
                    <img
                        src={button_img}
                        className="img-fluid btn_img"
                        alt="switch"
                        loading="lazy"
                    />
                      
                    </div>
                        </div>
                    </div>
                    <div className="col-md-4 nft_blog_cards">
                    <div className="nft_card_body">
                            <div className="blog_img">
                                <img
                                    src={nftblog3}
                                    className="img-fluid blog_img"
                                    alt="switch"
                                    loading="lazy"
                                />
                            </div>

                            <div className="nft_card_desk">
                            Economic Opportunities in the Metaverse
                            </div>
                            <div className="nft_card_para">
                            <p>The metaverse is a hot topic of discussion, as it combines virtual reality, augmented reality, sensory technology, and spatial computing to offer new experiences from the comfort of our homes or workplaces. However, the metaverse is more than just a gaming or science fiction concept. It represents a whole new economy that includes tech companies and traditional firms such as McDonald's and Nike. 

</p>
                            </div>
                            {/* <button className='btn btn-primary read_now'>Read Now</button> */}
                            <div className="nft_button_img">
                    <img
                        src={button_img}
                        className="img-fluid btn_img"
                        alt="switch"
                        loading="lazy"
                    />
                      
                    </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}
