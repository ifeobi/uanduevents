import React from "react";
import fb from "../public/assets/images/fbb.png";
import bg from "../public/assets/images/contactbg.png";
import snap from "../public/assets/images/snap.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import Image from "next/image";
import location from "../public/assets/images/location.png";
import mail from "../public/assets/images/mail.png";
import AnimatedDiv from "../components/AnimatedDiv";

function Contact() {
  return (
    <div className="aboutpage-container contact">
      <div className="contact-header">
        <AnimatedDiv>
          <h1>Contact us</h1>
        </AnimatedDiv>
      </div>

      <div className="contact-body">
        <div className="contact-content">
          <Image src={bg} fill objectFit="cover" className="contact-bg" />
          <div className="contact-text">
            <Image src={location} className="location" />
            <p>Dallas, Texas</p>
            <Image src={mail} className="mail" />
            <p>uandudesign@gmail.com</p>
            <div className="footer-social contact">
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
              <h3>FOLLOW US</h3>
            </div>
          </div>
        </div>
      </div>

      <div className="about-middle contact"></div>
    </div>
  );
}

export default Contact;
