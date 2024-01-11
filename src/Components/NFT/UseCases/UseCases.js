import React from "react";
import "./UseCases.css";
import dotLine from "../../../images/WebDevelopment/dotLine.png";
import gaming from "../../../images/NftDevelopment/gaming.png";
// import gamminglogo from "../../../images/NftDevelopment/gaminglogo.png";
import gamminglogo from "../../../images/NftDevelopment/gamming_logo.png";
import musiclogo from "../../../images/NftDevelopment/musiclogo.png";
import musicPic from "../../../images/NftDevelopment/musicPic.png";
import sportsPic from "../../../images/NftDevelopment/sportsPic.png";
import realPic from "../../../images/NftDevelopment/realPic.png";
import gamePic from "../../../images/NftDevelopment/gamePic.png";
import fashionPic from "../../../images/NftDevelopment/fashionPic.png";
import artPic from "../../../images/NftDevelopment/artPic.png";
import art_logo from "../../../images/NftDevelopment/art_logo.png";
import gamming_logo from "../../../images/NftDevelopment/gamming_logo.png";
import real_logo from "../../../images/NftDevelopment/real_logo.png";
import suport_logo from "../../../images/NftDevelopment/suport_logo.png";
import fashion64 from "../../../images/NftDevelopment/fashion64.png";
import { useState } from "react";
import styled from "styled-components";
function UseCases() {
  const [activeTab, setActiveTab] = useState(0);
  const handleTabClick = (tabIndex) => {
    setActiveTab(tabIndex);
  };
  return (
    <div className="container-fluid useCase_bg">
      <div className="container">
        <center>
          <div className="usecase_heading ">
            <h1>NFT Development Use Cases</h1>
          </div>
          <div className="usecase_para">
            <p>
              With our trained and experienced developers and designers, we
              develop NFTs in a wide range of Niches..
            </p>
          </div>
        </center>

        <div className="row">
          <div className="col-md-6 usecases_list_left">
            <li title="Features">
              <a
                className={activeTab === 0 ? "active" : ""}
                onClick={() => handleTabClick(0)}
              >
                <div className="usecase_card_tab ">
                  <div className="usecase_logo">
                    <img
                      src={art_logo}
                      className="img-fluid "
                      alt="switch"
                      loading="lazy"
                    />
                  </div>
                  <div className="usecase_logo_heading mt-4">
                    <h6 className="text-white">Art</h6>
                  </div>
                </div>
              </a>
            </li>
            <li title="Delivery Contents">
			<a
          className={activeTab === 1 ? "active"  : ""}
          onClick={() => handleTabClick(1)}
        >
          <div className="usecase_card_tab ">
                  <div className="usecase_logo">
                    <img
                      src={gamminglogo}
                      className="img-fluid "
                      alt="switch"
                      loading="lazy"
                    />
                  </div>
                  <div className="usecase_logo_heading mt-2">
                    <h6 className="text-white">Gaming</h6>
                  </div>
                </div>
        </a>
             
            
            </li>
            <li title="Shipping">
            
			<a
          className={activeTab === 2 ? "active" : ""}
          onClick={() => handleTabClick(2)}
        >
          <div className="usecase_card_tab ">
                  <div className="usecase_logo">
                    <img
                      src={fashion64}
                      className="img-fluid "
                      alt="switch"
                      loading="lazy"
                    />
                  </div>
                  <div className="usecase_logo_heading mt-1">
                    <h6 className="text-white">Fashion</h6>
                  </div>
                </div>
        </a>
               
              
            </li>
          </div>
          <div className="col-md-6 usecases_list_right">
            <li title="Features">
            
			<a
          className={activeTab === 3 ? "active" : ""}
          onClick={() => handleTabClick(3)}
        >
          <div className="usecase_card_tab ">
                  <div className="usecase_logo">
                    <img
                      src={suport_logo}
                      className="img-fluid "
                      alt="switch"
                      loading="lazy"
                    />
                  </div>
                  <div className="usecase_logo_heading mt-4">
                    <h6 className="text-white">Sports</h6>
                  </div>
                </div>
        </a>
               
             
            </li>
            <li title="Delivery Contents">
			<a
          className={activeTab === 4 ? "active" : ""}
          onClick={() => handleTabClick(4)}
        >
          <div className="usecase_card_tab ">
                  <div className="usecase_logo">
                    <img
                      src={real_logo}
                      className="img-fluid "
                      alt="switch"
                      loading="lazy"
                    />
                  </div>
                  <div className="usecase_logo_heading mt-4">
                    <h6 className="text-white">Real Estate</h6>
                  </div>
                </div>
        </a>
               
           
            </li>
            <li title="Shipping">
            
			<a
          className={activeTab === 5 ? "active" : ""}
          onClick={() => handleTabClick(5)}
        >
          <div className="usecase_card_tab ">
                  <div className="usecase_logo">
                    <img
                      src={musiclogo}
                      className="img-fluid "
                      alt="switch"
                      loading="lazy"
                    />
                  </div>
                  <div className="usecase_logo_heading mt-1">
                    <h6 className="text-white">Music</h6>
                  </div>
                </div>
        </a>
               
            
            </li>
          </div>
        </div>
        <div className="row">
          <div className="tabs">
		  <div className="tab-content">
        {activeTab === 0 &&  <div className="row usecase_card_bg">
                  <div className="col-md-6">
                    <div className="usecase_card_head">
                      <h4>Art</h4>
                    </div>
                    <div className="usecase_card_desc">
                      <p>
                        The digital art industry is dominant and advanced from
                        the conventional industry. NFTs are handy when it comes
                        to owning and trading digital arts. The artists play a
                        vital role in NFT art tokenization with their signature
                        creations. Digital arts are at the forefront of NFTs by
                        enabling the creation of AR/VR.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="usecase_card_img">
                      <img
                        src={artPic}
                        className="img-fluid "
                        alt="switch"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>}
        {activeTab === 1 &&  <div className="row usecase_card_bg">
                  <div className="col-md-6">
                    <div className="usecase_card_head">
                      <h4>Gaming</h4>
                    </div>
                    <div className="usecase_card_desc">
                      <p>
                        You can attract gamers by offering the advantage of
                        selling and upgrading all the in-game assets. NFTs can
                        help gamers to move in-game purchases like rare skin or
                        avatars and provide proof of authenticity.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="usecase_card_img">
                      <img
                        src={gamePic}
                        className="img-fluid "
                        alt="switch"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>}
        {activeTab === 2 && <p> <div className="row usecase_card_bg">
                  <div className="col-md-6">
                    <div className="usecase_card_head">
                      <h4>Fashion</h4>
                    </div>
                    <div className="usecase_card_desc">
                      <p>
                        If Louis Vitton, the most popular brand in the fashion
                        industry, can enter into this realm, why can't you?
                        Fashion freaks can gain complete ownership of their
                        items and accessories by utilizing the power of unique
                        digital assets.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="usecase_card_img">
                      <img
                        src={fashionPic}
                        className="img-fluid "
                        alt="switch"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div></p>}
        {activeTab === 3 &&  <div className="row usecase_card_bg">
                  <div className="col-md-6">
                    <div className="usecase_card_head">
                      <h4>Sports</h4>
                    </div>
                    <div className="usecase_card_desc">
                      <p>
                        Fantasy Sports is a game where you bid for players to
                        create a team and play for real cash. Create your NFTs
                        for fantasy sports to creep up the craze and knowledge
                        of people. We'll tokenize players and teams with NFT
                        tokens.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="usecase_card_img">
                      <img
                        src={sportsPic}
                        className="img-fluid "
                        alt="switch"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>}
        {activeTab === 4 &&  <div className="row usecase_card_bg">
                  <div className="col-md-6">
                    <div className="usecase_card_head">
                      <h4>Real Estate</h4>
                    </div>
                    <div className="usecase_card_desc">
                      <p>
                        Digitalize and virtualize your lands to gain complete
                        ownership. When you put your land's NFTs on the open
                        marketplace, interested buyers will bid and buy it.
                        Interior designing can be a brownie point in making your
                        platform profitable when you digitize it.
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="usecase_card_img">
                      <img
                        src={realPic}
                        className="img-fluid "
                        alt="switch"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>}
        {activeTab === 5 &&  <div className="row usecase_card_bg">
                  <div className="col-md-6">
                    <div className="usecase_card_head">
                      <h4>Music</h4>
                    </div>
                    <div className="usecase_card_desc">
                      <p>
                        An opportunity and a call for musicians out there! If
                        you're a musician or related to this industry, attract
                        fans by tokenizing your music and listing it on
                        platforms. It is a great way to limit piracy issues in
                        the music sector and attract music lovers to the
                        singer's platform
                      </p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="usecase_card_img">
                      <img
                        src={musicPic}
                        className="img-fluid "
                        alt="switch"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>}
      </div>
           

           
          </div>
        </div>
      </div>
    </div>
  );
}

export default UseCases;
