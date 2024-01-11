import React from 'react'
import './Process.css';
import one from "../../../images/1.png";
import two from "../../../images/2.png";
import three from "../../../images/3.png";
import arrow1 from "../../../images/WebDevelopment/arrow1.png";
import arrow2 from "../../../images/WebDevelopment/arrow2.png";
import brain from "../../../images/WebDevelopment/brain.png";

function Process() {
    return (
        <div className="caontainer-fluid java-bg">
            <div class="container">
                <div class="section-header">
                    <div className="java_heading">
                        <h1>Our Tokenomics Process</h1>
                    </div>
                </div>
                <div className="java_para">
                    <p>
                    Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation venia
                    </p>
                </div>
                <div class="steps">
                    <div class="steps-container">
                        <div class="content">
                            <div className="java_card ">
                                <div className="card_logo">
                                    <img
                                        src={brain}
                                        className="img-fluid "
                                        alt="switch"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="java_card_heading">
                                    <h4>Brainstorming
                                    </h4>
                                </div>
                                <div className="java_card_desk">
                                    <p>Our experts have provided Java web development services with a variety of technologies, including Spring, Hibernate, JMS, JDBC, Struts, and Swing. We undertake extensive research within the scope of the project and supply the most effective solutions.
                                    </p>
                                </div>

                            </div>
                        </div>
                        <i class="step-line"></i>
                        <div class="date">01</div>
                    </div>
                    <div class="steps-container">
                        <div class="content">
                        <div className="java_card ">
                                <div className="card_logo">
                                    <img
                                        src={brain}
                                        className="img-fluid "
                                        alt="switch"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="java_card_heading">
                                    <h4>Requirement Analysis

                                    </h4>
                                </div>
                                <div className="java_card_desk">
                                    <p>Our experts have provided Java web development services with a variety of technologies, including Spring, Hibernate, JMS, JDBC, Struts, and Swing. We undertake extensive research within the scope of the project and supply the most effective solutions.
                                    </p>
                                </div>

                            </div>
                        </div>
                        <i class="step-line"></i>
                        <div class="date">02</div>
                    </div>
                    <div class="steps-container">
                        <div class="content">
                        <div className="java_card ">
                                <div className="card_logo">
                                    <img
                                        src={brain}
                                        className="img-fluid "
                                        alt="switch"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="java_card_heading">
                                    <h4>Design

                                    </h4>
                                </div>
                                <div className="java_card_desk">
                                    <p>Our experts have provided Java web development services with a variety of technologies, including Spring, Hibernate, JMS, JDBC, Struts, and Swing. We undertake extensive research within the scope of the project and supply the most effective solutions.
                                    </p>
                                </div>

                            </div>
                        </div>
                        <i class="step-line"></i>
                        <div class="date">03</div>
                    </div>
                    <div class="steps-container">
                        <div class="content">
                        <div className="java_card ">
                                <div className="card_logo">
                                    <img
                                        src={brain}
                                        className="img-fluid "
                                        alt="switch"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="java_card_heading">
                                    <h4> Development

                                    </h4>
                                </div>
                                <div className="java_card_desk">
                                    <p>Our experts have provided Java web development services with a variety of technologies, including Spring, Hibernate, JMS, JDBC, Struts, and Swing. We undertake extensive research within the scope of the project and supply the most effective solutions.
                                    </p>
                                </div>

                            </div>
                        </div>
                        <i class="step-line"></i>
                        <div class="date">04</div>
                    </div>
                    <div class="steps-container">
                        <div class="content">
                        <div className="java_card ">
                                <div className="card_logo">
                                    <img
                                        src={brain}
                                        className="img-fluid "
                                        alt="switch"
                                        loading="lazy"
                                    />
                                </div>
                                <div className="java_card_heading">
                                    <h4> Launch

                                    </h4>
                                </div>
                                <div className="java_card_desk">
                                    <p>Our experts have provided Java web development services with a variety of technologies, including Spring, Hibernate, JMS, JDBC, Struts, and Swing. We undertake extensive research within the scope of the project and supply the most effective solutions.
                                    </p>
                                </div>

                            </div>
                        </div>
                        <i class="step-line"></i>
                        <div class="date">05</div>
                    </div>


                </div>
            </div>

        </div>
    )
}

export default Process