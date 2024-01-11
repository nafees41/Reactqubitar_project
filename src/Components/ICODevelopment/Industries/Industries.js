import React from 'react'
import i1 from "../../../images/ICODevelopment/i1.png";
import i2 from "../../../images/ICODevelopment/i2.png";
import i3 from "../../../images/ICODevelopment/i3.png";
import i4 from "../../../images/ICODevelopment/i4.png";
import i5 from "../../../images/ICODevelopment/i5.png";
import industries from "../../../images/ICODevelopment/industries.png";


import "./Industries.css";
export default function Industries() {
    return (
        <>
            <div className="container-fluid industries_bg mt-5" >
                <div className="container">
                    <div className="industries_head">
                        <h1>Industries We Serve</h1>
                    </div>
                    <div className="row indus_icons_row">
                        <div className="col-md-1"></div>
                        <div className="col-md-1">
                            <div className="ico_img">
                                <img
                                    src={i1}
                                    className="img-fluid "
                                    alt="switch"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                        <div className="col-md-1">
                            <div className="ico_img">
                                <img
                                    src={i2}
                                    className="img-fluid "
                                    alt="switch"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                        <div className="col-md-1">
                            <div className="ico_img">
                                <img
                                    src={i3}
                                    className="img-fluid "
                                    alt="switch"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                        <div className="col-md-1">
                            <div className="ico_img">
                                <img
                                    src={i4}
                                    className="img-fluid "
                                    alt="switch"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                        <div className="col-md-1">
                            <div className="ico_img">
                                <img
                                    src={i5}
                                    className="img-fluid "
                                    alt="switch"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                        <div className="col-md-1">
                            <div className="ico_img">
                                <img
                                    src={i1}
                                    className="img-fluid "
                                    alt="switch"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                        <div className="col-md-1">
                            <div className="ico_img">
                                <img
                                    src={i2}
                                    className="img-fluid "
                                    alt="switch"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                        <div className="col-md-1">
                            <div className="ico_img">
                                <img
                                    src={i3}
                                    className="img-fluid "
                                    alt="switch"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                        <div className="col-md-1">
                            <div className="ico_img">
                                <img
                                    src={i4}
                                    className="img-fluid"
                                    alt="switch"
                                    loading="lazy"
                                />
                            </div>
                        </div>
                        <div className="col-md-1"></div>
                    </div>

                </div>
            </div>
            <div className="container indus_container">
                <div className="indus_head">
                    <h1>Proficiency We Facilitate for ICO Development</h1>
                </div>
                <div className="indus_para">
                    <p>Excellent and proficient standards are a prerequisite for a revolutionary Initial Coin Offering. Hence, we develop tokens on the best-in-class Blockchain platforms and standardizations. Check our application standards below:
                    </p>
                </div>
                <div className="row ">
                    <div className="col-md-6">
                        <div className="indus_img">
                            <img
                                src={industries}
                                className="img-fluid "
                                alt="switch"
                                loading="lazy"
                            />
                        </div>

                    </div>

                    <div className="col-md-3 mt-4 indus_cards_align"  >
                        <div className="indus_cards">
                            <div className="indus_number " style={{ paddingLeft: '40px' }}>
                                <h1>
                                    8+
                                </h1>
                                <br />
                            </div>
                            <div className="indus_experiance">
                                <p>Years of Experiance </p>
                            </div>
                        </div>
                        <div className="indus_cards">
                            <div className="indus_number">
                                <h1>
                                    120+
                                </h1>
                                <br />
                            </div>
                            <div className="indus_experiance">
                                <p>Satisfied Clients</p>
                            </div>
                        </div>



                    </div>
                    <div className="col-md-3 mt-4 indus_cards_align">
                        <div className="indus_cards">
                            <div className="indus_number">
                                <h1>
                                    128+
                                </h1>
                                <br />
                            </div>
                            <div className="indus_experiance">
                                <p>Team Of Experts</p>
                            </div>
                        </div>
                        <div className="indus_cards">
                            <div className="indus_number">
                                <h1>
                                    200+
                                </h1>
                                <br />
                            </div>
                            <div className="indus_experiance">
                                <p>Projects Completed</p>
                            </div>
                        </div>



                    </div>
                </div>

            </div>


        </>
    )
}
