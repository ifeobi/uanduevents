import React from "react";
import ServiceSlides from "../components/swipers/ServiceSlides";
import AnimatedDiv from "../components/AnimatedDiv";

export default function Services() {
  return (
    <div className="aboutpage-container services">
      <div className="service-header">
        <AnimatedDiv>
          <h1>We offer</h1>
        </AnimatedDiv>
      </div>

      <div className="service-body">
        <AnimatedDiv>
          <div className="service-dp">
            <ServiceSlides />
          </div>
        </AnimatedDiv>
        <AnimatedDiv>
          <div className="service-content">
            <div className="body">
              <h2>Event Planning & Christmas Tree Decoration</h2>
              <p>
                Transform your space and bring your vision to life with our
                all-inclusive event planning, styling, and Christmas decoration
                services. Whether you're hosting a corporate event or decking
                the halls for the holidays, we've got you covered. Let us help
                you create a magical and unforgettable experience for you and
                your guests!
              </p>
            </div>
            <div className="footer">
              <button>Book now</button>
            </div>
          </div>
        </AnimatedDiv>
      </div>
      <div className="service-middle"></div>
    </div>
  );
}