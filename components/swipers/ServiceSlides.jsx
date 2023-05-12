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
import s1 from "../../public/assets/images/service1.jpg";
import s2 from "../../public/assets/images/service2.jpg";
import s3 from "../../public/assets/images/service3.jpg";
import s4 from "../../public/assets/images/service4.jpg";

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
    </Swiper>
  );
}

export default ServiceSlides;
