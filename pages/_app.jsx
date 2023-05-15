import "../styles/global.css";
import hlogo from "../public/assets/images/team.png";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import flogo from "../public/assets/images/flogo.png";
import fb from "../public/assets/images/fbb.png";
import snap from "../public/assets/images/snap.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import PinterestIcon from "@mui/icons-material/Pinterest";
import Link from "next/link";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

// import { Analytics } from "@vercel/analytics/react";

export default function App({ Component, pageProps }) {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleNavLinkClick = () => {
    setMenuOpen(false);
  };

  const handleReset = () => {
    setMenuOpen(false);
  };

  const handleClick = () => {
    setMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "initial";

    const menuIcon = document.querySelector(".menu-responsive");
    const ulMenu = document.querySelector(".ul-menu");

    if (menuIcon) {
      menuIcon.addEventListener("click", handleClick);
    }

    if (ulMenu) {
      ulMenu.addEventListener("click", handleReset);
    }

    return () => {
      if (ulMenu) {
        ulMenu.removeEventListener("click", handleReset);
      }
    };
  }, [isMenuOpen]);

  return (
    <>
      <section className="header-container">
        <div className={`responsive-header ${isMenuOpen ? "active" : ""}`}>
          <div className={`menu-responsive ${isMenuOpen ? "active" : ""}`}>
            <MenuIcon />
          </div>
        </div>
        <div className={`menu-header ${isMenuOpen ? "active" : ""}`}>
          <div className="ul-menu">
            <MenuIcon />
          </div>

          <ul className="ul">
            <Link href="/" onClick={handleNavLinkClick}>
              <li>Home</li>
            </Link>
            <Link href="/services" onClick={handleNavLinkClick}>
              <li>Services</li>
            </Link>
            <Link href="/gallery" onClick={handleNavLinkClick}>
              <li>Gallery</li>
            </Link>
            <Link href="/about" onClick={handleNavLinkClick}>
              <li>About</li>
            </Link>
            <Link href="/faq" onClick={handleNavLinkClick}>
              <li>FAQ</li>
            </Link>
            <Link href="/contact" onClick={handleNavLinkClick}>
              <li>Contact</li>
            </Link>
            <li>Blog</li>
          </ul>
        </div>

        <motion.div
          className="logo-header"
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", duration: 1, bounce: 0.3 }}
        >
          <Image src={hlogo} alt="" />
        </motion.div>
      </section>
      <Component {...pageProps} />
      <footer className="footer-container">
        <div className="inquire-container">
          <div className="inquire event">
            <h1>Book your event now!</h1>
            <a
              href="https://forms.gle/JS5jXMo12FkD2C5C9"
              className="btn"
              target="_blank"
              rel="noopener"
            >
              Book now
            </a>
          </div>
          <div className="inquire christmas">
            <h1>Christmas tree decor!</h1>
            <a
              href="
              https://forms.gle/nzgaL4Ac6ojLaGoT7"
              className="btn c"
              target="_blank"
              rel="noopener"
            >
              Book now
            </a>
          </div>
        </div>

        <div className="footer-main">
          <div className="footer-main1"></div>
          <div className="footer-main2">
            <div className="footer1 menu">
              <h2>Menu</h2>
              <Link href="/" style={{ color: "initial" }}>
                <p>Home</p>
              </Link>
              <Link href="/gallery" style={{ color: "initial" }}>
                <p>Gallery</p>
              </Link>
              <Link href="/about" style={{ color: "initial" }}>
                <p>About</p>
              </Link>
              <Link href="/services" style={{ color: "initial" }}>
                <p>Services</p>
              </Link>
              <Link href="/contact" style={{ color: "initial" }}>
                <p>Contact</p>
              </Link>
              <Link href="/terms" style={{ color: "initial" }}>
                <p style={{ fontSize: "12px" }}>Terms</p>
              </Link>
            </div>
            <div className="footer2 logo">
              <Image src={flogo} alt="" className="flogo" />
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
            <div className="footer1 contact">
              <h2>Contact</h2>
              <p>Dallas, Texas</p>
              <p>
                uandudesign
                <br className="hide" />
                @gmail.com
              </p>
              <p>
                Phone: <br /> 832-768-6500
              </p>
              <p className="ig">IG: @uandudesigns</p>
            </div>
          </div>
          <div className="footer-main1"></div>
        </div>
        <div className="copyright">
          <a
            style={{ color: "initial" }}
            href="https://stripe-tec.com"
            target="_blank"
            rel="noopener"
          >
            U&U Designs Copyright &#169; 2023 | Developed by Stripe-tec
          </a>
        </div>
      </footer>
      {/* <Analytics /> */}
    </>
  );
}
