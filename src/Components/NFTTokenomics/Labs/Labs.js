import React from 'react'
import l1 from "../../../images/NFTTokenomics/l1.png";
import l2 from "../../../images/NFTTokenomics/l2.png";
import l3 from "../../../images/NFTTokenomics/l3.png";
import l4 from "../../../images/NFTTokenomics/l4.png";
import l5 from "../../../images/NFTTokenomics/l5.png";
import l6 from "../../../images/NFTTokenomics/l6.png";
import "./Labs.css"

import AOS from 'aos';
import 'aos/dist/aos.css'
AOS.init();

export default function Labs() {
    return (
        <div className="container  mt-5" data-aos-duration="2000"  data-aos="fade-up">
            <div className="row ">
                <div className="col-md-6">
                    <div className="lab_head ">
                        <h1>
                            Why Reveation Labs
                        </h1>
                    </div>
                    <div className="labs_para">
                        <p>We are a team that is technically proficient and simultaneously caring for your business. Our ideology is to provide the latest technologies that suit your business well.</p>
                    </div>
                    <div className="lab_head mt-3">
                        <h3>Let’s discuss your requirements!</h3>
                    </div>
                    <div className="labs_para">
                        <p>We are a team that is technically proficient and simultaneously caring for your business. Our ideology is to provide the latest technologies that suit your business well.</p>
                    </div>
                </div>
                <div className="col-md-2 labs_card_align">
                    <div className="labs_card">
                        <div className="labs_card_logo">
                            <img
                                src={l1}
                                className="img-fluid "
                                alt="switch"
                                loading="lazy"
                            />
                        </div>
                        <div className="labs_card_head mt-2">
                            <h4> Experts</h4>
                        </div>
                        <div className="labs_card_para">
                            <p>In all the latest technologies and developments.</p>
                        </div>
                    </div>
                    <div className="labs_card mt-3">
                        <div className="labs_card_logo">
                            <img
                                src={l2}
                                className="img-fluid "
                                alt="switch"
                                loading="lazy"
                            />
                        </div>
                        <div className="labs_card_head mt-2">
                            <h4> Dedicated</h4>
                        </div>
                        <div className="labs_card_para">
                            <p>In all the latest technologies and developments.</p>
                        </div>
                    </div>

                </div>
                <div className="col-md-2 labs_card_align">
                    <div className="labs_card">
                        <div className="labs_card_logo">
                            <img
                                src={l3}
                                className="img-fluid "
                                alt="switch"
                                loading="lazy"
                            />
                        </div>
                        <div className="labs_card_head mt-2" >
                            <h4> Creative</h4>
                        </div>
                        <div className="labs_card_para">
                            <p>In all the latest technologies and developments.</p>
                        </div>
                    </div>
                    <div className="labs_card mt-3" >
                        <div className="labs_card_logo">
                            <img
                                src={l4}
                                className="img-fluid "
                                alt="switch"
                                loading="lazy"
                            />
                        </div>
                        <div className="labs_card_head mt-2">
                            <h4> Approachable</h4>
                        </div>
                        <div className="labs_card_para">
                            <p>In all the latest technologies and developments.</p>
                        </div>
                    </div>

                </div>
                <div className="col-md-2 labs_card_align">
                    <div className="labs_card">
                        <div className="labs_card_logo">
                            <img
                                src={l5}
                                className="img-fluid "
                                alt="switch"
                                loading="lazy"
                            />
                        </div>
                        <div className="labs_card_head mt-2">
                            <h4> Ethical</h4>
                        </div>
                        <div className="labs_card_para">
                            <p>In all the latest technologies and developments.</p>
                        </div>
                    </div>
                    <div className="labs_card mt-3">
                        <div className="labs_card_logo">
                            <img
                                src={l6}
                                className="img-fluid "
                                alt="switch"
                                loading="lazy"
                            />
                        </div>
                        <div className="labs_card_head mt-2">
                            <h4> Transparent</h4>
                        </div>
                        <div className="labs_card_para">
                            <p>In all the latest technologies and developments.</p>
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}
