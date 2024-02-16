import "./BookAppointment.css";
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

function BookApointment() {
  const [value, setValue] = useState();
  const form = useRef("");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_piyw0vh",
        "template_688edn6",
        form.current,
        "UkG3FJMLrtdiIqRm5"
      )
      .then(
        (result) => {
          console.log(result.text);
          swal({
            position: "top-end",
            title: "Form Submitted",
            // text: "You clicked the button!",
            icon: "success",
            // button: "ok!",
          });
        },
        (error) => {
          console.log(error.text);
          swal({
            position: "top-end",
            title: "Something went wrong",
            // text: "You clicked the button!",
            icon: "error",
            // button: "ok!",
            // timer:1500,
          });
        }
      );
    e.target.reset();
  };

  return (
    <section className="book-appintment ba" id="bookappointment">
        <div className="container">
          <div className="ba-heading text-center text-white ">
            <div className="ba-h mt-3 ">
              <div className="hh">
                <h1>Book Appointment</h1>
              </div>
            </div>
          </div>
          <div className="container contact-page">
            <div className="row calendly-card-responsive">
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-6">
                <div
                  class="contact-section"
                  data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000">
                  <h1>Contact us</h1>
                  {/* <div class="border"></div> */}
                  <form class="contact-form" ref={form} onSubmit={sendEmail}>
                    <input
                      name="name"
                      type="text"
                      className="contact-form-text"
                      placeholder="Enter name"
                      required
                    />
                    <input
                      type="email"
                      name="email"
                      className="contact-form-text"
                      placeholder="Enter Email"
                      required
                    />
                    <input
                      type="phone"
                      name="phone"
                      className="contact-form-text"
                      placeholder="Your Phone"
                      required
                    />
                    {/* <PhoneInput name='phone' type='phone' className=" set_phone" placeholder="Your phone" value={value} onChange={setValue} /> */}
                    <textarea
                      name="message"
                      className="contact-form-text"
                      placeholder="Your message"
                    ></textarea>
                    <input
                      type="submit"
                      class="contact-form-btn"
                      value="Send"
                    />
                  </form>
                </div>
              </div>
              <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-6  mt-5 mb-3">
                <div
                  className="new_calendly"
                  data-aos="flip-up"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2000"
                >
                  <InlineWidget url="https://calendly.com/qubitars" />
                </div>
              </div>
            </div>
          </div>
        </div>

    </section>
  );
}

export default BookApointment;
