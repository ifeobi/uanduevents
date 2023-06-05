import React from "react";
import fb from "../public/assets/images/fbb.png";
import bg from "../public/assets/images/contactbg.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import tiktok from "../public/assets/images/tiktok.png";
import Image from "next/image";
import location from "../public/assets/images/location.png";
import mail from "../public/assets/images/mail.png";
import AnimatedDiv from "../components/AnimatedDiv";
import Head from "next/head";

function Contact() {
  return (
    <>
      <Head>
        <title>Contact us - U&U Designs</title>
      </Head>
      <div className="aboutpage-container contact">
        <div className="contact-header">
          <AnimatedDiv>
            <h1>Contact us</h1>
          </AnimatedDiv>
        </div>

        <div className="contact-body">
          <div className="contact-content">
            <Image src={bg} fill className="contact-bg" />
            <div className="contact-text">
              <Image src={location} className="location" />
              <p>Dallas, Texas</p>
              <Image src={mail} className="mail" />
              <p>uandudesign@gmail.com</p>
              <div className="footer-social contact">
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
                <h3>FOLLOW US</h3>
              </div>
            </div>
          </div>
        </div>

        <div className="about-middle contact"></div>
      </div>
    </>
  );
}

export default Contact;
