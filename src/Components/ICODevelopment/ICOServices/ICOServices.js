import React from 'react'
import cardCircle from "../../../images/ICODevelopment/cardCircle.png";
import service from "../../../images/ICODevelopment/service.png";
import cardArrow2 from "../../../images/ICODevelopment/cardArrow2.png";

import "./ICOServices.css";
export default function ICOServices() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-7">
                    <div className="ico_head">
                        <h1>ICO Development Services</h1>
                    </div>
                    <div className="ico_para">
                        <p>At Qubitars Technologies, we reinvigorate our client's ideas with agile strategies to push businesses towards success. Our team of experts works relentlessly to expedite the development process of ICO (Initial Coin Offering) while leveraging rigorous market research, rich experience, and deep domain knowledge. We believe that a client's success is our success. With refined skills and years of experience, our team can deliver ICO services that will match the current
                            market standard. We provide the ideal suite to flawlessly design, develop, and execute ICOs.</p>
                    </div>
                    <div className="ico_img">
                        <img
                            src={service}
                            className="img-fluid "
                            alt="switch"
                            loading="lazy"
                        />
                    </div>
                </div>
                <div className="col-md-5 ico_service_card_align ">
                    <div className="ico_service_card">
                        <div className="ico_card_line_1">
                            <div className="ico_card_circle">
                                <img
                                    src={cardArrow2}
                                    className="img-fluid "
                                    alt="switch"
                                    loading="lazy"
                                />
                            </div>
                            <div className="ico_service_card_head">
                                <h4>ICO Business Flow</h4>
                                <div className="ico_card_para">
                                    <p>Our team of experts assesses your idea to validate your vision's feasibility, desirability, and viability. When it is all checked and assessed, our team assists you with design, development, and token allocation. We suggest the latest technology solutions.</p>
                            </div>
                            </div>
                           
                        </div>
                      
                       


                    </div>
                    <div className="ico_service_card mt-3">
                        <div className="ico_card_line_1">
                            <div className="ico_card_circle">
                                <img
                                    src={cardArrow2}
                                    className="img-fluid "
                                    alt="switch"
                                    loading="lazy"
                                />
                            </div>
                            <div className="ico_service_card_head">
                                <h4>Dashboard Design</h4>
                                <div className="ico_card_para">
                                    <p>
With proper usage of UI or UX design formats, our team of experts helps you build an easy-to-use and intuitive dashboard design. A user-friendly dashboard allows people to interact with your business more efficiently.</p>
                            </div>
                            </div>
                           
                        </div>
                      
                       


                    </div>
                    <div className="ico_service_card mt-3">
                        <div className="ico_card_line_1">
                            <div className="ico_card_circle">
                                <img
                                    src={cardArrow2}
                                    className="img-fluid "
                                    alt="switch"
                                    loading="lazy"
                                />
                            </div>
                            <div className="ico_service_card_head">
                                <h4>Smart Contract Development</h4>
                                <div className="ico_card_para">
                                    <p>
We develop smart contracts to ensure legit, risk-free, and automated transactions within the blockchain system. Smart contracts are very viable solutions to increase the sustainability and transparency of any project in the space.</p>
                            </div>
                            </div>
                           
                        </div>
                      
                       


                    </div>


                </div>
            </div>
        </div>
    )
}
