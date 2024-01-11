import React from 'react';
import "./GameDevelopment.css";
import circle from "../../../images/NFTGaming/circle.png";
import cross from "../../../images/NFTGaming/cross.png";

export default function GameDevelopment() {
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-6">
                <div className="game_dev_head">
                    <h1>NFT Game Platform Development </h1>
                </div>
                <div className="game_dev_para">
                    <p>Qubitars is an NFT Staking platform development company with a team of top blockchain and NFT developers who can develop futuristic NFT Staking Platforms for startups and enterprises. With our wide range of services we provide high-quality, bug-free, and scalable solutions suiting your specific business requirements. Our developers build NFT staking websites using next-generation technologies with outstanding features that help users to stake various NFTs and earn a passive income. We leverage various blockchain networks such as Binanrs to stake various NFTs and earn a passive income. We leverage various blockchain networks such as Binanc</p>
                </div>
            </div>
            <div className="col-md-3">
                <div className="game_dev_card ">
                <img
                                        src={circle}
                                        className="img-fluid "
                                        alt="switch"
                                        loading="lazy"
                                    />
                    <div className="game_dev_card_head">
                        <h4>Full-Cycle NFT Game Development</h4>
                    </div>
                    <div className="game_card_para">
                        <p>Our seasoned development team uses top-notch approaches to full-cycle creation of various NFT game genres: sports, action, fantasy, adventure, and more.</p>
                    </div>

                </div>
                <div className="game_dev_cardth">
                <img
                                        src={cross}
                                        className="img-fluid "
                                        alt="switch"
                                        loading="lazy"
                                    />
                    <div className="game_dev_card_head">
                        <h4>Full-Cycle NFT Game Development</h4>
                    </div>
                    <div className="game_card_para">
                        <p>Our seasoned development team uses top-notch approaches to full-cycle creation of various NFT game genres: sports, action, fantasy, adventure, and more.</p>
                    </div>

                </div>
            </div>
            <div className="col-md-3 ">
                <div className="game_dev_cardth">
                <img
                                        src={cross}
                                        className="img-fluid "
                                        alt="switch"
                                        loading="lazy"
                                    />
                    <div className="game_dev_card_head">
                        <h4>Full-Cycle NFT Game Development</h4>
                    </div>
                    <div className="game_card_para">
                        <p>Our seasoned development team uses top-notch approaches to full-cycle creation of various NFT game genres: sports, action, fantasy, adventure, and more.</p>
                    </div>

                </div>
                <div className="game_dev_cardth">
                <img
                                        src={cross}
                                        className="img-fluid "  
                                        alt="switch"
                                        loading="lazy"
                                    />
                    <div className="game_dev_card_head">
                        <h4>Full-Cycle NFT Game Development</h4>
                    </div>
                    <div className="game_card_para">
                        <p>Our seasoned development team uses top-notch approaches to full-cycle creation of various NFT game genres: sports, action, fantasy, adventure, and more.</p>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}
