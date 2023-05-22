import React from "react";
import Image from "next/image";
import AnimatedDiv from "../components/AnimatedDiv";
import g1 from "../public/assets/images/U&U_events/h3.jpg";
import g2 from "../public/assets/images/U&U_events/h2.jpg";
import g3 from "../public/assets/images/U&U_events/h1.jpg";
import g4 from "../public/assets/images/U&U_events/v16.jpg";
import g5 from "../public/assets/images/U&U_events/v3.jpg";
import g6 from "../public/assets/images/U&U_events/v9.jpg";
import g7 from "../public/assets/images/U&U_events/h9.jpg";
import g8 from "../public/assets/images/U&U_events/h5.jpg";
import g9 from "../public/assets/images/U&U_events/h4.jpg";
import g10 from "../public/assets/images/U&U_events/v13.jpg";
import g11 from "../public/assets/images/U&U_events/v7.jpg";
import g12 from "../public/assets/images/U&U_events/v10.jpg";

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
