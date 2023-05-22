import React from "react";
import Image from "next/image";
import AnimatedDiv from "../components/AnimatedDiv";
import g1 from "../public/assets/images/U&U_events/h3.jpeg";
import g2 from "../public/assets/images/U&U_events/h2.jpeg";
import g3 from "../public/assets/images/U&U_events/h1.jpeg";
import g4 from "../public/assets/images/U&U_events/v16.jpeg";
import g5 from "../public/assets/images/U&U_events/v3.jpeg";
import g6 from "../public/assets/images/U&U_events/v9.jpeg";
import g7 from "../public/assets/images/U&U_events/h9.jpeg";
import g8 from "../public/assets/images/U&U_events/h5.jpeg";
import g9 from "../public/assets/images/U&U_events/h4.jpeg";
import g10 from "../public/assets/images/U&U_events/v13.jpeg";
import g11 from "../public/assets/images/U&U_events/v7.jpeg";
import g12 from "../public/assets/images/U&U_events/v10.jpeg";

function Gallery() {
  return (
    <div className="aboutpage-container gallery">
      <div className="gallery-header">
        <h1>Gallery</h1>
      </div>

      <div className="gallery-body">
        <AnimatedDiv>
          <div className="container">
            <div className="tile">
              <Image src={g1} alt="" />
            </div>
            <div className="tile">
              <Image src={g2} alt="" />
            </div>
            <div className="tile">
              <Image src={g3} alt="" />
            </div>
            <div className="tile">
            <Image src={g4} alt="" />
            </div>
            <div className="tile">
            <Image src={g5} alt="" />
            </div>
            <div className="tile">
            <Image src={g6} alt="" />
            </div>
          </div>{" "}
        </AnimatedDiv>
        <br />
        <AnimatedDiv>
          <div className="container">
            <div className="tile">
            <Image src={g7} alt="" />
            </div>
            <div className="tile">
            <Image src={g8} alt="" />
            </div>
            <div className="tile">
            <Image src={g9} alt="" />
            </div>
            <div className="tile">
            <Image src={g10} alt="" />
            </div>
            <div className="tile">
            <Image src={g11} alt="" />
            </div>
            <div className="tile">
            <Image src={g12} alt="" />
            </div>
          </div>
        </AnimatedDiv>
      </div>
      <div className="gallery-middle"></div>
    </div>
  );
}

export default Gallery;
