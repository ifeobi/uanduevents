import "../styles/global.css";
import hlogo from "../public/assets/images/team.png";
import MenuIcon from "@mui/icons-material/Menu";
import Image from "next/image";
import flogo from "../public/assets/images/flogo.png";
import fb from "../public/assets/images/fbb.png";
import tiktok from "../public/assets/images/tiktok.png";
import InstagramIcon from "@mui/icons-material/Instagram";
import Link from "next/link";
import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import Head from "next/head";

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
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta
          name="description"
          content="Creating extraordinary experiences and transforming celebrations with impeccable event planning, exquisite styling, and enchanting Christmas tree decor."
        />
      </Head>
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
            <Link href="/about" onClick={handleNavLinkClick}>
              <li>About</li>
            </Link>
            <Link href="/services" onClick={handleNavLinkClick}>
              <li>Services</li>
            </Link>
            <Link href="/gallery" onClick={handleNavLinkClick}>
              <li>Gallery</li>
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
          <Link href="/">
            <Image src={hlogo} alt="" />
          </Link>
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
            <h1>Book your Christmas tree decor!</h1>
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
              <Link href="/About" style={{ color: "initial" }}>
                <p>About</p>
              </Link>
              <Link href="/services" style={{ color: "initial" }}>
                <p>Services</p>
              </Link>
              <Link href="/gallery" style={{ color: "initial" }}>
                <p>Gallery</p>
              </Link>
              <Link href="/faq" style={{ color: "initial" }}>
                <p>FAQ</p>
              </Link>
              <Link href="/contact" style={{ color: "initial" }}>
                <p>Contact</p>
              </Link>
              <Link href="/terms" style={{ color: "initial" }}>
                <p>Terms</p>
              </Link>
            </div>
            <div className="footer2 logo">
              <Image src={flogo} alt="" className="flogo" />
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
