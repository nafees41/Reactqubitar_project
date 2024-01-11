import React from 'react'
import card_logo from "../../../images/NFTRealEstate/card_logo.png";
import card_corner from "../../../images/NFTRealEstate/card_corner.png";
 import "./Benifits.css"
export default function Benifits() {
  return (
    <div className="container">
      <div className="benifit_head">
        <h1>
        How is Real Estate Tokenization Beneficial?

        </h1>
      </div>
      <div className="benifit_para">
        <p>Real estate tokenization offers a number of features that make it a significantly more efficient investment alternative than any other previously accessible option.</p>
      </div>
      <div className="row adjust_benifit_cards">
        <div className="col-md-6">
          <div className="benifit_card">
            <div className="benifit_card_logo">
            <img
                    src={card_logo}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />

            </div>
            <div className="benifits_card_head">
              <p>Tokenization of real estate takes our businesses to worldwide investors and traders. People around the globe can purchase, sell, auction, or even invest in real estate without any barriers.</p>
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
        <div className="col-md-6 second_card">
          <div className="benifit_card">
            <div className="benifit_card_logo">
            <img
                    src={card_logo}
                    className="img-fluid "
                    alt="switch"
                    loading="lazy"
                  />

            </div>
            <div className="benifits_card_head">
              <p>The underlying infrastructure, blockchain, enables instant settlements without a delay of seconds. The peer-to-peer networks allow quick transfer of the tokens from one person to another.</p>
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



        <div className="col-md-6">
          <div className="benifit_card_blue">
           
            <div className="benifits_card_head_blue text-white">
              <p>Blockchain technology brings excellent transparency to the real estate tokenization business. The ownership of the tokenized real estate can be confirmed quickly due to the distributed ledger.</p>
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
        <div className="col-md-6">
          <div className="benifit_card_blue">
            
            <div className="benifits_card_head_blue  text-white mt-5">
              <p>Tokenization of real estate can be beneficial and efficient in checking property ownership. Blockchain technology reduces cost, improves security, and implements KYC to know actual ownership.</p>
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
