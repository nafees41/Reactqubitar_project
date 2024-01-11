import React from 'react'
import card_logo from "../../../images/NFTRealEstate/card_logo.png";
import card_corner from "../../../images/NFTRealEstate/card_corner.png";
import smart from "../../../images/NftDevelopment/smart.png";
import staking from "../../../images/NftDevelopment/staking.png";
import whitelist from "../../../images/NftDevelopment/whitelist.png";
import airdrop from "../../../images/NftDevelopment/airdrop.png";
import support from "../../../images/NftDevelopment/support.png";
import mint1 from "../../../images/NftDevelopment/mintin1.png";

 import "./NftCollection.css"
export default function NftCollection() {
  return (
    <div className="container collection_container">
      <div className="benifit_head">
        <h1>
        NFT Collection Development Services

        </h1>
      </div>
      <div className="benifit_para">
       
        <p>We offer a number of NFT services that make it a significantly more efficient investment alternative than any other previously accessible option.</p>
      </div>
      <div className="row adjust_benifit_cards">
        <div className="col-md-4 collection_card">
          <div className="benifit_card">
            <div className="benifit_card_logo">
            <img
                    src={mint1}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />

            </div>
           
            <div className="benifits_card_head">
            <div className="benifit_h">
            <h5>NFT Minting Platform</h5>
        </div>
        <p>Provide an opportunity for investment and trading of NFTs to your non-tech users with a user-friendly and easy-to-use platform. Our  team of developers can provide customized platforms with all necessary features and functionalities.</p>
            </div>
            <div className="benifit_card_corner">
            <img
                    src={card_corner}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />

            </div>

          </div>
        </div>
        <div className="col-md-4 second_card collection_card">
        <div className="benifit_card">
            <div className="benifit_card_logo">
            <img
                    src={staking}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />

            </div>
           
            <div className="benifits_card_head">
            <div className="benifit_h">
            <h5>NFT Staking</h5>
        </div>
        <p>The majority of NFT Staking is done in blockchain games. You can utilize our services to implement this functionality into your games and benefit from this trending functionality. Staking can help you grow your product's fanbase.</p>
            </div>
            <div className="benifit_card_corner">
            <img
                    src={card_corner}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />

            </div>

          </div>
       
        </div>
        <div className="col-md-4 second_card collection_card">
        <div className="benifit_card">
            <div className="benifit_card_logo">
            <img
                    src={smart}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />

            </div>
           
            <div className="benifits_card_head">
            <div className="benifit_h">
            <h5>NFT Smart Contract</h5>
        </div>
        <p>To provide a secure and better user experience, we can develop NFT smart contracts. The NFT smart contract created by Softtik guarantees the immutability and transparency of information and is therefore ideal for digital asset management.</p>
            </div>
            <div className="benifit_card_corner">
            <img
                    src={card_corner}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />

            </div>

          </div>
        
        </div>



       
        <div className="col-md-4 collection_card">
          <div className="benifit_card_blue">
         
          <div className="benifit_card_logo">
            <img
                    src={airdrop}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />

            </div>
           
           
            <div className="benifits_card_head_blue text-white">
            <div className="benifit_h">
            <h5>Airdrop  </h5>
        </div>
        <p>
Airdrops are a new way of incentivizing users to be part of a project. This agile marketing strategy can attract new users to your project. We will take responsibility for underlying development so that Airdrop can reach the right people.</p>
            </div>
            <div className="benifit_card_corner">
            <img
                    src={card_corner}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />

            </div>

          </div>
        </div>
         <div className="col-md-4 collection_card">
          <div className="benifit_card_blue">
         
          <div className="benifit_card_logo">
            <img
                    src={whitelist}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />

            </div>
           
           
            <div className="benifits_card_head_blue text-white">
            <div className="benifit_h">
            <h5>Whitelisting</h5>
        </div>
        <p>
Whitelisting processes are customized approaches for people's approval accessing any specific network. We can provide this so you can use whitelisting functionality to reward your early investors for the project.</p>
            </div>
            <div className="benifit_card_corner">
            <img
                    src={card_corner}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />

            </div>

          </div>
        </div>
        <div className="col-md-4 collection_card">
          <div className="benifit_card_blue">
         
          <div className="benifit_card_logo">
            <img
                    src={support}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />

            </div>
           
           
            <div className="benifits_card_head_blue text-white">
            <div className="benifit_h">
            <h5>NFT Support & Maintenance</h5>
        </div>
        <p>We offer services like smart contracts, continuous support, and maintenance for our clients. Our team of developers will remain in touch with you from the start of your project to the end to prevent any technical glitches.</p>
            </div>
            <div className="benifit_card_corner">
            <img
                    src={card_corner}
                    className="img-fluid "
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
