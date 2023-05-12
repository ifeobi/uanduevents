import Image from "next/image";
import React from "react";
import a1 from "../public/assets/images/about1.JPG";
import fb from "../public/assets/images/fbb.png";
import snap from "../public/assets/images/snap.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import Link from "next/link";

function About() {
  return (
    <div className="aboutpage-container">
      <div className="about-header">
        <div className="header">
          <h1>About U&U designs</h1>
        </div>
      </div>

      <div className="about-body">
        <div className="about-dp">
          <Image src={a1} alt="" />
        </div>

        <div className="about-content">
          <div className="body">
            <p>
              Hi there! My name is Ugochi. I am a wife and a mother of two
              handsome boys. I began event planning & Styling as a hobby,
              extending my services to family and friends. But my passion for
              decor grew stronger and inspired me to open my own company.
            </p>
            <br />
            <p>
              My first official event with my company took place during the
              COVID - my oldest son's first birthday. Although this event was
              challenging to plan and style due to COVID restrictions and lack
              of resources available at the time, the event was hugely
              successful.
            </p>
            <br />
            <p>
              I immediately started booking clients for various events and
              Christmas tree styling. The rest is history.
            </p>
            <br />
            <p>
              U&U Designs provides you with an unmatched luxury experience that
              you deserve. We cater to you our clients with full service event
              planning, styling, and Christmas tree deocration.
            </p>
          </div>
          <div className="footer">
            <Link href='/services' className="button">See serivces</Link>
            <div className="footer-social">
              <h3>FOLLOW US</h3>
              <div className="socials">
                <div>
                  <InstagramIcon style={{ color: "white" }} />
                </div>
                <div>
                  <Image src={fb} alt="" />
                </div>
                <div>
                  <Image src={snap} alt="" />
                </div>
                <div>
                  <PinterestIcon style={{ color: "white" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="about-middle"></div>
    </div>
  );
}

export default About;
