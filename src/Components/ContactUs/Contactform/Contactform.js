import "./Contactstyle.css";
import "react-phone-number-input/style.css";
import PhoneInput from "react-phone-number-input";
import { React, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import star from "../../../images/Star.png";
import swal from "sweetalert";
import AOS from "aos";
import { InlineWidget } from "react-calendly";
import "aos/dist/aos.css";
AOS.init();

function Contactform() {
  return (
    <section className="ba">
      <div className="container calendary-package  m-0 p-0">
        <div className="row p-0">
          <div className="calendly-inline-widget d-flex justify-content-center w-100 mb-3 ">
         <InlineWidget url="https://calendly.com/qubitars"/>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contactform;
