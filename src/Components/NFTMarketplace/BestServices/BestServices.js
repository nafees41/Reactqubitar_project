import React from 'react'
import "./BestServices.css"
import particleNFT from "../../../images/NFTMarketplace/particleNFT.png";
import mixNFT from "../../../images/NFTMarketplace/mixNFT.png";
import mobilePic from "../../../images/NFTMarketplace/mobilePic.png";
import mobileNFT from "../../../images/NFTMarketplace/mobileNFT.png";

export default function BestServices() {
  return (
    <div className="container">

      <div className="marketplace_head">
        <h1>The Best NFT Marketplace Development Services</h1>
      </div>
      <div className="marketplace_para">
        <p>We offer custom NFT marketplace development solutions and has its tabs on the trends that drift in the blockchain industry. You can grab the growing community of NFT users by partnering with us.</p>
      </div>
      <div className="row">
        <div className="col-md-6 best_services_cards_padding">
          <div className="marketplace_card mt-4">
            <div className="marketplace_card_head">
              <h3>User-friendly interface</h3>
              
            </div>
            <div className="marketplace_card_para">
              <p>
An NFT marketplace should have a user-friendly interface that makes it easy for buyers and sellers to browse, search, and interact with NFTs. This includes a clear and intuitive navigation system, easy-to-use search and filtering options, and visually appealing design. A good marketplace should also provide detailed product information, including the NFT's history, ownership, and authenticity.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 best_services_cards_padding">
          <div className="marketplace_best_img">
          <img
                                        src={mobilePic}
                                        className="img-fluid  marketplace_best_img"  
                                        alt="switch"
                                        loading="lazy"
                                    />
          </div>
       
        </div>
        <div className="row adjust_center_cards">
        <div className="col-md-6 best_services_cards_padding">
          <div className="marketplace_best_img">
          <img
                                        src={mixNFT}
                                        className="img-fluid  marketplace_best_img"  
                                        alt="switch"
                                        loading="lazy"
                                    />
          </div>
       
        </div>
        <div className="col-md-6 best_services_cards_padding">
          <div className="marketplace_card mt-5">
            <div className="marketplace_card_head">
              <h3>Compatibility with blockchain networks</h3>
              
            </div>
            <div className="marketplace_card_para">
              <p>
NFTs are stored on various blockchain networks, so a good NFT marketplace should be compatible with multiple blockchain networks to provide users with a wide range of NFT options. Ethereum is currently the most popular blockchain network for NFTs, but other networks like Binance Smart Chain, Flow, and Polygon are also gaining popularity.</p>
            </div>
          </div>
        </div>
        </div>
      
        <div className="col-md-6 best_services_cards_padding">
          <div className="marketplace_card mt-5">
            <div className="marketplace_card_head">
              <h3> Smart contract Integration</h3>
              
            </div>
            <div className="marketplace_card_para">
              <p>Smart contracts are self-executing contracts that automatically enforce the terms of a transaction. A good NFT marketplace should have smart contract integration to ensure secure, transparent transactions. Smart contracts can provide automatic ownership transfer, royalty payments, and other transaction terms to ensure that buyers and sellers are protected.</p>
            </div>
          </div>
        </div>
        <div className="col-md-6 best_services_cards_padding">
          <div className="marketplace_best_img">
          <img
                                        src={mobileNFT}
                                        className="img-fluid  marketplace_best_img"  
                                        alt="switch"
                                        loading="lazy"
                                    />
          </div>
       
        </div>
      </div>
    </div>
  )
}
