import React from 'react'
import './InvestNFT.css';
import nft_side from "../../../images/nft_side.png";

export default function InvestNFT() {
  return (
    <section id='angularjs'>
        <div className="container mt-5 mb-5">
              <h1 className='angular-heading'>Why Should You Invest in NFT Development?</h1>
              <p

              className='angular-para'>
Investing in NFT development We offer a unique value proposition and the potential for significant returns, as NFTs gain popularity and become a mainstream investment asset class.



              </p>
              <div className="row ">
                <div className="col-md-8 angular_side custom_box_a ">
                            <p className='underpara mt-3'>
                            NFTs provide a unique value proposition by allowing creators to verify ownership and authenticity of digital assets, and enabling buyers to own and trade unique digital assets. This creates new opportunities for monetization and value creation, making it an attractive investment option.

                            </p>
                      <p className='underpara'>
                      NFTs are rapidly growing in popularity, with more and more industries and businesses adopting them. As a result, there is a lot of potential for NFTs to become a mainstream investment asset class in the future, with the potential for significant returns on investment.
                       </p>
                </div>
                <div className="col-md-4 angular-img cutom_box_b">
                      <img
                          src={nft_side}
                          className="img-fluid nft_img"
                          alt="switch"
                          loading="lazy"
                      />

                </div>
              </div>
        </div>

    </section>
  )
}
