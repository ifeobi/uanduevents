import React, { useEffect } from "react";
import p1 from "../public/assets/images/1.jpg";
import p2 from "../public/assets/images/2.jpg";
import p3 from "../public/assets/images/3.jpg";
import a1 from "../public/assets/images/e1.jpg";
import s1 from "../public/assets/images/1.jpg";
import s2 from "../public/assets/images/ct1.jpg";
import r1 from "../public/assets/images/fondo.jpg";
import Image from "next/image";
import Testimonial from "../components/Testimonial";
import { Link } from "@mui/material";
import AnimatedDiv from "../components/AnimatedDiv";

function addHoverClass(element) {
  const handleMouseEnter = () => {
    element.classList.add("active");
  };

  const handleMouseLeave = () => {
    element.classList.remove("active");
  };

  element.addEventListener("mouseenter", handleMouseEnter);
  element.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    element.removeEventListener("mouseenter", handleMouseEnter);
    element.removeEventListener("mouseleave", handleMouseLeave);
  };
}

const Home = () => {
  useEffect(() => {
    const overlayA = document.querySelector(".intro-img.a");
    const overlayB = document.querySelector(".intro-img.b");
    const overlayC = document.querySelector(".intro-img.c");

    if (overlayA) {
      addHoverClass(overlayA);
    }

    if (overlayB) {
      addHoverClass(overlayB);
    }

    if (overlayC) {
      addHoverClass(overlayC);
    }
  }, []);

  return (
    <main>
      <AnimatedDiv>
        <section className="intro-content">
          <div className="intro-img a">
            <Image src={p1} alt="" className="img a" />
            <div className="overlay a">
              <div className="caption">
                <h1 className="no">01</h1>
                <br />
                <h1 className="title">
                  DREAMS <br />
                  DO
                  <br /> COME TRUE
                </h1>
                <br />
                <p className="text">
                  Whatever your wildest dream might be, rest assured that we can
                  make it a reality; even if that might be having your own
                  unicorn for the day!
                </p>
              </div>
            </div>
          </div>

          <div className="intro-img b">
            <Image src={p2} alt="" className="img b" />
            <div className="overlay b">
              <div className="caption">
                <h1 className="no">02 </h1>
                <br />
                <h1 className="title">
                  CREATE
                  <br />
                  YOUR
                  <br /> BEST <br />
                  MEMORIES
                </h1>
                <br />
                <p className="text">
                  Every time you and your guests reminisce about your event (and
                  us!), we only want you to have the most magical memories; it
                  is a privilege for us to contribute to them!
                </p>
              </div>
            </div>
          </div>

          <div className="intro-img c responsive">
            <Image src={p3} alt="" className="img c" />
            <div className="overlay c">
              <div className="caption">
                <h1 className="no">03</h1>
                <br />
                <h1 className="title">
                  PUT THE <br />
                  BIGGEST SMILE
                  <br /> ON YOUR FACE
                </h1>
                <br />
                <p className="text">
                  Nothing beats seeing the broadest of smiles on your face when
                  you discover your event for the first time: your satisfaction
                  will always come first!
                </p>
              </div>
            </div>
          </div>
        </section>
      </AnimatedDiv>

      <AnimatedDiv>
        <section className="about">
          <div className="content">
            <Image src={a1} alt="Ugochi Obijiofor" />
            <div className="text">
              <h1>U&U designs</h1>
              <h5>Event Planning & Styling</h5>
              <p>
                U&U Designs provides you with an unmatched luxury experience
                that you deserve. We cater to you our clients with full service
                event planning, styling, and Christmas tree deocration.
              </p>
              <Link href="/about" className="btn">
                Read more
              </Link>
            </div>
          </div>
        </section>
      </AnimatedDiv>

      <section className="service">
        <AnimatedDiv>
          <div className="service-content">
            <h1>What we do</h1>
            <p>
              Event Planning, Luxurious Home Styling and Christmas Tree Decor{" "}
            </p>
          </div>
        </AnimatedDiv>

        <AnimatedDiv>
          <div className="service-box">
            <div className="servicebox1"></div>
            <div className="servicebox2 a">
              <Image src={s1} fill objectFit="cover" />
              <div className="servicebox event">
                <h2>Event Planning</h2>
              </div>
            </div>
            <div className="servicebox2 b">
              <Image src={s2} fill objectFit="cover" />
              <div className="servicebox ct">
                <h2>Christmas Tree Decor</h2>
              </div>
            </div>
            <div className="servicebox1"></div>
          </div>
        </AnimatedDiv>
      </section>

      <AnimatedDiv>
        <section className="reviews-container">
          <div className="reviews-boxx">
          <Image src={r1} fill objectFit="cover"/>
            <div className="reviews-box box">
              <Testimonial />
            </div>
          </div>
        </section>
      </AnimatedDiv>
    </main>
  );
};

export default Home;
