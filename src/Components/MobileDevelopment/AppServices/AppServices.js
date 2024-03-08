import React from "react";
import service1 from "../../../images/MobileDevelopment/service1.png";
import service2 from "../../../images/MobileDevelopment/service2.png";
import service3 from "../../../images/MobileDevelopment/service3.png";
import service4 from "../../../images/MobileDevelopment/service4.png";
import "./AppServices.css";
export default function AppServices() {
  return (
    <section id="app_services">
      <div className="container mt-5">
        <div className="app_services_heading">
          <h1>We are Expert In</h1>
        </div>
        <div className="app_services_para">
          <p>
            Our avant-garde app development services provide innovative
            solutions, customized approach, user-centered design, and
            comprehensive services for iOS, Android, cross-platform, and web app
            development.
          </p>
        </div>
        <div className="row App_row">
          <div className="col-md-6">
            <div className="app_service_card_1">
              <div className="app_service_car_head">
                <h3 className="Expert_heading">Innovative Solutions:</h3>
              </div>
              <div className="app_service_para_img">
                <div className="app_service_card_para">
                  <p>
                    We provide cutting-edge app development services that
                    leverage the latest technologies to deliver innovative
                    solutions. Our team stays up-to-date with the latest
                    industry trends to ensure that we can offer our clients the
                    most advanced solutions.
                  </p>
                </div>
                <div className="app_service_img app_service_img1">
                  <img
                    src={service1}
                    className="img-fluid Expert_images"
                    alt="switch"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div className="app_service_card_2">
              <div className="app_service_car_head">
                <h3 className="Expert_heading">Customized Approach</h3>
              </div>
              <div className="app_service_para_img">
                <div className="app_service_card_para">
                  <p className="Customized_paragraph">
                    We take a customized approach to app development, working
                    closely with our clients to understand their unique needs
                    and develop solutions that meet their specific requirements.
                    Our process is highly collaborative, ensuring that our
                    clients are involved every step of the way.
                  </p>
                </div>
                <div className="app_service_img app_service_img2">
                  <img
                    src={service2}
                    className="img-fluid Expert_images"
                    alt="switch"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-4">
            <div className="app_service_card_1">
              <div className="app_service_car_head">
                <h3 className="Expert_heading">User-Centered Design</h3>
              </div>
              <div className="app_service_para_img">
                <div className="app_service_card_para">
                  <p > 
                    We prioritize user-centered design in all of our app
                    development services. Our team of experienced designers
                    works to create intuitive and engaging interfaces that are
                    easy to use and visually appealing. We believe that the user
                    experience is crucial to the success of an app.
                  </p>
                </div>
                <div className="app_service_img app_service_img1">
                  <img
                    src={service3}
                    className="img-fluid Expert_images"
                    alt="switch"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6 mt-4">
            <div className="app_service_card_2">
              <div className="app_service_car_head">
                <h3 className="Expert_heading">Comprehensive Services</h3>
              </div>
              <div className="app_service_para_img">
                <div className="app_service_card_para">
                  <p className="Expert_paragraph">
                    We offer a comprehensive range of app development services,
                    including iOS app development, Android app development,
                    cross-platform app development, and web app development. Our
                    team has expertise in a wide range of programming languages
                    and technologies, allowing us to deliver high-quality
                    solutions that meet our clients' needs.
                  </p>
                </div>
                <div className="app_service_img app_service_img2">
                  <img
                    src={service4}
                    className="img-fluid Expert_images"
                    alt="switch"
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
