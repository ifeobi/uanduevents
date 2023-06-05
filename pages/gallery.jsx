import React from "react";
import Image from "next/image";
import AnimatedDiv from "../components/AnimatedDiv";
import g1 from "../public/assets/images/U&U_events/h3.jpg";
import g2 from "../public/assets/images/U&U_events/h14.webp";
import g3 from "../public/assets/images/U&U_events/h15.webp";
import g4 from "../public/assets/images/U&U_events/v2.jpg";
import g5 from "../public/assets/images/U&U_events/v33.webp";
import g6 from "../public/assets/images/U&U_events/v4.jpg";
import g7 from "../public/assets/images/U&U_events/v28.webp";
import g8 from "../public/assets/images/U&U_events/v9.jpg";
import g9 from "../public/assets/images/U&U_events/v31.webp";
import g10 from "../public/assets/images/U&U_events/v8.jpg";
import g11 from "../public/assets/images/U&U_events/v7.jpg";
import g12 from "../public/assets/images/U&U_events/v10.jpg";
import g13 from "../public/assets/images/U&U_events/h5.jpg";
import g14 from "../public/assets/images/U&U_events/h9.jpg";
import g15 from "../public/assets/images/U&U_events/h4.jpg";
import g16 from "../public/assets/images/U&U_events/v6.jpg";
import g17 from "../public/assets/images/U&U_events/v29.webp";
import g18 from "../public/assets/images/U&U_events/v30.webp";
import g19 from "../public/assets/images/U&U_events/h13.webp";
import g20 from "../public/assets/images/U&U_events/h6.jpg";
import g21 from "../public/assets/images/U&U_events/h12.webp";
import g22 from "../public/assets/images/U&U_events/v25.jpg";
import g23 from "../public/assets/images/U&U_events/v26.jpg";
import g24 from "../public/assets/images/U&U_events/v24.jpg";

import LightGallery from "lightgallery/react";

// import styles
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";

// If you want you can use SCSS instead of css
import "lightgallery/scss/lightgallery.scss";
import "lightgallery/scss/lg-zoom.scss";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";
import Head from "next/head";

function Gallery() {
  return (
    <>
      <Head>
        <title>Gallery - U&U Designs</title>
      </Head>
      <div className="aboutpage-container gallery">
        <div className="gallery-header">
          <h1>Gallery</h1>
        </div>

        <div className="gallery-body">
          <div className="contain">
            <AnimatedDiv>
              <LightGallery
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
                elementClassNames="container"
              >
                <a
                  href="https://res.cloudinary.com/dhvpbewte/image/upload/v1685976149/h3_ihwlkb.webp"
                  className="tile"
                >
                  <Image src={g1} alt="" />
                </a>
                <a
                  href="https://res.cloudinary.com/dhvpbewte/image/upload/v1685976152/h14_nutqmg.webp"
                  className="tile"
                >
                  <Image src={g2} alt="" />
                </a>
                <a
                  href="https://res.cloudinary.com/dhvpbewte/image/upload/v1685976155/h15_nc7cjm.webp"
                  className="tile"
                >
                  <Image src={g3} alt="" />
                </a>
                <a
                  href="https://res.cloudinary.com/dhvpbewte/image/upload/v1685976149/v2_gnufni.webp"
                  className="tile"
                >
                  <Image src={g4} alt="" />
                </a>
                <a
                  href="https://res.cloudinary.com/dhvpbewte/image/upload/v1685976148/v33_klyydi.webp"
                  className="tile"
                >
                  <Image src={g5} alt="" />
                </a>
                <a
                  href="https://res.cloudinary.com/dhvpbewte/image/upload/v1685976158/v4_pkkvoh.webp"
                  className="tile"
                >
                  <Image src={g6} alt="" />
                </a>
              </LightGallery>
            </AnimatedDiv>
            <br />
            <AnimatedDiv>
              <LightGallery
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
                elementClassNames="container"
              >
                <a
                  href="https://res.cloudinary.com/dhvpbewte/image/upload/v1685976165/h5_holkmv.webp"
                  className="tile"
                >
                  <Image src={g13} alt="" />
                </a>
                <a
                  href="https://res.cloudinary.com/dhvpbewte/image/upload/v1685976152/h9_q23pbq.webp"
                  className="tile"
                >
                  <Image src={g14} alt="" />
                </a>
                <a
                  href="https://res.cloudinary.com/dhvpbewte/image/upload/v1685976149/h4_fzavhm.webp"
                  className="tile"
                >
                  <Image src={g15} alt="" />
                </a>
                <a
                  href="https://res.cloudinary.com/dhvpbewte/image/upload/v1685976157/v6_uittfk.webp"
                  className="tile"
                >
                  <Image src={g16} alt="" />
                </a>
                <a
                  href="https://res.cloudinary.com/dhvpbewte/image/upload/v1685977791/v29_z7ltvv.jpg"
                  className="tile"
                >
                  <Image src={g17} alt="" />
                </a>
                <a
                  href="https://res.cloudinary.com/dhvpbewte/image/upload/v1685976210/v30_x6dfpv.webp"
                  className="tile"
                >
                  <Image src={g18} alt="" />
                </a>
              </LightGallery>
            </AnimatedDiv>
            <br />
            <AnimatedDiv>
              <LightGallery
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
                elementClassNames="container"
              >
                <a
                  href="https://res.cloudinary.com/dhvpbewte/image/upload/v1685976579/v28_disjwd.webp"
                  className="tile ct"
                >
                  <Image src={g7} alt="" />
                </a>
                <a
                  href="https://res.cloudinary.com/dhvpbewte/image/upload/v1685976207/v9_zj21mf.webp"
                  className="tile ct"
                >
                  <Image src={g8} alt="" />
                </a>
                <a
                  href="https://res.cloudinary.com/dhvpbewte/image/upload/v1685976208/v31_hkjgnx.webp"
                  className="tile ct"
                >
                  <Image src={g9} alt="" />
                </a>
                <a
                  href="https://res.cloudinary.com/dhvpbewte/image/upload/v1685976166/v8_blg7ag.webp"
                  className="tile ct"
                >
                  <Image src={g10} alt="" />
                </a>
                <a
                  href="https://res.cloudinary.com/dhvpbewte/image/upload/v1685976158/v7_ise40a.webp"
                  className="tile ct"
                >
                  <Image src={g11} alt="" />
                </a>
                <a
                  href="https://res.cloudinary.com/dhvpbewte/image/upload/v1685976164/v10_vx5cbo.webp"
                  className="tile ct"
                >
                  <Image src={g12} alt="" />
                </a>
              </LightGallery>
            </AnimatedDiv>
            <br />
            <AnimatedDiv>
              <LightGallery
                speed={500}
                plugins={[lgThumbnail, lgZoom]}
                elementClassNames="container"
              >
                <a
                  href="https://res.cloudinary.com/dhvpbewte/image/upload/v1685976154/h13_spduva.webp"
                  className="tile"
                >
                  <Image src={g19} alt="" />
                </a>
                <a
                  href="https://res.cloudinary.com/dhvpbewte/image/upload/v1685976208/h6_rrnclf.webp"
                  className="tile"
                >
                  <Image src={g20} alt="" />
                </a>
                <a
                  href="https://res.cloudinary.com/dhvpbewte/image/upload/v1685976148/h12_i0ydnt.webp"
                  className="tile"
                >
                  <Image src={g21} alt="" />
                </a>
                <a
                  href="https://res.cloudinary.com/dhvpbewte/image/upload/v1685976166/v25_bqzqiy.webp"
                  className="tile"
                >
                  <Image src={g22} alt="" />
                </a>
                <a
                  href="https://res.cloudinary.com/dhvpbewte/image/upload/v1685976166/v26_qebzjd.webp"
                  className="tile"
                >
                  <Image src={g23} alt="" />
                </a>
                <a
                  href="https://res.cloudinary.com/dhvpbewte/image/upload/v1685976147/v24_fgu3ei.webp"
                  className="tile"
                >
                  <Image src={g24} alt="" />
                </a>
              </LightGallery>
            </AnimatedDiv>
          </div>
        </div>
        <div className="gallery-middle"></div>
      </div>
    </>
  );
}

export default Gallery;
