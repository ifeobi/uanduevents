import React, { useEffect } from "react";
import p1 from "../public/assets/images/U&U_events/h8.jpg";
import p2 from "../public/assets/images/U&U_events/v2.jpg";
import p3 from "../public/assets/images/U&U_events/v13.jpg";
import a1 from "../public/assets/images/about1.png";
import s1 from "../public/assets/images/U&U_events/v3.jpg";
import s2 from "../public/assets/images/U&U_events/v12.jpg";
import r1 from "../public/assets/images/U&U_events/h7-edit.jpg";
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
          </div>

          <div className="intro-img b">
            <Image src={p2} alt="" className="img b" />
          </div>

          <div className="intro-img c responsive">
            <Image src={p3} alt="" className="img c" />
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
              Event Planning, Styling and Christmas Tree Decor{" "}
            </p>
          </div>
        </AnimatedDiv>

        <AnimatedDiv>
          <div className="service-box">
            <div className="servicebox1"></div>
            <div className="servicebox2 a">
              <Image src={s1} fill />
              <div className="servicebox event">
                <h2>Event Planning</h2>
              </div>
            </div>
            <div className="servicebox2 b">
              <Image src={s2} fill />
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
            <Image src={r1} fill />
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
