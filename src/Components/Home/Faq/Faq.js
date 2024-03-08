import React from "react";
import { HashLink } from "react-router-hash-link";
import Wrapper from "./Faq.styled";
import faq from "../../../images/faq1.png";
import AOS from 'aos';
import 'aos/dist/aos.css'
import "./Faq.css"

AOS.init();
function Faq() {
 
  function handleAccordion(e) {
    e.target.classList.toggle("active");
    let panel = e.target.nextElementSibling;
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  }
  
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -120;
    window.scrollTo({ top: yCoordinate + yOffset, behavior: "smooth" });
  };

  return (
    <Wrapper>
      <div className="container mt-2">
          <center>  
         <div className="faq-heading">
        <h2>Frequently Asked Questions</h2>
          </div>
        <div className="faq-line mt-3">
          Everything you need to know about the Services and Qubitars.
          </div>
      </center>
      </div>
      <div className="faq">
        <div className="left-section">
          <img src={faq} className="img-fluid faq-img" alt="slider"/>
        </div>
        <div className="faqs-container" id="faq">
          <div className="container-row">
            <div className="row-col">
              <div className="accordion-container" data-aos="fade-up"  data-aos-duration="1000">
                <button className="accordion-item" onClick={handleAccordion}>
                   What services do you offer?
                </button>
                <div className="panel">
                  <p>At our software agency, we offer a wide range of services including custom software development, web application development, mobile app development, software consulting, and Blockchain development services. We work with our clients to understand their unique needs and create tailored solutions that meet their specific requirements.</p>
                </div>
              </div>
              <div className="accordion-container" data-aos="fade-up"  data-aos-duration="2000">
                <button className="accordion-item" onClick={handleAccordion}>
                How long does it take to complete a project?
                </button>
                <div className="panel">
                  <p>
                  The timeline for each project varies based on the scope and complexity of the project. We work closely with our clients to set realistic timelines and provide regular updates throughout the development process to ensure that the project stays on track.
                  </p>
                </div>
              </div>
              <div className="accordion-container" data-aos="fade-up"  data-aos-duration="3000"
               onClick={handleAccordion}>
                <button className="accordion-item">
                What is your process for developing software?
                </button>
                <div className="panel">
                  <p>
                  Our development process typically involves several phases, including project planning, design, development, testing, and deployment. We use Agile methodologies and work in sprints to ensure that the project stays on track and that our clients have visibility into the progress being made.
                  </p>
                </div>
              </div>
              <div className="accordion-container" data-aos="fade-up"  data-aos-duration="4000"
               onClick={handleAccordion}>
                <button className="accordion-item">
                How do you ensure the security of the software you develop?
                                </button>
                <div className="panel">
                  <p>
                  We take security very seriously and take a number of measures to ensure the security of the software we develop. This includes conducting regular security audits, implementing industry-standard security practices, and staying up-to-date on the latest security threats and vulnerabilities.
                  </p>
                </div>
              </div>
              <div className="accordion-container" data-aos="fade-up"  data-aos-duration="5000"
               onClick={handleAccordion}>
                <button className="accordion-item">
                How do you handle post-launch support and maintenance?
                </button>
                <div className="panel">
                  <p>
                  We offer ongoing post-launch support and maintenance for the software we develop to ensure that it continues to function properly and that any issues or bugs are addressed in a timely manner. We also offer service level agreements (SLAs) for clients who require more extensive support and maintenance.
                  </p>
                </div>
              </div>
               </div>
          </div>
        </div>
        </div>
      
    </Wrapper>
  );
}

export default Faq;
