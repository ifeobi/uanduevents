import React from "react";
import Image from "next/image";
import AnimatedDiv from "../components/AnimatedDiv";

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
              <img src="http://via.placeholder.com/800x600/C72B41/800834" />
            </div>
            <div className="tile">
              <img src="http://via.placeholder.com/800x600/C72B41/800834" />
            </div>
            <div className="tile">
              <img src="http://via.placeholder.com/800x600/C72B41/800834" />
            </div>
            <div className="tile">
              <img src="http://via.placeholder.com/800x600/C72B41/800834" />
            </div>
            <div className="tile">
              <img src="http://via.placeholder.com/800x600/C72B41/800834" />
            </div>
          </div>{" "}
        </AnimatedDiv>
        <br />
        <AnimatedDiv>
          <div className="container">
            <div className="tile">
              <img src="http://via.placeholder.com/800x600/C72B41/800834" />
            </div>
            <div className="tile">
              <img src="http://via.placeholder.com/800x600/C72B41/800834" />
            </div>
            <div className="tile">
              <img src="http://via.placeholder.com/800x600/C72B41/800834" />
            </div>
            <div className="tile">
              <img src="http://via.placeholder.com/800x600/C72B41/800834" />
            </div>
            <div className="tile">
              <img src="http://via.placeholder.com/800x600/C72B41/800834" />
            </div>
          </div>
        </AnimatedDiv>
      </div>
      <div className="gallery-middle"></div>
    </div>
  );
}

export default Gallery;
