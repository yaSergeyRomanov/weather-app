import { Swiper, SwiperSlide } from "swiper/react";
import styles from "./Slider.module.scss";

const slides = [
  "/backgrounds/1.jpg",
  "/backgrounds/2.jpg",
  "/backgrounds/3.jpg",
  "/backgrounds/4.jpg",
];

export const Slider = () => {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const timeString = `${hours}:${minutes}`;
  let activeSlide = 0;

  switch (true) {
    case timeString >= "00:00" && timeString < "06:00":
      activeSlide = 0;
      break;
    case timeString >= "06:00" && timeString < "12:00":
      activeSlide = 1;
      break;
    case timeString >= "12:00" && timeString < "18:00":
      activeSlide = 2;
      break;
    case timeString >= "18:00":
      activeSlide = 3;
      break;
  }

  return (
    <Swiper
      className={styles.slider}
      spaceBetween={0}
      slidesPerView={1}
      onSwiper={(swiper) => swiper.slideTo(activeSlide)}
    >
      {slides &&
        Array.isArray(slides) &&
        slides.map((slide) => (
          <SwiperSlide className={styles.slideItem}>
            <img src={slide} alt="" />
          </SwiperSlide>
        ))}
    </Swiper>
  );
};
