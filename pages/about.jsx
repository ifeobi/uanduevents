import Image from "next/image";
import React from "react";
import a1 from "../public/assets/images/about1.png";
import fb from "../public/assets/images/fbb.png";
import tiktok from "../public/assets/images/tiktok.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";
import Head from "next/head";

function About() {
  return (
    <>
      <Head>
        <title>About us - U&U Designs</title>
      </Head>
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
                U&U Designs provides you with an unmatched luxury experience
                that you deserve. We cater to you our clients with full service
                event planning, styling, and Christmas tree deocration.
              </p>
            </div>
            <div className="footer">
              <Link href="/services" className="button">
                See serivces
              </Link>
              <div className="footer-social">
                <h3>FOLLOW US</h3>
                <div className="socials">
                  <div>
                    <a
                      href="https://www.instagram.com/uandudesigns/"
                      target="_blank"
                    >
                      <InstagramIcon style={{ color: "white" }} />
                    </a>
                  </div>
                  <div>
                    <a
                      href="https://www.facebook.com/profile.php?id=100069349773537"
                      target="_blank"
                    >
                      <Image src={fb} alt="" />
                    </a>
                  </div>
                  <div>
                    <a href="https://vm.tiktok.com/ZTREdsYmy/" target="_blank">
                      <Image src={tiktok} alt="" className="tiktok" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="about-middle"></div>
      </div>
    </>
  );
}

export default About;
