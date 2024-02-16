import React from "react";
import "./OurClient.css";
import js from "../../../images/js.png";
import one from "../../../images/1.png";
import two from "../../../images/2.png";
import three from "../../../images/3.png";
import bar from "../../../images/bar.png";
import AOS from "aos";
import "aos/dist/aos.css";
AOS.init();

function OurClient() {
  return (
    <section>
      <div className="container-fluid our-client-cf">
        <div className="container ">
          <div
            className="client-hd"
            data-aos="fade-out"
            data-aos-duration="2000"
          >
            <h1>Our Client Engagement Model</h1>
          </div>
          <div className="client-desc">
            <p>
              We believe that effective client engagement is the key to
              successful project delivery.{" "}
            </p>
          </div>
          <div className="row our-row mt-5">
            <div
              className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4 set-with"
              data-aos="flip-up"
              data-aos-duration="1000"
            >
              <div className="client">
                <img
                  src={one}
                  className="num-img "
                  alt="switch"
                  loading="lazy"
                />
                <div>
                  <h3 className="hd2 mt-2">Collaboration</h3>
                  <p className="paragraph">
                    We work closely with our clients to understand their needs,
                    goals, and challenges. We collaborate with them to develop a
                    customized solution that meets their unique requirements.
                  </p>
                </div>

                <div className="">
                  <img src={bar} className="bar " alt="switch" loading="lazy" />
                </div>
              </div>
            </div>
            <div
              className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4  set-with"
              data-aos="flip-down"
              data-aos-duration="2000">
              <div className="client">
                <img
                  src={two}
                  className="num-img"
                  alt="switch"
                  loading="lazy"
                />
                <div>
                  <h3 className="hd2 mt-2">Transparency</h3>
                  <p className="paragraph">
                    We believe in open and transparent communication with our
                    clients. We keep our clients informed about the project
                    status, milestones, and any issues that may arise.
                  </p>
                </div>
                <div className="">
                  <img src={bar} className="bar " alt="switch" loading="lazy" />
                </div>
              </div>
            </div>
            <div
              className="col-xs-12 col-sm-12 col-md-12 col-lg-4 col-xl-4  set-with"
              data-aos="flip-up"
              data-aos-duration="3000"
            >
              <div className="client">
                <img
                  src={three}
                  className="num-img"
                  alt="switch"
                  loading="lazy"
                />
                <div>
                  {" "}
                  <h3 className="hd2 mt-2">Flexibility</h3>
                  <p className="paragraph">
                    We understand that every client is different, and we are
                    flexible in our approach to project delivery. We adapt our
                    engagement model to suit the specific needs of each client.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurClient;
