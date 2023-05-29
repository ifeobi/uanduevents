import React from "react";
import ServiceSlides from "../components/swipers/ServiceSlides";
import AnimatedDiv from "../components/AnimatedDiv";
import Head from "next/head";

export default function Services() {
  return (
    <>
      <Head>
      <title>Our services - U&U Designs</title>
      </Head>
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
                  all-inclusive event planning, styling, and Christmas
                  decoration services. Whether you're hosting a corporate event
                  or decking the halls for the holidays, we've got you covered.
                  Let us help you create a magical and unforgettable experience
                  for you and your guests!
                </p>
              </div>
              <div className="footer">
                <a className="btn" href="https://forms.gle/JS5jXMo12FkD2C5C9">
                  Book now
                </a>
              </div>
            </div>
          </AnimatedDiv>
        </div>
        <div className="service-middle"></div>
      </div>
    </>
  );
}
