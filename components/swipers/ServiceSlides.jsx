import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, A11y, Autoplay } from "swiper";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";
import Image from "next/image";
import s1 from "../../public/assets/images/U&U_events/h16.webp";
import s2 from "../../public/assets/images/U&U_events/h1.jpg";
import s3 from "../../public/assets/images/U&U_events/h10.webp";
import s4 from "../../public/assets/images/U&U_events/h11.webp";
import s5 from "../../public/assets/images/U&U_events/v32.webp";
import s6 from "../../public/assets/images/U&U_events/merged-ev.webp";
import s7 from "../../public/assets/images/U&U_events/v27.webp";
import s8 from "../../public/assets/images/U&U_events/v29.webp";
import s9 from "../../public/assets/images/U&U_events/merged-ct.webp";
import s10 from "../../public/assets/images/U&U_events/merged-ct2.webp";

function ServiceSlides() {
  return (
    <Swiper
      autoplay
      loop
      modules={[Navigation, A11y, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      slidesPerView={1}
    >
      <SwiperSlide>
        <Image src={s1} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={s2} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={s3} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={s4} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={s5} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={s6} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={s7} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={s8} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={s9} />
      </SwiperSlide>
      <SwiperSlide>
        <Image src={s10} />
      </SwiperSlide>
    </Swiper>
  );
}

export default ServiceSlides;
