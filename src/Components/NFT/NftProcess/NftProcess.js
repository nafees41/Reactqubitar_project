import React from 'react'
import './NftProcess.css';
import one from "../../../images/1.png";
import two from "../../../images/2.png";
import three from "../../../images/3.png";

import brain from "../../../images/WebDevelopment/brain.png";
import dev from "../../../images/NftDevelopment/dev.png";
import design from "../../../images/NftDevelopment/design.png";
import req from "../../../images/NftDevelopment/req.png";

function NftProcess() {
    return (
        <div className="caontainer-fluid java-bg">

     <div class="container">
        <div class="row">
            <div class="col-md-12">
                <div className="Assurance-header">
              <div className="Assurance_heading">
                <h1>Our NFT Development Process</h1>
              </div>
              </div>
              <div 
               className="Assurance_para"
               data-aos="zoom-in-right"
               data-aos-duration="1000"
             >
                <p>Our NFT development process involves ideation, design, development, testing, and deployment, ensuring high-quality and reliable NFTs</p>
              </div>
                <div class="Assurance_steps">
                    <div class="Assurance-steps-container">
                        <div  class="Assurance_content">
                           <div className="Assurance_card">
                            <div class="card_logo">
                                <img
                          src={brain}
                          className="img-fluid "
                          alt="switch"
                          loading="lazy"
                      />
                      </div>
                      <div className="Assurance_card_heading">
                            <h3 class="title">Brainstorming</h3>
                            <p class="description">
                            Our team will have a brainstorming session with you to analyze your vision and target audience. This session will also help us assess your business expectations and end-product requirements.
                            </p>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div class="Assurance_steps">
                        <div class="Assurance-steps-container">
                            <div className="Assurance_card">
                                <div className="card_logo">
                                <img
                          src={req}
                          className="img-fluid "
                          alt="switch"
                          loading="lazy"
                      /></div>    
                            <h3 class="title">Requirement Analysis</h3>
                            <p class="description">
                            Once the target audience and your expectations are known, we focus on the remaining requirements necessary for top-notch NFT development.
                            </p>
                        </div>
                    </div>
                    </div>
                    <div class="timeline">
                        <a to="" class="timeline-content">
                            <div class="timeline-icon"><img
                          src={design}
                          className="img-fluid "
                          alt="switch"
                          loading="lazy"
                      /></div>    
                            <h3 class="title">Design</h3>
                            <p class="description">
                            Once planning is done correctly, our creative team of designers starts working on the design. We make sure to provide a stellar design that can attract the audience.
                            </p>
                        </a>
                    </div>
                    <div class="timeline">
                        <a to="" class="timeline-content">
                            <div class="timeline-icon"><img
                          src={dev}
                          className="img-fluid "
                          alt="switch"
                          loading="lazy"
                      /></div>    
                            <h3 class="title">Development</h3>
                            <p class="description">
                            With immense experience in this space, our developers start coding to shape your idea into reality.
                            </p>
                        </a>
                    </div>
                    <div class="timeline">
                        <a to="" class="timeline-content">
                            <div class="timeline-icon"><img
                          src={dev}
                          className="img-fluid "
                          alt="switch"
                          loading="lazy"
                      /></div>    
                            <h3 class="title">Launch</h3>
                            <p class="description">
                            Once you’re satisfied with our work, we move to launch your platform with your permission.
                            </p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>

        </div>
    )
}

export default NftProcess;